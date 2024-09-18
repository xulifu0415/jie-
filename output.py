#2024-09-18 14:21:35

import requests
import time
import random
import hashlib
import os
import string
import threading


class yunji():
    def __init__(self,userid) -> None:
        self.token = userid.split('#')[0]
        self.code = userid.split('#')[1]

    def generate_random_string(self):
        characters = string.ascii_letters + string.digits
        return ''.join(random.choice(characters) for _ in range(16))

    def hash(self,message):
        md5 = hashlib.md5()
        md5.update(message.encode('utf-8'))
        message1 = md5.hexdigest()+'bd10b31d-9877-43ae-8f12-de08926987aa'
        sha1 = hashlib.sha1()
        sha1.update(message1.encode('utf-8'))
        sha1 = sha1.hexdigest()
        return sha1

    def listen_complete(self):
        t = int(time.time()*1000)
        nonce = self.generate_random_string()
        message = f"{t}{nonce}bd10b31d-9877-43ae-8f12-de08926987aa"
        sha1 = self.hash(message)
        headers = {
            "sign": sha1,
            "source": "APP_QZ_MUSIC",
            "nonce": nonce,
            "userCode": self.code,
            "token": self.token,
            "timestamp": str(t),
            "user-agent": "Mozilla/5.0 (Linux; Android 11; Redmi K30i 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.545456)",
            "Content-Type": "application/json",
            "Host": "gateway.rehuocm.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip"
        }
        url = "https://gateway.rehuocm.com/integral-service/user/account/xjt/v1.0/report"
        data = {
            "userCode": self.code,
            "end": t
        }
        response = requests.post(url, headers=headers, json=data)
        if response.json().get('code') == 200:
            print(f"听歌成功，余额：{response.json().get('data').get('accountBalance')}")
        else:
            print(f"听歌失败：{response.json().get('msg')}")
        
    
    def signin(self):
        t = int(time.time()*1000)
        nonce = self.generate_random_string()
        message = f"{t}{nonce}bd10b31d-9877-43ae-8f12-de08926987aa"
        sha1 = self.hash(message)
        headers = {
            "sign": sha1,
            "source": "APP_QZ_MUSIC",
            "nonce": nonce,
            "userCode": self.code,
            "token": self.token,
            "timestamp": str(t),
            "user-agent": "Mozilla/5.0 (Linux; Android 11; Redmi K30i 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.545456)",
            "Content-Type": "application/json",
            "Host": "gateway.rehuocm.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip"
        }
        url = "https://gateway.rehuocm.com/market-service/app/market/xjt/v1.0/sign"
        params = {
            "userCode": self.code
        }
        response = requests.get(url, headers=headers, params=params)
        if response.json().get('code') == 200:
            print('签到成功')
        else:
            print(f"签到失败：{response.json().get('msg')}")
    
    def money_info(self):
        t = int(time.time()*1000)
        nonce = self.generate_random_string()
        message = f"{t}{nonce}bd10b31d-9877-43ae-8f12-de08926987aa"
        sha1 = self.hash(message)
        headers = {
            "sign": sha1,
            "source": "APP_QZ_MUSIC",
            "nonce": nonce,
            "userCode": self.code,
            "token": self.token,
            "timestamp": str(t),
            "user-agent": "Mozilla/5.0 (Linux; Android 11; Redmi K30i 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.545456)",
            "Content-Type": "application/json",
            "Host": "gateway.rehuocm.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip"
        }
        url = "https://gateway.rehuocm.com/integral-service/user/account/xjt/v1.0/get"
        params = {
            "userCode": self.code
        }
        response = requests.get(url, headers=headers, params=params)
        if response.json().get('code') == 200:
            print(f"现金余额：{response.json().get('data').get('accountBalance')}")
            print(f"可提现：{response.json().get('data').get('transferLimit')}")
        else:
            print(f"查询失败：{response.json().get('msg')}")

    def main(self):
        self.signin()
        self.listen_complete()
        self.money_info()
    

if __name__ == "__main__":
    userid = os.getenv('qzyy_userid')
    if not userid:
        print('请检查环境变量qzyy_userid')
        exit()
    userids = userid.split('@')
    print(f'共有{len(userids)}个账号')
    if thread_TF:
        print('多线程已开启')
        threads = []
        for i,userid in enumerate(userids):
            print(f'----------开始第{i+1}个账号----------')
            main = yunji(userid)
            thread = threading.Thread(target=main.main)
            threads.append(thread)
            thread.start()
        for thread in threads:
            thread.join()
    else:
        for i,userid in enumerate(userids):
            print(f'----------开始第{i+1}个账号----------')
            main = yunji(userid)
            main.main()
            print(f'----------结束第{i+1}个账号----------')
            time.sleep(random.randint(10,15))
