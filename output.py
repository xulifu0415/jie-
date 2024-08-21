#2024-08-21 03:34:39

import requests
import time
import random
import threading
import string
import os

def random_str():
    characters = string.ascii_letters + string.digits
    random_string = ''.join(random.choice(characters) for _ in range(32))
    return random_string

class qmzy():
    def __init__(self,userid) -> None:
        self.uid = userid.split('#')[0]
        self.device = userid.split('#')[1]
        self.headers = {
            "Accept-Encoding": "gzip,deflate",
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 11; Redmi K30i 5G Build/RKQ1.200826.002)",
            "Host": "app.livelive.com.cn",
            "Connection": "Keep-Alive"
        }

    def signin(self):
        url = "http://app.livelive.com.cn/api/v10/task_achievements_get"
        params = {
            "udid": self.uid,
            "device_id": random_str(),
            "index": "0"
        }
        response = requests.get(url, headers=self.headers, params=params)
        if 'SUCCESS' in response.json().get('message'):
            print("观看成功")
            time.sleep(random.randint(10,15))
            self.signin()
        else:
            print(f"观看失败：{response.json().get('message')}")

    def task_info(self):
        url = 'http://app.livelive.com.cn/api/v10/task_achievements'
        params = {
            "udid": self.uid,
            "device_id": random_str()
        }
        response = requests.get(url, headers=self.headers, params=params)
        print(response.json())
        if 'SUCCESS' in response.json().get('message'):
            complete = response.json().get('data')[0].get('complete')
            max_task = response.json().get('data')[0].get('max')
            if complete < max_task:
                self.signin()
            else:
                print('今日任务已完成')
    
    def get_reward(self):
        url = 'http://app.livelive.com.cn/api/v10/build_get'
        params = {
            "udid": self.uid,
            "device_id": random_str(),
            "did": self.did
        }
        response = requests.get(url, headers=self.headers, params=params)
        if 'SUCCESS' in response.json().get('message'):
            print("领取成功")
        else:
            print(f"领取失败：{response.json().get('message')}")

    def get_did(self):
        url = 'http://app.livelive.com.cn/api/v10/build_data'
        params = {
            "udid": self.uid,
            "device_id": random_str(),
            "mapIndex": "1"
        }
        response = requests.get(url, headers=self.headers, params=params)
        if 'SUCCESS' in response.json().get('message'):
            for did in response.json().get('data'):
                self.did = did.get('did')
                self.get_reward()
        else:
            print(f"获取店铺失败：{response.json().get('message')}")
    
    def bean(self):
        url = 'http://app.livelive.com.cn/api/v10/forging_bean'
        params = {
            "udid": self.uid,
            "device_id": random_str(),
            "type": "1"
        }
        response = requests.get(url, headers=self.headers, params=params)
        if 'SUCCESS' in response.json().get('message'):
            print('锻造金豆成功')
        else:
            print('锻造金豆失败')

    def user_info(self):
        url = 'http://app.livelive.com.cn/api/v10/user_info'
        params = {
            "udid": self.uid,
            "device_id": random_str(),
        }
        response = requests.get(url, headers=self.headers, params=params)
        if 'SUCCESS' in response.json().get('message'):
            jinbi = float(response.json().get('data').get('virtual_assets1'))
            jindou = float(response.json().get('data').get('virtual_assets2'))
            print(f"账户：\n金币：{jinbi}\n金豆{jindou}")
            if jinbi >= 10:
                for num in range(int(jinbi / 10)):
                    self.bean()
        else:
            print(f"领取失败：{response.json().get('message')}")

    def main(self):
        self.task_info()
        time.sleep(2)
        self.get_did()
        self.user_info()


if __name__ == "__main__":
    userid = os.getenv('qmzy_uid')
    if not userid:
        print('请检查环境变量qmzy_uid')
        exit()
    userids = userid.split('@')
    print(f'共有{len(userids)}个账号')
    if thread_TF:
        print('多线程已开启')
        threads = []
        for i,userid in enumerate(userids):
            print(f'----------开始第{i+1}个账号----------')
            main = qmzy(userid)
            thread = threading.Thread(target=main.main)
            threads.append(thread)
            thread.start()
        for t in threads:
            t.join()
    else:
        print('多线程已关闭')
        for i,userid in enumerate(userids):
            print(f'----------开始第{i+1}个账号----------')
            main = qmzy(userid)
            main.main()
            print(f'----------结束第{i+1}个账号----------')
            time.sleep(10)
