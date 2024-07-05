//Fri Jul 05 2024 03:49:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("追书神器");
const version = "V1.0.8";
const appName = "zssqapp";
let zssqapp = $.getjson(appName, []);
const notify = $.isNode() ? require("./sendNotify") : "";
let userId = $.getdata("tguserid") || 1;
let activeCode = $.getdata("zssqactivecode") || 0;
let zssquserck = $.getval("zssquserck") || 1;
let apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
let tz = $.getval("tz") || "1";
let ts = Math.round(new Date().getTime() / 1000).toString();
var hour = "";
var minute = "";
let answer = "";
let zssq = "";
let content = "";
let zssq_headers = "";
let encryptStr = "";
let videoId = "";
let userAuth = "";
let scriptAuth = "";
let newest_version = "";
let runAuth = "";
let systemNotify = "";
let vipAuth = "";
let isCharge = "";
let multiAccount = 1;
let buyCount = 1;
let runTotalCounts = 1;
let runedCounts = 1;
let userRank = "";
let invicode = "";
if ($.isNode()) {
  zssqapp = JSON.parse(process.env.ZSSQAPP);
  userId = process.env.TGUSERID;
  activeCode = process.env.ZSSQACTIVECODE;
  if (process.env.APIHOST) {
    apiHost = process.env.APIHOST;
  }
  hour = new Date(new Date().getTime()).getHours();
  minute = new Date(new Date().getTime()).getMinutes();
  $.log("当前环境: Node, 当前时间：" + hour + "点");
} else {
  hour = new Date().getHours();
  minute = new Date().getMinutes();
  $.log("当前环境: 手机代理, 当前时间：" + hour + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await getCk();
  } else {
    if (!activeCode || !userId || userId == 1 || activeCode == 0 || activeCode.length != 32) {
      $.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await getScriptAuth(appName, userId, activeCode);
    $.log("📢 " + systemNotify);
    $.log("🔔 当前脚本版本号: " + version + "，最新版本号: " + newest_version);
    if (version < newest_version) {
      $.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      sendMsg("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (scriptAuth != true) {
      $.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (userRank != true) {
      $.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (userAuth != true) {
      $.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (isCharge == true) {
      $.log("🔔 此脚本采用付费模式。🔒");
    } else {
      $.log("🔔 此脚本采用免费模式。🔓");
    }
    if (vipAuth != true) {
      $.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
      return;
    } else {
      if (isCharge == true) {
        $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
      }
    }
    if (multiAccount > 1) {
      $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + 3 * multiAccount + "个账号。");
    }
    if (buyCount > 1) {
      $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + runTotalCounts + "次, 已经运行了" + runedCounts + "次。");
    }
    if (runAuth != true) {
      $.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (zssqapp.length > 3 * multiAccount) {
      $.log("⚠️ 当前用户一次最多运行" + 3 * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (zssqapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    $.log("一共有" + zssqapp.length + "个账号");
    for (let _0x322249 = 0; _0x322249 < zssqapp.length; _0x322249++) {
      $.log("开始执行第" + (_0x322249 + 1) + "个账号");
      zssq = zssqapp[_0x322249];
      await userInfo();
      if (hour == 15) {
        await invication();
      }
      await dailysign();
      await doTask();
      if (!zssqapp[_0x322249].autoAnswer) {
        zssqapp[_0x322249].autoAnswer = 0;
      }
      if (zssqapp[_0x322249].autoAnswer == 1) {
        await questions();
      }
      if (!zssqapp[_0x322249].autoDraw) {
        zssqapp[_0x322249].autoDraw = 0;
      }
      if (zssqapp[_0x322249].autoDraw == 1) {
        await doTicket();
      }
      if (!zssqapp[_0x322249].notify) {
        zssqapp[_0x322249].notify = 1;
        $.setdata(JSON.stringify(zssqapp, null, 2), "zssqapp");
      }
      if (!zssqapp[_0x322249].autoAnswer) {
        zssqapp[_0x322249].autoAnswer = 0;
        $.setdata(JSON.stringify(zssqapp, null, 2), "zssqapp");
      }
      if (zssqapp.length > 1 && _0x322249 < zssqapp.length - 1) {
        content += "=================\n";
      }
      if (_0x322249 == zssqapp.length - 1 && zssqapp[_0x322249].notify == 1) {
        await sendMsg(content);
      }
      await runComplete(appName, userId);
    }
  }
})().catch(_0x5ed184 => $.logErr(_0x5ed184)).finally(() => $.done());
async function getCk() {
  if ($request.url.match(/\/getAllPromotion/)) {
    const _0x4e1452 = $request.url.split("token=")[1].split("&")[0];
    const _0xbdaef3 = $request.headers["User-Agent"];
    let _0x27c06a = zssquserck - 1;
    if (zssqapp[_0x27c06a]) {
      zssqapp[_0x27c06a].token = _0x4e1452;
      zssqapp[_0x27c06a].ua = _0xbdaef3;
    } else {
      const _0x3c6b81 = {
        token: _0x4e1452,
        ua: _0xbdaef3
      };
      zssqapp[_0x27c06a] = _0x3c6b81;
    }
    $.setdata(JSON.stringify(zssqapp, null, 2), "zssqapp");
    $.msg($.name, "追书神器账号" + (_0x27c06a + 1) + "基础数据获取成功！🎉");
  }
  if ($request.url.match(/\/open-app/)) {
    const _0x2f204b = $request.headers.Cookie;
    const _0x1d82ee = $request.headers["User-Agent"];
    const _0x313911 = $request.headers["X-Device-Id"];
    let _0xe98fd7 = zssquserck - 1;
    if (zssqapp[_0xe98fd7]) {
      zssqapp[_0xe98fd7].cookie = _0x2f204b;
      zssqapp[_0xe98fd7].xua = _0x1d82ee;
      zssqapp[_0xe98fd7].deviceId = _0x313911;
    } else {
      const _0x23b55c = {
        cookie: _0x2f204b,
        xua: _0x1d82ee,
        deviceId: _0x313911
      };
      zssqapp[_0xe98fd7] = _0x23b55c;
    }
    $.setdata(JSON.stringify(zssqapp, null, 2), "zssqapp");
    $.msg($.name, "追书神器账号" + (_0xe98fd7 + 1) + "Cookie获取成功！🎉");
  }
  if ($request.url.match(/\/user_popup_configs/)) {
    const _0x4deec3 = $request.url.split("distinct_id=")[1].split("&")[0];
    let _0x11faf3 = zssquserck - 1;
    if (zssqapp[_0x11faf3]) {
      zssqapp[_0x11faf3].userid = _0x4deec3;
    } else {
      const _0x5c678d = {
        userid: _0x4deec3
      };
      zssqapp[_0x11faf3] = _0x5c678d;
    }
    $.setdata(JSON.stringify(zssqapp, null, 2), "zssqapp");
    $.msg($.name, "追书神器账号" + (_0x11faf3 + 1) + "用户编号获取成功！🎉");
  }
  if ($request.url.match(/\/incentiveVideo/)) {
    const _0x27d88c = JSON.parse($request.body);
    const _0x5de128 = _0x27d88c.data;
    const _0x5402b0 = _0x5de128.substring(0, 2);
    let _0x5ca613 = zssquserck - 1;
    if (zssqapp[_0x5ca613]) {
      zssqapp[_0x5ca613].prefix = _0x5402b0;
    } else {
      const _0x21dd8b = {
        prefix: _0x5402b0
      };
      zssqapp[_0x5ca613] = _0x21dd8b;
    }
    $.setdata(JSON.stringify(zssqapp, null, 2), "zssqapp");
    $.msg($.name, "追书神器账号" + (_0x5ca613 + 1) + "秘钥前缀获取成功！🎉");
  }
  if ($request.method != "OPTIONS" && $request.url.match(/\/bind-promoter/)) {
    const _0x2c0f14 = $request.headers["third-token"];
    let _0x4019f2 = zssquserck - 1;
    let _0x47730f = zssqapp[_0x4019f2].thirdTokens || [];
    let _0x554aff = _0x47730f.length;
    _0x47730f.push(_0x2c0f14);
    zssqapp[_0x4019f2].thirdTokens = _0x47730f;
    $.setdata(JSON.stringify(zssqapp, null, 2), "zssqapp");
    $.msg($.name, "追书神器账号" + (_0x4019f2 + 1) + "当前有" + (_0x554aff + 1) + "个third-token");
    $.msg($.name, "追书神器账号" + (_0x4019f2 + 1) + "third-token获取成功！🎉");
  }
}
function initHeaders(_0x121e12) {
  const _0x4141c0 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    Connection: "close",
    Host: _0x121e12,
    Origin: "http://h5.zhuishushenqi.com",
    Referer: "http://h5.zhuishushenqi.com/",
    "User-Agent": zssq.ua
  };
  zssq_headers = _0x4141c0;
}
function userInfo() {
  return new Promise((_0x58f713, _0x3e19af) => {
    initHeaders("goldcoinnew.zhuishushenqi.com");
    const _0x133af2 = "http://goldcoinnew.zhuishushenqi.com/account/profile?token=" + zssq.token + "&channel=APST&b-zssq=zssq";
    const _0x1c58dc = {
      url: _0x133af2,
      headers: zssq_headers
    };
    $.get(_0x1c58dc, async (_0x5de323, _0x29a75b, _0x31a76b) => {
      try {
        if (safeGet(_0x31a76b)) {
          const _0x3c001c = JSON.parse(_0x31a76b);
          if (_0x3c001c.ecode == 0) {
            $.log("【用户名】： " + _0x3c001c.data.nickname);
            $.log("【金币】： " + _0x3c001c.data.gold);
            $.log("【余额】： " + _0x3c001c.data.balance + "元");
            content += "\n【用户名】: " + _0x3c001c.data.nickname + "\n";
            content += "【余额】: " + _0x3c001c.data.balance + "\n";
            let _0x48c6ce = _0x3c001c.data.level;
            await goldConvert(_0x48c6ce);
          }
        }
      } catch (_0x76ebd5) {
        $.log(_0x76ebd5);
      }
      _0x58f713();
    });
  });
}
function doTask() {
  return new Promise((_0xb2cf23, _0x2c9ba4) => {
    initHeaders("goldcoinnew.zhuishushenqi.com");
    const _0x4a6855 = "http://goldcoinnew.zhuishushenqi.com/redPacket/tasks?taskVersion=4001&token=" + zssq.token + "&version=4.42.0";
    const _0x20df6a = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "close",
      Cookie: zssq.cookie,
      Host: "goldcoinnew.zhuishushenqi.com",
      "User-Agent": zssq.xua,
      "X-Device-Id": zssq.deviceId,
      "X-User-Agent": zssq.xua,
      "x-app-name": ""
    };
    const _0x4be9e4 = {
      url: _0x4a6855,
      headers: _0x20df6a
    };
    $.get(_0x4be9e4, async (_0x4ac4df, _0x1b368e, _0xaf92c1) => {
      try {
        if (safeGet(_0xaf92c1)) {
          const _0x34d1cb = JSON.parse(_0xaf92c1);
          if (_0x34d1cb.ecode == 0) {
            const _0x3200de = _0x34d1cb.data;
            for (let _0x3c5a0b = 0; _0x3c5a0b < _0x3200de.length; _0x3c5a0b++) {
              const _0x523a06 = _0x3200de[_0x3c5a0b];
              if (_0x523a06.taskId == "60cc60d2b5de35d172b75a0c" && _0x523a06.completed < 8) {
                await phraseReward();
                await $.wait(randomNum(30000, 55000));
              }
              if (_0x523a06.taskId == "5ff561369b4fd365cdec0ca3" && _0x523a06.completed < 7) {
                ts = Math.round(new Date().getTime() / 1000).toString();
                await aesEncode("zssqapp", "{\"userId\":\"" + zssq.userid + "\",\"ts\":" + ts + "}");
                await incentiveVideo();
                await $.wait(randomNum(30000, 55000));
              }
            }
            await timeTask("bookshelf");
            await $.wait(randomNum(15000, 30000));
            await timeTask("welfare");
          }
        }
      } catch (_0x560339) {
        $.log(_0x560339);
      }
      _0xb2cf23();
    });
  });
}
function timeTask(_0x2ff38c) {
  return new Promise((_0x2e62ec, _0x127a2b) => {
    const _0x524ba9 = "http://goldcoin.zhuishushenqi.com/activity/getCountdownGold?adType=" + _0x2ff38c + "&token=" + zssq.token;
    const _0x59818e = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "close",
      Cookie: zssq.cookie,
      Host: "goldcoin.zhuishushenqi.com",
      "User-Agent": zssq.xua,
      "X-Device-Id": zssq.deviceId,
      "X-User-Agent": zssq.xua,
      "x-app-name": ""
    };
    const _0x4e1c2e = {
      url: _0x524ba9,
      headers: _0x59818e
    };
    $.get(_0x4e1c2e, async (_0x5a08ff, _0x31ae7a, _0x28c5e2) => {
      try {
        if (safeGet(_0x28c5e2)) {
          const _0x5362e7 = JSON.parse(_0x28c5e2);
          if (_0x5362e7.ok == true && _0x5362e7.data.rewardCount < 5 && _0x5362e7.data.status == 2) {
            await countDownReward(_0x2ff38c);
          }
        }
      } catch (_0x35030c) {
        $.log(_0x35030c);
      }
      _0x2e62ec();
    });
  });
}
function countDownReward(_0x5351c6) {
  return new Promise((_0x23c91a, _0x29b802) => {
    const _0x3733e4 = {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      Host: "goldcoin.zhuishushenqi.com",
      Origin: "https://h5.zhuishushenqi.com",
      Referer: "https://h5.zhuishushenqi.com/",
      "User-Agent": zssq.ua
    };
    const _0x14802d = "https://goldcoin.zhuishushenqi.com/activity/addCountDownGold?b-zssq=zssq";
    const _0x19c1a2 = {
      url: _0x14802d,
      headers: _0x3733e4,
      body: "token=" + zssq.token + "&adType=" + _0x5351c6
    };
    $.post(_0x19c1a2, async (_0xf3dfb5, _0x514a51, _0x4dfc8a) => {
      try {
        if (safeGet(_0x4dfc8a)) {
          const _0x153017 = JSON.parse(_0x4dfc8a);
          if (_0x153017.ok == true) {
            $.log("时段奖励获得" + _0x153017.data.gold + "金币 🎉");
            videoId = _0x153017.data.videoId;
            await $.wait(randomNum(30000, 50000));
            const _0x362a15 = new Date().valueOf();
            await aesEncode("zssqapp", "{\"userId\":\"" + zssq.userid + "\",\"ts\":" + _0x362a15 + "}");
            await countDownVideoReward(_0x5351c6);
          } else {
            $.log("" + _0x153017.msg);
          }
        }
      } catch (_0x344bad) {
        $.log(_0x344bad);
      }
      _0x23c91a();
    });
  });
}
function countDownVideoReward(_0x372c0d) {
  return new Promise((_0x5e0290, _0x53b7a6) => {
    encryptStr = encryptStr.substring(2);
    encryptStr = zssq.prefix + encryptStr;
    let _0x29464d = encryptStr.substring(0, 64);
    let _0x510e8b = encryptStr.substring(64);
    encryptStr = _0x29464d + "\r\n" + _0x510e8b;
    encryptStr = encodeURIComponent(encryptStr);
    const _0x4060ca = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "close",
      "Content-Length": "430",
      "Content-Type": "application/json",
      Cookie: zssq.cookie,
      Host: "goldcoin.zhuishushenqi.com",
      "User-Agent": zssq.xua,
      "X-Device-Id": zssq.deviceId,
      "X-User-Agent": zssq.xua,
      "x-app-name": ""
    };
    const _0x1cde14 = "http://goldcoin.zhuishushenqi.com/activity/addCountdownVideoGold";
    const _0x1f3e1f = {
      url: _0x1cde14,
      headers: _0x4060ca,
      body: "{\"data\":\"" + encryptStr + "\",\"deviceId\":\"" + zssq.deviceId + "\",\"adType\":\"" + _0x372c0d + "\",\"token\":\"" + zssq.token + "\",\"videoId\":\"" + videoId + "\"}"
    };
    $.post(_0x1f3e1f, async (_0x294a58, _0x490dec, _0x16f4ba) => {
      try {
        if (safeGet(_0x16f4ba)) {
          const _0x1647e5 = JSON.parse(_0x16f4ba);
          if (_0x1647e5.ok == true) {
            $.log("观看时段奖励视频获得" + _0x1647e5.data.gold + "金币 🎉");
          } else {
            $.log("" + _0x1647e5.msg);
          }
        }
      } catch (_0x50c70d) {
        $.log(_0x50c70d);
      }
      _0x5e0290();
    });
  });
}
function dailysign() {
  return new Promise((_0x6252cd, _0xe46e21) => {
    initHeaders("api.zhuishushenqi.com");
    const _0x447cab = "http://api.zhuishushenqi.com/user/signIn?isNew=true&token=" + zssq.token + "&activityId=5fe2eeb9deb170e4a9bb8710&version=2&type=2&b-zssq=zssq";
    const _0x928cd9 = {
      url: _0x447cab,
      headers: zssq_headers
    };
    $.get(_0x928cd9, async (_0x9707ce, _0x556f13, _0xd93225) => {
      try {
        if (safeGet(_0xd93225)) {
          const _0x262f97 = JSON.parse(_0xd93225);
          if (_0x262f97.ok == true) {
            $.log("【签到】： 签到成功，获得" + _0x262f97.gold + "金币 🎉");
            content += "【签到】: 签到成功\n";
            $.log("模拟看视频，获取签到视频奖励");
            await $.wait(randomNum(10000, 30000));
            const _0x44b2de = new Date().valueOf();
            await aesEncode("zssqapp", "{\"userId\":\"" + zssq.userid + "\",\"ts\":" + _0x44b2de + "}");
            await signVideo();
            await $.wait(randomNum(30000.55));
            const _0x510082 = new Date().valueOf();
            await aesEncode("zssqapp", "{\"userId\":\"" + zssq.userid + "\",\"ts\":" + _0x510082 + "}");
            await dailyRedPacket();
          } else {
            $.log("【签到】： 已签到");
          }
        }
      } catch (_0x42a2ec) {
        $.log(_0x42a2ec);
      }
      _0x6252cd();
    });
  });
}
function signVideo() {
  return new Promise((_0x14037e, _0x34d55a) => {
    encryptStr = encryptStr.substring(2);
    encryptStr = zssq.prefix + encryptStr;
    let _0x34f0a2 = encryptStr.substring(0, 64);
    let _0x5767d5 = encryptStr.substring(64);
    encryptStr = _0x34f0a2 + "\r\n" + _0x5767d5;
    encryptStr = encodeURIComponent(encryptStr);
    const _0x1708d4 = {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "close",
      "Content-Length": "403",
      "Content-Type": "application/x-www-form-urlencoded",
      Host: "goldcoin.zhuishushenqi.com",
      Origin: "http://h5.zhuishushenqi.com",
      Referer: "http://h5.zhuishushenqi.com/",
      "User-Agent": zssq.ua,
      "x-device-id": zssq.deviceId
    };
    const _0x1998f6 = "http://goldcoin.zhuishushenqi.com/tasks/videoAdGift?b-zssq=zssq";
    let _0x49325b = "version=3&adType=videoSign&token=" + zssq.token + "&data=" + encryptStr + "&deviceId=" + zssq.deviceId + "&app=master&rate=4";
    const _0x2c09af = {
      url: _0x1998f6,
      headers: _0x1708d4,
      body: _0x49325b
    };
    $.post(_0x2c09af, async (_0x536c9f, _0x217d8b, _0x212150) => {
      try {
        if (safeGet(_0x212150)) {
          const _0x3f08f2 = JSON.parse(_0x212150);
          if (_0x3f08f2.ok == true) {
            $.log("观看签到视频获得" + _0x3f08f2.data.awardNum + "金币 🎉");
          } else {
            $.log("" + _0x3f08f2.msg);
          }
        }
      } catch (_0x111f34) {
        $.log(_0x111f34);
      }
      _0x14037e();
    });
  });
}
function incentiveVideo() {
  return new Promise((_0x4f8a56, _0x56ae16) => {
    encryptStr = encryptStr.substring(2);
    encryptStr = zssq.prefix + encryptStr;
    let _0x2f132a = encryptStr.substring(0, 64);
    let _0x4d9e72 = encryptStr.substring(64);
    encryptStr = _0x2f132a + "\\r\\n" + _0x4d9e72;
    const _0x63608d = new Base64();
    const _0x277876 = _0x63608d.encode(zssq.deviceId);
    const _0x2c08db = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "close",
      "Content-Length": "205",
      "Content-Type": "application/json",
      Cookie: zssq.cookie,
      Host: "goldcoinnew.zhuishushenqi.com",
      "User-Agent": zssq.xua,
      "X-Device-Id": zssq.deviceId,
      "X-User-Agent": zssq.xua,
      "x-app-name": ""
    };
    const _0x3ee695 = "http://goldcoinnew.zhuishushenqi.com/redPacket/incentiveVideo?token=" + zssq.token + "&b-zssq=" + _0x277876;
    const _0x16dc59 = {
      url: _0x3ee695,
      headers: _0x2c08db,
      body: "{\n                \"data\": \"" + encryptStr + "\",\n                \"version\": \"4.42.0\",\n                \"taskVersion\": 4001,\n                \"position\": \"\",\n                \"action\": \"rw-incentive-video\",\n                \"channel\": \"APST\"\n              }"
    };
    $.post(_0x16dc59, async (_0x159f71, _0x2a316c, _0x1c9ecf) => {
      try {
        if (safeGet(_0x1c9ecf)) {
          const _0x24e409 = JSON.parse(_0x1c9ecf);
          if (_0x24e409.ecode == 0) {
            $.log("观看视频获得" + _0x24e409.data.gold.num + "金币 🎉");
          } else {
            $.log("" + _0x24e409.msg);
          }
        }
      } catch (_0xb0c83f) {
        $.log(_0xb0c83f);
      }
      _0x4f8a56();
    });
  });
}
function phraseReward() {
  return new Promise((_0x24ef25, _0x1aac78) => {
    const _0x1925f6 = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "close",
      "Content-Length": "205",
      "Content-Type": "application/json",
      Cookie: zssq.cookie,
      Host: "goldcoinnew.zhuishushenqi.com",
      "User-Agent": zssq.xua,
      "X-Device-Id": zssq.deviceId,
      "X-User-Agent": zssq.xua,
      "x-app-name": ""
    };
    const _0x5b09a7 = "http://goldcoinnew.zhuishushenqi.com/redPacket/completeTask?token=" + zssq.token;
    const _0x4c8b77 = {
      url: _0x5b09a7,
      headers: _0x1925f6,
      body: "{\n                \"version\": \"4.42.0\",\n                \"action\": \"rw-self-chengyu\",\n                \"position\": \"goldTask\",\n                \"taskVersion\": 4001,\n                \"channel\": \"APST\"\n              }"
    };
    $.post(_0x4c8b77, async (_0x1b80a1, _0x48a731, _0x5280ca) => {
      try {
        if (safeGet(_0x5280ca)) {
          const _0x1f3744 = JSON.parse(_0x5280ca);
          if (_0x1f3744.ecode == 0) {
            $.log("成语小秀才获得" + _0x1f3744.data.gold.num + "金币 🎉");
          } else {
            $.log("" + _0x1f3744.msg);
          }
        }
      } catch (_0x4b02df) {
        $.log(_0x4b02df);
      }
      _0x24ef25();
    });
  });
}
function doTicket() {
  return new Promise((_0x3c932b, _0x35a496) => {
    initHeaders("goldcoin.zhuishushenqi.com");
    const _0x357e2a = "https://goldcoin.zhuishushenqi.com/raffle/getActiveRaffle?raffleId=5f3114a86b782219a94a8085&token=" + zssq.token;
    const _0x466260 = {
      url: _0x357e2a,
      headers: zssq_headers
    };
    $.get(_0x466260, async (_0x10b298, _0xf7ebce, _0x485f24) => {
      try {
        if (safeGet(_0x485f24)) {
          const _0x1ef4be = JSON.parse(_0x485f24);
          if (_0x1ef4be.ok == true) {
            if (_0x1ef4be.data.userTickets.usedAdReward < 3) {
              const _0x59df33 = new Date().valueOf();
              await aesEncode("zssqapp", "{\"userId\":\"" + zssq.userid + "\",\"ts\":" + _0x59df33 + "}");
              await $.wait(randomNum(15000, 35000));
              await addTicket();
            }
            if (_0x1ef4be.data.userTickets.free > 0 || _0x1ef4be.data.userTickets.ad > 0) {
              await $.wait(randomNum(15000, 35000));
              await doDraw();
            }
          }
        }
      } catch (_0x2b7a44) {
        $.log(_0x2b7a44);
      }
      _0x3c932b();
    });
  });
}
function addTicket() {
  return new Promise((_0x5e4b25, _0x31a41d) => {
    encryptStr = encryptStr.substring(2);
    encryptStr = zssq.prefix + encryptStr;
    let _0x230dea = encryptStr.substring(0, 64);
    let _0xe217b4 = encryptStr.substring(64);
    encryptStr = _0x230dea + "\r\n" + _0xe217b4;
    encryptStr = encodeURIComponent(encryptStr);
    let _0x38e783 = zssq.thirdTokens;
    if (!_0x38e783 || _0x38e783.length == 0) {
      $.log("请先获取一些thirdToken才能做这个任务！");
      _0x38e783 = [];
      _0x38e783.push("");
    }
    const _0x46b69e = _0x38e783.pop();
    const _0x2c661e = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "close",
      "Content-Length": "241",
      "Content-Type": "application/json",
      Cookie: zssq.cookie,
      Host: "goldcoin.zhuishushenqi.com",
      "User-Agent": zssq.xua,
      "X-Device-Id": zssq.deviceId,
      "X-User-Agent": zssq.xua,
      "x-app-name": "",
      "x-third-token-special": "x"
    };
    const _0x231854 = "http://goldcoin.zhuishushenqi.com/raffle/v2/addAdTicket?deviceId=" + zssq.deviceId;
    const _0x181e65 = {
      url: _0x231854,
      headers: _0x2c661e,
      body: "{\n                \"third-token\": \"" + _0x46b69e + "\",\n                \"data\": \"" + encryptStr + "\",\n                \"raffleId\": \"5f3114a86b782219a94a8085\",\n                \"token\": \"" + zssq.token + "\",\n                \"deviceId\": \"" + zssq.deviceId + "\"\n              }"
    };
    $.post(_0x181e65, async (_0x272b21, _0x561e25, _0x4c4647) => {
      try {
        if (safeGet(_0x4c4647)) {
          const _0x476f04 = JSON.parse(_0x4c4647);
          if (_0x476f04.ok == true) {
            $.log("恭喜你转盘转动次数增加了 🎉");
            zssq.thirdTokens = _0x38e783;
            $.setdata(JSON.stringify(zssqapp, null, 2), "zssqapp");
          } else {
            $.log("" + _0x476f04.msg);
          }
        }
      } catch (_0x3ffcc5) {
        $.log(_0x3ffcc5);
      }
      _0x5e4b25();
    });
  });
}
async function read() {
  let _0x5d55b0 = Math.round(new Date().getTime() / 1000).toString();
  let _0x1b8dbc = randomNum(50, 60);
  let _0x2122f7 = zssq.thirdTokens;
  if (_0x2122f7.length == 0) {
    $.log("第三方Token已用完，请再获取一些吧！");
    _0x2122f7.push("");
  }
  const _0x2a7b22 = _0x2122f7.pop().split(":")[1];
  let _0xb4816 = "{\n  \"tht\" : \"0e05f2d6a4e2080EB811f1DA087eE362:" + _0x2a7b22 + "\",\n  \"g\" : \"zs\",\n  \"bId\" : \"607926e1895d220ba436447e\",\n  \"tk\" : \"" + zssq.token + "\",\n  \"ts\" : " + _0x5d55b0 + ",\n  \"sm\" : \"BW9gYD3+OVF2NHgOVl6RxMy0N5q6GlM3bSrW9G8mw5NZtvKqmOjhKlMGp+k17TjVU68j4+78E0+5pm7c22zubvQ==\",\n  \"t\" : " + _0x1b8dbc + ",\n  \"tv\" : 4001,\n  \"extData\" : \"{\\\"red_user_getmoney_initial_level\\\":1,\\\"ua_channel_name\\\":\\\"APST\\\",\\\"device_imei\\\":\\\"" + zssq.deviceId + "\\\",\\\"graytest_mark\\\":\\\"hongbao\\\",\\\"idfa\\\":\\\"" + zssq.deviceId + "\\\",\\\"ua_channel_id\\\":\\\"100013259\\\",\\\"pub_app_first_install_time\\\":\\\"2022-02-07 20:50:53\\\",\\\"channel_name\\\":\\\"APST\\\",\\\"red_user_current_level\\\":4,\\\"zs_login_id\\\":\\\"" + zssq.userid + "\\\",\\\"new_user_welfare\\\":0,\\\"platform\\\":\\\"1\\\",\\\"$app_version\\\":\\\"4.42.0\\\",\\\"product_line\\\":\\\"1\\\",\\\"channel_id\\\":\\\"100013259\\\",\\\"red_strategy_number\\\":\\\"14\\\",\\\"is_vip\\\":false,\\\"user_ad_strategypositionId\\\":312}\"\n}";
  $.log(_0xb4816);
  await aesEncode("zssqapp", "" + _0xb4816);
  $.log("encryptStr前: " + encryptStr);
  encryptStr = encryptStr.substring(2);
  encryptStr = "wL" + encryptStr;
  $.log("encryptStr后: " + encryptStr);
  zssq.thirdTokens = _0x2122f7;
  $.setdata(JSON.stringify(zssqapp, null, 2), "zssqapp");
}
function readTime() {
  return new Promise((_0x40a16e, _0x2eb62b) => {
    const _0xa1ff06 = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9",
      Connection: "keep-alive",
      "Content-Length": "1643",
      "Content-Type": "application/json",
      Cookie: zssq.cookie,
      Host: "goldcoinnew.zhuishushenqi.com",
      "User-Agent": zssq.xua,
      "X-Device-Id": zssq.deviceId,
      "X-User-Agent": zssq.xua,
      "x-app-name": "",
      "x-third-token-special": "x"
    };
    const _0x4ef925 = "https://goldcoinnew.zhuishushenqi.com/redPacket/readTime";
    const _0x3068dd = {
      url: _0x4ef925,
      headers: _0xa1ff06,
      body: "{\n                \"data\": \"" + encryptStr + "\"\n              }"
    };
    $.post(_0x3068dd, async (_0x2eeab2, _0x30fd3e, _0x4efc4c) => {
      try {
        $.log(_0x4efc4c);
        if (safeGet(_0x4efc4c)) {
          const _0x52315a = JSON.parse(_0x4efc4c);
          if (_0x52315a.ecode == 0) {
            $.log("当前阅读时长" + _0x52315a.data / 60 + "分钟");
          } else {
            $.log("" + _0x52315a.msg);
          }
        }
      } catch (_0x1a7a34) {
        $.log(_0x1a7a34);
      }
      _0x40a16e();
    });
  });
}
function doDraw() {
  return new Promise((_0x3a298b, _0x46a6f2) => {
    const _0x121a6a = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "close",
      "Content-Length": "241",
      "Content-Type": "application/json",
      Cookie: zssq.cookie,
      Host: "goldcoin.zhuishushenqi.com",
      "User-Agent": zssq.xua,
      "X-Device-Id": zssq.deviceId,
      "X-User-Agent": zssq.xua,
      "x-app-name": ""
    };
    const _0x2d7e02 = "http://goldcoin.zhuishushenqi.com/raffle/doDraw";
    const _0xbbaa9c = {
      url: _0x2d7e02,
      headers: _0x121a6a,
      body: "{\n                \"isGold\": false,\n                \"token\": \"" + zssq.token + "\",\n                \"raffleId\": \"5f3114a86b782219a94a8085\"\n              }"
    };
    $.post(_0xbbaa9c, async (_0x538b5b, _0x101e2b, _0x3f03b0) => {
      try {
        if (safeGet(_0x3f03b0)) {
          const _0x298cbf = JSON.parse(_0x3f03b0);
          if (_0x298cbf.ok == true) {
            $.log("转动转盘获得" + _0x298cbf.data.prize.name + " 🎉");
          } else {
            $.log("" + _0x298cbf.msg);
          }
        }
      } catch (_0x232270) {
        $.log(_0x232270);
      }
      _0x3a298b();
    });
  });
}
function dailyRedPacket() {
  return new Promise((_0x58f0a6, _0x64c821) => {
    encryptStr = encryptStr.substring(2);
    encryptStr = zssq.prefix + encryptStr;
    let _0x10bf5 = encryptStr.substring(0, 64);
    let _0x343018 = encryptStr.substring(64);
    encryptStr = _0x10bf5 + "\r\n" + _0x343018;
    encryptStr = encodeURIComponent(encryptStr);
    let _0x4d1660 = zssq.thirdTokens;
    if (!_0x4d1660 || _0x4d1660.length == 0) {
      $.log("请先获取一些thirdToken才能做这个任务！");
      _0x4d1660 = [];
      _0x4d1660.push("");
    }
    const _0x1d7e9b = _0x4d1660.pop();
    zssq.thirdTokens = _0x4d1660;
    $.setdata(JSON.stringify(zssqapp, null, 2), "zssqapp");
    const _0x52ab9a = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "keep-alive",
      "Content-Length": "586",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: zssq.cookie,
      Host: "goldcoin.zhuishushenqi.com",
      "User-Agent": zssq.xua,
      "X-Device-Id": zssq.deviceId,
      "x-third-token-special": "x"
    };
    const _0x35cb07 = "https://goldcoin.zhuishushenqi.com/tasks/v2/videoAdGift";
    const _0x359651 = {
      url: _0x35cb07,
      headers: _0x52ab9a,
      body: "adType=bookshelf&data=" + encryptStr + "&deviceId=" + zssq.deviceId + "&third-token=" + _0x1d7e9b + "&token=" + zssq.token + "&videoType=pop&x-device-id=" + zssq.deviceId
    };
    $.post(_0x359651, async (_0x37a94d, _0x1df2fd, _0x335a4d) => {
      try {
        if (safeGet(_0x335a4d)) {
          const _0x49d958 = JSON.parse(_0x335a4d);
          if (_0x49d958.ok == true) {
            $.log("恭喜你每日红包获得" + _0x49d958.data.awardNum + "金币 🎉");
          } else {
            $.log("" + _0x49d958.msg);
          }
        }
      } catch (_0x47438a) {
        $.log(_0x47438a);
      }
      _0x58f0a6();
    });
  });
}
function invication() {
  return new Promise((_0x3a5879, _0x38c182) => {
    encryptStr = encryptStr.substring(2);
    encryptStr = zssq.prefix + encryptStr;
    let _0x220a48 = encryptStr.substring(0, 64);
    let _0x382848 = encryptStr.substring(64);
    encryptStr = _0x220a48 + "\r\n" + _0x382848;
    const _0x4ca75c = {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      Host: "goldcoin.zhuishushenqi.com",
      Origin: "https://h5.zhuishushenqi.com",
      Referer: "https://h5.zhuishushenqi.com/",
      "User-Agent": zssq.ua,
      "x-device-id": zssq.deviceId
    };
    const _0x235509 = "token=" + zssq.token + "&code=" + invicode + "&platform=h5&bindMethod=selfBinding&group=shitu&shuomeiId=BqdkcBXrwIHxQH93Y aBJe0i0GNxwSooIVQKHiIwyOl9OkUngGOYtsLzIwk7gkpELIMXsACvfJN6LUJ231ttcpA==";
    const _0xb59435 = "https://goldcoin.zhuishushenqi.com/v3/shitu/bind-promoter";
    const _0x2d9de2 = {
      url: _0xb59435,
      headers: _0x4ca75c,
      body: _0x235509
    };
    $.post(_0x2d9de2, async (_0x181293, _0x1dea3c, _0x46dfc4) => {
      try {} catch (_0x1b5696) {
        $.log(_0x1b5696);
      }
      _0x3a5879();
    });
  });
}
function goldConvert(_0x103b92) {
  return new Promise((_0x2393a4, _0x1fe560) => {
    initHeaders("convert.zhuishushenqi.com");
    const _0x2af722 = "https://convert.zhuishushenqi.com/convert/level?token=" + zssq.token;
    const _0x5dc26e = {
      url: _0x2af722,
      headers: zssq_headers
    };
    $.get(_0x5dc26e, async (_0x70b41b, _0x40a62e, _0x3df3d0) => {
      try {
        if (safeGet(_0x3df3d0)) {
          const _0x3f9f09 = JSON.parse(_0x3df3d0);
          if (_0x3f9f09.ecode == 0) {
            const _0x21eb33 = _0x3f9f09.data.find(_0x5c85e0 => _0x5c85e0.level == _0x103b92);
            if (_0x21eb33.convertStatus == "unDraw") {
              await withdraw(_0x103b92);
            }
          }
        }
      } catch (_0x41c7fa) {
        $.log(_0x41c7fa);
      }
      _0x2393a4();
    });
  });
}
function withdraw(_0x476735) {
  return new Promise((_0x2c250d, _0x567520) => {
    const _0x1839e3 = {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "keep-alive",
      "Content-Type": "application/json;charset=utf-8",
      Host: "convert.zhuishushenqi.com",
      Origin: "https://h5.zhuishushenqi.com",
      Referer: "https://h5.zhuishushenqi.com/",
      "User-Agent": zssq.ua
    };
    const _0x2e2677 = "{\"packageName\": \"com.ifmoc.ZhuiShuShenQi\",\"appName\": \"iosMaster\",\"token\": \"" + zssq.token + "\",\"level\": " + _0x476735 + ",\"withdrawType\": \"cpt_weixin\"}";
    const _0x3093d0 = "https://convert.zhuishushenqi.com/convert/withdraw";
    const _0x5198c2 = {
      url: _0x3093d0,
      headers: _0x1839e3,
      body: _0x2e2677
    };
    $.post(_0x5198c2, async (_0x447ae0, _0x6d80ff, _0x71e054) => {
      try {
        if (safeGet(_0x71e054)) {
          const _0x2eb025 = JSON.parse(_0x71e054);
          if (_0x2eb025.ecode == 0) {
            $.log("恭喜你成功提现" + _0x2eb025.currency / 100 + "元 🎉");
          } else {
            $.log("当前等级：" + _0x476735 + ", " + _0x2eb025.message);
          }
        }
      } catch (_0x5dcf09) {
        $.log(_0x5dcf09);
      }
      _0x2c250d();
    });
  });
}
function questions() {
  return new Promise((_0x2e52b2, _0x177758) => {
    const _0x4318fc = "https://activitynew.zhuishushenqi.com/activity/dailyQuestion/distribution";
    const _0x555a81 = "{\"action\": \"rw-daily-question\",\"appName\": \"iosMaster\",\"platform\": \"ios\",\"position\": \"goldTask\",\"taskVersion\": 4001,\"token\": \"" + zssq.token + "\",\"version\": \"4.42.0\"}";
    const _0x9d4280 = {
      Accept: "application/json, text/plain, */*",
      Origin: "https://h5.zhuishushenqi.com",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json;charset=utf-8",
      Referer: "https://h5.zhuishushenqi.com/",
      Host: "activitynew.zhuishushenqi.com",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 /sa-sdk-ios/sensors-verify/endpoint.zhuishushenqi.com?production ",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "keep-alive"
    };
    const _0x1a9506 = {
      url: _0x4318fc,
      headers: _0x9d4280,
      body: _0x555a81
    };
    $.post(_0x1a9506, async (_0x19e86a, _0x124d31, _0x33e17e) => {
      try {
        if (safeGet(_0x33e17e)) {
          const _0x258226 = JSON.parse(_0x33e17e);
          if (_0x258226.ecode == 0) {
            const _0x1f610e = _0x258226.data.questions;
            for (let _0x56b147 = 0; _0x56b147 < _0x1f610e.length; _0x56b147++) {
              const _0x19d6b4 = _0x1f610e[_0x56b147];
              const _0x238d2e = _0x19d6b4.questionId;
              const _0x58b145 = _0x19d6b4._id;
              await redisGet("questions", _0x238d2e);
              const _0x2d1ffd = _0x19d6b4.rightAnswer[0];
              if (_0x19d6b4.isFinished == true) {
                if (answer != "") {
                  continue;
                } else {
                  await redisSet("questions", _0x238d2e, _0x2d1ffd);
                  $.log("感谢你上传的题目，题库又变大了一点点！");
                }
              } else {
                await answerHandle(_0x58b145, answer);
                await $.wait(randomNum(5000, 10000));
              }
            }
          }
        }
      } catch (_0x404df5) {
        $.log(_0x404df5);
      }
      _0x2e52b2();
    });
  });
}
function answerHandle(_0xf9a6c5, _0x79bf65) {
  return new Promise((_0x42cded, _0xb0c0bf) => {
    const _0x4a5b8f = "https://activitynew.zhuishushenqi.com/activity/dailyQuestion/handle";
    let _0x47d16a = randomNum(1, 2);
    if (_0x79bf65 != "") {
      $.log("哎呀，在题库找到答案了 🎉");
      _0x47d16a = _0x79bf65;
    }
    const _0x45e6a9 = "{\n            \"action\": \"rw-daily-question\",\n            \"answers\": [\n              {\n                \"_id\": \"" + _0xf9a6c5 + "\",\n                \"answer\": [\n                  " + _0x47d16a + "\n                ]\n              }\n            ],\n            \"appName\": \"iosMaster\",\n            \"platform\": \"ios\",\n            \"position\": \"goldTask\",\n            \"taskVersion\": 4001,\n            \"token\": \"" + zssq.token + "\",\n            \"version\": \"4.42.0\"\n          }";
    const _0x462dec = {
      Accept: "application/json, text/plain, */*",
      Origin: "https://h5.zhuishushenqi.com",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json;charset=utf-8",
      Referer: "https://h5.zhuishushenqi.com/",
      Host: "activitynew.zhuishushenqi.com",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 /sa-sdk-ios/sensors-verify/endpoint.zhuishushenqi.com?production ",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "keep-alive"
    };
    const _0x517a1e = {
      url: _0x4a5b8f,
      headers: _0x462dec,
      body: _0x45e6a9
    };
    $.post(_0x517a1e, async (_0x4c7a9e, _0x2aadb6, _0x3cb30c) => {
      try {
        if (safeGet(_0x3cb30c)) {
          const _0x41219d = JSON.parse(_0x3cb30c);
          if (_0x41219d.ecode == 0) {
            if (_0x41219d.data[0].isCorrect == true) {
              $.log("恭喜你答对一题，获得" + _0x41219d.data[0].rewardExp + "经验点, 获得" + _0x41219d.data[0].rewardGold + "金币 🎉");
            }
          }
        }
      } catch (_0x364bdc) {
        $.log(_0x364bdc);
      }
      _0x42cded();
    });
  });
}
function getScriptAuth(_0x2dfac5, _0x37e72a, _0x1df93e) {
  return new Promise((_0x4f78b7, _0x7826a4) => {
    const _0x383d3c = apiHost + "/script/permissions/lastest";
    const _0x13d472 = {
      appName: _0x2dfac5,
      userId: _0x37e72a,
      activityCode: _0x1df93e,
      version: version
    };
    const _0x47c1bb = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x4d9fb7 = {
      url: _0x383d3c,
      headers: _0x47c1bb,
      body: JSON.stringify(_0x13d472)
    };
    $.post(_0x4d9fb7, async (_0x1002b9, _0x5734a2, _0x520e13) => {
      const _0xe65877 = _0x520e13.replace(/\"/g, "").slice(34);
      const _0x486c03 = new Base64();
      result = JSON.parse(_0x486c03.decode(_0xe65877));
      try {
        newest_version = result.version;
        userAuth = result.userAuth;
        scriptAuth = result.scriptAuth;
        runAuth = result.runAuth;
        systemNotify = result.notify;
        vipAuth = result.vipAuth;
        isCharge = result.isCharge;
        multiAccount = result.runAcounts;
        buyCount = result.buyCount;
        runedCounts = result.runedCounts;
        runTotalCounts = result.runTotalCounts;
        userRank = result.userRank;
        invicode = result.invicate;
      } catch (_0x2a4746) {
        $.log(_0x2a4746);
      }
      _0x4f78b7();
    });
  });
}
function runComplete(_0x254d21, _0x361006) {
  return new Promise((_0x34e709, _0x1a38fd) => {
    const _0x5a1748 = apiHost + "/script/run/add";
    const _0x113366 = {
      appName: _0x254d21,
      userId: _0x361006,
      activityCode: activeCode,
      version: version
    };
    const _0x979807 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x422e3c = {
      url: _0x5a1748,
      headers: _0x979807,
      body: JSON.stringify(_0x113366)
    };
    $.post(_0x422e3c, async (_0x1991b6, _0x387672, _0x825160) => {
      _0x34e709();
    });
  });
}
async function aesEncode(_0xcdc622, _0x4b5b93) {
  return new Promise((_0x71109f, _0x22632a) => {
    const _0x44328a = apiHost + "/script/aes/encode";
    const _0x1f883e = {
      appName: _0xcdc622,
      cryptedStr: _0x4b5b93
    };
    const _0x399171 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x5a9de0 = {
      url: _0x44328a,
      headers: _0x399171,
      body: JSON.stringify(_0x1f883e)
    };
    $.post(_0x5a9de0, async (_0xb5e406, _0x57a5c6, _0x4fc36b) => {
      const _0x13e6eb = _0x4fc36b.replace(/\"/g, "");
      encryptStr = _0x13e6eb;
      _0x71109f();
    });
  });
}
function redisSet(_0x990e9b, _0xf4b395, _0x416878) {
  return new Promise((_0xcb8094, _0x51d8e3) => {
    const _0x3f8729 = apiHost + "/redis/hash/set";
    const _0x2b9189 = {
      key: _0x990e9b,
      hashKey: _0xf4b395,
      hashValue: _0x416878
    };
    const _0x4c7d94 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x52976c = {
      url: _0x3f8729,
      headers: _0x4c7d94,
      body: JSON.stringify(_0x2b9189)
    };
    $.post(_0x52976c, async (_0xab0015, _0x528e88, _0x2caa2a) => {
      _0xcb8094();
    });
  });
}
function redisGet(_0x4664de, _0x3ae972) {
  return new Promise((_0x27ab4a, _0x59bc83) => {
    const _0x15e074 = apiHost + "/redis/hash/get/" + _0x4664de + "/" + _0x3ae972;
    const _0x5c0eb8 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x3fd6fa = {
      url: _0x15e074,
      headers: _0x5c0eb8
    };
    $.get(_0x3fd6fa, async (_0x5ccd84, _0x5b935f, _0x53c41d) => {
      const _0x42d7b3 = _0x53c41d.replace(/\"/g, "");
      answer = _0x42d7b3;
      _0x27ab4a();
    });
  });
}
function safeGet(_0x4ed0ca) {
  try {
    if (typeof JSON.parse(_0x4ed0ca) == "object") {
      return true;
    }
  } catch (_0x46d0e6) {
    console.log(_0x46d0e6);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function compileStr(_0xe3b181) {
  var _0x4ee89b = String.fromCharCode(_0xe3b181.charCodeAt(0) + _0xe3b181.length);
  for (var _0x3ddaa5 = 1; _0x3ddaa5 < _0xe3b181.length; _0x3ddaa5++) {
    _0x4ee89b += String.fromCharCode(_0xe3b181.charCodeAt(_0x3ddaa5) + _0xe3b181.charCodeAt(_0x3ddaa5 - 1));
  }
  return escape(_0x4ee89b);
}
function uncompileStr(_0x3e25b3) {
  _0x3e25b3 = unescape(_0x3e25b3);
  var _0x4b0df7 = String.fromCharCode(_0x3e25b3.charCodeAt(0) - _0x3e25b3.length);
  for (var _0x188690 = 1; _0x188690 < _0x3e25b3.length; _0x188690++) {
    _0x4b0df7 += String.fromCharCode(_0x3e25b3.charCodeAt(_0x188690) - _0x4b0df7.charCodeAt(_0x188690 - 1));
  }
  return _0x4b0df7;
}
function randomNum(_0x28129e, _0x5ed40f) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x28129e + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x5ed40f - _0x28129e + 1) + _0x28129e);
      break;
    default:
      return 0;
      break;
  }
}
function message() {
  if (tz == 1) {
    $.msg($.name, "", $.message);
  }
}
async function sendMsg(_0x10fda5) {
  if (tz == 1) {
    if ($.isNode()) {
      await notify.sendNotify($.name, _0x10fda5);
    } else {
      $.msg($.name, "", _0x10fda5);
    }
  } else {
    $.log(_0x10fda5);
  }
}
function randomString(_0x369954, _0x18c366) {
  _0x18c366 = _0x18c366 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x6dce5c = "";
  for (let _0xe55477 = 0; _0xe55477 < _0x369954; _0xe55477++) {
    let _0x41c10c = Math.floor(Math.random() * _0x18c366.length);
    _0x6dce5c += _0x18c366.substring(_0x41c10c, _0x41c10c + 1);
  }
  return _0x6dce5c;
}
function SHA256(_0x15a82d) {
  var _0x2f058a = 8;
  var _0x2bea42 = 0;
  function _0xfaa36a(_0x52c93d, _0x4444ee) {
    var _0xb2db5e = (_0x52c93d & 65535) + (_0x4444ee & 65535);
    var _0x1f8b60 = (_0x52c93d >> 16) + (_0x4444ee >> 16) + (_0xb2db5e >> 16);
    return _0x1f8b60 << 16 | _0xb2db5e & 65535;
  }
  function _0x42234f(_0x212a9c, _0x445923) {
    return _0x212a9c >>> _0x445923 | _0x212a9c << 32 - _0x445923;
  }
  function _0x46c413(_0x4e76d8, _0x57295f) {
    return _0x4e76d8 >>> _0x57295f;
  }
  function _0x218115(_0x316b7d, _0x412560, _0x1c881c) {
    return _0x316b7d & _0x412560 ^ ~_0x316b7d & _0x1c881c;
  }
  function _0x5e7d16(_0x777da5, _0x1ed1e2, _0x12b8e5) {
    return _0x777da5 & _0x1ed1e2 ^ _0x777da5 & _0x12b8e5 ^ _0x1ed1e2 & _0x12b8e5;
  }
  function _0x548b2c(_0x105e1c) {
    return _0x42234f(_0x105e1c, 2) ^ _0x42234f(_0x105e1c, 13) ^ _0x42234f(_0x105e1c, 22);
  }
  function _0x28a521(_0x1fda61) {
    return _0x42234f(_0x1fda61, 6) ^ _0x42234f(_0x1fda61, 11) ^ _0x42234f(_0x1fda61, 25);
  }
  function _0x3a4874(_0x501a46) {
    return _0x42234f(_0x501a46, 7) ^ _0x42234f(_0x501a46, 18) ^ _0x46c413(_0x501a46, 3);
  }
  function _0x3ffebc(_0x218443) {
    return _0x42234f(_0x218443, 17) ^ _0x42234f(_0x218443, 19) ^ _0x46c413(_0x218443, 10);
  }
  function _0x32ac14(_0x3c3a2c, _0x36a4d9) {
    var _0x3ac7f6 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x32047e = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x3a90e4 = new Array(64);
    var _0x49adb5, _0x4fe045, _0x219f6b, _0x56928b, _0xeb1ef4, _0x45333a, _0x15d2bc, _0x2a291c;
    var _0x4b9eab, _0x249099;
    _0x3c3a2c[_0x36a4d9 >> 5] |= 128 << 24 - _0x36a4d9 % 32;
    _0x3c3a2c[(_0x36a4d9 + 64 >> 9 << 4) + 15] = _0x36a4d9;
    for (var _0x5a01c1 = 0; _0x5a01c1 < _0x3c3a2c.length; _0x5a01c1 += 16) {
      _0x49adb5 = _0x32047e[0];
      _0x4fe045 = _0x32047e[1];
      _0x219f6b = _0x32047e[2];
      _0x56928b = _0x32047e[3];
      _0xeb1ef4 = _0x32047e[4];
      _0x45333a = _0x32047e[5];
      _0x15d2bc = _0x32047e[6];
      _0x2a291c = _0x32047e[7];
      for (var _0x2b6b61 = 0; _0x2b6b61 < 64; _0x2b6b61++) {
        if (_0x2b6b61 < 16) {
          _0x3a90e4[_0x2b6b61] = _0x3c3a2c[_0x2b6b61 + _0x5a01c1];
        } else {
          _0x3a90e4[_0x2b6b61] = _0xfaa36a(_0xfaa36a(_0xfaa36a(_0x3ffebc(_0x3a90e4[_0x2b6b61 - 2]), _0x3a90e4[_0x2b6b61 - 7]), _0x3a4874(_0x3a90e4[_0x2b6b61 - 15])), _0x3a90e4[_0x2b6b61 - 16]);
        }
        _0x4b9eab = _0xfaa36a(_0xfaa36a(_0xfaa36a(_0xfaa36a(_0x2a291c, _0x28a521(_0xeb1ef4)), _0x218115(_0xeb1ef4, _0x45333a, _0x15d2bc)), _0x3ac7f6[_0x2b6b61]), _0x3a90e4[_0x2b6b61]);
        _0x249099 = _0xfaa36a(_0x548b2c(_0x49adb5), _0x5e7d16(_0x49adb5, _0x4fe045, _0x219f6b));
        _0x2a291c = _0x15d2bc;
        _0x15d2bc = _0x45333a;
        _0x45333a = _0xeb1ef4;
        _0xeb1ef4 = _0xfaa36a(_0x56928b, _0x4b9eab);
        _0x56928b = _0x219f6b;
        _0x219f6b = _0x4fe045;
        _0x4fe045 = _0x49adb5;
        _0x49adb5 = _0xfaa36a(_0x4b9eab, _0x249099);
      }
      _0x32047e[0] = _0xfaa36a(_0x49adb5, _0x32047e[0]);
      _0x32047e[1] = _0xfaa36a(_0x4fe045, _0x32047e[1]);
      _0x32047e[2] = _0xfaa36a(_0x219f6b, _0x32047e[2]);
      _0x32047e[3] = _0xfaa36a(_0x56928b, _0x32047e[3]);
      _0x32047e[4] = _0xfaa36a(_0xeb1ef4, _0x32047e[4]);
      _0x32047e[5] = _0xfaa36a(_0x45333a, _0x32047e[5]);
      _0x32047e[6] = _0xfaa36a(_0x15d2bc, _0x32047e[6]);
      _0x32047e[7] = _0xfaa36a(_0x2a291c, _0x32047e[7]);
    }
    return _0x32047e;
  }
  function _0x2bfc6e(_0x21cdcb) {
    var _0x7e0c40 = Array();
    var _0x30d816 = (1 << _0x2f058a) - 1;
    for (var _0x2466cf = 0; _0x2466cf < _0x21cdcb.length * _0x2f058a; _0x2466cf += _0x2f058a) {
      _0x7e0c40[_0x2466cf >> 5] |= (_0x21cdcb.charCodeAt(_0x2466cf / _0x2f058a) & _0x30d816) << 24 - _0x2466cf % 32;
    }
    return _0x7e0c40;
  }
  function _0x4b9181(_0x43d668) {
    _0x43d668 = _0x43d668.replace(/\r\n/g, "\n");
    var _0x25c8d4 = "";
    for (var _0x3c7dba = 0; _0x3c7dba < _0x43d668.length; _0x3c7dba++) {
      var _0x5e2186 = _0x43d668.charCodeAt(_0x3c7dba);
      if (_0x5e2186 < 128) {
        _0x25c8d4 += String.fromCharCode(_0x5e2186);
      } else {
        if (_0x5e2186 > 127 && _0x5e2186 < 2048) {
          _0x25c8d4 += String.fromCharCode(_0x5e2186 >> 6 | 192);
          _0x25c8d4 += String.fromCharCode(_0x5e2186 & 63 | 128);
        } else {
          _0x25c8d4 += String.fromCharCode(_0x5e2186 >> 12 | 224);
          _0x25c8d4 += String.fromCharCode(_0x5e2186 >> 6 & 63 | 128);
          _0x25c8d4 += String.fromCharCode(_0x5e2186 & 63 | 128);
        }
      }
    }
    return _0x25c8d4;
  }
  function _0x88914(_0x416928) {
    var _0x5844ef = _0x2bea42 ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x734738 = "";
    for (var _0x2f905e = 0; _0x2f905e < _0x416928.length * 4; _0x2f905e++) {
      _0x734738 += _0x5844ef.charAt(_0x416928[_0x2f905e >> 2] >> (3 - _0x2f905e % 4) * 8 + 4 & 15) + _0x5844ef.charAt(_0x416928[_0x2f905e >> 2] >> (3 - _0x2f905e % 4) * 8 & 15);
    }
    return _0x734738;
  }
  _0x15a82d = _0x4b9181(_0x15a82d);
  return _0x88914(_0x32ac14(_0x2bfc6e(_0x15a82d), _0x15a82d.length * _0x2f058a));
}
function MD5_Encrypt(_0x26185a) {
  function _0x2e439c(_0x115c58, _0x25b343) {
    return _0x115c58 << _0x25b343 | _0x115c58 >>> 32 - _0x25b343;
  }
  function _0x1e9de4(_0x39746b, _0x37abc0) {
    var _0xdaf98d, _0x2cd0d0, _0x352ff0, _0x4f5b29, _0x4dea67;
    _0x352ff0 = 2147483648 & _0x39746b;
    _0x4f5b29 = 2147483648 & _0x37abc0;
    _0xdaf98d = 1073741824 & _0x39746b;
    _0x2cd0d0 = 1073741824 & _0x37abc0;
    _0x4dea67 = (1073741823 & _0x39746b) + (1073741823 & _0x37abc0);
    return _0xdaf98d & _0x2cd0d0 ? 2147483648 ^ _0x4dea67 ^ _0x352ff0 ^ _0x4f5b29 : _0xdaf98d | _0x2cd0d0 ? 1073741824 & _0x4dea67 ? 3221225472 ^ _0x4dea67 ^ _0x352ff0 ^ _0x4f5b29 : 1073741824 ^ _0x4dea67 ^ _0x352ff0 ^ _0x4f5b29 : _0x4dea67 ^ _0x352ff0 ^ _0x4f5b29;
  }
  function _0x25d588(_0x2641a8, _0x4e5e0d, _0x1cbd55) {
    return _0x2641a8 & _0x4e5e0d | ~_0x2641a8 & _0x1cbd55;
  }
  function _0x21661b(_0x569b2b, _0x177ade, _0x50de51) {
    return _0x569b2b & _0x50de51 | _0x177ade & ~_0x50de51;
  }
  function _0x1a792b(_0x90f72a, _0x48595b, _0x2101ff) {
    return _0x90f72a ^ _0x48595b ^ _0x2101ff;
  }
  function _0x1d59fd(_0x4e8b8d, _0x1f567f, _0x22a1b7) {
    return _0x1f567f ^ (_0x4e8b8d | ~_0x22a1b7);
  }
  function _0x22b60d(_0x39d262, _0xa16cbe, _0x441a0e, _0x48b46b, _0x15bbe0, _0x5cbfb4, _0x5a83cb) {
    _0x39d262 = _0x1e9de4(_0x39d262, _0x1e9de4(_0x1e9de4(_0x25d588(_0xa16cbe, _0x441a0e, _0x48b46b), _0x15bbe0), _0x5a83cb));
    return _0x1e9de4(_0x2e439c(_0x39d262, _0x5cbfb4), _0xa16cbe);
  }
  function _0x973b8e(_0x4bfa43, _0x4190f9, _0x1fdcc8, _0x450d78, _0x23d5a3, _0x1012b6, _0x1d543d) {
    _0x4bfa43 = _0x1e9de4(_0x4bfa43, _0x1e9de4(_0x1e9de4(_0x21661b(_0x4190f9, _0x1fdcc8, _0x450d78), _0x23d5a3), _0x1d543d));
    return _0x1e9de4(_0x2e439c(_0x4bfa43, _0x1012b6), _0x4190f9);
  }
  function _0xa4bbcd(_0x2260e6, _0x39dd1f, _0x4c4f24, _0x311a57, _0xa0ceb0, _0x3b40fe, _0x2e9a12) {
    _0x2260e6 = _0x1e9de4(_0x2260e6, _0x1e9de4(_0x1e9de4(_0x1a792b(_0x39dd1f, _0x4c4f24, _0x311a57), _0xa0ceb0), _0x2e9a12));
    return _0x1e9de4(_0x2e439c(_0x2260e6, _0x3b40fe), _0x39dd1f);
  }
  function _0x311afc(_0x477d5a, _0x26e9ba, _0x315b63, _0x42217e, _0x1316c9, _0xbc8e80, _0x42d2d9) {
    _0x477d5a = _0x1e9de4(_0x477d5a, _0x1e9de4(_0x1e9de4(_0x1d59fd(_0x26e9ba, _0x315b63, _0x42217e), _0x1316c9), _0x42d2d9));
    return _0x1e9de4(_0x2e439c(_0x477d5a, _0xbc8e80), _0x26e9ba);
  }
  function _0xb38b60(_0x338128) {
    for (var _0x2cfd3a, _0x5db6ef = _0x338128.length, _0x44bf84 = _0x5db6ef + 8, _0x2d38ee = (_0x44bf84 - _0x44bf84 % 64) / 64, _0x1ebe9c = 16 * (_0x2d38ee + 1), _0x1a2bdd = new Array(_0x1ebe9c - 1), _0x1495bf = 0, _0x39c94f = 0; _0x5db6ef > _0x39c94f;) {
      _0x2cfd3a = (_0x39c94f - _0x39c94f % 4) / 4;
      _0x1495bf = _0x39c94f % 4 * 8;
      _0x1a2bdd[_0x2cfd3a] = _0x1a2bdd[_0x2cfd3a] | _0x338128.charCodeAt(_0x39c94f) << _0x1495bf;
      _0x39c94f++;
    }
    _0x2cfd3a = (_0x39c94f - _0x39c94f % 4) / 4;
    _0x1495bf = _0x39c94f % 4 * 8;
    _0x1a2bdd[_0x2cfd3a] = _0x1a2bdd[_0x2cfd3a] | 128 << _0x1495bf;
    _0x1a2bdd[_0x1ebe9c - 2] = _0x5db6ef << 3;
    _0x1a2bdd[_0x1ebe9c - 1] = _0x5db6ef >>> 29;
    return _0x1a2bdd;
  }
  function _0x5bc5c8(_0x5f1f36) {
    var _0x1cbeba,
      _0x3db0bb,
      _0x52c2e4 = "",
      _0x107a00 = "";
    for (_0x3db0bb = 0; 3 >= _0x3db0bb; _0x3db0bb++) {
      _0x1cbeba = _0x5f1f36 >>> 8 * _0x3db0bb & 255;
      _0x107a00 = "0" + _0x1cbeba.toString(16);
      _0x52c2e4 += _0x107a00.substr(_0x107a00.length - 2, 2);
    }
    return _0x52c2e4;
  }
  function _0x25caee(_0x59478a) {
    _0x59478a = _0x59478a.replace(/\r\n/g, "\n");
    for (var _0x209230 = "", _0x308f95 = 0; _0x308f95 < _0x59478a.length; _0x308f95++) {
      var _0xef47cd = _0x59478a.charCodeAt(_0x308f95);
      128 > _0xef47cd ? _0x209230 += String.fromCharCode(_0xef47cd) : _0xef47cd > 127 && 2048 > _0xef47cd ? (_0x209230 += String.fromCharCode(_0xef47cd >> 6 | 192), _0x209230 += String.fromCharCode(63 & _0xef47cd | 128)) : (_0x209230 += String.fromCharCode(_0xef47cd >> 12 | 224), _0x209230 += String.fromCharCode(_0xef47cd >> 6 & 63 | 128), _0x209230 += String.fromCharCode(63 & _0xef47cd | 128));
    }
    return _0x209230;
  }
  var _0x45a8c7,
    _0x4e8b45,
    _0x3dca4b,
    _0x57b554,
    _0x3ee307,
    _0x1fe836,
    _0x325fab,
    _0x121540,
    _0x373b91,
    _0x392e29 = [],
    _0x706bf3 = 7,
    _0x5b8ff9 = 12,
    _0xa345a6 = 17,
    _0x42f244 = 22,
    _0x1c58bd = 5,
    _0x112e8e = 9,
    _0x3aa22f = 14,
    _0x33f476 = 20,
    _0x520597 = 4,
    _0x330b6b = 11,
    _0x1794da = 16,
    _0x4be989 = 23,
    _0x21a0d0 = 6,
    _0x1b71fc = 10,
    _0x4d6532 = 15,
    _0x367be7 = 21;
  for (_0x26185a = _0x25caee(_0x26185a), _0x392e29 = _0xb38b60(_0x26185a), _0x1fe836 = 1732584193, _0x325fab = 4023233417, _0x121540 = 2562383102, _0x373b91 = 271733878, _0x45a8c7 = 0; _0x45a8c7 < _0x392e29.length; _0x45a8c7 += 16) {
    _0x4e8b45 = _0x1fe836;
    _0x3dca4b = _0x325fab;
    _0x57b554 = _0x121540;
    _0x3ee307 = _0x373b91;
    _0x1fe836 = _0x22b60d(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 0], _0x706bf3, 3614090360);
    _0x373b91 = _0x22b60d(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 1], _0x5b8ff9, 3905402710);
    _0x121540 = _0x22b60d(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 2], _0xa345a6, 606105819);
    _0x325fab = _0x22b60d(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 3], _0x42f244, 3250441966);
    _0x1fe836 = _0x22b60d(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 4], _0x706bf3, 4118548399);
    _0x373b91 = _0x22b60d(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 5], _0x5b8ff9, 1200080426);
    _0x121540 = _0x22b60d(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 6], _0xa345a6, 2821735955);
    _0x325fab = _0x22b60d(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 7], _0x42f244, 4249261313);
    _0x1fe836 = _0x22b60d(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 8], _0x706bf3, 1770035416);
    _0x373b91 = _0x22b60d(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 9], _0x5b8ff9, 2336552879);
    _0x121540 = _0x22b60d(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 10], _0xa345a6, 4294925233);
    _0x325fab = _0x22b60d(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 11], _0x42f244, 2304563134);
    _0x1fe836 = _0x22b60d(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 12], _0x706bf3, 1804603682);
    _0x373b91 = _0x22b60d(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 13], _0x5b8ff9, 4254626195);
    _0x121540 = _0x22b60d(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 14], _0xa345a6, 2792965006);
    _0x325fab = _0x22b60d(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 15], _0x42f244, 1236535329);
    _0x1fe836 = _0x973b8e(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 1], _0x1c58bd, 4129170786);
    _0x373b91 = _0x973b8e(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 6], _0x112e8e, 3225465664);
    _0x121540 = _0x973b8e(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 11], _0x3aa22f, 643717713);
    _0x325fab = _0x973b8e(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 0], _0x33f476, 3921069994);
    _0x1fe836 = _0x973b8e(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 5], _0x1c58bd, 3593408605);
    _0x373b91 = _0x973b8e(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 10], _0x112e8e, 38016083);
    _0x121540 = _0x973b8e(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 15], _0x3aa22f, 3634488961);
    _0x325fab = _0x973b8e(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 4], _0x33f476, 3889429448);
    _0x1fe836 = _0x973b8e(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 9], _0x1c58bd, 568446438);
    _0x373b91 = _0x973b8e(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 14], _0x112e8e, 3275163606);
    _0x121540 = _0x973b8e(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 3], _0x3aa22f, 4107603335);
    _0x325fab = _0x973b8e(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 8], _0x33f476, 1163531501);
    _0x1fe836 = _0x973b8e(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 13], _0x1c58bd, 2850285829);
    _0x373b91 = _0x973b8e(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 2], _0x112e8e, 4243563512);
    _0x121540 = _0x973b8e(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 7], _0x3aa22f, 1735328473);
    _0x325fab = _0x973b8e(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 12], _0x33f476, 2368359562);
    _0x1fe836 = _0xa4bbcd(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 5], _0x520597, 4294588738);
    _0x373b91 = _0xa4bbcd(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 8], _0x330b6b, 2272392833);
    _0x121540 = _0xa4bbcd(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 11], _0x1794da, 1839030562);
    _0x325fab = _0xa4bbcd(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 14], _0x4be989, 4259657740);
    _0x1fe836 = _0xa4bbcd(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 1], _0x520597, 2763975236);
    _0x373b91 = _0xa4bbcd(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 4], _0x330b6b, 1272893353);
    _0x121540 = _0xa4bbcd(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 7], _0x1794da, 4139469664);
    _0x325fab = _0xa4bbcd(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 10], _0x4be989, 3200236656);
    _0x1fe836 = _0xa4bbcd(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 13], _0x520597, 681279174);
    _0x373b91 = _0xa4bbcd(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 0], _0x330b6b, 3936430074);
    _0x121540 = _0xa4bbcd(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 3], _0x1794da, 3572445317);
    _0x325fab = _0xa4bbcd(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 6], _0x4be989, 76029189);
    _0x1fe836 = _0xa4bbcd(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 9], _0x520597, 3654602809);
    _0x373b91 = _0xa4bbcd(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 12], _0x330b6b, 3873151461);
    _0x121540 = _0xa4bbcd(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 15], _0x1794da, 530742520);
    _0x325fab = _0xa4bbcd(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 2], _0x4be989, 3299628645);
    _0x1fe836 = _0x311afc(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 0], _0x21a0d0, 4096336452);
    _0x373b91 = _0x311afc(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 7], _0x1b71fc, 1126891415);
    _0x121540 = _0x311afc(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 14], _0x4d6532, 2878612391);
    _0x325fab = _0x311afc(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 5], _0x367be7, 4237533241);
    _0x1fe836 = _0x311afc(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 12], _0x21a0d0, 1700485571);
    _0x373b91 = _0x311afc(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 3], _0x1b71fc, 2399980690);
    _0x121540 = _0x311afc(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 10], _0x4d6532, 4293915773);
    _0x325fab = _0x311afc(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 1], _0x367be7, 2240044497);
    _0x1fe836 = _0x311afc(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 8], _0x21a0d0, 1873313359);
    _0x373b91 = _0x311afc(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 15], _0x1b71fc, 4264355552);
    _0x121540 = _0x311afc(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 6], _0x4d6532, 2734768916);
    _0x325fab = _0x311afc(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 13], _0x367be7, 1309151649);
    _0x1fe836 = _0x311afc(_0x1fe836, _0x325fab, _0x121540, _0x373b91, _0x392e29[_0x45a8c7 + 4], _0x21a0d0, 4149444226);
    _0x373b91 = _0x311afc(_0x373b91, _0x1fe836, _0x325fab, _0x121540, _0x392e29[_0x45a8c7 + 11], _0x1b71fc, 3174756917);
    _0x121540 = _0x311afc(_0x121540, _0x373b91, _0x1fe836, _0x325fab, _0x392e29[_0x45a8c7 + 2], _0x4d6532, 718787259);
    _0x325fab = _0x311afc(_0x325fab, _0x121540, _0x373b91, _0x1fe836, _0x392e29[_0x45a8c7 + 9], _0x367be7, 3951481745);
    _0x1fe836 = _0x1e9de4(_0x1fe836, _0x4e8b45);
    _0x325fab = _0x1e9de4(_0x325fab, _0x3dca4b);
    _0x121540 = _0x1e9de4(_0x121540, _0x57b554);
    _0x373b91 = _0x1e9de4(_0x373b91, _0x3ee307);
  }
  var _0x200a21 = _0x5bc5c8(_0x1fe836) + _0x5bc5c8(_0x325fab) + _0x5bc5c8(_0x121540) + _0x5bc5c8(_0x373b91);
  return _0x200a21.toLowerCase();
}
function Base64() {
  var _0x276f9e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x4ed412) {
    var _0x4bef1c = "";
    var _0x33a658, _0x34e23e, _0x56909a, _0x36d9db, _0x21f915, _0xfbf68b, _0x4a862e;
    var _0x2d2cca = 0;
    _0x4ed412 = utf8Encode(_0x4ed412);
    while (_0x2d2cca < _0x4ed412.length) {
      _0x33a658 = _0x4ed412.charCodeAt(_0x2d2cca++);
      _0x34e23e = _0x4ed412.charCodeAt(_0x2d2cca++);
      _0x56909a = _0x4ed412.charCodeAt(_0x2d2cca++);
      _0x36d9db = _0x33a658 >> 2;
      _0x21f915 = (_0x33a658 & 3) << 4 | _0x34e23e >> 4;
      _0xfbf68b = (_0x34e23e & 15) << 2 | _0x56909a >> 6;
      _0x4a862e = _0x56909a & 63;
      if (isNaN(_0x34e23e)) {
        _0xfbf68b = _0x4a862e = 64;
      } else {
        if (isNaN(_0x56909a)) {
          _0x4a862e = 64;
        }
      }
      _0x4bef1c = _0x4bef1c + _0x276f9e.charAt(_0x36d9db) + _0x276f9e.charAt(_0x21f915) + _0x276f9e.charAt(_0xfbf68b) + _0x276f9e.charAt(_0x4a862e);
    }
    return _0x4bef1c;
  };
  this.decode = function (_0x4ca02a) {
    var _0x30cb5c = "";
    var _0x48ee62, _0xc15f22, _0x18d0ed;
    var _0x468f4e, _0x350d73, _0x14e11e, _0x34f69f;
    var _0x33596c = 0;
    _0x4ca02a = _0x4ca02a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x33596c < _0x4ca02a.length) {
      _0x468f4e = _0x276f9e.indexOf(_0x4ca02a.charAt(_0x33596c++));
      _0x350d73 = _0x276f9e.indexOf(_0x4ca02a.charAt(_0x33596c++));
      _0x14e11e = _0x276f9e.indexOf(_0x4ca02a.charAt(_0x33596c++));
      _0x34f69f = _0x276f9e.indexOf(_0x4ca02a.charAt(_0x33596c++));
      _0x48ee62 = _0x468f4e << 2 | _0x350d73 >> 4;
      _0xc15f22 = (_0x350d73 & 15) << 4 | _0x14e11e >> 2;
      _0x18d0ed = (_0x14e11e & 3) << 6 | _0x34f69f;
      _0x30cb5c = _0x30cb5c + String.fromCharCode(_0x48ee62);
      if (_0x14e11e !== 64) {
        _0x30cb5c = _0x30cb5c + String.fromCharCode(_0xc15f22);
      }
      if (_0x34f69f !== 64) {
        _0x30cb5c = _0x30cb5c + String.fromCharCode(_0x18d0ed);
      }
    }
    _0x30cb5c = utf8Decode(_0x30cb5c);
    return _0x30cb5c;
  };
  utf8Encode = function (_0x562249) {
    _0x562249 = _0x562249.replace(/\r\n/g, "\n");
    var _0x2d0030 = "";
    for (var _0x162a74 = 0; _0x162a74 < _0x562249.length; _0x162a74++) {
      var _0x177638 = _0x562249.charCodeAt(_0x162a74);
      if (_0x177638 < 128) {
        _0x2d0030 += String.fromCharCode(_0x177638);
      } else {
        if (_0x177638 > 127 && _0x177638 < 2048) {
          _0x2d0030 += String.fromCharCode(_0x177638 >> 6 | 192);
          _0x2d0030 += String.fromCharCode(_0x177638 & 63 | 128);
        } else {
          _0x2d0030 += String.fromCharCode(_0x177638 >> 12 | 224);
          _0x2d0030 += String.fromCharCode(_0x177638 >> 6 & 63 | 128);
          _0x2d0030 += String.fromCharCode(_0x177638 & 63 | 128);
        }
      }
    }
    return _0x2d0030;
  };
  utf8Decode = function (_0x1ea0bf) {
    var _0x45890d = "";
    var _0x2feffd = 0;
    var _0x18947e = 0;
    var _0x1d8ddb = 0;
    var _0xf91c79 = 0;
    while (_0x2feffd < _0x1ea0bf.length) {
      _0x18947e = _0x1ea0bf.charCodeAt(_0x2feffd);
      if (_0x18947e < 128) {
        _0x45890d += String.fromCharCode(_0x18947e);
        _0x2feffd++;
      } else {
        if (_0x18947e > 191 && _0x18947e < 224) {
          _0x1d8ddb = _0x1ea0bf.charCodeAt(_0x2feffd + 1);
          _0x45890d += String.fromCharCode((_0x18947e & 31) << 6 | _0x1d8ddb & 63);
          _0x2feffd += 2;
        } else {
          _0x1d8ddb = _0x1ea0bf.charCodeAt(_0x2feffd + 1);
          _0xf91c79 = _0x1ea0bf.charCodeAt(_0x2feffd + 2);
          _0x45890d += String.fromCharCode((_0x18947e & 15) << 12 | (_0x1d8ddb & 63) << 6 | _0xf91c79 & 63);
          _0x2feffd += 3;
        }
      }
    }
    return _0x45890d;
  };
}
function Env(_0x5b83c6, _0x45c2c0) {
  class _0x307511 {
    constructor(_0x43fa54) {
      this.env = _0x43fa54;
    }
    send(_0x3c2a81, _0xca8679 = "GET") {
      _0x3c2a81 = typeof _0x3c2a81 === "string" ? {
        url: _0x3c2a81
      } : _0x3c2a81;
      let _0x1d511c = this.get;
      if (_0xca8679 === "POST") {
        _0x1d511c = this.post;
      }
      return new Promise((_0x5d1a7d, _0x2b84aa) => {
        _0x1d511c.call(this, _0x3c2a81, (_0x2ddd2d, _0x5b2733, _0x941769) => {
          if (_0x2ddd2d) {
            _0x2b84aa(_0x2ddd2d);
          } else {
            _0x5d1a7d(_0x5b2733);
          }
        });
      });
    }
    get(_0x5ca39d) {
      return this.send.call(this.env, _0x5ca39d);
    }
    post(_0x133ab8) {
      return this.send.call(this.env, _0x133ab8, "POST");
    }
  }
  return new class {
    constructor(_0x3dca1d, _0x45fbe5) {
      this.name = _0x3dca1d;
      this.http = new _0x307511(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x45fbe5);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" !== typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" !== typeof $task;
    }
    isSurge() {
      return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
    }
    isLoon() {
      return "undefined" !== typeof $loon;
    }
    isShadowrocket() {
      return "undefined" !== typeof $rocket;
    }
    toObj(_0x50b4b2, _0x5e9c5e = null) {
      try {
        return JSON.parse(_0x50b4b2);
      } catch {
        return _0x5e9c5e;
      }
    }
    toStr(_0xeff143, _0x4ec4ce = null) {
      try {
        return JSON.stringify(_0xeff143);
      } catch {
        return _0x4ec4ce;
      }
    }
    getjson(_0x2d38d4, _0x5063b2) {
      let _0x1f9b05 = _0x5063b2;
      const _0x6e084 = this.getdata(_0x2d38d4);
      if (_0x6e084) {
        try {
          _0x1f9b05 = JSON.parse(this.getdata(_0x2d38d4));
        } catch {}
      }
      return _0x1f9b05;
    }
    setjson(_0x163022, _0x5be988) {
      try {
        return this.setdata(JSON.stringify(_0x163022), _0x5be988);
      } catch {
        return false;
      }
    }
    getScript(_0x5584a8) {
      return new Promise(_0x4a3846 => {
        const _0x261b5d = {
          url: _0x5584a8
        };
        this.get(_0x261b5d, (_0x3517d4, _0x262d2d, _0x11190a) => _0x4a3846(_0x11190a));
      });
    }
    runScript(_0x4cf5e1, _0x4a28b9) {
      return new Promise(_0x806263 => {
        let _0x4e114c = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4e114c = _0x4e114c ? _0x4e114c.replace(/\n/g, "").trim() : _0x4e114c;
        let _0xb68953 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0xb68953 = _0xb68953 ? _0xb68953 * 1 : 20;
        _0xb68953 = _0x4a28b9 && _0x4a28b9.timeout ? _0x4a28b9.timeout : _0xb68953;
        const [_0x518ee0, _0x36c6b5] = _0x4e114c.split("@");
        const _0x3fea6f = {
          script_text: _0x4cf5e1,
          mock_type: "cron",
          timeout: _0xb68953
        };
        const _0x31dab8 = {
          "X-Key": _0x518ee0,
          Accept: "*/*"
        };
        const _0x3cf03f = {
          url: "http: //" + _0x36c6b5 + "/v1/scripting/evaluate",
          body: _0x3fea6f,
          headers: _0x31dab8
        };
        this.post(_0x3cf03f, (_0x5256fa, _0x558bee, _0x3caf2b) => _0x806263(_0x3caf2b));
      }).catch(_0x12c4c => this.logErr(_0x12c4c));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x25afd9 = this.path.resolve(this.dataFile);
        const _0x52a5f6 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x5cd9f7 = this.fs.existsSync(_0x25afd9);
        const _0x5ae996 = !_0x5cd9f7 && this.fs.existsSync(_0x52a5f6);
        if (_0x5cd9f7 || _0x5ae996) {
          const _0x3da41e = _0x5cd9f7 ? _0x25afd9 : _0x52a5f6;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3da41e));
          } catch (_0x904867) {
            return {};
          }
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x415f2b = this.path.resolve(this.dataFile);
        const _0x4fbc00 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x49c483 = this.fs.existsSync(_0x415f2b);
        const _0x5ce3b9 = !_0x49c483 && this.fs.existsSync(_0x4fbc00);
        const _0x5e41fb = JSON.stringify(this.data);
        if (_0x49c483) {
          this.fs.writeFileSync(_0x415f2b, _0x5e41fb);
        } else {
          if (_0x5ce3b9) {
            this.fs.writeFileSync(_0x4fbc00, _0x5e41fb);
          } else {
            this.fs.writeFileSync(_0x415f2b, _0x5e41fb);
          }
        }
      }
    }
    lodash_get(_0x1da3eb, _0x119c7e, _0xd03124 = undefined) {
      const _0x295fb9 = _0x119c7e.replace(/[(d+)]/g, ".$1").split(".");
      let _0x811ff1 = _0x1da3eb;
      for (const _0x341f22 of _0x295fb9) {
        _0x811ff1 = Object(_0x811ff1)[_0x341f22];
        if (_0x811ff1 === undefined) {
          return _0xd03124;
        }
      }
      return _0x811ff1;
    }
    lodash_set(_0x495001, _0x5b4b3b, _0x137b13) {
      if (Object(_0x495001) !== _0x495001) {
        return _0x495001;
      }
      if (!Array.isArray(_0x5b4b3b)) {
        _0x5b4b3b = _0x5b4b3b.toString().match(/[^.[]]+/g) || [];
      }
      _0x5b4b3b.slice(0, -1).reduce((_0x10417d, _0x3da11d, _0x569b5e) => Object(_0x10417d[_0x3da11d]) === _0x10417d[_0x3da11d] ? _0x10417d[_0x3da11d] : _0x10417d[_0x3da11d] = Math.abs(_0x5b4b3b[_0x569b5e + 1]) >> 0 === +_0x5b4b3b[_0x569b5e + 1] ? [] : {}, _0x495001)[_0x5b4b3b[_0x5b4b3b.length - 1]] = _0x137b13;
      return _0x495001;
    }
    getdata(_0x29a173) {
      let _0x4b633e = this.getval(_0x29a173);
      if (/^@/.test(_0x29a173)) {
        const [, _0x3d1aa9, _0x5e5af5] = /^@(.*?).(.*?)$/.exec(_0x29a173);
        const _0x206630 = _0x3d1aa9 ? this.getval(_0x3d1aa9) : "";
        if (_0x206630) {
          try {
            const _0x3e1851 = JSON.parse(_0x206630);
            _0x4b633e = _0x3e1851 ? this.lodash_get(_0x3e1851, _0x5e5af5, "") : _0x4b633e;
          } catch (_0x2a89ac) {
            _0x4b633e = "";
          }
        }
      }
      return _0x4b633e;
    }
    setdata(_0x42ec52, _0x1ee9a9) {
      let _0x5c9612 = false;
      if (/^@/.test(_0x1ee9a9)) {
        const [, _0x235a65, _0x1493ca] = /^@(.*?).(.*?)$/.exec(_0x1ee9a9);
        const _0x2ef1de = this.getval(_0x235a65);
        const _0x591e4b = _0x235a65 ? _0x2ef1de === "null" ? null : _0x2ef1de || "{}" : "{}";
        try {
          const _0x55b1f0 = JSON.parse(_0x591e4b);
          this.lodash_set(_0x55b1f0, _0x1493ca, _0x42ec52);
          _0x5c9612 = this.setval(JSON.stringify(_0x55b1f0), _0x235a65);
        } catch (_0x32aef4) {
          const _0x4b775c = {};
          this.lodash_set(_0x4b775c, _0x1493ca, _0x42ec52);
          _0x5c9612 = this.setval(JSON.stringify(_0x4b775c), _0x235a65);
        }
      } else {
        _0x5c9612 = this.setval(_0x42ec52, _0x1ee9a9);
      }
      return _0x5c9612;
    }
    getval(_0x440973) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x440973);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x440973);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x440973];
          } else {
            return this.data && this.data[_0x440973] || null;
          }
        }
      }
    }
    setval(_0x13654c, _0x13ad1b) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x13654c, _0x13ad1b);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x13654c, _0x13ad1b);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x13ad1b] = _0x13654c;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x13ad1b] || null;
          }
        }
      }
    }
    initGotEnv(_0x101efd) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x101efd) {
        _0x101efd.headers = _0x101efd.headers ? _0x101efd.headers : {};
        if (undefined === _0x101efd.headers.Cookie && undefined === _0x101efd.cookieJar) {
          _0x101efd.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x2543f7, _0x2d02de = () => {}) {
      if (_0x2543f7.headers) {
        delete _0x2543f7.headers["Content-Type"];
        delete _0x2543f7.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x2543f7.headers = _0x2543f7.headers || {};
          const _0x300193 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x2543f7.headers, _0x300193);
        }
        $httpClient.get(_0x2543f7, (_0x1e5d3b, _0x5bbeca, _0x3941a6) => {
          if (!_0x1e5d3b && _0x5bbeca) {
            _0x5bbeca.body = _0x3941a6;
            _0x5bbeca.statusCode = _0x5bbeca.status;
          }
          _0x2d02de(_0x1e5d3b, _0x5bbeca, _0x3941a6);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x2543f7.opts = _0x2543f7.opts || {};
            const _0x462ece = {
              hints: false
            };
            Object.assign(_0x2543f7.opts, _0x462ece);
          }
          $task.fetch(_0x2543f7).then(_0x25bbb5 => {
            const {
              statusCode: _0xc0a9c9,
              statusCode,
              headers,
              body
            } = _0x25bbb5;
            const _0x325dd6 = {
              status: _0xc0a9c9,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x2d02de(null, _0x325dd6, body);
          }, _0x19f9bd => _0x2d02de(_0x19f9bd));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x2543f7);
            this.got(_0x2543f7).on("redirect", (_0x3d052a, _0x265960) => {
              try {
                if (_0x3d052a.headers["set-cookie"]) {
                  const _0x53e2ea = _0x3d052a.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x53e2ea) {
                    this.ckjar.setCookieSync(_0x53e2ea, null);
                  }
                  _0x265960.cookieJar = this.ckjar;
                }
              } catch (_0xefe642) {
                this.logErr(_0xefe642);
              }
            }).then(_0x5dfc5b => {
              const {
                statusCode: _0x2256f6,
                statusCode,
                headers,
                body
              } = _0x5dfc5b;
              const _0x12d99b = {
                status: _0x2256f6,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x2d02de(null, _0x12d99b, body);
            }, _0x1811ce => {
              const {
                message: _0x2caba2,
                response: _0x49ccde
              } = _0x1811ce;
              _0x2d02de(_0x2caba2, _0x49ccde, _0x49ccde && _0x49ccde.body);
            });
          }
        }
      }
    }
    post(_0x3ef8dc, _0x38052f = () => {}) {
      const _0x50e768 = _0x3ef8dc.method ? _0x3ef8dc.method.toLocaleLowerCase() : "post";
      if (_0x3ef8dc.body && _0x3ef8dc.headers && !_0x3ef8dc.headers["Content-Type"]) {
        _0x3ef8dc.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x3ef8dc.headers) {
        delete _0x3ef8dc.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x3ef8dc.headers = _0x3ef8dc.headers || {};
          const _0x29eb9e = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x3ef8dc.headers, _0x29eb9e);
        }
        $httpClient[_0x50e768](_0x3ef8dc, (_0x1e5a06, _0x420454, _0x239ede) => {
          if (!_0x1e5a06 && _0x420454) {
            _0x420454.body = _0x239ede;
            _0x420454.statusCode = _0x420454.status;
          }
          _0x38052f(_0x1e5a06, _0x420454, _0x239ede);
        });
      } else {
        if (this.isQuanX()) {
          _0x3ef8dc.method = _0x50e768;
          if (this.isNeedRewrite) {
            _0x3ef8dc.opts = _0x3ef8dc.opts || {};
            const _0x33f280 = {
              hints: false
            };
            Object.assign(_0x3ef8dc.opts, _0x33f280);
          }
          $task.fetch(_0x3ef8dc).then(_0x273355 => {
            const {
              statusCode: _0x146ea1,
              statusCode,
              headers,
              body
            } = _0x273355;
            const _0x44ba54 = {
              status: _0x146ea1,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x38052f(null, _0x44ba54, body);
          }, _0x506653 => _0x38052f(_0x506653));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x3ef8dc);
            const {
              url,
              ..._0x284fe2
            } = _0x3ef8dc;
            this.got[_0x50e768](url, _0x284fe2).then(_0x2ee38d => {
              const {
                statusCode: _0x2bccbe,
                statusCode,
                headers,
                body
              } = _0x2ee38d;
              const _0x1a4ddd = {
                status: _0x2bccbe,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x38052f(null, _0x1a4ddd, body);
            }, _0x2e941a => {
              const {
                message: _0x3f2591,
                response: _0x17a99c
              } = _0x2e941a;
              _0x38052f(_0x3f2591, _0x17a99c, _0x17a99c && _0x17a99c.body);
            });
          }
        }
      }
    }
    put(_0x54daac, _0x2d7a4c = () => {}) {
      const _0x3b3812 = _0x54daac.method ? _0x54daac.method.toLocaleLowerCase() : "put";
      if (_0x54daac.body && _0x54daac.headers && !_0x54daac.headers["Content-Type"]) {
        _0x54daac.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x54daac.headers) {
        delete _0x54daac.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x54daac.headers = _0x54daac.headers || {};
          const _0x46743f = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x54daac.headers, _0x46743f);
        }
        $httpClient[_0x3b3812](_0x54daac, (_0x489d4f, _0x4bb860, _0x72066) => {
          if (!_0x489d4f && _0x4bb860) {
            _0x4bb860.body = _0x72066;
            _0x4bb860.statusCode = _0x4bb860.status;
          }
          _0x2d7a4c(_0x489d4f, _0x4bb860, _0x72066);
        });
      } else {
        if (this.isQuanX()) {
          _0x54daac.method = _0x3b3812;
          if (this.isNeedRewrite) {
            _0x54daac.opts = _0x54daac.opts || {};
            const _0x3250e2 = {
              hints: false
            };
            Object.assign(_0x54daac.opts, _0x3250e2);
          }
          $task.fetch(_0x54daac).then(_0x1cded3 => {
            const {
              statusCode: _0x262211,
              statusCode,
              headers,
              body
            } = _0x1cded3;
            const _0x155b36 = {
              status: _0x262211,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x2d7a4c(null, _0x155b36, body);
          }, _0x24d0c1 => _0x2d7a4c(_0x24d0c1));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x54daac);
            const {
              url,
              ..._0x178e2d
            } = _0x54daac;
            this.got[_0x3b3812](url, _0x178e2d).then(_0x43ce03 => {
              const {
                statusCode: _0x4b4465,
                statusCode,
                headers,
                body
              } = _0x43ce03;
              const _0x752b50 = {
                status: _0x4b4465,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x2d7a4c(null, _0x752b50, body);
            }, _0x574d28 => {
              const {
                message: _0x3a9120,
                response: _0x5ee830
              } = _0x574d28;
              _0x2d7a4c(_0x3a9120, _0x5ee830, _0x5ee830 && _0x5ee830.body);
            });
          }
        }
      }
    }
    time(_0x23ec62, _0x1ee5f6 = null) {
      const _0x2a9412 = _0x1ee5f6 ? new Date(_0x1ee5f6) : new Date();
      let _0x3f996d = {
        "M+": _0x2a9412.getMonth() + 1,
        "d+": _0x2a9412.getDate(),
        "H+": _0x2a9412.getHours(),
        "m+": _0x2a9412.getMinutes(),
        "s+": _0x2a9412.getSeconds(),
        "q+": Math.floor((_0x2a9412.getMonth() + 3) / 3),
        S: _0x2a9412.getMilliseconds()
      };
      if (/(y+)/.test(_0x23ec62)) {
        _0x23ec62 = _0x23ec62.replace(RegExp.$1, (_0x2a9412.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x2714b7 in _0x3f996d) if (new RegExp("(" + _0x2714b7 + ")").test(_0x23ec62)) {
        _0x23ec62 = _0x23ec62.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x3f996d[_0x2714b7] : ("00" + _0x3f996d[_0x2714b7]).substr(("" + _0x3f996d[_0x2714b7]).length));
      }
      return _0x23ec62;
    }
    msg(_0x186e30 = _0x5b83c6, _0x51a335 = "", _0x5afd3c = "", _0x509dcb) {
      const _0x3e2eaf = _0x59c6c0 => {
        if (!_0x59c6c0) {
          return _0x59c6c0;
        }
        if (typeof _0x59c6c0 === "string") {
          if (this.isLoon()) {
            return _0x59c6c0;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x59c6c0
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x59c6c0
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x59c6c0 === "object") {
            if (this.isLoon()) {
              let _0x373057 = _0x59c6c0.openUrl || _0x59c6c0.url || _0x59c6c0["open-url"];
              let _0x1b4608 = _0x59c6c0.mediaUrl || _0x59c6c0["media-url"];
              const _0x1e799f = {
                openUrl: _0x373057,
                mediaUrl: _0x1b4608
              };
              return _0x1e799f;
            } else {
              if (this.isQuanX()) {
                let _0x414feb = _0x59c6c0["open-url"] || _0x59c6c0.url || _0x59c6c0.openUrl;
                let _0x4b515f = _0x59c6c0["media-url"] || _0x59c6c0.mediaUrl;
                const _0x450552 = {
                  "open-url": _0x414feb,
                  "media-url": _0x4b515f
                };
                return _0x450552;
              } else {
                if (this.isSurge()) {
                  let _0x31cad9 = _0x59c6c0.url || _0x59c6c0.openUrl || _0x59c6c0["open-url"];
                  const _0x3bfb07 = {
                    url: _0x31cad9
                  };
                  return _0x3bfb07;
                }
              }
            }
          } else {
            return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(_0x186e30, _0x51a335, _0x5afd3c, _0x3e2eaf(_0x509dcb));
        } else {
          if (this.isQuanX()) {
            $notify(_0x186e30, _0x51a335, _0x5afd3c, _0x3e2eaf(_0x509dcb));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x4b7a1f = ["", "==============📣系统通知📣=============="];
        _0x4b7a1f.push(_0x186e30);
        _0x51a335 ? _0x4b7a1f.push(_0x51a335) : "";
        _0x5afd3c ? _0x4b7a1f.push(_0x5afd3c) : "";
        console.log(_0x4b7a1f.join("\n"));
        this.logs = this.logs.concat(_0x4b7a1f);
      }
    }
    log(..._0xf91953) {
      if (_0xf91953.length > 0) {
        this.logs = [...this.logs, ..._0xf91953];
      }
      console.log(_0xf91953.join(this.logSeparator));
    }
    logErr(_0x197091, _0x4e9922) {
      const _0x79582f = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x79582f) {
        this.log("", "❗️" + this.name + ", 错误!", _0x197091);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x197091.stack);
      }
    }
    wait(_0x1f1f09) {
      return new Promise(_0x1a37fa => setTimeout(_0x1a37fa, _0x1f1f09));
    }
    done(_0x59c9d5 = {}) {
      const _0x4ed11f = new Date().getTime();
      const _0x4f103a = (_0x4ed11f - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x4f103a + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x59c9d5);
      }
    }
  }(_0x5b83c6, _0x45c2c0);
}