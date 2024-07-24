#2024-07-24 01:19:20

import requests
import time
import random
import string
import hmac
import hashlib
import os

class ydd():
    def __init__(self,token) -> None:
        self.token = token.split('#')[1]
        self.device = token.split('#')[0]
        self.key = 'io0njH4yNYQfz6OQ3wiqFyJI0Zbtf5kpRuKW31Zw'
        self.vjmndsjt348iuryihfefn = {
            "Authorization": self.token,
            "X-Version-Code": "115",
            "X-Platform": "android",
            "X-System": "11",
            "X-Brand": "Redmi",
            "X-Device-ID": self.device,
            "X-Client-Id": "com.yangduoduomuchang.app",
            "distributor-key": "yangduoduo",
            "Content-Type": "application/json; charset=utf-8",
            "Content-Length": "153",
            "Host": "ydd.xingdouduanju.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/4.8.1"
        }
        self.vjmndsjt348iuryihfefn2 = {
            "Authorization": self.token,
            "X-Version-Code": "115",
            "X-Platform": "android",
            "X-System": "11",
            "X-Brand": "Redmi",
            "X-Device-ID": self.device,
            "X-Client-Id": "com.yangduoduomuchang.app",
            "distributor-key": "yangduoduo",
            "Host": "ydd.xingdouduanju.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/4.8.1"
        }
        self.sd5gv4156v16 = ['每日签到广告','额外金币任务','逛视频赚金币']
    
    def sc12v03d6fbv0(self):
        characters = string.ascii_lowercase + string.digits
        self.nonce = ''
        for _ in range(32):
            self.nonce += random.choice(characters)
    
    def v02v0vdr61wff(self,message):
        byte_key = self.key.encode('utf-8')
        byte_message = message.encode('utf-8')
        hmac_obj = hmac.new(byte_key, byte_message, hashlib.sha256)
        digest = hmac_obj.digest()
        self.sign = digest.hex()

    def kihk1g3j4tf(self):
        t = str(int(time.time()*1000))
        self.sc12v03d6fbv0()
        message = f"{self.device}&com.yangduoduomuchang.app&id1&nonce{self.nonce}&timestamp{t}"
        self.v02v0vdr61wff(message)
        url = "http://ydd.xingdouduanju.com/api/livestocks/purchase"
        data = {
            "timestamp": t,
            "nonce": self.nonce,
            "id": 1,
            "sign": self.sign
        }
        response = requests.post(url, headers=self.vjmndsjt348iuryihfefn, json=data)
        if response.json().get('code') == 200001:
            print('购买咩咩成功')
            # print(response.json())
        else:
            print(f"购买失败：{response.json().get('message')}")

    def v1g1321vr151x(self):
        url = "http://ydd.xingdouduanju.com/api/tasks?geoHash="
        
        response = requests.get(url, headers=self.vjmndsjt348iuryihfefn2)
        if response.json().get('code') == 200001:
            self.v1g1321vr151x = {}
            for tasks in response.json().get('data').get('tasks'):
                name = tasks.get('name')
                id = tasks.get('id')
                times = tasks.get('times')
                completedCount = tasks.get('completedCount')
                if name in self.sd5gv4156v16:
                    self.v1g1321vr151x[name] = [id,completedCount,times]
        else:
            print(f"获取任务列表失败：{response.json().get('message')}")


    def ht0h31h3th1d(self,key):
        t = str(int(time.time()*1000))
        self.sc12v03d6fbv0()
        message = f"{self.device}&com.yangduoduomuchang.app&donetrue&id{self.v1g1321vr151x[key][0]}&nonce{self.nonce}&timestamp{t}"
        self.v02v0vdr61wff(message)
        url = 'http://ydd.xingdouduanju.com/api/tasks/complete'
        data = {
            "timestamp": t,
            "nonce": self.nonce,
            "id": self.v1g1321vr151x[key][0],
            "done": True,
            "sign": self.sign
        }
        response = requests.post(url, headers=self.vjmndsjt348iuryihfefn, json=data)
        self.work_state = response.json().get('message')
        if response.json().get('code') == 200001:
            print(f"[{key}]任务完成，获得金币：{response.json().get('data').get('reward')}")
        else:
            print(f"[{key}]任务失败：{response.json().get('message')}")
            

    def u0k3j13ertg(self):
        t = str(int(time.time()*1000))
        self.sc12v03d6fbv0()
        message = f"{self.device}&com.yangduoduomuchang.app&hasWatchAdtrue&nonce{self.nonce}&timestamp{t}"
        self.v02v0vdr61wff(message)
        url = "http://ydd.xingdouduanju.com/api/ranch_livestocks/collect_all"
        data = {
            "timestamp":t,
            "nonce":self.nonce,
            "hasWatchAd":True,
            "sign":self.sign
        }
        response = requests.post(url, headers=self.vjmndsjt348iuryihfefn, json=data)
        if response.json().get('code') == 200001:
            print(f"咩毛成功收取：{response.json().get('data')}")
        else:
            print(f"咩毛收取失败：{response.json().get('message')}")

    def vrgyhherg3th1d(self):
        url = "http://ydd.xingdouduanju.com/api/ranch_livestocks/info"
        response = requests.get(url, headers=self.vjmndsjt348iuryihfefn2)
        if response.json().get('code') == 200001:
            self.balance = response.json().get('data').get('walletGold').get('balance')
            self.pendingLivestocks = response.json().get('data').get('pendingLivestocks')
        else:
            print(f"获取信息失败：{response.json()}")
    
    def main(self):
        print('==============开始任务：日常任务==============')
        self.v1g1321vr151x()
        for key in self.v1g1321vr151x:
            print(f"{key}：{self.v1g1321vr151x[key][1]}/{self.v1g1321vr151x[key][2]}")
            if '逛视频赚金币' == key:
                nums = 20
            else:
                nums = self.v1g1321vr151x[key][2] -self.v1g1321vr151x[key][1]
            if nums >= 1:
                for _ in range(nums):
                    self.ht0h31h3th1d(key)
                    time.sleep(random.randint(40,60))
                    if "今日任务已完成" in self.work_state:
                        break
        self.vrgyhherg3th1d()
        if float(self.balance) >= 1000:
            print('==============开始任务：购买咩咩==============')
            for i in range(int(float(self.balance)/1000)):
                self.kihk1g3j4tf()
                time.sleep(random.randint(8,13))
        if len(self.pendingLivestocks) > 0:
            print('==============开始任务：收取咩毛==============')
            self.u0k3j13ertg()


if __name__ in "__main__":
    token = os.getenv("ydd_token")
    if not token:
        print('请添加环境变量')
        exit()
    tokens = token.split('@')
    print(f'共有{len(tokens)}个账号')
    for i,token in enumerate(tokens):
        print(f'----------开始第{i+1}个账号----------')
        main = ydd(token)
        main.main()
        print(f'----------结束第{i+1}个账号----------')
        time.sleep(10)
