//Sun Sep 01 2024 13:47:02 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const David_0x3f1a58 = new David_0x5b6b2d("新氧医美"),
  David_0x3c5275 = "V1.0.4",
  David_0x59a6c0 = "xyymapp";
let David_0x18a085 = David_0x3f1a58.getjson(David_0x59a6c0, []);
const David_0x1533ae = David_0x3f1a58.isNode() ? require("fs") : "",
  David_0x407405 = David_0x3f1a58.isNode() ? require("ws") : "",
  David_0x1b16ad = "david_cookies.js";
David_0x3f1a58.isNode() && !David_0x1533ae.existsSync(David_0x1b16ad) && (David_0x3f1a58.log("🔔 外挂ck文件不存在，开始创建模版>>>"), David_0x1533ae.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x40db4d => {}));
const David_0x560ef8 = David_0x3f1a58.isNode() ? require("http") : "",
  David_0x268040 = David_0x3f1a58.isNode() ? require("./sendNotify") : "",
  David_0x277c40 = David_0x3f1a58.isNode() ? require("./david_cookies") : "";
let David_0x5d85a8 = David_0x3f1a58.getdata("tguserid") || 1,
  David_0x4d86b7 = David_0x3f1a58.getdata("xyymactivecode") || 0,
  David_0x4c80b6 = David_0x3f1a58.getval("xyymuserck") || 1,
  David_0x36cbf8 = David_0x3f1a58.getval("apiHost") || "http://106.15.104.124:8080";
David_0x3f1a58.getval("apiHosts") && (David_0x36cbf8 = David_0x3f1a58.getval("apiHosts"));
const David_0x27092a = 0;
let David_0x28ff48 = David_0x3f1a58.getval("tz") || "1";
var David_0x4cd2b6 = "",
  David_0x4821fe = "";
let David_0x4f17bb = "9.41.2";
let David_0x125f11 = "",
  David_0x5aa1a9 = [],
  David_0x11d295 = [],
  David_0x14d4e6 = [],
  David_0x2c041d = [],
  David_0x1a4285 = [],
  David_0x4eceba = [],
  David_0x2cef0b = [],
  David_0x1f22b0 = [],
  David_0x300812 = "",
  David_0x2fe7dc = "",
  David_0x5b1fb9 = "",
  David_0x4ecc6e = "",
  David_0x9d0a04 = "",
  David_0x48643b = "",
  David_0x551088 = "",
  David_0x31522d = "",
  David_0x4c13ad = 1,
  David_0x521a57 = 1,
  David_0x4fe3cd = 1,
  David_0x15629f = 1,
  David_0x5bc374 = "",
  David_0x225715 = "",
  David_0x43a26f = 3,
  David_0x558a82 = "";
