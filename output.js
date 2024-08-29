//Thu Aug 29 2024 13:03:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const David_0x4c906a = new David_0x230a32("新氧医美");
const David_0x255f36 = "V1.0.3";
const David_0x4e2b48 = "xyymapp";
let David_0x4fab3d = David_0x4c906a.getjson(David_0x4e2b48, []);
const David_0x5cfe30 = David_0x4c906a.isNode() ? require("fs") : "";
const David_0x3302da = David_0x4c906a.isNode() ? require("ws") : "";
const David_0x155815 = "david_cookies.js";
if (David_0x4c906a.isNode() && !David_0x5cfe30.existsSync(David_0x155815)) {
  David_0x4c906a.log("🔔 外挂ck文件不存在，开始创建模版>>>");
  David_0x5cfe30.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x286e45 => {});
}
const David_0x37e87c = David_0x4c906a.isNode() ? require("http") : "";
const David_0x5e53d1 = David_0x4c906a.isNode() ? require("./sendNotify") : "";
const David_0xe5c62f = David_0x4c906a.isNode() ? require("./david_cookies") : "";
let David_0x4c62dc = David_0x4c906a.getdata("tguserid") || 1;
let David_0x3c170a = David_0x4c906a.getdata("xyymactivecode") || 0;
let David_0x211d2a = David_0x4c906a.getval("xyymuserck") || 1;
let David_0x3a996f = David_0x4c906a.getval("apiHost") || "http://106.15.104.124:8080";
if (David_0x4c906a.getval("apiHosts")) {
  David_0x3a996f = David_0x4c906a.getval("apiHosts");
}
const David_0x34502f = 0;
let David_0x2c1334 = David_0x4c906a.getval("tz") || "1";
var David_0x285df0 = "";
var David_0x45bc0d = "";
let David_0x2aa528 = "9.41.2";
let David_0x5db878 = "";
let David_0x48e9f5 = [];
let David_0x4a6156 = [];
let David_0x580f1e = [];
let David_0x292632 = [];
let David_0x2bbf7f = [];
let David_0x2a1031 = [];
let David_0x24485b = [];
let David_0x4999fa = [];
let David_0x2c47a1 = "";
let David_0x502898 = "";
let David_0x2ff316 = "";
let David_0x3b76d4 = "";
let David_0x3634e3 = "";
let David_0x13abff = "";
let David_0x41d1fd = "";
let David_0x578d64 = "";
let David_0x529549 = 1;
let David_0x4b09f8 = 1;
let David_0x469812 = 1;
let David_0x3eb54c = 1;
let David_0x579c97 = "";
let David_0x5524df = "";
let David_0x5ae7e9 = 3;
let David_0x2cce03 = "";
if (David_0x4c906a.isNode()) {
  if (process.env.XYYMAPP) {
    David_0x4fab3d = JSON.parse(process.env.XYYMAPP);
  } else {
    David_0x4fab3d = David_0xe5c62f.XYYM;
  }
  David_0x4c62dc = process.env.TGUSERID;
  David_0x3c170a = process.env.XYYMACTIVECODE;
  if (process.env.APIHOST) {
    David_0x3a996f = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    David_0x3a996f = process.env.APIHOSTS;
  }
  David_0x285df0 = new Date(new Date().getTime()).getHours();
  David_0x45bc0d = new Date(new Date().getTime()).getMinutes();
  David_0x4c906a.log("🔔 当前环境: Node, 当前时间：" + David_0x285df0 + "点");
} else {
  David_0x285df0 = new Date().getHours();
  David_0x45bc0d = new Date().getMinutes();
  David_0x4c906a.log("🔔 当前环境: 手机代理, 当前时间：" + David_0x285df0 + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await David_0x56935b();
  } else {
    if (!David_0x4fab3d) {
      David_0x4c906a.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    David_0x4c906a.log("📢 开始检测服务器接口状态>>>");
    let _0x1d230f = false;
    const _0x1a310d = David_0x3a996f.split("&");
    const _0x397e1f = _0x1a310d.length;
    for (let _0x84dcea = 0; _0x84dcea < _0x397e1f; _0x84dcea++) {
      if (David_0x4c906a.isNode()) {
        _0x1d230f = await David_0x59a2a4("" + _0x1a310d[_0x84dcea], 2500);
      } else {
        if (David_0x4c906a.isSurge() || David_0x4c906a.isLoon()) {
          _0x1d230f = await David_0x5268f5("" + _0x1a310d[_0x84dcea], 2500);
        } else {
          _0x1d230f = await David_0x148cdb("" + _0x1a310d[_0x84dcea], 2500);
        }
      }
      if (_0x1d230f == true) {
        David_0x3a996f = _0x1a310d[_0x84dcea];
        David_0x4c906a.log("📢 接口" + (_0x84dcea + 1) + "[" + _0x1a310d[_0x84dcea] + "]服务器接口正常! 🎉");
        break;
      }
      if (_0x84dcea == _0x397e1f - 1 && _0x1d230f == false) {
        David_0x4c906a.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        David_0x4c906a.msg(David_0x4c906a.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!David_0x3c170a || !David_0x4c62dc || David_0x4c62dc == 1 || David_0x3c170a == 0 || David_0x3c170a.length != 32) {
      David_0x4c906a.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await David_0x2efecf(David_0x4e2b48, David_0x4c62dc, David_0x3c170a);
    David_0x4c906a.log("📢 " + David_0x13abff);
    David_0x4c906a.log("🔔 当前脚本版本号: " + David_0x255f36 + "，最新版本号: " + David_0x3b76d4);
    if (David_0x2cce03 != "") {
      let _0x34d166 = new Date(David_0x2cce03).getTime();
      let _0x4e6999 = new Date().getTime();
      if (_0x4e6999 > _0x34d166) {
        David_0x4c906a.log("⚠️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (David_0x255f36 < David_0x3b76d4) {
      David_0x4c906a.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      David_0x2be519("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (David_0x2ff316 != true) {
      David_0x4c906a.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (David_0x579c97 != true) {
      David_0x4c906a.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x502898 != true) {
      David_0x4c906a.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x578d64 == true) {
      David_0x4c906a.log("🔔 此脚本采用付费模式。🔒");
    } else {
      David_0x4c906a.log("🔔 此脚本采用免费模式。🔓");
    }
    if (David_0x2cce03 != "") {
      if (David_0x578d64 == true) {
        David_0x4c906a.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0x5f567c = new Date(David_0x2cce03).getTime();
        let _0x2a92c6 = new Date().getTime();
        if (_0x2a92c6 > _0x5f567c) {
          David_0x4c906a.log("⚠️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (David_0x41d1fd != true) {
        David_0x4c906a.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      }
    }
    if (David_0x529549 > 1) {
      David_0x4c906a.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + David_0x5ae7e9 * David_0x529549 + "个账号。");
    }
    if (David_0x4b09f8 > 1) {
      David_0x4c906a.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + David_0x469812 + "次, 已经运行了" + David_0x3eb54c + "次。");
    }
    if (David_0x3634e3 != true) {
      David_0x4c906a.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (David_0x4fab3d.length > David_0x5ae7e9 * David_0x529549) {
      David_0x4c906a.log("⚠️ 当前用户一次最多运行" + David_0x5ae7e9 * David_0x529549 + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (David_0x4fab3d.length == 0) {
      David_0x4c906a.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (David_0x3eb54c + David_0x4fab3d.length > David_0x469812) {
      David_0x4c906a.log("📢 一共发现了" + David_0x4fab3d.length + "个账号");
      David_0x4c906a.log("⚠️ 当前用户运行次数剩余" + (David_0x469812 - David_0x3eb54c) + "次，还可以运行" + (David_0x469812 - David_0x3eb54c) + "个账号，还需要" + (David_0x4fab3d.length - (David_0x469812 - David_0x3eb54c)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (David_0x2cce03 != "") {
      David_0x4c906a.log("📢 你的会员有效期到： " + David_0x2cce03);
    }
    David_0x4c906a.log("📢 一共发现了" + David_0x4fab3d.length + "个账号");
    let _0x50c2f0 = [];
    for (let _0x56d6d = 0; _0x56d6d < David_0x4fab3d.length; _0x56d6d++) {
      David_0x48e9f5[_0x56d6d] = "";
      if (David_0x4c906a.isNode()) {
        if (_0x56d6d == 0) {
          await David_0x169561(_0x56d6d);
        } else {
          David_0x580f1e.push(David_0x580f1e[0]);
        }
        David_0x292632[_0x56d6d] = 0;
      } else {
        David_0x292632[_0x56d6d] = 1;
      }
      await David_0x255cc4(_0x56d6d);
      if (David_0x4c906a.isNode() && _0x56d6d == David_0x4fab3d.length - 1) {
        await David_0x580f1e[_0x56d6d].close();
      }
      await David_0x3ff028(David_0x4e2b48, David_0x4c62dc);
    }
    await Promise.allSettled(_0x50c2f0).then(_0x2649e6 => {
      David_0x4c906a.log("日志整理功能如下：");
      David_0x4c906a.log("---------------日志整理开始--------------");
      for (let _0xceb101 = 0; _0xceb101 < David_0x4fab3d.length; _0xceb101++) {
        David_0x4c906a.log(David_0x48e9f5[_0xceb101]);
        David_0x5db878 += David_0x48e9f5[_0xceb101];
      }
      David_0x4c906a.log("---------------日志整理结束--------------");
      David_0x2be519(David_0x5db878);
    });
  }
})().catch(_0x5945f6 => David_0x4c906a.logErr(_0x5945f6)).finally(() => David_0x4c906a.done());
async function David_0x539ce9(_0x15661a) {
  return new Promise((_0x552549, _0x249df0) => {
    David_0x4c906a.log("[账号" + (_0x15661a + 1 < 10 ? "0" + (_0x15661a + 1) : _0x15661a + 1) + "]: 开始执行 working......");
    David_0x19c143(_0x552549, _0x15661a);
  });
}
async function David_0x169561(_0x43ae3b) {
  if (David_0x4c906a.isNode()) {
    if (David_0x2bbf7f[_0x43ae3b] > 0) {
      David_0x4c906a.log("[账号00]: 尝试重新连接服务器>>>>>>");
    }
    David_0x580f1e[_0x43ae3b] = new David_0x3302da(David_0x3a996f.replace("http", "ws") + "/ws");
    David_0x580f1e[_0x43ae3b].on("open", function _0x5cdd6d() {
      David_0x4c906a.log("[账号00]: 签名通道已连接");
    });
    David_0x580f1e[_0x43ae3b].on("close", function _0x3662fc() {
      David_0x4c906a.log("[账号00]: 签名通道已关闭，原因是任务已处理完成");
    });
    David_0x580f1e[_0x43ae3b].on("error", function _0x1ee3f1() {
      David_0x4c906a.log("[账号00]: 签名通道已关闭，原因是出现错误");
      David_0x292632[_0x43ae3b] = 1;
      David_0x2bbf7f[_0x43ae3b]++;
      if (David_0x2bbf7f[_0x43ae3b] <= 3) {
        David_0x169561(_0x43ae3b);
      }
    });
  }
}
async function David_0x19c143(_0x1a2bb8, _0x811f10) {
  await David_0x4c906a.wait(3000, 5000);
  await David_0x4077fe(_0x811f10);
  await David_0x255cc4(_0x811f10);
  if (David_0x4c906a.isNode()) {
    await David_0x580f1e[_0x811f10].close();
  }
  await David_0x3ff028(David_0x4e2b48, David_0x4c62dc);
  _0x1a2bb8();
}
async function David_0x56935b() {
  if ($request.url.match(/\/v4\/unread/)) {
    const _0x5d8805 = $request.url;
    const _0x36203e = _0x5d8805 + "?params=" + $request.body;
    const _0x2897bf = David_0x40e8c5(_0x36203e);
    let _0x40f165 = _0x2897bf.xy_token;
    let _0x295c0d = _0x2897bf.uid;
    let _0xb656af = David_0x211d2a - 1;
    if (David_0x4fab3d[_0xb656af]) {
      David_0x4fab3d[_0xb656af].xyToken = _0x40f165;
      David_0x4fab3d[_0xb656af].uid = _0x295c0d;
    } else {
      const _0x3d5310 = {
        xyToken: _0x40f165,
        uid: _0x295c0d
      };
      David_0x4fab3d[_0xb656af] = _0x3d5310;
    }
    David_0x4c906a.setdata(JSON.stringify(David_0x4fab3d, null, 2), "xyymapp");
    David_0x4c906a.msg(David_0x4c906a.name, "新氧医美账号" + (_0xb656af + 1) + "Token获取成功！🎉");
  }
}
async function David_0x4077fe(_0x58b7b3) {
  const _0x1055f0 = "https://passport.soyoung.com/Apipassport/AppLoginNew";
  let _0x525320 = David_0x20151e(David_0x4fab3d[_0x58b7b3].mobile + "_" + David_0x4fab3d[_0x58b7b3].password);
  let _0x38706c = await David_0x403d80(_0x58b7b3, David_0x4fab3d[_0x58b7b3].mobile, true);
  let _0x1881c5 = await David_0x403d80(_0x58b7b3, David_0x4fab3d[_0x58b7b3].password, true);
  let _0x7e170e = await David_0x471a1c(_0x58b7b3, _0x1055f0, "password=" + _0x1881c5 + "&key=" + _0x525320 + "&password_encrypt=1&login_name=" + _0x38706c + "&");
  await David_0xd889d7(_0x1055f0, _0x7e170e, _0x58b7b3);
  await David_0x2ecca4("post", David_0x2a1031[_0x58b7b3], David_0x3ba8b4());
  let _0x733142 = David_0x2c47a1;
  if (_0x733142 != null && _0x733142.errorCode == 0) {
    David_0x4999fa[_0x58b7b3] = _0x733142.responseData.xy_token;
    David_0x4fab3d[_0x58b7b3].xyToken = _0x733142.responseData.xy_token;
    David_0x4a6156[_0x58b7b3] = _0x733142.responseData.uid;
    David_0x4fab3d[_0x58b7b3].uid = _0x733142.responseData.uid;
    David_0x4c906a.log("[账号" + (_0x58b7b3 + 1 < 10 ? "0" + (_0x58b7b3 + 1) : _0x58b7b3 + 1) + "]: 通过手机号和密码登录成功，开始初始化参数>>>");
    David_0x48e9f5[_0x58b7b3] += "[账号" + (_0x58b7b3 + 1 < 10 ? "0" + (_0x58b7b3 + 1) : _0x58b7b3 + 1) + "]: 通过手机号和密码登录成功，开始初始化参数>>>\n";
    David_0x4c906a.log("[账号" + (_0x58b7b3 + 1 < 10 ? "0" + (_0x58b7b3 + 1) : _0x58b7b3 + 1) + "]: 用户名=> " + _0x733142.responseData.nickname);
    David_0x48e9f5[_0x58b7b3] += "[账号" + (_0x58b7b3 + 1 < 10 ? "0" + (_0x58b7b3 + 1) : _0x58b7b3 + 1) + "]: 用户名=> " + _0x733142.responseData.nickname + "\n";
    David_0x4c906a.log("[账号" + (_0x58b7b3 + 1 < 10 ? "0" + (_0x58b7b3 + 1) : _0x58b7b3 + 1) + "]: 手机号=> " + _0x733142.responseData.login_mobile);
    David_0x48e9f5[_0x58b7b3] += "[账号" + (_0x58b7b3 + 1 < 10 ? "0" + (_0x58b7b3 + 1) : _0x58b7b3 + 1) + "]: 手机号=> " + _0x733142.responseData.login_mobile + "\n";
  } else {
    David_0x4c906a.log("[账号" + (_0x58b7b3 + 1 < 10 ? "0" + (_0x58b7b3 + 1) : _0x58b7b3 + 1) + "]: 登录信息=> " + _0x733142.errorMsg);
    David_0x48e9f5[_0x58b7b3] += "[账号" + (_0x58b7b3 + 1 < 10 ? "0" + (_0x58b7b3 + 1) : _0x58b7b3 + 1) + "]: 登录信息=> " + _0x733142.errorMsg + "\n";
  }
}
async function David_0x4a3a1d(_0x52b44a, _0xf437cd) {
  const _0x1ef74b = "https://passport.soyoung.com/Apipassport/QuickLogin";
  let _0x1ba07f = David_0x20151e(David_0x4fab3d[_0x52b44a].mobile + "_" + David_0x4fab3d[_0x52b44a].password);
  let _0x21f1c9 = await David_0x403d80(_0x52b44a, David_0x4fab3d[_0x52b44a].mobile, true);
  let _0x3ff7f6 = await David_0x471a1c(_0x52b44a, _0x1ef74b, "code=" + _0xf437cd + "&countrycode=086&key=" + _0x1ba07f + "&password_encrypt=1&mobile=" + _0x21f1c9 + "&");
  await David_0xd889d7(_0x1ef74b, _0x3ff7f6, _0x52b44a);
  await David_0x2ecca4("post", David_0x2a1031[_0x52b44a], David_0x3ba8b4());
  let _0xc61165 = David_0x2c47a1;
  if (_0xc61165 != null && _0xc61165.errorCode == 0) {
    David_0x4999fa[_0x52b44a] = _0xc61165.responseData.xy_token;
    David_0x4fab3d[_0x52b44a].xyToken = _0xc61165.responseData.xy_token;
    David_0x4a6156[_0x52b44a] = _0xc61165.responseData.uid;
    David_0x4fab3d[_0x52b44a].uid = _0xc61165.responseData.uid;
    David_0x4c906a.log("[账号" + (_0x52b44a + 1 < 10 ? "0" + (_0x52b44a + 1) : _0x52b44a + 1) + "]: 用户名=> " + _0xc61165.responseData.nickname);
    David_0x48e9f5[_0x52b44a] += "[账号" + (_0x52b44a + 1 < 10 ? "0" + (_0x52b44a + 1) : _0x52b44a + 1) + "]: 用户名=> " + _0xc61165.responseData.nickname + "\n";
    David_0x4c906a.log("[账号" + (_0x52b44a + 1 < 10 ? "0" + (_0x52b44a + 1) : _0x52b44a + 1) + "]: 手机号=> " + _0xc61165.responseData.login_mobile);
    David_0x48e9f5[_0x52b44a] += "[账号" + (_0x52b44a + 1 < 10 ? "0" + (_0x52b44a + 1) : _0x52b44a + 1) + "]: 手机号=> " + _0xc61165.responseData.login_mobile + "\n";
  } else {
    David_0x4c906a.log("[账号" + (_0x52b44a + 1 < 10 ? "0" + (_0x52b44a + 1) : _0x52b44a + 1) + "]: 登录信息=> " + _0xc61165.msg);
    David_0x48e9f5[_0x52b44a] += "[账号" + (_0x52b44a + 1 < 10 ? "0" + (_0x52b44a + 1) : _0x52b44a + 1) + "]: 登录信息=> " + _0xc61165.msg + "\n";
  }
}
async function David_0xefb6c1(_0xda5932) {
  const _0x3bb42b = "https://passport.soyoung.com/Apipassport/QuickLoginCode";
  let _0xedc85d = David_0x20151e("" + David_0x4fab3d[_0xda5932].mobile);
  let _0x2f321f = await David_0x403d80(_0xda5932, David_0x4fab3d[_0xda5932].mobile, true);
  let _0x247893 = await David_0x471a1c(_0xda5932, _0x3bb42b, "countrycode=086&key=" + _0xedc85d + "&mobile=" + _0x2f321f + "&");
  await David_0xd889d7(_0x3bb42b, _0x247893, _0xda5932);
  await David_0x2ecca4("post", David_0x2a1031[_0xda5932], David_0x3ba8b4());
  let _0x3af8d5 = David_0x2c47a1;
  if (!(_0x3af8d5 != null && _0x3af8d5.errorCode == 0)) {
    David_0x4c906a.log("[账号" + (_0xda5932 + 1 < 10 ? "0" + (_0xda5932 + 1) : _0xda5932 + 1) + "]: 发送验证码=> " + _0x3af8d5.msg);
    David_0x48e9f5[_0xda5932] += "[账号" + (_0xda5932 + 1 < 10 ? "0" + (_0xda5932 + 1) : _0xda5932 + 1) + "]: 发送验证码=> " + _0x3af8d5.msg + "\n";
  }
}
async function David_0x255cc4(_0x509bf9) {
  const _0x1f4f4b = "https://api.soyoung.com/v8/welfare/index";
  let _0x12d123 = await David_0x471a1c(_0x509bf9, _0x1f4f4b, "");
  await David_0xd889d7(_0x1f4f4b, _0x12d123, _0x509bf9);
  await David_0x2ecca4("post", David_0x2a1031[_0x509bf9], David_0x3ba8b4());
  let _0x5bffd8 = David_0x2c47a1;
  if (_0x5bffd8 != null && _0x5bffd8.errorCode == 0) {
    David_0x4c906a.log("[账号" + (_0x509bf9 + 1 < 10 ? "0" + (_0x509bf9 + 1) : _0x509bf9 + 1) + "]: 用户名=> " + _0x5bffd8.responseData.user.user_name);
    David_0x48e9f5[_0x509bf9] += "[账号" + (_0x509bf9 + 1 < 10 ? "0" + (_0x509bf9 + 1) : _0x509bf9 + 1) + "]: 用户名=> " + _0x5bffd8.responseData.user.user_name + "\n";
    David_0x4c906a.log("[账号" + (_0x509bf9 + 1 < 10 ? "0" + (_0x509bf9 + 1) : _0x509bf9 + 1) + "]: 余额=> " + _0x5bffd8.responseData.user.cash + "元");
    David_0x48e9f5[_0x509bf9] += "[账号" + (_0x509bf9 + 1 < 10 ? "0" + (_0x509bf9 + 1) : _0x509bf9 + 1) + "]: 余额=> " + _0x5bffd8.responseData.user.cash + "元\n";
    David_0x4c906a.log("[账号" + (_0x509bf9 + 1 < 10 ? "0" + (_0x509bf9 + 1) : _0x509bf9 + 1) + "]: 氧分=> " + _0x5bffd8.responseData.user.xy_money);
    David_0x48e9f5[_0x509bf9] += "[账号" + (_0x509bf9 + 1 < 10 ? "0" + (_0x509bf9 + 1) : _0x509bf9 + 1) + "]: 氧分=> " + _0x5bffd8.responseData.user.xy_money + "\n";
    let _0x417319 = _0x5bffd8.responseData.sign_v2;
    if (_0x417319.status != "2") {
      await David_0x1edca4(_0x509bf9);
    }
    let _0x122082 = _0x5bffd8.responseData.todo_list.list;
    for (let _0x21dbec = 0; _0x21dbec < _0x122082.length; _0x21dbec++) {
      let _0x522f64 = _0x122082[_0x21dbec];
      if (_0x522f64.finish_status == "0") {
        if (_0x522f64.id != "200076") {
          if (_0x522f64.id == "200222") {
            let _0x118c36 = _0x5bffd8.responseData.prod_todo.num - _0x5bffd8.responseData.prod_todo.has_num;
            for (let _0x1e0472 = 0; _0x1e0472 < _0x118c36; _0x1e0472++) {
              await David_0x9cf3c6(_0x509bf9, _0x522f64);
              await David_0x4c906a.wait(David_0x4a8deb(10000, 15000));
            }
          } else {
            await David_0x9cf3c6(_0x509bf9, _0x522f64);
          }
          await David_0x4c906a.wait(David_0x4a8deb(10000, 15000));
        }
      } else {
        await David_0x55ab8c(_0x509bf9, _0x522f64);
      }
    }
  } else {
    David_0x4c906a.log("[账号" + (_0x509bf9 + 1 < 10 ? "0" + (_0x509bf9 + 1) : _0x509bf9 + 1) + "]: 任务中心=> " + _0x5bffd8.errorMsg);
    David_0x48e9f5[_0x509bf9] += "[账号" + (_0x509bf9 + 1 < 10 ? "0" + (_0x509bf9 + 1) : _0x509bf9 + 1) + "]: 任务中心=> " + _0x5bffd8.errorMsg + "\n";
  }
}
async function David_0x1edca4(_0x5af357) {
  const _0xa26522 = "https://api.soyoung.com/v8/welfare/signv2";
  let _0x48cd2d = await David_0x471a1c(_0x5af357, _0xa26522, "");
  await David_0xd889d7(_0xa26522, _0x48cd2d, _0x5af357);
  await David_0x2ecca4("post", David_0x2a1031[_0x5af357], David_0x3ba8b4());
  let _0x2949f1 = David_0x2c47a1;
  if (_0x2949f1 != null && _0x2949f1.errorCode == 0) {
    let _0x370bc0 = _0x2949f1.responseData.dialog.award;
    David_0x4c906a.log("[账号" + (_0x5af357 + 1 < 10 ? "0" + (_0x5af357 + 1) : _0x5af357 + 1) + "]: 签到=> 奖励" + _0x370bc0.prefix + _0x370bc0.value + "元，" + _0x2949f1.errorMsg);
    David_0x48e9f5[_0x5af357] += "[账号" + (_0x5af357 + 1 < 10 ? "0" + (_0x5af357 + 1) : _0x5af357 + 1) + "]: 签到=> 奖励" + _0x370bc0.prefix + _0x370bc0.value + "元，" + _0x2949f1.errorMsg + "\n";
  } else {
    David_0x4c906a.log("[账号" + (_0x5af357 + 1 < 10 ? "0" + (_0x5af357 + 1) : _0x5af357 + 1) + "]: 签到任务=> " + _0x2949f1.errorMsg + "，" + _0x2949f1.responseData["@"]);
    David_0x48e9f5[_0x5af357] += "[账号" + (_0x5af357 + 1 < 10 ? "0" + (_0x5af357 + 1) : _0x5af357 + 1) + "]: 签到任务=> " + _0x2949f1.errorMsg + "，" + _0x2949f1.responseData["@"] + "\n";
  }
}
async function David_0x55ab8c(_0x1eff61, _0x4d568d) {
  const _0x3cbe5d = "https://api.soyoung.com/v8/mission/getAwards";
  let _0x1a8e45 = await David_0x471a1c(_0x1eff61, _0x3cbe5d, "title=" + _0x4d568d.title + "&user_mission_info_id=" + _0x4d568d.id + "&type=" + _0x4d568d.type + "&attribute=" + _0x4d568d.attribute + "&finish_status=1&award_jingyan=" + _0x4d568d.award_jingyan + "&award_yangfen=" + _0x4d568d.award_yangfen + "&");
  await David_0xd889d7(_0x3cbe5d, _0x1a8e45, _0x1eff61);
  await David_0x2ecca4("post", David_0x2a1031[_0x1eff61], David_0x3ba8b4());
  let _0x9be490 = David_0x2c47a1;
  if (_0x9be490 != null && _0x9be490.errorCode == 0) {
    David_0x4c906a.log("[账号" + (_0x1eff61 + 1 < 10 ? "0" + (_0x1eff61 + 1) : _0x1eff61 + 1) + "]: " + _0x4d568d.title + "=> " + _0x9be490.errorMsg);
    David_0x48e9f5[_0x1eff61] += "[账号" + (_0x1eff61 + 1 < 10 ? "0" + (_0x1eff61 + 1) : _0x1eff61 + 1) + "]: " + _0x4d568d.title + "=> " + _0x9be490.errorMsg + "\n";
  } else {
    David_0x4c906a.log("[账号" + (_0x1eff61 + 1 < 10 ? "0" + (_0x1eff61 + 1) : _0x1eff61 + 1) + "]: " + _0x4d568d.title + "=> " + _0x9be490.errorMsg);
    David_0x48e9f5[_0x1eff61] += "[账号" + (_0x1eff61 + 1 < 10 ? "0" + (_0x1eff61 + 1) : _0x1eff61 + 1) + "]: " + _0x4d568d.title + "=> " + _0x9be490.errorMsg + "\n";
  }
}
async function David_0x9cf3c6(_0x312483, _0x5ba3e5) {
  const _0x2c733a = "https://api.soyoung.com/v8/mission/click";
  let _0xd2c0c3 = await David_0x471a1c(_0x312483, _0x2c733a, "user_mission_info_id=" + _0x5ba3e5.id + "&type=" + _0x5ba3e5.type + "&attribute=" + _0x5ba3e5.attribute + "&finish_status=0&");
  await David_0xd889d7(_0x2c733a, _0xd2c0c3, _0x312483);
  await David_0x2ecca4("post", David_0x2a1031[_0x312483], David_0x3ba8b4());
  let _0x14db2e = David_0x2c47a1;
  if (_0x14db2e != null && _0x14db2e.errorCode == 0) {
    David_0x4c906a.log("[账号" + (_0x312483 + 1 < 10 ? "0" + (_0x312483 + 1) : _0x312483 + 1) + "]: " + _0x5ba3e5.title + "=> 开始做任务>>>");
    David_0x48e9f5[_0x312483] += "[账号" + (_0x312483 + 1 < 10 ? "0" + (_0x312483 + 1) : _0x312483 + 1) + "]: " + _0x5ba3e5.title + "=> 开始做任务>>>\n";
    await David_0x4c906a.wait(David_0x4a8deb(10000, 15000));
    await David_0xecc34b(_0x312483, _0x5ba3e5);
  } else {
    David_0x4c906a.log("[账号" + (_0x312483 + 1 < 10 ? "0" + (_0x312483 + 1) : _0x312483 + 1) + "]: " + _0x5ba3e5.title + "=> " + _0x14db2e.errorMsg);
    David_0x48e9f5[_0x312483] += "[账号" + (_0x312483 + 1 < 10 ? "0" + (_0x312483 + 1) : _0x312483 + 1) + "]: " + _0x5ba3e5.title + "=> " + _0x14db2e.errorMsg + "\n";
  }
}
async function David_0xecc34b(_0x5b7b54, _0x5991a3) {
  const _0xd7fa77 = "https://api.soyoung.com/v8/welfare/UpAlert";
  let _0x371cae = await David_0x471a1c(_0x5b7b54, _0xd7fa77, "type=4&attribute=" + _0x5991a3.attribute + "&");
  await David_0xd889d7(_0xd7fa77, _0x371cae, _0x5b7b54);
  await David_0x2ecca4("post", David_0x2a1031[_0x5b7b54], David_0x3ba8b4());
  let _0x343ec8 = David_0x2c47a1;
  if (_0x343ec8 != null && _0x343ec8.errorCode == 0) {
    David_0x4c906a.log("[账号" + (_0x5b7b54 + 1 < 10 ? "0" + (_0x5b7b54 + 1) : _0x5b7b54 + 1) + "]: " + _0x5991a3.title + "=> 已完成");
    David_0x48e9f5[_0x5b7b54] += "[账号" + (_0x5b7b54 + 1 < 10 ? "0" + (_0x5b7b54 + 1) : _0x5b7b54 + 1) + "]: " + _0x5991a3.title + "=> 已完成\n";
  } else {
    David_0x4c906a.log("[账号" + (_0x5b7b54 + 1 < 10 ? "0" + (_0x5b7b54 + 1) : _0x5b7b54 + 1) + "]: " + _0x5991a3.title + "=> " + _0x343ec8.errorMsg);
    David_0x48e9f5[_0x5b7b54] += "[账号" + (_0x5b7b54 + 1 < 10 ? "0" + (_0x5b7b54 + 1) : _0x5b7b54 + 1) + "]: " + _0x5991a3.title + "=> " + _0x343ec8.errorMsg + "\n";
  }
}
async function David_0x471a1c(_0x4c9590, _0x109063, _0x153f52) {
  let _0x819c45 = David_0xf0643d();
  let _0xe9150e = await David_0x5e9731(_0x4c9590, _0x109063);
  let _0x8711a6 = David_0x4c93ff();
  let _0x35e813 = _0x153f52 + "uid=" + David_0x4fab3d[_0x4c9590].uid + "&xy_token=" + David_0x4fab3d[_0x4c9590].xyToken + "&lver=" + David_0x2aa528 + "&" + _0xe9150e + "&_time=" + _0x819c45 + "&request_id=" + _0x8711a6;
  if (_0x109063.indexOf("Apipassport") != -1) {
    _0x35e813 = _0x153f52 + "lver=" + David_0x2aa528 + "&" + _0xe9150e + "&_time=" + _0x819c45 + "&request_id=" + _0x8711a6;
  }
  let _0x39c096 = David_0x186b66(decodeURIComponent("_sydd=f3b6789eee74269d45c8f4d5d91c2d3b7c3ea5ff_" + David_0x2aa528 + "&" + David_0x2c7706(_0x35e813, [], {})));
  let _0x303cdd = await David_0x403d80(_0x4c9590, _0x39c096);
  return _0x35e813 + "&xy_sign=" + _0x303cdd;
}
async function David_0x5e9731(_0x19f533, _0x113310) {
  let _0x4b6e9c = await David_0x403d80(_0x19f533, _0x113310);
  let _0x429b6a = _0x4b6e9c.slice(1, -1).split(", ");
  let _0x13cb75 = "";
  let _0x4149b6 = "";
  _0x429b6a.forEach(_0x41f4ba => {
    const [_0x28eba5, _0x21ba72] = _0x41f4ba.split("=");
    if (_0x28eba5.startsWith("_") && !_0x28eba5.startsWith("_time")) {
      _0x13cb75 = _0x28eba5;
      _0x4149b6 = _0x21ba72;
    }
  });
  return _0x13cb75 + "=" + _0x4149b6;
}
async function David_0x403d80(_0x123bfb, _0x5ae5f5, _0x36e579) {
  await David_0x38b05d(_0x123bfb, _0x5ae5f5);
  if (_0x36e579) {
    return encodeURIComponent(David_0x24485b[_0x123bfb]);
  } else {
    return David_0x24485b[_0x123bfb];
  }
}
function David_0x4c93ff() {
  return David_0x186b66("com.youxiang.soyoungapp" + David_0x35a8e9());
}
function David_0x20151e(_0x4bfee5) {
  return David_0x186b66("lavion_soyoung@2013_" + _0x4bfee5);
}
function David_0x2efecf(_0x6c99b7, _0x591644, _0x4c6e3c) {
  return new Promise((_0xeaaa7f, _0x5c97c8) => {
    const _0x211bd8 = David_0x3a996f + "/script/permissions/lastest";
    const _0x258f10 = {
      appName: _0x6c99b7,
      userId: _0x591644,
      activityCode: _0x4c6e3c,
      version: David_0x255f36
    };
    const _0x294494 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x63ec53 = {
      url: _0x211bd8,
      headers: _0x294494,
      body: JSON.stringify(_0x258f10)
    };
    David_0x4c906a.post(_0x63ec53, async (_0x54e9d5, _0x4a23eb, _0x4638f3) => {
      if (_0x4638f3 && _0x4638f3 != null && _0x4638f3.replace(/\"/g, "").length > 50) {
        const _0x3aa936 = _0x4638f3.replace(/\"/g, "").slice(34);
        const _0x1e0b20 = new David_0x3c1a4a();
        result = JSON.parse(_0x1e0b20.decode(_0x3aa936));
        try {
          David_0x3b76d4 = result.version;
          David_0x502898 = result.userAuth;
          David_0x2ff316 = result.scriptAuth;
          David_0x3634e3 = result.runAuth;
          David_0x13abff = result.notify;
          David_0x41d1fd = result.vipAuth;
          David_0x578d64 = result.isCharge;
          David_0x529549 = result.runAcounts;
          David_0x4b09f8 = result.buyCount;
          David_0x3eb54c = result.runedCounts;
          David_0x469812 = result.runTotalCounts;
          David_0x579c97 = result.userRank;
          David_0x5524df = result.invicate;
          David_0x5ae7e9 = result.accountNumbers;
          David_0x2cce03 = result.vipDate;
        } catch (_0x161d57) {
          David_0x4c906a.log(_0x161d57);
        }
      } else {
        David_0x4c906a.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      _0xeaaa7f();
    });
  });
}
function David_0x3ff028(_0x2beaa9, _0x4bad7e) {
  return new Promise((_0x53fb9e, _0x4a617a) => {
    const _0x305bae = David_0x3a996f + "/script/run/add";
    const _0x30cbd8 = {
      appName: _0x2beaa9,
      userId: _0x4bad7e,
      activityCode: David_0x3c170a,
      version: David_0x255f36
    };
    const _0xd543c2 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x1cac25 = {
      url: _0x305bae,
      headers: _0xd543c2,
      body: JSON.stringify(_0x30cbd8)
    };
    David_0x4c906a.post(_0x1cac25, async (_0x5212d9, _0x226639, _0x25f587) => {
      _0x53fb9e();
    });
  });
}
function David_0x59a2a4(_0x439ff3, _0xf18768) {
  return new Promise((_0x36dde7, _0x1ba203) => {
    const _0x445bf2 = setTimeout(() => {
      _0x36dde7(false);
    }, _0xf18768);
    const _0x235f1a = David_0x37e87c.get(_0x439ff3, _0x4ff647 => {
      clearTimeout(_0x445bf2);
      if (_0x4ff647.statusCode === 404) {
        _0x36dde7(true);
      } else {
        _0x36dde7(false);
      }
    });
    _0x235f1a.on("error", _0x358747 => {
      clearTimeout(_0x445bf2);
      _0x36dde7(false);
    });
    _0x235f1a.on("timeout", () => {
      _0x235f1a.abort();
      _0x1ba203(new Error("请求超时"));
    });
  });
}
async function David_0x148cdb(_0x668afc, _0x406f35 = 3000) {
  return new Promise((_0x39958e, _0x42cb47) => {
    const _0x3671f7 = {
      url: _0x668afc + "/docs"
    };
    setTimeout(() => {
      _0x39958e(false);
    }, _0x406f35);
    David_0x4c906a.get(_0x3671f7, async (_0x434a92, _0xa2385, _0x35d7ca) => {
      if (_0xa2385.status == 401) {
        _0x39958e(true);
      } else {
        _0x39958e(false);
      }
    });
  });
}
async function David_0x5268f5(_0x1bc86f, _0x21d199 = 3000) {
  return new Promise((_0x2a4b1f, _0x15cd6d) => {
    const _0x428d87 = {
      url: _0x1bc86f + "/"
    };
    setTimeout(() => {
      _0x2a4b1f(false);
    }, _0x21d199);
    $httpClient.get(_0x428d87, async (_0x52e118, _0x3359c0, _0x36f0e8) => {
      if (_0x36f0e8 == "{\"detail\":\"Not Found\"}") {
        _0x2a4b1f(true);
      } else {
        _0x2a4b1f(false);
      }
    });
  });
}
async function David_0x5c1299(_0x595b43, _0x2efa35, _0x2c7ebd) {
  return new Promise((_0x8c424e, _0x47401e) => {
    const _0x8efa42 = David_0x3a996f + "/redis/hash/get/" + _0x2efa35 + "/" + _0x2c7ebd;
    const _0x58bfb1 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x56b80d = {
      url: _0x8efa42,
      headers: _0x58bfb1
    };
    David_0x4c906a.get(_0x56b80d, async (_0x38ec87, _0x18d455, _0xf2dcf7) => {
      const _0x47f5f6 = _0xf2dcf7.replace(/\"/g, "");
      answerTexts[_0x595b43] = _0x47f5f6;
      _0x8c424e();
    });
  });
}
function David_0x15656d(_0x11a1e8, _0x41700b, _0x492fd5) {
  return new Promise((_0x3b056d, _0x271004) => {
    const _0x3ada93 = David_0x3a996f + "/redis/hash/set";
    const _0x3c1cc3 = {
      key: _0x11a1e8,
      hashKey: _0x41700b,
      hashValue: _0x492fd5
    };
    const _0x56dbdd = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x1a92c8 = {
      url: _0x3ada93,
      headers: _0x56dbdd,
      body: JSON.stringify(_0x3c1cc3)
    };
    David_0x4c906a.post(_0x1a92c8, async (_0x1289d8, _0x5a2e35, _0x5dfe14) => {
      _0x3b056d();
    });
  });
}
function David_0x44be4e(_0x165a5b) {
  return new Promise((_0x976c39, _0x3eacba) => {
    const _0x1675b6 = David_0x3a996f + "/redis/set/pop/" + _0x165a5b;
    const _0x12a44e = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x1d6ba4 = {
      url: _0x1675b6,
      headers: _0x12a44e
    };
    David_0x4c906a.get(_0x1d6ba4, async (_0x2060eb, _0x2c4a3e, _0x58f8f3) => {
      const _0x1e332b = _0x58f8f3.replace(/\"/g, "");
      popCookie = _0x1e332b;
      _0x976c39();
    });
  });
}
async function David_0xd889d7(_0x9b5df2, _0x219392, _0xe19067) {
  let _0xe6738f = "Dalvik/2.1.0 (Linux; U; Android 10.1.0; Pixel Build/OPM4.171019.021.P1)";
  if (David_0x4fab3d[_0xe19067].ua && David_0x4fab3d[_0xe19067].ua != "") {
    _0xe6738f = David_0x4fab3d[_0xe19067].ua;
  }
  let _0x4e560e = David_0x5bcd35(_0x9b5df2);
  const _0x279104 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0xe6738f,
    Host: _0x4e560e
  };
  let _0x1f33bb = {
    url: _0x9b5df2,
    headers: _0x279104
  };
  if (_0x219392) {
    _0x1f33bb.body = _0x219392;
  }
  David_0x2a1031[_0xe19067] = _0x1f33bb;
  return _0x1f33bb;
}
function David_0x520cbc(_0x5a7618, _0x2b4014, _0x1d8733) {
  let _0x101245 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (David_0x4fab3d[_0x1d8733].ua && David_0x4fab3d[_0x1d8733].ua != "") {
    _0x101245 = David_0x4fab3d[_0x1d8733].ua;
  }
  let _0x57ee76 = David_0x5bcd35(_0x5a7618);
  const _0x2f2b63 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x101245,
    Authorization: David_0x4fab3d[_0x1d8733].auth,
    Host: _0x57ee76
  };
  let _0x47ee40 = {
    url: _0x5a7618,
    headers: _0x2f2b63
  };
  if (_0x2b4014) {
    _0x47ee40.body = _0x2b4014;
  }
  David_0x2a1031[_0x1d8733] = _0x47ee40;
  return _0x47ee40;
}
async function David_0x2ecca4(_0x9d3b2f, _0x272cea, _0x3821e2) {
  David_0x2c47a1 = null;
  return new Promise(_0x272dd2 => {
    David_0x4c906a[_0x9d3b2f](_0x272cea, async (_0x536da2, _0x4efdbc, _0xbceb46) => {
      try {
        if (_0x536da2) {
          David_0x4c906a.log(_0x3821e2 + ": " + _0x9d3b2f + "请求失败");
          David_0x4c906a.log(JSON.stringify(_0x536da2));
          David_0x4c906a.logErr(_0x536da2);
        } else {
          if (David_0x1211f9(_0xbceb46)) {
            David_0x2c47a1 = JSON.parse(_0xbceb46);
          } else {
            const _0x5821e5 = new URL(_0x272cea.url);
            David_0x4c906a.log(_0x5821e5.pathname + "发起" + _0x9d3b2f + "请求时，出现错误，请处理");
          }
        }
      } catch (_0x4760d4) {
        David_0x4c906a.logErr(_0x4760d4, _0x4efdbc);
      } finally {
        _0x272dd2(David_0x2c47a1);
      }
    });
  });
}
async function David_0x38b05d(_0x101c90, _0x15b1bd) {
  if (David_0x292632[_0x101c90] == 0) {
    await David_0x104f1f(_0x101c90, _0x15b1bd);
  } else {
    await David_0x506d85(_0x101c90, _0x15b1bd);
  }
}
function David_0x104f1f(_0x4f1935, _0x15b0d2) {
  return new Promise((_0x4e299d, _0x5e1835) => {
    function _0x1b2870(_0xf8484) {
      let _0x16a919 = _0xf8484.toString("utf8");
      David_0x24485b[_0x4f1935] = _0x16a919;
      David_0x580f1e[_0x4f1935].removeListener("message", _0x1b2870);
      _0x4e299d(_0x16a919);
    }
    David_0x580f1e[_0x4f1935].on("message", _0x1b2870);
    if (David_0x580f1e[_0x4f1935].readyState === 1) {
      const _0x1e1ba4 = {
        method: David_0x4e2b48,
        params: {}
      };
      _0x1e1ba4.params.content = _0x15b0d2;
      _0x1e1ba4.params.appName = David_0x4e2b48;
      _0x1e1ba4.params.uuid = David_0x4c62dc;
      David_0x580f1e[_0x4f1935].send(JSON.stringify(_0x1e1ba4), _0x490164 => {
        if (_0x490164) {
          _0x5e1835(_0x490164);
        }
      });
    } else {
      _0x4e299d(David_0x506d85(_0x4f1935, _0x15b0d2));
      David_0x580f1e[_0x4f1935].removeListener("message", _0x1b2870);
    }
  });
}
function David_0x506d85(_0x39039f, _0x16afea) {
  return new Promise((_0x106874, _0x4c0792) => {
    const _0x5d71ba = David_0x3a996f + "/sign/xyym";
    const _0x43dbb5 = {
      content: _0x16afea,
      appName: David_0x4e2b48,
      uuid: David_0x4c62dc
    };
    const _0x1e4d23 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x303520 = {
      url: _0x5d71ba,
      headers: _0x1e4d23,
      body: JSON.stringify(_0x43dbb5)
    };
    David_0x4c906a.post(_0x303520, async (_0x4a6791, _0x525d61, _0x10ef7a) => {
      const _0x4d15f2 = _0x10ef7a.replace(/\"/g, "").replace(/\\n/g, "\n");
      David_0x24485b[_0x39039f] = _0x4d15f2;
      _0x106874();
    });
  });
}
function David_0x2c7706(_0x3fffaa, _0x45ae3c, _0x4a3a2a) {
  const _0x5784f8 = David_0x40e8c5(_0x3fffaa);
  _0x45ae3c.forEach(_0x32b41d => {
    delete _0x5784f8[_0x32b41d];
  });
  Object.assign(_0x5784f8, _0x4a3a2a);
  const _0x272891 = Object.keys(_0x5784f8).sort();
  const _0x549db9 = _0x272891.map(_0x2a9135 => _0x2a9135 + "=" + _0x5784f8[_0x2a9135]).join("&");
  return _0x549db9;
}
function David_0x40e8c5(_0x5b8266) {
  _0x5b8266 = _0x5b8266.replace(/\"/g, "");
  var _0xdcbf;
  var _0x35e752 = {};
  var _0x40e186 = _0x5b8266.slice(_0x5b8266.indexOf("?") + 1).split("&");
  for (var _0x14648a = 0; _0x14648a < _0x40e186.length; _0x14648a++) {
    _0xdcbf = _0x40e186[_0x14648a].split("=");
    _0x35e752[_0xdcbf[0]] = _0xdcbf[1];
  }
  return _0x35e752;
}
function David_0x5bcd35(_0x4ab037) {
  let _0x51e204 = _0x4ab037.substr(_0x4ab037.indexOf("//") + 2);
  let _0x468913 = _0x51e204.substr(0, _0x51e204.indexOf("/"));
  let _0x58101b = "";
  let _0x51ceb3 = _0x468913.indexOf(":");
  if (_0x51ceb3 > 0) {
    _0x58101b = _0x468913.substr(0, _0x51ceb3);
  } else {
    _0x58101b = _0x468913;
  }
  return _0x58101b;
}
function David_0x4207d6(_0x4e88fb, _0x3fcc49) {
  var _0x4f6aee = new Date(_0x4e88fb);
  var _0x46b179 = new Date(_0x3fcc49);
  var _0xf4b88e = _0x46b179 - _0x4f6aee;
  var _0x5469a4 = Math.floor(_0xf4b88e / 1000);
  return _0x5469a4;
}
function David_0x5d3b2a(_0x53cac5, _0x3a5e5e) {
  if (_0x53cac5.length * 2 <= _0x3a5e5e) {
    return _0x53cac5;
  }
  var _0x58f70e = 0;
  var _0x42fe12 = "";
  for (var _0xc7f63 = 0; _0xc7f63 < _0x53cac5.length; _0xc7f63++) {
    _0x42fe12 = _0x42fe12 + _0x53cac5.charAt(_0xc7f63);
    if (_0x53cac5.charCodeAt(_0xc7f63) > 128) {
      _0x58f70e = _0x58f70e + 2;
      if (_0x58f70e >= _0x3a5e5e) {
        return _0x42fe12.substring(0, _0x42fe12.length - 1) + "...";
      }
    } else {
      _0x58f70e = _0x58f70e + 1;
      if (_0x58f70e >= _0x3a5e5e) {
        return _0x42fe12.substring(0, _0x42fe12.length - 2) + "...";
      }
    }
  }
  return _0x42fe12;
}
function David_0x3ba8b4() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function David_0x1211f9(_0x3f9dcb) {
  try {
    if (typeof JSON.parse(_0x3f9dcb) == "object") {
      return true;
    }
  } catch (_0x26e3ab) {
    console.log(_0x26e3ab);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function David_0xd48716(_0x5bc77b) {
  var _0x4bf7c8 = Object.keys(_0x5bc77b).map(function (_0x2cb226) {
    return encodeURIComponent(_0x2cb226) + "=" + encodeURIComponent(_0x5bc77b[_0x2cb226]);
  }).join("&");
  return _0x4bf7c8;
}
function David_0x4573bb(_0x2c8658) {
  var _0xb0dba8 = String.fromCharCode(_0x2c8658.charCodeAt(0) + _0x2c8658.length);
  for (var _0x175cb7 = 1; _0x175cb7 < _0x2c8658.length; _0x175cb7++) {
    _0xb0dba8 += String.fromCharCode(_0x2c8658.charCodeAt(_0x175cb7) + _0x2c8658.charCodeAt(_0x175cb7 - 1));
  }
  return escape(_0xb0dba8);
}
function David_0x244fc3(_0xc73044) {
  _0xc73044 = unescape(_0xc73044);
  var _0x253b07 = String.fromCharCode(_0xc73044.charCodeAt(0) - _0xc73044.length);
  for (var _0x5ece5e = 1; _0x5ece5e < _0xc73044.length; _0x5ece5e++) {
    _0x253b07 += String.fromCharCode(_0xc73044.charCodeAt(_0x5ece5e) - _0x253b07.charCodeAt(_0x5ece5e - 1));
  }
  return _0x253b07;
}
function David_0x4a8deb(_0x2ba81f, _0x2038ef) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x2ba81f + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x2038ef - _0x2ba81f + 1) + _0x2ba81f);
      break;
    default:
      return 0;
      break;
  }
}
function David_0x107526() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function David_0x25da9d() {
  function _0x20d8d7() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x20d8d7() + _0x20d8d7() + "-" + _0x20d8d7() + "-" + _0x20d8d7() + "-" + _0x20d8d7() + "-" + _0x20d8d7() + _0x20d8d7() + _0x20d8d7();
}
function David_0x54c2b8(_0x3a70fd) {
  if (_0x3a70fd.length == 11) {
    let _0x1f049a = _0x3a70fd.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x1f049a;
  } else {
    return _0x3a70fd;
  }
}
function David_0x4c5433(_0x1c74de) {
  return new Promise((_0x2609db, _0xbfc3c6) => {
    const _0x45b8ba = "https://v1.hitokoto.cn/?c=e";
    const _0x2e8478 = {
      accept: "application/json"
    };
    const _0x49c3d = {
      url: _0x45b8ba,
      headers: _0x2e8478
    };
    David_0x4c906a.get(_0x49c3d, async (_0x4fdb2f, _0x4f0327, _0x3c8198) => {
      let _0x1eebcb = JSON.parse(_0x3c8198);
      let _0x4db6ea = _0x1eebcb.hitokoto;
      contents[_0x1c74de] = _0x4db6ea + " " + _0x4db6ea;
      _0x2609db();
    });
  });
}
function David_0x321321() {
  return new Promise((_0x57ec8d, _0xe46214) => {
    const _0x3f0925 = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
    const _0x3de658 = {
      url: _0x3f0925
    };
    David_0x4c906a.get(_0x3de658, async (_0xef0e32, _0x6309c1, _0x68492d) => {
      _0x57ec8d(_0x68492d);
    });
  });
}
function David_0x35a8e9() {
  return Math.round(new Date().getTime()).toString();
}
function David_0xf0643d() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function David_0x568501() {
  if (David_0x2c1334 == 1) {
    David_0x4c906a.msg(David_0x4c906a.name, "", David_0x4c906a.message);
  }
}
async function David_0x2be519(_0x293057) {
  if (David_0x285df0 == 9 || David_0x285df0 == 12 || David_0x285df0 == 18) {
    if (David_0x2c1334 == 1) {
      if (David_0x4c906a.isNode()) {
        await David_0x5e53d1.sendNotify(David_0x4c906a.name, _0x293057);
      } else {
        David_0x4c906a.msg(David_0x4c906a.name, "", _0x293057);
      }
    } else {
      David_0x4c906a.log(_0x293057);
    }
  }
}
async function David_0x48b63e(_0x280253, _0x5deb87, _0x437dde) {
  return new Promise((_0x5898a5, _0x1aded6) => {
    const _0x30c681 = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x564233 = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x5deb87,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0x437dde],
      verifyPay: false
    };
    const _0x2594cd = {
      "Content-Type": "application/json"
    };
    const _0x450d20 = {
      url: _0x30c681,
      headers: _0x2594cd,
      body: JSON.stringify(_0x564233)
    };
    David_0x4c906a.post(_0x450d20, async (_0x4e3091, _0x44be55, _0x1c3468) => {
      _0x5898a5();
    });
  });
}
function David_0x5efdd2(_0xd32430, _0x2a4c2b) {
  _0x2a4c2b = _0x2a4c2b || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x20d12c = "";
  for (let _0x3702b7 = 0; _0x3702b7 < _0xd32430; _0x3702b7++) {
    let _0x44cec7 = Math.floor(Math.random() * _0x2a4c2b.length);
    _0x20d12c += _0x2a4c2b.substring(_0x44cec7, _0x44cec7 + 1);
  }
  return _0x20d12c;
}
function David_0x186b66(_0x9ee9e4) {
  function _0x83505b(_0x5614af, _0x1c6d79) {
    return _0x5614af << _0x1c6d79 | _0x5614af >>> 32 - _0x1c6d79;
  }
  function _0x25b785(_0xa7e821, _0x27e7f2) {
    var _0x3b27cc, _0x3b2f82, _0xacab3a, _0x1fc9cd, _0x50366c;
    _0xacab3a = 2147483648 & _0xa7e821;
    _0x1fc9cd = 2147483648 & _0x27e7f2;
    _0x3b27cc = 1073741824 & _0xa7e821;
    _0x3b2f82 = 1073741824 & _0x27e7f2;
    _0x50366c = (1073741823 & _0xa7e821) + (1073741823 & _0x27e7f2);
    return _0x3b27cc & _0x3b2f82 ? 2147483648 ^ _0x50366c ^ _0xacab3a ^ _0x1fc9cd : _0x3b27cc | _0x3b2f82 ? 1073741824 & _0x50366c ? 3221225472 ^ _0x50366c ^ _0xacab3a ^ _0x1fc9cd : 1073741824 ^ _0x50366c ^ _0xacab3a ^ _0x1fc9cd : _0x50366c ^ _0xacab3a ^ _0x1fc9cd;
  }
  function _0x152357(_0x55fe84, _0x2f5667, _0x194e9f) {
    return _0x55fe84 & _0x2f5667 | ~_0x55fe84 & _0x194e9f;
  }
  function _0x1150d5(_0x2c3640, _0x1c4ebe, _0x5dbb7e) {
    return _0x2c3640 & _0x5dbb7e | _0x1c4ebe & ~_0x5dbb7e;
  }
  function _0x4a1ac3(_0x2ff1ac, _0x3c971f, _0x264eab) {
    return _0x2ff1ac ^ _0x3c971f ^ _0x264eab;
  }
  function _0x191d79(_0x32f2c3, _0x52cf53, _0x26d0b3) {
    return _0x52cf53 ^ (_0x32f2c3 | ~_0x26d0b3);
  }
  function _0x30c180(_0x1c8b69, _0x354665, _0x272bf5, _0xf54c5a, _0x3d38eb, _0x3c0826, _0x370a45) {
    _0x1c8b69 = _0x25b785(_0x1c8b69, _0x25b785(_0x25b785(_0x152357(_0x354665, _0x272bf5, _0xf54c5a), _0x3d38eb), _0x370a45));
    return _0x25b785(_0x83505b(_0x1c8b69, _0x3c0826), _0x354665);
  }
  function _0x275305(_0xd13475, _0x49d15f, _0x22e215, _0x5f3297, _0x3599c8, _0x30e53a, _0x1ee5a3) {
    _0xd13475 = _0x25b785(_0xd13475, _0x25b785(_0x25b785(_0x1150d5(_0x49d15f, _0x22e215, _0x5f3297), _0x3599c8), _0x1ee5a3));
    return _0x25b785(_0x83505b(_0xd13475, _0x30e53a), _0x49d15f);
  }
  function _0x84bfc8(_0x21368a, _0x481fae, _0x160cb0, _0x5f2230, _0xa8d673, _0x4431bd, _0x307832) {
    _0x21368a = _0x25b785(_0x21368a, _0x25b785(_0x25b785(_0x4a1ac3(_0x481fae, _0x160cb0, _0x5f2230), _0xa8d673), _0x307832));
    return _0x25b785(_0x83505b(_0x21368a, _0x4431bd), _0x481fae);
  }
  function _0x18aac2(_0x1f3b92, _0x53c7d1, _0x1c8474, _0x35912f, _0x31bbfd, _0xab7361, _0x5778d7) {
    _0x1f3b92 = _0x25b785(_0x1f3b92, _0x25b785(_0x25b785(_0x191d79(_0x53c7d1, _0x1c8474, _0x35912f), _0x31bbfd), _0x5778d7));
    return _0x25b785(_0x83505b(_0x1f3b92, _0xab7361), _0x53c7d1);
  }
  function _0x365c63(_0x453505) {
    for (var _0x4e313c, _0x1fee5f = _0x453505.length, _0x2f8f70 = _0x1fee5f + 8, _0x474a3c = (_0x2f8f70 - _0x2f8f70 % 64) / 64, _0x85a48f = 16 * (_0x474a3c + 1), _0x430a4a = new Array(_0x85a48f - 1), _0xc92e27 = 0, _0x21c87c = 0; _0x1fee5f > _0x21c87c;) {
      _0x4e313c = (_0x21c87c - _0x21c87c % 4) / 4;
      _0xc92e27 = _0x21c87c % 4 * 8;
      _0x430a4a[_0x4e313c] = _0x430a4a[_0x4e313c] | _0x453505.charCodeAt(_0x21c87c) << _0xc92e27;
      _0x21c87c++;
    }
    _0x4e313c = (_0x21c87c - _0x21c87c % 4) / 4;
    _0xc92e27 = _0x21c87c % 4 * 8;
    _0x430a4a[_0x4e313c] = _0x430a4a[_0x4e313c] | 128 << _0xc92e27;
    _0x430a4a[_0x85a48f - 2] = _0x1fee5f << 3;
    _0x430a4a[_0x85a48f - 1] = _0x1fee5f >>> 29;
    return _0x430a4a;
  }
  function _0x19d07d(_0x2d6595) {
    var _0x1a5dbb,
      _0x44c33e,
      _0xa34dee = "",
      _0x54a42c = "";
    for (_0x44c33e = 0; 3 >= _0x44c33e; _0x44c33e++) {
      _0x1a5dbb = _0x2d6595 >>> 8 * _0x44c33e & 255;
      _0x54a42c = "0" + _0x1a5dbb.toString(16);
      _0xa34dee += _0x54a42c.substr(_0x54a42c.length - 2, 2);
    }
    return _0xa34dee;
  }
  function _0x556916(_0x178912) {
    _0x178912 = _0x178912.replace(/\r\n/g, "\n");
    for (var _0x9c5b7 = "", _0x58b78f = 0; _0x58b78f < _0x178912.length; _0x58b78f++) {
      var _0x1e6ed5 = _0x178912.charCodeAt(_0x58b78f);
      128 > _0x1e6ed5 ? _0x9c5b7 += String.fromCharCode(_0x1e6ed5) : _0x1e6ed5 > 127 && 2048 > _0x1e6ed5 ? (_0x9c5b7 += String.fromCharCode(_0x1e6ed5 >> 6 | 192), _0x9c5b7 += String.fromCharCode(63 & _0x1e6ed5 | 128)) : (_0x9c5b7 += String.fromCharCode(_0x1e6ed5 >> 12 | 224), _0x9c5b7 += String.fromCharCode(_0x1e6ed5 >> 6 & 63 | 128), _0x9c5b7 += String.fromCharCode(63 & _0x1e6ed5 | 128));
    }
    return _0x9c5b7;
  }
  var _0x13511d,
    _0x52e9de,
    _0x8624e0,
    _0xe19020,
    _0x2afb78,
    _0x51a2da,
    _0x1e808c,
    _0x5c9a5e,
    _0x2d08f5,
    _0x19bfb3 = [],
    _0x20b7a1 = 7,
    _0x5b72b3 = 12,
    _0x5b1612 = 17,
    _0x4c21a8 = 22,
    _0x84252c = 5,
    _0xb9fc52 = 9,
    _0xb1f4a1 = 14,
    _0x21d7f3 = 20,
    _0x1b8ba6 = 4,
    _0x5c8cdf = 11,
    _0x63eb1 = 16,
    _0x4172ff = 23,
    _0x1dbf4e = 6,
    _0x3d79dc = 10,
    _0x1a5896 = 15,
    _0x4d377c = 21;
  for (_0x9ee9e4 = _0x556916(_0x9ee9e4), _0x19bfb3 = _0x365c63(_0x9ee9e4), _0x51a2da = 1732584193, _0x1e808c = 4023233417, _0x5c9a5e = 2562383102, _0x2d08f5 = 271733878, _0x13511d = 0; _0x13511d < _0x19bfb3.length; _0x13511d += 16) {
    _0x52e9de = _0x51a2da;
    _0x8624e0 = _0x1e808c;
    _0xe19020 = _0x5c9a5e;
    _0x2afb78 = _0x2d08f5;
    _0x51a2da = _0x30c180(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 0], _0x20b7a1, 3614090360);
    _0x2d08f5 = _0x30c180(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 1], _0x5b72b3, 3905402710);
    _0x5c9a5e = _0x30c180(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 2], _0x5b1612, 606105819);
    _0x1e808c = _0x30c180(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 3], _0x4c21a8, 3250441966);
    _0x51a2da = _0x30c180(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 4], _0x20b7a1, 4118548399);
    _0x2d08f5 = _0x30c180(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 5], _0x5b72b3, 1200080426);
    _0x5c9a5e = _0x30c180(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 6], _0x5b1612, 2821735955);
    _0x1e808c = _0x30c180(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 7], _0x4c21a8, 4249261313);
    _0x51a2da = _0x30c180(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 8], _0x20b7a1, 1770035416);
    _0x2d08f5 = _0x30c180(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 9], _0x5b72b3, 2336552879);
    _0x5c9a5e = _0x30c180(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 10], _0x5b1612, 4294925233);
    _0x1e808c = _0x30c180(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 11], _0x4c21a8, 2304563134);
    _0x51a2da = _0x30c180(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 12], _0x20b7a1, 1804603682);
    _0x2d08f5 = _0x30c180(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 13], _0x5b72b3, 4254626195);
    _0x5c9a5e = _0x30c180(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 14], _0x5b1612, 2792965006);
    _0x1e808c = _0x30c180(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 15], _0x4c21a8, 1236535329);
    _0x51a2da = _0x275305(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 1], _0x84252c, 4129170786);
    _0x2d08f5 = _0x275305(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 6], _0xb9fc52, 3225465664);
    _0x5c9a5e = _0x275305(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 11], _0xb1f4a1, 643717713);
    _0x1e808c = _0x275305(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 0], _0x21d7f3, 3921069994);
    _0x51a2da = _0x275305(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 5], _0x84252c, 3593408605);
    _0x2d08f5 = _0x275305(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 10], _0xb9fc52, 38016083);
    _0x5c9a5e = _0x275305(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 15], _0xb1f4a1, 3634488961);
    _0x1e808c = _0x275305(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 4], _0x21d7f3, 3889429448);
    _0x51a2da = _0x275305(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 9], _0x84252c, 568446438);
    _0x2d08f5 = _0x275305(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 14], _0xb9fc52, 3275163606);
    _0x5c9a5e = _0x275305(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 3], _0xb1f4a1, 4107603335);
    _0x1e808c = _0x275305(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 8], _0x21d7f3, 1163531501);
    _0x51a2da = _0x275305(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 13], _0x84252c, 2850285829);
    _0x2d08f5 = _0x275305(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 2], _0xb9fc52, 4243563512);
    _0x5c9a5e = _0x275305(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 7], _0xb1f4a1, 1735328473);
    _0x1e808c = _0x275305(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 12], _0x21d7f3, 2368359562);
    _0x51a2da = _0x84bfc8(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 5], _0x1b8ba6, 4294588738);
    _0x2d08f5 = _0x84bfc8(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 8], _0x5c8cdf, 2272392833);
    _0x5c9a5e = _0x84bfc8(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 11], _0x63eb1, 1839030562);
    _0x1e808c = _0x84bfc8(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 14], _0x4172ff, 4259657740);
    _0x51a2da = _0x84bfc8(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 1], _0x1b8ba6, 2763975236);
    _0x2d08f5 = _0x84bfc8(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 4], _0x5c8cdf, 1272893353);
    _0x5c9a5e = _0x84bfc8(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 7], _0x63eb1, 4139469664);
    _0x1e808c = _0x84bfc8(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 10], _0x4172ff, 3200236656);
    _0x51a2da = _0x84bfc8(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 13], _0x1b8ba6, 681279174);
    _0x2d08f5 = _0x84bfc8(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 0], _0x5c8cdf, 3936430074);
    _0x5c9a5e = _0x84bfc8(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 3], _0x63eb1, 3572445317);
    _0x1e808c = _0x84bfc8(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 6], _0x4172ff, 76029189);
    _0x51a2da = _0x84bfc8(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 9], _0x1b8ba6, 3654602809);
    _0x2d08f5 = _0x84bfc8(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 12], _0x5c8cdf, 3873151461);
    _0x5c9a5e = _0x84bfc8(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 15], _0x63eb1, 530742520);
    _0x1e808c = _0x84bfc8(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 2], _0x4172ff, 3299628645);
    _0x51a2da = _0x18aac2(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 0], _0x1dbf4e, 4096336452);
    _0x2d08f5 = _0x18aac2(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 7], _0x3d79dc, 1126891415);
    _0x5c9a5e = _0x18aac2(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 14], _0x1a5896, 2878612391);
    _0x1e808c = _0x18aac2(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 5], _0x4d377c, 4237533241);
    _0x51a2da = _0x18aac2(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 12], _0x1dbf4e, 1700485571);
    _0x2d08f5 = _0x18aac2(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 3], _0x3d79dc, 2399980690);
    _0x5c9a5e = _0x18aac2(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 10], _0x1a5896, 4293915773);
    _0x1e808c = _0x18aac2(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 1], _0x4d377c, 2240044497);
    _0x51a2da = _0x18aac2(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 8], _0x1dbf4e, 1873313359);
    _0x2d08f5 = _0x18aac2(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 15], _0x3d79dc, 4264355552);
    _0x5c9a5e = _0x18aac2(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 6], _0x1a5896, 2734768916);
    _0x1e808c = _0x18aac2(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 13], _0x4d377c, 1309151649);
    _0x51a2da = _0x18aac2(_0x51a2da, _0x1e808c, _0x5c9a5e, _0x2d08f5, _0x19bfb3[_0x13511d + 4], _0x1dbf4e, 4149444226);
    _0x2d08f5 = _0x18aac2(_0x2d08f5, _0x51a2da, _0x1e808c, _0x5c9a5e, _0x19bfb3[_0x13511d + 11], _0x3d79dc, 3174756917);
    _0x5c9a5e = _0x18aac2(_0x5c9a5e, _0x2d08f5, _0x51a2da, _0x1e808c, _0x19bfb3[_0x13511d + 2], _0x1a5896, 718787259);
    _0x1e808c = _0x18aac2(_0x1e808c, _0x5c9a5e, _0x2d08f5, _0x51a2da, _0x19bfb3[_0x13511d + 9], _0x4d377c, 3951481745);
    _0x51a2da = _0x25b785(_0x51a2da, _0x52e9de);
    _0x1e808c = _0x25b785(_0x1e808c, _0x8624e0);
    _0x5c9a5e = _0x25b785(_0x5c9a5e, _0xe19020);
    _0x2d08f5 = _0x25b785(_0x2d08f5, _0x2afb78);
  }
  var _0x366081 = _0x19d07d(_0x51a2da) + _0x19d07d(_0x1e808c) + _0x19d07d(_0x5c9a5e) + _0x19d07d(_0x2d08f5);
  return _0x366081.toLowerCase();
}
function David_0x9e3f3c(_0x3c5e89) {
  var _0x5d2b0a = 8;
  var _0x241d3a = 0;
  function _0x1a1f09(_0x1e8d44, _0x3bcfe9) {
    var _0x1444d2 = (_0x1e8d44 & 65535) + (_0x3bcfe9 & 65535);
    var _0x28dc32 = (_0x1e8d44 >> 16) + (_0x3bcfe9 >> 16) + (_0x1444d2 >> 16);
    return _0x28dc32 << 16 | _0x1444d2 & 65535;
  }
  function _0x19fbd4(_0x2fe09f, _0x3a4c3f) {
    return _0x2fe09f >>> _0x3a4c3f | _0x2fe09f << 32 - _0x3a4c3f;
  }
  function _0x59d2de(_0x430748, _0x47eb53) {
    return _0x430748 >>> _0x47eb53;
  }
  function _0x3e23ff(_0x3ff8c9, _0x1037ee, _0xd3983e) {
    return _0x3ff8c9 & _0x1037ee ^ ~_0x3ff8c9 & _0xd3983e;
  }
  function _0x4bb97f(_0x252f70, _0x2a11bb, _0x5a7fb7) {
    return _0x252f70 & _0x2a11bb ^ _0x252f70 & _0x5a7fb7 ^ _0x2a11bb & _0x5a7fb7;
  }
  function _0x5c2879(_0x5ac5c8) {
    return _0x19fbd4(_0x5ac5c8, 2) ^ _0x19fbd4(_0x5ac5c8, 13) ^ _0x19fbd4(_0x5ac5c8, 22);
  }
  function _0x3fd1ca(_0x316633) {
    return _0x19fbd4(_0x316633, 6) ^ _0x19fbd4(_0x316633, 11) ^ _0x19fbd4(_0x316633, 25);
  }
  function _0x36a493(_0xa3b4ab) {
    return _0x19fbd4(_0xa3b4ab, 7) ^ _0x19fbd4(_0xa3b4ab, 18) ^ _0x59d2de(_0xa3b4ab, 3);
  }
  function _0x4ffe6e(_0x2b5737) {
    return _0x19fbd4(_0x2b5737, 17) ^ _0x19fbd4(_0x2b5737, 19) ^ _0x59d2de(_0x2b5737, 10);
  }
  function _0x2b5b16(_0x142ef7, _0xa8083e) {
    var _0x45ef2a = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x5e9d61 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x9f0ce6 = new Array(64);
    var _0x5b6f04, _0x1c4e02, _0x3a6ed0, _0x196e0b, _0x233338, _0x215fc0, _0x272dbd, _0x420f6c;
    var _0xa41db6, _0x14c522;
    _0x142ef7[_0xa8083e >> 5] |= 128 << 24 - _0xa8083e % 32;
    _0x142ef7[(_0xa8083e + 64 >> 9 << 4) + 15] = _0xa8083e;
    for (var _0x16f56d = 0; _0x16f56d < _0x142ef7.length; _0x16f56d += 16) {
      _0x5b6f04 = _0x5e9d61[0];
      _0x1c4e02 = _0x5e9d61[1];
      _0x3a6ed0 = _0x5e9d61[2];
      _0x196e0b = _0x5e9d61[3];
      _0x233338 = _0x5e9d61[4];
      _0x215fc0 = _0x5e9d61[5];
      _0x272dbd = _0x5e9d61[6];
      _0x420f6c = _0x5e9d61[7];
      for (var _0x4ad176 = 0; _0x4ad176 < 64; _0x4ad176++) {
        if (_0x4ad176 < 16) {
          _0x9f0ce6[_0x4ad176] = _0x142ef7[_0x4ad176 + _0x16f56d];
        } else {
          _0x9f0ce6[_0x4ad176] = _0x1a1f09(_0x1a1f09(_0x1a1f09(_0x4ffe6e(_0x9f0ce6[_0x4ad176 - 2]), _0x9f0ce6[_0x4ad176 - 7]), _0x36a493(_0x9f0ce6[_0x4ad176 - 15])), _0x9f0ce6[_0x4ad176 - 16]);
        }
        _0xa41db6 = _0x1a1f09(_0x1a1f09(_0x1a1f09(_0x1a1f09(_0x420f6c, _0x3fd1ca(_0x233338)), _0x3e23ff(_0x233338, _0x215fc0, _0x272dbd)), _0x45ef2a[_0x4ad176]), _0x9f0ce6[_0x4ad176]);
        _0x14c522 = _0x1a1f09(_0x5c2879(_0x5b6f04), _0x4bb97f(_0x5b6f04, _0x1c4e02, _0x3a6ed0));
        _0x420f6c = _0x272dbd;
        _0x272dbd = _0x215fc0;
        _0x215fc0 = _0x233338;
        _0x233338 = _0x1a1f09(_0x196e0b, _0xa41db6);
        _0x196e0b = _0x3a6ed0;
        _0x3a6ed0 = _0x1c4e02;
        _0x1c4e02 = _0x5b6f04;
        _0x5b6f04 = _0x1a1f09(_0xa41db6, _0x14c522);
      }
      _0x5e9d61[0] = _0x1a1f09(_0x5b6f04, _0x5e9d61[0]);
      _0x5e9d61[1] = _0x1a1f09(_0x1c4e02, _0x5e9d61[1]);
      _0x5e9d61[2] = _0x1a1f09(_0x3a6ed0, _0x5e9d61[2]);
      _0x5e9d61[3] = _0x1a1f09(_0x196e0b, _0x5e9d61[3]);
      _0x5e9d61[4] = _0x1a1f09(_0x233338, _0x5e9d61[4]);
      _0x5e9d61[5] = _0x1a1f09(_0x215fc0, _0x5e9d61[5]);
      _0x5e9d61[6] = _0x1a1f09(_0x272dbd, _0x5e9d61[6]);
      _0x5e9d61[7] = _0x1a1f09(_0x420f6c, _0x5e9d61[7]);
    }
    return _0x5e9d61;
  }
  function _0x9fd780(_0x426b42) {
    var _0x556ab0 = Array();
    var _0x20037e = (1 << _0x5d2b0a) - 1;
    for (var _0x49bf1d = 0; _0x49bf1d < _0x426b42.length * _0x5d2b0a; _0x49bf1d += _0x5d2b0a) {
      _0x556ab0[_0x49bf1d >> 5] |= (_0x426b42.charCodeAt(_0x49bf1d / _0x5d2b0a) & _0x20037e) << 24 - _0x49bf1d % 32;
    }
    return _0x556ab0;
  }
  function _0x5350da(_0x2f3686) {
    _0x2f3686 = _0x2f3686.replace(/\r\n/g, "\n");
    var _0x16b4e6 = "";
    for (var _0x40ad99 = 0; _0x40ad99 < _0x2f3686.length; _0x40ad99++) {
      var _0x3c662a = _0x2f3686.charCodeAt(_0x40ad99);
      if (_0x3c662a < 128) {
        _0x16b4e6 += String.fromCharCode(_0x3c662a);
      } else {
        if (_0x3c662a > 127 && _0x3c662a < 2048) {
          _0x16b4e6 += String.fromCharCode(_0x3c662a >> 6 | 192);
          _0x16b4e6 += String.fromCharCode(_0x3c662a & 63 | 128);
        } else {
          _0x16b4e6 += String.fromCharCode(_0x3c662a >> 12 | 224);
          _0x16b4e6 += String.fromCharCode(_0x3c662a >> 6 & 63 | 128);
          _0x16b4e6 += String.fromCharCode(_0x3c662a & 63 | 128);
        }
      }
    }
    return _0x16b4e6;
  }
  function _0x2b26a6(_0x5060a9) {
    var _0x2c9825 = _0x241d3a ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x5ca917 = "";
    for (var _0x4a8fc9 = 0; _0x4a8fc9 < _0x5060a9.length * 4; _0x4a8fc9++) {
      _0x5ca917 += _0x2c9825.charAt(_0x5060a9[_0x4a8fc9 >> 2] >> (3 - _0x4a8fc9 % 4) * 8 + 4 & 15) + _0x2c9825.charAt(_0x5060a9[_0x4a8fc9 >> 2] >> (3 - _0x4a8fc9 % 4) * 8 & 15);
    }
    return _0x5ca917;
  }
  _0x3c5e89 = _0x5350da(_0x3c5e89);
  return _0x2b26a6(_0x2b5b16(_0x9fd780(_0x3c5e89), _0x3c5e89.length * _0x5d2b0a));
}
function David_0x33c39a(_0x570037) {
  function _0x1cabc0(_0x5eb699, _0x1b091b) {
    var _0x4c0004 = _0x5eb699 << _0x1b091b | _0x5eb699 >>> 32 - _0x1b091b;
    return _0x4c0004;
  }
  function _0x957315(_0xb70821) {
    var _0x10acfa = "";
    var _0x19b50e;
    var _0x173e4f;
    var _0x22f25c;
    for (_0x19b50e = 0; _0x19b50e <= 6; _0x19b50e += 2) {
      _0x173e4f = _0xb70821 >>> _0x19b50e * 4 + 4 & 15;
      _0x22f25c = _0xb70821 >>> _0x19b50e * 4 & 15;
      _0x10acfa += _0x173e4f.toString(16) + _0x22f25c.toString(16);
    }
    return _0x10acfa;
  }
  function _0x26edef(_0x1bcb5e) {
    var _0x562774 = "";
    var _0x3cee66;
    var _0x20223a;
    for (_0x3cee66 = 7; _0x3cee66 >= 0; _0x3cee66--) {
      _0x20223a = _0x1bcb5e >>> _0x3cee66 * 4 & 15;
      _0x562774 += _0x20223a.toString(16);
    }
    return _0x562774;
  }
  function _0x39b8fa(_0x3662cd) {
    _0x3662cd = _0x3662cd.replace(/\r\n/g, "\n");
    var _0x56aad0 = "";
    for (var _0x3f1cbc = 0; _0x3f1cbc < _0x3662cd.length; _0x3f1cbc++) {
      var _0x5a75ca = _0x3662cd.charCodeAt(_0x3f1cbc);
      if (_0x5a75ca < 128) {
        _0x56aad0 += String.fromCharCode(_0x5a75ca);
      } else {
        if (_0x5a75ca > 127 && _0x5a75ca < 2048) {
          _0x56aad0 += String.fromCharCode(_0x5a75ca >> 6 | 192);
          _0x56aad0 += String.fromCharCode(_0x5a75ca & 63 | 128);
        } else {
          _0x56aad0 += String.fromCharCode(_0x5a75ca >> 12 | 224);
          _0x56aad0 += String.fromCharCode(_0x5a75ca >> 6 & 63 | 128);
          _0x56aad0 += String.fromCharCode(_0x5a75ca & 63 | 128);
        }
      }
    }
    return _0x56aad0;
  }
  var _0x51c687;
  var _0x5dd2b8, _0x15d27b;
  var _0x28f445 = new Array(80);
  var _0x5bc3e1 = 1732584193;
  var _0x4659e1 = 4023233417;
  var _0x1e35ea = 2562383102;
  var _0x24fb81 = 271733878;
  var _0x214848 = 3285377520;
  var _0x3b89ef, _0x562354, _0x111b4c, _0xe0bb35, _0x1a1d87;
  _0x570037 = _0x39b8fa(_0x570037);
  var _0x1466a2 = _0x570037.length;
  var _0x4223fb = new Array();
  for (_0x5dd2b8 = 0; _0x5dd2b8 < _0x1466a2 - 3; _0x5dd2b8 += 4) {
    _0x15d27b = _0x570037.charCodeAt(_0x5dd2b8) << 24 | _0x570037.charCodeAt(_0x5dd2b8 + 1 < 10 ? "0" + (_0x5dd2b8 + 1) : _0x5dd2b8 + 1) << 16 | _0x570037.charCodeAt(_0x5dd2b8 + 2) << 8 | _0x570037.charCodeAt(_0x5dd2b8 + 3);
    _0x4223fb.push(_0x15d27b);
  }
  switch (_0x1466a2 % 4) {
    case 0:
      _0x5dd2b8 = 2147483648;
      break;
    case 1:
      _0x5dd2b8 = _0x570037.charCodeAt(_0x1466a2 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x5dd2b8 = _0x570037.charCodeAt(_0x1466a2 - 2) << 24 | _0x570037.charCodeAt(_0x1466a2 - 1) << 16 | 32768;
      break;
    case 3:
      _0x5dd2b8 = _0x570037.charCodeAt(_0x1466a2 - 3) << 24 | _0x570037.charCodeAt(_0x1466a2 - 2) << 16 | _0x570037.charCodeAt(_0x1466a2 - 1) << 8 | 128;
      break;
  }
  _0x4223fb.push(_0x5dd2b8);
  while (_0x4223fb.length % 16 != 14) {
    _0x4223fb.push(0);
  }
  _0x4223fb.push(_0x1466a2 >>> 29);
  _0x4223fb.push(_0x1466a2 << 3 & 4294967295);
  for (_0x51c687 = 0; _0x51c687 < _0x4223fb.length; _0x51c687 += 16) {
    for (_0x5dd2b8 = 0; _0x5dd2b8 < 16; _0x5dd2b8++) {
      _0x28f445[_0x5dd2b8] = _0x4223fb[_0x51c687 + _0x5dd2b8];
    }
    for (_0x5dd2b8 = 16; _0x5dd2b8 <= 79; _0x5dd2b8++) {
      _0x28f445[_0x5dd2b8] = _0x1cabc0(_0x28f445[_0x5dd2b8 - 3] ^ _0x28f445[_0x5dd2b8 - 8] ^ _0x28f445[_0x5dd2b8 - 14] ^ _0x28f445[_0x5dd2b8 - 16], 1);
    }
    _0x3b89ef = _0x5bc3e1;
    _0x562354 = _0x4659e1;
    _0x111b4c = _0x1e35ea;
    _0xe0bb35 = _0x24fb81;
    _0x1a1d87 = _0x214848;
    for (_0x5dd2b8 = 0; _0x5dd2b8 <= 19; _0x5dd2b8++) {
      _0xc2809 = _0x1cabc0(_0x3b89ef, 5) + (_0x562354 & _0x111b4c | ~_0x562354 & _0xe0bb35) + _0x1a1d87 + _0x28f445[_0x5dd2b8] + 1518500249 & 4294967295;
      _0x1a1d87 = _0xe0bb35;
      _0xe0bb35 = _0x111b4c;
      _0x111b4c = _0x1cabc0(_0x562354, 30);
      _0x562354 = _0x3b89ef;
      _0x3b89ef = _0xc2809;
    }
    for (_0x5dd2b8 = 20; _0x5dd2b8 <= 39; _0x5dd2b8++) {
      _0xc2809 = _0x1cabc0(_0x3b89ef, 5) + (_0x562354 ^ _0x111b4c ^ _0xe0bb35) + _0x1a1d87 + _0x28f445[_0x5dd2b8] + 1859775393 & 4294967295;
      _0x1a1d87 = _0xe0bb35;
      _0xe0bb35 = _0x111b4c;
      _0x111b4c = _0x1cabc0(_0x562354, 30);
      _0x562354 = _0x3b89ef;
      _0x3b89ef = _0xc2809;
    }
    for (_0x5dd2b8 = 40; _0x5dd2b8 <= 59; _0x5dd2b8++) {
      _0xc2809 = _0x1cabc0(_0x3b89ef, 5) + (_0x562354 & _0x111b4c | _0x562354 & _0xe0bb35 | _0x111b4c & _0xe0bb35) + _0x1a1d87 + _0x28f445[_0x5dd2b8] + 2400959708 & 4294967295;
      _0x1a1d87 = _0xe0bb35;
      _0xe0bb35 = _0x111b4c;
      _0x111b4c = _0x1cabc0(_0x562354, 30);
      _0x562354 = _0x3b89ef;
      _0x3b89ef = _0xc2809;
    }
    for (_0x5dd2b8 = 60; _0x5dd2b8 <= 79; _0x5dd2b8++) {
      _0xc2809 = _0x1cabc0(_0x3b89ef, 5) + (_0x562354 ^ _0x111b4c ^ _0xe0bb35) + _0x1a1d87 + _0x28f445[_0x5dd2b8] + 3395469782 & 4294967295;
      _0x1a1d87 = _0xe0bb35;
      _0xe0bb35 = _0x111b4c;
      _0x111b4c = _0x1cabc0(_0x562354, 30);
      _0x562354 = _0x3b89ef;
      _0x3b89ef = _0xc2809;
    }
    _0x5bc3e1 = _0x5bc3e1 + _0x3b89ef & 4294967295;
    _0x4659e1 = _0x4659e1 + _0x562354 & 4294967295;
    _0x1e35ea = _0x1e35ea + _0x111b4c & 4294967295;
    _0x24fb81 = _0x24fb81 + _0xe0bb35 & 4294967295;
    _0x214848 = _0x214848 + _0x1a1d87 & 4294967295;
  }
  var _0xc2809 = _0x26edef(_0x5bc3e1) + _0x26edef(_0x4659e1) + _0x26edef(_0x1e35ea) + _0x26edef(_0x24fb81) + _0x26edef(_0x214848);
  return _0xc2809.toLowerCase();
}
function David_0x3c1a4a() {
  var _0x558f6b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x44971c) {
    var _0x2d5eb0 = "";
    var _0x1737c6, _0x38c128, _0xafffa1, _0x3cd60, _0x3200d1, _0x4fea46, _0x37c131;
    var _0x21898e = 0;
    _0x44971c = utf8Encode(_0x44971c);
    while (_0x21898e < _0x44971c.length) {
      _0x1737c6 = _0x44971c.charCodeAt(_0x21898e++);
      _0x38c128 = _0x44971c.charCodeAt(_0x21898e++);
      _0xafffa1 = _0x44971c.charCodeAt(_0x21898e++);
      _0x3cd60 = _0x1737c6 >> 2;
      _0x3200d1 = (_0x1737c6 & 3) << 4 | _0x38c128 >> 4;
      _0x4fea46 = (_0x38c128 & 15) << 2 | _0xafffa1 >> 6;
      _0x37c131 = _0xafffa1 & 63;
      if (isNaN(_0x38c128)) {
        _0x4fea46 = _0x37c131 = 64;
      } else {
        if (isNaN(_0xafffa1)) {
          _0x37c131 = 64;
        }
      }
      _0x2d5eb0 = _0x2d5eb0 + _0x558f6b.charAt(_0x3cd60) + _0x558f6b.charAt(_0x3200d1) + _0x558f6b.charAt(_0x4fea46) + _0x558f6b.charAt(_0x37c131);
    }
    return _0x2d5eb0;
  };
  this.decode = function (_0x2e1026) {
    var _0x39f281 = "";
    var _0xcaf32b, _0x9871cf, _0x3d111a;
    var _0x1c9eca, _0x244281, _0x138fbf, _0x3730b4;
    var _0x533b54 = 0;
    _0x2e1026 = _0x2e1026.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x533b54 < _0x2e1026.length) {
      _0x1c9eca = _0x558f6b.indexOf(_0x2e1026.charAt(_0x533b54++));
      _0x244281 = _0x558f6b.indexOf(_0x2e1026.charAt(_0x533b54++));
      _0x138fbf = _0x558f6b.indexOf(_0x2e1026.charAt(_0x533b54++));
      _0x3730b4 = _0x558f6b.indexOf(_0x2e1026.charAt(_0x533b54++));
      _0xcaf32b = _0x1c9eca << 2 | _0x244281 >> 4;
      _0x9871cf = (_0x244281 & 15) << 4 | _0x138fbf >> 2;
      _0x3d111a = (_0x138fbf & 3) << 6 | _0x3730b4;
      _0x39f281 = _0x39f281 + String.fromCharCode(_0xcaf32b);
      if (_0x138fbf !== 64) {
        _0x39f281 = _0x39f281 + String.fromCharCode(_0x9871cf);
      }
      if (_0x3730b4 !== 64) {
        _0x39f281 = _0x39f281 + String.fromCharCode(_0x3d111a);
      }
    }
    _0x39f281 = utf8Decode(_0x39f281);
    return _0x39f281;
  };
  utf8Encode = function (_0x2e9cbd) {
    _0x2e9cbd = _0x2e9cbd.replace(/\r\n/g, "\n");
    var _0x49330a = "";
    for (var _0x42098e = 0; _0x42098e < _0x2e9cbd.length; _0x42098e++) {
      var _0x58ae1d = _0x2e9cbd.charCodeAt(_0x42098e);
      if (_0x58ae1d < 128) {
        _0x49330a += String.fromCharCode(_0x58ae1d);
      } else {
        if (_0x58ae1d > 127 && _0x58ae1d < 2048) {
          _0x49330a += String.fromCharCode(_0x58ae1d >> 6 | 192);
          _0x49330a += String.fromCharCode(_0x58ae1d & 63 | 128);
        } else {
          _0x49330a += String.fromCharCode(_0x58ae1d >> 12 | 224);
          _0x49330a += String.fromCharCode(_0x58ae1d >> 6 & 63 | 128);
          _0x49330a += String.fromCharCode(_0x58ae1d & 63 | 128);
        }
      }
    }
    return _0x49330a;
  };
  utf8Decode = function (_0x39f714) {
    var _0x56ea56 = "";
    var _0x56765d = 0;
    var _0x4d1757 = 0;
    var _0x4b74fd = 0;
    var _0x216e08 = 0;
    while (_0x56765d < _0x39f714.length) {
      _0x4d1757 = _0x39f714.charCodeAt(_0x56765d);
      if (_0x4d1757 < 128) {
        _0x56ea56 += String.fromCharCode(_0x4d1757);
        _0x56765d++;
      } else {
        if (_0x4d1757 > 191 && _0x4d1757 < 224) {
          _0x4b74fd = _0x39f714.charCodeAt(_0x56765d + 1 < 10 ? "0" + (_0x56765d + 1) : _0x56765d + 1);
          _0x56ea56 += String.fromCharCode((_0x4d1757 & 31) << 6 | _0x4b74fd & 63);
          _0x56765d += 2;
        } else {
          _0x4b74fd = _0x39f714.charCodeAt(_0x56765d + 1 < 10 ? "0" + (_0x56765d + 1) : _0x56765d + 1);
          _0x216e08 = _0x39f714.charCodeAt(_0x56765d + 2);
          _0x56ea56 += String.fromCharCode((_0x4d1757 & 15) << 12 | (_0x4b74fd & 63) << 6 | _0x216e08 & 63);
          _0x56765d += 3;
        }
      }
    }
    return _0x56ea56;
  };
}
function David_0x230a32(_0x436185, _0x124c48) {
  class _0x1fd541 {
    constructor(_0x1b9da9) {
      this.env = _0x1b9da9;
    }
    send(_0x8e90c9, _0xf34e90 = "GET") {
      _0x8e90c9 = typeof _0x8e90c9 === "string" ? {
        url: _0x8e90c9
      } : _0x8e90c9;
      let _0x5bdfc4 = this.get;
      if (_0xf34e90 === "POST") {
        _0x5bdfc4 = this.post;
      }
      return new Promise((_0x3729fa, _0x3b53d3) => {
        _0x5bdfc4.call(this, _0x8e90c9, (_0x51f504, _0x5426ab, _0x45c36d) => {
          if (_0x51f504) {
            _0x3b53d3(_0x51f504);
          } else {
            _0x3729fa(_0x5426ab);
          }
        });
      });
    }
    get(_0xe8c90e) {
      return this.send.call(this.env, _0xe8c90e);
    }
    post(_0x2bbff4) {
      return this.send.call(this.env, _0x2bbff4, "POST");
    }
  }
  return new class {
    constructor(_0x121dd6, _0x3810d0) {
      this.name = _0x121dd6;
      this.http = new _0x1fd541(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3810d0);
      const _0x8db57d = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x8db57d);
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
    toObj(_0x43e939, _0x188a46 = null) {
      try {
        return JSON.parse(_0x43e939);
      } catch {
        return _0x188a46;
      }
    }
    toStr(_0x219f4c, _0x209512 = null) {
      try {
        return JSON.stringify(_0x219f4c);
      } catch {
        return _0x209512;
      }
    }
    getjson(_0x23580d, _0x5d2659) {
      let _0x24ec4b = _0x5d2659;
      const _0x4d87bb = this.getdata(_0x23580d);
      if (_0x4d87bb) {
        try {
          _0x24ec4b = JSON.parse(this.getdata(_0x23580d));
        } catch {}
      }
      return _0x24ec4b;
    }
    setjson(_0x3ca565, _0x40c431) {
      try {
        return this.setdata(JSON.stringify(_0x3ca565), _0x40c431);
      } catch {
        return false;
      }
    }
    getScript(_0x26848d) {
      return new Promise(_0x5d548f => {
        const _0x2e090a = {
          url: _0x26848d
        };
        this.get(_0x2e090a, (_0x4d8b8b, _0x4b777a, _0x308e9d) => _0x5d548f(_0x308e9d));
      });
    }
    runScript(_0x402ecc, _0x2740da) {
      return new Promise(_0x1df659 => {
        let _0x22760d = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x22760d = _0x22760d ? _0x22760d.replace(/\n/g, "").trim() : _0x22760d;
        let _0xf0f9b5 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0xf0f9b5 = _0xf0f9b5 ? _0xf0f9b5 * 1 : 20;
        _0xf0f9b5 = _0x2740da && _0x2740da.timeout ? _0x2740da.timeout : _0xf0f9b5;
        const [_0x35abca, _0x2d46ce] = _0x22760d.split("@");
        const _0x2c5265 = {
          script_text: _0x402ecc,
          mock_type: "cron",
          timeout: _0xf0f9b5
        };
        const _0x295f7d = {
          "X-Key": _0x35abca,
          Accept: "*/*"
        };
        const _0x549945 = {
          url: "http: //" + _0x2d46ce + "/v1/scripting/evaluate",
          body: _0x2c5265,
          headers: _0x295f7d
        };
        this.post(_0x549945, (_0x575378, _0x16a45a, _0x405295) => _0x1df659(_0x405295));
      }).catch(_0x5c5bc7 => this.logErr(_0x5c5bc7));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4bf868 = this.path.resolve(this.dataFile);
        const _0x322dfa = this.path.resolve(process.cwd(), this.dataFile);
        const _0x1202a7 = this.fs.existsSync(_0x4bf868);
        const _0x3f18df = !_0x1202a7 && this.fs.existsSync(_0x322dfa);
        if (_0x1202a7 || _0x3f18df) {
          const _0x2aab7c = _0x1202a7 ? _0x4bf868 : _0x322dfa;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2aab7c));
          } catch (_0x1d053c) {
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
        const _0x306250 = this.path.resolve(this.dataFile);
        const _0x1c5d3b = this.path.resolve(process.cwd(), this.dataFile);
        const _0x47c56e = this.fs.existsSync(_0x306250);
        const _0x3c723e = !_0x47c56e && this.fs.existsSync(_0x1c5d3b);
        const _0x374f4f = JSON.stringify(this.data);
        if (_0x47c56e) {
          this.fs.writeFileSync(_0x306250, _0x374f4f);
        } else {
          if (_0x3c723e) {
            this.fs.writeFileSync(_0x1c5d3b, _0x374f4f);
          } else {
            this.fs.writeFileSync(_0x306250, _0x374f4f);
          }
        }
      }
    }
    lodash_get(_0x2fb9df, _0x55a042, _0x3f049f = undefined) {
      const _0x58b970 = _0x55a042.replace(/[(d+)]/g, ".$1").split(".");
      let _0x209354 = _0x2fb9df;
      for (const _0x36fc54 of _0x58b970) {
        _0x209354 = Object(_0x209354)[_0x36fc54];
        if (_0x209354 === undefined) {
          return _0x3f049f;
        }
      }
      return _0x209354;
    }
    lodash_set(_0x3cc245, _0x3dbeaf, _0x3c438) {
      if (Object(_0x3cc245) !== _0x3cc245) {
        return _0x3cc245;
      }
      if (!Array.isArray(_0x3dbeaf)) {
        _0x3dbeaf = _0x3dbeaf.toString().match(/[^.[]]+/g) || [];
      }
      _0x3dbeaf.slice(0, -1).reduce((_0x178a8e, _0x374f56, _0x469278) => Object(_0x178a8e[_0x374f56]) === _0x178a8e[_0x374f56] ? _0x178a8e[_0x374f56] : _0x178a8e[_0x374f56] = Math.abs(_0x3dbeaf[_0x469278 + 1 < 10 ? "0" + (_0x469278 + 1) : _0x469278 + 1]) >> 0 === +_0x3dbeaf[_0x469278 + 1 < 10 ? "0" + (_0x469278 + 1) : _0x469278 + 1] ? [] : {}, _0x3cc245)[_0x3dbeaf[_0x3dbeaf.length - 1]] = _0x3c438;
      return _0x3cc245;
    }
    getdata(_0x51c69f) {
      let _0x1c0696 = this.getval(_0x51c69f);
      if (/^@/.test(_0x51c69f)) {
        const [, _0xbc73cb, _0x54fa84] = /^@(.*?).(.*?)$/.exec(_0x51c69f);
        const _0x56b379 = _0xbc73cb ? this.getval(_0xbc73cb) : "";
        if (_0x56b379) {
          try {
            const _0x17f14a = JSON.parse(_0x56b379);
            _0x1c0696 = _0x17f14a ? this.lodash_get(_0x17f14a, _0x54fa84, "") : _0x1c0696;
          } catch (_0x7f6b41) {
            _0x1c0696 = "";
          }
        }
      }
      return _0x1c0696;
    }
    setdata(_0x266d34, _0x8633e7) {
      let _0x82ad28 = false;
      if (/^@/.test(_0x8633e7)) {
        const [, _0x548857, _0x4c4119] = /^@(.*?).(.*?)$/.exec(_0x8633e7);
        const _0x1d6e4b = this.getval(_0x548857);
        const _0x2b6fd0 = _0x548857 ? _0x1d6e4b === "null" ? null : _0x1d6e4b || "{}" : "{}";
        try {
          const _0xe3f201 = JSON.parse(_0x2b6fd0);
          this.lodash_set(_0xe3f201, _0x4c4119, _0x266d34);
          _0x82ad28 = this.setval(JSON.stringify(_0xe3f201), _0x548857);
        } catch (_0x4adc3f) {
          const _0x57542d = {};
          this.lodash_set(_0x57542d, _0x4c4119, _0x266d34);
          _0x82ad28 = this.setval(JSON.stringify(_0x57542d), _0x548857);
        }
      } else {
        _0x82ad28 = this.setval(_0x266d34, _0x8633e7);
      }
      return _0x82ad28;
    }
    getval(_0x47ff27) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x47ff27);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x47ff27);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x47ff27];
          } else {
            return this.data && this.data[_0x47ff27] || null;
          }
        }
      }
    }
    setval(_0x52bd9a, _0x932f07) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x52bd9a, _0x932f07);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x52bd9a, _0x932f07);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x932f07] = _0x52bd9a;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x932f07] || null;
          }
        }
      }
    }
    initGotEnv(_0x5e50d6) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x5e50d6) {
        _0x5e50d6.headers = _0x5e50d6.headers ? _0x5e50d6.headers : {};
        if (undefined === _0x5e50d6.headers.Cookie && undefined === _0x5e50d6.cookieJar) {
          _0x5e50d6.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x4d6c3e, _0x4c1d25 = () => {}) {
      if (_0x4d6c3e.headers) {
        delete _0x4d6c3e.headers["Content-Type"];
        delete _0x4d6c3e.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x4d6c3e.headers = _0x4d6c3e.headers || {};
          const _0x248ebb = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x4d6c3e.headers, _0x248ebb);
        }
        $httpClient.get(_0x4d6c3e, (_0xed9f55, _0x413c6d, _0x2c5000) => {
          if (!_0xed9f55 && _0x413c6d) {
            _0x413c6d.body = _0x2c5000;
            _0x413c6d.statusCode = _0x413c6d.status;
          }
          _0x4c1d25(_0xed9f55, _0x413c6d, _0x2c5000);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x4d6c3e.opts = _0x4d6c3e.opts || {};
            const _0x595075 = {
              hints: false
            };
            Object.assign(_0x4d6c3e.opts, _0x595075);
          }
          $task.fetch(_0x4d6c3e).then(_0x31a79d => {
            const {
              statusCode: _0x4cdcc6,
              statusCode,
              headers,
              body
            } = _0x31a79d;
            const _0x1e6f66 = {
              status: _0x4cdcc6,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x4c1d25(null, _0x1e6f66, body);
          }, _0x2fe4ce => _0x4c1d25(_0x2fe4ce));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4d6c3e);
            this.got(_0x4d6c3e).on("redirect", (_0xbf7260, _0xcdc334) => {
              try {
                if (_0xbf7260.headers["set-cookie"]) {
                  const _0x26ab60 = _0xbf7260.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x26ab60) {
                    this.ckjar.setCookieSync(_0x26ab60, null);
                  }
                  _0xcdc334.cookieJar = this.ckjar;
                }
              } catch (_0x245120) {
                this.logErr(_0x245120);
              }
            }).then(_0x4aa717 => {
              const {
                statusCode: _0x210a25,
                statusCode,
                headers,
                body
              } = _0x4aa717;
              const _0xf4ef14 = {
                status: _0x210a25,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x4c1d25(null, _0xf4ef14, body);
            }, _0x48f776 => {
              const {
                message: _0x387363,
                response: _0x1567dc
              } = _0x48f776;
              _0x4c1d25(_0x387363, _0x1567dc, _0x1567dc && _0x1567dc.body);
            });
          }
        }
      }
    }
    post(_0x334ff6, _0x180e8e = () => {}) {
      const _0x421c40 = _0x334ff6.method ? _0x334ff6.method.toLocaleLowerCase() : "post";
      if (_0x334ff6.body && _0x334ff6.headers && !_0x334ff6.headers["Content-Type"]) {
        _0x334ff6.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x334ff6.headers) {
        delete _0x334ff6.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x334ff6.headers = _0x334ff6.headers || {};
          const _0x5cc73e = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x334ff6.headers, _0x5cc73e);
        }
        $httpClient[_0x421c40](_0x334ff6, (_0x4b3eac, _0x27a96b, _0x3f1600) => {
          if (!_0x4b3eac && _0x27a96b) {
            _0x27a96b.body = _0x3f1600;
            _0x27a96b.statusCode = _0x27a96b.status;
          }
          _0x180e8e(_0x4b3eac, _0x27a96b, _0x3f1600);
        });
      } else {
        if (this.isQuanX()) {
          _0x334ff6.method = _0x421c40;
          if (this.isNeedRewrite) {
            _0x334ff6.opts = _0x334ff6.opts || {};
            const _0x1f424a = {
              hints: false
            };
            Object.assign(_0x334ff6.opts, _0x1f424a);
          }
          $task.fetch(_0x334ff6).then(_0xc20e41 => {
            const {
              statusCode: _0x128970,
              statusCode,
              headers,
              body
            } = _0xc20e41;
            const _0x5d339c = {
              status: _0x128970,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x180e8e(null, _0x5d339c, body);
          }, _0x10ea9c => _0x180e8e(_0x10ea9c));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x334ff6);
            const {
              url,
              ..._0xaf91c8
            } = _0x334ff6;
            this.got[_0x421c40](url, _0xaf91c8).then(_0x5a01af => {
              const {
                statusCode: _0x1c3aba,
                statusCode,
                headers,
                body
              } = _0x5a01af;
              const _0x23fd12 = {
                status: _0x1c3aba,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x180e8e(null, _0x23fd12, body);
            }, _0x365bcc => {
              const {
                message: _0x3d8d0e,
                response: _0x1ef12e
              } = _0x365bcc;
              _0x180e8e(_0x3d8d0e, _0x1ef12e, _0x1ef12e && _0x1ef12e.body);
            });
          }
        }
      }
    }
    put(_0x3f9991, _0x180b7c = () => {}) {
      const _0x3b4966 = _0x3f9991.method ? _0x3f9991.method.toLocaleLowerCase() : "put";
      if (_0x3f9991.body && _0x3f9991.headers && !_0x3f9991.headers["Content-Type"]) {
        _0x3f9991.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x3f9991.headers) {
        delete _0x3f9991.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x3f9991.headers = _0x3f9991.headers || {};
          const _0x59d5bb = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x3f9991.headers, _0x59d5bb);
        }
        $httpClient[_0x3b4966](_0x3f9991, (_0x11be75, _0x33ad21, _0x180b83) => {
          if (!_0x11be75 && _0x33ad21) {
            _0x33ad21.body = _0x180b83;
            _0x33ad21.statusCode = _0x33ad21.status;
          }
          _0x180b7c(_0x11be75, _0x33ad21, _0x180b83);
        });
      } else {
        if (this.isQuanX()) {
          _0x3f9991.method = _0x3b4966;
          if (this.isNeedRewrite) {
            _0x3f9991.opts = _0x3f9991.opts || {};
            const _0x20e714 = {
              hints: false
            };
            Object.assign(_0x3f9991.opts, _0x20e714);
          }
          $task.fetch(_0x3f9991).then(_0x3716d0 => {
            const {
              statusCode: _0x272a75,
              statusCode,
              headers,
              body
            } = _0x3716d0;
            const _0x4d040c = {
              status: _0x272a75,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x180b7c(null, _0x4d040c, body);
          }, _0x4c67f3 => _0x180b7c(_0x4c67f3));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x3f9991);
            const {
              url,
              ..._0x55876f
            } = _0x3f9991;
            this.got[_0x3b4966](url, _0x55876f).then(_0x596525 => {
              const {
                statusCode: _0x18847e,
                statusCode,
                headers,
                body
              } = _0x596525;
              const _0x1f182f = {
                status: _0x18847e,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x180b7c(null, _0x1f182f, body);
            }, _0x544d07 => {
              const {
                message: _0x506fb7,
                response: _0x39a471
              } = _0x544d07;
              _0x180b7c(_0x506fb7, _0x39a471, _0x39a471 && _0x39a471.body);
            });
          }
        }
      }
    }
    time(_0x2d49a, _0x4682f2 = null) {
      const _0x133c48 = _0x4682f2 ? new Date(_0x4682f2) : new Date();
      let _0x13e9f4 = {
        "M+": _0x133c48.getMonth() + 1,
        "d+": _0x133c48.getDate(),
        "H+": _0x133c48.getHours(),
        "m+": _0x133c48.getMinutes(),
        "s+": _0x133c48.getSeconds(),
        "q+": Math.floor((_0x133c48.getMonth() + 3) / 3),
        S: _0x133c48.getMilliseconds()
      };
      if (/(y+)/.test(_0x2d49a)) {
        _0x2d49a = _0x2d49a.replace(RegExp.$1, (_0x133c48.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x43b8ee in _0x13e9f4) if (new RegExp("(" + _0x43b8ee + ")").test(_0x2d49a)) {
        _0x2d49a = _0x2d49a.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x13e9f4[_0x43b8ee] : ("00" + _0x13e9f4[_0x43b8ee]).substr(("" + _0x13e9f4[_0x43b8ee]).length));
      }
      return _0x2d49a;
    }
    msg(_0x515308 = _0x436185, _0x3144e7 = "", _0x5500e0 = "", _0x342d2f) {
      const _0x3c1cd9 = _0x2e09b7 => {
        if (!_0x2e09b7) {
          return _0x2e09b7;
        }
        if (typeof _0x2e09b7 === "string") {
          if (this.isLoon()) {
            return _0x2e09b7;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x2e09b7
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x2e09b7
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x2e09b7 === "object") {
            if (this.isLoon()) {
              let _0x57b257 = _0x2e09b7.openUrl || _0x2e09b7.url || _0x2e09b7["open-url"];
              let _0x528289 = _0x2e09b7.mediaUrl || _0x2e09b7["media-url"];
              const _0x14fe9d = {
                openUrl: _0x57b257,
                mediaUrl: _0x528289
              };
              return _0x14fe9d;
            } else {
              if (this.isQuanX()) {
                let _0x124ec2 = _0x2e09b7["open-url"] || _0x2e09b7.url || _0x2e09b7.openUrl;
                let _0x57f2f0 = _0x2e09b7["media-url"] || _0x2e09b7.mediaUrl;
                const _0x29920a = {
                  "open-url": _0x124ec2,
                  "media-url": _0x57f2f0
                };
                return _0x29920a;
              } else {
                if (this.isSurge()) {
                  let _0x4a1b55 = _0x2e09b7.url || _0x2e09b7.openUrl || _0x2e09b7["open-url"];
                  const _0x2ab4b4 = {
                    url: _0x4a1b55
                  };
                  return _0x2ab4b4;
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
          $notification.post(_0x515308, _0x3144e7, _0x5500e0, _0x3c1cd9(_0x342d2f));
        } else {
          if (this.isQuanX()) {
            $notify(_0x515308, _0x3144e7, _0x5500e0, _0x3c1cd9(_0x342d2f));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x270226 = ["", "==============📣系统通知📣=============="];
        _0x270226.push(_0x515308);
        _0x3144e7 ? _0x270226.push(_0x3144e7) : "";
        _0x5500e0 ? _0x270226.push(_0x5500e0) : "";
        console.log(_0x270226.join("\n"));
        this.logs = this.logs.concat(_0x270226);
      }
    }
    log(..._0x2a161a) {
      if (_0x2a161a.length > 0) {
        this.logs = [...this.logs, ..._0x2a161a];
      }
      console.log(_0x2a161a.join(this.logSeparator));
    }
    logErr(_0x6be97f, _0x1a5bad) {
      const _0x1d4eb4 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x1d4eb4) {
        this.log("", "❗️" + this.name + ", 错误!", _0x6be97f);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x6be97f.stack);
      }
    }
    wait(_0x1b19d9) {
      return new Promise(_0x477c61 => setTimeout(_0x477c61, _0x1b19d9));
    }
    done(_0x1c657b = {}) {
      const _0x267d5e = new Date().getTime();
      const _0x4af2bd = (_0x267d5e - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x4af2bd + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x1c657b);
      }
    }
  }(_0x436185, _0x124c48);
}