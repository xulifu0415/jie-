#2024-07-05 03:49:09
import requests #line:7
import json ,os #line:8
O0O0OOO0OOO0O0O00 ="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6945"#line:10
def O0OO0000OOOOO00O0 (OOOOO0O0O00000OOO ):#line:12
    O0OO00OO00O00OOOO =json .dumps ({"userId":OOOOO0O0O00000OOO .split ('#')[0 ],"appId":"wx52872495fb375c4b","openId":OOOOO0O0O00000OOO .split ('#')[1 ],"activId":"c0c4a0a3ef8145f49f2e294741a3cd62"})#line:18
    O0O000O0O0O000OOO ={'User-Agent':O0O0OOO0OOO0O0O00 ,'Content-Type':"application/json",'Origin':"https://ump.ems.com.cn",'Referer':"https://ump.ems.com.cn/signAct/index.html?activId=c0c4a0a3ef8145f49f2e294741a3cd62&openId=o-7675DwChhu-KquTEvlq-IhrWFY&timestamp=1720085085913&kensyou=670CE1D68D91CD663F6A91B69D28082F&sssUrl=VJ3Y3a&appId=wx52872495fb375c4b&unionId&platform=WECHAT&phone&grape&loaction&mcpLocation&exParam",}#line:24
    OOO00O0OOO0O000O0 =requests .post ("https://ump.ems.com.cn/activCenterApi/signActivInfo/sign",data =O0OO00OO00O00OOOO ,headers =O0O000O0O0O000OOO )#line:25
    OOO00O0OOO0O000O0 =json .loads (OOO00O0OOO0O000O0 .text )#line:26
    print (f'---------- 开始签到 ----------')#line:27
    if OOO00O0OOO0O000O0 ['code']==000000 :#line:28
        print (f'---------- 今日签到成功 ---------')#line:29
    else :#line:30
        print (f'----------',OOO00O0OOO0O000O0 ['msg'],'----------')#line:31
def OOOO0O0OOO00000O0 (OOOOOO0OO0000OO00 ):#line:32
    print (f'---------- 开始查询积分 ----------')#line:33
    OOOOO00O0OOOO00O0 =json .dumps ({})#line:34
    OO00OOOO000000000 ={'User-Agent':O0O0OOO0OOO0O0O00 ,'Content-Type':"application/json",'MC-TOKEN':OOOOOO0OO0000OO00 .split ('#')[2 ],'Referer':"https://servicewechat.com/wx52872495fb375c4b/48/page-frame.html"}#line:40
    O0O00O0O0000O0OOO =requests .post ("https://ump.ems.com.cn/memberCenterApiV2/golds/memberGoldsInfo",data =OOOOO00O0OOOO00O0 ,headers =OO00OOOO000000000 )#line:41
    O0O00O0O0000O0OOO =json .loads (O0O00O0O0000O0OOO .text )#line:42
    OOO000OO0OOOO0O0O =O0O00O0O0000O0OOO .get ('info',{})#line:43
    OOOO0OO000O0O0O0O =OOO000OO0OOOO0O0O .get ('availableGoldsTotal',{})#line:44
    print (f'----------当前积分：{OOOO0OO000O0O0O0O} 积分----------')#line:45
if __name__ =="__main__":#line:47
    OO000OOO00000000O =os .environ .get ('emsyhzx')#line:48
    if not OO000OOO00000000O :#line:49
        print ("\n===============================想什么呢，变量都没填，跑什么===============================")#line:50
    else :#line:51
        O00O0OOO0OOOOOOOO =OO000OOO00000000O .split ('\n')#line:52
        O000OOO0O0O000OOO =len (O00O0OOO0OOOOOOOO )#line:53
        for O000OOO0O0O000OOO ,OOOOO0OOOO0OO000O in enumerate (O00O0OOO0OOOOOOOO ,start =1 ):#line:54
            print (f"\n===============================开始执行第{O000OOO0O0O000OOO}个账号任务===============================")#line:55
            O0OO0000OOOOO00O0 (OOOOO0OOOO0OO000O )#line:56
            OOOO0O0OOO00000O0 (OOOOO0OOOO0OO000O )#line:57
