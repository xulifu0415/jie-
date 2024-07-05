//Fri Jul 05 2024 02:52:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("周到上海");
let login_id = ($.isNode() ? process.env.shzd_login_id : $.getdata("shzd_login_id")) || "",
  user_id = ($.isNode() ? process.env.shzd_user_id : $.getdata("shzd_user_id")) || "";
const axios = require("axios");
const crypto = require("crypto"),
  CryptoJS = require("crypto-js"),
  {
    exec
  } = require("child_process");
const {
  count
} = require("console");
let httpresult, result;
function sleep(_0x177c0f) {
  var _0x296ea6 = new Date().getTime();
  while (new Date().getTime() - _0x296ea6 < _0x177c0f) {
    continue;
  }
}
function popu(_0x32bec2, _0x24121b) {
  const _0x1aa790 = {
    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 12; Mi 10 Pro Build/SKQ1.211006.001)",
    Host: "shop.zhoudaosh.com",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  const _0x5d3943 = {
    method: _0x32bec2,
    url: _0x24121b,
    headers: _0x1aa790
  };
  return _0x5d3943;
}
function popu2(_0x235b85, _0x212426, _0x53ddc5) {
  const _0x2946ed = {
    "Content-Type": "application/json; charset=utf-8",
    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 12; Mi 10 Pro Build/SKQ1.211006.001)",
    Host: "shop.zhoudaosh.com",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  const _0x1f7cec = {
    method: _0x235b85,
    url: _0x212426,
    headers: _0x2946ed,
    data: _0x53ddc5
  };
  return _0x1f7cec;
}
function popu3(_0x373924, _0x40e823) {
  const _0x1fc443 = {
    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 12; Mi 10 Pro Build/SKQ1.211006.001)",
    Host: "api.zhoudaosh.com",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  const _0x1ad50a = {
    method: _0x373924,
    url: _0x40e823,
    headers: _0x1fc443
  };
  return _0x1ad50a;
}
async function fetchData(_0x30e762) {
  return axios(_0x30e762).then(_0x53db03 => {
    if (_0x53db03.data) {
      if (typeof _0x53db03.data == "object") {
        httpresult = _0x53db03.data;
      } else {
        try {
          httpresult = JSON.parse(_0x53db03.data);
        } catch (_0x472785) {
          httpresult = _0x53db03.data;
          console.log(_0x53db03.data);
        }
      }
    }
    return _0x53db03.data;
  }).catch(_0x5d17c7 => {
    throw new Error(_0x5d17c7);
  });
}
function aes(_0x32e953, _0x11351c) {
  const _0x2ab6a0 = "1234567812345678",
    _0x28dc67 = "1234567812345678",
    _0x5986b0 = CryptoJS.enc.Utf8.parse(_0x2ab6a0),
    _0x1e869d = CryptoJS.enc.Utf8.parse(_0x28dc67);
  if (_0x11351c == 1) {
    const _0x19d585 = CryptoJS.AES.encrypt(_0x32e953, _0x5986b0, {
      iv: _0x1e869d,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    let _0x352469 = _0x19d585.toString();
    return _0x352469;
  } else {
    const _0x3296fe = CryptoJS.enc.Base64.parse(_0x32e953),
      _0x4d1101 = {
        ciphertext: _0x3296fe
      };
    const _0xb0030f = CryptoJS.AES.decrypt(_0x4d1101, _0x5986b0, {
        iv: _0x1e869d,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }),
      _0x660fda = _0xb0030f.toString(CryptoJS.enc.Utf8);
    return _0x660fda;
  }
}
function rsa() {
  const _0x3ee4eb = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJNi2fz4NH1t1cx9Hzp7jwTaTXj90bRymJ6DUR8h1Qr6lViP1nBTzz/lgTt4qqwqFWQujsj443gCUsuthoaty70t6TU8eO+7wS3oV0/SdCYE/gvUJquloOpj+f3GZCqRBGqWCKhrE/cXhpUFg1O9JdfYVcP9vi0ytwSJCN/hYGcwIDAQAB",
    _0x173138 = crypto.createPublicKey({
      key: Buffer.from(_0x3ee4eb, "base64"),
      format: "der",
      type: "spki"
    }),
    _0x575087 = "1234567812345678",
    _0x1f60d7 = crypto.publicEncrypt({
      key: _0x173138,
      padding: crypto.constants.RSA_PKCS1_PADDING
    }, Buffer.from(_0x575087));
  return _0x1f60d7.toString("base64");
}
async function login(_0x245918, _0x18de85) {
  let _0x3ca869 = "http://shop.zhoudaosh.com/index.php/Web/Credit/signinstatus?user_id=" + _0x245918;
  let _0x2dadc9 = popu("get", _0x3ca869);
  await fetchData(_0x2dadc9);
  result = httpresult;
  console.log(result.msg);
  if (result.signined == "0") {
    _0x3ca869 = "http://shop.zhoudaosh.com/index.php/Web/Credit/signin_v2";
    let _0x2be8de = "{\"user_id\":\"" + _0x245918 + "\"}",
      _0x56d8e1 = aes(_0x2be8de, 1),
      _0x490d9d = rsa(),
      _0x3f6a03 = "{\"data\":\"" + _0x56d8e1 + "\",\"sign\":\"" + _0x490d9d + "\"}",
      _0x56f9e4 = popu2("post", _0x3ca869, _0x3f6a03);
    await fetchData(_0x56f9e4);
    result = httpresult;
    result = aes(result.data, 0);
    result = JSON.parse(result);
    console.log(result.msg);
  }
  _0x3ca869 = "https://api.zhoudaosh.com/apiv3.php?a=User&center=1&UserId=" + _0x245918 + "&LoginId=" + _0x18de85;
  _0x2dadc9 = popu3("get", _0x3ca869);
  await fetchData(_0x2dadc9);
  result = httpresult;
  console.log("你拥有的晨豆数量为", result.data.TotalPoints);
}
async function task(_0x69df55, _0x15dd2f) {
  console.log("开始遍历任务列表");
  let _0x427159 = "http://shop.zhoudaosh.com/index.php/Web/Credit/myscoreinfoex_v2?user_id=" + _0x69df55,
    _0x3d5eb5 = popu("get", _0x427159);
  await fetchData(_0x3d5eb5);
  result = httpresult;
  let _0xece783 = result.result.today_task["23"],
    _0x129063 = result.result.today_task["10"];
  _0x427159 = "https://api.zhoudaosh.com/apiv5.php?a=Home&ver=message3&LoginId=" + _0x15dd2f + "&UserId=" + _0x69df55 + "&pageidx=0&recpageidx=0";
  _0x3d5eb5 = popu3("get", _0x427159);
  await fetchData(_0x3d5eb5);
  result = httpresult;
  result = JSON.stringify(result);
  list = [];
  const _0x2caad4 = /"ContentId":\s*"(.*?)"/g;
  let _0x40dd7b;
  while ((_0x40dd7b = _0x2caad4.exec(result)) !== null) {
    const _0x56a86a = _0x40dd7b[1];
    list.push(_0x56a86a);
  }
  if (_0xece783 != 20) {
    console.log("开始执行阅读任务");
    for (let _0x234cd3 = 0; _0x234cd3 < (20 - _0xece783) / 2; _0x234cd3 = _0x234cd3 + 1) {
      _0x427159 = "http://shop.zhoudaosh.com/index.php/Web/Credit/addscoreex_v2";
      let _0x7ecc01 = "{\"user_id\":\"" + _0x69df55 + "\",\"cid\":\"" + list[_0x234cd3] + "\",\"scoretype\":23}",
        _0x483600 = aes(_0x7ecc01, 1),
        _0x2293d6 = rsa(),
        _0x568fa5 = "{\"data\":\"" + _0x483600 + "\",\"sign\":\"" + _0x2293d6 + "\"}",
        _0x3c9dd8 = popu2("post", _0x427159, _0x568fa5);
      await fetchData(_0x3c9dd8);
      result = httpresult;
      result = aes(result.data, 0);
      result = JSON.parse(result);
      console.log(result.msg);
      sleep(3000);
    }
  } else {
    console.log("今日阅读任务已完成，请自行检查，不排除出bug");
  }
  if (_0x129063 != 10) {
    console.log("开始执行分享任务");
    for (let _0x1aab9e = 0; _0x1aab9e < (10 - _0x129063) / 2; _0x1aab9e = _0x1aab9e + 1) {
      _0x427159 = "http://shop.zhoudaosh.com/index.php/Web/Credit/addscoreex_v2";
      let _0x538220 = "{\"user_id\":\"" + _0x69df55 + "\",\"cid\":\"" + list[_0x1aab9e] + "\",\"scoretype\":10}",
        _0x5c415d = aes(_0x538220, 1),
        _0x28f6fe = rsa(),
        _0x35748b = "{\"data\":\"" + _0x5c415d + "\",\"sign\":\"" + _0x28f6fe + "\"}",
        _0x596391 = popu2("post", _0x427159, _0x35748b);
      await fetchData(_0x596391);
      result = httpresult;
      result = aes(result.data, 0);
      result = JSON.parse(result);
      console.log(result.msg);
      sleep(3000);
    }
  } else {
    console.log("今日分享任务已完成，请自行检查，不排除出bug");
  }
}
(async function () {
  console.log("脚本由社畜打银群的油条编写，有事可以进群571540409找群主，没事可以进群吹吹水");
  sleep(1000);
  console.log("开始检测环境变量");
  if (user_id) {
    console.log("找到环境变量");
    let _0x41c646 = user_id.split("@"),
      _0x28b31a = login_id.split("@");
    for (let _0x5b4c23 = 0; _0x5b4c23 < _0x41c646.length; _0x5b4c23++) {
      try {
        await login(_0x41c646[_0x5b4c23], _0x28b31a[_0x5b4c23]);
        sleep(2000);
        await task(_0x41c646[_0x5b4c23], _0x28b31a[_0x5b4c23]);
        sleep(2000);
        await login(_0x41c646[_0x5b4c23], _0x28b31a[_0x5b4c23]);
      } catch (_0xfa59de) {
        console.error(_0xfa59de);
      }
    }
    process.exit();
  }
})();
function Env(_0x165dd1, _0x18be2b) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x4b58ab, _0x12bc03) {
      this.name = _0x4b58ab;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x12bc03);
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
    getdata(_0x5a5b92) {
      let _0x5db94b = this.getval(_0x5a5b92);
      if (/^@/.test(_0x5a5b92)) {
        let [, _0x2696c4, _0x2ca88c] = /^@(.*?)\.(.*?)$/.exec(_0x5a5b92),
          _0x64fb91 = _0x2696c4 ? this.getval(_0x2696c4) : "";
        if (_0x64fb91) {
          try {
            let _0x1e0a1a = JSON.parse(_0x64fb91);
            _0x5db94b = _0x1e0a1a ? this.lodash_get(_0x1e0a1a, _0x2ca88c, "") : _0x5db94b;
          } catch (_0x625de) {
            _0x5db94b = "";
          }
        }
      }
      return _0x5db94b;
    }
    setdata(_0x4b1f8d, _0x3368d6) {
      let _0x2382d3 = !1;
      if (/^@/.test(_0x3368d6)) {
        let [, _0x957ea0, _0x1cfe39] = /^@(.*?)\.(.*?)$/.exec(_0x3368d6),
          _0x5230ac = this.getval(_0x957ea0),
          _0x3de2e3 = _0x957ea0 ? "null" === _0x5230ac ? null : _0x5230ac || "{}" : "{}";
        try {
          let _0x45bf04 = JSON.parse(_0x3de2e3);
          this.lodash_set(_0x45bf04, _0x1cfe39, _0x4b1f8d);
          _0x2382d3 = this.setval(JSON.stringify(_0x45bf04), _0x957ea0);
        } catch (_0x32d248) {
          let _0x2ad035 = {};
          this.lodash_set(_0x2ad035, _0x1cfe39, _0x4b1f8d);
          _0x2382d3 = this.setval(JSON.stringify(_0x2ad035), _0x957ea0);
        }
      } else {
        _0x2382d3 = this.setval(_0x4b1f8d, _0x3368d6);
      }
      return _0x2382d3;
    }
    getval(_0x1a117d) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1a117d) : this.isQuanX() ? $prefs.valueForKey(_0x1a117d) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1a117d]) : this.data && this.data[_0x1a117d] || null;
    }
    setval(_0x262dcb, _0x3dddce) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x262dcb, _0x3dddce) : this.isQuanX() ? $prefs.setValueForKey(_0x262dcb, _0x3dddce) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3dddce] = _0x262dcb, this.writedata(), !0) : this.data && this.data[_0x3dddce] || null;
    }
    send(_0x28c3a8, _0x5d2df1, _0x3d85bd = () => {}) {
      if ("get" != _0x28c3a8 && "post" != _0x28c3a8 && "put" != _0x28c3a8 && "delete" != _0x28c3a8) {
        console.log("无效的http方法：" + _0x28c3a8);
        return;
      }
      const _0x19e52d = {
        hints: !1
      };
      if ("get" == _0x28c3a8 && _0x5d2df1.headers ? (delete _0x5d2df1.headers["Content-Type"], delete _0x5d2df1.headers["Content-Length"]) : _0x5d2df1.body && _0x5d2df1.headers && (_0x5d2df1.headers["Content-Type"] || (_0x5d2df1.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon()) {
        const _0x6897a = {
          "X-Surge-Skip-Scripting": !1
        };
        this.isSurge() && this.isNeedRewrite && (_0x5d2df1.headers = _0x5d2df1.headers || {}, Object.assign(_0x5d2df1.headers, _0x6897a));
        let _0x134989 = {
          method: _0x28c3a8,
          url: _0x5d2df1.url,
          headers: _0x5d2df1.headers,
          timeout: _0x5d2df1.timeout,
          data: _0x5d2df1.body
        };
        "get" == _0x28c3a8 && delete _0x134989.data;
        $axios(_0x134989).then(_0x599e5c => {
          let {
            status: _0x1ca4f8,
            request: _0x83d7c2,
            headers: _0x1cb160,
            data: _0x12607e
          } = _0x599e5c;
          const _0x538cec = {
            statusCode: _0x1ca4f8,
            headers: _0x1cb160,
            body: _0x12607e
          };
          _0x3d85bd(null, _0x83d7c2, _0x538cec);
        }).catch(_0x52292f => console.log(_0x52292f));
      } else {
        if (this.isQuanX()) {
          _0x5d2df1.method = _0x28c3a8.toUpperCase();
          this.isNeedRewrite && (_0x5d2df1.opts = _0x5d2df1.opts || {}, Object.assign(_0x5d2df1.opts, _0x19e52d));
          $task.fetch(_0x5d2df1).then(_0x45e4ff => {
            let {
              statusCode: _0x5b077c,
              request: _0x26bb25,
              headers: _0x5a1aab,
              body: _0x58db26
            } = _0x45e4ff;
            const _0x4d2087 = {
              statusCode: _0x5b077c,
              headers: _0x5a1aab,
              body: _0x58db26
            };
            _0x3d85bd(null, _0x26bb25, _0x4d2087);
          }, _0x186566 => _0x3d85bd(_0x186566));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            let {
              url: _0x782176,
              ..._0x439268
            } = _0x5d2df1;
            const _0x47dccd = {
              followRedirect: !1
            };
            this.instance = this.got.extend(_0x47dccd);
            this.instance[_0x28c3a8](_0x782176, _0x439268).then(_0x4c9eb9 => {
              let {
                statusCode: _0x228554,
                request: _0x51d044,
                headers: _0x5a58f5,
                body: _0x21ec81
              } = _0x4c9eb9;
              const _0x99031a = {
                statusCode: _0x228554,
                headers: _0x5a58f5,
                body: _0x21ec81
              };
              _0x3d85bd(null, _0x51d044, _0x99031a);
            }, _0x5c7b04 => {
              let {
                message: _0x3dcf31,
                response: _0x538c50
              } = _0x5c7b04;
              _0x3d85bd(_0x3dcf31, _0x538c50, _0x538c50 && _0x538c50.body);
            });
          }
        }
      }
    }
    time(_0x364b7f) {
      let _0x56b2f9 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      for (let _0x7e2b2b in /(y+)/.test(_0x364b7f) && (_0x364b7f = _0x364b7f.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))), _0x56b2f9) new RegExp("(" + _0x7e2b2b + ")").test(_0x364b7f) && (_0x364b7f = _0x364b7f.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x56b2f9[_0x7e2b2b] : ("00" + _0x56b2f9[_0x7e2b2b]).substr(("" + _0x56b2f9[_0x7e2b2b]).length)));
      return _0x364b7f;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x54a634 = this.name + " 运行通知\n\n" + this.notifyStr;
      if ($.isNode()) {
        var _0x22dd1b = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x22dd1b.sendNotify(this.name, _0x54a634);
      } else {
        this.msg(_0x54a634);
      }
    }
    logAndNotify(_0x3780fe) {
      console.log(_0x3780fe);
      this.notifyStr += _0x3780fe;
      this.notifyStr += "\n";
    }
    msg(_0x117117 = t, _0x36baad = "", _0x1d97a9 = "", _0x2af5c1) {
      let _0x5cb89f = _0xf63118 => {
        if (!_0xf63118) {
          return _0xf63118;
        }
        if ("string" == typeof _0xf63118) {
          return this.isLoon() ? _0xf63118 : this.isQuanX() ? {
            "open-url": _0xf63118
          } : this.isSurge() ? {
            url: _0xf63118
          } : void 0;
        }
        if ("object" == typeof _0xf63118) {
          if (this.isLoon()) {
            let _0x4faff6 = _0xf63118.openUrl || _0xf63118.url || _0xf63118["open-url"],
              _0x5ad1b5 = _0xf63118.mediaUrl || _0xf63118["media-url"];
            const _0x120239 = {
              openUrl: _0x4faff6,
              mediaUrl: _0x5ad1b5
            };
            return _0x120239;
          }
          if (this.isQuanX()) {
            let _0x5e9514 = _0xf63118["open-url"] || _0xf63118.url || _0xf63118.openUrl,
              _0x5563b5 = _0xf63118["media-url"] || _0xf63118.mediaUrl;
            const _0x388e82 = {
              "open-url": _0x5e9514,
              "media-url": _0x5563b5
            };
            return _0x388e82;
          }
          const _0x109d6e = {
            url: _0xf63118.url || _0xf63118.openUrl || _0xf63118["open-url"]
          };
          if (this.isSurge()) {
            return _0x109d6e;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x117117, _0x36baad, _0x1d97a9, _0x5cb89f(_0x2af5c1)) : this.isQuanX() && $notify(_0x117117, _0x36baad, _0x1d97a9, _0x5cb89f(_0x2af5c1)));
      let _0x2b474e = ["", "============== 系统通知 =============="];
      _0x2b474e.push(_0x117117);
      _0x36baad && _0x2b474e.push(_0x36baad);
      _0x1d97a9 && _0x2b474e.push(_0x1d97a9);
      console.log(_0x2b474e.join("\n"));
    }
    getMin(_0x276118, _0x139513) {
      return _0x276118 < _0x139513 ? _0x276118 : _0x139513;
    }
    getMax(_0x2f702c, _0x310572) {
      return _0x2f702c < _0x310572 ? _0x310572 : _0x2f702c;
    }
    padStr(_0x2e564d, _0x41d122, _0x13b13b = "0") {
      let _0xc0b108 = String(_0x2e564d),
        _0x6ac45b = _0x41d122 > _0xc0b108.length ? _0x41d122 - _0xc0b108.length : 0,
        _0x28e990 = "";
      for (let _0x4b4af0 = 0; _0x4b4af0 < _0x6ac45b; _0x4b4af0++) {
        _0x28e990 += _0x13b13b;
      }
      return _0x28e990 + _0xc0b108;
    }
    json2str(_0x2d7264, _0xdae48a, _0x307b46 = !1) {
      let _0x4caad7 = [];
      for (let _0x3d56d1 of Object.keys(_0x2d7264).sort()) {
        let _0x30e857 = _0x2d7264[_0x3d56d1];
        _0x30e857 && _0x307b46 && (_0x30e857 = encodeURIComponent(_0x30e857));
        _0x4caad7.push(_0x3d56d1 + "=" + _0x30e857);
      }
      return _0x4caad7.join(_0xdae48a);
    }
    str2json(_0x13986b, _0x5ec402 = !1) {
      let _0xfa7faf = {};
      for (let _0x181dd4 of _0x13986b.split("#")) {
        if (!_0x181dd4) {
          continue;
        }
        let _0x40ca06 = _0x181dd4.indexOf("=");
        if (-1 == _0x40ca06) {
          continue;
        }
        let _0x24ceb9 = _0x181dd4.substr(0, _0x40ca06),
          _0x6eddab = _0x181dd4.substr(_0x40ca06 + 1);
        _0x5ec402 && (_0x6eddab = decodeURIComponent(_0x6eddab));
        _0xfa7faf[_0x24ceb9] = _0x6eddab;
      }
      return _0xfa7faf;
    }
    randomString(_0x54a9e2, _0x641be3 = "abcdef0123456789") {
      let _0x4ead16 = "";
      for (let _0x1825b8 = 0; _0x1825b8 < _0x54a9e2; _0x1825b8++) {
        _0x4ead16 += _0x641be3.charAt(Math.floor(Math.random() * _0x641be3.length));
      }
      return _0x4ead16;
    }
    randomList(_0xc3681e) {
      let _0x53ded8 = Math.floor(Math.random() * _0xc3681e.length);
      return _0xc3681e[_0x53ded8];
    }
    wait(_0x31d6e4) {
      return new Promise(_0x52cb3d => setTimeout(_0x52cb3d, _0x31d6e4));
    }
    done(_0x3b5e97 = {}) {
      let _0x1e2989 = new Date().getTime(),
        _0x1728f8 = (_0x1e2989 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x1728f8 + " 秒！");
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3b5e97);
    }
  }(_0x165dd1, _0x18be2b);
}