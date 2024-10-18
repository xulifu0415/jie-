//Fri Oct 18 2024 13:26:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("青碳行");
let qtx_deviceCoding = ($.isNode() ? process.env.qtx_deviceCoding : $.getdata("qtx_deviceCoding")) || "",
  qtx_token = ($.isNode() ? process.env.qtx_token : $.getdata("qtx_token")) || "";
const axios = require("axios"),
  {
    exec
  } = require("child_process"),
  {
    count
  } = require("console"),
  {
    captureRejectionSymbol
  } = require("events"),
  {
    config
  } = require("process");
let httpresult, result;
function sleep(_0x478d18) {
  var _0x137e55 = new Date().getTime();
  while (new Date().getTime() - _0x137e55 < _0x478d18) {
    continue;
  }
}
function popu(_0x1b851f, _0x278133, _0x52b83d, _0x46644c) {
  const _0x4b9875 = {
    token: _0x52b83d,
    channel: "qtx",
    "Content-Type": "application/json; charset=utf-8",
    Host: "carbon.lcago.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.0"
  };
  const _0x27723b = {
    method: _0x1b851f,
    url: _0x278133,
    headers: _0x4b9875,
    data: _0x46644c
  };
  return _0x27723b;
}
function popu2(_0x4af30a, _0x57e73f, _0x187633, _0xabb59f) {
  const _0x59b2ca = {
    Host: "carbon.lcago.cn",
    Connection: "keep-alive",
    Accept: "application/json, text/plain, */*",
    channel: "qtx",
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; Mi 10 Pro Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36;app/qtx",
    token: _0x187633,
    "Content-Type": "application/json",
    Origin: "https://carboncdn.lcago.cn",
    "X-Requested-With": "com.platform.carbon",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    Referer: "https://carboncdn.lcago.cn/",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
  };
  const _0xf43928 = {
    method: _0x4af30a,
    url: _0x57e73f,
    headers: _0x59b2ca,
    data: _0xabb59f
  };
  return _0xf43928;
}
async function fetchData(_0x482d89) {
  return axios(_0x482d89).then(_0x27c666 => {
    if (_0x27c666.data) {
      if (typeof _0x27c666.data == "object") {
        httpresult = _0x27c666.data;
      } else {
        try {
          httpresult = JSON.parse(_0x27c666.data);
        } catch (_0x3afb75) {
          httpresult = _0x27c666.data;
          console.log(_0x27c666.data);
        }
      }
    }
    return _0x27c666.data;
  }).catch(_0x2a356c => {
    throw new Error(_0x2a356c);
  });
}
async function qun() {
  try {
    let _0x396e6a = "https://gitee.com/sillydayyoutiao/qun/raw/master/qun";
    const _0x36e8eb = await axios.get(_0x396e6a),
      _0x326ad6 = _0x36e8eb.data;
    console.log("项目投稿进群" + _0x326ad6 + "找群主，没事可以进群吹吹水");
  } catch (_0x22d067) {
    console.error("发生错误:", _0x22d067);
  }
}
function getCurrentDate() {
  const _0x1a0a8f = new Date(),
    _0x428ce0 = _0x1a0a8f.getFullYear();
  const _0x58dedc = String(_0x1a0a8f.getMonth() + 1).padStart(2, "0");
  const _0x32ab20 = String(_0x1a0a8f.getDate()).padStart(2, "0");
  return _0x428ce0 + "-" + _0x58dedc + "-" + _0x32ab20;
}
async function login(_0x4719f2, _0xaac43e) {
  console.log("开始签到");
  let _0x12e2e9 = "https://carbon.lcago.cn/signIn/v2/sign";
  const _0x163396 = getCurrentDate();
  let _0x422643 = {
      signDate: _0x163396,
      signType: 0
    },
    _0x560a1e = popu2("post", _0x12e2e9, _0x4719f2, _0x422643);
  await fetchData(_0x560a1e);
  result = httpresult;
  console.log(result.respmsg);
  sleep(3000);
  _0x12e2e9 = "https://carbon.lcago.cn/community/requestQuestion";
  const _0x466480 = {
    token: _0x4719f2,
    deviceCoding: _0xaac43e,
    taskId: "EHD8472JSDS",
    channel: "qtx"
  };
  _0x422643 = _0x466480;
  _0x560a1e = popu2("post", _0x12e2e9, _0x4719f2, _0x422643);
  await fetchData(_0x560a1e);
  result = httpresult;
  if (result.respcod == "01") {
    let _0x464d45 = result.data.dataList.length,
      _0x5b87a5 = result.data.dataList;
    for (let _0x1681d3 = 0; _0x1681d3 < _0x464d45; _0x1681d3++) {
      let _0x158ad8 = _0x5b87a5[_0x1681d3].id,
        _0x3e87e0 = _0x5b87a5[_0x1681d3].answer;
      await task(_0x4719f2, _0xaac43e, _0x158ad8, _0x3e87e0);
      sleep(4000);
    }
  }
  console.log("开始分享");
  _0x12e2e9 = "https://carbon.lcago.cn/community/share/accomplish";
  const _0x3df480 = {
    token: _0x4719f2,
    deviceCoding: _0xaac43e,
    taskId: "SHARE001"
  };
  _0x422643 = _0x3df480;
  _0x560a1e = popu("post", _0x12e2e9, _0x4719f2, _0x422643);
  await fetchData(_0x560a1e);
  result = httpresult;
  console.log(result.respmsg);
  _0x12e2e9 = "https://carbon.lcago.cn/interact/data";
  const _0x97492c = {
    token: _0x4719f2,
    platform: "android",
    model: "Mi10Pro",
    appChannel: "qtx",
    version: "2.0.0_VersionCode_200",
    deviceCoding: _0xaac43e,
    language: "ZH",
    systemversion: "12"
  };
  _0x422643 = _0x97492c;
  _0x560a1e = popu("post", _0x12e2e9, _0x4719f2, _0x422643);
  await fetchData(_0x560a1e);
  result = httpresult;
  if (result.respcod == "01") {
    console.log(result.data.nickName, "你拥有的能量为", result.data.energyBalance);
    let _0x2cc2c8 = result.data.dataList.length,
      _0x3ab1a3 = result.data.dataList;
    for (let _0x31a963 = 0; _0x31a963 < _0x2cc2c8; _0x31a963++) {
      let _0x143cf8 = _0x3ab1a3[_0x31a963].id,
        _0x1b30d6 = _0x3ab1a3[_0x31a963].scene;
      sleep(2000);
      await collect(_0x4719f2, _0xaac43e, _0x143cf8, _0x1b30d6);
    }
  } else {
    console.log(result);
  }
}
async function collect(_0x5494a6, _0x5e6bdb, _0x4af5f0, _0x355764) {
  let _0x4bd9fc = {
      token: _0x5494a6,
      platform: "android",
      model: "Mi10Pro",
      appChannel: "qtx",
      version: "2.0.0_VersionCode_200",
      deviceCoding: _0x5e6bdb,
      language: "ZH",
      systemversion: "12",
      id: _0x4af5f0,
      type: "02",
      scene: _0x355764
    },
    _0x5d8732 = "https://carbon.lcago.cn/interact/collect",
    _0x1b3e39 = popu("post", _0x5d8732, _0x5494a6, _0x4bd9fc);
  await fetchData(_0x1b3e39);
  result = httpresult;
  console.log(result.respmsg);
}
async function task(_0x33ed28, _0x510cde, _0x3b1b9f, _0x47869f) {
  let _0x187165 = "https://carbon.lcago.cn/community/answerQuestion";
  let _0x578cd8 = {
      token: _0x33ed28,
      deviceCoding: _0x510cde,
      questionId: _0x3b1b9f,
      answer: _0x47869f
    },
    _0x3e8e0e = popu2("post", _0x187165, _0x33ed28, _0x578cd8);
  await fetchData(_0x3e8e0e);
  result = httpresult;
  console.log(result);
}
(async function () {
  await qun();
  sleep(1000);
  console.log("开始检测环境变量");
  if (qtx_token) {
    console.log("找到环境变量");
    let _0x488900 = qtx_token.split("@"),
      _0x3658bf = qtx_deviceCoding.split("@");
    for (let _0x3e72a9 = 0; _0x3e72a9 < _0x488900.length; _0x3e72a9++) {
      try {
        await login(_0x488900[_0x3e72a9], _0x3658bf[_0x3e72a9]);
        sleep(2000);
      } catch (_0x4bf58f) {
        console.error(_0x4bf58f);
      }
    }
    process.exit();
  }
})();
function Env(_0x11f88a, _0x32bf58) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x5e77e8, _0x3e6287) {
      this.name = _0x5e77e8;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3e6287);
      console.log("🔔 " + this.name + " 开始运行：\n");
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
    getdata(_0x24c343) {
      let _0x1e7140 = this.getval(_0x24c343);
      if (/^@/.test(_0x24c343)) {
        let [, _0x46d952, _0x5a4af1] = /^@(.*?)\.(.*?)$/.exec(_0x24c343),
          _0x2e6ef6 = _0x46d952 ? this.getval(_0x46d952) : "";
        if (_0x2e6ef6) {
          try {
            let _0x51c809 = JSON.parse(_0x2e6ef6);
            _0x1e7140 = _0x51c809 ? this.lodash_get(_0x51c809, _0x5a4af1, "") : _0x1e7140;
          } catch (_0x44dee1) {
            _0x1e7140 = "";
          }
        }
      }
      return _0x1e7140;
    }
    setdata(_0x19cdea, _0x3e2805) {
      let _0x30a34c = !1;
      if (/^@/.test(_0x3e2805)) {
        let [, _0x2723ae, _0x187c48] = /^@(.*?)\.(.*?)$/.exec(_0x3e2805),
          _0x200f9a = this.getval(_0x2723ae),
          _0x436819 = _0x2723ae ? "null" === _0x200f9a ? null : _0x200f9a || "{}" : "{}";
        try {
          let _0x258ff7 = JSON.parse(_0x436819);
          this.lodash_set(_0x258ff7, _0x187c48, _0x19cdea);
          _0x30a34c = this.setval(JSON.stringify(_0x258ff7), _0x2723ae);
        } catch (_0x6d2faa) {
          let _0x232e7a = {};
          this.lodash_set(_0x232e7a, _0x187c48, _0x19cdea);
          _0x30a34c = this.setval(JSON.stringify(_0x232e7a), _0x2723ae);
        }
      } else {
        _0x30a34c = this.setval(_0x19cdea, _0x3e2805);
      }
      return _0x30a34c;
    }
    getval(_0x117c3f) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x117c3f) : this.isQuanX() ? $prefs.valueForKey(_0x117c3f) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x117c3f]) : this.data && this.data[_0x117c3f] || null;
    }
    setval(_0x15b1bc, _0x1fb02d) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x15b1bc, _0x1fb02d) : this.isQuanX() ? $prefs.setValueForKey(_0x15b1bc, _0x1fb02d) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1fb02d] = _0x15b1bc, this.writedata(), !0) : this.data && this.data[_0x1fb02d] || null;
    }
    send(_0x47cb3a, _0x10787e, _0x71e8f2 = () => {}) {
      if ("get" != _0x47cb3a && "post" != _0x47cb3a && "put" != _0x47cb3a && "delete" != _0x47cb3a) {
        console.log("无效的http方法：" + _0x47cb3a);
        return;
      }
      const _0x36db1b = {
        hints: !1
      };
      if ("get" == _0x47cb3a && _0x10787e.headers ? (delete _0x10787e.headers["Content-Type"], delete _0x10787e.headers["Content-Length"]) : _0x10787e.body && _0x10787e.headers && (_0x10787e.headers["Content-Type"] || (_0x10787e.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon()) {
        const _0x50f9ac = {
          "X-Surge-Skip-Scripting": !1
        };
        this.isSurge() && this.isNeedRewrite && (_0x10787e.headers = _0x10787e.headers || {}, Object.assign(_0x10787e.headers, _0x50f9ac));
        let _0x174d63 = {
          method: _0x47cb3a,
          url: _0x10787e.url,
          headers: _0x10787e.headers,
          timeout: _0x10787e.timeout,
          data: _0x10787e.body
        };
        "get" == _0x47cb3a && delete _0x174d63.data;
        $axios(_0x174d63).then(_0x37499e => {
          let {
            status: _0x7db721,
            request: _0x41f8ad,
            headers: _0x541356,
            data: _0x1f3143
          } = _0x37499e;
          const _0x55b48d = {
            statusCode: _0x7db721,
            headers: _0x541356,
            body: _0x1f3143
          };
          _0x71e8f2(null, _0x41f8ad, _0x55b48d);
        }).catch(_0x2a7122 => console.log(_0x2a7122));
      } else {
        if (this.isQuanX()) {
          _0x10787e.method = _0x47cb3a.toUpperCase();
          this.isNeedRewrite && (_0x10787e.opts = _0x10787e.opts || {}, Object.assign(_0x10787e.opts, _0x36db1b));
          $task.fetch(_0x10787e).then(_0x59f16b => {
            let {
              statusCode: _0x43e9f8,
              request: _0x52da24,
              headers: _0xe2ed98,
              body: _0x2c2873
            } = _0x59f16b;
            const _0x2a9c00 = {
              statusCode: _0x43e9f8,
              headers: _0xe2ed98,
              body: _0x2c2873
            };
            _0x71e8f2(null, _0x52da24, _0x2a9c00);
          }, _0x494d0c => _0x71e8f2(_0x494d0c));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            let {
              url: _0x5bc08c,
              ..._0x38d43b
            } = _0x10787e;
            const _0x54a65d = {
              followRedirect: !1
            };
            this.instance = this.got.extend(_0x54a65d);
            this.instance[_0x47cb3a](_0x5bc08c, _0x38d43b).then(_0x2f556d => {
              let {
                statusCode: _0x492bd7,
                request: _0x107e45,
                headers: _0x42d2ff,
                body: _0x1f28c3
              } = _0x2f556d;
              const _0x450a68 = {
                statusCode: _0x492bd7,
                headers: _0x42d2ff,
                body: _0x1f28c3
              };
              _0x71e8f2(null, _0x107e45, _0x450a68);
            }, _0x3fe051 => {
              let {
                message: _0x323726,
                response: _0x3a7a0b
              } = _0x3fe051;
              _0x71e8f2(_0x323726, _0x3a7a0b, _0x3a7a0b && _0x3a7a0b.body);
            });
          }
        }
      }
    }
    time(_0x17077c) {
      let _0xee933e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      for (let _0x1bff4c in /(y+)/.test(_0x17077c) && (_0x17077c = _0x17077c.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))), _0xee933e) new RegExp("(" + _0x1bff4c + ")").test(_0x17077c) && (_0x17077c = _0x17077c.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xee933e[_0x1bff4c] : ("00" + _0xee933e[_0x1bff4c]).substr(("" + _0xee933e[_0x1bff4c]).length)));
      return _0x17077c;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x365801 = this.name + " 运行通知\n\n" + this.notifyStr;
      if ($.isNode()) {
        var _0x19d6d7 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x19d6d7.sendNotify(this.name, _0x365801);
      } else {
        this.msg(_0x365801);
      }
    }
    logAndNotify(_0x532671) {
      console.log(_0x532671);
      this.notifyStr += _0x532671;
      this.notifyStr += "\n";
    }
    msg(_0x42912c = t, _0x15d460 = "", _0x362f18 = "", _0x554039) {
      let _0x171f56 = _0x1ab9ed => {
        if (!_0x1ab9ed) {
          return _0x1ab9ed;
        }
        if ("string" == typeof _0x1ab9ed) {
          return this.isLoon() ? _0x1ab9ed : this.isQuanX() ? {
            "open-url": _0x1ab9ed
          } : this.isSurge() ? {
            url: _0x1ab9ed
          } : void 0;
        }
        if ("object" == typeof _0x1ab9ed) {
          if (this.isLoon()) {
            let _0x56d7c9 = _0x1ab9ed.openUrl || _0x1ab9ed.url || _0x1ab9ed["open-url"],
              _0x59cf56 = _0x1ab9ed.mediaUrl || _0x1ab9ed["media-url"];
            const _0x559733 = {
              openUrl: _0x56d7c9,
              mediaUrl: _0x59cf56
            };
            return _0x559733;
          }
          if (this.isQuanX()) {
            let _0x475cd9 = _0x1ab9ed["open-url"] || _0x1ab9ed.url || _0x1ab9ed.openUrl,
              _0x545165 = _0x1ab9ed["media-url"] || _0x1ab9ed.mediaUrl;
            const _0xff8a48 = {
              "open-url": _0x475cd9,
              "media-url": _0x545165
            };
            return _0xff8a48;
          }
          const _0x58e642 = {
            url: _0x1ab9ed.url || _0x1ab9ed.openUrl || _0x1ab9ed["open-url"]
          };
          if (this.isSurge()) {
            return _0x58e642;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x42912c, _0x15d460, _0x362f18, _0x171f56(_0x554039)) : this.isQuanX() && $notify(_0x42912c, _0x15d460, _0x362f18, _0x171f56(_0x554039)));
      let _0x19e13b = ["", "============== 系统通知 =============="];
      _0x19e13b.push(_0x42912c);
      _0x15d460 && _0x19e13b.push(_0x15d460);
      _0x362f18 && _0x19e13b.push(_0x362f18);
      console.log(_0x19e13b.join("\n"));
    }
    getMin(_0x393fb3, _0x425ca6) {
      return _0x393fb3 < _0x425ca6 ? _0x393fb3 : _0x425ca6;
    }
    getMax(_0x56fcf3, _0x3a3b93) {
      return _0x56fcf3 < _0x3a3b93 ? _0x3a3b93 : _0x56fcf3;
    }
    padStr(_0x272151, _0x554c14, _0x15074e = "0") {
      let _0x21e7d4 = String(_0x272151),
        _0x2ced7f = _0x554c14 > _0x21e7d4.length ? _0x554c14 - _0x21e7d4.length : 0,
        _0x1825c1 = "";
      for (let _0x19e2fc = 0; _0x19e2fc < _0x2ced7f; _0x19e2fc++) {
        _0x1825c1 += _0x15074e;
      }
      return _0x1825c1 + _0x21e7d4;
    }
    json2str(_0x3cc14f, _0x8ba680, _0x192600 = !1) {
      let _0xb4ce04 = [];
      for (let _0x48ade1 of Object.keys(_0x3cc14f).sort()) {
        let _0x22bfc1 = _0x3cc14f[_0x48ade1];
        _0x22bfc1 && _0x192600 && (_0x22bfc1 = encodeURIComponent(_0x22bfc1));
        _0xb4ce04.push(_0x48ade1 + "=" + _0x22bfc1);
      }
      return _0xb4ce04.join(_0x8ba680);
    }
    str2json(_0x10f328, _0x1bab36 = !1) {
      let _0xcff2e1 = {};
      for (let _0x147a3e of _0x10f328.split("#")) {
        if (!_0x147a3e) {
          continue;
        }
        let _0x2b7a17 = _0x147a3e.indexOf("=");
        if (-1 == _0x2b7a17) {
          continue;
        }
        let _0x3d1c86 = _0x147a3e.substr(0, _0x2b7a17),
          _0x149726 = _0x147a3e.substr(_0x2b7a17 + 1);
        _0x1bab36 && (_0x149726 = decodeURIComponent(_0x149726));
        _0xcff2e1[_0x3d1c86] = _0x149726;
      }
      return _0xcff2e1;
    }
    randomString(_0x2e57ba, _0xf08bf5 = "abcdef0123456789") {
      let _0x2a372b = "";
      for (let _0x34cbd0 = 0; _0x34cbd0 < _0x2e57ba; _0x34cbd0++) {
        _0x2a372b += _0xf08bf5.charAt(Math.floor(Math.random() * _0xf08bf5.length));
      }
      return _0x2a372b;
    }
    randomList(_0x566913) {
      let _0x434a0a = Math.floor(Math.random() * _0x566913.length);
      return _0x566913[_0x434a0a];
    }
    wait(_0x1db8ee) {
      return new Promise(_0x510ece => setTimeout(_0x510ece, _0x1db8ee));
    }
    done(_0x55cfcc = {}) {
      let _0x58af14 = new Date().getTime(),
        _0x5c08fb = (_0x58af14 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x5c08fb + " 秒！");
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x55cfcc);
    }
  }(_0x11f88a, _0x32bf58);
}