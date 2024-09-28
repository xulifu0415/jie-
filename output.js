//Sat Sep 28 2024 14:43:28 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("顺义创城任务"),
  axios = require("axios");
let request = require("request");
const fs = require("fs"),
  cheerio = require("cheerio"),
  {
    time,
    timeStamp
  } = require("console"),
  {
    start
  } = require("repl");
request = request.defaults({
  jar: true
});
const {
    log
  } = console,
  debug = 0;
let SYCC = ($.isNode() ? process.env.SYCC : $.getdata("SYCC")) || "",
  SYCCArr = [],
  data = "",
  msg = "";
const concurrency = 10,
  delayBetweenBatches = 5000;
async function runAccount(_0x551bdb, _0x4149da) {
  const _0x1c5935 = _0x551bdb.split(/&|#/),
    _0x449c55 = _0x1c5935[0];
  console.log("开始执行账号" + (_0x4149da + 1) + "：" + _0x551bdb);
  await work(_0x449c55);
  await new Promise(_0x21ea29 => setTimeout(_0x21ea29, 1000));
  console.log("账号" + (_0x4149da + 1) + " 执行完成");
}
async function runMultipleAccounts() {
  console.log("共找到 " + SYCCArr.length + " 个账号");
  const _0x1a8807 = Math.ceil(SYCCArr.length / concurrency);
  for (let _0x440814 = 0; _0x440814 < _0x1a8807; _0x440814++) {
    const _0x21d54e = SYCCArr.slice(_0x440814 * concurrency, (_0x440814 + 1) * concurrency);
    await Promise.all(_0x21d54e.map((_0x3fb006, _0x5b4989) => runAccount(_0x3fb006, _0x440814 * concurrency + _0x5b4989)));
    _0x440814 < _0x1a8807 - 1 && (console.log("延迟 " + delayBetweenBatches + " 毫秒后再执行下一批账号"), await new Promise(_0x3fb30a => setTimeout(_0x3fb30a, delayBetweenBatches)));
  }
  console.log("所有账号执行完成");
}
(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    if (!(await Envs())) {
      return;
    } else {
      log("\n\n=============================================脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + "=============================================\n");
      log("\n=================== 共找到 " + SYCCArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + SYCCArr);
      await runMultipleAccounts();
    }
    await SendMsg(msg);
  }
})().catch(_0x37c797 => log(_0x37c797)).finally(() => $.done());
async function work(_0xcfd2f8) {
  await Login(_0xcfd2f8);
  await stop();
  addscore(_0xcfd2f8);
  for (i = 0; i < 3; i++) {
    if (i == 0) {
      id = 3;
      uid = 12;
    }
    if (i == 1) {
      id = 5;
      uid = 16;
    }
    if (i == 2) {
      id = 10;
      uid = 17;
    }
    await addscore1(_0xcfd2f8, id, uid);
    await stop();
  }
  await addscore2(_0xcfd2f8);
  i = randomNum(3000, 6000);
  await stop();
  addscore3(_0xcfd2f8);
  await stop();
}
async function Login(_0x11cf9a) {
  return new Promise(_0x2b0562 => {
    var _0x56ed7f = {
      method: "POST",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/ccScoreRecord/signIn",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        "Content-Length": 2,
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0x11cf9a,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      },
      data: {}
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x56ed7f)));
    axios.request(_0x56ed7f).then(async function (_0x4000b9) {
      try {
        data = _0x4000b9.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x4000b9.data)));
        if (data.code == 200) {
          log("应该签到成功了吧");
        } else {
          if (data.message = "今日已签到") {
            return;
          } else {
            log(data.message);
          }
        }
      } catch (_0x3ab3f0) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x2f8510) {
      console.error(_0x2f8510);
    }).then(_0x1b7c79 => {
      _0x2b0562();
    });
  });
}
async function addscore(_0xd68b22) {
  return new Promise(_0x5c9f9f => {
    var _0x43cee0 = {
      method: "GET",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/addScore?score=1&type=15&time=0",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0xd68b22,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x43cee0)));
    axios.request(_0x43cee0).then(async function (_0x17a234) {
      try {
        data = _0x17a234.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x17a234.data)), log(data));
        if (data.code == 200) {
          log("应该获取点赞积分成功了吧");
        } else {
          log(data.message);
        }
      } catch (_0x381ad7) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x188d19) {
      console.error(_0x188d19);
    }).then(_0x4ff2ca => {
      _0x5c9f9f();
    });
  });
}
async function addscore1(_0x144022, _0x188abc, _0x22c61a) {
  return new Promise(_0x215507 => {
    var _0x10e2d6 = {
      method: "GET",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/addScore?score=" + _0x188abc + "&type=" + _0x22c61a,
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0x144022,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x10e2d6)));
    axios.request(_0x10e2d6).then(async function (_0x3622bb) {
      try {
        data = _0x3622bb.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3622bb.data)), log(data));
        if (data.code == 200) {
          log("应该获取消消卡积分成功了吧");
        } else {
          log(data.message);
        }
      } catch (_0x386f9b) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x25238c) {
      console.error(_0x25238c);
    }).then(_0x332b1f => {
      _0x215507();
    });
  });
}
async function addscore2(_0x41d015) {
  return new Promise(_0x126ba7 => {
    var _0x17b72b = {
      method: "GET",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/addScore?score=5&type=5&time=216695",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0x41d015,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x17b72b)));
    axios.request(_0x17b72b).then(async function (_0x58ca4a) {
      try {
        data = _0x58ca4a.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x58ca4a.data)), log(data));
        if (data.code == 200) {
          log("应该获取浏览积分成功了吧");
        } else {
          log(data.message);
        }
      } catch (_0x2670bf) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x51492a) {
      console.error(_0x51492a);
    }).then(_0x2452aa => {
      _0x126ba7();
    });
  });
}
async function addscore3(_0x2a40dd) {
  return new Promise(_0x3d43a5 => {
    var _0x54f5e5 = {
      method: "GET",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/addScore?score=1&type=14&time=0",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0x2a40dd,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x54f5e5)));
    axios.request(_0x54f5e5).then(async function (_0x1037e5) {
      try {
        data = _0x1037e5.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x1037e5.data)), log(data));
        if (data.code == 200) {
          log("假装分享朋友圈成功了吧");
        } else {
          log(data.message);
        }
      } catch (_0x3a1a2c) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x51d859) {
      console.error(_0x51d859);
    }).then(_0x438e15 => {
      _0x3d43a5();
    });
  });
}
async function userinfo() {
  return new Promise(_0x29619b => {
    var _0x4e72d8 = {
      method: "GET",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/userInfo",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": SYCC,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x4e72d8)));
    axios.request(_0x4e72d8).then(async function (_0x40a620) {
      try {
        data = _0x40a620.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x40a620.data)), log(data));
        if (data.code == 200) {
          addNotifyStr("\n账号" + num + "你的积分" + data.result.score + "\n", true);
          if (data.result.score > 200) {
            await exchangeAward();
          }
        } else {
          log(data.message);
        }
      } catch (_0x15e6a6) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x4a8abd) {
      console.error(_0x4a8abd);
    }).then(_0x1240e0 => {
      _0x29619b();
    });
  });
}
async function exchangeAward() {
  return new Promise(_0xe89d4a => {
    var _0x5d8177 = {
      method: "POST",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/award/exchangeAward",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        "Content-Length": 49,
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": SYCC,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      },
      data: {
        awardIds: ["1562334019131645953"],
        phone: null
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5d8177)));
    axios.request(_0x5d8177).then(async function (_0x84b172) {
      try {
        data = _0x84b172.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x84b172.data)), log(data));
        if (data.code == 200) {
          addNotifyStr("\n" + data.message + "\n", true);
        } else {
          if (data.code == 500) {
            addNotifyStr("\n" + data.message + "\n", true);
          } else {
            log(data.message);
          }
        }
      } catch (_0x20f169) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x4983a9) {
      console.error(_0x4983a9);
    }).then(_0x3789a5 => {
      _0xe89d4a();
    });
  });
}
async function exchangeAward5() {
  return new Promise(_0x2d8358 => {
    var _0x5d19ba = {
      method: "POST",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/award/exchangeAward",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        "Content-Length": 49,
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": SYCC,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      },
      data: {
        awardIds: ["1562334194059288577"],
        phone: null
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5d19ba)));
    axios.request(_0x5d19ba).then(async function (_0x36b994) {
      try {
        data = _0x36b994.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x36b994.data)), log(data));
        if (data.code == 200) {
          addNotifyStr("\n" + data.message + "\n", true);
        } else {
          if (data.code == 500) {
            addNotifyStr("\n" + data.message + "\n", true);
          } else {
            log(data.message);
          }
        }
      } catch (_0x4dc0fb) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0xa2483f) {
      console.error(_0xa2483f);
    }).then(_0x188523 => {
      _0x2d8358();
    });
  });
}
async function exchangeAward10() {
  return new Promise(_0x523513 => {
    var _0x3aac8f = {
      method: "POST",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/award/exchangeAward",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        "Content-Length": 49,
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": SYCC,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      },
      data: {
        awardIds: ["1562334281393086465"],
        phone: null
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x3aac8f)));
    axios.request(_0x3aac8f).then(async function (_0xe23890) {
      try {
        data = _0xe23890.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0xe23890.data)), log(data));
        if (data.code == 200) {
          addNotifyStr("\n" + data.message + "\n", true);
        } else {
          if (data.code == 500) {
            addNotifyStr("\n" + data.message + "\n", true);
          } else {
            log(data.message);
          }
        }
      } catch (_0x1dd5fd) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x49eb00) {
      console.error(_0x49eb00);
    }).then(_0x488585 => {
      _0x523513();
    });
  });
}
async function content() {
  return new Promise(_0x2fce2f => {
    var _0x327a9c = {
      method: "GET",
      url: "https://myplus-api.meizu.cn/myplus-qing/ug/forum/content/list/all?page=0&forumId=22&markId=0&orderBy=2",
      headers: {
        "APP-MODE": "1",
        "ANDROID-APP-VERSION_NAME": "6.0.1",
        "ANDROID-APP-VERSION-CODE": "50000024",
        "ANDROID-APP-CHANNEL": "meizu",
        Host: "myplus-api.meizu.cn",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        Cookie: SYCC
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x327a9c)));
    axios.request(_0x327a9c).then(async function (_0x8ffaa0) {
      try {
        data = _0x8ffaa0.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x8ffaa0.data)), log(data));
        if (data.code == 200) {
          log("应该获取点赞积分成功了吧");
        } else {
          log(data.message);
        }
      } catch (_0x59c959) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x3f6fdd) {
      console.error(_0x3f6fdd);
    }).then(_0x37d407 => {
      _0x2fce2f();
    });
  });
}
function randomNum(_0x448245, _0x1b1e83) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x448245 + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (_0x1b1e83 - _0x448245 + 1) + _0x448245, 10);
      break;
    default:
      return 0;
      break;
  }
}
function poem(_0x1fbf4a = 3000) {
  return new Promise(_0x4964d9 => {
    let _0x3744e0 = {
      url: "https://v1.jinrishici.com/all.json"
    };
    $.get(_0x3744e0, async (_0x937a8d, _0x8de7b2, _0x5c8e31) => {
      try {
        _0x5c8e31 = JSON.parse(_0x5c8e31);
        log(_0x5c8e31.content + "  \n————《" + _0x5c8e31.origin + "》" + _0x5c8e31.author);
      } catch (_0x11b9eb) {
        log(_0x11b9eb, _0x8de7b2);
      } finally {
        _0x4964d9();
      }
    }, _0x1fbf4a);
  });
}
async function report() {
  const _0x4a2ad0 = {
    method: "GET",
    url: "https://github.com/Poppypy/ql",
    headers: {},
    data: {},
    timeout: 5000
  };
  try {
    const _0x1fca1f = await axios(_0x4a2ad0),
      _0x4f98a5 = _0x1fca1f.data,
      _0x36ca57 = cheerio.load(_0x4f98a5),
      _0x166fc5 = _0x36ca57("p").eq(10).text(),
      _0x9bf194 = _0x36ca57("p").eq(11).text();
    log(_0x166fc5, _0x9bf194);
    fs.writeFileSync("response.html", _0x4f98a5);
  } catch (_0x5df1ff) {}
}
async function stop() {
  delay = randomNum(5000, 50000);
  log("随机延迟" + delay + "毫秒");
  await $.wait(delay);
}
async function Envs() {
  if (SYCC) {
    if (SYCC.indexOf("@") != -1) {
      SYCC.split("@").forEach(_0x21dcb7 => {
        SYCCArr.push(_0x21dcb7);
      });
    } else {
      SYCC.indexOf("\n") != -1 ? SYCC.split("\n").forEach(_0x4f949c => {
        SYCCArr.push(_0x4f949c);
      }) : SYCCArr.push(SYCC);
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 SYCC");
    return;
  }
  return true;
}
function addNotifyStr(_0x1aa80c, _0xa59ecb = true) {
  _0xa59ecb && log(_0x1aa80c + "\n");
  msg += _0x1aa80c + "\n";
}
async function SendMsg(_0x222124) {
  if (!_0x222124) {
    return;
  }
  if ($.isNode()) {
    var _0x5eb7b6 = require("./sendNotify");
    await _0x5eb7b6.sendNotify($.name, _0x222124);
  } else {
    $.msg(_0x222124);
  }
}
function randomString(_0x27ec4a) {
  for (var _0x35edc8 = _0x27ec4a > 0 && void 0 !== _0x27ec4a ? _0x27ec4a : 21, _0x5a9398 = ""; _0x5a9398.length < _0x35edc8;) {
    _0x5a9398 += Math.random().toString(36).slice(2);
  }
  return _0x5a9398.slice(0, _0x35edc8);
}
function Env(_0x4f880f, _0x38cddf) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x49d456 {
    constructor(_0x389038) {
      this.env = _0x389038;
    }
    send(_0x21a09e, _0x112dd6 = "GET") {
      _0x21a09e = "string" == typeof _0x21a09e ? {
        url: _0x21a09e
      } : _0x21a09e;
      let _0x280cff = this.get;
      "POST" === _0x112dd6 && (_0x280cff = this.post);
      return new Promise((_0x289401, _0xe8192d) => {
        _0x280cff.call(this, _0x21a09e, (_0x37104b, _0x5448cb, _0x4d622a) => {
          _0x37104b ? _0xe8192d(_0x37104b) : _0x289401(_0x5448cb);
        });
      });
    }
    get(_0x147d64) {
      return this.send.call(this.env, _0x147d64);
    }
    post(_0x4abc3f) {
      return this.send.call(this.env, _0x4abc3f, "POST");
    }
  }
  return new class {
    constructor(_0x1a7065, _0x40dea4) {
      this.name = _0x1a7065;
      this.http = new _0x49d456(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x40dea4);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x1b97a8, _0x4c4c28 = null) {
      try {
        return JSON.parse(_0x1b97a8);
      } catch {
        return _0x4c4c28;
      }
    }
    toStr(_0x4e30fd, _0x3e9388 = null) {
      try {
        return JSON.stringify(_0x4e30fd);
      } catch {
        return _0x3e9388;
      }
    }
    getjson(_0x3f3b72, _0x2c4932) {
      let _0x409401 = _0x2c4932;
      const _0x4adb1a = this.getdata(_0x3f3b72);
      if (_0x4adb1a) {
        try {
          _0x409401 = JSON.parse(this.getdata(_0x3f3b72));
        } catch {}
      }
      return _0x409401;
    }
    setjson(_0x2758a0, _0x92d0bc) {
      try {
        return this.setdata(JSON.stringify(_0x2758a0), _0x92d0bc);
      } catch {
        return !1;
      }
    }
    getScript(_0xf96a23) {
      return new Promise(_0x3a1e8c => {
        this.get({
          url: _0xf96a23
        }, (_0x1a70b3, _0x3c7f0e, _0x2ba894) => _0x3a1e8c(_0x2ba894));
      });
    }
    runScript(_0xcd8629, _0x28d1df) {
      return new Promise(_0x4f253f => {
        let _0x40747a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x40747a = _0x40747a ? _0x40747a.replace(/\n/g, "").trim() : _0x40747a;
        let _0x468d7e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x468d7e = _0x468d7e ? 1 * _0x468d7e : 20;
        _0x468d7e = _0x28d1df && _0x28d1df.timeout ? _0x28d1df.timeout : _0x468d7e;
        const [_0x419986, _0x32a18e] = _0x40747a.split("@"),
          _0x2c60cc = {
            url: "http://" + _0x32a18e + "/v1/scripting/evaluate",
            body: {
              script_text: _0xcd8629,
              mock_type: "cron",
              timeout: _0x468d7e
            },
            headers: {
              "X-Key": _0x419986,
              Accept: "*/*"
            }
          };
        this.post(_0x2c60cc, (_0x1d7450, _0x124961, _0x5ec912) => _0x4f253f(_0x5ec912));
      }).catch(_0x11af37 => this.logErr(_0x11af37));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x221c6c = this.path.resolve(this.dataFile),
          _0x5048b5 = this.path.resolve(process.cwd(), this.dataFile),
          _0x1c3016 = this.fs.existsSync(_0x221c6c),
          _0x1b758a = !_0x1c3016 && this.fs.existsSync(_0x5048b5);
        if (!_0x1c3016 && !_0x1b758a) {
          return {};
        }
        {
          const _0x2eef19 = _0x1c3016 ? _0x221c6c : _0x5048b5;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2eef19));
          } catch (_0x1807fe) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x32fbaf = this.path.resolve(this.dataFile),
          _0x401a9b = this.path.resolve(process.cwd(), this.dataFile),
          _0x3eded2 = this.fs.existsSync(_0x32fbaf),
          _0x621ae9 = !_0x3eded2 && this.fs.existsSync(_0x401a9b),
          _0x815f4f = JSON.stringify(this.data);
        _0x3eded2 ? this.fs.writeFileSync(_0x32fbaf, _0x815f4f) : _0x621ae9 ? this.fs.writeFileSync(_0x401a9b, _0x815f4f) : this.fs.writeFileSync(_0x32fbaf, _0x815f4f);
      }
    }
    lodash_get(_0x46dee8, _0x289192, _0x249c35) {
      const _0x4ec006 = _0x289192.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x114daf = _0x46dee8;
      for (const _0x4b07ab of _0x4ec006) if (_0x114daf = Object(_0x114daf)[_0x4b07ab], void 0 === _0x114daf) {
        return _0x249c35;
      }
      return _0x114daf;
    }
    lodash_set(_0x31bd2c, _0x4a318b, _0x4d0cce) {
      return Object(_0x31bd2c) !== _0x31bd2c ? _0x31bd2c : (Array.isArray(_0x4a318b) || (_0x4a318b = _0x4a318b.toString().match(/[^.[\]]+/g) || []), _0x4a318b.slice(0, -1).reduce((_0x1621ed, _0x5a992a, _0x4b88ce) => Object(_0x1621ed[_0x5a992a]) === _0x1621ed[_0x5a992a] ? _0x1621ed[_0x5a992a] : _0x1621ed[_0x5a992a] = Math.abs(_0x4a318b[_0x4b88ce + 1]) >> 0 == +_0x4a318b[_0x4b88ce + 1] ? [] : {}, _0x31bd2c)[_0x4a318b[_0x4a318b.length - 1]] = _0x4d0cce, _0x31bd2c);
    }
    getdata(_0x493cb5) {
      let _0x50b302 = this.getval(_0x493cb5);
      if (/^@/.test(_0x493cb5)) {
        const [, _0x598947, _0xd58597] = /^@(.*?)\.(.*?)$/.exec(_0x493cb5),
          _0x28ba55 = _0x598947 ? this.getval(_0x598947) : "";
        if (_0x28ba55) {
          try {
            const _0x50d9d5 = JSON.parse(_0x28ba55);
            _0x50b302 = _0x50d9d5 ? this.lodash_get(_0x50d9d5, _0xd58597, "") : _0x50b302;
          } catch (_0xa60832) {
            _0x50b302 = "";
          }
        }
      }
      return _0x50b302;
    }
    setdata(_0x4dc3b6, _0xffd71e) {
      let _0x30fef1 = !1;
      if (/^@/.test(_0xffd71e)) {
        const [, _0x1b8157, _0x2bac5a] = /^@(.*?)\.(.*?)$/.exec(_0xffd71e),
          _0x52a39b = this.getval(_0x1b8157),
          _0x1c957a = _0x1b8157 ? "null" === _0x52a39b ? null : _0x52a39b || "{}" : "{}";
        try {
          const _0x1d82d9 = JSON.parse(_0x1c957a);
          this.lodash_set(_0x1d82d9, _0x2bac5a, _0x4dc3b6);
          _0x30fef1 = this.setval(JSON.stringify(_0x1d82d9), _0x1b8157);
        } catch (_0xbc3b2a) {
          const _0x5933c0 = {};
          this.lodash_set(_0x5933c0, _0x2bac5a, _0x4dc3b6);
          _0x30fef1 = this.setval(JSON.stringify(_0x5933c0), _0x1b8157);
        }
      } else {
        _0x30fef1 = this.setval(_0x4dc3b6, _0xffd71e);
      }
      return _0x30fef1;
    }
    getval(_0x363099) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x363099) : this.isQuanX() ? $prefs.valueForKey(_0x363099) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x363099]) : this.data && this.data[_0x363099] || null;
    }
    setval(_0x19bb3d, _0x5863da) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x19bb3d, _0x5863da) : this.isQuanX() ? $prefs.setValueForKey(_0x19bb3d, _0x5863da) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5863da] = _0x19bb3d, this.writedata(), !0) : this.data && this.data[_0x5863da] || null;
    }
    initGotEnv(_0x2982b0) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x2982b0 && (_0x2982b0.headers = _0x2982b0.headers ? _0x2982b0.headers : {}, void 0 === _0x2982b0.headers.Cookie && void 0 === _0x2982b0.cookieJar && (_0x2982b0.cookieJar = this.ckjar));
    }
    get(_0x3b4b74, _0x25d41c = () => {}) {
      _0x3b4b74.headers && (delete _0x3b4b74.headers["Content-Type"], delete _0x3b4b74.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x3b4b74.headers = _0x3b4b74.headers || {}, Object.assign(_0x3b4b74.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x3b4b74, (_0x490a31, _0x599e9b, _0x3ae67f) => {
        !_0x490a31 && _0x599e9b && (_0x599e9b.body = _0x3ae67f, _0x599e9b.statusCode = _0x599e9b.status);
        _0x25d41c(_0x490a31, _0x599e9b, _0x3ae67f);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x3b4b74.opts = _0x3b4b74.opts || {}, Object.assign(_0x3b4b74.opts, {
        hints: !1
      })), $task.fetch(_0x3b4b74).then(_0x291405 => {
        const {
          statusCode: _0x172ab6,
          statusCode: _0x419a9d,
          headers: _0x301868,
          body: _0x17ea68
        } = _0x291405;
        _0x25d41c(null, {
          status: _0x172ab6,
          statusCode: _0x419a9d,
          headers: _0x301868,
          body: _0x17ea68
        }, _0x17ea68);
      }, _0x17a518 => _0x25d41c(_0x17a518))) : this.isNode() && (this.initGotEnv(_0x3b4b74), this.got(_0x3b4b74).on("redirect", (_0x331cd3, _0x580e5f) => {
        try {
          if (_0x331cd3.headers["set-cookie"]) {
            const _0x433b64 = _0x331cd3.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x433b64 && this.ckjar.setCookieSync(_0x433b64, null);
            _0x580e5f.cookieJar = this.ckjar;
          }
        } catch (_0x56101b) {
          this.logErr(_0x56101b);
        }
      }).then(_0x2baf7f => {
        const {
          statusCode: _0x37882b,
          statusCode: _0x2739d8,
          headers: _0x14f28e,
          body: _0x158784
        } = _0x2baf7f;
        _0x25d41c(null, {
          status: _0x37882b,
          statusCode: _0x2739d8,
          headers: _0x14f28e,
          body: _0x158784
        }, _0x158784);
      }, _0xdd4c2b => {
        const {
          message: _0x5d1ac1,
          response: _0x3d6d01
        } = _0xdd4c2b;
        _0x25d41c(_0x5d1ac1, _0x3d6d01, _0x3d6d01 && _0x3d6d01.body);
      }));
    }
    post(_0xfef1f1, _0x579913 = () => {}) {
      if (_0xfef1f1.body && _0xfef1f1.headers && !_0xfef1f1.headers["Content-Type"] && (_0xfef1f1.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0xfef1f1.headers && delete _0xfef1f1.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0xfef1f1.headers = _0xfef1f1.headers || {}, Object.assign(_0xfef1f1.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0xfef1f1, (_0x328e78, _0x49aa78, _0xd44b4c) => {
          !_0x328e78 && _0x49aa78 && (_0x49aa78.body = _0xd44b4c, _0x49aa78.statusCode = _0x49aa78.status);
          _0x579913(_0x328e78, _0x49aa78, _0xd44b4c);
        });
      } else {
        if (this.isQuanX()) {
          _0xfef1f1.method = "POST";
          this.isNeedRewrite && (_0xfef1f1.opts = _0xfef1f1.opts || {}, Object.assign(_0xfef1f1.opts, {
            hints: !1
          }));
          $task.fetch(_0xfef1f1).then(_0x43b38b => {
            const {
              statusCode: _0x393a71,
              statusCode: _0x18835e,
              headers: _0x3d11a6,
              body: _0x35d1f8
            } = _0x43b38b;
            _0x579913(null, {
              status: _0x393a71,
              statusCode: _0x18835e,
              headers: _0x3d11a6,
              body: _0x35d1f8
            }, _0x35d1f8);
          }, _0x4bf573 => _0x579913(_0x4bf573));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xfef1f1);
            const {
              url: _0x4d947a,
              ..._0x406e46
            } = _0xfef1f1;
            this.got.post(_0x4d947a, _0x406e46).then(_0x53de50 => {
              const {
                statusCode: _0x5882f6,
                statusCode: _0x337c05,
                headers: _0x3ae880,
                body: _0x52e732
              } = _0x53de50;
              _0x579913(null, {
                status: _0x5882f6,
                statusCode: _0x337c05,
                headers: _0x3ae880,
                body: _0x52e732
              }, _0x52e732);
            }, _0x5d0b60 => {
              const {
                message: _0x18b19f,
                response: _0x21190c
              } = _0x5d0b60;
              _0x579913(_0x18b19f, _0x21190c, _0x21190c && _0x21190c.body);
            });
          }
        }
      }
    }
    time(_0x3b259d, _0x255fa6 = null) {
      const _0x500a79 = _0x255fa6 ? new Date(_0x255fa6) : new Date();
      let _0x326adf = {
        "M+": _0x500a79.getMonth() + 1,
        "d+": _0x500a79.getDate(),
        "H+": _0x500a79.getHours(),
        "m+": _0x500a79.getMinutes(),
        "s+": _0x500a79.getSeconds(),
        "q+": Math.floor((_0x500a79.getMonth() + 3) / 3),
        S: _0x500a79.getMilliseconds()
      };
      /(y+)/.test(_0x3b259d) && (_0x3b259d = _0x3b259d.replace(RegExp.$1, (_0x500a79.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2bbe5a in _0x326adf) new RegExp("(" + _0x2bbe5a + ")").test(_0x3b259d) && (_0x3b259d = _0x3b259d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x326adf[_0x2bbe5a] : ("00" + _0x326adf[_0x2bbe5a]).substr(("" + _0x326adf[_0x2bbe5a]).length)));
      return _0x3b259d;
    }
    msg(_0x4ac142 = _0x4f880f, _0x36a6d4 = "", _0x217ab9 = "", _0x4ae3f7) {
      const _0x2b35ab = _0x29ecbf => {
        if (!_0x29ecbf) {
          return _0x29ecbf;
        }
        if ("string" == typeof _0x29ecbf) {
          return this.isLoon() ? _0x29ecbf : this.isQuanX() ? {
            "open-url": _0x29ecbf
          } : this.isSurge() ? {
            url: _0x29ecbf
          } : void 0;
        }
        if ("object" == typeof _0x29ecbf) {
          if (this.isLoon()) {
            let _0x4ff0ec = _0x29ecbf.openUrl || _0x29ecbf.url || _0x29ecbf["open-url"],
              _0xbe4f13 = _0x29ecbf.mediaUrl || _0x29ecbf["media-url"];
            return {
              openUrl: _0x4ff0ec,
              mediaUrl: _0xbe4f13
            };
          }
          if (this.isQuanX()) {
            let _0x3b10e5 = _0x29ecbf["open-url"] || _0x29ecbf.url || _0x29ecbf.openUrl,
              _0x11707f = _0x29ecbf["media-url"] || _0x29ecbf.mediaUrl;
            return {
              "open-url": _0x3b10e5,
              "media-url": _0x11707f
            };
          }
          if (this.isSurge()) {
            let _0xbfb322 = _0x29ecbf.url || _0x29ecbf.openUrl || _0x29ecbf["open-url"];
            return {
              url: _0xbfb322
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4ac142, _0x36a6d4, _0x217ab9, _0x2b35ab(_0x4ae3f7)) : this.isQuanX() && $notify(_0x4ac142, _0x36a6d4, _0x217ab9, _0x2b35ab(_0x4ae3f7))), !this.isMuteLog) {
        let _0x9b7f1a = ["", "==============📣系统通知📣=============="];
        _0x9b7f1a.push(_0x4ac142);
        _0x36a6d4 && _0x9b7f1a.push(_0x36a6d4);
        _0x217ab9 && _0x9b7f1a.push(_0x217ab9);
        console.log(_0x9b7f1a.join("\n"));
        this.logs = this.logs.concat(_0x9b7f1a);
      }
    }
    log(..._0xe5a75f) {
      _0xe5a75f.length > 0 && (this.logs = [...this.logs, ..._0xe5a75f]);
      console.log(_0xe5a75f.join(this.logSeparator));
    }
    logErr(_0x30578b, _0x25fa2d) {
      const _0x58d0b9 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x58d0b9 ? this.log("", "❗️" + this.name + ", 错误!", _0x30578b.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x30578b);
    }
    wait(_0x47f77c) {
      return new Promise(_0x17f1db => setTimeout(_0x17f1db, _0x47f77c));
    }
    done(_0x511c6b = {}) {
      const _0x4215ea = new Date().getTime(),
        _0x30989d = (_0x4215ea - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x30989d + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x511c6b);
    }
  }(_0x4f880f, _0x38cddf);
}