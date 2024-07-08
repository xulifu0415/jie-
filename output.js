//Mon Jul 08 2024 14:50:28 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  checkCk,
  getCookies,
  getUserInfo
} = require("./common.js");
const login_tips = "需要登录, 请重新登录";
const request = require("request");
async function lyb_sign(_0x4bf44c) {
  const _0x1dfa95 = await checkCk(_0x4bf44c);
  var _0x100a32 = {
    authority: "mtop.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    asac: "2A21607NIIT1ND5C4YXJ6C",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://tb.ele.me",
    pragma: "no-cache",
    referer: "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
    cookie: _0x1dfa95,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x12b2af = new Date().getTime();
  const _0x497e7c = 12574478;
  const _0x188958 = {
    bizScene: "game_center",
    asac: "2A21607NIIT1ND5C4YXJ6C",
    umidtoken: "defaultToken2_load_failed with timeout@@https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb@@" + _0x12b2af
  };
  var _0x28de24 = "data=" + encodeURIComponent(JSON.stringify(_0x188958));
  const _0x460fe4 = getToken(_0x1dfa95),
    _0x46c1fd = _0x460fe4.split("_")[0];
  const _0x9352ab = sign(_0x46c1fd + "&" + _0x12b2af + "&" + _0x497e7c + "&" + JSON.stringify(_0x188958));
  var _0x1aa1a3 = {
    url: "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/5.0/?jsv=2.7.1&appKey=" + _0x497e7c + "&t=" + _0x12b2af + "&sign=" + _0x9352ab + "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp&useNebulaJSbridge=true&useNebulaJSbridgeWithAMAP=true&dangerouslySetWindvaneParams=%5Bobject%20Object%5D&SV=5.0&asac=2A21607NIIT1ND5C4YXJ6C&secttid=h5%40android_chrome_87.0.4280.141&bx_et=cWSCB31bw_INoGZoxBwNf1XBGbtOanNBBYOVdW-nMfun-zBw6smE0IZEGD0XJhv1.",
    method: "POST",
    headers: _0x100a32,
    body: _0x28de24
  };
  return new Promise(_0x4e79d4 => {
    request(_0x1aa1a3, async (_0x54782c, _0x3f3513, _0xaa4be3) => {
      if (!_0x54782c && _0x3f3513.statusCode == 200) {
        const _0x155ec9 = JSON.parse(_0xaa4be3);
        if (_0x155ec9.data.errorMsg) {
          console.log(_0x155ec9.data.errorMsg);
        } else {
          console.log("签到成功");
        }
        _0x4e79d4(_0x155ec9);
      } else {
        _0x4e79d4(null);
      }
    });
  });
}
async function lyb_llk_token(_0x2da584) {
  const _0x349fdf = {
    bizScene: "LIANLIANKAN",
    bizMethod: "login",
    bizParam: "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}",
    longitude: 114.174328,
    latitude: 22.316555
  };
  const _0x204d95 = await gameRequest(_0x2da584, _0x349fdf);
  return _0x204d95.data.token;
}
async function lyb_llk_gamecode(_0x128209, _0x4c062a) {
  const _0x55d9f0 = {
    bizScene: "LIANLIANKAN",
    bizMethod: "startGame",
    bizParam: "{\"gameId\":null,\"token\":\"" + _0x4c062a + "\"}",
    longitude: 114.174328,
    latitude: 22.316555
  };
  const _0x94d60b = await gameRequest(_0x128209, _0x55d9f0);
  if (_0x94d60b.bizErrorMsg != "success") {
    console.log(_0x94d60b.bizErrorMsg);
    return null;
  }
  return _0x94d60b.data.gameCode;
}
async function lyb_llk_passgame(_0x336062, _0x4f2e18, _0x8cb61b) {
  const _0x74a5e1 = {
    bizScene: "LIANLIANKAN",
    bizMethod: "settlement",
    bizParam: "{\"gameCode\":\"" + _0x4f2e18 + "\",\"passLevelTime\":40351,\"gameId\":null,\"token\":\"" + _0x8cb61b + "\"}"
  };
  const _0x388164 = await gameRequest(_0x336062, _0x74a5e1);
  if (_0x388164.bizErrorMsg != "success") {
    console.log(_0x388164.bizErrorMsg);
    return null;
  }
  return _0x388164.data.lastLevelId;
}
function gameRequest(_0x349ba8, _0x13a890) {
  var _0x12112a = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x349ba8,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x5005e8 = new Date().getTime();
  const _0x5eb928 = 12574478;
  var _0x1ee9d9 = "data=" + encodeURIComponent(JSON.stringify(_0x13a890));
  const _0x5158cd = getToken(_0x349ba8),
    _0x48cf93 = _0x5158cd.split("_")[0];
  const _0x2e8a5b = sign(_0x48cf93 + "&" + _0x5005e8 + "&" + _0x5eb928 + "&" + JSON.stringify(_0x13a890));
  var _0x2fef24 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x5005e8 + "&sign=" + _0x2e8a5b + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x12112a,
    body: _0x1ee9d9
  };
  return new Promise(_0x2a89d9 => {
    request(_0x2fef24, async (_0x5ea4d2, _0x51e64e, _0x21117a) => {
      if (!_0x5ea4d2 && _0x51e64e.statusCode == 200) {
        const _0x1c74ae = JSON.parse(_0x21117a);
        const _0x555d9e = JSON.parse(_0x1c74ae.data.data);
        _0x2a89d9(_0x555d9e);
      } else {
        _0x2a89d9(null);
      }
    });
  });
}
async function llk_game(_0xad724c, _0x1257f4) {
  const _0x4d5677 = await lyb_llk_gamecode(_0xad724c, _0x1257f4);
  if (_0x4d5677) {
    const _0x4aad66 = await lyb_llk_passgame(_0xad724c, _0x4d5677, _0x1257f4);
    if (_0x4aad66 != 3) {
      await llk_game(_0xad724c, _0x1257f4);
    }
  }
  return;
}
async function water_login(_0x42d467) {
  const _0xc98726 = {
    bizScene: "WATER_SORT",
    bizParam: "{\"type\":\"login\"}",
    bizMethod: "login"
  };
  const _0x1e5307 = await gameRequest(_0x42d467, _0xc98726);
  return _0x1e5307;
}
async function water_game_success(_0x496552) {
  const _0xe0dc27 = {
    bizScene: "WATER_SORT",
    bizParam: "{\"type\":\"gameSuccess\"}",
    bizMethod: "gameSuccess"
  };
  const _0x34c64e = await gameRequest(_0x496552, _0xe0dc27);
  return _0x34c64e;
}
async function water_reward(_0x3023a2, _0x49945e) {
  const _0x5bb54e = {
    bizScene: "WATER_SORT",
    bizParam: "{\"type\":\"getPassPrize\",\"data\":{\"addNum\":\"" + _0x49945e + "\",\"type\":1}}",
    bizMethod: "getPassPrize"
  };
  const _0x2a8ba8 = await gameRequest(_0x3023a2, _0x5bb54e);
  return _0x2a8ba8;
}
async function water_game(_0x57cceb) {
  const _0x442502 = await water_login(_0x57cceb);
  const _0x21edad = _0x442502.passConf;
  const _0x1b687a = [];
  for (let _0xba9ebe of Object.values(_0x21edad)) {
    _0x1b687a.push(_0xba9ebe.passNum);
  }
  var _0x1f212c = await water_game_success(_0x57cceb);
  var _0xbbe96a = _0x1f212c.info.todayPass;
  var _0x198112 = 0;
  while (_0xbbe96a <= _0x1b687a[_0x1b687a.length - 1]) {
    _0x1f212c = await water_game_success(_0x57cceb);
    _0xbbe96a = _0x1f212c.info.todayPass;
    console.log("欢乐倒水第" + _0xbbe96a + "关闯关成功");
    if (_0x1b687a.includes(_0xbbe96a)) {
      _0x198112 = _0x1b687a.indexOf(_0xbbe96a) + 1;
      const _0x2a1af3 = await water_reward(_0x57cceb, _0x198112);
      console.log("获得：" + _0x2a1af3.goldnum + "乐园币");
    }
  }
  console.log("快乐倒水闯关完成");
}
async function food_token(_0x392171) {
  const _0x57b5ef = {
    bizScene: "FOOD_ELIMINATE",
    bizMethod: "login",
    bizParam: "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}"
  };
  const _0x2a6e27 = await gameRequest(_0x392171, _0x57b5ef);
  return _0x2a6e27.data.token;
}
async function food_game(_0x2f5fb9, _0x343f4e) {
  const _0x43c000 = await food_level(_0x2f5fb9, _0x343f4e);
  var _0x7dd37b = Object.values(_0x43c000).length;
  var _0x235496 = await food_gamecode(_0x2f5fb9, _0x343f4e, _0x7dd37b + 1);
  while (_0x235496) {
    _0x7dd37b = await food_passgame(_0x2f5fb9, _0x235496, _0x343f4e);
    _0x235496 = await food_gamecode(_0x2f5fb9, _0x343f4e, _0x7dd37b);
  }
}
async function food_gamecode(_0x14c5d1, _0x59636f, _0x9f4044) {
  const _0x3b511c = {
    bizScene: "FOOD_ELIMINATE",
    bizMethod: "startGame",
    bizParam: "{\"levelId\":\"" + _0x9f4044 + "\",\"gameId\":null,\"token\":\"" + _0x59636f + "\"}"
  };
  const _0x4ff3b9 = await gameRequest(_0x14c5d1, _0x3b511c);
  if (_0x4ff3b9.bizErrorMsg != "success") {
    console.log("饿了个饿，体力不足，结束");
    return null;
  }
  return _0x4ff3b9.data.gameCode;
}
async function food_passgame(_0x4389bb, _0x3475d7, _0x2c5a46) {
  const _0x52f99b = {
    bizScene: "FOOD_ELIMINATE",
    bizMethod: "settlement",
    bizParam: "{\"gameCode\":\"" + _0x3475d7 + "\",\"star\":3,\"gameId\":null,\"token\":\"" + _0x2c5a46 + "\"}"
  };
  const _0x29f803 = await gameRequest(_0x4389bb, _0x52f99b);
  if (_0x29f803.bizErrorMsg != "success") {
    console.log(_0x29f803.bizErrorMsg);
    return null;
  }
  return _0x29f803.data.lastLevelId;
}
async function food_level(_0x3bb44e, _0x1a479b) {
  const _0x27d278 = {
    bizScene: "FOOD_ELIMINATE",
    bizMethod: "queryLevels",
    bizParam: "{\"gameId\":null,\"token\":\"" + _0x1a479b + "\"}"
  };
  const _0x5249dc = await gameRequest(_0x3bb44e, _0x27d278);
  if (!_0x5249dc.data) {
    console.log(_0x5249dc.bizErrorMsg);
    return null;
  }
  return _0x5249dc.data.levels;
}
function receive_prize(_0x58934e, _0x253197, _0x44dac3, _0x3e3ce9, _0x5f29cb) {
  var _0x3409c5 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x58934e,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x500f01 = {
    missionCollectionId: _0x253197,
    missionId: _0x44dac3,
    count: "1",
    extInfo: "{\"token\":\"" + _0x3e3ce9 + "\",\"type\":\"Task\",\"count\":1}",
    missionXId: _0x5f29cb,
    umiToken: "1",
    ua: "1",
    locationInfos: "[\"{\\\"lng\\\":120.22057268768549,\\\"lat\\\":30.17862595617771,\\\"city\\\":\\\"330100\\\"}\"]"
  };
  const _0x4048f4 = new Date().getTime();
  const _0x3e15d3 = 12574478;
  var _0x5f12da = "data=" + encodeURIComponent(JSON.stringify(_0x500f01));
  const _0x124a58 = getToken(_0x58934e),
    _0x3f9f9c = _0x124a58.split("_")[0];
  const _0x329cab = sign(_0x3f9f9c + "&" + _0x4048f4 + "&" + _0x3e15d3 + "&" + JSON.stringify(_0x500f01));
  var _0x1e2ea5 = {
    url: "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.core.receiveprize/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x4048f4 + "&sign=" + _0x329cab + "&api=mtop.ele.biz.growth.task.core.receiveprize&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x3409c5,
    body: _0x5f12da
  };
  return new Promise(_0xfa2bea => {
    request(_0x1e2ea5, async (_0x1c3f28, _0x488e9c, _0x504b27) => {
      if (!_0x1c3f28 && _0x488e9c.statusCode == 200) {
        const _0x1cc43c = JSON.parse(_0x504b27);
        const _0x4b7960 = JSON.parse(_0x1cc43c.data.data);
        _0xfa2bea(_0x4b7960);
      } else {
        _0xfa2bea(null);
      }
    });
  });
}
function query_task(_0x2f1e7e) {
  var _0x226ae0 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    cookie: _0x2f1e7e,
    "sec-ch-ua-platform": "Android",
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x1e6cda = {
    missionCollectionId: "532",
    locationInfos: "[\"{\\\"lng\\\":120.22057268768549,\\\"lat\\\":30.17862595617771,\\\"city\\\":\\\"330100\\\"}\"]"
  };
  const _0xf84730 = new Date().getTime();
  const _0x2d7e4a = 12574478;
  var _0x3fa5b4 = "data=" + encodeURIComponent(JSON.stringify(_0x1e6cda));
  const _0xee11a0 = getToken(_0x2f1e7e),
    _0x213851 = _0xee11a0.split("_")[0];
  const _0x5665f5 = sign(_0x213851 + "&" + _0xf84730 + "&" + _0x2d7e4a + "&" + JSON.stringify(_0x1e6cda));
  var _0x1c335d = {
    url: "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.core.querytask/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0xf84730 + "&sign=" + _0x5665f5 + "&api=mtop.ele.biz.growth.task.core.querytask&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "GET",
    headers: _0x226ae0,
    body: _0x3fa5b4
  };
  return new Promise(_0x4d281c => {
    request(_0x1c335d, async (_0x227c30, _0x5c7ec3, _0x55d5a5) => {
      if (!_0x227c30 && _0x5c7ec3.statusCode == 200) {
        const _0x318c01 = JSON.parse(_0x55d5a5);
        const _0x4cb700 = _0x318c01.data.mlist.filter(_0x404fbb => _0x404fbb.actionConfig.actionType == "PAGEVIEW");
        _0x4d281c(_0x4cb700);
      } else {
        _0x4d281c(null);
      }
    });
  });
}
function pageview(_0x59e374, _0x1ea356, _0x413ee2, _0x121298) {
  var _0x49eb88 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x59e374,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x198212 = {
    collectionId: _0x1ea356,
    missionId: _0x413ee2,
    missionXId: _0x121298,
    pageFrom: "gameSource=extVisit ",
    actionCode: "PAGEVIEW",
    viewTime: "15",
    sync: "false",
    locationInfos: "[\"{\\\"lng\\\":120.22057268768549,\\\"lat\\\":30.17862595617771,\\\"city\\\":\\\"330100\\\"}\"]"
  };
  const _0x2dbdfd = new Date().getTime();
  const _0x337532 = 12574478;
  var _0x39f8f6 = "data=" + encodeURIComponent(JSON.stringify(_0x198212));
  const _0x53c7eb = getToken(_0x59e374),
    _0x2a3abe = _0x53c7eb.split("_")[0];
  const _0x4dd7ed = sign(_0x2a3abe + "&" + _0x2dbdfd + "&" + _0x337532 + "&" + JSON.stringify(_0x198212));
  var _0x1d2082 = {
    url: "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.core.querytask/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x2dbdfd + "&sign=" + _0x4dd7ed + "&api=mtop.ele.biz.growth.task.core.querytask&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x49eb88,
    body: _0x39f8f6
  };
  return new Promise(_0xa83aad => {
    request(_0x1d2082, async (_0xd18398, _0x25e405, _0x38b6da) => {
      if (!_0xd18398 && _0x25e405.statusCode == 200) {
        _0xa83aad(filteredData);
      } else {
        _0xa83aad(null);
      }
    });
  });
}
function queryintegralproperty(_0x5f2dfc) {
  var _0xbfa481 = {
    authority: "mtop.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x5f2dfc,
    origin: "https://tb.ele.me",
    pragma: "no-cache",
    referer: "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  var _0x55ee83 = {
    templateIds: "[\"1404\"]"
  };
  const _0x3c773d = new Date().getTime();
  const _0x3369da = 12574478;
  var _0x24fa0c = "data=" + encodeURIComponent(JSON.stringify(_0x55ee83));
  const _0x37d072 = getToken(_0x5f2dfc),
    _0x17caf5 = _0x37d072.split("_")[0];
  const _0x583fea = sign(_0x17caf5 + "&" + _0x3c773d + "&" + _0x3369da + "&" + JSON.stringify(_0x55ee83));
  var _0x2faef4 = {
    url: "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.queryintegralproperty.v2/1.0/5.0/?jsv=2.7.1&appKey=12574478&t=" + _0x3c773d + "&sign=" + _0x583fea + "&api=mtop.koubei.interaction.center.common.queryintegralproperty.v2&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp&useNebulaJSbridge=true&useNebulaJSbridgeWithAMAP=true&dangerouslySetWindvaneParams=%5Bobject%20Object%5D&SV=5.0&secttid=h5%40android_chrome_87.0.4280.141&bx_et=cSxCBnAjwQKaAuiux6MwfCvCG7s1aTlCB812dXS3M5zn-V9N6smU0siUGk4fJGX1.",
    method: "POST",
    headers: _0xbfa481,
    body: _0x24fa0c
  };
  return new Promise(_0x95326d => {
    request(_0x2faef4, async (_0x48001a, _0x3ee015, _0x25cb25) => {
      if (!_0x48001a && _0x3ee015.statusCode == 200) {
        const _0x546a65 = JSON.parse(_0x25cb25);
        console.log("当前乐园币：" + _0x546a65.data.data[1404].count);
        _0x95326d(_0x546a65);
      } else {
        _0x95326d(null);
      }
    });
  });
}
async function start() {
  const _0x3f61ee = getCookies();
  for (let _0x526efe = 0; _0x526efe < _0x3f61ee.length; _0x526efe++) {
    const _0x30b2fc = _0x3f61ee[_0x526efe];
    if (!_0x30b2fc) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        const _0x3a209f = await checkCk(_0x30b2fc);
        if (_0x3a209f == login_tips) {
          console.log("第", _0x526efe + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        let _0x5d114b = await getUserInfo(_0x3a209f);
        if (_0x5d114b.name == "UNAUTHORIZED") {
          console.log("第", _0x526efe + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        console.log("******开始【饿了么账号", _0x526efe + 1, "】", _0x5d114b.username, "*********");
        await queryintegralproperty(_0x3a209f);
        await lyb_sign(_0x3a209f);
        const _0x5401e6 = await lyb_llk_token(_0x3a209f);
        await llk_game(_0x3a209f, _0x5401e6);
        await water_game(_0x3a209f);
        const _0x4cc5dd = await food_token(_0x3a209f);
        await food_game(_0x3a209f, _0x4cc5dd);
        await queryintegralproperty(_0x3a209f);
      } catch (_0x7c489d) {
        console.log(_0x7c489d);
      }
    }
  }
  process.exit(0);
}
start();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
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
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
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
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
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
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
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
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
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
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
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
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
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