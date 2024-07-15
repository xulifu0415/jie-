//Mon Jul 15 2024 07:22:46 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jsname = "屈臣氏",
  $ = new Env(jsname);
LBJSNAMED = $.isNode() ? require("path").basename(__filename) : "qcs.js";
NAME = LBJSNAMED.split(".")[0];
let status,
  notifyStr = "";
status = (status = $.getval(NAME + "status") || "1") > 1 ? "" + status : "";
let userCookie = [],
  userList = [],
  userIdx = 0,
  cxdata = {
    headers: ["Authorization", "unionId"],
    body: ["unionId"],
    url: ["unionId"]
  },
  xzdata = {},
  cxurl = "saas-gateway/api/agg-trade/v1/signIn",
  host = "https://mystore-01api.watsonsvip.com.cn/";
class USER_LB {
  constructor() {
    this.index = ++userIdx;
  }
  async setValueForKey(_0x2a5679, _0x2c367e) {
    this[_0x2a5679] = _0x2c367e;
  }
  async LB_GET(_0x4ab2bb) {
    this.populateUrlObject(_0x4ab2bb, "");
    let _0x6ec8fd = await httpRequest("get", this.urlObject);
    return _0x6ec8fd;
  }
  async LB_POST(_0x5df17d, _0x43c1e4 = "") {
    this.populateUrlObject(_0x5df17d, _0x43c1e4);
    let _0x522d49 = await httpRequest("post", this.urlObject);
    return _0x522d49;
  }
  async populateUrlObject(_0x3ad686, _0x58b39c = "") {
    let _0x3a0aff = host.replace("//", "/").split("/")[1],
      _0x2ea027 = {
        url: host + _0x3ad686,
        headers: {
          Host: _0x3a0aff,
          Connection: "keep-alive",
          hostName: "scrm-prod.shuyi.org.cn",
          Accept: "*/*",
          "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
          "Content-Type": "application/json",
          "authorizer-appid": "wx1ffbd6927043dff7",
          miniProgramVersion: "1.0.0"
        }
      };
    if (cxdata.url) {
      for (let _0x1d3655 of cxdata.url) {
        _0x2ea027.url.indexOf("?") == -1 ? _0x2ea027.url = _0x2ea027.url + ("?" + _0x1d3655 + "=" + this[_0x1d3655]) : _0x2ea027.url = _0x2ea027.url + ("&" + _0x1d3655 + "=" + this[_0x1d3655]);
      }
    }
    if (cxdata.headers) {
      for (let _0x31bf80 of cxdata.headers) {
        _0x2ea027.headers[_0x31bf80] = this[_0x31bf80];
      }
    }
    if (cxdata.body) {
      for (let _0xf9f0fd of cxdata.body) {
        _0x58b39c.indexOf("{") > -1 ? (_0x58b39c = JSON.parse(_0x58b39c), _0x58b39c[_0xf9f0fd] = this[_0xf9f0fd], _0x58b39c = JSON.stringify(_0x58b39c), _0x2ea027.headers["Content-Type"] = "application/json") : (_0x58b39c == "" ? _0x58b39c = _0x58b39c + (_0xf9f0fd + "=" + this[_0xf9f0fd]) : _0x58b39c = _0x58b39c + ("&" + _0xf9f0fd + "=" + this[_0xf9f0fd]), _0x2ea027.headers["Content-Type"] = "application/x-www-form-urlencoded");
      }
    }
    _0x58b39c && (_0x2ea027.body = _0x58b39c, _0x2ea027.headers["Content-Length"] = _0x3ad686.body ? _0x3ad686.body.length : 0);
    this.urlObject = _0x2ea027;
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await get_data();
  } else {
    await Announcement();
    if (!(await handleCK())) {
      return;
    }
    logAndNotify("------------- 共" + userList.length + "个账号-------------");
    let _0x341af4 = [];
    logAndNotify("\n-------------签到-------------\n");
    for (let _0x107ebb of userList) {
      let _0x1813de = async function () {
        let _0x16b24c;
        _0x16b24c = await _0x107ebb.LB_POST("wx/signIn/iter/sign", "{}");
        _0x16b24c.code == 0 ? logAndNotify("账号【" + _0x107ebb.index + "】签到获得：" + _0x16b24c.result.typeNum / 10 + _0x16b24c.result.type) : logAndNotify("账号【" + _0x107ebb.index + "】签到失败：" + _0x16b24c.errorMsg);
      };
      _0x341af4.push(_0x1813de());
    }
    await Promise.all(_0x341af4);
    _0x341af4 = [];
    logAndNotify("\n-------------获取任务列表-------------\n");
    for (let _0x5ec8e4 of userList) {
      let _0x47f3ad = async function () {
        result = await _0x5ec8e4.LB_GET("cloudapi/v2/users/tasks");
        if (result.code != 0) {
          logAndNotify("账号【" + _0x5ec8e4.index + "】获取任务列表失败:" + result.errorMsg);
          return;
        }
        let _0x368331 = result.result.list;
        for (let _0x84dac7 of _0x368331) {
          result = await _0x5ec8e4.LB_GET("cloudapi/v2/users/tasks/browserTask/token/" + _0x84dac7.id);
          if (result.code == 0) {
            let _0xcd21a7 = result.result.token;
            logAndNotify("账号【" + _0x5ec8e4.index + "】开始任务【" + _0x84dac7.bubbleName + "】成功");
            await $.wait(15200);
            result = await _0x5ec8e4.LB_POST("cloudapi/v2/users/tasks/complete", "{\"taskId\":" + _0x84dac7.id + ",\"completeBrowserTaskToken\":\"" + _0xcd21a7 + "\"}");
            result.code == 0 ? logAndNotify("账号【" + _0x5ec8e4.index + "】任务【" + _0x84dac7.bubbleName + "】完成") : logAndNotify("账号【" + _0x5ec8e4.index + "】任务【" + _0x84dac7.bubbleName + "】失败：" + result.errorMsg);
          } else {
            logAndNotify("账号【" + _0x5ec8e4.index + "】开始任务【" + _0x84dac7.bubbleName + "】失败：" + result.errorMsg);
          }
        }
      };
      _0x341af4.push(_0x47f3ad());
    }
    await Promise.all(_0x341af4);
    _0x341af4 = [];
    logAndNotify("\n-------------领取任务奖励-------------\n");
    for (let _0x525ec6 of userList) {
      let _0x38c2cf = async function () {
        result = await _0x525ec6.LB_GET("cloudapi/v2/users/bubbles");
        if (result.code != 0) {
          logAndNotify("账号【" + _0x525ec6.index + "】获取任务奖励失败:" + result.errorMsg);
          return;
        }
        let _0x59d643 = result.result;
        for (let _0x4c1d0f of _0x59d643) {
          _0x4c1d0f.bubbleType == 1 && (result = await _0x525ec6.LB_POST("cloudapi/v2/users/receive", "{\"prizeId\":" + _0x4c1d0f.prizeId + "}"), result.code == 0 ? logAndNotify("账号【" + _0x525ec6.index + "】领取任务【" + _0x4c1d0f.taskInfo.bubbleName + "】奖励成功") : logAndNotify("账号【" + _0x525ec6.index + "】领取任务【" + _0x4c1d0f.taskInfo.bubbleName + "】奖励失败：" + result.errorMsg));
        }
      };
      _0x341af4.push(_0x38c2cf());
    }
    await Promise.all(_0x341af4);
    _0x341af4 = [];
    logAndNotify("\n-------------资产-------------\n");
    for (let _0x554920 of userList) {
      let _0x3d355d = async function () {
        let _0x55ebe1;
        _0x55ebe1 = await _0x554920.LB_GET("wx/signIn/index");
        _0x55ebe1.code == 0 ? logAndNotify("账号【" + _0x554920.index + "】当前回馈金：" + _0x55ebe1.result.amount / 100) : logAndNotify("账号【" + _0x554920.index + "】获取资产失败：" + _0x55ebe1.errorMsg);
      };
      _0x341af4.push(_0x3d355d());
    }
    await Promise.all(_0x341af4);
  }
})().catch(_0x28c634 => $.logErr(_0x28c634)).finally(() => {
  $.done();
  showmsg();
});
function sleep(_0x3c2b22) {
  return new Promise(_0x1691bb => setTimeout(_0x1691bb, _0x3c2b22));
}
function sleep(_0x2eff3e) {
  return new Promise(_0x4dd1ce => setTimeout(_0x4dd1ce, _0x2eff3e));
}
function is_parameter(_0x5dcf50) {
  if (userList[0] != undefined && userList[0]?.[_0x5dcf50]) {
    return true;
  }
  logAndNotify("未设置变量[" + (NAME + _0x5dcf50) + "]不执行");
  return false;
}
function get_data() {
  if ($request.url.indexOf(cxurl) > -1) {
    if (cxdata.headers) {
      for (let _0x4bf690 of cxdata.headers) {
        let _0x1252c7 = $request.headers[_0x4bf690],
          _0x275d1b = ($.isNode() ? process.env[NAME + _0x4bf690] : $.getdata(NAME + _0x4bf690)) || "";
        _0x275d1b.indexOf(_0x1252c7) == -1 ? (_0x275d1b ? _0x275d1b = _0x275d1b + "@" + _0x1252c7 : _0x275d1b = _0x1252c7, $.setdata(_0x275d1b, NAME + _0x4bf690), ckList = _0x275d1b.split("@"), $.msg(jsname + ":获取第" + ckList.length + "个" + _0x4bf690 + "成功: " + _0x1252c7)) : $.msg(jsname + ":" + (NAME + _0x4bf690) + "变量已存在: " + _0x1252c7);
      }
    }
    if (cxdata.body) {
      for (let _0x2d6ff6 of cxdata.body) {
        let _0x43cd07 = $request.body;
        if (_0x43cd07.indexOf("{") == -1) {
          if (_0x43cd07.indexOf("&") == -1) {
            var _0x4afed2 = _0x2d6ff6 + "=(.*)",
              _0x28181e = new RegExp(_0x4afed2);
            _0x43cd07 = _0x43cd07.match(_0x28181e)[1];
          } else {
            let _0x3c85e3 = _0x43cd07.split(_0x2d6ff6);
            if (_0x3c85e3.indexOf("&") == -1) {
              var _0x4afed2 = _0x2d6ff6 + "=(.*)",
                _0x28181e = new RegExp(_0x4afed2);
              _0x43cd07 = _0x43cd07.match(_0x28181e)[1];
            } else {
              var _0x4afed2 = _0x2d6ff6 + "=(.*)&",
                _0x28181e = new RegExp(_0x4afed2);
              _0x43cd07 = _0x43cd07.match(_0x28181e)[1];
            }
          }
        } else {
          _0x43cd07 = JSON.parse(_0x43cd07);
          _0x43cd07 = _0x43cd07[_0x2d6ff6];
        }
        let _0x2d745c = ($.isNode() ? process.env[NAME + _0x2d6ff6] : $.getdata(NAME + _0x2d6ff6)) || "";
        _0x2d745c.indexOf(_0x43cd07) == -1 ? (_0x2d745c ? _0x2d745c = _0x2d745c + "@" + _0x43cd07 : _0x2d745c = _0x43cd07, $.setdata(_0x2d745c, NAME + _0x2d6ff6), ckList = _0x2d745c.split("@"), $.msg(jsname + ":获取第" + ckList.length + "个" + _0x2d6ff6 + "成功: " + _0x43cd07)) : $.msg(jsname + ":" + (NAME + _0x2d6ff6) + "变量已存在: " + _0x43cd07);
      }
    }
    if (cxdata.url) {
      for (let _0x2d9566 of cxdata.url) {
        let _0x42d816 = $request.url,
          _0x3274cf = ($.isNode() ? process.env[NAME + _0x2d9566] : $.getdata(NAME + _0x2d9566)) || "",
          _0x2ffd18 = _0x42d816.split(_0x2d9566);
        if (_0x2ffd18.indexOf("&") == -1) {
          var _0x4afed2 = _0x2d9566 + "=(.*)",
            _0x28181e = new RegExp(_0x4afed2);
          _0x42d816 = _0x42d816.match(_0x28181e)[1];
        } else {
          var _0x4afed2 = _0x2d9566 + "=(.*)&",
            _0x28181e = new RegExp(_0x4afed2);
          _0x42d816 = _0x42d816.match(_0x28181e)[1];
        }
        _0x3274cf.indexOf(_0x42d816) == -1 ? (_0x3274cf ? _0x3274cf = _0x3274cf + "@" + _0x42d816 : _0x3274cf = _0x42d816, $.setdata(_0x3274cf, NAME + _0x2d9566), ckList = _0x3274cf.split("@"), $.msg(jsname + ":获取第" + ckList.length + "个" + _0x2d9566 + "成功: " + _0x42d816)) : $.msg(jsname + ":" + (NAME + _0x2d9566) + "变量已存在: " + _0x42d816);
      }
    }
    if (xzdata.headers) {
      for (let _0x58ae3b of xzdata.headers) {
        let _0x1e0661 = $request.headers[_0x58ae3b],
          _0x10989b = ($.isNode() ? process.env[NAME + _0x58ae3b] : $.getdata(NAME + _0x58ae3b)) || "";
        _0x10989b.indexOf(_0x1e0661) == -1 ? (_0x10989b ? _0x10989b = _0x10989b + "@" + _0x1e0661 : _0x10989b = _0x1e0661, $.setdata(_0x10989b, NAME + _0x58ae3b), ckList = _0x10989b.split("@"), $.msg(jsname + ":获取第" + ckList.length + "个" + _0x58ae3b + "成功: " + _0x1e0661)) : $.msg(jsname + ":" + (NAME + _0x58ae3b) + "变量已存在: " + _0x1e0661);
      }
    }
    if (xzdata.body) {
      for (let _0x51a85c of xzdata.body) {
        let _0x581cf9 = $request.body;
        if (_0x581cf9.indexOf("{") == -1) {
          if (_0x581cf9.indexOf("&") == -1) {
            var _0x4afed2 = _0x51a85c + "=(.*)",
              _0x28181e = new RegExp(_0x4afed2);
            _0x581cf9 = _0x581cf9.match(_0x28181e)[1];
          } else {
            let _0x12d3a5 = _0x581cf9.split(_0x51a85c);
            if (_0x12d3a5.indexOf("&") == -1) {
              var _0x4afed2 = _0x51a85c + "=(.*)",
                _0x28181e = new RegExp(_0x4afed2);
              _0x581cf9 = _0x581cf9.match(_0x28181e)[1];
            } else {
              var _0x4afed2 = _0x51a85c + "=(.*)&",
                _0x28181e = new RegExp(_0x4afed2);
              _0x581cf9 = _0x581cf9.match(_0x28181e)[1];
            }
          }
        } else {
          _0x581cf9 = JSON.parse(_0x581cf9);
          _0x581cf9 = _0x581cf9[_0x51a85c];
        }
        let _0x568900 = ($.isNode() ? process.env[NAME + _0x51a85c] : $.getdata(NAME + _0x51a85c)) || "";
        _0x568900.indexOf(_0x581cf9) == -1 ? (_0x568900 ? _0x568900 = _0x568900 + "@" + _0x581cf9 : _0x568900 = _0x581cf9, $.setdata(_0x568900, NAME + _0x51a85c), ckList = _0x568900.split("@"), $.msg(jsname + ":获取第" + ckList.length + "个" + _0x51a85c + "成功: " + _0x581cf9)) : $.msg(jsname + ":" + (NAME + _0x51a85c) + "变量已存在: " + _0x581cf9);
      }
    }
    if (xzdata.url) {
      for (let _0x5506fe of xzdata.url) {
        let _0x58c16d = $request.url,
          _0x823803 = ($.isNode() ? process.env[NAME + _0x5506fe] : $.getdata(NAME + _0x5506fe)) || "",
          _0x210e2 = _0x58c16d.split(_0x5506fe);
        if (_0x210e2.indexOf("&") == -1) {
          var _0x4afed2 = _0x5506fe + "=(.*)",
            _0x28181e = new RegExp(_0x4afed2);
          _0x58c16d = _0x58c16d.match(_0x28181e)[1];
        } else {
          var _0x4afed2 = _0x5506fe + "=(.*)&",
            _0x28181e = new RegExp(_0x4afed2);
          _0x58c16d = _0x58c16d.match(_0x28181e)[1];
        }
        _0x823803.indexOf(_0x58c16d) == -1 ? (_0x823803 ? _0x823803 = _0x823803 + "@" + _0x58c16d : _0x823803 = _0x58c16d, $.setdata(_0x823803, NAME + _0x5506fe), ckList = _0x823803.split("@"), $.msg(jsname + ":获取第" + ckList.length + "个" + _0x5506fe + "成功: " + _0x58c16d)) : $.msg(jsname + ":" + (NAME + _0x5506fe) + "变量已存在: " + _0x58c16d);
      }
    }
  }
}
function handleCK() {
  let _0x4aea52 = ["\n", "@", "&"];
  for (let _0x262f38 in cxdata) {
    for (let _0x2bec68 of cxdata[_0x262f38]) {
      userCookie[_0x2bec68] = ($.isNode() ? process.env[NAME + _0x2bec68] : $.getdata(NAME + _0x2bec68)) || "";
      if (userCookie[_0x2bec68]) {
        let _0x390c58 = _0x4aea52[0];
        for (let _0x35ae02 of _0x4aea52) {
          if (userCookie[_0x2bec68].indexOf(_0x35ae02) > -1) {
            _0x390c58 = _0x35ae02;
            break;
          }
        }
        if (userList.length > 0) {
          let _0x2f7ed8 = userCookie[_0x2bec68].split(_0x390c58);
          if (_0x2f7ed8.length != userList.length) {
            logAndNotify("CK变量长度不对应");
            return;
          }
          for (let _0x470a17 = 0; _0x470a17 < userList.length; _0x470a17++) {
            userList[_0x470a17].setValueForKey(_0x2bec68, _0x2f7ed8[_0x470a17]);
          }
        } else {
          for (let _0x1ec34d of userCookie[_0x2bec68].split(_0x390c58)) {
            const _0x20b51b = new USER_LB();
            _0x20b51b.setValueForKey(_0x2bec68, _0x1ec34d);
            if (_0x1ec34d) {
              userList.push(_0x20b51b);
            }
          }
        }
      } else {
        logAndNotify("\n未找到CK，变量名为：" + (NAME + _0x2bec68));
        logAndNotify("\n重写地址为：" + (host + cxurl));
        return;
      }
    }
  }
  for (let _0x1f3599 in xzdata) {
    for (let _0xc67948 of xzdata[_0x1f3599]) {
      userCookie[_0xc67948] = ($.isNode() ? process.env[NAME + _0xc67948] : $.getdata(NAME + _0xc67948)) || "";
      if (userCookie[_0xc67948]) {
        let _0x3dd42d = _0x4aea52[0];
        for (let _0x2562dd of _0x4aea52) {
          if (userCookie[_0xc67948].indexOf(_0x2562dd) > -1) {
            _0x3dd42d = _0x2562dd;
            break;
          }
        }
        if (userList.length > 0) {
          let _0x2dc9ff = userCookie[_0xc67948].split(_0x3dd42d);
          if (_0x2dc9ff.length != userList.length) {
            logAndNotify("CK变量长度不对应");
            return;
          }
          for (let _0x25e8fb = 0; _0x25e8fb < userList.length; _0x25e8fb++) {
            userList[_0x25e8fb].setValueForKey(_0xc67948, _0x2dc9ff[_0x25e8fb]);
          }
        } else {
          for (let _0xfc0de3 of userCookie[_0xc67948].split(_0x3dd42d)) {
            const _0x9ea033 = new USER_LB();
            _0x9ea033.setValueForKey(_0xc67948, _0xfc0de3);
            if (_0xfc0de3) {
              userList.push(_0x9ea033);
            }
          }
        }
      } else {
        logAndNotify("\n可选变量[" + (NAME + _0xc67948) + "]未填写");
      }
    }
  }
  logAndNotify("共找到" + userList.length + "个账号");
  return true;
}
async function httpRequest(_0x229d02, _0x1d117c) {
  httpResult = null;
  if (_0x229d02 == "get") {
    delete _0x1d117c.body;
  }
  return new Promise(_0xfe0be5 => {
    $[_0x229d02](_0x1d117c, async (_0x2d9fb0, _0x39dff9, _0x529b39) => {
      try {
        if (_0x2d9fb0) {
          logAndNotify(_0x229d02 + "请求失败");
          console.log(JSON.stringify(_0x2d9fb0));
          $.logErr(_0x2d9fb0);
        } else {
          if (safeGet(_0x529b39)) {
            httpResult = JSON.parse(_0x529b39);
            _0xfe0be5(httpResult);
          }
        }
      } catch (_0x13a44a) {
        $.logErr(_0x13a44a, _0x39dff9);
      } finally {
        _0xfe0be5();
      }
    });
  });
}
function safeGet(_0xd95708) {
  try {
    if (typeof JSON.parse(_0xd95708) == "object") {
      return true;
    } else {
      console.log(_0xd95708);
    }
  } catch (_0x47614e) {
    console.log(JSON.stringify(_0x47614e));
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function timestampToTime(_0x818ac8) {
  return new Date(parseInt(_0x818ac8)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}
function stringToBase64(_0xd6e223) {
  var _0x109df2 = Buffer.from(_0xd6e223).toString("base64");
  return _0x109df2;
}
function sleep(_0x1e0f9a) {
  return new Promise(_0x44c4fe => setTimeout(_0x44c4fe, _0x1e0f9a));
}
function reconvert(_0x25e172) {
  _0x25e172 = _0x25e172.replace(/(\\u)(\w{1,4})/gi, function (_0x548d43) {
    return String.fromCharCode(parseInt(escape(_0x548d43).replace(/(%5Cu)(\w{1,4})/g, "$2"), 16));
  });
  _0x25e172 = _0x25e172.replace(/(&#x)(\w{1,4});/gi, function (_0x25c11d) {
    return String.fromCharCode(parseInt(escape(_0x25c11d).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
  });
  _0x25e172 = _0x25e172.replace(/(&#)(\d{1,6});/gi, function (_0x4309e8) {
    return String.fromCharCode(parseInt(escape(_0x4309e8).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2")));
  });
  return _0x25e172;
}
function rand(_0x23d725, _0x1d4ee4) {
  return parseInt(Math.random() * (_0x1d4ee4 - _0x23d725 + 1) + _0x23d725, 10);
}
function getDate(_0x143860 = false) {
  var _0x8298eb = new Date(new Date().getTime());
  return _0x143860 ? (Y = _0x8298eb.getFullYear() + "-", M = (_0x8298eb.getMonth() + 1 < 10 ? "0" + (_0x8298eb.getMonth() + 1) : _0x8298eb.getMonth() + 1) + "-", D = (_0x8298eb.getDate() < 10 ? "0" + _0x8298eb.getDate() : _0x8298eb.getDate()) + "", h = (_0x8298eb.getHours() < 10 ? "0" + _0x8298eb.getHours() : _0x8298eb.getHours()) + ":", m = (_0x8298eb.getMinutes() < 10 ? "0" + _0x8298eb.getMinutes() : _0x8298eb.getMinutes()) + ":", s = _0x8298eb.getSeconds() < 10 ? "0" + _0x8298eb.getSeconds() : _0x8298eb.getSeconds(), Y + M + D) : (Y = _0x8298eb.getFullYear() + "-", M = _0x8298eb.getMonth() + 1 + "-", D = _0x8298eb.getDate(), Y + M + D);
}
function rand_num(_0xd0c145, _0x34fc1f, _0x6633ca) {
  if (_0x6633ca - _0x34fc1f < _0xd0c145) {
    return;
  }
  let _0x232db8 = [],
    _0x1a8525 = [];
  for (let _0x2871c6 = 0; _0x2871c6 < _0xd0c145; _0x2871c6++) {
    let _0x7a3e85 = rand(_0x34fc1f, _0x6633ca);
    while (_0x232db8[_0x7a3e85] != undefined) {
      _0x7a3e85 = rand(_0x34fc1f, _0x6633ca);
    }
    _0x232db8[_0x7a3e85] = _0x7a3e85;
    _0x1a8525.push(_0x7a3e85);
  }
  return _0x1a8525;
}
function encodeUTF8(_0x489613) {
  let _0x32295e = "";
  for (let _0x14d3d8 = 0; _0x14d3d8 < _0x489613.length; _0x14d3d8++) {
    let _0x211ddc = _0x489613[_0x14d3d8],
      _0x5360e6 = "";
    encodeURIComponent(_0x211ddc).length < 4 ? _0x5360e6 = _0x211ddc.charCodeAt(0).toString(16) : (_0x5360e6 = encodeURIComponent(_0x211ddc), _0x5360e6 = _0x5360e6.replaceAll("%", ""));
    console.log("每个字符", _0x14d3d8, _0x211ddc, _0x5360e6);
    _0x32295e += _0x5360e6;
  }
  console.log("转换后", _0x32295e);
  return _0x32295e;
}
function json2str(_0x34f0cc, _0x4256af = false) {
  let _0x455e9c = [];
  for (let _0x39c659 of Object.keys(_0x34f0cc).sort()) {
    let _0x49881a = _0x34f0cc[_0x39c659];
    if (_0x49881a && _0x4256af) {
      _0x49881a = encodeURIComponent(_0x49881a);
    }
    _0x455e9c.push(_0x39c659 + "=" + _0x49881a);
  }
  return _0x455e9c.join("&");
}
function str2json(_0x56e899, _0xc1de90 = false) {
  let _0x32fdaa = {};
  for (let _0x5013d4 of _0x56e899.split("&")) {
    if (!_0x5013d4) {
      continue;
    }
    let _0x5f37be = _0x5013d4.split("=");
    if (_0x5f37be.length < 2) {
      continue;
    }
    _0xc1de90 ? _0x32fdaa[_0x5f37be[0]] = decodeURIComponent(_0x5f37be[1]) : _0x32fdaa[_0x5f37be[0]] = _0x5f37be[1];
  }
  return _0x32fdaa;
}
function md5(_0x934c69) {
  function _0x1097cf(_0x373f1d, _0x770db1) {
    return _0x373f1d << _0x770db1 | _0x373f1d >>> 32 - _0x770db1;
  }
  function _0x4caaf8(_0x554d90, _0x2e3ccf) {
    var _0x36e5e2, _0x1813c7, _0x2d48c9, _0xbe6192, _0x3cc127;
    _0x2d48c9 = 2147483648 & _0x554d90;
    _0xbe6192 = 2147483648 & _0x2e3ccf;
    _0x36e5e2 = 1073741824 & _0x554d90;
    _0x1813c7 = 1073741824 & _0x2e3ccf;
    _0x3cc127 = (1073741823 & _0x554d90) + (1073741823 & _0x2e3ccf);
    return _0x36e5e2 & _0x1813c7 ? 2147483648 ^ _0x3cc127 ^ _0x2d48c9 ^ _0xbe6192 : _0x36e5e2 | _0x1813c7 ? 1073741824 & _0x3cc127 ? 3221225472 ^ _0x3cc127 ^ _0x2d48c9 ^ _0xbe6192 : 1073741824 ^ _0x3cc127 ^ _0x2d48c9 ^ _0xbe6192 : _0x3cc127 ^ _0x2d48c9 ^ _0xbe6192;
  }
  function _0x1b4c8c(_0x5e5380, _0x55dc08, _0x52da76) {
    return _0x5e5380 & _0x55dc08 | ~_0x5e5380 & _0x52da76;
  }
  function _0x1197b9(_0x306b40, _0x379e16, _0x51133e) {
    return _0x306b40 & _0x51133e | _0x379e16 & ~_0x51133e;
  }
  function _0x220727(_0x187e7c, _0x10e663, _0x1eca56) {
    return _0x187e7c ^ _0x10e663 ^ _0x1eca56;
  }
  function _0x3142d5(_0x1f7697, _0x2947ad, _0x4cc87c) {
    return _0x2947ad ^ (_0x1f7697 | ~_0x4cc87c);
  }
  function _0x3ecc0a(_0x3219d6, _0x254644, _0x1a08c6, _0x57ce0a, _0x61aad8, _0x4e98d0, _0x6a4b8f) {
    _0x3219d6 = _0x4caaf8(_0x3219d6, _0x4caaf8(_0x4caaf8(_0x1b4c8c(_0x254644, _0x1a08c6, _0x57ce0a), _0x61aad8), _0x6a4b8f));
    return _0x4caaf8(_0x1097cf(_0x3219d6, _0x4e98d0), _0x254644);
  }
  function _0x4d2d00(_0x5a058d, _0x3a04d5, _0x16db70, _0x13101c, _0x27c63c, _0x262d0d, _0x4a5919) {
    _0x5a058d = _0x4caaf8(_0x5a058d, _0x4caaf8(_0x4caaf8(_0x1197b9(_0x3a04d5, _0x16db70, _0x13101c), _0x27c63c), _0x4a5919));
    return _0x4caaf8(_0x1097cf(_0x5a058d, _0x262d0d), _0x3a04d5);
  }
  function _0x276382(_0x4d5f4a, _0x385d51, _0x46376b, _0x3e1560, _0x8825a7, _0x3ce476, _0x487c86) {
    _0x4d5f4a = _0x4caaf8(_0x4d5f4a, _0x4caaf8(_0x4caaf8(_0x220727(_0x385d51, _0x46376b, _0x3e1560), _0x8825a7), _0x487c86));
    return _0x4caaf8(_0x1097cf(_0x4d5f4a, _0x3ce476), _0x385d51);
  }
  function _0xdb3649(_0x11881c, _0x58c013, _0x32e8c8, _0x5cad1f, _0x4ad69c, _0x480d3e, _0x511b21) {
    _0x11881c = _0x4caaf8(_0x11881c, _0x4caaf8(_0x4caaf8(_0x3142d5(_0x58c013, _0x32e8c8, _0x5cad1f), _0x4ad69c), _0x511b21));
    return _0x4caaf8(_0x1097cf(_0x11881c, _0x480d3e), _0x58c013);
  }
  function _0x435736(_0x86d688) {
    for (var _0x51be1b, _0xcb4df9 = _0x86d688.length, _0x26d31f = _0xcb4df9 + 8, _0x24a4c2 = (_0x26d31f - _0x26d31f % 64) / 64, _0x54b349 = 16 * (_0x24a4c2 + 1), _0x357515 = new Array(_0x54b349 - 1), _0x32e013 = 0, _0x7a3c55 = 0; _0xcb4df9 > _0x7a3c55;) {
      _0x51be1b = (_0x7a3c55 - _0x7a3c55 % 4) / 4;
      _0x32e013 = _0x7a3c55 % 4 * 8;
      _0x357515[_0x51be1b] = _0x357515[_0x51be1b] | _0x86d688.charCodeAt(_0x7a3c55) << _0x32e013;
      _0x7a3c55++;
    }
    _0x51be1b = (_0x7a3c55 - _0x7a3c55 % 4) / 4;
    _0x32e013 = _0x7a3c55 % 4 * 8;
    _0x357515[_0x51be1b] = _0x357515[_0x51be1b] | 128 << _0x32e013;
    _0x357515[_0x54b349 - 2] = _0xcb4df9 << 3;
    _0x357515[_0x54b349 - 1] = _0xcb4df9 >>> 29;
    return _0x357515;
  }
  function _0x42fe58(_0x3fbc6b) {
    var _0x111d66,
      _0x424290,
      _0x19dea5 = "",
      _0x35dfe7 = "";
    for (_0x424290 = 0; 3 >= _0x424290; _0x424290++) {
      _0x111d66 = _0x3fbc6b >>> 8 * _0x424290 & 255;
      _0x35dfe7 = "0" + _0x111d66.toString(16);
      _0x19dea5 += _0x35dfe7.substr(_0x35dfe7.length - 2, 2);
    }
    return _0x19dea5;
  }
  function _0x222609(_0x1d8641) {
    _0x1d8641 = _0x1d8641.replace(/\r\n/g, "\n");
    for (var _0x32baa3 = "", _0x35b323 = 0; _0x35b323 < _0x1d8641.length; _0x35b323++) {
      var _0x80caee = _0x1d8641.charCodeAt(_0x35b323);
      128 > _0x80caee ? _0x32baa3 += String.fromCharCode(_0x80caee) : _0x80caee > 127 && 2048 > _0x80caee ? (_0x32baa3 += String.fromCharCode(_0x80caee >> 6 | 192), _0x32baa3 += String.fromCharCode(63 & _0x80caee | 128)) : (_0x32baa3 += String.fromCharCode(_0x80caee >> 12 | 224), _0x32baa3 += String.fromCharCode(_0x80caee >> 6 & 63 | 128), _0x32baa3 += String.fromCharCode(63 & _0x80caee | 128));
    }
    return _0x32baa3;
  }
  var _0x376f43,
    _0x1f9374,
    _0x221e7c,
    _0x359330,
    _0x174723,
    _0x3b19e0,
    _0x31a640,
    _0x5e4409,
    _0x352e2e,
    _0x21503d = [],
    _0x1eb30c = 7,
    _0x4255a6 = 12,
    _0x3747aa = 17,
    _0x588373 = 22,
    _0x3f2bcc = 5,
    _0x5bdcc9 = 9,
    _0x2a462b = 14,
    _0x1a3774 = 20,
    _0x218d02 = 4,
    _0x3092e2 = 11,
    _0x47ff31 = 16,
    _0x196c12 = 23,
    _0x46064a = 6,
    _0x1efaa2 = 10,
    _0x3b3271 = 15,
    _0x2a9cfb = 21;
  for (_0x934c69 = _0x222609(_0x934c69), _0x21503d = _0x435736(_0x934c69), _0x3b19e0 = 1732584193, _0x31a640 = 4023233417, _0x5e4409 = 2562383102, _0x352e2e = 271733878, _0x376f43 = 0; _0x376f43 < _0x21503d.length; _0x376f43 += 16) {
    _0x1f9374 = _0x3b19e0;
    _0x221e7c = _0x31a640;
    _0x359330 = _0x5e4409;
    _0x174723 = _0x352e2e;
    _0x3b19e0 = _0x3ecc0a(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 0], _0x1eb30c, 3614090360);
    _0x352e2e = _0x3ecc0a(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 1], _0x4255a6, 3905402710);
    _0x5e4409 = _0x3ecc0a(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 2], _0x3747aa, 606105819);
    _0x31a640 = _0x3ecc0a(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 3], _0x588373, 3250441966);
    _0x3b19e0 = _0x3ecc0a(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 4], _0x1eb30c, 4118548399);
    _0x352e2e = _0x3ecc0a(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 5], _0x4255a6, 1200080426);
    _0x5e4409 = _0x3ecc0a(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 6], _0x3747aa, 2821735955);
    _0x31a640 = _0x3ecc0a(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 7], _0x588373, 4249261313);
    _0x3b19e0 = _0x3ecc0a(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 8], _0x1eb30c, 1770035416);
    _0x352e2e = _0x3ecc0a(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 9], _0x4255a6, 2336552879);
    _0x5e4409 = _0x3ecc0a(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 10], _0x3747aa, 4294925233);
    _0x31a640 = _0x3ecc0a(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 11], _0x588373, 2304563134);
    _0x3b19e0 = _0x3ecc0a(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 12], _0x1eb30c, 1804603682);
    _0x352e2e = _0x3ecc0a(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 13], _0x4255a6, 4254626195);
    _0x5e4409 = _0x3ecc0a(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 14], _0x3747aa, 2792965006);
    _0x31a640 = _0x3ecc0a(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 15], _0x588373, 1236535329);
    _0x3b19e0 = _0x4d2d00(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 1], _0x3f2bcc, 4129170786);
    _0x352e2e = _0x4d2d00(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 6], _0x5bdcc9, 3225465664);
    _0x5e4409 = _0x4d2d00(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 11], _0x2a462b, 643717713);
    _0x31a640 = _0x4d2d00(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 0], _0x1a3774, 3921069994);
    _0x3b19e0 = _0x4d2d00(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 5], _0x3f2bcc, 3593408605);
    _0x352e2e = _0x4d2d00(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 10], _0x5bdcc9, 38016083);
    _0x5e4409 = _0x4d2d00(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 15], _0x2a462b, 3634488961);
    _0x31a640 = _0x4d2d00(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 4], _0x1a3774, 3889429448);
    _0x3b19e0 = _0x4d2d00(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 9], _0x3f2bcc, 568446438);
    _0x352e2e = _0x4d2d00(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 14], _0x5bdcc9, 3275163606);
    _0x5e4409 = _0x4d2d00(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 3], _0x2a462b, 4107603335);
    _0x31a640 = _0x4d2d00(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 8], _0x1a3774, 1163531501);
    _0x3b19e0 = _0x4d2d00(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 13], _0x3f2bcc, 2850285829);
    _0x352e2e = _0x4d2d00(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 2], _0x5bdcc9, 4243563512);
    _0x5e4409 = _0x4d2d00(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 7], _0x2a462b, 1735328473);
    _0x31a640 = _0x4d2d00(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 12], _0x1a3774, 2368359562);
    _0x3b19e0 = _0x276382(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 5], _0x218d02, 4294588738);
    _0x352e2e = _0x276382(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 8], _0x3092e2, 2272392833);
    _0x5e4409 = _0x276382(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 11], _0x47ff31, 1839030562);
    _0x31a640 = _0x276382(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 14], _0x196c12, 4259657740);
    _0x3b19e0 = _0x276382(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 1], _0x218d02, 2763975236);
    _0x352e2e = _0x276382(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 4], _0x3092e2, 1272893353);
    _0x5e4409 = _0x276382(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 7], _0x47ff31, 4139469664);
    _0x31a640 = _0x276382(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 10], _0x196c12, 3200236656);
    _0x3b19e0 = _0x276382(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 13], _0x218d02, 681279174);
    _0x352e2e = _0x276382(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 0], _0x3092e2, 3936430074);
    _0x5e4409 = _0x276382(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 3], _0x47ff31, 3572445317);
    _0x31a640 = _0x276382(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 6], _0x196c12, 76029189);
    _0x3b19e0 = _0x276382(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 9], _0x218d02, 3654602809);
    _0x352e2e = _0x276382(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 12], _0x3092e2, 3873151461);
    _0x5e4409 = _0x276382(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 15], _0x47ff31, 530742520);
    _0x31a640 = _0x276382(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 2], _0x196c12, 3299628645);
    _0x3b19e0 = _0xdb3649(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 0], _0x46064a, 4096336452);
    _0x352e2e = _0xdb3649(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 7], _0x1efaa2, 1126891415);
    _0x5e4409 = _0xdb3649(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 14], _0x3b3271, 2878612391);
    _0x31a640 = _0xdb3649(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 5], _0x2a9cfb, 4237533241);
    _0x3b19e0 = _0xdb3649(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 12], _0x46064a, 1700485571);
    _0x352e2e = _0xdb3649(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 3], _0x1efaa2, 2399980690);
    _0x5e4409 = _0xdb3649(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 10], _0x3b3271, 4293915773);
    _0x31a640 = _0xdb3649(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 1], _0x2a9cfb, 2240044497);
    _0x3b19e0 = _0xdb3649(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 8], _0x46064a, 1873313359);
    _0x352e2e = _0xdb3649(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 15], _0x1efaa2, 4264355552);
    _0x5e4409 = _0xdb3649(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 6], _0x3b3271, 2734768916);
    _0x31a640 = _0xdb3649(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 13], _0x2a9cfb, 1309151649);
    _0x3b19e0 = _0xdb3649(_0x3b19e0, _0x31a640, _0x5e4409, _0x352e2e, _0x21503d[_0x376f43 + 4], _0x46064a, 4149444226);
    _0x352e2e = _0xdb3649(_0x352e2e, _0x3b19e0, _0x31a640, _0x5e4409, _0x21503d[_0x376f43 + 11], _0x1efaa2, 3174756917);
    _0x5e4409 = _0xdb3649(_0x5e4409, _0x352e2e, _0x3b19e0, _0x31a640, _0x21503d[_0x376f43 + 2], _0x3b3271, 718787259);
    _0x31a640 = _0xdb3649(_0x31a640, _0x5e4409, _0x352e2e, _0x3b19e0, _0x21503d[_0x376f43 + 9], _0x2a9cfb, 3951481745);
    _0x3b19e0 = _0x4caaf8(_0x3b19e0, _0x1f9374);
    _0x31a640 = _0x4caaf8(_0x31a640, _0x221e7c);
    _0x5e4409 = _0x4caaf8(_0x5e4409, _0x359330);
    _0x352e2e = _0x4caaf8(_0x352e2e, _0x174723);
  }
  var _0x3c2531 = _0x42fe58(_0x3b19e0) + _0x42fe58(_0x31a640) + _0x42fe58(_0x5e4409) + _0x42fe58(_0x352e2e);
  return _0x3c2531.toLowerCase();
}
function logAndNotify(_0x4597cd) {
  console.log(_0x4597cd);
  notifyStr += _0x4597cd;
  notifyStr += "\n";
}
async function showmsg() {
  if (!notifyStr) {
    return;
  }
  let _0x515751 = jsname + " 运行通知\n\n" + notifyStr;
  if ($.isNode()) {
    var _0x387d1f = require("./sendNotify");
    console.log("\n============== 推送 ==============");
    await _0x387d1f.sendNotify(jsname, _0x515751);
  } else {
    $.msg(_0x515751);
  }
}
async function Announcement() {
  let _0x18ec8e = {
      url: "https://luobook.coding.net/api/user/luobook/project/code.json/shared-depot/luobook/git/blob/master/code.json"
    },
    _0x4e8af7 = await httpRequest("get", _0x18ec8e);
  data = JSON.parse(_0x4e8af7.data.file.data);
  logAndNotify(data.commomLog + "\n");
}
function Env(_0x5461d2, _0x3c8393) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x4f0c94 {
    constructor(_0x450111) {
      this.env = _0x450111;
    }
    send(_0x3c96a1, _0x2341be = "GET") {
      _0x3c96a1 = "string" == typeof _0x3c96a1 ? {
        url: _0x3c96a1
      } : _0x3c96a1;
      let _0x40f4c1 = this.get;
      "POST" === _0x2341be && (_0x40f4c1 = this.post);
      "PUT" === _0x2341be && (_0x40f4c1 = this.put);
      return new Promise((_0x4e2fc3, _0x23d907) => {
        _0x40f4c1.call(this, _0x3c96a1, (_0x22164b, _0x5868d8, _0xd847e2) => {
          _0x22164b ? _0x23d907(_0x22164b) : _0x4e2fc3(_0x5868d8);
        });
      });
    }
    get(_0x1fff68) {
      return this.send.call(this.env, _0x1fff68);
    }
    post(_0x582b29) {
      return this.send.call(this.env, _0x582b29, "POST");
    }
    put(_0x287e0f) {
      return this.send.call(this.env, _0x287e0f, "PUT");
    }
  }
  return new class {
    constructor(_0x182ad9, _0xd97aac) {
      this.name = _0x182ad9;
      this.http = new _0x4f0c94(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xd97aac);
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
    toObj(_0x7bad04, _0x2018a9 = null) {
      try {
        return JSON.parse(_0x7bad04);
      } catch {
        return _0x2018a9;
      }
    }
    toStr(_0x30da0f, _0x5e21e1 = null) {
      try {
        return JSON.stringify(_0x30da0f);
      } catch {
        return _0x5e21e1;
      }
    }
    getjson(_0x57c83a, _0x3a5494) {
      let _0x5b1e30 = _0x3a5494;
      const _0x23a010 = this.getdata(_0x57c83a);
      if (_0x23a010) {
        try {
          _0x5b1e30 = JSON.parse(this.getdata(_0x57c83a));
        } catch {}
      }
      return _0x5b1e30;
    }
    setjson(_0x5445d2, _0x5e4bc9) {
      try {
        return this.setdata(JSON.stringify(_0x5445d2), _0x5e4bc9);
      } catch {
        return !1;
      }
    }
    getScript(_0x263dea) {
      return new Promise(_0x1429e5 => {
        this.get({
          url: _0x263dea
        }, (_0x5f06de, _0x2efa3f, _0x53465c) => _0x1429e5(_0x53465c));
      });
    }
    runScript(_0x5212de, _0x97135e) {
      return new Promise(_0xad357 => {
        let _0x3951e5 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x3951e5 = _0x3951e5 ? _0x3951e5.replace(/\n/g, "").trim() : _0x3951e5;
        let _0x5346ca = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x5346ca = _0x5346ca ? 1 * _0x5346ca : 20;
        _0x5346ca = _0x97135e && _0x97135e.timeout ? _0x97135e.timeout : _0x5346ca;
        const [_0x1a0835, _0x3e0513] = _0x3951e5.split("@"),
          _0x2f5eae = {
            url: "http://" + _0x3e0513 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x5212de,
              mock_type: "cron",
              timeout: _0x5346ca
            },
            headers: {
              "X-Key": _0x1a0835,
              Accept: "*/*"
            }
          };
        this.post(_0x2f5eae, (_0x937d4c, _0x9b778, _0x45fcf1) => _0xad357(_0x45fcf1));
      }).catch(_0x3bd93f => this.logErr(_0x3bd93f));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xa7e357 = this.path.resolve(this.dataFile),
          _0x2e74d6 = this.path.resolve(process.cwd(), this.dataFile),
          _0xe039c5 = this.fs.existsSync(_0xa7e357),
          _0x428ea1 = !_0xe039c5 && this.fs.existsSync(_0x2e74d6);
        if (!_0xe039c5 && !_0x428ea1) {
          return {};
        }
        {
          const _0x28cd95 = _0xe039c5 ? _0xa7e357 : _0x2e74d6;
          try {
            return JSON.parse(this.fs.readFileSync(_0x28cd95));
          } catch (_0x252d7f) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x352786 = this.path.resolve(this.dataFile),
          _0x59d264 = this.path.resolve(process.cwd(), this.dataFile),
          _0xd161e9 = this.fs.existsSync(_0x352786),
          _0x8b8f0d = !_0xd161e9 && this.fs.existsSync(_0x59d264),
          _0x1631a0 = JSON.stringify(this.data);
        _0xd161e9 ? this.fs.writeFileSync(_0x352786, _0x1631a0) : _0x8b8f0d ? this.fs.writeFileSync(_0x59d264, _0x1631a0) : this.fs.writeFileSync(_0x352786, _0x1631a0);
      }
    }
    lodash_get(_0x1f4e73, _0x343aa0, _0x504acf) {
      const _0x1e0408 = _0x343aa0.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3d3d9c = _0x1f4e73;
      for (const _0x2b92de of _0x1e0408) if (_0x3d3d9c = Object(_0x3d3d9c)[_0x2b92de], void 0 === _0x3d3d9c) {
        return _0x504acf;
      }
      return _0x3d3d9c;
    }
    lodash_set(_0x399bbe, _0x3f7909, _0x5cf617) {
      return Object(_0x399bbe) !== _0x399bbe ? _0x399bbe : (Array.isArray(_0x3f7909) || (_0x3f7909 = _0x3f7909.toString().match(/[^.[\]]+/g) || []), _0x3f7909.slice(0, -1).reduce((_0x145abc, _0x554d48, _0x1d867e) => Object(_0x145abc[_0x554d48]) === _0x145abc[_0x554d48] ? _0x145abc[_0x554d48] : _0x145abc[_0x554d48] = Math.abs(_0x3f7909[_0x1d867e + 1]) >> 0 == +_0x3f7909[_0x1d867e + 1] ? [] : {}, _0x399bbe)[_0x3f7909[_0x3f7909.length - 1]] = _0x5cf617, _0x399bbe);
    }
    getdata(_0x44a740) {
      let _0x21d536 = this.getval(_0x44a740);
      if (/^@/.test(_0x44a740)) {
        const [, _0x413f7a, _0x14c68f] = /^@(.*?)\.(.*?)$/.exec(_0x44a740),
          _0x101041 = _0x413f7a ? this.getval(_0x413f7a) : "";
        if (_0x101041) {
          try {
            const _0x33b18e = JSON.parse(_0x101041);
            _0x21d536 = _0x33b18e ? this.lodash_get(_0x33b18e, _0x14c68f, "") : _0x21d536;
          } catch (_0x586f95) {
            _0x21d536 = "";
          }
        }
      }
      return _0x21d536;
    }
    setdata(_0x1516a8, _0x51facf) {
      let _0x28837f = !1;
      if (/^@/.test(_0x51facf)) {
        const [, _0x3cb4c5, _0x5c58aa] = /^@(.*?)\.(.*?)$/.exec(_0x51facf),
          _0x508a02 = this.getval(_0x3cb4c5),
          _0x586763 = _0x3cb4c5 ? "null" === _0x508a02 ? null : _0x508a02 || "{}" : "{}";
        try {
          const _0x7787b0 = JSON.parse(_0x586763);
          this.lodash_set(_0x7787b0, _0x5c58aa, _0x1516a8);
          _0x28837f = this.setval(JSON.stringify(_0x7787b0), _0x3cb4c5);
        } catch (_0x272279) {
          const _0x3d55d2 = {};
          this.lodash_set(_0x3d55d2, _0x5c58aa, _0x1516a8);
          _0x28837f = this.setval(JSON.stringify(_0x3d55d2), _0x3cb4c5);
        }
      } else {
        _0x28837f = this.setval(_0x1516a8, _0x51facf);
      }
      return _0x28837f;
    }
    getval(_0x32b4b9) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x32b4b9) : this.isQuanX() ? $prefs.valueForKey(_0x32b4b9) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x32b4b9]) : this.data && this.data[_0x32b4b9] || null;
    }
    setval(_0x829233, _0x19a014) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x829233, _0x19a014) : this.isQuanX() ? $prefs.setValueForKey(_0x829233, _0x19a014) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x19a014] = _0x829233, this.writedata(), !0) : this.data && this.data[_0x19a014] || null;
    }
    initGotEnv(_0x44ba10) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x44ba10 && (_0x44ba10.headers = _0x44ba10.headers ? _0x44ba10.headers : {}, void 0 === _0x44ba10.headers.Cookie && void 0 === _0x44ba10.cookieJar && (_0x44ba10.cookieJar = this.ckjar));
    }
    get(_0x43cc23, _0x5c1c96 = () => {}) {
      _0x43cc23.headers && (delete _0x43cc23.headers["Content-Type"], delete _0x43cc23.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x43cc23.headers = _0x43cc23.headers || {}, Object.assign(_0x43cc23.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x43cc23, (_0x141c96, _0x4dd035, _0x1752b0) => {
        !_0x141c96 && _0x4dd035 && (_0x4dd035.body = _0x1752b0, _0x4dd035.statusCode = _0x4dd035.status);
        _0x5c1c96(_0x141c96, _0x4dd035, _0x1752b0);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x43cc23.opts = _0x43cc23.opts || {}, Object.assign(_0x43cc23.opts, {
        hints: !1
      })), $task.fetch(_0x43cc23).then(_0x41928a => {
        const {
          statusCode: _0x2fc497,
          statusCode: _0x31f137,
          headers: _0x51e4fc,
          body: _0xd75a1a
        } = _0x41928a;
        _0x5c1c96(null, {
          status: _0x2fc497,
          statusCode: _0x31f137,
          headers: _0x51e4fc,
          body: _0xd75a1a
        }, _0xd75a1a);
      }, _0x292e4d => _0x5c1c96(_0x292e4d))) : this.isNode() && (this.initGotEnv(_0x43cc23), this.got(_0x43cc23).on("redirect", (_0x5bd79a, _0x475613) => {
        try {
          if (_0x5bd79a.headers["set-cookie"]) {
            const _0x2075f4 = _0x5bd79a.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(_0x2075f4, null);
            _0x475613.cookieJar = this.ckjar;
          }
        } catch (_0x277c8d) {
          this.logErr(_0x277c8d);
        }
      }).then(_0x479465 => {
        const {
          statusCode: _0x5de42b,
          statusCode: _0x421b06,
          headers: _0x213b52,
          body: _0x1f031c
        } = _0x479465;
        _0x5c1c96(null, {
          status: _0x5de42b,
          statusCode: _0x421b06,
          headers: _0x213b52,
          body: _0x1f031c
        }, _0x1f031c);
      }, _0x55dcee => {
        const {
          message: _0x5b0f74,
          response: _0x3b4186
        } = _0x55dcee;
        _0x5c1c96(_0x5b0f74, _0x3b4186, _0x3b4186 && _0x3b4186.body);
      }));
    }
    post(_0x2f74c7, _0x21ce03 = () => {}) {
      if (_0x2f74c7.body && _0x2f74c7.headers && !_0x2f74c7.headers["Content-Type"] && (_0x2f74c7.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x2f74c7.headers && delete _0x2f74c7.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x2f74c7.headers = _0x2f74c7.headers || {}, Object.assign(_0x2f74c7.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x2f74c7, (_0x476237, _0x1841c5, _0x9c1b2c) => {
          !_0x476237 && _0x1841c5 && (_0x1841c5.body = _0x9c1b2c, _0x1841c5.statusCode = _0x1841c5.status);
          _0x21ce03(_0x476237, _0x1841c5, _0x9c1b2c);
        });
      } else {
        if (this.isQuanX()) {
          _0x2f74c7.method = "POST";
          this.isNeedRewrite && (_0x2f74c7.opts = _0x2f74c7.opts || {}, Object.assign(_0x2f74c7.opts, {
            hints: !1
          }));
          $task.fetch(_0x2f74c7).then(_0x11c335 => {
            const {
              statusCode: _0x4cc4aa,
              statusCode: _0x11acff,
              headers: _0x40ff20,
              body: _0x4db1c2
            } = _0x11c335;
            _0x21ce03(null, {
              status: _0x4cc4aa,
              statusCode: _0x11acff,
              headers: _0x40ff20,
              body: _0x4db1c2
            }, _0x4db1c2);
          }, _0x3c775b => _0x21ce03(_0x3c775b));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x2f74c7);
            const {
              url: _0x1cc066,
              ..._0x405083
            } = _0x2f74c7;
            this.got.post(_0x1cc066, _0x405083).then(_0x203e95 => {
              const {
                statusCode: _0x3f7dc7,
                statusCode: _0x918436,
                headers: _0xd0ff2,
                body: _0x9255e7
              } = _0x203e95;
              _0x21ce03(null, {
                status: _0x3f7dc7,
                statusCode: _0x918436,
                headers: _0xd0ff2,
                body: _0x9255e7
              }, _0x9255e7);
            }, _0xf37ab0 => {
              const {
                message: _0x5a1553,
                response: _0x3416c9
              } = _0xf37ab0;
              _0x21ce03(_0x5a1553, _0x3416c9, _0x3416c9 && _0x3416c9.body);
            });
          }
        }
      }
    }
    put(_0x2abcf6, _0x3d7c0e = () => {}) {
      if (_0x2abcf6.body && _0x2abcf6.headers && !_0x2abcf6.headers["Content-Type"] && (_0x2abcf6.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x2abcf6.headers && delete _0x2abcf6.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x2abcf6.headers = _0x2abcf6.headers || {}, Object.assign(_0x2abcf6.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.put(_0x2abcf6, (_0x33a901, _0x590f3f, _0x19a6ab) => {
          !_0x33a901 && _0x590f3f && (_0x590f3f.body = _0x19a6ab, _0x590f3f.statusCode = _0x590f3f.status);
          _0x3d7c0e(_0x33a901, _0x590f3f, _0x19a6ab);
        });
      } else {
        if (this.isQuanX()) {
          _0x2abcf6.method = "PUT";
          this.isNeedRewrite && (_0x2abcf6.opts = _0x2abcf6.opts || {}, Object.assign(_0x2abcf6.opts, {
            hints: !1
          }));
          $task.fetch(_0x2abcf6).then(_0x2a867c => {
            const {
              statusCode: _0x139950,
              statusCode: _0x4ac927,
              headers: _0x589cb9,
              body: _0xafe5a5
            } = _0x2a867c;
            _0x3d7c0e(null, {
              status: _0x139950,
              statusCode: _0x4ac927,
              headers: _0x589cb9,
              body: _0xafe5a5
            }, _0xafe5a5);
          }, _0x5d5a0c => _0x3d7c0e(_0x5d5a0c));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x2abcf6);
            const {
              url: _0x343d81,
              ..._0x2e7e3d
            } = _0x2abcf6;
            this.got.put(_0x343d81, _0x2e7e3d).then(_0x30d0e6 => {
              const {
                statusCode: _0x2f7d11,
                statusCode: _0x3c1840,
                headers: _0x20fafc,
                body: _0x140ad6
              } = _0x30d0e6;
              _0x3d7c0e(null, {
                status: _0x2f7d11,
                statusCode: _0x3c1840,
                headers: _0x20fafc,
                body: _0x140ad6
              }, _0x140ad6);
            }, _0x54bcb7 => {
              const {
                message: _0x36d394,
                response: _0x3da73b
              } = _0x54bcb7;
              _0x3d7c0e(_0x36d394, _0x3da73b, _0x3da73b && _0x3da73b.body);
            });
          }
        }
      }
    }
    time(_0x3c3657) {
      let _0x5d0955 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x3c3657) && (_0x3c3657 = _0x3c3657.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x366e1a in _0x5d0955) new RegExp("(" + _0x366e1a + ")").test(_0x3c3657) && (_0x3c3657 = _0x3c3657.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5d0955[_0x366e1a] : ("00" + _0x5d0955[_0x366e1a]).substr(("" + _0x5d0955[_0x366e1a]).length)));
      return _0x3c3657;
    }
    msg(_0x580cc3 = _0x5461d2, _0x28ae71 = "", _0x1d42ca = "", _0x1bf8ad) {
      const _0x466828 = _0x29582e => {
        if (!_0x29582e) {
          return _0x29582e;
        }
        if ("string" == typeof _0x29582e) {
          return this.isLoon() ? _0x29582e : this.isQuanX() ? {
            "open-url": _0x29582e
          } : this.isSurge() ? {
            url: _0x29582e
          } : void 0;
        }
        if ("object" == typeof _0x29582e) {
          if (this.isLoon()) {
            let _0x5958b8 = _0x29582e.openUrl || _0x29582e.url || _0x29582e["open-url"],
              _0x390c32 = _0x29582e.mediaUrl || _0x29582e["media-url"];
            return {
              openUrl: _0x5958b8,
              mediaUrl: _0x390c32
            };
          }
          if (this.isQuanX()) {
            let _0x2b2a1f = _0x29582e["open-url"] || _0x29582e.url || _0x29582e.openUrl,
              _0x44b0a0 = _0x29582e["media-url"] || _0x29582e.mediaUrl;
            return {
              "open-url": _0x2b2a1f,
              "media-url": _0x44b0a0
            };
          }
          if (this.isSurge()) {
            let _0x2dcae2 = _0x29582e.url || _0x29582e.openUrl || _0x29582e["open-url"];
            return {
              url: _0x2dcae2
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x580cc3, _0x28ae71, _0x1d42ca, _0x466828(_0x1bf8ad)) : this.isQuanX() && $notify(_0x580cc3, _0x28ae71, _0x1d42ca, _0x466828(_0x1bf8ad)));
      let _0x255844 = ["", "==============📣系统通知📣=============="];
      _0x255844.push(_0x580cc3);
      _0x28ae71 && _0x255844.push(_0x28ae71);
      _0x1d42ca && _0x255844.push(_0x1d42ca);
      console.log(_0x255844.join("\n"));
      this.logs = this.logs.concat(_0x255844);
    }
    log(..._0x1c812a) {
      _0x1c812a.length > 0 && (this.logs = [...this.logs, ..._0x1c812a]);
      console.log(_0x1c812a.join(this.logSeparator));
    }
    logErr(_0x47bcf1, _0x485ea5) {
      const _0x28d6b8 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x28d6b8 ? this.log("", "❗️" + this.name + ", 错误!", _0x47bcf1.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x47bcf1);
    }
    wait(_0x10467e) {
      return new Promise(_0x43335c => setTimeout(_0x43335c, _0x10467e));
    }
    done(_0x5d43b6 = {}) {
      const _0x35ed79 = new Date().getTime(),
        _0x3bb776 = (_0x35ed79 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x3bb776 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x5d43b6);
    }
  }(_0x5461d2, _0x3c8393);
}