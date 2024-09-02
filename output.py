#2024-09-02 12:51:10

import os
import random
import requests
import time

accounts = os.getenv("xpnc", "").splitlines()
print("☞☞☞ 兴攀农场每日签到 ☜☜☜")


def handle(headers):
    try:
        types = [1, 2, 3]
        for type in types:
            getTasks(headers, type)
        addWaterFertilizer(headers)
    except requests.RequestException as e:
        print(f"{note.strip()}：响应 {e}")


def getTasks(headers, type):
    url = "https://p.xpfarm.cn/treemp/tree.Tasks/getTasks"
    params = {"type": type}
    try:
        response = requests.post(url, headers=headers, params=params)
        print(f"获取{note.strip()}任务列表")
        resJson = response.json()
        if resJson['code'] != 1000:
            print(f"{note.strip()}：获取任务列表失败")
            raise Exception
        data = resJson['data']
        for task in data:
            if task['is_completed'] == 1:
                print(f"{note.strip()}：任务 {task['name']} 已完成")
                receiveTaskReward(headers, task)
                break
            elif task['work_type'] == 1:
                time.sleep(random.randint(20, 30))
                completeTask(headers, task)
            elif task['work_type'] == 2:
                time.sleep(random.randint(1, 3))
                completeTask(headers, task)
            elif task['work_type'] == 4:
                time.sleep(random.randint(1, 3))
                completeTask(headers, task)
            else:
                print(f"{note.strip()}：任务 {task['name']} 不支持")
    except requests.RequestException as e:
        print(f"{note.strip()}：响应 {e}")


def addWaterFertilizer(headers):
    homeData = getHomePage(headers)
    if homeData['water_value'] > 0:
        for i in range(1, 100):
            time.sleep(random.randint(2, 4))
            url = "https://p.xpfarm.cn/treemp/tree.Tasks/addWater"
            try:
                response = requests.post(url, headers=headers)
                print(f"{note.strip()} 第 {i} 次浇水")
                resJson = response.json()
                if resJson['code'] != 1000:
                    print(f"{note.strip()}：{resJson['message']}")
                    break
            except requests.RequestException as e:
                print(f"{note.strip()}：响应 {e}")
    if homeData['fertilizer'] > 0:
        for i in range(1, 100):
            time.sleep(random.randint(2, 4))
            url = "https://p.xpfarm.cn/treemp/tree.Tasks/addFertilizer"
            try:
                response = requests.post(url, headers=headers)
                print(f"{note.strip()} 第 {i} 次施肥")
                resJson = response.json()
                if resJson['code'] != 1000:
                    print(f"{note.strip()}：{resJson['message']}")
                    break
            except requests.RequestException as e:
                print(f"{note.strip()}：响应 {e}")
    if homeData['integral'] >= 0:
        print(f"{note.strip()}：当前积分 {homeData['integral']}")


def getHomePage(headers):
    url = "https://p.xpfarm.cn/treemp/tree.Tasks/getHomePage"
    params = {
    }
    try:
        response = requests.post(url, headers=headers, params=params)
        print(f"{note.strip()} 获取个人信息")
        resJson = response.json()
        if resJson['code'] != 1000:
            raise Exception
        return resJson['data']
    except requests.RequestException as e:
        print(f"{note.strip()}：响应 {e}")


def completeTask(headers, task):
    url = "https://p.xpfarm.cn/treemp/tree.Tasks/completeTask"
    params = {"task_id": task['id']}
    try:
        response = requests.post(url, headers=headers, params=params)
        resJson = response.json()
        if resJson['code'] == 1000:
            print(f"{note.strip()}：{task['name']} 完成")
            receiveTaskReward(headers, task)
        else:
            print(f"{note.strip()}：{task['name']} {resJson['message']}")
    except requests.RequestException as e:
        print(f"{note.strip()}：{task['name']}响应 {e}")


def receiveTaskReward(headers, task):
    url = "https://p.xpfarm.cn/treemp/tree.Tasks/receiveTaskReward"
    params = {"task_id": task['id']}
    try:
        response = requests.post(url, headers=headers, params=params)
        resJson = response.json()
        print(resJson)
        if resJson['code'] == 1000:
            reward = resJson['data']['reward'][0]
            print(f"{note.strip()}：任务 {task['name']} 领取{reward['reward_type_name']}-{reward['reward']}")
        else:
            print(f"{note.strip()}：任务 {task['name']} {resJson['message']}")
    except requests.RequestException as e:
        print(f"{note.strip()}：{task['name']}响应 {e}")


if not accounts:
    print("未找到任何账号信息。")
else:
    for account in accounts:
        if not account.strip():
            continue
        try:
            token, note = account.split("#")
        except ValueError:
            print(f"格式错误: {account}")
            continue

        url = "https://p.xpfarm.cn/treemp/user.PersonalCenter/addSignIn"
        headers = {
            'User-Agent': "Mozilla/5.0 (Linux; Android 10; Mobile Safari/537.36)",
            'Accept-Encoding': "gzip, deflate, br",
            'Content-Type': "application/json",
            'authorization': token.strip()
        }
        try:
            response = requests.post(url, headers=headers)
            print(f"{note.strip()}：响应 {response.text}")
            resJson = response.json()
            if resJson['code'] == 1000:
                print(f"{note.strip()}：签到成功，获得积分 {resJson['data']['reward']['integral']}")
            else:
                print(f"{note.strip()}：响应 {resJson['message']}")
            handle(headers)
        except requests.RequestException as e:
            print(f"{note.strip()}：请求失败 - {e}")
