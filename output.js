//Sat Sep 28 2024 15:06:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x252726 = function () {
  var _0x4724ea = true;
  return function (_0x210b35, _0x258d92) {
    var _0x81c8b4 = _0x4724ea ? function () {
      if (_0x258d92) {
        var _0x5dd96b = _0x258d92.apply(_0x210b35, arguments);
        return _0x258d92 = null, _0x5dd96b;
      }
    } : function () {};
    return _0x4724ea = false, _0x81c8b4;
  };
}();
(function () {
  _0x252726(this, function () {
    var _0x3e9862 = new RegExp("function *\\( *\\)"),
      _0x59c3b7 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x355b92 = _0x5eb5f0("init");
    if (!_0x3e9862.test(_0x355b92 + "chain") || !_0x59c3b7.test(_0x355b92 + "input")) _0x355b92("0");else {
      _0x5eb5f0();
    }
  })();
})();
const $ = new Env("顺义在线"),
  axios = require("axios");
let request = require("request");
(function () {
  var _0x564183 = function () {
      var _0x3e5e6a;
      try {
        _0x3e5e6a = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x5065fc) {
        _0x3e5e6a = window;
      }
      return _0x3e5e6a;
    },
    _0x27451f = _0x564183();
  _0x27451f.setInterval(_0x5eb5f0, 2000);
})();
request = request.defaults({
  "jar": true
});
const {
    log
  } = console,
  Notify = 1,
  debug = 0;
let SYZX = ($.isNode() ? process.env.SYZX : $.getdata("SYZX")) || "",
  SYZXArr = [],
  data = "",
  msg = "";