if (David_0x3f1a58.isNode()) {
  process.env.XYYMAPP ? David_0x18a085 = JSON.parse(process.env.XYYMAPP) : David_0x18a085 = David_0x277c40.XYYM;
  David_0x5d85a8 = process.env.TGUSERID;
  David_0x4d86b7 = process.env.XYYMACTIVECODE;
  process.env.APIHOST && (David_0x36cbf8 = process.env.APIHOST);
  process.env.APIHOSTS && (David_0x36cbf8 = process.env.APIHOSTS);
  David_0x4cd2b6 = new Date(new Date().getTime()).getHours();
  David_0x4821fe = new Date(new Date().getTime()).getMinutes();
  David_0x3f1a58.log("🔔 当前环境: Node, 当前时间：" + David_0x4cd2b6 + "点");
} else {
  David_0x4cd2b6 = new Date().getHours();
  David_0x4821fe = new Date().getMinutes();
  David_0x3f1a58.log("🔔 当前环境: 手机代理, 当前时间：" + David_0x4cd2b6 + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await David_0x54fe1b();
  } else {
    if (!David_0x18a085) {
      David_0x3f1a58.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    David_0x3f1a58.log("📢 开始检测服务器接口状态>>>");
    let _0x41b501 = false;
    const _0x2ab8a2 = David_0x36cbf8.split("&"),
      _0x1a921e = _0x2ab8a2.length;
    for (let _0x201b11 = 0; _0x201b11 < _0x1a921e; _0x201b11++) {
      if (David_0x3f1a58.isNode()) {
        _0x41b501 = await David_0x33d388("" + _0x2ab8a2[_0x201b11], 2500);
      } else {
        if (David_0x3f1a58.isSurge() || David_0x3f1a58.isLoon()) {
          _0x41b501 = await David_0x5079ce("" + _0x2ab8a2[_0x201b11], 2500);
        } else {
          _0x41b501 = await David_0x48f833("" + _0x2ab8a2[_0x201b11], 2500);
        }
      }
      if (_0x41b501 == true) {
        David_0x36cbf8 = _0x2ab8a2[_0x201b11];
        David_0x3f1a58.log("📢 接口" + (_0x201b11 + 1) + "[" + _0x2ab8a2[_0x201b11] + "]服务器接口正常! 🎉");
        break;
      }
      if (_0x201b11 == _0x1a921e - 1 && _0x41b501 == false) {
        David_0x3f1a58.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        David_0x3f1a58.msg(David_0x3f1a58.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!David_0x4d86b7 || !David_0x5d85a8 || David_0x5d85a8 == 1 || David_0x4d86b7 == 0 || David_0x4d86b7.length != 32) {
      David_0x3f1a58.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await David_0x2218f7(David_0x59a6c0, David_0x5d85a8, David_0x4d86b7);
    David_0x3f1a58.log("📢 " + David_0x48643b);
    David_0x3f1a58.log("🔔 当前脚本版本号: " + David_0x3c5275 + "，最新版本号: " + David_0x4ecc6e);
    if (David_0x558a82 != "") {
      let _0x2660c8 = new Date(David_0x558a82).getTime(),
        _0x49aaa0 = new Date().getTime();
      if (_0x49aaa0 > _0x2660c8) {
        David_0x3f1a58.log("⚠️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (David_0x3c5275 < David_0x4ecc6e) {
      David_0x3f1a58.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      David_0x159913("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (David_0x5b1fb9 != true) {
      David_0x3f1a58.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (David_0x5bc374 != true) {
      David_0x3f1a58.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x2fe7dc != true) {
      David_0x3f1a58.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x31522d == true) {
      David_0x3f1a58.log("🔔 此脚本采用付费模式。🔒");
    } else {
      David_0x3f1a58.log("🔔 此脚本采用免费模式。🔓");
    }
    if (David_0x558a82 != "") {
      if (David_0x31522d == true) {
        David_0x3f1a58.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0x56ed3c = new Date(David_0x558a82).getTime(),
          _0xe18a85 = new Date().getTime();
        if (_0xe18a85 > _0x56ed3c) {
          David_0x3f1a58.log("⚠️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (David_0x551088 != true) {
        David_0x3f1a58.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      }
    }
    if (David_0x4c13ad > 1) {
      David_0x3f1a58.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + David_0x43a26f * David_0x4c13ad + "个账号。");
    }
    if (David_0x521a57 > 1) {
      David_0x3f1a58.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + David_0x4fe3cd + "次, 已经运行了" + David_0x15629f + "次。");
    }
    if (David_0x9d0a04 != true) {
      David_0x3f1a58.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (David_0x18a085.length > David_0x43a26f * David_0x4c13ad) {
      David_0x3f1a58.log("⚠️ 当前用户一次最多运行" + David_0x43a26f * David_0x4c13ad + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (David_0x18a085.length == 0) {
      David_0x3f1a58.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (David_0x15629f + David_0x18a085.length > David_0x4fe3cd) {
      David_0x3f1a58.log("📢 一共发现了" + David_0x18a085.length + "个账号");
      David_0x3f1a58.log("⚠️ 当前用户运行次数剩余" + (David_0x4fe3cd - David_0x15629f) + "次，还可以运行" + (David_0x4fe3cd - David_0x15629f) + "个账号，还需要" + (David_0x18a085.length - (David_0x4fe3cd - David_0x15629f)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (David_0x558a82 != "") {
      David_0x3f1a58.log("📢 你的会员有效期到： " + David_0x558a82);
    }
    David_0x3f1a58.log("📢 一共发现了" + David_0x18a085.length + "个账号");
    let _0x4ceba9 = [];
    for (let _0x529c5f = 0; _0x529c5f < David_0x18a085.length; _0x529c5f++) {
      David_0x5aa1a9[_0x529c5f] = "";
      if (David_0x3f1a58.isNode()) {
        if (_0x529c5f == 0) {
          await David_0x467a26(_0x529c5f);
        } else {
          David_0x14d4e6.push(David_0x14d4e6[0]);
        }
        David_0x2c041d[_0x529c5f] = 1;
      } else {
        David_0x2c041d[_0x529c5f] = 1;
      }
      await David_0x4eb37e(_0x529c5f);
      await David_0x425d7e(_0x529c5f);
      if (David_0x3f1a58.isNode() && _0x529c5f == David_0x18a085.length - 1) {
        await David_0x14d4e6[_0x529c5f].close();
      }
      await David_0x3eef53(David_0x59a6c0, David_0x5d85a8);
    }
    await Promise.allSettled(_0x4ceba9).then(_0x2f834d => {
      David_0x3f1a58.log("日志整理功能如下：");
      David_0x3f1a58.log("---------------日志整理开始--------------");
      for (let _0xbc0d7f = 0; _0xbc0d7f < David_0x18a085.length; _0xbc0d7f++) {
        David_0x3f1a58.log(David_0x5aa1a9[_0xbc0d7f]);
        David_0x125f11 += David_0x5aa1a9[_0xbc0d7f];
      }
      David_0x3f1a58.log("---------------日志整理结束--------------");
      David_0x159913(David_0x125f11);
    });
  }
})().catch(_0x4c3a7a => David_0x3f1a58.logErr(_0x4c3a7a)).finally(() => David_0x3f1a58.done());
async function David_0x183420(_0x3c39b6) {
  return new Promise((_0x4833da, _0x5aa3d0) => {
    David_0x3f1a58.log("[账号" + (_0x3c39b6 + 1 < 10 ? "0" + (_0x3c39b6 + 1) : _0x3c39b6 + 1) + "]: 开始执行 working......");
    David_0x24d416(_0x4833da, _0x3c39b6);
  });
}
async function David_0x467a26(_0x5e0ebb) {
  if (David_0x3f1a58.isNode()) {
    David_0x1a4285[_0x5e0ebb] > 0 && David_0x3f1a58.log("[账号00]: 尝试重新连接服务器>>>>>>");
    David_0x14d4e6[_0x5e0ebb] = new David_0x407405(David_0x36cbf8.replace("http", "ws") + "/ws");
    David_0x14d4e6[_0x5e0ebb].on("open", function _0x5567c0() {
      David_0x3f1a58.log("[账号00]: 签名通道已连接");
    });
    David_0x14d4e6[_0x5e0ebb].on("close", function _0x117f9e() {
      David_0x3f1a58.log("[账号00]: 签名通道已关闭，原因是任务已处理完成");
    });
    David_0x14d4e6[_0x5e0ebb].on("error", function _0x2aa533() {
      David_0x3f1a58.log("[账号00]: 签名通道已关闭，原因是出现错误");
      David_0x2c041d[_0x5e0ebb] = 1;
      David_0x1a4285[_0x5e0ebb]++;
      if (David_0x1a4285[_0x5e0ebb] <= 3) {
        David_0x467a26(_0x5e0ebb);
      }
    });
  }
}
async function David_0x24d416(_0x4b8b9b, _0x1c9b68) {
  await David_0x3f1a58.wait(3000, 5000);
  await David_0x425d7e(_0x1c9b68);
  await David_0x4eb37e(_0x1c9b68);
  David_0x3f1a58.isNode() && (await David_0x14d4e6[_0x1c9b68].close());
  await David_0x3eef53(David_0x59a6c0, David_0x5d85a8);
  _0x4b8b9b();
}
async function David_0x54fe1b() {
  if ($request.url.match(/\/v4\/unread/)) {
    const _0x454d98 = $request.url,
      _0x41dbf6 = _0x454d98 + "?params=" + $request.body,
      _0x3ea186 = David_0x3a3c7e(_0x41dbf6);
    let _0x5ad3ef = _0x3ea186.xy_token,
      _0x1d8b9a = _0x3ea186.uid,
      _0x36ba9d = David_0x4c80b6 - 1;
    if (David_0x18a085[_0x36ba9d]) {
      David_0x18a085[_0x36ba9d].xyToken = _0x5ad3ef;
      David_0x18a085[_0x36ba9d].uid = _0x1d8b9a;
    } else {
      const _0x308ba8 = {
        xyToken: _0x5ad3ef,
        uid: _0x1d8b9a
      };
      David_0x18a085[_0x36ba9d] = _0x308ba8;
    }
    David_0x3f1a58.setdata(JSON.stringify(David_0x18a085, null, 2), "xyymapp");
    David_0x3f1a58.msg(David_0x3f1a58.name, "新氧医美账号" + (_0x36ba9d + 1) + "Token获取成功！🎉");
  }
}
async function David_0x1bc5ec(_0x136998) {
  const _0x153b79 = "https://passport.soyoung.com/Apipassport/AppLoginNew";
  let _0x5a8a09 = David_0x28f0ab(David_0x18a085[_0x136998].mobile + "_" + David_0x18a085[_0x136998].password),
    _0x51f3b4 = await David_0x51ffc3(_0x136998, David_0x18a085[_0x136998].mobile, true);
  let _0x4ac0f0 = await David_0x51ffc3(_0x136998, David_0x18a085[_0x136998].password, true),
    _0x40c6bf = await David_0x183306(_0x136998, _0x153b79, "password=" + _0x4ac0f0 + "&key=" + _0x5a8a09 + "&password_encrypt=1&login_name=" + _0x51f3b4 + "&");
  await David_0x2f7e72(_0x153b79, _0x40c6bf, _0x136998);
  await David_0x1fa8ea("post", David_0x4eceba[_0x136998], David_0x3de523());
  let _0x31d30c = David_0x300812;
  if (_0x31d30c != null && _0x31d30c.errorCode == 0) {
    David_0x1f22b0[_0x136998] = _0x31d30c.responseData.xy_token;
    David_0x18a085[_0x136998].xyToken = _0x31d30c.responseData.xy_token;
    David_0x11d295[_0x136998] = _0x31d30c.responseData.uid;
    David_0x18a085[_0x136998].uid = _0x31d30c.responseData.uid;
    David_0x3f1a58.log("[账号" + (_0x136998 + 1 < 10 ? "0" + (_0x136998 + 1) : _0x136998 + 1) + "]: 通过手机号和密码登录成功，开始初始化参数>>>");
    David_0x5aa1a9[_0x136998] += "[账号" + (_0x136998 + 1 < 10 ? "0" + (_0x136998 + 1) : _0x136998 + 1) + "]: 通过手机号和密码登录成功，开始初始化参数>>>\n";
    David_0x3f1a58.log("[账号" + (_0x136998 + 1 < 10 ? "0" + (_0x136998 + 1) : _0x136998 + 1) + "]: 用户名=> " + _0x31d30c.responseData.nickname);
    David_0x5aa1a9[_0x136998] += "[账号" + (_0x136998 + 1 < 10 ? "0" + (_0x136998 + 1) : _0x136998 + 1) + "]: 用户名=> " + _0x31d30c.responseData.nickname + "\n";
    David_0x3f1a58.log("[账号" + (_0x136998 + 1 < 10 ? "0" + (_0x136998 + 1) : _0x136998 + 1) + "]: 手机号=> " + _0x31d30c.responseData.login_mobile);
    David_0x5aa1a9[_0x136998] += "[账号" + (_0x136998 + 1 < 10 ? "0" + (_0x136998 + 1) : _0x136998 + 1) + "]: 手机号=> " + _0x31d30c.responseData.login_mobile + "\n";
  } else {
    David_0x3f1a58.log("[账号" + (_0x136998 + 1 < 10 ? "0" + (_0x136998 + 1) : _0x136998 + 1) + "]: 登录信息=> " + _0x31d30c.errorMsg);
    David_0x5aa1a9[_0x136998] += "[账号" + (_0x136998 + 1 < 10 ? "0" + (_0x136998 + 1) : _0x136998 + 1) + "]: 登录信息=> " + _0x31d30c.errorMsg + "\n";
  }
}
async function David_0x3df358(_0x1d5965, _0x2ddb6b) {
  const _0x15b594 = "https://passport.soyoung.com/Apipassport/QuickLogin";
  let _0x436d31 = David_0x28f0ab(David_0x18a085[_0x1d5965].mobile + "_" + David_0x18a085[_0x1d5965].password),
    _0x31edfc = await David_0x51ffc3(_0x1d5965, David_0x18a085[_0x1d5965].mobile, true),
    _0x38863f = await David_0x183306(_0x1d5965, _0x15b594, "code=" + _0x2ddb6b + "&countrycode=086&key=" + _0x436d31 + "&password_encrypt=1&mobile=" + _0x31edfc + "&");
  await David_0x2f7e72(_0x15b594, _0x38863f, _0x1d5965);
  await David_0x1fa8ea("post", David_0x4eceba[_0x1d5965], David_0x3de523());
  let _0xf4e450 = David_0x300812;
  if (_0xf4e450 != null && _0xf4e450.errorCode == 0) {
    David_0x1f22b0[_0x1d5965] = _0xf4e450.responseData.xy_token;
    David_0x18a085[_0x1d5965].xyToken = _0xf4e450.responseData.xy_token;
    David_0x11d295[_0x1d5965] = _0xf4e450.responseData.uid;
    David_0x18a085[_0x1d5965].uid = _0xf4e450.responseData.uid;
    David_0x3f1a58.log("[账号" + (_0x1d5965 + 1 < 10 ? "0" + (_0x1d5965 + 1) : _0x1d5965 + 1) + "]: 用户名=> " + _0xf4e450.responseData.nickname);
    David_0x5aa1a9[_0x1d5965] += "[账号" + (_0x1d5965 + 1 < 10 ? "0" + (_0x1d5965 + 1) : _0x1d5965 + 1) + "]: 用户名=> " + _0xf4e450.responseData.nickname + "\n";
    David_0x3f1a58.log("[账号" + (_0x1d5965 + 1 < 10 ? "0" + (_0x1d5965 + 1) : _0x1d5965 + 1) + "]: 手机号=> " + _0xf4e450.responseData.login_mobile);
    David_0x5aa1a9[_0x1d5965] += "[账号" + (_0x1d5965 + 1 < 10 ? "0" + (_0x1d5965 + 1) : _0x1d5965 + 1) + "]: 手机号=> " + _0xf4e450.responseData.login_mobile + "\n";
  } else {
    David_0x3f1a58.log("[账号" + (_0x1d5965 + 1 < 10 ? "0" + (_0x1d5965 + 1) : _0x1d5965 + 1) + "]: 登录信息=> " + _0xf4e450.msg);
    David_0x5aa1a9[_0x1d5965] += "[账号" + (_0x1d5965 + 1 < 10 ? "0" + (_0x1d5965 + 1) : _0x1d5965 + 1) + "]: 登录信息=> " + _0xf4e450.msg + "\n";
  }
}
async function David_0x156ba2(_0x50fed0) {
  const _0x2e58b7 = "https://passport.soyoung.com/Apipassport/QuickLoginCode";
  let _0x499b70 = David_0x28f0ab("" + David_0x18a085[_0x50fed0].mobile),
    _0x24abd9 = await David_0x51ffc3(_0x50fed0, David_0x18a085[_0x50fed0].mobile, true);
  let _0x4c4376 = await David_0x183306(_0x50fed0, _0x2e58b7, "countrycode=086&key=" + _0x499b70 + "&mobile=" + _0x24abd9 + "&");
  await David_0x2f7e72(_0x2e58b7, _0x4c4376, _0x50fed0);
  await David_0x1fa8ea("post", David_0x4eceba[_0x50fed0], David_0x3de523());
  let _0x14691c = David_0x300812;
  if (!(_0x14691c != null && _0x14691c.errorCode == 0)) {
    David_0x3f1a58.log("[账号" + (_0x50fed0 + 1 < 10 ? "0" + (_0x50fed0 + 1) : _0x50fed0 + 1) + "]: 发送验证码=> " + _0x14691c.msg);
    David_0x5aa1a9[_0x50fed0] += "[账号" + (_0x50fed0 + 1 < 10 ? "0" + (_0x50fed0 + 1) : _0x50fed0 + 1) + "]: 发送验证码=> " + _0x14691c.msg + "\n";
  }
}
async function David_0x4eb37e(_0x39f53f) {
  const _0x3c2938 = "https://api.soyoung.com/v9/user/api/welfare/indexPage";
  let _0x58066e = await David_0x183306(_0x39f53f, _0x3c2938, "");
  await David_0x2f7e72(_0x3c2938, _0x58066e, _0x39f53f);
  await David_0x1fa8ea("post", David_0x4eceba[_0x39f53f], David_0x3de523());
  let _0x10819c = David_0x300812;
  if (_0x10819c != null && _0x10819c.errorCode == 0) {
    if (_0x10819c.responseData.sign_tab.sign_btn_txt == "立即领取") {
      await David_0x3512db(_0x39f53f);
    }
  } else {
    David_0x3f1a58.log("[账号" + (_0x39f53f + 1 < 10 ? "0" + (_0x39f53f + 1) : _0x39f53f + 1) + "]: 任务中心=> " + _0x10819c.errorMsg);
    David_0x5aa1a9[_0x39f53f] += "[账号" + (_0x39f53f + 1 < 10 ? "0" + (_0x39f53f + 1) : _0x39f53f + 1) + "]: 任务中心=> " + _0x10819c.errorMsg + "\n";
  }
}
async function David_0x425d7e(_0x106666) {
  const _0x5ceb33 = "https://api.soyoung.com/v8/welfare/index";
  let _0x220e01 = await David_0x183306(_0x106666, _0x5ceb33, "");
  await David_0x2f7e72(_0x5ceb33, _0x220e01, _0x106666);
  await David_0x1fa8ea("post", David_0x4eceba[_0x106666], David_0x3de523());
  let _0xe94796 = David_0x300812;
  if (_0xe94796 != null && _0xe94796.errorCode == 0) {
    David_0x3f1a58.log("[账号" + (_0x106666 + 1 < 10 ? "0" + (_0x106666 + 1) : _0x106666 + 1) + "]: 用户名=> " + _0xe94796.responseData.user.user_name);
    David_0x5aa1a9[_0x106666] += "[账号" + (_0x106666 + 1 < 10 ? "0" + (_0x106666 + 1) : _0x106666 + 1) + "]: 用户名=> " + _0xe94796.responseData.user.user_name + "\n";
    David_0x3f1a58.log("[账号" + (_0x106666 + 1 < 10 ? "0" + (_0x106666 + 1) : _0x106666 + 1) + "]: 余额=> " + _0xe94796.responseData.user.cash + "元");
    David_0x5aa1a9[_0x106666] += "[账号" + (_0x106666 + 1 < 10 ? "0" + (_0x106666 + 1) : _0x106666 + 1) + "]: 余额=> " + _0xe94796.responseData.user.cash + "元\n";
    David_0x3f1a58.log("[账号" + (_0x106666 + 1 < 10 ? "0" + (_0x106666 + 1) : _0x106666 + 1) + "]: 氧分=> " + _0xe94796.responseData.user.xy_money);
    David_0x5aa1a9[_0x106666] += "[账号" + (_0x106666 + 1 < 10 ? "0" + (_0x106666 + 1) : _0x106666 + 1) + "]: 氧分=> " + _0xe94796.responseData.user.xy_money + "\n";
    let _0x1a2837 = _0xe94796.responseData.sign_v2;
    _0x1a2837.status != "2" && (await David_0x9740bd(_0x106666));
    let _0x568ac0 = _0xe94796.responseData.todo_list.list;
    for (let _0x177f47 = 0; _0x177f47 < _0x568ac0.length; _0x177f47++) {
      let _0x34b684 = _0x568ac0[_0x177f47];
      if (_0x34b684.finish_status == "0") {
        if (_0x34b684.id != "200076") {
          if (_0x34b684.id == "200222") {
            let _0x18fb3c = _0xe94796.responseData.prod_todo.num - _0xe94796.responseData.prod_todo.has_num;
            for (let _0x3db339 = 0; _0x3db339 < _0x18fb3c; _0x3db339++) {
              await David_0x347488(_0x106666, _0x34b684);
              await David_0x3f1a58.wait(David_0x1f27dc(10000, 15000));
            }
          } else {
            await David_0x347488(_0x106666, _0x34b684);
          }
          await David_0x3f1a58.wait(David_0x1f27dc(10000, 15000));
        }
      } else {
        await David_0x3bb6ed(_0x106666, _0x34b684);
      }
    }
  } else {
    David_0x3f1a58.log("[账号" + (_0x106666 + 1 < 10 ? "0" + (_0x106666 + 1) : _0x106666 + 1) + "]: 任务中心=> " + _0xe94796.errorMsg);
    David_0x5aa1a9[_0x106666] += "[账号" + (_0x106666 + 1 < 10 ? "0" + (_0x106666 + 1) : _0x106666 + 1) + "]: 任务中心=> " + _0xe94796.errorMsg + "\n";
  }
}
async function David_0x9740bd(_0x38d5ea) {
  const _0x3a4e24 = "https://api.soyoung.com/v8/welfare/signv2";
  let _0x24c406 = await David_0x183306(_0x38d5ea, _0x3a4e24, "");
  await David_0x2f7e72(_0x3a4e24, _0x24c406, _0x38d5ea);
  await David_0x1fa8ea("post", David_0x4eceba[_0x38d5ea], David_0x3de523());
  let _0x23f23d = David_0x300812;
  if (_0x23f23d != null && _0x23f23d.errorCode == 0) {
    let _0x54bfd9 = _0x23f23d.responseData.dialog.award;
    David_0x3f1a58.log("[账号" + (_0x38d5ea + 1 < 10 ? "0" + (_0x38d5ea + 1) : _0x38d5ea + 1) + "]: 签到=> 奖励" + _0x54bfd9.prefix + _0x54bfd9.value + "元，" + _0x23f23d.errorMsg);
    David_0x5aa1a9[_0x38d5ea] += "[账号" + (_0x38d5ea + 1 < 10 ? "0" + (_0x38d5ea + 1) : _0x38d5ea + 1) + "]: 签到=> 奖励" + _0x54bfd9.prefix + _0x54bfd9.value + "元，" + _0x23f23d.errorMsg + "\n";
  } else {
    David_0x3f1a58.log("[账号" + (_0x38d5ea + 1 < 10 ? "0" + (_0x38d5ea + 1) : _0x38d5ea + 1) + "]: 签到任务=> " + _0x23f23d.errorMsg + "，" + _0x23f23d.responseData["@"]);
    David_0x5aa1a9[_0x38d5ea] += "[账号" + (_0x38d5ea + 1 < 10 ? "0" + (_0x38d5ea + 1) : _0x38d5ea + 1) + "]: 签到任务=> " + _0x23f23d.errorMsg + "，" + _0x23f23d.responseData["@"] + "\n";
  }
}
async function David_0x3512db(_0x44f3cf) {
  const _0x490da0 = "https://api.soyoung.com/v9/user/api/welfare/sign";
  let _0x3a257d = await David_0x183306(_0x44f3cf, _0x490da0, "");
  await David_0x2f7e72(_0x490da0, _0x3a257d, _0x44f3cf);
  await David_0x1fa8ea("post", David_0x4eceba[_0x44f3cf], David_0x3de523());
  let _0x499fb6 = David_0x300812;
  if (_0x499fb6 != null && _0x499fb6.errorCode == 0) {
    David_0x3f1a58.log("[账号" + (_0x44f3cf + 1 < 10 ? "0" + (_0x44f3cf + 1) : _0x44f3cf + 1) + "]: 新版签到=> 成功，" + _0x499fb6.responseData.alert);
    David_0x5aa1a9[_0x44f3cf] += "[账号" + (_0x44f3cf + 1 < 10 ? "0" + (_0x44f3cf + 1) : _0x44f3cf + 1) + "]: 新版签到=> 成功，" + _0x499fb6.responseData.alert + "\n";
  } else {
    David_0x3f1a58.log("[账号" + (_0x44f3cf + 1 < 10 ? "0" + (_0x44f3cf + 1) : _0x44f3cf + 1) + "]: 新版签到任务=> " + _0x499fb6.errorMsg);
    David_0x5aa1a9[_0x44f3cf] += "[账号" + (_0x44f3cf + 1 < 10 ? "0" + (_0x44f3cf + 1) : _0x44f3cf + 1) + "]: 新版签到任务=> " + _0x499fb6.errorMsg + "\n";
  }
}
async function David_0x3bb6ed(_0x40098c, _0x26146f) {
  const _0x28250f = "https://api.soyoung.com/v8/mission/getAwards";
  let _0x176c5f = await David_0x183306(_0x40098c, _0x28250f, "title=" + _0x26146f.title + "&user_mission_info_id=" + _0x26146f.id + "&type=" + _0x26146f.type + "&attribute=" + _0x26146f.attribute + "&finish_status=1&award_jingyan=" + _0x26146f.award_jingyan + "&award_yangfen=" + _0x26146f.award_yangfen + "&");
  await David_0x2f7e72(_0x28250f, _0x176c5f, _0x40098c);
  await David_0x1fa8ea("post", David_0x4eceba[_0x40098c], David_0x3de523());
  let _0x54e7b6 = David_0x300812;
  if (_0x54e7b6 != null && _0x54e7b6.errorCode == 0) {
    David_0x3f1a58.log("[账号" + (_0x40098c + 1 < 10 ? "0" + (_0x40098c + 1) : _0x40098c + 1) + "]: " + _0x26146f.title + "=> " + _0x54e7b6.errorMsg);
    David_0x5aa1a9[_0x40098c] += "[账号" + (_0x40098c + 1 < 10 ? "0" + (_0x40098c + 1) : _0x40098c + 1) + "]: " + _0x26146f.title + "=> " + _0x54e7b6.errorMsg + "\n";
  } else {
    David_0x3f1a58.log("[账号" + (_0x40098c + 1 < 10 ? "0" + (_0x40098c + 1) : _0x40098c + 1) + "]: " + _0x26146f.title + "=> " + _0x54e7b6.errorMsg);
    David_0x5aa1a9[_0x40098c] += "[账号" + (_0x40098c + 1 < 10 ? "0" + (_0x40098c + 1) : _0x40098c + 1) + "]: " + _0x26146f.title + "=> " + _0x54e7b6.errorMsg + "\n";
  }
}
async function David_0x347488(_0x42ab47, _0x16798c) {
  const _0x531d1a = "https://api.soyoung.com/v8/mission/click";
  let _0x4db819 = await David_0x183306(_0x42ab47, _0x531d1a, "user_mission_info_id=" + _0x16798c.id + "&type=" + _0x16798c.type + "&attribute=" + _0x16798c.attribute + "&finish_status=0&");
  await David_0x2f7e72(_0x531d1a, _0x4db819, _0x42ab47);
  await David_0x1fa8ea("post", David_0x4eceba[_0x42ab47], David_0x3de523());
  let _0x192d78 = David_0x300812;
  if (_0x192d78 != null && _0x192d78.errorCode == 0) {
    David_0x3f1a58.log("[账号" + (_0x42ab47 + 1 < 10 ? "0" + (_0x42ab47 + 1) : _0x42ab47 + 1) + "]: " + _0x16798c.title + "=> 开始做任务>>>");
    David_0x5aa1a9[_0x42ab47] += "[账号" + (_0x42ab47 + 1 < 10 ? "0" + (_0x42ab47 + 1) : _0x42ab47 + 1) + "]: " + _0x16798c.title + "=> 开始做任务>>>\n";
    await David_0x3f1a58.wait(David_0x1f27dc(10000, 15000));
    await David_0x27e923(_0x42ab47, _0x16798c);
  } else {
    David_0x3f1a58.log("[账号" + (_0x42ab47 + 1 < 10 ? "0" + (_0x42ab47 + 1) : _0x42ab47 + 1) + "]: " + _0x16798c.title + "=> " + _0x192d78.errorMsg);
    David_0x5aa1a9[_0x42ab47] += "[账号" + (_0x42ab47 + 1 < 10 ? "0" + (_0x42ab47 + 1) : _0x42ab47 + 1) + "]: " + _0x16798c.title + "=> " + _0x192d78.errorMsg + "\n";
  }
}
async function David_0x27e923(_0x3b818d, _0x49a113) {
  const _0xe78ed6 = "https://api.soyoung.com/v8/welfare/UpAlert";
  let _0x4daecb = await David_0x183306(_0x3b818d, _0xe78ed6, "type=4&attribute=" + _0x49a113.attribute + "&");
  await David_0x2f7e72(_0xe78ed6, _0x4daecb, _0x3b818d);
  await David_0x1fa8ea("post", David_0x4eceba[_0x3b818d], David_0x3de523());
  let _0x393dd3 = David_0x300812;
  if (_0x393dd3 != null && _0x393dd3.errorCode == 0) {
    David_0x3f1a58.log("[账号" + (_0x3b818d + 1 < 10 ? "0" + (_0x3b818d + 1) : _0x3b818d + 1) + "]: " + _0x49a113.title + "=> 已完成");
    David_0x5aa1a9[_0x3b818d] += "[账号" + (_0x3b818d + 1 < 10 ? "0" + (_0x3b818d + 1) : _0x3b818d + 1) + "]: " + _0x49a113.title + "=> 已完成\n";
  } else {
    David_0x3f1a58.log("[账号" + (_0x3b818d + 1 < 10 ? "0" + (_0x3b818d + 1) : _0x3b818d + 1) + "]: " + _0x49a113.title + "=> " + _0x393dd3.errorMsg);
    David_0x5aa1a9[_0x3b818d] += "[账号" + (_0x3b818d + 1 < 10 ? "0" + (_0x3b818d + 1) : _0x3b818d + 1) + "]: " + _0x49a113.title + "=> " + _0x393dd3.errorMsg + "\n";
  }
}
async function David_0x183306(_0x2c4987, _0x472829, _0x319aab) {
  let _0x51ee4f = David_0x148e2c();
  let _0xa16e50 = await David_0xd8a962(_0x2c4987, _0x472829),
    _0x1f9e81 = David_0x17b30e();
  let _0x54b95f = _0x319aab + "uid=" + David_0x18a085[_0x2c4987].uid + "&xy_token=" + David_0x18a085[_0x2c4987].xyToken + "&lver=" + David_0x4f17bb + "&" + _0xa16e50 + "&_time=" + _0x51ee4f + "&request_id=" + _0x1f9e81;
  if (_0x472829.indexOf("Apipassport") != -1) {
    _0x54b95f = _0x319aab + "lver=" + David_0x4f17bb + "&" + _0xa16e50 + "&_time=" + _0x51ee4f + "&request_id=" + _0x1f9e81;
  }
  let _0x22fda1 = David_0x5535e6(decodeURIComponent("_sydd=f3b6789eee74269d45c8f4d5d91c2d3b7c3ea5ff_" + David_0x4f17bb + "&" + David_0x1d4471(_0x54b95f, [], {}))),
    _0xa3b027 = await David_0x51ffc3(_0x2c4987, _0x22fda1);
  return _0x54b95f + "&xy_sign=" + _0xa3b027;
}
async function David_0xd8a962(_0x49e3ed, _0x2c3e26) {
  let _0x7d0d81 = await David_0x51ffc3(_0x49e3ed, _0x2c3e26),
    _0x56e027 = _0x7d0d81.slice(1, -1).split(", "),
    _0x499271 = "",
    _0x3087e3 = "";
  _0x56e027.forEach(_0x305fed => {
    const [_0x547fd8, _0x3eba15] = _0x305fed.split("=");
    if (_0x547fd8.startsWith("_") && !_0x547fd8.startsWith("_time")) {
      _0x499271 = _0x547fd8;
      _0x3087e3 = _0x3eba15;
    }
  });
  return _0x499271 + "=" + _0x3087e3;
}
async function David_0x51ffc3(_0x1acf7b, _0x3f1e15, _0x864ed6) {
  await David_0x199530(_0x1acf7b, _0x3f1e15);
  if (_0x864ed6) {
    return encodeURIComponent(David_0x2cef0b[_0x1acf7b]);
  } else {
    return David_0x2cef0b[_0x1acf7b];
  }
}
function David_0x17b30e() {
  return David_0x5535e6("com.youxiang.soyoungapp" + David_0x16d0b3());
}
function David_0x28f0ab(_0x5ba7b4) {
  return David_0x5535e6("lavion_soyoung@2013_" + _0x5ba7b4);
}
function David_0x2218f7(_0x295e6a, _0x1a1965, _0x446e25) {
  return new Promise((_0x1ff4b9, _0x4eb20f) => {
    const _0x53b2bf = David_0x36cbf8 + "/script/permissions/lastest";
    const _0x5def3b = {
        appName: _0x295e6a,
        userId: _0x1a1965,
        activityCode: _0x446e25,
        version: David_0x3c5275
      },
      _0x2ccd00 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const _0x3413f0 = {
      url: _0x53b2bf,
      headers: _0x2ccd00,
      body: JSON.stringify(_0x5def3b)
    };
    David_0x3f1a58.post(_0x3413f0, async (_0x2f4b9b, _0x44ccd5, _0x11c32e) => {
      if (_0x11c32e && _0x11c32e != null && _0x11c32e.replace(/\"/g, "").length > 50) {
        const _0x25958d = _0x11c32e.replace(/\"/g, "").slice(34),
          _0x36eb1e = new David_0x47a81e();
        result = JSON.parse(_0x36eb1e.decode(_0x25958d));
        try {
          David_0x4ecc6e = result.version;
          David_0x2fe7dc = result.userAuth;
          David_0x5b1fb9 = result.scriptAuth;
          David_0x9d0a04 = result.runAuth;
          David_0x48643b = result.notify;
          David_0x551088 = result.vipAuth;
          David_0x31522d = result.isCharge;
          David_0x4c13ad = result.runAcounts;
          David_0x521a57 = result.buyCount;
          David_0x15629f = result.runedCounts;
          David_0x4fe3cd = result.runTotalCounts;
          David_0x5bc374 = result.userRank;
          David_0x225715 = result.invicate;
          David_0x43a26f = result.accountNumbers;
          David_0x558a82 = result.vipDate;
        } catch (_0x2c0884) {
          David_0x3f1a58.log(_0x2c0884);
        }
      } else {
        David_0x3f1a58.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      _0x1ff4b9();
    });
  });
}
function David_0x3eef53(_0x19b1cc, _0x352cbd) {
  return new Promise((_0x34d7c6, _0x1f266f) => {
    const _0x20a6d4 = David_0x36cbf8 + "/script/run/add";
    const _0x3a453c = {
        appName: _0x19b1cc,
        userId: _0x352cbd,
        activityCode: David_0x4d86b7,
        version: David_0x3c5275
      },
      _0x23b2a8 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const _0x4a7765 = {
      url: _0x20a6d4,
      headers: _0x23b2a8,
      body: JSON.stringify(_0x3a453c)
    };
    David_0x3f1a58.post(_0x4a7765, async (_0x3dd1ed, _0x55da16, _0x17c4c9) => {
      _0x34d7c6();
    });
  });
}
function David_0x33d388(_0x2bb0cf, _0x17cb72) {
  return new Promise((_0x2882a5, _0x19991b) => {
    const _0x24c5bb = setTimeout(() => {
        _0x2882a5(false);
      }, _0x17cb72),
      _0x275448 = David_0x560ef8.get(_0x2bb0cf, _0x5d35d7 => {
        clearTimeout(_0x24c5bb);
        if (_0x5d35d7.statusCode === 404) {
          _0x2882a5(true);
        } else {
          _0x2882a5(false);
        }
      });
    _0x275448.on("error", _0x2b876a => {
      clearTimeout(_0x24c5bb);
      _0x2882a5(false);
    });
    _0x275448.on("timeout", () => {
      _0x275448.abort();
      _0x19991b(new Error("请求超时"));
    });
  });
}
async function David_0x48f833(_0xdd9447, _0x3bebae = 3000) {
  return new Promise((_0x5a0dbc, _0x3ca9bd) => {
    const _0x38fc44 = {
      url: _0xdd9447 + "/docs"
    };
    setTimeout(() => {
      _0x5a0dbc(false);
    }, _0x3bebae);
    David_0x3f1a58.get(_0x38fc44, async (_0x661b3f, _0x36c753, _0x338a91) => {
      _0x36c753.status == 401 ? _0x5a0dbc(true) : _0x5a0dbc(false);
    });
  });
}
async function David_0x5079ce(_0xd2062f, _0x3fd292 = 3000) {
  return new Promise((_0x2c4e23, _0x34b148) => {
    const _0x1d9944 = {
      url: _0xd2062f + "/"
    };
    setTimeout(() => {
      _0x2c4e23(false);
    }, _0x3fd292);
    $httpClient.get(_0x1d9944, async (_0x1ae6bb, _0x66534b, _0x3f1a3d) => {
      if (_0x3f1a3d == "{\"detail\":\"Not Found\"}") {
        _0x2c4e23(true);
      } else {
        _0x2c4e23(false);
      }
    });
  });
}
async function David_0x4c486d(_0xc4bdc0, _0x2bc1ff, _0xc6412c) {
  return new Promise((_0x15011d, _0x41c13d) => {
    const _0x402761 = David_0x36cbf8 + "/redis/hash/get/" + _0x2bc1ff + "/" + _0xc6412c,
      _0x569d05 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const _0x28af25 = {
      url: _0x402761,
      headers: _0x569d05
    };
    David_0x3f1a58.get(_0x28af25, async (_0x107663, _0x49c927, _0x414c90) => {
      const _0x296053 = _0x414c90.replace(/\"/g, "");
      answerTexts[_0xc4bdc0] = _0x296053;
      _0x15011d();
    });
  });
}
function David_0x1cf352(_0x16b412, _0x2242c7, _0x39a599) {
  return new Promise((_0x52b9e0, _0x10abcb) => {
    const _0x414b7a = David_0x36cbf8 + "/redis/hash/set";
    const _0x504cab = {
        key: _0x16b412,
        hashKey: _0x2242c7,
        hashValue: _0x39a599
      },
      _0x1cc41f = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const _0x20ea71 = {
      url: _0x414b7a,
      headers: _0x1cc41f,
      body: JSON.stringify(_0x504cab)
    };
    David_0x3f1a58.post(_0x20ea71, async (_0x369da6, _0x7d54fe, _0x2385fc) => {
      _0x52b9e0();
    });
  });
}
function David_0x4ccb6c(_0x34a458) {
  return new Promise((_0x400534, _0x20dff8) => {
    const _0x4b6dcb = David_0x36cbf8 + "/redis/set/pop/" + _0x34a458,
      _0x490b70 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const _0x1f59ee = {
      url: _0x4b6dcb,
      headers: _0x490b70
    };
    David_0x3f1a58.get(_0x1f59ee, async (_0x3d338c, _0x442ce0, _0x33e2d7) => {
      const _0x599911 = _0x33e2d7.replace(/\"/g, "");
      popCookie = _0x599911;
      _0x400534();
    });
  });
}
async function David_0x2f7e72(_0x162932, _0x64f4d6, _0x56f777) {
  let _0x4f91e5 = "Dalvik/2.1.0 (Linux; U; Android 10.1.0; Pixel Build/OPM4.171019.021.P1)";
  David_0x18a085[_0x56f777].ua && David_0x18a085[_0x56f777].ua != "" && (_0x4f91e5 = David_0x18a085[_0x56f777].ua);
  let _0x1479ea = David_0x28cbe9(_0x162932);
  const _0x26c491 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x4f91e5,
    Host: _0x1479ea
  };
  let _0x16aa62 = {
    url: _0x162932,
    headers: _0x26c491
  };
  _0x64f4d6 && (_0x16aa62.body = _0x64f4d6);
  David_0x4eceba[_0x56f777] = _0x16aa62;
  return _0x16aa62;
}
function David_0x1030e9(_0x26c04f, _0x3b6bcb, _0x421e64) {
  let _0x34c628 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (David_0x18a085[_0x421e64].ua && David_0x18a085[_0x421e64].ua != "") {
    _0x34c628 = David_0x18a085[_0x421e64].ua;
  }
  let _0x276af6 = David_0x28cbe9(_0x26c04f);
  const _0x50bd4b = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x34c628,
    Authorization: David_0x18a085[_0x421e64].auth,
    Host: _0x276af6
  };
  let _0x4003cb = {
    url: _0x26c04f,
    headers: _0x50bd4b
  };
  _0x3b6bcb && (_0x4003cb.body = _0x3b6bcb);
  David_0x4eceba[_0x421e64] = _0x4003cb;
  return _0x4003cb;
}
async function David_0x1fa8ea(_0x4a546f, _0x22aa80, _0xc99846) {
  David_0x300812 = null;
  return new Promise(_0x47f892 => {
    David_0x3f1a58[_0x4a546f](_0x22aa80, async (_0x8cb83, _0x740b31, _0x206210) => {
      try {
        if (_0x8cb83) {
          David_0x3f1a58.log(_0xc99846 + ": " + _0x4a546f + "请求失败");
          David_0x3f1a58.log(JSON.stringify(_0x8cb83));
          David_0x3f1a58.logErr(_0x8cb83);
        } else {
          if (David_0x234855(_0x206210)) {
            David_0x300812 = JSON.parse(_0x206210);
          } else {
            const _0x8d8297 = new URL(_0x22aa80.url);
            David_0x3f1a58.log(_0x8d8297.pathname + "发起" + _0x4a546f + "请求时，出现错误，请处理");
          }
        }
      } catch (_0x4e171b) {
        David_0x3f1a58.logErr(_0x4e171b, _0x740b31);
      } finally {
        _0x47f892(David_0x300812);
      }
    });
  });
}
async function David_0x199530(_0x5009c1, _0x3cd5c4) {
  if (David_0x2c041d[_0x5009c1] == 0) {
    await David_0x39ef23(_0x5009c1, _0x3cd5c4);
  } else {
    await David_0x199184(_0x5009c1, _0x3cd5c4);
  }
}
function David_0x39ef23(_0x19b6a2, _0x2e6237) {
  return new Promise((_0x7f0d04, _0x3165bd) => {
    function _0x4267cf(_0xc8c148) {
      let _0x4e0182 = _0xc8c148.toString("utf8");
      David_0x2cef0b[_0x19b6a2] = _0x4e0182;
      David_0x14d4e6[_0x19b6a2].removeListener("message", _0x4267cf);
      _0x7f0d04(_0x4e0182);
    }
    David_0x14d4e6[_0x19b6a2].on("message", _0x4267cf);
    if (David_0x14d4e6[_0x19b6a2].readyState === 1) {
      const _0x30f91d = {
        method: David_0x59a6c0,
        params: {}
      };
      _0x30f91d.params.content = _0x2e6237;
      _0x30f91d.params.appName = David_0x59a6c0;
      _0x30f91d.params.uuid = David_0x5d85a8;
      David_0x14d4e6[_0x19b6a2].send(JSON.stringify(_0x30f91d), _0x5f58a6 => {
        if (_0x5f58a6) {
          _0x3165bd(_0x5f58a6);
        }
      });
    } else {
      _0x7f0d04(David_0x199184(_0x19b6a2, _0x2e6237));
      David_0x14d4e6[_0x19b6a2].removeListener("message", _0x4267cf);
    }
  });
}
function David_0x199184(_0x111b59, _0x57e8f3) {
  return new Promise((_0xbe5d87, _0x4ed2f4) => {
    const _0x19d9dd = David_0x36cbf8 + "/sign/xyym";
    const _0x367790 = {
        content: _0x57e8f3,
        appName: David_0x59a6c0,
        uuid: David_0x5d85a8
      },
      _0x1e713a = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const _0x54dde9 = {
      url: _0x19d9dd,
      headers: _0x1e713a,
      body: JSON.stringify(_0x367790)
    };
    David_0x3f1a58.post(_0x54dde9, async (_0x2b4443, _0xffd69, _0x531b5) => {
      const _0x520e00 = _0x531b5.replace(/\"/g, "").replace(/\\n/g, "\n");
      David_0x2cef0b[_0x111b59] = _0x520e00;
      _0xbe5d87();
    });
  });
}
function David_0x1d4471(_0x5cdc53, _0x410ba6, _0x59e208) {
  const _0x1e9831 = David_0x3a3c7e(_0x5cdc53);
  _0x410ba6.forEach(_0x1e745f => {
    delete _0x1e9831[_0x1e745f];
  });
  Object.assign(_0x1e9831, _0x59e208);
  const _0x369f28 = Object.keys(_0x1e9831).sort(),
    _0x1a770e = _0x369f28.map(_0x1eafe7 => _0x1eafe7 + "=" + _0x1e9831[_0x1eafe7]).join("&");
  return _0x1a770e;
}
function David_0x3a3c7e(_0x1eab04) {
  _0x1eab04 = _0x1eab04.replace(/\"/g, "");
  var _0x48d02e,
    _0x5852b9 = {},
    _0x4d36aa = _0x1eab04.slice(_0x1eab04.indexOf("?") + 1).split("&");
  for (var _0x4f13b0 = 0; _0x4f13b0 < _0x4d36aa.length; _0x4f13b0++) {
    _0x48d02e = _0x4d36aa[_0x4f13b0].split("=");
    _0x5852b9[_0x48d02e[0]] = _0x48d02e[1];
  }
  return _0x5852b9;
}
function David_0x28cbe9(_0x2834fd) {
  let _0x4d17c4 = _0x2834fd.substr(_0x2834fd.indexOf("//") + 2);
  let _0x280666 = _0x4d17c4.substr(0, _0x4d17c4.indexOf("/"));
  let _0x28d32d = "",
    _0x5f3552 = _0x280666.indexOf(":");
  _0x5f3552 > 0 ? _0x28d32d = _0x280666.substr(0, _0x5f3552) : _0x28d32d = _0x280666;
  return _0x28d32d;
}
function David_0x276366(_0xdc1eb9, _0x329ace) {
  var _0x39fddc = new Date(_0xdc1eb9);
  var _0x47663a = new Date(_0x329ace);
  var _0x4f8154 = _0x47663a - _0x39fddc;
  var _0x305b51 = Math.floor(_0x4f8154 / 1000);
  return _0x305b51;
}
function David_0x40c1bc(_0x2a3ac3, _0x4912fe) {
  if (_0x2a3ac3.length * 2 <= _0x4912fe) {
    return _0x2a3ac3;
  }
  var _0xf76e8b = 0,
    _0x26f7c4 = "";
  for (var _0x32b6ca = 0; _0x32b6ca < _0x2a3ac3.length; _0x32b6ca++) {
    _0x26f7c4 = _0x26f7c4 + _0x2a3ac3.charAt(_0x32b6ca);
    if (_0x2a3ac3.charCodeAt(_0x32b6ca) > 128) {
      _0xf76e8b = _0xf76e8b + 2;
      if (_0xf76e8b >= _0x4912fe) {
        return _0x26f7c4.substring(0, _0x26f7c4.length - 1) + "...";
      }
    } else {
      _0xf76e8b = _0xf76e8b + 1;
      if (_0xf76e8b >= _0x4912fe) {
        return _0x26f7c4.substring(0, _0x26f7c4.length - 2) + "...";
      }
    }
  }
  return _0x26f7c4;
}
function David_0x3de523() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function David_0x234855(_0x3e6e8b) {
  try {
    if (typeof JSON.parse(_0x3e6e8b) == "object") {
      return true;
    }
  } catch (_0x35e69c) {
    console.log(_0x35e69c);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function David_0x59cd60(_0x16ec8e) {
  var _0x29df38 = Object.keys(_0x16ec8e).map(function (_0x47178a) {
    return encodeURIComponent(_0x47178a) + "=" + encodeURIComponent(_0x16ec8e[_0x47178a]);
  }).join("&");
  return _0x29df38;
}
function David_0x46b360(_0x444b2c) {
  var _0x4f9ad1 = String.fromCharCode(_0x444b2c.charCodeAt(0) + _0x444b2c.length);
  for (var _0xa79b5b = 1; _0xa79b5b < _0x444b2c.length; _0xa79b5b++) {
    _0x4f9ad1 += String.fromCharCode(_0x444b2c.charCodeAt(_0xa79b5b) + _0x444b2c.charCodeAt(_0xa79b5b - 1));
  }
  return escape(_0x4f9ad1);
}
function David_0x206df6(_0x4fa709) {
  _0x4fa709 = unescape(_0x4fa709);
  var _0x1bb038 = String.fromCharCode(_0x4fa709.charCodeAt(0) - _0x4fa709.length);
  for (var _0x250747 = 1; _0x250747 < _0x4fa709.length; _0x250747++) {
    _0x1bb038 += String.fromCharCode(_0x4fa709.charCodeAt(_0x250747) - _0x1bb038.charCodeAt(_0x250747 - 1));
  }
  return _0x1bb038;
}
function David_0x1f27dc(_0x5ce52e, _0x34fe55) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x5ce52e + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x34fe55 - _0x5ce52e + 1) + _0x5ce52e);
      break;
    default:
      return 0;
      break;
  }
}
function David_0x4ee62c() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function David_0x22cdba() {
  function _0x19f9d8() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x19f9d8() + _0x19f9d8() + "-" + _0x19f9d8() + "-" + _0x19f9d8() + "-" + _0x19f9d8() + "-" + _0x19f9d8() + _0x19f9d8() + _0x19f9d8();
}
function David_0x28f0af(_0x155b7a) {
  if (_0x155b7a.length == 11) {
    let _0x437d32 = _0x155b7a.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x437d32;
  } else {
    return _0x155b7a;
  }
}
function David_0x273473(_0x3b0500) {
  return new Promise((_0x1eedd1, _0x15c1f5) => {
    const _0x352dd5 = "https://v1.hitokoto.cn/?c=e",
      _0x360fc2 = {
        accept: "application/json"
      };
    const _0x571993 = {
      url: _0x352dd5,
      headers: _0x360fc2
    };
    David_0x3f1a58.get(_0x571993, async (_0x2b6c3d, _0x5d94f5, _0x2a8401) => {
      let _0x5d4d84 = JSON.parse(_0x2a8401),
        _0x32872b = _0x5d4d84.hitokoto;
      contents[_0x3b0500] = _0x32872b + " " + _0x32872b;
      _0x1eedd1();
    });
  });
}
function David_0x12423c() {
  return new Promise((_0x2b39e8, _0x50bb13) => {
    const _0x210c5c = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
    const _0x5210c5 = {
      url: _0x210c5c
    };
    David_0x3f1a58.get(_0x5210c5, async (_0x397e50, _0x100535, _0x29b7e1) => {
      _0x2b39e8(_0x29b7e1);
    });
  });
}
function David_0x16d0b3() {
  return Math.round(new Date().getTime()).toString();
}
function David_0x148e2c() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function David_0x4d2c38() {
  if (David_0x28ff48 == 1) {
    David_0x3f1a58.msg(David_0x3f1a58.name, "", David_0x3f1a58.message);
  }
}
async function David_0x159913(_0x186182) {
  if (David_0x4cd2b6 == 9 || David_0x4cd2b6 == 12 || David_0x4cd2b6 == 18) {
    if (David_0x28ff48 == 1) {
      if (David_0x3f1a58.isNode()) {
        await David_0x268040.sendNotify(David_0x3f1a58.name, _0x186182);
      } else {
        David_0x3f1a58.msg(David_0x3f1a58.name, "", _0x186182);
      }
    } else {
      David_0x3f1a58.log(_0x186182);
    }
  }
}
async function David_0x1ac312(_0x55305a, _0x569887, _0x54d9ad) {
  return new Promise((_0x444931, _0x529ac) => {
    const _0x1d4e96 = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x2f60b4 = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: _0x569887,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [_0x54d9ad],
        verifyPay: false
      },
      _0x24c729 = {
        "Content-Type": "application/json"
      };
    const _0xffbc61 = {
      url: _0x1d4e96,
      headers: _0x24c729,
      body: JSON.stringify(_0x2f60b4)
    };
    David_0x3f1a58.post(_0xffbc61, async (_0x4248ba, _0x2d823d, _0x4246c6) => {
      _0x444931();
    });
  });
}
function David_0x385750(_0x5cd417, _0x47f3a3) {
  _0x47f3a3 = _0x47f3a3 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x480f48 = "";
  for (let _0x277748 = 0; _0x277748 < _0x5cd417; _0x277748++) {
    let _0x329596 = Math.floor(Math.random() * _0x47f3a3.length);
    _0x480f48 += _0x47f3a3.substring(_0x329596, _0x329596 + 1);
  }
  return _0x480f48;
}
function David_0x5535e6(_0xa8a9d1) {
  function _0x60ad27(_0x471d7e, _0x3936dc) {
    return _0x471d7e << _0x3936dc | _0x471d7e >>> 32 - _0x3936dc;
  }
  function _0x5651f6(_0x28d47d, _0x590ad5) {
    var _0x573d65, _0x45644f, _0x296ae9, _0x24dc25, _0x1bdecc;
    _0x296ae9 = 2147483648 & _0x28d47d;
    _0x24dc25 = 2147483648 & _0x590ad5;
    _0x573d65 = 1073741824 & _0x28d47d;
    _0x45644f = 1073741824 & _0x590ad5;
    _0x1bdecc = (1073741823 & _0x28d47d) + (1073741823 & _0x590ad5);
    return _0x573d65 & _0x45644f ? 2147483648 ^ _0x1bdecc ^ _0x296ae9 ^ _0x24dc25 : _0x573d65 | _0x45644f ? 1073741824 & _0x1bdecc ? 3221225472 ^ _0x1bdecc ^ _0x296ae9 ^ _0x24dc25 : 1073741824 ^ _0x1bdecc ^ _0x296ae9 ^ _0x24dc25 : _0x1bdecc ^ _0x296ae9 ^ _0x24dc25;
  }
  function _0x356c2c(_0x50395f, _0x36c73d, _0x52e114) {
    return _0x50395f & _0x36c73d | ~_0x50395f & _0x52e114;
  }
  function _0x534db6(_0x37a665, _0x56330c, _0x4a5ee9) {
    return _0x37a665 & _0x4a5ee9 | _0x56330c & ~_0x4a5ee9;
  }
  function _0x2a4acd(_0x2067f2, _0x51d62f, _0x53f81b) {
    return _0x2067f2 ^ _0x51d62f ^ _0x53f81b;
  }
  function _0x49c262(_0x376a70, _0x18b368, _0x4897e1) {
    return _0x18b368 ^ (_0x376a70 | ~_0x4897e1);
  }
  function _0x1e6647(_0x2291da, _0x1ec02b, _0x2b8dbd, _0x337fde, _0x2ee44b, _0x1c87e0, _0x5c5ca6) {
    _0x2291da = _0x5651f6(_0x2291da, _0x5651f6(_0x5651f6(_0x356c2c(_0x1ec02b, _0x2b8dbd, _0x337fde), _0x2ee44b), _0x5c5ca6));
    return _0x5651f6(_0x60ad27(_0x2291da, _0x1c87e0), _0x1ec02b);
  }
  function _0x51a89d(_0x92e465, _0x2a9492, _0x33266c, _0x42d060, _0x2a4dbb, _0x26d2ff, _0x6c3eb8) {
    _0x92e465 = _0x5651f6(_0x92e465, _0x5651f6(_0x5651f6(_0x534db6(_0x2a9492, _0x33266c, _0x42d060), _0x2a4dbb), _0x6c3eb8));
    return _0x5651f6(_0x60ad27(_0x92e465, _0x26d2ff), _0x2a9492);
  }
  function _0x2c8c2c(_0x5f0293, _0x172518, _0x59e8f7, _0x1dcab8, _0x5ba50f, _0xf96aa8, _0xcf53ea) {
    _0x5f0293 = _0x5651f6(_0x5f0293, _0x5651f6(_0x5651f6(_0x2a4acd(_0x172518, _0x59e8f7, _0x1dcab8), _0x5ba50f), _0xcf53ea));
    return _0x5651f6(_0x60ad27(_0x5f0293, _0xf96aa8), _0x172518);
  }
  function _0x178842(_0x7bfa87, _0x2d466c, _0x252221, _0x441f54, _0xff9ef, _0x5757c6, _0x5562ae) {
    _0x7bfa87 = _0x5651f6(_0x7bfa87, _0x5651f6(_0x5651f6(_0x49c262(_0x2d466c, _0x252221, _0x441f54), _0xff9ef), _0x5562ae));
    return _0x5651f6(_0x60ad27(_0x7bfa87, _0x5757c6), _0x2d466c);
  }
  function _0x222169(_0x113bb9) {
    for (var _0x45ff75, _0x3fc337 = _0x113bb9.length, _0xd3fc19 = _0x3fc337 + 8, _0x1c46c8 = (_0xd3fc19 - _0xd3fc19 % 64) / 64, _0x2f952f = 16 * (_0x1c46c8 + 1), _0x2c680e = new Array(_0x2f952f - 1), _0xce90e9 = 0, _0x461c7a = 0; _0x3fc337 > _0x461c7a;) {
      _0x45ff75 = (_0x461c7a - _0x461c7a % 4) / 4;
      _0xce90e9 = _0x461c7a % 4 * 8;
      _0x2c680e[_0x45ff75] = _0x2c680e[_0x45ff75] | _0x113bb9.charCodeAt(_0x461c7a) << _0xce90e9;
      _0x461c7a++;
    }
    _0x45ff75 = (_0x461c7a - _0x461c7a % 4) / 4;
    _0xce90e9 = _0x461c7a % 4 * 8;
    _0x2c680e[_0x45ff75] = _0x2c680e[_0x45ff75] | 128 << _0xce90e9;
    _0x2c680e[_0x2f952f - 2] = _0x3fc337 << 3;
    _0x2c680e[_0x2f952f - 1] = _0x3fc337 >>> 29;
    return _0x2c680e;
  }
  function _0x3af6c2(_0x108c51) {
    var _0x419383,
      _0x25834b,
      _0x5e076a = "",
      _0x4627a5 = "";
    for (_0x25834b = 0; 3 >= _0x25834b; _0x25834b++) {
      _0x419383 = _0x108c51 >>> 8 * _0x25834b & 255;
      _0x4627a5 = "0" + _0x419383.toString(16);
      _0x5e076a += _0x4627a5.substr(_0x4627a5.length - 2, 2);
    }
    return _0x5e076a;
  }
  function _0x52b9ce(_0xfccd22) {
    _0xfccd22 = _0xfccd22.replace(/\r\n/g, "\n");
    for (var _0x26911a = "", _0x55d4a6 = 0; _0x55d4a6 < _0xfccd22.length; _0x55d4a6++) {
      var _0xc495b1 = _0xfccd22.charCodeAt(_0x55d4a6);
      128 > _0xc495b1 ? _0x26911a += String.fromCharCode(_0xc495b1) : _0xc495b1 > 127 && 2048 > _0xc495b1 ? (_0x26911a += String.fromCharCode(_0xc495b1 >> 6 | 192), _0x26911a += String.fromCharCode(63 & _0xc495b1 | 128)) : (_0x26911a += String.fromCharCode(_0xc495b1 >> 12 | 224), _0x26911a += String.fromCharCode(_0xc495b1 >> 6 & 63 | 128), _0x26911a += String.fromCharCode(63 & _0xc495b1 | 128));
    }
    return _0x26911a;
  }
  var _0x257935,
    _0x5b1586,
    _0x22a8e5,
    _0x149ebb,
    _0x2ebc3d,
    _0x487270,
    _0x444701,
    _0x18e413,
    _0x3590fb,
    _0x3b6438 = [],
    _0x46534a = 7,
    _0xda39e4 = 12,
    _0x7bab96 = 17,
    _0x45d2e0 = 22,
    _0x263bf7 = 5,
    _0x45eba5 = 9,
    _0x11c2cd = 14,
    _0x1e1bcc = 20,
    _0x257cf9 = 4,
    _0x5b3684 = 11,
    _0x195b36 = 16,
    _0x1d901e = 23,
    _0x5be15c = 6,
    _0x5a1e56 = 10,
    _0xf443f1 = 15,
    _0x26b867 = 21;
  for (_0xa8a9d1 = _0x52b9ce(_0xa8a9d1), _0x3b6438 = _0x222169(_0xa8a9d1), _0x487270 = 1732584193, _0x444701 = 4023233417, _0x18e413 = 2562383102, _0x3590fb = 271733878, _0x257935 = 0; _0x257935 < _0x3b6438.length; _0x257935 += 16) {
    _0x5b1586 = _0x487270;
    _0x22a8e5 = _0x444701;
    _0x149ebb = _0x18e413;
    _0x2ebc3d = _0x3590fb;
    _0x487270 = _0x1e6647(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 0], _0x46534a, 3614090360);
    _0x3590fb = _0x1e6647(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 1], _0xda39e4, 3905402710);
    _0x18e413 = _0x1e6647(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 2], _0x7bab96, 606105819);
    _0x444701 = _0x1e6647(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 3], _0x45d2e0, 3250441966);
    _0x487270 = _0x1e6647(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 4], _0x46534a, 4118548399);
    _0x3590fb = _0x1e6647(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 5], _0xda39e4, 1200080426);
    _0x18e413 = _0x1e6647(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 6], _0x7bab96, 2821735955);
    _0x444701 = _0x1e6647(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 7], _0x45d2e0, 4249261313);
    _0x487270 = _0x1e6647(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 8], _0x46534a, 1770035416);
    _0x3590fb = _0x1e6647(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 9], _0xda39e4, 2336552879);
    _0x18e413 = _0x1e6647(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 10], _0x7bab96, 4294925233);
    _0x444701 = _0x1e6647(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 11], _0x45d2e0, 2304563134);
    _0x487270 = _0x1e6647(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 12], _0x46534a, 1804603682);
    _0x3590fb = _0x1e6647(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 13], _0xda39e4, 4254626195);
    _0x18e413 = _0x1e6647(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 14], _0x7bab96, 2792965006);
    _0x444701 = _0x1e6647(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 15], _0x45d2e0, 1236535329);
    _0x487270 = _0x51a89d(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 1], _0x263bf7, 4129170786);
    _0x3590fb = _0x51a89d(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 6], _0x45eba5, 3225465664);
    _0x18e413 = _0x51a89d(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 11], _0x11c2cd, 643717713);
    _0x444701 = _0x51a89d(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 0], _0x1e1bcc, 3921069994);
    _0x487270 = _0x51a89d(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 5], _0x263bf7, 3593408605);
    _0x3590fb = _0x51a89d(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 10], _0x45eba5, 38016083);
    _0x18e413 = _0x51a89d(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 15], _0x11c2cd, 3634488961);
    _0x444701 = _0x51a89d(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 4], _0x1e1bcc, 3889429448);
    _0x487270 = _0x51a89d(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 9], _0x263bf7, 568446438);
    _0x3590fb = _0x51a89d(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 14], _0x45eba5, 3275163606);
    _0x18e413 = _0x51a89d(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 3], _0x11c2cd, 4107603335);
    _0x444701 = _0x51a89d(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 8], _0x1e1bcc, 1163531501);
    _0x487270 = _0x51a89d(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 13], _0x263bf7, 2850285829);
    _0x3590fb = _0x51a89d(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 2], _0x45eba5, 4243563512);
    _0x18e413 = _0x51a89d(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 7], _0x11c2cd, 1735328473);
    _0x444701 = _0x51a89d(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 12], _0x1e1bcc, 2368359562);
    _0x487270 = _0x2c8c2c(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 5], _0x257cf9, 4294588738);
    _0x3590fb = _0x2c8c2c(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 8], _0x5b3684, 2272392833);
    _0x18e413 = _0x2c8c2c(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 11], _0x195b36, 1839030562);
    _0x444701 = _0x2c8c2c(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 14], _0x1d901e, 4259657740);
    _0x487270 = _0x2c8c2c(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 1], _0x257cf9, 2763975236);
    _0x3590fb = _0x2c8c2c(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 4], _0x5b3684, 1272893353);
    _0x18e413 = _0x2c8c2c(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 7], _0x195b36, 4139469664);
    _0x444701 = _0x2c8c2c(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 10], _0x1d901e, 3200236656);
    _0x487270 = _0x2c8c2c(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 13], _0x257cf9, 681279174);
    _0x3590fb = _0x2c8c2c(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 0], _0x5b3684, 3936430074);
    _0x18e413 = _0x2c8c2c(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 3], _0x195b36, 3572445317);
    _0x444701 = _0x2c8c2c(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 6], _0x1d901e, 76029189);
    _0x487270 = _0x2c8c2c(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 9], _0x257cf9, 3654602809);
    _0x3590fb = _0x2c8c2c(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 12], _0x5b3684, 3873151461);
    _0x18e413 = _0x2c8c2c(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 15], _0x195b36, 530742520);
    _0x444701 = _0x2c8c2c(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 2], _0x1d901e, 3299628645);
    _0x487270 = _0x178842(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 0], _0x5be15c, 4096336452);
    _0x3590fb = _0x178842(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 7], _0x5a1e56, 1126891415);
    _0x18e413 = _0x178842(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 14], _0xf443f1, 2878612391);
    _0x444701 = _0x178842(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 5], _0x26b867, 4237533241);
    _0x487270 = _0x178842(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 12], _0x5be15c, 1700485571);
    _0x3590fb = _0x178842(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 3], _0x5a1e56, 2399980690);
    _0x18e413 = _0x178842(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 10], _0xf443f1, 4293915773);
    _0x444701 = _0x178842(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 1], _0x26b867, 2240044497);
    _0x487270 = _0x178842(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 8], _0x5be15c, 1873313359);
    _0x3590fb = _0x178842(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 15], _0x5a1e56, 4264355552);
    _0x18e413 = _0x178842(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 6], _0xf443f1, 2734768916);
    _0x444701 = _0x178842(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 13], _0x26b867, 1309151649);
    _0x487270 = _0x178842(_0x487270, _0x444701, _0x18e413, _0x3590fb, _0x3b6438[_0x257935 + 4], _0x5be15c, 4149444226);
    _0x3590fb = _0x178842(_0x3590fb, _0x487270, _0x444701, _0x18e413, _0x3b6438[_0x257935 + 11], _0x5a1e56, 3174756917);
    _0x18e413 = _0x178842(_0x18e413, _0x3590fb, _0x487270, _0x444701, _0x3b6438[_0x257935 + 2], _0xf443f1, 718787259);
    _0x444701 = _0x178842(_0x444701, _0x18e413, _0x3590fb, _0x487270, _0x3b6438[_0x257935 + 9], _0x26b867, 3951481745);
    _0x487270 = _0x5651f6(_0x487270, _0x5b1586);
    _0x444701 = _0x5651f6(_0x444701, _0x22a8e5);
    _0x18e413 = _0x5651f6(_0x18e413, _0x149ebb);
    _0x3590fb = _0x5651f6(_0x3590fb, _0x2ebc3d);
  }
  var _0x489f64 = _0x3af6c2(_0x487270) + _0x3af6c2(_0x444701) + _0x3af6c2(_0x18e413) + _0x3af6c2(_0x3590fb);
  return _0x489f64.toLowerCase();
}
function David_0x30bc38(_0x405d47) {
  var _0x5a39fc = 8,
    _0x33b367 = 0;
  function _0x2379bb(_0x48a261, _0x1da123) {
    var _0xcfcd85 = (_0x48a261 & 65535) + (_0x1da123 & 65535),
      _0x19ad68 = (_0x48a261 >> 16) + (_0x1da123 >> 16) + (_0xcfcd85 >> 16);
    return _0x19ad68 << 16 | _0xcfcd85 & 65535;
  }
  function _0x133686(_0x5b42dc, _0x5b6784) {
    return _0x5b42dc >>> _0x5b6784 | _0x5b42dc << 32 - _0x5b6784;
  }
  function _0x24c445(_0x546cd5, _0x290ff5) {
    return _0x546cd5 >>> _0x290ff5;
  }
  function _0x2e821d(_0x4a2cb5, _0x535f0f, _0x342ebe) {
    return _0x4a2cb5 & _0x535f0f ^ ~_0x4a2cb5 & _0x342ebe;
  }
  function _0x5f3e2b(_0x4bdcb8, _0x112813, _0x34b937) {
    return _0x4bdcb8 & _0x112813 ^ _0x4bdcb8 & _0x34b937 ^ _0x112813 & _0x34b937;
  }
  function _0x2fc9a2(_0x55ef4d) {
    return _0x133686(_0x55ef4d, 2) ^ _0x133686(_0x55ef4d, 13) ^ _0x133686(_0x55ef4d, 22);
  }
  function _0x264294(_0x30a239) {
    return _0x133686(_0x30a239, 6) ^ _0x133686(_0x30a239, 11) ^ _0x133686(_0x30a239, 25);
  }
  function _0x261fda(_0x57dfb5) {
    return _0x133686(_0x57dfb5, 7) ^ _0x133686(_0x57dfb5, 18) ^ _0x24c445(_0x57dfb5, 3);
  }
  function _0x152c45(_0x1a3dc8) {
    return _0x133686(_0x1a3dc8, 17) ^ _0x133686(_0x1a3dc8, 19) ^ _0x24c445(_0x1a3dc8, 10);
  }
  function _0x13517a(_0x12ee5c, _0x44bea8) {
    var _0x35007e = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      _0x24016f = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      _0x5f2eea = new Array(64),
      _0x4da814,
      _0x584a2f,
      _0x162fe7,
      _0x2cb437,
      _0xed78bb,
      _0x2339bc,
      _0x2ca704,
      _0x5e78de,
      _0x305de1,
      _0x45d0fb,
      _0x2dfe9e,
      _0x2f81c2;
    _0x12ee5c[_0x44bea8 >> 5] |= 128 << 24 - _0x44bea8 % 32;
    _0x12ee5c[(_0x44bea8 + 64 >> 9 << 4) + 15] = _0x44bea8;
    for (var _0x305de1 = 0; _0x305de1 < _0x12ee5c.length; _0x305de1 += 16) {
      _0x4da814 = _0x24016f[0];
      _0x584a2f = _0x24016f[1];
      _0x162fe7 = _0x24016f[2];
      _0x2cb437 = _0x24016f[3];
      _0xed78bb = _0x24016f[4];
      _0x2339bc = _0x24016f[5];
      _0x2ca704 = _0x24016f[6];
      _0x5e78de = _0x24016f[7];
      for (var _0x45d0fb = 0; _0x45d0fb < 64; _0x45d0fb++) {
        if (_0x45d0fb < 16) {
          _0x5f2eea[_0x45d0fb] = _0x12ee5c[_0x45d0fb + _0x305de1];
        } else {
          _0x5f2eea[_0x45d0fb] = _0x2379bb(_0x2379bb(_0x2379bb(_0x152c45(_0x5f2eea[_0x45d0fb - 2]), _0x5f2eea[_0x45d0fb - 7]), _0x261fda(_0x5f2eea[_0x45d0fb - 15])), _0x5f2eea[_0x45d0fb - 16]);
        }
        _0x2dfe9e = _0x2379bb(_0x2379bb(_0x2379bb(_0x2379bb(_0x5e78de, _0x264294(_0xed78bb)), _0x2e821d(_0xed78bb, _0x2339bc, _0x2ca704)), _0x35007e[_0x45d0fb]), _0x5f2eea[_0x45d0fb]);
        _0x2f81c2 = _0x2379bb(_0x2fc9a2(_0x4da814), _0x5f3e2b(_0x4da814, _0x584a2f, _0x162fe7));
        _0x5e78de = _0x2ca704;
        _0x2ca704 = _0x2339bc;
        _0x2339bc = _0xed78bb;
        _0xed78bb = _0x2379bb(_0x2cb437, _0x2dfe9e);
        _0x2cb437 = _0x162fe7;
        _0x162fe7 = _0x584a2f;
        _0x584a2f = _0x4da814;
        _0x4da814 = _0x2379bb(_0x2dfe9e, _0x2f81c2);
      }
      _0x24016f[0] = _0x2379bb(_0x4da814, _0x24016f[0]);
      _0x24016f[1] = _0x2379bb(_0x584a2f, _0x24016f[1]);
      _0x24016f[2] = _0x2379bb(_0x162fe7, _0x24016f[2]);
      _0x24016f[3] = _0x2379bb(_0x2cb437, _0x24016f[3]);
      _0x24016f[4] = _0x2379bb(_0xed78bb, _0x24016f[4]);
      _0x24016f[5] = _0x2379bb(_0x2339bc, _0x24016f[5]);
      _0x24016f[6] = _0x2379bb(_0x2ca704, _0x24016f[6]);
      _0x24016f[7] = _0x2379bb(_0x5e78de, _0x24016f[7]);
    }
    return _0x24016f;
  }
  function _0x403707(_0x450094) {
    var _0x58be12 = Array(),
      _0x39f7b5 = (1 << _0x5a39fc) - 1;
    for (var _0x38a744 = 0; _0x38a744 < _0x450094.length * _0x5a39fc; _0x38a744 += _0x5a39fc) {
      _0x58be12[_0x38a744 >> 5] |= (_0x450094.charCodeAt(_0x38a744 / _0x5a39fc) & _0x39f7b5) << 24 - _0x38a744 % 32;
    }
    return _0x58be12;
  }
  function _0x3995fb(_0x41d705) {
    _0x41d705 = _0x41d705.replace(/\r\n/g, "\n");
    var _0x4a2261 = "";
    for (var _0xabb24c = 0; _0xabb24c < _0x41d705.length; _0xabb24c++) {
      var _0x1d9898 = _0x41d705.charCodeAt(_0xabb24c);
      if (_0x1d9898 < 128) {
        _0x4a2261 += String.fromCharCode(_0x1d9898);
      } else {
        _0x1d9898 > 127 && _0x1d9898 < 2048 ? (_0x4a2261 += String.fromCharCode(_0x1d9898 >> 6 | 192), _0x4a2261 += String.fromCharCode(_0x1d9898 & 63 | 128)) : (_0x4a2261 += String.fromCharCode(_0x1d9898 >> 12 | 224), _0x4a2261 += String.fromCharCode(_0x1d9898 >> 6 & 63 | 128), _0x4a2261 += String.fromCharCode(_0x1d9898 & 63 | 128));
      }
    }
    return _0x4a2261;
  }
  function _0xed21f(_0x3b4180) {
    var _0x9bf9e4 = _0x33b367 ? "0123456789ABCDEF" : "0123456789abcdef",
      _0x4bfb0a = "";
    for (var _0x7bacee = 0; _0x7bacee < _0x3b4180.length * 4; _0x7bacee++) {
      _0x4bfb0a += _0x9bf9e4.charAt(_0x3b4180[_0x7bacee >> 2] >> (3 - _0x7bacee % 4) * 8 + 4 & 15) + _0x9bf9e4.charAt(_0x3b4180[_0x7bacee >> 2] >> (3 - _0x7bacee % 4) * 8 & 15);
    }
    return _0x4bfb0a;
  }
  _0x405d47 = _0x3995fb(_0x405d47);
  return _0xed21f(_0x13517a(_0x403707(_0x405d47), _0x405d47.length * _0x5a39fc));
}
function David_0x15a102(_0x141413) {
  function _0x10c609(_0x2ecaf7, _0x233e72) {
    var _0x2ee880 = _0x2ecaf7 << _0x233e72 | _0x2ecaf7 >>> 32 - _0x233e72;
    return _0x2ee880;
  }
  function _0x1c1969(_0x79ea86) {
    var _0x31717b = "",
      _0x5f24a5,
      _0x298f5e,
      _0x2e224a;
    for (_0x5f24a5 = 0; _0x5f24a5 <= 6; _0x5f24a5 += 2) {
      _0x298f5e = _0x79ea86 >>> _0x5f24a5 * 4 + 4 & 15;
      _0x2e224a = _0x79ea86 >>> _0x5f24a5 * 4 & 15;
      _0x31717b += _0x298f5e.toString(16) + _0x2e224a.toString(16);
    }
    return _0x31717b;
  }
  function _0x11fdfc(_0x1d0e14) {
    var _0x5a0e38 = "",
      _0x1c1c32,
      _0x18b221;
    for (_0x1c1c32 = 7; _0x1c1c32 >= 0; _0x1c1c32--) {
      _0x18b221 = _0x1d0e14 >>> _0x1c1c32 * 4 & 15;
      _0x5a0e38 += _0x18b221.toString(16);
    }
    return _0x5a0e38;
  }
  function _0x7ceee9(_0x11af1a) {
    _0x11af1a = _0x11af1a.replace(/\r\n/g, "\n");
    var _0x449bc4 = "";
    for (var _0x4c3a00 = 0; _0x4c3a00 < _0x11af1a.length; _0x4c3a00++) {
      var _0xe049dd = _0x11af1a.charCodeAt(_0x4c3a00);
      if (_0xe049dd < 128) {
        _0x449bc4 += String.fromCharCode(_0xe049dd);
      } else {
        if (_0xe049dd > 127 && _0xe049dd < 2048) {
          _0x449bc4 += String.fromCharCode(_0xe049dd >> 6 | 192);
          _0x449bc4 += String.fromCharCode(_0xe049dd & 63 | 128);
        } else {
          _0x449bc4 += String.fromCharCode(_0xe049dd >> 12 | 224);
          _0x449bc4 += String.fromCharCode(_0xe049dd >> 6 & 63 | 128);
          _0x449bc4 += String.fromCharCode(_0xe049dd & 63 | 128);
        }
      }
    }
    return _0x449bc4;
  }
  var _0x3cf996,
    _0x234e20,
    _0x35c779,
    _0x26c65b = new Array(80),
    _0x171241 = 1732584193,
    _0x2df5f4 = 4023233417,
    _0x40d984 = 2562383102,
    _0x50abd7 = 271733878,
    _0x5b21cf = 3285377520,
    _0x54b819,
    _0x47c141,
    _0x3f5265,
    _0x383e3d,
    _0x258049,
    _0x1496c3;
  _0x141413 = _0x7ceee9(_0x141413);
  var _0x5353ad = _0x141413.length,
    _0x5ce7ef = new Array();
  for (_0x234e20 = 0; _0x234e20 < _0x5353ad - 3; _0x234e20 += 4) {
    _0x35c779 = _0x141413.charCodeAt(_0x234e20) << 24 | _0x141413.charCodeAt(_0x234e20 + 1 < 10 ? "0" + (_0x234e20 + 1) : _0x234e20 + 1) << 16 | _0x141413.charCodeAt(_0x234e20 + 2) << 8 | _0x141413.charCodeAt(_0x234e20 + 3);
    _0x5ce7ef.push(_0x35c779);
  }
  switch (_0x5353ad % 4) {
    case 0:
      _0x234e20 = 2147483648;
      break;
    case 1:
      _0x234e20 = _0x141413.charCodeAt(_0x5353ad - 1) << 24 | 8388608;
      break;
    case 2:
      _0x234e20 = _0x141413.charCodeAt(_0x5353ad - 2) << 24 | _0x141413.charCodeAt(_0x5353ad - 1) << 16 | 32768;
      break;
    case 3:
      _0x234e20 = _0x141413.charCodeAt(_0x5353ad - 3) << 24 | _0x141413.charCodeAt(_0x5353ad - 2) << 16 | _0x141413.charCodeAt(_0x5353ad - 1) << 8 | 128;
      break;
  }
  _0x5ce7ef.push(_0x234e20);
  while (_0x5ce7ef.length % 16 != 14) {
    _0x5ce7ef.push(0);
  }
  _0x5ce7ef.push(_0x5353ad >>> 29);
  _0x5ce7ef.push(_0x5353ad << 3 & 4294967295);
  for (_0x3cf996 = 0; _0x3cf996 < _0x5ce7ef.length; _0x3cf996 += 16) {
    for (_0x234e20 = 0; _0x234e20 < 16; _0x234e20++) {
      _0x26c65b[_0x234e20] = _0x5ce7ef[_0x3cf996 + _0x234e20];
    }
    for (_0x234e20 = 16; _0x234e20 <= 79; _0x234e20++) {
      _0x26c65b[_0x234e20] = _0x10c609(_0x26c65b[_0x234e20 - 3] ^ _0x26c65b[_0x234e20 - 8] ^ _0x26c65b[_0x234e20 - 14] ^ _0x26c65b[_0x234e20 - 16], 1);
    }
    _0x54b819 = _0x171241;
    _0x47c141 = _0x2df5f4;
    _0x3f5265 = _0x40d984;
    _0x383e3d = _0x50abd7;
    _0x258049 = _0x5b21cf;
    for (_0x234e20 = 0; _0x234e20 <= 19; _0x234e20++) {
      _0x1496c3 = _0x10c609(_0x54b819, 5) + (_0x47c141 & _0x3f5265 | ~_0x47c141 & _0x383e3d) + _0x258049 + _0x26c65b[_0x234e20] + 1518500249 & 4294967295;
      _0x258049 = _0x383e3d;
      _0x383e3d = _0x3f5265;
      _0x3f5265 = _0x10c609(_0x47c141, 30);
      _0x47c141 = _0x54b819;
      _0x54b819 = _0x1496c3;
    }
    for (_0x234e20 = 20; _0x234e20 <= 39; _0x234e20++) {
      _0x1496c3 = _0x10c609(_0x54b819, 5) + (_0x47c141 ^ _0x3f5265 ^ _0x383e3d) + _0x258049 + _0x26c65b[_0x234e20] + 1859775393 & 4294967295;
      _0x258049 = _0x383e3d;
      _0x383e3d = _0x3f5265;
      _0x3f5265 = _0x10c609(_0x47c141, 30);
      _0x47c141 = _0x54b819;
      _0x54b819 = _0x1496c3;
    }
    for (_0x234e20 = 40; _0x234e20 <= 59; _0x234e20++) {
      _0x1496c3 = _0x10c609(_0x54b819, 5) + (_0x47c141 & _0x3f5265 | _0x47c141 & _0x383e3d | _0x3f5265 & _0x383e3d) + _0x258049 + _0x26c65b[_0x234e20] + 2400959708 & 4294967295;
      _0x258049 = _0x383e3d;
      _0x383e3d = _0x3f5265;
      _0x3f5265 = _0x10c609(_0x47c141, 30);
      _0x47c141 = _0x54b819;
      _0x54b819 = _0x1496c3;
    }
    for (_0x234e20 = 60; _0x234e20 <= 79; _0x234e20++) {
      _0x1496c3 = _0x10c609(_0x54b819, 5) + (_0x47c141 ^ _0x3f5265 ^ _0x383e3d) + _0x258049 + _0x26c65b[_0x234e20] + 3395469782 & 4294967295;
      _0x258049 = _0x383e3d;
      _0x383e3d = _0x3f5265;
      _0x3f5265 = _0x10c609(_0x47c141, 30);
      _0x47c141 = _0x54b819;
      _0x54b819 = _0x1496c3;
    }
    _0x171241 = _0x171241 + _0x54b819 & 4294967295;
    _0x2df5f4 = _0x2df5f4 + _0x47c141 & 4294967295;
    _0x40d984 = _0x40d984 + _0x3f5265 & 4294967295;
    _0x50abd7 = _0x50abd7 + _0x383e3d & 4294967295;
    _0x5b21cf = _0x5b21cf + _0x258049 & 4294967295;
  }
  var _0x1496c3 = _0x11fdfc(_0x171241) + _0x11fdfc(_0x2df5f4) + _0x11fdfc(_0x40d984) + _0x11fdfc(_0x50abd7) + _0x11fdfc(_0x5b21cf);
  return _0x1496c3.toLowerCase();
}
function David_0x47a81e() {
  var _0x36a289 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x4cd4e1) {
    var _0x3b3815 = "";
    var _0x521d74, _0x644ad6, _0x4206ca, _0x5e932a, _0x3127f3, _0x783dbd, _0x38ddfa;
    var _0x38fd59 = 0;
    _0x4cd4e1 = utf8Encode(_0x4cd4e1);
    while (_0x38fd59 < _0x4cd4e1.length) {
      _0x521d74 = _0x4cd4e1.charCodeAt(_0x38fd59++);
      _0x644ad6 = _0x4cd4e1.charCodeAt(_0x38fd59++);
      _0x4206ca = _0x4cd4e1.charCodeAt(_0x38fd59++);
      _0x5e932a = _0x521d74 >> 2;
      _0x3127f3 = (_0x521d74 & 3) << 4 | _0x644ad6 >> 4;
      _0x783dbd = (_0x644ad6 & 15) << 2 | _0x4206ca >> 6;
      _0x38ddfa = _0x4206ca & 63;
      if (isNaN(_0x644ad6)) {
        _0x783dbd = _0x38ddfa = 64;
      } else {
        isNaN(_0x4206ca) && (_0x38ddfa = 64);
      }
      _0x3b3815 = _0x3b3815 + _0x36a289.charAt(_0x5e932a) + _0x36a289.charAt(_0x3127f3) + _0x36a289.charAt(_0x783dbd) + _0x36a289.charAt(_0x38ddfa);
    }
    return _0x3b3815;
  };
  this.decode = function (_0x970934) {
    var _0x1047e5 = "";
    var _0x2539c3, _0x179d52, _0x28bd92;
    var _0x14d454, _0x507415, _0x548fbe, _0x1c08b5;
    var _0x13d09e = 0;
    _0x970934 = _0x970934.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x13d09e < _0x970934.length) {
      _0x14d454 = _0x36a289.indexOf(_0x970934.charAt(_0x13d09e++));
      _0x507415 = _0x36a289.indexOf(_0x970934.charAt(_0x13d09e++));
      _0x548fbe = _0x36a289.indexOf(_0x970934.charAt(_0x13d09e++));
      _0x1c08b5 = _0x36a289.indexOf(_0x970934.charAt(_0x13d09e++));
      _0x2539c3 = _0x14d454 << 2 | _0x507415 >> 4;
      _0x179d52 = (_0x507415 & 15) << 4 | _0x548fbe >> 2;
      _0x28bd92 = (_0x548fbe & 3) << 6 | _0x1c08b5;
      _0x1047e5 = _0x1047e5 + String.fromCharCode(_0x2539c3);
      if (_0x548fbe !== 64) {
        _0x1047e5 = _0x1047e5 + String.fromCharCode(_0x179d52);
      }
      _0x1c08b5 !== 64 && (_0x1047e5 = _0x1047e5 + String.fromCharCode(_0x28bd92));
    }
    _0x1047e5 = utf8Decode(_0x1047e5);
    return _0x1047e5;
  };
  utf8Encode = function (_0x902e5c) {
    _0x902e5c = _0x902e5c.replace(/\r\n/g, "\n");
    var _0x5f0f50 = "";
    for (var _0x1cf5e2 = 0; _0x1cf5e2 < _0x902e5c.length; _0x1cf5e2++) {
      var _0x4cf027 = _0x902e5c.charCodeAt(_0x1cf5e2);
      if (_0x4cf027 < 128) {
        _0x5f0f50 += String.fromCharCode(_0x4cf027);
      } else {
        if (_0x4cf027 > 127 && _0x4cf027 < 2048) {
          _0x5f0f50 += String.fromCharCode(_0x4cf027 >> 6 | 192);
          _0x5f0f50 += String.fromCharCode(_0x4cf027 & 63 | 128);
        } else {
          _0x5f0f50 += String.fromCharCode(_0x4cf027 >> 12 | 224);
          _0x5f0f50 += String.fromCharCode(_0x4cf027 >> 6 & 63 | 128);
          _0x5f0f50 += String.fromCharCode(_0x4cf027 & 63 | 128);
        }
      }
    }
    return _0x5f0f50;
  };
  utf8Decode = function (_0x173091) {
    var _0x3efd72 = "";
    var _0xd4ae93 = 0;
    var _0x594993 = 0;
    var _0xbbe392 = 0;
    var _0x1d7b90 = 0;
    while (_0xd4ae93 < _0x173091.length) {
      _0x594993 = _0x173091.charCodeAt(_0xd4ae93);
      if (_0x594993 < 128) {
        _0x3efd72 += String.fromCharCode(_0x594993);
        _0xd4ae93++;
      } else {
        if (_0x594993 > 191 && _0x594993 < 224) {
          _0xbbe392 = _0x173091.charCodeAt(_0xd4ae93 + 1 < 10 ? "0" + (_0xd4ae93 + 1) : _0xd4ae93 + 1);
          _0x3efd72 += String.fromCharCode((_0x594993 & 31) << 6 | _0xbbe392 & 63);
          _0xd4ae93 += 2;
        } else {
          _0xbbe392 = _0x173091.charCodeAt(_0xd4ae93 + 1 < 10 ? "0" + (_0xd4ae93 + 1) : _0xd4ae93 + 1);
          _0x1d7b90 = _0x173091.charCodeAt(_0xd4ae93 + 2);
          _0x3efd72 += String.fromCharCode((_0x594993 & 15) << 12 | (_0xbbe392 & 63) << 6 | _0x1d7b90 & 63);
          _0xd4ae93 += 3;
        }
      }
    }
    return _0x3efd72;
  };
}
function David_0x5b6b2d(_0x3cefd0, _0x2036eb) {
  class _0x2804fb {
    constructor(_0x51bf82) {
      this.env = _0x51bf82;
    }
    send(_0x28f397, _0x2f76b3 = "GET") {
      _0x28f397 = typeof _0x28f397 === "string" ? {
        url: _0x28f397
      } : _0x28f397;
      let _0x59fda2 = this.get;
      if (_0x2f76b3 === "POST") {
        _0x59fda2 = this.post;
      }
      return new Promise((_0x38d391, _0x4821f8) => {
        _0x59fda2.call(this, _0x28f397, (_0x22d3ec, _0x4d7e55, _0x13c80d) => {
          if (_0x22d3ec) {
            _0x4821f8(_0x22d3ec);
          } else {
            _0x38d391(_0x4d7e55);
          }
        });
      });
    }
    get(_0x128aea) {
      return this.send.call(this.env, _0x128aea);
    }
    post(_0x19b5a1) {
      return this.send.call(this.env, _0x19b5a1, "POST");
    }
  }
  return new class {
    constructor(_0x4379b3, _0x181267) {
      this.name = _0x4379b3;
      this.http = new _0x2804fb(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x181267);
      const _0x1a1c69 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x1a1c69);
      }
      this.log("", "🔔 " + this.name + ", 开始!");
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
    toObj(_0x267df0, _0x5de337 = null) {
      try {
        return JSON.parse(_0x267df0);
      } catch {
        return _0x5de337;
      }
    }
    toStr(_0x27f785, _0x33b683 = null) {
      try {
        return JSON.stringify(_0x27f785);
      } catch {
        return _0x33b683;
      }
    }
    getjson(_0x551de9, _0x1d4f60) {
      let _0xffe969 = _0x1d4f60;
      const _0x334334 = this.getdata(_0x551de9);
      if (_0x334334) {
        try {
          _0xffe969 = JSON.parse(this.getdata(_0x551de9));
        } catch {}
      }
      return _0xffe969;
    }
    setjson(_0x125c64, _0x581cfa) {
      try {
        return this.setdata(JSON.stringify(_0x125c64), _0x581cfa);
      } catch {
        return false;
      }
    }
    getScript(_0xc30a30) {
      return new Promise(_0x5bf4e7 => {
        const _0x138099 = {
          url: _0xc30a30
        };
        this.get(_0x138099, (_0xed9c88, _0x26444c, _0x4c8b4d) => _0x5bf4e7(_0x4c8b4d));
      });
    }
    runScript(_0x246e11, _0xa1682d) {
      return new Promise(_0x5f0924 => {
        let _0x570ec3 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x570ec3 = _0x570ec3 ? _0x570ec3.replace(/\n/g, "").trim() : _0x570ec3;
        let _0x1ee219 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x1ee219 = _0x1ee219 ? _0x1ee219 * 1 : 20;
        _0x1ee219 = _0xa1682d && _0xa1682d.timeout ? _0xa1682d.timeout : _0x1ee219;
        const [_0x3efa81, _0x46fce3] = _0x570ec3.split("@"),
          _0x382295 = {
            script_text: _0x246e11,
            mock_type: "cron",
            timeout: _0x1ee219
          };
        const _0x75cf1f = {
          "X-Key": _0x3efa81,
          Accept: "*/*"
        };
        const _0x12faa5 = {
          url: "http: //" + _0x46fce3 + "/v1/scripting/evaluate",
          body: _0x382295,
          headers: _0x75cf1f
        };
        this.post(_0x12faa5, (_0x54bbef, _0x2d01dd, _0x30f58c) => _0x5f0924(_0x30f58c));
      }).catch(_0x520f29 => this.logErr(_0x520f29));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x39bf59 = this.path.resolve(this.dataFile),
          _0x46448f = this.path.resolve(process.cwd(), this.dataFile),
          _0x501743 = this.fs.existsSync(_0x39bf59),
          _0x268bb1 = !_0x501743 && this.fs.existsSync(_0x46448f);
        if (_0x501743 || _0x268bb1) {
          const _0x39546f = _0x501743 ? _0x39bf59 : _0x46448f;
          try {
            return JSON.parse(this.fs.readFileSync(_0x39546f));
          } catch (_0x32db6a) {
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
        const _0x2516bf = this.path.resolve(this.dataFile),
          _0x110ba2 = this.path.resolve(process.cwd(), this.dataFile),
          _0x515087 = this.fs.existsSync(_0x2516bf),
          _0xfd5d94 = !_0x515087 && this.fs.existsSync(_0x110ba2),
          _0x18bb93 = JSON.stringify(this.data);
        if (_0x515087) {
          this.fs.writeFileSync(_0x2516bf, _0x18bb93);
        } else {
          if (_0xfd5d94) {
            this.fs.writeFileSync(_0x110ba2, _0x18bb93);
          } else {
            this.fs.writeFileSync(_0x2516bf, _0x18bb93);
          }
        }
      }
    }
    lodash_get(_0x2e0f9d, _0x558e50, _0x199afb = undefined) {
      const _0x1eb5b7 = _0x558e50.replace(/[(d+)]/g, ".$1").split(".");
      let _0x5bf3db = _0x2e0f9d;
      for (const _0x48ab60 of _0x1eb5b7) {
        _0x5bf3db = Object(_0x5bf3db)[_0x48ab60];
        if (_0x5bf3db === undefined) {
          return _0x199afb;
        }
      }
      return _0x5bf3db;
    }
    lodash_set(_0x5440f3, _0x45b73c, _0x5001c5) {
      if (Object(_0x5440f3) !== _0x5440f3) {
        return _0x5440f3;
      }
      if (!Array.isArray(_0x45b73c)) {
        _0x45b73c = _0x45b73c.toString().match(/[^.[]]+/g) || [];
      }
      _0x45b73c.slice(0, -1).reduce((_0x4c789b, _0x1e39d4, _0x4b9037) => Object(_0x4c789b[_0x1e39d4]) === _0x4c789b[_0x1e39d4] ? _0x4c789b[_0x1e39d4] : _0x4c789b[_0x1e39d4] = Math.abs(_0x45b73c[_0x4b9037 + 1 < 10 ? "0" + (_0x4b9037 + 1) : _0x4b9037 + 1]) >> 0 === +_0x45b73c[_0x4b9037 + 1 < 10 ? "0" + (_0x4b9037 + 1) : _0x4b9037 + 1] ? [] : {}, _0x5440f3)[_0x45b73c[_0x45b73c.length - 1]] = _0x5001c5;
      return _0x5440f3;
    }
    getdata(_0x48fece) {
      let _0x39c7ce = this.getval(_0x48fece);
      if (/^@/.test(_0x48fece)) {
        const [, _0x19a3cf, _0x8c6f96] = /^@(.*?).(.*?)$/.exec(_0x48fece),
          _0x23ded1 = _0x19a3cf ? this.getval(_0x19a3cf) : "";
        if (_0x23ded1) {
          try {
            const _0x19fabc = JSON.parse(_0x23ded1);
            _0x39c7ce = _0x19fabc ? this.lodash_get(_0x19fabc, _0x8c6f96, "") : _0x39c7ce;
          } catch (_0x4e6f16) {
            _0x39c7ce = "";
          }
        }
      }
      return _0x39c7ce;
    }
    setdata(_0x568866, _0x5273d6) {
      let _0x5302f3 = false;
      if (/^@/.test(_0x5273d6)) {
        const [, _0x3e6b9e, _0x32ff68] = /^@(.*?).(.*?)$/.exec(_0x5273d6),
          _0x36f601 = this.getval(_0x3e6b9e),
          _0xeecb2 = _0x3e6b9e ? _0x36f601 === "null" ? null : _0x36f601 || "{}" : "{}";
        try {
          const _0x29bd2f = JSON.parse(_0xeecb2);
          this.lodash_set(_0x29bd2f, _0x32ff68, _0x568866);
          _0x5302f3 = this.setval(JSON.stringify(_0x29bd2f), _0x3e6b9e);
        } catch (_0x4f15a5) {
          const _0x51eb24 = {};
          this.lodash_set(_0x51eb24, _0x32ff68, _0x568866);
          _0x5302f3 = this.setval(JSON.stringify(_0x51eb24), _0x3e6b9e);
        }
      } else {
        _0x5302f3 = this.setval(_0x568866, _0x5273d6);
      }
      return _0x5302f3;
    }
    getval(_0xad5954) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0xad5954);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0xad5954);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0xad5954];
          } else {
            return this.data && this.data[_0xad5954] || null;
          }
        }
      }
    }
    setval(_0x1fce3a, _0x2689e9) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x1fce3a, _0x2689e9);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x1fce3a, _0x2689e9);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x2689e9] = _0x1fce3a;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x2689e9] || null;
          }
        }
      }
    }
    initGotEnv(_0x20bbf4) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x20bbf4) {
        _0x20bbf4.headers = _0x20bbf4.headers ? _0x20bbf4.headers : {};
        if (undefined === _0x20bbf4.headers.Cookie && undefined === _0x20bbf4.cookieJar) {
          _0x20bbf4.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x296b00, _0x2711f6 = () => {}) {
      if (_0x296b00.headers) {
        delete _0x296b00.headers["Content-Type"];
        delete _0x296b00.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x296b00.headers = _0x296b00.headers || {};
          const _0x5ea235 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x296b00.headers, _0x5ea235);
        }
        $httpClient.get(_0x296b00, (_0x276d9c, _0x27d2a8, _0x101ee2) => {
          if (!_0x276d9c && _0x27d2a8) {
            _0x27d2a8.body = _0x101ee2;
            _0x27d2a8.statusCode = _0x27d2a8.status;
          }
          _0x2711f6(_0x276d9c, _0x27d2a8, _0x101ee2);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x296b00.opts = _0x296b00.opts || {};
            const _0x1e8c75 = {
              hints: false
            };
            Object.assign(_0x296b00.opts, _0x1e8c75);
          }
          $task.fetch(_0x296b00).then(_0x2f10b5 => {
            const {
                statusCode: _0x227741,
                statusCode: _0x2a1267,
                headers: _0x47e76c,
                body: _0x1fda4b
              } = _0x2f10b5,
              _0x297801 = {
                status: _0x227741,
                statusCode: _0x2a1267,
                headers: _0x47e76c,
                body: _0x1fda4b
              };
            _0x2711f6(null, _0x297801, _0x1fda4b);
          }, _0x20ad4f => _0x2711f6(_0x20ad4f));
        } else {
          this.isNode() && (this.initGotEnv(_0x296b00), this.got(_0x296b00).on("redirect", (_0x285791, _0x9c145d) => {
            try {
              if (_0x285791.headers["set-cookie"]) {
                const _0x344068 = _0x285791.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                if (_0x344068) {
                  this.ckjar.setCookieSync(_0x344068, null);
                }
                _0x9c145d.cookieJar = this.ckjar;
              }
            } catch (_0x12e000) {
              this.logErr(_0x12e000);
            }
          }).then(_0x1416e9 => {
            const {
                statusCode: _0x9b7e7d,
                statusCode: _0x48086a,
                headers: _0xf21525,
                body: _0x2c431b
              } = _0x1416e9,
              _0x2dbb87 = {
                status: _0x9b7e7d,
                statusCode: _0x48086a,
                headers: _0xf21525,
                body: _0x2c431b
              };
            _0x2711f6(null, _0x2dbb87, _0x2c431b);
          }, _0x586971 => {
            const {
              message: _0x73707f,
              response: _0x2d390f
            } = _0x586971;
            _0x2711f6(_0x73707f, _0x2d390f, _0x2d390f && _0x2d390f.body);
          }));
        }
      }
    }
    post(_0x25ea27, _0xc59f5e = () => {}) {
      const _0x1795b9 = _0x25ea27.method ? _0x25ea27.method.toLocaleLowerCase() : "post";
      if (_0x25ea27.body && _0x25ea27.headers && !_0x25ea27.headers["Content-Type"]) {
        _0x25ea27.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x25ea27.headers) {
        delete _0x25ea27.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x25ea27.headers = _0x25ea27.headers || {};
          const _0x800079 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x25ea27.headers, _0x800079);
        }
        $httpClient[_0x1795b9](_0x25ea27, (_0x191e9a, _0x3b9340, _0x4bde68) => {
          if (!_0x191e9a && _0x3b9340) {
            _0x3b9340.body = _0x4bde68;
            _0x3b9340.statusCode = _0x3b9340.status;
          }
          _0xc59f5e(_0x191e9a, _0x3b9340, _0x4bde68);
        });
      } else {
        if (this.isQuanX()) {
          _0x25ea27.method = _0x1795b9;
          if (this.isNeedRewrite) {
            _0x25ea27.opts = _0x25ea27.opts || {};
            const _0x92e36b = {
              hints: false
            };
            Object.assign(_0x25ea27.opts, _0x92e36b);
          }
          $task.fetch(_0x25ea27).then(_0x540e89 => {
            const {
                statusCode: _0x12f4da,
                statusCode: _0x2460d0,
                headers: _0x8f28ba,
                body: _0x49d78c
              } = _0x540e89,
              _0x1fbb19 = {
                status: _0x12f4da,
                statusCode: _0x2460d0,
                headers: _0x8f28ba,
                body: _0x49d78c
              };
            _0xc59f5e(null, _0x1fbb19, _0x49d78c);
          }, _0x21c557 => _0xc59f5e(_0x21c557));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x25ea27);
            const {
              url: _0x519008,
              ..._0x17036b
            } = _0x25ea27;
            this.got[_0x1795b9](_0x519008, _0x17036b).then(_0xedaba0 => {
              const {
                  statusCode: _0x46c9cd,
                  statusCode: _0x27b897,
                  headers: _0x2b0dda,
                  body: _0x5d561d
                } = _0xedaba0,
                _0x58ba62 = {
                  status: _0x46c9cd,
                  statusCode: _0x27b897,
                  headers: _0x2b0dda,
                  body: _0x5d561d
                };
              _0xc59f5e(null, _0x58ba62, _0x5d561d);
            }, _0x4162cf => {
              const {
                message: _0x38be78,
                response: _0x13e15f
              } = _0x4162cf;
              _0xc59f5e(_0x38be78, _0x13e15f, _0x13e15f && _0x13e15f.body);
            });
          }
        }
      }
    }
    put(_0x46d0cd, _0x3ddbb9 = () => {}) {
      const _0x163e9e = _0x46d0cd.method ? _0x46d0cd.method.toLocaleLowerCase() : "put";
      if (_0x46d0cd.body && _0x46d0cd.headers && !_0x46d0cd.headers["Content-Type"]) {
        _0x46d0cd.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x46d0cd.headers) {
        delete _0x46d0cd.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x46d0cd.headers = _0x46d0cd.headers || {};
          const _0x53dfc1 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x46d0cd.headers, _0x53dfc1);
        }
        $httpClient[_0x163e9e](_0x46d0cd, (_0x4454a3, _0x2b8d8a, _0x3d1e0b) => {
          if (!_0x4454a3 && _0x2b8d8a) {
            _0x2b8d8a.body = _0x3d1e0b;
            _0x2b8d8a.statusCode = _0x2b8d8a.status;
          }
          _0x3ddbb9(_0x4454a3, _0x2b8d8a, _0x3d1e0b);
        });
      } else {
        if (this.isQuanX()) {
          _0x46d0cd.method = _0x163e9e;
          if (this.isNeedRewrite) {
            _0x46d0cd.opts = _0x46d0cd.opts || {};
            const _0x4ac246 = {
              hints: false
            };
            Object.assign(_0x46d0cd.opts, _0x4ac246);
          }
          $task.fetch(_0x46d0cd).then(_0x314c3f => {
            const {
                statusCode: _0x32b29d,
                statusCode: _0x256deb,
                headers: _0x7eb462,
                body: _0x5531c6
              } = _0x314c3f,
              _0xe8f047 = {
                status: _0x32b29d,
                statusCode: _0x256deb,
                headers: _0x7eb462,
                body: _0x5531c6
              };
            _0x3ddbb9(null, _0xe8f047, _0x5531c6);
          }, _0x19aa0f => _0x3ddbb9(_0x19aa0f));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x46d0cd);
            const {
              url: _0xa83238,
              ..._0x4f7150
            } = _0x46d0cd;
            this.got[_0x163e9e](_0xa83238, _0x4f7150).then(_0x48c267 => {
              const {
                  statusCode: _0x3bf9e7,
                  statusCode: _0x2bcebf,
                  headers: _0x5df076,
                  body: _0x3f20d0
                } = _0x48c267,
                _0x17976e = {
                  status: _0x3bf9e7,
                  statusCode: _0x2bcebf,
                  headers: _0x5df076,
                  body: _0x3f20d0
                };
              _0x3ddbb9(null, _0x17976e, _0x3f20d0);
            }, _0x24d701 => {
              const {
                message: _0x89302,
                response: _0x267264
              } = _0x24d701;
              _0x3ddbb9(_0x89302, _0x267264, _0x267264 && _0x267264.body);
            });
          }
        }
      }
    }
    time(_0x49117f, _0x488774 = null) {
      const _0x14eb42 = _0x488774 ? new Date(_0x488774) : new Date();
      let _0x5c1eb0 = {
        "M+": _0x14eb42.getMonth() + 1,
        "d+": _0x14eb42.getDate(),
        "H+": _0x14eb42.getHours(),
        "m+": _0x14eb42.getMinutes(),
        "s+": _0x14eb42.getSeconds(),
        "q+": Math.floor((_0x14eb42.getMonth() + 3) / 3),
        S: _0x14eb42.getMilliseconds()
      };
      if (/(y+)/.test(_0x49117f)) {
        _0x49117f = _0x49117f.replace(RegExp.$1, (_0x14eb42.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x218c4a in _0x5c1eb0) if (new RegExp("(" + _0x218c4a + ")").test(_0x49117f)) {
        _0x49117f = _0x49117f.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x5c1eb0[_0x218c4a] : ("00" + _0x5c1eb0[_0x218c4a]).substr(("" + _0x5c1eb0[_0x218c4a]).length));
      }
      return _0x49117f;
    }
    msg(_0x189525 = _0x3cefd0, _0x4bbcc7 = "", _0x1ebb0b = "", _0x396ed1) {
      const _0x195b78 = _0x379a68 => {
        if (!_0x379a68) {
          return _0x379a68;
        }
        if (typeof _0x379a68 === "string") {
          if (this.isLoon()) {
            return _0x379a68;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x379a68
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x379a68
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x379a68 === "object") {
            if (this.isLoon()) {
              let _0x5311b3 = _0x379a68.openUrl || _0x379a68.url || _0x379a68["open-url"],
                _0xde461c = _0x379a68.mediaUrl || _0x379a68["media-url"];
              const _0x553397 = {
                openUrl: _0x5311b3,
                mediaUrl: _0xde461c
              };
              return _0x553397;
            } else {
              if (this.isQuanX()) {
                let _0x3c9160 = _0x379a68["open-url"] || _0x379a68.url || _0x379a68.openUrl,
                  _0x56205c = _0x379a68["media-url"] || _0x379a68.mediaUrl;
                const _0x672ec3 = {
                  "open-url": _0x3c9160,
                  "media-url": _0x56205c
                };
                return _0x672ec3;
              } else {
                if (this.isSurge()) {
                  let _0x56949c = _0x379a68.url || _0x379a68.openUrl || _0x379a68["open-url"];
                  const _0x37be5e = {
                    url: _0x56949c
                  };
                  return _0x37be5e;
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
          $notification.post(_0x189525, _0x4bbcc7, _0x1ebb0b, _0x195b78(_0x396ed1));
        } else {
          this.isQuanX() && $notify(_0x189525, _0x4bbcc7, _0x1ebb0b, _0x195b78(_0x396ed1));
        }
      }
      if (!this.isMuteLog) {
        let _0x58d7b3 = ["", "==============📣系统通知📣=============="];
        _0x58d7b3.push(_0x189525);
        _0x4bbcc7 ? _0x58d7b3.push(_0x4bbcc7) : "";
        _0x1ebb0b ? _0x58d7b3.push(_0x1ebb0b) : "";
        console.log(_0x58d7b3.join("\n"));
        this.logs = this.logs.concat(_0x58d7b3);
      }
    }
    log(..._0x1eac44) {
      _0x1eac44.length > 0 && (this.logs = [...this.logs, ..._0x1eac44]);
      console.log(_0x1eac44.join(this.logSeparator));
    }
    logErr(_0x2b2e60, _0x288a77) {
      const _0x31dc67 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !_0x31dc67 ? this.log("", "❗️" + this.name + ", 错误!", _0x2b2e60) : this.log("", "❗️" + this.name + ", 错误!", _0x2b2e60.stack);
    }
    wait(_0x3bbe66) {
      return new Promise(_0x5cd207 => setTimeout(_0x5cd207, _0x3bbe66));
    }
    done(_0x59f779 = {}) {
      const _0xbc5a5a = new Date().getTime(),
        _0xd385b7 = (_0xbc5a5a - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0xd385b7 + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x59f779);
    }
  }(_0x3cefd0, _0x2036eb);
}