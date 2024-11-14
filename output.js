//Thu Nov 14 2024 07:21:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
require("dotenv").config();
NAME = "三宜租机";
VALY = ["syzjapp"];
LOGS = 0;
CK = "";
var dldz = process.env.syzjdldz,
  userList = [];
usid = 0;
class Bar {
  constructor(_0x55b46b) {
    this.token = _0x55b46b.split("#")[0];
    this.num = ++usid;
    this.headers = {
      "Accept-Charset": "UTF-8",
      "User-Agent": "Mozilla/5.0 (Linux; U; Android 13; zh-CN; 23013RK75C Build/TKQ1.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.2.59 Mobile Safari/537.36 AlipayChannelId/5136 UCBS/3.22.2.59_230213152242 ChannelId(4) NebulaSDK/1.8.100112 Nebula AlipayDefined(nt:WIFI,ws:411|0|3.5,ac:sp) AliApp(AP/10.3.80.9100) AlipayClient/10.3.80.9100 Language/zh-Hans useStatusBar/true isConcaveScreen/true Region/CNAriver/1.0.0",
      "x-release-type": "ONLINE",
      token: this.token,
      Host: "api.xiangruizulin.com",
      Connection: "Keep-Alive"
    };
  }
  async hqdl() {
    let _0x217636 = await task("get", dldz, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x217636.split("\n")[0];
    console.log("账号" + this.num + "：获取代理IP成功：" + this.dlip);
  }
  async start() {
    if (dldz == undefined) {
      await this.qd();
      for (let _0x43b711 = 0; _0x43b711 < 10; _0x43b711++) {
        await this.xcx_jump();
      }
    } else {
      await this.hqdl();
      await this.qd();
      for (let _0x23a83c = 0; _0x23a83c < 10; _0x23a83c++) {
        await this.xcx_jump();
      }
    }
  }
  async qd() {
    let _0x5554bc = await this.task("post", "https://api.xiangruizulin.com//signin", this.headers, "");
    _0x5554bc.code == 1 ? console.log("账号" + this.num + "：" + _0x5554bc.msg) : console.log("账号" + this.num + "：" + _0x5554bc.msg);
  }
  async xcx_jump() {
    let _0x123b1e = await this.task("get", "https://api.xiangruizulin.com//xcx_jump", this.headers, "");
    if (_0x123b1e.code == 1) {
      for (let _0x127d21 = 0; _0x127d21 < _0x123b1e.data.data.length; _0x127d21++) {
        _0x123b1e.data.data[_0x127d21].status == 0 && (await this.do_jump(_0x123b1e.data.data[_0x127d21].appid), await wait(3));
      }
    } else {
      console.log("账号" + this.num + "：" + _0x123b1e.msg);
    }
  }
  async do_jump(_0x4781ae) {
    let _0x3d1a4f = await this.task("post", "https://api.xiangruizulin.com//do_jump", this.headers, "appid=" + _0x4781ae);
    _0x3d1a4f.code == 1 ? console.log("账号" + this.num + "：" + _0x3d1a4f.msg) : console.log("账号" + this.num + "：" + _0x3d1a4f.msg);
  }
  async task(_0x27d6f3, _0x59795f, _0x1a2066, _0x2ef446) {
    _0x27d6f3 == "delete" ? _0x27d6f3 = _0x27d6f3.toUpperCase() : _0x27d6f3 = _0x27d6f3;
    const _0x529416 = require("request");
    _0x27d6f3 == "post" && (delete _0x1a2066["Content-Type"], delete _0x1a2066["content-type"], delete _0x1a2066["Content-Length"], delete _0x1a2066["content-length"], safeGet(_0x2ef446) ? _0x1a2066["Content-Type"] = "application/json" : _0x1a2066["Content-Type"] = "application/x-www-form-urlencoded", _0x2ef446 && (_0x1a2066["Content-Length"] = lengthInUtf8Bytes(_0x2ef446)));
    _0x27d6f3 == "get" && (delete _0x1a2066["Content-Type"], delete _0x1a2066["content-length"], delete _0x1a2066["content-type"], delete _0x1a2066["Content-Length"]);
    _0x1a2066.Host = _0x59795f.replace("//", "/").split("/")[1];
    if (_0x27d6f3.indexOf("T") < 0) {
      var _0x32a119 = {
        url: _0x59795f,
        headers: _0x1a2066,
        body: _0x2ef446,
        followRedirect: false,
        timeout: 20000
      };
    } else {
      var _0x32a119 = {
        url: _0x59795f,
        headers: _0x1a2066,
        form: JSON.parse(_0x2ef446),
        followRedirect: false,
        timeout: 20000
      };
    }
    dldz !== undefined && (_0x32a119.proxy = "http://" + this.dlip);
    return new Promise(async _0x401b73 => {
      _0x529416[_0x27d6f3.toLowerCase()](_0x32a119, async (_0x7f0dfc, _0x43ea33, _0xbfcf21) => {
        try {
          LOGS == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x32a119)), console.log("==================返回=================="), console.log(_0x7f0dfc), console.log(JSON.stringify(_0x43ea33)));
        } catch (_0x3799d4) {} finally {
          !_0x7f0dfc ? safeGet(_0xbfcf21) ? _0xbfcf21 = JSON.parse(_0xbfcf21) : _0xbfcf21 = _0xbfcf21 : dldz == undefined ? _0xbfcf21 = await this.task(_0x27d6f3, _0x59795f, _0x1a2066, _0x2ef446) : (await this.hqdl(), _0xbfcf21 = await this.task(_0x27d6f3, _0x59795f, _0x1a2066, _0x2ef446));
          return _0x401b73(_0xbfcf21);
        }
      });
    });
  }
}
(async () => {
  const _0x26edde = "0.0.1";
  console.log(NAME);
  console.log("北京时间：" + formatDate());
  let _0x3434e9 = await task("get", "http://118.123.3.235:2298/js/v", {});
  if (_0x3434e9?.["code"] == 200) {
    let _0xf798ef = _0x3434e9?.["data"]?.["syzj"];
    console.log("当前版本号：" + _0x26edde + "，最新版本号：" + _0xf798ef);
    if (_0xf798ef == _0x26edde) {
      checkEnv();
      dldz === undefined ? console.log("当前使用本地网络运行脚本") : console.log("当前使用代理网络运行脚本");
      const _0xa8feff = 5;
      await startWithConcurrency(userList, _0xa8feff);
    } else {
      if (_0xf798ef == undefined) {
        console.log("无当前脚本版本号，请联系作者");
      } else {
        console.log("低于最新版本号，开始更新");
        let _0x3ccf05 = await task("get", "http://118.123.3.235:2298/js/syzj.js", {});
        const _0x48c56b = require("fs").promises,
          _0xc26cf0 = process.argv[1];
        await _0x48c56b.writeFile(_0xc26cf0, _0x3ccf05);
        console.log("脚本更新完成，请重新运行脚本");
      }
    }
  } else {
    console.log("请检查网络，如无用请联系作者");
  }
})().catch(_0x5a2f1c => {
  console.log(_0x5a2f1c);
});
async function startWithConcurrency(_0x505c09, _0x126f9c) {
  const _0x1bb983 = [..._0x505c09];
  async function _0x394bd2() {
    if (_0x1bb983.length === 0) {
      return;
    }
    const _0x541084 = _0x1bb983.shift();
    try {
      await _0x541084.start();
    } catch (_0xa23c5d) {
      console.log(_0xa23c5d);
    }
    _0x1bb983.length > 0 && (await _0x394bd2());
  }
  const _0x15db27 = Array.from({
    length: _0x126f9c
  }, _0x394bd2);
  await Promise.all(_0x15db27);
}
function randomInt(_0x2228f9, _0x5846cd) {
  return Math.round(Math.random() * (_0x5846cd - _0x2228f9) + _0x2228f9);
}
function randomUUID() {
  return randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
}
function randomPattern(_0x26dc82, _0x3a77ab = "abcdef0123456789") {
  let _0x3d5859 = "";
  for (let _0x521d84 of _0x26dc82) {
    if (_0x521d84 == "x") {
      _0x3d5859 += _0x3a77ab.charAt(Math.floor(Math.random() * _0x3a77ab.length));
    } else {
      _0x521d84 == "X" ? _0x3d5859 += _0x3a77ab.charAt(Math.floor(Math.random() * _0x3a77ab.length)).toUpperCase() : _0x3d5859 += _0x521d84;
    }
  }
  return _0x3d5859;
}
function randomString(_0x41e2af, _0x435611) {
  _0x41e2af = _0x41e2af || 32;
  let _0x13f3b9 = "";
  if (_0x435611 == 0) {
    _0x13f3b9 += "0123456789";
  } else {
    if (_0x435611 == 1) {
      _0x13f3b9 += "0123456789";
      _0x13f3b9 += "abcdef";
    } else {
      if (_0x435611 == 2) {
        _0x13f3b9 += "abcdefghijklmnopqrstuvwxyz";
        _0x13f3b9 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } else {
        _0x435611 == 3 && (_0x13f3b9 += "0123456789", _0x13f3b9 += "abcdefghijklmnopqrstuvwxyz", _0x13f3b9 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }
    }
  }
  const _0x5b8263 = _0x13f3b9.length;
  let _0xc97f94 = "";
  for (let _0x97661 = 0; _0x97661 < _0x41e2af; _0x97661++) {
    _0xc97f94 += _0x13f3b9.charAt(Math.floor(Math.random() * _0x5b8263));
  }
  return _0xc97f94;
}
async function task(_0x3dd64b, _0x103064, _0x2b60f4, _0x2aefa0) {
  _0x3dd64b == "delete" ? _0x3dd64b = _0x3dd64b.toUpperCase() : _0x3dd64b = _0x3dd64b;
  const _0x47231f = require("request");
  _0x3dd64b == "post" && (delete _0x2b60f4["Content-Type"], delete _0x2b60f4["content-type"], delete _0x2b60f4["Content-Length"], delete _0x2b60f4["content-length"], safeGet(_0x2aefa0) ? _0x2b60f4["Content-Type"] = "application/json" : _0x2b60f4["Content-Type"] = "application/x-www-form-urlencoded", _0x2aefa0 && (_0x2b60f4["Content-Length"] = lengthInUtf8Bytes(_0x2aefa0)));
  _0x3dd64b == "get" && (delete _0x2b60f4["Content-Type"], delete _0x2b60f4["content-length"], delete _0x2b60f4["content-type"], delete _0x2b60f4["Content-Length"]);
  _0x2b60f4.Host = _0x103064.replace("//", "/").split("/")[1];
  if (_0x3dd64b.indexOf("T") < 0) {
    var _0x43e5cd = {
      url: _0x103064,
      headers: _0x2b60f4,
      body: _0x2aefa0,
      followRedirect: false,
      timeout: 20000
    };
  } else {
    var _0x43e5cd = {
      url: _0x103064,
      headers: _0x2b60f4,
      form: JSON.parse(_0x2aefa0),
      followRedirect: false,
      timeout: 20000
    };
  }
  return new Promise(async _0x1c6b79 => {
    _0x47231f[_0x3dd64b.toLowerCase()](_0x43e5cd, async (_0x21653d, _0x5840e5, _0x5ed0d1) => {
      try {
        LOGS == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x43e5cd)), console.log("==================返回=================="), console.log(_0x21653d), console.log(JSON.stringify(_0x5840e5)));
      } catch (_0x179c00) {} finally {
        !_0x21653d ? safeGet(_0x5ed0d1) ? _0x5ed0d1 = JSON.parse(_0x5ed0d1) : _0x5ed0d1 = _0x5ed0d1 : (await wait(60), _0x5ed0d1 = await this.task(_0x3dd64b, _0x103064, _0x2b60f4, _0x2aefa0));
        return _0x1c6b79(_0x5ed0d1);
      }
    });
  });
}
function timestamp(_0xd3c9ac) {
  const _0x50864c = new Date().getTime();
  return Math.round(_0x50864c / 10 ** (13 - _0xd3c9ac)).toString();
}
function base64pjjm(_0x2affd2) {
  const _0x4afff8 = Buffer.from(_0x2affd2, "base64"),
    _0x27b6ae = _0x4afff8.slice(0, 16).toString("base64"),
    _0x4b76d0 = _0x4afff8.slice(16, _0x4afff8.length).toString("base64");
  return [_0x27b6ae, _0x4b76d0];
}
function base64pj(_0x16d863, _0x4e089b) {
  const _0x584fc4 = Buffer.from(_0x16d863, "base64"),
    _0xb25f87 = Buffer.from(_0x4e089b, "base64"),
    _0x12538a = Buffer.concat([_0x584fc4, _0xb25f87]);
  return result = _0x12538a.toString("base64");
}
function formatDate() {
  let _0x54759d = new Date();
  const _0x5350d1 = _0x54759d.getFullYear(),
    _0x14b8a4 = padZero(_0x54759d.getMonth() + 1),
    _0x427453 = padZero(_0x54759d.getDate()),
    _0x155214 = padZero(_0x54759d.getHours()),
    _0xa31433 = padZero(_0x54759d.getMinutes()),
    _0x213dd8 = padZero(_0x54759d.getSeconds());
  return _0x5350d1 + "-" + _0x14b8a4 + "-" + _0x427453 + " " + _0x155214 + ":" + _0xa31433 + ":" + _0x213dd8;
}
function padZero(_0x37ac7c) {
  return _0x37ac7c.toString().padStart(2, "0");
}
function zhulie(_0x57a834) {
  var _0x2493a8 = "";
  Object.keys(_0x57a834).sort().forEach(function (_0x18d3e6) {
    _0x2493a8 += _0x18d3e6 + _0x57a834[_0x18d3e6];
  });
  return _0x2493a8;
}
function safeGet(_0x5cd7b1) {
  try {
    if (typeof JSON.parse(_0x5cd7b1) == "object") {
      return true;
    }
  } catch (_0x5a124d) {
    return false;
  }
}
function wait(_0x15e422) {
  return new Promise(function (_0x556512) {
    setTimeout(_0x556512, _0x15e422 * 1000);
  });
}
function lengthInUtf8Bytes(_0x326ad1) {
  let _0x2270fa = encodeURIComponent(_0x326ad1).match(/%[89ABab]/g);
  return _0x326ad1.length + (_0x2270fa ? _0x2270fa.length : 0);
}
async function checkEnv() {
  let _0x348ef6 = process.env[VALY] || CK,
    _0x19315c = 0;
  if (_0x348ef6) {
    for (let _0xcc55e of _0x348ef6.split("\n").filter(_0x22c7b3 => !!_0x22c7b3)) {
      userList.push(new Bar(_0xcc55e));
    }
    _0x19315c = userList.length;
  } else {
    console.log("【" + NAME + "】：未填写变量: " + VALY);
    process.exit();
  }
  console.log("共找到" + _0x19315c + "个账号");
  return userList;
}