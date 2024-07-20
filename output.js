//Sat Jul 20 2024 14:13:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("399乐园");
let mac = "",
  status;
status = (status = $.getval("qmwkstatus") || "1") > 1 ? "" + status : "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "kxnjy.js";
let ly399appArr = [],
  all_msg = "";
let unique = "",
  advert_unique = "",
  request_id,
  token,
  tx,
  num,
  arrs = [],
  ly399app = ($.isNode() ? process.env.ly399app : $.getdata("ly399app")) || "",
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "";
var myDate = new Date(),
  myMonth = myDate.getMonth() + 1,
  myToday = myDate.getDate();
myMonth >= 10 ? myMonth = myMonth : myMonth = "0" + myMonth;
myToday >= 10 ? myToday = myToday : myToday = "0" + myToday;
!(async () => {
  if (!(typeof $request !== "undefined")) {
    ly399appArr = ly399app.split("\n");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + ly399appArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(ly399appArr.length > parseInt(arrs.num))) {
      for (let _0x31a338 = 0; _0x31a338 < ly399appArr.length; _0x31a338++) {
        ly399app = ly399appArr[_0x31a338];
        $.index = _0x31a338 + 1;
        console.log("\n开始【399乐园" + $.index + "】");
        tx = 0;
        await ly399tk();
        await ly399xx();
        await ly399id();
        await ly399kq();
        tx == 1 && (console.log("\n399乐园账号【" + $.index + "】开始看视频提现~"), await ly399id(), await ly399tx());
        await ly399lb();
        console.log("\n399乐园账号【" + $.index + "】开始领取定时红包~");
        await ly399id();
        await ly399hb();
        num < 10 ? (console.log("\n399乐园账号【" + $.index + "】开始领取每日任务红包~"), await ly399id(), await ly399tj()) : await ly399lq();
      }
    }
  }
})().catch(_0x392aab => $.logErr(_0x392aab)).finally(() => $.done());
function ly399tk(_0x5b691f = 0) {
  return new Promise(_0x46135f => {
    let _0x2e3dae = Math.round(new Date().getTime()),
      _0x2b776c = md5("" + _0x2e3dae + ly399app),
      _0x2567e6 = {
        url: "https://339.mhhuanyue.com/ywgame/userLogin/login_app?uuid=" + ly399app + "&version=22071801&channelId=94865a1eeed1b15d",
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x2e3dae,
          sign: _0x2b776c,
          token: "",
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        },
        body: ""
      };
    $.post(_0x2567e6, async (_0x2c3bfd, _0x4fa762, _0x36ece1) => {
      try {
        const _0x5b7d8a = JSON.parse(_0x36ece1);
        _0x5b7d8a.status == 200 ? (console.log("\n399乐园账号【" + $.index + "】获取token：" + _0x5b7d8a.message), token = _0x5b7d8a.data.token) : console.log("\n399乐园账号【" + $.index + "】获取token：" + _0x5b7d8a.message);
      } catch (_0x2bc487) {} finally {
        _0x46135f();
      }
    }, _0x5b691f);
  });
}
function ly399xx(_0x38a395 = 0) {
  return new Promise(_0x522161 => {
    let _0x4f938b = Math.round(new Date().getTime()),
      _0x9948a9 = md5("" + _0x4f938b + token),
      _0x2c0ca6 = {
        url: "https://339.mhhuanyue.com/ywgame/user/getMoney",
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x4f938b,
          sign: _0x9948a9,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        },
        body: ""
      };
    $.post(_0x2c0ca6, async (_0x374698, _0x5011f1, _0x5abbff) => {
      try {
        const _0x12082a = JSON.parse(_0x5abbff);
        _0x12082a.status == 200 ? (console.log("\n399乐园账号【" + $.index + "】余额：" + _0x12082a.data.currentMoney + " 累计收入：" + _0x12082a.data.totalMoney), _0x12082a.data.currentMoney >= 0.3 && (tx = 1)) : console.log("\n399乐园账号【" + $.index + "】余额：" + _0x12082a.message);
      } catch (_0x139a77) {} finally {
        _0x522161();
      }
    }, _0x38a395);
  });
}
function ly399id(_0x350999 = 0) {
  return new Promise(_0x13343f => {
    let _0x3497d7 = Math.round(new Date().getTime()),
      _0x1cf36e = md5("" + _0x3497d7 + token),
      _0x392468 = {
        url: "https://339.mhhuanyue.com/ywgame/adverts/query?adsenses=Pangle%2CGdt%2CGromore%2C&position=reward",
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x3497d7,
          sign: _0x1cf36e,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.get(_0x392468, async (_0x3c5459, _0x5f2c01, _0xb8c306) => {
      try {
        const _0x263d82 = JSON.parse(_0xb8c306);
        _0x263d82.status == 200 ? (console.log("\n399乐园账号【" + $.index + "】获取视频：" + _0x263d82.message), unique = _0x263d82.data.unique, advert_unique = _0x263d82.data.advert_unique, request_id = _0x263d82.data.request_id, await $.wait(6000), await ly399sp1()) : console.log("\n399乐园账号【" + $.index + "】获取视频：" + _0x263d82.message);
      } catch (_0x21ea7c) {} finally {
        _0x13343f();
      }
    }, _0x350999);
  });
}
function ly399sp1(_0x3b9c5b = 0) {
  return new Promise(_0x355071 => {
    let _0x14b9e9 = Math.round(new Date().getTime()),
      _0x593ec9 = md5("" + _0x14b9e9 + token),
      _0xa273b0 = {
        url: "https://339.mhhuanyue.com/ywgame/adverts/event?sub_advert_unique=&join_type=0&sub_advert_adsense_id=0&unique=" + unique + "&extra=&event=loaded&message=&request_id=" + request_id + "&join_type_id=0",
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x14b9e9,
          sign: _0x593ec9,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0xa273b0, async (_0x3eb519, _0x132f24, _0x39682e) => {
      try {
        const _0x3fe895 = JSON.parse(_0x39682e);
        if (_0x3fe895.status == 200) {
          await $.wait(6000);
          await ly399sp2();
        }
      } catch (_0x1f06d2) {} finally {
        _0x355071();
      }
    }, _0x3b9c5b);
  });
}
function ly399sp2(_0x2889a1 = 0) {
  return new Promise(_0x20e8b6 => {
    let _0x4f853a = Math.round(new Date().getTime()),
      _0x513f8b = md5("" + _0x4f853a + token),
      _0x59fa39 = {
        url: "https://339.mhhuanyue.com/ywgame/adverts/event?sub_advert_unique=947486254&join_type=0&sub_advert_adsense_id=1&unique=" + unique + "&extra=&event=show&message=&request_id=" + request_id + "&join_type_id=0",
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x4f853a,
          sign: _0x513f8b,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0x59fa39, async (_0x44a41d, _0x3c09d, _0x3f3f61) => {
      try {
        const _0x339952 = JSON.parse(_0x3f3f61);
        if (_0x339952.status == 200) {
          await $.wait(6000);
          await ly399sp3();
        }
      } catch (_0x2c66f4) {} finally {
        _0x20e8b6();
      }
    }, _0x2889a1);
  });
}
function ly399sp3(_0x4c34e4 = 0) {
  return new Promise(_0x3ef98f => {
    let _0x3d0700 = Math.round(new Date().getTime()),
      _0x4ab7b6 = md5("" + _0x3d0700 + token),
      _0x582b81 = {
        url: "https://339.mhhuanyue.com/ywgame/adverts/event?sub_advert_unique=947486254&join_type=0&sub_advert_adsense_id=1&unique=" + unique + "&extra=&event=rdcompleted&message=&request_id=" + request_id + "&join_type_id=0",
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x3d0700,
          sign: _0x4ab7b6,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0x582b81, async (_0x4e43af, _0xb7f374, _0x213bf1) => {
      try {
        const _0x5d3d4b = JSON.parse(_0x213bf1);
        if (_0x5d3d4b.status == 200) {
          await $.wait(6000);
          await ly399sp4();
        }
      } catch (_0x2ae242) {} finally {
        _0x3ef98f();
      }
    }, _0x4c34e4);
  });
}
function ly399sp4(_0x4be43d = 0) {
  return new Promise(_0x120865 => {
    let _0x259e1a = Math.round(new Date().getTime()),
      _0x52b75c = md5("" + _0x259e1a + token),
      _0x5f4e17 = {
        url: "https://339.mhhuanyue.com/ywgame/adverts/event?sub_advert_unique=947486254&join_type=0&sub_advert_adsense_id=1&unique=" + unique + "&extra=&event=onSkippedVideo&message=&request_id=" + request_id + "&join_type_id=0",
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x259e1a,
          sign: _0x52b75c,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0x5f4e17, async (_0x31f45, _0x59a2f9, _0x467334) => {
      try {
        const _0x2b9c11 = JSON.parse(_0x467334);
        if (_0x2b9c11.status == 200) {
          await $.wait(6000);
          await ly399sp5();
        }
      } catch (_0x510984) {} finally {
        _0x120865();
      }
    }, _0x4be43d);
  });
}
function ly399sp5(_0x4dfee5 = 0) {
  return new Promise(_0x3ccef6 => {
    let _0x39cee4 = Math.round(new Date().getTime()),
      _0x710c32 = md5("" + _0x39cee4 + token),
      _0x28caf5 = {
        url: "https://339.mhhuanyue.com/ywgame/adverts/event?sub_advert_unique=947486254&join_type=0&sub_advert_adsense_id=1&unique=" + unique + "&extra=&event=close&message=&request_id=" + request_id + "&join_type_id=0",
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x39cee4,
          sign: _0x710c32,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0x28caf5, async (_0x424fe5, _0x4ebc3b, _0x5c8781) => {
      try {
        const _0x443da5 = JSON.parse(_0x5c8781);
        if (_0x443da5.status == 200) {
          await $.wait(6000);
        }
      } catch (_0x3d71bd) {} finally {
        _0x3ccef6();
      }
    }, _0x4dfee5);
  });
}
function ly399tj(_0x5109f2 = 0) {
  return new Promise(_0x530e5d => {
    let _0x97dda7 = Math.round(new Date().getTime()),
      _0xea4147 = md5("" + _0x97dda7 + token),
      _0x5a4fd7 = {
        url: "https://339.mhhuanyue.com/ywgame/promotion/dayReceive/checkAd?request_id=" + request_id,
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x97dda7,
          sign: _0xea4147,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0x5a4fd7, async (_0x58ab32, _0x50e1c8, _0x4b32a0) => {
      try {
        const _0x145488 = JSON.parse(_0x4b32a0);
        _0x145488.status == 200 ? console.log("\n399乐园账号【" + $.index + "】提交视频：" + _0x145488.message) : console.log("\n399乐园账号【" + $.index + "】提交视频：" + _0x145488.message);
      } catch (_0x227334) {} finally {
        _0x530e5d();
      }
    }, _0x5109f2);
  });
}
function ly399hb(_0x91cc76 = 0) {
  return new Promise(_0x38778d => {
    let _0x598f1c = Math.round(new Date().getTime()),
      _0x15e541 = md5("" + _0x598f1c + token),
      _0x515a6c = {
        url: "https://339.mhhuanyue.com/ywgame/hoursreward/getReward?request_id=" + request_id,
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x598f1c,
          sign: _0x15e541,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0x515a6c, async (_0x47ba73, _0xa37bd1, _0x3f484f) => {
      try {
        const _0x18bdce = JSON.parse(_0x3f484f);
        _0x18bdce.status == 200 ? (console.log("\n399乐园账号【" + $.index + "】定时红包：" + _0x18bdce.data.amount), await ly399id(), await $.wait(1000), await ly399hb()) : console.log("\n399乐园账号【" + $.index + "】定时红包：" + _0x18bdce.message);
      } catch (_0x4d9cb0) {} finally {
        _0x38778d();
      }
    }, _0x91cc76);
  });
}
function ly399lb(_0x5788f6 = 0) {
  return new Promise(_0x1e5557 => {
    let _0x378bc9 = Math.round(new Date().getTime()),
      _0x441961 = md5("" + _0x378bc9 + token),
      _0x46a50a = {
        url: "https://339.mhhuanyue.com/ywgame/promotion/dayReceive/getStatus",
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x378bc9,
          sign: _0x441961,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0x46a50a, async (_0x41931f, _0x369fed, _0x472b24) => {
      try {
        const _0x298e75 = JSON.parse(_0x472b24);
        _0x298e75.status == 200 ? (console.log("\n399乐园账号【" + $.index + "】任务：" + _0x298e75.data.taskList[0].desc + " 进度：" + _0x298e75.data.taskList[0].cNum + "/" + _0x298e75.data.taskList[0].needNum), num = _0x298e75.data.taskList[0].cNum) : console.log("\n399乐园账号【" + $.index + "】任务：" + _0x298e75.message);
      } catch (_0x24d111) {} finally {
        _0x1e5557();
      }
    }, _0x5788f6);
  });
}
function ly399lq(_0x166dbd = 0) {
  return new Promise(_0x3e3cfe => {
    let _0x83fdb0 = Math.round(new Date().getTime()),
      _0xd29030 = md5("" + _0x83fdb0 + token),
      _0x5edac5 = {
        url: "https://339.mhhuanyue.com/ywgame/promotion/dayReceive/checkTask?configId=1",
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x83fdb0,
          sign: _0xd29030,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0x5edac5, async (_0x380a8d, _0x111320, _0x3e3c0e) => {
      try {
        const _0x5276ac = JSON.parse(_0x3e3c0e);
        _0x5276ac.status == 200 ? console.log("\n399乐园账号【" + $.index + "】领取：" + _0x5276ac.message) : console.log("\n399乐园账号【" + $.index + "】领取：" + _0x5276ac.message);
      } catch (_0x8363a8) {} finally {
        _0x3e3cfe();
      }
    }, _0x166dbd);
  });
}
function ly399tx(_0x5bb09c = 0) {
  return new Promise(_0x22ca3e => {
    let _0x207e6b = Math.round(new Date().getTime()),
      _0x5d6629 = md5("" + _0x207e6b + token),
      _0x4984b4 = {
        url: "https://339.mhhuanyue.com/ywgame/moneyData/cashOutByAd?ver=2&type=wechart&outType=1&request_id=" + request_id,
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x207e6b,
          sign: _0x5d6629,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0x4984b4, async (_0x365161, _0x216cbc, _0x349041) => {
      try {
        const _0x44fe19 = JSON.parse(_0x349041);
        _0x44fe19.status == 200 ? console.log("\n399乐园账号【" + $.index + "】提现：" + _0x44fe19.data) : console.log("\n399乐园账号【" + $.index + "】提现：" + _0x44fe19.message);
      } catch (_0x408cfa) {} finally {
        _0x22ca3e();
      }
    }, _0x5bb09c);
  });
}
function ly399kq(_0x4a4d0c = 0) {
  return new Promise(_0x1b1786 => {
    let _0x261ce0 = Math.round(new Date().getTime()),
      _0x257d27 = md5("" + _0x261ce0 + token),
      _0x397177 = {
        url: "https://339.mhhuanyue.com/ywgame/promotion/dayReceive/startToday?request_id=" + request_id,
        headers: {
          Host: "339.mhhuanyue.com",
          timestamp: _0x261ce0,
          sign: _0x257d27,
          token: token,
          channel: "94865a1eeed1b15d",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
          "Accept-encoding": "gzip"
        }
      };
    $.post(_0x397177, async (_0x41477f, _0x2ad4fd, _0x5648f9) => {
      try {
        const _0x647e02 = JSON.parse(_0x5648f9);
        _0x647e02.status == 200 ? console.log("\n399乐园账号【" + $.index + "】开启名额：" + _0x647e02.message) : console.log("\n399乐园账号【" + $.index + "】开启名额：" + _0x647e02.message);
      } catch (_0xec17ff) {} finally {
        _0x1b1786();
      }
    }, _0x4a4d0c);
  });
}
function randomString(_0x4856fd = 12) {
  let _0x5c74f0 = "abcdef0123456789",
    _0x20feac = _0x5c74f0.length,
    _0x4988d8 = "";
  for (i = 0; i < _0x4856fd; i++) {
    _0x4988d8 += _0x5c74f0.charAt(Math.floor(Math.random() * _0x20feac));
  }
  return _0x4988d8;
}
function random(_0x2f17ee = 12) {
  let _0x327c8f = "0123456789",
    _0x1a466d = _0x327c8f.length,
    _0x196882 = "";
  for (i = 0; i < _0x2f17ee; i++) {
    _0x196882 += _0x327c8f.charAt(Math.floor(Math.random() * _0x1a466d));
  }
  return _0x196882;
}
function encodeUTF8(_0x860e63) {
  var _0x261d8f,
    _0x300af8 = [],
    _0x4148c1,
    _0xd299af;
  for (_0x261d8f = 0; _0x261d8f < _0x860e63.length; _0x261d8f++) {
    if ((_0x4148c1 = _0x860e63.charCodeAt(_0x261d8f)) < 128) {
      _0x300af8.push(_0x4148c1);
    } else {
      if (_0x4148c1 < 2048) {
        _0x300af8.push(192 + (_0x4148c1 >> 6 & 31), 128 + (_0x4148c1 & 63));
      } else {
        if ((_0xd299af = _0x4148c1 ^ 55296) >> 10 == 0) {
          _0x4148c1 = (_0xd299af << 10) + (_0x860e63.charCodeAt(++_0x261d8f) ^ 56320) + 65536;
          _0x300af8.push(240 + (_0x4148c1 >> 18 & 7), 128 + (_0x4148c1 >> 12 & 63));
        } else {
          _0x300af8.push(224 + (_0x4148c1 >> 12 & 15));
        }
        _0x300af8.push(128 + (_0x4148c1 >> 6 & 63), 128 + (_0x4148c1 & 63));
      }
    }
  }
  return _0x300af8;
}
function sha(_0x3396f7) {
  var _0x19ebca = new Uint8Array(encodeUTF8(_0x3396f7)),
    _0x5d374f,
    _0x1c6075,
    _0x2802ca,
    _0x445dcf = (_0x19ebca.length + 8 >>> 6 << 4) + 16,
    _0x3396f7 = new Uint8Array(_0x445dcf << 2);
  _0x3396f7.set(new Uint8Array(_0x19ebca.buffer));
  _0x3396f7 = new Uint32Array(_0x3396f7.buffer);
  for (_0x2802ca = new DataView(_0x3396f7.buffer), _0x5d374f = 0; _0x5d374f < _0x445dcf; _0x5d374f++) {
    _0x3396f7[_0x5d374f] = _0x2802ca.getUint32(_0x5d374f << 2);
  }
  _0x3396f7[_0x19ebca.length >> 2] |= 128 << 24 - (_0x19ebca.length & 3) * 8;
  _0x3396f7[_0x445dcf - 1] = _0x19ebca.length << 3;
  var _0x410721 = [],
    _0x5391cf = [function () {
      return _0x1a9bc2[1] & _0x1a9bc2[2] | ~_0x1a9bc2[1] & _0x1a9bc2[3];
    }, function () {
      return _0x1a9bc2[1] ^ _0x1a9bc2[2] ^ _0x1a9bc2[3];
    }, function () {
      return _0x1a9bc2[1] & _0x1a9bc2[2] | _0x1a9bc2[1] & _0x1a9bc2[3] | _0x1a9bc2[2] & _0x1a9bc2[3];
    }, function () {
      return _0x1a9bc2[1] ^ _0x1a9bc2[2] ^ _0x1a9bc2[3];
    }],
    _0x56a0d8 = function (_0x1b6f82, _0x25c173) {
      return _0x1b6f82 << _0x25c173 | _0x1b6f82 >>> 32 - _0x25c173;
    },
    _0x2fe67b = [1518500249, 1859775393, -1894007588, -899497514],
    _0x1a9bc2 = [1732584193, -271733879, null, null, -1009589776];
  _0x1a9bc2[2] = ~_0x1a9bc2[0];
  _0x1a9bc2[3] = ~_0x1a9bc2[1];
  for (_0x5d374f = 0; _0x5d374f < _0x3396f7.length; _0x5d374f += 16) {
    var _0x57f58f = _0x1a9bc2.slice(0);
    for (_0x1c6075 = 0; _0x1c6075 < 80; _0x1c6075++) {
      _0x410721[_0x1c6075] = _0x1c6075 < 16 ? _0x3396f7[_0x5d374f + _0x1c6075] : _0x56a0d8(_0x410721[_0x1c6075 - 3] ^ _0x410721[_0x1c6075 - 8] ^ _0x410721[_0x1c6075 - 14] ^ _0x410721[_0x1c6075 - 16], 1);
      _0x2802ca = _0x56a0d8(_0x1a9bc2[0], 5) + _0x5391cf[_0x1c6075 / 20 | 0]() + _0x1a9bc2[4] + _0x410721[_0x1c6075] + _0x2fe67b[_0x1c6075 / 20 | 0] | 0;
      _0x1a9bc2[1] = _0x56a0d8(_0x1a9bc2[1], 30);
      _0x1a9bc2.pop();
      _0x1a9bc2.unshift(_0x2802ca);
    }
    for (_0x1c6075 = 0; _0x1c6075 < 5; _0x1c6075++) {
      _0x1a9bc2[_0x1c6075] = _0x1a9bc2[_0x1c6075] + _0x57f58f[_0x1c6075] | 0;
    }
  }
  _0x2802ca = new DataView(new Uint32Array(_0x1a9bc2).buffer);
  for (var _0x5d374f = 0; _0x5d374f < 5; _0x5d374f++) {
    _0x1a9bc2[_0x5d374f] = _0x2802ca.getUint32(_0x5d374f << 2);
  }
  var _0x7aa903 = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x1a9bc2).buffer), function (_0x302f98) {
    return (_0x302f98 < 16 ? "0" : "") + _0x302f98.toString(16);
  }).join("");
  return _0x7aa903;
}
function hqs(_0x1dd06c = 10) {
  return new Promise(_0x2c99a3 => {
    let _0x33fa72 = 12,
      _0x4507a4 = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x33fa72 + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x33fa72 + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x4507a4, async (_0x2c4b19, _0x2127f2, _0x2e66a9) => {
      try {
        let _0x49284b = eval(_0x2e66a9);
        _0x49284b.code == 200 ? (all_msg = _0x49284b.msg, _0x2c99a3(_0x49284b.data)) : (all_msg = _0x49284b.msg, _0x2c99a3(false));
      } catch (_0x173c64) {
        $.logErr(_0x173c64, _0x2127f2);
      }
    }, 0);
  });
}
function md5(_0xc1fcac) {
  function _0x576fb4(_0x3443f6, _0x13a85c) {
    return _0x3443f6 << _0x13a85c | _0x3443f6 >>> 32 - _0x13a85c;
  }
  function _0x2e1983(_0xa53cdf, _0x78c0a1) {
    var _0x58426b, _0x12e50a, _0x37dfa4, _0x4319f1, _0x44b0d4;
    _0x37dfa4 = 2147483648 & _0xa53cdf;
    _0x4319f1 = 2147483648 & _0x78c0a1;
    _0x58426b = 1073741824 & _0xa53cdf;
    _0x12e50a = 1073741824 & _0x78c0a1;
    _0x44b0d4 = (1073741823 & _0xa53cdf) + (1073741823 & _0x78c0a1);
    return _0x58426b & _0x12e50a ? 2147483648 ^ _0x44b0d4 ^ _0x37dfa4 ^ _0x4319f1 : _0x58426b | _0x12e50a ? 1073741824 & _0x44b0d4 ? 3221225472 ^ _0x44b0d4 ^ _0x37dfa4 ^ _0x4319f1 : 1073741824 ^ _0x44b0d4 ^ _0x37dfa4 ^ _0x4319f1 : _0x44b0d4 ^ _0x37dfa4 ^ _0x4319f1;
  }
  function _0xa3a607(_0x3117ef, _0x11ee4c, _0x23955d) {
    return _0x3117ef & _0x11ee4c | ~_0x3117ef & _0x23955d;
  }
  function _0x10b139(_0x452b92, _0x4c1484, _0x5522d9) {
    return _0x452b92 & _0x5522d9 | _0x4c1484 & ~_0x5522d9;
  }
  function _0x551c23(_0x3ae083, _0x55c663, _0x2cbec7) {
    return _0x3ae083 ^ _0x55c663 ^ _0x2cbec7;
  }
  function _0x3ada73(_0x1d23c5, _0x3cdd10, _0x4f512f) {
    return _0x3cdd10 ^ (_0x1d23c5 | ~_0x4f512f);
  }
  function _0x5efe89(_0x5ec141, _0x399908, _0x43367c, _0x18fbce, _0x55103a, _0x5c37ee, _0x2f6aa7) {
    _0x5ec141 = _0x2e1983(_0x5ec141, _0x2e1983(_0x2e1983(_0xa3a607(_0x399908, _0x43367c, _0x18fbce), _0x55103a), _0x2f6aa7));
    return _0x2e1983(_0x576fb4(_0x5ec141, _0x5c37ee), _0x399908);
  }
  function _0x3bbcb8(_0x1eda40, _0x228527, _0x2dcfeb, _0x3b1ed5, _0x54cd55, _0x228502, _0x47a8ee) {
    _0x1eda40 = _0x2e1983(_0x1eda40, _0x2e1983(_0x2e1983(_0x10b139(_0x228527, _0x2dcfeb, _0x3b1ed5), _0x54cd55), _0x47a8ee));
    return _0x2e1983(_0x576fb4(_0x1eda40, _0x228502), _0x228527);
  }
  function _0x36e874(_0x1e8088, _0x3f5cf7, _0x429f29, _0x4038b1, _0x17457b, _0x48db4a, _0x45c2b4) {
    _0x1e8088 = _0x2e1983(_0x1e8088, _0x2e1983(_0x2e1983(_0x551c23(_0x3f5cf7, _0x429f29, _0x4038b1), _0x17457b), _0x45c2b4));
    return _0x2e1983(_0x576fb4(_0x1e8088, _0x48db4a), _0x3f5cf7);
  }
  function _0x1cab12(_0x3c8516, _0x1eeb90, _0x12c460, _0x1ac336, _0x5dc745, _0xdec188, _0x9532dc) {
    _0x3c8516 = _0x2e1983(_0x3c8516, _0x2e1983(_0x2e1983(_0x3ada73(_0x1eeb90, _0x12c460, _0x1ac336), _0x5dc745), _0x9532dc));
    return _0x2e1983(_0x576fb4(_0x3c8516, _0xdec188), _0x1eeb90);
  }
  function _0x267710(_0x44c079) {
    for (var _0x94439d, _0x3b9762 = _0x44c079.length, _0x4cb97e = _0x3b9762 + 8, _0x54fe0e = (_0x4cb97e - _0x4cb97e % 64) / 64, _0x416ce0 = 16 * (_0x54fe0e + 1), _0x3ba6b1 = new Array(_0x416ce0 - 1), _0x41c1dd = 0, _0x306a8b = 0; _0x3b9762 > _0x306a8b;) {
      _0x94439d = (_0x306a8b - _0x306a8b % 4) / 4;
      _0x41c1dd = _0x306a8b % 4 * 8;
      _0x3ba6b1[_0x94439d] = _0x3ba6b1[_0x94439d] | _0x44c079.charCodeAt(_0x306a8b) << _0x41c1dd;
      _0x306a8b++;
    }
    _0x94439d = (_0x306a8b - _0x306a8b % 4) / 4;
    _0x41c1dd = _0x306a8b % 4 * 8;
    _0x3ba6b1[_0x94439d] = _0x3ba6b1[_0x94439d] | 128 << _0x41c1dd;
    _0x3ba6b1[_0x416ce0 - 2] = _0x3b9762 << 3;
    _0x3ba6b1[_0x416ce0 - 1] = _0x3b9762 >>> 29;
    return _0x3ba6b1;
  }
  function _0x26d11b(_0x258fc4) {
    var _0x138be3,
      _0x1c22e4,
      _0x139c98 = "",
      _0x58d8a8 = "";
    for (_0x1c22e4 = 0; 3 >= _0x1c22e4; _0x1c22e4++) {
      _0x138be3 = _0x258fc4 >>> 8 * _0x1c22e4 & 255;
      _0x58d8a8 = "0" + _0x138be3.toString(16);
      _0x139c98 += _0x58d8a8.substr(_0x58d8a8.length - 2, 2);
    }
    return _0x139c98;
  }
  function _0x24089f(_0x495e31) {
    _0x495e31 = _0x495e31.replace(/\r\n/g, "\n");
    for (var _0x414293 = "", _0x481f88 = 0; _0x481f88 < _0x495e31.length; _0x481f88++) {
      var _0x4a3b4c = _0x495e31.charCodeAt(_0x481f88);
      128 > _0x4a3b4c ? _0x414293 += String.fromCharCode(_0x4a3b4c) : _0x4a3b4c > 127 && 2048 > _0x4a3b4c ? (_0x414293 += String.fromCharCode(_0x4a3b4c >> 6 | 192), _0x414293 += String.fromCharCode(63 & _0x4a3b4c | 128)) : (_0x414293 += String.fromCharCode(_0x4a3b4c >> 12 | 224), _0x414293 += String.fromCharCode(_0x4a3b4c >> 6 & 63 | 128), _0x414293 += String.fromCharCode(63 & _0x4a3b4c | 128));
    }
    return _0x414293;
  }
  var _0x211dba,
    _0x3abdcf,
    _0x3ad708,
    _0x24aaab,
    _0x571292,
    _0x172f48,
    _0xae7ba6,
    _0x3b0612,
    _0x82f8a0,
    _0x34734e = [],
    _0x85d705 = 7,
    _0x4c4ba6 = 12,
    _0x3ab6f6 = 17,
    _0xe4c002 = 22,
    _0x11a66c = 5,
    _0x4fcdd1 = 9,
    _0xd11e36 = 14,
    _0x10bffb = 20,
    _0x24647e = 4,
    _0x158f41 = 11,
    _0x5420d5 = 16,
    _0x4fbe60 = 23,
    _0x17e97d = 6,
    _0x156468 = 10,
    _0x4cf147 = 15,
    _0x4dc186 = 21;
  for (_0xc1fcac = _0x24089f(_0xc1fcac), _0x34734e = _0x267710(_0xc1fcac), _0x172f48 = 1732584193, _0xae7ba6 = 4023233417, _0x3b0612 = 2562383102, _0x82f8a0 = 271733878, _0x211dba = 0; _0x211dba < _0x34734e.length; _0x211dba += 16) {
    _0x3abdcf = _0x172f48;
    _0x3ad708 = _0xae7ba6;
    _0x24aaab = _0x3b0612;
    _0x571292 = _0x82f8a0;
    _0x172f48 = _0x5efe89(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 0], _0x85d705, 3614090360);
    _0x82f8a0 = _0x5efe89(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 1], _0x4c4ba6, 3905402710);
    _0x3b0612 = _0x5efe89(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 2], _0x3ab6f6, 606105819);
    _0xae7ba6 = _0x5efe89(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 3], _0xe4c002, 3250441966);
    _0x172f48 = _0x5efe89(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 4], _0x85d705, 4118548399);
    _0x82f8a0 = _0x5efe89(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 5], _0x4c4ba6, 1200080426);
    _0x3b0612 = _0x5efe89(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 6], _0x3ab6f6, 2821735955);
    _0xae7ba6 = _0x5efe89(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 7], _0xe4c002, 4249261313);
    _0x172f48 = _0x5efe89(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 8], _0x85d705, 1770035416);
    _0x82f8a0 = _0x5efe89(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 9], _0x4c4ba6, 2336552879);
    _0x3b0612 = _0x5efe89(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 10], _0x3ab6f6, 4294925233);
    _0xae7ba6 = _0x5efe89(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 11], _0xe4c002, 2304563134);
    _0x172f48 = _0x5efe89(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 12], _0x85d705, 1804603682);
    _0x82f8a0 = _0x5efe89(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 13], _0x4c4ba6, 4254626195);
    _0x3b0612 = _0x5efe89(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 14], _0x3ab6f6, 2792965006);
    _0xae7ba6 = _0x5efe89(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 15], _0xe4c002, 1236535329);
    _0x172f48 = _0x3bbcb8(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 1], _0x11a66c, 4129170786);
    _0x82f8a0 = _0x3bbcb8(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 6], _0x4fcdd1, 3225465664);
    _0x3b0612 = _0x3bbcb8(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 11], _0xd11e36, 643717713);
    _0xae7ba6 = _0x3bbcb8(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 0], _0x10bffb, 3921069994);
    _0x172f48 = _0x3bbcb8(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 5], _0x11a66c, 3593408605);
    _0x82f8a0 = _0x3bbcb8(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 10], _0x4fcdd1, 38016083);
    _0x3b0612 = _0x3bbcb8(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 15], _0xd11e36, 3634488961);
    _0xae7ba6 = _0x3bbcb8(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 4], _0x10bffb, 3889429448);
    _0x172f48 = _0x3bbcb8(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 9], _0x11a66c, 568446438);
    _0x82f8a0 = _0x3bbcb8(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 14], _0x4fcdd1, 3275163606);
    _0x3b0612 = _0x3bbcb8(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 3], _0xd11e36, 4107603335);
    _0xae7ba6 = _0x3bbcb8(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 8], _0x10bffb, 1163531501);
    _0x172f48 = _0x3bbcb8(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 13], _0x11a66c, 2850285829);
    _0x82f8a0 = _0x3bbcb8(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 2], _0x4fcdd1, 4243563512);
    _0x3b0612 = _0x3bbcb8(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 7], _0xd11e36, 1735328473);
    _0xae7ba6 = _0x3bbcb8(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 12], _0x10bffb, 2368359562);
    _0x172f48 = _0x36e874(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 5], _0x24647e, 4294588738);
    _0x82f8a0 = _0x36e874(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 8], _0x158f41, 2272392833);
    _0x3b0612 = _0x36e874(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 11], _0x5420d5, 1839030562);
    _0xae7ba6 = _0x36e874(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 14], _0x4fbe60, 4259657740);
    _0x172f48 = _0x36e874(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 1], _0x24647e, 2763975236);
    _0x82f8a0 = _0x36e874(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 4], _0x158f41, 1272893353);
    _0x3b0612 = _0x36e874(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 7], _0x5420d5, 4139469664);
    _0xae7ba6 = _0x36e874(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 10], _0x4fbe60, 3200236656);
    _0x172f48 = _0x36e874(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 13], _0x24647e, 681279174);
    _0x82f8a0 = _0x36e874(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 0], _0x158f41, 3936430074);
    _0x3b0612 = _0x36e874(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 3], _0x5420d5, 3572445317);
    _0xae7ba6 = _0x36e874(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 6], _0x4fbe60, 76029189);
    _0x172f48 = _0x36e874(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 9], _0x24647e, 3654602809);
    _0x82f8a0 = _0x36e874(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 12], _0x158f41, 3873151461);
    _0x3b0612 = _0x36e874(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 15], _0x5420d5, 530742520);
    _0xae7ba6 = _0x36e874(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 2], _0x4fbe60, 3299628645);
    _0x172f48 = _0x1cab12(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 0], _0x17e97d, 4096336452);
    _0x82f8a0 = _0x1cab12(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 7], _0x156468, 1126891415);
    _0x3b0612 = _0x1cab12(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 14], _0x4cf147, 2878612391);
    _0xae7ba6 = _0x1cab12(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 5], _0x4dc186, 4237533241);
    _0x172f48 = _0x1cab12(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 12], _0x17e97d, 1700485571);
    _0x82f8a0 = _0x1cab12(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 3], _0x156468, 2399980690);
    _0x3b0612 = _0x1cab12(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 10], _0x4cf147, 4293915773);
    _0xae7ba6 = _0x1cab12(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 1], _0x4dc186, 2240044497);
    _0x172f48 = _0x1cab12(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 8], _0x17e97d, 1873313359);
    _0x82f8a0 = _0x1cab12(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 15], _0x156468, 4264355552);
    _0x3b0612 = _0x1cab12(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 6], _0x4cf147, 2734768916);
    _0xae7ba6 = _0x1cab12(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 13], _0x4dc186, 1309151649);
    _0x172f48 = _0x1cab12(_0x172f48, _0xae7ba6, _0x3b0612, _0x82f8a0, _0x34734e[_0x211dba + 4], _0x17e97d, 4149444226);
    _0x82f8a0 = _0x1cab12(_0x82f8a0, _0x172f48, _0xae7ba6, _0x3b0612, _0x34734e[_0x211dba + 11], _0x156468, 3174756917);
    _0x3b0612 = _0x1cab12(_0x3b0612, _0x82f8a0, _0x172f48, _0xae7ba6, _0x34734e[_0x211dba + 2], _0x4cf147, 718787259);
    _0xae7ba6 = _0x1cab12(_0xae7ba6, _0x3b0612, _0x82f8a0, _0x172f48, _0x34734e[_0x211dba + 9], _0x4dc186, 3951481745);
    _0x172f48 = _0x2e1983(_0x172f48, _0x3abdcf);
    _0xae7ba6 = _0x2e1983(_0xae7ba6, _0x3ad708);
    _0x3b0612 = _0x2e1983(_0x3b0612, _0x24aaab);
    _0x82f8a0 = _0x2e1983(_0x82f8a0, _0x571292);
  }
  var _0x1f508d = _0x26d11b(_0x172f48) + _0x26d11b(_0xae7ba6) + _0x26d11b(_0x3b0612) + _0x26d11b(_0x82f8a0);
  return _0x1f508d.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x429004) {
    var _0x296aa2 = "",
      _0x200fa0,
      _0x5aad83,
      _0x698fc0,
      _0x5de1c3,
      _0x5e34ca,
      _0x1f6a2f,
      _0x2657e4,
      _0x5dcb37 = 0;
    _0x429004 = _utf8_encode(_0x429004);
    while (_0x5dcb37 < _0x429004.length) {
      _0x200fa0 = _0x429004.charCodeAt(_0x5dcb37++);
      _0x5aad83 = _0x429004.charCodeAt(_0x5dcb37++);
      _0x698fc0 = _0x429004.charCodeAt(_0x5dcb37++);
      _0x5de1c3 = _0x200fa0 >> 2;
      _0x5e34ca = (_0x200fa0 & 3) << 4 | _0x5aad83 >> 4;
      _0x1f6a2f = (_0x5aad83 & 15) << 2 | _0x698fc0 >> 6;
      _0x2657e4 = _0x698fc0 & 63;
      if (isNaN(_0x5aad83)) {
        _0x1f6a2f = _0x2657e4 = 64;
      } else {
        isNaN(_0x698fc0) && (_0x2657e4 = 64);
      }
      _0x296aa2 = _0x296aa2 + _keyStr.charAt(_0x5de1c3) + _keyStr.charAt(_0x5e34ca) + _keyStr.charAt(_0x1f6a2f) + _keyStr.charAt(_0x2657e4);
    }
    return _0x296aa2;
  };
  this.decode = function (_0x44b61e) {
    var _0x3a5c64 = "",
      _0x3fd36c,
      _0x5a6955,
      _0x4497bc,
      _0x2e9123,
      _0x16e259,
      _0x41bf74,
      _0x537af0,
      _0x1cf1d9 = 0;
    _0x44b61e = _0x44b61e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x1cf1d9 < _0x44b61e.length) {
      _0x2e9123 = _keyStr.indexOf(_0x44b61e.charAt(_0x1cf1d9++));
      _0x16e259 = _keyStr.indexOf(_0x44b61e.charAt(_0x1cf1d9++));
      _0x41bf74 = _keyStr.indexOf(_0x44b61e.charAt(_0x1cf1d9++));
      _0x537af0 = _keyStr.indexOf(_0x44b61e.charAt(_0x1cf1d9++));
      _0x3fd36c = _0x2e9123 << 2 | _0x16e259 >> 4;
      _0x5a6955 = (_0x16e259 & 15) << 4 | _0x41bf74 >> 2;
      _0x4497bc = (_0x41bf74 & 3) << 6 | _0x537af0;
      _0x3a5c64 = _0x3a5c64 + String.fromCharCode(_0x3fd36c);
      _0x41bf74 != 64 && (_0x3a5c64 = _0x3a5c64 + String.fromCharCode(_0x5a6955));
      _0x537af0 != 64 && (_0x3a5c64 = _0x3a5c64 + String.fromCharCode(_0x4497bc));
    }
    _0x3a5c64 = _utf8_decode(_0x3a5c64);
    return _0x3a5c64;
  };
  _utf8_encode = function (_0x14be2f) {
    _0x14be2f = _0x14be2f.replace(/\r\n/g, "\n");
    var _0x25953d = "";
    for (var _0x2fb2dc = 0; _0x2fb2dc < _0x14be2f.length; _0x2fb2dc++) {
      var _0x4a0522 = _0x14be2f.charCodeAt(_0x2fb2dc);
      if (_0x4a0522 < 128) {
        _0x25953d += String.fromCharCode(_0x4a0522);
      } else {
        _0x4a0522 > 127 && _0x4a0522 < 2048 ? (_0x25953d += String.fromCharCode(_0x4a0522 >> 6 | 192), _0x25953d += String.fromCharCode(_0x4a0522 & 63 | 128)) : (_0x25953d += String.fromCharCode(_0x4a0522 >> 12 | 224), _0x25953d += String.fromCharCode(_0x4a0522 >> 6 & 63 | 128), _0x25953d += String.fromCharCode(_0x4a0522 & 63 | 128));
      }
    }
    return _0x25953d;
  };
  _utf8_decode = function (_0x1470d2) {
    c1 = c2 = 0;
    var _0x2a996a = "",
      _0x5dbb32 = 0,
      _0x1ac071 = c1;
    while (_0x5dbb32 < _0x1470d2.length) {
      _0x1ac071 = _0x1470d2.charCodeAt(_0x5dbb32);
      if (_0x1ac071 < 128) {
        _0x2a996a += String.fromCharCode(_0x1ac071);
        _0x5dbb32++;
      } else {
        _0x1ac071 > 191 && _0x1ac071 < 224 ? (c2 = _0x1470d2.charCodeAt(_0x5dbb32 + 1), _0x2a996a += String.fromCharCode((_0x1ac071 & 31) << 6 | c2 & 63), _0x5dbb32 += 2) : (c2 = _0x1470d2.charCodeAt(_0x5dbb32 + 1), c3 = _0x1470d2.charCodeAt(_0x5dbb32 + 2), _0x2a996a += String.fromCharCode((_0x1ac071 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x5dbb32 += 3);
      }
    }
    return _0x2a996a;
  };
}
function rc4(_0x18cb6a, _0x1b0cc6) {
  var _0x4a79b6 = Array(256),
    _0x34e32a = Array(_0x18cb6a.length);
  for (var _0x5d93cb = 0; _0x5d93cb < 256; _0x5d93cb++) {
    _0x4a79b6[_0x5d93cb] = _0x5d93cb;
    var _0x3db2fb = (_0x3db2fb + _0x4a79b6[_0x5d93cb] + _0x1b0cc6.charCodeAt(_0x5d93cb % _0x1b0cc6.length)) % 256,
      _0x5119a7 = _0x4a79b6[_0x5d93cb];
    _0x4a79b6[_0x5d93cb] = _0x4a79b6[_0x3db2fb];
    _0x4a79b6[_0x3db2fb] = _0x5119a7;
  }
  for (var _0x5d93cb = 0; _0x5d93cb < _0x18cb6a.length; _0x5d93cb++) {
    _0x34e32a[_0x5d93cb] = _0x18cb6a.charCodeAt(_0x5d93cb);
  }
  for (var _0x5e7a5a = 0; _0x5e7a5a < _0x34e32a.length; _0x5e7a5a++) {
    var _0x5d93cb = (_0x5d93cb + 1) % 256,
      _0x3db2fb = (_0x3db2fb + _0x4a79b6[_0x5d93cb]) % 256,
      _0x5119a7 = _0x4a79b6[_0x5d93cb];
    _0x4a79b6[_0x5d93cb] = _0x4a79b6[_0x3db2fb];
    _0x4a79b6[_0x3db2fb] = _0x5119a7;
    var _0x37f23c = (_0x4a79b6[_0x5d93cb] + _0x4a79b6[_0x3db2fb] % 256) % 256;
    _0x34e32a[_0x5e7a5a] = String.fromCharCode(_0x34e32a[_0x5e7a5a] ^ _0x4a79b6[_0x37f23c]);
  }
  return _0x34e32a.join("");
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
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
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.get(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let s = require("iconv-lite");
            this.initGotEnv(t);
            this.got(t).on("redirect", (t, e) => {
              try {
                if (t.headers["set-cookie"]) {
                  const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  s && this.ckjar.setCookieSync(s, null);
                  e.cookieJar = this.ckjar;
                }
              } catch (t) {
                this.logErr(t);
              }
            }).then(t => {
              const {
                statusCode: i,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: i,
                statusCode: r,
                headers: o,
                rawBody: h
              }, s.decode(h, this.encoding));
            }, t => {
              const {
                message: i,
                response: r
              } = t;
              e(i, r, r && s.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient[s](t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let i = require("iconv-lite");
            this.initGotEnv(t);
            const {
              url: r,
              ...o
            } = t;
            this.got[s](r, o).then(t => {
              const {
                statusCode: s,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: s,
                statusCode: r,
                headers: o,
                rawBody: h
              }, i.decode(h, this.encoding));
            }, t => {
              const {
                message: s,
                response: r
              } = t;
              e(s, r, r && i.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    fwcaas() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    fwur() {
      var bbas = new FxPCnMKLw7();
      return bbas.decode(this.fwcaas());
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}