!(async () => {
  if (typeof $request !== "undefined") await GetRewrite();else {
    if (!(await Envs())) return;else {
      log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " \n=============================================\n");
      log("\n=================== 共找到 " + SYZXArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + SYZXArr);
      for (let _0x312a5b = 0; _0x312a5b < SYZXArr.length; _0x312a5b++) {
        let _0x1b55c3 = _0x312a5b + 1;
        addNotifyStr("\n==== 开始【第 " + _0x1b55c3 + " 个账号】====\n", true);
        SYZX = SYZXArr[_0x312a5b];
        await poem();
        await Login();
        stop();
        goldBuyChance();
        stop();
        goldBuyChance();
        stop();
        for (i1 = 0; i1 < 4; i1++) {
          await luckTake();
          await stop();
        }
      }
      await SendMsg(msg);
    }
  }
})().catch(_0x15ff26 => log(_0x15ff26)).finally(() => $.done());
async function Login() {
  return new Promise(_0x49d0c9 => {
    var _0x491f26 = {
      "method": "GET",
      "url": "https://app.shunyiqu.cn/mag/sign/v1/sign/sign",
      "headers": {
        "Host": "app.shunyiqu.cn",
        "Connection": "keep-alive",
        "Accept": ",*/*",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; OXF-AN10 Build/HUAWEIOXF-AN10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36 MAGAPPX|5.9.0-1.2.3-10128|Android 10 HONOR OXF-AN10|shunyizx|ZB6Gv0lGzdIDALi4cm9rzFaO|312df15c427e76dc72753c240220b6d1|67ecdde02d5c45acb431e8b5d0a2aaf6|87327ffc22e220755a7a2a16ec8be452",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://app.shunyiqu.cn/mag/sign/v1/sign/view",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-CN;q=0.8,en-US;q=0.7,en;q=0.6",
        "Cookie": SYZX
      },
      "data": {}
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x491f26)));
    axios.request(_0x491f26).then(async function (_0x4a6e33) {
      try {
        data = _0x4a6e33.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x4a6e33.data)));
        if (data.code == 100) addNotifyStr("\n$" + data.data.des + "," + data.data.continue_des + "\n", true);else log(data.msg);
      } catch (_0x261c56) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x10b5e4) {
      console.error(_0x10b5e4);
    }).then(_0x34ffbf => {
      _0x49d0c9();
    });
  });
}
async function goldBuyChance() {
  return new Promise(_0x47d185 => {
    var _0x447567 = {
      "method": "POST",
      "url": "http://cj.shunyiqu.cn/addon/luck/wap/goldBuyChance",
      "headers": {
        "Host": "cj.shunyiqu.cn",
        "Connection": "keep-alive",
        "Content-Length": "15",
        "Accept": ",*/*",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; OXF-AN10 Build/HUAWEIOXF-AN10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36 MAGAPPX|5.9.0-1.2.3-10128|Android 10 HONOR OXF-AN10|shunyizx|ZB6Gv0lGzdIDALi4cm9rzFaO|312df15c427e76dc72753c240220b6d1|67ecdde02d5c45acb431e8b5d0a2aaf6|87327ffc22e220755a7a2a16ec8be452",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "http://cj.shunyiqu.cn",
        "Referer": "http://cj.shunyiqu.cn/addon/luck/wap/grid?activity_id=418&themecolor=389FEF",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-CN;q=0.8,en-US;q=0.7,en;q=0.6",
        "Cookie": SYZX
      },
      "data": {
        "activity_id": 418
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x447567)));
    axios.request(_0x447567).then(async function (_0x2eb5ab) {
      try {
        data = _0x2eb5ab.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x2eb5ab.data)));
        if (data.code == 100) {
          addNotifyStr("\n$" + data.data.change_ok + "\n", true);
        } else log(data.msg);
      } catch (_0x1552d1) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x3bb580) {
      console.error(_0x3bb580);
    }).then(_0x4eb6ef => {
      _0x47d185();
    });
  });
}
async function luckTake() {
  return new Promise(_0x3b3a93 => {
    var _0x4b3fb8 = {
      "method": "POST",
      "url": "http://cj.shunyiqu.cn/addon/luck/wap/luckTake",
      "headers": {
        "Host": "cj.shunyiqu.cn",
        "Connection": "keep-alive",
        "Content-Length": "15",
        "Accept": "*/*",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; OXF-AN10 Build/HUAWEIOXF-AN10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36 MAGAPPX|5.9.0-1.2.3-10128|Android 10 HONOR OXF-AN10|shunyizx|ZB6Gv0lGzdIDALi4cm9rzFaO|312df15c427e76dc72753c240220b6d1|67ecdde02d5c45acb431e8b5d0a2aaf6|87327ffc22e220755a7a2a16ec8be452",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "http://cj.shunyiqu.cn",
        "Referer": "http://cj.shunyiqu.cn/addon/luck/wap/grid?activity_id=418&themecolor=389FEF",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-CN;q=0.8,en-US;q=0.7,en;q=0.6",
        "Cookie": SYZX
      },
      "data": {
        "activity_id": 418
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x4b3fb8)));
    axios.request(_0x4b3fb8).then(async function (_0x2758dc) {
      try {
        data = _0x2758dc.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x2758dc.data)));
        if (data.code == 100) addNotifyStr("\n$" + data.data.des + "\n", true);else log(data.msg);
      } catch (_0x2a3367) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x154a28) {
      console.error(_0x154a28);
    }).then(_0x24538a => {
      _0x3b3a93();
    });
  });
}
function randomNum(_0x3b706b, _0x39c4db) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x3b706b + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (_0x39c4db - _0x3b706b + 1) + _0x3b706b, 10);
      break;
    default:
      return 0;
      break;
  }
}
function poem(_0x4c74d5 = 3 * 1000) {
  return new Promise(_0x37b53c => {
    let _0x3787cd = {
      "url": "https://v1.jinrishici.com/all.json"
    };
    $.get(_0x3787cd, async (_0x5303a9, _0x487eb2, _0x1b6cd8) => {
      try {
        _0x1b6cd8 = JSON.parse(_0x1b6cd8);
        log(_0x1b6cd8.content + "  \n————《" + _0x1b6cd8.origin + "》" + _0x1b6cd8.author);
      } catch (_0x1cbda3) {
        log(_0x1cbda3, _0x487eb2);
      } finally {
        _0x37b53c();
      }
    }, _0x4c74d5);
  });
}
function sleep(_0x299057) {
  var _0x10d4cf = new Date().getTime();
  while (new Date().getTime() - _0x10d4cf < _0x299057) {
    continue;
  }
}
async function stop() {
  delay = randomNum(2000, 5000);
  log("延迟" + delay + "毫秒");
  await sleep(delay);
}
async function moban() {
  return new Promise(_0x438bd7 => {
    var _0x151d4b = {
      "method": "GET",
      "url": "http://nm2.xyz/jyj.json",
      "headers": {}
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url ===============");
      log(JSON.stringify(_0x151d4b));
    }
    axios.request(_0x151d4b).then(async function (_0x1bd6bf) {
      try {
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x1bd6bf.data)));
        mobanshare = _0x1bd6bf.data;
        log(data.data.xx);
      } catch (_0x3c8335) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x3ded5c) {
      console.error(_0x3ded5c);
    }).then(_0x31305f => {
      _0x438bd7();
    });
  });
}
async function Envs() {
  if (SYZX) {
    if (SYZX.indexOf("@") != -1) SYZX.split("@").forEach(_0x302dfb => {
      SYZXArr.push(_0x302dfb);
    });else SYZX.indexOf("\n") != -1 ? SYZX.split("\n").forEach(_0x18c2ab => {
      SYZXArr.push(_0x18c2ab);
    }) : SYZXArr.push(SYZX);
  } else {
    log("\n 【" + $.name + "】：未填写变量 SYZX");
    return;
  }
  return true;
}
function addNotifyStr(_0x55a70a, _0x59c9d4 = true) {
  _0x59c9d4 && log(_0x55a70a + "\n");
  msg += _0x55a70a + "\n";
}
async function SendMsg(_0x15fa72) {
  if (!_0x15fa72) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var _0x35e797 = require("./sendNotify");
      await _0x35e797.sendNotify($.name, _0x15fa72);
    } else $.msg(_0x15fa72);
  } else log(_0x15fa72);
}
function randomString(_0xc2e828) {
  for (var _0xb24062 = _0xc2e828 > 0 && void 0 !== _0xc2e828 ? _0xc2e828 : 21, _0x547988 = ""; _0x547988.length < _0xb24062;) _0x547988 += Math.random().toString(36).slice(2);
  return _0x547988.slice(0, _0xb24062);
}
function Env(_0x27b440, _0xf5f716) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x5d4fb2 {
    constructor(_0x3f39d9) {
      this.env = _0x3f39d9;
    }
    ["send"](_0x3e5a35, _0x3a20fa = "GET") {
      _0x3e5a35 = "string" == typeof _0x3e5a35 ? {
        "url": _0x3e5a35
      } : _0x3e5a35;
      let _0x22b1d3 = this.get;
      return "POST" === _0x3a20fa && (_0x22b1d3 = this.post), new Promise((_0x1245c8, _0x621841) => {
        _0x22b1d3.call(this, _0x3e5a35, (_0x310f2f, _0x20be37, _0x354cd5) => {
          _0x310f2f ? _0x621841(_0x310f2f) : _0x1245c8(_0x20be37);
        });
      });
    }
    ["get"](_0x140756) {
      return this.send.call(this.env, _0x140756);
    }
    ["post"](_0x32df03) {
      return this.send.call(this.env, _0x32df03, "POST");
    }
  }
  return new class {
    constructor(_0x3f21ec, _0x11403e) {
      this.name = _0x3f21ec;
      this.http = new _0x5d4fb2(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x11403e);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x5bc856, _0x143844 = null) {
      try {
        return JSON.parse(_0x5bc856);
      } catch {
        return _0x143844;
      }
    }
    ["toStr"](_0x2b421c, _0x52d36f = null) {
      try {
        return JSON.stringify(_0x2b421c);
      } catch {
        return _0x52d36f;
      }
    }
    ["getjson"](_0x257b60, _0xfb159e) {
      let _0x1a5ae3 = _0xfb159e;
      const _0xa7d6f0 = this.getdata(_0x257b60);
      if (_0xa7d6f0) try {
        _0x1a5ae3 = JSON.parse(this.getdata(_0x257b60));
      } catch {}
      return _0x1a5ae3;
    }
    ["setjson"](_0x3bc1ce, _0x46ab00) {
      try {
        return this.setdata(JSON.stringify(_0x3bc1ce), _0x46ab00);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0xe433dd) {
      return new Promise(_0x2e71dd => {
        this.get({
          "url": _0xe433dd
        }, (_0x2fddf2, _0x20cb26, _0x3271fd) => _0x2e71dd(_0x3271fd));
      });
    }
    ["runScript"](_0x5b307b, _0x51425e) {
      return new Promise(_0x17b13f => {
        let _0x45b72e = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x45b72e = _0x45b72e ? _0x45b72e.replace(/\n/g, "").trim() : _0x45b72e;
        let _0x37be8f = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x37be8f = _0x37be8f ? 1 * _0x37be8f : 20;
        _0x37be8f = _0x51425e && _0x51425e.timeout ? _0x51425e.timeout : _0x37be8f;
        const [_0x2dd4bb, _0x3fe56c] = _0x45b72e.split("@"),
          _0x2266c6 = {
            "url": "http://" + _0x3fe56c + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x5b307b,
              "mock_type": "cron",
              "timeout": _0x37be8f
            },
            "headers": {
              "X-Key": _0x2dd4bb,
              "Accept": "*/*"
            }
          };
        this.post(_0x2266c6, (_0x2c7a92, _0x4e78b5, _0x17d620) => _0x17b13f(_0x17d620));
      }).catch(_0x5e7507 => this.logErr(_0x5e7507));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4b992f = this.path.resolve(this.dataFile),
          _0x561612 = this.path.resolve(process.cwd(), this.dataFile),
          _0x2a72aa = this.fs.existsSync(_0x4b992f),
          _0x170a00 = !_0x2a72aa && this.fs.existsSync(_0x561612);
        if (!_0x2a72aa && !_0x170a00) return {};
        {
          const _0x2897a7 = _0x2a72aa ? _0x4b992f : _0x561612;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2897a7));
          } catch (_0x5f1c84) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xed6f2 = this.path.resolve(this.dataFile),
          _0x59ee51 = this.path.resolve(process.cwd(), this.dataFile),
          _0x26b047 = this.fs.existsSync(_0xed6f2),
          _0x1076b1 = !_0x26b047 && this.fs.existsSync(_0x59ee51),
          _0x163f24 = JSON.stringify(this.data);
        _0x26b047 ? this.fs.writeFileSync(_0xed6f2, _0x163f24) : _0x1076b1 ? this.fs.writeFileSync(_0x59ee51, _0x163f24) : this.fs.writeFileSync(_0xed6f2, _0x163f24);
      }
    }
    ["lodash_get"](_0x213103, _0x3af1aa, _0x558dc3) {
      const _0x2941b4 = _0x3af1aa.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x548815 = _0x213103;
      for (const _0x3051a3 of _0x2941b4) if (_0x548815 = Object(_0x548815)[_0x3051a3], void 0 === _0x548815) return _0x558dc3;
      return _0x548815;
    }
    ["lodash_set"](_0x50aa59, _0x470d5c, _0x55f549) {
      return Object(_0x50aa59) !== _0x50aa59 ? _0x50aa59 : (Array.isArray(_0x470d5c) || (_0x470d5c = _0x470d5c.toString().match(/[^.[\]]+/g) || []), _0x470d5c.slice(0, -1).reduce((_0x65b82d, _0x26f16b, _0x49ac02) => Object(_0x65b82d[_0x26f16b]) === _0x65b82d[_0x26f16b] ? _0x65b82d[_0x26f16b] : _0x65b82d[_0x26f16b] = Math.abs(_0x470d5c[_0x49ac02 + 1]) >> 0 == +_0x470d5c[_0x49ac02 + 1] ? [] : {}, _0x50aa59)[_0x470d5c[_0x470d5c.length - 1]] = _0x55f549, _0x50aa59);
    }
    ["getdata"](_0x21c14e) {
      let _0x20ef91 = this.getval(_0x21c14e);
      if (/^@/.test(_0x21c14e)) {
        const [, _0x32b023, _0x504db3] = /^@(.*?)\.(.*?)$/.exec(_0x21c14e),
          _0x44999d = _0x32b023 ? this.getval(_0x32b023) : "";
        if (_0x44999d) try {
          const _0x185f93 = JSON.parse(_0x44999d);
          _0x20ef91 = _0x185f93 ? this.lodash_get(_0x185f93, _0x504db3, "") : _0x20ef91;
        } catch (_0xe46a27) {
          _0x20ef91 = "";
        }
      }
      return _0x20ef91;
    }
    ["setdata"](_0x41016, _0x2bb9cd) {
      let _0x358528 = false;
      if (/^@/.test(_0x2bb9cd)) {
        const [, _0x1ab1b6, _0x2ab7e1] = /^@(.*?)\.(.*?)$/.exec(_0x2bb9cd),
          _0x474136 = this.getval(_0x1ab1b6),
          _0x8db019 = _0x1ab1b6 ? "null" === _0x474136 ? null : _0x474136 || "{}" : "{}";
        try {
          const _0x2b9688 = JSON.parse(_0x8db019);
          this.lodash_set(_0x2b9688, _0x2ab7e1, _0x41016);
          _0x358528 = this.setval(JSON.stringify(_0x2b9688), _0x1ab1b6);
        } catch (_0x26c975) {
          const _0x13adcf = {};
          this.lodash_set(_0x13adcf, _0x2ab7e1, _0x41016);
          _0x358528 = this.setval(JSON.stringify(_0x13adcf), _0x1ab1b6);
        }
      } else _0x358528 = this.setval(_0x41016, _0x2bb9cd);
      return _0x358528;
    }
    ["getval"](_0x218366) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x218366) : this.isQuanX() ? $prefs.valueForKey(_0x218366) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x218366]) : this.data && this.data[_0x218366] || null;
    }
    ["setval"](_0x1e6b93, _0x229f44) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x1e6b93, _0x229f44) : this.isQuanX() ? $prefs.setValueForKey(_0x1e6b93, _0x229f44) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x229f44] = _0x1e6b93, this.writedata(), !0) : this.data && this.data[_0x229f44] || null;
    }
    ["initGotEnv"](_0x3c9765) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x3c9765 && (_0x3c9765.headers = _0x3c9765.headers ? _0x3c9765.headers : {}, void 0 === _0x3c9765.headers.Cookie && void 0 === _0x3c9765.cookieJar && (_0x3c9765.cookieJar = this.ckjar));
    }
    ["get"](_0x6382c6, _0x5a56ce = () => {}) {
      _0x6382c6.headers && (delete _0x6382c6.headers["Content-Type"], delete _0x6382c6.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x6382c6.headers = _0x6382c6.headers || {}, Object.assign(_0x6382c6.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x6382c6, (_0x256f00, _0x36dbf4, _0x135c59) => {
        !_0x256f00 && _0x36dbf4 && (_0x36dbf4.body = _0x135c59, _0x36dbf4.statusCode = _0x36dbf4.status);
        _0x5a56ce(_0x256f00, _0x36dbf4, _0x135c59);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x6382c6.opts = _0x6382c6.opts || {}, Object.assign(_0x6382c6.opts, {
        "hints": !1
      })), $task.fetch(_0x6382c6).then(_0x25edb4 => {
        const {
          statusCode: _0x373732,
          statusCode: _0x396fd7,
          headers: _0x6d23d,
          body: _0x471873
        } = _0x25edb4;
        _0x5a56ce(null, {
          "status": _0x373732,
          "statusCode": _0x396fd7,
          "headers": _0x6d23d,
          "body": _0x471873
        }, _0x471873);
      }, _0xca1dcf => _0x5a56ce(_0xca1dcf))) : this.isNode() && (this.initGotEnv(_0x6382c6), this.got(_0x6382c6).on("redirect", (_0x364979, _0x554e90) => {
        try {
          if (_0x364979.headers["set-cookie"]) {
            const _0x368b6e = _0x364979.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x368b6e && this.ckjar.setCookieSync(_0x368b6e, null);
            _0x554e90.cookieJar = this.ckjar;
          }
        } catch (_0xe8453) {
          this.logErr(_0xe8453);
        }
      }).then(_0x2f9ec2 => {
        const {
          statusCode: _0x43e174,
          statusCode: _0xbf09eb,
          headers: _0xd42479,
          body: _0xd5b55
        } = _0x2f9ec2;
        _0x5a56ce(null, {
          "status": _0x43e174,
          "statusCode": _0xbf09eb,
          "headers": _0xd42479,
          "body": _0xd5b55
        }, _0xd5b55);
      }, _0xd50061 => {
        const {
          message: _0x2beb1e,
          response: _0x5595a1
        } = _0xd50061;
        _0x5a56ce(_0x2beb1e, _0x5595a1, _0x5595a1 && _0x5595a1.body);
      }));
    }
    ["post"](_0x5d7137, _0x1b2ca4 = () => {}) {
      if (_0x5d7137.body && _0x5d7137.headers && !_0x5d7137.headers["Content-Type"] && (_0x5d7137.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x5d7137.headers && delete _0x5d7137.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x5d7137.headers = _0x5d7137.headers || {}, Object.assign(_0x5d7137.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x5d7137, (_0x513c22, _0x319a4c, _0x327e05) => {
        !_0x513c22 && _0x319a4c && (_0x319a4c.body = _0x327e05, _0x319a4c.statusCode = _0x319a4c.status);
        _0x1b2ca4(_0x513c22, _0x319a4c, _0x327e05);
      });else {
        if (this.isQuanX()) _0x5d7137.method = "POST", this.isNeedRewrite && (_0x5d7137.opts = _0x5d7137.opts || {}, Object.assign(_0x5d7137.opts, {
          "hints": !1
        })), $task.fetch(_0x5d7137).then(_0x45b21f => {
          const {
            statusCode: _0x43c84f,
            statusCode: _0x37f988,
            headers: _0x17ceaf,
            body: _0x139ab8
          } = _0x45b21f;
          _0x1b2ca4(null, {
            "status": _0x43c84f,
            "statusCode": _0x37f988,
            "headers": _0x17ceaf,
            "body": _0x139ab8
          }, _0x139ab8);
        }, _0x1c8527 => _0x1b2ca4(_0x1c8527));else {
          if (this.isNode()) {
            this.initGotEnv(_0x5d7137);
            const {
              url: _0x55108c,
              ..._0x1cc606
            } = _0x5d7137;
            this.got.post(_0x55108c, _0x1cc606).then(_0x58de30 => {
              const {
                statusCode: _0x12ce94,
                statusCode: _0x19b274,
                headers: _0x45ab0e,
                body: _0x3a3c82
              } = _0x58de30;
              _0x1b2ca4(null, {
                "status": _0x12ce94,
                "statusCode": _0x19b274,
                "headers": _0x45ab0e,
                "body": _0x3a3c82
              }, _0x3a3c82);
            }, _0x3a5fbd => {
              const {
                message: _0x4a4ae6,
                response: _0x4b850e
              } = _0x3a5fbd;
              _0x1b2ca4(_0x4a4ae6, _0x4b850e, _0x4b850e && _0x4b850e.body);
            });
          }
        }
      }
    }
    ["time"](_0x25acc9, _0x330483 = null) {
      const _0x130222 = _0x330483 ? new Date(_0x330483) : new Date();
      let _0x2fbbca = {
        "M+": _0x130222.getMonth() + 1,
        "d+": _0x130222.getDate(),
        "H+": _0x130222.getHours(),
        "m+": _0x130222.getMinutes(),
        "s+": _0x130222.getSeconds(),
        "q+": Math.floor((_0x130222.getMonth() + 3) / 3),
        "S": _0x130222.getMilliseconds()
      };
      /(y+)/.test(_0x25acc9) && (_0x25acc9 = _0x25acc9.replace(RegExp.$1, (_0x130222.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2a8a32 in _0x2fbbca) new RegExp("(" + _0x2a8a32 + ")").test(_0x25acc9) && (_0x25acc9 = _0x25acc9.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2fbbca[_0x2a8a32] : ("00" + _0x2fbbca[_0x2a8a32]).substr(("" + _0x2fbbca[_0x2a8a32]).length)));
      return _0x25acc9;
    }
    ["msg"](_0x1d34e2 = _0x27b440, _0x4d15d2 = "", _0x47f5d7 = "", _0x110418) {
      const _0x4a9358 = _0x578bb7 => {
        if (!_0x578bb7) return _0x578bb7;
        if ("string" == typeof _0x578bb7) return this.isLoon() ? _0x578bb7 : this.isQuanX() ? {
          "open-url": _0x578bb7
        } : this.isSurge() ? {
          "url": _0x578bb7
        } : void 0;
        if ("object" == typeof _0x578bb7) {
          if (this.isLoon()) {
            let _0x52d8c4 = _0x578bb7.openUrl || _0x578bb7.url || _0x578bb7["open-url"],
              _0x1a8616 = _0x578bb7.mediaUrl || _0x578bb7["media-url"];
            return {
              "openUrl": _0x52d8c4,
              "mediaUrl": _0x1a8616
            };
          }
          if (this.isQuanX()) {
            let _0x4806c7 = _0x578bb7["open-url"] || _0x578bb7.url || _0x578bb7.openUrl,
              _0x3953ec = _0x578bb7["media-url"] || _0x578bb7.mediaUrl;
            return {
              "open-url": _0x4806c7,
              "media-url": _0x3953ec
            };
          }
          if (this.isSurge()) {
            let _0x318df7 = _0x578bb7.url || _0x578bb7.openUrl || _0x578bb7["open-url"];
            return {
              "url": _0x318df7
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1d34e2, _0x4d15d2, _0x47f5d7, _0x4a9358(_0x110418)) : this.isQuanX() && $notify(_0x1d34e2, _0x4d15d2, _0x47f5d7, _0x4a9358(_0x110418))), !this.isMuteLog) {
        let _0xcf7862 = ["", "==============📣系统通知📣=============="];
        _0xcf7862.push(_0x1d34e2);
        _0x4d15d2 && _0xcf7862.push(_0x4d15d2);
        _0x47f5d7 && _0xcf7862.push(_0x47f5d7);
        console.log(_0xcf7862.join("\n"));
        this.logs = this.logs.concat(_0xcf7862);
      }
    }
    ["log"](..._0x59fdf0) {
      _0x59fdf0.length > 0 && (this.logs = [...this.logs, ..._0x59fdf0]);
      console.log(_0x59fdf0.join(this.logSeparator));
    }
    ["logErr"](_0x12afea, _0x4f992c) {
      const _0x555b32 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x555b32 ? this.log("", "❗️" + this.name + ", 错误!", _0x12afea.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x12afea);
    }
    ["wait"](_0x2d9219) {
      return new Promise(_0x322423 => setTimeout(_0x322423, _0x2d9219));
    }
    ["done"](_0x21fd01 = {}) {
      const _0x4aa4ba = new Date().getTime(),
        _0x2ebbcb = (_0x4aa4ba - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2ebbcb + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x21fd01);
    }
  }(_0x27b440, _0xf5f716);
}
function _0x5eb5f0(_0x4636b7) {
  function _0x4c40a6(_0x349ed4) {
    if (typeof _0x349ed4 === "string") return function (_0x5bab4f) {}.constructor("while (true) {}").apply("counter");else {
      if (("" + _0x349ed4 / _0x349ed4).length !== 1 || _0x349ed4 % 20 === 0) (function () {
        return true;
      }).constructor("debugger").call("action");else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x4c40a6(++_0x349ed4);
  }
  try {
    if (_0x4636b7) return _0x4c40a6;else {
      _0x4c40a6(0);
    }
  } catch (_0x47d5d6) {}
}