(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = tt.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _tt$getSystemInfoSync =




  tt.getSystemInfoSync(),platform = _tt$getSystemInfoSync.platform,pixelRatio = _tt$getSystemInfoSync.pixelRatio,windowWidth = _tt$getSystemInfoSync.windowWidth; // uni=>tt runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return tt.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || tt.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    tt.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


var oName = 'getUserInfo';
var nName = 'getUserProfile';

var getUserProfile = {
  name: tt.canIUse(nName) ? nName : oName };


// 不支持的 API 列表
var todos = [
'preloadPage',
'unPreloadPage',
'loadSubPackage'
// 'createCameraContext',
// 'createLivePlayerContext',
// 'getSavedFileInfo',
// 'createMapContext',
// 'onMemoryWarning',
// 'onGyroscopeChange',
// 'startGyroscope',
// 'stopGyroscope',
// 'setScreenBrightness',
// 'getScreenBrightness',
// 'addPhoneContact',
// 'openBluetoothAdapter',
// 'startBluetoothDevicesDiscovery',
// 'onBluetoothDeviceFound',
// 'stopBluetoothDevicesDiscovery',
// 'onBluetoothAdapterStateChange',
// 'getConnectedBluetoothDevices',
// 'getBluetoothDevices',
// 'getBluetoothAdapterState',
// 'closeBluetoothAdapter',
// 'writeBLECharacteristicValue',
// 'readBLECharacteristicValue',
// 'onBLEConnectionStateChange',
// 'onBLECharacteristicValueChange',
// 'notifyBLECharacteristicValueChange',
// 'getBLEDeviceServices',
// 'getBLEDeviceCharacteristics',
// 'createBLEConnection',
// 'closeBLEConnection',
// 'onBeaconServiceChange',
// 'onBeaconUpdate',
// 'getBeacons',
// 'startBeaconDiscovery',
// 'stopBeaconDiscovery',
// 'showNavigationBarLoading',
// 'hideNavigationBarLoading',
// 'setTabBarItem',
// 'setTabBarStyle',
// 'hideTabBar',
// 'showTabBar',
// 'setTabBarBadge',
// 'removeTabBarBadge',
// 'showTabBarRedDot',
// 'hideTabBarRedDot',
// 'setBackgroundColor',
// 'setBackgroundTextStyle',
// 'chooseInvoiceTitle',
// 'addTemplate',
// 'deleteTemplate',
// 'getTemplateLibraryById',
// 'getTemplateLibraryList',
// 'getTemplateList',
// 'sendTemplateMessage',
// 'setEnableDebug',
// 'onWindowResize',
// 'offWindowResize',
// 'createOffscreenCanvas',
// 'vibrate'
];

// 存在兼容性的 API 列表
// 头条小程序自1.35.0+支持canIUses
var canIUses = [
  // 'createIntersectionObserver',
  // 'getSavedFileList',
  // 'removeSavedFile',
  // 'hideKeyboard',
  // 'getImageInfo',
  // 'createVideoContext',
  // 'onSocketOpen',
  // 'onSocketError',
  // 'sendSocketMessage',
  // 'onSocketMessage',
  // 'closeSocket',
  // 'onSocketClose',
  // 'getExtConfig',
  // 'getExtConfigSync',
  // 'navigateToMiniProgram',
  // 'navigateBackMiniProgram',
  // 'compressImage',
  // 'chooseLocation',
  // 'openDocument',
  // 'onUserCaptureScreen',
  // 'getBackgroundAudioManager',
  // 'setNavigationBarColor',
];

// 需要做转换的 API 列表
var protocols = {
  chooseImage: {
    args: {
      sizeType: false } },


  navigateTo: navigateTo,
  redirectTo: redirectTo,
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  getUserProfile: getUserProfile,
  connectSocket: {
    args: {
      method: false } },


  chooseVideo: {
    args: {
      camera: false } },


  scanCode: {
    args: {
      onlyFromCamera: false,
      scanType: false } },


  startAccelerometer: {
    args: {
      interval: false } },


  showToast: {
    args: {
      image: false,
      mask: false } },


  showLoading: {
    args: {
      mask: false } },


  showModal: {
    args: {
      cancelColor: false,
      confirmColor: false } },


  showActionSheet: {
    args: {
      itemColor: false } },


  login: {
    args: {
      scopes: false,
      timeout: false } },


  getUserInfo: {
    args: {
      lang: false,
      timeout: false } },


  requestPayment: {
    name: tt.pay ? 'pay' : 'requestPayment',
    args: {
      orderInfo: tt.pay ? 'orderInfo' : 'data' } },


  getFileInfo: {
    args: {
      digestAlgorithm: false } } };




var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5934\u6761\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5934\u6761\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = tt[methodName].apply(tt, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['toutiao'],
  share: ['toutiao'],
  payment: ['toutiao'],
  push: ['toutiao'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


function createMediaQueryObserver() {
  var mediaQueryObserver = {};var _tt$getSystemInfoSync2 =



  tt.getSystemInfoSync(),windowWidth = _tt$getSystemInfoSync2.windowWidth,windowHeight = _tt$getSystemInfoSync2.windowHeight;

  var orientation = windowWidth < windowHeight ? 'portrait' : 'landscape';

  mediaQueryObserver.observe = function (options, callback) {
    var matches = true;
    for (var item in options) {
      var itemValue = item === 'orientation' ? options[item] : Number(options[item]);
      if (options[item] !== '') {
        if (item === 'width') {
          if (itemValue === windowWidth) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minWidth') {
          if (windowWidth >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxWidth') {
          if (windowWidth <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'height') {
          if (itemValue === windowHeight) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minHeight') {
          if (windowHeight >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxHeight') {
          if (windowHeight <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'orientation') {
          if (options[item] === orientation) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
      }
    }
    callback(matches);

    return matches;
  };

  mediaQueryObserver.disconnect = function () {
  };

  return mediaQueryObserver;
}

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createMediaQueryObserver: createMediaQueryObserver });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options, isComponent) {
  {
    // fix by Lxh 字节自定义组件Component构造器文档上写有created，但是实测只触发了lifetimes上的created
    isComponent && (options = options.lifetimes);
  }
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options, true);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"TodayTops","VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "tt".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var locale;

{
  locale = tt.getSystemInfoSync().language;
}

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this3 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this3.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel$1() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel$1();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-toutiao";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, tt.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

var mocks = ['__route__', '__webviewId__', '__nodeid__', '__nodeId__'];

function isPage() {
  return this.__nodeid__ === 0 || this.__nodeId__ === 0;
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  /* eslint-disable no-undef */
  var minorVersion = parseInt(tt.getSystemInfoSync().SDKVersion.split('.')[1]);
  if (minorVersion > 16) {
    Object.defineProperty(vm, '$refs', {
      get: function get() {
        var $refs = {};
        var components = mpInstance.selectAllComponents('.vue-ref');
        components.forEach(function (component) {
          var ref = component.dataset.ref;
          $refs[ref] = component.$vm || component;
        });
        var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
        forComponents.forEach(function (component) {
          var ref = component.dataset.ref;
          if (!$refs[ref]) {
            $refs[ref] = [];
          }
          $refs[ref].push(component.$vm || component);
        });
        return $refs;
      } });

  } else {
    mpInstance.selectAllComponents('.vue-ref', function (components) {
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        vm.$refs[ref] = component.$vm || component;
      });
    });
    mpInstance.selectAllComponents('.vue-ref-in-for', function (forComponents) {
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!vm.$refs[ref]) {
          vm.$refs[ref] = [];
        }
        vm.$refs[ref].push(component.$vm || component);
      });
    });
  }
}

var instances = Object.create(null);

function initRelation(_ref5)


{var vuePid = _ref5.vuePid,mpInstance = _ref5.mpInstance;
  // 头条 triggerEvent 后，接收事件时机特别晚，已经到了 ready 之后
  var nodeId = (mpInstance.__nodeId__ || mpInstance.__nodeid__) + '';
  var webviewId = mpInstance.__webviewId__ + '';

  instances[webviewId + '_' + nodeId] = mpInstance.$vm;

  this.triggerEvent('__l', {
    vuePid: vuePid,
    nodeId: nodeId,
    webviewId: webviewId });

}

function handleLink$1(_ref6)





{var _ref6$detail = _ref6.detail,vuePid = _ref6$detail.vuePid,nodeId = _ref6$detail.nodeId,webviewId = _ref6$detail.webviewId;
  var vm = instances[webviewId + '_' + nodeId];
  if (!vm) {
    return;
  }

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vm.$parent = parentVm;
  vm.$root = parentVm.$root;
  parentVm.$children.push(vm);

  vm.__call_hook('created');
  vm.__call_hook('beforeMount');
  vm._isMounted = true;
  vm.__call_hook('mounted');
  vm.__call_hook('onReady');
}

function parseApp(vm) {
  _vue.default.prototype._$fallback = true; // 降级（调整原 vue 的部分生命周期，如 created，beforeMount,inject,provide）

  _vue.default.mixin({
    created: function created() {// 处理 injections,头条 triggerEvent 是异步，且触发时机很慢，故延迟 relation 设置
      if (this.mpType !== 'app') {
        if (
        this.mpType === 'page' &&
        !this.$scope.route &&
        this.$scope.__route__)
        {
          this.$scope.route = this.$scope.__route__;
        }

        initRefs(this);

        this.__init_injections(this);
        this.__init_provide(this);
      }
    } });


  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: function initRefs() {} // attached 时，可能查询不到
  });
}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref7.isPage,initRelation = _ref7.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

var components = [];

function parseComponent(vueOptions) {var _parseBaseComponent =
  parseBaseComponent(vueOptions),_parseBaseComponent2 = _slicedToArray(_parseBaseComponent, 2),componentOptions = _parseBaseComponent2[0],VueComponent = _parseBaseComponent2[1];

  // 基础库 2.0 以上 attached 顺序错乱，按照 created 顺序强制纠正
  componentOptions.lifetimes.created = function created() {
    components.push(this);
  };

  componentOptions.lifetimes.attached = function attached() {
    this.__lifetimes_attached = function () {
      var properties = this.properties;

      var options = {
        mpType: isPage.call(this) ? 'page' : 'component',
        mpInstance: this,
        propsData: properties };


      initVueIds(properties.vueId, this);

      // 初始化 vue 实例
      this.$vm = new VueComponent(options);

      // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
      initSlots(this.$vm, properties.vueSlots);

      // 处理父子关系
      initRelation.call(this, {
        vuePid: this._$vuePid,
        mpInstance: this });


      // 触发首次 setData
      this.$vm.$mount();
    };
    var component = this;
    while (component && component.__lifetimes_attached && components[0] && component === components[0]) {
      components.shift();
      component.__lifetimes_attached();
      delete component.__lifetimes_attached;
      component = components[0];
    }
  };

  // ready 比 handleLink 还早，初始化逻辑放到 handleLink 中
  delete componentOptions.lifetimes.ready;

  componentOptions.methods.__l = handleLink$1;

  return componentOptions;
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref8)


{var isPage = _ref8.isPage,initRelation = _ref8.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  var pageOptions = parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

  // 页面需要在 ready 中触发，其他组件是在 handleLink 中触发
  pageOptions.lifetimes.ready = function ready() {
    if (this.$vm && this.$vm.mpType === 'page') {
      this.$vm.__call_hook('created');
      this.$vm.__call_hook('beforeMount');
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');
      this.$vm.__call_hook('onReady');
    } else {
      this.is && console.warn(this.is + ' is not ready');
    }
  };

  pageOptions.lifetimes.detached = function detached() {
    this.$vm && this.$vm.$destroy();
    // 清理
    var webviewId = this.__webviewId__;
    webviewId && Object.keys(instances).forEach(function (key) {
      if (key.indexOf(webviewId + '_') === 0) {
        delete instances[key];
      }
    });
  };

  return pageOptions;
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && tt.onAppShow) {
    tt.onAppShow(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && tt.onAppHide) {
    tt.onAppHide(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = tt.getLaunchOptionsSync && tt.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && tt.onAppShow) {
    tt.onAppShow(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && tt.onAppHide) {
    tt.onAppHide(function () {for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {args[_key9] = arguments[_key9];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = tt.getLaunchOptionsSync && tt.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!tt.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-toutiao" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(tt, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, tt[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(tt).forEach(function (name) {
    if (hasOwn(tt, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, tt[name]));
    }
  });
}

tt.createApp = createApp;
tt.createPage = createPage;
tt.createComponent = createComponent;
tt.createSubpackageApp = createSubpackageApp;
tt.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"TodayTops","VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"TodayTops","VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"TodayTops","VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"TodayTops","VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!*********************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/pages.json ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/*!******************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/ajax.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



var _js_sdk = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/u-ajax/js_sdk */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // ajax.js
// ajax.js
// 引入 uni-ajax 模块
// 创建请求实例
var instance = _js_sdk.default.create({ // 初始配置
  baseURL: 'https://qcxlld.fn.thelarkcloud.com' });


// 添加请求拦截器
instance.interceptors.request.use(
function (config) {
  // 在发送请求前做些什么
  return config;
},
function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
instance.interceptors.response.use(
function (response) {
  // 对响应数据做些什么
  return response;
},
function (error) {
  // 对响应错误做些什么
  return Promise.reject(error);
});


// 导出 create 创建后的实例
var _default = instance; // 导出创建后的实例
exports.default = _default;

/***/ }),
/* 13 */
/*!*********************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _Ajax = _interopRequireDefault(__webpack_require__(/*! ./lib/core/Ajax */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function createInstance(defaultConfig) {
  return new _Ajax.default(defaultConfig).request;
}

var ajax = createInstance();

ajax.create = function create(instanceConfig) {
  return createInstance(instanceConfig);
};var _default =

ajax;exports.default = _default;

/***/ }),
/* 14 */
/*!*****************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/core/Ajax.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 15));var _InterceptorManager = _interopRequireDefault(__webpack_require__(/*! ./InterceptorManager */ 18));
var _Request = _interopRequireDefault(__webpack_require__(/*! ../adapters/Request */ 19));
var _detachConfig2 = _interopRequireDefault(__webpack_require__(/*! ../helpers/detachConfig */ 20));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ../helpers/mergeConfig */ 23));
var _originURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/originURL */ 24));
var _dispatchRequest = _interopRequireDefault(__webpack_require__(/*! ./dispatchRequest */ 25));
var _handleCancel = __webpack_require__(/*! ./handleCancel */ 30);
var _defaults = _interopRequireWildcard(__webpack_require__(/*! ../defaults */ 28));
var _utils = __webpack_require__(/*! ../utils */ 22);function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var

Ajax = /*#__PURE__*/function () {
  function Ajax(_config) {var _this = this;_classCallCheck(this, Ajax);_defineProperty(this, "request",





































    function () {
      // 分类请求参数
      var _detachConfig = _detachConfig2.default.apply(void 0, arguments),callback = _detachConfig.callback,config = _detachConfig.config;

      // 创建请求类
      var Request = (0, _Request.default)();

      // 声明 Promise 链
      var chain = [(0, _dispatchRequest.default)(Request), _handleCancel.dispatchCancel];

      // 将请求拦截遍历添加到链前面
      _this.request.interceptors.request.forEach.desc(function (_ref) {var fulfilled = _ref.fulfilled,rejected = _ref.rejected;return (
          chain.unshift(fulfilled, rejected));});


      // 将响应拦截遍历添加到链后面
      _this.request.interceptors.response.forEach.asc(function (_ref2) {var fulfilled = _ref2.fulfilled,rejected = _ref2.rejected;return (
          chain.push(fulfilled, (0, _handleCancel.interceptCancel)(rejected)));});


      // 先执行获取 config 请求配置
      chain.unshift( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(config) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.t0 = _mergeConfig.default;_context.next = 3;return _this.config;case 3:_context.t1 = _context.sent;_context.t2 = config;return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2));case 6:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref3.apply(this, arguments);};}(), undefined);

      // 处理发起请求前的错误数据
      chain.push(undefined, _handleCancel.detachCancel);

      // 调用请求方法后，且拦截器触发完成后，判断回调参数的执行
      chain.push(
      function (response) {var _callback$success, _callback$complete;
        if (!callback) return response;
        (_callback$success = callback.success) === null || _callback$success === void 0 ? void 0 : _callback$success.call(callback, response);
        (_callback$complete = callback.complete) === null || _callback$complete === void 0 ? void 0 : _callback$complete.call(callback, response);
      },
      function (error) {var _callback$fail, _callback$complete2;
        if (!callback) return Promise.reject(error);
        (_callback$fail = callback.fail) === null || _callback$fail === void 0 ? void 0 : _callback$fail.call(callback, error);
        (_callback$complete2 = callback.complete) === null || _callback$complete2 === void 0 ? void 0 : _callback$complete2.call(callback, error);
      });


      // 创建请求Promise，遍历链将链上方法传递到then回调
      var request = Request.resolve(config);
      while (chain.length) {
        request = request.then(chain.shift(), chain.shift());
      }

      return request;
    }); // 赋值到实例配置
    this.config = _config; // 挂载拦截器
    this.request.interceptors = { request: new _InterceptorManager.default(), response: new _InterceptorManager.default() }; // 挂载修改 config 方法
    this.request.config = /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(fn) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return fn(_this._config);case 2:return _context2.abrupt("return", _this.config = _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2);}));return function (_x2) {return _ref4.apply(this, arguments);};}(); // 挂载对应的 method 方法
    (0, _utils.forEach)(_defaults.METHOD, function (method) {_this.request[method] = function (url, data, config) {return _this.request.apply(_this, _toConsumableArray(typeof url === 'string' ? [url, data, _objectSpread(_objectSpread({}, config), {}, { method: method })] : [_objectSpread(_objectSpread({}, url), {}, { method: method })]));};}); // 挂载实例接口地址
    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return _this.config;case 2:_context3.t0 = _context3.sent.baseURL;if (_context3.t0) {_context3.next = 5;break;}_context3.t0 = '';case 5:_this.request.baseURL = _context3.t0;_this.request.origin = (0, _originURL.default)(_this.request.baseURL);case 7:case "end":return _context3.stop();}}}, _callee3);})));}_createClass(Ajax, [{ key: "config", set: function set(config) {this._config = typeof config === 'function' ? /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.t0 = _mergeConfig.default;_context4.t1 = _defaults.default;_context4.next = 4;return config();case 4:_context4.t2 = _context4.sent;return _context4.abrupt("return", (0, _context4.t0)(_context4.t1, _context4.t2));case 6:case "end":return _context4.stop();}}}, _callee4);})) : (0, _mergeConfig.default)(_defaults.default, config);}, get: function get() {return typeof this._config === 'function' ? this._config() : this._config;} }]);return Ajax;}();exports.default = Ajax;

/***/ }),
/* 15 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 16);

/***/ }),
/* 16 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 17);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 17 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 18 */
/*!*******************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/core/InterceptorManager.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 拦截器类
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var
InterceptorManager = /*#__PURE__*/function () {


  function InterceptorManager() {var _this = this;_classCallCheck(this, InterceptorManager);_defineProperty(this, "handlers", []);
    this.forEach = {
      asc: function asc(fn) {
        for (var i = 0, l = _this.handlers.length; i < l; i++) {
          _this.handlers[i] !== null && fn(_this.handlers[i]);
        }
      },
      desc: function desc(fn) {
        for (var i = _this.handlers.length - 1; i >= 0; i--) {
          _this.handlers[i] !== null && fn(_this.handlers[i]);
        }
      } };

  }_createClass(InterceptorManager, [{ key: "use", value: function use(

    fulfilled, rejected) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected });

      return this.handlers.length - 1;
    } }, { key: "eject", value: function eject(
    id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    } }]);return InterceptorManager;}();exports.default = InterceptorManager;

/***/ }),
/* 19 */
/*!************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/adapters/Request.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = RequestConstructor;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function RequestConstructor() {var _class, _temp;
  return _temp = _class = /*#__PURE__*/function (_Promise) {_inherits(Request, _Promise);var _super = _createSuper(Request);function Request() {_classCallCheck(this, Request);return _super.apply(this, arguments);}_createClass(Request, [{ key: "abort",




























      // 中断请求任务
      value: function abort() {var _Request$task;
        Request.aborted = true;
        (_Request$task = Request.task) === null || _Request$task === void 0 ? void 0 : _Request$task.abort();
        return this;
      }
      // 监听 HTTP Response Header 事件
    }, { key: "onHeadersReceived", value: function onHeadersReceived(fn) {
        Request.onHeadersReceived(fn);
        return this;
      }
      // 取消监听 HTTP Response Header 事件
    }, { key: "offHeadersReceived", value: function offHeadersReceived(fn) {
        Request.offHeadersReceived(fn);
        return this;
      } }], [{ key: "onHeadersReceived", // RequestTask 对象
      // 请求任务是否被中断
      // 监听 HTTP Response Header 事件回调函数
      // 取消监听 HTTP Response Header 事件回调函数
      // 监听 HTTP Response Header 事件执行函数
      value: function onHeadersReceived(fn) {if (typeof fn === 'function') {Request.onHeadersReceivedCallback = fn;}if (Request.onHeadersReceivedCallback && Request.task) {var _Request$task$onHeade, _Request$task2;(_Request$task$onHeade = (_Request$task2 = Request.task).onHeadersReceived) === null || _Request$task$onHeade === void 0 ? void 0 : _Request$task$onHeade.call(_Request$task2, Request.onHeadersReceivedCallback);}} // 取消监听 HTTP Response Header 事件执行函数
    }, { key: "offHeadersReceived", value: function offHeadersReceived(fn) {if (typeof fn === 'function') {Request.offHeadersReceivedCallback = fn;}if (Request.offHeadersReceivedCallback && Request.task) {var _Request$task$offHead, _Request$task3;(_Request$task$offHead = (_Request$task3 = Request.task).offHeadersReceived) === null || _Request$task$offHead === void 0 ? void 0 : _Request$task$offHead.call(_Request$task3, Request.offHeadersReceivedCallback);}} }]);return Request;}( /*#__PURE__*/_wrapNativeSuper(Promise)), _defineProperty(_class, "task", null), _defineProperty(_class, "aborted", false), _defineProperty(_class, "onHeadersReceivedCallback", null), _defineProperty(_class, "offHeadersReceivedCallback", null), _temp;}

/***/ }),
/* 20 */
/*!****************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/helpers/detachConfig.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = detachConfig;var _isCallback = _interopRequireDefault(__webpack_require__(/*! ./isCallback */ 21));
var _utils = __webpack_require__(/*! ../utils */ 22);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * 分离请求对象
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {string|object} [url] 请求地址 / 请求配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {string|object} [data] 请求参数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {object} [config] 请求配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @returns {object} 回调函数对象 去除回调的请求参数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
function detachConfig(url, data, config) {
  // 回调函数对象
  var callback = null;
  // 去除回调的请求参数对象
  var options = {};

  // 是否传入单个参数
  var isSingle = typeof url === 'object';

  // 请求参数对象
  var value = isSingle ? url : _objectSpread(_objectSpread({}, config), {}, { url: url, data: data });

  // 分离请求参数
  (0, _utils.forEach)(value, function (val, key) {
    if (isSingle && (0, _isCallback.default)(key)) {
      ;(callback || (callback = {}))[key] = (0, _utils.tryCatch)(val);
    } else {
      options[key] = val;
    }
  });

  return {
    callback: callback,
    config: options };

}

/***/ }),
/* 21 */
/*!**************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/helpers/isCallback.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = isCallback; /**
                                                                                                          * 判断参数是否含有回调参数 success / fail / complete 之一
                                                                                                          * @param {string} field 参数的 Key 值字符串
                                                                                                          * @returns {boolean} 返回判断值
                                                                                                          */
function isCallback(field) {
  return ['success', 'fail', 'complete'].includes(field);
}

/***/ }),
/* 22 */
/*!*************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/utils.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isArray = isArray;exports.isPlainObject = isPlainObject;exports.forEach = forEach;exports.merge = merge;exports.assign = assign;exports.tryCatch = tryCatch; /**
                                                                                                                                                                                                                                                 * 获取值的原始类型字符串，例如 [object Object]
                                                                                                                                                                                                                                                 */
var _toString = Object.prototype.toString;

/**
                                            * 判断是否为数组
                                            * @param {*} val 要判断的值
                                            * @returns {boolean} 返回判断结果
                                            */
function isArray(val) {
  return _toString.call(val) === '[object Array]';
}

/**
   * 判断是否为普通对象
   * @param {*} val 要判断的值
   * @returns {boolean} 返回判断结果
   */
function isPlainObject(val) {
  return _toString.call(val) === '[object Object]';
}

/**
   * 遍历
   * @param {object|array} obj 要迭代的对象
   * @param {function} fn 为每个项调用的回调
   */
function forEach(obj, fn) {
  if (obj === null || obj === undefined) return;
  if (typeof obj !== 'object') obj = [obj];
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        fn.call(null, obj[k], k, obj);
      }
    }
  }
}

/**
   * 对象深合并
   * @param  {...object} args 对象
   * @returns {object} 合并后的对象
   */
function merge() {
  var result = {};for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
  for (var i = 0, l = args.length; i < l; i++) {
    if (isPlainObject(args[i])) {
      forEach(args[i], function (val, key) {
        result[key] = assign(result[key], val);
      });
    }
  }
  return result;
}

/**
   * 合并分配到目标对象
   * @param {*} target 目标对象
   * @param {*} source 源对象
   * @returns {*} 目标对象
   */
function assign(target, source) {
  if (isPlainObject(target) && isPlainObject(source)) {
    return merge(target, source);
  } else if (isPlainObject(source)) {
    return merge({}, source);
  } else if (isArray(source)) {
    return source.slice();
  }
  return source;
}

/**
   * trycatch 封装函数
   * @param {function} fn 函数
   * @returns {function} 封装 trycatch 后的函数
   */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (error) {
      console.error(error);
    }
  };
}

/***/ }),
/* 23 */
/*!***************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/helpers/mergeConfig.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = mergeConfig;var _utils = __webpack_require__(/*! ../utils */ 22);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * 合并请求配置（深度合并，且不合并 undefined 值）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @param {object} config1 前请求配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @param {object} [config2] 后请求配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @returns {object} 合并后的请求配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */
function mergeConfig(config1) {var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = {};

  var configKeys = Object.keys(_objectSpread(_objectSpread({}, config1), config2));

  (0, _utils.forEach)(configKeys, function (prop) {
    if (config2[prop] !== undefined) {
      config[prop] = (0, _utils.assign)(config1[prop], config2[prop]);
    } else if (config1[prop] !== undefined) {
      config[prop] = (0, _utils.assign)(undefined, config1[prop]);
    }
  });

  config.method = config.method.toUpperCase();

  return config;
}

/***/ }),
/* 24 */
/*!*************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/helpers/originURL.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = originURL; /**
                                                                                                         * 根据 baseURL 获取源地址
                                                                                                         * @param {string} baseURL 请求跟地址
                                                                                                         * @returns {string} 源地址
                                                                                                         */
function originURL() {var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  // 判断是否 http:// 或 https:// 开头
  if (!/^https?:\/\//.test(baseURL)) return '';
  var u = baseURL.split('/');
  return u[0] + '//' + u[2];
}

/***/ }),
/* 25 */
/*!****************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/core/dispatchRequest.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = dispatchRequest;var _buildURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/buildURL */ 26));
var _combineURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/combineURL */ 27));
var _isCallback = _interopRequireDefault(__webpack_require__(/*! ../helpers/isCallback */ 21));
var _utils = __webpack_require__(/*! ../utils */ 22);
var _defaults = __webpack_require__(/*! ../defaults */ 28);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                      * 派发请求方法
                                                                                                                                      * @param {*} Request 请求类
                                                                                                                                      * @returns {Promise} 执行请求方法Promise
                                                                                                                                      */
function dispatchRequest(Request) {
  return function (config) {
    // 拼接 url
    config.url = (0, _buildURL.default)((0, _combineURL.default)(config.baseURL, config.url), config.params);

    // 请求方法转大写
    config.method = (config.method || 'get').toUpperCase();

    // 调整 header 优先级
    config.header = (0, _utils.merge)(
    config.header.common,
    config.header[config.method.toLowerCase()],
    config.header);


    // 清除多余的请求头
    (0, _utils.forEach)(_defaults.HEADER, function (h) {return (0, _utils.isPlainObject)(config.header[h]) && delete config.header[h];});

    // 清除回调函数
    (0, _utils.forEach)(config, function (val, key) {return (0, _isCallback.default)(key) && delete config[key];});

    // 执行请求方法
    return config.adapter(config, Request);
  };
}

/***/ }),
/* 26 */
/*!************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/helpers/buildURL.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildURL;var _utils = __webpack_require__(/*! ../utils */ 22);

/**
                                                                                                                                         * 根据params编译请求URL
                                                                                                                                         * @param {string} url 请求URL
                                                                                                                                         * @param {*} params URL参数
                                                                                                                                         */
function buildURL(url, params) {
  if (!params) return url;

  var query;

  var parts = [];
  (0, _utils.forEach)(params, function (val, key) {
    if (val === null || typeof val === 'undefined') return;

    if ((0, _utils.isArray)(val)) key = key + '[]';else
    val = [val];

    (0, _utils.forEach)(val, function (v) {
      if (v !== null && typeof v === 'object') {
        v = JSON.stringify(v);
      }
      parts.push(encode(key) + '=' + encode(v));
    });
  });
  query = parts.join('&');

  if (query) {
    var hashmarkIndex = url.indexOf('#');
    hashmarkIndex !== -1 && (url = url.slice(0, hashmarkIndex));
    url += (url.indexOf('?') === -1 ? '?' : '&') + query;
  }

  return url;
}

function encode(val) {
  return encodeURIComponent(val).
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/***/ }),
/* 27 */
/*!**************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/helpers/combineURL.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = combineURL; /**
                                                                                                          * 根据 baseURL 和 url 拼接
                                                                                                          * @param {string} baseURL 请求跟地址
                                                                                                          * @param {string} relativeURL 请求参数地址
                                                                                                          * @returns {string} 拼接后的地址
                                                                                                          */
function combineURL() {var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var relativeURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  // 判断是否 http:// 或 https:// 开头
  if (/^https?:\/\//.test(relativeURL)) return relativeURL;
  // 去除 baseURL 结尾斜杠，去除 relativeURL 开头斜杠，再判断拼接
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/***/ }),
/* 28 */
/*!****************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/defaults.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.HEADER = exports.METHOD = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! ./adapters/http */ 29));
var _utils = __webpack_require__(/*! ./utils */ 22);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var METHOD = ['get', 'post', 'put', 'delete', 'connect', 'head', 'options', 'trace'];exports.METHOD = METHOD;
var HEADER = ['common'].concat(METHOD);exports.HEADER = HEADER;

var defaults = {
  adapter: _http.default,
  header: {},
  method: 'get',
  timeout: 30000,
  dataType: 'json',
  responseType: 'text',
  sslVerify: true,
  withCredentials: false,
  firstIpv4: false,
  validateStatus: function validateStatus(statusCode) {return statusCode >= 200 && statusCode < 300;} };


(0, _utils.forEach)(HEADER, function (h) {return defaults.header[h] = {};});var _default =

defaults;exports.default = _default;

/***/ }),
/* 29 */
/*!*********************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/adapters/http.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = adapter;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function adapter(config, Request) {
  return new Promise(function (resolve, reject) {var _config$xhr;
    // 判断是否被取消请求
    if (Request.aborted) {
      return reject({
        config: config,
        errMsg: 'request:fail abort' });

    }

    // 发起请求，并挂载 RequestTask
    Request.task = uni.request(_objectSpread(_objectSpread({},
    config), {}, {
      complete: function complete(result) {
        // 根据状态码判断要执行的触发的状态
        var response = _objectSpread({ config: config }, result);
        !config.validateStatus || config.validateStatus(result.statusCode) ?
        resolve(response) :
        reject(response);
      } }));


    // 请求类内部判断是否执行监听 HTTP Response Header 事件
    Request.onHeadersReceived();
    Request.offHeadersReceived();

    // 根据配置的 xhr 属性执行获取 RequestTask
    (_config$xhr = config.xhr) === null || _config$xhr === void 0 ? void 0 : _config$xhr.call(config, Request.task, config);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 30 */
/*!*************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/u-ajax/js_sdk/lib/core/handleCancel.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.dispatchCancel = dispatchCancel;exports.interceptCancel = interceptCancel;exports.detachCancel = detachCancel;function _objectWithoutProperties(source, excluded) {if (source == null) return {};var target = _objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];}}return target;}function _objectWithoutPropertiesLoose(source, excluded) {if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];}return target;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * 派发请求拒绝方法，处理发起请求前错误，取消执行请求，并防止进入响应拦截器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @param {*} reason 错误原因
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @returns {Promise} 封装了 __CANCEL__ 的失败对象
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */
function dispatchCancel(reason) {
  return Promise.reject({
    reason: reason,
    __CANCEL__: true });

}

/**
   * 拦截失败对象
   * @param {Function} rejected 响应错误拦截器
   */
function interceptCancel(rejected) {
  // 判断发起请求前是否发生错误，如果发生错误则不执行后面的响应错误拦截器
  return (
    rejected && function (response) {return response.__CANCEL__ ? Promise.reject(response) : rejected(response);});

}

/**
   * 分离失败对象
   * @param {*} response 封装了 __CANCEL__ 的失败对象
   */
function detachCancel(_ref) {var __CANCEL__ = _ref.__CANCEL__,error = _objectWithoutProperties(_ref, ["__CANCEL__"]);
  return Promise.reject(__CANCEL__ ? error.reason : error);
}

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/*!**************************************************************************************************!*\
  !*** D:/frontend/HBuilderProjects/TodayTops/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "pulldown": "\uE588",
  "refreshempty": "\uE461",
  "back": "\uE471",
  "forward": "\uE470",
  "more": "\uE507",
  "more-filled": "\uE537",
  "scan": "\uE612",
  "qq": "\uE264",
  "weibo": "\uE260",
  "weixin": "\uE261",
  "pengyouquan": "\uE262",
  "loop": "\uE565",
  "refresh": "\uE407",
  "refresh-filled": "\uE437",
  "arrowthindown": "\uE585",
  "arrowthinleft": "\uE586",
  "arrowthinright": "\uE587",
  "arrowthinup": "\uE584",
  "undo-filled": "\uE7D6",
  "undo": "\uE406",
  "redo": "\uE405",
  "redo-filled": "\uE7D9",
  "bars": "\uE563",
  "chatboxes": "\uE203",
  "camera": "\uE301",
  "chatboxes-filled": "\uE233",
  "camera-filled": "\uE7EF",
  "cart-filled": "\uE7F4",
  "cart": "\uE7F5",
  "checkbox-filled": "\uE442",
  "checkbox": "\uE7FA",
  "arrowleft": "\uE582",
  "arrowdown": "\uE581",
  "arrowright": "\uE583",
  "smallcircle-filled": "\uE801",
  "arrowup": "\uE580",
  "circle": "\uE411",
  "eye-filled": "\uE568",
  "eye-slash-filled": "\uE822",
  "eye-slash": "\uE823",
  "eye": "\uE824",
  "flag-filled": "\uE825",
  "flag": "\uE508",
  "gear-filled": "\uE532",
  "reload": "\uE462",
  "gear": "\uE502",
  "hand-thumbsdown-filled": "\uE83B",
  "hand-thumbsdown": "\uE83C",
  "hand-thumbsup-filled": "\uE83D",
  "heart-filled": "\uE83E",
  "hand-thumbsup": "\uE83F",
  "heart": "\uE840",
  "home": "\uE500",
  "info": "\uE504",
  "home-filled": "\uE530",
  "info-filled": "\uE534",
  "circle-filled": "\uE441",
  "chat-filled": "\uE847",
  "chat": "\uE263",
  "mail-open-filled": "\uE84D",
  "email-filled": "\uE231",
  "mail-open": "\uE84E",
  "email": "\uE201",
  "checkmarkempty": "\uE472",
  "list": "\uE562",
  "locked-filled": "\uE856",
  "locked": "\uE506",
  "map-filled": "\uE85C",
  "map-pin": "\uE85E",
  "map-pin-ellipse": "\uE864",
  "map": "\uE364",
  "minus-filled": "\uE440",
  "mic-filled": "\uE332",
  "minus": "\uE410",
  "micoff": "\uE360",
  "mic": "\uE302",
  "clear": "\uE434",
  "smallcircle": "\uE868",
  "close": "\uE404",
  "closeempty": "\uE460",
  "paperclip": "\uE567",
  "paperplane": "\uE503",
  "paperplane-filled": "\uE86E",
  "person-filled": "\uE131",
  "contact-filled": "\uE130",
  "person": "\uE101",
  "contact": "\uE100",
  "images-filled": "\uE87A",
  "phone": "\uE200",
  "images": "\uE87B",
  "image": "\uE363",
  "image-filled": "\uE877",
  "location-filled": "\uE333",
  "location": "\uE303",
  "plus-filled": "\uE439",
  "plus": "\uE409",
  "plusempty": "\uE468",
  "help-filled": "\uE535",
  "help": "\uE505",
  "navigate-filled": "\uE884",
  "navigate": "\uE501",
  "mic-slash-filled": "\uE892",
  "search": "\uE466",
  "settings": "\uE560",
  "sound": "\uE590",
  "sound-filled": "\uE8A1",
  "spinner-cycle": "\uE465",
  "download-filled": "\uE8A4",
  "personadd-filled": "\uE132",
  "videocam-filled": "\uE8AF",
  "personadd": "\uE102",
  "upload": "\uE402",
  "upload-filled": "\uE8B1",
  "starhalf": "\uE463",
  "star-filled": "\uE438",
  "star": "\uE408",
  "trash": "\uE401",
  "phone-filled": "\uE230",
  "compose": "\uE400",
  "videocam": "\uE300",
  "trash-filled": "\uE8DC",
  "download": "\uE403",
  "chatbubble-filled": "\uE232",
  "chatbubble": "\uE202",
  "cloud-download": "\uE8E4",
  "cloud-upload-filled": "\uE8E5",
  "cloud-upload": "\uE8E6",
  "cloud-download-filled": "\uE8E9",
  "headphones": "\uE8BF",
  "shop": "\uE609" };exports.default = _default;

/***/ })
]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1tcC10b3V0aWFvL2Rpc3QvaW5kZXguanM/ZjI2NiIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvbXAtdnVlL2Rpc3QvbXAucnVudGltZS5lc20uanM/NjZmZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1pMThuL2Rpc3QvdW5pLWkxOG4uZXMuanM/MzdkYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/ZjBjNSIsInVuaS1hcHA6Ly8vYWpheC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9pbmRleC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvY29yZS9BamF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcz9hMzRhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzP2JiZGQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcz85NmNmIiwidW5pLWFwcDovLy91bmlfbW9kdWxlcy91LWFqYXgvanNfc2RrL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvYWRhcHRlcnMvUmVxdWVzdC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvaGVscGVycy9kZXRhY2hDb25maWcuanMiLCJ1bmktYXBwOi8vL3VuaV9tb2R1bGVzL3UtYWpheC9qc19zZGsvbGliL2hlbHBlcnMvaXNDYWxsYmFjay5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvdXRpbHMuanMiLCJ1bmktYXBwOi8vL3VuaV9tb2R1bGVzL3UtYWpheC9qc19zZGsvbGliL2hlbHBlcnMvbWVyZ2VDb25maWcuanMiLCJ1bmktYXBwOi8vL3VuaV9tb2R1bGVzL3UtYWpheC9qc19zZGsvbGliL2hlbHBlcnMvb3JpZ2luVVJMLmpzIiwidW5pLWFwcDovLy91bmlfbW9kdWxlcy91LWFqYXgvanNfc2RrL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvaGVscGVycy9jb21iaW5lVVJMLmpzIiwidW5pLWFwcDovLy91bmlfbW9kdWxlcy91LWFqYXgvanNfc2RrL2xpYi9kZWZhdWx0cy5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvYWRhcHRlcnMvaHR0cC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvY29yZS9oYW5kbGVDYW5jZWwuanMiLCJ1bmktYXBwOi8vL3VuaV9tb2R1bGVzL3VuaS1pY29ucy9jb21wb25lbnRzL3VuaS1pY29ucy9pY29ucy5qcyJdLCJuYW1lcyI6WyJyZWFsQXRvYiIsImI2NCIsImI2NHJlIiwiYXRvYiIsInN0ciIsIlN0cmluZyIsInJlcGxhY2UiLCJ0ZXN0IiwiRXJyb3IiLCJzbGljZSIsImxlbmd0aCIsImJpdG1hcCIsInJlc3VsdCIsInIxIiwicjIiLCJpIiwiaW5kZXhPZiIsImNoYXJBdCIsImZyb21DaGFyQ29kZSIsImI2NERlY29kZVVuaWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzcGxpdCIsIm1hcCIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJqb2luIiwiZ2V0Q3VycmVudFVzZXJJbmZvIiwidG9rZW4iLCJ0dCIsImdldFN0b3JhZ2VTeW5jIiwidG9rZW5BcnIiLCJ1aWQiLCJyb2xlIiwicGVybWlzc2lvbiIsInRva2VuRXhwaXJlZCIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZXhwIiwiaWF0IiwidW5pSWRNaXhpbiIsIlZ1ZSIsInByb3RvdHlwZSIsInVuaUlESGFzUm9sZSIsInJvbGVJZCIsInVuaUlESGFzUGVybWlzc2lvbiIsInBlcm1pc3Npb25JZCIsInVuaUlEVG9rZW5WYWxpZCIsIkRhdGUiLCJub3ciLCJfdG9TdHJpbmciLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImlzRm4iLCJmbiIsImlzU3RyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsImNhbGwiLCJoYXNPd24iLCJrZXkiLCJub29wIiwiY2FjaGVkIiwiY2FjaGUiLCJjcmVhdGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsIl8iLCJ0b1VwcGVyQ2FzZSIsIkhPT0tTIiwiZ2xvYmFsSW50ZXJjZXB0b3JzIiwic2NvcGVkSW50ZXJjZXB0b3JzIiwibWVyZ2VIb29rIiwicGFyZW50VmFsIiwiY2hpbGRWYWwiLCJyZXMiLCJjb25jYXQiLCJBcnJheSIsImlzQXJyYXkiLCJkZWR1cGVIb29rcyIsImhvb2tzIiwicHVzaCIsInJlbW92ZUhvb2siLCJob29rIiwiaW5kZXgiLCJzcGxpY2UiLCJtZXJnZUludGVyY2VwdG9ySG9vayIsImludGVyY2VwdG9yIiwib3B0aW9uIiwia2V5cyIsImZvckVhY2giLCJyZW1vdmVJbnRlcmNlcHRvckhvb2siLCJhZGRJbnRlcmNlcHRvciIsIm1ldGhvZCIsInJlbW92ZUludGVyY2VwdG9yIiwid3JhcHBlckhvb2siLCJkYXRhIiwiaXNQcm9taXNlIiwidGhlbiIsInF1ZXVlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FsbGJhY2siLCJ3cmFwcGVyT3B0aW9ucyIsIm9wdGlvbnMiLCJuYW1lIiwib2xkQ2FsbGJhY2siLCJjYWxsYmFja0ludGVyY2VwdG9yIiwid3JhcHBlclJldHVyblZhbHVlIiwicmV0dXJuVmFsdWUiLCJyZXR1cm5WYWx1ZUhvb2tzIiwiZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyIsInNjb3BlZEludGVyY2VwdG9yIiwiaW52b2tlQXBpIiwiYXBpIiwicGFyYW1zIiwiaW52b2tlIiwicHJvbWlzZUludGVyY2VwdG9yIiwicmVqZWN0IiwiU1lOQ19BUElfUkUiLCJDT05URVhUX0FQSV9SRSIsIkNPTlRFWFRfQVBJX1JFX0VYQyIsIkFTWU5DX0FQSSIsIkNBTExCQUNLX0FQSV9SRSIsImlzQ29udGV4dEFwaSIsImlzU3luY0FwaSIsImlzQ2FsbGJhY2tBcGkiLCJoYW5kbGVQcm9taXNlIiwiY2F0Y2giLCJlcnIiLCJzaG91bGRQcm9taXNlIiwiZmluYWxseSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJyZWFzb24iLCJwcm9taXNpZnkiLCJwcm9taXNlQXBpIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsImFzc2lnbiIsIkVQUyIsIkJBU0VfREVWSUNFX1dJRFRIIiwiaXNJT1MiLCJkZXZpY2VXaWR0aCIsImRldmljZURQUiIsImNoZWNrRGV2aWNlV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicGl4ZWxSYXRpbyIsIndpbmRvd1dpZHRoIiwidXB4MnB4IiwibnVtYmVyIiwibmV3RGV2aWNlV2lkdGgiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJnZXRMb2NhbGUiLCJhcHAiLCJnZXRBcHAiLCJhbGxvd0RlZmF1bHQiLCIkdm0iLCIkbG9jYWxlIiwibGFuZ3VhZ2UiLCJzZXRMb2NhbGUiLCJsb2NhbGUiLCJvbGRMb2NhbGUiLCJvbkxvY2FsZUNoYW5nZUNhbGxiYWNrcyIsIm9uTG9jYWxlQ2hhbmdlIiwiZ2xvYmFsIiwiaW50ZXJjZXB0b3JzIiwiYmFzZUFwaSIsImZyZWV6ZSIsIl9fcHJvdG9fXyIsIkV2ZW50Q2hhbm5lbCIsImlkIiwiZXZlbnRzIiwibGlzdGVuZXIiLCJlbWl0Q2FjaGUiLCJvbiIsImV2ZW50TmFtZSIsImFyZ3MiLCJmbnMiLCJvcHQiLCJhcHBseSIsImZpbHRlciIsInR5cGUiLCJfYWRkTGlzdGVuZXIiLCJfY2xlYXJDYWNoZSIsImNhY2hlQXJncyIsImVtaXQiLCJzaGlmdCIsImV2ZW50Q2hhbm5lbHMiLCJldmVudENoYW5uZWxTdGFjayIsImluaXRFdmVudENoYW5uZWwiLCJldmVudENoYW5uZWwiLCJnZXRFdmVudENoYW5uZWwiLCJuYXZpZ2F0ZVRvIiwiZnJvbUFyZ3MiLCJ0b0FyZ3MiLCJ1cmwiLCJmcm9tUmVzIiwidG9SZXMiLCJmaW5kRXhpc3RzUGFnZUluZGV4IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW4iLCJwYWdlIiwiJHBhZ2UiLCJmdWxsUGF0aCIsInJlZGlyZWN0VG8iLCJleGlzdHMiLCJkZWx0YSIsImV4aXN0c1BhZ2VJbmRleCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnRJbmRleCIsInBhcnNlSW50IiwiY3VycmVudCIsImlzTmFOIiwidXJscyIsIml0ZW0iLCJpbmRpY2F0b3IiLCJsb29wIiwiVVVJRF9LRVkiLCJkZXZpY2VJZCIsImFkZFV1aWQiLCJyYW5kb20iLCJzZXRTdG9yYWdlIiwiYWRkU2FmZUFyZWFJbnNldHMiLCJzYWZlQXJlYSIsInNhZmVBcmVhSW5zZXRzIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwid2luZG93SGVpZ2h0IiwiZ2V0U3lzdGVtSW5mbyIsIm9OYW1lIiwibk5hbWUiLCJnZXRVc2VyUHJvZmlsZSIsImNhbklVc2UiLCJ0b2RvcyIsImNhbklVc2VzIiwicHJvdG9jb2xzIiwiY2hvb3NlSW1hZ2UiLCJzaXplVHlwZSIsImNvbm5lY3RTb2NrZXQiLCJjaG9vc2VWaWRlbyIsImNhbWVyYSIsInNjYW5Db2RlIiwib25seUZyb21DYW1lcmEiLCJzY2FuVHlwZSIsInN0YXJ0QWNjZWxlcm9tZXRlciIsImludGVydmFsIiwic2hvd1RvYXN0IiwiaW1hZ2UiLCJtYXNrIiwic2hvd0xvYWRpbmciLCJzaG93TW9kYWwiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1Db2xvciIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1Db2xvciIsImxvZ2luIiwic2NvcGVzIiwidGltZW91dCIsImdldFVzZXJJbmZvIiwibGFuZyIsInJlcXVlc3RQYXltZW50IiwicGF5Iiwib3JkZXJJbmZvIiwiZ2V0RmlsZUluZm8iLCJkaWdlc3RBbGdvcml0aG0iLCJDQUxMQkFDS1MiLCJwcm9jZXNzQ2FsbGJhY2siLCJtZXRob2ROYW1lIiwicHJvY2Vzc1JldHVyblZhbHVlIiwicHJvY2Vzc0FyZ3MiLCJhcmdzT3B0aW9uIiwia2VlcEZyb21BcmdzIiwia2V5T3B0aW9uIiwiY29uc29sZSIsIndhcm4iLCJrZWVwUmV0dXJuVmFsdWUiLCJ3cmFwcGVyIiwicHJvdG9jb2wiLCJhcmcxIiwiYXJnMiIsInRvZG9BcGlzIiwiVE9ET1MiLCJjcmVhdGVUb2RvQXBpIiwidG9kb0FwaSIsImVyck1zZyIsInByb3ZpZGVycyIsIm9hdXRoIiwic2hhcmUiLCJwYXltZW50IiwiZ2V0UHJvdmlkZXIiLCJzZXJ2aWNlIiwicHJvdmlkZXIiLCJleHRyYUFwaSIsImdldEVtaXR0ZXIiLCJFbWl0dGVyIiwiZ2V0VW5pRW1pdHRlciIsImN0eCIsIiRvbiIsImFyZ3VtZW50cyIsIiRvZmYiLCIkb25jZSIsIiRlbWl0IiwiZXZlbnRBcGkiLCJjcmVhdGVNZWRpYVF1ZXJ5T2JzZXJ2ZXIiLCJtZWRpYVF1ZXJ5T2JzZXJ2ZXIiLCJvcmllbnRhdGlvbiIsIm9ic2VydmUiLCJtYXRjaGVzIiwiaXRlbVZhbHVlIiwiZGlzY29ubmVjdCIsIk1QUGFnZSIsIlBhZ2UiLCJNUENvbXBvbmVudCIsIkNvbXBvbmVudCIsImN1c3RvbWl6ZVJFIiwiY3VzdG9taXplIiwiaW5pdFRyaWdnZXJFdmVudCIsIm1wSW5zdGFuY2UiLCJvbGRUcmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyRXZlbnQiLCJldmVudCIsImluaXRIb29rIiwiaXNDb21wb25lbnQiLCJsaWZldGltZXMiLCJvbGRIb29rIiwiX18kd3JhcHBlcmVkIiwiYWZ0ZXIiLCJQQUdFX0VWRU5UX0hPT0tTIiwiaW5pdE1vY2tzIiwidm0iLCJtb2NrcyIsIiRtcCIsIm1wVHlwZSIsIm1vY2siLCJoYXNIb29rIiwidnVlT3B0aW9ucyIsImRlZmF1bHQiLCJleHRlbmRPcHRpb25zIiwic3VwZXIiLCJtaXhpbnMiLCJmaW5kIiwibWl4aW4iLCJpbml0SG9va3MiLCJtcE9wdGlvbnMiLCJfX2NhbGxfaG9vayIsImluaXRWdWVDb21wb25lbnQiLCJWdWVDb21wb25lbnQiLCJleHRlbmQiLCJpbml0U2xvdHMiLCJ2dWVTbG90cyIsIiRzbG90cyIsInNsb3ROYW1lIiwiJHNjb3BlZFNsb3RzIiwiaW5pdFZ1ZUlkcyIsInZ1ZUlkcyIsIl8kdnVlSWQiLCJfJHZ1ZVBpZCIsImluaXREYXRhIiwiY29udGV4dCIsIm1ldGhvZHMiLCJlIiwicHJvY2VzcyIsIlZVRV9BUFBfREVCVUciLCJzdHJpbmdpZnkiLCJfX2xpZmVjeWNsZV9ob29rc19fIiwiUFJPUF9UWVBFUyIsIkJvb2xlYW4iLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwibmV3VmFsIiwib2xkVmFsIiwiaW5pdEJlaGF2aW9ycyIsImluaXRCZWhhdmlvciIsInZ1ZUJlaGF2aW9ycyIsImJlaGF2aW9ycyIsInZ1ZUV4dGVuZHMiLCJleHRlbmRzIiwidnVlTWl4aW5zIiwidnVlUHJvcHMiLCJwcm9wcyIsImJlaGF2aW9yIiwicHJvcGVydGllcyIsImluaXRQcm9wZXJ0aWVzIiwidnVlTWl4aW4iLCJwYXJzZVByb3BUeXBlIiwiZGVmYXVsdFZhbHVlIiwiZmlsZSIsImlzQmVoYXZpb3IiLCJ2dWVJZCIsImdlbmVyaWMiLCJzY29wZWRTbG90c0NvbXBpbGVyIiwic2V0RGF0YSIsIm9wdHMiLCJ3cmFwcGVyJDEiLCJtcCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZGV0YWlsIiwibWFya2VySWQiLCJnZXRFeHRyYVZhbHVlIiwiZGF0YVBhdGhzQXJyYXkiLCJkYXRhUGF0aEFycmF5IiwiZGF0YVBhdGgiLCJwcm9wUGF0aCIsInZhbHVlUGF0aCIsInZGb3IiLCJpc0ludGVnZXIiLCJzdWJzdHIiLCJfX2dldF92YWx1ZSIsInZGb3JJdGVtIiwidkZvcktleSIsInByb2Nlc3NFdmVudEV4dHJhIiwiZXh0cmEiLCJleHRyYU9iaiIsIl9fYXJnc19fIiwiZ2V0T2JqQnlBcnJheSIsImFyciIsImVsZW1lbnQiLCJwcm9jZXNzRXZlbnRBcmdzIiwiaXNDdXN0b20iLCJpc0N1c3RvbU1QRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbVR5cGUiLCJyZXQiLCJhcmciLCJPTkNFIiwiQ1VTVE9NIiwiaXNNYXRjaEV2ZW50VHlwZSIsImV2ZW50VHlwZSIsIm9wdFR5cGUiLCJnZXRDb250ZXh0Vm0iLCIkcGFyZW50IiwiJG9wdGlvbnMiLCIkc2NvcGUiLCJoYW5kbGVFdmVudCIsImV2ZW50T3B0cyIsImV2ZW50T3B0IiwiZXZlbnRzQXJyYXkiLCJpc09uY2UiLCJldmVudEFycmF5IiwiaGFuZGxlckN0eCIsImhhbmRsZXIiLCJvbmNlIiwiaTE4biIsInQiLCJpMThuTWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ1bndhdGNoIiwid2F0Y2hMb2NhbGUiLCIkZm9yY2VVcGRhdGUiLCIkJHQiLCJ2YWx1ZXMiLCJzZXRMb2NhbGUkMSIsImdldExvY2FsZSQxIiwiaW5pdEFwcExvY2FsZSIsImFwcFZtIiwic3RhdGUiLCJvYnNlcnZhYmxlIiwibG9jYWxlV2F0Y2hlcnMiLCIkd2F0Y2hMb2NhbGUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsInYiLCJ3YXRjaCIsImluaXRFdmVudENoYW5uZWwkMSIsImdldE9wZW5lckV2ZW50Q2hhbm5lbCIsIl9fZXZlbnRDaGFubmVsX18iLCJjYWxsSG9vayIsIl9faWRfXyIsImluaXRTY29wZWRTbG90c1BhcmFtcyIsImNlbnRlciIsInBhcmVudHMiLCIkaGFzU2NvcGVkU2xvdHNQYXJhbXMiLCJoYXMiLCIkZ2V0U2NvcGVkU2xvdHNQYXJhbXMiLCJvYmplY3QiLCIkc2V0U2NvcGVkU2xvdHNQYXJhbXMiLCJwcm9wc0RhdGEiLCJkZXN0cm95ZWQiLCJwYXJzZUJhc2VBcHAiLCJpbml0UmVmcyIsInN0b3JlIiwiJHN0b3JlIiwibXBIb3N0IiwiJGkxOG4iLCJfaTE4biIsImFwcE9wdGlvbnMiLCJvbkxhdW5jaCIsImdsb2JhbERhdGEiLCJfaXNNb3VudGVkIiwiZmluZFZtQnlWdWVJZCIsInZ1ZVBpZCIsIiRjaGlsZHJlbiIsImNoaWxkVm0iLCJwYXJlbnRWbSIsIkJlaGF2aW9yIiwiaGFuZGxlTGluayIsInBhcmVudCIsImlzUGFnZSIsIl9fbm9kZWlkX18iLCJfX25vZGVJZF9fIiwibWlub3JWZXJzaW9uIiwiU0RLVmVyc2lvbiIsIiRyZWZzIiwiY29tcG9uZW50cyIsInNlbGVjdEFsbENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJyZWYiLCJmb3JDb21wb25lbnRzIiwiaW5zdGFuY2VzIiwiaW5pdFJlbGF0aW9uIiwibm9kZUlkIiwid2Vidmlld0lkIiwiX193ZWJ2aWV3SWRfXyIsImhhbmRsZUxpbmskMSIsIiRyb290IiwicGFyc2VBcHAiLCJfJGZhbGxiYWNrIiwiY3JlYXRlZCIsInJvdXRlIiwiX19yb3V0ZV9fIiwiX19pbml0X2luamVjdGlvbnMiLCJfX2luaXRfcHJvdmlkZSIsImNyZWF0ZUFwcCIsIkFwcCIsImVuY29kZVJlc2VydmVSRSIsImVuY29kZVJlc2VydmVSZXBsYWNlciIsImNvbW1hUkUiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnlRdWVyeSIsImVuY29kZVN0ciIsInZhbCIsInVuZGVmaW5lZCIsInZhbDIiLCJ4IiwicGFyc2VCYXNlQ29tcG9uZW50IiwidnVlQ29tcG9uZW50T3B0aW9ucyIsIm11bHRpcGxlU2xvdHMiLCJhZGRHbG9iYWxDbGFzcyIsImNvbXBvbmVudE9wdGlvbnMiLCJfX2ZpbGUiLCJhdHRhY2hlZCIsIiRtb3VudCIsInJlYWR5IiwiZGV0YWNoZWQiLCIkZGVzdHJveSIsInBhZ2VMaWZldGltZXMiLCJzaG93IiwiaGlkZSIsInJlc2l6ZSIsInNpemUiLCJfX2wiLCJfX2UiLCJleHRlcm5hbENsYXNzZXMiLCJ3eHNDYWxsTWV0aG9kcyIsImNhbGxNZXRob2QiLCJwYXJzZUNvbXBvbmVudCIsIl9fbGlmZXRpbWVzX2F0dGFjaGVkIiwiaG9va3MkMSIsInBhcnNlQmFzZVBhZ2UiLCJ2dWVQYWdlT3B0aW9ucyIsInBhZ2VPcHRpb25zIiwib25Mb2FkIiwicXVlcnkiLCJjb3B5UXVlcnkiLCJpcyIsInBhcnNlUGFnZSIsImNyZWF0ZVBhZ2UiLCJjcmVhdGVDb21wb25lbnQiLCJjcmVhdGVTdWJwYWNrYWdlQXBwIiwib25TaG93Iiwib25BcHBTaG93Iiwib25IaWRlIiwib25BcHBIaWRlIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJjcmVhdGVQbHVnaW4iLCJjYW5JVXNlQXBpIiwiYXBpTmFtZSIsInVuaSIsIlByb3h5IiwidW5pJDEiLCJpc09iamVjdCIsImRlZmF1bHREZWxpbWl0ZXJzIiwiQmFzZUZvcm1hdHRlciIsIl9jYWNoZXMiLCJkZWxpbWl0ZXJzIiwidG9rZW5zIiwiY29tcGlsZSIsIlJFX1RPS0VOX0xJU1RfVkFMVUUiLCJSRV9UT0tFTl9OQU1FRF9WQUxVRSIsImZvcm1hdCIsInN0YXJ0RGVsaW1pdGVyIiwiZW5kRGVsaW1pdGVyIiwicG9zaXRpb24iLCJ0ZXh0IiwiY2hhciIsInN1YiIsImlzQ2xvc2VkIiwiY29tcGlsZWQiLCJtb2RlIiwiTE9DQUxFX1pIX0hBTlMiLCJMT0NBTEVfWkhfSEFOVCIsIkxPQ0FMRV9FTiIsIkxPQ0FMRV9GUiIsIkxPQ0FMRV9FUyIsImRlZmF1bHRGb3JtYXR0ZXIiLCJpbmNsdWRlIiwicGFydHMiLCJwYXJ0Iiwic3RhcnRzV2l0aCIsIm5vcm1hbGl6ZUxvY2FsZSIsIm1lc3NhZ2VzIiwidHJpbSIsInRvTG93ZXJDYXNlIiwiSTE4biIsImZhbGxiYWNrTG9jYWxlIiwid2F0Y2hlciIsImZvcm1hdGVyIiwid2F0Y2hlcnMiLCJvdmVycmlkZSIsImN1ck1lc3NhZ2VzIiwiaW50ZXJwb2xhdGUiLCJ3YXRjaEFwcExvY2FsZSIsIm5ld0xvY2FsZSIsIiR3YXRjaCIsImdldERlZmF1bHRMb2NhbGUiLCJpbml0VnVlSTE4biIsIl9fdW5pQ29uZmlnIiwiaXNXYXRjaGVkQXBwTG9jYWxlIiwiZiIsImFkZCIsImlzU3RyaW5nIiwiaGFzSTE4bkpzb24iLCJqc29uT2JqIiwid2Fsa0pzb25PYmoiLCJpc0kxOG5TdHIiLCJwYXJzZUkxOG5Kc29uIiwiY29tcGlsZVN0ciIsImNvbXBpbGVJMThuSnNvblN0ciIsImpzb25TdHIiLCJsb2NhbGVzIiwibG9jYWxlVmFsdWVzIiwidW5zaGlmdCIsImNvbXBpbGVKc29uT2JqIiwiY29tcGlsZVZhbHVlIiwidmFsdWVMb2NhbGVzIiwibG9jYWxWYWx1ZSIsIndhbGsiLCJyZXNvbHZlTG9jYWxlIiwicmVzb2x2ZUxvY2FsZUNoYWluIiwiY2hhaW4iLCJwb3AiLCJpbnN0YW5jZSIsImFqYXgiLCJiYXNlVVJMIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInJlc3BvbnNlIiwiY3JlYXRlSW5zdGFuY2UiLCJkZWZhdWx0Q29uZmlnIiwiQWpheCIsImluc3RhbmNlQ29uZmlnIiwiZGV0YWNoQ29uZmlnIiwiUmVxdWVzdCIsImRpc3BhdGNoQ2FuY2VsIiwiZGVzYyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwiYXNjIiwibWVyZ2VDb25maWciLCJkZXRhY2hDYW5jZWwiLCJJbnRlcmNlcHRvck1hbmFnZXIiLCJfY29uZmlnIiwiTUVUSE9EIiwic2V0VGltZW91dCIsIm9yaWdpbiIsImRlZmF1bHRzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJsIiwiaGFuZGxlcnMiLCJSZXF1ZXN0Q29uc3RydWN0b3IiLCJhYm9ydGVkIiwidGFzayIsImFib3J0Iiwib25IZWFkZXJzUmVjZWl2ZWQiLCJvZmZIZWFkZXJzUmVjZWl2ZWQiLCJvbkhlYWRlcnNSZWNlaXZlZENhbGxiYWNrIiwib2ZmSGVhZGVyc1JlY2VpdmVkQ2FsbGJhY2siLCJpc1NpbmdsZSIsImlzQ2FsbGJhY2siLCJmaWVsZCIsImluY2x1ZGVzIiwiayIsIm1lcmdlIiwic291cmNlIiwidHJ5Q2F0Y2giLCJjb25maWcxIiwiY29uZmlnMiIsImNvbmZpZ0tleXMiLCJwcm9wIiwib3JpZ2luVVJMIiwidSIsImRpc3BhdGNoUmVxdWVzdCIsImhlYWRlciIsImNvbW1vbiIsIkhFQURFUiIsImgiLCJhZGFwdGVyIiwiYnVpbGRVUkwiLCJoYXNobWFya0luZGV4IiwiY29tYmluZVVSTCIsInJlbGF0aXZlVVJMIiwiZGF0YVR5cGUiLCJyZXNwb25zZVR5cGUiLCJzc2xWZXJpZnkiLCJ3aXRoQ3JlZGVudGlhbHMiLCJmaXJzdElwdjQiLCJ2YWxpZGF0ZVN0YXR1cyIsInN0YXR1c0NvZGUiLCJ4aHIiLCJfX0NBTkNFTF9fIiwiaW50ZXJjZXB0Q2FuY2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O21VQUFBO0FBQ0EsZ0U7O0FBRUEsSUFBSUEsUUFBSjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsbUVBQVo7QUFDQSxJQUFNQyxLQUFLLEdBQUcsc0VBQWQ7O0FBRUEsSUFBSSxPQUFPQyxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0FBQzlCSCxVQUFRLEdBQUcsa0JBQVVJLEdBQVYsRUFBZTtBQUN4QkEsT0FBRyxHQUFHQyxNQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZRSxPQUFaLENBQW9CLGVBQXBCLEVBQXFDLEVBQXJDLENBQU47QUFDQSxRQUFJLENBQUNKLEtBQUssQ0FBQ0ssSUFBTixDQUFXSCxHQUFYLENBQUwsRUFBc0IsQ0FBRSxNQUFNLElBQUlJLEtBQUosQ0FBVSwwRkFBVixDQUFOLENBQTZH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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRztBQUNSO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHVDQUF1Qyx3QkFBd0IsRUFBRTtBQUNqRSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQyxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSx3Q0FBd0MsRUFBRTtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0IsRUFBRTtBQUNyRDtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsU0FBUyxxQkFBcUI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q3JDO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFFUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0Msa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUZBQXVGO0FBQzVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsK0JBQStCO0FBQ2xDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxvQkFBb0Isb0JBQW9CO0FBQ3hDLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZDQUE2QztBQUM5RTtBQUNBO0FBQ0EsNkNBQTZDLDRDQUE0Qzs7QUFFekY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyxNQUFNLEVBR047QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssMkNBQTJDLDhCQUE4QixFQUFFOztBQUVoRjtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQXFDO0FBQ3JEO0FBQ0Esb0JBQW9CLFNBQUk7QUFDeEI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLLE1BQU0sRUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVLElBQXFDO0FBQ3BEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw4QkFBOEI7QUFDOUIsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBLEtBQUssTUFBTSxFQUVOO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0Esc0NBQXNDO0FBQ3RDLDhDOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsWUFBWSxLQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLDJCQUEyQixFQUFFO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyw0QkFBNEIsRUFBRTtBQUN4RSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztB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QTBGZCxZQUFVLFFBMUZJO0FBMkZkLFdBQVMsUUEzRks7QUE0RmQsa0JBQWdCLFFBNUZGO0FBNkZkLHFCQUFtQixRQTdGTDtBQThGZCxjQUFZLFFBOUZFO0FBK0ZkLGlCQUFlLFFBL0ZEO0FBZ0dkLFVBQVEsUUFoR007QUFpR2QsZUFBYSxRQWpHQztBQWtHZCxpQkFBZSxRQWxHRDtBQW1HZCxVQUFRLFFBbkdNO0FBb0dkLHFCQUFtQixRQXBHTDtBQXFHZCxjQUFZLFFBckdFO0FBc0dkLHNCQUFvQixRQXRHTjtBQXVHZCxZQUFVLFFBdkdJO0FBd0dkLGNBQVksUUF4R0U7QUF5R2QsV0FBUyxRQXpHSztBQTBHZCxrQkFBZ0IsUUExR0Y7QUEyR2QsbUJBQWlCLFFBM0dIO0FBNEdkLHFCQUFtQixRQTVHTDtBQTZHZCxzQkFBb0IsUUE3R047QUE4R2QscUJBQW1CLFFBOUdMO0FBK0dkLGVBQWEsUUEvR0M7QUFnSGQsWUFBVSxRQWhISTtBQWlIZCxtQkFBaUIsUUFqSEg7QUFrSGQsY0FBWSxRQWxIRTtBQW1IZCxpQkFBZSxRQW5IRDtBQW9IZCxVQUFRLFFBcEhNO0FBcUhkLFdBQVMsUUFySEs7QUFzSGQsa0JBQWdCLFFBdEhGO0FBdUhkLGFBQVcsUUF2SEc7QUF3SGQsY0FBWSxRQXhIRTtBQXlIZCxrQkFBZ0IsUUF6SEY7QUEwSGQsY0FBWSxRQTFIRTtBQTJIZCx1QkFBcUIsUUEzSFA7QUE0SGQsZ0JBQWMsUUE1SEE7QUE2SGQsb0JBQWtCLFFBN0hKO0FBOEhkLHlCQUF1QixRQTlIVDtBQStIZCxrQkFBZ0IsUUEvSEY7QUFnSWQsMkJBQXlCLFFBaElYO0FBaUlkLGdCQUFhLFFBaklDO0FBa0lkLFVBQU8sUUFsSU8sRSIsImZpbGUiOiJjb21tb24vdmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBpbml0VnVlSTE4biB9IGZyb20gJ0BkY2xvdWRpby91bmktaTE4bic7XHJcblxyXG5sZXQgcmVhbEF0b2I7XHJcblxyXG5jb25zdCBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG5jb25zdCBiNjRyZSA9IC9eKD86W0EtWmEtelxcZCsvXXs0fSkqPyg/OltBLVphLXpcXGQrL117Mn0oPzo9PSk/fFtBLVphLXpcXGQrL117M309Pyk/JC87XHJcblxyXG5pZiAodHlwZW9mIGF0b2IgIT09ICdmdW5jdGlvbicpIHtcclxuICByZWFsQXRvYiA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHN0ciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL1tcXHRcXG5cXGZcXHIgXSsvZywgJycpO1xyXG4gICAgaWYgKCFiNjRyZS50ZXN0KHN0cikpIHsgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ2F0b2InIG9uICdXaW5kb3cnOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLlwiKSB9XHJcblxyXG4gICAgLy8gQWRkaW5nIHRoZSBwYWRkaW5nIGlmIG1pc3NpbmcsIGZvciBzZW1wbGljaXR5XHJcbiAgICBzdHIgKz0gJz09Jy5zbGljZSgyIC0gKHN0ci5sZW5ndGggJiAzKSk7XHJcbiAgICB2YXIgYml0bWFwOyB2YXIgcmVzdWx0ID0gJyc7IHZhciByMTsgdmFyIHIyOyB2YXIgaSA9IDA7XHJcbiAgICBmb3IgKDsgaSA8IHN0ci5sZW5ndGg7KSB7XHJcbiAgICAgIGJpdG1hcCA9IGI2NC5pbmRleE9mKHN0ci5jaGFyQXQoaSsrKSkgPDwgMTggfCBiNjQuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpIDw8IDEyIHxcclxuICAgICAgICAgICAgICAgICAgICAocjEgPSBiNjQuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpKSA8PCA2IHwgKHIyID0gYjY0LmluZGV4T2Yoc3RyLmNoYXJBdChpKyspKSk7XHJcblxyXG4gICAgICByZXN1bHQgKz0gcjEgPT09IDY0ID8gU3RyaW5nLmZyb21DaGFyQ29kZShiaXRtYXAgPj4gMTYgJiAyNTUpXHJcbiAgICAgICAgOiByMiA9PT0gNjQgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdG1hcCA+PiAxNiAmIDI1NSwgYml0bWFwID4+IDggJiAyNTUpXHJcbiAgICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoYml0bWFwID4+IDE2ICYgMjU1LCBiaXRtYXAgPj4gOCAmIDI1NSwgYml0bWFwICYgMjU1KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9O1xyXG59IGVsc2Uge1xyXG4gIC8vIOazqOaEj2F0b2Llj6rog73lnKjlhajlsYDlr7nosaHkuIrosIPnlKjvvIzkvovlpoLvvJpgY29uc3QgQmFzZTY0ID0ge2F0b2J9O0Jhc2U2NC5hdG9iKCd4eHh4Jylg5piv6ZSZ6K+v55qE55So5rOVXHJcbiAgcmVhbEF0b2IgPSBhdG9iO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlIChzdHIpIHtcclxuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlYWxBdG9iKHN0cikuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xyXG4gICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpXHJcbiAgfSkuam9pbignJykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRVc2VySW5mbyAoKSB7XHJcbiAgY29uc3QgdG9rZW4gPSAoIHR0KS5nZXRTdG9yYWdlU3luYygndW5pX2lkX3Rva2VuJykgfHwgJyc7XHJcbiAgY29uc3QgdG9rZW5BcnIgPSB0b2tlbi5zcGxpdCgnLicpO1xyXG4gIGlmICghdG9rZW4gfHwgdG9rZW5BcnIubGVuZ3RoICE9PSAzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1aWQ6IG51bGwsXHJcbiAgICAgIHJvbGU6IFtdLFxyXG4gICAgICBwZXJtaXNzaW9uOiBbXSxcclxuICAgICAgdG9rZW5FeHBpcmVkOiAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCB1c2VySW5mbztcclxuICB0cnkge1xyXG4gICAgdXNlckluZm8gPSBKU09OLnBhcnNlKGI2NERlY29kZVVuaWNvZGUodG9rZW5BcnJbMV0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCfojrflj5blvZPliY3nlKjmiLfkv6Hmga/lh7rplJnvvIzor6bnu4bplJnor6/kv6Hmga/kuLrvvJonICsgZXJyb3IubWVzc2FnZSlcclxuICB9XHJcbiAgdXNlckluZm8udG9rZW5FeHBpcmVkID0gdXNlckluZm8uZXhwICogMTAwMDtcclxuICBkZWxldGUgdXNlckluZm8uZXhwO1xyXG4gIGRlbGV0ZSB1c2VySW5mby5pYXQ7XHJcbiAgcmV0dXJuIHVzZXJJbmZvXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaUlkTWl4aW4gKFZ1ZSkge1xyXG4gIFZ1ZS5wcm90b3R5cGUudW5pSURIYXNSb2xlID0gZnVuY3Rpb24gKHJvbGVJZCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICByb2xlXHJcbiAgICB9ID0gZ2V0Q3VycmVudFVzZXJJbmZvKCk7XHJcbiAgICByZXR1cm4gcm9sZS5pbmRleE9mKHJvbGVJZCkgPiAtMVxyXG4gIH07XHJcbiAgVnVlLnByb3RvdHlwZS51bmlJREhhc1Blcm1pc3Npb24gPSBmdW5jdGlvbiAocGVybWlzc2lvbklkKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHBlcm1pc3Npb25cclxuICAgIH0gPSBnZXRDdXJyZW50VXNlckluZm8oKTtcclxuICAgIHJldHVybiB0aGlzLnVuaUlESGFzUm9sZSgnYWRtaW4nKSB8fCBwZXJtaXNzaW9uLmluZGV4T2YocGVybWlzc2lvbklkKSA+IC0xXHJcbiAgfTtcclxuICBWdWUucHJvdG90eXBlLnVuaUlEVG9rZW5WYWxpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdG9rZW5FeHBpcmVkXHJcbiAgICB9ID0gZ2V0Q3VycmVudFVzZXJJbmZvKCk7XHJcbiAgICByZXR1cm4gdG9rZW5FeHBpcmVkID4gRGF0ZS5ub3coKVxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuXHJcbmZ1bmN0aW9uIGlzRm4gKGZuKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0ciAoc3RyKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xyXG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNPd24gKG9iaiwga2V5KSB7XHJcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vb3AgKCkge31cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWNoZWQgKGZuKSB7XHJcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XHJcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xyXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cclxuICovXHJcbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XHJcbmNvbnN0IGNhbWVsaXplID0gY2FjaGVkKChzdHIpID0+IHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJylcclxufSk7XHJcblxyXG5jb25zdCBIT09LUyA9IFtcclxuICAnaW52b2tlJyxcclxuICAnc3VjY2VzcycsXHJcbiAgJ2ZhaWwnLFxyXG4gICdjb21wbGV0ZScsXHJcbiAgJ3JldHVyblZhbHVlJ1xyXG5dO1xyXG5cclxuY29uc3QgZ2xvYmFsSW50ZXJjZXB0b3JzID0ge307XHJcbmNvbnN0IHNjb3BlZEludGVyY2VwdG9ycyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gbWVyZ2VIb29rIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XHJcbiAgY29uc3QgcmVzID0gY2hpbGRWYWxcclxuICAgID8gcGFyZW50VmFsXHJcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcclxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxyXG4gICAgICAgID8gY2hpbGRWYWwgOiBbY2hpbGRWYWxdXHJcbiAgICA6IHBhcmVudFZhbDtcclxuICByZXR1cm4gcmVzXHJcbiAgICA/IGRlZHVwZUhvb2tzKHJlcylcclxuICAgIDogcmVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZHVwZUhvb2tzIChob29rcykge1xyXG4gIGNvbnN0IHJlcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChyZXMuaW5kZXhPZihob29rc1tpXSkgPT09IC0xKSB7XHJcbiAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVIb29rIChob29rcywgaG9vaykge1xyXG4gIGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihob29rKTtcclxuICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2VJbnRlcmNlcHRvckhvb2sgKGludGVyY2VwdG9yLCBvcHRpb24pIHtcclxuICBPYmplY3Qua2V5cyhvcHRpb24pLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoSE9PS1MuaW5kZXhPZihob29rKSAhPT0gLTEgJiYgaXNGbihvcHRpb25baG9va10pKSB7XHJcbiAgICAgIGludGVyY2VwdG9yW2hvb2tdID0gbWVyZ2VIb29rKGludGVyY2VwdG9yW2hvb2tdLCBvcHRpb25baG9va10pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJbnRlcmNlcHRvckhvb2sgKGludGVyY2VwdG9yLCBvcHRpb24pIHtcclxuICBpZiAoIWludGVyY2VwdG9yIHx8ICFvcHRpb24pIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBPYmplY3Qua2V5cyhvcHRpb24pLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoSE9PS1MuaW5kZXhPZihob29rKSAhPT0gLTEgJiYgaXNGbihvcHRpb25baG9va10pKSB7XHJcbiAgICAgIHJlbW92ZUhvb2soaW50ZXJjZXB0b3JbaG9va10sIG9wdGlvbltob29rXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEludGVyY2VwdG9yIChtZXRob2QsIG9wdGlvbikge1xyXG4gIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJyAmJiBpc1BsYWluT2JqZWN0KG9wdGlvbikpIHtcclxuICAgIG1lcmdlSW50ZXJjZXB0b3JIb29rKHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdIHx8IChzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXSA9IHt9KSwgb3B0aW9uKTtcclxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QobWV0aG9kKSkge1xyXG4gICAgbWVyZ2VJbnRlcmNlcHRvckhvb2soZ2xvYmFsSW50ZXJjZXB0b3JzLCBtZXRob2QpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJjZXB0b3IgKG1ldGhvZCwgb3B0aW9uKSB7XHJcbiAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChvcHRpb24pKSB7XHJcbiAgICAgIHJlbW92ZUludGVyY2VwdG9ySG9vayhzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXSwgb3B0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QobWV0aG9kKSkge1xyXG4gICAgcmVtb3ZlSW50ZXJjZXB0b3JIb29rKGdsb2JhbEludGVyY2VwdG9ycywgbWV0aG9kKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBwZXJIb29rIChob29rKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICByZXR1cm4gaG9vayhkYXRhKSB8fCBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1Byb21pc2UgKG9iaikge1xyXG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXVlIChob29rcywgZGF0YSkge1xyXG4gIGxldCBwcm9taXNlID0gZmFsc2U7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgaG9vayA9IGhvb2tzW2ldO1xyXG4gICAgaWYgKHByb21pc2UpIHtcclxuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh3cmFwcGVySG9vayhob29rKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXMgPSBob29rKGRhdGEpO1xyXG4gICAgICBpZiAoaXNQcm9taXNlKHJlcykpIHtcclxuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGhlbiAoKSB7IH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHByb21pc2UgfHwge1xyXG4gICAgdGhlbiAoY2FsbGJhY2spIHtcclxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyT3B0aW9ucyAoaW50ZXJjZXB0b3IsIG9wdGlvbnMgPSB7fSkge1xyXG4gIFsnc3VjY2VzcycsICdmYWlsJywgJ2NvbXBsZXRlJ10uZm9yRWFjaChuYW1lID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGludGVyY2VwdG9yW25hbWVdKSkge1xyXG4gICAgICBjb25zdCBvbGRDYWxsYmFjayA9IG9wdGlvbnNbbmFtZV07XHJcbiAgICAgIG9wdGlvbnNbbmFtZV0gPSBmdW5jdGlvbiBjYWxsYmFja0ludGVyY2VwdG9yIChyZXMpIHtcclxuICAgICAgICBxdWV1ZShpbnRlcmNlcHRvcltuYW1lXSwgcmVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xyXG4gICAgICAgICAgcmV0dXJuIGlzRm4ob2xkQ2FsbGJhY2spICYmIG9sZENhbGxiYWNrKHJlcykgfHwgcmVzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG9wdGlvbnNcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlclJldHVyblZhbHVlIChtZXRob2QsIHJldHVyblZhbHVlKSB7XHJcbiAgY29uc3QgcmV0dXJuVmFsdWVIb29rcyA9IFtdO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGdsb2JhbEludGVyY2VwdG9ycy5yZXR1cm5WYWx1ZSkpIHtcclxuICAgIHJldHVyblZhbHVlSG9va3MucHVzaCguLi5nbG9iYWxJbnRlcmNlcHRvcnMucmV0dXJuVmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBpbnRlcmNlcHRvciA9IHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdO1xyXG4gIGlmIChpbnRlcmNlcHRvciAmJiBBcnJheS5pc0FycmF5KGludGVyY2VwdG9yLnJldHVyblZhbHVlKSkge1xyXG4gICAgcmV0dXJuVmFsdWVIb29rcy5wdXNoKC4uLmludGVyY2VwdG9yLnJldHVyblZhbHVlKTtcclxuICB9XHJcbiAgcmV0dXJuVmFsdWVIb29rcy5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgcmV0dXJuVmFsdWUgPSBob29rKHJldHVyblZhbHVlKSB8fCByZXR1cm5WYWx1ZTtcclxuICB9KTtcclxuICByZXR1cm4gcmV0dXJuVmFsdWVcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyAobWV0aG9kKSB7XHJcbiAgY29uc3QgaW50ZXJjZXB0b3IgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gIE9iamVjdC5rZXlzKGdsb2JhbEludGVyY2VwdG9ycykuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChob29rICE9PSAncmV0dXJuVmFsdWUnKSB7XHJcbiAgICAgIGludGVyY2VwdG9yW2hvb2tdID0gZ2xvYmFsSW50ZXJjZXB0b3JzW2hvb2tdLnNsaWNlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3Qgc2NvcGVkSW50ZXJjZXB0b3IgPSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcclxuICBpZiAoc2NvcGVkSW50ZXJjZXB0b3IpIHtcclxuICAgIE9iamVjdC5rZXlzKHNjb3BlZEludGVyY2VwdG9yKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgICBpZiAoaG9vayAhPT0gJ3JldHVyblZhbHVlJykge1xyXG4gICAgICAgIGludGVyY2VwdG9yW2hvb2tdID0gKGludGVyY2VwdG9yW2hvb2tdIHx8IFtdKS5jb25jYXQoc2NvcGVkSW50ZXJjZXB0b3JbaG9va10pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGludGVyY2VwdG9yXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZUFwaSAobWV0aG9kLCBhcGksIG9wdGlvbnMsIC4uLnBhcmFtcykge1xyXG4gIGNvbnN0IGludGVyY2VwdG9yID0gZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyhtZXRob2QpO1xyXG4gIGlmIChpbnRlcmNlcHRvciAmJiBPYmplY3Qua2V5cyhpbnRlcmNlcHRvcikubGVuZ3RoKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvci5pbnZva2UpKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IHF1ZXVlKGludGVyY2VwdG9yLmludm9rZSwgb3B0aW9ucyk7XHJcbiAgICAgIHJldHVybiByZXMudGhlbigob3B0aW9ucykgPT4ge1xyXG4gICAgICAgIHJldHVybiBhcGkod3JhcHBlck9wdGlvbnMoaW50ZXJjZXB0b3IsIG9wdGlvbnMpLCAuLi5wYXJhbXMpXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYXBpKHdyYXBwZXJPcHRpb25zKGludGVyY2VwdG9yLCBvcHRpb25zKSwgLi4ucGFyYW1zKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYXBpKG9wdGlvbnMsIC4uLnBhcmFtcylcclxufVxyXG5cclxuY29uc3QgcHJvbWlzZUludGVyY2VwdG9yID0ge1xyXG4gIHJldHVyblZhbHVlIChyZXMpIHtcclxuICAgIGlmICghaXNQcm9taXNlKHJlcykpIHtcclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzWzBdKSB7XHJcbiAgICAgICAgICByZWplY3QocmVzWzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXNbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNZTkNfQVBJX1JFID1cclxuICAvXlxcJHxXaW5kb3ckfFdpbmRvd1N0eWxlJHxzZW5kTmF0aXZlRXZlbnR8cmVzdG9yZUdsb2JhbHxnZXRDdXJyZW50U3ViTlZ1ZXxnZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0fF5yZXBvcnR8aW50ZXJjZXB0b3JzfEludGVyY2VwdG9yJHxnZXRTdWJOVnVlQnlJZHxyZXF1aXJlTmF0aXZlUGx1Z2lufHVweDJweHxoaWRlS2V5Ym9hcmR8Y2FuSVVzZXxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfGJhc2U2NFRvQXJyYXlCdWZmZXJ8YXJyYXlCdWZmZXJUb0Jhc2U2NHxnZXRMb2NhbGV8c2V0TG9jYWxlLztcclxuXHJcbmNvbnN0IENPTlRFWFRfQVBJX1JFID0gL15jcmVhdGV8TWFuYWdlciQvO1xyXG5cclxuLy8gQ29udGV4dOS+i+WkluaDheWGtVxyXG5jb25zdCBDT05URVhUX0FQSV9SRV9FWEMgPSBbJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nXTtcclxuXHJcbi8vIOWQjOatpeS+i+WkluaDheWGtVxyXG5jb25zdCBBU1lOQ19BUEkgPSBbJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nXTtcclxuXHJcbmNvbnN0IENBTExCQUNLX0FQSV9SRSA9IC9eb258Xm9mZi87XHJcblxyXG5mdW5jdGlvbiBpc0NvbnRleHRBcGkgKG5hbWUpIHtcclxuICByZXR1cm4gQ09OVEVYVF9BUElfUkUudGVzdChuYW1lKSAmJiBDT05URVhUX0FQSV9SRV9FWEMuaW5kZXhPZihuYW1lKSA9PT0gLTFcclxufVxyXG5mdW5jdGlvbiBpc1N5bmNBcGkgKG5hbWUpIHtcclxuICByZXR1cm4gU1lOQ19BUElfUkUudGVzdChuYW1lKSAmJiBBU1lOQ19BUEkuaW5kZXhPZihuYW1lKSA9PT0gLTFcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDYWxsYmFja0FwaSAobmFtZSkge1xyXG4gIHJldHVybiBDQUxMQkFDS19BUElfUkUudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnb25QdXNoJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9taXNlIChwcm9taXNlKSB7XHJcbiAgcmV0dXJuIHByb21pc2UudGhlbihkYXRhID0+IHtcclxuICAgIHJldHVybiBbbnVsbCwgZGF0YV1cclxuICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiBbZXJyXSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvdWxkUHJvbWlzZSAobmFtZSkge1xyXG4gIGlmIChcclxuICAgIGlzQ29udGV4dEFwaShuYW1lKSB8fFxyXG4gICAgaXNTeW5jQXBpKG5hbWUpIHx8XHJcbiAgICBpc0NhbGxiYWNrQXBpKG5hbWUpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG5pZiAoIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcclxuICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgIHJldHVybiB0aGlzLnRoZW4oXHJcbiAgICAgIHZhbHVlID0+IHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHZhbHVlKSxcclxuICAgICAgcmVhc29uID0+IHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aHJvdyByZWFzb25cclxuICAgICAgfSlcclxuICAgIClcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9taXNpZnkgKG5hbWUsIGFwaSkge1xyXG4gIGlmICghc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgcmV0dXJuIGFwaVxyXG4gIH1cclxuICByZXR1cm4gZnVuY3Rpb24gcHJvbWlzZUFwaSAob3B0aW9ucyA9IHt9LCAuLi5wYXJhbXMpIHtcclxuICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgcmV0dXJuIHdyYXBwZXJSZXR1cm5WYWx1ZShuYW1lLCBpbnZva2VBcGkobmFtZSwgYXBpLCBvcHRpb25zLCAuLi5wYXJhbXMpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdyYXBwZXJSZXR1cm5WYWx1ZShuYW1lLCBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaW52b2tlQXBpKG5hbWUsIGFwaSwgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgIH0pLCAuLi5wYXJhbXMpO1xyXG4gICAgfSkpKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRVBTID0gMWUtNDtcclxuY29uc3QgQkFTRV9ERVZJQ0VfV0lEVEggPSA3NTA7XHJcbmxldCBpc0lPUyA9IGZhbHNlO1xyXG5sZXQgZGV2aWNlV2lkdGggPSAwO1xyXG5sZXQgZGV2aWNlRFBSID0gMDtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrRGV2aWNlV2lkdGggKCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHBsYXRmb3JtLFxyXG4gICAgcGl4ZWxSYXRpbyxcclxuICAgIHdpbmRvd1dpZHRoXHJcbiAgfSA9IHR0LmdldFN5c3RlbUluZm9TeW5jKCk7IC8vIHVuaT0+dHQgcnVudGltZSDnvJbor5Hnm67moIfmmK8gdW5pIOWvueixoe+8jOWGhemDqOS4jeWFgeiuuOebtOaOpeS9v+eUqCB1bmlcclxuXHJcbiAgZGV2aWNlV2lkdGggPSB3aW5kb3dXaWR0aDtcclxuICBkZXZpY2VEUFIgPSBwaXhlbFJhdGlvO1xyXG4gIGlzSU9TID0gcGxhdGZvcm0gPT09ICdpb3MnO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cHgycHggKG51bWJlciwgbmV3RGV2aWNlV2lkdGgpIHtcclxuICBpZiAoZGV2aWNlV2lkdGggPT09IDApIHtcclxuICAgIGNoZWNrRGV2aWNlV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIG51bWJlciA9IE51bWJlcihudW1iZXIpO1xyXG4gIGlmIChudW1iZXIgPT09IDApIHtcclxuICAgIHJldHVybiAwXHJcbiAgfVxyXG4gIGxldCByZXN1bHQgPSAobnVtYmVyIC8gQkFTRV9ERVZJQ0VfV0lEVEgpICogKG5ld0RldmljZVdpZHRoIHx8IGRldmljZVdpZHRoKTtcclxuICBpZiAocmVzdWx0IDwgMCkge1xyXG4gICAgcmVzdWx0ID0gLXJlc3VsdDtcclxuICB9XHJcbiAgcmVzdWx0ID0gTWF0aC5mbG9vcihyZXN1bHQgKyBFUFMpO1xyXG4gIGlmIChyZXN1bHQgPT09IDApIHtcclxuICAgIGlmIChkZXZpY2VEUFIgPT09IDEgfHwgIWlzSU9TKSB7XHJcbiAgICAgIHJlc3VsdCA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudW1iZXIgPCAwID8gLXJlc3VsdCA6IHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhbGUgKCkge1xyXG4gIC8vIOS8mOWFiOS9v+eUqCAkbG9jYWxlXHJcbiAgY29uc3QgYXBwID0gZ2V0QXBwKHtcclxuICAgIGFsbG93RGVmYXVsdDogdHJ1ZVxyXG4gIH0pO1xyXG4gIGlmIChhcHAgJiYgYXBwLiR2bSkge1xyXG4gICAgcmV0dXJuIGFwcC4kdm0uJGxvY2FsZVxyXG4gIH1cclxuICByZXR1cm4gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKS5sYW5ndWFnZSB8fCAnemgtSGFucydcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TG9jYWxlIChsb2NhbGUpIHtcclxuICBjb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuICBpZiAoIWFwcCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGNvbnN0IG9sZExvY2FsZSA9IGFwcC4kdm0uJGxvY2FsZTtcclxuICBpZiAob2xkTG9jYWxlICE9PSBsb2NhbGUpIHtcclxuICAgIGFwcC4kdm0uJGxvY2FsZSA9IGxvY2FsZTtcclxuICAgIG9uTG9jYWxlQ2hhbmdlQ2FsbGJhY2tzLmZvckVhY2goKGZuKSA9PiBmbih7XHJcbiAgICAgIGxvY2FsZVxyXG4gICAgfSkpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IG9uTG9jYWxlQ2hhbmdlQ2FsbGJhY2tzID0gW107XHJcbmZ1bmN0aW9uIG9uTG9jYWxlQ2hhbmdlIChmbikge1xyXG4gIGlmIChvbkxvY2FsZUNoYW5nZUNhbGxiYWNrcy5pbmRleE9mKGZuKSA9PT0gLTEpIHtcclxuICAgIG9uTG9jYWxlQ2hhbmdlQ2FsbGJhY2tzLnB1c2goZm4pO1xyXG4gIH1cclxufVxyXG5cclxuaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgZ2xvYmFsLmdldExvY2FsZSA9IGdldExvY2FsZTtcclxufVxyXG5cclxuY29uc3QgaW50ZXJjZXB0b3JzID0ge1xyXG4gIHByb21pc2VJbnRlcmNlcHRvclxyXG59O1xyXG5cclxudmFyIGJhc2VBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gIHVweDJweDogdXB4MnB4LFxyXG4gIGdldExvY2FsZTogZ2V0TG9jYWxlLFxyXG4gIHNldExvY2FsZTogc2V0TG9jYWxlLFxyXG4gIG9uTG9jYWxlQ2hhbmdlOiBvbkxvY2FsZUNoYW5nZSxcclxuICBhZGRJbnRlcmNlcHRvcjogYWRkSW50ZXJjZXB0b3IsXHJcbiAgcmVtb3ZlSW50ZXJjZXB0b3I6IHJlbW92ZUludGVyY2VwdG9yLFxyXG4gIGludGVyY2VwdG9yczogaW50ZXJjZXB0b3JzXHJcbn0pO1xyXG5cclxuY2xhc3MgRXZlbnRDaGFubmVsIHtcclxuICBjb25zdHJ1Y3RvciAoaWQsIGV2ZW50cykge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5saXN0ZW5lciA9IHt9O1xyXG4gICAgdGhpcy5lbWl0Q2FjaGUgPSB7fTtcclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgIHRoaXMub24obmFtZSwgZXZlbnRzW25hbWVdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWl0IChldmVudE5hbWUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IGZucyA9IHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcclxuICAgIGlmICghZm5zKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy5lbWl0Q2FjaGVbZXZlbnROYW1lXSB8fCAodGhpcy5lbWl0Q2FjaGVbZXZlbnROYW1lXSA9IFtdKSkucHVzaChhcmdzKVxyXG4gICAgfVxyXG4gICAgZm5zLmZvckVhY2gob3B0ID0+IHtcclxuICAgICAgb3B0LmZuLmFwcGx5KG9wdC5mbiwgYXJncyk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSA9IGZucy5maWx0ZXIob3B0ID0+IG9wdC50eXBlICE9PSAnb25jZScpO1xyXG4gIH1cclxuXHJcbiAgb24gKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIHRoaXMuX2FkZExpc3RlbmVyKGV2ZW50TmFtZSwgJ29uJywgZm4pO1xyXG4gICAgdGhpcy5fY2xlYXJDYWNoZShldmVudE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgb25jZSAoZXZlbnROYW1lLCBmbikge1xyXG4gICAgdGhpcy5fYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAnb25jZScsIGZuKTtcclxuICAgIHRoaXMuX2NsZWFyQ2FjaGUoZXZlbnROYW1lKTtcclxuICB9XHJcblxyXG4gIG9mZiAoZXZlbnROYW1lLCBmbikge1xyXG4gICAgY29uc3QgZm5zID0gdGhpcy5saXN0ZW5lcltldmVudE5hbWVdO1xyXG4gICAgaWYgKCFmbnMpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoZm4pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOykge1xyXG4gICAgICAgIGlmIChmbnNbaV0uZm4gPT09IGZuKSB7XHJcbiAgICAgICAgICBmbnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpKys7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2xlYXJDYWNoZSAoZXZlbnROYW1lKSB7XHJcbiAgICBjb25zdCBjYWNoZUFyZ3MgPSB0aGlzLmVtaXRDYWNoZVtldmVudE5hbWVdO1xyXG4gICAgaWYgKGNhY2hlQXJncykge1xyXG4gICAgICBmb3IgKDsgY2FjaGVBcmdzLmxlbmd0aCA+IDA7KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIFtldmVudE5hbWVdLmNvbmNhdChjYWNoZUFyZ3Muc2hpZnQoKSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYWRkTGlzdGVuZXIgKGV2ZW50TmFtZSwgdHlwZSwgZm4pIHtcclxuICAgICh0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV0gfHwgKHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSA9IFtdKSkucHVzaCh7XHJcbiAgICAgIGZuLFxyXG4gICAgICB0eXBlXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGV2ZW50Q2hhbm5lbHMgPSB7fTtcclxuXHJcbmNvbnN0IGV2ZW50Q2hhbm5lbFN0YWNrID0gW107XHJcblxyXG5sZXQgaWQgPSAwO1xyXG5cclxuZnVuY3Rpb24gaW5pdEV2ZW50Q2hhbm5lbCAoZXZlbnRzLCBjYWNoZSA9IHRydWUpIHtcclxuICBpZCsrO1xyXG4gIGNvbnN0IGV2ZW50Q2hhbm5lbCA9IG5ldyBFdmVudENoYW5uZWwoaWQsIGV2ZW50cyk7XHJcbiAgaWYgKGNhY2hlKSB7XHJcbiAgICBldmVudENoYW5uZWxzW2lkXSA9IGV2ZW50Q2hhbm5lbDtcclxuICAgIGV2ZW50Q2hhbm5lbFN0YWNrLnB1c2goZXZlbnRDaGFubmVsKTtcclxuICB9XHJcbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFdmVudENoYW5uZWwgKGlkKSB7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICBjb25zdCBldmVudENoYW5uZWwgPSBldmVudENoYW5uZWxzW2lkXTtcclxuICAgIGRlbGV0ZSBldmVudENoYW5uZWxzW2lkXTtcclxuICAgIHJldHVybiBldmVudENoYW5uZWxcclxuICB9XHJcbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbFN0YWNrLnNoaWZ0KClcclxufVxyXG5cclxudmFyIG5hdmlnYXRlVG8gPSB7XHJcbiAgYXJncyAoZnJvbUFyZ3MsIHRvQXJncykge1xyXG4gICAgY29uc3QgaWQgPSBpbml0RXZlbnRDaGFubmVsKGZyb21BcmdzLmV2ZW50cykuaWQ7XHJcbiAgICBpZiAoZnJvbUFyZ3MudXJsKSB7XHJcbiAgICAgIGZyb21BcmdzLnVybCA9IGZyb21BcmdzLnVybCArIChmcm9tQXJncy51cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAnX19pZF9fPScgKyBpZDtcclxuICAgIH1cclxuICB9LFxyXG4gIHJldHVyblZhbHVlIChmcm9tUmVzLCB0b1Jlcykge1xyXG4gICAgZnJvbVJlcy5ldmVudENoYW5uZWwgPSBnZXRFdmVudENoYW5uZWwoKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kRXhpc3RzUGFnZUluZGV4ICh1cmwpIHtcclxuICBjb25zdCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIGxldCBsZW4gPSBwYWdlcy5sZW5ndGg7XHJcbiAgd2hpbGUgKGxlbi0tKSB7XHJcbiAgICBjb25zdCBwYWdlID0gcGFnZXNbbGVuXTtcclxuICAgIGlmIChwYWdlLiRwYWdlICYmIHBhZ2UuJHBhZ2UuZnVsbFBhdGggPT09IHVybCkge1xyXG4gICAgICByZXR1cm4gbGVuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAtMVxyXG59XHJcblxyXG52YXIgcmVkaXJlY3RUbyA9IHtcclxuICBuYW1lIChmcm9tQXJncykge1xyXG4gICAgaWYgKGZyb21BcmdzLmV4aXN0cyA9PT0gJ2JhY2snICYmIGZyb21BcmdzLmRlbHRhKSB7XHJcbiAgICAgIHJldHVybiAnbmF2aWdhdGVCYWNrJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdyZWRpcmVjdFRvJ1xyXG4gIH0sXHJcbiAgYXJncyAoZnJvbUFyZ3MpIHtcclxuICAgIGlmIChmcm9tQXJncy5leGlzdHMgPT09ICdiYWNrJyAmJiBmcm9tQXJncy51cmwpIHtcclxuICAgICAgY29uc3QgZXhpc3RzUGFnZUluZGV4ID0gZmluZEV4aXN0c1BhZ2VJbmRleChmcm9tQXJncy51cmwpO1xyXG4gICAgICBpZiAoZXhpc3RzUGFnZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZ2V0Q3VycmVudFBhZ2VzKCkubGVuZ3RoIC0gMSAtIGV4aXN0c1BhZ2VJbmRleDtcclxuICAgICAgICBpZiAoZGVsdGEgPiAwKSB7XHJcbiAgICAgICAgICBmcm9tQXJncy5kZWx0YSA9IGRlbHRhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnZhciBwcmV2aWV3SW1hZ2UgPSB7XHJcbiAgYXJncyAoZnJvbUFyZ3MpIHtcclxuICAgIGxldCBjdXJyZW50SW5kZXggPSBwYXJzZUludChmcm9tQXJncy5jdXJyZW50KTtcclxuICAgIGlmIChpc05hTihjdXJyZW50SW5kZXgpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgdXJscyA9IGZyb21BcmdzLnVybHM7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodXJscykpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBsZW4gPSB1cmxzLmxlbmd0aDtcclxuICAgIGlmICghbGVuKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA8IDApIHtcclxuICAgICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID49IGxlbikge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSBsZW4gLSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgZnJvbUFyZ3MuY3VycmVudCA9IHVybHNbY3VycmVudEluZGV4XTtcclxuICAgICAgZnJvbUFyZ3MudXJscyA9IHVybHMuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtLCBpbmRleCkgPT4gaW5kZXggPCBjdXJyZW50SW5kZXggPyBpdGVtICE9PSB1cmxzW2N1cnJlbnRJbmRleF0gOiB0cnVlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmcm9tQXJncy5jdXJyZW50ID0gdXJsc1swXTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGluZGljYXRvcjogZmFsc2UsXHJcbiAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xyXG5sZXQgZGV2aWNlSWQ7XHJcbmZ1bmN0aW9uIGFkZFV1aWQgKHJlc3VsdCkge1xyXG4gIGRldmljZUlkID0gZGV2aWNlSWQgfHwgdHQuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIGlmICghZGV2aWNlSWQpIHtcclxuICAgIGRldmljZUlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHR0LnNldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6IFVVSURfS0VZLFxyXG4gICAgICBkYXRhOiBkZXZpY2VJZFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlc3VsdC5kZXZpY2VJZCA9IGRldmljZUlkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTYWZlQXJlYUluc2V0cyAocmVzdWx0KSB7XHJcbiAgaWYgKHJlc3VsdC5zYWZlQXJlYSkge1xyXG4gICAgY29uc3Qgc2FmZUFyZWEgPSByZXN1bHQuc2FmZUFyZWE7XHJcbiAgICByZXN1bHQuc2FmZUFyZWFJbnNldHMgPSB7XHJcbiAgICAgIHRvcDogc2FmZUFyZWEudG9wLFxyXG4gICAgICBsZWZ0OiBzYWZlQXJlYS5sZWZ0LFxyXG4gICAgICByaWdodDogcmVzdWx0LndpbmRvd1dpZHRoIC0gc2FmZUFyZWEucmlnaHQsXHJcbiAgICAgIGJvdHRvbTogcmVzdWx0LndpbmRvd0hlaWdodCAtIHNhZmVBcmVhLmJvdHRvbVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbnZhciBnZXRTeXN0ZW1JbmZvID0ge1xyXG4gIHJldHVyblZhbHVlOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICBhZGRVdWlkKHJlc3VsdCk7XHJcbiAgICBhZGRTYWZlQXJlYUluc2V0cyhyZXN1bHQpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG9OYW1lID0gJ2dldFVzZXJJbmZvJztcclxuY29uc3Qgbk5hbWUgPSAnZ2V0VXNlclByb2ZpbGUnO1xyXG5cclxudmFyIGdldFVzZXJQcm9maWxlID0ge1xyXG4gIG5hbWU6IHR0LmNhbklVc2Uobk5hbWUpID8gbk5hbWUgOiBvTmFtZVxyXG59O1xyXG5cclxuLy8g5LiN5pSv5oyB55qEIEFQSSDliJfooahcclxuY29uc3QgdG9kb3MgPSBbXHJcbiAgJ3ByZWxvYWRQYWdlJyxcclxuICAndW5QcmVsb2FkUGFnZScsXHJcbiAgJ2xvYWRTdWJQYWNrYWdlJ1xyXG4gIC8vICdjcmVhdGVDYW1lcmFDb250ZXh0JyxcclxuICAvLyAnY3JlYXRlTGl2ZVBsYXllckNvbnRleHQnLFxyXG4gIC8vICdnZXRTYXZlZEZpbGVJbmZvJyxcclxuICAvLyAnY3JlYXRlTWFwQ29udGV4dCcsXHJcbiAgLy8gJ29uTWVtb3J5V2FybmluZycsXHJcbiAgLy8gJ29uR3lyb3Njb3BlQ2hhbmdlJyxcclxuICAvLyAnc3RhcnRHeXJvc2NvcGUnLFxyXG4gIC8vICdzdG9wR3lyb3Njb3BlJyxcclxuICAvLyAnc2V0U2NyZWVuQnJpZ2h0bmVzcycsXHJcbiAgLy8gJ2dldFNjcmVlbkJyaWdodG5lc3MnLFxyXG4gIC8vICdhZGRQaG9uZUNvbnRhY3QnLFxyXG4gIC8vICdvcGVuQmx1ZXRvb3RoQWRhcHRlcicsXHJcbiAgLy8gJ3N0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeScsXHJcbiAgLy8gJ29uQmx1ZXRvb3RoRGV2aWNlRm91bmQnLFxyXG4gIC8vICdzdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeScsXHJcbiAgLy8gJ29uQmx1ZXRvb3RoQWRhcHRlclN0YXRlQ2hhbmdlJyxcclxuICAvLyAnZ2V0Q29ubmVjdGVkQmx1ZXRvb3RoRGV2aWNlcycsXHJcbiAgLy8gJ2dldEJsdWV0b290aERldmljZXMnLFxyXG4gIC8vICdnZXRCbHVldG9vdGhBZGFwdGVyU3RhdGUnLFxyXG4gIC8vICdjbG9zZUJsdWV0b290aEFkYXB0ZXInLFxyXG4gIC8vICd3cml0ZUJMRUNoYXJhY3RlcmlzdGljVmFsdWUnLFxyXG4gIC8vICdyZWFkQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZScsXHJcbiAgLy8gJ29uQkxFQ29ubmVjdGlvblN0YXRlQ2hhbmdlJyxcclxuICAvLyAnb25CTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlJyxcclxuICAvLyAnbm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZScsXHJcbiAgLy8gJ2dldEJMRURldmljZVNlcnZpY2VzJyxcclxuICAvLyAnZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzJyxcclxuICAvLyAnY3JlYXRlQkxFQ29ubmVjdGlvbicsXHJcbiAgLy8gJ2Nsb3NlQkxFQ29ubmVjdGlvbicsXHJcbiAgLy8gJ29uQmVhY29uU2VydmljZUNoYW5nZScsXHJcbiAgLy8gJ29uQmVhY29uVXBkYXRlJyxcclxuICAvLyAnZ2V0QmVhY29ucycsXHJcbiAgLy8gJ3N0YXJ0QmVhY29uRGlzY292ZXJ5JyxcclxuICAvLyAnc3RvcEJlYWNvbkRpc2NvdmVyeScsXHJcbiAgLy8gJ3Nob3dOYXZpZ2F0aW9uQmFyTG9hZGluZycsXHJcbiAgLy8gJ2hpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZycsXHJcbiAgLy8gJ3NldFRhYkJhckl0ZW0nLFxyXG4gIC8vICdzZXRUYWJCYXJTdHlsZScsXHJcbiAgLy8gJ2hpZGVUYWJCYXInLFxyXG4gIC8vICdzaG93VGFiQmFyJyxcclxuICAvLyAnc2V0VGFiQmFyQmFkZ2UnLFxyXG4gIC8vICdyZW1vdmVUYWJCYXJCYWRnZScsXHJcbiAgLy8gJ3Nob3dUYWJCYXJSZWREb3QnLFxyXG4gIC8vICdoaWRlVGFiQmFyUmVkRG90JyxcclxuICAvLyAnc2V0QmFja2dyb3VuZENvbG9yJyxcclxuICAvLyAnc2V0QmFja2dyb3VuZFRleHRTdHlsZScsXHJcbiAgLy8gJ2Nob29zZUludm9pY2VUaXRsZScsXHJcbiAgLy8gJ2FkZFRlbXBsYXRlJyxcclxuICAvLyAnZGVsZXRlVGVtcGxhdGUnLFxyXG4gIC8vICdnZXRUZW1wbGF0ZUxpYnJhcnlCeUlkJyxcclxuICAvLyAnZ2V0VGVtcGxhdGVMaWJyYXJ5TGlzdCcsXHJcbiAgLy8gJ2dldFRlbXBsYXRlTGlzdCcsXHJcbiAgLy8gJ3NlbmRUZW1wbGF0ZU1lc3NhZ2UnLFxyXG4gIC8vICdzZXRFbmFibGVEZWJ1ZycsXHJcbiAgLy8gJ29uV2luZG93UmVzaXplJyxcclxuICAvLyAnb2ZmV2luZG93UmVzaXplJyxcclxuICAvLyAnY3JlYXRlT2Zmc2NyZWVuQ2FudmFzJyxcclxuICAvLyAndmlicmF0ZSdcclxuXTtcclxuXHJcbi8vIOWtmOWcqOWFvOWuueaAp+eahCBBUEkg5YiX6KGoXHJcbi8vIOWktOadoeWwj+eoi+W6j+iHqjEuMzUuMCvmlK/mjIFjYW5JVXNlc1xyXG5jb25zdCBjYW5JVXNlcyA9IFtcclxuICAvLyAnY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXInLFxyXG4gIC8vICdnZXRTYXZlZEZpbGVMaXN0JyxcclxuICAvLyAncmVtb3ZlU2F2ZWRGaWxlJyxcclxuICAvLyAnaGlkZUtleWJvYXJkJyxcclxuICAvLyAnZ2V0SW1hZ2VJbmZvJyxcclxuICAvLyAnY3JlYXRlVmlkZW9Db250ZXh0JyxcclxuICAvLyAnb25Tb2NrZXRPcGVuJyxcclxuICAvLyAnb25Tb2NrZXRFcnJvcicsXHJcbiAgLy8gJ3NlbmRTb2NrZXRNZXNzYWdlJyxcclxuICAvLyAnb25Tb2NrZXRNZXNzYWdlJyxcclxuICAvLyAnY2xvc2VTb2NrZXQnLFxyXG4gIC8vICdvblNvY2tldENsb3NlJyxcclxuICAvLyAnZ2V0RXh0Q29uZmlnJyxcclxuICAvLyAnZ2V0RXh0Q29uZmlnU3luYycsXHJcbiAgLy8gJ25hdmlnYXRlVG9NaW5pUHJvZ3JhbScsXHJcbiAgLy8gJ25hdmlnYXRlQmFja01pbmlQcm9ncmFtJyxcclxuICAvLyAnY29tcHJlc3NJbWFnZScsXHJcbiAgLy8gJ2Nob29zZUxvY2F0aW9uJyxcclxuICAvLyAnb3BlbkRvY3VtZW50JyxcclxuICAvLyAnb25Vc2VyQ2FwdHVyZVNjcmVlbicsXHJcbiAgLy8gJ2dldEJhY2tncm91bmRBdWRpb01hbmFnZXInLFxyXG4gIC8vICdzZXROYXZpZ2F0aW9uQmFyQ29sb3InLFxyXG5dO1xyXG5cclxuLy8g6ZyA6KaB5YGa6L2s5o2i55qEIEFQSSDliJfooahcclxuY29uc3QgcHJvdG9jb2xzID0ge1xyXG4gIGNob29zZUltYWdlOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIHNpemVUeXBlOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmF2aWdhdGVUbyxcclxuICByZWRpcmVjdFRvLFxyXG4gIHByZXZpZXdJbWFnZSxcclxuICBnZXRTeXN0ZW1JbmZvLFxyXG4gIGdldFN5c3RlbUluZm9TeW5jOiBnZXRTeXN0ZW1JbmZvLFxyXG4gIGdldFVzZXJQcm9maWxlLFxyXG4gIGNvbm5lY3RTb2NrZXQ6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgbWV0aG9kOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2hvb3NlVmlkZW86IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgY2FtZXJhOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2NhbkNvZGU6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgb25seUZyb21DYW1lcmE6IGZhbHNlLFxyXG4gICAgICBzY2FuVHlwZTogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0QWNjZWxlcm9tZXRlcjoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBpbnRlcnZhbDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHNob3dUb2FzdDoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBpbWFnZTogZmFsc2UsXHJcbiAgICAgIG1hc2s6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93TG9hZGluZzoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBtYXNrOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2hvd01vZGFsOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGNhbmNlbENvbG9yOiBmYWxzZSxcclxuICAgICAgY29uZmlybUNvbG9yOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2hvd0FjdGlvblNoZWV0OiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGl0ZW1Db2xvcjogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGxvZ2luOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIHNjb3BlczogZmFsc2UsXHJcbiAgICAgIHRpbWVvdXQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXRVc2VySW5mbzoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBsYW5nOiBmYWxzZSxcclxuICAgICAgdGltZW91dDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHJlcXVlc3RQYXltZW50OiB7XHJcbiAgICBuYW1lOiB0dC5wYXkgPyAncGF5JyA6ICdyZXF1ZXN0UGF5bWVudCcsXHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIG9yZGVySW5mbzogdHQucGF5ID8gJ29yZGVySW5mbycgOiAnZGF0YSdcclxuICAgIH1cclxuICB9LFxyXG4gIGdldEZpbGVJbmZvOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGRpZ2VzdEFsZ29yaXRobTogZmFsc2VcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDQUxMQkFDS1MgPSBbJ3N1Y2Nlc3MnLCAnZmFpbCcsICdjYW5jZWwnLCAnY29tcGxldGUnXTtcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NDYWxsYmFjayAobWV0aG9kTmFtZSwgbWV0aG9kLCByZXR1cm5WYWx1ZSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICByZXR1cm4gbWV0aG9kKHByb2Nlc3NSZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXMsIHJldHVyblZhbHVlKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NBcmdzIChtZXRob2ROYW1lLCBmcm9tQXJncywgYXJnc09wdGlvbiA9IHt9LCByZXR1cm5WYWx1ZSA9IHt9LCBrZWVwRnJvbUFyZ3MgPSBmYWxzZSkge1xyXG4gIGlmIChpc1BsYWluT2JqZWN0KGZyb21BcmdzKSkgeyAvLyDkuIDoiKwgYXBpIOeahOWPguaVsOino+aekFxyXG4gICAgY29uc3QgdG9BcmdzID0ga2VlcEZyb21BcmdzID09PSB0cnVlID8gZnJvbUFyZ3MgOiB7fTsgLy8gcmV0dXJuVmFsdWUg5Li6IGZhbHNlIOaXtu+8jOivtOaYjuaYr+agvOW8j+WMlui/lOWbnuWAvO+8jOebtOaOpeWcqOi/lOWbnuWAvOWvueixoeS4iuS/ruaUuei1i+WAvFxyXG4gICAgaWYgKGlzRm4oYXJnc09wdGlvbikpIHtcclxuICAgICAgYXJnc09wdGlvbiA9IGFyZ3NPcHRpb24oZnJvbUFyZ3MsIHRvQXJncykgfHwge307XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tQXJncykge1xyXG4gICAgICBpZiAoaGFzT3duKGFyZ3NPcHRpb24sIGtleSkpIHtcclxuICAgICAgICBsZXQga2V5T3B0aW9uID0gYXJnc09wdGlvbltrZXldO1xyXG4gICAgICAgIGlmIChpc0ZuKGtleU9wdGlvbikpIHtcclxuICAgICAgICAgIGtleU9wdGlvbiA9IGtleU9wdGlvbihmcm9tQXJnc1trZXldLCBmcm9tQXJncywgdG9BcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFrZXlPcHRpb24pIHsgLy8g5LiN5pSv5oyB55qE5Y+C5pWwXHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSAnJHttZXRob2ROYW1lfScgbWV0aG9kIG9mIHBsYXRmb3JtICflpLTmnaHlsI/nqIvluo8nIGRvZXMgbm90IHN1cHBvcnQgb3B0aW9uICcke2tleX0nYCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1N0cihrZXlPcHRpb24pKSB7IC8vIOmHjeWGmeWPguaVsCBrZXlcclxuICAgICAgICAgIHRvQXJnc1trZXlPcHRpb25dID0gZnJvbUFyZ3Nba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoa2V5T3B0aW9uKSkgeyAvLyB7bmFtZTpuZXdOYW1lLHZhbHVlOnZhbHVlfeWPr+mHjeaWsOaMh+WumuWPguaVsCBrZXk6dmFsdWVcclxuICAgICAgICAgIHRvQXJnc1trZXlPcHRpb24ubmFtZSA/IGtleU9wdGlvbi5uYW1lIDoga2V5XSA9IGtleU9wdGlvbi52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoQ0FMTEJBQ0tTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcclxuICAgICAgICBpZiAoaXNGbihmcm9tQXJnc1trZXldKSkge1xyXG4gICAgICAgICAgdG9BcmdzW2tleV0gPSBwcm9jZXNzQ2FsbGJhY2sobWV0aG9kTmFtZSwgZnJvbUFyZ3Nba2V5XSwgcmV0dXJuVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWtlZXBGcm9tQXJncykge1xyXG4gICAgICAgICAgdG9BcmdzW2tleV0gPSBmcm9tQXJnc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvQXJnc1xyXG4gIH0gZWxzZSBpZiAoaXNGbihmcm9tQXJncykpIHtcclxuICAgIGZyb21BcmdzID0gcHJvY2Vzc0NhbGxiYWNrKG1ldGhvZE5hbWUsIGZyb21BcmdzLCByZXR1cm5WYWx1ZSk7XHJcbiAgfVxyXG4gIHJldHVybiBmcm9tQXJnc1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzUmV0dXJuVmFsdWUgKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUsIGtlZXBSZXR1cm5WYWx1ZSA9IGZhbHNlKSB7XHJcbiAgaWYgKGlzRm4ocHJvdG9jb2xzLnJldHVyblZhbHVlKSkgeyAvLyDlpITnkIbpgJrnlKggcmV0dXJuVmFsdWVcclxuICAgIHJlcyA9IHByb3RvY29scy5yZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXMpO1xyXG4gIH1cclxuICByZXR1cm4gcHJvY2Vzc0FyZ3MobWV0aG9kTmFtZSwgcmVzLCByZXR1cm5WYWx1ZSwge30sIGtlZXBSZXR1cm5WYWx1ZSlcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlciAobWV0aG9kTmFtZSwgbWV0aG9kKSB7XHJcbiAgaWYgKGhhc093bihwcm90b2NvbHMsIG1ldGhvZE5hbWUpKSB7XHJcbiAgICBjb25zdCBwcm90b2NvbCA9IHByb3RvY29sc1ttZXRob2ROYW1lXTtcclxuICAgIGlmICghcHJvdG9jb2wpIHsgLy8g5pqC5LiN5pSv5oyB55qEIGFwaVxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFBsYXRmb3JtICflpLTmnaHlsI/nqIvluo8nIGRvZXMgbm90IHN1cHBvcnQgJyR7bWV0aG9kTmFtZX0nLmApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZzEsIGFyZzIpIHsgLy8g55uu5YmNIGFwaSDmnIDlpJrkuKTkuKrlj4LmlbBcclxuICAgICAgbGV0IG9wdGlvbnMgPSBwcm90b2NvbDtcclxuICAgICAgaWYgKGlzRm4ocHJvdG9jb2wpKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHByb3RvY29sKGFyZzEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcmcxID0gcHJvY2Vzc0FyZ3MobWV0aG9kTmFtZSwgYXJnMSwgb3B0aW9ucy5hcmdzLCBvcHRpb25zLnJldHVyblZhbHVlKTtcclxuXHJcbiAgICAgIGNvbnN0IGFyZ3MgPSBbYXJnMV07XHJcbiAgICAgIGlmICh0eXBlb2YgYXJnMiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzRm4ob3B0aW9ucy5uYW1lKSkge1xyXG4gICAgICAgIG1ldGhvZE5hbWUgPSBvcHRpb25zLm5hbWUoYXJnMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNTdHIob3B0aW9ucy5uYW1lKSkge1xyXG4gICAgICAgIG1ldGhvZE5hbWUgPSBvcHRpb25zLm5hbWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB0dFttZXRob2ROYW1lXS5hcHBseSh0dCwgYXJncyk7XHJcbiAgICAgIGlmIChpc1N5bmNBcGkobWV0aG9kTmFtZSkpIHsgLy8g5ZCM5q2lIGFwaVxyXG4gICAgICAgIHJldHVybiBwcm9jZXNzUmV0dXJuVmFsdWUobWV0aG9kTmFtZSwgcmV0dXJuVmFsdWUsIG9wdGlvbnMucmV0dXJuVmFsdWUsIGlzQ29udGV4dEFwaShtZXRob2ROYW1lKSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1ldGhvZFxyXG59XHJcblxyXG5jb25zdCB0b2RvQXBpcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG5jb25zdCBUT0RPUyA9IFtcclxuICAnb25UYWJCYXJNaWRCdXR0b25UYXAnLFxyXG4gICdzdWJzY3JpYmVQdXNoJyxcclxuICAndW5zdWJzY3JpYmVQdXNoJyxcclxuICAnb25QdXNoJyxcclxuICAnb2ZmUHVzaCcsXHJcbiAgJ3NoYXJlJ1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kb0FwaSAobmFtZSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiB0b2RvQXBpICh7XHJcbiAgICBmYWlsLFxyXG4gICAgY29tcGxldGVcclxuICB9KSB7XHJcbiAgICBjb25zdCByZXMgPSB7XHJcbiAgICAgIGVyck1zZzogYCR7bmFtZX06ZmFpbCBtZXRob2QgJyR7bmFtZX0nIG5vdCBzdXBwb3J0ZWRgXHJcbiAgICB9O1xyXG4gICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gIH1cclxufVxyXG5cclxuVE9ET1MuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gIHRvZG9BcGlzW25hbWVdID0gY3JlYXRlVG9kb0FwaShuYW1lKTtcclxufSk7XHJcblxyXG52YXIgcHJvdmlkZXJzID0ge1xyXG4gIG9hdXRoOiBbJ3RvdXRpYW8nXSxcclxuICBzaGFyZTogWyd0b3V0aWFvJ10sXHJcbiAgcGF5bWVudDogWyd0b3V0aWFvJ10sXHJcbiAgcHVzaDogWyd0b3V0aWFvJ11cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFByb3ZpZGVyICh7XHJcbiAgc2VydmljZSxcclxuICBzdWNjZXNzLFxyXG4gIGZhaWwsXHJcbiAgY29tcGxldGVcclxufSkge1xyXG4gIGxldCByZXMgPSBmYWxzZTtcclxuICBpZiAocHJvdmlkZXJzW3NlcnZpY2VdKSB7XHJcbiAgICByZXMgPSB7XHJcbiAgICAgIGVyck1zZzogJ2dldFByb3ZpZGVyOm9rJyxcclxuICAgICAgc2VydmljZSxcclxuICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyc1tzZXJ2aWNlXVxyXG4gICAgfTtcclxuICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMgPSB7XHJcbiAgICAgIGVyck1zZzogJ2dldFByb3ZpZGVyOmZhaWwgc2VydmljZSBub3QgZm91bmQnXHJcbiAgICB9O1xyXG4gICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgfVxyXG4gIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbn1cclxuXHJcbnZhciBleHRyYUFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgZ2V0UHJvdmlkZXI6IGdldFByb3ZpZGVyXHJcbn0pO1xyXG5cclxuY29uc3QgZ2V0RW1pdHRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IEVtaXR0ZXI7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFVuaUVtaXR0ZXIgKCkge1xyXG4gICAgaWYgKCFFbWl0dGVyKSB7XHJcbiAgICAgIEVtaXR0ZXIgPSBuZXcgVnVlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRW1pdHRlclxyXG4gIH1cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5IChjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uICRvbiAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcbmZ1bmN0aW9uICRvZmYgKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJG9uY2UgKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcbmZ1bmN0aW9uICRlbWl0ICgpIHtcclxuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbLi4uYXJndW1lbnRzXSlcclxufVxyXG5cclxudmFyIGV2ZW50QXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xyXG4gIF9fcHJvdG9fXzogbnVsbCxcclxuICAkb246ICRvbixcclxuICAkb2ZmOiAkb2ZmLFxyXG4gICRvbmNlOiAkb25jZSxcclxuICAkZW1pdDogJGVtaXRcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZWRpYVF1ZXJ5T2JzZXJ2ZXIgKCkge1xyXG4gIGNvbnN0IG1lZGlhUXVlcnlPYnNlcnZlciA9IHt9O1xyXG4gIGNvbnN0IHtcclxuICAgIHdpbmRvd1dpZHRoLFxyXG4gICAgd2luZG93SGVpZ2h0XHJcbiAgfSA9IHR0LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gd2luZG93V2lkdGggPCB3aW5kb3dIZWlnaHQgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XHJcblxyXG4gIG1lZGlhUXVlcnlPYnNlcnZlci5vYnNlcnZlID0gKG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBsZXQgbWF0Y2hlcyA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gb3B0aW9ucykge1xyXG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSBpdGVtID09PSAnb3JpZW50YXRpb24nID8gb3B0aW9uc1tpdGVtXSA6IE51bWJlcihvcHRpb25zW2l0ZW1dKTtcclxuICAgICAgaWYgKG9wdGlvbnNbaXRlbV0gIT09ICcnKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09ICd3aWR0aCcpIHtcclxuICAgICAgICAgIGlmIChpdGVtVmFsdWUgPT09IHdpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09ICdtaW5XaWR0aCcpIHtcclxuICAgICAgICAgIGlmICh3aW5kb3dXaWR0aCA+PSBpdGVtVmFsdWUpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbSA9PT0gJ21heFdpZHRoJykge1xyXG4gICAgICAgICAgaWYgKHdpbmRvd1dpZHRoIDw9IGl0ZW1WYWx1ZSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXRlbSA9PT0gJ2hlaWdodCcpIHtcclxuICAgICAgICAgIGlmIChpdGVtVmFsdWUgPT09IHdpbmRvd0hlaWdodCkge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtID09PSAnbWluSGVpZ2h0Jykge1xyXG4gICAgICAgICAgaWYgKHdpbmRvd0hlaWdodCA+PSBpdGVtVmFsdWUpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbSA9PT0gJ21heEhlaWdodCcpIHtcclxuICAgICAgICAgIGlmICh3aW5kb3dIZWlnaHQgPD0gaXRlbVZhbHVlKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtID09PSAnb3JpZW50YXRpb24nKSB7XHJcbiAgICAgICAgICBpZiAob3B0aW9uc1tpdGVtXSA9PT0gb3JpZW50YXRpb24pIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoZXNcclxuICB9O1xyXG5cclxuICBtZWRpYVF1ZXJ5T2JzZXJ2ZXIuZGlzY29ubmVjdCA9ICgpID0+IHtcclxuICB9O1xyXG5cclxuICByZXR1cm4gbWVkaWFRdWVyeU9ic2VydmVyXHJcbn1cclxuXHJcbnZhciBhcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gIGNyZWF0ZU1lZGlhUXVlcnlPYnNlcnZlcjogY3JlYXRlTWVkaWFRdWVyeU9ic2VydmVyXHJcbn0pO1xyXG5cclxuY29uc3QgTVBQYWdlID0gUGFnZTtcclxuY29uc3QgTVBDb21wb25lbnQgPSBDb21wb25lbnQ7XHJcblxyXG5jb25zdCBjdXN0b21pemVSRSA9IC86L2c7XHJcblxyXG5jb25zdCBjdXN0b21pemUgPSBjYWNoZWQoKHN0cikgPT4ge1xyXG4gIHJldHVybiBjYW1lbGl6ZShzdHIucmVwbGFjZShjdXN0b21pemVSRSwgJy0nKSlcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbml0VHJpZ2dlckV2ZW50IChtcEluc3RhbmNlKSB7XHJcbiAgY29uc3Qgb2xkVHJpZ2dlckV2ZW50ID0gbXBJbnN0YW5jZS50cmlnZ2VyRXZlbnQ7XHJcbiAgbXBJbnN0YW5jZS50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBvbGRUcmlnZ2VyRXZlbnQuYXBwbHkobXBJbnN0YW5jZSwgW2N1c3RvbWl6ZShldmVudCksIC4uLmFyZ3NdKVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRIb29rIChuYW1lLCBvcHRpb25zLCBpc0NvbXBvbmVudCkge1xyXG4gIHtcclxuICAgIC8vIGZpeCBieSBMeGgg5a2X6IqC6Ieq5a6a5LmJ57uE5Lu2Q29tcG9uZW505p6E6YCg5Zmo5paH5qGj5LiK5YaZ5pyJY3JlYXRlZO+8jOS9huaYr+Wunua1i+WPquinpuWPkeS6hmxpZmV0aW1lc+S4iueahGNyZWF0ZWRcclxuICAgIGlzQ29tcG9uZW50ICYmIChvcHRpb25zID0gb3B0aW9ucy5saWZldGltZXMpO1xyXG4gIH1cclxuICBjb25zdCBvbGRIb29rID0gb3B0aW9uc1tuYW1lXTtcclxuICBpZiAoIW9sZEhvb2spIHtcclxuICAgIG9wdGlvbnNbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGluaXRUcmlnZ2VyRXZlbnQodGhpcyk7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgaW5pdFRyaWdnZXJFdmVudCh0aGlzKTtcclxuICAgICAgcmV0dXJuIG9sZEhvb2suYXBwbHkodGhpcywgYXJncylcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbmlmICghTVBQYWdlLl9fJHdyYXBwZXJlZCkge1xyXG4gIE1QUGFnZS5fXyR3cmFwcGVyZWQgPSB0cnVlO1xyXG4gIFBhZ2UgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBpbml0SG9vaygnb25Mb2FkJywgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gTVBQYWdlKG9wdGlvbnMpXHJcbiAgfTtcclxuICBQYWdlLmFmdGVyID0gTVBQYWdlLmFmdGVyO1xyXG5cclxuICBDb21wb25lbnQgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBpbml0SG9vaygnY3JlYXRlZCcsIG9wdGlvbnMsIHRydWUpO1xyXG4gICAgcmV0dXJuIE1QQ29tcG9uZW50KG9wdGlvbnMpXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgUEFHRV9FVkVOVF9IT09LUyA9IFtcclxuICAnb25QdWxsRG93blJlZnJlc2gnLFxyXG4gICdvblJlYWNoQm90dG9tJyxcclxuICAnb25BZGRUb0Zhdm9yaXRlcycsXHJcbiAgJ29uU2hhcmVUaW1lbGluZScsXHJcbiAgJ29uU2hhcmVBcHBNZXNzYWdlJyxcclxuICAnb25QYWdlU2Nyb2xsJyxcclxuICAnb25SZXNpemUnLFxyXG4gICdvblRhYkl0ZW1UYXAnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBpbml0TW9ja3MgKHZtLCBtb2Nrcykge1xyXG4gIGNvbnN0IG1wSW5zdGFuY2UgPSB2bS4kbXBbdm0ubXBUeXBlXTtcclxuICBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4ge1xyXG4gICAgaWYgKGhhc093bihtcEluc3RhbmNlLCBtb2NrKSkge1xyXG4gICAgICB2bVttb2NrXSA9IG1wSW5zdGFuY2VbbW9ja107XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc0hvb2sgKGhvb2ssIHZ1ZU9wdGlvbnMpIHtcclxuICBpZiAoIXZ1ZU9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoVnVlLm9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShWdWUub3B0aW9uc1tob29rXSkpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICB2dWVPcHRpb25zID0gdnVlT3B0aW9ucy5kZWZhdWx0IHx8IHZ1ZU9wdGlvbnM7XHJcblxyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICBpZiAoaXNGbih2dWVPcHRpb25zLmV4dGVuZE9wdGlvbnNbaG9va10pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAodnVlT3B0aW9ucy5zdXBlciAmJlxyXG4gICAgICB2dWVPcHRpb25zLnN1cGVyLm9wdGlvbnMgJiZcclxuICAgICAgQXJyYXkuaXNBcnJheSh2dWVPcHRpb25zLnN1cGVyLm9wdGlvbnNbaG9va10pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnNbaG9va10pKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBjb25zdCBtaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcclxuICBpZiAoQXJyYXkuaXNBcnJheShtaXhpbnMpKSB7XHJcbiAgICByZXR1cm4gISFtaXhpbnMuZmluZChtaXhpbiA9PiBoYXNIb29rKGhvb2ssIG1peGluKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRIb29rcyAobXBPcHRpb25zLCBob29rcywgdnVlT3B0aW9ucykge1xyXG4gIGhvb2tzLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoaGFzSG9vayhob29rLCB2dWVPcHRpb25zKSkge1xyXG4gICAgICBtcE9wdGlvbnNbaG9va10gPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vayhob29rLCBhcmdzKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VnVlQ29tcG9uZW50IChWdWUsIHZ1ZU9wdGlvbnMpIHtcclxuICB2dWVPcHRpb25zID0gdnVlT3B0aW9ucy5kZWZhdWx0IHx8IHZ1ZU9wdGlvbnM7XHJcbiAgbGV0IFZ1ZUNvbXBvbmVudDtcclxuICBpZiAoaXNGbih2dWVPcHRpb25zKSkge1xyXG4gICAgVnVlQ29tcG9uZW50ID0gdnVlT3B0aW9ucztcclxuICB9IGVsc2Uge1xyXG4gICAgVnVlQ29tcG9uZW50ID0gVnVlLmV4dGVuZCh2dWVPcHRpb25zKTtcclxuICB9XHJcbiAgdnVlT3B0aW9ucyA9IFZ1ZUNvbXBvbmVudC5vcHRpb25zO1xyXG4gIHJldHVybiBbVnVlQ29tcG9uZW50LCB2dWVPcHRpb25zXVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U2xvdHMgKHZtLCB2dWVTbG90cykge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZVNsb3RzKSAmJiB2dWVTbG90cy5sZW5ndGgpIHtcclxuICAgIGNvbnN0ICRzbG90cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB2dWVTbG90cy5mb3JFYWNoKHNsb3ROYW1lID0+IHtcclxuICAgICAgJHNsb3RzW3Nsb3ROYW1lXSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIHZtLiRzY29wZWRTbG90cyA9IHZtLiRzbG90cyA9ICRzbG90cztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRWdWVJZHMgKHZ1ZUlkcywgbXBJbnN0YW5jZSkge1xyXG4gIHZ1ZUlkcyA9ICh2dWVJZHMgfHwgJycpLnNwbGl0KCcsJyk7XHJcbiAgY29uc3QgbGVuID0gdnVlSWRzLmxlbmd0aDtcclxuXHJcbiAgaWYgKGxlbiA9PT0gMSkge1xyXG4gICAgbXBJbnN0YW5jZS5fJHZ1ZUlkID0gdnVlSWRzWzBdO1xyXG4gIH0gZWxzZSBpZiAobGVuID09PSAyKSB7XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlUGlkID0gdnVlSWRzWzFdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdERhdGEgKHZ1ZU9wdGlvbnMsIGNvbnRleHQpIHtcclxuICBsZXQgZGF0YSA9IHZ1ZU9wdGlvbnMuZGF0YSB8fCB7fTtcclxuICBjb25zdCBtZXRob2RzID0gdnVlT3B0aW9ucy5tZXRob2RzIHx8IHt9O1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmNhbGwoY29udGV4dCk7IC8vIOaUr+aMgSBWdWUucHJvdG90eXBlIOS4iuaMgueahOaVsOaNrlxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRykge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybign5qC55o2uIFZ1ZSDnmoQgZGF0YSDlh73mlbDliJ3lp4vljJblsI/nqIvluo8gZGF0YSDlpLHotKXvvIzor7flsL3ph4/noa7kv50gZGF0YSDlh73mlbDkuK3kuI3orr/pl64gdm0g5a+56LGh77yM5ZCm5YiZ5Y+v6IO95b2x5ZON6aaW5qyh5pWw5o2u5riy5p+T6YCf5bqm44CCJywgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8g5a+5IGRhdGEg5qC85byP5YyWXHJcbiAgICAgIGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcclxuICAgIGRhdGEgPSB7fTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XHJcbiAgICBpZiAoY29udGV4dC5fX2xpZmVjeWNsZV9ob29rc19fLmluZGV4T2YobWV0aG9kTmFtZSkgPT09IC0xICYmICFoYXNPd24oZGF0YSwgbWV0aG9kTmFtZSkpIHtcclxuICAgICAgZGF0YVttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmNvbnN0IFBST1BfVFlQRVMgPSBbU3RyaW5nLCBOdW1iZXIsIEJvb2xlYW4sIE9iamVjdCwgQXJyYXksIG51bGxdO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIgKG5hbWUpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gb2JzZXJ2ZXIgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICBpZiAodGhpcy4kdm0pIHtcclxuICAgICAgdGhpcy4kdm1bbmFtZV0gPSBuZXdWYWw7IC8vIOS4uuS6huinpuWPkeWFtuS7lumdniByZW5kZXIgd2F0Y2hlclxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEJlaGF2aW9ycyAodnVlT3B0aW9ucywgaW5pdEJlaGF2aW9yKSB7XHJcbiAgY29uc3QgdnVlQmVoYXZpb3JzID0gdnVlT3B0aW9ucy5iZWhhdmlvcnM7XHJcbiAgY29uc3QgdnVlRXh0ZW5kcyA9IHZ1ZU9wdGlvbnMuZXh0ZW5kcztcclxuICBjb25zdCB2dWVNaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcclxuXHJcbiAgbGV0IHZ1ZVByb3BzID0gdnVlT3B0aW9ucy5wcm9wcztcclxuXHJcbiAgaWYgKCF2dWVQcm9wcykge1xyXG4gICAgdnVlT3B0aW9ucy5wcm9wcyA9IHZ1ZVByb3BzID0gW107XHJcbiAgfVxyXG5cclxuICBjb25zdCBiZWhhdmlvcnMgPSBbXTtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVCZWhhdmlvcnMpKSB7XHJcbiAgICB2dWVCZWhhdmlvcnMuZm9yRWFjaChiZWhhdmlvciA9PiB7XHJcbiAgICAgIGJlaGF2aW9ycy5wdXNoKGJlaGF2aW9yLnJlcGxhY2UoJ3VuaTovLycsIGAke1widHRcIn06Ly9gKSk7XHJcbiAgICAgIGlmIChiZWhhdmlvciA9PT0gJ3VuaTovL2Zvcm0tZmllbGQnKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodnVlUHJvcHMpKSB7XHJcbiAgICAgICAgICB2dWVQcm9wcy5wdXNoKCduYW1lJyk7XHJcbiAgICAgICAgICB2dWVQcm9wcy5wdXNoKCd2YWx1ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2dWVQcm9wcy5uYW1lID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdnVlUHJvcHMudmFsdWUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlciwgQm9vbGVhbiwgQXJyYXksIE9iamVjdCwgRGF0ZV0sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChpc1BsYWluT2JqZWN0KHZ1ZUV4dGVuZHMpICYmIHZ1ZUV4dGVuZHMucHJvcHMpIHtcclxuICAgIGJlaGF2aW9ycy5wdXNoKFxyXG4gICAgICBpbml0QmVoYXZpb3Ioe1xyXG4gICAgICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZUV4dGVuZHMucHJvcHMsIHRydWUpXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVNaXhpbnMpKSB7XHJcbiAgICB2dWVNaXhpbnMuZm9yRWFjaCh2dWVNaXhpbiA9PiB7XHJcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KHZ1ZU1peGluKSAmJiB2dWVNaXhpbi5wcm9wcykge1xyXG4gICAgICAgIGJlaGF2aW9ycy5wdXNoKFxyXG4gICAgICAgICAgaW5pdEJlaGF2aW9yKHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogaW5pdFByb3BlcnRpZXModnVlTWl4aW4ucHJvcHMsIHRydWUpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gYmVoYXZpb3JzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUHJvcFR5cGUgKGtleSwgdHlwZSwgZGVmYXVsdFZhbHVlLCBmaWxlKSB7XHJcbiAgLy8gW1N0cmluZ109PlN0cmluZ1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHR5cGUpICYmIHR5cGUubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gdHlwZVswXVxyXG4gIH1cclxuICByZXR1cm4gdHlwZVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UHJvcGVydGllcyAocHJvcHMsIGlzQmVoYXZpb3IgPSBmYWxzZSwgZmlsZSA9ICcnKSB7XHJcbiAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xyXG4gIGlmICghaXNCZWhhdmlvcikge1xyXG4gICAgcHJvcGVydGllcy52dWVJZCA9IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJydcclxuICAgIH07XHJcbiAgICAvLyDnlKjkuo7lrZfoioLot7PliqjlsI/nqIvluo/mqKHmi5/mir3osaHoioLngrlcclxuICAgIHByb3BlcnRpZXMuZ2VuZXJpYyA9IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB2YWx1ZTogbnVsbFxyXG4gICAgfTtcclxuICAgIC8vIHNjb3BlZFNsb3RzQ29tcGlsZXIgYXV0b1xyXG4gICAgcHJvcGVydGllcy5zY29wZWRTbG90c0NvbXBpbGVyID0ge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfTtcclxuICAgIHByb3BlcnRpZXMudnVlU2xvdHMgPSB7IC8vIOWwj+eoi+W6j+S4jeiDveebtOaOpeWumuS5iSAkc2xvdHMg55qEIHByb3Bz77yM5omA5Lul6YCa6L+HIHZ1ZVNsb3RzIOi9rOaNouWIsCAkc2xvdHNcclxuICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgdmFsdWU6IFtdLFxyXG4gICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgY29uc3QgJHNsb3RzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICBuZXdWYWwuZm9yRWFjaChzbG90TmFtZSA9PiB7XHJcbiAgICAgICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgJHNsb3RzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkgeyAvLyBbJ3RpdGxlJ11cclxuICAgIHByb3BzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgcHJvcGVydGllc1trZXldID0ge1xyXG4gICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHsgLy8ge3RpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OicnfSxjb250ZW50OlN0cmluZ31cclxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdHMgPSBwcm9wc1trZXldO1xyXG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChvcHRzKSkgeyAvLyB0aXRsZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDonJ31cclxuICAgICAgICBsZXQgdmFsdWUgPSBvcHRzLmRlZmF1bHQ7XHJcbiAgICAgICAgaWYgKGlzRm4odmFsdWUpKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRzLnR5cGUgPSBwYXJzZVByb3BUeXBlKGtleSwgb3B0cy50eXBlKTtcclxuXHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0ge1xyXG4gICAgICAgICAgdHlwZTogUFJPUF9UWVBFUy5pbmRleE9mKG9wdHMudHlwZSkgIT09IC0xID8gb3B0cy50eXBlIDogbnVsbCxcclxuICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2UgeyAvLyBjb250ZW50OlN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBwYXJzZVByb3BUeXBlKGtleSwgb3B0cyk7XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0ge1xyXG4gICAgICAgICAgdHlwZTogUFJPUF9UWVBFUy5pbmRleE9mKHR5cGUpICE9PSAtMSA/IHR5cGUgOiBudWxsLFxyXG4gICAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHByb3BlcnRpZXNcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlciQxIChldmVudCkge1xyXG4gIC8vIFRPRE8g5Y+I5b6X5YW85a65IG1wdnVlIOeahCBtcCDlr7nosaFcclxuICB0cnkge1xyXG4gICAgZXZlbnQubXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7XHJcbiAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gbm9vcDtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IG5vb3A7XHJcblxyXG4gIGV2ZW50LnRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCB7fTtcclxuXHJcbiAgaWYgKCFoYXNPd24oZXZlbnQsICdkZXRhaWwnKSkge1xyXG4gICAgZXZlbnQuZGV0YWlsID0ge307XHJcbiAgfVxyXG5cclxuICBpZiAoaGFzT3duKGV2ZW50LCAnbWFya2VySWQnKSkge1xyXG4gICAgZXZlbnQuZGV0YWlsID0gdHlwZW9mIGV2ZW50LmRldGFpbCA9PT0gJ29iamVjdCcgPyBldmVudC5kZXRhaWwgOiB7fTtcclxuICAgIGV2ZW50LmRldGFpbC5tYXJrZXJJZCA9IGV2ZW50Lm1hcmtlcklkO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzUGxhaW5PYmplY3QoZXZlbnQuZGV0YWlsKSkge1xyXG4gICAgZXZlbnQudGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQudGFyZ2V0LCBldmVudC5kZXRhaWwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGV2ZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV4dHJhVmFsdWUgKHZtLCBkYXRhUGF0aHNBcnJheSkge1xyXG4gIGxldCBjb250ZXh0ID0gdm07XHJcbiAgZGF0YVBhdGhzQXJyYXkuZm9yRWFjaChkYXRhUGF0aEFycmF5ID0+IHtcclxuICAgIGNvbnN0IGRhdGFQYXRoID0gZGF0YVBhdGhBcnJheVswXTtcclxuICAgIGNvbnN0IHZhbHVlID0gZGF0YVBhdGhBcnJheVsyXTtcclxuICAgIGlmIChkYXRhUGF0aCB8fCB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7IC8vIFsnJywnJyxpbmRleCwnZGlzYWJsZSddXHJcbiAgICAgIGNvbnN0IHByb3BQYXRoID0gZGF0YVBhdGhBcnJheVsxXTtcclxuICAgICAgY29uc3QgdmFsdWVQYXRoID0gZGF0YVBhdGhBcnJheVszXTtcclxuXHJcbiAgICAgIGxldCB2Rm9yO1xyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihkYXRhUGF0aCkpIHtcclxuICAgICAgICB2Rm9yID0gZGF0YVBhdGg7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWRhdGFQYXRoKSB7XHJcbiAgICAgICAgdkZvciA9IGNvbnRleHQ7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGFQYXRoID09PSAnc3RyaW5nJyAmJiBkYXRhUGF0aCkge1xyXG4gICAgICAgIGlmIChkYXRhUGF0aC5pbmRleE9mKCcjcyMnKSA9PT0gMCkge1xyXG4gICAgICAgICAgdkZvciA9IGRhdGFQYXRoLnN1YnN0cigzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdkZvciA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoLCBjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZGb3IpKSB7XHJcbiAgICAgICAgY29udGV4dCA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2UgaWYgKCFwcm9wUGF0aCkge1xyXG4gICAgICAgIGNvbnRleHQgPSB2Rm9yW3ZhbHVlXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2Rm9yKSkge1xyXG4gICAgICAgICAgY29udGV4dCA9IHZGb3IuZmluZCh2Rm9ySXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5fX2dldF92YWx1ZShwcm9wUGF0aCwgdkZvckl0ZW0pID09PSB2YWx1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZGb3IpKSB7XHJcbiAgICAgICAgICBjb250ZXh0ID0gT2JqZWN0LmtleXModkZvcikuZmluZCh2Rm9yS2V5ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLl9fZ2V0X3ZhbHVlKHByb3BQYXRoLCB2Rm9yW3ZGb3JLZXldKSA9PT0gdmFsdWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCd2LWZvciDmmoLkuI3mlK/mjIHlvqrnjq/mlbDmja7vvJonLCB2Rm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YWx1ZVBhdGgpIHtcclxuICAgICAgICBjb250ZXh0ID0gdm0uX19nZXRfdmFsdWUodmFsdWVQYXRoLCBjb250ZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NFdmVudEV4dHJhICh2bSwgZXh0cmEsIGV2ZW50KSB7XHJcbiAgY29uc3QgZXh0cmFPYmogPSB7fTtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZXh0cmEpICYmIGV4dHJhLmxlbmd0aCkge1xyXG4gICAgLyoqXHJcbiAgICAgKltcclxuICAgICAqICAgIFsnZGF0YS5pdGVtcycsICdkYXRhLmlkJywgaXRlbS5kYXRhLmlkXSxcclxuICAgICAqICAgIFsnbWV0YXMnLCAnaWQnLCBtZXRhLmlkXVxyXG4gICAgICpdLFxyXG4gICAgICpbXHJcbiAgICAgKiAgICBbJ2RhdGEuaXRlbXMnLCAnZGF0YS5pZCcsIGl0ZW0uZGF0YS5pZF0sXHJcbiAgICAgKiAgICBbJ21ldGFzJywgJ2lkJywgbWV0YS5pZF1cclxuICAgICAqXSxcclxuICAgICAqJ3Rlc3QnXHJcbiAgICAgKi9cclxuICAgIGV4dHJhLmZvckVhY2goKGRhdGFQYXRoLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGFQYXRoID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmICghZGF0YVBhdGgpIHsgLy8gbW9kZWwscHJvcC5zeW5jXHJcbiAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSB2bTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGRhdGFQYXRoID09PSAnJGV2ZW50JykgeyAvLyAkZXZlbnRcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZXZlbnQ7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFQYXRoID09PSAnYXJndW1lbnRzJykge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsICYmIGV2ZW50LmRldGFpbC5fX2FyZ3NfXykge1xyXG4gICAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IGV2ZW50LmRldGFpbC5fX2FyZ3NfXztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBbZXZlbnRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFQYXRoLmluZGV4T2YoJyRldmVudC4nKSA9PT0gMCkgeyAvLyAkZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoLnJlcGxhY2UoJyRldmVudC4nLCAnJyksIGV2ZW50KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZ2V0RXh0cmFWYWx1ZSh2bSwgZGF0YVBhdGgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBleHRyYU9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPYmpCeUFycmF5IChhcnIpIHtcclxuICBjb25zdCBvYmogPSB7fTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGFycltpXTtcclxuICAgIG9ialtlbGVtZW50WzBdXSA9IGVsZW1lbnRbMV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0V2ZW50QXJncyAodm0sIGV2ZW50LCBhcmdzID0gW10sIGV4dHJhID0gW10sIGlzQ3VzdG9tLCBtZXRob2ROYW1lKSB7XHJcbiAgbGV0IGlzQ3VzdG9tTVBFdmVudCA9IGZhbHNlOyAvLyB3eGNvbXBvbmVudCDnu4Tku7bvvIzkvKDpgJLljp/lp4sgZXZlbnQg5a+56LGhXHJcbiAgaWYgKGlzQ3VzdG9tKSB7IC8vIOiHquWumuS5ieS6i+S7tlxyXG4gICAgaXNDdXN0b21NUEV2ZW50ID0gZXZlbnQuY3VycmVudFRhcmdldCAmJlxyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQgJiZcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbVR5cGUgPT09ICd3eCc7XHJcbiAgICBpZiAoIWFyZ3MubGVuZ3RoKSB7IC8vIOaXoOWPguaVsO+8jOebtOaOpeS8oOWFpSBldmVudCDmiJYgZGV0YWlsIOaVsOe7hFxyXG4gICAgICBpZiAoaXNDdXN0b21NUEV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFtldmVudF1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZXZlbnQuZGV0YWlsLl9fYXJnc19fIHx8IGV2ZW50LmRldGFpbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZXh0cmFPYmogPSBwcm9jZXNzRXZlbnRFeHRyYSh2bSwgZXh0cmEsIGV2ZW50KTtcclxuXHJcbiAgY29uc3QgcmV0ID0gW107XHJcbiAgYXJncy5mb3JFYWNoKGFyZyA9PiB7XHJcbiAgICBpZiAoYXJnID09PSAnJGV2ZW50Jykge1xyXG4gICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ19fc2V0X21vZGVsJyAmJiAhaXNDdXN0b20pIHsgLy8gaW5wdXQgdi1tb2RlbCB2YWx1ZVxyXG4gICAgICAgIHJldC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tICYmICFpc0N1c3RvbU1QRXZlbnQpIHtcclxuICAgICAgICAgIHJldC5wdXNoKGV2ZW50LmRldGFpbC5fX2FyZ3NfX1swXSk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gd3hjb21wb25lbnQg57uE5Lu25oiW5YaF572u57uE5Lu2XHJcbiAgICAgICAgICByZXQucHVzaChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZ1swXSA9PT0gJ28nKSB7XHJcbiAgICAgICAgcmV0LnB1c2goZ2V0T2JqQnlBcnJheShhcmcpKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBoYXNPd24oZXh0cmFPYmosIGFyZykpIHtcclxuICAgICAgICByZXQucHVzaChleHRyYU9ialthcmddKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQucHVzaChhcmcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXRcclxufVxyXG5cclxuY29uc3QgT05DRSA9ICd+JztcclxuY29uc3QgQ1VTVE9NID0gJ14nO1xyXG5cclxuZnVuY3Rpb24gaXNNYXRjaEV2ZW50VHlwZSAoZXZlbnRUeXBlLCBvcHRUeXBlKSB7XHJcbiAgcmV0dXJuIChldmVudFR5cGUgPT09IG9wdFR5cGUpIHx8XHJcbiAgICAoXHJcbiAgICAgIG9wdFR5cGUgPT09ICdyZWdpb25jaGFuZ2UnICYmXHJcbiAgICAgIChcclxuICAgICAgICBldmVudFR5cGUgPT09ICdiZWdpbicgfHxcclxuICAgICAgICBldmVudFR5cGUgPT09ICdlbmQnXHJcbiAgICAgIClcclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29udGV4dFZtICh2bSkge1xyXG4gIGxldCAkcGFyZW50ID0gdm0uJHBhcmVudDtcclxuICAvLyDniLbnu4Tku7bmmK8gc2NvcGVkIHNsb3RzIOaIluiAheWFtuS7luiHquWumuS5iee7hOS7tuaXtue7p+e7reafpeaJvlxyXG4gIHdoaWxlICgkcGFyZW50ICYmICRwYXJlbnQuJHBhcmVudCAmJiAoJHBhcmVudC4kb3B0aW9ucy5nZW5lcmljIHx8ICRwYXJlbnQuJHBhcmVudC4kb3B0aW9ucy5nZW5lcmljIHx8ICRwYXJlbnQuJHNjb3BlLl8kdnVlUGlkKSkge1xyXG4gICAgJHBhcmVudCA9ICRwYXJlbnQuJHBhcmVudDtcclxuICB9XHJcbiAgcmV0dXJuICRwYXJlbnQgJiYgJHBhcmVudC4kcGFyZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUV2ZW50IChldmVudCkge1xyXG4gIGV2ZW50ID0gd3JhcHBlciQxKGV2ZW50KTtcclxuXHJcbiAgLy8gW1sndGFwJyxbWydoYW5kbGUnLFsxLDIsYV1dLFsnaGFuZGxlMScsWzEsMixhXV1dXV1cclxuICBjb25zdCBkYXRhc2V0ID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgZXZlbnQudGFyZ2V0KS5kYXRhc2V0O1xyXG4gIGlmICghZGF0YXNldCkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2Fybign5LqL5Lu25L+h5oGv5LiN5a2Y5ZyoJylcclxuICB9XHJcbiAgY29uc3QgZXZlbnRPcHRzID0gZGF0YXNldC5ldmVudE9wdHMgfHwgZGF0YXNldFsnZXZlbnQtb3B0cyddOyAvLyDmlK/ku5jlrp0gd2ViLXZpZXcg57uE5Lu2IGRhdGFzZXQg6Z2e6am85bOwXHJcbiAgaWYgKCFldmVudE9wdHMpIHtcclxuICAgIHJldHVybiBjb25zb2xlLndhcm4oJ+S6i+S7tuS/oeaBr+S4jeWtmOWcqCcpXHJcbiAgfVxyXG5cclxuICAvLyBbWydoYW5kbGUnLFsxLDIsYV1dLFsnaGFuZGxlMScsWzEsMixhXV1dXHJcbiAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnQudHlwZTtcclxuXHJcbiAgY29uc3QgcmV0ID0gW107XHJcblxyXG4gIGV2ZW50T3B0cy5mb3JFYWNoKGV2ZW50T3B0ID0+IHtcclxuICAgIGxldCB0eXBlID0gZXZlbnRPcHRbMF07XHJcbiAgICBjb25zdCBldmVudHNBcnJheSA9IGV2ZW50T3B0WzFdO1xyXG5cclxuICAgIGNvbnN0IGlzQ3VzdG9tID0gdHlwZS5jaGFyQXQoMCkgPT09IENVU1RPTTtcclxuICAgIHR5cGUgPSBpc0N1c3RvbSA/IHR5cGUuc2xpY2UoMSkgOiB0eXBlO1xyXG4gICAgY29uc3QgaXNPbmNlID0gdHlwZS5jaGFyQXQoMCkgPT09IE9OQ0U7XHJcbiAgICB0eXBlID0gaXNPbmNlID8gdHlwZS5zbGljZSgxKSA6IHR5cGU7XHJcblxyXG4gICAgaWYgKGV2ZW50c0FycmF5ICYmIGlzTWF0Y2hFdmVudFR5cGUoZXZlbnRUeXBlLCB0eXBlKSkge1xyXG4gICAgICBldmVudHNBcnJheS5mb3JFYWNoKGV2ZW50QXJyYXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSBldmVudEFycmF5WzBdO1xyXG4gICAgICAgIGlmIChtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgICBsZXQgaGFuZGxlckN0eCA9IHRoaXMuJHZtO1xyXG4gICAgICAgICAgaWYgKGhhbmRsZXJDdHguJG9wdGlvbnMuZ2VuZXJpYykgeyAvLyBtcC13ZWl4aW4sbXAtdG91dGlhbyDmir3osaHoioLngrnmqKHmi58gc2NvcGVkIHNsb3RzXHJcbiAgICAgICAgICAgIGhhbmRsZXJDdHggPSBnZXRDb250ZXh0Vm0oaGFuZGxlckN0eCkgfHwgaGFuZGxlckN0eDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnJGVtaXQnKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXJDdHguJGVtaXQuYXBwbHkoaGFuZGxlckN0eCxcclxuICAgICAgICAgICAgICBwcm9jZXNzRXZlbnRBcmdzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy4kdm0sXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIGV2ZW50QXJyYXlbMV0sXHJcbiAgICAgICAgICAgICAgICBldmVudEFycmF5WzJdLFxyXG4gICAgICAgICAgICAgICAgaXNDdXN0b20sXHJcbiAgICAgICAgICAgICAgICBtZXRob2ROYW1lXHJcbiAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJDdHhbbWV0aG9kTmFtZV07XHJcbiAgICAgICAgICBpZiAoIWlzRm4oaGFuZGxlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAgX3ZtLiR7bWV0aG9kTmFtZX0gaXMgbm90IGEgZnVuY3Rpb25gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlzT25jZSkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlci5vbmNlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlci5vbmNlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBwYXJhbXMgPSBwcm9jZXNzRXZlbnRBcmdzKFxyXG4gICAgICAgICAgICB0aGlzLiR2bSxcclxuICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgIGV2ZW50QXJyYXlbMV0sXHJcbiAgICAgICAgICAgIGV2ZW50QXJyYXlbMl0sXHJcbiAgICAgICAgICAgIGlzQ3VzdG9tLFxyXG4gICAgICAgICAgICBtZXRob2ROYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcGFyYW1zID0gQXJyYXkuaXNBcnJheShwYXJhbXMpID8gcGFyYW1zIDogW107XHJcbiAgICAgICAgICAvLyDlj4LmlbDlsL7pg6jlop7liqDljp/lp4vkuovku7blr7nosaHnlKjkuo7lpI3mnYLooajovr7lvI/lhoXojrflj5bpop3lpJbmlbDmja5cclxuICAgICAgICAgIGlmICgvPVxccypcXFMrXFwuZXZlbnRQYXJhbXNcXHMqXFx8XFx8XFxzKlxcUytcXFtbJ1wiXWV2ZW50LXBhcmFtc1snXCJdXFxdLy50ZXN0KGhhbmRsZXIudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNwYXJzZS1hcnJheXNcclxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmNvbmNhdChbLCAsICwgLCAsICwgLCAsICwgLCBldmVudF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0LnB1c2goaGFuZGxlci5hcHBseShoYW5kbGVyQ3R4LCBwYXJhbXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoXHJcbiAgICBldmVudFR5cGUgPT09ICdpbnB1dCcgJiZcclxuICAgIHJldC5sZW5ndGggPT09IDEgJiZcclxuICAgIHR5cGVvZiByZXRbMF0gIT09ICd1bmRlZmluZWQnXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcmV0WzBdXHJcbiAgfVxyXG59XHJcblxyXG5sZXQgbG9jYWxlO1xyXG5cclxue1xyXG4gIGxvY2FsZSA9IHR0LmdldFN5c3RlbUluZm9TeW5jKCkubGFuZ3VhZ2U7XHJcbn1cclxuXHJcbmNvbnN0IGkxOG4gPSBpbml0VnVlSTE4bihcclxuICBsb2NhbGUsXHJcbiAgIHt9XHJcbik7XHJcbmNvbnN0IHQgPSBpMThuLnQ7XHJcbmNvbnN0IGkxOG5NaXhpbiA9IChpMThuLm1peGluID0ge1xyXG4gIGJlZm9yZUNyZWF0ZSAoKSB7XHJcbiAgICBjb25zdCB1bndhdGNoID0gaTE4bi5pMThuLndhdGNoTG9jYWxlKCgpID0+IHtcclxuICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy4kb25jZSgnaG9vazpiZWZvcmVEZXN0cm95JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB1bndhdGNoKCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgICQkdCAoa2V5LCB2YWx1ZXMpIHtcclxuICAgICAgcmV0dXJuIHQoa2V5LCB2YWx1ZXMpXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuY29uc3Qgc2V0TG9jYWxlJDEgPSBpMThuLnNldExvY2FsZTtcclxuY29uc3QgZ2V0TG9jYWxlJDEgPSBpMThuLmdldExvY2FsZTtcclxuXHJcbmZ1bmN0aW9uIGluaXRBcHBMb2NhbGUgKFZ1ZSwgYXBwVm0sIGxvY2FsZSkge1xyXG4gIGNvbnN0IHN0YXRlID0gVnVlLm9ic2VydmFibGUoe1xyXG4gICAgbG9jYWxlOiBsb2NhbGUgfHwgaTE4bi5nZXRMb2NhbGUoKVxyXG4gIH0pO1xyXG4gIGNvbnN0IGxvY2FsZVdhdGNoZXJzID0gW107XHJcbiAgYXBwVm0uJHdhdGNoTG9jYWxlID0gZm4gPT4ge1xyXG4gICAgbG9jYWxlV2F0Y2hlcnMucHVzaChmbik7XHJcbiAgfTtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXBwVm0sICckbG9jYWxlJywge1xyXG4gICAgZ2V0ICgpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmxvY2FsZVxyXG4gICAgfSxcclxuICAgIHNldCAodikge1xyXG4gICAgICBzdGF0ZS5sb2NhbGUgPSB2O1xyXG4gICAgICBsb2NhbGVXYXRjaGVycy5mb3JFYWNoKHdhdGNoID0+IHdhdGNoKHYpKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgaG9va3MgPSBbXHJcbiAgJ29uU2hvdycsXHJcbiAgJ29uSGlkZScsXHJcbiAgJ29uRXJyb3InLFxyXG4gICdvblBhZ2VOb3RGb3VuZCcsXHJcbiAgJ29uVGhlbWVDaGFuZ2UnLFxyXG4gICdvblVuaGFuZGxlZFJlamVjdGlvbidcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGluaXRFdmVudENoYW5uZWwkMSAoKSB7XHJcbiAgVnVlLnByb3RvdHlwZS5nZXRPcGVuZXJFdmVudENoYW5uZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIXRoaXMuX19ldmVudENoYW5uZWxfXykge1xyXG4gICAgICB0aGlzLl9fZXZlbnRDaGFubmVsX18gPSBuZXcgRXZlbnRDaGFubmVsKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fX2V2ZW50Q2hhbm5lbF9fXHJcbiAgfTtcclxuICBjb25zdCBjYWxsSG9vayA9IFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2s7XHJcbiAgVnVlLnByb3RvdHlwZS5fX2NhbGxfaG9vayA9IGZ1bmN0aW9uIChob29rLCBhcmdzKSB7XHJcbiAgICBpZiAoaG9vayA9PT0gJ29uTG9hZCcgJiYgYXJncyAmJiBhcmdzLl9faWRfXykge1xyXG4gICAgICB0aGlzLl9fZXZlbnRDaGFubmVsX18gPSBnZXRFdmVudENoYW5uZWwoYXJncy5fX2lkX18pO1xyXG4gICAgICBkZWxldGUgYXJncy5fX2lkX187XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FsbEhvb2suY2FsbCh0aGlzLCBob29rLCBhcmdzKVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTY29wZWRTbG90c1BhcmFtcyAoKSB7XHJcbiAgY29uc3QgY2VudGVyID0ge307XHJcbiAgY29uc3QgcGFyZW50cyA9IHt9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLiRoYXNTY29wZWRTbG90c1BhcmFtcyA9IGZ1bmN0aW9uICh2dWVJZCkge1xyXG4gICAgY29uc3QgaGFzID0gY2VudGVyW3Z1ZUlkXTtcclxuICAgIGlmICghaGFzKSB7XHJcbiAgICAgIHBhcmVudHNbdnVlSWRdID0gdGhpcztcclxuICAgICAgdGhpcy4kb24oJ2hvb2s6ZGVzdG9yeScsICgpID0+IHtcclxuICAgICAgICBkZWxldGUgcGFyZW50c1t2dWVJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhc1xyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJGdldFNjb3BlZFNsb3RzUGFyYW1zID0gZnVuY3Rpb24gKHZ1ZUlkLCBuYW1lLCBrZXkpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBjZW50ZXJbdnVlSWRdO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gZGF0YVtuYW1lXSB8fCB7fTtcclxuICAgICAgcmV0dXJuIGtleSA/IG9iamVjdFtrZXldIDogb2JqZWN0XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJlbnRzW3Z1ZUlkXSA9IHRoaXM7XHJcbiAgICAgIHRoaXMuJG9uKCdob29rOmRlc3RvcnknLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlIHBhcmVudHNbdnVlSWRdO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLiRzZXRTY29wZWRTbG90c1BhcmFtcyA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG4gICAgY29uc3QgdnVlSWRzID0gdGhpcy4kb3B0aW9ucy5wcm9wc0RhdGEudnVlSWQ7XHJcbiAgICBpZiAodnVlSWRzKSB7XHJcbiAgICAgIGNvbnN0IHZ1ZUlkID0gdnVlSWRzLnNwbGl0KCcsJylbMF07XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IGNlbnRlclt2dWVJZF0gPSBjZW50ZXJbdnVlSWRdIHx8IHt9O1xyXG4gICAgICBvYmplY3RbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgaWYgKHBhcmVudHNbdnVlSWRdKSB7XHJcbiAgICAgICAgcGFyZW50c1t2dWVJZF0uJGZvcmNlVXBkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBWdWUubWl4aW4oe1xyXG4gICAgZGVzdHJveWVkICgpIHtcclxuICAgICAgY29uc3QgcHJvcHNEYXRhID0gdGhpcy4kb3B0aW9ucy5wcm9wc0RhdGE7XHJcbiAgICAgIGNvbnN0IHZ1ZUlkID0gcHJvcHNEYXRhICYmIHByb3BzRGF0YS52dWVJZDtcclxuICAgICAgaWYgKHZ1ZUlkKSB7XHJcbiAgICAgICAgZGVsZXRlIGNlbnRlclt2dWVJZF07XHJcbiAgICAgICAgZGVsZXRlIHBhcmVudHNbdnVlSWRdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQmFzZUFwcCAodm0sIHtcclxuICBtb2NrcyxcclxuICBpbml0UmVmc1xyXG59KSB7XHJcbiAgaW5pdEV2ZW50Q2hhbm5lbCQxKCk7XHJcbiAge1xyXG4gICAgaW5pdFNjb3BlZFNsb3RzUGFyYW1zKCk7XHJcbiAgfVxyXG4gIGlmICh2bS4kb3B0aW9ucy5zdG9yZSkge1xyXG4gICAgVnVlLnByb3RvdHlwZS4kc3RvcmUgPSB2bS4kb3B0aW9ucy5zdG9yZTtcclxuICB9XHJcbiAgdW5pSWRNaXhpbihWdWUpO1xyXG5cclxuICBWdWUucHJvdG90eXBlLm1wSG9zdCA9IFwibXAtdG91dGlhb1wiO1xyXG5cclxuICBWdWUubWl4aW4oe1xyXG4gICAgYmVmb3JlQ3JlYXRlICgpIHtcclxuICAgICAgaWYgKCF0aGlzLiRvcHRpb25zLm1wVHlwZSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm1wVHlwZSA9IHRoaXMuJG9wdGlvbnMubXBUeXBlO1xyXG5cclxuICAgICAgdGhpcy4kbXAgPSB7XHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgW3RoaXMubXBUeXBlXTogdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLiRzY29wZSA9IHRoaXMuJG9wdGlvbnMubXBJbnN0YW5jZTtcclxuXHJcbiAgICAgIGRlbGV0ZSB0aGlzLiRvcHRpb25zLm1wVHlwZTtcclxuICAgICAgZGVsZXRlIHRoaXMuJG9wdGlvbnMubXBJbnN0YW5jZTtcclxuICAgICAgaWYgKHRoaXMubXBUeXBlID09PSAncGFnZScgJiYgdHlwZW9mIGdldEFwcCA9PT0gJ2Z1bmN0aW9uJykgeyAvLyBoYWNrIHZ1ZS1pMThuXHJcbiAgICAgICAgY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcbiAgICAgICAgaWYgKGFwcC4kdm0gJiYgYXBwLiR2bS4kaTE4bikge1xyXG4gICAgICAgICAgdGhpcy5faTE4biA9IGFwcC4kdm0uJGkxOG47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1wVHlwZSAhPT0gJ2FwcCcpIHtcclxuICAgICAgICBpbml0UmVmcyh0aGlzKTtcclxuICAgICAgICBpbml0TW9ja3ModGhpcywgbW9ja3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFwcE9wdGlvbnMgPSB7XHJcbiAgICBvbkxhdW5jaCAoYXJncykge1xyXG4gICAgICBpZiAodGhpcy4kdm0pIHsgLy8g5bey57uP5Yid5aeL5YyW6L+H5LqG77yM5Li76KaB5piv5Li65LqG55m+5bqm77yM55m+5bqmIG9uU2hvdyDlnKggb25MYXVuY2gg5LmL5YmNXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJHZtID0gdm07XHJcblxyXG4gICAgICB0aGlzLiR2bS4kbXAgPSB7XHJcbiAgICAgICAgYXBwOiB0aGlzXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLiR2bS4kc2NvcGUgPSB0aGlzO1xyXG4gICAgICAvLyB2bSDkuIrkuZ/mjILovb0gZ2xvYmFsRGF0YVxyXG4gICAgICB0aGlzLiR2bS5nbG9iYWxEYXRhID0gdGhpcy5nbG9iYWxEYXRhO1xyXG5cclxuICAgICAgdGhpcy4kdm0uX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJywgYXJncyk7XHJcblxyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25MYXVuY2gnLCBhcmdzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyDlhbzlrrnml6fniYjmnKwgZ2xvYmFsRGF0YVxyXG4gIGFwcE9wdGlvbnMuZ2xvYmFsRGF0YSA9IHZtLiRvcHRpb25zLmdsb2JhbERhdGEgfHwge307XHJcbiAgLy8g5bCGIG1ldGhvZHMg5Lit55qE5pa55rOV5oyC5ZyoIGdldEFwcCgpIOS4rVxyXG4gIGNvbnN0IG1ldGhvZHMgPSB2bS4kb3B0aW9ucy5tZXRob2RzO1xyXG4gIGlmIChtZXRob2RzKSB7XHJcbiAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBhcHBPcHRpb25zW25hbWVdID0gbWV0aG9kc1tuYW1lXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEFwcExvY2FsZShWdWUsIHZtLCB0dC5nZXRTeXN0ZW1JbmZvU3luYygpLmxhbmd1YWdlIHx8ICd6aC1IYW5zJyk7XHJcblxyXG4gIGluaXRIb29rcyhhcHBPcHRpb25zLCBob29rcyk7XHJcblxyXG4gIHJldHVybiBhcHBPcHRpb25zXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRWbUJ5VnVlSWQgKHZtLCB2dWVQaWQpIHtcclxuICBjb25zdCAkY2hpbGRyZW4gPSB2bS4kY2hpbGRyZW47XHJcbiAgLy8g5LyY5YWI5p+l5om+55u05bGeKOWPjeWQkeafpeaJvjpodHRwczovL2dpdGh1Yi5jb20vZGNsb3VkaW8vdW5pLWFwcC9pc3N1ZXMvMTIwMClcclxuICBmb3IgKGxldCBpID0gJGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBjb25zdCBjaGlsZFZtID0gJGNoaWxkcmVuW2ldO1xyXG4gICAgaWYgKGNoaWxkVm0uJHNjb3BlLl8kdnVlSWQgPT09IHZ1ZVBpZCkge1xyXG4gICAgICByZXR1cm4gY2hpbGRWbVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyDlj43lkJHpgJLlvZLmn6Xmib5cclxuICBsZXQgcGFyZW50Vm07XHJcbiAgZm9yIChsZXQgaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgcGFyZW50Vm0gPSBmaW5kVm1CeVZ1ZUlkKCRjaGlsZHJlbltpXSwgdnVlUGlkKTtcclxuICAgIGlmIChwYXJlbnRWbSkge1xyXG4gICAgICByZXR1cm4gcGFyZW50Vm1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRCZWhhdmlvciAob3B0aW9ucykge1xyXG4gIHJldHVybiBCZWhhdmlvcihvcHRpb25zKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVMaW5rIChldmVudCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHZ1ZVBpZCxcclxuICAgIHZ1ZU9wdGlvbnNcclxuICB9ID0gZXZlbnQuZGV0YWlsIHx8IGV2ZW50LnZhbHVlOyAvLyBkZXRhaWwg5piv5b6u5L+hLHZhbHVlIOaYr+eZvuW6pihkaXBhdGNoKVxyXG5cclxuICBsZXQgcGFyZW50Vm07XHJcblxyXG4gIGlmICh2dWVQaWQpIHtcclxuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCh0aGlzLiR2bSwgdnVlUGlkKTtcclxuICB9XHJcblxyXG4gIGlmICghcGFyZW50Vm0pIHtcclxuICAgIHBhcmVudFZtID0gdGhpcy4kdm07XHJcbiAgfVxyXG5cclxuICB2dWVPcHRpb25zLnBhcmVudCA9IHBhcmVudFZtO1xyXG59XHJcblxyXG5jb25zdCBtb2NrcyA9IFsnX19yb3V0ZV9fJywgJ19fd2Vidmlld0lkX18nLCAnX19ub2RlaWRfXycsICdfX25vZGVJZF9fJ107XHJcblxyXG5mdW5jdGlvbiBpc1BhZ2UgKCkge1xyXG4gIHJldHVybiB0aGlzLl9fbm9kZWlkX18gPT09IDAgfHwgdGhpcy5fX25vZGVJZF9fID09PSAwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRSZWZzICh2bSkge1xyXG4gIGNvbnN0IG1wSW5zdGFuY2UgPSB2bS4kc2NvcGU7XHJcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICBjb25zdCBtaW5vclZlcnNpb24gPSBwYXJzZUludCh0dC5nZXRTeXN0ZW1JbmZvU3luYygpLlNES1ZlcnNpb24uc3BsaXQoJy4nKVsxXSk7XHJcbiAgaWYgKG1pbm9yVmVyc2lvbiA+IDE2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sICckcmVmcycsIHtcclxuICAgICAgZ2V0ICgpIHtcclxuICAgICAgICBjb25zdCAkcmVmcyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmJyk7XHJcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZWYgPSBjb21wb25lbnQuZGF0YXNldC5yZWY7XHJcbiAgICAgICAgICAkcmVmc1tyZWZdID0gY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZm9yQ29tcG9uZW50cyA9IG1wSW5zdGFuY2Uuc2VsZWN0QWxsQ29tcG9uZW50cygnLnZ1ZS1yZWYtaW4tZm9yJyk7XHJcbiAgICAgICAgZm9yQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZWYgPSBjb21wb25lbnQuZGF0YXNldC5yZWY7XHJcbiAgICAgICAgICBpZiAoISRyZWZzW3JlZl0pIHtcclxuICAgICAgICAgICAgJHJlZnNbcmVmXSA9IFtdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHJlZnNbcmVmXS5wdXNoKGNvbXBvbmVudC4kdm0gfHwgY29tcG9uZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gJHJlZnNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1wSW5zdGFuY2Uuc2VsZWN0QWxsQ29tcG9uZW50cygnLnZ1ZS1yZWYnLCAoY29tcG9uZW50cykgPT4ge1xyXG4gICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICBjb25zdCByZWYgPSBjb21wb25lbnQuZGF0YXNldC5yZWY7XHJcbiAgICAgICAgdm0uJHJlZnNbcmVmXSA9IGNvbXBvbmVudC4kdm0gfHwgY29tcG9uZW50O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZi1pbi1mb3InLCAoZm9yQ29tcG9uZW50cykgPT4ge1xyXG4gICAgICBmb3JDb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICBjb25zdCByZWYgPSBjb21wb25lbnQuZGF0YXNldC5yZWY7XHJcbiAgICAgICAgaWYgKCF2bS4kcmVmc1tyZWZdKSB7XHJcbiAgICAgICAgICB2bS4kcmVmc1tyZWZdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZtLiRyZWZzW3JlZl0ucHVzaChjb21wb25lbnQuJHZtIHx8IGNvbXBvbmVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBpbnN0YW5jZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFJlbGF0aW9uICh7XHJcbiAgdnVlUGlkLFxyXG4gIG1wSW5zdGFuY2VcclxufSkge1xyXG4gIC8vIOWktOadoSB0cmlnZ2VyRXZlbnQg5ZCO77yM5o6l5pS25LqL5Lu25pe25py654m55Yir5pma77yM5bey57uP5Yiw5LqGIHJlYWR5IOS5i+WQjlxyXG4gIGNvbnN0IG5vZGVJZCA9IChtcEluc3RhbmNlLl9fbm9kZUlkX18gfHwgbXBJbnN0YW5jZS5fX25vZGVpZF9fKSArICcnO1xyXG4gIGNvbnN0IHdlYnZpZXdJZCA9IG1wSW5zdGFuY2UuX193ZWJ2aWV3SWRfXyArICcnO1xyXG5cclxuICBpbnN0YW5jZXNbd2Vidmlld0lkICsgJ18nICsgbm9kZUlkXSA9IG1wSW5zdGFuY2UuJHZtO1xyXG5cclxuICB0aGlzLnRyaWdnZXJFdmVudCgnX19sJywge1xyXG4gICAgdnVlUGlkLFxyXG4gICAgbm9kZUlkLFxyXG4gICAgd2Vidmlld0lkXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUxpbmskMSAoe1xyXG4gIGRldGFpbDoge1xyXG4gICAgdnVlUGlkLFxyXG4gICAgbm9kZUlkLFxyXG4gICAgd2Vidmlld0lkXHJcbiAgfVxyXG59KSB7XHJcbiAgY29uc3Qgdm0gPSBpbnN0YW5jZXNbd2Vidmlld0lkICsgJ18nICsgbm9kZUlkXTtcclxuICBpZiAoIXZtKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGxldCBwYXJlbnRWbTtcclxuXHJcbiAgaWYgKHZ1ZVBpZCkge1xyXG4gICAgcGFyZW50Vm0gPSBmaW5kVm1CeVZ1ZUlkKHRoaXMuJHZtLCB2dWVQaWQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwYXJlbnRWbSkge1xyXG4gICAgcGFyZW50Vm0gPSB0aGlzLiR2bTtcclxuICB9XHJcblxyXG4gIHZtLiRwYXJlbnQgPSBwYXJlbnRWbTtcclxuICB2bS4kcm9vdCA9IHBhcmVudFZtLiRyb290O1xyXG4gIHBhcmVudFZtLiRjaGlsZHJlbi5wdXNoKHZtKTtcclxuXHJcbiAgdm0uX19jYWxsX2hvb2soJ2NyZWF0ZWQnKTtcclxuICB2bS5fX2NhbGxfaG9vaygnYmVmb3JlTW91bnQnKTtcclxuICB2bS5faXNNb3VudGVkID0gdHJ1ZTtcclxuICB2bS5fX2NhbGxfaG9vaygnbW91bnRlZCcpO1xyXG4gIHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQXBwICh2bSkge1xyXG4gIFZ1ZS5wcm90b3R5cGUuXyRmYWxsYmFjayA9IHRydWU7IC8vIOmZjee6p++8iOiwg+aVtOWOnyB2dWUg55qE6YOo5YiG55Sf5ZG95ZGo5pyf77yM5aaCIGNyZWF0ZWTvvIxiZWZvcmVNb3VudCxpbmplY3QscHJvdmlkZe+8iVxyXG5cclxuICBWdWUubWl4aW4oe1xyXG4gICAgY3JlYXRlZCAoKSB7IC8vIOWkhOeQhiBpbmplY3Rpb25zLOWktOadoSB0cmlnZ2VyRXZlbnQg5piv5byC5q2l77yM5LiU6Kem5Y+R5pe25py65b6I5oWi77yM5pWF5bu26L+fIHJlbGF0aW9uIOiuvue9rlxyXG4gICAgICBpZiAodGhpcy5tcFR5cGUgIT09ICdhcHAnKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5tcFR5cGUgPT09ICdwYWdlJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLiRzY29wZS5yb3V0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLl9fcm91dGVfX1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy4kc2NvcGUucm91dGUgPSB0aGlzLiRzY29wZS5fX3JvdXRlX187XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0UmVmcyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX2luaXRfaW5qZWN0aW9ucyh0aGlzKTtcclxuICAgICAgICB0aGlzLl9faW5pdF9wcm92aWRlKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBwYXJzZUJhc2VBcHAodm0sIHtcclxuICAgIG1vY2tzLFxyXG4gICAgaW5pdFJlZnM6IGZ1bmN0aW9uICgpIHt9IC8vIGF0dGFjaGVkIOaXtu+8jOWPr+iDveafpeivouS4jeWIsFxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwcCAodm0pIHtcclxuICBBcHAocGFyc2VBcHAodm0pKTtcclxuICByZXR1cm4gdm1cclxufVxyXG5cclxuY29uc3QgZW5jb2RlUmVzZXJ2ZVJFID0gL1shJygpKl0vZztcclxuY29uc3QgZW5jb2RlUmVzZXJ2ZVJlcGxhY2VyID0gYyA9PiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpO1xyXG5jb25zdCBjb21tYVJFID0gLyUyQy9nO1xyXG5cclxuLy8gZml4ZWQgZW5jb2RlVVJJQ29tcG9uZW50IHdoaWNoIGlzIG1vcmUgY29uZm9ybWFudCB0byBSRkMzOTg2OlxyXG4vLyAtIGVzY2FwZXMgWyEnKCkqXVxyXG4vLyAtIHByZXNlcnZlIGNvbW1hc1xyXG5jb25zdCBlbmNvZGUgPSBzdHIgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcclxuICAucmVwbGFjZShlbmNvZGVSZXNlcnZlUkUsIGVuY29kZVJlc2VydmVSZXBsYWNlcilcclxuICAucmVwbGFjZShjb21tYVJFLCAnLCcpO1xyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5UXVlcnkgKG9iaiwgZW5jb2RlU3RyID0gZW5jb2RlKSB7XHJcbiAgY29uc3QgcmVzID0gb2JqID8gT2JqZWN0LmtleXMob2JqKS5tYXAoa2V5ID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IG9ialtrZXldO1xyXG5cclxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gJydcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBlbmNvZGVTdHIoa2V5KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgIHZhbC5mb3JFYWNoKHZhbDIgPT4ge1xyXG4gICAgICAgIGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsMiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlU3RyKGtleSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVTdHIoa2V5KSArICc9JyArIGVuY29kZVN0cih2YWwyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcmJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZW5jb2RlU3RyKGtleSkgKyAnPScgKyBlbmNvZGVTdHIodmFsKVxyXG4gIH0pLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMCkuam9pbignJicpIDogbnVsbDtcclxuICByZXR1cm4gcmVzID8gYD8ke3Jlc31gIDogJydcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VCYXNlQ29tcG9uZW50ICh2dWVDb21wb25lbnRPcHRpb25zLCB7XHJcbiAgaXNQYWdlLFxyXG4gIGluaXRSZWxhdGlvblxyXG59ID0ge30pIHtcclxuICBjb25zdCBbVnVlQ29tcG9uZW50LCB2dWVPcHRpb25zXSA9IGluaXRWdWVDb21wb25lbnQoVnVlLCB2dWVDb21wb25lbnRPcHRpb25zKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXHJcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZSxcclxuICAgIC4uLih2dWVPcHRpb25zLm9wdGlvbnMgfHwge30pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcG9uZW50T3B0aW9ucyA9IHtcclxuICAgIG9wdGlvbnMsXHJcbiAgICBkYXRhOiBpbml0RGF0YSh2dWVPcHRpb25zLCBWdWUucHJvdG90eXBlKSxcclxuICAgIGJlaGF2aW9yczogaW5pdEJlaGF2aW9ycyh2dWVPcHRpb25zLCBpbml0QmVoYXZpb3IpLFxyXG4gICAgcHJvcGVydGllczogaW5pdFByb3BlcnRpZXModnVlT3B0aW9ucy5wcm9wcywgZmFsc2UsIHZ1ZU9wdGlvbnMuX19maWxlKSxcclxuICAgIGxpZmV0aW1lczoge1xyXG4gICAgICBhdHRhY2hlZCAoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcztcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIG1wVHlwZTogaXNQYWdlLmNhbGwodGhpcykgPyAncGFnZScgOiAnY29tcG9uZW50JyxcclxuICAgICAgICAgIG1wSW5zdGFuY2U6IHRoaXMsXHJcbiAgICAgICAgICBwcm9wc0RhdGE6IHByb3BlcnRpZXNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbml0VnVlSWRzKHByb3BlcnRpZXMudnVlSWQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDlpITnkIbniLblrZDlhbPns7tcclxuICAgICAgICBpbml0UmVsYXRpb24uY2FsbCh0aGlzLCB7XHJcbiAgICAgICAgICB2dWVQaWQ6IHRoaXMuXyR2dWVQaWQsXHJcbiAgICAgICAgICB2dWVPcHRpb25zOiBvcHRpb25zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMliB2dWUg5a6e5L6LXHJcbiAgICAgICAgdGhpcy4kdm0gPSBuZXcgVnVlQ29tcG9uZW50KG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyDlpITnkIYkc2xvdHMsJHNjb3BlZFNsb3Rz77yI5pqC5LiN5pSv5oyB5Yqo5oCB5Y+Y5YyWJHNsb3Rz77yJXHJcbiAgICAgICAgaW5pdFNsb3RzKHRoaXMuJHZtLCBwcm9wZXJ0aWVzLnZ1ZVNsb3RzKTtcclxuXHJcbiAgICAgICAgLy8g6Kem5Y+R6aaW5qyhIHNldERhdGFcclxuICAgICAgICB0aGlzLiR2bS4kbW91bnQoKTtcclxuICAgICAgfSxcclxuICAgICAgcmVhZHkgKCkge1xyXG4gICAgICAgIC8vIOW9k+e7hOS7tiBwcm9wcyDpu5jorqTlgLzkuLogdHJ1Ze+8jOWIneWni+WMluaXtuS8oOWFpSBmYWxzZSDkvJrlr7zoh7QgY3JlYXRlZCxyZWFkeSDop6blj5EsIOS9hiBhdHRhY2hlZCDkuI3op6blj5FcclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9jb21tdW5pdHkvZGV2ZWxvcC9kb2MvMDAwNjZhZTI4NDRjYzBmOGViODgzZTJhNTU3ODAwXHJcbiAgICAgICAgaWYgKHRoaXMuJHZtKSB7XHJcbiAgICAgICAgICB0aGlzLiR2bS5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJyk7XHJcbiAgICAgICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25SZWFkeScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZGV0YWNoZWQgKCkge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLiRkZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwYWdlTGlmZXRpbWVzOiB7XHJcbiAgICAgIHNob3cgKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25QYWdlU2hvdycsIGFyZ3MpO1xyXG4gICAgICB9LFxyXG4gICAgICBoaWRlICgpIHtcclxuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25QYWdlSGlkZScpO1xyXG4gICAgICB9LFxyXG4gICAgICByZXNpemUgKHNpemUpIHtcclxuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25QYWdlUmVzaXplJywgc2l6ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIF9fbDogaGFuZGxlTGluayxcclxuICAgICAgX19lOiBoYW5kbGVFdmVudFxyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gZXh0ZXJuYWxDbGFzc2VzXHJcbiAgaWYgKHZ1ZU9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzKSB7XHJcbiAgICBjb21wb25lbnRPcHRpb25zLmV4dGVybmFsQ2xhc3NlcyA9IHZ1ZU9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlT3B0aW9ucy53eHNDYWxsTWV0aG9kcykpIHtcclxuICAgIHZ1ZU9wdGlvbnMud3hzQ2FsbE1ldGhvZHMuZm9yRWFjaChjYWxsTWV0aG9kID0+IHtcclxuICAgICAgY29tcG9uZW50T3B0aW9ucy5tZXRob2RzW2NhbGxNZXRob2RdID0gZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kdm1bY2FsbE1ldGhvZF0oYXJncylcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzUGFnZSkge1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudE9wdGlvbnNcclxuICB9XHJcbiAgcmV0dXJuIFtjb21wb25lbnRPcHRpb25zLCBWdWVDb21wb25lbnRdXHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlQ29tcG9uZW50ICh2dWVPcHRpb25zKSB7XHJcbiAgY29uc3QgW2NvbXBvbmVudE9wdGlvbnMsIFZ1ZUNvbXBvbmVudF0gPSBwYXJzZUJhc2VDb21wb25lbnQodnVlT3B0aW9ucyk7XHJcblxyXG4gIC8vIOWfuuehgOW6kyAyLjAg5Lul5LiKIGF0dGFjaGVkIOmhuuW6j+mUmeS5se+8jOaMieeFpyBjcmVhdGVkIOmhuuW6j+W8uuWItue6oOato1xyXG4gIGNvbXBvbmVudE9wdGlvbnMubGlmZXRpbWVzLmNyZWF0ZWQgPSBmdW5jdGlvbiBjcmVhdGVkICgpIHtcclxuICAgIGNvbXBvbmVudHMucHVzaCh0aGlzKTtcclxuICB9O1xyXG5cclxuICBjb21wb25lbnRPcHRpb25zLmxpZmV0aW1lcy5hdHRhY2hlZCA9IGZ1bmN0aW9uIGF0dGFjaGVkICgpIHtcclxuICAgIHRoaXMuX19saWZldGltZXNfYXR0YWNoZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XHJcblxyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1wVHlwZTogaXNQYWdlLmNhbGwodGhpcykgPyAncGFnZScgOiAnY29tcG9uZW50JyxcclxuICAgICAgICBtcEluc3RhbmNlOiB0aGlzLFxyXG4gICAgICAgIHByb3BzRGF0YTogcHJvcGVydGllc1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaW5pdFZ1ZUlkcyhwcm9wZXJ0aWVzLnZ1ZUlkLCB0aGlzKTtcclxuXHJcbiAgICAgIC8vIOWIneWni+WMliB2dWUg5a6e5L6LXHJcbiAgICAgIHRoaXMuJHZtID0gbmV3IFZ1ZUNvbXBvbmVudChvcHRpb25zKTtcclxuXHJcbiAgICAgIC8vIOWkhOeQhiRzbG90cywkc2NvcGVkU2xvdHPvvIjmmoLkuI3mlK/mjIHliqjmgIHlj5jljJYkc2xvdHPvvIlcclxuICAgICAgaW5pdFNsb3RzKHRoaXMuJHZtLCBwcm9wZXJ0aWVzLnZ1ZVNsb3RzKTtcclxuXHJcbiAgICAgIC8vIOWkhOeQhueItuWtkOWFs+ezu1xyXG4gICAgICBpbml0UmVsYXRpb24uY2FsbCh0aGlzLCB7XHJcbiAgICAgICAgdnVlUGlkOiB0aGlzLl8kdnVlUGlkLFxyXG4gICAgICAgIG1wSW5zdGFuY2U6IHRoaXNcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyDop6blj5HpppbmrKEgc2V0RGF0YVxyXG4gICAgICB0aGlzLiR2bS4kbW91bnQoKTtcclxuICAgIH07XHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHdoaWxlIChjb21wb25lbnQgJiYgY29tcG9uZW50Ll9fbGlmZXRpbWVzX2F0dGFjaGVkICYmIGNvbXBvbmVudHNbMF0gJiYgY29tcG9uZW50ID09PSBjb21wb25lbnRzWzBdKSB7XHJcbiAgICAgIGNvbXBvbmVudHMuc2hpZnQoKTtcclxuICAgICAgY29tcG9uZW50Ll9fbGlmZXRpbWVzX2F0dGFjaGVkKCk7XHJcbiAgICAgIGRlbGV0ZSBjb21wb25lbnQuX19saWZldGltZXNfYXR0YWNoZWQ7XHJcbiAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudHNbMF07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gcmVhZHkg5q+UIGhhbmRsZUxpbmsg6L+Y5pep77yM5Yid5aeL5YyW6YC76L6R5pS+5YiwIGhhbmRsZUxpbmsg5LitXHJcbiAgZGVsZXRlIGNvbXBvbmVudE9wdGlvbnMubGlmZXRpbWVzLnJlYWR5O1xyXG5cclxuICBjb21wb25lbnRPcHRpb25zLm1ldGhvZHMuX19sID0gaGFuZGxlTGluayQxO1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50T3B0aW9uc1xyXG59XHJcblxyXG5jb25zdCBob29rcyQxID0gW1xyXG4gICdvblNob3cnLFxyXG4gICdvbkhpZGUnLFxyXG4gICdvblVubG9hZCdcclxuXTtcclxuXHJcbmhvb2tzJDEucHVzaCguLi5QQUdFX0VWRU5UX0hPT0tTKTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlQmFzZVBhZ2UgKHZ1ZVBhZ2VPcHRpb25zLCB7XHJcbiAgaXNQYWdlLFxyXG4gIGluaXRSZWxhdGlvblxyXG59KSB7XHJcbiAgY29uc3QgcGFnZU9wdGlvbnMgPSBwYXJzZUNvbXBvbmVudCh2dWVQYWdlT3B0aW9ucyk7XHJcblxyXG4gIGluaXRIb29rcyhwYWdlT3B0aW9ucy5tZXRob2RzLCBob29rcyQxLCB2dWVQYWdlT3B0aW9ucyk7XHJcblxyXG4gIHBhZ2VPcHRpb25zLm1ldGhvZHMub25Mb2FkID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBxdWVyeTtcclxuICAgIGNvbnN0IGNvcHlRdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KTtcclxuICAgIGRlbGV0ZSBjb3B5UXVlcnkuX19pZF9fO1xyXG4gICAgdGhpcy4kcGFnZSA9IHtcclxuICAgICAgZnVsbFBhdGg6ICcvJyArICh0aGlzLnJvdXRlIHx8IHRoaXMuaXMpICsgc3RyaW5naWZ5UXVlcnkoY29weVF1ZXJ5KVxyXG4gICAgfTtcclxuICAgIHRoaXMuJHZtLiRtcC5xdWVyeSA9IHF1ZXJ5OyAvLyDlhbzlrrkgbXB2dWVcclxuICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvbkxvYWQnLCBxdWVyeSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHBhZ2VPcHRpb25zXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUGFnZSAodnVlUGFnZU9wdGlvbnMpIHtcclxuICBjb25zdCBwYWdlT3B0aW9ucyA9IHBhcnNlQmFzZVBhZ2UodnVlUGFnZU9wdGlvbnMsIHtcclxuICAgIGlzUGFnZSxcclxuICAgIGluaXRSZWxhdGlvblxyXG4gIH0pO1xyXG4gIC8vIOmhtemdoumcgOimgeWcqCByZWFkeSDkuK3op6blj5HvvIzlhbbku5bnu4Tku7bmmK/lnKggaGFuZGxlTGluayDkuK3op6blj5FcclxuICBwYWdlT3B0aW9ucy5saWZldGltZXMucmVhZHkgPSBmdW5jdGlvbiByZWFkeSAoKSB7XHJcbiAgICBpZiAodGhpcy4kdm0gJiYgdGhpcy4kdm0ubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ2NyZWF0ZWQnKTtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ2JlZm9yZU1vdW50Jyk7XHJcbiAgICAgIHRoaXMuJHZtLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnbW91bnRlZCcpO1xyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25SZWFkeScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pcyAmJiBjb25zb2xlLndhcm4odGhpcy5pcyArICcgaXMgbm90IHJlYWR5Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcGFnZU9wdGlvbnMubGlmZXRpbWVzLmRldGFjaGVkID0gZnVuY3Rpb24gZGV0YWNoZWQgKCkge1xyXG4gICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uJGRlc3Ryb3koKTtcclxuICAgIC8vIOa4heeQhlxyXG4gICAgY29uc3Qgd2Vidmlld0lkID0gdGhpcy5fX3dlYnZpZXdJZF9fO1xyXG4gICAgd2Vidmlld0lkICYmIE9iamVjdC5rZXlzKGluc3RhbmNlcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAoa2V5LmluZGV4T2Yod2Vidmlld0lkICsgJ18nKSA9PT0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBpbnN0YW5jZXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHBhZ2VPcHRpb25zXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UgKHZ1ZVBhZ2VPcHRpb25zKSB7XHJcbiAge1xyXG4gICAgcmV0dXJuIENvbXBvbmVudChwYXJzZVBhZ2UodnVlUGFnZU9wdGlvbnMpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50ICh2dWVPcHRpb25zKSB7XHJcbiAge1xyXG4gICAgcmV0dXJuIENvbXBvbmVudChwYXJzZUNvbXBvbmVudCh2dWVPcHRpb25zKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1YnBhY2thZ2VBcHAgKHZtKSB7XHJcbiAgY29uc3QgYXBwT3B0aW9ucyA9IHBhcnNlQXBwKHZtKTtcclxuICBjb25zdCBhcHAgPSBnZXRBcHAoe1xyXG4gICAgYWxsb3dEZWZhdWx0OiB0cnVlXHJcbiAgfSk7XHJcbiAgdm0uJHNjb3BlID0gYXBwO1xyXG4gIGNvbnN0IGdsb2JhbERhdGEgPSBhcHAuZ2xvYmFsRGF0YTtcclxuICBpZiAoZ2xvYmFsRGF0YSkge1xyXG4gICAgT2JqZWN0LmtleXMoYXBwT3B0aW9ucy5nbG9iYWxEYXRhKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBpZiAoIWhhc093bihnbG9iYWxEYXRhLCBuYW1lKSkge1xyXG4gICAgICAgIGdsb2JhbERhdGFbbmFtZV0gPSBhcHBPcHRpb25zLmdsb2JhbERhdGFbbmFtZV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBPYmplY3Qua2V5cyhhcHBPcHRpb25zKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgaWYgKCFoYXNPd24oYXBwLCBuYW1lKSkge1xyXG4gICAgICBhcHBbbmFtZV0gPSBhcHBPcHRpb25zW25hbWVdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25TaG93KSAmJiB0dC5vbkFwcFNob3cpIHtcclxuICAgIHR0Lm9uQXBwU2hvdygoLi4uYXJncykgPT4ge1xyXG4gICAgICB2bS5fX2NhbGxfaG9vaygnb25TaG93JywgYXJncyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vbkhpZGUpICYmIHR0Lm9uQXBwSGlkZSkge1xyXG4gICAgdHQub25BcHBIaWRlKCguLi5hcmdzKSA9PiB7XHJcbiAgICAgIHZtLl9fY2FsbF9ob29rKCdvbkhpZGUnLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uTGF1bmNoKSkge1xyXG4gICAgY29uc3QgYXJncyA9IHR0LmdldExhdW5jaE9wdGlvbnNTeW5jICYmIHR0LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICB2bS5fX2NhbGxfaG9vaygnb25MYXVuY2gnLCBhcmdzKTtcclxuICB9XHJcbiAgcmV0dXJuIHZtXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBsdWdpbiAodm0pIHtcclxuICBjb25zdCBhcHBPcHRpb25zID0gcGFyc2VBcHAodm0pO1xyXG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25TaG93KSAmJiB0dC5vbkFwcFNob3cpIHtcclxuICAgIHR0Lm9uQXBwU2hvdygoLi4uYXJncykgPT4ge1xyXG4gICAgICBhcHBPcHRpb25zLm9uU2hvdy5hcHBseSh2bSwgYXJncyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vbkhpZGUpICYmIHR0Lm9uQXBwSGlkZSkge1xyXG4gICAgdHQub25BcHBIaWRlKCguLi5hcmdzKSA9PiB7XHJcbiAgICAgIGFwcE9wdGlvbnMub25IaWRlLmFwcGx5KHZtLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uTGF1bmNoKSkge1xyXG4gICAgY29uc3QgYXJncyA9IHR0LmdldExhdW5jaE9wdGlvbnNTeW5jICYmIHR0LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBhcHBPcHRpb25zLm9uTGF1bmNoLmNhbGwodm0sIGFyZ3MpO1xyXG4gIH1cclxuICByZXR1cm4gdm1cclxufVxyXG5cclxudG9kb3MuZm9yRWFjaCh0b2RvQXBpID0+IHtcclxuICBwcm90b2NvbHNbdG9kb0FwaV0gPSBmYWxzZTtcclxufSk7XHJcblxyXG5jYW5JVXNlcy5mb3JFYWNoKGNhbklVc2VBcGkgPT4ge1xyXG4gIGNvbnN0IGFwaU5hbWUgPSBwcm90b2NvbHNbY2FuSVVzZUFwaV0gJiYgcHJvdG9jb2xzW2NhbklVc2VBcGldLm5hbWUgPyBwcm90b2NvbHNbY2FuSVVzZUFwaV0ubmFtZVxyXG4gICAgOiBjYW5JVXNlQXBpO1xyXG4gIGlmICghdHQuY2FuSVVzZShhcGlOYW1lKSkge1xyXG4gICAgcHJvdG9jb2xzW2NhbklVc2VBcGldID0gZmFsc2U7XHJcbiAgfVxyXG59KTtcclxuXHJcbmxldCB1bmkgPSB7fTtcclxuXHJcbmlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmIFwibXAtdG91dGlhb1wiICE9PSAnYXBwLXBsdXMnKSB7XHJcbiAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICBnZXQgKHRhcmdldCwgbmFtZSkge1xyXG4gICAgICBpZiAoaGFzT3duKHRhcmdldCwgbmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJhc2VBcGlbbmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gYmFzZUFwaVtuYW1lXVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhcGlbbmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGFwaVtuYW1lXSlcclxuICAgICAgfVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKGV4dHJhQXBpW25hbWVdKSB7XHJcbiAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGV4dHJhQXBpW25hbWVdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9kb0FwaXNbbmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudEFwaVtuYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBldmVudEFwaVtuYW1lXVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaGFzT3duKHR0LCBuYW1lKSAmJiAhaGFzT3duKHByb3RvY29scywgbmFtZSkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIHdyYXBwZXIobmFtZSwgdHRbbmFtZV0pKVxyXG4gICAgfSxcclxuICAgIHNldCAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9KTtcclxufSBlbHNlIHtcclxuICBPYmplY3Qua2V5cyhiYXNlQXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgdW5pW25hbWVdID0gYmFzZUFwaVtuYW1lXTtcclxuICB9KTtcclxuXHJcbiAge1xyXG4gICAgT2JqZWN0LmtleXModG9kb0FwaXMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSk7XHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5rZXlzKGV4dHJhQXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBPYmplY3Qua2V5cyhldmVudEFwaSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIHVuaVtuYW1lXSA9IGV2ZW50QXBpW25hbWVdO1xyXG4gIH0pO1xyXG5cclxuICBPYmplY3Qua2V5cyhhcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgYXBpW25hbWVdKTtcclxuICB9KTtcclxuXHJcbiAgT2JqZWN0LmtleXModHQpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICBpZiAoaGFzT3duKHR0LCBuYW1lKSB8fCBoYXNPd24ocHJvdG9jb2xzLCBuYW1lKSkge1xyXG4gICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgd3JhcHBlcihuYW1lLCB0dFtuYW1lXSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG50dC5jcmVhdGVBcHAgPSBjcmVhdGVBcHA7XHJcbnR0LmNyZWF0ZVBhZ2UgPSBjcmVhdGVQYWdlO1xyXG50dC5jcmVhdGVDb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQ7XHJcbnR0LmNyZWF0ZVN1YnBhY2thZ2VBcHAgPSBjcmVhdGVTdWJwYWNrYWdlQXBwO1xyXG50dC5jcmVhdGVQbHVnaW4gPSBjcmVhdGVQbHVnaW47XHJcblxyXG52YXIgdW5pJDEgPSB1bmk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1bmkkMTtcclxuZXhwb3J0IHsgY3JlYXRlQXBwLCBjcmVhdGVDb21wb25lbnQsIGNyZWF0ZVBhZ2UsIGNyZWF0ZVBsdWdpbiwgY3JlYXRlU3VicGFja2FnZUFwcCB9O1xyXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKiFcbiAqIFZ1ZS5qcyB2Mi42LjExXG4gKiAoYykgMjAxNC0yMDIxIEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qICAqL1xuXG52YXIgZW1wdHlPYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gVGhlc2UgaGVscGVycyBwcm9kdWNlIGJldHRlciBWTSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXG4vLyBleHBsaWNpdG5lc3MgYW5kIGZ1bmN0aW9uIGlubGluaW5nLlxuZnVuY3Rpb24gaXNVbmRlZiAodikge1xuICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNEZWYgKHYpIHtcbiAgcmV0dXJuIHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzVHJ1ZSAodikge1xuICByZXR1cm4gdiA9PT0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc0ZhbHNlICh2KSB7XG4gIHJldHVybiB2ID09PSBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIHByaW1pdGl2ZS5cbiAqL1xuZnVuY3Rpb24gaXNQcmltaXRpdmUgKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgKVxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiB0b1Jhd1R5cGUgKHZhbHVlKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCAodikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsIGlzIGEgdmFsaWQgYXJyYXkgaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRBcnJheUluZGV4ICh2YWwpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KFN0cmluZyh2YWwpKTtcbiAgcmV0dXJuIG4gPj0gMCAmJiBNYXRoLmZsb29yKG4pID09PSBuICYmIGlzRmluaXRlKHZhbClcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIChcbiAgICBpc0RlZih2YWwpICYmXG4gICAgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHZhbC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuICApXG59XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWwpIHx8IChpc1BsYWluT2JqZWN0KHZhbCkgJiYgdmFsLnRvU3RyaW5nID09PSBfdG9TdHJpbmcpXG4gICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMilcbiAgICAgIDogU3RyaW5nKHZhbClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGlucHV0IHZhbHVlIHRvIGEgbnVtYmVyIGZvciBwZXJzaXN0ZW5jZS5cbiAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxuICovXG5mdW5jdGlvbiB0b051bWJlciAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuXG59XG5cbi8qKlxuICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gKiBpcyBpbiB0aGF0IG1hcC5cbiAqL1xuZnVuY3Rpb24gbWFrZU1hcCAoXG4gIHN0cixcbiAgZXhwZWN0c0xvd2VyQ2FzZVxuKSB7XG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBleHBlY3RzTG93ZXJDYXNlXG4gICAgPyBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9XG4gICAgOiBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGFnIGlzIGEgYnVpbHQtaW4gdGFnLlxuICovXG52YXIgaXNCdWlsdEluVGFnID0gbWFrZU1hcCgnc2xvdCxjb21wb25lbnQnLCB0cnVlKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBpc1Jlc2VydmVkQXR0cmlidXRlID0gbWFrZU1hcCgna2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXMnKTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5LlxuICovXG5mdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH0pXG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAqL1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSk7XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG59KTtcblxuLyoqXG4gKiBTaW1wbGUgYmluZCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQsXG4gKiBlLmcuLCBQaGFudG9tSlMgMS54LiBUZWNobmljYWxseSwgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmVcbiAqIHNpbmNlIG5hdGl2ZSBiaW5kIGlzIG5vdyBwZXJmb3JtYW50IGVub3VnaCBpbiBtb3N0IGJyb3dzZXJzLlxuICogQnV0IHJlbW92aW5nIGl0IHdvdWxkIG1lYW4gYnJlYWtpbmcgY29kZSB0aGF0IHdhcyBhYmxlIHRvIHJ1biBpblxuICogUGhhbnRvbUpTIDEueCwgc28gdGhpcyBtdXN0IGJlIGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHBvbHlmaWxsQmluZCAoZm4sIGN0eCkge1xuICBmdW5jdGlvbiBib3VuZEZuIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG5cbiAgYm91bmRGbi5fbGVuZ3RoID0gZm4ubGVuZ3RoO1xuICByZXR1cm4gYm91bmRGblxufVxuXG5mdW5jdGlvbiBuYXRpdmVCaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmbi5iaW5kKGN0eClcbn1cblxudmFyIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICA/IG5hdGl2ZUJpbmRcbiAgOiBwb2x5ZmlsbEJpbmQ7XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBfZnJvbSkge1xuICAgIHRvW2tleV0gPSBfZnJvbVtrZXldO1xuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0pIHtcbiAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBQZXJmb3JtIG5vIG9wZXJhdGlvbi5cbiAqIFN0dWJiaW5nIGFyZ3MgdG8gbWFrZSBGbG93IGhhcHB5IHdpdGhvdXQgbGVhdmluZyB1c2VsZXNzIHRyYW5zcGlsZWQgY29kZVxuICogd2l0aCAuLi5yZXN0IChodHRwczovL2Zsb3cub3JnL2Jsb2cvMjAxNy8wNS8wNy9TdHJpY3QtRnVuY3Rpb24tQ2FsbC1Bcml0eS8pLlxuICovXG5mdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXG4gKi9cbnZhciBubyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7IHJldHVybiBmYWxzZTsgfTtcblxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgc2FtZSB2YWx1ZS5cbiAqL1xudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF87IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gKi9cbmZ1bmN0aW9uIGxvb3NlRXF1YWwgKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHsgcmV0dXJuIHRydWUgfVxuICB2YXIgaXNPYmplY3RBID0gaXNPYmplY3QoYSk7XG4gIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcbiAgaWYgKGlzT2JqZWN0QSAmJiBpc09iamVjdEIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGlzQXJyYXlBID0gQXJyYXkuaXNBcnJheShhKTtcbiAgICAgIHZhciBpc0FycmF5QiA9IEFycmF5LmlzQXJyYXkoYik7XG4gICAgICBpZiAoaXNBcnJheUEgJiYgaXNBcnJheUIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoZSwgYltpXSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKVxuICAgICAgfSBlbHNlIGlmICghaXNBcnJheUEgJiYgIWlzQXJyYXlCKSB7XG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgcmV0dXJuIGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoICYmIGtleXNBLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlzT2JqZWN0QSAmJiAhaXNPYmplY3RCKSB7XG4gICAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgbG9vc2VseSBlcXVhbCB2YWx1ZSBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBhcnJheSAoaWYgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIHRoZSBhcnJheSBtdXN0XG4gKiBjb250YWluIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZSksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICovXG5mdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgQVNTRVRfVFlQRVMgPSBbXG4gICdjb21wb25lbnQnLFxuICAnZGlyZWN0aXZlJyxcbiAgJ2ZpbHRlcidcbl07XG5cbnZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICdiZWZvcmVDcmVhdGUnLFxuICAnY3JlYXRlZCcsXG4gICdiZWZvcmVNb3VudCcsXG4gICdtb3VudGVkJyxcbiAgJ2JlZm9yZVVwZGF0ZScsXG4gICd1cGRhdGVkJyxcbiAgJ2JlZm9yZURlc3Ryb3knLFxuICAnZGVzdHJveWVkJyxcbiAgJ2FjdGl2YXRlZCcsXG4gICdkZWFjdGl2YXRlZCcsXG4gICdlcnJvckNhcHR1cmVkJyxcbiAgJ3NlcnZlclByZWZldGNoJ1xuXTtcblxuLyogICovXG5cblxuXG52YXIgY29uZmlnID0gKHtcbiAgLyoqXG4gICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICovXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3cgcHJvZHVjdGlvbiBtb2RlIHRpcCBtZXNzYWdlIG9uIGJvb3Q/XG4gICAqL1xuICBwcm9kdWN0aW9uVGlwOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBkZXZ0b29sc1xuICAgKi9cbiAgZGV2dG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVjb3JkIHBlcmZcbiAgICovXG4gIHBlcmZvcm1hbmNlOiBmYWxzZSxcblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxlciBmb3Igd2F0Y2hlciBlcnJvcnNcbiAgICovXG4gIGVycm9ySGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogV2FybiBoYW5kbGVyIGZvciB3YXRjaGVyIHdhcm5zXG4gICAqL1xuICB3YXJuSGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogSWdub3JlIGNlcnRhaW4gY3VzdG9tIGVsZW1lbnRzXG4gICAqL1xuICBpZ25vcmVkRWxlbWVudHM6IFtdLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gdXNlciBrZXkgYWxpYXNlcyBmb3Igdi1vblxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGtleUNvZGVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSByZWdpc3RlcmVkIGFzIGFcbiAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZFRhZzogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSB1c2VkIGFzIGEgY29tcG9uZW50XG4gICAqIHByb3AuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkQXR0cjogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIGFuIHVua25vd24gZWxlbWVudC5cbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgaXNVbmtub3duRWxlbWVudDogbm8sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXNwYWNlIG9mIGFuIGVsZW1lbnRcbiAgICovXG4gIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAvKipcbiAgICogUGFyc2UgdGhlIHJlYWwgdGFnIG5hbWUgZm9yIHRoZSBzcGVjaWZpYyBwbGF0Zm9ybS5cbiAgICovXG4gIHBhcnNlUGxhdGZvcm1UYWdOYW1lOiBpZGVudGl0eSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgbXVzdFVzZVByb3A6IG5vLFxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHVwZGF0ZXMgYXN5bmNocm9ub3VzbHkuIEludGVuZGVkIHRvIGJlIHVzZWQgYnkgVnVlIFRlc3QgVXRpbHNcbiAgICogVGhpcyB3aWxsIHNpZ25pZmljYW50bHkgcmVkdWNlIHBlcmZvcm1hbmNlIGlmIHNldCB0byBmYWxzZS5cbiAgICovXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VkIGZvciBsZWdhY3kgcmVhc29uc1xuICAgKi9cbiAgX2xpZmVjeWNsZUhvb2tzOiBMSUZFQ1lDTEVfSE9PS1Ncbn0pO1xuXG4vKiAgKi9cblxuLyoqXG4gKiB1bmljb2RlIGxldHRlcnMgdXNlZCBmb3IgcGFyc2luZyBodG1sIHRhZ3MsIGNvbXBvbmVudCBuYW1lcyBhbmQgcHJvcGVydHkgcGF0aHMuXG4gKiB1c2luZyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUzL3NlbWFudGljcy1zY3JpcHRpbmcuaHRtbCNwb3RlbnRpYWxjdXN0b21lbGVtZW50bmFtZVxuICogc2tpcHBpbmcgXFx1MTAwMDAtXFx1RUZGRkYgZHVlIHRvIGl0IGZyZWV6aW5nIHVwIFBoYW50b21KU1xuICovXG52YXIgdW5pY29kZVJlZ0V4cCA9IC9hLXpBLVpcXHUwMEI3XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjAzRi1cXHUyMDQwXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZELztcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqL1xuZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2Ugc2ltcGxlIHBhdGguXG4gKi9cbnZhciBiYWlsUkUgPSBuZXcgUmVnRXhwKChcIlteXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCIuJF9cXFxcZF1cIikpO1xuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iaikgeyByZXR1cm4gfVxuICAgICAgb2JqID0gb2JqW3NlZ21lbnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG9ialxuICB9XG59XG5cbi8qICAqL1xuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbnZhciBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9O1xuXG4vLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaW5XZWV4ID0gdHlwZW9mIFdYRW52aXJvbm1lbnQgIT09ICd1bmRlZmluZWQnICYmICEhV1hFbnZpcm9ubWVudC5wbGF0Zm9ybTtcbnZhciB3ZWV4UGxhdGZvcm0gPSBpbldlZXggJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xudmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IFVBICYmIC9tc2llfHRyaWRlbnQvLnRlc3QoVUEpO1xudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG52YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG52YXIgaXNBbmRyb2lkID0gKFVBICYmIFVBLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDApIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdhbmRyb2lkJyk7XG52YXIgaXNJT1MgPSAoVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2lvcycpO1xudmFyIGlzQ2hyb21lID0gVUEgJiYgL2Nocm9tZVxcL1xcZCsvLnRlc3QoVUEpICYmICFpc0VkZ2U7XG52YXIgaXNQaGFudG9tSlMgPSBVQSAmJiAvcGhhbnRvbWpzLy50ZXN0KFVBKTtcbnZhciBpc0ZGID0gVUEgJiYgVUEubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKTtcblxuLy8gRmlyZWZveCBoYXMgYSBcIndhdGNoXCIgZnVuY3Rpb24gb24gT2JqZWN0LnByb3RvdHlwZS4uLlxudmFyIG5hdGl2ZVdhdGNoID0gKHt9KS53YXRjaDtcbmlmIChpbkJyb3dzZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcHRzLCAncGFzc2l2ZScsICh7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICB9XG4gICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QtcGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG4vLyB0aGlzIG5lZWRzIHRvIGJlIGxhenktZXZhbGVkIGJlY2F1c2UgdnVlIG1heSBiZSByZXF1aXJlZCBiZWZvcmVcbi8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXG52YXIgX2lzU2VydmVyO1xudmFyIGlzU2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWluQnJvd3NlciAmJiAhaW5XZWV4ICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgIC8vIFdlYnBhY2sgc2hpbW1pbmcgdGhlIHByb2Nlc3NcbiAgICAgIF9pc1NlcnZlciA9IGdsb2JhbFsncHJvY2VzcyddICYmIGdsb2JhbFsncHJvY2VzcyddLmVudi5WVUVfRU5WID09PSAnc2VydmVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgX2lzU2VydmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBfaXNTZXJ2ZXJcbn07XG5cbi8vIGRldGVjdCBkZXZ0b29sc1xudmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gaXNOYXRpdmUgKEN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXG59XG5cbnZhciBoYXNTeW1ib2wgPVxuICB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmXG4gIHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShSZWZsZWN0Lm93bktleXMpO1xuXG52YXIgX1NldDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0O1xufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxuLyogICovXG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSAobm9vcCk7IC8vIHdvcmsgYXJvdW5kIGZsb3cgY2hlY2tcbnZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICBpZiAodm0uJG9wdGlvbnMgJiYgdm0uJG9wdGlvbnMuX19maWxlKSB7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXR1cm4gKCcnKSArIHZtLiRvcHRpb25zLl9fZmlsZVxuICAgICAgfVxuICAgICAgcmV0dXJuICc8Um9vdD4nXG4gICAgfVxuICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHZtID09PSAnZnVuY3Rpb24nICYmIHZtLmNpZCAhPSBudWxsXG4gICAgICA/IHZtLm9wdGlvbnNcbiAgICAgIDogdm0uX2lzVnVlXG4gICAgICAgID8gdm0uJG9wdGlvbnMgfHwgdm0uY29uc3RydWN0b3Iub3B0aW9uc1xuICAgICAgICA6IHZtO1xuICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IG9wdGlvbnMuX2NvbXBvbmVudFRhZztcbiAgICB2YXIgZmlsZSA9IG9wdGlvbnMuX19maWxlO1xuICAgIGlmICghbmFtZSAmJiBmaWxlKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBmaWxlLm1hdGNoKC8oW14vXFxcXF0rKVxcLnZ1ZSQvKTtcbiAgICAgIG5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKG5hbWUgPyAoXCI8XCIgKyAoY2xhc3NpZnkobmFtZSkpICsgXCI+XCIpIDogXCI8QW5vbnltb3VzPlwiKSArXG4gICAgICAoZmlsZSAmJiBpbmNsdWRlRmlsZSAhPT0gZmFsc2UgPyAoXCIgYXQgXCIgKyBmaWxlKSA6ICcnKVxuICAgIClcbiAgfTtcblxuICB2YXIgcmVwZWF0ID0gZnVuY3Rpb24gKHN0ciwgbikge1xuICAgIHZhciByZXMgPSAnJztcbiAgICB3aGlsZSAobikge1xuICAgICAgaWYgKG4gJSAyID09PSAxKSB7IHJlcyArPSBzdHI7IH1cbiAgICAgIGlmIChuID4gMSkgeyBzdHIgKz0gc3RyOyB9XG4gICAgICBuID4+PSAxO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH07XG5cbiAgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IGZ1bmN0aW9uICh2bSkge1xuICAgIGlmICh2bS5faXNWdWUgJiYgdm0uJHBhcmVudCkge1xuICAgICAgdmFyIHRyZWUgPSBbXTtcbiAgICAgIHZhciBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgd2hpbGUgKHZtICYmIHZtLiRvcHRpb25zLm5hbWUgIT09ICdQYWdlQm9keScpIHtcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0LmNvbnN0cnVjdG9yID09PSB2bS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAhdm0uJG9wdGlvbnMuaXNSZXNlcnZlZCAmJiB0cmVlLnB1c2godm0pO1xuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcblxcbmZvdW5kIGluXFxuXFxuJyArIHRyZWVcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgOiBmb3JtYXRDb21wb25lbnROYW1lKHZtKSkpOyB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlxcblxcbihmb3VuZCBpbiBcIiArIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIilcIilcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbnZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKys7XG4gIHRoaXMuc3VicyA9IFtdO1xufTtcblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIgKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiByZW1vdmVTdWIgKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHtcbiAgICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldC5hZGREZXAodGhpcyk7XG4gIH1cbn07XG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5ICgpIHtcbiAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgIC8vIHN1YnMgYXJlbid0IHNvcnRlZCBpbiBzY2hlZHVsZXIgaWYgbm90IHJ1bm5pbmcgYXN5bmNcbiAgICAvLyB3ZSBuZWVkIHRvIHNvcnQgdGhlbSBub3cgdG8gbWFrZSBzdXJlIHRoZXkgZmlyZSBpbiBjb3JyZWN0XG4gICAgLy8gb3JkZXJcbiAgICBzdWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgfVxufTtcblxuLy8gVGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gVGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSBvbmx5IG9uZSB3YXRjaGVyXG4vLyBjYW4gYmUgZXZhbHVhdGVkIGF0IGEgdGltZS5cbi8vIGZpeGVkIGJ5IHh4eHh4eCAobnZ1ZSBzaGFyZWQgdnVleClcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5EZXAuU2hhcmVkT2JqZWN0ID0ge307XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IG51bGw7XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrID0gW107XG5cbmZ1bmN0aW9uIHB1c2hUYXJnZXQgKHRhcmdldCkge1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLnB1c2godGFyZ2V0KTtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSB0YXJnZXQ7XG4gIERlcC50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBvcFRhcmdldCAoKSB7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sucG9wKCk7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0ID0gRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFja1tEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLmxlbmd0aCAtIDFdO1xuICBEZXAudGFyZ2V0ID0gRGVwLlNoYXJlZE9iamVjdC50YXJnZXQ7XG59XG5cbi8qICAqL1xuXG52YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSAoXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGVsbSxcbiAgY29udGV4dCxcbiAgY29tcG9uZW50T3B0aW9ucyxcbiAgYXN5bmNGYWN0b3J5XG4pIHtcbiAgdGhpcy50YWcgPSB0YWc7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgdGhpcy5lbG0gPSBlbG07XG4gIHRoaXMubnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuZm5Db250ZXh0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmZuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mblNjb3BlSWQgPSB1bmRlZmluZWQ7XG4gIHRoaXMua2V5ID0gZGF0YSAmJiBkYXRhLmtleTtcbiAgdGhpcy5jb21wb25lbnRPcHRpb25zID0gY29tcG9uZW50T3B0aW9ucztcbiAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gIHRoaXMucmF3ID0gZmFsc2U7XG4gIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgdGhpcy5pc1Jvb3RJbnNlcnQgPSB0cnVlO1xuICB0aGlzLmlzQ29tbWVudCA9IGZhbHNlO1xuICB0aGlzLmlzQ2xvbmVkID0gZmFsc2U7XG4gIHRoaXMuaXNPbmNlID0gZmFsc2U7XG4gIHRoaXMuYXN5bmNGYWN0b3J5ID0gYXN5bmNGYWN0b3J5O1xuICB0aGlzLmFzeW5jTWV0YSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXIgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGNoaWxkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbi8vIERFUFJFQ0FURUQ6IGFsaWFzIGZvciBjb21wb25lbnRJbnN0YW5jZSBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5wcm90b3R5cGVBY2Nlc3NvcnMuY2hpbGQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZOb2RlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgaWYgKCB0ZXh0ID09PSB2b2lkIDAgKSB0ZXh0ID0gJyc7XG5cbiAgdmFyIG5vZGUgPSBuZXcgVk5vZGUoKTtcbiAgbm9kZS50ZXh0ID0gdGV4dDtcbiAgbm9kZS5pc0NvbW1lbnQgPSB0cnVlO1xuICByZXR1cm4gbm9kZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBWTm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcodmFsKSlcbn1cblxuLy8gb3B0aW1pemVkIHNoYWxsb3cgY2xvbmVcbi8vIHVzZWQgZm9yIHN0YXRpYyBub2RlcyBhbmQgc2xvdCBub2RlcyBiZWNhdXNlIHRoZXkgbWF5IGJlIHJldXNlZCBhY3Jvc3Ncbi8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxuLy8gb24gdGhlaXIgZWxtIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIGNsb25lVk5vZGUgKHZub2RlKSB7XG4gIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUoXG4gICAgdm5vZGUudGFnLFxuICAgIHZub2RlLmRhdGEsXG4gICAgLy8gIzc5NzVcbiAgICAvLyBjbG9uZSBjaGlsZHJlbiBhcnJheSB0byBhdm9pZCBtdXRhdGluZyBvcmlnaW5hbCBpbiBjYXNlIG9mIGNsb25pbmdcbiAgICAvLyBhIGNoaWxkLlxuICAgIHZub2RlLmNoaWxkcmVuICYmIHZub2RlLmNoaWxkcmVuLnNsaWNlKCksXG4gICAgdm5vZGUudGV4dCxcbiAgICB2bm9kZS5lbG0sXG4gICAgdm5vZGUuY29udGV4dCxcbiAgICB2bm9kZS5jb21wb25lbnRPcHRpb25zLFxuICAgIHZub2RlLmFzeW5jRmFjdG9yeVxuICApO1xuICBjbG9uZWQubnMgPSB2bm9kZS5ucztcbiAgY2xvbmVkLmlzU3RhdGljID0gdm5vZGUuaXNTdGF0aWM7XG4gIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gIGNsb25lZC5pc0NvbW1lbnQgPSB2bm9kZS5pc0NvbW1lbnQ7XG4gIGNsb25lZC5mbkNvbnRleHQgPSB2bm9kZS5mbkNvbnRleHQ7XG4gIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XG4gIGNsb25lZC5mblNjb3BlSWQgPSB2bm9kZS5mblNjb3BlSWQ7XG4gIGNsb25lZC5hc3luY01ldGEgPSB2bm9kZS5hc3luY01ldGE7XG4gIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gIHJldHVybiBjbG9uZWRcbn1cblxuLypcbiAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICogZHluYW1pY2FsbHkgYWNjZXNzaW5nIG1ldGhvZHMgb24gQXJyYXkgcHJvdG90eXBlXG4gKi9cblxudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxudmFyIG1ldGhvZHNUb1BhdGNoID0gW1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fO1xuICAgIHZhciBpbnNlcnRlZDtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIHsgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTsgfVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KTtcbn0pO1xuXG4vKiAgKi9cblxudmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbi8qKlxuICogSW4gc29tZSBjYXNlcyB3ZSBtYXkgd2FudCB0byBkaXNhYmxlIG9ic2VydmF0aW9uIGluc2lkZSBhIGNvbXBvbmVudCdzXG4gKiB1cGRhdGUgY29tcHV0YXRpb24uXG4gKi9cbnZhciBzaG91bGRPYnNlcnZlID0gdHJ1ZTtcblxuZnVuY3Rpb24gdG9nZ2xlT2JzZXJ2aW5nICh2YWx1ZSkge1xuICBzaG91bGRPYnNlcnZlID0gdmFsdWU7XG59XG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBpcyBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoIHVwZGF0ZXMuXG4gKi9cbnZhciBPYnNlcnZlciA9IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICB0aGlzLnZtQ291bnQgPSAwO1xuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgaWYgKGhhc1Byb3RvKSB7XG4gICAgICB7Ly8gZml4ZWQgYnkgeHh4eHh4IOW+ruS/oeWwj+eoi+W6j+S9v+eUqCBwbHVnaW5zIOS5i+WQju+8jOaVsOe7hOaWueazleiiq+ebtOaOpeaMgui9veWIsOS6huaVsOe7hOWvueixoeS4iu+8jOmcgOimgeaJp+ihjCBjb3B5QXVnbWVudCDpgLvovpFcbiAgICAgICAgaWYodmFsdWUucHVzaCAhPT0gdmFsdWUuX19wcm90b19fLnB1c2gpe1xuICAgICAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvdG9BdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpO1xuICB9XG59O1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gd2FsayAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEob2JqLCBrZXlzW2ldKTtcbiAgfVxufTtcblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIG9ic2VydmVBcnJheSAoaXRlbXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKTtcbiAgfVxufTtcblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqL1xuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICovXG5mdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgYXNSb290RGF0YSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmIChcbiAgICBzaG91bGRPYnNlcnZlICYmXG4gICAgIWlzU2VydmVyUmVuZGVyaW5nKCkgJiZcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKTtcbiAgfVxuICBpZiAoYXNSb290RGF0YSAmJiBvYikge1xuICAgIG9iLnZtQ291bnQrKztcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlJCQxIChcbiAgb2JqLFxuICBrZXksXG4gIHZhbCxcbiAgY3VzdG9tU2V0dGVyLFxuICBzaGFsbG93XG4pIHtcbiAgdmFyIGRlcCA9IG5ldyBEZXAoKTtcblxuICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICB2YXIgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICB2YXIgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuICBpZiAoKCFnZXR0ZXIgfHwgc2V0dGVyKSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgdmFsID0gb2JqW2tleV07XG4gIH1cblxuICB2YXIgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUodmFsKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgaWYgKERlcC5TaGFyZWRPYmplY3QudGFyZ2V0KSB7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICBkZXAuZGVwZW5kKCk7XG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKCk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBkZXBlbmRBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUgfHwgKG5ld1ZhbCAhPT0gbmV3VmFsICYmIHZhbHVlICE9PSB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY3VzdG9tU2V0dGVyKSB7XG4gICAgICAgIGN1c3RvbVNldHRlcigpO1xuICAgICAgfVxuICAgICAgLy8gIzc5ODE6IGZvciBhY2Nlc3NvciBwcm9wZXJ0aWVzIHdpdGhvdXQgc2V0dGVyXG4gICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHsgcmV0dXJuIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgfVxuICAgICAgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUobmV3VmFsKTtcbiAgICAgIGRlcC5ub3RpZnkoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqL1xuZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBzZXQgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5sZW5ndGggPSBNYXRoLm1heCh0YXJnZXQubGVuZ3RoLCBrZXkpO1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxLCB2YWwpO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBpZiAoa2V5IGluIHRhcmdldCAmJiAhKGtleSBpbiBPYmplY3QucHJvdG90eXBlKSkge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBhZGRpbmcgcmVhY3RpdmUgcHJvcGVydGllcyB0byBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICdhdCBydW50aW1lIC0gZGVjbGFyZSBpdCB1cGZyb250IGluIHRoZSBkYXRhIG9wdGlvbi4nXG4gICAgKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKCFvYikge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBkZWZpbmVSZWFjdGl2ZSQkMShvYi52YWx1ZSwga2V5LCB2YWwpO1xuICBvYi5kZXAubm90aWZ5KCk7XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICovXG5mdW5jdGlvbiBkZWwgKHRhcmdldCwga2V5KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBkZWxldGUgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBkZWxldGluZyBwcm9wZXJ0aWVzIG9uIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJy0ganVzdCBzZXQgaXQgdG8gbnVsbC4nXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgdGFyZ2V0W2tleV07XG4gIGlmICghb2IpIHtcbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KCk7XG59XG5cbi8qKlxuICogQ29sbGVjdCBkZXBlbmRlbmNpZXMgb24gYXJyYXkgZWxlbWVudHMgd2hlbiB0aGUgYXJyYXkgaXMgdG91Y2hlZCwgc2luY2VcbiAqIHdlIGNhbm5vdCBpbnRlcmNlcHQgYXJyYXkgZWxlbWVudCBhY2Nlc3MgbGlrZSBwcm9wZXJ0eSBnZXR0ZXJzLlxuICovXG5mdW5jdGlvbiBkZXBlbmRBcnJheSAodmFsdWUpIHtcbiAgZm9yICh2YXIgZSA9ICh2b2lkIDApLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGUgPSB2YWx1ZVtpXTtcbiAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZGVwZW5kQXJyYXkoZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIE9wdGlvbiBvdmVyd3JpdGluZyBzdHJhdGVnaWVzIGFyZSBmdW5jdGlvbnMgdGhhdCBoYW5kbGVcbiAqIGhvdyB0byBtZXJnZSBhIHBhcmVudCBvcHRpb24gdmFsdWUgYW5kIGEgY2hpbGQgb3B0aW9uXG4gKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cbiAqL1xudmFyIHN0cmF0cyA9IGNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG5cbi8qKlxuICogT3B0aW9ucyB3aXRoIHJlc3RyaWN0aW9uc1xuICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzdHJhdHMuZWwgPSBzdHJhdHMucHJvcHNEYXRhID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQsIHZtLCBrZXkpIHtcbiAgICBpZiAoIXZtKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIm9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgaW5zdGFuY2UgXCIgK1xuICAgICAgICAnY3JlYXRpb24gd2l0aCB0aGUgYG5ld2Aga2V5d29yZC4nXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFN0cmF0KHBhcmVudCwgY2hpbGQpXG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIHRoYXQgcmVjdXJzaXZlbHkgbWVyZ2VzIHR3byBkYXRhIG9iamVjdHMgdG9nZXRoZXIuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YSAodG8sIGZyb20pIHtcbiAgaWYgKCFmcm9tKSB7IHJldHVybiB0byB9XG4gIHZhciBrZXksIHRvVmFsLCBmcm9tVmFsO1xuXG4gIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgPyBSZWZsZWN0Lm93bktleXMoZnJvbSlcbiAgICA6IE9iamVjdC5rZXlzKGZyb20pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgLy8gaW4gY2FzZSB0aGUgb2JqZWN0IGlzIGFscmVhZHkgb2JzZXJ2ZWQuLi5cbiAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgdG9WYWwgPSB0b1trZXldO1xuICAgIGZyb21WYWwgPSBmcm9tW2tleV07XG4gICAgaWYgKCFoYXNPd24odG8sIGtleSkpIHtcbiAgICAgIHNldCh0bywga2V5LCBmcm9tVmFsKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdG9WYWwgIT09IGZyb21WYWwgJiZcbiAgICAgIGlzUGxhaW5PYmplY3QodG9WYWwpICYmXG4gICAgICBpc1BsYWluT2JqZWN0KGZyb21WYWwpXG4gICAgKSB7XG4gICAgICBtZXJnZURhdGEodG9WYWwsIGZyb21WYWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBEYXRhXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YU9yRm4gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICAvLyBpbiBhIFZ1ZS5leHRlbmQgbWVyZ2UsIGJvdGggc2hvdWxkIGJlIGZ1bmN0aW9uc1xuICAgIGlmICghY2hpbGRWYWwpIHtcbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbFxuICAgIH1cbiAgICAvLyB3aGVuIHBhcmVudFZhbCAmIGNoaWxkVmFsIGFyZSBib3RoIHByZXNlbnQsXG4gICAgLy8gd2UgbmVlZCB0byByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXG4gICAgLy8gY2hlY2sgaWYgcGFyZW50VmFsIGlzIGEgZnVuY3Rpb24gaGVyZSBiZWNhdXNlXG4gICAgLy8gaXQgaGFzIHRvIGJlIGEgZnVuY3Rpb24gdG8gcGFzcyBwcmV2aW91cyBtZXJnZXMuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbiAoKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhKFxuICAgICAgICB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbicgPyBjaGlsZFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogY2hpbGRWYWwsXG4gICAgICAgIHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbicgPyBwYXJlbnRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IHBhcmVudFZhbFxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkSW5zdGFuY2VEYXRhRm4gKCkge1xuICAgICAgLy8gaW5zdGFuY2UgbWVyZ2VcbiAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBjaGlsZFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgOiBjaGlsZFZhbDtcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwYXJlbnRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogcGFyZW50VmFsO1xuICAgICAgaWYgKGluc3RhbmNlRGF0YSkge1xuICAgICAgICByZXR1cm4gbWVyZ2VEYXRhKGluc3RhbmNlRGF0YSwgZGVmYXVsdERhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIGlmIChjaGlsZFZhbCAmJiB0eXBlb2YgY2hpbGRWYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ1RoZSBcImRhdGFcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArXG4gICAgICAgICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgK1xuICAgICAgICAnZGVmaW5pdGlvbnMuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbClcbiAgfVxuXG4gIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKVxufTtcblxuLyoqXG4gKiBIb29rcyBhbmQgcHJvcHMgYXJlIG1lcmdlZCBhcyBhcnJheXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlSG9vayAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWxcbikge1xuICB2YXIgcmVzID0gY2hpbGRWYWxcbiAgICA/IHBhcmVudFZhbFxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgIDogW2NoaWxkVmFsXVxuICAgIDogcGFyZW50VmFsO1xuICByZXR1cm4gcmVzXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXG4gICAgOiByZXNcbn1cblxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXMuaW5kZXhPZihob29rc1tpXSkgPT09IC0xKSB7XG4gICAgICByZXMucHVzaChob29rc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuTElGRUNZQ0xFX0hPT0tTLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgc3RyYXRzW2hvb2tdID0gbWVyZ2VIb29rO1xufSk7XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQXNzZXRzIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKTtcbiAgaWYgKGNoaWxkVmFsKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgICByZXR1cm4gZXh0ZW5kKHJlcywgY2hpbGRWYWwpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbkFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgc3RyYXRzW3R5cGUgKyAncyddID0gbWVyZ2VBc3NldHM7XG59KTtcblxuLyoqXG4gKiBXYXRjaGVycy5cbiAqXG4gKiBXYXRjaGVycyBoYXNoZXMgc2hvdWxkIG5vdCBvdmVyd3JpdGUgb25lXG4gKiBhbm90aGVyLCBzbyB3ZSBtZXJnZSB0aGVtIGFzIGFycmF5cy5cbiAqL1xuc3RyYXRzLndhdGNoID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgLy8gd29yayBhcm91bmQgRmlyZWZveCdzIE9iamVjdC5wcm90b3R5cGUud2F0Y2guLi5cbiAgaWYgKHBhcmVudFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgcGFyZW50VmFsID0gdW5kZWZpbmVkOyB9XG4gIGlmIChjaGlsZFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgY2hpbGRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghY2hpbGRWYWwpIHsgcmV0dXJuIE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0ge307XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGZvciAodmFyIGtleSQxIGluIGNoaWxkVmFsKSB7XG4gICAgdmFyIHBhcmVudCA9IHJldFtrZXkkMV07XG4gICAgdmFyIGNoaWxkID0gY2hpbGRWYWxba2V5JDFdO1xuICAgIGlmIChwYXJlbnQgJiYgIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gW3BhcmVudF07XG4gICAgfVxuICAgIHJldFtrZXkkMV0gPSBwYXJlbnRcbiAgICAgID8gcGFyZW50LmNvbmNhdChjaGlsZClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZCkgPyBjaGlsZCA6IFtjaGlsZF07XG4gIH1cbiAgcmV0dXJuIHJldFxufTtcblxuLyoqXG4gKiBPdGhlciBvYmplY3QgaGFzaGVzLlxuICovXG5zdHJhdHMucHJvcHMgPVxuc3RyYXRzLm1ldGhvZHMgPVxuc3RyYXRzLmluamVjdCA9XG5zdHJhdHMuY29tcHV0ZWQgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICBpZiAoY2hpbGRWYWwgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBpZiAoY2hpbGRWYWwpIHsgZXh0ZW5kKHJldCwgY2hpbGRWYWwpOyB9XG4gIHJldHVybiByZXRcbn07XG5zdHJhdHMucHJvdmlkZSA9IG1lcmdlRGF0YU9yRm47XG5cbi8qKlxuICogRGVmYXVsdCBzdHJhdGVneS5cbiAqL1xudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkXG4gICAgPyBwYXJlbnRWYWxcbiAgICA6IGNoaWxkVmFsXG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIGNvbXBvbmVudCBuYW1lc1xuICovXG5mdW5jdGlvbiBjaGVja0NvbXBvbmVudHMgKG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29tcG9uZW50TmFtZSAobmFtZSkge1xuICBpZiAoIW5ldyBSZWdFeHAoKFwiXlthLXpBLVpdW1xcXFwtXFxcXC4wLTlfXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCJdKiRcIikpLnRlc3QobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICtcbiAgICAgICdzaG91bGQgY29uZm9ybSB0byB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lIGluIGh0bWw1IHNwZWNpZmljYXRpb24uJ1xuICAgICk7XG4gIH1cbiAgaWYgKGlzQnVpbHRJblRhZyhuYW1lKSB8fCBjb25maWcuaXNSZXNlcnZlZFRhZyhuYW1lKSkge1xuICAgIHdhcm4oXG4gICAgICAnRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICtcbiAgICAgICdpZDogJyArIG5hbWVcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogRW5zdXJlIGFsbCBwcm9wcyBvcHRpb24gc3ludGF4IGFyZSBub3JtYWxpemVkIGludG8gdGhlXG4gKiBPYmplY3QtYmFzZWQgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wcyAob3B0aW9ucywgdm0pIHtcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKCFwcm9wcykgeyByZXR1cm4gfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBpLCB2YWwsIG5hbWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFsID0gcHJvcHNbaV07XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmFtZSA9IGNhbWVsaXplKHZhbCk7XG4gICAgICAgIHJlc1tuYW1lXSA9IHsgdHlwZTogbnVsbCB9O1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oJ3Byb3BzIG11c3QgYmUgc3RyaW5ncyB3aGVuIHVzaW5nIGFycmF5IHN5bnRheC4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIHZhbCA9IHByb3BzW2tleV07XG4gICAgICBuYW1lID0gY2FtZWxpemUoa2V5KTtcbiAgICAgIHJlc1tuYW1lXSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IHZhbFxuICAgICAgICA6IHsgdHlwZTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInByb3BzXFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHByb3BzKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICBvcHRpb25zLnByb3BzID0gcmVzO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbGwgaW5qZWN0aW9ucyBpbnRvIE9iamVjdC1iYXNlZCBmb3JtYXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSW5qZWN0IChvcHRpb25zLCB2bSkge1xuICB2YXIgaW5qZWN0ID0gb3B0aW9ucy5pbmplY3Q7XG4gIGlmICghaW5qZWN0KSB7IHJldHVybiB9XG4gIHZhciBub3JtYWxpemVkID0gb3B0aW9ucy5pbmplY3QgPSB7fTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBub3JtYWxpemVkW2luamVjdFtpXV0gPSB7IGZyb206IGluamVjdFtpXSB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gaW5qZWN0KSB7XG4gICAgICB2YXIgdmFsID0gaW5qZWN0W2tleV07XG4gICAgICBub3JtYWxpemVkW2tleV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyBleHRlbmQoeyBmcm9tOiBrZXkgfSwgdmFsKVxuICAgICAgICA6IHsgZnJvbTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImluamVjdFxcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShpbmplY3QpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTm9ybWFsaXplIHJhdyBmdW5jdGlvbiBkaXJlY3RpdmVzIGludG8gb2JqZWN0IGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyAob3B0aW9ucykge1xuICB2YXIgZGlycyA9IG9wdGlvbnMuZGlyZWN0aXZlcztcbiAgaWYgKGRpcnMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGlycykge1xuICAgICAgdmFyIGRlZiQkMSA9IGRpcnNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZGVmJCQxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpcnNba2V5XSA9IHsgYmluZDogZGVmJCQxLCB1cGRhdGU6IGRlZiQkMSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRPYmplY3RUeXBlIChuYW1lLCB2YWx1ZSwgdm0pIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiOiBleHBlY3RlZCBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUodmFsdWUpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIG9wdGlvbiBvYmplY3RzIGludG8gYSBuZXcgb25lLlxuICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VPcHRpb25zIChcbiAgcGFyZW50LFxuICBjaGlsZCxcbiAgdm1cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrQ29tcG9uZW50cyhjaGlsZCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2hpbGQgPSBjaGlsZC5vcHRpb25zO1xuICB9XG5cbiAgbm9ybWFsaXplUHJvcHMoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplSW5qZWN0KGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZURpcmVjdGl2ZXMoY2hpbGQpO1xuXG4gIC8vIEFwcGx5IGV4dGVuZHMgYW5kIG1peGlucyBvbiB0aGUgY2hpbGQgb3B0aW9ucyxcbiAgLy8gYnV0IG9ubHkgaWYgaXQgaXMgYSByYXcgb3B0aW9ucyBvYmplY3QgdGhhdCBpc24ndFxuICAvLyB0aGUgcmVzdWx0IG9mIGFub3RoZXIgbWVyZ2VPcHRpb25zIGNhbGwuXG4gIC8vIE9ubHkgbWVyZ2VkIG9wdGlvbnMgaGFzIHRoZSBfYmFzZSBwcm9wZXJ0eS5cbiAgaWYgKCFjaGlsZC5fYmFzZSkge1xuICAgIGlmIChjaGlsZC5leHRlbmRzKSB7XG4gICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5leHRlbmRzLCB2bSk7XG4gICAgfVxuICAgIGlmIChjaGlsZC5taXhpbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGQubWl4aW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5taXhpbnNbaV0sIHZtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBwYXJlbnQpIHtcbiAgICBtZXJnZUZpZWxkKGtleSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcbiAgICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2VGaWVsZCAoa2V5KSB7XG4gICAgdmFyIHN0cmF0ID0gc3RyYXRzW2tleV0gfHwgZGVmYXVsdFN0cmF0O1xuICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KTtcbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gYXNzZXQuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAqIHRvIGFzc2V0cyBkZWZpbmVkIGluIGl0cyBhbmNlc3RvciBjaGFpbi5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFzc2V0IChcbiAgb3B0aW9ucyxcbiAgdHlwZSxcbiAgaWQsXG4gIHdhcm5NaXNzaW5nXG4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGFzc2V0cyA9IG9wdGlvbnNbdHlwZV07XG4gIC8vIGNoZWNrIGxvY2FsIHJlZ2lzdHJhdGlvbiB2YXJpYXRpb25zIGZpcnN0XG4gIGlmIChoYXNPd24oYXNzZXRzLCBpZCkpIHsgcmV0dXJuIGFzc2V0c1tpZF0gfVxuICB2YXIgY2FtZWxpemVkSWQgPSBjYW1lbGl6ZShpZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBjYW1lbGl6ZWRJZCkpIHsgcmV0dXJuIGFzc2V0c1tjYW1lbGl6ZWRJZF0gfVxuICB2YXIgUGFzY2FsQ2FzZUlkID0gY2FwaXRhbGl6ZShjYW1lbGl6ZWRJZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBQYXNjYWxDYXNlSWQpKSB7IHJldHVybiBhc3NldHNbUGFzY2FsQ2FzZUlkXSB9XG4gIC8vIGZhbGxiYWNrIHRvIHByb3RvdHlwZSBjaGFpblxuICB2YXIgcmVzID0gYXNzZXRzW2lkXSB8fCBhc3NldHNbY2FtZWxpemVkSWRdIHx8IGFzc2V0c1tQYXNjYWxDYXNlSWRdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuTWlzc2luZyAmJiAhcmVzKSB7XG4gICAgd2FybihcbiAgICAgICdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgdHlwZS5zbGljZSgwLCAtMSkgKyAnOiAnICsgaWQsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wIChcbiAga2V5LFxuICBwcm9wT3B0aW9ucyxcbiAgcHJvcHNEYXRhLFxuICB2bVxuKSB7XG4gIHZhciBwcm9wID0gcHJvcE9wdGlvbnNba2V5XTtcbiAgdmFyIGFic2VudCA9ICFoYXNPd24ocHJvcHNEYXRhLCBrZXkpO1xuICB2YXIgdmFsdWUgPSBwcm9wc0RhdGFba2V5XTtcbiAgLy8gYm9vbGVhbiBjYXN0aW5nXG4gIHZhciBib29sZWFuSW5kZXggPSBnZXRUeXBlSW5kZXgoQm9vbGVhbiwgcHJvcC50eXBlKTtcbiAgaWYgKGJvb2xlYW5JbmRleCA+IC0xKSB7XG4gICAgaWYgKGFic2VudCAmJiAhaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IGh5cGhlbmF0ZShrZXkpKSB7XG4gICAgICAvLyBvbmx5IGNhc3QgZW1wdHkgc3RyaW5nIC8gc2FtZSBuYW1lIHRvIGJvb2xlYW4gaWZcbiAgICAgIC8vIGJvb2xlYW4gaGFzIGhpZ2hlciBwcmlvcml0eVxuICAgICAgdmFyIHN0cmluZ0luZGV4ID0gZ2V0VHlwZUluZGV4KFN0cmluZywgcHJvcC50eXBlKTtcbiAgICAgIGlmIChzdHJpbmdJbmRleCA8IDAgfHwgYm9vbGVhbkluZGV4IDwgc3RyaW5nSW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjaGVjayBkZWZhdWx0IHZhbHVlXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wLCBrZXkpO1xuICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGEgZnJlc2ggY29weSxcbiAgICAvLyBtYWtlIHN1cmUgdG8gb2JzZXJ2ZSBpdC5cbiAgICB2YXIgcHJldlNob3VsZE9ic2VydmUgPSBzaG91bGRPYnNlcnZlO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICBvYnNlcnZlKHZhbHVlKTtcbiAgICB0b2dnbGVPYnNlcnZpbmcocHJldlNob3VsZE9ic2VydmUpO1xuICB9XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgLy8gc2tpcCB2YWxpZGF0aW9uIGZvciB3ZWV4IHJlY3ljbGUtbGlzdCBjaGlsZCBjb21wb25lbnQgcHJvcHNcbiAgICAhKGZhbHNlKVxuICApIHtcbiAgICBhc3NlcnRQcm9wKHByb3AsIGtleSwgdmFsdWUsIHZtLCBhYnNlbnQpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhIHByb3AuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BEZWZhdWx0VmFsdWUgKHZtLCBwcm9wLCBrZXkpIHtcbiAgLy8gbm8gZGVmYXVsdCwgcmV0dXJuIHVuZGVmaW5lZFxuICBpZiAoIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHZhciBkZWYgPSBwcm9wLmRlZmF1bHQ7XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tZmFjdG9yeSBkZWZhdWx0cyBmb3IgT2JqZWN0ICYgQXJyYXlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNPYmplY3QoZGVmKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBkZWZhdWx0IHZhbHVlIGZvciBwcm9wIFwiJyArIGtleSArICdcIjogJyArXG4gICAgICAnUHJvcHMgd2l0aCB0eXBlIE9iamVjdC9BcnJheSBtdXN0IHVzZSBhIGZhY3RvcnkgZnVuY3Rpb24gJyArXG4gICAgICAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlLicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gdGhlIHJhdyBwcm9wIHZhbHVlIHdhcyBhbHNvIHVuZGVmaW5lZCBmcm9tIHByZXZpb3VzIHJlbmRlcixcbiAgLy8gcmV0dXJuIHByZXZpb3VzIGRlZmF1bHQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd2F0Y2hlciB0cmlnZ2VyXG4gIGlmICh2bSAmJiB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgJiZcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGFba2V5XSA9PT0gdW5kZWZpbmVkICYmXG4gICAgdm0uX3Byb3BzW2tleV0gIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4gdm0uX3Byb3BzW2tleV1cbiAgfVxuICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICAvLyBhIHZhbHVlIGlzIEZ1bmN0aW9uIGlmIGl0cyBwcm90b3R5cGUgaXMgZnVuY3Rpb24gZXZlbiBhY3Jvc3MgZGlmZmVyZW50IGV4ZWN1dGlvbiBjb250ZXh0XG4gIHJldHVybiB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGdldFR5cGUocHJvcC50eXBlKSAhPT0gJ0Z1bmN0aW9uJ1xuICAgID8gZGVmLmNhbGwodm0pXG4gICAgOiBkZWZcbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBhIHByb3AgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByb3AgKFxuICBwcm9wLFxuICBuYW1lLFxuICB2YWx1ZSxcbiAgdm0sXG4gIGFic2VudFxuKSB7XG4gIGlmIChwcm9wLnJlcXVpcmVkICYmIGFic2VudCkge1xuICAgIHdhcm4oXG4gICAgICAnTWlzc2luZyByZXF1aXJlZCBwcm9wOiBcIicgKyBuYW1lICsgJ1wiJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhcHJvcC5yZXF1aXJlZCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciB0eXBlID0gcHJvcC50eXBlO1xuICB2YXIgdmFsaWQgPSAhdHlwZSB8fCB0eXBlID09PSB0cnVlO1xuICB2YXIgZXhwZWN0ZWRUeXBlcyA9IFtdO1xuICBpZiAodHlwZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZSA9IFt0eXBlXTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aCAmJiAhdmFsaWQ7IGkrKykge1xuICAgICAgdmFyIGFzc2VydGVkVHlwZSA9IGFzc2VydFR5cGUodmFsdWUsIHR5cGVbaV0pO1xuICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xuICAgICAgdmFsaWQgPSBhc3NlcnRlZFR5cGUudmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF2YWxpZCkge1xuICAgIHdhcm4oXG4gICAgICBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciB2YWxpZGF0b3IgPSBwcm9wLnZhbGlkYXRvcjtcbiAgaWYgKHZhbGlkYXRvcikge1xuICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHNpbXBsZUNoZWNrUkUgPSAvXihTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258U3ltYm9sKSQvO1xuXG5mdW5jdGlvbiBhc3NlcnRUeXBlICh2YWx1ZSwgdHlwZSkge1xuICB2YXIgdmFsaWQ7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBnZXRUeXBlKHR5cGUpO1xuICBpZiAoc2ltcGxlQ2hlY2tSRS50ZXN0KGV4cGVjdGVkVHlwZSkpIHtcbiAgICB2YXIgdCA9IHR5cGVvZiB2YWx1ZTtcbiAgICB2YWxpZCA9IHQgPT09IGV4cGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGZvciBwcmltaXRpdmUgd3JhcHBlciBvYmplY3RzXG4gICAgaWYgKCF2YWxpZCAmJiB0ID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ09iamVjdCcpIHtcbiAgICB2YWxpZCA9IGlzUGxhaW5PYmplY3QodmFsdWUpO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0FycmF5Jykge1xuICAgIHZhbGlkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2YWxpZDogdmFsaWQsXG4gICAgZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGVcbiAgfVxufVxuXG4vKipcbiAqIFVzZSBmdW5jdGlvbiBzdHJpbmcgbmFtZSB0byBjaGVjayBidWlsdC1pbiB0eXBlcyxcbiAqIGJlY2F1c2UgYSBzaW1wbGUgZXF1YWxpdHkgY2hlY2sgd2lsbCBmYWlsIHdoZW4gcnVubmluZ1xuICogYWNyb3NzIGRpZmZlcmVudCB2bXMgLyBpZnJhbWVzLlxuICovXG5mdW5jdGlvbiBnZXRUeXBlIChmbikge1xuICB2YXIgbWF0Y2ggPSBmbiAmJiBmbi50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVR5cGUgKGEsIGIpIHtcbiAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYilcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUluZGV4ICh0eXBlLCBleHBlY3RlZFR5cGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFR5cGVzKSkge1xuICAgIHJldHVybiBpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXMsIHR5cGUpID8gMCA6IC0xXG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkVHlwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzW2ldLCB0eXBlKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbmZ1bmN0aW9uIGdldEludmFsaWRUeXBlTWVzc2FnZSAobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgdmFyIG1lc3NhZ2UgPSBcIkludmFsaWQgcHJvcDogdHlwZSBjaGVjayBmYWlsZWQgZm9yIHByb3AgXFxcIlwiICsgbmFtZSArIFwiXFxcIi5cIiArXG4gICAgXCIgRXhwZWN0ZWQgXCIgKyAoZXhwZWN0ZWRUeXBlcy5tYXAoY2FwaXRhbGl6ZSkuam9pbignLCAnKSk7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGVzWzBdO1xuICB2YXIgcmVjZWl2ZWRUeXBlID0gdG9SYXdUeXBlKHZhbHVlKTtcbiAgdmFyIGV4cGVjdGVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCBleHBlY3RlZFR5cGUpO1xuICB2YXIgcmVjZWl2ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIHJlY2VpdmVkVHlwZSk7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSBleHBlY3RlZCB2YWx1ZVxuICBpZiAoZXhwZWN0ZWRUeXBlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIGlzRXhwbGljYWJsZShleHBlY3RlZFR5cGUpICYmXG4gICAgICAhaXNCb29sZWFuKGV4cGVjdGVkVHlwZSwgcmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSBcIiArIGV4cGVjdGVkVmFsdWU7XG4gIH1cbiAgbWVzc2FnZSArPSBcIiwgZ290IFwiICsgcmVjZWl2ZWRUeXBlICsgXCIgXCI7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSByZWNlaXZlZCB2YWx1ZVxuICBpZiAoaXNFeHBsaWNhYmxlKHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwid2l0aCB2YWx1ZSBcIiArIHJlY2VpdmVkVmFsdWUgKyBcIi5cIjtcbiAgfVxuICByZXR1cm4gbWVzc2FnZVxufVxuXG5mdW5jdGlvbiBzdHlsZVZhbHVlICh2YWx1ZSwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ1N0cmluZycpIHtcbiAgICByZXR1cm4gKFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIilcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnTnVtYmVyJykge1xuICAgIHJldHVybiAoXCJcIiArIChOdW1iZXIodmFsdWUpKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFwiXCIgKyB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0V4cGxpY2FibGUgKHZhbHVlKSB7XG4gIHZhciBleHBsaWNpdFR5cGVzID0gWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXTtcbiAgcmV0dXJuIGV4cGxpY2l0VHlwZXMuc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZWxlbTsgfSlcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuICgpIHtcbiAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICByZXR1cm4gYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnRvTG93ZXJDYXNlKCkgPT09ICdib29sZWFuJzsgfSlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIC8vIERlYWN0aXZhdGUgZGVwcyB0cmFja2luZyB3aGlsZSBwcm9jZXNzaW5nIGVycm9yIGhhbmRsZXIgdG8gYXZvaWQgcG9zc2libGUgaW5maW5pdGUgcmVuZGVyaW5nLlxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWV4L2lzc3Vlcy8xNTA1XG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICBpZiAodm0pIHtcbiAgICAgIHZhciBjdXIgPSB2bTtcbiAgICAgIHdoaWxlICgoY3VyID0gY3VyLiRwYXJlbnQpKSB7XG4gICAgICAgIHZhciBob29rcyA9IGN1ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO1xuICAgICAgICBpZiAoaG9va3MpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9IGhvb2tzW2ldLmNhbGwoY3VyLCBlcnIsIHZtLCBpbmZvKSA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChjYXB0dXJlKSB7IHJldHVybiB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGdsb2JhbEhhbmRsZUVycm9yKGUsIGN1ciwgJ2Vycm9yQ2FwdHVyZWQgaG9vaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnbG9iYWxIYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyAoXG4gIGhhbmRsZXIsXG4gIGNvbnRleHQsXG4gIGFyZ3MsXG4gIHZtLFxuICBpbmZvXG4pIHtcbiAgdmFyIHJlcztcbiAgdHJ5IHtcbiAgICByZXMgPSBhcmdzID8gaGFuZGxlci5hcHBseShjb250ZXh0LCBhcmdzKSA6IGhhbmRsZXIuY2FsbChjb250ZXh0KTtcbiAgICBpZiAocmVzICYmICFyZXMuX2lzVnVlICYmIGlzUHJvbWlzZShyZXMpICYmICFyZXMuX2hhbmRsZWQpIHtcbiAgICAgIHJlcy5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8gKyBcIiAoUHJvbWlzZS9hc3luYylcIik7IH0pO1xuICAgICAgLy8gaXNzdWUgIzk1MTFcbiAgICAgIC8vIGF2b2lkIGNhdGNoIHRyaWdnZXJpbmcgbXVsdGlwbGUgdGltZXMgd2hlbiBuZXN0ZWQgY2FsbHNcbiAgICAgIHJlcy5faGFuZGxlZCA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8pO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2xvYmFsSGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKGNvbmZpZy5lcnJvckhhbmRsZXIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5lcnJvckhhbmRsZXIuY2FsbChudWxsLCBlcnIsIHZtLCBpbmZvKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGlmIHRoZSB1c2VyIGludGVudGlvbmFsbHkgdGhyb3dzIHRoZSBvcmlnaW5hbCBlcnJvciBpbiB0aGUgaGFuZGxlcixcbiAgICAgIC8vIGRvIG5vdCBsb2cgaXQgdHdpY2VcbiAgICAgIGlmIChlICE9PSBlcnIpIHtcbiAgICAgICAgbG9nRXJyb3IoZSwgbnVsbCwgJ2NvbmZpZy5lcnJvckhhbmRsZXInKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9nRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICgoaW5Ccm93c2VyIHx8IGluV2VleCkgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IGVyclxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgY2FsbGJhY2tzID0gW107XG52YXIgcGVuZGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyAoKSB7XG4gIHBlbmRpbmcgPSBmYWxzZTtcbiAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29waWVzW2ldKCk7XG4gIH1cbn1cblxuLy8gSGVyZSB3ZSBoYXZlIGFzeW5jIGRlZmVycmluZyB3cmFwcGVycyB1c2luZyBtaWNyb3Rhc2tzLlxuLy8gSW4gMi41IHdlIHVzZWQgKG1hY3JvKSB0YXNrcyAoaW4gY29tYmluYXRpb24gd2l0aCBtaWNyb3Rhc2tzKS5cbi8vIEhvd2V2ZXIsIGl0IGhhcyBzdWJ0bGUgcHJvYmxlbXMgd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIHJpZ2h0IGJlZm9yZSByZXBhaW50XG4vLyAoZS5nLiAjNjgxMywgb3V0LWluIHRyYW5zaXRpb25zKS5cbi8vIEFsc28sIHVzaW5nIChtYWNybykgdGFza3MgaW4gZXZlbnQgaGFuZGxlciB3b3VsZCBjYXVzZSBzb21lIHdlaXJkIGJlaGF2aW9yc1xuLy8gdGhhdCBjYW5ub3QgYmUgY2lyY3VtdmVudGVkIChlLmcuICM3MTA5LCAjNzE1MywgIzc1NDYsICM3ODM0LCAjODEwOSkuXG4vLyBTbyB3ZSBub3cgdXNlIG1pY3JvdGFza3MgZXZlcnl3aGVyZSwgYWdhaW4uXG4vLyBBIG1ham9yIGRyYXdiYWNrIG9mIHRoaXMgdHJhZGVvZmYgaXMgdGhhdCB0aGVyZSBhcmUgc29tZSBzY2VuYXJpb3Ncbi8vIHdoZXJlIG1pY3JvdGFza3MgaGF2ZSB0b28gaGlnaCBhIHByaW9yaXR5IGFuZCBmaXJlIGluIGJldHdlZW4gc3VwcG9zZWRseVxuLy8gc2VxdWVudGlhbCBldmVudHMgKGUuZy4gIzQ1MjEsICM2NjkwLCB3aGljaCBoYXZlIHdvcmthcm91bmRzKVxuLy8gb3IgZXZlbiBiZXR3ZWVuIGJ1YmJsaW5nIG9mIHRoZSBzYW1lIGV2ZW50ICgjNjU2NikuXG52YXIgdGltZXJGdW5jO1xuXG4vLyBUaGUgbmV4dFRpY2sgYmVoYXZpb3IgbGV2ZXJhZ2VzIHRoZSBtaWNyb3Rhc2sgcXVldWUsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZFxuLy8gdmlhIGVpdGhlciBuYXRpdmUgUHJvbWlzZS50aGVuIG9yIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXRhdGlvbk9ic2VydmVyIGhhcyB3aWRlciBzdXBwb3J0LCBob3dldmVyIGl0IGlzIHNlcmlvdXNseSBidWdnZWQgaW5cbi8vIFVJV2ViVmlldyBpbiBpT1MgPj0gOS4zLjMgd2hlbiB0cmlnZ2VyZWQgaW4gdG91Y2ggZXZlbnQgaGFuZGxlcnMuIEl0XG4vLyBjb21wbGV0ZWx5IHN0b3BzIHdvcmtpbmcgYWZ0ZXIgdHJpZ2dlcmluZyBhIGZldyB0aW1lcy4uLiBzbywgaWYgbmF0aXZlXG4vLyBQcm9taXNlIGlzIGF2YWlsYWJsZSwgd2Ugd2lsbCB1c2UgaXQ6XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCwgJGZsb3ctZGlzYWJsZS1saW5lICovXG5pZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb21pc2UpKSB7XG4gIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBwLnRoZW4oZmx1c2hDYWxsYmFja3MpO1xuICAgIC8vIEluIHByb2JsZW1hdGljIFVJV2ViVmlld3MsIFByb21pc2UudGhlbiBkb2Vzbid0IGNvbXBsZXRlbHkgYnJlYWssIGJ1dFxuICAgIC8vIGl0IGNhbiBnZXQgc3R1Y2sgaW4gYSB3ZWlyZCBzdGF0ZSB3aGVyZSBjYWxsYmFja3MgYXJlIHB1c2hlZCBpbnRvIHRoZVxuICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBidXQgdGhlIHF1ZXVlIGlzbid0IGJlaW5nIGZsdXNoZWQsIHVudGlsIHRoZSBicm93c2VyXG4gICAgLy8gbmVlZHMgdG8gZG8gc29tZSBvdGhlciB3b3JrLCBlLmcuIGhhbmRsZSBhIHRpbWVyLiBUaGVyZWZvcmUgd2UgY2FuXG4gICAgLy8gXCJmb3JjZVwiIHRoZSBtaWNyb3Rhc2sgcXVldWUgdG8gYmUgZmx1c2hlZCBieSBhZGRpbmcgYW4gZW1wdHkgdGltZXIuXG4gICAgaWYgKGlzSU9TKSB7IHNldFRpbWVvdXQobm9vcCk7IH1cbiAgfTtcbn0gZWxzZSBpZiAoIWlzSUUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIChcbiAgaXNOYXRpdmUoTXV0YXRpb25PYnNlcnZlcikgfHxcbiAgLy8gUGhhbnRvbUpTIGFuZCBpT1MgNy54XG4gIE11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXSdcbikpIHtcbiAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgd2hlcmUgbmF0aXZlIFByb21pc2UgaXMgbm90IGF2YWlsYWJsZSxcbiAgLy8gZS5nLiBQaGFudG9tSlMsIGlPUzcsIEFuZHJvaWQgNC40XG4gIC8vICgjNjQ2NiBNdXRhdGlvbk9ic2VydmVyIGlzIHVucmVsaWFibGUgaW4gSUUxMSlcbiAgdmFyIGNvdW50ZXIgPSAxO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaENhbGxiYWNrcyk7XG4gIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjb3VudGVyKSk7XG4gIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gIH0pO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyO1xuICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gIH07XG59IGVsc2UgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKHNldEltbWVkaWF0ZSkpIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0SW1tZWRpYXRlLlxuICAvLyBUZWNobmljYWxseSBpdCBsZXZlcmFnZXMgdGhlIChtYWNybykgdGFzayBxdWV1ZSxcbiAgLy8gYnV0IGl0IGlzIHN0aWxsIGEgYmV0dGVyIGNob2ljZSB0aGFuIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRJbW1lZGlhdGUoZmx1c2hDYWxsYmFja3MpO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0VGltZW91dC5cbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHNldFRpbWVvdXQoZmx1c2hDYWxsYmFja3MsIDApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayAoY2IsIGN0eCkge1xuICB2YXIgX3Jlc29sdmU7XG4gIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiLmNhbGwoY3R4KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZSwgY3R4LCAnbmV4dFRpY2snKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF9yZXNvbHZlKSB7XG4gICAgICBfcmVzb2x2ZShjdHgpO1xuICAgIH1cbiAgfSk7XG4gIGlmICghcGVuZGluZykge1xuICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgIHRpbWVyRnVuYygpO1xuICB9XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBpZiAoIWNiICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pXG4gIH1cbn1cblxuLyogICovXG5cbi8qIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aCBQcm94eSAqL1xuXG52YXIgaW5pdFByb3h5O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgYWxsb3dlZEdsb2JhbHMgPSBtYWtlTWFwKFxuICAgICdJbmZpbml0eSx1bmRlZmluZWQsTmFOLGlzRmluaXRlLGlzTmFOLCcgK1xuICAgICdwYXJzZUZsb2F0LHBhcnNlSW50LGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLGVuY29kZVVSSUNvbXBvbmVudCwnICtcbiAgICAnTWF0aCxOdW1iZXIsRGF0ZSxBcnJheSxPYmplY3QsQm9vbGVhbixTdHJpbmcsUmVnRXhwLE1hcCxTZXQsSlNPTixJbnRsLCcgK1xuICAgICdyZXF1aXJlJyAvLyBmb3IgV2VicGFjay9Ccm93c2VyaWZ5XG4gICk7XG5cbiAgdmFyIHdhcm5Ob25QcmVzZW50ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgb3IgbWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBub3QgZGVmaW5lZCBvbiB0aGUgaW5zdGFuY2UgYnV0IFwiICtcbiAgICAgICdyZWZlcmVuY2VkIGR1cmluZyByZW5kZXIuIE1ha2Ugc3VyZSB0aGF0IHRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsICcgK1xuICAgICAgJ2VpdGhlciBpbiB0aGUgZGF0YSBvcHRpb24sIG9yIGZvciBjbGFzcy1iYXNlZCBjb21wb25lbnRzLCBieSAnICtcbiAgICAgICdpbml0aWFsaXppbmcgdGhlIHByb3BlcnR5LiAnICtcbiAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3JlYWN0aXZpdHkuaHRtbCNEZWNsYXJpbmctUmVhY3RpdmUtUHJvcGVydGllcy4nLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgd2FyblJlc2VydmVkUHJlZml4ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIG11c3QgYmUgYWNjZXNzZWQgd2l0aCBcXFwiJGRhdGEuXCIgKyBrZXkgKyBcIlxcXCIgYmVjYXVzZSBcIiArXG4gICAgICAncHJvcGVydGllcyBzdGFydGluZyB3aXRoIFwiJFwiIG9yIFwiX1wiIGFyZSBub3QgcHJveGllZCBpbiB0aGUgVnVlIGluc3RhbmNlIHRvICcgK1xuICAgICAgJ3ByZXZlbnQgY29uZmxpY3RzIHdpdGggVnVlIGludGVybmFscy4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9hcGkvI2RhdGEnLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgaGFzUHJveHkgPVxuICAgIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJveHkpO1xuXG4gIGlmIChoYXNQcm94eSkge1xuICAgIHZhciBpc0J1aWx0SW5Nb2RpZmllciA9IG1ha2VNYXAoJ3N0b3AscHJldmVudCxzZWxmLGN0cmwsc2hpZnQsYWx0LG1ldGEsZXhhY3QnKTtcbiAgICBjb25maWcua2V5Q29kZXMgPSBuZXcgUHJveHkoY29uZmlnLmtleUNvZGVzLCB7XG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpc0J1aWx0SW5Nb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgd2FybigoXCJBdm9pZCBvdmVyd3JpdGluZyBidWlsdC1pbiBtb2RpZmllciBpbiBjb25maWcua2V5Q29kZXM6IC5cIiArIGtleSkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhc0hhbmRsZXIgPSB7XG4gICAgaGFzOiBmdW5jdGlvbiBoYXMgKHRhcmdldCwga2V5KSB7XG4gICAgICB2YXIgaGFzID0ga2V5IGluIHRhcmdldDtcbiAgICAgIHZhciBpc0FsbG93ZWQgPSBhbGxvd2VkR2xvYmFscyhrZXkpIHx8XG4gICAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkuY2hhckF0KDApID09PSAnXycgJiYgIShrZXkgaW4gdGFyZ2V0LiRkYXRhKSk7XG4gICAgICBpZiAoIWhhcyAmJiAhaXNBbGxvd2VkKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhcyB8fCAhaXNBbGxvd2VkXG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRIYW5kbGVyID0ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmICEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICB9XG4gIH07XG5cbiAgaW5pdFByb3h5ID0gZnVuY3Rpb24gaW5pdFByb3h5ICh2bSkge1xuICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3h5IGhhbmRsZXIgdG8gdXNlXG4gICAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICAgICAgdmFyIGhhbmRsZXJzID0gb3B0aW9ucy5yZW5kZXIgJiYgb3B0aW9ucy5yZW5kZXIuX3dpdGhTdHJpcHBlZFxuICAgICAgICA/IGdldEhhbmRsZXJcbiAgICAgICAgOiBoYXNIYW5kbGVyO1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gbmV3IFByb3h5KHZtLCBoYW5kbGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsKSB7XG4gIF90cmF2ZXJzZSh2YWwsIHNlZW5PYmplY3RzKTtcbiAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gX3RyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgdmFyIGksIGtleXM7XG4gIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gIGlmICgoIWlzQSAmJiAhaXNPYmplY3QodmFsKSkgfHwgT2JqZWN0LmlzRnJvemVuKHZhbCkgfHwgdmFsIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsLl9fb2JfXykge1xuICAgIHZhciBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkO1xuICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWVuLmFkZChkZXBJZCk7XG4gIH1cbiAgaWYgKGlzQSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7IH1cbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKTsgfVxuICB9XG59XG5cbnZhciBtYXJrO1xudmFyIG1lYXN1cmU7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwZXJmID0gaW5Ccm93c2VyICYmIHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChcbiAgICBwZXJmICYmXG4gICAgcGVyZi5tYXJrICYmXG4gICAgcGVyZi5tZWFzdXJlICYmXG4gICAgcGVyZi5jbGVhck1hcmtzICYmXG4gICAgcGVyZi5jbGVhck1lYXN1cmVzXG4gICkge1xuICAgIG1hcmsgPSBmdW5jdGlvbiAodGFnKSB7IHJldHVybiBwZXJmLm1hcmsodGFnKTsgfTtcbiAgICBtZWFzdXJlID0gZnVuY3Rpb24gKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpIHtcbiAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhzdGFydFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3MoZW5kVGFnKTtcbiAgICAgIC8vIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKVxuICAgIH07XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBub3JtYWxpemVFdmVudCA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgcGFzc2l2ZSA9IG5hbWUuY2hhckF0KDApID09PSAnJic7XG4gIG5hbWUgPSBwYXNzaXZlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBvbmNlJCQxID0gbmFtZS5jaGFyQXQoMCkgPT09ICd+JzsgLy8gUHJlZml4ZWQgbGFzdCwgY2hlY2tlZCBmaXJzdFxuICBuYW1lID0gb25jZSQkMSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgY2FwdHVyZSA9IG5hbWUuY2hhckF0KDApID09PSAnISc7XG4gIG5hbWUgPSBjYXB0dXJlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBvbmNlOiBvbmNlJCQxLFxuICAgIGNhcHR1cmU6IGNhcHR1cmUsXG4gICAgcGFzc2l2ZTogcGFzc2l2ZVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRm5JbnZva2VyIChmbnMsIHZtKSB7XG4gIGZ1bmN0aW9uIGludm9rZXIgKCkge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmbnMgPSBpbnZva2VyLmZucztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnMpKSB7XG4gICAgICB2YXIgY2xvbmVkID0gZm5zLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjbG9uZWRbaV0sIG51bGwsIGFyZ3VtZW50cyQxLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJldHVybiBoYW5kbGVyIHJldHVybiB2YWx1ZSBmb3Igc2luZ2xlIGhhbmRsZXJzXG4gICAgICByZXR1cm4gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoZm5zLCBudWxsLCBhcmd1bWVudHMsIHZtLCBcInYtb24gaGFuZGxlclwiKVxuICAgIH1cbiAgfVxuICBpbnZva2VyLmZucyA9IGZucztcbiAgcmV0dXJuIGludm9rZXJcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGlzdGVuZXJzIChcbiAgb24sXG4gIG9sZE9uLFxuICBhZGQsXG4gIHJlbW92ZSQkMSxcbiAgY3JlYXRlT25jZUhhbmRsZXIsXG4gIHZtXG4pIHtcbiAgdmFyIG5hbWUsIGRlZiQkMSwgY3VyLCBvbGQsIGV2ZW50O1xuICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICBkZWYkJDEgPSBjdXIgPSBvbltuYW1lXTtcbiAgICBvbGQgPSBvbGRPbltuYW1lXTtcbiAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgIGlmIChpc1VuZGVmKGN1cikpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJJbnZhbGlkIGhhbmRsZXIgZm9yIGV2ZW50IFxcXCJcIiArIChldmVudC5uYW1lKSArIFwiXFxcIjogZ290IFwiICsgU3RyaW5nKGN1ciksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNVbmRlZihvbGQpKSB7XG4gICAgICBpZiAoaXNVbmRlZihjdXIuZm5zKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZUZuSW52b2tlcihjdXIsIHZtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1RydWUoZXZlbnQub25jZSkpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVPbmNlSGFuZGxlcihldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUpO1xuICAgICAgfVxuICAgICAgYWRkKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSwgZXZlbnQucGFzc2l2ZSwgZXZlbnQucGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKGN1ciAhPT0gb2xkKSB7XG4gICAgICBvbGQuZm5zID0gY3VyO1xuICAgICAgb25bbmFtZV0gPSBvbGQ7XG4gICAgfVxuICB9XG4gIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgIGlmIChpc1VuZGVmKG9uW25hbWVdKSkge1xuICAgICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICAgIHJlbW92ZSQkMShldmVudC5uYW1lLCBvbGRPbltuYW1lXSwgZXZlbnQuY2FwdHVyZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLy8gZml4ZWQgYnkgeHh4eHh4IChtcCBwcm9wZXJ0aWVzKVxuZnVuY3Rpb24gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dCkge1xuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMubXBPcHRpb25zICYmIEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMucHJvcGVydGllcztcbiAgaWYgKGlzVW5kZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG4gIHZhciBleHRlcm5hbENsYXNzZXMgPSBDdG9yLm9wdGlvbnMubXBPcHRpb25zLmV4dGVybmFsQ2xhc3NlcyB8fCBbXTtcbiAgdmFyIGF0dHJzID0gZGF0YS5hdHRycztcbiAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIHZhciByZXN1bHQgPSBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgICAvLyBleHRlcm5hbENsYXNzXG4gICAgICBpZiAoXG4gICAgICAgIHJlc3VsdCAmJlxuICAgICAgICByZXNba2V5XSAmJlxuICAgICAgICBleHRlcm5hbENsYXNzZXMuaW5kZXhPZihhbHRLZXkpICE9PSAtMSAmJlxuICAgICAgICBjb250ZXh0W2NhbWVsaXplKHJlc1trZXldKV1cbiAgICAgICkge1xuICAgICAgICAvLyDotYvlgLwgZXh0ZXJuYWxDbGFzcyDnnJ/mraPnmoTlgLwo5qih5p2/6YeMIGV4dGVybmFsQ2xhc3Mg55qE5YC85Y+v6IO95piv5a2X56ym5LiyKVxuICAgICAgICByZXNba2V5XSA9IGNvbnRleHRbY2FtZWxpemUocmVzW2tleV0pXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIChcbiAgZGF0YSxcbiAgQ3RvcixcbiAgdGFnLFxuICBjb250ZXh0Ly8gZml4ZWQgYnkgeHh4eHh4XG4pIHtcbiAgLy8gd2UgYXJlIG9ubHkgZXh0cmFjdGluZyByYXcgdmFsdWVzIGhlcmUuXG4gIC8vIHZhbGlkYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBoYW5kbGVkIGluIHRoZSBjaGlsZFxuICAvLyBjb21wb25lbnQgaXRzZWxmLlxuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMucHJvcHM7XG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIHJldHVybiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3Rvciwge30sIGNvbnRleHQpXG4gIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICB2YXIgcHJvcHMgPSBkYXRhLnByb3BzO1xuICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGtleUluTG93ZXJDYXNlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgIT09IGtleUluTG93ZXJDYXNlICYmXG4gICAgICAgICAgYXR0cnMgJiYgaGFzT3duKGF0dHJzLCBrZXlJbkxvd2VyQ2FzZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGlwKFxuICAgICAgICAgICAgXCJQcm9wIFxcXCJcIiArIGtleUluTG93ZXJDYXNlICsgXCJcXFwiIGlzIHBhc3NlZCB0byBjb21wb25lbnQgXCIgK1xuICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodGFnIHx8IEN0b3IpKSArIFwiLCBidXQgdGhlIGRlY2xhcmVkIHByb3AgbmFtZSBpc1wiICtcbiAgICAgICAgICAgIFwiIFxcXCJcIiArIGtleSArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCBjYW1lbENhc2VkIFwiICtcbiAgICAgICAgICAgIFwicHJvcHMgbmVlZCB0byB1c2UgdGhlaXIga2ViYWItY2FzZSBlcXVpdmFsZW50cyB3aGVuIHVzaW5nIGluLURPTSBcIiArXG4gICAgICAgICAgICBcInRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgYWx0S2V5ICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICByZXR1cm4gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dClcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wIChcbiAgcmVzLFxuICBoYXNoLFxuICBrZXksXG4gIGFsdEtleSxcbiAgcHJlc2VydmVcbikge1xuICBpZiAoaXNEZWYoaGFzaCkpIHtcbiAgICBpZiAoaGFzT3duKGhhc2gsIGtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFtrZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hbYWx0S2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiAgKi9cblxuLy8gVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGF0dGVtcHRzIHRvIG1pbmltaXplIHRoZSBuZWVkIGZvciBub3JtYWxpemF0aW9uIGJ5XG4vLyBzdGF0aWNhbGx5IGFuYWx5emluZyB0aGUgdGVtcGxhdGUgYXQgY29tcGlsZSB0aW1lLlxuLy9cbi8vIEZvciBwbGFpbiBIVE1MIG1hcmt1cCwgbm9ybWFsaXphdGlvbiBjYW4gYmUgY29tcGxldGVseSBza2lwcGVkIGJlY2F1c2UgdGhlXG4vLyBnZW5lcmF0ZWQgcmVuZGVyIGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gcmV0dXJuIEFycmF5PFZOb2RlPi4gVGhlcmUgYXJlXG4vLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XG5cbi8vIDEuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbXBvbmVudHMgLSBiZWNhdXNlIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbi8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbi8vIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkIC0gaWYgYW55IGNoaWxkIGlzIGFuIEFycmF5LCB3ZSBmbGF0dGVuIHRoZSB3aG9sZVxuLy8gdGhpbmcgd2l0aCBBcnJheS5wcm90b3R5cGUuY29uY2F0LiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIG9ubHkgMS1sZXZlbCBkZWVwXG4vLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG5mdW5jdGlvbiBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RydWN0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbi8vIGUuZy4gPHRlbXBsYXRlPiwgPHNsb3Q+LCB2LWZvciwgb3Igd2hlbiB0aGUgY2hpbGRyZW4gaXMgcHJvdmlkZWQgYnkgdXNlclxuLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxuLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxuICAgID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildXG4gICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNUZXh0Tm9kZSAobm9kZSkge1xuICByZXR1cm4gaXNEZWYobm9kZSkgJiYgaXNEZWYobm9kZS50ZXh0KSAmJiBpc0ZhbHNlKG5vZGUuaXNDb21tZW50KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheUNoaWxkcmVuIChjaGlsZHJlbiwgbmVzdGVkSW5kZXgpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaSwgYywgbGFzdEluZGV4LCBsYXN0O1xuICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGlzVW5kZWYoYykgfHwgdHlwZW9mIGMgPT09ICdib29sZWFuJykgeyBjb250aW51ZSB9XG4gICAgbGFzdEluZGV4ID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgbGFzdCA9IHJlc1tsYXN0SW5kZXhdO1xuICAgIC8vICBuZXN0ZWRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xuICAgICAgICBjID0gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjLCAoKG5lc3RlZEluZGV4IHx8ICcnKSArIFwiX1wiICsgaSkpO1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyAoY1swXSkudGV4dCk7XG4gICAgICAgICAgYy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoLmFwcGx5KHJlcywgYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgaWYgKGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXG4gICAgICAgIC8vIGVzc2VudGlhbGx5IG1lcmdlZCB3aGVuIHJlbmRlcmVkIHRvIEhUTUwgc3RyaW5nc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjKTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcbiAgICAgICAgLy8gY29udmVydCBwcmltaXRpdmUgdG8gdm5vZGVcbiAgICAgICAgcmVzLnB1c2goY3JlYXRlVGV4dFZOb2RlKGMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzVGV4dE5vZGUoYykgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMudGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxuICAgICAgICBpZiAoaXNUcnVlKGNoaWxkcmVuLl9pc1ZMaXN0KSAmJlxuICAgICAgICAgIGlzRGVmKGMudGFnKSAmJlxuICAgICAgICAgIGlzVW5kZWYoYy5rZXkpICYmXG4gICAgICAgICAgaXNEZWYobmVzdGVkSW5kZXgpKSB7XG4gICAgICAgICAgYy5rZXkgPSBcIl9fdmxpc3RcIiArIG5lc3RlZEluZGV4ICsgXCJfXCIgKyBpICsgXCJfX1wiO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UHJvdmlkZSAodm0pIHtcbiAgdmFyIHByb3ZpZGUgPSB2bS4kb3B0aW9ucy5wcm92aWRlO1xuICBpZiAocHJvdmlkZSkge1xuICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb3ZpZGUuY2FsbCh2bSlcbiAgICAgIDogcHJvdmlkZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0SW5qZWN0aW9ucyAodm0pIHtcbiAgdmFyIHJlc3VsdCA9IHJlc29sdmVJbmplY3Qodm0uJG9wdGlvbnMuaW5qZWN0LCB2bSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhbiBpbmplY3RlZCB2YWx1ZSBkaXJlY3RseSBzaW5jZSB0aGUgY2hhbmdlcyB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcImluamVjdGlvbiBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbmplY3QgKGluamVjdCwgdm0pIHtcbiAgaWYgKGluamVjdCkge1xuICAgIC8vIGluamVjdCBpcyA6YW55IGJlY2F1c2UgZmxvdyBpcyBub3Qgc21hcnQgZW5vdWdoIHRvIGZpZ3VyZSBvdXQgY2FjaGVkXG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICAgID8gUmVmbGVjdC5vd25LZXlzKGluamVjdClcbiAgICAgIDogT2JqZWN0LmtleXMoaW5qZWN0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAvLyAjNjU3NCBpbiBjYXNlIHRoZSBpbmplY3Qgb2JqZWN0IGlzIG9ic2VydmVkLi4uXG4gICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgICB2YXIgcHJvdmlkZUtleSA9IGluamVjdFtrZXldLmZyb207XG4gICAgICB2YXIgc291cmNlID0gdm07XG4gICAgICB3aGlsZSAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuX3Byb3ZpZGVkICYmIGhhc093bihzb3VyY2UuX3Byb3ZpZGVkLCBwcm92aWRlS2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlLl9wcm92aWRlZFtwcm92aWRlS2V5XTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBpbmplY3Rba2V5XSkge1xuICAgICAgICAgIHZhciBwcm92aWRlRGVmYXVsdCA9IGluamVjdFtrZXldLmRlZmF1bHQ7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB0eXBlb2YgcHJvdmlkZURlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcHJvdmlkZURlZmF1bHQuY2FsbCh2bSlcbiAgICAgICAgICAgIDogcHJvdmlkZURlZmF1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm4oKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiksIHZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuLyogICovXG5cblxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgcmF3IGNoaWxkcmVuIFZOb2RlcyBpbnRvIGEgc2xvdCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVTbG90cyAoXG4gIGNoaWxkcmVuLFxuICBjb250ZXh0XG4pIHtcbiAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgdmFyIHNsb3RzID0ge307XG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGRhdGEgPSBjaGlsZC5kYXRhO1xuICAgIC8vIHJlbW92ZSBzbG90IGF0dHJpYnV0ZSBpZiB0aGUgbm9kZSBpcyByZXNvbHZlZCBhcyBhIFZ1ZSBzbG90IG5vZGVcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuc2xvdCkge1xuICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcbiAgICB9XG4gICAgLy8gbmFtZWQgc2xvdHMgc2hvdWxkIG9ubHkgYmUgcmVzcGVjdGVkIGlmIHRoZSB2bm9kZSB3YXMgcmVuZGVyZWQgaW4gdGhlXG4gICAgLy8gc2FtZSBjb250ZXh0LlxuICAgIGlmICgoY2hpbGQuY29udGV4dCA9PT0gY29udGV4dCB8fCBjaGlsZC5mbkNvbnRleHQgPT09IGNvbnRleHQpICYmXG4gICAgICBkYXRhICYmIGRhdGEuc2xvdCAhPSBudWxsXG4gICAgKSB7XG4gICAgICB2YXIgbmFtZSA9IGRhdGEuc2xvdDtcbiAgICAgIHZhciBzbG90ID0gKHNsb3RzW25hbWVdIHx8IChzbG90c1tuYW1lXSA9IFtdKSk7XG4gICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgIHNsb3QucHVzaC5hcHBseShzbG90LCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaXhlZCBieSB4eHh4eHgg5Li05pe2IGhhY2sg5o6JIHVuaS1hcHAg5Lit55qE5byC5q2lIG5hbWUgc2xvdCBwYWdlXG4gICAgICBpZihjaGlsZC5hc3luY01ldGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEuc2xvdCA9PT0gJ3BhZ2UnKXtcbiAgICAgICAgKHNsb3RzWydwYWdlJ10gfHwgKHNsb3RzWydwYWdlJ10gPSBbXSkpLnB1c2goY2hpbGQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIChzbG90cy5kZWZhdWx0IHx8IChzbG90cy5kZWZhdWx0ID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gaWdub3JlIHNsb3RzIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgIGRlbGV0ZSBzbG90c1tuYW1lJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2xvdHNcbn1cblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdHMgKFxuICBzbG90cyxcbiAgbm9ybWFsU2xvdHMsXG4gIHByZXZTbG90c1xuKSB7XG4gIHZhciByZXM7XG4gIHZhciBoYXNOb3JtYWxTbG90cyA9IE9iamVjdC5rZXlzKG5vcm1hbFNsb3RzKS5sZW5ndGggPiAwO1xuICB2YXIgaXNTdGFibGUgPSBzbG90cyA/ICEhc2xvdHMuJHN0YWJsZSA6ICFoYXNOb3JtYWxTbG90cztcbiAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG4gIGlmICghc2xvdHMpIHtcbiAgICByZXMgPSB7fTtcbiAgfSBlbHNlIGlmIChzbG90cy5fbm9ybWFsaXplZCkge1xuICAgIC8vIGZhc3QgcGF0aCAxOiBjaGlsZCBjb21wb25lbnQgcmUtcmVuZGVyIG9ubHksIHBhcmVudCBkaWQgbm90IGNoYW5nZVxuICAgIHJldHVybiBzbG90cy5fbm9ybWFsaXplZFxuICB9IGVsc2UgaWYgKFxuICAgIGlzU3RhYmxlICYmXG4gICAgcHJldlNsb3RzICYmXG4gICAgcHJldlNsb3RzICE9PSBlbXB0eU9iamVjdCAmJlxuICAgIGtleSA9PT0gcHJldlNsb3RzLiRrZXkgJiZcbiAgICAhaGFzTm9ybWFsU2xvdHMgJiZcbiAgICAhcHJldlNsb3RzLiRoYXNOb3JtYWxcbiAgKSB7XG4gICAgLy8gZmFzdCBwYXRoIDI6IHN0YWJsZSBzY29wZWQgc2xvdHMgdy8gbm8gbm9ybWFsIHNsb3RzIHRvIHByb3h5LFxuICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgIHJldHVybiBwcmV2U2xvdHNcbiAgfSBlbHNlIHtcbiAgICByZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkkMSBpbiBzbG90cykge1xuICAgICAgaWYgKHNsb3RzW2tleSQxXSAmJiBrZXkkMVswXSAhPT0gJyQnKSB7XG4gICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZXhwb3NlIG5vcm1hbCBzbG90cyBvbiBzY29wZWRTbG90c1xuICBmb3IgKHZhciBrZXkkMiBpbiBub3JtYWxTbG90cykge1xuICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgIHJlc1trZXkkMl0gPSBwcm94eU5vcm1hbFNsb3Qobm9ybWFsU2xvdHMsIGtleSQyKTtcbiAgICB9XG4gIH1cbiAgLy8gYXZvcmlheiBzZWVtcyB0byBtb2NrIGEgbm9uLWV4dGVuc2libGUgJHNjb3BlZFNsb3RzIG9iamVjdFxuICAvLyBhbmQgd2hlbiB0aGF0IGlzIHBhc3NlZCBkb3duIHRoaXMgd291bGQgY2F1c2UgYW4gZXJyb3JcbiAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgKHNsb3RzKS5fbm9ybWFsaXplZCA9IHJlcztcbiAgfVxuICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgZGVmKHJlcywgJyRrZXknLCBrZXkpO1xuICBkZWYocmVzLCAnJGhhc05vcm1hbCcsIGhhc05vcm1hbFNsb3RzKTtcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gIHZhciBub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID8gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGZuKHt9KTtcbiAgICByZXMgPSByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzKVxuICAgICAgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgIDogbm9ybWFsaXplQ2hpbGRyZW4ocmVzKTtcbiAgICByZXR1cm4gcmVzICYmIChcbiAgICAgIHJlcy5sZW5ndGggPT09IDAgfHxcbiAgICAgIChyZXMubGVuZ3RoID09PSAxICYmIHJlc1swXS5pc0NvbW1lbnQpIC8vICM5NjU4XG4gICAgKSA/IHVuZGVmaW5lZFxuICAgICAgOiByZXNcbiAgfTtcbiAgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gIC8vIGNvbXBpbGVkIGFzIGEgc2NvcGVkIHNsb3QsIHJlbmRlciBmbiB1c2VycyB3b3VsZCBleHBlY3QgaXQgdG8gYmUgcHJlc2VudFxuICAvLyBvbiB0aGlzLiRzbG90cyBiZWNhdXNlIHRoZSB1c2FnZSBpcyBzZW1hbnRpY2FsbHkgYSBub3JtYWwgc2xvdC5cbiAgaWYgKGZuLnByb3h5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbFNsb3RzLCBrZXksIHtcbiAgICAgIGdldDogbm9ybWFsaXplZCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZFxufVxuXG5mdW5jdGlvbiBwcm94eU5vcm1hbFNsb3Qoc2xvdHMsIGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2xvdHNba2V5XTsgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcihpICsgMSwgaSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgaWYgKGhhc1N5bWJvbCAmJiB2YWxbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgcmV0ID0gW107XG4gICAgICB2YXIgaXRlcmF0b3IgPSB2YWxbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgcmV0LnB1c2gocmVuZGVyKHJlc3VsdC52YWx1ZSwgcmV0Lmxlbmd0aCwgaSwgaSsrKSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRbaV0gPSByZW5kZXIodmFsW2tleV0sIGtleSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWlzRGVmKHJldCkpIHtcbiAgICByZXQgPSBbXTtcbiAgfVxuICAocmV0KS5faXNWTGlzdCA9IHRydWU7XG4gIHJldHVybiByZXRcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyA8c2xvdD5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2xvdCAoXG4gIG5hbWUsXG4gIGZhbGxiYWNrLFxuICBwcm9wcyxcbiAgYmluZE9iamVjdFxuKSB7XG4gIHZhciBzY29wZWRTbG90Rm4gPSB0aGlzLiRzY29wZWRTbG90c1tuYW1lXTtcbiAgdmFyIG5vZGVzO1xuICBpZiAoc2NvcGVkU2xvdEZuKSB7IC8vIHNjb3BlZCBzbG90XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBpZiAoYmluZE9iamVjdCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzT2JqZWN0KGJpbmRPYmplY3QpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ3Nsb3Qgdi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QnLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHByb3BzID0gZXh0ZW5kKGV4dGVuZCh7fSwgYmluZE9iamVjdCksIHByb3BzKTtcbiAgICB9XG4gICAgLy8gZml4ZWQgYnkgeHh4eHh4IGFwcC1wbHVzIHNjb3BlZFNsb3RcbiAgICBub2RlcyA9IHNjb3BlZFNsb3RGbihwcm9wcywgdGhpcywgcHJvcHMuX2kpIHx8IGZhbGxiYWNrO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzID0gdGhpcy4kc2xvdHNbbmFtZV0gfHwgZmFsbGJhY2s7XG4gIH1cblxuICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHsgc2xvdDogdGFyZ2V0IH0sIG5vZGVzKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2Rlc1xuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICovXG5mdW5jdGlvbiByZXNvbHZlRmlsdGVyIChpZCkge1xuICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0tleU5vdE1hdGNoIChleHBlY3QsIGFjdHVhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3QpKSB7XG4gICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsXG4gIH1cbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgY2hlY2tpbmcga2V5Q29kZXMgZnJvbSBjb25maWcuXG4gKiBleHBvc2VkIGFzIFZ1ZS5wcm90b3R5cGUuX2tcbiAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICovXG5mdW5jdGlvbiBjaGVja0tleUNvZGVzIChcbiAgZXZlbnRLZXlDb2RlLFxuICBrZXksXG4gIGJ1aWx0SW5LZXlDb2RlLFxuICBldmVudEtleU5hbWUsXG4gIGJ1aWx0SW5LZXlOYW1lXG4pIHtcbiAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcbiAgaWYgKGJ1aWx0SW5LZXlOYW1lICYmIGV2ZW50S2V5TmFtZSAmJiAhY29uZmlnLmtleUNvZGVzW2tleV0pIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKVxuICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChtYXBwZWRLZXlDb2RlLCBldmVudEtleUNvZGUpXG4gIH0gZWxzZSBpZiAoZXZlbnRLZXlOYW1lKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICovXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxuICBkYXRhLFxuICB0YWcsXG4gIHZhbHVlLFxuICBhc1Byb3AsXG4gIGlzU3luY1xuKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCBvciBBcnJheSB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoO1xuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSA9PT0gJ2NsYXNzJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoa2V5KVxuICAgICAgICApIHtcbiAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy50eXBlO1xuICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgPyBkYXRhLmRvbVByb3BzIHx8IChkYXRhLmRvbVByb3BzID0ge30pXG4gICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbWVsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICBoYXNoW2tleV0gPSB2YWx1ZVtrZXldO1xuXG4gICAgICAgICAgaWYgKGlzU3luYykge1xuICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICAgICAgICAgIG9uWyhcInVwZGF0ZTpcIiArIGtleSldID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgbG9vcCgga2V5ICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxuICovXG5mdW5jdGlvbiByZW5kZXJTdGF0aWMgKFxuICBpbmRleCxcbiAgaXNJbkZvclxuKSB7XG4gIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XG4gIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTtcbiAgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxuICBpZiAodHJlZSAmJiAhaXNJbkZvcikge1xuICAgIHJldHVybiB0cmVlXG4gIH1cbiAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICB0cmVlID0gY2FjaGVkW2luZGV4XSA9IHRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2luZGV4XS5jYWxsKFxuICAgIHRoaXMuX3JlbmRlclByb3h5LFxuICAgIG51bGwsXG4gICAgdGhpcyAvLyBmb3IgcmVuZGVyIGZucyBnZW5lcmF0ZWQgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IHRlbXBsYXRlc1xuICApO1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fc3RhdGljX19cIiArIGluZGV4KSwgZmFsc2UpO1xuICByZXR1cm4gdHJlZVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciB2LW9uY2UuXG4gKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAqL1xuZnVuY3Rpb24gbWFya09uY2UgKFxuICB0cmVlLFxuICBpbmRleCxcbiAga2V5XG4pIHtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX29uY2VfX1wiICsgaW5kZXggKyAoa2V5ID8gKFwiX1wiICsga2V5KSA6IFwiXCIpKSwgdHJ1ZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxuICB0cmVlLFxuICBrZXksXG4gIGlzT25jZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHJlZVtpXSAmJiB0eXBlb2YgdHJlZVtpXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwgKGtleSArIFwiX1wiICsgaSksIGlzT25jZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljTm9kZSAobm9kZSwga2V5LCBpc09uY2UpIHtcbiAgbm9kZS5pc1N0YXRpYyA9IHRydWU7XG4gIG5vZGUua2V5ID0ga2V5O1xuICBub2RlLmlzT25jZSA9IGlzT25jZTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3Ytb24gd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvbiA9IGRhdGEub24gPSBkYXRhLm9uID8gZXh0ZW5kKHt9LCBkYXRhLm9uKSA6IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgIHZhciBvdXJzID0gdmFsdWVba2V5XTtcbiAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICBmbnMsIC8vIHNlZSBmbG93L3Zub2RlXG4gIHJlcyxcbiAgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gIGhhc0R5bmFtaWNLZXlzLFxuICBjb250ZW50SGFzaEtleVxuKSB7XG4gIHJlcyA9IHJlcyB8fCB7ICRzdGFibGU6ICFoYXNEeW5hbWljS2V5cyB9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzbG90ID0gZm5zW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3QpKSB7XG4gICAgICByZXNvbHZlU2NvcGVkU2xvdHMoc2xvdCwgcmVzLCBoYXNEeW5hbWljS2V5cyk7XG4gICAgfSBlbHNlIGlmIChzbG90KSB7XG4gICAgICAvLyBtYXJrZXIgZm9yIHJldmVyc2UgcHJveHlpbmcgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICAgIGlmIChzbG90LnByb3h5KSB7XG4gICAgICAgIHNsb3QuZm4ucHJveHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgfVxuICB9XG4gIGlmIChjb250ZW50SGFzaEtleSkge1xuICAgIChyZXMpLiRrZXkgPSBjb250ZW50SGFzaEtleTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kRHluYW1pY0tleXMgKGJhc2VPYmosIHZhbHVlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciBrZXkgPSB2YWx1ZXNbaV07XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSkge1xuICAgICAgYmFzZU9ialt2YWx1ZXNbaV1dID0gdmFsdWVzW2kgKyAxXTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIC8vIG51bGwgaXMgYSBzcGVjaWFsIHZhbHVlIGZvciBleHBsaWNpdGx5IHJlbW92aW5nIGEgYmluZGluZ1xuICAgICAgd2FybihcbiAgICAgICAgKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXkpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYmFzZU9ialxufVxuXG4vLyBoZWxwZXIgdG8gZHluYW1pY2FsbHkgYXBwZW5kIG1vZGlmaWVyIHJ1bnRpbWUgbWFya2VycyB0byBldmVudCBuYW1lcy5cbi8vIGVuc3VyZSBvbmx5IGFwcGVuZCB3aGVuIHZhbHVlIGlzIGFscmVhZHkgc3RyaW5nLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBjYXN0XG4vLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG5mdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIgKHZhbHVlLCBzeW1ib2wpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzeW1ib2wgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XG4gIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICB0YXJnZXQuX24gPSB0b051bWJlcjtcbiAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XG4gIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gIHRhcmdldC5fdCA9IHJlbmRlclNsb3Q7XG4gIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XG4gIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgdGFyZ2V0Ll9tID0gcmVuZGVyU3RhdGljO1xuICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xuICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICB0YXJnZXQuX2IgPSBiaW5kT2JqZWN0UHJvcHM7XG4gIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgdGFyZ2V0Ll91ID0gcmVzb2x2ZVNjb3BlZFNsb3RzO1xuICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xuICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gIHRhcmdldC5fcCA9IHByZXBlbmRNb2RpZmllcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IChcbiAgZGF0YSxcbiAgcHJvcHMsXG4gIGNoaWxkcmVuLFxuICBwYXJlbnQsXG4gIEN0b3Jcbikge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgLy8gZW5zdXJlIHRoZSBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXG4gIHZhciBjb250ZXh0Vm07XG4gIGlmIChoYXNPd24ocGFyZW50LCAnX3VpZCcpKSB7XG4gICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGNvbnRleHRWbS5fb3JpZ2luYWwgPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNvbnRleHQgdm0gcGFzc2VkIGluIGlzIGEgZnVuY3Rpb25hbCBjb250ZXh0IGFzIHdlbGwuXG4gICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBhYmxlIHRvIGdldCBhIGhvbGQgdG8gdGhlXG4gICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxuICAgIGNvbnRleHRWbSA9IHBhcmVudDtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICB9XG4gIHZhciBpc0NvbXBpbGVkID0gaXNUcnVlKG9wdGlvbnMuX2NvbXBpbGVkKTtcbiAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XG5cbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmxpc3RlbmVycyA9IGRhdGEub24gfHwgZW1wdHlPYmplY3Q7XG4gIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG4gIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzJDEuJHNsb3RzKSB7XG4gICAgICBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdGhpcyQxLiRzbG90cyA9IHJlc29sdmVTbG90cyhjaGlsZHJlbiwgcGFyZW50KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMkMS4kc2xvdHNcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywgKHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLnNsb3RzKCkpXG4gICAgfVxuICB9KSk7XG5cbiAgLy8gc3VwcG9ydCBmb3IgY29tcGlsZWQgZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoaXNDb21waWxlZCkge1xuICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIHByZS1yZXNvbHZlIHNsb3RzIGZvciByZW5kZXJTbG90KClcbiAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcbiAgICB0aGlzLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuJHNsb3RzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pO1xuICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB2bm9kZS5mblNjb3BlSWQgPSBvcHRpb25zLl9zY29wZUlkO1xuICAgICAgICB2bm9kZS5mbkNvbnRleHQgPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTsgfTtcbiAgfVxufVxuXG5pbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgcHJvcHNEYXRhLFxuICBkYXRhLFxuICBjb250ZXh0Vm0sXG4gIGNoaWxkcmVuXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgcHJvcE9wdGlvbnMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSB8fCBlbXB0eU9iamVjdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0RlZihkYXRhLmF0dHJzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLmF0dHJzKTsgfVxuICAgIGlmIChpc0RlZihkYXRhLnByb3BzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTsgfVxuICB9XG5cbiAgdmFyIHJlbmRlckNvbnRleHQgPSBuZXcgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQoXG4gICAgZGF0YSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0Vm0sXG4gICAgQ3RvclxuICApO1xuXG4gIHZhciB2bm9kZSA9IG9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCwgcmVuZGVyQ29udGV4dC5fYywgcmVuZGVyQ29udGV4dCk7XG5cbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm4gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgIHZhciByZXMgPSBuZXcgQXJyYXkodm5vZGVzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gIC8vICM3ODE3IGNsb25lIG5vZGUgYmVmb3JlIHNldHRpbmcgZm5Db250ZXh0LCBvdGhlcndpc2UgaWYgdGhlIG5vZGUgaXMgcmV1c2VkXG4gIC8vIChlLmcuIGl0IHdhcyBmcm9tIGEgY2FjaGVkIG5vcm1hbCBzbG90KSB0aGUgZm5Db250ZXh0IGNhdXNlcyBuYW1lZCBzbG90c1xuICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgdmFyIGNsb25lID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gIGNsb25lLmZuQ29udGV4dCA9IGNvbnRleHRWbTtcbiAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAoY2xvbmUuZGV2dG9vbHNNZXRhID0gY2xvbmUuZGV2dG9vbHNNZXRhIHx8IHt9KS5yZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dDtcbiAgfVxuICBpZiAoZGF0YS5zbG90KSB7XG4gICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gIH1cbiAgcmV0dXJuIGNsb25lXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGlubGluZSBob29rcyB0byBiZSBpbnZva2VkIG9uIGNvbXBvbmVudCBWTm9kZXMgZHVyaW5nIHBhdGNoXG52YXIgY29tcG9uZW50Vk5vZGVIb29rcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIGlmIChcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXG4gICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICkge1xuICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgIHZub2RlLFxuICAgICAgICBhY3RpdmVJbnN0YW5jZVxuICAgICAgKTtcbiAgICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gICAgfVxuICB9LFxuXG4gIHByZXBhdGNoOiBmdW5jdGlvbiBwcmVwYXRjaCAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgdXBkYXRlQ2hpbGRDb21wb25lbnQoXG4gICAgICBjaGlsZCxcbiAgICAgIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICBvcHRpb25zLmxpc3RlbmVycywgLy8gdXBkYXRlZCBsaXN0ZW5lcnNcbiAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQgKHZub2RlKSB7XG4gICAgdmFyIGNvbnRleHQgPSB2bm9kZS5jb250ZXh0O1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCkge1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdvblNlcnZpY2VDcmVhdGVkJyk7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ29uU2VydmljZUF0dGFjaGVkJyk7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnbW91bnRlZCcpO1xuICAgIH1cbiAgICBpZiAodm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgIGlmIChjb250ZXh0Ll9pc01vdW50ZWQpIHtcbiAgICAgICAgLy8gdnVlLXJvdXRlciMxMjEyXG4gICAgICAgIC8vIER1cmluZyB1cGRhdGVzLCBhIGtlcHQtYWxpdmUgY29tcG9uZW50J3MgY2hpbGQgY29tcG9uZW50cyBtYXlcbiAgICAgICAgLy8gY2hhbmdlLCBzbyBkaXJlY3RseSB3YWxraW5nIHRoZSB0cmVlIGhlcmUgbWF5IGNhbGwgYWN0aXZhdGVkIGhvb2tzXG4gICAgICAgIC8vIG9uIGluY29ycmVjdCBjaGlsZHJlbi4gSW5zdGVhZCB3ZSBwdXNoIHRoZW0gaW50byBhIHF1ZXVlIHdoaWNoIHdpbGxcbiAgICAgICAgLy8gYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB3aG9sZSBwYXRjaCBwcm9jZXNzIGVuZGVkLlxuICAgICAgICBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICAgIGlmICghdm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGhvb2tzVG9NZXJnZSA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFZOb2RlSG9va3MpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKFxuICBDdG9yLFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgaWYgKGlzVW5kZWYoQ3RvcikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBiYXNlQ3RvciA9IGNvbnRleHQuJG9wdGlvbnMuX2Jhc2U7XG5cbiAgLy8gcGxhaW4gb3B0aW9ucyBvYmplY3Q6IHR1cm4gaXQgaW50byBhIGNvbnN0cnVjdG9yXG4gIGlmIChpc09iamVjdChDdG9yKSkge1xuICAgIEN0b3IgPSBiYXNlQ3Rvci5leHRlbmQoQ3Rvcik7XG4gIH1cblxuICAvLyBpZiBhdCB0aGlzIHN0YWdlIGl0J3Mgbm90IGEgY29uc3RydWN0b3Igb3IgYW4gYXN5bmMgY29tcG9uZW50IGZhY3RvcnksXG4gIC8vIHJlamVjdC5cbiAgaWYgKHR5cGVvZiBDdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oKFwiSW52YWxpZCBDb21wb25lbnQgZGVmaW5pdGlvbjogXCIgKyAoU3RyaW5nKEN0b3IpKSksIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGFzeW5jIGNvbXBvbmVudFxuICB2YXIgYXN5bmNGYWN0b3J5O1xuICBpZiAoaXNVbmRlZihDdG9yLmNpZCkpIHtcbiAgICBhc3luY0ZhY3RvcnkgPSBDdG9yO1xuICAgIEN0b3IgPSByZXNvbHZlQXN5bmNDb21wb25lbnQoYXN5bmNGYWN0b3J5LCBiYXNlQ3Rvcik7XG4gICAgaWYgKEN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgbm9kZSBmb3IgYXN5bmMgY29tcG9uZW50LCB3aGljaCBpcyByZW5kZXJlZFxuICAgICAgLy8gYXMgYSBjb21tZW50IG5vZGUgYnV0IHByZXNlcnZlcyBhbGwgdGhlIHJhdyBpbmZvcm1hdGlvbiBmb3IgdGhlIG5vZGUuXG4gICAgICAvLyB0aGUgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIGZvciBhc3luYyBzZXJ2ZXItcmVuZGVyaW5nIGFuZCBoeWRyYXRpb24uXG4gICAgICByZXR1cm4gY3JlYXRlQXN5bmNQbGFjZWhvbGRlcihcbiAgICAgICAgYXN5bmNGYWN0b3J5LFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdGFnXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZGF0YSA9IGRhdGEgfHwge307XG5cbiAgLy8gcmVzb2x2ZSBjb25zdHJ1Y3RvciBvcHRpb25zIGluIGNhc2UgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZCBhZnRlclxuICAvLyBjb21wb25lbnQgY29uc3RydWN0b3IgY3JlYXRpb25cbiAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yKTtcblxuICAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgZGF0YSBpbnRvIHByb3BzICYgZXZlbnRzXG4gIGlmIChpc0RlZihkYXRhLm1vZGVsKSkge1xuICAgIHRyYW5zZm9ybU1vZGVsKEN0b3Iub3B0aW9ucywgZGF0YSk7XG4gIH1cblxuICAvLyBleHRyYWN0IHByb3BzXG4gIHZhciBwcm9wc0RhdGEgPSBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHRhZywgY29udGV4dCk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuXG4gIC8vIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmZ1bmN0aW9uYWwpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcbiAgfVxuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzLCBzaW5jZSB0aGVzZSBuZWVkcyB0byBiZSB0cmVhdGVkIGFzXG4gIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG4gIHZhciBsaXN0ZW5lcnMgPSBkYXRhLm9uO1xuICAvLyByZXBsYWNlIHdpdGggbGlzdGVuZXJzIHdpdGggLm5hdGl2ZSBtb2RpZmllclxuICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cbiAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuYWJzdHJhY3QpKSB7XG4gICAgLy8gYWJzdHJhY3QgY29tcG9uZW50cyBkbyBub3Qga2VlcCBhbnl0aGluZ1xuICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XG5cbiAgICAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgZGF0YSA9IHt9O1xuICAgIGlmIChzbG90KSB7XG4gICAgICBkYXRhLnNsb3QgPSBzbG90O1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbGwgY29tcG9uZW50IG1hbmFnZW1lbnQgaG9va3Mgb250byB0aGUgcGxhY2Vob2xkZXIgbm9kZVxuICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7XG5cbiAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgdm5vZGVcbiAgdmFyIG5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCB0YWc7XG4gIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAoXCJ2dWUtY29tcG9uZW50LVwiICsgKEN0b3IuY2lkKSArIChuYW1lID8gKFwiLVwiICsgbmFtZSkgOiAnJykpLFxuICAgIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsXG4gICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcbiAgICBhc3luY0ZhY3RvcnlcbiAgKTtcblxuICByZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSAoXG4gIHZub2RlLCAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3RcbiAgcGFyZW50IC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuKSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIF9pc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIHBhcmVudDogcGFyZW50XG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgfVxuICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50SG9va3MgKGRhdGEpIHtcbiAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGhvb2tzVG9NZXJnZVtpXTtcbiAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgIHZhciB0b01lcmdlID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICAgIGlmIChleGlzdGluZyAhPT0gdG9NZXJnZSAmJiAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9tZXJnZWQpKSB7XG4gICAgICBob29rc1trZXldID0gZXhpc3RpbmcgPyBtZXJnZUhvb2skMSh0b01lcmdlLCBleGlzdGluZykgOiB0b01lcmdlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUhvb2skMSAoZjEsIGYyKSB7XG4gIHZhciBtZXJnZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIGZsb3cgY29tcGxhaW5zIGFib3V0IGV4dHJhIGFyZ3Mgd2hpY2ggaXMgd2h5IHdlIHVzZSBhbnlcbiAgICBmMShhLCBiKTtcbiAgICBmMihhLCBiKTtcbiAgfTtcbiAgbWVyZ2VkLl9tZXJnZWQgPSB0cnVlO1xuICByZXR1cm4gbWVyZ2VkXG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgOyhkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pKVtwcm9wXSA9IGRhdGEubW9kZWwudmFsdWU7XG4gIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gIHZhciBleGlzdGluZyA9IG9uW2V2ZW50XTtcbiAgdmFyIGNhbGxiYWNrID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgaWYgKGlzRGVmKGV4aXN0aW5nKSkge1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICAgID8gZXhpc3RpbmcuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xXG4gICAgICAgIDogZXhpc3RpbmcgIT09IGNhbGxiYWNrXG4gICAgKSB7XG4gICAgICBvbltldmVudF0gPSBbY2FsbGJhY2tdLmNvbmNhdChleGlzdGluZyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9uW2V2ZW50XSA9IGNhbGxiYWNrO1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbi8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZSxcbiAgYWx3YXlzTm9ybWFsaXplXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gQUxXQVlTX05PUk1BTElaRTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGVcbikge1xuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIkF2b2lkIHVzaW5nIG9ic2VydmVkIGRhdGEgb2JqZWN0IGFzIHZub2RlIGRhdGE6IFwiICsgKEpTT04uc3RyaW5naWZ5KGRhdGEpKSArIFwiXFxuXCIgK1xuICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXG4gICAgICBjb250ZXh0XG4gICAgKTtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gb2JqZWN0IHN5bnRheCBpbiB2LWJpbmRcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgdGFnID0gZGF0YS5pcztcbiAgfVxuICBpZiAoIXRhZykge1xuICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcbiAgKSB7XG4gICAge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICtcbiAgICAgICAgJ3VzZSBzdHJpbmcvbnVtYmVyIHZhbHVlIGluc3RlYWQuJyxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcbiAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBTSU1QTEVfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH1cbiAgdmFyIHZub2RlLCBucztcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3I7XG4gICAgbnMgPSAoY29udGV4dC4kdm5vZGUgJiYgY29udGV4dC4kdm5vZGUubnMpIHx8IGNvbmZpZy5nZXRUYWdOYW1lc3BhY2UodGFnKTtcbiAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgICAgLy8gcGxhdGZvcm0gYnVpbHQtaW4gZWxlbWVudHNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEubmF0aXZlT24pKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiVGhlIC5uYXRpdmUgbW9kaWZpZXIgZm9yIHYtb24gaXMgb25seSB2YWxpZCBvbiBjb21wb25lbnRzIGJ1dCBpdCB3YXMgdXNlZCBvbiA8XCIgKyB0YWcgKyBcIj4uXCIpLFxuICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICBjb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUodGFnKSwgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoKCFkYXRhIHx8ICFkYXRhLnByZSkgJiYgaXNEZWYoQ3RvciA9IHJlc29sdmVBc3NldChjb250ZXh0LiRvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpKSB7XG4gICAgICAvLyBjb21wb25lbnRcbiAgICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KEN0b3IsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuLCB0YWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1bmtub3duIG9yIHVubGlzdGVkIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAgICAgIC8vIGNoZWNrIGF0IHJ1bnRpbWUgYmVjYXVzZSBpdCBtYXkgZ2V0IGFzc2lnbmVkIGEgbmFtZXNwYWNlIHdoZW4gaXRzXG4gICAgICAvLyBwYXJlbnQgbm9ybWFsaXplcyBjaGlsZHJlblxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIHRhZywgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KHRhZywgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2UgaWYgKGlzRGVmKHZub2RlKSkge1xuICAgIGlmIChpc0RlZihucykpIHsgYXBwbHlOUyh2bm9kZSwgbnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7IHJlZ2lzdGVyRGVlcEJpbmRpbmdzKGRhdGEpOyB9XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TlMgKHZub2RlLCBucywgZm9yY2UpIHtcbiAgdm5vZGUubnMgPSBucztcbiAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gdXNlIGRlZmF1bHQgbmFtZXNwYWNlIGluc2lkZSBmb3JlaWduT2JqZWN0XG4gICAgbnMgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2UgPSB0cnVlO1xuICB9XG4gIGlmIChpc0RlZih2bm9kZS5jaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoY2hpbGQudGFnKSAmJiAoXG4gICAgICAgIGlzVW5kZWYoY2hpbGQubnMpIHx8IChpc1RydWUoZm9yY2UpICYmIGNoaWxkLnRhZyAhPT0gJ3N2ZycpKSkge1xuICAgICAgICBhcHBseU5TKGNoaWxkLCBucywgZm9yY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyByZWYgIzUzMThcbi8vIG5lY2Vzc2FyeSB0byBlbnN1cmUgcGFyZW50IHJlLXJlbmRlciB3aGVuIGRlZXAgYmluZGluZ3MgbGlrZSA6c3R5bGUgYW5kXG4vLyA6Y2xhc3MgYXJlIHVzZWQgb24gc2xvdCBub2Rlc1xuZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcbiAgaWYgKGlzT2JqZWN0KGRhdGEuc3R5bGUpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5zdHlsZSk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KGRhdGEuY2xhc3MpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5jbGFzcyk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRSZW5kZXIgKHZtKSB7XG4gIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXG4gIHZtLl9zdGF0aWNUcmVlcyA9IG51bGw7IC8vIHYtb25jZSBjYWNoZWQgdHJlZXNcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgdmFyIHBhcmVudFZub2RlID0gdm0uJHZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7IC8vIHRoZSBwbGFjZWhvbGRlciBub2RlIGluIHBhcmVudCB0cmVlXG4gIHZhciByZW5kZXJDb250ZXh0ID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuY29udGV4dDtcbiAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLCByZW5kZXJDb250ZXh0KTtcbiAgdm0uJHNjb3BlZFNsb3RzID0gZW1wdHlPYmplY3Q7XG4gIC8vIGJpbmQgdGhlIGNyZWF0ZUVsZW1lbnQgZm4gdG8gdGhpcyBpbnN0YW5jZVxuICAvLyBzbyB0aGF0IHdlIGdldCBwcm9wZXIgcmVuZGVyIGNvbnRleHQgaW5zaWRlIGl0LlxuICAvLyBhcmdzIG9yZGVyOiB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSwgYWx3YXlzTm9ybWFsaXplXG4gIC8vIGludGVybmFsIHZlcnNpb24gaXMgdXNlZCBieSByZW5kZXIgZnVuY3Rpb25zIGNvbXBpbGVkIGZyb20gdGVtcGxhdGVzXG4gIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTsgfTtcbiAgLy8gbm9ybWFsaXphdGlvbiBpcyBhbHdheXMgYXBwbGllZCBmb3IgdGhlIHB1YmxpYyB2ZXJzaW9uLCB1c2VkIGluXG4gIC8vIHVzZXItd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zLlxuICB2bS4kY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCB0cnVlKTsgfTtcblxuICAvLyAkYXR0cnMgJiAkbGlzdGVuZXJzIGFyZSBleHBvc2VkIGZvciBlYXNpZXIgSE9DIGNyZWF0aW9uLlxuICAvLyB0aGV5IG5lZWQgdG8gYmUgcmVhY3RpdmUgc28gdGhhdCBIT0NzIHVzaW5nIHRoZW0gYXJlIGFsd2F5cyB1cGRhdGVkXG4gIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkYXR0cnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRsaXN0ZW5lcnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVyTWl4aW4gKFZ1ZSkge1xuICAvLyBpbnN0YWxsIHJ1bnRpbWUgY29udmVuaWVuY2UgaGVscGVyc1xuICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBuZXh0VGljayhmbiwgdGhpcylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgdmFyIF9wYXJlbnRWbm9kZSA9IHJlZi5fcGFyZW50Vm5vZGU7XG5cbiAgICBpZiAoX3BhcmVudFZub2RlKSB7XG4gICAgICB2bS4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgX3BhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHZtLiRzbG90cyxcbiAgICAgICAgdm0uJHNjb3BlZFNsb3RzXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHNldCBwYXJlbnQgdm5vZGUuIHRoaXMgYWxsb3dzIHJlbmRlciBmdW5jdGlvbnMgdG8gaGF2ZSBhY2Nlc3NcbiAgICAvLyB0byB0aGUgZGF0YSBvbiB0aGUgcGxhY2Vob2xkZXIgbm9kZS5cbiAgICB2bS4kdm5vZGUgPSBfcGFyZW50Vm5vZGU7XG4gICAgLy8gcmVuZGVyIHNlbGZcbiAgICB2YXIgdm5vZGU7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRoZXJlJ3Mgbm8gbmVlZCB0byBtYWludGFpbiBhIHN0YWNrIGJlY2F1c2UgYWxsIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gc2VwYXJhdGVseSBmcm9tIG9uZSBhbm90aGVyLiBOZXN0ZWQgY29tcG9uZW50J3MgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IHZtO1xuICAgICAgdm5vZGUgPSByZW5kZXIuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJcIik7XG4gICAgICAvLyByZXR1cm4gZXJyb3IgcmVuZGVyIHJlc3VsdCxcbiAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJFcnJvclwiKTtcbiAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIGlmIHRoZSByZXR1cm5lZCBhcnJheSBjb250YWlucyBvbmx5IGEgc2luZ2xlIG5vZGUsIGFsbG93IGl0XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpICYmIHZub2RlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdm5vZGUgPSB2bm9kZVswXTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgJ3Nob3VsZCByZXR1cm4gYSBzaW5nbGUgcm9vdCBub2RlLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIH1cbiAgICAvLyBzZXQgcGFyZW50XG4gICAgdm5vZGUucGFyZW50ID0gX3BhcmVudFZub2RlO1xuICAgIHJldHVybiB2bm9kZVxuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW5zdXJlQ3RvciAoY29tcCwgYmFzZSkge1xuICBpZiAoXG4gICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgKGhhc1N5bWJvbCAmJiBjb21wW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdNb2R1bGUnKVxuICApIHtcbiAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICB9XG4gIHJldHVybiBpc09iamVjdChjb21wKVxuICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICA6IGNvbXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gIGZhY3RvcnksXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgbm9kZS5hc3luY0ZhY3RvcnkgPSBmYWN0b3J5O1xuICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICBmYWN0b3J5LFxuICBiYXNlQ3RvclxuKSB7XG4gIGlmIChpc1RydWUoZmFjdG9yeS5lcnJvcikgJiYgaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkuZXJyb3JDb21wXG4gIH1cblxuICBpZiAoaXNEZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5yZXNvbHZlZFxuICB9XG5cbiAgdmFyIG93bmVyID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICBpZiAob3duZXIgJiYgaXNEZWYoZmFjdG9yeS5vd25lcnMpICYmIGZhY3Rvcnkub3duZXJzLmluZGV4T2Yob3duZXIpID09PSAtMSkge1xuICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgIGZhY3Rvcnkub3duZXJzLnB1c2gob3duZXIpO1xuICB9XG5cbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgfVxuXG4gIGlmIChvd25lciAmJiAhaXNEZWYoZmFjdG9yeS5vd25lcnMpKSB7XG4gICAgdmFyIG93bmVycyA9IGZhY3Rvcnkub3duZXJzID0gW293bmVyXTtcbiAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgdmFyIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgdmFyIHRpbWVyVGltZW91dCA9IG51bGxcblxuICAgIDsob3duZXIpLiRvbignaG9vazpkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmUob3duZXJzLCBvd25lcik7IH0pO1xuXG4gICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvd25lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIChvd25lcnNbaV0pLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgICBpZiAodGltZXJMb2FkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTG9hZGluZyk7XG4gICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXJUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgLy8gY2FjaGUgcmVzb2x2ZWRcbiAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxuICAgICAgLy8gKGFzeW5jIHJlc29sdmVzIGFyZSBzaGltbWVkIGFzIHN5bmNocm9ub3VzIGR1cmluZyBTU1IpXG4gICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6IFwiICsgKFN0cmluZyhmYWN0b3J5KSkgK1xuICAgICAgICAocmVhc29uID8gKFwiXFxuUmVhc29uOiBcIiArIHJlYXNvbikgOiAnJylcbiAgICAgICk7XG4gICAgICBpZiAoaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgICAgIGZhY3RvcnkuZXJyb3IgPSB0cnVlO1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZXMgPSBmYWN0b3J5KHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMuY29tcG9uZW50KSkge1xuICAgICAgICByZXMuY29tcG9uZW50LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICBpZiAoaXNEZWYocmVzLmVycm9yKSkge1xuICAgICAgICAgIGZhY3RvcnkuZXJyb3JDb21wID0gZW5zdXJlQ3RvcihyZXMuZXJyb3IsIGJhc2VDdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMubG9hZGluZykpIHtcbiAgICAgICAgICBmYWN0b3J5LmxvYWRpbmdDb21wID0gZW5zdXJlQ3RvcihyZXMubG9hZGluZywgYmFzZUN0b3IpO1xuICAgICAgICAgIGlmIChyZXMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSAmJiBpc1VuZGVmKGZhY3RvcnkuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlcy5kZWxheSB8fCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMudGltZW91dCkpIHtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgPyAoXCJ0aW1lb3V0IChcIiArIChyZXMudGltZW91dCkgKyBcIm1zKVwiKVxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3luYyA9IGZhbHNlO1xuICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nXG4gICAgICA/IGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgICAgIDogZmFjdG9yeS5yZXNvbHZlZFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0FzeW5jUGxhY2Vob2xkZXIgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaXNDb21tZW50ICYmIG5vZGUuYXN5bmNGYWN0b3J5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZXRGaXJzdENvbXBvbmVudENoaWxkIChjaGlsZHJlbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGMpICYmIChpc0RlZihjLmNvbXBvbmVudE9wdGlvbnMpIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKSkpIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXZlbnRzICh2bSkge1xuICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdm0uX2hhc0hvb2tFdmVudCA9IGZhbHNlO1xuICAvLyBpbml0IHBhcmVudCBhdHRhY2hlZCBldmVudHNcbiAgdmFyIGxpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycyk7XG4gIH1cbn1cblxudmFyIHRhcmdldDtcblxuZnVuY3Rpb24gYWRkIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMSAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb2ZmKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChldmVudCwgZm4pIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQ7XG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgX3RhcmdldC4kb2ZmKGV2ZW50LCBvbmNlSGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXG4gIHZtLFxuICBsaXN0ZW5lcnMsXG4gIG9sZExpc3RlbmVyc1xuKSB7XG4gIHRhcmdldCA9IHZtO1xuICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIGNyZWF0ZU9uY2VIYW5kbGVyLCB2bSk7XG4gIHRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzTWl4aW4gKFZ1ZSkge1xuICB2YXIgaG9va1JFID0gL15ob29rOi87XG4gIFZ1ZS5wcm90b3R5cGUuJG9uID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2bS4kb24oZXZlbnRbaV0sIGZuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAvLyBvcHRpbWl6ZSBob29rOmV2ZW50IGNvc3QgYnkgdXNpbmcgYSBib29sZWFuIGZsYWcgbWFya2VkIGF0IHJlZ2lzdHJhdGlvblxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGhhc2ggbG9va3VwXG4gICAgICBpZiAoaG9va1JFLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgIHZtLl9oYXNIb29rRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gb24gKCkge1xuICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIG9uLmZuID0gZm47XG4gICAgdm0uJG9uKGV2ZW50LCBvbik7XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYWxsXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBhcnJheSBvZiBldmVudHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkkMSA8IGw7IGkkMSsrKSB7XG4gICAgICAgIHZtLiRvZmYoZXZlbnRbaSQxXSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghY2JzKSB7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICB2YXIgY2I7XG4gICAgdmFyIGkgPSBjYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNiID0gY2JzW2ldO1xuICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBsb3dlckNhc2VFdmVudCA9IGV2ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAobG93ZXJDYXNlRXZlbnQgIT09IGV2ZW50ICYmIHZtLl9ldmVudHNbbG93ZXJDYXNlRXZlbnRdKSB7XG4gICAgICAgIHRpcChcbiAgICAgICAgICBcIkV2ZW50IFxcXCJcIiArIGxvd2VyQ2FzZUV2ZW50ICsgXCJcXFwiIGlzIGVtaXR0ZWQgaW4gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIgYnV0IHRoZSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWQgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSBcIiArXG4gICAgICAgICAgXCJ2LW9uIHRvIGxpc3RlbiB0byBjYW1lbENhc2UgZXZlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIHRlbXBsYXRlcy4gXCIgK1xuICAgICAgICAgIFwiWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgKGh5cGhlbmF0ZShldmVudCkpICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmIChjYnMpIHtcbiAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xuICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgaW5mbyA9IFwiZXZlbnQgaGFuZGxlciBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIGFjdGl2ZUluc3RhbmNlID0gbnVsbDtcbnZhciBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgdmFyIHByZXZBY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlO1xuICBhY3RpdmVJbnN0YW5jZSA9IHZtO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGFjdGl2ZUluc3RhbmNlID0gcHJldkFjdGl2ZUluc3RhbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRMaWZlY3ljbGUgKHZtKSB7XG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG5cbiAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBpZiAocGFyZW50ICYmICFvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gIH1cblxuICB2bS4kcGFyZW50ID0gcGFyZW50O1xuICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gIHZtLiRjaGlsZHJlbiA9IFtdO1xuICB2bS4kcmVmcyA9IHt9O1xuXG4gIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgdm0uX2luYWN0aXZlID0gbnVsbDtcbiAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgdm0uX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBwcmV2RWwgPSB2bS4kZWw7XG4gICAgdmFyIHByZXZWbm9kZSA9IHZtLl92bm9kZTtcbiAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2Uodm0pO1xuICAgIHZtLl92bm9kZSA9IHZub2RlO1xuICAgIC8vIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fIGlzIGluamVjdGVkIGluIGVudHJ5IHBvaW50c1xuICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgIGlmICghcHJldlZub2RlKSB7XG4gICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZXNcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgcmVzdG9yZUFjdGl2ZUluc3RhbmNlKCk7XG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IHZtO1xuICAgIH1cbiAgICAvLyBpZiBwYXJlbnQgaXMgYW4gSE9DLCB1cGRhdGUgaXRzICRlbCBhcyB3ZWxsXG4gICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgIH1cbiAgICAvLyB1cGRhdGVkIGhvb2sgaXMgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIgdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gYXJlXG4gICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZURlc3Ryb3knKTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXZtLiRvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgIH1cbiAgICAvLyB0ZWFyZG93biB3YXRjaGVyc1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZtLl93YXRjaGVyc1tpXS50ZWFyZG93bigpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxuICAgIC8vIGZyb3plbiBvYmplY3QgbWF5IG5vdCBoYXZlIG9ic2VydmVyLlxuICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgIHZtLl9kYXRhLl9fb2JfXy52bUNvdW50LS07XG4gICAgfVxuICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gaW52b2tlIGRlc3Ryb3kgaG9va3Mgb24gY3VycmVudCByZW5kZXJlZCB0cmVlXG4gICAgdm0uX19wYXRjaF9fKHZtLl92bm9kZSwgbnVsbCk7XG4gICAgLy8gZmlyZSBkZXN0cm95ZWQgaG9va1xuICAgIGNhbGxIb29rKHZtLCAnZGVzdHJveWVkJyk7XG4gICAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgICB2bS4kb2ZmKCk7XG4gICAgLy8gcmVtb3ZlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG4gICAgaWYgKHZtLiR2bm9kZSkge1xuICAgICAgdm0uJHZub2RlLnBhcmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDaGlsZENvbXBvbmVudCAoXG4gIHZtLFxuICBwcm9wc0RhdGEsXG4gIGxpc3RlbmVycyxcbiAgcGFyZW50Vm5vZGUsXG4gIHJlbmRlckNoaWxkcmVuXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgY29tcG9uZW50IGhhcyBzbG90IGNoaWxkcmVuXG4gIC8vIHdlIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgb3ZlcndyaXRpbmcgJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLlxuXG4gIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBkeW5hbWljIHNjb3BlZFNsb3RzIChoYW5kLXdyaXR0ZW4gb3IgY29tcGlsZWQgYnV0IHdpdGhcbiAgLy8gZHluYW1pYyBzbG90IG5hbWVzKS4gU3RhdGljIHNjb3BlZCBzbG90cyBjb21waWxlZCBmcm9tIHRlbXBsYXRlIGhhcyB0aGVcbiAgLy8gXCIkc3RhYmxlXCIgbWFya2VyLlxuICB2YXIgbmV3U2NvcGVkU2xvdHMgPSBwYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzO1xuICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gIHZhciBoYXNEeW5hbWljU2NvcGVkU2xvdCA9ICEhKFxuICAgIChuZXdTY29wZWRTbG90cyAmJiAhbmV3U2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAob2xkU2NvcGVkU2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmICFvbGRTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChuZXdTY29wZWRTbG90cyAmJiB2bS4kc2NvcGVkU2xvdHMuJGtleSAhPT0gbmV3U2NvcGVkU2xvdHMuJGtleSlcbiAgKTtcblxuICAvLyBBbnkgc3RhdGljIHNsb3QgY2hpbGRyZW4gZnJvbSB0aGUgcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgZHVyaW5nIHBhcmVudCdzXG4gIC8vIHVwZGF0ZS4gRHluYW1pYyBzY29wZWQgc2xvdHMgbWF5IGFsc28gaGF2ZSBjaGFuZ2VkLiBJbiBzdWNoIGNhc2VzLCBhIGZvcmNlZFxuICAvLyB1cGRhdGUgaXMgbmVjZXNzYXJ5IHRvIGVuc3VyZSBjb3JyZWN0bmVzcy5cbiAgdmFyIG5lZWRzRm9yY2VVcGRhdGUgPSAhIShcbiAgICByZW5kZXJDaGlsZHJlbiB8fCAgICAgICAgICAgICAgIC8vIGhhcyBuZXcgc3RhdGljIHNsb3RzXG4gICAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuIHx8ICAvLyBoYXMgb2xkIHN0YXRpYyBzbG90c1xuICAgIGhhc0R5bmFtaWNTY29wZWRTbG90XG4gICk7XG5cbiAgdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG4gIHZtLiR2bm9kZSA9IHBhcmVudFZub2RlOyAvLyB1cGRhdGUgdm0ncyBwbGFjZWhvbGRlciBub2RlIHdpdGhvdXQgcmUtcmVuZGVyXG5cbiAgaWYgKHZtLl92bm9kZSkgeyAvLyB1cGRhdGUgY2hpbGQgdHJlZSdzIHBhcmVudFxuICAgIHZtLl92bm9kZS5wYXJlbnQgPSBwYXJlbnRWbm9kZTtcbiAgfVxuICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gPSByZW5kZXJDaGlsZHJlbjtcblxuICAvLyB1cGRhdGUgJGF0dHJzIGFuZCAkbGlzdGVuZXJzIGhhc2hcbiAgLy8gdGhlc2UgYXJlIGFsc28gcmVhY3RpdmUgc28gdGhleSBtYXkgdHJpZ2dlciBjaGlsZCB1cGRhdGUgaWYgdGhlIGNoaWxkXG4gIC8vIHVzZWQgdGhlbSBkdXJpbmcgcmVuZGVyXG4gIHZtLiRhdHRycyA9IHBhcmVudFZub2RlLmRhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZtLiRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG5cbiAgLy8gdXBkYXRlIHByb3BzXG4gIGlmIChwcm9wc0RhdGEgJiYgdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIHZhciBwcm9wcyA9IHZtLl9wcm9wcztcbiAgICB2YXIgcHJvcEtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHByb3BLZXlzW2ldO1xuICAgICAgdmFyIHByb3BPcHRpb25zID0gdm0uJG9wdGlvbnMucHJvcHM7IC8vIHd0ZiBmbG93P1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICB9XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIC8vIGtlZXAgYSBjb3B5IG9mIHJhdyBwcm9wc0RhdGFcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgPSBwcm9wc0RhdGE7XG4gIH1cbiAgXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCB1cGRhdGUgcHJvcGVydGllcyhtcCBydW50aW1lKVxuICB2bS5fJHVwZGF0ZVByb3BlcnRpZXMgJiYgdm0uXyR1cGRhdGVQcm9wZXJ0aWVzKHZtKTtcbiAgXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnNcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuICB2YXIgb2xkTGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyk7XG5cbiAgLy8gcmVzb2x2ZSBzbG90cyArIGZvcmNlIHVwZGF0ZSBpZiBoYXMgY2hpbGRyZW5cbiAgaWYgKG5lZWRzRm9yY2VVcGRhdGUpIHtcbiAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMocmVuZGVyQ2hpbGRyZW4sIHBhcmVudFZub2RlLmNvbnRleHQpO1xuICAgIHZtLiRmb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luSW5hY3RpdmVUcmVlICh2bSkge1xuICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICBpZiAodm0uX2luYWN0aXZlKSB7IHJldHVybiB0cnVlIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSBpZiAodm0uX2RpcmVjdEluYWN0aXZlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZtLl9pbmFjdGl2ZSB8fCB2bS5faW5hY3RpdmUgPT09IG51bGwpIHtcbiAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2FjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2RlYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbEhvb2sgKHZtLCBob29rKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcbiAgcHVzaFRhcmdldCgpO1xuICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcbiAgdmFyIGluZm8gPSBob29rICsgXCIgaG9va1wiO1xuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBudWxsLCB2bSwgaW5mbyk7XG4gICAgfVxuICB9XG4gIGlmICh2bS5faGFzSG9va0V2ZW50KSB7XG4gICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xuICB9XG4gIHBvcFRhcmdldCgpO1xufVxuXG4vKiAgKi9cblxudmFyIE1BWF9VUERBVEVfQ09VTlQgPSAxMDA7XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGFjdGl2YXRlZENoaWxkcmVuID0gW107XG52YXIgaGFzID0ge307XG52YXIgY2lyY3VsYXIgPSB7fTtcbnZhciB3YWl0aW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBpbmRleCA9IDA7XG5cbi8qKlxuICogUmVzZXQgdGhlIHNjaGVkdWxlcidzIHN0YXRlLlxuICovXG5mdW5jdGlvbiByZXNldFNjaGVkdWxlclN0YXRlICgpIHtcbiAgaW5kZXggPSBxdWV1ZS5sZW5ndGggPSBhY3RpdmF0ZWRDaGlsZHJlbi5sZW5ndGggPSAwO1xuICBoYXMgPSB7fTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaXJjdWxhciA9IHt9O1xuICB9XG4gIHdhaXRpbmcgPSBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBBc3luYyBlZGdlIGNhc2UgIzY1NjYgcmVxdWlyZXMgc2F2aW5nIHRoZSB0aW1lc3RhbXAgd2hlbiBldmVudCBsaXN0ZW5lcnMgYXJlXG4vLyBhdHRhY2hlZC4gSG93ZXZlciwgY2FsbGluZyBwZXJmb3JtYW5jZS5ub3coKSBoYXMgYSBwZXJmIG92ZXJoZWFkIGVzcGVjaWFsbHlcbi8vIGlmIHRoZSBwYWdlIGhhcyB0aG91c2FuZHMgb2YgZXZlbnQgbGlzdGVuZXJzLiBJbnN0ZWFkLCB3ZSB0YWtlIGEgdGltZXN0YW1wXG4vLyBldmVyeSB0aW1lIHRoZSBzY2hlZHVsZXIgZmx1c2hlcyBhbmQgdXNlIHRoYXQgZm9yIGFsbCBldmVudCBsaXN0ZW5lcnNcbi8vIGF0dGFjaGVkIGR1cmluZyB0aGF0IGZsdXNoLlxudmFyIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IDA7XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSBmaXggcmVxdWlyZXMgc3RvcmluZyBhbiBldmVudCBsaXN0ZW5lcidzIGF0dGFjaCB0aW1lc3RhbXAuXG52YXIgZ2V0Tm93ID0gRGF0ZS5ub3c7XG5cbi8vIERldGVybWluZSB3aGF0IGV2ZW50IHRpbWVzdGFtcCB0aGUgYnJvd3NlciBpcyB1c2luZy4gQW5ub3lpbmdseSwgdGhlXG4vLyB0aW1lc3RhbXAgY2FuIGVpdGhlciBiZSBoaS1yZXMgKHJlbGF0aXZlIHRvIHBhZ2UgbG9hZCkgb3IgbG93LXJlc1xuLy8gKHJlbGF0aXZlIHRvIFVOSVggZXBvY2gpLCBzbyBpbiBvcmRlciB0byBjb21wYXJlIHRpbWUgd2UgaGF2ZSB0byB1c2UgdGhlXG4vLyBzYW1lIHRpbWVzdGFtcCB0eXBlIHdoZW4gc2F2aW5nIHRoZSBmbHVzaCB0aW1lc3RhbXAuXG4vLyBBbGwgSUUgdmVyc2lvbnMgdXNlIGxvdy1yZXMgZXZlbnQgdGltZXN0YW1wcywgYW5kIGhhdmUgcHJvYmxlbWF0aWMgY2xvY2tcbi8vIGltcGxlbWVudGF0aW9ucyAoIzk2MzIpXG5pZiAoaW5Ccm93c2VyICYmICFpc0lFKSB7XG4gIHZhciBwZXJmb3JtYW5jZSA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgaWYgKFxuICAgIHBlcmZvcm1hbmNlICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGdldE5vdygpID4gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JykudGltZVN0YW1wXG4gICkge1xuICAgIC8vIGlmIHRoZSBldmVudCB0aW1lc3RhbXAsIGFsdGhvdWdoIGV2YWx1YXRlZCBBRlRFUiB0aGUgRGF0ZS5ub3coKSwgaXNcbiAgICAvLyBzbWFsbGVyIHRoYW4gaXQsIGl0IG1lYW5zIHRoZSBldmVudCBpcyB1c2luZyBhIGhpLXJlcyB0aW1lc3RhbXAsXG4gICAgLy8gYW5kIHdlIG5lZWQgdG8gdXNlIHRoZSBoaS1yZXMgdmVyc2lvbiBmb3IgZXZlbnQgbGlzdGVuZXIgdGltZXN0YW1wcyBhc1xuICAgIC8vIHdlbGwuXG4gICAgZ2V0Tm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7IH07XG4gIH1cbn1cblxuLyoqXG4gKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cbiAqL1xuZnVuY3Rpb24gZmx1c2hTY2hlZHVsZXJRdWV1ZSAoKSB7XG4gIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IGdldE5vdygpO1xuICBmbHVzaGluZyA9IHRydWU7XG4gIHZhciB3YXRjaGVyLCBpZDtcblxuICAvLyBTb3J0IHF1ZXVlIGJlZm9yZSBmbHVzaC5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQ6XG4gIC8vIDEuIENvbXBvbmVudHMgYXJlIHVwZGF0ZWQgZnJvbSBwYXJlbnQgdG8gY2hpbGQuIChiZWNhdXNlIHBhcmVudCBpcyBhbHdheXNcbiAgLy8gICAgY3JlYXRlZCBiZWZvcmUgdGhlIGNoaWxkKVxuICAvLyAyLiBBIGNvbXBvbmVudCdzIHVzZXIgd2F0Y2hlcnMgYXJlIHJ1biBiZWZvcmUgaXRzIHJlbmRlciB3YXRjaGVyIChiZWNhdXNlXG4gIC8vICAgIHVzZXIgd2F0Y2hlcnMgYXJlIGNyZWF0ZWQgYmVmb3JlIHRoZSByZW5kZXIgd2F0Y2hlcilcbiAgLy8gMy4gSWYgYSBjb21wb25lbnQgaXMgZGVzdHJveWVkIGR1cmluZyBhIHBhcmVudCBjb21wb25lbnQncyB3YXRjaGVyIHJ1bixcbiAgLy8gICAgaXRzIHdhdGNoZXJzIGNhbiBiZSBza2lwcGVkLlxuICBxdWV1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG5cbiAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBxdWV1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB3YXRjaGVyID0gcXVldWVbaW5kZXhdO1xuICAgIGlmICh3YXRjaGVyLmJlZm9yZSkge1xuICAgICAgd2F0Y2hlci5iZWZvcmUoKTtcbiAgICB9XG4gICAgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gTUFYX1VQREFURV9DT1VOVCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgJyArIChcbiAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICA/IChcImluIHdhdGNoZXIgd2l0aCBleHByZXNzaW9uIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpXG4gICAgICAgICAgICAgIDogXCJpbiBhIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb24uXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHdhdGNoZXIudm1cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBrZWVwIGNvcGllcyBvZiBwb3N0IHF1ZXVlcyBiZWZvcmUgcmVzZXR0aW5nIHN0YXRlXG4gIHZhciBhY3RpdmF0ZWRRdWV1ZSA9IGFjdGl2YXRlZENoaWxkcmVuLnNsaWNlKCk7XG4gIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xuXG4gIHJlc2V0U2NoZWR1bGVyU3RhdGUoKTtcblxuICAvLyBjYWxsIGNvbXBvbmVudCB1cGRhdGVkIGFuZCBhY3RpdmF0ZWQgaG9va3NcbiAgY2FsbEFjdGl2YXRlZEhvb2tzKGFjdGl2YXRlZFF1ZXVlKTtcbiAgY2FsbFVwZGF0ZWRIb29rcyh1cGRhdGVkUXVldWUpO1xuXG4gIC8vIGRldnRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRldnRvb2xzICYmIGNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFVwZGF0ZWRIb29rcyAocXVldWUpIHtcbiAgdmFyIGkgPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldO1xuICAgIHZhciB2bSA9IHdhdGNoZXIudm07XG4gICAgaWYgKHZtLl93YXRjaGVyID09PSB3YXRjaGVyICYmIHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgY2FsbEhvb2sodm0sICd1cGRhdGVkJyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUXVldWUgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCB0aGF0IHdhcyBhY3RpdmF0ZWQgZHVyaW5nIHBhdGNoLlxuICogVGhlIHF1ZXVlIHdpbGwgYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSBlbnRpcmUgdHJlZSBoYXMgYmVlbiBwYXRjaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCAodm0pIHtcbiAgLy8gc2V0dGluZyBfaW5hY3RpdmUgdG8gZmFsc2UgaGVyZSBzbyB0aGF0IGEgcmVuZGVyIGZ1bmN0aW9uIGNhblxuICAvLyByZWx5IG9uIGNoZWNraW5nIHdoZXRoZXIgaXQncyBpbiBhbiBpbmFjdGl2ZSB0cmVlIChlLmcuIHJvdXRlci12aWV3KVxuICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgYWN0aXZhdGVkQ2hpbGRyZW4ucHVzaCh2bSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBY3RpdmF0ZWRIb29rcyAocXVldWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChxdWV1ZVtpXSwgdHJ1ZSAvKiB0cnVlICovKTtcbiAgfVxufVxuXG4vKipcbiAqIFB1c2ggYSB3YXRjaGVyIGludG8gdGhlIHdhdGNoZXIgcXVldWUuXG4gKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcbiAqIHB1c2hlZCB3aGVuIHRoZSBxdWV1ZSBpcyBiZWluZyBmbHVzaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZVdhdGNoZXIgKHdhdGNoZXIpIHtcbiAgdmFyIGlkID0gd2F0Y2hlci5pZDtcbiAgaWYgKGhhc1tpZF0gPT0gbnVsbCkge1xuICAgIGhhc1tpZF0gPSB0cnVlO1xuICAgIGlmICghZmx1c2hpbmcpIHtcbiAgICAgIHF1ZXVlLnB1c2god2F0Y2hlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGFscmVhZHkgZmx1c2hpbmcsIHNwbGljZSB0aGUgd2F0Y2hlciBiYXNlZCBvbiBpdHMgaWRcbiAgICAgIC8vIGlmIGFscmVhZHkgcGFzdCBpdHMgaWQsIGl0IHdpbGwgYmUgcnVuIG5leHQgaW1tZWRpYXRlbHkuXG4gICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoaSA+IGluZGV4ICYmIHF1ZXVlW2ldLmlkID4gd2F0Y2hlci5pZCkge1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgICBxdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHdhdGNoZXIpO1xuICAgIH1cbiAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcbiAgICBpZiAoIXdhaXRpbmcpIHtcbiAgICAgIHdhaXRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZmlnLmFzeW5jKSB7XG4gICAgICAgIGZsdXNoU2NoZWR1bGVyUXVldWUoKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBuZXh0VGljayhmbHVzaFNjaGVkdWxlclF1ZXVlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cblxuXG52YXIgdWlkJDIgPSAwO1xuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICovXG52YXIgV2F0Y2hlciA9IGZ1bmN0aW9uIFdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgY2IsXG4gIG9wdGlvbnMsXG4gIGlzUmVuZGVyV2F0Y2hlclxuKSB7XG4gIHRoaXMudm0gPSB2bTtcbiAgaWYgKGlzUmVuZGVyV2F0Y2hlcikge1xuICAgIHZtLl93YXRjaGVyID0gdGhpcztcbiAgfVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKTtcbiAgLy8gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIHRoaXMuZGVlcCA9ICEhb3B0aW9ucy5kZWVwO1xuICAgIHRoaXMudXNlciA9ICEhb3B0aW9ucy51c2VyO1xuICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xuICAgIHRoaXMuc3luYyA9ICEhb3B0aW9ucy5zeW5jO1xuICAgIHRoaXMuYmVmb3JlID0gb3B0aW9ucy5iZWZvcmU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWVwID0gdGhpcy51c2VyID0gdGhpcy5sYXp5ID0gdGhpcy5zeW5jID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5jYiA9IGNiO1xuICB0aGlzLmlkID0gKyt1aWQkMjsgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdO1xuICB0aGlzLm5ld0RlcHMgPSBbXTtcbiAgdGhpcy5kZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLm5ld0RlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMuZXhwcmVzc2lvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICA/IGV4cE9yRm4udG9TdHJpbmcoKVxuICAgIDogJyc7XG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAodHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbik7XG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBub29wO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB3YXRjaGluZyBwYXRoOiBcXFwiXCIgKyBleHBPckZuICsgXCJcXFwiIFwiICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKTtcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKCkge1xuICBwdXNoVGFyZ2V0KHRoaXMpO1xuICB2YXIgdmFsdWU7XG4gIHZhciB2bSA9IHRoaXMudm07XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgICBpZiAodGhpcy5kZWVwKSB7XG4gICAgICB0cmF2ZXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIHBvcFRhcmdldCgpO1xuICAgIHRoaXMuY2xlYW51cERlcHMoKTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn07XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwIChkZXApIHtcbiAgdmFyIGlkID0gZGVwLmlkO1xuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5jbGVhbnVwRGVwcyA9IGZ1bmN0aW9uIGNsZWFudXBEZXBzICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGRlcCA9IHRoaXMuZGVwc1tpXTtcbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxuICB2YXIgdG1wID0gdGhpcy5kZXBJZHM7XG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHM7XG4gIHRoaXMubmV3RGVwSWRzID0gdG1wO1xuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpO1xuICB0bXAgPSB0aGlzLmRlcHM7XG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwcztcbiAgdGhpcy5uZXdEZXBzID0gdG1wO1xuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMDtcbn07XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gICAgdGhpcy5ydW4oKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZVdhdGNoZXIodGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2NoZWR1bGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiBydW4gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldCgpO1xuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZC5cbiAgICAgIGlzT2JqZWN0KHZhbHVlKSB8fFxuICAgICAgdGhpcy5kZWVwXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdGhpcy52bSwgKFwiY2FsbGJhY2sgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlICgpIHtcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gIHRoaXMuZGlydHkgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YnNjcmliZXIgbGlzdC5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcyk7XG4gICAgfVxuICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiA9IHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IG5vb3AsXG4gIHNldDogbm9vcFxufTtcblxuZnVuY3Rpb24gcHJveHkgKHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1tzb3VyY2VLZXldW2tleV1cbiAgfTtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICB0aGlzW3NvdXJjZUtleV1ba2V5XSA9IHZhbDtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdO1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zO1xuICBpZiAob3B0cy5wcm9wcykgeyBpbml0UHJvcHModm0sIG9wdHMucHJvcHMpOyB9XG4gIGlmIChvcHRzLm1ldGhvZHMpIHsgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7IH1cbiAgaWYgKG9wdHMuZGF0YSkge1xuICAgIGluaXREYXRhKHZtKTtcbiAgfSBlbHNlIHtcbiAgICBvYnNlcnZlKHZtLl9kYXRhID0ge30sIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG4gIH1cbiAgaWYgKG9wdHMuY29tcHV0ZWQpIHsgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTsgfVxuICBpZiAob3B0cy53YXRjaCAmJiBvcHRzLndhdGNoICE9PSBuYXRpdmVXYXRjaCkge1xuICAgIGluaXRXYXRjaCh2bSwgb3B0cy53YXRjaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzICh2bSwgcHJvcHNPcHRpb25zKSB7XG4gIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XG4gIHZhciBwcm9wcyA9IHZtLl9wcm9wcyA9IHt9O1xuICAvLyBjYWNoZSBwcm9wIGtleXMgc28gdGhhdCBmdXR1cmUgcHJvcHMgdXBkYXRlcyBjYW4gaXRlcmF0ZSB1c2luZyBBcnJheVxuICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cbiAgdmFyIGtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgPSBbXTtcbiAgdmFyIGlzUm9vdCA9ICF2bS4kcGFyZW50O1xuICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgaWYgKCFpc1Jvb3QpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICB9XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoaHlwaGVuYXRlZEtleSkgfHxcbiAgICAgICAgICBjb25maWcuaXNSZXNlcnZlZEF0dHIoaHlwaGVuYXRlZEtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJcXFwiXCIgKyBoeXBoZW5hdGVkS2V5ICsgXCJcXFwiIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlIGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBjb21wb25lbnQgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNSb290ICYmICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZih2bS5tcEhvc3QgPT09ICdtcC1iYWlkdScgfHwgdm0ubXBIb3N0ID09PSAnbXAta3VhaXNob3UnKXsvL+eZvuW6puOAgeW/q+aJiyBvYnNlcnZlciDlnKggc2V0RGF0YSBjYWxsYmFjayDkuYvlkI7op6blj5HvvIznm7TmjqXlv73nlaXor6Ugd2FyblxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9maXhlZCBieSB4eHh4eHggX19uZXh0X3RpY2tfcGVuZGluZyx1bmk6Ly9mb3JtLWZpZWxkIOaXtuS4jeWRiuitplxuICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAga2V5ID09PSAndmFsdWUnICYmIFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodm0uJG9wdGlvbnMuYmVoYXZpb3JzKSAmJlxuICAgICAgICAgICAgICAgIHZtLiRvcHRpb25zLmJlaGF2aW9ycy5pbmRleE9mKCd1bmk6Ly9mb3JtLWZpZWxkJykgIT09IC0xXG4gICAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodm0uX2dldEZvcm1EYXRhKXtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICB3aGlsZSgkcGFyZW50KXtcbiAgICAgICAgICAgICAgaWYoJHBhcmVudC5fX25leHRfdGlja19wZW5kaW5nKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICRwYXJlbnQgPSAkcGFyZW50LiRwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGEgcHJvcCBkaXJlY3RseSBzaW5jZSB0aGUgdmFsdWUgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwYXJlbnQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiSW5zdGVhZCwgdXNlIGEgZGF0YSBvciBjb21wdXRlZCBwcm9wZXJ0eSBiYXNlZCBvbiB0aGUgcHJvcCdzIFwiICtcbiAgICAgICAgICAgIFwidmFsdWUuIFByb3AgYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIC8vIHN0YXRpYyBwcm9wcyBhcmUgYWxyZWFkeSBwcm94aWVkIG9uIHRoZSBjb21wb25lbnQncyBwcm90b3R5cGVcbiAgICAvLyBkdXJpbmcgVnVlLmV4dGVuZCgpLiBXZSBvbmx5IG5lZWQgdG8gcHJveHkgcHJvcHMgZGVmaW5lZCBhdFxuICAgIC8vIGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBwcm94eSh2bSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgICB9XG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzT3B0aW9ucykgbG9vcCgga2V5ICk7XG4gIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbn1cblxuZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIHZhciBkYXRhID0gdm0uJG9wdGlvbnMuZGF0YTtcbiAgZGF0YSA9IHZtLl9kYXRhID0gdHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbidcbiAgICA/IGdldERhdGEoZGF0YSwgdm0pXG4gICAgOiBkYXRhIHx8IHt9O1xuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge307XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ2RhdGEgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0OlxcbicgK1xuICAgICAgJ2h0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNkYXRhLU11c3QtQmUtYS1GdW5jdGlvbicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgdmFyIG1ldGhvZHMgPSB2bS4kb3B0aW9ucy5tZXRob2RzO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChtZXRob2RzICYmIGhhc093bihtZXRob2RzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBkYXRhIHByb3BlcnR5LlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiVGhlIGRhdGEgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVjbGFyZWQgYXMgYSBwcm9wLiBcIiArXG4gICAgICAgIFwiVXNlIHByb3AgZGVmYXVsdCB2YWx1ZSBpbnN0ZWFkLlwiLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9kYXRhXCIsIGtleSk7XG4gICAgfVxuICB9XG4gIC8vIG9ic2VydmUgZGF0YVxuICBvYnNlcnZlKGRhdGEsIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEgKGRhdGEsIHZtKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBkYXRhIGdldHRlcnNcbiAgcHVzaFRhcmdldCgpO1xuICB0cnkge1xuICAgIHJldHVybiBkYXRhLmNhbGwodm0sIHZtKVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwiZGF0YSgpXCIpO1xuICAgIHJldHVybiB7fVxuICB9IGZpbmFsbHkge1xuICAgIHBvcFRhcmdldCgpO1xuICB9XG59XG5cbnZhciBjb21wdXRlZFdhdGNoZXJPcHRpb25zID0geyBsYXp5OiB0cnVlIH07XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCAodm0sIGNvbXB1dGVkKSB7XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICB2YXIgd2F0Y2hlcnMgPSB2bS5fY29tcHV0ZWRXYXRjaGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGp1c3QgZ2V0dGVycyBkdXJpbmcgU1NSXG4gIHZhciBpc1NTUiA9IGlzU2VydmVyUmVuZGVyaW5nKCk7XG5cbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgdmFyIHVzZXJEZWYgPSBjb21wdXRlZFtrZXldO1xuICAgIHZhciBnZXR0ZXIgPSB0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJyA/IHVzZXJEZWYgOiB1c2VyRGVmLmdldDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiR2V0dGVyIGlzIG1pc3NpbmcgZm9yIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIi5cIiksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghaXNTU1IpIHtcbiAgICAgIC8vIGNyZWF0ZSBpbnRlcm5hbCB3YXRjaGVyIGZvciB0aGUgY29tcHV0ZWQgcHJvcGVydHkuXG4gICAgICB3YXRjaGVyc1trZXldID0gbmV3IFdhdGNoZXIoXG4gICAgICAgIHZtLFxuICAgICAgICBnZXR0ZXIgfHwgbm9vcCxcbiAgICAgICAgbm9vcCxcbiAgICAgICAgY29tcHV0ZWRXYXRjaGVyT3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnQtZGVmaW5lZCBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBhbHJlYWR5IGRlZmluZWQgb24gdGhlXG4gICAgLy8gY29tcG9uZW50IHByb3RvdHlwZS4gV2Ugb25seSBuZWVkIHRvIGRlZmluZSBjb21wdXRlZCBwcm9wZXJ0aWVzIGRlZmluZWRcbiAgICAvLyBhdCBpbnN0YW50aWF0aW9uIGhlcmUuXG4gICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgZGVmaW5lQ29tcHV0ZWQodm0sIGtleSwgdXNlckRlZik7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoa2V5IGluIHZtLiRkYXRhKSB7XG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgaW4gZGF0YS5cIiksIHZtKTtcbiAgICAgIH0gZWxzZSBpZiAodm0uJG9wdGlvbnMucHJvcHMgJiYga2V5IGluIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgYXMgYSBwcm9wLlwiKSwgdm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVDb21wdXRlZCAoXG4gIHRhcmdldCxcbiAga2V5LFxuICB1c2VyRGVmXG4pIHtcbiAgdmFyIHNob3VsZENhY2hlID0gIWlzU2VydmVyUmVuZGVyaW5nKCk7XG4gIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBzaG91bGRDYWNoZVxuICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZik7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IG5vb3A7XG4gIH0gZWxzZSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHVzZXJEZWYuZ2V0XG4gICAgICA/IHNob3VsZENhY2hlICYmIHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgID8gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KVxuICAgICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZi5nZXQpXG4gICAgICA6IG5vb3A7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IHVzZXJEZWYuc2V0IHx8IG5vb3A7XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPT09IG5vb3ApIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiQ29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBhc3NpZ25lZCB0byBidXQgaXQgaGFzIG5vIHNldHRlci5cIiksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkR2V0dGVyIChrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICB2YXIgd2F0Y2hlciA9IHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMgJiYgdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1trZXldO1xuICAgIGlmICh3YXRjaGVyKSB7XG4gICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHsvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgd2F0Y2hlci5kZXBlbmQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdldHRlckludm9rZXIoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCB0aGlzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSwgbWV0aG9kcykge1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgZm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBtZXRob2RzW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIHR5cGUgXFxcIlwiICsgKHR5cGVvZiBtZXRob2RzW2tleV0pICsgXCJcXFwiIGluIHRoZSBjb21wb25lbnQgZGVmaW5pdGlvbi4gXCIgK1xuICAgICAgICAgIFwiRGlkIHlvdSByZWZlcmVuY2UgdGhlIGZ1bmN0aW9uIGNvcnJlY3RseT9cIixcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICgoa2V5IGluIHZtKSAmJiBpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY29uZmxpY3RzIHdpdGggYW4gZXhpc3RpbmcgVnVlIGluc3RhbmNlIG1ldGhvZC4gXCIgK1xuICAgICAgICAgIFwiQXZvaWQgZGVmaW5pbmcgY29tcG9uZW50IG1ldGhvZHMgdGhhdCBzdGFydCB3aXRoIF8gb3IgJC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB2bVtrZXldID0gdHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJyA/IG5vb3AgOiBiaW5kKG1ldGhvZHNba2V5XSwgdm0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRXYXRjaCAodm0sIHdhdGNoKSB7XG4gIGZvciAodmFyIGtleSBpbiB3YXRjaCkge1xuICAgIHZhciBoYW5kbGVyID0gd2F0Y2hba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcltpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgaGFuZGxlcixcbiAgb3B0aW9uc1xuKSB7XG4gIGlmIChpc1BsYWluT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgb3B0aW9ucyA9IGhhbmRsZXI7XG4gICAgaGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlcjtcbiAgfVxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICB9XG4gIHJldHVybiB2bS4kd2F0Y2goZXhwT3JGbiwgaGFuZGxlciwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gc3RhdGVNaXhpbiAoVnVlKSB7XG4gIC8vIGZsb3cgc29tZWhvdyBoYXMgcHJvYmxlbXMgd2l0aCBkaXJlY3RseSBkZWNsYXJlZCBkZWZpbml0aW9uIG9iamVjdFxuICAvLyB3aGVuIHVzaW5nIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgc28gd2UgaGF2ZSB0byBwcm9jZWR1cmFsbHkgYnVpbGQgdXBcbiAgLy8gdGhlIG9iamVjdCBoZXJlLlxuICB2YXIgZGF0YURlZiA9IHt9O1xuICBkYXRhRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfTtcbiAgdmFyIHByb3BzRGVmID0ge307XG4gIHByb3BzRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Byb3BzIH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGF0YURlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgcmVwbGFjaW5nIGluc3RhbmNlIHJvb3QgJGRhdGEuICcgK1xuICAgICAgICAnVXNlIG5lc3RlZCBkYXRhIHByb3BlcnRpZXMgaW5zdGVhZC4nLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH07XG4gICAgcHJvcHNEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcIiRwcm9wcyBpcyByZWFkb25seS5cIiwgdGhpcyk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRkYXRhJywgZGF0YURlZik7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHByb3BzJywgcHJvcHNEZWYpO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHNldCA9IHNldDtcbiAgVnVlLnByb3RvdHlwZS4kZGVsZXRlID0gZGVsO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHdhdGNoID0gZnVuY3Rpb24gKFxuICAgIGV4cE9yRm4sXG4gICAgY2IsXG4gICAgb3B0aW9uc1xuICApIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KGNiKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKVxuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnVzZXIgPSB0cnVlO1xuICAgIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5pbW1lZGlhdGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiLmNhbGwodm0sIHdhdGNoZXIudmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHZtLCAoXCJjYWxsYmFjayBmb3IgaW1tZWRpYXRlIHdhdGNoZXIgXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gdW53YXRjaEZuICgpIHtcbiAgICAgIHdhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkJDMgPSAwO1xuXG5mdW5jdGlvbiBpbml0TWl4aW4gKFZ1ZSkge1xuICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGEgdWlkXG4gICAgdm0uX3VpZCA9IHVpZCQzKys7XG5cbiAgICB2YXIgc3RhcnRUYWcsIGVuZFRhZztcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgc3RhcnRUYWcgPSBcInZ1ZS1wZXJmLXN0YXJ0OlwiICsgKHZtLl91aWQpO1xuICAgICAgZW5kVGFnID0gXCJ2dWUtcGVyZi1lbmQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICB9XG5cbiAgICAvLyBhIGZsYWcgdG8gYXZvaWQgdGhpcyBiZWluZyBvYnNlcnZlZFxuICAgIHZtLl9pc1Z1ZSA9IHRydWU7XG4gICAgLy8gbWVyZ2Ugb3B0aW9uc1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuX2lzQ29tcG9uZW50KSB7XG4gICAgICAvLyBvcHRpbWl6ZSBpbnRlcm5hbCBjb21wb25lbnQgaW5zdGFudGlhdGlvblxuICAgICAgLy8gc2luY2UgZHluYW1pYyBvcHRpb25zIG1lcmdpbmcgaXMgcHJldHR5IHNsb3csIGFuZCBub25lIG9mIHRoZVxuICAgICAgLy8gaW50ZXJuYWwgY29tcG9uZW50IG9wdGlvbnMgbmVlZHMgc3BlY2lhbCB0cmVhdG1lbnQuXG4gICAgICBpbml0SW50ZXJuYWxDb21wb25lbnQodm0sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS4kb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgICAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyh2bS5jb25zdHJ1Y3RvciksXG4gICAgICAgIG9wdGlvbnMgfHwge30sXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpbml0UHJveHkodm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICB9XG4gICAgLy8gZXhwb3NlIHJlYWwgc2VsZlxuICAgIHZtLl9zZWxmID0gdm07XG4gICAgaW5pdExpZmVjeWNsZSh2bSk7XG4gICAgaW5pdEV2ZW50cyh2bSk7XG4gICAgaW5pdFJlbmRlcih2bSk7XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVDcmVhdGUnKTtcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBpbml0SW5qZWN0aW9ucyh2bSk7IC8vIHJlc29sdmUgaW5qZWN0aW9ucyBiZWZvcmUgZGF0YS9wcm9wcyAgXG4gICAgaW5pdFN0YXRlKHZtKTtcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBpbml0UHJvdmlkZSh2bSk7IC8vIHJlc29sdmUgcHJvdmlkZSBhZnRlciBkYXRhL3Byb3BzXG4gICAgIXZtLl8kZmFsbGJhY2sgJiYgY2FsbEhvb2sodm0sICdjcmVhdGVkJyk7ICAgICAgXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgdm0uX25hbWUgPSBmb3JtYXRDb21wb25lbnROYW1lKHZtLCBmYWxzZSk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArICh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICB9XG5cbiAgICBpZiAodm0uJG9wdGlvbnMuZWwpIHtcbiAgICAgIHZtLiRtb3VudCh2bS4kb3B0aW9ucy5lbCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0SW50ZXJuYWxDb21wb25lbnQgKHZtLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKHZtLmNvbnN0cnVjdG9yLm9wdGlvbnMpO1xuICAvLyBkb2luZyB0aGlzIGJlY2F1c2UgaXQncyBmYXN0ZXIgdGhhbiBkeW5hbWljIGVudW1lcmF0aW9uLlxuICB2YXIgcGFyZW50Vm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgb3B0cy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgb3B0cy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcblxuICB2YXIgdm5vZGVDb21wb25lbnRPcHRpb25zID0gcGFyZW50Vm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgb3B0cy5wcm9wc0RhdGEgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhO1xuICBvcHRzLl9wYXJlbnRMaXN0ZW5lcnMgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzO1xuICBvcHRzLl9yZW5kZXJDaGlsZHJlbiA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5jaGlsZHJlbjtcbiAgb3B0cy5fY29tcG9uZW50VGFnID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnRhZztcblxuICBpZiAob3B0aW9ucy5yZW5kZXIpIHtcbiAgICBvcHRzLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgIG9wdHMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgaWYgKEN0b3Iuc3VwZXIpIHtcbiAgICB2YXIgc3VwZXJPcHRpb25zID0gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yLnN1cGVyKTtcbiAgICB2YXIgY2FjaGVkU3VwZXJPcHRpb25zID0gQ3Rvci5zdXBlck9wdGlvbnM7XG4gICAgaWYgKHN1cGVyT3B0aW9ucyAhPT0gY2FjaGVkU3VwZXJPcHRpb25zKSB7XG4gICAgICAvLyBzdXBlciBvcHRpb24gY2hhbmdlZCxcbiAgICAgIC8vIG5lZWQgdG8gcmVzb2x2ZSBuZXcgb3B0aW9ucy5cbiAgICAgIEN0b3Iuc3VwZXJPcHRpb25zID0gc3VwZXJPcHRpb25zO1xuICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBsYXRlLW1vZGlmaWVkL2F0dGFjaGVkIG9wdGlvbnMgKCM0OTc2KVxuICAgICAgdmFyIG1vZGlmaWVkT3B0aW9ucyA9IHJlc29sdmVNb2RpZmllZE9wdGlvbnMoQ3Rvcik7XG4gICAgICAvLyB1cGRhdGUgYmFzZSBleHRlbmQgb3B0aW9uc1xuICAgICAgaWYgKG1vZGlmaWVkT3B0aW9ucykge1xuICAgICAgICBleHRlbmQoQ3Rvci5leHRlbmRPcHRpb25zLCBtb2RpZmllZE9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhzdXBlck9wdGlvbnMsIEN0b3IuZXh0ZW5kT3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tvcHRpb25zLm5hbWVdID0gQ3RvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgbW9kaWZpZWQ7XG4gIHZhciBsYXRlc3QgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBzZWFsZWQgPSBDdG9yLnNlYWxlZE9wdGlvbnM7XG4gIGZvciAodmFyIGtleSBpbiBsYXRlc3QpIHtcbiAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XG4gICAgICBpZiAoIW1vZGlmaWVkKSB7IG1vZGlmaWVkID0ge307IH1cbiAgICAgIG1vZGlmaWVkW2tleV0gPSBsYXRlc3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGlmaWVkXG59XG5cbmZ1bmN0aW9uIFZ1ZSAob3B0aW9ucykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICEodGhpcyBpbnN0YW5jZW9mIFZ1ZSlcbiAgKSB7XG4gICAgd2FybignVnVlIGlzIGEgY29uc3RydWN0b3IgYW5kIHNob3VsZCBiZSBjYWxsZWQgd2l0aCB0aGUgYG5ld2Aga2V5d29yZCcpO1xuICB9XG4gIHRoaXMuX2luaXQob3B0aW9ucyk7XG59XG5cbmluaXRNaXhpbihWdWUpO1xuc3RhdGVNaXhpbihWdWUpO1xuZXZlbnRzTWl4aW4oVnVlKTtcbmxpZmVjeWNsZU1peGluKFZ1ZSk7XG5yZW5kZXJNaXhpbihWdWUpO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFVzZSAoVnVlKSB7XG4gIFZ1ZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgdmFyIGluc3RhbGxlZFBsdWdpbnMgPSAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyB8fCAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyA9IFtdKSk7XG4gICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaW5kZXhPZihwbHVnaW4pID4gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGluc3RhbGxlZFBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0TWl4aW4kMSAoVnVlKSB7XG4gIFZ1ZS5taXhpbiA9IGZ1bmN0aW9uIChtaXhpbikge1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1peGluKTtcbiAgICByZXR1cm4gdGhpc1xuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV4dGVuZCAoVnVlKSB7XG4gIC8qKlxuICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICovXG4gIFZ1ZS5jaWQgPSAwO1xuICB2YXIgY2lkID0gMTtcblxuICAvKipcbiAgICogQ2xhc3MgaW5oZXJpdGFuY2VcbiAgICovXG4gIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xuICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuICAgIHZhciBTdXBlciA9IHRoaXM7XG4gICAgdmFyIFN1cGVySWQgPSBTdXBlci5jaWQ7XG4gICAgdmFyIGNhY2hlZEN0b3JzID0gZXh0ZW5kT3B0aW9ucy5fQ3RvciB8fCAoZXh0ZW5kT3B0aW9ucy5fQ3RvciA9IHt9KTtcbiAgICBpZiAoY2FjaGVkQ3RvcnNbU3VwZXJJZF0pIHtcbiAgICAgIHJldHVybiBjYWNoZWRDdG9yc1tTdXBlcklkXVxuICAgIH1cblxuICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBuYW1lKSB7XG4gICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIFN1YiA9IGZ1bmN0aW9uIFZ1ZUNvbXBvbmVudCAob3B0aW9ucykge1xuICAgICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgICB9O1xuICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YjtcbiAgICBTdWIuY2lkID0gY2lkKys7XG4gICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICBTdXBlci5vcHRpb25zLFxuICAgICAgZXh0ZW5kT3B0aW9uc1xuICAgICk7XG4gICAgU3ViWydzdXBlciddID0gU3VwZXI7XG5cbiAgICAvLyBGb3IgcHJvcHMgYW5kIGNvbXB1dGVkIHByb3BlcnRpZXMsIHdlIGRlZmluZSB0aGUgcHJveHkgZ2V0dGVycyBvblxuICAgIC8vIHRoZSBWdWUgaW5zdGFuY2VzIGF0IGV4dGVuc2lvbiB0aW1lLCBvbiB0aGUgZXh0ZW5kZWQgcHJvdG90eXBlLiBUaGlzXG4gICAgLy8gYXZvaWRzIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBjYWxscyBmb3IgZWFjaCBpbnN0YW5jZSBjcmVhdGVkLlxuICAgIGlmIChTdWIub3B0aW9ucy5wcm9wcykge1xuICAgICAgaW5pdFByb3BzJDEoU3ViKTtcbiAgICB9XG4gICAgaWYgKFN1Yi5vcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICBpbml0Q29tcHV0ZWQkMShTdWIpO1xuICAgIH1cblxuICAgIC8vIGFsbG93IGZ1cnRoZXIgZXh0ZW5zaW9uL21peGluL3BsdWdpbiB1c2FnZVxuICAgIFN1Yi5leHRlbmQgPSBTdXBlci5leHRlbmQ7XG4gICAgU3ViLm1peGluID0gU3VwZXIubWl4aW47XG4gICAgU3ViLnVzZSA9IFN1cGVyLnVzZTtcblxuICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXG4gICAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgU3ViW3R5cGVdID0gU3VwZXJbdHlwZV07XG4gICAgfSk7XG4gICAgLy8gZW5hYmxlIHJlY3Vyc2l2ZSBzZWxmLWxvb2t1cFxuICAgIGlmIChuYW1lKSB7XG4gICAgICBTdWIub3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gU3ViO1xuICAgIH1cblxuICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXG4gICAgLy8gbGF0ZXIgYXQgaW5zdGFudGlhdGlvbiB3ZSBjYW4gY2hlY2sgaWYgU3VwZXIncyBvcHRpb25zIGhhdmVcbiAgICAvLyBiZWVuIHVwZGF0ZWQuXG4gICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XG4gICAgU3ViLmV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zO1xuICAgIFN1Yi5zZWFsZWRPcHRpb25zID0gZXh0ZW5kKHt9LCBTdWIub3B0aW9ucyk7XG5cbiAgICAvLyBjYWNoZSBjb25zdHJ1Y3RvclxuICAgIGNhY2hlZEN0b3JzW1N1cGVySWRdID0gU3ViO1xuICAgIHJldHVybiBTdWJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzJDEgKENvbXApIHtcbiAgdmFyIHByb3BzID0gQ29tcC5vcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBwcm94eShDb21wLnByb3RvdHlwZSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQkMSAoQ29tcCkge1xuICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIGRlZmluZUNvbXB1dGVkKENvbXAucHJvdG90eXBlLCBrZXksIGNvbXB1dGVkW2tleV0pO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0QXNzZXRSZWdpc3RlcnMgKFZ1ZSkge1xuICAvKipcbiAgICogQ3JlYXRlIGFzc2V0IHJlZ2lzdHJhdGlvbiBtZXRob2RzLlxuICAgKi9cbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChcbiAgICAgIGlkLFxuICAgICAgZGVmaW5pdGlvblxuICAgICkge1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8IGlkO1xuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnZGlyZWN0aXZlJyAmJiB0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRlZmluaXRpb24gPSB7IGJpbmQ6IGRlZmluaXRpb24sIHVwZGF0ZTogZGVmaW5pdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF0gPSBkZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUgKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMgKHBhdHRlcm4sIG5hbWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi5pbmRleE9mKG5hbWUpID4gLTFcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGF0dGVybi5zcGxpdCgnLCcpLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKGlzUmVnRXhwKHBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChuYW1lKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlIChrZWVwQWxpdmVJbnN0YW5jZSwgZmlsdGVyKSB7XG4gIHZhciBjYWNoZSA9IGtlZXBBbGl2ZUluc3RhbmNlLmNhY2hlO1xuICB2YXIga2V5cyA9IGtlZXBBbGl2ZUluc3RhbmNlLmtleXM7XG4gIHZhciBfdm5vZGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5fdm5vZGU7XG4gIGZvciAodmFyIGtleSBpbiBjYWNoZSkge1xuICAgIHZhciBjYWNoZWROb2RlID0gY2FjaGVba2V5XTtcbiAgICBpZiAoY2FjaGVkTm9kZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNhY2hlZE5vZGUuY29tcG9uZW50T3B0aW9ucyk7XG4gICAgICBpZiAobmFtZSAmJiAhZmlsdGVyKG5hbWUpKSB7XG4gICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5LCBrZXlzLCBfdm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKFxuICBjYWNoZSxcbiAga2V5LFxuICBrZXlzLFxuICBjdXJyZW50XG4pIHtcbiAgdmFyIGNhY2hlZCQkMSA9IGNhY2hlW2tleV07XG4gIGlmIChjYWNoZWQkJDEgJiYgKCFjdXJyZW50IHx8IGNhY2hlZCQkMS50YWcgIT09IGN1cnJlbnQudGFnKSkge1xuICAgIGNhY2hlZCQkMS5jb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICB9XG4gIGNhY2hlW2tleV0gPSBudWxsO1xuICByZW1vdmUoa2V5cywga2V5KTtcbn1cblxudmFyIHBhdHRlcm5UeXBlcyA9IFtTdHJpbmcsIFJlZ0V4cCwgQXJyYXldO1xuXG52YXIgS2VlcEFsaXZlID0ge1xuICBuYW1lOiAna2VlcC1hbGl2ZScsXG4gIGFic3RyYWN0OiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgaW5jbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIGV4Y2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICBtYXg6IFtTdHJpbmcsIE51bWJlcl1cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgfSxcblxuICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCAoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIHBydW5lQ2FjaGVFbnRyeSh0aGlzLmNhY2hlLCBrZXksIHRoaXMua2V5cyk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy4kd2F0Y2goJ2luY2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gICAgdGhpcy4kd2F0Y2goJ2V4Y2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgc2xvdCA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgdmFyIHZub2RlID0gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChzbG90KTtcbiAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgaWYgKGNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICAgIC8vIGNoZWNrIHBhdHRlcm5cbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjb21wb25lbnRPcHRpb25zKTtcbiAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgdmFyIGluY2x1ZGUgPSByZWYuaW5jbHVkZTtcbiAgICAgIHZhciBleGNsdWRlID0gcmVmLmV4Y2x1ZGU7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG5vdCBpbmNsdWRlZFxuICAgICAgICAoaW5jbHVkZSAmJiAoIW5hbWUgfHwgIW1hdGNoZXMoaW5jbHVkZSwgbmFtZSkpKSB8fFxuICAgICAgICAvLyBleGNsdWRlZFxuICAgICAgICAoZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHZub2RlXG4gICAgICB9XG5cbiAgICAgIHZhciByZWYkMSA9IHRoaXM7XG4gICAgICB2YXIgY2FjaGUgPSByZWYkMS5jYWNoZTtcbiAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXkgPT0gbnVsbFxuICAgICAgICAvLyBzYW1lIGNvbnN0cnVjdG9yIG1heSBnZXQgcmVnaXN0ZXJlZCBhcyBkaWZmZXJlbnQgbG9jYWwgY29tcG9uZW50c1xuICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgID8gY29tcG9uZW50T3B0aW9ucy5DdG9yLmNpZCArIChjb21wb25lbnRPcHRpb25zLnRhZyA/IChcIjo6XCIgKyAoY29tcG9uZW50T3B0aW9ucy50YWcpKSA6ICcnKVxuICAgICAgICA6IHZub2RlLmtleTtcbiAgICAgIGlmIChjYWNoZVtrZXldKSB7XG4gICAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY2FjaGVba2V5XS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgLy8gbWFrZSBjdXJyZW50IGtleSBmcmVzaGVzdFxuICAgICAgICByZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gdm5vZGU7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAvLyBwcnVuZSBvbGRlc3QgZW50cnlcbiAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXlzWzBdLCBrZXlzLCB0aGlzLl92bm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGUgfHwgKHNsb3QgJiYgc2xvdFswXSlcbiAgfVxufTtcblxudmFyIGJ1aWx0SW5Db21wb25lbnRzID0ge1xuICBLZWVwQWxpdmU6IEtlZXBBbGl2ZVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRHbG9iYWxBUEkgKFZ1ZSkge1xuICAvLyBjb25maWdcbiAgdmFyIGNvbmZpZ0RlZiA9IHt9O1xuICBjb25maWdEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnOyB9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbmZpZ0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnRG8gbm90IHJlcGxhY2UgdGhlIFZ1ZS5jb25maWcgb2JqZWN0LCBzZXQgaW5kaXZpZHVhbCBmaWVsZHMgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ2NvbmZpZycsIGNvbmZpZ0RlZik7XG5cbiAgLy8gZXhwb3NlZCB1dGlsIG1ldGhvZHMuXG4gIC8vIE5PVEU6IHRoZXNlIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIC0gYXZvaWQgcmVseWluZyBvblxuICAvLyB0aGVtIHVubGVzcyB5b3UgYXJlIGF3YXJlIG9mIHRoZSByaXNrLlxuICBWdWUudXRpbCA9IHtcbiAgICB3YXJuOiB3YXJuLFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIG1lcmdlT3B0aW9uczogbWVyZ2VPcHRpb25zLFxuICAgIGRlZmluZVJlYWN0aXZlOiBkZWZpbmVSZWFjdGl2ZSQkMVxuICB9O1xuXG4gIFZ1ZS5zZXQgPSBzZXQ7XG4gIFZ1ZS5kZWxldGUgPSBkZWw7XG4gIFZ1ZS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4gIC8vIDIuNiBleHBsaWNpdCBvYnNlcnZhYmxlIEFQSVxuICBWdWUub2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBvYnNlcnZlKG9iaik7XG4gICAgcmV0dXJuIG9ialxuICB9O1xuXG4gIFZ1ZS5vcHRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZS5vcHRpb25zW3R5cGUgKyAncyddID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfSk7XG5cbiAgLy8gdGhpcyBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBcImJhc2VcIiBjb25zdHJ1Y3RvciB0byBleHRlbmQgYWxsIHBsYWluLW9iamVjdFxuICAvLyBjb21wb25lbnRzIHdpdGggaW4gV2VleCdzIG11bHRpLWluc3RhbmNlIHNjZW5hcmlvcy5cbiAgVnVlLm9wdGlvbnMuX2Jhc2UgPSBWdWU7XG5cbiAgZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIGJ1aWx0SW5Db21wb25lbnRzKTtcblxuICBpbml0VXNlKFZ1ZSk7XG4gIGluaXRNaXhpbiQxKFZ1ZSk7XG4gIGluaXRFeHRlbmQoVnVlKTtcbiAgaW5pdEFzc2V0UmVnaXN0ZXJzKFZ1ZSk7XG59XG5cbmluaXRHbG9iYWxBUEkoVnVlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckaXNTZXJ2ZXInLCB7XG4gIGdldDogaXNTZXJ2ZXJSZW5kZXJpbmdcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRzc3JDb250ZXh0Jywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gdGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dFxuICB9XG59KTtcblxuLy8gZXhwb3NlIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IGZvciBzc3IgcnVudGltZSBoZWxwZXIgaW5zdGFsbGF0aW9uXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnRnVuY3Rpb25hbFJlbmRlckNvbnRleHQnLCB7XG4gIHZhbHVlOiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dFxufSk7XG5cblZ1ZS52ZXJzaW9uID0gJzIuNi4xMSc7XG5cbi8qKlxuICogaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1RlbmNlbnQvd2VzdG9yZS9tYXN0ZXIvcGFja2FnZXMvd2VzdG9yZS91dGlscy9kaWZmLmpzXG4gKi9cbnZhciBBUlJBWVRZUEUgPSAnW29iamVjdCBBcnJheV0nO1xudmFyIE9CSkVDVFRZUEUgPSAnW29iamVjdCBPYmplY3RdJztcbi8vIGNvbnN0IEZVTkNUSU9OVFlQRSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSdcblxuZnVuY3Rpb24gZGlmZihjdXJyZW50LCBwcmUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgc3luY0tleXMoY3VycmVudCwgcHJlKTtcbiAgICBfZGlmZihjdXJyZW50LCBwcmUsICcnLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gc3luY0tleXMoY3VycmVudCwgcHJlKSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IHByZSkgeyByZXR1cm4gfVxuICAgIHZhciByb290Q3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnQpO1xuICAgIHZhciByb290UHJlVHlwZSA9IHR5cGUocHJlKTtcbiAgICBpZiAocm9vdEN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUgJiYgcm9vdFByZVR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZihPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGggPj0gT2JqZWN0LmtleXMocHJlKS5sZW5ndGgpe1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByZSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRba2V5XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3luY0tleXMoY3VycmVudFZhbHVlLCBwcmVba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyb290Q3VycmVudFR5cGUgPT0gQVJSQVlUWVBFICYmIHJvb3RQcmVUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPj0gcHJlLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc3luY0tleXMoY3VycmVudFtpbmRleF0sIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9kaWZmKGN1cnJlbnQsIHByZSwgcGF0aCwgcmVzdWx0KSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IHByZSkgeyByZXR1cm4gfVxuICAgIHZhciByb290Q3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnQpO1xuICAgIHZhciByb290UHJlVHlwZSA9IHR5cGUocHJlKTtcbiAgICBpZiAocm9vdEN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgaWYgKHJvb3RQcmVUeXBlICE9IE9CSkVDVFRZUEUgfHwgT2JqZWN0LmtleXMoY3VycmVudCkubGVuZ3RoIDwgT2JqZWN0LmtleXMocHJlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudFtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBwcmVWYWx1ZSA9IHByZVtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJlVHlwZSA9IHR5cGUocHJlVmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VHlwZSAhPSBBUlJBWVRZUEUgJiYgY3VycmVudFR5cGUgIT0gT0JKRUNUVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFIOatpOWkhOWwhiAhPSDkv67mlLnkuLogIT0944CC5raJ5Y+K5Zyw5pa55aSq5aSa5oGQ5oCV5rWL6K+V5LiN5Yiw77yM5aaC5p6c5Ye6546w5pWw5o2u5a+55q+U6Zeu6aKY77yM5bCG5YW25L+u5pS55Zue5p2l44CCXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHByZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVUeXBlICE9IEFSUkFZVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlLmxlbmd0aCA8IHByZVZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RpZmYoaXRlbSwgcHJlVmFsdWVbaW5kZXhdLCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSArICdbJyArIGluZGV4ICsgJ10nLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VHlwZSA9PSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVUeXBlICE9IE9CSkVDVFRZUEUgfHwgT2JqZWN0LmtleXMoY3VycmVudFZhbHVlKS5sZW5ndGggPCBPYmplY3Qua2V5cyhwcmVWYWx1ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHN1YktleSBpbiBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlmZihjdXJyZW50VmFsdWVbc3ViS2V5XSwgcHJlVmFsdWVbc3ViS2V5XSwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXkgKyAnLicgKyBzdWJLZXksIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudCkgbG9vcCgga2V5ICk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJvb3RDdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUpIHtcbiAgICAgICAgaWYgKHJvb3RQcmVUeXBlICE9IEFSUkFZVFlQRSkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPCBwcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RpZmYoaXRlbSwgcHJlW2luZGV4XSwgcGF0aCArICdbJyArIGluZGV4ICsgJ10nLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRSZXN1bHQocmVzdWx0LCBrLCB2KSB7XG4gICAgLy8gaWYgKHR5cGUodikgIT0gRlVOQ1RJT05UWVBFKSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IHY7XG4gICAgLy8gfVxufVxuXG5mdW5jdGlvbiB0eXBlKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZmx1c2hDYWxsYmFja3MkMSh2bSkge1xuICAgIGlmICh2bS5fX25leHRfdGlja19jYWxsYmFja3MgJiYgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRykge1xuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UgPSB2bS4kc2NvcGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyAoK25ldyBEYXRlKSArICddWycgKyAobXBJbnN0YW5jZS5pcyB8fCBtcEluc3RhbmNlLnJvdXRlKSArICddWycgKyB2bS5fdWlkICtcbiAgICAgICAgICAgICAgICAnXTpmbHVzaENhbGxiYWNrc1snICsgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCArICddJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvcGllcyA9IHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5zbGljZSgwKTtcbiAgICAgICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3BpZXNbaV0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzUmVuZGVyV2F0Y2hlcih2bSkge1xuICAgIHJldHVybiBxdWV1ZS5maW5kKGZ1bmN0aW9uICh3YXRjaGVyKSB7IHJldHVybiB2bS5fd2F0Y2hlciA9PT0gd2F0Y2hlcjsgfSlcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2skMSh2bSwgY2IpIHtcbiAgICAvLzEubmV4dFRpY2sg5LmL5YmNIOW3siBzZXREYXRhIOS4lCBzZXREYXRhIOi/mOacquWbnuiwg+WujOaIkFxuICAgIC8vMi5uZXh0VGljayDkuYvliY3lrZjlnKggcmVuZGVyIHdhdGNoZXJcbiAgICBpZiAoIXZtLl9fbmV4dF90aWNrX3BlbmRpbmcgJiYgIWhhc1JlbmRlcldhdGNoZXIodm0pKSB7XG4gICAgICAgIGlmKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpe1xuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UgPSB2bS4kc2NvcGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyAoK25ldyBEYXRlKSArICddWycgKyAobXBJbnN0YW5jZS5pcyB8fCBtcEluc3RhbmNlLnJvdXRlKSArICddWycgKyB2bS5fdWlkICtcbiAgICAgICAgICAgICAgICAnXTpuZXh0VnVlVGljaycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0VGljayhjYiwgdm0pXG4gICAgfWVsc2V7XG4gICAgICAgIGlmKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpe1xuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UkMSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlJDEuaXMgfHwgbXBJbnN0YW5jZSQxLnJvdXRlKSArICddWycgKyB2bS5fdWlkICtcbiAgICAgICAgICAgICAgICAnXTpuZXh0TVBUaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIF9yZXNvbHZlO1xuICAgIGlmICghdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzKSB7XG4gICAgICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcyA9IFtdO1xuICAgIH1cbiAgICB2bS5fX25leHRfdGlja19jYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYi5jYWxsKHZtKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgJ25leHRUaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX3Jlc29sdmUpIHtcbiAgICAgICAgICAgIF9yZXNvbHZlKHZtKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNsb25lV2l0aERhdGEodm0pIHtcbiAgLy8g56Gu5L+d5b2T5YmNIHZtIOaJgOacieaVsOaNruiiq+WQjOatpVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGRhdGFLZXlzID0gW10uY29uY2F0KFxuICAgIE9iamVjdC5rZXlzKHZtLl9kYXRhIHx8IHt9KSxcbiAgICBPYmplY3Qua2V5cyh2bS5fY29tcHV0ZWRXYXRjaGVycyB8fCB7fSkpO1xuXG4gIGRhdGFLZXlzLnJlZHVjZShmdW5jdGlvbihyZXQsIGtleSkge1xuICAgIHJldFtrZXldID0gdm1ba2V5XTtcbiAgICByZXR1cm4gcmV0XG4gIH0sIHJldCk7XG5cbiAgLy8gdnVlLWNvbXBvc2l0aW9uLWFwaVxuICB2YXIgY29tcG9zaXRpb25BcGlTdGF0ZSA9IHZtLl9fY29tcG9zaXRpb25fYXBpX3N0YXRlX18gfHwgdm0uX19zZWNyZXRfdmZhX3N0YXRlX187XG4gIHZhciByYXdCaW5kaW5ncyA9IGNvbXBvc2l0aW9uQXBpU3RhdGUgJiYgY29tcG9zaXRpb25BcGlTdGF0ZS5yYXdCaW5kaW5ncztcbiAgaWYgKHJhd0JpbmRpbmdzKSB7XG4gICAgT2JqZWN0LmtleXMocmF3QmluZGluZ3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0W2tleV0gPSB2bVtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgLy9UT0RPIOmcgOimgeaKiuaXoOeUqOaVsOaNruWkhOeQhuaOie+8jOavlOWmgiBsaXN0PT5sMCDliJkgbGlzdCDpnIDopoHnp7vpmaTvvIzlkKbliJnlpJrkvKDovpPkuIDku73mlbDmja5cbiAgT2JqZWN0LmFzc2lnbihyZXQsIHZtLiRtcC5kYXRhIHx8IHt9KTtcbiAgaWYgKFxuICAgIEFycmF5LmlzQXJyYXkodm0uJG9wdGlvbnMuYmVoYXZpb3JzKSAmJlxuICAgIHZtLiRvcHRpb25zLmJlaGF2aW9ycy5pbmRleE9mKCd1bmk6Ly9mb3JtLWZpZWxkJykgIT09IC0xXG4gICkgeyAvL2Zvcm0tZmllbGRcbiAgICByZXRbJ25hbWUnXSA9IHZtLm5hbWU7XG4gICAgcmV0Wyd2YWx1ZSddID0gdm0udmFsdWU7XG4gIH1cblxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXQpKVxufVxuXG52YXIgcGF0Y2ggPSBmdW5jdGlvbihvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHZub2RlID09PSBudWxsKSB7IC8vZGVzdHJveVxuICAgIHJldHVyblxuICB9XG4gIGlmICh0aGlzLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IHRoaXMubXBUeXBlID09PSAnY29tcG9uZW50Jykge1xuICAgIHZhciBtcEluc3RhbmNlID0gdGhpcy4kc2NvcGU7XG4gICAgdmFyIGRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRyeSB7XG4gICAgICBkYXRhID0gY2xvbmVXaXRoRGF0YSh0aGlzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gICAgZGF0YS5fX3dlYnZpZXdJZF9fID0gbXBJbnN0YW5jZS5kYXRhLl9fd2Vidmlld0lkX187XG4gICAgdmFyIG1wRGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IC8v5LuF5ZCM5q2lIGRhdGEg5Lit5pyJ55qE5pWw5o2uXG4gICAgICBtcERhdGFba2V5XSA9IG1wSW5zdGFuY2UuZGF0YVtrZXldO1xuICAgIH0pO1xuICAgIHZhciBkaWZmRGF0YSA9IHRoaXMuJHNob3VsZERpZmZEYXRhID09PSBmYWxzZSA/IGRhdGEgOiBkaWZmKGRhdGEsIG1wRGF0YSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmZEYXRhKS5sZW5ndGgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHRoaXMuX3VpZCArXG4gICAgICAgICAgJ13lt67ph4/mm7TmlrAnLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRpZmZEYXRhKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fbmV4dF90aWNrX3BlbmRpbmcgPSB0cnVlO1xuICAgICAgbXBJbnN0YW5jZS5zZXREYXRhKGRpZmZEYXRhLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMkMS5fX25leHRfdGlja19wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGZsdXNoQ2FsbGJhY2tzJDEodGhpcyQxKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbHVzaENhbGxiYWNrcyQxKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5UmVuZGVyKCkge1xuXG59XG5cbmZ1bmN0aW9uIG1vdW50Q29tcG9uZW50JDEoXG4gIHZtLFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgaWYgKCF2bS5tcFR5cGUpIHsvL21haW4uanMg5Lit55qEIG5ldyBWdWVcbiAgICByZXR1cm4gdm1cbiAgfVxuICBpZiAodm0ubXBUeXBlID09PSAnYXBwJykge1xuICAgIHZtLiRvcHRpb25zLnJlbmRlciA9IGNyZWF0ZUVtcHR5UmVuZGVyO1xuICB9XG4gIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlSZW5kZXI7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCh2bS4kb3B0aW9ucy50ZW1wbGF0ZSAmJiB2bS4kb3B0aW9ucy50ZW1wbGF0ZS5jaGFyQXQoMCkgIT09ICcjJykgfHxcbiAgICAgICAgdm0uJG9wdGlvbnMuZWwgfHwgZWwpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkIG9mIFZ1ZSB3aGVyZSB0aGUgdGVtcGxhdGUgJyArXG4gICAgICAgICAgJ2NvbXBpbGVyIGlzIG5vdCBhdmFpbGFibGUuIEVpdGhlciBwcmUtY29tcGlsZSB0aGUgdGVtcGxhdGVzIGludG8gJyArXG4gICAgICAgICAgJ3JlbmRlciBmdW5jdGlvbnMsIG9yIHVzZSB0aGUgY29tcGlsZXItaW5jbHVkZWQgYnVpbGQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnRmFpbGVkIHRvIG1vdW50IGNvbXBvbmVudDogdGVtcGxhdGUgb3IgcmVuZGVyIGZ1bmN0aW9uIG5vdCBkZWZpbmVkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gICF2bS5fJGZhbGxiYWNrICYmIGNhbGxIb29rKHZtLCAnYmVmb3JlTW91bnQnKTtcblxuICB2YXIgdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZtLl91cGRhdGUodm0uX3JlbmRlcigpLCBoeWRyYXRpbmcpO1xuICB9O1xuXG4gIC8vIHdlIHNldCB0aGlzIHRvIHZtLl93YXRjaGVyIGluc2lkZSB0aGUgd2F0Y2hlcidzIGNvbnN0cnVjdG9yXG4gIC8vIHNpbmNlIHRoZSB3YXRjaGVyJ3MgaW5pdGlhbCBwYXRjaCBtYXkgY2FsbCAkZm9yY2VVcGRhdGUgKGUuZy4gaW5zaWRlIGNoaWxkXG4gIC8vIGNvbXBvbmVudCdzIG1vdW50ZWQgaG9vayksIHdoaWNoIHJlbGllcyBvbiB2bS5fd2F0Y2hlciBiZWluZyBhbHJlYWR5IGRlZmluZWRcbiAgbmV3IFdhdGNoZXIodm0sIHVwZGF0ZUNvbXBvbmVudCwgbm9vcCwge1xuICAgIGJlZm9yZTogZnVuY3Rpb24gYmVmb3JlKCkge1xuICAgICAgaWYgKHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZVVwZGF0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdHJ1ZSAvKiBpc1JlbmRlcldhdGNoZXIgKi8pO1xuICBoeWRyYXRpbmcgPSBmYWxzZTtcbiAgcmV0dXJuIHZtXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZW5kZXJDbGFzcyAoXG4gIHN0YXRpY0NsYXNzLFxuICBkeW5hbWljQ2xhc3Ncbikge1xuICBpZiAoaXNEZWYoc3RhdGljQ2xhc3MpIHx8IGlzRGVmKGR5bmFtaWNDbGFzcykpIHtcbiAgICByZXR1cm4gY29uY2F0KHN0YXRpY0NsYXNzLCBzdHJpbmdpZnlDbGFzcyhkeW5hbWljQ2xhc3MpKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIGEgPyBiID8gKGEgKyAnICcgKyBiKSA6IGEgOiAoYiB8fCAnJylcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5Q2xhc3MgKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlBcnJheSh2YWx1ZSlcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeU9iamVjdCh2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlBcnJheSAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgc3RyaW5naWZpZWQ7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGlzRGVmKHN0cmluZ2lmaWVkID0gc3RyaW5naWZ5Q2xhc3ModmFsdWVbaV0pKSAmJiBzdHJpbmdpZmllZCAhPT0gJycpIHtcbiAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgcmVzICs9IHN0cmluZ2lmaWVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeU9iamVjdCAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgbGlzdERlbGltaXRlciA9IC87KD8hW14oXSpcXCkpL2c7XG4gIHZhciBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyAoYmluZGluZ1N0eWxlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICByZXR1cm4gdG9PYmplY3QoYmluZGluZ1N0eWxlKVxuICB9XG4gIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZVN0eWxlVGV4dChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgcmV0dXJuIGJpbmRpbmdTdHlsZVxufVxuXG4vKiAgKi9cblxudmFyIE1QX01FVEhPRFMgPSBbJ2NyZWF0ZVNlbGVjdG9yUXVlcnknLCAnY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXInLCAnc2VsZWN0QWxsQ29tcG9uZW50cycsICdzZWxlY3RDb21wb25lbnQnXTtcblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KG9iaiwgcGF0aCkge1xuICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHZhciBrZXkgPSBwYXJ0c1swXTtcbiAgaWYgKGtleS5pbmRleE9mKCdfXyRuJykgPT09IDApIHsgLy9udW1iZXIgaW5kZXhcbiAgICBrZXkgPSBwYXJzZUludChrZXkucmVwbGFjZSgnX18kbicsICcnKSk7XG4gIH1cbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBvYmpba2V5XVxuICB9XG4gIHJldHVybiBnZXRUYXJnZXQob2JqW2tleV0sIHBhcnRzLnNsaWNlKDEpLmpvaW4oJy4nKSlcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxNaXhpbihWdWUpIHtcblxuICBWdWUuY29uZmlnLmVycm9ySGFuZGxlciA9IGZ1bmN0aW9uKGVyciwgdm0sIGluZm8pIHtcbiAgICBWdWUudXRpbC53YXJuKChcIkVycm9yIGluIFwiICsgaW5mbyArIFwiOiBcXFwiXCIgKyAoZXJyLnRvU3RyaW5nKCkpICsgXCJcXFwiXCIpLCB2bSk7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgdmFyIGFwcCA9IHR5cGVvZiBnZXRBcHAgPT09ICdmdW5jdGlvbicgJiYgZ2V0QXBwKCk7XG4gICAgaWYgKGFwcCAmJiBhcHAub25FcnJvcikge1xuICAgICAgYXBwLm9uRXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9sZEVtaXQgPSBWdWUucHJvdG90eXBlLiRlbWl0O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLiRzY29wZSAmJiBldmVudCkge1xuICAgICAgdGhpcy4kc2NvcGVbJ3RyaWdnZXJFdmVudCddKGV2ZW50LCB7XG4gICAgICAgIF9fYXJnc19fOiB0b0FycmF5KGFyZ3VtZW50cywgMSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb2xkRW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kbmV4dFRpY2sgPSBmdW5jdGlvbihmbikge1xuICAgIHJldHVybiBuZXh0VGljayQxKHRoaXMsIGZuKVxuICB9O1xuXG4gIE1QX01FVEhPRFMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgVnVlLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlW21ldGhvZF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlW21ldGhvZF0oYXJncylcbiAgICAgIH1cbiAgICAgIC8vIG1wLWFsaXBheVxuICAgICAgaWYgKHR5cGVvZiBteSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAobWV0aG9kID09PSAnY3JlYXRlU2VsZWN0b3JRdWVyeScpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICAgICAgcmV0dXJuIG15LmNyZWF0ZVNlbGVjdG9yUXVlcnkoYXJncylcbiAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXInKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgICAgIHJldHVybiBteS5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcihhcmdzKVxuICAgICAgfVxuICAgICAgLy8gVE9ETyBtcC1hbGlwYXkg5pqC5LiN5pSv5oyBIHNlbGVjdEFsbENvbXBvbmVudHMsc2VsZWN0Q29tcG9uZW50XG4gICAgfTtcbiAgfSk7XG5cbiAgVnVlLnByb3RvdHlwZS5fX2luaXRfcHJvdmlkZSA9IGluaXRQcm92aWRlO1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19pbml0X2luamVjdGlvbnMgPSBpbml0SW5qZWN0aW9ucztcblxuICBWdWUucHJvdG90eXBlLl9fY2FsbF9ob29rID0gZnVuY3Rpb24oaG9vaywgYXJncykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGxpZmVjeWNsZSBob29rc1xuICAgIHB1c2hUYXJnZXQoKTtcbiAgICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcbiAgICB2YXIgaW5mbyA9IGhvb2sgKyBcIiBob29rXCI7XG4gICAgdmFyIHJldDtcbiAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgIHJldCA9IGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGhhbmRsZXJzW2ldLCB2bSwgYXJncyA/IFthcmdzXSA6IG51bGwsIHZtLCBpbmZvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZtLl9oYXNIb29rRXZlbnQpIHtcbiAgICAgIHZtLiRlbWl0KCdob29rOicgKyBob29rLCBhcmdzKTtcbiAgICB9XG4gICAgcG9wVGFyZ2V0KCk7XG4gICAgcmV0dXJuIHJldFxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19zZXRfbW9kZWwgPSBmdW5jdGlvbih0YXJnZXQsIGtleSwgdmFsdWUsIG1vZGlmaWVycykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGlmaWVycykpIHtcbiAgICAgIGlmIChtb2RpZmllcnMuaW5kZXhPZigndHJpbScpICE9PSAtMSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RpZmllcnMuaW5kZXhPZignbnVtYmVyJykgIT09IC0xKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5fbih2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0YXJnZXQgPSB0aGlzO1xuICAgIH1cbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19zZXRfc3luYyA9IGZ1bmN0aW9uKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0YXJnZXQgPSB0aGlzO1xuICAgIH1cbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfb3JpZyA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChpdGVtKSkge1xuICAgICAgcmV0dXJuIGl0ZW1bJyRvcmlnJ10gfHwgaXRlbVxuICAgIH1cbiAgICByZXR1cm4gaXRlbVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfdmFsdWUgPSBmdW5jdGlvbihkYXRhUGF0aCwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIGdldFRhcmdldCh0YXJnZXQgfHwgdGhpcywgZGF0YVBhdGgpXG4gIH07XG5cblxuICBWdWUucHJvdG90eXBlLl9fZ2V0X2NsYXNzID0gZnVuY3Rpb24oZHluYW1pY0NsYXNzLCBzdGF0aWNDbGFzcykge1xuICAgIHJldHVybiByZW5kZXJDbGFzcyhzdGF0aWNDbGFzcywgZHluYW1pY0NsYXNzKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfc3R5bGUgPSBmdW5jdGlvbihkeW5hbWljU3R5bGUsIHN0YXRpY1N0eWxlKSB7XG4gICAgaWYgKCFkeW5hbWljU3R5bGUgJiYgIXN0YXRpY1N0eWxlKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgdmFyIGR5bmFtaWNTdHlsZU9iaiA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhkeW5hbWljU3R5bGUpO1xuICAgIHZhciBzdHlsZU9iaiA9IHN0YXRpY1N0eWxlID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBkeW5hbWljU3R5bGVPYmopIDogZHluYW1pY1N0eWxlT2JqO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZU9iaikubWFwKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAoKGh5cGhlbmF0ZShuYW1lKSkgKyBcIjpcIiArIChzdHlsZU9ialtuYW1lXSkpOyB9KS5qb2luKCc7JylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9fbWFwID0gZnVuY3Rpb24odmFsLCBpdGVyYXRlZSkge1xuICAgIC8vVE9ETyDmmoLkuI3ogIPomZEgc3RyaW5nXG4gICAgdmFyIHJldCwgaSwgbCwga2V5cywga2V5O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB2YWwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJldFtpXSA9IGl0ZXJhdGVlKHZhbFtpXSwgaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgcmV0W2tleV0gPSBpdGVyYXRlZSh2YWxba2V5XSwga2V5LCBpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB2YWw7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgLy8g56ys5LiA5Liq5Y+C5pWw5pqC5pe25LuN5ZKM5bCP56iL5bqP5LiA6Ie0XG4gICAgICAgIHJldFtpXSA9IGl0ZXJhdGVlKGksIGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldFxuICAgIH1cbiAgICByZXR1cm4gW11cbiAgfTtcblxufVxuXG4vKiAgKi9cblxudmFyIExJRkVDWUNMRV9IT09LUyQxID0gW1xuICAgIC8vQXBwXG4gICAgJ29uTGF1bmNoJyxcbiAgICAnb25TaG93JyxcbiAgICAnb25IaWRlJyxcbiAgICAnb25VbmlOVmlld01lc3NhZ2UnLFxuICAgICdvblBhZ2VOb3RGb3VuZCcsXG4gICAgJ29uVGhlbWVDaGFuZ2UnLFxuICAgICdvbkVycm9yJyxcbiAgICAnb25VbmhhbmRsZWRSZWplY3Rpb24nLFxuICAgIC8vUGFnZVxuICAgICdvbkluaXQnLFxuICAgICdvbkxvYWQnLFxuICAgIC8vICdvblNob3cnLFxuICAgICdvblJlYWR5JyxcbiAgICAvLyAnb25IaWRlJyxcbiAgICAnb25VbmxvYWQnLFxuICAgICdvblB1bGxEb3duUmVmcmVzaCcsXG4gICAgJ29uUmVhY2hCb3R0b20nLFxuICAgICdvblRhYkl0ZW1UYXAnLFxuICAgICdvbkFkZFRvRmF2b3JpdGVzJyxcbiAgICAnb25TaGFyZVRpbWVsaW5lJyxcbiAgICAnb25TaGFyZUFwcE1lc3NhZ2UnLFxuICAgICdvblJlc2l6ZScsXG4gICAgJ29uUGFnZVNjcm9sbCcsXG4gICAgJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcsXG4gICAgJ29uQmFja1ByZXNzJyxcbiAgICAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJyxcbiAgICAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnLFxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnLFxuICAgIC8vQ29tcG9uZW50XG4gICAgLy8gJ29uUmVhZHknLCAvLyDlhbzlrrnml6fniYjmnKzvvIzlupTor6Xnp7vpmaTor6Xkuovku7ZcbiAgICAnb25QYWdlU2hvdycsXG4gICAgJ29uUGFnZUhpZGUnLFxuICAgICdvblBhZ2VSZXNpemUnXG5dO1xuZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4kMShWdWUpIHtcblxuICAgIC8vZml4ZWQgdnVlLWNsYXNzLWNvbXBvbmVudFxuICAgIHZhciBvbGRFeHRlbmQgPSBWdWUuZXh0ZW5kO1xuICAgIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbihleHRlbmRPcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciBtZXRob2RzID0gZXh0ZW5kT3B0aW9ucy5tZXRob2RzO1xuICAgICAgICBpZiAobWV0aG9kcykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChMSUZFQ1lDTEVfSE9PS1MkMS5pbmRleE9mKG1ldGhvZE5hbWUpIT09LTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kT3B0aW9uc1ttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXRob2RzW21ldGhvZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9sZEV4dGVuZC5jYWxsKHRoaXMsIGV4dGVuZE9wdGlvbnMpXG4gICAgfTtcblxuICAgIHZhciBzdHJhdGVnaWVzID0gVnVlLmNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG4gICAgdmFyIG1lcmdlSG9vayA9IHN0cmF0ZWdpZXMuY3JlYXRlZDtcbiAgICBMSUZFQ1lDTEVfSE9PS1MkMS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgIHN0cmF0ZWdpZXNbaG9va10gPSBtZXJnZUhvb2s7XG4gICAgfSk7XG5cbiAgICBWdWUucHJvdG90eXBlLl9fbGlmZWN5Y2xlX2hvb2tzX18gPSBMSUZFQ1lDTEVfSE9PS1MkMTtcbn1cblxuLyogICovXG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcGF0Y2ggZnVuY3Rpb25cblZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gcGF0Y2g7XG5cbi8vIHB1YmxpYyBtb3VudCBtZXRob2RcblZ1ZS5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24oXG4gICAgZWwgLFxuICAgIGh5ZHJhdGluZyBcbikge1xuICAgIHJldHVybiBtb3VudENvbXBvbmVudCQxKHRoaXMsIGVsLCBoeWRyYXRpbmcpXG59O1xuXG5saWZlY3ljbGVNaXhpbiQxKFZ1ZSk7XG5pbnRlcm5hbE1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5leHBvcnQgZGVmYXVsdCBWdWU7XG4iLCJjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcclxuY29uc3QgaXNPYmplY3QgPSAodmFsKSA9PiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XHJcbmNvbnN0IGRlZmF1bHREZWxpbWl0ZXJzID0gWyd7JywgJ30nXTtcclxuY2xhc3MgQmFzZUZvcm1hdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jYWNoZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUobWVzc2FnZSwgdmFsdWVzLCBkZWxpbWl0ZXJzID0gZGVmYXVsdERlbGltaXRlcnMpIHtcclxuICAgICAgICBpZiAoIXZhbHVlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gW21lc3NhZ2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG9rZW5zID0gdGhpcy5fY2FjaGVzW21lc3NhZ2VdO1xyXG4gICAgICAgIGlmICghdG9rZW5zKSB7XHJcbiAgICAgICAgICAgIHRva2VucyA9IHBhcnNlKG1lc3NhZ2UsIGRlbGltaXRlcnMpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYWNoZXNbbWVzc2FnZV0gPSB0b2tlbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21waWxlKHRva2VucywgdmFsdWVzKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBSRV9UT0tFTl9MSVNUX1ZBTFVFID0gL14oPzpcXGQpKy87XHJcbmNvbnN0IFJFX1RPS0VOX05BTUVEX1ZBTFVFID0gL14oPzpcXHcpKy87XHJcbmZ1bmN0aW9uIHBhcnNlKGZvcm1hdCwgW3N0YXJ0RGVsaW1pdGVyLCBlbmREZWxpbWl0ZXJdKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcclxuICAgIGxldCBwb3NpdGlvbiA9IDA7XHJcbiAgICBsZXQgdGV4dCA9ICcnO1xyXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgZm9ybWF0Lmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBjaGFyID0gZm9ybWF0W3Bvc2l0aW9uKytdO1xyXG4gICAgICAgIGlmIChjaGFyID09PSBzdGFydERlbGltaXRlcikge1xyXG4gICAgICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlOiB0ZXh0IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRleHQgPSAnJztcclxuICAgICAgICAgICAgbGV0IHN1YiA9ICcnO1xyXG4gICAgICAgICAgICBjaGFyID0gZm9ybWF0W3Bvc2l0aW9uKytdO1xyXG4gICAgICAgICAgICB3aGlsZSAoY2hhciAhPT0gdW5kZWZpbmVkICYmIGNoYXIgIT09IGVuZERlbGltaXRlcikge1xyXG4gICAgICAgICAgICAgICAgc3ViICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICBjaGFyID0gZm9ybWF0W3Bvc2l0aW9uKytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VkID0gY2hhciA9PT0gZW5kRGVsaW1pdGVyO1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gUkVfVE9LRU5fTElTVF9WQUxVRS50ZXN0KHN1YilcclxuICAgICAgICAgICAgICAgID8gJ2xpc3QnXHJcbiAgICAgICAgICAgICAgICA6IGlzQ2xvc2VkICYmIFJFX1RPS0VOX05BTUVEX1ZBTFVFLnRlc3Qoc3ViKVxyXG4gICAgICAgICAgICAgICAgICAgID8gJ25hbWVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJ3Vua25vd24nO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHZhbHVlOiBzdWIsIHR5cGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICBlbHNlIGlmIChjaGFyID09PSAnJScpIHtcclxuICAgICAgICAvLyAgIC8vIHdoZW4gZm91bmQgcmFpbHMgaTE4biBzeW50YXgsIHNraXAgdGV4dCBjYXB0dXJlXHJcbiAgICAgICAgLy8gICBpZiAoZm9ybWF0W3Bvc2l0aW9uXSAhPT0gJ3snKSB7XHJcbiAgICAgICAgLy8gICAgIHRleHQgKz0gY2hhclxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dCArPSBjaGFyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRleHQgJiYgdG9rZW5zLnB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlOiB0ZXh0IH0pO1xyXG4gICAgcmV0dXJuIHRva2VucztcclxufVxyXG5mdW5jdGlvbiBjb21waWxlKHRva2VucywgdmFsdWVzKSB7XHJcbiAgICBjb25zdCBjb21waWxlZCA9IFtdO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGNvbnN0IG1vZGUgPSBpc0FycmF5KHZhbHVlcylcclxuICAgICAgICA/ICdsaXN0J1xyXG4gICAgICAgIDogaXNPYmplY3QodmFsdWVzKVxyXG4gICAgICAgICAgICA/ICduYW1lZCdcclxuICAgICAgICAgICAgOiAndW5rbm93bic7XHJcbiAgICBpZiAobW9kZSA9PT0gJ3Vua25vd24nKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBpbGVkO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGluZGV4IDwgdG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2luZGV4XTtcclxuICAgICAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICBjb21waWxlZC5wdXNoKHRva2VuLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsaXN0JzpcclxuICAgICAgICAgICAgICAgIGNvbXBpbGVkLnB1c2godmFsdWVzW3BhcnNlSW50KHRva2VuLnZhbHVlLCAxMCldKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICduYW1lZCc6XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ25hbWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBpbGVkLnB1c2godmFsdWVzW3Rva2VuLnZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFR5cGUgb2YgdG9rZW4gJyR7dG9rZW4udHlwZX0nIGFuZCBmb3JtYXQgb2YgdmFsdWUgJyR7bW9kZX0nIGRvbid0IG1hdGNoIWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1bmtub3duJzpcclxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBEZXRlY3QgJ3Vua25vd24nIHR5cGUgb2YgdG9rZW4hYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICAgIHJldHVybiBjb21waWxlZDtcclxufVxyXG5cclxuY29uc3QgTE9DQUxFX1pIX0hBTlMgPSAnemgtSGFucyc7XHJcbmNvbnN0IExPQ0FMRV9aSF9IQU5UID0gJ3poLUhhbnQnO1xyXG5jb25zdCBMT0NBTEVfRU4gPSAnZW4nO1xyXG5jb25zdCBMT0NBTEVfRlIgPSAnZnInO1xyXG5jb25zdCBMT0NBTEVfRVMgPSAnZXMnO1xyXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcbmNvbnN0IGhhc093biA9ICh2YWwsIGtleSkgPT4gaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIGtleSk7XHJcbmNvbnN0IGRlZmF1bHRGb3JtYXR0ZXIgPSBuZXcgQmFzZUZvcm1hdHRlcigpO1xyXG5mdW5jdGlvbiBpbmNsdWRlKHN0ciwgcGFydHMpIHtcclxuICAgIHJldHVybiAhIXBhcnRzLmZpbmQoKHBhcnQpID0+IHN0ci5pbmRleE9mKHBhcnQpICE9PSAtMSk7XHJcbn1cclxuZnVuY3Rpb24gc3RhcnRzV2l0aChzdHIsIHBhcnRzKSB7XHJcbiAgICByZXR1cm4gcGFydHMuZmluZCgocGFydCkgPT4gc3RyLmluZGV4T2YocGFydCkgPT09IDApO1xyXG59XHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShsb2NhbGUsIG1lc3NhZ2VzKSB7XHJcbiAgICBpZiAoIWxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxvY2FsZSA9IGxvY2FsZS50cmltKCkucmVwbGFjZSgvXy9nLCAnLScpO1xyXG4gICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzW2xvY2FsZV0pIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlO1xyXG4gICAgfVxyXG4gICAgbG9jYWxlID0gbG9jYWxlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpZiAobG9jYWxlLmluZGV4T2YoJ3poJykgPT09IDApIHtcclxuICAgICAgICBpZiAobG9jYWxlLmluZGV4T2YoJy1oYW5zJykgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTE9DQUxFX1pIX0hBTlM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2NhbGUuaW5kZXhPZignLWhhbnQnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBMT0NBTEVfWkhfSEFOVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluY2x1ZGUobG9jYWxlLCBbJy10dycsICctaGsnLCAnLW1vJywgJy1jaHQnXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5UO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTE9DQUxFX1pIX0hBTlM7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsYW5nID0gc3RhcnRzV2l0aChsb2NhbGUsIFtMT0NBTEVfRU4sIExPQ0FMRV9GUiwgTE9DQUxFX0VTXSk7XHJcbiAgICBpZiAobGFuZykge1xyXG4gICAgICAgIHJldHVybiBsYW5nO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEkxOG4ge1xyXG4gICAgY29uc3RydWN0b3IoeyBsb2NhbGUsIGZhbGxiYWNrTG9jYWxlLCBtZXNzYWdlcywgd2F0Y2hlciwgZm9ybWF0ZXIsIH0pIHtcclxuICAgICAgICB0aGlzLmxvY2FsZSA9IExPQ0FMRV9FTjtcclxuICAgICAgICB0aGlzLmZhbGxiYWNrTG9jYWxlID0gTE9DQUxFX0VOO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHt9O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSB7fTtcclxuICAgICAgICB0aGlzLndhdGNoZXJzID0gW107XHJcbiAgICAgICAgaWYgKGZhbGxiYWNrTG9jYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbGJhY2tMb2NhbGUgPSBmYWxsYmFja0xvY2FsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mb3JtYXRlciA9IGZvcm1hdGVyIHx8IGRlZmF1bHRGb3JtYXR0ZXI7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCBMT0NBTEVfRU4pO1xyXG4gICAgICAgIGlmICh3YXRjaGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hMb2NhbGUod2F0Y2hlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0TG9jYWxlKGxvY2FsZSkge1xyXG4gICAgICAgIGNvbnN0IG9sZExvY2FsZSA9IHRoaXMubG9jYWxlO1xyXG4gICAgICAgIHRoaXMubG9jYWxlID0gbm9ybWFsaXplTG9jYWxlKGxvY2FsZSwgdGhpcy5tZXNzYWdlcykgfHwgdGhpcy5mYWxsYmFja0xvY2FsZTtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZXNbdGhpcy5sb2NhbGVdKSB7XHJcbiAgICAgICAgICAgIC8vIOWPr+iDveWIneWni+WMluaXtuS4jeWtmOWcqFxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW3RoaXMubG9jYWxlXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VzW3RoaXMubG9jYWxlXTtcclxuICAgICAgICAvLyDku4Xlj5HnlJ/lj5jljJbml7bvvIzpgJrnn6VcclxuICAgICAgICBpZiAob2xkTG9jYWxlICE9PSB0aGlzLmxvY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXJzLmZvckVhY2goKHdhdGNoZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHdhdGNoZXIodGhpcy5sb2NhbGUsIG9sZExvY2FsZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldExvY2FsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGU7XHJcbiAgICB9XHJcbiAgICB3YXRjaExvY2FsZShmbikge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy53YXRjaGVycy5wdXNoKGZuKSAtIDE7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBhZGQobG9jYWxlLCBtZXNzYWdlLCBvdmVycmlkZSA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBjdXJNZXNzYWdlcyA9IHRoaXMubWVzc2FnZXNbbG9jYWxlXTtcclxuICAgICAgICBpZiAoY3VyTWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGN1ck1lc3NhZ2VzLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzT3duKGN1ck1lc3NhZ2VzLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ck1lc3NhZ2VzW2tleV0gPSBtZXNzYWdlW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbbG9jYWxlXSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZihtZXNzYWdlLCB2YWx1ZXMsIGRlbGltaXRlcnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRlci5pbnRlcnBvbGF0ZShtZXNzYWdlLCB2YWx1ZXMsIGRlbGltaXRlcnMpLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgdChrZXksIGxvY2FsZSwgdmFsdWVzKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsZSA9IG5vcm1hbGl6ZUxvY2FsZShsb2NhbGUsIHRoaXMubWVzc2FnZXMpO1xyXG4gICAgICAgICAgICBsb2NhbGUgJiYgKG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VzW2xvY2FsZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWVzID0gbG9jYWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWhhc093bihtZXNzYWdlLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2Fubm90IHRyYW5zbGF0ZSB0aGUgdmFsdWUgb2Yga2V5cGF0aCAke2tleX0uIFVzZSB0aGUgdmFsdWUgb2Yga2V5cGF0aCBhcyBkZWZhdWx0LmApO1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRlci5pbnRlcnBvbGF0ZShtZXNzYWdlW2tleV0sIHZhbHVlcykuam9pbignJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhdGNoQXBwTG9jYWxlKGFwcFZtLCBpMThuKSB7XHJcbiAgICAvLyDpnIDopoHkv53or4Egd2F0Y2gg55qE6Kem5Y+R5Zyo57uE5Lu25riy5p+T5LmL5YmNXHJcbiAgICBpZiAoYXBwVm0uJHdhdGNoTG9jYWxlKSB7XHJcbiAgICAgICAgLy8gdnVlMlxyXG4gICAgICAgIGFwcFZtLiR3YXRjaExvY2FsZSgobmV3TG9jYWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGkxOG4uc2V0TG9jYWxlKG5ld0xvY2FsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhcHBWbS4kd2F0Y2goKCkgPT4gYXBwVm0uJGxvY2FsZSwgKG5ld0xvY2FsZSkgPT4ge1xyXG4gICAgICAgICAgICBpMThuLnNldExvY2FsZShuZXdMb2NhbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldERlZmF1bHRMb2NhbGUoKSB7XHJcbiAgICBpZiAodHlwZW9mIHVuaSAhPT0gJ3VuZGVmaW5lZCcgJiYgdW5pLmdldExvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiB1bmkuZ2V0TG9jYWxlKCk7XHJcbiAgICB9XHJcbiAgICAvLyDlsI/nqIvluo/lubPlj7DvvIx1bmkg5ZKMIHVuaS1pMThuIOS6kuebuOW8leeUqO+8jOWvvOiHtOiuv+mXruS4jeWIsCB1bmnvvIzmlYXlnKggZ2xvYmFsIOS4iuaMguS6hiBnZXRMb2NhbGVcclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuZ2V0TG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5nZXRMb2NhbGUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBMT0NBTEVfRU47XHJcbn1cclxuZnVuY3Rpb24gaW5pdFZ1ZUkxOG4obG9jYWxlLCBtZXNzYWdlcyA9IHt9LCBmYWxsYmFja0xvY2FsZSwgd2F0Y2hlcikge1xyXG4gICAgLy8g5YW85a655pen54mI5pys5YWl5Y+CXHJcbiAgICBpZiAodHlwZW9mIGxvY2FsZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICBbbG9jYWxlLCBtZXNzYWdlc10gPSBbXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLFxyXG4gICAgICAgICAgICBsb2NhbGUsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgbG9jYWxlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vIOWboOS4uuWwj+eoi+W6j+W5s+WPsO+8jHVuaS1pMThuIOWSjCB1bmkg5LqS55u45byV55So77yM5a+86Ie05q2k5pe26K6/6ZeuIHVuaSDml7bvvIzkuLogdW5kZWZpbmVkXHJcbiAgICAgICAgbG9jYWxlID0gZ2V0RGVmYXVsdExvY2FsZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBmYWxsYmFja0xvY2FsZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICBmYWxsYmFja0xvY2FsZSA9XHJcbiAgICAgICAgICAgICh0eXBlb2YgX191bmlDb25maWcgIT09ICd1bmRlZmluZWQnICYmIF9fdW5pQ29uZmlnLmZhbGxiYWNrTG9jYWxlKSB8fFxyXG4gICAgICAgICAgICAgICAgTE9DQUxFX0VOO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaTE4biA9IG5ldyBJMThuKHtcclxuICAgICAgICBsb2NhbGUsXHJcbiAgICAgICAgZmFsbGJhY2tMb2NhbGUsXHJcbiAgICAgICAgbWVzc2FnZXMsXHJcbiAgICAgICAgd2F0Y2hlcixcclxuICAgIH0pO1xyXG4gICAgbGV0IHQgPSAoa2V5LCB2YWx1ZXMpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGdldEFwcCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvLyBhcHAgdmlld1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1mdW5jLWFzc2lnbiAqL1xyXG4gICAgICAgICAgICB0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTE4bi50KGtleSwgdmFsdWVzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpc1dhdGNoZWRBcHBMb2NhbGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwVm0gPSBnZXRBcHAoKS4kdm07XHJcbiAgICAgICAgICAgICAgICAvLyDlj6/og70kdm3ov5jkuI3lrZjlnKjvvIzmr5TlpoLlnKjmlK/ku5jlrp3lsI/nqIvluo/kuK3vvIznu4Tku7blrprkuYnovoPml6nvvIzlnKhwcm9wc+eahGRlZmF1bHTph4zkvb/nlKjkuoZ0KCnlh73mlbDvvIjlpoJ1bmktZ29vZHMtbmF277yJ77yM5q2k5pe2YXBw6L+Y5pyq5Yid5aeL5YyWXHJcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBcdHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICAgICAgLy8gXHRkZWZhdWx0ICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIFx0XHRyZXR1cm4gW3tcclxuICAgICAgICAgICAgICAgIC8vIFx0XHRcdGljb246ICdzaG9wJyxcclxuICAgICAgICAgICAgICAgIC8vIFx0XHRcdHRleHQ6IHQoXCJ1bmktZ29vZHMtbmF2Lm9wdGlvbnMuc2hvcFwiKSxcclxuICAgICAgICAgICAgICAgIC8vIFx0XHR9LCB7XHJcbiAgICAgICAgICAgICAgICAvLyBcdFx0XHRpY29uOiAnY2FydCcsXHJcbiAgICAgICAgICAgICAgICAvLyBcdFx0XHR0ZXh0OiB0KFwidW5pLWdvb2RzLW5hdi5vcHRpb25zLmNhcnRcIilcclxuICAgICAgICAgICAgICAgIC8vIFx0XHR9XVxyXG4gICAgICAgICAgICAgICAgLy8gXHR9XHJcbiAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgaWYgKGFwcFZtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6Kem5Y+R5ZON5bqU5byPXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwVm0uJGxvY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzV2F0Y2hlZEFwcExvY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1dhdGNoZWRBcHBMb2NhbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXRjaEFwcExvY2FsZShhcHBWbSwgaTE4bik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGkxOG4udChrZXksIHZhbHVlcyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0KGtleSwgdmFsdWVzKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGkxOG4sXHJcbiAgICAgICAgZihtZXNzYWdlLCB2YWx1ZXMsIGRlbGltaXRlcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGkxOG4uZihtZXNzYWdlLCB2YWx1ZXMsIGRlbGltaXRlcnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdChrZXksIHZhbHVlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdChrZXksIHZhbHVlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGQobG9jYWxlLCBtZXNzYWdlLCBvdmVycmlkZSA9IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGkxOG4uYWRkKGxvY2FsZSwgbWVzc2FnZSwgb3ZlcnJpZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2goZm4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGkxOG4ud2F0Y2hMb2NhbGUoZm4pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TG9jYWxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTE4bi5nZXRMb2NhbGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldExvY2FsZShuZXdMb2NhbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGkxOG4uc2V0TG9jYWxlKG5ld0xvY2FsZSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmNvbnN0IGlzU3RyaW5nID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XHJcbmxldCBmb3JtYXRlcjtcclxuZnVuY3Rpb24gaGFzSTE4bkpzb24oanNvbk9iaiwgZGVsaW1pdGVycykge1xyXG4gICAgaWYgKCFmb3JtYXRlcikge1xyXG4gICAgICAgIGZvcm1hdGVyID0gbmV3IEJhc2VGb3JtYXR0ZXIoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB3YWxrSnNvbk9iaihqc29uT2JqLCAoanNvbk9iaiwga2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBqc29uT2JqW2tleV07XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNJMThuU3RyKHZhbHVlLCBkZWxpbWl0ZXJzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNJMThuSnNvbih2YWx1ZSwgZGVsaW1pdGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VJMThuSnNvbihqc29uT2JqLCB2YWx1ZXMsIGRlbGltaXRlcnMpIHtcclxuICAgIGlmICghZm9ybWF0ZXIpIHtcclxuICAgICAgICBmb3JtYXRlciA9IG5ldyBCYXNlRm9ybWF0dGVyKCk7XHJcbiAgICB9XHJcbiAgICB3YWxrSnNvbk9iaihqc29uT2JqLCAoanNvbk9iaiwga2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBqc29uT2JqW2tleV07XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNJMThuU3RyKHZhbHVlLCBkZWxpbWl0ZXJzKSkge1xyXG4gICAgICAgICAgICAgICAganNvbk9ialtrZXldID0gY29tcGlsZVN0cih2YWx1ZSwgdmFsdWVzLCBkZWxpbWl0ZXJzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGFyc2VJMThuSnNvbih2YWx1ZSwgdmFsdWVzLCBkZWxpbWl0ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBqc29uT2JqO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBpbGVJMThuSnNvblN0cihqc29uU3RyLCB7IGxvY2FsZSwgbG9jYWxlcywgZGVsaW1pdGVycywgfSkge1xyXG4gICAgaWYgKCFpc0kxOG5TdHIoanNvblN0ciwgZGVsaW1pdGVycykpIHtcclxuICAgICAgICByZXR1cm4ganNvblN0cjtcclxuICAgIH1cclxuICAgIGlmICghZm9ybWF0ZXIpIHtcclxuICAgICAgICBmb3JtYXRlciA9IG5ldyBCYXNlRm9ybWF0dGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2NhbGVWYWx1ZXMgPSBbXTtcclxuICAgIE9iamVjdC5rZXlzKGxvY2FsZXMpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICBpZiAobmFtZSAhPT0gbG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGxvY2FsZVZhbHVlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlczogbG9jYWxlc1tuYW1lXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBsb2NhbGVWYWx1ZXMudW5zaGlmdCh7IGxvY2FsZSwgdmFsdWVzOiBsb2NhbGVzW2xvY2FsZV0gfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShjb21waWxlSnNvbk9iaihKU09OLnBhcnNlKGpzb25TdHIpLCBsb2NhbGVWYWx1ZXMsIGRlbGltaXRlcnMpLCBudWxsLCAyKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7IH1cclxuICAgIHJldHVybiBqc29uU3RyO1xyXG59XHJcbmZ1bmN0aW9uIGlzSTE4blN0cih2YWx1ZSwgZGVsaW1pdGVycykge1xyXG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZGVsaW1pdGVyc1swXSkgPiAtMTtcclxufVxyXG5mdW5jdGlvbiBjb21waWxlU3RyKHZhbHVlLCB2YWx1ZXMsIGRlbGltaXRlcnMpIHtcclxuICAgIHJldHVybiBmb3JtYXRlci5pbnRlcnBvbGF0ZSh2YWx1ZSwgdmFsdWVzLCBkZWxpbWl0ZXJzKS5qb2luKCcnKTtcclxufVxyXG5mdW5jdGlvbiBjb21waWxlVmFsdWUoanNvbk9iaiwga2V5LCBsb2NhbGVWYWx1ZXMsIGRlbGltaXRlcnMpIHtcclxuICAgIGNvbnN0IHZhbHVlID0ganNvbk9ialtrZXldO1xyXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgIC8vIOWtmOWcqOWbvemZheWMllxyXG4gICAgICAgIGlmIChpc0kxOG5TdHIodmFsdWUsIGRlbGltaXRlcnMpKSB7XHJcbiAgICAgICAgICAgIGpzb25PYmpba2V5XSA9IGNvbXBpbGVTdHIodmFsdWUsIGxvY2FsZVZhbHVlc1swXS52YWx1ZXMsIGRlbGltaXRlcnMpO1xyXG4gICAgICAgICAgICBpZiAobG9jYWxlVmFsdWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIOagvOW8j+WMluWbvemZheWMluivreiogFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVMb2NhbGVzID0gKGpzb25PYmpba2V5ICsgJ0xvY2FsZXMnXSA9IHt9KTtcclxuICAgICAgICAgICAgICAgIGxvY2FsZVZhbHVlcy5mb3JFYWNoKChsb2NhbFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVMb2NhbGVzW2xvY2FsVmFsdWUubG9jYWxlXSA9IGNvbXBpbGVTdHIodmFsdWUsIGxvY2FsVmFsdWUudmFsdWVzLCBkZWxpbWl0ZXJzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29tcGlsZUpzb25PYmoodmFsdWUsIGxvY2FsZVZhbHVlcywgZGVsaW1pdGVycyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY29tcGlsZUpzb25PYmooanNvbk9iaiwgbG9jYWxlVmFsdWVzLCBkZWxpbWl0ZXJzKSB7XHJcbiAgICB3YWxrSnNvbk9iaihqc29uT2JqLCAoanNvbk9iaiwga2V5KSA9PiB7XHJcbiAgICAgICAgY29tcGlsZVZhbHVlKGpzb25PYmosIGtleSwgbG9jYWxlVmFsdWVzLCBkZWxpbWl0ZXJzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGpzb25PYmo7XHJcbn1cclxuZnVuY3Rpb24gd2Fsa0pzb25PYmooanNvbk9iaiwgd2Fsaykge1xyXG4gICAgaWYgKGlzQXJyYXkoanNvbk9iaikpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25PYmoubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHdhbGsoanNvbk9iaiwgaSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3QoanNvbk9iaikpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBqc29uT2JqKSB7XHJcbiAgICAgICAgICAgIGlmICh3YWxrKGpzb25PYmosIGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlTG9jYWxlKGxvY2FsZXMpIHtcclxuICAgIHJldHVybiAobG9jYWxlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsb2NhbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxlID0gbm9ybWFsaXplTG9jYWxlKGxvY2FsZSkgfHwgbG9jYWxlO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlTG9jYWxlQ2hhaW4obG9jYWxlKS5maW5kKChsb2NhbGUpID0+IGxvY2FsZXMuaW5kZXhPZihsb2NhbGUpID4gLTEpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiByZXNvbHZlTG9jYWxlQ2hhaW4obG9jYWxlKSB7XHJcbiAgICBjb25zdCBjaGFpbiA9IFtdO1xyXG4gICAgY29uc3QgdG9rZW5zID0gbG9jYWxlLnNwbGl0KCctJyk7XHJcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIGNoYWluLnB1c2godG9rZW5zLmpvaW4oJy0nKSk7XHJcbiAgICAgICAgdG9rZW5zLnBvcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoYWluO1xyXG59XHJcblxyXG5leHBvcnQgeyBCYXNlRm9ybWF0dGVyIGFzIEZvcm1hdHRlciwgSTE4biwgTE9DQUxFX0VOLCBMT0NBTEVfRVMsIExPQ0FMRV9GUiwgTE9DQUxFX1pIX0hBTlMsIExPQ0FMRV9aSF9IQU5ULCBjb21waWxlSTE4bkpzb25TdHIsIGhhc0kxOG5Kc29uLCBpbml0VnVlSTE4biwgaXNJMThuU3RyLCBpc1N0cmluZywgbm9ybWFsaXplTG9jYWxlLCBwYXJzZUkxOG5Kc29uLCByZXNvbHZlTG9jYWxlIH07XHJcbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIW9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgb3B0aW9ucy5jb21wb25lbnRzID0ge31cbiAgICB9XG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgICBmb3IgKHZhciBuYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChoYXNPd24uY2FsbChjb21wb25lbnRzLCBuYW1lKSAmJiAhaGFzT3duLmNhbGwob3B0aW9ucy5jb21wb25lbnRzLCBuYW1lKSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnRzW25hbWVdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBhamF4LmpzXG4vLyBhamF4LmpzXG5cbi8vIOW8leWFpSB1bmktYWpheCDmqKHlnZdcbmltcG9ydCBhamF4IGZyb20gJ0AvdW5pX21vZHVsZXMvdS1hamF4L2pzX3NkaydcblxuLy8g5Yib5bu66K+35rGC5a6e5L6LXG5jb25zdCBpbnN0YW5jZSA9IGFqYXguY3JlYXRlKHtcbiAgLy8g5Yid5aeL6YWN572uXG4gIGJhc2VVUkw6ICdodHRwczovL3FjeGxsZC5mbi50aGVsYXJrY2xvdWQuY29tJ1xufSlcblxuLy8g5re75Yqg6K+35rGC5oum5oiq5ZmoXG5pbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gIGNvbmZpZyA9PiB7XG4gICAgLy8g5Zyo5Y+R6YCB6K+35rGC5YmN5YGa5Lqb5LuA5LmIXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9LFxuICBlcnJvciA9PiB7XG4gICAgLy8g5a+56K+35rGC6ZSZ6K+v5YGa5Lqb5LuA5LmIXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICB9XG4pXG5cbi8vIOa3u+WKoOWTjeW6lOaLpuaIquWZqFxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgcmVzcG9uc2UgPT4ge1xuICAgIC8vIOWvueWTjeW6lOaVsOaNruWBmuS6m+S7gOS5iFxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBlcnJvciA9PiB7XG4gICAgLy8g5a+55ZON5bqU6ZSZ6K+v5YGa5Lqb5LuA5LmIXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICB9XG4pXG5cbi8vIOWvvOWHuiBjcmVhdGUg5Yib5bu65ZCO55qE5a6e5L6LXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlr7zlh7rliJvlu7rlkI7nmoTlrp7kvosiLCJpbXBvcnQgQWpheCBmcm9tICcuL2xpYi9jb3JlL0FqYXgnXG5cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgcmV0dXJuIG5ldyBBamF4KGRlZmF1bHRDb25maWcpLnJlcXVlc3Rcbn1cblxuY29uc3QgYWpheCA9IGNyZWF0ZUluc3RhbmNlKClcblxuYWpheC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKGluc3RhbmNlQ29uZmlnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhamF4XG4iLCJpbXBvcnQgSW50ZXJjZXB0b3JNYW5hZ2VyIGZyb20gJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJ1xuaW1wb3J0IFJlcXVlc3RDb25zdHJ1Y3RvciBmcm9tICcuLi9hZGFwdGVycy9SZXF1ZXN0J1xuaW1wb3J0IGRldGFjaENvbmZpZyBmcm9tICcuLi9oZWxwZXJzL2RldGFjaENvbmZpZydcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuLi9oZWxwZXJzL21lcmdlQ29uZmlnJ1xuaW1wb3J0IG9yaWdpblVSTCBmcm9tICcuLi9oZWxwZXJzL29yaWdpblVSTCdcbmltcG9ydCBkaXNwYXRjaFJlcXVlc3QgZnJvbSAnLi9kaXNwYXRjaFJlcXVlc3QnXG5pbXBvcnQgeyBkZXRhY2hDYW5jZWwsIGRpc3BhdGNoQ2FuY2VsLCBpbnRlcmNlcHRDYW5jZWwgfSBmcm9tICcuL2hhbmRsZUNhbmNlbCdcbmltcG9ydCBkZWZhdWx0cywgeyBNRVRIT0QgfSBmcm9tICcuLi9kZWZhdWx0cydcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIC8vIOi1i+WAvOWIsOWunuS+i+mFjee9rlxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnXG5cbiAgICAvLyDmjILovb3mi6bmiKrlmahcbiAgICB0aGlzLnJlcXVlc3QuaW50ZXJjZXB0b3JzID0ge1xuICAgICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICAgIH1cblxuICAgIC8vIOaMgui9veS/ruaUuSBjb25maWcg5pa55rOVXG4gICAgdGhpcy5yZXF1ZXN0LmNvbmZpZyA9IGFzeW5jIGZuID0+ICh0aGlzLmNvbmZpZyA9IGF3YWl0IGZuKHRoaXMuX2NvbmZpZykpXG5cbiAgICAvLyDmjILovb3lr7nlupTnmoQgbWV0aG9kIOaWueazlVxuICAgIGZvckVhY2goTUVUSE9ELCBtZXRob2QgPT4ge1xuICAgICAgdGhpcy5yZXF1ZXN0W21ldGhvZF0gPSAodXJsLCBkYXRhLCBjb25maWcpID0+XG4gICAgICAgIHRoaXMucmVxdWVzdChcbiAgICAgICAgICAuLi4odHlwZW9mIHVybCA9PT0gJ3N0cmluZycgPyBbdXJsLCBkYXRhLCB7IC4uLmNvbmZpZywgbWV0aG9kIH1dIDogW3sgLi4udXJsLCBtZXRob2QgfV0pXG4gICAgICAgIClcbiAgICB9KVxuXG4gICAgLy8g5oyC6L295a6e5L6L5o6l5Y+j5Zyw5Z2AXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICB0aGlzLnJlcXVlc3QuYmFzZVVSTCA9IChhd2FpdCB0aGlzLmNvbmZpZykuYmFzZVVSTCB8fCAnJ1xuICAgICAgdGhpcy5yZXF1ZXN0Lm9yaWdpbiA9IG9yaWdpblVSTCh0aGlzLnJlcXVlc3QuYmFzZVVSTClcbiAgICB9KVxuICB9XG5cbiAgc2V0IGNvbmZpZyhjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPVxuICAgICAgdHlwZW9mIGNvbmZpZyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGFzeW5jICgpID0+IG1lcmdlQ29uZmlnKGRlZmF1bHRzLCBhd2FpdCBjb25maWcoKSlcbiAgICAgICAgOiBtZXJnZUNvbmZpZyhkZWZhdWx0cywgY29uZmlnKVxuICB9XG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9jb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcoKSA6IHRoaXMuX2NvbmZpZ1xuICB9XG5cbiAgcmVxdWVzdCA9ICguLi5hcmdzKSA9PiB7XG4gICAgLy8g5YiG57G76K+35rGC5Y+C5pWwXG4gICAgY29uc3QgeyBjYWxsYmFjaywgY29uZmlnIH0gPSBkZXRhY2hDb25maWcoLi4uYXJncylcblxuICAgIC8vIOWIm+W7uuivt+axguexu1xuICAgIGNvbnN0IFJlcXVlc3QgPSBSZXF1ZXN0Q29uc3RydWN0b3IoKVxuXG4gICAgLy8g5aOw5piOIFByb21pc2Ug6ZO+XG4gICAgY29uc3QgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0KFJlcXVlc3QpLCBkaXNwYXRjaENhbmNlbF1cblxuICAgIC8vIOWwhuivt+axguaLpuaIqumBjeWOhua3u+WKoOWIsOmTvuWJjemdolxuICAgIHRoaXMucmVxdWVzdC5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoLmRlc2MoKHsgZnVsZmlsbGVkLCByZWplY3RlZCB9KSA9PlxuICAgICAgY2hhaW4udW5zaGlmdChmdWxmaWxsZWQsIHJlamVjdGVkKVxuICAgIClcblxuICAgIC8vIOWwhuWTjeW6lOaLpuaIqumBjeWOhua3u+WKoOWIsOmTvuWQjumdolxuICAgIHRoaXMucmVxdWVzdC5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaC5hc2MoKHsgZnVsZmlsbGVkLCByZWplY3RlZCB9KSA9PlxuICAgICAgY2hhaW4ucHVzaChmdWxmaWxsZWQsIGludGVyY2VwdENhbmNlbChyZWplY3RlZCkpXG4gICAgKVxuXG4gICAgLy8g5YWI5omn6KGM6I635Y+WIGNvbmZpZyDor7fmsYLphY3nva5cbiAgICBjaGFpbi51bnNoaWZ0KGFzeW5jIGNvbmZpZyA9PiBtZXJnZUNvbmZpZyhhd2FpdCB0aGlzLmNvbmZpZywgY29uZmlnKSwgdW5kZWZpbmVkKVxuXG4gICAgLy8g5aSE55CG5Y+R6LW36K+35rGC5YmN55qE6ZSZ6K+v5pWw5o2uXG4gICAgY2hhaW4ucHVzaCh1bmRlZmluZWQsIGRldGFjaENhbmNlbClcblxuICAgIC8vIOiwg+eUqOivt+axguaWueazleWQju+8jOS4lOaLpuaIquWZqOinpuWPkeWujOaIkOWQju+8jOWIpOaWreWbnuiwg+WPguaVsOeahOaJp+ihjFxuICAgIGNoYWluLnB1c2goXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHJldHVybiByZXNwb25zZVxuICAgICAgICBjYWxsYmFjay5zdWNjZXNzPy4ocmVzcG9uc2UpXG4gICAgICAgIGNhbGxiYWNrLmNvbXBsZXRlPy4ocmVzcG9uc2UpXG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICAgIGNhbGxiYWNrLmZhaWw/LihlcnJvcilcbiAgICAgICAgY2FsbGJhY2suY29tcGxldGU/LihlcnJvcilcbiAgICAgIH1cbiAgICApXG5cbiAgICAvLyDliJvlu7ror7fmsYJQcm9taXNl77yM6YGN5Y6G6ZO+5bCG6ZO+5LiK5pa55rOV5Lyg6YCS5YiwdGhlbuWbnuiwg1xuICAgIGxldCByZXF1ZXN0ID0gUmVxdWVzdC5yZXNvbHZlKGNvbmZpZylcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3RcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG59KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbiAgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCIvKipcbiAqIOaLpuaIquWZqOexu1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmNlcHRvck1hbmFnZXIge1xuICBoYW5kbGVycyA9IFtdXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mb3JFYWNoID0ge1xuICAgICAgYXNjOiBmbiA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZXJzW2ldICE9PSBudWxsICYmIGZuKHRoaXMuaGFuZGxlcnNbaV0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZXNjOiBmbiA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVyc1tpXSAhPT0gbnVsbCAmJiBmbih0aGlzLmhhbmRsZXJzW2ldKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgICAgZnVsZmlsbGVkLFxuICAgICAgcmVqZWN0ZWRcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDFcbiAgfVxuICBlamVjdChpZCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXF1ZXN0Q29uc3RydWN0b3IoKSB7XG4gIHJldHVybiBjbGFzcyBSZXF1ZXN0IGV4dGVuZHMgUHJvbWlzZSB7XG4gICAgLy8gUmVxdWVzdFRhc2sg5a+56LGhXG4gICAgc3RhdGljIHRhc2sgPSBudWxsXG4gICAgLy8g6K+35rGC5Lu75Yqh5piv5ZCm6KKr5Lit5patXG4gICAgc3RhdGljIGFib3J0ZWQgPSBmYWxzZVxuICAgIC8vIOebkeWQrCBIVFRQIFJlc3BvbnNlIEhlYWRlciDkuovku7blm57osIPlh73mlbBcbiAgICBzdGF0aWMgb25IZWFkZXJzUmVjZWl2ZWRDYWxsYmFjayA9IG51bGxcbiAgICAvLyDlj5bmtojnm5HlkKwgSFRUUCBSZXNwb25zZSBIZWFkZXIg5LqL5Lu25Zue6LCD5Ye95pWwXG4gICAgc3RhdGljIG9mZkhlYWRlcnNSZWNlaXZlZENhbGxiYWNrID0gbnVsbFxuXG4gICAgLy8g55uR5ZCsIEhUVFAgUmVzcG9uc2UgSGVhZGVyIOS6i+S7tuaJp+ihjOWHveaVsFxuICAgIHN0YXRpYyBvbkhlYWRlcnNSZWNlaXZlZChmbikge1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkQ2FsbGJhY2sgPSBmblxuICAgICAgfVxuICAgICAgaWYgKFJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWRDYWxsYmFjayAmJiBSZXF1ZXN0LnRhc2spIHtcbiAgICAgICAgUmVxdWVzdC50YXNrLm9uSGVhZGVyc1JlY2VpdmVkPy4oUmVxdWVzdC5vbkhlYWRlcnNSZWNlaXZlZENhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDlj5bmtojnm5HlkKwgSFRUUCBSZXNwb25zZSBIZWFkZXIg5LqL5Lu25omn6KGM5Ye95pWwXG4gICAgc3RhdGljIG9mZkhlYWRlcnNSZWNlaXZlZChmbikge1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBSZXF1ZXN0Lm9mZkhlYWRlcnNSZWNlaXZlZENhbGxiYWNrID0gZm5cbiAgICAgIH1cbiAgICAgIGlmIChSZXF1ZXN0Lm9mZkhlYWRlcnNSZWNlaXZlZENhbGxiYWNrICYmIFJlcXVlc3QudGFzaykge1xuICAgICAgICBSZXF1ZXN0LnRhc2sub2ZmSGVhZGVyc1JlY2VpdmVkPy4oUmVxdWVzdC5vZmZIZWFkZXJzUmVjZWl2ZWRDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkuK3mlq3or7fmsYLku7vliqFcbiAgICBhYm9ydCgpIHtcbiAgICAgIFJlcXVlc3QuYWJvcnRlZCA9IHRydWVcbiAgICAgIFJlcXVlc3QudGFzaz8uYWJvcnQoKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgLy8g55uR5ZCsIEhUVFAgUmVzcG9uc2UgSGVhZGVyIOS6i+S7tlxuICAgIG9uSGVhZGVyc1JlY2VpdmVkKGZuKSB7XG4gICAgICBSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkKGZuKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgLy8g5Y+W5raI55uR5ZCsIEhUVFAgUmVzcG9uc2UgSGVhZGVyIOS6i+S7tlxuICAgIG9mZkhlYWRlcnNSZWNlaXZlZChmbikge1xuICAgICAgUmVxdWVzdC5vZmZIZWFkZXJzUmVjZWl2ZWQoZm4pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGlzQ2FsbGJhY2sgZnJvbSAnLi9pc0NhbGxiYWNrJ1xuaW1wb3J0IHsgZm9yRWFjaCwgdHJ5Q2F0Y2ggfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiDliIbnprvor7fmsYLlr7nosaFcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gW3VybF0g6K+35rGC5Zyw5Z2AIC8g6K+35rGC6YWN572uXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IFtkYXRhXSDor7fmsYLlj4LmlbBcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29uZmlnXSDor7fmsYLphY3nva5cbiAqIEByZXR1cm5zIHtvYmplY3R9IOWbnuiwg+WHveaVsOWvueixoSDljrvpmaTlm57osIPnmoTor7fmsYLlj4LmlbBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWNoQ29uZmlnKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gIC8vIOWbnuiwg+WHveaVsOWvueixoVxuICBsZXQgY2FsbGJhY2sgPSBudWxsXG4gIC8vIOWOu+mZpOWbnuiwg+eahOivt+axguWPguaVsOWvueixoVxuICBjb25zdCBvcHRpb25zID0ge31cblxuICAvLyDmmK/lkKbkvKDlhaXljZXkuKrlj4LmlbBcbiAgY29uc3QgaXNTaW5nbGUgPSB0eXBlb2YgdXJsID09PSAnb2JqZWN0J1xuXG4gIC8vIOivt+axguWPguaVsOWvueixoVxuICBjb25zdCB2YWx1ZSA9IGlzU2luZ2xlID8gdXJsIDogeyAuLi5jb25maWcsIHVybCwgZGF0YSB9XG5cbiAgLy8g5YiG56a76K+35rGC5Y+C5pWwXG4gIGZvckVhY2godmFsdWUsICh2YWwsIGtleSkgPT4ge1xuICAgIGlmIChpc1NpbmdsZSAmJiBpc0NhbGxiYWNrKGtleSkpIHtcbiAgICAgIDsoY2FsbGJhY2sgfHwgKGNhbGxiYWNrID0ge30pKVtrZXldID0gdHJ5Q2F0Y2godmFsKVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zW2tleV0gPSB2YWxcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBjYWxsYmFjayxcbiAgICBjb25maWc6IG9wdGlvbnNcbiAgfVxufVxuIiwiLyoqXG4gKiDliKTmlq3lj4LmlbDmmK/lkKblkKvmnInlm57osIPlj4LmlbAgc3VjY2VzcyAvIGZhaWwgLyBjb21wbGV0ZSDkuYvkuIBcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCDlj4LmlbDnmoQgS2V5IOWAvOWtl+espuS4slxuICogQHJldHVybnMge2Jvb2xlYW59IOi/lOWbnuWIpOaWreWAvFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0NhbGxiYWNrKGZpZWxkKSB7XG4gIHJldHVybiBbJ3N1Y2Nlc3MnLCAnZmFpbCcsICdjb21wbGV0ZSddLmluY2x1ZGVzKGZpZWxkKVxufVxuIiwiLyoqXG4gKiDojrflj5blgLznmoTljp/lp4vnsbvlnovlrZfnrKbkuLLvvIzkvovlpoIgW29iamVjdCBPYmplY3RdXG4gKi9cbmNvbnN0IF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuLyoqXG4gKiDliKTmlq3mmK/lkKbkuLrmlbDnu4RcbiAqIEBwYXJhbSB7Kn0gdmFsIOimgeWIpOaWreeahOWAvFxuICogQHJldHVybnMge2Jvb2xlYW59IOi/lOWbnuWIpOaWree7k+aenFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbn1cblxuLyoqXG4gKiDliKTmlq3mmK/lkKbkuLrmma7pgJrlr7nosaFcbiAqIEBwYXJhbSB7Kn0gdmFsIOimgeWIpOaWreeahOWAvFxuICogQHJldHVybnMge2Jvb2xlYW59IOi/lOWbnuWIpOaWree7k+aenFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXG59XG5cbi8qKlxuICog6YGN5Y6GXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheX0gb2JqIOimgei/reS7o+eahOWvueixoVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4g5Li65q+P5Liq6aG56LCD55So55qE5Zue6LCDXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykgb2JqID0gW29ial1cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iailcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tdLCBrLCBvYmopXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5a+56LGh5rex5ZCI5bm2XG4gKiBAcGFyYW0gIHsuLi5vYmplY3R9IGFyZ3Mg5a+56LGhXG4gKiBAcmV0dXJucyB7b2JqZWN0fSDlkIjlubblkI7nmoTlr7nosaFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKC4uLmFyZ3MpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcmdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KGFyZ3NbaV0pKSB7XG4gICAgICBmb3JFYWNoKGFyZ3NbaV0sICh2YWwsIGtleSkgPT4ge1xuICAgICAgICByZXN1bHRba2V5XSA9IGFzc2lnbihyZXN1bHRba2V5XSwgdmFsKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIOWQiOW5tuWIhumFjeWIsOebruagh+WvueixoVxuICogQHBhcmFtIHsqfSB0YXJnZXQg55uu5qCH5a+56LGhXG4gKiBAcGFyYW0geyp9IHNvdXJjZSDmupDlr7nosaFcbiAqIEByZXR1cm5zIHsqfSDnm67moIflr7nosaFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICBpZiAoaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIGlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgIHJldHVybiBtZXJnZSh0YXJnZXQsIHNvdXJjZSlcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gbWVyZ2Uoe30sIHNvdXJjZSlcbiAgfSBlbHNlIGlmIChpc0FycmF5KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gc291cmNlLnNsaWNlKClcbiAgfVxuICByZXR1cm4gc291cmNlXG59XG5cbi8qKlxuICogdHJ5Y2F0Y2gg5bCB6KOF5Ye95pWwXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiDlh73mlbBcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0g5bCB6KOFIHRyeWNhdGNoIOWQjueahOWHveaVsFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KGZuLCBhcmd1bWVudHMpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBhc3NpZ24sIGZvckVhY2ggfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiDlkIjlubbor7fmsYLphY3nva7vvIjmt7HluqblkIjlubbvvIzkuJTkuI3lkIjlubYgdW5kZWZpbmVkIOWAvO+8iVxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZzEg5YmN6K+35rGC6YWN572uXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbmZpZzJdIOWQjuivt+axgumFjee9rlxuICogQHJldHVybnMge29iamVjdH0g5ZCI5bm25ZCO55qE6K+35rGC6YWN572uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIgPSB7fSkge1xuICBjb25zdCBjb25maWcgPSB7fVxuXG4gIGNvbnN0IGNvbmZpZ0tleXMgPSBPYmplY3Qua2V5cyh7IC4uLmNvbmZpZzEsIC4uLmNvbmZpZzIgfSlcblxuICBmb3JFYWNoKGNvbmZpZ0tleXMsIHByb3AgPT4ge1xuICAgIGlmIChjb25maWcyW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGFzc2lnbihjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKVxuICAgIH0gZWxzZSBpZiAoY29uZmlnMVtwcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBhc3NpZ24odW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKVxuICAgIH1cbiAgfSlcblxuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpXG5cbiAgcmV0dXJuIGNvbmZpZ1xufVxuIiwiLyoqXG4gKiDmoLnmja4gYmFzZVVSTCDojrflj5bmupDlnLDlnYBcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIOivt+axgui3n+WcsOWdgFxuICogQHJldHVybnMge3N0cmluZ30g5rqQ5Zyw5Z2AXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yaWdpblVSTChiYXNlVVJMID0gJycpIHtcbiAgLy8g5Yik5pat5piv5ZCmIGh0dHA6Ly8g5oiWIGh0dHBzOi8vIOW8gOWktFxuICBpZiAoIS9eaHR0cHM/OlxcL1xcLy8udGVzdChiYXNlVVJMKSkgcmV0dXJuICcnXG4gIGNvbnN0IHUgPSBiYXNlVVJMLnNwbGl0KCcvJylcbiAgcmV0dXJuIHVbMF0gKyAnLy8nICsgdVsyXVxufVxuIiwiaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4uL2hlbHBlcnMvYnVpbGRVUkwnXG5pbXBvcnQgY29tYmluZVVSTCBmcm9tICcuLi9oZWxwZXJzL2NvbWJpbmVVUkwnXG5pbXBvcnQgaXNDYWxsYmFjayBmcm9tICcuLi9oZWxwZXJzL2lzQ2FsbGJhY2snXG5pbXBvcnQgeyBmb3JFYWNoLCBpc1BsYWluT2JqZWN0LCBtZXJnZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgSEVBREVSIH0gZnJvbSAnLi4vZGVmYXVsdHMnXG5cbi8qKlxuICog5rS+5Y+R6K+35rGC5pa55rOVXG4gKiBAcGFyYW0geyp9IFJlcXVlc3Qg6K+35rGC57G7XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0g5omn6KGM6K+35rGC5pa55rOVUHJvbWlzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoUmVxdWVzdCkge1xuICByZXR1cm4gY29uZmlnID0+IHtcbiAgICAvLyDmi7zmjqUgdXJsXG4gICAgY29uZmlnLnVybCA9IGJ1aWxkVVJMKGNvbWJpbmVVUkwoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpLCBjb25maWcucGFyYW1zKVxuXG4gICAgLy8g6K+35rGC5pa55rOV6L2s5aSn5YaZXG4gICAgY29uZmlnLm1ldGhvZCA9IChjb25maWcubWV0aG9kIHx8ICdnZXQnKS50b1VwcGVyQ2FzZSgpXG5cbiAgICAvLyDosIPmlbQgaGVhZGVyIOS8mOWFiOe6p1xuICAgIGNvbmZpZy5oZWFkZXIgPSBtZXJnZShcbiAgICAgIGNvbmZpZy5oZWFkZXIuY29tbW9uLFxuICAgICAgY29uZmlnLmhlYWRlcltjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCldLFxuICAgICAgY29uZmlnLmhlYWRlclxuICAgIClcblxuICAgIC8vIOa4hemZpOWkmuS9meeahOivt+axguWktFxuICAgIGZvckVhY2goSEVBREVSLCBoID0+IGlzUGxhaW5PYmplY3QoY29uZmlnLmhlYWRlcltoXSkgJiYgZGVsZXRlIGNvbmZpZy5oZWFkZXJbaF0pXG5cbiAgICAvLyDmuIXpmaTlm57osIPlh73mlbBcbiAgICBmb3JFYWNoKGNvbmZpZywgKHZhbCwga2V5KSA9PiBpc0NhbGxiYWNrKGtleSkgJiYgZGVsZXRlIGNvbmZpZ1trZXldKVxuXG4gICAgLy8g5omn6KGM6K+35rGC5pa55rOVXG4gICAgcmV0dXJuIGNvbmZpZy5hZGFwdGVyKGNvbmZpZywgUmVxdWVzdClcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9yRWFjaCwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIOagueaNrnBhcmFtc+e8luivkeivt+axglVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDor7fmsYJVUkxcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zIFVSTOWPguaVsFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcykge1xuICBpZiAoIXBhcmFtcykgcmV0dXJuIHVybFxuXG4gIGxldCBxdWVyeVxuXG4gIGNvbnN0IHBhcnRzID0gW11cbiAgZm9yRWFjaChwYXJhbXMsICh2YWwsIGtleSkgPT4ge1xuICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuXG4gICAgaWYgKGlzQXJyYXkodmFsKSkga2V5ID0ga2V5ICsgJ1tdJ1xuICAgIGVsc2UgdmFsID0gW3ZhbF1cblxuICAgIGZvckVhY2godmFsLCB2ID0+IHtcbiAgICAgIGlmICh2ICE9PSBudWxsICYmIHR5cGVvZiB2ID09PSAnb2JqZWN0Jykge1xuICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodilcbiAgICAgIH1cbiAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpXG4gICAgfSlcbiAgfSlcbiAgcXVlcnkgPSBwYXJ0cy5qb2luKCcmJylcblxuICBpZiAocXVlcnkpIHtcbiAgICBjb25zdCBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKVxuICAgIGhhc2htYXJrSW5kZXggIT09IC0xICYmICh1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCkpXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBxdWVyeVxuICB9XG5cbiAgcmV0dXJuIHVybFxufVxuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKVxuICAgIC5yZXBsYWNlKC8lM0EvZ2ksICc6JylcbiAgICAucmVwbGFjZSgvJTI0L2csICckJylcbiAgICAucmVwbGFjZSgvJTJDL2dpLCAnLCcpXG4gICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG4gICAgLnJlcGxhY2UoLyU1Qi9naSwgJ1snKVxuICAgIC5yZXBsYWNlKC8lNUQvZ2ksICddJylcbn1cbiIsIi8qKlxuICog5qC55o2uIGJhc2VVUkwg5ZKMIHVybCDmi7zmjqVcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIOivt+axgui3n+WcsOWdgFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIOivt+axguWPguaVsOWcsOWdgFxuICogQHJldHVybnMge3N0cmluZ30g5ou85o6l5ZCO55qE5Zyw5Z2AXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbWJpbmVVUkwoYmFzZVVSTCA9ICcnLCByZWxhdGl2ZVVSTCA9ICcnKSB7XG4gIC8vIOWIpOaWreaYr+WQpiBodHRwOi8vIOaIliBodHRwczovLyDlvIDlpLRcbiAgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChyZWxhdGl2ZVVSTCkpIHJldHVybiByZWxhdGl2ZVVSTFxuICAvLyDljrvpmaQgYmFzZVVSTCDnu5PlsL7mlpzmnaDvvIzljrvpmaQgcmVsYXRpdmVVUkwg5byA5aS05pac5p2g77yM5YaN5Yik5pat5ou85o6lXG4gIHJldHVybiByZWxhdGl2ZVVSTCA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKSA6IGJhc2VVUkxcbn1cbiIsImltcG9ydCBhZGFwdGVyIGZyb20gJy4vYWRhcHRlcnMvaHR0cCdcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgTUVUSE9EID0gWydnZXQnLCAncG9zdCcsICdwdXQnLCAnZGVsZXRlJywgJ2Nvbm5lY3QnLCAnaGVhZCcsICdvcHRpb25zJywgJ3RyYWNlJ11cbmV4cG9ydCBjb25zdCBIRUFERVIgPSBbJ2NvbW1vbicsIC4uLk1FVEhPRF1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXIsXG4gIGhlYWRlcjoge30sXG4gIG1ldGhvZDogJ2dldCcsXG4gIHRpbWVvdXQ6IDMwMDAwLFxuICBkYXRhVHlwZTogJ2pzb24nLFxuICByZXNwb25zZVR5cGU6ICd0ZXh0JyxcbiAgc3NsVmVyaWZ5OiB0cnVlLFxuICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICBmaXJzdElwdjQ6IGZhbHNlLFxuICB2YWxpZGF0ZVN0YXR1czogc3RhdHVzQ29kZSA9PiBzdGF0dXNDb2RlID49IDIwMCAmJiBzdGF0dXNDb2RlIDwgMzAwXG59XG5cbmZvckVhY2goSEVBREVSLCBoID0+IChkZWZhdWx0cy5oZWFkZXJbaF0gPSB7fSkpXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRzXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGFwdGVyKGNvbmZpZywgUmVxdWVzdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIOWIpOaWreaYr+WQpuiiq+WPlua2iOivt+axglxuICAgIGlmIChSZXF1ZXN0LmFib3J0ZWQpIHtcbiAgICAgIHJldHVybiByZWplY3Qoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGVyck1zZzogJ3JlcXVlc3Q6ZmFpbCBhYm9ydCdcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8g5Y+R6LW36K+35rGC77yM5bm25oyC6L29IFJlcXVlc3RUYXNrXG4gICAgUmVxdWVzdC50YXNrID0gdW5pLnJlcXVlc3Qoe1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgY29tcGxldGU6IHJlc3VsdCA9PiB7XG4gICAgICAgIC8vIOagueaNrueKtuaAgeeggeWIpOaWreimgeaJp+ihjOeahOinpuWPkeeahOeKtuaAgVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHsgY29uZmlnLCAuLi5yZXN1bHQgfVxuICAgICAgICAhY29uZmlnLnZhbGlkYXRlU3RhdHVzIHx8IGNvbmZpZy52YWxpZGF0ZVN0YXR1cyhyZXN1bHQuc3RhdHVzQ29kZSlcbiAgICAgICAgICA/IHJlc29sdmUocmVzcG9uc2UpXG4gICAgICAgICAgOiByZWplY3QocmVzcG9uc2UpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOivt+axguexu+WGhemDqOWIpOaWreaYr+WQpuaJp+ihjOebkeWQrCBIVFRQIFJlc3BvbnNlIEhlYWRlciDkuovku7ZcbiAgICBSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkKClcbiAgICBSZXF1ZXN0Lm9mZkhlYWRlcnNSZWNlaXZlZCgpXG5cbiAgICAvLyDmoLnmja7phY3nva7nmoQgeGhyIOWxnuaAp+aJp+ihjOiOt+WPliBSZXF1ZXN0VGFza1xuICAgIGNvbmZpZy54aHI/LihSZXF1ZXN0LnRhc2ssIGNvbmZpZylcbiAgfSlcbn1cbiIsIi8qKlxuICog5rS+5Y+R6K+35rGC5ouS57ud5pa55rOV77yM5aSE55CG5Y+R6LW36K+35rGC5YmN6ZSZ6K+v77yM5Y+W5raI5omn6KGM6K+35rGC77yM5bm26Ziy5q2i6L+b5YWl5ZON5bqU5oum5oiq5ZmoXG4gKiBAcGFyYW0geyp9IHJlYXNvbiDplJnor6/ljp/lm6BcbiAqIEByZXR1cm5zIHtQcm9taXNlfSDlsIHoo4XkuoYgX19DQU5DRUxfXyDnmoTlpLHotKXlr7nosaFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoQ2FuY2VsKHJlYXNvbikge1xuICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgIHJlYXNvbixcbiAgICBfX0NBTkNFTF9fOiB0cnVlXG4gIH0pXG59XG5cbi8qKlxuICog5oum5oiq5aSx6LSl5a+56LGhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCDlk43lupTplJnor6/mi6bmiKrlmahcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyY2VwdENhbmNlbChyZWplY3RlZCkge1xuICAvLyDliKTmlq3lj5Hotbfor7fmsYLliY3mmK/lkKblj5HnlJ/plJnor6/vvIzlpoLmnpzlj5HnlJ/plJnor6/liJnkuI3miafooYzlkI7pnaLnmoTlk43lupTplJnor6/mi6bmiKrlmahcbiAgcmV0dXJuIChcbiAgICByZWplY3RlZCAmJiAocmVzcG9uc2UgPT4gKHJlc3BvbnNlLl9fQ0FOQ0VMX18gPyBQcm9taXNlLnJlamVjdChyZXNwb25zZSkgOiByZWplY3RlZChyZXNwb25zZSkpKVxuICApXG59XG5cbi8qKlxuICog5YiG56a75aSx6LSl5a+56LGhXG4gKiBAcGFyYW0geyp9IHJlc3BvbnNlIOWwgeijheS6hiBfX0NBTkNFTF9fIOeahOWksei0peWvueixoVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0YWNoQ2FuY2VsKHsgX19DQU5DRUxfXywgLi4uZXJyb3IgfSkge1xuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoX19DQU5DRUxfXyA/IGVycm9yLnJlYXNvbiA6IGVycm9yKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdFwicHVsbGRvd25cIjogXCJcXHVlNTg4XCIsXHJcblx0XCJyZWZyZXNoZW1wdHlcIjogXCJcXHVlNDYxXCIsXHJcblx0XCJiYWNrXCI6IFwiXFx1ZTQ3MVwiLFxyXG5cdFwiZm9yd2FyZFwiOiBcIlxcdWU0NzBcIixcclxuXHRcIm1vcmVcIjogXCJcXHVlNTA3XCIsXHJcblx0XCJtb3JlLWZpbGxlZFwiOiBcIlxcdWU1MzdcIixcclxuXHRcInNjYW5cIjogXCJcXHVlNjEyXCIsXHJcblx0XCJxcVwiOiBcIlxcdWUyNjRcIixcclxuXHRcIndlaWJvXCI6IFwiXFx1ZTI2MFwiLFxyXG5cdFwid2VpeGluXCI6IFwiXFx1ZTI2MVwiLFxyXG5cdFwicGVuZ3lvdXF1YW5cIjogXCJcXHVlMjYyXCIsXHJcblx0XCJsb29wXCI6IFwiXFx1ZTU2NVwiLFxyXG5cdFwicmVmcmVzaFwiOiBcIlxcdWU0MDdcIixcclxuXHRcInJlZnJlc2gtZmlsbGVkXCI6IFwiXFx1ZTQzN1wiLFxyXG5cdFwiYXJyb3d0aGluZG93blwiOiBcIlxcdWU1ODVcIixcclxuXHRcImFycm93dGhpbmxlZnRcIjogXCJcXHVlNTg2XCIsXHJcblx0XCJhcnJvd3RoaW5yaWdodFwiOiBcIlxcdWU1ODdcIixcclxuXHRcImFycm93dGhpbnVwXCI6IFwiXFx1ZTU4NFwiLFxyXG5cdFwidW5kby1maWxsZWRcIjogXCJcXHVlN2Q2XCIsXHJcblx0XCJ1bmRvXCI6IFwiXFx1ZTQwNlwiLFxyXG5cdFwicmVkb1wiOiBcIlxcdWU0MDVcIixcclxuXHRcInJlZG8tZmlsbGVkXCI6IFwiXFx1ZTdkOVwiLFxyXG5cdFwiYmFyc1wiOiBcIlxcdWU1NjNcIixcclxuXHRcImNoYXRib3hlc1wiOiBcIlxcdWUyMDNcIixcclxuXHRcImNhbWVyYVwiOiBcIlxcdWUzMDFcIixcclxuXHRcImNoYXRib3hlcy1maWxsZWRcIjogXCJcXHVlMjMzXCIsXHJcblx0XCJjYW1lcmEtZmlsbGVkXCI6IFwiXFx1ZTdlZlwiLFxyXG5cdFwiY2FydC1maWxsZWRcIjogXCJcXHVlN2Y0XCIsXHJcblx0XCJjYXJ0XCI6IFwiXFx1ZTdmNVwiLFxyXG5cdFwiY2hlY2tib3gtZmlsbGVkXCI6IFwiXFx1ZTQ0MlwiLFxyXG5cdFwiY2hlY2tib3hcIjogXCJcXHVlN2ZhXCIsXHJcblx0XCJhcnJvd2xlZnRcIjogXCJcXHVlNTgyXCIsXHJcblx0XCJhcnJvd2Rvd25cIjogXCJcXHVlNTgxXCIsXHJcblx0XCJhcnJvd3JpZ2h0XCI6IFwiXFx1ZTU4M1wiLFxyXG5cdFwic21hbGxjaXJjbGUtZmlsbGVkXCI6IFwiXFx1ZTgwMVwiLFxyXG5cdFwiYXJyb3d1cFwiOiBcIlxcdWU1ODBcIixcclxuXHRcImNpcmNsZVwiOiBcIlxcdWU0MTFcIixcclxuXHRcImV5ZS1maWxsZWRcIjogXCJcXHVlNTY4XCIsXHJcblx0XCJleWUtc2xhc2gtZmlsbGVkXCI6IFwiXFx1ZTgyMlwiLFxyXG5cdFwiZXllLXNsYXNoXCI6IFwiXFx1ZTgyM1wiLFxyXG5cdFwiZXllXCI6IFwiXFx1ZTgyNFwiLFxyXG5cdFwiZmxhZy1maWxsZWRcIjogXCJcXHVlODI1XCIsXHJcblx0XCJmbGFnXCI6IFwiXFx1ZTUwOFwiLFxyXG5cdFwiZ2Vhci1maWxsZWRcIjogXCJcXHVlNTMyXCIsXHJcblx0XCJyZWxvYWRcIjogXCJcXHVlNDYyXCIsXHJcblx0XCJnZWFyXCI6IFwiXFx1ZTUwMlwiLFxyXG5cdFwiaGFuZC10aHVtYnNkb3duLWZpbGxlZFwiOiBcIlxcdWU4M2JcIixcclxuXHRcImhhbmQtdGh1bWJzZG93blwiOiBcIlxcdWU4M2NcIixcclxuXHRcImhhbmQtdGh1bWJzdXAtZmlsbGVkXCI6IFwiXFx1ZTgzZFwiLFxyXG5cdFwiaGVhcnQtZmlsbGVkXCI6IFwiXFx1ZTgzZVwiLFxyXG5cdFwiaGFuZC10aHVtYnN1cFwiOiBcIlxcdWU4M2ZcIixcclxuXHRcImhlYXJ0XCI6IFwiXFx1ZTg0MFwiLFxyXG5cdFwiaG9tZVwiOiBcIlxcdWU1MDBcIixcclxuXHRcImluZm9cIjogXCJcXHVlNTA0XCIsXHJcblx0XCJob21lLWZpbGxlZFwiOiBcIlxcdWU1MzBcIixcclxuXHRcImluZm8tZmlsbGVkXCI6IFwiXFx1ZTUzNFwiLFxyXG5cdFwiY2lyY2xlLWZpbGxlZFwiOiBcIlxcdWU0NDFcIixcclxuXHRcImNoYXQtZmlsbGVkXCI6IFwiXFx1ZTg0N1wiLFxyXG5cdFwiY2hhdFwiOiBcIlxcdWUyNjNcIixcclxuXHRcIm1haWwtb3Blbi1maWxsZWRcIjogXCJcXHVlODRkXCIsXHJcblx0XCJlbWFpbC1maWxsZWRcIjogXCJcXHVlMjMxXCIsXHJcblx0XCJtYWlsLW9wZW5cIjogXCJcXHVlODRlXCIsXHJcblx0XCJlbWFpbFwiOiBcIlxcdWUyMDFcIixcclxuXHRcImNoZWNrbWFya2VtcHR5XCI6IFwiXFx1ZTQ3MlwiLFxyXG5cdFwibGlzdFwiOiBcIlxcdWU1NjJcIixcclxuXHRcImxvY2tlZC1maWxsZWRcIjogXCJcXHVlODU2XCIsXHJcblx0XCJsb2NrZWRcIjogXCJcXHVlNTA2XCIsXHJcblx0XCJtYXAtZmlsbGVkXCI6IFwiXFx1ZTg1Y1wiLFxyXG5cdFwibWFwLXBpblwiOiBcIlxcdWU4NWVcIixcclxuXHRcIm1hcC1waW4tZWxsaXBzZVwiOiBcIlxcdWU4NjRcIixcclxuXHRcIm1hcFwiOiBcIlxcdWUzNjRcIixcclxuXHRcIm1pbnVzLWZpbGxlZFwiOiBcIlxcdWU0NDBcIixcclxuXHRcIm1pYy1maWxsZWRcIjogXCJcXHVlMzMyXCIsXHJcblx0XCJtaW51c1wiOiBcIlxcdWU0MTBcIixcclxuXHRcIm1pY29mZlwiOiBcIlxcdWUzNjBcIixcclxuXHRcIm1pY1wiOiBcIlxcdWUzMDJcIixcclxuXHRcImNsZWFyXCI6IFwiXFx1ZTQzNFwiLFxyXG5cdFwic21hbGxjaXJjbGVcIjogXCJcXHVlODY4XCIsXHJcblx0XCJjbG9zZVwiOiBcIlxcdWU0MDRcIixcclxuXHRcImNsb3NlZW1wdHlcIjogXCJcXHVlNDYwXCIsXHJcblx0XCJwYXBlcmNsaXBcIjogXCJcXHVlNTY3XCIsXHJcblx0XCJwYXBlcnBsYW5lXCI6IFwiXFx1ZTUwM1wiLFxyXG5cdFwicGFwZXJwbGFuZS1maWxsZWRcIjogXCJcXHVlODZlXCIsXHJcblx0XCJwZXJzb24tZmlsbGVkXCI6IFwiXFx1ZTEzMVwiLFxyXG5cdFwiY29udGFjdC1maWxsZWRcIjogXCJcXHVlMTMwXCIsXHJcblx0XCJwZXJzb25cIjogXCJcXHVlMTAxXCIsXHJcblx0XCJjb250YWN0XCI6IFwiXFx1ZTEwMFwiLFxyXG5cdFwiaW1hZ2VzLWZpbGxlZFwiOiBcIlxcdWU4N2FcIixcclxuXHRcInBob25lXCI6IFwiXFx1ZTIwMFwiLFxyXG5cdFwiaW1hZ2VzXCI6IFwiXFx1ZTg3YlwiLFxyXG5cdFwiaW1hZ2VcIjogXCJcXHVlMzYzXCIsXHJcblx0XCJpbWFnZS1maWxsZWRcIjogXCJcXHVlODc3XCIsXHJcblx0XCJsb2NhdGlvbi1maWxsZWRcIjogXCJcXHVlMzMzXCIsXHJcblx0XCJsb2NhdGlvblwiOiBcIlxcdWUzMDNcIixcclxuXHRcInBsdXMtZmlsbGVkXCI6IFwiXFx1ZTQzOVwiLFxyXG5cdFwicGx1c1wiOiBcIlxcdWU0MDlcIixcclxuXHRcInBsdXNlbXB0eVwiOiBcIlxcdWU0NjhcIixcclxuXHRcImhlbHAtZmlsbGVkXCI6IFwiXFx1ZTUzNVwiLFxyXG5cdFwiaGVscFwiOiBcIlxcdWU1MDVcIixcclxuXHRcIm5hdmlnYXRlLWZpbGxlZFwiOiBcIlxcdWU4ODRcIixcclxuXHRcIm5hdmlnYXRlXCI6IFwiXFx1ZTUwMVwiLFxyXG5cdFwibWljLXNsYXNoLWZpbGxlZFwiOiBcIlxcdWU4OTJcIixcclxuXHRcInNlYXJjaFwiOiBcIlxcdWU0NjZcIixcclxuXHRcInNldHRpbmdzXCI6IFwiXFx1ZTU2MFwiLFxyXG5cdFwic291bmRcIjogXCJcXHVlNTkwXCIsXHJcblx0XCJzb3VuZC1maWxsZWRcIjogXCJcXHVlOGExXCIsXHJcblx0XCJzcGlubmVyLWN5Y2xlXCI6IFwiXFx1ZTQ2NVwiLFxyXG5cdFwiZG93bmxvYWQtZmlsbGVkXCI6IFwiXFx1ZThhNFwiLFxyXG5cdFwicGVyc29uYWRkLWZpbGxlZFwiOiBcIlxcdWUxMzJcIixcclxuXHRcInZpZGVvY2FtLWZpbGxlZFwiOiBcIlxcdWU4YWZcIixcclxuXHRcInBlcnNvbmFkZFwiOiBcIlxcdWUxMDJcIixcclxuXHRcInVwbG9hZFwiOiBcIlxcdWU0MDJcIixcclxuXHRcInVwbG9hZC1maWxsZWRcIjogXCJcXHVlOGIxXCIsXHJcblx0XCJzdGFyaGFsZlwiOiBcIlxcdWU0NjNcIixcclxuXHRcInN0YXItZmlsbGVkXCI6IFwiXFx1ZTQzOFwiLFxyXG5cdFwic3RhclwiOiBcIlxcdWU0MDhcIixcclxuXHRcInRyYXNoXCI6IFwiXFx1ZTQwMVwiLFxyXG5cdFwicGhvbmUtZmlsbGVkXCI6IFwiXFx1ZTIzMFwiLFxyXG5cdFwiY29tcG9zZVwiOiBcIlxcdWU0MDBcIixcclxuXHRcInZpZGVvY2FtXCI6IFwiXFx1ZTMwMFwiLFxyXG5cdFwidHJhc2gtZmlsbGVkXCI6IFwiXFx1ZThkY1wiLFxyXG5cdFwiZG93bmxvYWRcIjogXCJcXHVlNDAzXCIsXHJcblx0XCJjaGF0YnViYmxlLWZpbGxlZFwiOiBcIlxcdWUyMzJcIixcclxuXHRcImNoYXRidWJibGVcIjogXCJcXHVlMjAyXCIsXHJcblx0XCJjbG91ZC1kb3dubG9hZFwiOiBcIlxcdWU4ZTRcIixcclxuXHRcImNsb3VkLXVwbG9hZC1maWxsZWRcIjogXCJcXHVlOGU1XCIsXHJcblx0XCJjbG91ZC11cGxvYWRcIjogXCJcXHVlOGU2XCIsXHJcblx0XCJjbG91ZC1kb3dubG9hZC1maWxsZWRcIjogXCJcXHVlOGU5XCIsXHJcblx0XCJoZWFkcGhvbmVzXCI6XCJcXHVlOGJmXCIsXHJcblx0XCJzaG9wXCI6XCJcXHVlNjA5XCJcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9