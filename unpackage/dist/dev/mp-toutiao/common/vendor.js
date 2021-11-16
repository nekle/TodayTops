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
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1tcC10b3V0aWFvL2Rpc3QvaW5kZXguanM/ZjI2NiIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvbXAtdnVlL2Rpc3QvbXAucnVudGltZS5lc20uanM/NjZmZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1pMThuL2Rpc3QvdW5pLWkxOG4uZXMuanM/MzdkYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/ZjBjNSIsInVuaS1hcHA6Ly8vYWpheC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9pbmRleC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvY29yZS9BamF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcz9hMzRhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzP2JiZGQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcz85NmNmIiwidW5pLWFwcDovLy91bmlfbW9kdWxlcy91LWFqYXgvanNfc2RrL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvYWRhcHRlcnMvUmVxdWVzdC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvaGVscGVycy9kZXRhY2hDb25maWcuanMiLCJ1bmktYXBwOi8vL3VuaV9tb2R1bGVzL3UtYWpheC9qc19zZGsvbGliL2hlbHBlcnMvaXNDYWxsYmFjay5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvdXRpbHMuanMiLCJ1bmktYXBwOi8vL3VuaV9tb2R1bGVzL3UtYWpheC9qc19zZGsvbGliL2hlbHBlcnMvbWVyZ2VDb25maWcuanMiLCJ1bmktYXBwOi8vL3VuaV9tb2R1bGVzL3UtYWpheC9qc19zZGsvbGliL2hlbHBlcnMvb3JpZ2luVVJMLmpzIiwidW5pLWFwcDovLy91bmlfbW9kdWxlcy91LWFqYXgvanNfc2RrL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvaGVscGVycy9jb21iaW5lVVJMLmpzIiwidW5pLWFwcDovLy91bmlfbW9kdWxlcy91LWFqYXgvanNfc2RrL2xpYi9kZWZhdWx0cy5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvYWRhcHRlcnMvaHR0cC5qcyIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdS1hamF4L2pzX3Nkay9saWIvY29yZS9oYW5kbGVDYW5jZWwuanMiLCJ1bmktYXBwOi8vL3VuaV9tb2R1bGVzL3VuaS1pY29ucy9jb21wb25lbnRzL3VuaS1pY29ucy9pY29ucy5qcyJdLCJuYW1lcyI6WyJyZWFsQXRvYiIsImI2NCIsImI2NHJlIiwiYXRvYiIsInN0ciIsIlN0cmluZyIsInJlcGxhY2UiLCJ0ZXN0IiwiRXJyb3IiLCJzbGljZSIsImxlbmd0aCIsImJpdG1hcCIsInJlc3VsdCIsInIxIiwicjIiLCJpIiwiaW5kZXhPZiIsImNoYXJBdCIsImZyb21DaGFyQ29kZSIsImI2NERlY29kZVVuaWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzcGxpdCIsIm1hcCIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJqb2luIiwiZ2V0Q3VycmVudFVzZXJJbmZvIiwidG9rZW4iLCJ0dCIsImdldFN0b3JhZ2VTeW5jIiwidG9rZW5BcnIiLCJ1aWQiLCJyb2xlIiwicGVybWlzc2lvbiIsInRva2VuRXhwaXJlZCIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZXhwIiwiaWF0IiwidW5pSWRNaXhpbiIsIlZ1ZSIsInByb3RvdHlwZSIsInVuaUlESGFzUm9sZSIsInJvbGVJZCIsInVuaUlESGFzUGVybWlzc2lvbiIsInBlcm1pc3Npb25JZCIsInVuaUlEVG9rZW5WYWxpZCIsIkRhdGUiLCJub3ciLCJfdG9TdHJpbmciLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImlzRm4iLCJmbiIsImlzU3RyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsImNhbGwiLCJoYXNPd24iLCJrZXkiLCJub29wIiwiY2FjaGVkIiwiY2FjaGUiLCJjcmVhdGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsIl8iLCJ0b1VwcGVyQ2FzZSIsIkhPT0tTIiwiZ2xvYmFsSW50ZXJjZXB0b3JzIiwic2NvcGVkSW50ZXJjZXB0b3JzIiwibWVyZ2VIb29rIiwicGFyZW50VmFsIiwiY2hpbGRWYWwiLCJyZXMiLCJjb25jYXQiLCJBcnJheSIsImlzQXJyYXkiLCJkZWR1cGVIb29rcyIsImhvb2tzIiwicHVzaCIsInJlbW92ZUhvb2siLCJob29rIiwiaW5kZXgiLCJzcGxpY2UiLCJtZXJnZUludGVyY2VwdG9ySG9vayIsImludGVyY2VwdG9yIiwib3B0aW9uIiwia2V5cyIsImZvckVhY2giLCJyZW1vdmVJbnRlcmNlcHRvckhvb2siLCJhZGRJbnRlcmNlcHRvciIsIm1ldGhvZCIsInJlbW92ZUludGVyY2VwdG9yIiwid3JhcHBlckhvb2siLCJkYXRhIiwiaXNQcm9taXNlIiwidGhlbiIsInF1ZXVlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FsbGJhY2siLCJ3cmFwcGVyT3B0aW9ucyIsIm9wdGlvbnMiLCJuYW1lIiwib2xkQ2FsbGJhY2siLCJjYWxsYmFja0ludGVyY2VwdG9yIiwid3JhcHBlclJldHVyblZhbHVlIiwicmV0dXJuVmFsdWUiLCJyZXR1cm5WYWx1ZUhvb2tzIiwiZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyIsInNjb3BlZEludGVyY2VwdG9yIiwiaW52b2tlQXBpIiwiYXBpIiwicGFyYW1zIiwiaW52b2tlIiwicHJvbWlzZUludGVyY2VwdG9yIiwicmVqZWN0IiwiU1lOQ19BUElfUkUiLCJDT05URVhUX0FQSV9SRSIsIkNPTlRFWFRfQVBJX1JFX0VYQyIsIkFTWU5DX0FQSSIsIkNBTExCQUNLX0FQSV9SRSIsImlzQ29udGV4dEFwaSIsImlzU3luY0FwaSIsImlzQ2FsbGJhY2tBcGkiLCJoYW5kbGVQcm9taXNlIiwiY2F0Y2giLCJlcnIiLCJzaG91bGRQcm9taXNlIiwiZmluYWxseSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJyZWFzb24iLCJwcm9taXNpZnkiLCJwcm9taXNlQXBpIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsImFzc2lnbiIsIkVQUyIsIkJBU0VfREVWSUNFX1dJRFRIIiwiaXNJT1MiLCJkZXZpY2VXaWR0aCIsImRldmljZURQUiIsImNoZWNrRGV2aWNlV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicGl4ZWxSYXRpbyIsIndpbmRvd1dpZHRoIiwidXB4MnB4IiwibnVtYmVyIiwibmV3RGV2aWNlV2lkdGgiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJnZXRMb2NhbGUiLCJhcHAiLCJnZXRBcHAiLCJhbGxvd0RlZmF1bHQiLCIkdm0iLCIkbG9jYWxlIiwibGFuZ3VhZ2UiLCJzZXRMb2NhbGUiLCJsb2NhbGUiLCJvbGRMb2NhbGUiLCJvbkxvY2FsZUNoYW5nZUNhbGxiYWNrcyIsIm9uTG9jYWxlQ2hhbmdlIiwiZ2xvYmFsIiwiaW50ZXJjZXB0b3JzIiwiYmFzZUFwaSIsImZyZWV6ZSIsIl9fcHJvdG9fXyIsIkV2ZW50Q2hhbm5lbCIsImlkIiwiZXZlbnRzIiwibGlzdGVuZXIiLCJlbWl0Q2FjaGUiLCJvbiIsImV2ZW50TmFtZSIsImFyZ3MiLCJmbnMiLCJvcHQiLCJhcHBseSIsImZpbHRlciIsInR5cGUiLCJfYWRkTGlzdGVuZXIiLCJfY2xlYXJDYWNoZSIsImNhY2hlQXJncyIsImVtaXQiLCJzaGlmdCIsImV2ZW50Q2hhbm5lbHMiLCJldmVudENoYW5uZWxTdGFjayIsImluaXRFdmVudENoYW5uZWwiLCJldmVudENoYW5uZWwiLCJnZXRFdmVudENoYW5uZWwiLCJuYXZpZ2F0ZVRvIiwiZnJvbUFyZ3MiLCJ0b0FyZ3MiLCJ1cmwiLCJmcm9tUmVzIiwidG9SZXMiLCJmaW5kRXhpc3RzUGFnZUluZGV4IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW4iLCJwYWdlIiwiJHBhZ2UiLCJmdWxsUGF0aCIsInJlZGlyZWN0VG8iLCJleGlzdHMiLCJkZWx0YSIsImV4aXN0c1BhZ2VJbmRleCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnRJbmRleCIsInBhcnNlSW50IiwiY3VycmVudCIsImlzTmFOIiwidXJscyIsIml0ZW0iLCJpbmRpY2F0b3IiLCJsb29wIiwiVVVJRF9LRVkiLCJkZXZpY2VJZCIsImFkZFV1aWQiLCJyYW5kb20iLCJzZXRTdG9yYWdlIiwiYWRkU2FmZUFyZWFJbnNldHMiLCJzYWZlQXJlYSIsInNhZmVBcmVhSW5zZXRzIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwid2luZG93SGVpZ2h0IiwiZ2V0U3lzdGVtSW5mbyIsIm9OYW1lIiwibk5hbWUiLCJnZXRVc2VyUHJvZmlsZSIsImNhbklVc2UiLCJ0b2RvcyIsImNhbklVc2VzIiwicHJvdG9jb2xzIiwiY2hvb3NlSW1hZ2UiLCJzaXplVHlwZSIsImNvbm5lY3RTb2NrZXQiLCJjaG9vc2VWaWRlbyIsImNhbWVyYSIsInNjYW5Db2RlIiwib25seUZyb21DYW1lcmEiLCJzY2FuVHlwZSIsInN0YXJ0QWNjZWxlcm9tZXRlciIsImludGVydmFsIiwic2hvd1RvYXN0IiwiaW1hZ2UiLCJtYXNrIiwic2hvd0xvYWRpbmciLCJzaG93TW9kYWwiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1Db2xvciIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1Db2xvciIsImxvZ2luIiwic2NvcGVzIiwidGltZW91dCIsImdldFVzZXJJbmZvIiwibGFuZyIsInJlcXVlc3RQYXltZW50IiwicGF5Iiwib3JkZXJJbmZvIiwiZ2V0RmlsZUluZm8iLCJkaWdlc3RBbGdvcml0aG0iLCJDQUxMQkFDS1MiLCJwcm9jZXNzQ2FsbGJhY2siLCJtZXRob2ROYW1lIiwicHJvY2Vzc1JldHVyblZhbHVlIiwicHJvY2Vzc0FyZ3MiLCJhcmdzT3B0aW9uIiwia2VlcEZyb21BcmdzIiwia2V5T3B0aW9uIiwiY29uc29sZSIsIndhcm4iLCJrZWVwUmV0dXJuVmFsdWUiLCJ3cmFwcGVyIiwicHJvdG9jb2wiLCJhcmcxIiwiYXJnMiIsInRvZG9BcGlzIiwiVE9ET1MiLCJjcmVhdGVUb2RvQXBpIiwidG9kb0FwaSIsImVyck1zZyIsInByb3ZpZGVycyIsIm9hdXRoIiwic2hhcmUiLCJwYXltZW50IiwiZ2V0UHJvdmlkZXIiLCJzZXJ2aWNlIiwicHJvdmlkZXIiLCJleHRyYUFwaSIsImdldEVtaXR0ZXIiLCJFbWl0dGVyIiwiZ2V0VW5pRW1pdHRlciIsImN0eCIsIiRvbiIsImFyZ3VtZW50cyIsIiRvZmYiLCIkb25jZSIsIiRlbWl0IiwiZXZlbnRBcGkiLCJjcmVhdGVNZWRpYVF1ZXJ5T2JzZXJ2ZXIiLCJtZWRpYVF1ZXJ5T2JzZXJ2ZXIiLCJvcmllbnRhdGlvbiIsIm9ic2VydmUiLCJtYXRjaGVzIiwiaXRlbVZhbHVlIiwiZGlzY29ubmVjdCIsIk1QUGFnZSIsIlBhZ2UiLCJNUENvbXBvbmVudCIsIkNvbXBvbmVudCIsImN1c3RvbWl6ZVJFIiwiY3VzdG9taXplIiwiaW5pdFRyaWdnZXJFdmVudCIsIm1wSW5zdGFuY2UiLCJvbGRUcmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyRXZlbnQiLCJldmVudCIsImluaXRIb29rIiwiaXNDb21wb25lbnQiLCJsaWZldGltZXMiLCJvbGRIb29rIiwiX18kd3JhcHBlcmVkIiwiYWZ0ZXIiLCJQQUdFX0VWRU5UX0hPT0tTIiwiaW5pdE1vY2tzIiwidm0iLCJtb2NrcyIsIiRtcCIsIm1wVHlwZSIsIm1vY2siLCJoYXNIb29rIiwidnVlT3B0aW9ucyIsImRlZmF1bHQiLCJleHRlbmRPcHRpb25zIiwic3VwZXIiLCJtaXhpbnMiLCJmaW5kIiwibWl4aW4iLCJpbml0SG9va3MiLCJtcE9wdGlvbnMiLCJfX2NhbGxfaG9vayIsImluaXRWdWVDb21wb25lbnQiLCJWdWVDb21wb25lbnQiLCJleHRlbmQiLCJpbml0U2xvdHMiLCJ2dWVTbG90cyIsIiRzbG90cyIsInNsb3ROYW1lIiwiJHNjb3BlZFNsb3RzIiwiaW5pdFZ1ZUlkcyIsInZ1ZUlkcyIsIl8kdnVlSWQiLCJfJHZ1ZVBpZCIsImluaXREYXRhIiwiY29udGV4dCIsIm1ldGhvZHMiLCJlIiwicHJvY2VzcyIsIlZVRV9BUFBfREVCVUciLCJzdHJpbmdpZnkiLCJfX2xpZmVjeWNsZV9ob29rc19fIiwiUFJPUF9UWVBFUyIsIkJvb2xlYW4iLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwibmV3VmFsIiwib2xkVmFsIiwiaW5pdEJlaGF2aW9ycyIsImluaXRCZWhhdmlvciIsInZ1ZUJlaGF2aW9ycyIsImJlaGF2aW9ycyIsInZ1ZUV4dGVuZHMiLCJleHRlbmRzIiwidnVlTWl4aW5zIiwidnVlUHJvcHMiLCJwcm9wcyIsImJlaGF2aW9yIiwicHJvcGVydGllcyIsImluaXRQcm9wZXJ0aWVzIiwidnVlTWl4aW4iLCJwYXJzZVByb3BUeXBlIiwiZGVmYXVsdFZhbHVlIiwiZmlsZSIsImlzQmVoYXZpb3IiLCJ2dWVJZCIsImdlbmVyaWMiLCJzY29wZWRTbG90c0NvbXBpbGVyIiwic2V0RGF0YSIsIm9wdHMiLCJ3cmFwcGVyJDEiLCJtcCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZGV0YWlsIiwibWFya2VySWQiLCJnZXRFeHRyYVZhbHVlIiwiZGF0YVBhdGhzQXJyYXkiLCJkYXRhUGF0aEFycmF5IiwiZGF0YVBhdGgiLCJwcm9wUGF0aCIsInZhbHVlUGF0aCIsInZGb3IiLCJpc0ludGVnZXIiLCJzdWJzdHIiLCJfX2dldF92YWx1ZSIsInZGb3JJdGVtIiwidkZvcktleSIsInByb2Nlc3NFdmVudEV4dHJhIiwiZXh0cmEiLCJleHRyYU9iaiIsIl9fYXJnc19fIiwiZ2V0T2JqQnlBcnJheSIsImFyciIsImVsZW1lbnQiLCJwcm9jZXNzRXZlbnRBcmdzIiwiaXNDdXN0b20iLCJpc0N1c3RvbU1QRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbVR5cGUiLCJyZXQiLCJhcmciLCJPTkNFIiwiQ1VTVE9NIiwiaXNNYXRjaEV2ZW50VHlwZSIsImV2ZW50VHlwZSIsIm9wdFR5cGUiLCJnZXRDb250ZXh0Vm0iLCIkcGFyZW50IiwiJG9wdGlvbnMiLCIkc2NvcGUiLCJoYW5kbGVFdmVudCIsImV2ZW50T3B0cyIsImV2ZW50T3B0IiwiZXZlbnRzQXJyYXkiLCJpc09uY2UiLCJldmVudEFycmF5IiwiaGFuZGxlckN0eCIsImhhbmRsZXIiLCJvbmNlIiwiaTE4biIsInQiLCJpMThuTWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ1bndhdGNoIiwid2F0Y2hMb2NhbGUiLCIkZm9yY2VVcGRhdGUiLCIkJHQiLCJ2YWx1ZXMiLCJzZXRMb2NhbGUkMSIsImdldExvY2FsZSQxIiwiaW5pdEFwcExvY2FsZSIsImFwcFZtIiwic3RhdGUiLCJvYnNlcnZhYmxlIiwibG9jYWxlV2F0Y2hlcnMiLCIkd2F0Y2hMb2NhbGUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsInYiLCJ3YXRjaCIsImluaXRFdmVudENoYW5uZWwkMSIsImdldE9wZW5lckV2ZW50Q2hhbm5lbCIsIl9fZXZlbnRDaGFubmVsX18iLCJjYWxsSG9vayIsIl9faWRfXyIsImluaXRTY29wZWRTbG90c1BhcmFtcyIsImNlbnRlciIsInBhcmVudHMiLCIkaGFzU2NvcGVkU2xvdHNQYXJhbXMiLCJoYXMiLCIkZ2V0U2NvcGVkU2xvdHNQYXJhbXMiLCJvYmplY3QiLCIkc2V0U2NvcGVkU2xvdHNQYXJhbXMiLCJwcm9wc0RhdGEiLCJkZXN0cm95ZWQiLCJwYXJzZUJhc2VBcHAiLCJpbml0UmVmcyIsInN0b3JlIiwiJHN0b3JlIiwibXBIb3N0IiwiJGkxOG4iLCJfaTE4biIsImFwcE9wdGlvbnMiLCJvbkxhdW5jaCIsImdsb2JhbERhdGEiLCJfaXNNb3VudGVkIiwiZmluZFZtQnlWdWVJZCIsInZ1ZVBpZCIsIiRjaGlsZHJlbiIsImNoaWxkVm0iLCJwYXJlbnRWbSIsIkJlaGF2aW9yIiwiaGFuZGxlTGluayIsInBhcmVudCIsImlzUGFnZSIsIl9fbm9kZWlkX18iLCJfX25vZGVJZF9fIiwibWlub3JWZXJzaW9uIiwiU0RLVmVyc2lvbiIsIiRyZWZzIiwiY29tcG9uZW50cyIsInNlbGVjdEFsbENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJyZWYiLCJmb3JDb21wb25lbnRzIiwiaW5zdGFuY2VzIiwiaW5pdFJlbGF0aW9uIiwibm9kZUlkIiwid2Vidmlld0lkIiwiX193ZWJ2aWV3SWRfXyIsImhhbmRsZUxpbmskMSIsIiRyb290IiwicGFyc2VBcHAiLCJfJGZhbGxiYWNrIiwiY3JlYXRlZCIsInJvdXRlIiwiX19yb3V0ZV9fIiwiX19pbml0X2luamVjdGlvbnMiLCJfX2luaXRfcHJvdmlkZSIsImNyZWF0ZUFwcCIsIkFwcCIsImVuY29kZVJlc2VydmVSRSIsImVuY29kZVJlc2VydmVSZXBsYWNlciIsImNvbW1hUkUiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnlRdWVyeSIsImVuY29kZVN0ciIsInZhbCIsInVuZGVmaW5lZCIsInZhbDIiLCJ4IiwicGFyc2VCYXNlQ29tcG9uZW50IiwidnVlQ29tcG9uZW50T3B0aW9ucyIsIm11bHRpcGxlU2xvdHMiLCJhZGRHbG9iYWxDbGFzcyIsImNvbXBvbmVudE9wdGlvbnMiLCJfX2ZpbGUiLCJhdHRhY2hlZCIsIiRtb3VudCIsInJlYWR5IiwiZGV0YWNoZWQiLCIkZGVzdHJveSIsInBhZ2VMaWZldGltZXMiLCJzaG93IiwiaGlkZSIsInJlc2l6ZSIsInNpemUiLCJfX2wiLCJfX2UiLCJleHRlcm5hbENsYXNzZXMiLCJ3eHNDYWxsTWV0aG9kcyIsImNhbGxNZXRob2QiLCJwYXJzZUNvbXBvbmVudCIsIl9fbGlmZXRpbWVzX2F0dGFjaGVkIiwiaG9va3MkMSIsInBhcnNlQmFzZVBhZ2UiLCJ2dWVQYWdlT3B0aW9ucyIsInBhZ2VPcHRpb25zIiwib25Mb2FkIiwicXVlcnkiLCJjb3B5UXVlcnkiLCJpcyIsInBhcnNlUGFnZSIsImNyZWF0ZVBhZ2UiLCJjcmVhdGVDb21wb25lbnQiLCJjcmVhdGVTdWJwYWNrYWdlQXBwIiwib25TaG93Iiwib25BcHBTaG93Iiwib25IaWRlIiwib25BcHBIaWRlIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJjcmVhdGVQbHVnaW4iLCJjYW5JVXNlQXBpIiwiYXBpTmFtZSIsInVuaSIsIlByb3h5IiwidW5pJDEiLCJpc09iamVjdCIsImRlZmF1bHREZWxpbWl0ZXJzIiwiQmFzZUZvcm1hdHRlciIsIl9jYWNoZXMiLCJkZWxpbWl0ZXJzIiwidG9rZW5zIiwiY29tcGlsZSIsIlJFX1RPS0VOX0xJU1RfVkFMVUUiLCJSRV9UT0tFTl9OQU1FRF9WQUxVRSIsImZvcm1hdCIsInN0YXJ0RGVsaW1pdGVyIiwiZW5kRGVsaW1pdGVyIiwicG9zaXRpb24iLCJ0ZXh0IiwiY2hhciIsInN1YiIsImlzQ2xvc2VkIiwiY29tcGlsZWQiLCJtb2RlIiwiTE9DQUxFX1pIX0hBTlMiLCJMT0NBTEVfWkhfSEFOVCIsIkxPQ0FMRV9FTiIsIkxPQ0FMRV9GUiIsIkxPQ0FMRV9FUyIsImRlZmF1bHRGb3JtYXR0ZXIiLCJpbmNsdWRlIiwicGFydHMiLCJwYXJ0Iiwic3RhcnRzV2l0aCIsIm5vcm1hbGl6ZUxvY2FsZSIsIm1lc3NhZ2VzIiwidHJpbSIsInRvTG93ZXJDYXNlIiwiSTE4biIsImZhbGxiYWNrTG9jYWxlIiwid2F0Y2hlciIsImZvcm1hdGVyIiwid2F0Y2hlcnMiLCJvdmVycmlkZSIsImN1ck1lc3NhZ2VzIiwiaW50ZXJwb2xhdGUiLCJ3YXRjaEFwcExvY2FsZSIsIm5ld0xvY2FsZSIsIiR3YXRjaCIsImdldERlZmF1bHRMb2NhbGUiLCJpbml0VnVlSTE4biIsIl9fdW5pQ29uZmlnIiwiaXNXYXRjaGVkQXBwTG9jYWxlIiwiZiIsImFkZCIsImlzU3RyaW5nIiwiaGFzSTE4bkpzb24iLCJqc29uT2JqIiwid2Fsa0pzb25PYmoiLCJpc0kxOG5TdHIiLCJwYXJzZUkxOG5Kc29uIiwiY29tcGlsZVN0ciIsImNvbXBpbGVJMThuSnNvblN0ciIsImpzb25TdHIiLCJsb2NhbGVzIiwibG9jYWxlVmFsdWVzIiwidW5zaGlmdCIsImNvbXBpbGVKc29uT2JqIiwiY29tcGlsZVZhbHVlIiwidmFsdWVMb2NhbGVzIiwibG9jYWxWYWx1ZSIsIndhbGsiLCJyZXNvbHZlTG9jYWxlIiwicmVzb2x2ZUxvY2FsZUNoYWluIiwiY2hhaW4iLCJwb3AiLCJpbnN0YW5jZSIsImFqYXgiLCJiYXNlVVJMIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInJlc3BvbnNlIiwiY3JlYXRlSW5zdGFuY2UiLCJkZWZhdWx0Q29uZmlnIiwiQWpheCIsImluc3RhbmNlQ29uZmlnIiwiZGV0YWNoQ29uZmlnIiwiUmVxdWVzdCIsImRpc3BhdGNoQ2FuY2VsIiwiZGVzYyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwiYXNjIiwibWVyZ2VDb25maWciLCJkZXRhY2hDYW5jZWwiLCJJbnRlcmNlcHRvck1hbmFnZXIiLCJfY29uZmlnIiwiTUVUSE9EIiwic2V0VGltZW91dCIsIm9yaWdpbiIsImRlZmF1bHRzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJsIiwiaGFuZGxlcnMiLCJSZXF1ZXN0Q29uc3RydWN0b3IiLCJhYm9ydGVkIiwidGFzayIsImFib3J0Iiwib25IZWFkZXJzUmVjZWl2ZWQiLCJvZmZIZWFkZXJzUmVjZWl2ZWQiLCJvbkhlYWRlcnNSZWNlaXZlZENhbGxiYWNrIiwib2ZmSGVhZGVyc1JlY2VpdmVkQ2FsbGJhY2siLCJpc1NpbmdsZSIsImlzQ2FsbGJhY2siLCJmaWVsZCIsImluY2x1ZGVzIiwiayIsIm1lcmdlIiwic291cmNlIiwidHJ5Q2F0Y2giLCJjb25maWcxIiwiY29uZmlnMiIsImNvbmZpZ0tleXMiLCJwcm9wIiwib3JpZ2luVVJMIiwidSIsImRpc3BhdGNoUmVxdWVzdCIsImhlYWRlciIsImNvbW1vbiIsIkhFQURFUiIsImgiLCJhZGFwdGVyIiwiYnVpbGRVUkwiLCJoYXNobWFya0luZGV4IiwiY29tYmluZVVSTCIsInJlbGF0aXZlVVJMIiwiZGF0YVR5cGUiLCJyZXNwb25zZVR5cGUiLCJzc2xWZXJpZnkiLCJ3aXRoQ3JlZGVudGlhbHMiLCJmaXJzdElwdjQiLCJ2YWxpZGF0ZVN0YXR1cyIsInN0YXR1c0NvZGUiLCJ4aHIiLCJfX0NBTkNFTF9fIiwiaW50ZXJjZXB0Q2FuY2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O21VQUFBO0FBQ0EsZ0U7O0FBRUEsSUFBSUEsUUFBSjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsbUVBQVo7QUFDQSxJQUFNQyxLQUFLLEdBQUcsc0VBQWQ7O0FBRUEsSUFBSSxPQUFPQyxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0FBQzlCSCxVQUFRLEdBQUcsa0JBQVVJLEdBQVYsRUFBZTtBQUN4QkEsT0FBRyxHQUFHQyxNQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZRSxPQUFaLENBQW9CLGVBQXBCLEVBQXFDLEVBQXJDLENBQU47QUFDQSxRQUFJLENBQUNKLEtBQUssQ0FBQ0ssSUFBTixDQUFXSCxHQUFYLENBQUwsRUFBc0IsQ0FBRSxNQUFNLElBQUlJLEtBQUosQ0FBVSwwRkFBVixDQUFOLENBQTZH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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRztBQUNSO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHVDQUF1Qyx3QkFBd0IsRUFBRTtBQUNqRSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQyxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSx3Q0FBd0MsRUFBRTtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0IsRUFBRTtBQUNyRDtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsU0FBUyxxQkFBcUI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q3JDO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFFUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0Msa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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O0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLLE1BQU0sRUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVLElBQXFDO0FBQ3BEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw4QkFBOEI7QUFDOUIsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBLEtBQUssTUFBTSxFQUVOO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0Esc0NBQXNDO0FBQ3RDLDhDOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsWUFBWSxLQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLDJCQUEyQixFQUFFO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyw0QkFBNEIsRUFBRTtBQUN4RSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Oys3QkNodEJBOzs7QUFHcUJSLGtCOzs7QUFHbkIsZ0NBQWMsOEZBRkgsRUFFRztBQUNaLFNBQUtubEIsT0FBTCxHQUFlO0FBQ2JnbEIsU0FBRyxFQUFFLGFBQUF0bkIsRUFBRSxFQUFJO0FBQ1QsYUFBSyxJQUFJMUMsQ0FBQyxHQUFHLENBQVIsRUFBVzRxQixDQUFDLEdBQUcsS0FBSSxDQUFDQyxRQUFMLENBQWNsckIsTUFBbEMsRUFBMENLLENBQUMsR0FBRzRxQixDQUE5QyxFQUFpRDVxQixDQUFDLEVBQWxELEVBQXNEO0FBQ3BELGVBQUksQ0FBQzZxQixRQUFMLENBQWM3cUIsQ0FBZCxNQUFxQixJQUFyQixJQUE2QjBDLEVBQUUsQ0FBQyxLQUFJLENBQUNtb0IsUUFBTCxDQUFjN3FCLENBQWQsQ0FBRCxDQUEvQjtBQUNEO0FBQ0YsT0FMWTtBQU1iNnBCLFVBQUksRUFBRSxjQUFBbm5CLEVBQUUsRUFBSTtBQUNWLGFBQUssSUFBSTFDLENBQUMsR0FBRyxLQUFJLENBQUM2cUIsUUFBTCxDQUFjbHJCLE1BQWQsR0FBdUIsQ0FBcEMsRUFBdUNLLENBQUMsSUFBSSxDQUE1QyxFQUErQ0EsQ0FBQyxFQUFoRCxFQUFvRDtBQUNsRCxlQUFJLENBQUM2cUIsUUFBTCxDQUFjN3FCLENBQWQsTUFBcUIsSUFBckIsSUFBNkIwQyxFQUFFLENBQUMsS0FBSSxDQUFDbW9CLFFBQUwsQ0FBYzdxQixDQUFkLENBQUQsQ0FBL0I7QUFDRDtBQUNGLE9BVlksRUFBZjs7QUFZRCxHOztBQUVHOHBCLGEsRUFBV0MsUSxFQUFVO0FBQ3ZCLFdBQUtjLFFBQUwsQ0FBY3RtQixJQUFkLENBQW1CO0FBQ2pCdWxCLGlCQUFTLEVBQVRBLFNBRGlCO0FBRWpCQyxnQkFBUSxFQUFSQSxRQUZpQixFQUFuQjs7QUFJQSxhQUFPLEtBQUtjLFFBQUwsQ0FBY2xyQixNQUFkLEdBQXVCLENBQTlCO0FBQ0QsSztBQUNLMkssTSxFQUFJO0FBQ1IsVUFBSSxLQUFLdWdCLFFBQUwsQ0FBY3ZnQixFQUFkLENBQUosRUFBdUI7QUFDckIsYUFBS3VnQixRQUFMLENBQWN2Z0IsRUFBZCxJQUFvQixJQUFwQjtBQUNEO0FBQ0YsSzs7Ozs7Ozs7Ozs7ODZIQ2hDWSxTQUFTd2dCLGtCQUFULEdBQThCO0FBQzNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCRTtBQTdCRiw4QkE4QlU7QUFDTm5CLGVBQU8sQ0FBQ29CLE9BQVIsR0FBa0IsSUFBbEI7QUFDQSx5QkFBQXBCLE9BQU8sQ0FBQ3FCLElBQVIsZ0VBQWNDLEtBQWQ7QUFDQSxlQUFPLElBQVA7QUFDRDtBQUNEO0FBbkNGLHFFQW9Db0J2b0IsRUFwQ3BCLEVBb0N3QjtBQUNwQmluQixlQUFPLENBQUN1QixpQkFBUixDQUEwQnhvQixFQUExQjtBQUNBLGVBQU8sSUFBUDtBQUNEO0FBQ0Q7QUF4Q0YsdUVBeUNxQkEsRUF6Q3JCLEVBeUN5QjtBQUNyQmluQixlQUFPLENBQUN3QixrQkFBUixDQUEyQnpvQixFQUEzQjtBQUNBLGVBQU8sSUFBUDtBQUNELE9BNUNILGtDQUNFO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFWRix3Q0FXMkJBLEVBWDNCLEVBVytCLENBQzNCLElBQUksT0FBT0EsRUFBUCxLQUFjLFVBQWxCLEVBQThCLENBQzVCaW5CLE9BQU8sQ0FBQ3lCLHlCQUFSLEdBQW9DMW9CLEVBQXBDLENBQ0QsQ0FDRCxJQUFJaW5CLE9BQU8sQ0FBQ3lCLHlCQUFSLElBQXFDekIsT0FBTyxDQUFDcUIsSUFBakQsRUFBdUQsMkNBQ3JELDJDQUFBckIsT0FBTyxDQUFDcUIsSUFBUixFQUFhRSxpQkFBYixxR0FBaUN2QixPQUFPLENBQUN5Qix5QkFBekMsRUFDRCxDQUNGLENBbEJILENBbUJFO0FBbkJGLHVFQW9CNEIxb0IsRUFwQjVCLEVBb0JnQyxDQUM1QixJQUFJLE9BQU9BLEVBQVAsS0FBYyxVQUFsQixFQUE4QixDQUM1QmluQixPQUFPLENBQUMwQiwwQkFBUixHQUFxQzNvQixFQUFyQyxDQUNELENBQ0QsSUFBSWluQixPQUFPLENBQUMwQiwwQkFBUixJQUFzQzFCLE9BQU8sQ0FBQ3FCLElBQWxELEVBQXdELDJDQUN0RCwyQ0FBQXJCLE9BQU8sQ0FBQ3FCLElBQVIsRUFBYUcsa0JBQWIscUdBQWtDeEIsT0FBTyxDQUFDMEIsMEJBQTFDLEVBQ0QsQ0FDRixDQTNCSCxxREFBNkIxbEIsT0FBN0Isb0NBRWdCLElBRmhCLHNDQUltQixLQUpuQix3REFNcUMsSUFOckMseURBUXNDLElBUnRDLFNBOENELEM7Ozs7Ozs7Ozs7OzZGQy9DRDtBQUNBLHFEOztBQUVBOzs7Ozs7O0FBT2UsU0FBUytqQixZQUFULENBQXNCM2QsR0FBdEIsRUFBMkJ6RyxJQUEzQixFQUFpQzhqQixNQUFqQyxFQUF5QztBQUN0RDtBQUNBLE1BQUl2akIsUUFBUSxHQUFHLElBQWY7QUFDQTtBQUNBLE1BQU1FLE9BQU8sR0FBRyxFQUFoQjs7QUFFQTtBQUNBLE1BQU11bEIsUUFBUSxHQUFHLE9BQU92ZixHQUFQLEtBQWUsUUFBaEM7O0FBRUE7QUFDQSxNQUFNbkUsS0FBSyxHQUFHMGpCLFFBQVEsR0FBR3ZmLEdBQUgsbUNBQWNxZCxNQUFkLFNBQXNCcmQsR0FBRyxFQUFIQSxHQUF0QixFQUEyQnpHLElBQUksRUFBSkEsSUFBM0IsR0FBdEI7O0FBRUE7QUFDQSxzQkFBUXNDLEtBQVIsRUFBZSxVQUFDMFosR0FBRCxFQUFNdGUsR0FBTixFQUFjO0FBQzNCLFFBQUlzb0IsUUFBUSxJQUFJLHlCQUFXdG9CLEdBQVgsQ0FBaEIsRUFBaUM7QUFDL0IsT0FBQyxDQUFDNkMsUUFBUSxLQUFLQSxRQUFRLEdBQUcsRUFBaEIsQ0FBVCxFQUE4QjdDLEdBQTlCLElBQXFDLHFCQUFTc2UsR0FBVCxDQUFyQztBQUNGLEtBRkQsTUFFTztBQUNMdmIsYUFBTyxDQUFDL0MsR0FBRCxDQUFQLEdBQWVzZSxHQUFmO0FBQ0Q7QUFDRixHQU5EOztBQVFBLFNBQU87QUFDTHpiLFlBQVEsRUFBUkEsUUFESztBQUVMdWpCLFVBQU0sRUFBRXJqQixPQUZILEVBQVA7O0FBSUQsQzs7Ozs7Ozs7Ozs7NEZDbkNEOzs7OztBQUtlLFNBQVN3bEIsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDeEMsU0FBTyxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CLFVBQXBCLEVBQWdDQyxRQUFoQyxDQUF5Q0QsS0FBekMsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O21PQ1BEOzs7QUFHQSxJQUFNbHBCLFNBQVMsR0FBR0MsTUFBTSxDQUFDVCxTQUFQLENBQWlCcEIsUUFBbkM7O0FBRUE7Ozs7O0FBS08sU0FBUzBELE9BQVQsQ0FBaUJrZCxHQUFqQixFQUFzQjtBQUMzQixTQUFPaGYsU0FBUyxDQUFDUSxJQUFWLENBQWV3ZSxHQUFmLE1BQXdCLGdCQUEvQjtBQUNEOztBQUVEOzs7OztBQUtPLFNBQVMxZSxhQUFULENBQXVCMGUsR0FBdkIsRUFBNEI7QUFDakMsU0FBT2hmLFNBQVMsQ0FBQ1EsSUFBVixDQUFld2UsR0FBZixNQUF3QixpQkFBL0I7QUFDRDs7QUFFRDs7Ozs7QUFLTyxTQUFTdGMsT0FBVCxDQUFpQm5DLEdBQWpCLEVBQXNCSCxFQUF0QixFQUEwQjtBQUMvQixNQUFJRyxHQUFHLEtBQUssSUFBUixJQUFnQkEsR0FBRyxLQUFLMGUsU0FBNUIsRUFBdUM7QUFDdkMsTUFBSSxPQUFPMWUsR0FBUCxLQUFlLFFBQW5CLEVBQTZCQSxHQUFHLEdBQUcsQ0FBQ0EsR0FBRCxDQUFOO0FBQzdCLE1BQUl1QixPQUFPLENBQUN2QixHQUFELENBQVgsRUFBa0I7QUFDaEIsU0FBSyxJQUFJN0MsQ0FBQyxHQUFHLENBQVIsRUFBVzRxQixDQUFDLEdBQUcvbkIsR0FBRyxDQUFDbEQsTUFBeEIsRUFBZ0NLLENBQUMsR0FBRzRxQixDQUFwQyxFQUF1QzVxQixDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMEMsUUFBRSxDQUFDSSxJQUFILENBQVEsSUFBUixFQUFjRCxHQUFHLENBQUM3QyxDQUFELENBQWpCLEVBQXNCQSxDQUF0QixFQUF5QjZDLEdBQXpCO0FBQ0Q7QUFDRixHQUpELE1BSU87QUFDTCxTQUFLLElBQU02b0IsQ0FBWCxJQUFnQjdvQixHQUFoQixFQUFxQjtBQUNuQixVQUFJTixNQUFNLENBQUNULFNBQVAsQ0FBaUJVLGNBQWpCLENBQWdDTSxJQUFoQyxDQUFxQ0QsR0FBckMsRUFBMEM2b0IsQ0FBMUMsQ0FBSixFQUFrRDtBQUNoRGhwQixVQUFFLENBQUNJLElBQUgsQ0FBUSxJQUFSLEVBQWNELEdBQUcsQ0FBQzZvQixDQUFELENBQWpCLEVBQXNCQSxDQUF0QixFQUF5QjdvQixHQUF6QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVEOzs7OztBQUtPLFNBQVM4b0IsS0FBVCxHQUF3QjtBQUM3QixNQUFNOXJCLE1BQU0sR0FBRyxFQUFmLENBRDZCLGtDQUFOK0ssSUFBTSxvREFBTkEsSUFBTTtBQUU3QixPQUFLLElBQUk1SyxDQUFDLEdBQUcsQ0FBUixFQUFXNHFCLENBQUMsR0FBR2hnQixJQUFJLENBQUNqTCxNQUF6QixFQUFpQ0ssQ0FBQyxHQUFHNHFCLENBQXJDLEVBQXdDNXFCLENBQUMsRUFBekMsRUFBNkM7QUFDM0MsUUFBSTRDLGFBQWEsQ0FBQ2dJLElBQUksQ0FBQzVLLENBQUQsQ0FBTCxDQUFqQixFQUE0QjtBQUMxQmdGLGFBQU8sQ0FBQzRGLElBQUksQ0FBQzVLLENBQUQsQ0FBTCxFQUFVLFVBQUNzaEIsR0FBRCxFQUFNdGUsR0FBTixFQUFjO0FBQzdCbkQsY0FBTSxDQUFDbUQsR0FBRCxDQUFOLEdBQWNtRixNQUFNLENBQUN0SSxNQUFNLENBQUNtRCxHQUFELENBQVAsRUFBY3NlLEdBQWQsQ0FBcEI7QUFDRCxPQUZNLENBQVA7QUFHRDtBQUNGO0FBQ0QsU0FBT3poQixNQUFQO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1PLFNBQVNzSSxNQUFULENBQWdCeVEsTUFBaEIsRUFBd0JnVCxNQUF4QixFQUFnQztBQUNyQyxNQUFJaHBCLGFBQWEsQ0FBQ2dXLE1BQUQsQ0FBYixJQUF5QmhXLGFBQWEsQ0FBQ2dwQixNQUFELENBQTFDLEVBQW9EO0FBQ2xELFdBQU9ELEtBQUssQ0FBQy9TLE1BQUQsRUFBU2dULE1BQVQsQ0FBWjtBQUNELEdBRkQsTUFFTyxJQUFJaHBCLGFBQWEsQ0FBQ2dwQixNQUFELENBQWpCLEVBQTJCO0FBQ2hDLFdBQU9ELEtBQUssQ0FBQyxFQUFELEVBQUtDLE1BQUwsQ0FBWjtBQUNELEdBRk0sTUFFQSxJQUFJeG5CLE9BQU8sQ0FBQ3duQixNQUFELENBQVgsRUFBcUI7QUFDMUIsV0FBT0EsTUFBTSxDQUFDbHNCLEtBQVAsRUFBUDtBQUNEO0FBQ0QsU0FBT2tzQixNQUFQO0FBQ0Q7O0FBRUQ7Ozs7O0FBS08sU0FBU0MsUUFBVCxDQUFrQm5wQixFQUFsQixFQUFzQjtBQUMzQixTQUFPLFlBQVk7QUFDakIsUUFBSTtBQUNGLGFBQU9BLEVBQUUsQ0FBQ3FJLEtBQUgsQ0FBU3JJLEVBQVQsRUFBYStQLFNBQWIsQ0FBUDtBQUNELEtBRkQsQ0FFRSxPQUFPalIsS0FBUCxFQUFjO0FBQ2R3UCxhQUFPLENBQUN4UCxLQUFSLENBQWNBLEtBQWQ7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDOzs7Ozs7Ozs7Ozs0RkMzRkQscUQ7O0FBRUE7Ozs7OztBQU1lLFNBQVN5b0IsV0FBVCxDQUFxQjZCLE9BQXJCLEVBQTRDLEtBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUN6RCxNQUFNM0MsTUFBTSxHQUFHLEVBQWY7O0FBRUEsTUFBTTRDLFVBQVUsR0FBR3pwQixNQUFNLENBQUN3QyxJQUFQLGlDQUFpQittQixPQUFqQixHQUE2QkMsT0FBN0IsRUFBbkI7O0FBRUEsc0JBQVFDLFVBQVIsRUFBb0IsVUFBQUMsSUFBSSxFQUFJO0FBQzFCLFFBQUlGLE9BQU8sQ0FBQ0UsSUFBRCxDQUFQLEtBQWtCMUssU0FBdEIsRUFBaUM7QUFDL0I2SCxZQUFNLENBQUM2QyxJQUFELENBQU4sR0FBZSxtQkFBT0gsT0FBTyxDQUFDRyxJQUFELENBQWQsRUFBc0JGLE9BQU8sQ0FBQ0UsSUFBRCxDQUE3QixDQUFmO0FBQ0QsS0FGRCxNQUVPLElBQUlILE9BQU8sQ0FBQ0csSUFBRCxDQUFQLEtBQWtCMUssU0FBdEIsRUFBaUM7QUFDdEM2SCxZQUFNLENBQUM2QyxJQUFELENBQU4sR0FBZSxtQkFBTzFLLFNBQVAsRUFBa0J1SyxPQUFPLENBQUNHLElBQUQsQ0FBekIsQ0FBZjtBQUNEO0FBQ0YsR0FORDs7QUFRQTdDLFFBQU0sQ0FBQ2prQixNQUFQLEdBQWdCaWtCLE1BQU0sQ0FBQ2prQixNQUFQLENBQWN6QixXQUFkLEVBQWhCOztBQUVBLFNBQU8wbEIsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OzJGQ3hCRDs7Ozs7QUFLZSxTQUFTOEMsU0FBVCxHQUFpQyxLQUFkakQsT0FBYyx1RUFBSixFQUFJO0FBQzlDO0FBQ0EsTUFBSSxDQUFDLGVBQWV6cEIsSUFBZixDQUFvQnlwQixPQUFwQixDQUFMLEVBQW1DLE9BQU8sRUFBUDtBQUNuQyxNQUFNa0QsQ0FBQyxHQUFHbEQsT0FBTyxDQUFDM29CLEtBQVIsQ0FBYyxHQUFkLENBQVY7QUFDQSxTQUFPNnJCLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxJQUFQLEdBQWNBLENBQUMsQ0FBQyxDQUFELENBQXRCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Z0dDVkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRDs7QUFFQTs7Ozs7QUFLZSxTQUFTQyxlQUFULENBQXlCekMsT0FBekIsRUFBa0M7QUFDL0MsU0FBTyxVQUFBUCxNQUFNLEVBQUk7QUFDZjtBQUNBQSxVQUFNLENBQUNyZCxHQUFQLEdBQWEsdUJBQVMseUJBQVdxZCxNQUFNLENBQUNILE9BQWxCLEVBQTJCRyxNQUFNLENBQUNyZCxHQUFsQyxDQUFULEVBQWlEcWQsTUFBTSxDQUFDMWlCLE1BQXhELENBQWI7O0FBRUE7QUFDQTBpQixVQUFNLENBQUNqa0IsTUFBUCxHQUFnQixDQUFDaWtCLE1BQU0sQ0FBQ2prQixNQUFQLElBQWlCLEtBQWxCLEVBQXlCekIsV0FBekIsRUFBaEI7O0FBRUE7QUFDQTBsQixVQUFNLENBQUNpRCxNQUFQLEdBQWdCO0FBQ2RqRCxVQUFNLENBQUNpRCxNQUFQLENBQWNDLE1BREE7QUFFZGxELFVBQU0sQ0FBQ2lELE1BQVAsQ0FBY2pELE1BQU0sQ0FBQ2prQixNQUFQLENBQWNxaEIsV0FBZCxFQUFkLENBRmM7QUFHZDRDLFVBQU0sQ0FBQ2lELE1BSE8sQ0FBaEI7OztBQU1BO0FBQ0Esd0JBQVFFLGdCQUFSLEVBQWdCLFVBQUFDLENBQUMsVUFBSSwwQkFBY3BELE1BQU0sQ0FBQ2lELE1BQVAsQ0FBY0csQ0FBZCxDQUFkLEtBQW1DLE9BQU9wRCxNQUFNLENBQUNpRCxNQUFQLENBQWNHLENBQWQsQ0FBOUMsRUFBakI7O0FBRUE7QUFDQSx3QkFBUXBELE1BQVIsRUFBZ0IsVUFBQzlILEdBQUQsRUFBTXRlLEdBQU4sVUFBYyx5QkFBV0EsR0FBWCxLQUFtQixPQUFPb21CLE1BQU0sQ0FBQ3BtQixHQUFELENBQTlDLEVBQWhCOztBQUVBO0FBQ0EsV0FBT29tQixNQUFNLENBQUNxRCxPQUFQLENBQWVyRCxNQUFmLEVBQXVCTyxPQUF2QixDQUFQO0FBQ0QsR0F0QkQ7QUF1QkQsQzs7Ozs7Ozs7Ozs7eUZDbkNEOztBQUVBOzs7OztBQUtlLFNBQVMrQyxRQUFULENBQWtCM2dCLEdBQWxCLEVBQXVCckYsTUFBdkIsRUFBK0I7QUFDNUMsTUFBSSxDQUFDQSxNQUFMLEVBQWEsT0FBT3FGLEdBQVA7O0FBRWIsTUFBSXVYLEtBQUo7O0FBRUEsTUFBTTRDLEtBQUssR0FBRyxFQUFkO0FBQ0Esc0JBQVF4ZixNQUFSLEVBQWdCLFVBQUM0YSxHQUFELEVBQU10ZSxHQUFOLEVBQWM7QUFDNUIsUUFBSXNlLEdBQUcsS0FBSyxJQUFSLElBQWdCLE9BQU9BLEdBQVAsS0FBZSxXQUFuQyxFQUFnRDs7QUFFaEQsUUFBSSxvQkFBUUEsR0FBUixDQUFKLEVBQWtCdGUsR0FBRyxHQUFHQSxHQUFHLEdBQUcsSUFBWixDQUFsQjtBQUNLc2UsT0FBRyxHQUFHLENBQUNBLEdBQUQsQ0FBTjs7QUFFTCx3QkFBUUEsR0FBUixFQUFhLFVBQUF0RSxDQUFDLEVBQUk7QUFDaEIsVUFBSUEsQ0FBQyxLQUFLLElBQU4sSUFBYyxPQUFPQSxDQUFQLEtBQWEsUUFBL0IsRUFBeUM7QUFDdkNBLFNBQUMsR0FBRzFiLElBQUksQ0FBQ29WLFNBQUwsQ0FBZXNHLENBQWYsQ0FBSjtBQUNEO0FBQ0RrSixXQUFLLENBQUMzaEIsSUFBTixDQUFXMmMsTUFBTSxDQUFDbGUsR0FBRCxDQUFOLEdBQWMsR0FBZCxHQUFvQmtlLE1BQU0sQ0FBQ2xFLENBQUQsQ0FBckM7QUFDRCxLQUxEO0FBTUQsR0FaRDtBQWFBc0csT0FBSyxHQUFHNEMsS0FBSyxDQUFDdmxCLElBQU4sQ0FBVyxHQUFYLENBQVI7O0FBRUEsTUFBSTJpQixLQUFKLEVBQVc7QUFDVCxRQUFNcUosYUFBYSxHQUFHNWdCLEdBQUcsQ0FBQzlMLE9BQUosQ0FBWSxHQUFaLENBQXRCO0FBQ0Ewc0IsaUJBQWEsS0FBSyxDQUFDLENBQW5CLEtBQXlCNWdCLEdBQUcsR0FBR0EsR0FBRyxDQUFDck0sS0FBSixDQUFVLENBQVYsRUFBYWl0QixhQUFiLENBQS9CO0FBQ0E1Z0IsT0FBRyxJQUFJLENBQUNBLEdBQUcsQ0FBQzlMLE9BQUosQ0FBWSxHQUFaLE1BQXFCLENBQUMsQ0FBdEIsR0FBMEIsR0FBMUIsR0FBZ0MsR0FBakMsSUFBd0NxakIsS0FBL0M7QUFDRDs7QUFFRCxTQUFPdlgsR0FBUDtBQUNEOztBQUVELFNBQVNtVixNQUFULENBQWdCSSxHQUFoQixFQUFxQjtBQUNuQixTQUFPSCxrQkFBa0IsQ0FBQ0csR0FBRCxDQUFsQjtBQUNKL2hCLFNBREksQ0FDSSxPQURKLEVBQ2EsR0FEYjtBQUVKQSxTQUZJLENBRUksTUFGSixFQUVZLEdBRlo7QUFHSkEsU0FISSxDQUdJLE9BSEosRUFHYSxHQUhiO0FBSUpBLFNBSkksQ0FJSSxNQUpKLEVBSVksR0FKWjtBQUtKQSxTQUxJLENBS0ksT0FMSixFQUthLEdBTGI7QUFNSkEsU0FOSSxDQU1JLE9BTkosRUFNYSxHQU5iLENBQVA7QUFPRCxDOzs7Ozs7Ozs7Ozs0RkM3Q0Q7Ozs7OztBQU1lLFNBQVNxdEIsVUFBVCxHQUFvRCxLQUFoQzNELE9BQWdDLHVFQUF0QixFQUFzQixLQUFsQjRELFdBQWtCLHVFQUFKLEVBQUk7QUFDakU7QUFDQSxNQUFJLGVBQWVydEIsSUFBZixDQUFvQnF0QixXQUFwQixDQUFKLEVBQXNDLE9BQU9BLFdBQVA7QUFDdEM7QUFDQSxTQUFPQSxXQUFXLEdBQUc1RCxPQUFPLENBQUMxcEIsT0FBUixDQUFnQixNQUFoQixFQUF3QixFQUF4QixJQUE4QixHQUE5QixHQUFvQ3N0QixXQUFXLENBQUN0dEIsT0FBWixDQUFvQixNQUFwQixFQUE0QixFQUE1QixDQUF2QyxHQUF5RTBwQixPQUEzRjtBQUNELEM7Ozs7Ozs7Ozs7O3lIQ1hEO0FBQ0Esb0Q7O0FBRU8sSUFBTW9CLE1BQU0sR0FBRyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXVCLFFBQXZCLEVBQWlDLFNBQWpDLEVBQTRDLE1BQTVDLEVBQW9ELFNBQXBELEVBQStELE9BQS9ELENBQWYsQztBQUNBLElBQU1rQyxNQUFNLElBQUksUUFBSixTQUFpQmxDLE1BQWpCLENBQVosQzs7QUFFUCxJQUFNRyxRQUFRLEdBQUc7QUFDZmlDLFNBQU8sRUFBUEEsYUFEZTtBQUVmSixRQUFNLEVBQUUsRUFGTztBQUdmbG5CLFFBQU0sRUFBRSxLQUhPO0FBSWY2SyxTQUFPLEVBQUUsS0FKTTtBQUtmOGMsVUFBUSxFQUFFLE1BTEs7QUFNZkMsY0FBWSxFQUFFLE1BTkM7QUFPZkMsV0FBUyxFQUFFLElBUEk7QUFRZkMsaUJBQWUsRUFBRSxLQVJGO0FBU2ZDLFdBQVMsRUFBRSxLQVRJO0FBVWZDLGdCQUFjLEVBQUUsd0JBQUFDLFVBQVUsVUFBSUEsVUFBVSxJQUFJLEdBQWQsSUFBcUJBLFVBQVUsR0FBRyxHQUF0QyxFQVZYLEVBQWpCOzs7QUFhQSxvQkFBUWIsTUFBUixFQUFnQixVQUFBQyxDQUFDLFVBQUtoQyxRQUFRLENBQUM2QixNQUFULENBQWdCRyxDQUFoQixJQUFxQixFQUExQixFQUFqQixFOztBQUVlaEMsUTs7Ozs7Ozs7Ozs7OHBDQ3JCQSxTQUFTaUMsT0FBVCxDQUFpQnJELE1BQWpCLEVBQXlCTyxPQUF6QixFQUFrQztBQUMvQyxTQUFPLElBQUloa0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVWlCLE1BQVYsRUFBcUI7QUFDdEM7QUFDQSxRQUFJOGlCLE9BQU8sQ0FBQ29CLE9BQVosRUFBcUI7QUFDbkIsYUFBT2xrQixNQUFNLENBQUM7QUFDWnVpQixjQUFNLEVBQU5BLE1BRFk7QUFFWnpYLGNBQU0sRUFBRSxvQkFGSSxFQUFELENBQWI7O0FBSUQ7O0FBRUQ7QUFDQWdZLFdBQU8sQ0FBQ3FCLElBQVIsR0FBZTNHLEdBQUcsQ0FBQzZFLE9BQUo7QUFDVkUsVUFEVTtBQUVibGhCLGNBQVEsRUFBRSxrQkFBQXJJLE1BQU0sRUFBSTtBQUNsQjtBQUNBLFlBQU13cEIsUUFBUSxtQkFBS0QsTUFBTSxFQUFOQSxNQUFMLElBQWdCdnBCLE1BQWhCLENBQWQ7QUFDQSxTQUFDdXBCLE1BQU0sQ0FBQytELGNBQVIsSUFBMEIvRCxNQUFNLENBQUMrRCxjQUFQLENBQXNCdHRCLE1BQU0sQ0FBQ3V0QixVQUE3QixDQUExQjtBQUNJeG5CLGVBQU8sQ0FBQ3lqQixRQUFELENBRFg7QUFFSXhpQixjQUFNLENBQUN3aUIsUUFBRCxDQUZWO0FBR0QsT0FSWSxJQUFmOzs7QUFXQTtBQUNBTSxXQUFPLENBQUN1QixpQkFBUjtBQUNBdkIsV0FBTyxDQUFDd0Isa0JBQVI7O0FBRUE7QUFDQSxtQkFBQS9CLE1BQU0sQ0FBQ2lFLEdBQVAsaUVBQUFqRSxNQUFNLEVBQU9PLE9BQU8sQ0FBQ3FCLElBQWYsRUFBcUI1QixNQUFyQixDQUFOO0FBQ0QsR0EzQk0sQ0FBUDtBQTRCRCxDOzs7Ozs7Ozs7Ozs7MjdCQzdCRDs7Ozs7QUFLTyxTQUFTUSxjQUFULENBQXdCL2hCLE1BQXhCLEVBQWdDO0FBQ3JDLFNBQU9sQyxPQUFPLENBQUNrQixNQUFSLENBQWU7QUFDcEJnQixVQUFNLEVBQU5BLE1BRG9CO0FBRXBCeWxCLGNBQVUsRUFBRSxJQUZRLEVBQWYsQ0FBUDs7QUFJRDs7QUFFRDs7OztBQUlPLFNBQVNDLGVBQVQsQ0FBeUJ4RCxRQUF6QixFQUFtQztBQUN4QztBQUNBO0FBQ0VBLFlBQVEsSUFBSyxVQUFBVixRQUFRLFVBQUtBLFFBQVEsQ0FBQ2lFLFVBQVQsR0FBc0IzbkIsT0FBTyxDQUFDa0IsTUFBUixDQUFld2lCLFFBQWYsQ0FBdEIsR0FBaURVLFFBQVEsQ0FBQ1YsUUFBRCxDQUE5RCxFQUR2Qjs7QUFHRDs7QUFFRDs7OztBQUlPLFNBQVNhLFlBQVQsT0FBZ0QsS0FBeEJvRCxVQUF3QixRQUF4QkEsVUFBd0IsQ0FBVDlyQixLQUFTO0FBQ3JELFNBQU9tRSxPQUFPLENBQUNrQixNQUFSLENBQWV5bUIsVUFBVSxHQUFHOXJCLEtBQUssQ0FBQ3FHLE1BQVQsR0FBa0JyRyxLQUEzQyxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NHQzdCYztBQUNkLGNBQVksUUFERTtBQUVkLGtCQUFnQixRQUZGO0FBR2QsVUFBUSxRQUhNO0FBSWQsYUFBVyxRQUpHO0FBS2QsVUFBUSxRQUxNO0FBTWQsaUJBQWUsUUFORDtBQU9kLFVBQVEsUUFQTTtBQVFkLFFBQU0sUUFSUTtBQVNkLFdBQVMsUUFUSztBQVVkLFlBQVUsUUFWSTtBQVdkLGlCQUFlLFFBWEQ7QUFZZCxVQUFRLFFBWk07QUFhZCxhQUFXLFFBYkc7QUFjZCxvQkFBa0IsUUFkSjtBQWVkLG1CQUFpQixRQWZIO0FBZ0JkLG1CQUFpQixRQWhCSDtBQWlCZCxvQkFBa0IsUUFqQko7QUFrQmQsaUJBQWUsUUFsQkQ7QUFtQmQsaUJBQWUsUUFuQkQ7QUFvQmQsVUFBUSxRQXBCTTtBQXFCZCxVQUFRLFFBckJNO0FBc0JkLGlCQUFlLFFBdEJEO0FBdUJkLFVBQVEsUUF2Qk07QUF3QmQsZUFBYSxRQXhCQztBQXlCZCxZQUFVLFFBekJJO0FBMEJkLHNCQUFvQixRQTFCTjtBQTJCZCxtQkFBaUIsUUEzQkg7QUE0QmQsaUJBQWUsUUE1QkQ7QUE2QmQsVUFBUSxRQTdCTTtBQThCZCxxQkFBbUIsUUE5Qkw7QUErQmQsY0FBWSxRQS9CRTtBQWdDZCxlQUFhLFFBaENDO0FBaUNkLGVBQWEsUUFqQ0M7QUFrQ2QsZ0JBQWMsUUFsQ0E7QUFtQ2Qsd0JBQXNCLFFBbkNSO0FBb0NkLGFBQVcsUUFwQ0c7QUFxQ2QsWUFBVSxRQXJDSTtBQXNDZCxnQkFBYyxRQXRDQTtBQXVDZCxzQkFBb0IsUUF2Q047QUF3Q2QsZUFBYSxRQXhDQztBQXlDZCxTQUFPLFFBekNPO0FBMENkLGlCQUFlLFFBMUNEO0FBMkNkLFVBQVEsUUEzQ007QUE0Q2QsaUJBQWUsUUE1Q0Q7QUE2Q2QsWUFBVSxRQTdDSTtBQThDZCxVQUFRLFFBOUNNO0FBK0NkLDRCQUEwQixRQS9DWjtBQWdEZCxxQkFBbUIsUUFoREw7QUFpRGQsMEJBQXdCLFFBakRWO0FBa0RkLGtCQUFnQixRQWxERjtBQW1EZCxtQkFBaUIsUUFuREg7QUFvRGQsV0FBUyxRQXBESztBQXFEZCxVQUFRLFFBckRNO0FBc0RkLFVBQVEsUUF0RE07QUF1RGQsaUJBQWUsUUF2REQ7QUF3RGQsaUJBQWUsUUF4REQ7QUF5RGQsbUJBQWlCLFFBekRIO0FBMERkLGlCQUFlLFFBMUREO0FBMkRkLFVBQVEsUUEzRE07QUE0RGQsc0JBQW9CLFFBNUROO0FBNkRkLGtCQUFnQixRQTdERjtBQThEZCxlQUFhLFFBOURDO0FBK0RkLFdBQVMsUUEvREs7QUFnRWQsb0JBQWtCLFFBaEVKO0FBaUVkLFVBQVEsUUFqRU07QUFrRWQsbUJBQWlCLFFBbEVIO0FBbUVkLFlBQVUsUUFuRUk7QUFvRWQsZ0JBQWMsUUFwRUE7QUFxRWQsYUFBVyxRQXJFRztBQXNFZCxxQkFBbUIsUUF0RUw7QUF1RWQsU0FBTyxRQXZFTztBQXdFZCxrQkFBZ0IsUUF4RUY7QUF5RWQsZ0JBQWMsUUF6RUE7QUEwRWQsV0FBUyxRQTFFSztBQTJFZCxZQUFVLFFBM0VJO0FBNEVkLFNBQU8sUUE1RU87QUE2RWQsV0FBUyxRQTdFSztBQThFZCxpQkFBZSxRQTlFRDtBQStFZCxXQUFTLFFBL0VLO0FBZ0ZkLGdCQUFjLFFBaEZBO0FBaUZkLGVBQWEsUUFqRkM7QUFrRmQsZ0JBQWMsUUFsRkE7QUFtRmQsdUJBQXFCLFFBbkZQO0FBb0ZkLG1CQUFpQixRQXBGSDtBQXFGZCxvQkFBa0IsUUFyRko7QUFzRmQsWUFBVSxRQXRGSTtBQXVGZCxhQUFXLFFBdkZHO0FBd0ZkLG1CQUFpQixRQXhGSDtBQXlGZCxXQUFTLFFBekZLO0FBMEZkLFlBQVUsUUExRkk7QUEyRmQsV0FBUyxRQTNGSztBQTRGZCxrQkFBZ0IsUUE1RkY7QUE2RmQscUJBQW1CLFFBN0ZMO0FBOEZkLGNBQVksUUE5RkU7QUErRmQsaUJBQWUsUUEvRkQ7QUFnR2QsVUFBUSxRQWhHTTtBQWlHZCxlQUFhLFFBakdDO0FBa0dkLGlCQUFlLFFBbEdEO0FBbUdkLFVBQVEsUUFuR007QUFvR2QscUJBQW1CLFFBcEdMO0FBcUdkLGNBQVksUUFyR0U7QUFzR2Qsc0JBQW9CLFFBdEdOO0FBdUdkLFlBQVUsUUF2R0k7QUF3R2QsY0FBWSxRQXhHRTtBQXlHZCxXQUFTLFFBekdLO0FBMEdkLGtCQUFnQixRQTFHRjtBQTJHZCxtQkFBaUIsUUEzR0g7QUE0R2QscUJBQW1CLFFBNUdMO0FBNkdkLHNCQUFvQixRQTdHTjtBQThHZCxxQkFBbUIsUUE5R0w7QUErR2QsZUFBYSxRQS9HQztBQWdIZCxZQUFVLFFBaEhJO0FBaUhkLG1CQUFpQixRQWpISDtBQWtIZCxjQUFZLFFBbEhFO0FBbUhkLGlCQUFlLFFBbkhEO0FBb0hkLFVBQVEsUUFwSE07QUFxSGQsV0FBUyxRQXJISztBQXNIZCxrQkFBZ0IsUUF0SEY7QUF1SGQsYUFBVyxRQXZIRztBQXdIZCxjQUFZLFFBeEhFO0FBeUhkLGtCQUFnQixRQXpIRjtBQTBIZCxjQUFZLFFBMUhFO0FBMkhkLHVCQUFxQixRQTNIUDtBQTRIZCxnQkFBYyxRQTVIQTtBQTZIZCxvQkFBa0IsUUE3SEo7QUE4SGQseUJBQXVCLFFBOUhUO0FBK0hkLGtCQUFnQixRQS9IRjtBQWdJZCwyQkFBeUIsUUFoSVg7QUFpSWQsZ0JBQWEsUUFqSUM7QUFrSWQsVUFBTyxRQWxJTyxFIiwiZmlsZSI6ImNvbW1vbi92ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7IGluaXRWdWVJMThuIH0gZnJvbSAnQGRjbG91ZGlvL3VuaS1pMThuJztcclxuXHJcbmxldCByZWFsQXRvYjtcclxuXHJcbmNvbnN0IGI2NCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XHJcbmNvbnN0IGI2NHJlID0gL14oPzpbQS1aYS16XFxkKy9dezR9KSo/KD86W0EtWmEtelxcZCsvXXsyfSg/Oj09KT98W0EtWmEtelxcZCsvXXszfT0/KT8kLztcclxuXHJcbmlmICh0eXBlb2YgYXRvYiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gIHJlYWxBdG9iID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgc3RyID0gU3RyaW5nKHN0cikucmVwbGFjZSgvW1xcdFxcblxcZlxcciBdKy9nLCAnJyk7XHJcbiAgICBpZiAoIWI2NHJlLnRlc3Qoc3RyKSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnYXRvYicgb24gJ1dpbmRvdyc6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpIH1cclxuXHJcbiAgICAvLyBBZGRpbmcgdGhlIHBhZGRpbmcgaWYgbWlzc2luZywgZm9yIHNlbXBsaWNpdHlcclxuICAgIHN0ciArPSAnPT0nLnNsaWNlKDIgLSAoc3RyLmxlbmd0aCAmIDMpKTtcclxuICAgIHZhciBiaXRtYXA7IHZhciByZXN1bHQgPSAnJzsgdmFyIHIxOyB2YXIgcjI7IHZhciBpID0gMDtcclxuICAgIGZvciAoOyBpIDwgc3RyLmxlbmd0aDspIHtcclxuICAgICAgYml0bWFwID0gYjY0LmluZGV4T2Yoc3RyLmNoYXJBdChpKyspKSA8PCAxOCB8IGI2NC5pbmRleE9mKHN0ci5jaGFyQXQoaSsrKSkgPDwgMTIgfFxyXG4gICAgICAgICAgICAgICAgICAgIChyMSA9IGI2NC5pbmRleE9mKHN0ci5jaGFyQXQoaSsrKSkpIDw8IDYgfCAocjIgPSBiNjQuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpKTtcclxuXHJcbiAgICAgIHJlc3VsdCArPSByMSA9PT0gNjQgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdG1hcCA+PiAxNiAmIDI1NSlcclxuICAgICAgICA6IHIyID09PSA2NCA/IFN0cmluZy5mcm9tQ2hhckNvZGUoYml0bWFwID4+IDE2ICYgMjU1LCBiaXRtYXAgPj4gOCAmIDI1NSlcclxuICAgICAgICAgIDogU3RyaW5nLmZyb21DaGFyQ29kZShiaXRtYXAgPj4gMTYgJiAyNTUsIGJpdG1hcCA+PiA4ICYgMjU1LCBiaXRtYXAgJiAyNTUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH07XHJcbn0gZWxzZSB7XHJcbiAgLy8g5rOo5oSPYXRvYuWPquiDveWcqOWFqOWxgOWvueixoeS4iuiwg+eUqO+8jOS+i+Wmgu+8mmBjb25zdCBCYXNlNjQgPSB7YXRvYn07QmFzZTY0LmF0b2IoJ3h4eHgnKWDmmK/plJnor6/nmoTnlKjms5VcclxuICByZWFsQXRvYiA9IGF0b2I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGI2NERlY29kZVVuaWNvZGUgKHN0cikge1xyXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVhbEF0b2Ioc3RyKS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XHJcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMilcclxuICB9KS5qb2luKCcnKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXJJbmZvICgpIHtcclxuICBjb25zdCB0b2tlbiA9ICggdHQpLmdldFN0b3JhZ2VTeW5jKCd1bmlfaWRfdG9rZW4nKSB8fCAnJztcclxuICBjb25zdCB0b2tlbkFyciA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgaWYgKCF0b2tlbiB8fCB0b2tlbkFyci5sZW5ndGggIT09IDMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVpZDogbnVsbCxcclxuICAgICAgcm9sZTogW10sXHJcbiAgICAgIHBlcm1pc3Npb246IFtdLFxyXG4gICAgICB0b2tlbkV4cGlyZWQ6IDBcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHVzZXJJbmZvO1xyXG4gIHRyeSB7XHJcbiAgICB1c2VySW5mbyA9IEpTT04ucGFyc2UoYjY0RGVjb2RlVW5pY29kZSh0b2tlbkFyclsxXSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ+iOt+WPluW9k+WJjeeUqOaIt+S/oeaBr+WHuumUme+8jOivpue7humUmeivr+S/oeaBr+S4uu+8micgKyBlcnJvci5tZXNzYWdlKVxyXG4gIH1cclxuICB1c2VySW5mby50b2tlbkV4cGlyZWQgPSB1c2VySW5mby5leHAgKiAxMDAwO1xyXG4gIGRlbGV0ZSB1c2VySW5mby5leHA7XHJcbiAgZGVsZXRlIHVzZXJJbmZvLmlhdDtcclxuICByZXR1cm4gdXNlckluZm9cclxufVxyXG5cclxuZnVuY3Rpb24gdW5pSWRNaXhpbiAoVnVlKSB7XHJcbiAgVnVlLnByb3RvdHlwZS51bmlJREhhc1JvbGUgPSBmdW5jdGlvbiAocm9sZUlkKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHJvbGVcclxuICAgIH0gPSBnZXRDdXJyZW50VXNlckluZm8oKTtcclxuICAgIHJldHVybiByb2xlLmluZGV4T2Yocm9sZUlkKSA+IC0xXHJcbiAgfTtcclxuICBWdWUucHJvdG90eXBlLnVuaUlESGFzUGVybWlzc2lvbiA9IGZ1bmN0aW9uIChwZXJtaXNzaW9uSWQpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcGVybWlzc2lvblxyXG4gICAgfSA9IGdldEN1cnJlbnRVc2VySW5mbygpO1xyXG4gICAgcmV0dXJuIHRoaXMudW5pSURIYXNSb2xlKCdhZG1pbicpIHx8IHBlcm1pc3Npb24uaW5kZXhPZihwZXJtaXNzaW9uSWQpID4gLTFcclxuICB9O1xyXG4gIFZ1ZS5wcm90b3R5cGUudW5pSURUb2tlblZhbGlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0b2tlbkV4cGlyZWRcclxuICAgIH0gPSBnZXRDdXJyZW50VXNlckluZm8oKTtcclxuICAgIHJldHVybiB0b2tlbkV4cGlyZWQgPiBEYXRlLm5vdygpXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcclxuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xyXG5cclxuZnVuY3Rpb24gaXNGbiAoZm4pIHtcclxuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyIChzdHIpIHtcclxuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XHJcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcclxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcclxufVxyXG5cclxuZnVuY3Rpb24gbm9vcCAoKSB7fVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcclxuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcclxuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XHJcbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxpbWl0ZWQgc3RyaW5nLlxyXG4gKi9cclxuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcclxuY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoKHN0cikgPT4ge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKVxyXG59KTtcclxuXHJcbmNvbnN0IEhPT0tTID0gW1xyXG4gICdpbnZva2UnLFxyXG4gICdzdWNjZXNzJyxcclxuICAnZmFpbCcsXHJcbiAgJ2NvbXBsZXRlJyxcclxuICAncmV0dXJuVmFsdWUnXHJcbl07XHJcblxyXG5jb25zdCBnbG9iYWxJbnRlcmNlcHRvcnMgPSB7fTtcclxuY29uc3Qgc2NvcGVkSW50ZXJjZXB0b3JzID0ge307XHJcblxyXG5mdW5jdGlvbiBtZXJnZUhvb2sgKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcclxuICBjb25zdCByZXMgPSBjaGlsZFZhbFxyXG4gICAgPyBwYXJlbnRWYWxcclxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxyXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXHJcbiAgICAgICAgPyBjaGlsZFZhbCA6IFtjaGlsZFZhbF1cclxuICAgIDogcGFyZW50VmFsO1xyXG4gIHJldHVybiByZXNcclxuICAgID8gZGVkdXBlSG9va3MocmVzKVxyXG4gICAgOiByZXNcclxufVxyXG5cclxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XHJcbiAgY29uc3QgcmVzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHJlcy5pbmRleE9mKGhvb2tzW2ldKSA9PT0gLTEpIHtcclxuICAgICAgcmVzLnB1c2goaG9va3NbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUhvb2sgKGhvb2tzLCBob29rKSB7XHJcbiAgY29uc3QgaW5kZXggPSBob29rcy5pbmRleE9mKGhvb2spO1xyXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgIGhvb2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZUludGVyY2VwdG9ySG9vayAoaW50ZXJjZXB0b3IsIG9wdGlvbikge1xyXG4gIE9iamVjdC5rZXlzKG9wdGlvbikuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChIT09LUy5pbmRleE9mKGhvb2spICE9PSAtMSAmJiBpc0ZuKG9wdGlvbltob29rXSkpIHtcclxuICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSBtZXJnZUhvb2soaW50ZXJjZXB0b3JbaG9va10sIG9wdGlvbltob29rXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUludGVyY2VwdG9ySG9vayAoaW50ZXJjZXB0b3IsIG9wdGlvbikge1xyXG4gIGlmICghaW50ZXJjZXB0b3IgfHwgIW9wdGlvbikge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIE9iamVjdC5rZXlzKG9wdGlvbikuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChIT09LUy5pbmRleE9mKGhvb2spICE9PSAtMSAmJiBpc0ZuKG9wdGlvbltob29rXSkpIHtcclxuICAgICAgcmVtb3ZlSG9vayhpbnRlcmNlcHRvcltob29rXSwgb3B0aW9uW2hvb2tdKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSW50ZXJjZXB0b3IgKG1ldGhvZCwgb3B0aW9uKSB7XHJcbiAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnICYmIGlzUGxhaW5PYmplY3Qob3B0aW9uKSkge1xyXG4gICAgbWVyZ2VJbnRlcmNlcHRvckhvb2soc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0gfHwgKHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdID0ge30pLCBvcHRpb24pO1xyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChtZXRob2QpKSB7XHJcbiAgICBtZXJnZUludGVyY2VwdG9ySG9vayhnbG9iYWxJbnRlcmNlcHRvcnMsIG1ldGhvZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJbnRlcmNlcHRvciAobWV0aG9kLCBvcHRpb24pIHtcclxuICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcclxuICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdGlvbikpIHtcclxuICAgICAgcmVtb3ZlSW50ZXJjZXB0b3JIb29rKHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdLCBvcHRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChtZXRob2QpKSB7XHJcbiAgICByZW1vdmVJbnRlcmNlcHRvckhvb2soZ2xvYmFsSW50ZXJjZXB0b3JzLCBtZXRob2QpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlckhvb2sgKGhvb2spIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHJldHVybiBob29rKGRhdGEpIHx8IGRhdGFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUHJvbWlzZSAob2JqKSB7XHJcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbidcclxufVxyXG5cclxuZnVuY3Rpb24gcXVldWUgKGhvb2tzLCBkYXRhKSB7XHJcbiAgbGV0IHByb21pc2UgPSBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBob29rID0gaG9va3NbaV07XHJcbiAgICBpZiAocHJvbWlzZSkge1xyXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHdyYXBwZXJIb29rKGhvb2spKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGhvb2soZGF0YSk7XHJcbiAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xyXG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aGVuICgpIHsgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcHJvbWlzZSB8fCB7XHJcbiAgICB0aGVuIChjYWxsYmFjaykge1xyXG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBwZXJPcHRpb25zIChpbnRlcmNlcHRvciwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgWydzdWNjZXNzJywgJ2ZhaWwnLCAnY29tcGxldGUnXS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3JbbmFtZV0pKSB7XHJcbiAgICAgIGNvbnN0IG9sZENhbGxiYWNrID0gb3B0aW9uc1tuYW1lXTtcclxuICAgICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uIGNhbGxiYWNrSW50ZXJjZXB0b3IgKHJlcykge1xyXG4gICAgICAgIHF1ZXVlKGludGVyY2VwdG9yW25hbWVdLCByZXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXHJcbiAgICAgICAgICByZXR1cm4gaXNGbihvbGRDYWxsYmFjaykgJiYgb2xkQ2FsbGJhY2socmVzKSB8fCByZXNcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gb3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyUmV0dXJuVmFsdWUgKG1ldGhvZCwgcmV0dXJuVmFsdWUpIHtcclxuICBjb25zdCByZXR1cm5WYWx1ZUhvb2tzID0gW107XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZ2xvYmFsSW50ZXJjZXB0b3JzLnJldHVyblZhbHVlKSkge1xyXG4gICAgcmV0dXJuVmFsdWVIb29rcy5wdXNoKC4uLmdsb2JhbEludGVyY2VwdG9ycy5yZXR1cm5WYWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGludGVyY2VwdG9yID0gc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XHJcbiAgaWYgKGludGVyY2VwdG9yICYmIEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3IucmV0dXJuVmFsdWUpKSB7XHJcbiAgICByZXR1cm5WYWx1ZUhvb2tzLnB1c2goLi4uaW50ZXJjZXB0b3IucmV0dXJuVmFsdWUpO1xyXG4gIH1cclxuICByZXR1cm5WYWx1ZUhvb2tzLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICByZXR1cm5WYWx1ZSA9IGhvb2socmV0dXJuVmFsdWUpIHx8IHJldHVyblZhbHVlO1xyXG4gIH0pO1xyXG4gIHJldHVybiByZXR1cm5WYWx1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcGlJbnRlcmNlcHRvckhvb2tzIChtZXRob2QpIHtcclxuICBjb25zdCBpbnRlcmNlcHRvciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgT2JqZWN0LmtleXMoZ2xvYmFsSW50ZXJjZXB0b3JzKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgaWYgKGhvb2sgIT09ICdyZXR1cm5WYWx1ZScpIHtcclxuICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSBnbG9iYWxJbnRlcmNlcHRvcnNbaG9va10uc2xpY2UoKTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBzY29wZWRJbnRlcmNlcHRvciA9IHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdO1xyXG4gIGlmIChzY29wZWRJbnRlcmNlcHRvcikge1xyXG4gICAgT2JqZWN0LmtleXMoc2NvcGVkSW50ZXJjZXB0b3IpLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICAgIGlmIChob29rICE9PSAncmV0dXJuVmFsdWUnKSB7XHJcbiAgICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSAoaW50ZXJjZXB0b3JbaG9va10gfHwgW10pLmNvbmNhdChzY29wZWRJbnRlcmNlcHRvcltob29rXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gaW50ZXJjZXB0b3JcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlQXBpIChtZXRob2QsIGFwaSwgb3B0aW9ucywgLi4ucGFyYW1zKSB7XHJcbiAgY29uc3QgaW50ZXJjZXB0b3IgPSBnZXRBcGlJbnRlcmNlcHRvckhvb2tzKG1ldGhvZCk7XHJcbiAgaWYgKGludGVyY2VwdG9yICYmIE9iamVjdC5rZXlzKGludGVyY2VwdG9yKS5sZW5ndGgpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGludGVyY2VwdG9yLmludm9rZSkpIHtcclxuICAgICAgY29uc3QgcmVzID0gcXVldWUoaW50ZXJjZXB0b3IuaW52b2tlLCBvcHRpb25zKTtcclxuICAgICAgcmV0dXJuIHJlcy50aGVuKChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFwaSh3cmFwcGVyT3B0aW9ucyhpbnRlcmNlcHRvciwgb3B0aW9ucyksIC4uLnBhcmFtcylcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBhcGkod3JhcHBlck9wdGlvbnMoaW50ZXJjZXB0b3IsIG9wdGlvbnMpLCAuLi5wYXJhbXMpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBhcGkob3B0aW9ucywgLi4ucGFyYW1zKVxyXG59XHJcblxyXG5jb25zdCBwcm9taXNlSW50ZXJjZXB0b3IgPSB7XHJcbiAgcmV0dXJuVmFsdWUgKHJlcykge1xyXG4gICAgaWYgKCFpc1Byb21pc2UocmVzKSkge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZXMudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXNbMF0pIHtcclxuICAgICAgICAgIHJlamVjdChyZXNbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc1sxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgU1lOQ19BUElfUkUgPVxyXG4gIC9eXFwkfFdpbmRvdyR8V2luZG93U3R5bGUkfHNlbmROYXRpdmVFdmVudHxyZXN0b3JlR2xvYmFsfGdldEN1cnJlbnRTdWJOVnVlfGdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3R8XnJlcG9ydHxpbnRlcmNlcHRvcnN8SW50ZXJjZXB0b3IkfGdldFN1Yk5WdWVCeUlkfHJlcXVpcmVOYXRpdmVQbHVnaW58dXB4MnB4fGhpZGVLZXlib2FyZHxjYW5JVXNlfF5jcmVhdGV8U3luYyR8TWFuYWdlciR8YmFzZTY0VG9BcnJheUJ1ZmZlcnxhcnJheUJ1ZmZlclRvQmFzZTY0fGdldExvY2FsZXxzZXRMb2NhbGUvO1xyXG5cclxuY29uc3QgQ09OVEVYVF9BUElfUkUgPSAvXmNyZWF0ZXxNYW5hZ2VyJC87XHJcblxyXG4vLyBDb250ZXh05L6L5aSW5oOF5Ya1XHJcbmNvbnN0IENPTlRFWFRfQVBJX1JFX0VYQyA9IFsnY3JlYXRlQkxFQ29ubmVjdGlvbiddO1xyXG5cclxuLy8g5ZCM5q2l5L6L5aSW5oOF5Ya1XHJcbmNvbnN0IEFTWU5DX0FQSSA9IFsnY3JlYXRlQkxFQ29ubmVjdGlvbiddO1xyXG5cclxuY29uc3QgQ0FMTEJBQ0tfQVBJX1JFID0gL15vbnxeb2ZmLztcclxuXHJcbmZ1bmN0aW9uIGlzQ29udGV4dEFwaSAobmFtZSkge1xyXG4gIHJldHVybiBDT05URVhUX0FQSV9SRS50ZXN0KG5hbWUpICYmIENPTlRFWFRfQVBJX1JFX0VYQy5pbmRleE9mKG5hbWUpID09PSAtMVxyXG59XHJcbmZ1bmN0aW9uIGlzU3luY0FwaSAobmFtZSkge1xyXG4gIHJldHVybiBTWU5DX0FQSV9SRS50ZXN0KG5hbWUpICYmIEFTWU5DX0FQSS5pbmRleE9mKG5hbWUpID09PSAtMVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NhbGxiYWNrQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIENBTExCQUNLX0FQSV9SRS50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdvblB1c2gnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb21pc2UgKHByb21pc2UpIHtcclxuICByZXR1cm4gcHJvbWlzZS50aGVuKGRhdGEgPT4ge1xyXG4gICAgcmV0dXJuIFtudWxsLCBkYXRhXVxyXG4gIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IFtlcnJdKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG91bGRQcm9taXNlIChuYW1lKSB7XHJcbiAgaWYgKFxyXG4gICAgaXNDb250ZXh0QXBpKG5hbWUpIHx8XHJcbiAgICBpc1N5bmNBcGkobmFtZSkgfHxcclxuICAgIGlzQ2FsbGJhY2tBcGkobmFtZSlcclxuICApIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbmlmICghUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xyXG4gIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIHRoaXMudGhlbihcclxuICAgICAgdmFsdWUgPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxyXG4gICAgICByZWFzb24gPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRocm93IHJlYXNvblxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb21pc2lmeSAobmFtZSwgYXBpKSB7XHJcbiAgaWYgKCFzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICByZXR1cm4gYXBpXHJcbiAgfVxyXG4gIHJldHVybiBmdW5jdGlvbiBwcm9taXNlQXBpIChvcHRpb25zID0ge30sIC4uLnBhcmFtcykge1xyXG4gICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICByZXR1cm4gd3JhcHBlclJldHVyblZhbHVlKG5hbWUsIGludm9rZUFwaShuYW1lLCBhcGksIG9wdGlvbnMsIC4uLnBhcmFtcykpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gd3JhcHBlclJldHVyblZhbHVlKG5hbWUsIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBpbnZva2VBcGkobmFtZSwgYXBpLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgfSksIC4uLnBhcmFtcyk7XHJcbiAgICB9KSkpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBFUFMgPSAxZS00O1xyXG5jb25zdCBCQVNFX0RFVklDRV9XSURUSCA9IDc1MDtcclxubGV0IGlzSU9TID0gZmFsc2U7XHJcbmxldCBkZXZpY2VXaWR0aCA9IDA7XHJcbmxldCBkZXZpY2VEUFIgPSAwO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tEZXZpY2VXaWR0aCAoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcGxhdGZvcm0sXHJcbiAgICBwaXhlbFJhdGlvLFxyXG4gICAgd2luZG93V2lkdGhcclxuICB9ID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKTsgLy8gdW5pPT50dCBydW50aW1lIOe8luivkeebruagh+aYryB1bmkg5a+56LGh77yM5YaF6YOo5LiN5YWB6K6455u05o6l5L2/55SoIHVuaVxyXG5cclxuICBkZXZpY2VXaWR0aCA9IHdpbmRvd1dpZHRoO1xyXG4gIGRldmljZURQUiA9IHBpeGVsUmF0aW87XHJcbiAgaXNJT1MgPSBwbGF0Zm9ybSA9PT0gJ2lvcyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVweDJweCAobnVtYmVyLCBuZXdEZXZpY2VXaWR0aCkge1xyXG4gIGlmIChkZXZpY2VXaWR0aCA9PT0gMCkge1xyXG4gICAgY2hlY2tEZXZpY2VXaWR0aCgpO1xyXG4gIH1cclxuXHJcbiAgbnVtYmVyID0gTnVtYmVyKG51bWJlcik7XHJcbiAgaWYgKG51bWJlciA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDBcclxuICB9XHJcbiAgbGV0IHJlc3VsdCA9IChudW1iZXIgLyBCQVNFX0RFVklDRV9XSURUSCkgKiAobmV3RGV2aWNlV2lkdGggfHwgZGV2aWNlV2lkdGgpO1xyXG4gIGlmIChyZXN1bHQgPCAwKSB7XHJcbiAgICByZXN1bHQgPSAtcmVzdWx0O1xyXG4gIH1cclxuICByZXN1bHQgPSBNYXRoLmZsb29yKHJlc3VsdCArIEVQUyk7XHJcbiAgaWYgKHJlc3VsdCA9PT0gMCkge1xyXG4gICAgaWYgKGRldmljZURQUiA9PT0gMSB8fCAhaXNJT1MpIHtcclxuICAgICAgcmVzdWx0ID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IDAuNTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bWJlciA8IDAgPyAtcmVzdWx0IDogcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvY2FsZSAoKSB7XHJcbiAgLy8g5LyY5YWI5L2/55SoICRsb2NhbGVcclxuICBjb25zdCBhcHAgPSBnZXRBcHAoe1xyXG4gICAgYWxsb3dEZWZhdWx0OiB0cnVlXHJcbiAgfSk7XHJcbiAgaWYgKGFwcCAmJiBhcHAuJHZtKSB7XHJcbiAgICByZXR1cm4gYXBwLiR2bS4kbG9jYWxlXHJcbiAgfVxyXG4gIHJldHVybiB0dC5nZXRTeXN0ZW1JbmZvU3luYygpLmxhbmd1YWdlIHx8ICd6aC1IYW5zJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMb2NhbGUgKGxvY2FsZSkge1xyXG4gIGNvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG4gIGlmICghYXBwKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgY29uc3Qgb2xkTG9jYWxlID0gYXBwLiR2bS4kbG9jYWxlO1xyXG4gIGlmIChvbGRMb2NhbGUgIT09IGxvY2FsZSkge1xyXG4gICAgYXBwLiR2bS4kbG9jYWxlID0gbG9jYWxlO1xyXG4gICAgb25Mb2NhbGVDaGFuZ2VDYWxsYmFja3MuZm9yRWFjaCgoZm4pID0+IGZuKHtcclxuICAgICAgbG9jYWxlXHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuY29uc3Qgb25Mb2NhbGVDaGFuZ2VDYWxsYmFja3MgPSBbXTtcclxuZnVuY3Rpb24gb25Mb2NhbGVDaGFuZ2UgKGZuKSB7XHJcbiAgaWYgKG9uTG9jYWxlQ2hhbmdlQ2FsbGJhY2tzLmluZGV4T2YoZm4pID09PSAtMSkge1xyXG4gICAgb25Mb2NhbGVDaGFuZ2VDYWxsYmFja3MucHVzaChmbik7XHJcbiAgfVxyXG59XHJcblxyXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBnbG9iYWwuZ2V0TG9jYWxlID0gZ2V0TG9jYWxlO1xyXG59XHJcblxyXG5jb25zdCBpbnRlcmNlcHRvcnMgPSB7XHJcbiAgcHJvbWlzZUludGVyY2VwdG9yXHJcbn07XHJcblxyXG52YXIgYmFzZUFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgdXB4MnB4OiB1cHgycHgsXHJcbiAgZ2V0TG9jYWxlOiBnZXRMb2NhbGUsXHJcbiAgc2V0TG9jYWxlOiBzZXRMb2NhbGUsXHJcbiAgb25Mb2NhbGVDaGFuZ2U6IG9uTG9jYWxlQ2hhbmdlLFxyXG4gIGFkZEludGVyY2VwdG9yOiBhZGRJbnRlcmNlcHRvcixcclxuICByZW1vdmVJbnRlcmNlcHRvcjogcmVtb3ZlSW50ZXJjZXB0b3IsXHJcbiAgaW50ZXJjZXB0b3JzOiBpbnRlcmNlcHRvcnNcclxufSk7XHJcblxyXG5jbGFzcyBFdmVudENoYW5uZWwge1xyXG4gIGNvbnN0cnVjdG9yIChpZCwgZXZlbnRzKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmxpc3RlbmVyID0ge307XHJcbiAgICB0aGlzLmVtaXRDYWNoZSA9IHt9O1xyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbihuYW1lLCBldmVudHNbbmFtZV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtaXQgKGV2ZW50TmFtZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgZm5zID0gdGhpcy5saXN0ZW5lcltldmVudE5hbWVdO1xyXG4gICAgaWYgKCFmbnMpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLmVtaXRDYWNoZVtldmVudE5hbWVdIHx8ICh0aGlzLmVtaXRDYWNoZVtldmVudE5hbWVdID0gW10pKS5wdXNoKGFyZ3MpXHJcbiAgICB9XHJcbiAgICBmbnMuZm9yRWFjaChvcHQgPT4ge1xyXG4gICAgICBvcHQuZm4uYXBwbHkob3B0LmZuLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXN0ZW5lcltldmVudE5hbWVdID0gZm5zLmZpbHRlcihvcHQgPT4gb3B0LnR5cGUgIT09ICdvbmNlJyk7XHJcbiAgfVxyXG5cclxuICBvbiAoZXZlbnROYW1lLCBmbikge1xyXG4gICAgdGhpcy5fYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAnb24nLCBmbik7XHJcbiAgICB0aGlzLl9jbGVhckNhY2hlKGV2ZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICBvbmNlIChldmVudE5hbWUsIGZuKSB7XHJcbiAgICB0aGlzLl9hZGRMaXN0ZW5lcihldmVudE5hbWUsICdvbmNlJywgZm4pO1xyXG4gICAgdGhpcy5fY2xlYXJDYWNoZShldmVudE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgb2ZmIChldmVudE5hbWUsIGZuKSB7XHJcbiAgICBjb25zdCBmbnMgPSB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV07XHJcbiAgICBpZiAoIWZucykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChmbikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZucy5sZW5ndGg7KSB7XHJcbiAgICAgICAgaWYgKGZuc1tpXS5mbiA9PT0gZm4pIHtcclxuICAgICAgICAgIGZucy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jbGVhckNhY2hlIChldmVudE5hbWUpIHtcclxuICAgIGNvbnN0IGNhY2hlQXJncyA9IHRoaXMuZW1pdENhY2hlW2V2ZW50TmFtZV07XHJcbiAgICBpZiAoY2FjaGVBcmdzKSB7XHJcbiAgICAgIGZvciAoOyBjYWNoZUFyZ3MubGVuZ3RoID4gMDspIHtcclxuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgW2V2ZW50TmFtZV0uY29uY2F0KGNhY2hlQXJncy5zaGlmdCgpKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hZGRMaXN0ZW5lciAoZXZlbnROYW1lLCB0eXBlLCBmbikge1xyXG4gICAgKHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSB8fCAodGhpcy5saXN0ZW5lcltldmVudE5hbWVdID0gW10pKS5wdXNoKHtcclxuICAgICAgZm4sXHJcbiAgICAgIHR5cGVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZXZlbnRDaGFubmVscyA9IHt9O1xyXG5cclxuY29uc3QgZXZlbnRDaGFubmVsU3RhY2sgPSBbXTtcclxuXHJcbmxldCBpZCA9IDA7XHJcblxyXG5mdW5jdGlvbiBpbml0RXZlbnRDaGFubmVsIChldmVudHMsIGNhY2hlID0gdHJ1ZSkge1xyXG4gIGlkKys7XHJcbiAgY29uc3QgZXZlbnRDaGFubmVsID0gbmV3IEV2ZW50Q2hhbm5lbChpZCwgZXZlbnRzKTtcclxuICBpZiAoY2FjaGUpIHtcclxuICAgIGV2ZW50Q2hhbm5lbHNbaWRdID0gZXZlbnRDaGFubmVsO1xyXG4gICAgZXZlbnRDaGFubmVsU3RhY2sucHVzaChldmVudENoYW5uZWwpO1xyXG4gIH1cclxuICByZXR1cm4gZXZlbnRDaGFubmVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50Q2hhbm5lbCAoaWQpIHtcclxuICBpZiAoaWQpIHtcclxuICAgIGNvbnN0IGV2ZW50Q2hhbm5lbCA9IGV2ZW50Q2hhbm5lbHNbaWRdO1xyXG4gICAgZGVsZXRlIGV2ZW50Q2hhbm5lbHNbaWRdO1xyXG4gICAgcmV0dXJuIGV2ZW50Q2hhbm5lbFxyXG4gIH1cclxuICByZXR1cm4gZXZlbnRDaGFubmVsU3RhY2suc2hpZnQoKVxyXG59XHJcblxyXG52YXIgbmF2aWdhdGVUbyA9IHtcclxuICBhcmdzIChmcm9tQXJncywgdG9BcmdzKSB7XHJcbiAgICBjb25zdCBpZCA9IGluaXRFdmVudENoYW5uZWwoZnJvbUFyZ3MuZXZlbnRzKS5pZDtcclxuICAgIGlmIChmcm9tQXJncy51cmwpIHtcclxuICAgICAgZnJvbUFyZ3MudXJsID0gZnJvbUFyZ3MudXJsICsgKGZyb21BcmdzLnVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdfX2lkX189JyArIGlkO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmV0dXJuVmFsdWUgKGZyb21SZXMsIHRvUmVzKSB7XHJcbiAgICBmcm9tUmVzLmV2ZW50Q2hhbm5lbCA9IGdldEV2ZW50Q2hhbm5lbCgpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRFeGlzdHNQYWdlSW5kZXggKHVybCkge1xyXG4gIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgbGV0IGxlbiA9IHBhZ2VzLmxlbmd0aDtcclxuICB3aGlsZSAobGVuLS0pIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBwYWdlc1tsZW5dO1xyXG4gICAgaWYgKHBhZ2UuJHBhZ2UgJiYgcGFnZS4kcGFnZS5mdWxsUGF0aCA9PT0gdXJsKSB7XHJcbiAgICAgIHJldHVybiBsZW5cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIC0xXHJcbn1cclxuXHJcbnZhciByZWRpcmVjdFRvID0ge1xyXG4gIG5hbWUgKGZyb21BcmdzKSB7XHJcbiAgICBpZiAoZnJvbUFyZ3MuZXhpc3RzID09PSAnYmFjaycgJiYgZnJvbUFyZ3MuZGVsdGEpIHtcclxuICAgICAgcmV0dXJuICduYXZpZ2F0ZUJhY2snXHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ3JlZGlyZWN0VG8nXHJcbiAgfSxcclxuICBhcmdzIChmcm9tQXJncykge1xyXG4gICAgaWYgKGZyb21BcmdzLmV4aXN0cyA9PT0gJ2JhY2snICYmIGZyb21BcmdzLnVybCkge1xyXG4gICAgICBjb25zdCBleGlzdHNQYWdlSW5kZXggPSBmaW5kRXhpc3RzUGFnZUluZGV4KGZyb21BcmdzLnVybCk7XHJcbiAgICAgIGlmIChleGlzdHNQYWdlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBnZXRDdXJyZW50UGFnZXMoKS5sZW5ndGggLSAxIC0gZXhpc3RzUGFnZUluZGV4O1xyXG4gICAgICAgIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgIGZyb21BcmdzLmRlbHRhID0gZGVsdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIHByZXZpZXdJbWFnZSA9IHtcclxuICBhcmdzIChmcm9tQXJncykge1xyXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KGZyb21BcmdzLmN1cnJlbnQpO1xyXG4gICAgaWYgKGlzTmFOKGN1cnJlbnRJbmRleCkpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmxzID0gZnJvbUFyZ3MudXJscztcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh1cmxzKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGxlbiA9IHVybHMubGVuZ3RoO1xyXG4gICAgaWYgKCFsZW4pIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPj0gbGVuKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IGxlbiAtIDE7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xyXG4gICAgICBmcm9tQXJncy5jdXJyZW50ID0gdXJsc1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICBmcm9tQXJncy51cmxzID0gdXJscy5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA8IGN1cnJlbnRJbmRleCA/IGl0ZW0gIT09IHVybHNbY3VycmVudEluZGV4XSA6IHRydWVcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZyb21BcmdzLmN1cnJlbnQgPSB1cmxzWzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW5kaWNhdG9yOiBmYWxzZSxcclxuICAgICAgbG9vcDogZmFsc2VcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmxldCBkZXZpY2VJZDtcclxuZnVuY3Rpb24gYWRkVXVpZCAocmVzdWx0KSB7XHJcbiAgZGV2aWNlSWQgPSBkZXZpY2VJZCB8fCB0dC5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgaWYgKCFkZXZpY2VJZCkge1xyXG4gICAgZGV2aWNlSWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHQuc2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogVVVJRF9LRVksXHJcbiAgICAgIGRhdGE6IGRldmljZUlkXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVzdWx0LmRldmljZUlkID0gZGV2aWNlSWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNhZmVBcmVhSW5zZXRzIChyZXN1bHQpIHtcclxuICBpZiAocmVzdWx0LnNhZmVBcmVhKSB7XHJcbiAgICBjb25zdCBzYWZlQXJlYSA9IHJlc3VsdC5zYWZlQXJlYTtcclxuICAgIHJlc3VsdC5zYWZlQXJlYUluc2V0cyA9IHtcclxuICAgICAgdG9wOiBzYWZlQXJlYS50b3AsXHJcbiAgICAgIGxlZnQ6IHNhZmVBcmVhLmxlZnQsXHJcbiAgICAgIHJpZ2h0OiByZXN1bHQud2luZG93V2lkdGggLSBzYWZlQXJlYS5yaWdodCxcclxuICAgICAgYm90dG9tOiByZXN1bHQud2luZG93SGVpZ2h0IC0gc2FmZUFyZWEuYm90dG9tXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxudmFyIGdldFN5c3RlbUluZm8gPSB7XHJcbiAgcmV0dXJuVmFsdWU6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIGFkZFV1aWQocmVzdWx0KTtcclxuICAgIGFkZFNhZmVBcmVhSW5zZXRzKHJlc3VsdCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgb05hbWUgPSAnZ2V0VXNlckluZm8nO1xyXG5jb25zdCBuTmFtZSA9ICdnZXRVc2VyUHJvZmlsZSc7XHJcblxyXG52YXIgZ2V0VXNlclByb2ZpbGUgPSB7XHJcbiAgbmFtZTogdHQuY2FuSVVzZShuTmFtZSkgPyBuTmFtZSA6IG9OYW1lXHJcbn07XHJcblxyXG4vLyDkuI3mlK/mjIHnmoQgQVBJIOWIl+ihqFxyXG5jb25zdCB0b2RvcyA9IFtcclxuICAncHJlbG9hZFBhZ2UnLFxyXG4gICd1blByZWxvYWRQYWdlJyxcclxuICAnbG9hZFN1YlBhY2thZ2UnXHJcbiAgLy8gJ2NyZWF0ZUNhbWVyYUNvbnRleHQnLFxyXG4gIC8vICdjcmVhdGVMaXZlUGxheWVyQ29udGV4dCcsXHJcbiAgLy8gJ2dldFNhdmVkRmlsZUluZm8nLFxyXG4gIC8vICdjcmVhdGVNYXBDb250ZXh0JyxcclxuICAvLyAnb25NZW1vcnlXYXJuaW5nJyxcclxuICAvLyAnb25HeXJvc2NvcGVDaGFuZ2UnLFxyXG4gIC8vICdzdGFydEd5cm9zY29wZScsXHJcbiAgLy8gJ3N0b3BHeXJvc2NvcGUnLFxyXG4gIC8vICdzZXRTY3JlZW5CcmlnaHRuZXNzJyxcclxuICAvLyAnZ2V0U2NyZWVuQnJpZ2h0bmVzcycsXHJcbiAgLy8gJ2FkZFBob25lQ29udGFjdCcsXHJcbiAgLy8gJ29wZW5CbHVldG9vdGhBZGFwdGVyJyxcclxuICAvLyAnc3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5JyxcclxuICAvLyAnb25CbHVldG9vdGhEZXZpY2VGb3VuZCcsXHJcbiAgLy8gJ3N0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5JyxcclxuICAvLyAnb25CbHVldG9vdGhBZGFwdGVyU3RhdGVDaGFuZ2UnLFxyXG4gIC8vICdnZXRDb25uZWN0ZWRCbHVldG9vdGhEZXZpY2VzJyxcclxuICAvLyAnZ2V0Qmx1ZXRvb3RoRGV2aWNlcycsXHJcbiAgLy8gJ2dldEJsdWV0b290aEFkYXB0ZXJTdGF0ZScsXHJcbiAgLy8gJ2Nsb3NlQmx1ZXRvb3RoQWRhcHRlcicsXHJcbiAgLy8gJ3dyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZScsXHJcbiAgLy8gJ3JlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlJyxcclxuICAvLyAnb25CTEVDb25uZWN0aW9uU3RhdGVDaGFuZ2UnLFxyXG4gIC8vICdvbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UnLFxyXG4gIC8vICdub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlJyxcclxuICAvLyAnZ2V0QkxFRGV2aWNlU2VydmljZXMnLFxyXG4gIC8vICdnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3MnLFxyXG4gIC8vICdjcmVhdGVCTEVDb25uZWN0aW9uJyxcclxuICAvLyAnY2xvc2VCTEVDb25uZWN0aW9uJyxcclxuICAvLyAnb25CZWFjb25TZXJ2aWNlQ2hhbmdlJyxcclxuICAvLyAnb25CZWFjb25VcGRhdGUnLFxyXG4gIC8vICdnZXRCZWFjb25zJyxcclxuICAvLyAnc3RhcnRCZWFjb25EaXNjb3ZlcnknLFxyXG4gIC8vICdzdG9wQmVhY29uRGlzY292ZXJ5JyxcclxuICAvLyAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJyxcclxuICAvLyAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJyxcclxuICAvLyAnc2V0VGFiQmFySXRlbScsXHJcbiAgLy8gJ3NldFRhYkJhclN0eWxlJyxcclxuICAvLyAnaGlkZVRhYkJhcicsXHJcbiAgLy8gJ3Nob3dUYWJCYXInLFxyXG4gIC8vICdzZXRUYWJCYXJCYWRnZScsXHJcbiAgLy8gJ3JlbW92ZVRhYkJhckJhZGdlJyxcclxuICAvLyAnc2hvd1RhYkJhclJlZERvdCcsXHJcbiAgLy8gJ2hpZGVUYWJCYXJSZWREb3QnLFxyXG4gIC8vICdzZXRCYWNrZ3JvdW5kQ29sb3InLFxyXG4gIC8vICdzZXRCYWNrZ3JvdW5kVGV4dFN0eWxlJyxcclxuICAvLyAnY2hvb3NlSW52b2ljZVRpdGxlJyxcclxuICAvLyAnYWRkVGVtcGxhdGUnLFxyXG4gIC8vICdkZWxldGVUZW1wbGF0ZScsXHJcbiAgLy8gJ2dldFRlbXBsYXRlTGlicmFyeUJ5SWQnLFxyXG4gIC8vICdnZXRUZW1wbGF0ZUxpYnJhcnlMaXN0JyxcclxuICAvLyAnZ2V0VGVtcGxhdGVMaXN0JyxcclxuICAvLyAnc2VuZFRlbXBsYXRlTWVzc2FnZScsXHJcbiAgLy8gJ3NldEVuYWJsZURlYnVnJyxcclxuICAvLyAnb25XaW5kb3dSZXNpemUnLFxyXG4gIC8vICdvZmZXaW5kb3dSZXNpemUnLFxyXG4gIC8vICdjcmVhdGVPZmZzY3JlZW5DYW52YXMnLFxyXG4gIC8vICd2aWJyYXRlJ1xyXG5dO1xyXG5cclxuLy8g5a2Y5Zyo5YW85a655oCn55qEIEFQSSDliJfooahcclxuLy8g5aS05p2h5bCP56iL5bqP6IeqMS4zNS4wK+aUr+aMgWNhbklVc2VzXHJcbmNvbnN0IGNhbklVc2VzID0gW1xyXG4gIC8vICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicsXHJcbiAgLy8gJ2dldFNhdmVkRmlsZUxpc3QnLFxyXG4gIC8vICdyZW1vdmVTYXZlZEZpbGUnLFxyXG4gIC8vICdoaWRlS2V5Ym9hcmQnLFxyXG4gIC8vICdnZXRJbWFnZUluZm8nLFxyXG4gIC8vICdjcmVhdGVWaWRlb0NvbnRleHQnLFxyXG4gIC8vICdvblNvY2tldE9wZW4nLFxyXG4gIC8vICdvblNvY2tldEVycm9yJyxcclxuICAvLyAnc2VuZFNvY2tldE1lc3NhZ2UnLFxyXG4gIC8vICdvblNvY2tldE1lc3NhZ2UnLFxyXG4gIC8vICdjbG9zZVNvY2tldCcsXHJcbiAgLy8gJ29uU29ja2V0Q2xvc2UnLFxyXG4gIC8vICdnZXRFeHRDb25maWcnLFxyXG4gIC8vICdnZXRFeHRDb25maWdTeW5jJyxcclxuICAvLyAnbmF2aWdhdGVUb01pbmlQcm9ncmFtJyxcclxuICAvLyAnbmF2aWdhdGVCYWNrTWluaVByb2dyYW0nLFxyXG4gIC8vICdjb21wcmVzc0ltYWdlJyxcclxuICAvLyAnY2hvb3NlTG9jYXRpb24nLFxyXG4gIC8vICdvcGVuRG9jdW1lbnQnLFxyXG4gIC8vICdvblVzZXJDYXB0dXJlU2NyZWVuJyxcclxuICAvLyAnZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcicsXHJcbiAgLy8gJ3NldE5hdmlnYXRpb25CYXJDb2xvcicsXHJcbl07XHJcblxyXG4vLyDpnIDopoHlgZrovazmjaLnmoQgQVBJIOWIl+ihqFxyXG5jb25zdCBwcm90b2NvbHMgPSB7XHJcbiAgY2hvb3NlSW1hZ2U6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgc2l6ZVR5cGU6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBuYXZpZ2F0ZVRvLFxyXG4gIHJlZGlyZWN0VG8sXHJcbiAgcHJldmlld0ltYWdlLFxyXG4gIGdldFN5c3RlbUluZm8sXHJcbiAgZ2V0U3lzdGVtSW5mb1N5bmM6IGdldFN5c3RlbUluZm8sXHJcbiAgZ2V0VXNlclByb2ZpbGUsXHJcbiAgY29ubmVjdFNvY2tldDoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBtZXRob2Q6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBjaG9vc2VWaWRlbzoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBjYW1lcmE6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzY2FuQ29kZToge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBvbmx5RnJvbUNhbWVyYTogZmFsc2UsXHJcbiAgICAgIHNjYW5UeXBlOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnRBY2NlbGVyb21ldGVyOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGludGVydmFsOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2hvd1RvYXN0OiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGltYWdlOiBmYWxzZSxcclxuICAgICAgbWFzazogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHNob3dMb2FkaW5nOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIG1hc2s6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93TW9kYWw6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgY2FuY2VsQ29sb3I6IGZhbHNlLFxyXG4gICAgICBjb25maXJtQ29sb3I6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93QWN0aW9uU2hlZXQ6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgaXRlbUNvbG9yOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9naW46IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgc2NvcGVzOiBmYWxzZSxcclxuICAgICAgdGltZW91dDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGdldFVzZXJJbmZvOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGxhbmc6IGZhbHNlLFxyXG4gICAgICB0aW1lb3V0OiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVxdWVzdFBheW1lbnQ6IHtcclxuICAgIG5hbWU6IHR0LnBheSA/ICdwYXknIDogJ3JlcXVlc3RQYXltZW50JyxcclxuICAgIGFyZ3M6IHtcclxuICAgICAgb3JkZXJJbmZvOiB0dC5wYXkgPyAnb3JkZXJJbmZvJyA6ICdkYXRhJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0RmlsZUluZm86IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgZGlnZXN0QWxnb3JpdGhtOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENBTExCQUNLUyA9IFsnc3VjY2VzcycsICdmYWlsJywgJ2NhbmNlbCcsICdjb21wbGV0ZSddO1xyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0NhbGxiYWNrIChtZXRob2ROYW1lLCBtZXRob2QsIHJldHVyblZhbHVlKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIHJldHVybiBtZXRob2QocHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0FyZ3MgKG1ldGhvZE5hbWUsIGZyb21BcmdzLCBhcmdzT3B0aW9uID0ge30sIHJldHVyblZhbHVlID0ge30sIGtlZXBGcm9tQXJncyA9IGZhbHNlKSB7XHJcbiAgaWYgKGlzUGxhaW5PYmplY3QoZnJvbUFyZ3MpKSB7IC8vIOS4gOiIrCBhcGkg55qE5Y+C5pWw6Kej5p6QXHJcbiAgICBjb25zdCB0b0FyZ3MgPSBrZWVwRnJvbUFyZ3MgPT09IHRydWUgPyBmcm9tQXJncyA6IHt9OyAvLyByZXR1cm5WYWx1ZSDkuLogZmFsc2Ug5pe277yM6K+05piO5piv5qC85byP5YyW6L+U5Zue5YC877yM55u05o6l5Zyo6L+U5Zue5YC85a+56LGh5LiK5L+u5pS56LWL5YC8XHJcbiAgICBpZiAoaXNGbihhcmdzT3B0aW9uKSkge1xyXG4gICAgICBhcmdzT3B0aW9uID0gYXJnc09wdGlvbihmcm9tQXJncywgdG9BcmdzKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZyb21BcmdzKSB7XHJcbiAgICAgIGlmIChoYXNPd24oYXJnc09wdGlvbiwga2V5KSkge1xyXG4gICAgICAgIGxldCBrZXlPcHRpb24gPSBhcmdzT3B0aW9uW2tleV07XHJcbiAgICAgICAgaWYgKGlzRm4oa2V5T3B0aW9uKSkge1xyXG4gICAgICAgICAga2V5T3B0aW9uID0ga2V5T3B0aW9uKGZyb21BcmdzW2tleV0sIGZyb21BcmdzLCB0b0FyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWtleU9wdGlvbikgeyAvLyDkuI3mlK/mjIHnmoTlj4LmlbBcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlICcke21ldGhvZE5hbWV9JyBtZXRob2Qgb2YgcGxhdGZvcm0gJ+WktOadoeWwj+eoi+W6jycgZG9lcyBub3Qgc3VwcG9ydCBvcHRpb24gJyR7a2V5fSdgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzU3RyKGtleU9wdGlvbikpIHsgLy8g6YeN5YaZ5Y+C5pWwIGtleVxyXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbl0gPSBmcm9tQXJnc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChrZXlPcHRpb24pKSB7IC8vIHtuYW1lOm5ld05hbWUsdmFsdWU6dmFsdWV95Y+v6YeN5paw5oyH5a6a5Y+C5pWwIGtleTp2YWx1ZVxyXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbi5uYW1lID8ga2V5T3B0aW9uLm5hbWUgOiBrZXldID0ga2V5T3B0aW9uLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChDQUxMQkFDS1MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xyXG4gICAgICAgIGlmIChpc0ZuKGZyb21BcmdzW2tleV0pKSB7XHJcbiAgICAgICAgICB0b0FyZ3Nba2V5XSA9IHByb2Nlc3NDYWxsYmFjayhtZXRob2ROYW1lLCBmcm9tQXJnc1trZXldLCByZXR1cm5WYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgha2VlcEZyb21BcmdzKSB7XHJcbiAgICAgICAgICB0b0FyZ3Nba2V5XSA9IGZyb21BcmdzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9BcmdzXHJcbiAgfSBlbHNlIGlmIChpc0ZuKGZyb21BcmdzKSkge1xyXG4gICAgZnJvbUFyZ3MgPSBwcm9jZXNzQ2FsbGJhY2sobWV0aG9kTmFtZSwgZnJvbUFyZ3MsIHJldHVyblZhbHVlKTtcclxuICB9XHJcbiAgcmV0dXJuIGZyb21BcmdzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NSZXR1cm5WYWx1ZSAobWV0aG9kTmFtZSwgcmVzLCByZXR1cm5WYWx1ZSwga2VlcFJldHVyblZhbHVlID0gZmFsc2UpIHtcclxuICBpZiAoaXNGbihwcm90b2NvbHMucmV0dXJuVmFsdWUpKSB7IC8vIOWkhOeQhumAmueUqCByZXR1cm5WYWx1ZVxyXG4gICAgcmVzID0gcHJvdG9jb2xzLnJldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcyk7XHJcbiAgfVxyXG4gIHJldHVybiBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCByZXMsIHJldHVyblZhbHVlLCB7fSwga2VlcFJldHVyblZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyIChtZXRob2ROYW1lLCBtZXRob2QpIHtcclxuICBpZiAoaGFzT3duKHByb3RvY29scywgbWV0aG9kTmFtZSkpIHtcclxuICAgIGNvbnN0IHByb3RvY29sID0gcHJvdG9jb2xzW21ldGhvZE5hbWVdO1xyXG4gICAgaWYgKCFwcm90b2NvbCkgeyAvLyDmmoLkuI3mlK/mjIHnmoQgYXBpXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgUGxhdGZvcm0gJ+WktOadoeWwj+eoi+W6jycgZG9lcyBub3Qgc3VwcG9ydCAnJHttZXRob2ROYW1lfScuYCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnMSwgYXJnMikgeyAvLyDnm67liY0gYXBpIOacgOWkmuS4pOS4quWPguaVsFxyXG4gICAgICBsZXQgb3B0aW9ucyA9IHByb3RvY29sO1xyXG4gICAgICBpZiAoaXNGbihwcm90b2NvbCkpIHtcclxuICAgICAgICBvcHRpb25zID0gcHJvdG9jb2woYXJnMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyZzEgPSBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCBhcmcxLCBvcHRpb25zLmFyZ3MsIG9wdGlvbnMucmV0dXJuVmFsdWUpO1xyXG5cclxuICAgICAgY29uc3QgYXJncyA9IFthcmcxXTtcclxuICAgICAgaWYgKHR5cGVvZiBhcmcyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNGbihvcHRpb25zLm5hbWUpKSB7XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZShhcmcxKTtcclxuICAgICAgfSBlbHNlIGlmIChpc1N0cihvcHRpb25zLm5hbWUpKSB7XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHR0W21ldGhvZE5hbWVdLmFwcGx5KHR0LCBhcmdzKTtcclxuICAgICAgaWYgKGlzU3luY0FwaShtZXRob2ROYW1lKSkgeyAvLyDlkIzmraUgYXBpXHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXR1cm5WYWx1ZSwgb3B0aW9ucy5yZXR1cm5WYWx1ZSwgaXNDb250ZXh0QXBpKG1ldGhvZE5hbWUpKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWV0aG9kXHJcbn1cclxuXHJcbmNvbnN0IHRvZG9BcGlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbmNvbnN0IFRPRE9TID0gW1xyXG4gICdvblRhYkJhck1pZEJ1dHRvblRhcCcsXHJcbiAgJ3N1YnNjcmliZVB1c2gnLFxyXG4gICd1bnN1YnNjcmliZVB1c2gnLFxyXG4gICdvblB1c2gnLFxyXG4gICdvZmZQdXNoJyxcclxuICAnc2hhcmUnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvZG9BcGkgKHtcclxuICAgIGZhaWwsXHJcbiAgICBjb21wbGV0ZVxyXG4gIH0pIHtcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiBgJHtuYW1lfTpmYWlsIG1ldGhvZCAnJHtuYW1lfScgbm90IHN1cHBvcnRlZGBcclxuICAgIH07XHJcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5UT0RPUy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgdG9kb0FwaXNbbmFtZV0gPSBjcmVhdGVUb2RvQXBpKG5hbWUpO1xyXG59KTtcclxuXHJcbnZhciBwcm92aWRlcnMgPSB7XHJcbiAgb2F1dGg6IFsndG91dGlhbyddLFxyXG4gIHNoYXJlOiBbJ3RvdXRpYW8nXSxcclxuICBwYXltZW50OiBbJ3RvdXRpYW8nXSxcclxuICBwdXNoOiBbJ3RvdXRpYW8nXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UHJvdmlkZXIgKHtcclxuICBzZXJ2aWNlLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgZmFpbCxcclxuICBjb21wbGV0ZVxyXG59KSB7XHJcbiAgbGV0IHJlcyA9IGZhbHNlO1xyXG4gIGlmIChwcm92aWRlcnNbc2VydmljZV0pIHtcclxuICAgIHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiAnZ2V0UHJvdmlkZXI6b2snLFxyXG4gICAgICBzZXJ2aWNlLFxyXG4gICAgICBwcm92aWRlcjogcHJvdmlkZXJzW3NlcnZpY2VdXHJcbiAgICB9O1xyXG4gICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiAnZ2V0UHJvdmlkZXI6ZmFpbCBzZXJ2aWNlIG5vdCBmb3VuZCdcclxuICAgIH07XHJcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICB9XHJcbiAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxufVxyXG5cclxudmFyIGV4dHJhQXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xyXG4gIF9fcHJvdG9fXzogbnVsbCxcclxuICBnZXRQcm92aWRlcjogZ2V0UHJvdmlkZXJcclxufSk7XHJcblxyXG5jb25zdCBnZXRFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgRW1pdHRlcjtcclxuICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlciAoKSB7XHJcbiAgICBpZiAoIUVtaXR0ZXIpIHtcclxuICAgICAgRW1pdHRlciA9IG5ldyBWdWUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBFbWl0dGVyXHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHkgKGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncylcclxufVxyXG5cclxuZnVuY3Rpb24gJG9uICgpIHtcclxuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJG9mZiAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbLi4uYXJndW1lbnRzXSlcclxufVxyXG5mdW5jdGlvbiAkb25jZSAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJGVtaXQgKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcblxyXG52YXIgZXZlbnRBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gICRvbjogJG9uLFxyXG4gICRvZmY6ICRvZmYsXHJcbiAgJG9uY2U6ICRvbmNlLFxyXG4gICRlbWl0OiAkZW1pdFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lZGlhUXVlcnlPYnNlcnZlciAoKSB7XHJcbiAgY29uc3QgbWVkaWFRdWVyeU9ic2VydmVyID0ge307XHJcbiAgY29uc3Qge1xyXG4gICAgd2luZG93V2lkdGgsXHJcbiAgICB3aW5kb3dIZWlnaHRcclxuICB9ID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb24gPSB3aW5kb3dXaWR0aCA8IHdpbmRvd0hlaWdodCA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcclxuXHJcbiAgbWVkaWFRdWVyeU9ic2VydmVyLm9ic2VydmUgPSAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcclxuICAgIGxldCBtYXRjaGVzID0gdHJ1ZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBpbiBvcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGl0ZW0gPT09ICdvcmllbnRhdGlvbicgPyBvcHRpb25zW2l0ZW1dIDogTnVtYmVyKG9wdGlvbnNbaXRlbV0pO1xyXG4gICAgICBpZiAob3B0aW9uc1tpdGVtXSAhPT0gJycpIHtcclxuICAgICAgICBpZiAoaXRlbSA9PT0gJ3dpZHRoJykge1xyXG4gICAgICAgICAgaWYgKGl0ZW1WYWx1ZSA9PT0gd2luZG93V2lkdGgpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbSA9PT0gJ21pbldpZHRoJykge1xyXG4gICAgICAgICAgaWYgKHdpbmRvd1dpZHRoID49IGl0ZW1WYWx1ZSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtID09PSAnbWF4V2lkdGgnKSB7XHJcbiAgICAgICAgICBpZiAod2luZG93V2lkdGggPD0gaXRlbVZhbHVlKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtID09PSAnaGVpZ2h0Jykge1xyXG4gICAgICAgICAgaWYgKGl0ZW1WYWx1ZSA9PT0gd2luZG93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09ICdtaW5IZWlnaHQnKSB7XHJcbiAgICAgICAgICBpZiAod2luZG93SGVpZ2h0ID49IGl0ZW1WYWx1ZSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtID09PSAnbWF4SGVpZ2h0Jykge1xyXG4gICAgICAgICAgaWYgKHdpbmRvd0hlaWdodCA8PSBpdGVtVmFsdWUpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0gPT09ICdvcmllbnRhdGlvbicpIHtcclxuICAgICAgICAgIGlmIChvcHRpb25zW2l0ZW1dID09PSBvcmllbnRhdGlvbikge1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYWxsYmFjayhtYXRjaGVzKTtcclxuXHJcbiAgICByZXR1cm4gbWF0Y2hlc1xyXG4gIH07XHJcblxyXG4gIG1lZGlhUXVlcnlPYnNlcnZlci5kaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBtZWRpYVF1ZXJ5T2JzZXJ2ZXJcclxufVxyXG5cclxudmFyIGFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgY3JlYXRlTWVkaWFRdWVyeU9ic2VydmVyOiBjcmVhdGVNZWRpYVF1ZXJ5T2JzZXJ2ZXJcclxufSk7XHJcblxyXG5jb25zdCBNUFBhZ2UgPSBQYWdlO1xyXG5jb25zdCBNUENvbXBvbmVudCA9IENvbXBvbmVudDtcclxuXHJcbmNvbnN0IGN1c3RvbWl6ZVJFID0gLzovZztcclxuXHJcbmNvbnN0IGN1c3RvbWl6ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XHJcbiAgcmV0dXJuIGNhbWVsaXplKHN0ci5yZXBsYWNlKGN1c3RvbWl6ZVJFLCAnLScpKVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRUcmlnZ2VyRXZlbnQgKG1wSW5zdGFuY2UpIHtcclxuICBjb25zdCBvbGRUcmlnZ2VyRXZlbnQgPSBtcEluc3RhbmNlLnRyaWdnZXJFdmVudDtcclxuICBtcEluc3RhbmNlLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIG9sZFRyaWdnZXJFdmVudC5hcHBseShtcEluc3RhbmNlLCBbY3VzdG9taXplKGV2ZW50KSwgLi4uYXJnc10pXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEhvb2sgKG5hbWUsIG9wdGlvbnMsIGlzQ29tcG9uZW50KSB7XHJcbiAge1xyXG4gICAgLy8gZml4IGJ5IEx4aCDlrZfoioLoh6rlrprkuYnnu4Tku7ZDb21wb25lbnTmnoTpgKDlmajmlofmoaPkuIrlhpnmnIljcmVhdGVk77yM5L2G5piv5a6e5rWL5Y+q6Kem5Y+R5LqGbGlmZXRpbWVz5LiK55qEY3JlYXRlZFxyXG4gICAgaXNDb21wb25lbnQgJiYgKG9wdGlvbnMgPSBvcHRpb25zLmxpZmV0aW1lcyk7XHJcbiAgfVxyXG4gIGNvbnN0IG9sZEhvb2sgPSBvcHRpb25zW25hbWVdO1xyXG4gIGlmICghb2xkSG9vaykge1xyXG4gICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaW5pdFRyaWdnZXJFdmVudCh0aGlzKTtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIG9wdGlvbnNbbmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICBpbml0VHJpZ2dlckV2ZW50KHRoaXMpO1xyXG4gICAgICByZXR1cm4gb2xkSG9vay5hcHBseSh0aGlzLCBhcmdzKVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuaWYgKCFNUFBhZ2UuX18kd3JhcHBlcmVkKSB7XHJcbiAgTVBQYWdlLl9fJHdyYXBwZXJlZCA9IHRydWU7XHJcbiAgUGFnZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIGluaXRIb29rKCdvbkxvYWQnLCBvcHRpb25zKTtcclxuICAgIHJldHVybiBNUFBhZ2Uob3B0aW9ucylcclxuICB9O1xyXG4gIFBhZ2UuYWZ0ZXIgPSBNUFBhZ2UuYWZ0ZXI7XHJcblxyXG4gIENvbXBvbmVudCA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIGluaXRIb29rKCdjcmVhdGVkJywgb3B0aW9ucywgdHJ1ZSk7XHJcbiAgICByZXR1cm4gTVBDb21wb25lbnQob3B0aW9ucylcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBQQUdFX0VWRU5UX0hPT0tTID0gW1xyXG4gICdvblB1bGxEb3duUmVmcmVzaCcsXHJcbiAgJ29uUmVhY2hCb3R0b20nLFxyXG4gICdvbkFkZFRvRmF2b3JpdGVzJyxcclxuICAnb25TaGFyZVRpbWVsaW5lJyxcclxuICAnb25TaGFyZUFwcE1lc3NhZ2UnLFxyXG4gICdvblBhZ2VTY3JvbGwnLFxyXG4gICdvblJlc2l6ZScsXHJcbiAgJ29uVGFiSXRlbVRhcCdcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGluaXRNb2NrcyAodm0sIG1vY2tzKSB7XHJcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRtcFt2bS5tcFR5cGVdO1xyXG4gIG1vY2tzLmZvckVhY2gobW9jayA9PiB7XHJcbiAgICBpZiAoaGFzT3duKG1wSW5zdGFuY2UsIG1vY2spKSB7XHJcbiAgICAgIHZtW21vY2tdID0gbXBJbnN0YW5jZVttb2NrXTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzSG9vayAoaG9vaywgdnVlT3B0aW9ucykge1xyXG4gIGlmICghdnVlT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChWdWUub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KFZ1ZS5vcHRpb25zW2hvb2tdKSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcclxuXHJcbiAgaWYgKGlzRm4odnVlT3B0aW9ucykpIHtcclxuICAgIGlmIChpc0ZuKHZ1ZU9wdGlvbnMuZXh0ZW5kT3B0aW9uc1tob29rXSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmICh2dWVPcHRpb25zLnN1cGVyICYmXHJcbiAgICAgIHZ1ZU9wdGlvbnMuc3VwZXIub3B0aW9ucyAmJlxyXG4gICAgICBBcnJheS5pc0FycmF5KHZ1ZU9wdGlvbnMuc3VwZXIub3B0aW9uc1tob29rXSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzRm4odnVlT3B0aW9uc1tob29rXSkpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGNvbnN0IG1peGlucyA9IHZ1ZU9wdGlvbnMubWl4aW5zO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KG1peGlucykpIHtcclxuICAgIHJldHVybiAhIW1peGlucy5maW5kKG1peGluID0+IGhhc0hvb2soaG9vaywgbWl4aW4pKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEhvb2tzIChtcE9wdGlvbnMsIGhvb2tzLCB2dWVPcHRpb25zKSB7XHJcbiAgaG9va3MuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChoYXNIb29rKGhvb2ssIHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICAgIG1wT3B0aW9uc1tob29rXSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKGhvb2ssIGFyZ3MpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRWdWVDb21wb25lbnQgKFZ1ZSwgdnVlT3B0aW9ucykge1xyXG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcclxuICBsZXQgVnVlQ29tcG9uZW50O1xyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICBWdWVDb21wb25lbnQgPSB2dWVPcHRpb25zO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBWdWVDb21wb25lbnQgPSBWdWUuZXh0ZW5kKHZ1ZU9wdGlvbnMpO1xyXG4gIH1cclxuICB2dWVPcHRpb25zID0gVnVlQ29tcG9uZW50Lm9wdGlvbnM7XHJcbiAgcmV0dXJuIFtWdWVDb21wb25lbnQsIHZ1ZU9wdGlvbnNdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTbG90cyAodm0sIHZ1ZVNsb3RzKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlU2xvdHMpICYmIHZ1ZVNsb3RzLmxlbmd0aCkge1xyXG4gICAgY29uc3QgJHNsb3RzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHZ1ZVNsb3RzLmZvckVhY2goc2xvdE5hbWUgPT4ge1xyXG4gICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgdm0uJHNjb3BlZFNsb3RzID0gdm0uJHNsb3RzID0gJHNsb3RzO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFZ1ZUlkcyAodnVlSWRzLCBtcEluc3RhbmNlKSB7XHJcbiAgdnVlSWRzID0gKHZ1ZUlkcyB8fCAnJykuc3BsaXQoJywnKTtcclxuICBjb25zdCBsZW4gPSB2dWVJZHMubGVuZ3RoO1xyXG5cclxuICBpZiAobGVuID09PSAxKSB7XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XHJcbiAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcclxuICAgIG1wSW5zdGFuY2UuXyR2dWVJZCA9IHZ1ZUlkc1swXTtcclxuICAgIG1wSW5zdGFuY2UuXyR2dWVQaWQgPSB2dWVJZHNbMV07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0RGF0YSAodnVlT3B0aW9ucywgY29udGV4dCkge1xyXG4gIGxldCBkYXRhID0gdnVlT3B0aW9ucy5kYXRhIHx8IHt9O1xyXG4gIGNvbnN0IG1ldGhvZHMgPSB2dWVPcHRpb25zLm1ldGhvZHMgfHwge307XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IGRhdGEuY2FsbChjb250ZXh0KTsgLy8g5pSv5oyBIFZ1ZS5wcm90b3R5cGUg5LiK5oyC55qE5pWw5o2uXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCfmoLnmja4gVnVlIOeahCBkYXRhIOWHveaVsOWIneWni+WMluWwj+eoi+W6jyBkYXRhIOWksei0pe+8jOivt+WwvemHj+ehruS/nSBkYXRhIOWHveaVsOS4reS4jeiuv+mXriB2bSDlr7nosaHvvIzlkKbliJnlj6/og73lvbHlk43pppbmrKHmlbDmja7muLLmn5PpgJ/luqbjgIInLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyDlr7kgZGF0YSDmoLzlvI/ljJZcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9XHJcblxyXG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xyXG4gICAgZGF0YSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChtZXRob2ROYW1lID0+IHtcclxuICAgIGlmIChjb250ZXh0Ll9fbGlmZWN5Y2xlX2hvb2tzX18uaW5kZXhPZihtZXRob2ROYW1lKSA9PT0gLTEgJiYgIWhhc093bihkYXRhLCBtZXRob2ROYW1lKSkge1xyXG4gICAgICBkYXRhW21ldGhvZE5hbWVdID0gbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuY29uc3QgUFJPUF9UWVBFUyA9IFtTdHJpbmcsIE51bWJlciwgQm9vbGVhbiwgT2JqZWN0LCBBcnJheSwgbnVsbF07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlciAobmFtZSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiBvYnNlcnZlciAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgIGlmICh0aGlzLiR2bSkge1xyXG4gICAgICB0aGlzLiR2bVtuYW1lXSA9IG5ld1ZhbDsgLy8g5Li65LqG6Kem5Y+R5YW25LuW6Z2eIHJlbmRlciB3YXRjaGVyXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QmVoYXZpb3JzICh2dWVPcHRpb25zLCBpbml0QmVoYXZpb3IpIHtcclxuICBjb25zdCB2dWVCZWhhdmlvcnMgPSB2dWVPcHRpb25zLmJlaGF2aW9ycztcclxuICBjb25zdCB2dWVFeHRlbmRzID0gdnVlT3B0aW9ucy5leHRlbmRzO1xyXG4gIGNvbnN0IHZ1ZU1peGlucyA9IHZ1ZU9wdGlvbnMubWl4aW5zO1xyXG5cclxuICBsZXQgdnVlUHJvcHMgPSB2dWVPcHRpb25zLnByb3BzO1xyXG5cclxuICBpZiAoIXZ1ZVByb3BzKSB7XHJcbiAgICB2dWVPcHRpb25zLnByb3BzID0gdnVlUHJvcHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJlaGF2aW9ycyA9IFtdO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZUJlaGF2aW9ycykpIHtcclxuICAgIHZ1ZUJlaGF2aW9ycy5mb3JFYWNoKGJlaGF2aW9yID0+IHtcclxuICAgICAgYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IucmVwbGFjZSgndW5pOi8vJywgYCR7XCJ0dFwifTovL2ApKTtcclxuICAgICAgaWYgKGJlaGF2aW9yID09PSAndW5pOi8vZm9ybS1maWVsZCcpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2dWVQcm9wcykpIHtcclxuICAgICAgICAgIHZ1ZVByb3BzLnB1c2goJ25hbWUnKTtcclxuICAgICAgICAgIHZ1ZVByb3BzLnB1c2goJ3ZhbHVlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZ1ZVByb3BzLm5hbWUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB2dWVQcm9wcy52YWx1ZSA9IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyLCBCb29sZWFuLCBBcnJheSwgT2JqZWN0LCBEYXRlXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGlzUGxhaW5PYmplY3QodnVlRXh0ZW5kcykgJiYgdnVlRXh0ZW5kcy5wcm9wcykge1xyXG4gICAgYmVoYXZpb3JzLnB1c2goXHJcbiAgICAgIGluaXRCZWhhdmlvcih7XHJcbiAgICAgICAgcHJvcGVydGllczogaW5pdFByb3BlcnRpZXModnVlRXh0ZW5kcy5wcm9wcywgdHJ1ZSlcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZU1peGlucykpIHtcclxuICAgIHZ1ZU1peGlucy5mb3JFYWNoKHZ1ZU1peGluID0+IHtcclxuICAgICAgaWYgKGlzUGxhaW5PYmplY3QodnVlTWl4aW4pICYmIHZ1ZU1peGluLnByb3BzKSB7XHJcbiAgICAgICAgYmVoYXZpb3JzLnB1c2goXHJcbiAgICAgICAgICBpbml0QmVoYXZpb3Ioe1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVNaXhpbi5wcm9wcywgdHJ1ZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBiZWhhdmlvcnNcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VQcm9wVHlwZSAoa2V5LCB0eXBlLCBkZWZhdWx0VmFsdWUsIGZpbGUpIHtcclxuICAvLyBbU3RyaW5nXT0+U3RyaW5nXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkgJiYgdHlwZS5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiB0eXBlWzBdXHJcbiAgfVxyXG4gIHJldHVybiB0eXBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRQcm9wZXJ0aWVzIChwcm9wcywgaXNCZWhhdmlvciA9IGZhbHNlLCBmaWxlID0gJycpIHtcclxuICBjb25zdCBwcm9wZXJ0aWVzID0ge307XHJcbiAgaWYgKCFpc0JlaGF2aW9yKSB7XHJcbiAgICBwcm9wZXJ0aWVzLnZ1ZUlkID0ge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfTtcclxuICAgIC8vIOeUqOS6juWtl+iKgui3s+WKqOWwj+eoi+W6j+aooeaLn+aKveixoeiKgueCuVxyXG4gICAgcHJvcGVydGllcy5nZW5lcmljID0ge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHZhbHVlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgLy8gc2NvcGVkU2xvdHNDb21waWxlciBhdXRvXHJcbiAgICBwcm9wZXJ0aWVzLnNjb3BlZFNsb3RzQ29tcGlsZXIgPSB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9O1xyXG4gICAgcHJvcGVydGllcy52dWVTbG90cyA9IHsgLy8g5bCP56iL5bqP5LiN6IO955u05o6l5a6a5LmJICRzbG90cyDnmoQgcHJvcHPvvIzmiYDku6XpgJrov4cgdnVlU2xvdHMg6L2s5o2i5YiwICRzbG90c1xyXG4gICAgICB0eXBlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogW10sXHJcbiAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgICBjb25zdCAkc2xvdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgIG5ld1ZhbC5mb3JFYWNoKHNsb3ROYW1lID0+IHtcclxuICAgICAgICAgICRzbG90c1tzbG90TmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAkc2xvdHNcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7IC8vIFsndGl0bGUnXVxyXG4gICAgcHJvcHMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkgeyAvLyB7dGl0bGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6Jyd9LGNvbnRlbnQ6U3RyaW5nfVxyXG4gICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgY29uc3Qgb3B0cyA9IHByb3BzW2tleV07XHJcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdHMpKSB7IC8vIHRpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OicnfVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdHMuZGVmYXVsdDtcclxuICAgICAgICBpZiAoaXNGbih2YWx1ZSkpIHtcclxuICAgICAgICAgIHZhbHVlID0gdmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdHMudHlwZSA9IHBhcnNlUHJvcFR5cGUoa2V5LCBvcHRzLnR5cGUpO1xyXG5cclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgICB0eXBlOiBQUk9QX1RZUEVTLmluZGV4T2Yob3B0cy50eXBlKSAhPT0gLTEgPyBvcHRzLnR5cGUgOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7IC8vIGNvbnRlbnQ6U3RyaW5nXHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHBhcnNlUHJvcFR5cGUoa2V5LCBvcHRzKTtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgICB0eXBlOiBQUk9QX1RZUEVTLmluZGV4T2YodHlwZSkgIT09IC0xID8gdHlwZSA6IG51bGwsXHJcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gcHJvcGVydGllc1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyJDEgKGV2ZW50KSB7XHJcbiAgLy8gVE9ETyDlj4jlvpflhbzlrrkgbXB2dWUg55qEIG1wIOWvueixoVxyXG4gIHRyeSB7XHJcbiAgICBldmVudC5tcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcclxuICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSBub29wO1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gbm9vcDtcclxuXHJcbiAgZXZlbnQudGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IHt9O1xyXG5cclxuICBpZiAoIWhhc093bihldmVudCwgJ2RldGFpbCcpKSB7XHJcbiAgICBldmVudC5kZXRhaWwgPSB7fTtcclxuICB9XHJcblxyXG4gIGlmIChoYXNPd24oZXZlbnQsICdtYXJrZXJJZCcpKSB7XHJcbiAgICBldmVudC5kZXRhaWwgPSB0eXBlb2YgZXZlbnQuZGV0YWlsID09PSAnb2JqZWN0JyA/IGV2ZW50LmRldGFpbCA6IHt9O1xyXG4gICAgZXZlbnQuZGV0YWlsLm1hcmtlcklkID0gZXZlbnQubWFya2VySWQ7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNQbGFpbk9iamVjdChldmVudC5kZXRhaWwpKSB7XHJcbiAgICBldmVudC50YXJnZXQgPSBPYmplY3QuYXNzaWduKHt9LCBldmVudC50YXJnZXQsIGV2ZW50LmRldGFpbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXZlbnRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXh0cmFWYWx1ZSAodm0sIGRhdGFQYXRoc0FycmF5KSB7XHJcbiAgbGV0IGNvbnRleHQgPSB2bTtcclxuICBkYXRhUGF0aHNBcnJheS5mb3JFYWNoKGRhdGFQYXRoQXJyYXkgPT4ge1xyXG4gICAgY29uc3QgZGF0YVBhdGggPSBkYXRhUGF0aEFycmF5WzBdO1xyXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhUGF0aEFycmF5WzJdO1xyXG4gICAgaWYgKGRhdGFQYXRoIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gWycnLCcnLGluZGV4LCdkaXNhYmxlJ11cclxuICAgICAgY29uc3QgcHJvcFBhdGggPSBkYXRhUGF0aEFycmF5WzFdO1xyXG4gICAgICBjb25zdCB2YWx1ZVBhdGggPSBkYXRhUGF0aEFycmF5WzNdO1xyXG5cclxuICAgICAgbGV0IHZGb3I7XHJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGRhdGFQYXRoKSkge1xyXG4gICAgICAgIHZGb3IgPSBkYXRhUGF0aDtcclxuICAgICAgfSBlbHNlIGlmICghZGF0YVBhdGgpIHtcclxuICAgICAgICB2Rm9yID0gY29udGV4dDtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnICYmIGRhdGFQYXRoKSB7XHJcbiAgICAgICAgaWYgKGRhdGFQYXRoLmluZGV4T2YoJyNzIycpID09PSAwKSB7XHJcbiAgICAgICAgICB2Rm9yID0gZGF0YVBhdGguc3Vic3RyKDMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2Rm9yID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgsIGNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodkZvcikpIHtcclxuICAgICAgICBjb250ZXh0ID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXByb3BQYXRoKSB7XHJcbiAgICAgICAgY29udGV4dCA9IHZGb3JbdmFsdWVdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZGb3IpKSB7XHJcbiAgICAgICAgICBjb250ZXh0ID0gdkZvci5maW5kKHZGb3JJdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLl9fZ2V0X3ZhbHVlKHByb3BQYXRoLCB2Rm9ySXRlbSkgPT09IHZhbHVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodkZvcikpIHtcclxuICAgICAgICAgIGNvbnRleHQgPSBPYmplY3Qua2V5cyh2Rm9yKS5maW5kKHZGb3JLZXkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uX19nZXRfdmFsdWUocHJvcFBhdGgsIHZGb3JbdkZvcktleV0pID09PSB2YWx1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3YtZm9yIOaaguS4jeaUr+aMgeW+queOr+aVsOaNru+8micsIHZGb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhbHVlUGF0aCkge1xyXG4gICAgICAgIGNvbnRleHQgPSB2bS5fX2dldF92YWx1ZSh2YWx1ZVBhdGgsIGNvbnRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0V2ZW50RXh0cmEgKHZtLCBleHRyYSwgZXZlbnQpIHtcclxuICBjb25zdCBleHRyYU9iaiA9IHt9O1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShleHRyYSkgJiYgZXh0cmEubGVuZ3RoKSB7XHJcbiAgICAvKipcclxuICAgICAqW1xyXG4gICAgICogICAgWydkYXRhLml0ZW1zJywgJ2RhdGEuaWQnLCBpdGVtLmRhdGEuaWRdLFxyXG4gICAgICogICAgWydtZXRhcycsICdpZCcsIG1ldGEuaWRdXHJcbiAgICAgKl0sXHJcbiAgICAgKltcclxuICAgICAqICAgIFsnZGF0YS5pdGVtcycsICdkYXRhLmlkJywgaXRlbS5kYXRhLmlkXSxcclxuICAgICAqICAgIFsnbWV0YXMnLCAnaWQnLCBtZXRhLmlkXVxyXG4gICAgICpdLFxyXG4gICAgICondGVzdCdcclxuICAgICAqL1xyXG4gICAgZXh0cmEuZm9yRWFjaCgoZGF0YVBhdGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhUGF0aCkgeyAvLyBtb2RlbCxwcm9wLnN5bmNcclxuICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZGF0YVBhdGggPT09ICckZXZlbnQnKSB7IC8vICRldmVudFxyXG4gICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBldmVudDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVBhdGggPT09ICdhcmd1bWVudHMnKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLl9fYXJnc19fKSB7XHJcbiAgICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZXZlbnQuZGV0YWlsLl9fYXJnc19fO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IFtldmVudF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVBhdGguaW5kZXhPZignJGV2ZW50LicpID09PSAwKSB7IC8vICRldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgucmVwbGFjZSgnJGV2ZW50LicsICcnKSwgZXZlbnQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBnZXRFeHRyYVZhbHVlKHZtLCBkYXRhUGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGV4dHJhT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9iakJ5QXJyYXkgKGFycikge1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyW2ldO1xyXG4gICAgb2JqW2VsZW1lbnRbMF1dID0gZWxlbWVudFsxXTtcclxuICB9XHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRXZlbnRBcmdzICh2bSwgZXZlbnQsIGFyZ3MgPSBbXSwgZXh0cmEgPSBbXSwgaXNDdXN0b20sIG1ldGhvZE5hbWUpIHtcclxuICBsZXQgaXNDdXN0b21NUEV2ZW50ID0gZmFsc2U7IC8vIHd4Y29tcG9uZW50IOe7hOS7tu+8jOS8oOmAkuWOn+WniyBldmVudCDlr7nosaFcclxuICBpZiAoaXNDdXN0b20pIHsgLy8g6Ieq5a6a5LmJ5LqL5Lu2XHJcbiAgICBpc0N1c3RvbU1QRXZlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0ICYmXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCAmJlxyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29tVHlwZSA9PT0gJ3d4JztcclxuICAgIGlmICghYXJncy5sZW5ndGgpIHsgLy8g5peg5Y+C5pWw77yM55u05o6l5Lyg5YWlIGV2ZW50IOaIliBkZXRhaWwg5pWw57uEXHJcbiAgICAgIGlmIChpc0N1c3RvbU1QRXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gW2V2ZW50XVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBldmVudC5kZXRhaWwuX19hcmdzX18gfHwgZXZlbnQuZGV0YWlsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBleHRyYU9iaiA9IHByb2Nlc3NFdmVudEV4dHJhKHZtLCBleHRyYSwgZXZlbnQpO1xyXG5cclxuICBjb25zdCByZXQgPSBbXTtcclxuICBhcmdzLmZvckVhY2goYXJnID0+IHtcclxuICAgIGlmIChhcmcgPT09ICckZXZlbnQnKSB7XHJcbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnX19zZXRfbW9kZWwnICYmICFpc0N1c3RvbSkgeyAvLyBpbnB1dCB2LW1vZGVsIHZhbHVlXHJcbiAgICAgICAgcmV0LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaXNDdXN0b20gJiYgIWlzQ3VzdG9tTVBFdmVudCkge1xyXG4gICAgICAgICAgcmV0LnB1c2goZXZlbnQuZGV0YWlsLl9fYXJnc19fWzBdKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyB3eGNvbXBvbmVudCDnu4Tku7bmiJblhoXnva7nu4Tku7ZcclxuICAgICAgICAgIHJldC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnWzBdID09PSAnbycpIHtcclxuICAgICAgICByZXQucHVzaChnZXRPYmpCeUFycmF5KGFyZykpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGhhc093bihleHRyYU9iaiwgYXJnKSkge1xyXG4gICAgICAgIHJldC5wdXNoKGV4dHJhT2JqW2FyZ10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldC5wdXNoKGFyZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG5jb25zdCBPTkNFID0gJ34nO1xyXG5jb25zdCBDVVNUT00gPSAnXic7XHJcblxyXG5mdW5jdGlvbiBpc01hdGNoRXZlbnRUeXBlIChldmVudFR5cGUsIG9wdFR5cGUpIHtcclxuICByZXR1cm4gKGV2ZW50VHlwZSA9PT0gb3B0VHlwZSkgfHxcclxuICAgIChcclxuICAgICAgb3B0VHlwZSA9PT0gJ3JlZ2lvbmNoYW5nZScgJiZcclxuICAgICAgKFxyXG4gICAgICAgIGV2ZW50VHlwZSA9PT0gJ2JlZ2luJyB8fFxyXG4gICAgICAgIGV2ZW50VHlwZSA9PT0gJ2VuZCdcclxuICAgICAgKVxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb250ZXh0Vm0gKHZtKSB7XHJcbiAgbGV0ICRwYXJlbnQgPSB2bS4kcGFyZW50O1xyXG4gIC8vIOeItue7hOS7tuaYryBzY29wZWQgc2xvdHMg5oiW6ICF5YW25LuW6Ieq5a6a5LmJ57uE5Lu25pe257un57ut5p+l5om+XHJcbiAgd2hpbGUgKCRwYXJlbnQgJiYgJHBhcmVudC4kcGFyZW50ICYmICgkcGFyZW50LiRvcHRpb25zLmdlbmVyaWMgfHwgJHBhcmVudC4kcGFyZW50LiRvcHRpb25zLmdlbmVyaWMgfHwgJHBhcmVudC4kc2NvcGUuXyR2dWVQaWQpKSB7XHJcbiAgICAkcGFyZW50ID0gJHBhcmVudC4kcGFyZW50O1xyXG4gIH1cclxuICByZXR1cm4gJHBhcmVudCAmJiAkcGFyZW50LiRwYXJlbnRcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXZlbnQgKGV2ZW50KSB7XHJcbiAgZXZlbnQgPSB3cmFwcGVyJDEoZXZlbnQpO1xyXG5cclxuICAvLyBbWyd0YXAnLFtbJ2hhbmRsZScsWzEsMixhXV0sWydoYW5kbGUxJyxbMSwyLGFdXV1dXVxyXG4gIGNvbnN0IGRhdGFzZXQgPSAoZXZlbnQuY3VycmVudFRhcmdldCB8fCBldmVudC50YXJnZXQpLmRhdGFzZXQ7XHJcbiAgaWYgKCFkYXRhc2V0KSB7XHJcbiAgICByZXR1cm4gY29uc29sZS53YXJuKCfkuovku7bkv6Hmga/kuI3lrZjlnKgnKVxyXG4gIH1cclxuICBjb25zdCBldmVudE9wdHMgPSBkYXRhc2V0LmV2ZW50T3B0cyB8fCBkYXRhc2V0WydldmVudC1vcHRzJ107IC8vIOaUr+S7mOWunSB3ZWItdmlldyDnu4Tku7YgZGF0YXNldCDpnZ7pqbzls7BcclxuICBpZiAoIWV2ZW50T3B0cykge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2Fybign5LqL5Lu25L+h5oGv5LiN5a2Y5ZyoJylcclxuICB9XHJcblxyXG4gIC8vIFtbJ2hhbmRsZScsWzEsMixhXV0sWydoYW5kbGUxJyxbMSwyLGFdXV1cclxuICBjb25zdCBldmVudFR5cGUgPSBldmVudC50eXBlO1xyXG5cclxuICBjb25zdCByZXQgPSBbXTtcclxuXHJcbiAgZXZlbnRPcHRzLmZvckVhY2goZXZlbnRPcHQgPT4ge1xyXG4gICAgbGV0IHR5cGUgPSBldmVudE9wdFswXTtcclxuICAgIGNvbnN0IGV2ZW50c0FycmF5ID0gZXZlbnRPcHRbMV07XHJcblxyXG4gICAgY29uc3QgaXNDdXN0b20gPSB0eXBlLmNoYXJBdCgwKSA9PT0gQ1VTVE9NO1xyXG4gICAgdHlwZSA9IGlzQ3VzdG9tID8gdHlwZS5zbGljZSgxKSA6IHR5cGU7XHJcbiAgICBjb25zdCBpc09uY2UgPSB0eXBlLmNoYXJBdCgwKSA9PT0gT05DRTtcclxuICAgIHR5cGUgPSBpc09uY2UgPyB0eXBlLnNsaWNlKDEpIDogdHlwZTtcclxuXHJcbiAgICBpZiAoZXZlbnRzQXJyYXkgJiYgaXNNYXRjaEV2ZW50VHlwZShldmVudFR5cGUsIHR5cGUpKSB7XHJcbiAgICAgIGV2ZW50c0FycmF5LmZvckVhY2goZXZlbnRBcnJheSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IGV2ZW50QXJyYXlbMF07XHJcbiAgICAgICAgaWYgKG1ldGhvZE5hbWUpIHtcclxuICAgICAgICAgIGxldCBoYW5kbGVyQ3R4ID0gdGhpcy4kdm07XHJcbiAgICAgICAgICBpZiAoaGFuZGxlckN0eC4kb3B0aW9ucy5nZW5lcmljKSB7IC8vIG1wLXdlaXhpbixtcC10b3V0aWFvIOaKveixoeiKgueCueaooeaLnyBzY29wZWQgc2xvdHNcclxuICAgICAgICAgICAgaGFuZGxlckN0eCA9IGdldENvbnRleHRWbShoYW5kbGVyQ3R4KSB8fCBoYW5kbGVyQ3R4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICckZW1pdCcpIHtcclxuICAgICAgICAgICAgaGFuZGxlckN0eC4kZW1pdC5hcHBseShoYW5kbGVyQ3R4LFxyXG4gICAgICAgICAgICAgIHByb2Nlc3NFdmVudEFyZ3MoXHJcbiAgICAgICAgICAgICAgICB0aGlzLiR2bSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZXZlbnRBcnJheVsxXSxcclxuICAgICAgICAgICAgICAgIGV2ZW50QXJyYXlbMl0sXHJcbiAgICAgICAgICAgICAgICBpc0N1c3RvbSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZE5hbWVcclxuICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlckN0eFttZXRob2ROYW1lXTtcclxuICAgICAgICAgIGlmICghaXNGbihoYW5kbGVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCBfdm0uJHttZXRob2ROYW1lfSBpcyBub3QgYSBmdW5jdGlvbmApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaXNPbmNlKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLm9uY2UpIHtcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVyLm9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHByb2Nlc3NFdmVudEFyZ3MoXHJcbiAgICAgICAgICAgIHRoaXMuJHZtLFxyXG4gICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgZXZlbnRBcnJheVsxXSxcclxuICAgICAgICAgICAgZXZlbnRBcnJheVsyXSxcclxuICAgICAgICAgICAgaXNDdXN0b20sXHJcbiAgICAgICAgICAgIG1ldGhvZE5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBwYXJhbXMgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyBwYXJhbXMgOiBbXTtcclxuICAgICAgICAgIC8vIOWPguaVsOWwvumDqOWinuWKoOWOn+Wni+S6i+S7tuWvueixoeeUqOS6juWkjeadguihqOi+vuW8j+WGheiOt+WPlumineWkluaVsOaNrlxyXG4gICAgICAgICAgaWYgKC89XFxzKlxcUytcXC5ldmVudFBhcmFtc1xccypcXHxcXHxcXHMqXFxTK1xcW1snXCJdZXZlbnQtcGFyYW1zWydcIl1cXF0vLnRlc3QoaGFuZGxlci50b1N0cmluZygpKSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc3BhcnNlLWFycmF5c1xyXG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMuY29uY2F0KFssICwgLCAsICwgLCAsICwgLCAsIGV2ZW50XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXQucHVzaChoYW5kbGVyLmFwcGx5KGhhbmRsZXJDdHgsIHBhcmFtcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChcclxuICAgIGV2ZW50VHlwZSA9PT0gJ2lucHV0JyAmJlxyXG4gICAgcmV0Lmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgdHlwZW9mIHJldFswXSAhPT0gJ3VuZGVmaW5lZCdcclxuICApIHtcclxuICAgIHJldHVybiByZXRbMF1cclxuICB9XHJcbn1cclxuXHJcbmxldCBsb2NhbGU7XHJcblxyXG57XHJcbiAgbG9jYWxlID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKS5sYW5ndWFnZTtcclxufVxyXG5cclxuY29uc3QgaTE4biA9IGluaXRWdWVJMThuKFxyXG4gIGxvY2FsZSxcclxuICAge31cclxuKTtcclxuY29uc3QgdCA9IGkxOG4udDtcclxuY29uc3QgaTE4bk1peGluID0gKGkxOG4ubWl4aW4gPSB7XHJcbiAgYmVmb3JlQ3JlYXRlICgpIHtcclxuICAgIGNvbnN0IHVud2F0Y2ggPSBpMThuLmkxOG4ud2F0Y2hMb2NhbGUoKCkgPT4ge1xyXG4gICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLiRvbmNlKCdob29rOmJlZm9yZURlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHVud2F0Y2goKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgJCR0IChrZXksIHZhbHVlcykge1xyXG4gICAgICByZXR1cm4gdChrZXksIHZhbHVlcylcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5jb25zdCBzZXRMb2NhbGUkMSA9IGkxOG4uc2V0TG9jYWxlO1xyXG5jb25zdCBnZXRMb2NhbGUkMSA9IGkxOG4uZ2V0TG9jYWxlO1xyXG5cclxuZnVuY3Rpb24gaW5pdEFwcExvY2FsZSAoVnVlLCBhcHBWbSwgbG9jYWxlKSB7XHJcbiAgY29uc3Qgc3RhdGUgPSBWdWUub2JzZXJ2YWJsZSh7XHJcbiAgICBsb2NhbGU6IGxvY2FsZSB8fCBpMThuLmdldExvY2FsZSgpXHJcbiAgfSk7XHJcbiAgY29uc3QgbG9jYWxlV2F0Y2hlcnMgPSBbXTtcclxuICBhcHBWbS4kd2F0Y2hMb2NhbGUgPSBmbiA9PiB7XHJcbiAgICBsb2NhbGVXYXRjaGVycy5wdXNoKGZuKTtcclxuICB9O1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcHBWbSwgJyRsb2NhbGUnLCB7XHJcbiAgICBnZXQgKCkge1xyXG4gICAgICByZXR1cm4gc3RhdGUubG9jYWxlXHJcbiAgICB9LFxyXG4gICAgc2V0ICh2KSB7XHJcbiAgICAgIHN0YXRlLmxvY2FsZSA9IHY7XHJcbiAgICAgIGxvY2FsZVdhdGNoZXJzLmZvckVhY2god2F0Y2ggPT4gd2F0Y2godikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBob29rcyA9IFtcclxuICAnb25TaG93JyxcclxuICAnb25IaWRlJyxcclxuICAnb25FcnJvcicsXHJcbiAgJ29uUGFnZU5vdEZvdW5kJyxcclxuICAnb25UaGVtZUNoYW5nZScsXHJcbiAgJ29uVW5oYW5kbGVkUmVqZWN0aW9uJ1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gaW5pdEV2ZW50Q2hhbm5lbCQxICgpIHtcclxuICBWdWUucHJvdG90eXBlLmdldE9wZW5lckV2ZW50Q2hhbm5lbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGhpcy5fX2V2ZW50Q2hhbm5lbF9fKSB7XHJcbiAgICAgIHRoaXMuX19ldmVudENoYW5uZWxfXyA9IG5ldyBFdmVudENoYW5uZWwoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9fZXZlbnRDaGFubmVsX19cclxuICB9O1xyXG4gIGNvbnN0IGNhbGxIb29rID0gVnVlLnByb3RvdHlwZS5fX2NhbGxfaG9vaztcclxuICBWdWUucHJvdG90eXBlLl9fY2FsbF9ob29rID0gZnVuY3Rpb24gKGhvb2ssIGFyZ3MpIHtcclxuICAgIGlmIChob29rID09PSAnb25Mb2FkJyAmJiBhcmdzICYmIGFyZ3MuX19pZF9fKSB7XHJcbiAgICAgIHRoaXMuX19ldmVudENoYW5uZWxfXyA9IGdldEV2ZW50Q2hhbm5lbChhcmdzLl9faWRfXyk7XHJcbiAgICAgIGRlbGV0ZSBhcmdzLl9faWRfXztcclxuICAgIH1cclxuICAgIHJldHVybiBjYWxsSG9vay5jYWxsKHRoaXMsIGhvb2ssIGFyZ3MpXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFNjb3BlZFNsb3RzUGFyYW1zICgpIHtcclxuICBjb25zdCBjZW50ZXIgPSB7fTtcclxuICBjb25zdCBwYXJlbnRzID0ge307XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJGhhc1Njb3BlZFNsb3RzUGFyYW1zID0gZnVuY3Rpb24gKHZ1ZUlkKSB7XHJcbiAgICBjb25zdCBoYXMgPSBjZW50ZXJbdnVlSWRdO1xyXG4gICAgaWYgKCFoYXMpIHtcclxuICAgICAgcGFyZW50c1t2dWVJZF0gPSB0aGlzO1xyXG4gICAgICB0aGlzLiRvbignaG9vazpkZXN0b3J5JywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZSBwYXJlbnRzW3Z1ZUlkXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFzXHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS4kZ2V0U2NvcGVkU2xvdHNQYXJhbXMgPSBmdW5jdGlvbiAodnVlSWQsIG5hbWUsIGtleSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGNlbnRlclt2dWVJZF07XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBvYmplY3QgPSBkYXRhW25hbWVdIHx8IHt9O1xyXG4gICAgICByZXR1cm4ga2V5ID8gb2JqZWN0W2tleV0gOiBvYmplY3RcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmVudHNbdnVlSWRdID0gdGhpcztcclxuICAgICAgdGhpcy4kb24oJ2hvb2s6ZGVzdG9yeScsICgpID0+IHtcclxuICAgICAgICBkZWxldGUgcGFyZW50c1t2dWVJZF07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJHNldFNjb3BlZFNsb3RzUGFyYW1zID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBjb25zdCB2dWVJZHMgPSB0aGlzLiRvcHRpb25zLnByb3BzRGF0YS52dWVJZDtcclxuICAgIGlmICh2dWVJZHMpIHtcclxuICAgICAgY29uc3QgdnVlSWQgPSB2dWVJZHMuc3BsaXQoJywnKVswXTtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gY2VudGVyW3Z1ZUlkXSA9IGNlbnRlclt2dWVJZF0gfHwge307XHJcbiAgICAgIG9iamVjdFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICBpZiAocGFyZW50c1t2dWVJZF0pIHtcclxuICAgICAgICBwYXJlbnRzW3Z1ZUlkXS4kZm9yY2VVcGRhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5taXhpbih7XHJcbiAgICBkZXN0cm95ZWQgKCkge1xyXG4gICAgICBjb25zdCBwcm9wc0RhdGEgPSB0aGlzLiRvcHRpb25zLnByb3BzRGF0YTtcclxuICAgICAgY29uc3QgdnVlSWQgPSBwcm9wc0RhdGEgJiYgcHJvcHNEYXRhLnZ1ZUlkO1xyXG4gICAgICBpZiAodnVlSWQpIHtcclxuICAgICAgICBkZWxldGUgY2VudGVyW3Z1ZUlkXTtcclxuICAgICAgICBkZWxldGUgcGFyZW50c1t2dWVJZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VCYXNlQXBwICh2bSwge1xyXG4gIG1vY2tzLFxyXG4gIGluaXRSZWZzXHJcbn0pIHtcclxuICBpbml0RXZlbnRDaGFubmVsJDEoKTtcclxuICB7XHJcbiAgICBpbml0U2NvcGVkU2xvdHNQYXJhbXMoKTtcclxuICB9XHJcbiAgaWYgKHZtLiRvcHRpb25zLnN0b3JlKSB7XHJcbiAgICBWdWUucHJvdG90eXBlLiRzdG9yZSA9IHZtLiRvcHRpb25zLnN0b3JlO1xyXG4gIH1cclxuICB1bmlJZE1peGluKFZ1ZSk7XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUubXBIb3N0ID0gXCJtcC10b3V0aWFvXCI7XHJcblxyXG4gIFZ1ZS5taXhpbih7XHJcbiAgICBiZWZvcmVDcmVhdGUgKCkge1xyXG4gICAgICBpZiAoIXRoaXMuJG9wdGlvbnMubXBUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubXBUeXBlID0gdGhpcy4kb3B0aW9ucy5tcFR5cGU7XHJcblxyXG4gICAgICB0aGlzLiRtcCA9IHtcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBbdGhpcy5tcFR5cGVdOiB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuJHNjb3BlID0gdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlO1xyXG5cclxuICAgICAgZGVsZXRlIHRoaXMuJG9wdGlvbnMubXBUeXBlO1xyXG4gICAgICBkZWxldGUgdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlO1xyXG4gICAgICBpZiAodGhpcy5tcFR5cGUgPT09ICdwYWdlJyAmJiB0eXBlb2YgZ2V0QXBwID09PSAnZnVuY3Rpb24nKSB7IC8vIGhhY2sgdnVlLWkxOG5cclxuICAgICAgICBjb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuICAgICAgICBpZiAoYXBwLiR2bSAmJiBhcHAuJHZtLiRpMThuKSB7XHJcbiAgICAgICAgICB0aGlzLl9pMThuID0gYXBwLiR2bS4kaTE4bjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubXBUeXBlICE9PSAnYXBwJykge1xyXG4gICAgICAgIGluaXRSZWZzKHRoaXMpO1xyXG4gICAgICAgIGluaXRNb2Nrcyh0aGlzLCBtb2Nrcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgYXBwT3B0aW9ucyA9IHtcclxuICAgIG9uTGF1bmNoIChhcmdzKSB7XHJcbiAgICAgIGlmICh0aGlzLiR2bSkgeyAvLyDlt7Lnu4/liJ3lp4vljJbov4fkuobvvIzkuLvopoHmmK/kuLrkuobnmb7luqbvvIznmb7luqYgb25TaG93IOWcqCBvbkxhdW5jaCDkuYvliY1cclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kdm0gPSB2bTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLiRtcCA9IHtcclxuICAgICAgICBhcHA6IHRoaXNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLiRzY29wZSA9IHRoaXM7XHJcbiAgICAgIC8vIHZtIOS4iuS5n+aMgui9vSBnbG9iYWxEYXRhXHJcbiAgICAgIHRoaXMuJHZtLmdsb2JhbERhdGEgPSB0aGlzLmdsb2JhbERhdGE7XHJcblxyXG4gICAgICB0aGlzLiR2bS5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnLCBhcmdzKTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvbkxhdW5jaCcsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIOWFvOWuueaXp+eJiOacrCBnbG9iYWxEYXRhXHJcbiAgYXBwT3B0aW9ucy5nbG9iYWxEYXRhID0gdm0uJG9wdGlvbnMuZ2xvYmFsRGF0YSB8fCB7fTtcclxuICAvLyDlsIYgbWV0aG9kcyDkuK3nmoTmlrnms5XmjILlnKggZ2V0QXBwKCkg5LitXHJcbiAgY29uc3QgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XHJcbiAgaWYgKG1ldGhvZHMpIHtcclxuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIGFwcE9wdGlvbnNbbmFtZV0gPSBtZXRob2RzW25hbWVdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0QXBwTG9jYWxlKFZ1ZSwgdm0sIHR0LmdldFN5c3RlbUluZm9TeW5jKCkubGFuZ3VhZ2UgfHwgJ3poLUhhbnMnKTtcclxuXHJcbiAgaW5pdEhvb2tzKGFwcE9wdGlvbnMsIGhvb2tzKTtcclxuXHJcbiAgcmV0dXJuIGFwcE9wdGlvbnNcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZFZtQnlWdWVJZCAodm0sIHZ1ZVBpZCkge1xyXG4gIGNvbnN0ICRjaGlsZHJlbiA9IHZtLiRjaGlsZHJlbjtcclxuICAvLyDkvJjlhYjmn6Xmib7nm7TlsZ4o5Y+N5ZCR5p+l5om+Omh0dHBzOi8vZ2l0aHViLmNvbS9kY2xvdWRpby91bmktYXBwL2lzc3Vlcy8xMjAwKVxyXG4gIGZvciAobGV0IGkgPSAkY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIGNvbnN0IGNoaWxkVm0gPSAkY2hpbGRyZW5baV07XHJcbiAgICBpZiAoY2hpbGRWbS4kc2NvcGUuXyR2dWVJZCA9PT0gdnVlUGlkKSB7XHJcbiAgICAgIHJldHVybiBjaGlsZFZtXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOWPjeWQkemAkuW9kuafpeaJvlxyXG4gIGxldCBwYXJlbnRWbTtcclxuICBmb3IgKGxldCBpID0gJGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBwYXJlbnRWbSA9IGZpbmRWbUJ5VnVlSWQoJGNoaWxkcmVuW2ldLCB2dWVQaWQpO1xyXG4gICAgaWYgKHBhcmVudFZtKSB7XHJcbiAgICAgIHJldHVybiBwYXJlbnRWbVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEJlaGF2aW9yIChvcHRpb25zKSB7XHJcbiAgcmV0dXJuIEJlaGF2aW9yKG9wdGlvbnMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUxpbmsgKGV2ZW50KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdnVlUGlkLFxyXG4gICAgdnVlT3B0aW9uc1xyXG4gIH0gPSBldmVudC5kZXRhaWwgfHwgZXZlbnQudmFsdWU7IC8vIGRldGFpbCDmmK/lvq7kv6EsdmFsdWUg5piv55m+5bqmKGRpcGF0Y2gpXHJcblxyXG4gIGxldCBwYXJlbnRWbTtcclxuXHJcbiAgaWYgKHZ1ZVBpZCkge1xyXG4gICAgcGFyZW50Vm0gPSBmaW5kVm1CeVZ1ZUlkKHRoaXMuJHZtLCB2dWVQaWQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwYXJlbnRWbSkge1xyXG4gICAgcGFyZW50Vm0gPSB0aGlzLiR2bTtcclxuICB9XHJcblxyXG4gIHZ1ZU9wdGlvbnMucGFyZW50ID0gcGFyZW50Vm07XHJcbn1cclxuXHJcbmNvbnN0IG1vY2tzID0gWydfX3JvdXRlX18nLCAnX193ZWJ2aWV3SWRfXycsICdfX25vZGVpZF9fJywgJ19fbm9kZUlkX18nXTtcclxuXHJcbmZ1bmN0aW9uIGlzUGFnZSAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuX19ub2RlaWRfXyA9PT0gMCB8fCB0aGlzLl9fbm9kZUlkX18gPT09IDBcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFJlZnMgKHZtKSB7XHJcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcclxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gIGNvbnN0IG1pbm9yVmVyc2lvbiA9IHBhcnNlSW50KHR0LmdldFN5c3RlbUluZm9TeW5jKCkuU0RLVmVyc2lvbi5zcGxpdCgnLicpWzFdKTtcclxuICBpZiAobWlub3JWZXJzaW9uID4gMTYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2bSwgJyRyZWZzJywge1xyXG4gICAgICBnZXQgKCkge1xyXG4gICAgICAgIGNvbnN0ICRyZWZzID0ge307XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG1wSW5zdGFuY2Uuc2VsZWN0QWxsQ29tcG9uZW50cygnLnZ1ZS1yZWYnKTtcclxuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcclxuICAgICAgICAgICRyZWZzW3JlZl0gPSBjb21wb25lbnQuJHZtIHx8IGNvbXBvbmVudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBmb3JDb21wb25lbnRzID0gbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZi1pbi1mb3InKTtcclxuICAgICAgICBmb3JDb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcclxuICAgICAgICAgIGlmICghJHJlZnNbcmVmXSkge1xyXG4gICAgICAgICAgICAkcmVmc1tyZWZdID0gW107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkcmVmc1tyZWZdLnB1c2goY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAkcmVmc1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZicsIChjb21wb25lbnRzKSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcclxuICAgICAgICB2bS4kcmVmc1tyZWZdID0gY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmLWluLWZvcicsIChmb3JDb21wb25lbnRzKSA9PiB7XHJcbiAgICAgIGZvckNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcclxuICAgICAgICBpZiAoIXZtLiRyZWZzW3JlZl0pIHtcclxuICAgICAgICAgIHZtLiRyZWZzW3JlZl0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdm0uJHJlZnNbcmVmXS5wdXNoKGNvbXBvbmVudC4kdm0gfHwgY29tcG9uZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluc3RhbmNlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG5mdW5jdGlvbiBpbml0UmVsYXRpb24gKHtcclxuICB2dWVQaWQsXHJcbiAgbXBJbnN0YW5jZVxyXG59KSB7XHJcbiAgLy8g5aS05p2hIHRyaWdnZXJFdmVudCDlkI7vvIzmjqXmlLbkuovku7bml7bmnLrnibnliKvmmZrvvIzlt7Lnu4/liLDkuoYgcmVhZHkg5LmL5ZCOXHJcbiAgY29uc3Qgbm9kZUlkID0gKG1wSW5zdGFuY2UuX19ub2RlSWRfXyB8fCBtcEluc3RhbmNlLl9fbm9kZWlkX18pICsgJyc7XHJcbiAgY29uc3Qgd2Vidmlld0lkID0gbXBJbnN0YW5jZS5fX3dlYnZpZXdJZF9fICsgJyc7XHJcblxyXG4gIGluc3RhbmNlc1t3ZWJ2aWV3SWQgKyAnXycgKyBub2RlSWRdID0gbXBJbnN0YW5jZS4kdm07XHJcblxyXG4gIHRoaXMudHJpZ2dlckV2ZW50KCdfX2wnLCB7XHJcbiAgICB2dWVQaWQsXHJcbiAgICBub2RlSWQsXHJcbiAgICB3ZWJ2aWV3SWRcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTGluayQxICh7XHJcbiAgZGV0YWlsOiB7XHJcbiAgICB2dWVQaWQsXHJcbiAgICBub2RlSWQsXHJcbiAgICB3ZWJ2aWV3SWRcclxuICB9XHJcbn0pIHtcclxuICBjb25zdCB2bSA9IGluc3RhbmNlc1t3ZWJ2aWV3SWQgKyAnXycgKyBub2RlSWRdO1xyXG4gIGlmICghdm0pIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IHBhcmVudFZtO1xyXG5cclxuICBpZiAodnVlUGlkKSB7XHJcbiAgICBwYXJlbnRWbSA9IGZpbmRWbUJ5VnVlSWQodGhpcy4kdm0sIHZ1ZVBpZCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXBhcmVudFZtKSB7XHJcbiAgICBwYXJlbnRWbSA9IHRoaXMuJHZtO1xyXG4gIH1cclxuXHJcbiAgdm0uJHBhcmVudCA9IHBhcmVudFZtO1xyXG4gIHZtLiRyb290ID0gcGFyZW50Vm0uJHJvb3Q7XHJcbiAgcGFyZW50Vm0uJGNoaWxkcmVuLnB1c2godm0pO1xyXG5cclxuICB2bS5fX2NhbGxfaG9vaygnY3JlYXRlZCcpO1xyXG4gIHZtLl9fY2FsbF9ob29rKCdiZWZvcmVNb3VudCcpO1xyXG4gIHZtLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gIHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJyk7XHJcbiAgdm0uX19jYWxsX2hvb2soJ29uUmVhZHknKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VBcHAgKHZtKSB7XHJcbiAgVnVlLnByb3RvdHlwZS5fJGZhbGxiYWNrID0gdHJ1ZTsgLy8g6ZmN57qn77yI6LCD5pW05Y6fIHZ1ZSDnmoTpg6jliIbnlJ/lkb3lkajmnJ/vvIzlpoIgY3JlYXRlZO+8jGJlZm9yZU1vdW50LGluamVjdCxwcm92aWRl77yJXHJcblxyXG4gIFZ1ZS5taXhpbih7XHJcbiAgICBjcmVhdGVkICgpIHsgLy8g5aSE55CGIGluamVjdGlvbnMs5aS05p2hIHRyaWdnZXJFdmVudCDmmK/lvILmraXvvIzkuJTop6blj5Hml7bmnLrlvojmhaLvvIzmlYXlu7bov58gcmVsYXRpb24g6K6+572uXHJcbiAgICAgIGlmICh0aGlzLm1wVHlwZSAhPT0gJ2FwcCcpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLm1wVHlwZSA9PT0gJ3BhZ2UnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuJHNjb3BlLnJvdXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUuX19yb3V0ZV9fXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLiRzY29wZS5yb3V0ZSA9IHRoaXMuJHNjb3BlLl9fcm91dGVfXztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXRSZWZzKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9faW5pdF9pbmplY3Rpb25zKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19pbml0X3Byb3ZpZGUodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHBhcnNlQmFzZUFwcCh2bSwge1xyXG4gICAgbW9ja3MsXHJcbiAgICBpbml0UmVmczogZnVuY3Rpb24gKCkge30gLy8gYXR0YWNoZWQg5pe277yM5Y+v6IO95p+l6K+i5LiN5YiwXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXBwICh2bSkge1xyXG4gIEFwcChwYXJzZUFwcCh2bSkpO1xyXG4gIHJldHVybiB2bVxyXG59XHJcblxyXG5jb25zdCBlbmNvZGVSZXNlcnZlUkUgPSAvWyEnKCkqXS9nO1xyXG5jb25zdCBlbmNvZGVSZXNlcnZlUmVwbGFjZXIgPSBjID0+ICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNik7XHJcbmNvbnN0IGNvbW1hUkUgPSAvJTJDL2c7XHJcblxyXG4vLyBmaXhlZCBlbmNvZGVVUklDb21wb25lbnQgd2hpY2ggaXMgbW9yZSBjb25mb3JtYW50IHRvIFJGQzM5ODY6XHJcbi8vIC0gZXNjYXBlcyBbIScoKSpdXHJcbi8vIC0gcHJlc2VydmUgY29tbWFzXHJcbmNvbnN0IGVuY29kZSA9IHN0ciA9PiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxyXG4gIC5yZXBsYWNlKGVuY29kZVJlc2VydmVSRSwgZW5jb2RlUmVzZXJ2ZVJlcGxhY2VyKVxyXG4gIC5yZXBsYWNlKGNvbW1hUkUsICcsJyk7XHJcblxyXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeSAob2JqLCBlbmNvZGVTdHIgPSBlbmNvZGUpIHtcclxuICBjb25zdCByZXMgPSBvYmogPyBPYmplY3Qua2V5cyhvYmopLm1hcChrZXkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gb2JqW2tleV07XHJcblxyXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGVuY29kZVN0cihrZXkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgdmFsLmZvckVhY2godmFsMiA9PiB7XHJcbiAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVTdHIoa2V5KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVN0cihrZXkpICsgJz0nICsgZW5jb2RlU3RyKHZhbDIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbmNvZGVTdHIoa2V5KSArICc9JyArIGVuY29kZVN0cih2YWwpXHJcbiAgfSkuZmlsdGVyKHggPT4geC5sZW5ndGggPiAwKS5qb2luKCcmJykgOiBudWxsO1xyXG4gIHJldHVybiByZXMgPyBgPyR7cmVzfWAgOiAnJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhc2VDb21wb25lbnQgKHZ1ZUNvbXBvbmVudE9wdGlvbnMsIHtcclxuICBpc1BhZ2UsXHJcbiAgaW5pdFJlbGF0aW9uXHJcbn0gPSB7fSkge1xyXG4gIGNvbnN0IFtWdWVDb21wb25lbnQsIHZ1ZU9wdGlvbnNdID0gaW5pdFZ1ZUNvbXBvbmVudChWdWUsIHZ1ZUNvbXBvbmVudE9wdGlvbnMpO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcclxuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlLFxyXG4gICAgLi4uKHZ1ZU9wdGlvbnMub3B0aW9ucyB8fCB7fSlcclxuICB9O1xyXG5cclxuICBjb25zdCBjb21wb25lbnRPcHRpb25zID0ge1xyXG4gICAgb3B0aW9ucyxcclxuICAgIGRhdGE6IGluaXREYXRhKHZ1ZU9wdGlvbnMsIFZ1ZS5wcm90b3R5cGUpLFxyXG4gICAgYmVoYXZpb3JzOiBpbml0QmVoYXZpb3JzKHZ1ZU9wdGlvbnMsIGluaXRCZWhhdmlvciksXHJcbiAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVPcHRpb25zLnByb3BzLCBmYWxzZSwgdnVlT3B0aW9ucy5fX2ZpbGUpLFxyXG4gICAgbGlmZXRpbWVzOiB7XHJcbiAgICAgIGF0dGFjaGVkICgpIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgbXBUeXBlOiBpc1BhZ2UuY2FsbCh0aGlzKSA/ICdwYWdlJyA6ICdjb21wb25lbnQnLFxyXG4gICAgICAgICAgbXBJbnN0YW5jZTogdGhpcyxcclxuICAgICAgICAgIHByb3BzRGF0YTogcHJvcGVydGllc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGluaXRWdWVJZHMocHJvcGVydGllcy52dWVJZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOWkhOeQhueItuWtkOWFs+ezu1xyXG4gICAgICAgIGluaXRSZWxhdGlvbi5jYWxsKHRoaXMsIHtcclxuICAgICAgICAgIHZ1ZVBpZDogdGhpcy5fJHZ1ZVBpZCxcclxuICAgICAgICAgIHZ1ZU9wdGlvbnM6IG9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWIHZ1ZSDlrp7kvotcclxuICAgICAgICB0aGlzLiR2bSA9IG5ldyBWdWVDb21wb25lbnQob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIOWkhOeQhiRzbG90cywkc2NvcGVkU2xvdHPvvIjmmoLkuI3mlK/mjIHliqjmgIHlj5jljJYkc2xvdHPvvIlcclxuICAgICAgICBpbml0U2xvdHModGhpcy4kdm0sIHByb3BlcnRpZXMudnVlU2xvdHMpO1xyXG5cclxuICAgICAgICAvLyDop6blj5HpppbmrKEgc2V0RGF0YVxyXG4gICAgICAgIHRoaXMuJHZtLiRtb3VudCgpO1xyXG4gICAgICB9LFxyXG4gICAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgLy8g5b2T57uE5Lu2IHByb3BzIOm7mOiupOWAvOS4uiB0cnVl77yM5Yid5aeL5YyW5pe25Lyg5YWlIGZhbHNlIOS8muWvvOiHtCBjcmVhdGVkLHJlYWR5IOinpuWPkSwg5L2GIGF0dGFjaGVkIOS4jeinpuWPkVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy53ZWl4aW4ucXEuY29tL2NvbW11bml0eS9kZXZlbG9wL2RvYy8wMDA2NmFlMjg0NGNjMGY4ZWI4ODNlMmE1NTc4MDBcclxuICAgICAgICBpZiAodGhpcy4kdm0pIHtcclxuICAgICAgICAgIHRoaXMuJHZtLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnKTtcclxuICAgICAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkZXRhY2hlZCAoKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uJGRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuICAgICAgc2hvdyAoYXJncykge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VTaG93JywgYXJncyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhpZGUgKCkge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VIaWRlJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc2l6ZSAoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VSZXNpemUnLCBzaXplKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgX19sOiBoYW5kbGVMaW5rLFxyXG4gICAgICBfX2U6IGhhbmRsZUV2ZW50XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyBleHRlcm5hbENsYXNzZXNcclxuICBpZiAodnVlT3B0aW9ucy5leHRlcm5hbENsYXNzZXMpIHtcclxuICAgIGNvbXBvbmVudE9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzID0gdnVlT3B0aW9ucy5leHRlcm5hbENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVPcHRpb25zLnd4c0NhbGxNZXRob2RzKSkge1xyXG4gICAgdnVlT3B0aW9ucy53eHNDYWxsTWV0aG9kcy5mb3JFYWNoKGNhbGxNZXRob2QgPT4ge1xyXG4gICAgICBjb21wb25lbnRPcHRpb25zLm1ldGhvZHNbY2FsbE1ldGhvZF0gPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiR2bVtjYWxsTWV0aG9kXShhcmdzKVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNQYWdlKSB7XHJcbiAgICByZXR1cm4gY29tcG9uZW50T3B0aW9uc1xyXG4gIH1cclxuICByZXR1cm4gW2NvbXBvbmVudE9wdGlvbnMsIFZ1ZUNvbXBvbmVudF1cclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VDb21wb25lbnQgKHZ1ZU9wdGlvbnMpIHtcclxuICBjb25zdCBbY29tcG9uZW50T3B0aW9ucywgVnVlQ29tcG9uZW50XSA9IHBhcnNlQmFzZUNvbXBvbmVudCh2dWVPcHRpb25zKTtcclxuXHJcbiAgLy8g5Z+656GA5bqTIDIuMCDku6XkuIogYXR0YWNoZWQg6aG65bqP6ZSZ5Lmx77yM5oyJ54WnIGNyZWF0ZWQg6aG65bqP5by65Yi257qg5q2jXHJcbiAgY29tcG9uZW50T3B0aW9ucy5saWZldGltZXMuY3JlYXRlZCA9IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xyXG4gICAgY29tcG9uZW50cy5wdXNoKHRoaXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudE9wdGlvbnMubGlmZXRpbWVzLmF0dGFjaGVkID0gZnVuY3Rpb24gYXR0YWNoZWQgKCkge1xyXG4gICAgdGhpcy5fX2xpZmV0aW1lc19hdHRhY2hlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcztcclxuXHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgbXBUeXBlOiBpc1BhZ2UuY2FsbCh0aGlzKSA/ICdwYWdlJyA6ICdjb21wb25lbnQnLFxyXG4gICAgICAgIG1wSW5zdGFuY2U6IHRoaXMsXHJcbiAgICAgICAgcHJvcHNEYXRhOiBwcm9wZXJ0aWVzXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpbml0VnVlSWRzKHByb3BlcnRpZXMudnVlSWQsIHRoaXMpO1xyXG5cclxuICAgICAgLy8g5Yid5aeL5YyWIHZ1ZSDlrp7kvotcclxuICAgICAgdGhpcy4kdm0gPSBuZXcgVnVlQ29tcG9uZW50KG9wdGlvbnMpO1xyXG5cclxuICAgICAgLy8g5aSE55CGJHNsb3RzLCRzY29wZWRTbG90c++8iOaaguS4jeaUr+aMgeWKqOaAgeWPmOWMliRzbG90c++8iVxyXG4gICAgICBpbml0U2xvdHModGhpcy4kdm0sIHByb3BlcnRpZXMudnVlU2xvdHMpO1xyXG5cclxuICAgICAgLy8g5aSE55CG54i25a2Q5YWz57O7XHJcbiAgICAgIGluaXRSZWxhdGlvbi5jYWxsKHRoaXMsIHtcclxuICAgICAgICB2dWVQaWQ6IHRoaXMuXyR2dWVQaWQsXHJcbiAgICAgICAgbXBJbnN0YW5jZTogdGhpc1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIOinpuWPkemmluasoSBzZXREYXRhXHJcbiAgICAgIHRoaXMuJHZtLiRtb3VudCgpO1xyXG4gICAgfTtcclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgd2hpbGUgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuX19saWZldGltZXNfYXR0YWNoZWQgJiYgY29tcG9uZW50c1swXSAmJiBjb21wb25lbnQgPT09IGNvbXBvbmVudHNbMF0pIHtcclxuICAgICAgY29tcG9uZW50cy5zaGlmdCgpO1xyXG4gICAgICBjb21wb25lbnQuX19saWZldGltZXNfYXR0YWNoZWQoKTtcclxuICAgICAgZGVsZXRlIGNvbXBvbmVudC5fX2xpZmV0aW1lc19hdHRhY2hlZDtcclxuICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50c1swXTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyByZWFkeSDmr5QgaGFuZGxlTGluayDov5jml6nvvIzliJ3lp4vljJbpgLvovpHmlL7liLAgaGFuZGxlTGluayDkuK1cclxuICBkZWxldGUgY29tcG9uZW50T3B0aW9ucy5saWZldGltZXMucmVhZHk7XHJcblxyXG4gIGNvbXBvbmVudE9wdGlvbnMubWV0aG9kcy5fX2wgPSBoYW5kbGVMaW5rJDE7XHJcblxyXG4gIHJldHVybiBjb21wb25lbnRPcHRpb25zXHJcbn1cclxuXHJcbmNvbnN0IGhvb2tzJDEgPSBbXHJcbiAgJ29uU2hvdycsXHJcbiAgJ29uSGlkZScsXHJcbiAgJ29uVW5sb2FkJ1xyXG5dO1xyXG5cclxuaG9va3MkMS5wdXNoKC4uLlBBR0VfRVZFTlRfSE9PS1MpO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VCYXNlUGFnZSAodnVlUGFnZU9wdGlvbnMsIHtcclxuICBpc1BhZ2UsXHJcbiAgaW5pdFJlbGF0aW9uXHJcbn0pIHtcclxuICBjb25zdCBwYWdlT3B0aW9ucyA9IHBhcnNlQ29tcG9uZW50KHZ1ZVBhZ2VPcHRpb25zKTtcclxuXHJcbiAgaW5pdEhvb2tzKHBhZ2VPcHRpb25zLm1ldGhvZHMsIGhvb2tzJDEsIHZ1ZVBhZ2VPcHRpb25zKTtcclxuXHJcbiAgcGFnZU9wdGlvbnMubWV0aG9kcy5vbkxvYWQgPSBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IHF1ZXJ5O1xyXG4gICAgY29uc3QgY29weVF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpO1xyXG4gICAgZGVsZXRlIGNvcHlRdWVyeS5fX2lkX187XHJcbiAgICB0aGlzLiRwYWdlID0ge1xyXG4gICAgICBmdWxsUGF0aDogJy8nICsgKHRoaXMucm91dGUgfHwgdGhpcy5pcykgKyBzdHJpbmdpZnlRdWVyeShjb3B5UXVlcnkpXHJcbiAgICB9O1xyXG4gICAgdGhpcy4kdm0uJG1wLnF1ZXJ5ID0gcXVlcnk7IC8vIOWFvOWuuSBtcHZ1ZVxyXG4gICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uTG9hZCcsIHF1ZXJ5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gcGFnZU9wdGlvbnNcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VQYWdlICh2dWVQYWdlT3B0aW9ucykge1xyXG4gIGNvbnN0IHBhZ2VPcHRpb25zID0gcGFyc2VCYXNlUGFnZSh2dWVQYWdlT3B0aW9ucywge1xyXG4gICAgaXNQYWdlLFxyXG4gICAgaW5pdFJlbGF0aW9uXHJcbiAgfSk7XHJcbiAgLy8g6aG16Z2i6ZyA6KaB5ZyoIHJlYWR5IOS4reinpuWPke+8jOWFtuS7lue7hOS7tuaYr+WcqCBoYW5kbGVMaW5rIOS4reinpuWPkVxyXG4gIHBhZ2VPcHRpb25zLmxpZmV0aW1lcy5yZWFkeSA9IGZ1bmN0aW9uIHJlYWR5ICgpIHtcclxuICAgIGlmICh0aGlzLiR2bSAmJiB0aGlzLiR2bS5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnY3JlYXRlZCcpO1xyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnYmVmb3JlTW91bnQnKTtcclxuICAgICAgdGhpcy4kdm0uX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJyk7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzICYmIGNvbnNvbGUud2Fybih0aGlzLmlzICsgJyBpcyBub3QgcmVhZHknKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwYWdlT3B0aW9ucy5saWZldGltZXMuZGV0YWNoZWQgPSBmdW5jdGlvbiBkZXRhY2hlZCAoKSB7XHJcbiAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS4kZGVzdHJveSgpO1xyXG4gICAgLy8g5riF55CGXHJcbiAgICBjb25zdCB3ZWJ2aWV3SWQgPSB0aGlzLl9fd2Vidmlld0lkX187XHJcbiAgICB3ZWJ2aWV3SWQgJiYgT2JqZWN0LmtleXMoaW5zdGFuY2VzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGlmIChrZXkuaW5kZXhPZih3ZWJ2aWV3SWQgKyAnXycpID09PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIGluc3RhbmNlc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gcGFnZU9wdGlvbnNcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnZSAodnVlUGFnZU9wdGlvbnMpIHtcclxuICB7XHJcbiAgICByZXR1cm4gQ29tcG9uZW50KHBhcnNlUGFnZSh2dWVQYWdlT3B0aW9ucykpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZ1ZU9wdGlvbnMpIHtcclxuICB7XHJcbiAgICByZXR1cm4gQ29tcG9uZW50KHBhcnNlQ29tcG9uZW50KHZ1ZU9wdGlvbnMpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3VicGFja2FnZUFwcCAodm0pIHtcclxuICBjb25zdCBhcHBPcHRpb25zID0gcGFyc2VBcHAodm0pO1xyXG4gIGNvbnN0IGFwcCA9IGdldEFwcCh7XHJcbiAgICBhbGxvd0RlZmF1bHQ6IHRydWVcclxuICB9KTtcclxuICB2bS4kc2NvcGUgPSBhcHA7XHJcbiAgY29uc3QgZ2xvYmFsRGF0YSA9IGFwcC5nbG9iYWxEYXRhO1xyXG4gIGlmIChnbG9iYWxEYXRhKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhcHBPcHRpb25zLmdsb2JhbERhdGEpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIGlmICghaGFzT3duKGdsb2JhbERhdGEsIG5hbWUpKSB7XHJcbiAgICAgICAgZ2xvYmFsRGF0YVtuYW1lXSA9IGFwcE9wdGlvbnMuZ2xvYmFsRGF0YVtuYW1lXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIE9iamVjdC5rZXlzKGFwcE9wdGlvbnMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICBpZiAoIWhhc093bihhcHAsIG5hbWUpKSB7XHJcbiAgICAgIGFwcFtuYW1lXSA9IGFwcE9wdGlvbnNbbmFtZV07XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vblNob3cpICYmIHR0Lm9uQXBwU2hvdykge1xyXG4gICAgdHQub25BcHBTaG93KCguLi5hcmdzKSA9PiB7XHJcbiAgICAgIHZtLl9fY2FsbF9ob29rKCdvblNob3cnLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uSGlkZSkgJiYgdHQub25BcHBIaWRlKSB7XHJcbiAgICB0dC5vbkFwcEhpZGUoKC4uLmFyZ3MpID0+IHtcclxuICAgICAgdm0uX19jYWxsX2hvb2soJ29uSGlkZScsIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25MYXVuY2gpKSB7XHJcbiAgICBjb25zdCBhcmdzID0gdHQuZ2V0TGF1bmNoT3B0aW9uc1N5bmMgJiYgdHQuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIHZtLl9fY2FsbF9ob29rKCdvbkxhdW5jaCcsIGFyZ3MpO1xyXG4gIH1cclxuICByZXR1cm4gdm1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGx1Z2luICh2bSkge1xyXG4gIGNvbnN0IGFwcE9wdGlvbnMgPSBwYXJzZUFwcCh2bSk7XHJcbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vblNob3cpICYmIHR0Lm9uQXBwU2hvdykge1xyXG4gICAgdHQub25BcHBTaG93KCguLi5hcmdzKSA9PiB7XHJcbiAgICAgIGFwcE9wdGlvbnMub25TaG93LmFwcGx5KHZtLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uSGlkZSkgJiYgdHQub25BcHBIaWRlKSB7XHJcbiAgICB0dC5vbkFwcEhpZGUoKC4uLmFyZ3MpID0+IHtcclxuICAgICAgYXBwT3B0aW9ucy5vbkhpZGUuYXBwbHkodm0sIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25MYXVuY2gpKSB7XHJcbiAgICBjb25zdCBhcmdzID0gdHQuZ2V0TGF1bmNoT3B0aW9uc1N5bmMgJiYgdHQuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGFwcE9wdGlvbnMub25MYXVuY2guY2FsbCh2bSwgYXJncyk7XHJcbiAgfVxyXG4gIHJldHVybiB2bVxyXG59XHJcblxyXG50b2Rvcy5mb3JFYWNoKHRvZG9BcGkgPT4ge1xyXG4gIHByb3RvY29sc1t0b2RvQXBpXSA9IGZhbHNlO1xyXG59KTtcclxuXHJcbmNhbklVc2VzLmZvckVhY2goY2FuSVVzZUFwaSA9PiB7XHJcbiAgY29uc3QgYXBpTmFtZSA9IHByb3RvY29sc1tjYW5JVXNlQXBpXSAmJiBwcm90b2NvbHNbY2FuSVVzZUFwaV0ubmFtZSA/IHByb3RvY29sc1tjYW5JVXNlQXBpXS5uYW1lXHJcbiAgICA6IGNhbklVc2VBcGk7XHJcbiAgaWYgKCF0dC5jYW5JVXNlKGFwaU5hbWUpKSB7XHJcbiAgICBwcm90b2NvbHNbY2FuSVVzZUFwaV0gPSBmYWxzZTtcclxuICB9XHJcbn0pO1xyXG5cclxubGV0IHVuaSA9IHt9O1xyXG5cclxuaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgXCJtcC10b3V0aWFvXCIgIT09ICdhcHAtcGx1cycpIHtcclxuICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgIGdldCAodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgIGlmIChoYXNPd24odGFyZ2V0LCBuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV1cclxuICAgICAgfVxyXG4gICAgICBpZiAoYmFzZUFwaVtuYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBiYXNlQXBpW25hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFwaVtuYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgYXBpW25hbWVdKVxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoZXh0cmFBcGlbbmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgZXh0cmFBcGlbbmFtZV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2RvQXBpc1tuYW1lXSkge1xyXG4gICAgICAgICAgcmV0dXJuIHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50QXBpW25hbWVdKSB7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50QXBpW25hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFoYXNPd24odHQsIG5hbWUpICYmICFoYXNPd24ocHJvdG9jb2xzLCBuYW1lKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgd3JhcHBlcihuYW1lLCB0dFtuYW1lXSkpXHJcbiAgICB9LFxyXG4gICAgc2V0ICh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH0pO1xyXG59IGVsc2Uge1xyXG4gIE9iamVjdC5rZXlzKGJhc2VBcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICB1bmlbbmFtZV0gPSBiYXNlQXBpW25hbWVdO1xyXG4gIH0pO1xyXG5cclxuICB7XHJcbiAgICBPYmplY3Qua2V5cyh0b2RvQXBpcykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIHRvZG9BcGlzW25hbWVdKTtcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmtleXMoZXh0cmFBcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKGV2ZW50QXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgdW5pW25hbWVdID0gZXZlbnRBcGlbbmFtZV07XHJcbiAgfSk7XHJcblxyXG4gIE9iamVjdC5rZXlzKGFwaSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCBhcGlbbmFtZV0pO1xyXG4gIH0pO1xyXG5cclxuICBPYmplY3Qua2V5cyh0dCkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIGlmIChoYXNPd24odHQsIG5hbWUpIHx8IGhhc093bihwcm90b2NvbHMsIG5hbWUpKSB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB3cmFwcGVyKG5hbWUsIHR0W25hbWVdKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbnR0LmNyZWF0ZUFwcCA9IGNyZWF0ZUFwcDtcclxudHQuY3JlYXRlUGFnZSA9IGNyZWF0ZVBhZ2U7XHJcbnR0LmNyZWF0ZUNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudDtcclxudHQuY3JlYXRlU3VicGFja2FnZUFwcCA9IGNyZWF0ZVN1YnBhY2thZ2VBcHA7XHJcbnR0LmNyZWF0ZVBsdWdpbiA9IGNyZWF0ZVBsdWdpbjtcclxuXHJcbnZhciB1bmkkMSA9IHVuaTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVuaSQxO1xyXG5leHBvcnQgeyBjcmVhdGVBcHAsIGNyZWF0ZUNvbXBvbmVudCwgY3JlYXRlUGFnZSwgY3JlYXRlUGx1Z2luLCBjcmVhdGVTdWJwYWNrYWdlQXBwIH07XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qIVxuICogVnVlLmpzIHYyLjYuMTFcbiAqIChjKSAyMDE0LTIwMjEgRXZhbiBZb3VcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuLyogICovXG5cbnZhciBlbXB0eU9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuXG4vLyBUaGVzZSBoZWxwZXJzIHByb2R1Y2UgYmV0dGVyIFZNIGNvZGUgaW4gSlMgZW5naW5lcyBkdWUgdG8gdGhlaXJcbi8vIGV4cGxpY2l0bmVzcyBhbmQgZnVuY3Rpb24gaW5saW5pbmcuXG5mdW5jdGlvbiBpc1VuZGVmICh2KSB7XG4gIHJldHVybiB2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0RlZiAodikge1xuICByZXR1cm4gdiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNUcnVlICh2KSB7XG4gIHJldHVybiB2ID09PSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzRmFsc2UgKHYpIHtcbiAgcmV0dXJuIHYgPT09IGZhbHNlXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgcHJpbWl0aXZlLlxuICovXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSAodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fFxuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcgfHxcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xuICApXG59XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIEdldCB0aGUgcmF3IHR5cGUgc3RyaW5nIG9mIGEgdmFsdWUsIGUuZy4sIFtvYmplY3QgT2JqZWN0XS5cbiAqL1xudmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHRvUmF3VHlwZSAodmFsdWUpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSlcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nXG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwICh2KSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2KSA9PT0gJ1tvYmplY3QgUmVnRXhwXSdcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWwgaXMgYSB2YWxpZCBhcnJheSBpbmRleC5cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEFycmF5SW5kZXggKHZhbCkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbCkpO1xuICByZXR1cm4gbiA+PSAwICYmIE1hdGguZmxvb3IobikgPT09IG4gJiYgaXNGaW5pdGUodmFsKVxufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UgKHZhbCkge1xuICByZXR1cm4gKFxuICAgIGlzRGVmKHZhbCkgJiZcbiAgICB0eXBlb2YgdmFsLnRoZW4gPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgdmFsLmNhdGNoID09PSAnZnVuY3Rpb24nXG4gIClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgdmFsdWUgdG8gYSBzdHJpbmcgdGhhdCBpcyBhY3R1YWxseSByZW5kZXJlZC5cbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcgKHZhbCkge1xuICByZXR1cm4gdmFsID09IG51bGxcbiAgICA/ICcnXG4gICAgOiBBcnJheS5pc0FycmF5KHZhbCkgfHwgKGlzUGxhaW5PYmplY3QodmFsKSAmJiB2YWwudG9TdHJpbmcgPT09IF90b1N0cmluZylcbiAgICAgID8gSlNPTi5zdHJpbmdpZnkodmFsLCBudWxsLCAyKVxuICAgICAgOiBTdHJpbmcodmFsKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gaW5wdXQgdmFsdWUgdG8gYSBudW1iZXIgZm9yIHBlcnNpc3RlbmNlLlxuICogSWYgdGhlIGNvbnZlcnNpb24gZmFpbHMsIHJldHVybiBvcmlnaW5hbCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyICh2YWwpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbCk7XG4gIHJldHVybiBpc05hTihuKSA/IHZhbCA6IG5cbn1cblxuLyoqXG4gKiBNYWtlIGEgbWFwIGFuZCByZXR1cm4gYSBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYSBrZXlcbiAqIGlzIGluIHRoYXQgbWFwLlxuICovXG5mdW5jdGlvbiBtYWtlTWFwIChcbiAgc3RyLFxuICBleHBlY3RzTG93ZXJDYXNlXG4pIHtcbiAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBsaXN0ID0gc3RyLnNwbGl0KCcsJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIG1hcFtsaXN0W2ldXSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGV4cGVjdHNMb3dlckNhc2VcbiAgICA/IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIG1hcFt2YWwudG9Mb3dlckNhc2UoKV07IH1cbiAgICA6IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIG1hcFt2YWxdOyB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0YWcgaXMgYSBidWlsdC1pbiB0YWcuXG4gKi9cbnZhciBpc0J1aWx0SW5UYWcgPSBtYWtlTWFwKCdzbG90LGNvbXBvbmVudCcsIHRydWUpO1xuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZS5cbiAqL1xudmFyIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUgPSBtYWtlTWFwKCdrZXkscmVmLHNsb3Qsc2xvdC1zY29wZSxpcycpO1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZSAoYXJyLCBpdGVtKSB7XG4gIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBoYXNPd24gKG9iaiwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gKGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICB2YXIgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxpbWl0ZWQgc3RyaW5nLlxuICovXG52YXIgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcbnZhciBjYW1lbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCBmdW5jdGlvbiAoXywgYykgeyByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnOyB9KVxufSk7XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSBhIHN0cmluZy5cbiAqL1xudmFyIGNhcGl0YWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG59KTtcblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICovXG52YXIgaHlwaGVuYXRlUkUgPSAvXFxCKFtBLVpdKS9nO1xudmFyIGh5cGhlbmF0ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShoeXBoZW5hdGVSRSwgJy0kMScpLnRvTG93ZXJDYXNlKClcbn0pO1xuXG4vKipcbiAqIFNpbXBsZSBiaW5kIHBvbHlmaWxsIGZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3Qgc3VwcG9ydCBpdCxcbiAqIGUuZy4sIFBoYW50b21KUyAxLnguIFRlY2huaWNhbGx5LCB3ZSBkb24ndCBuZWVkIHRoaXMgYW55bW9yZVxuICogc2luY2UgbmF0aXZlIGJpbmQgaXMgbm93IHBlcmZvcm1hbnQgZW5vdWdoIGluIG1vc3QgYnJvd3NlcnMuXG4gKiBCdXQgcmVtb3ZpbmcgaXQgd291bGQgbWVhbiBicmVha2luZyBjb2RlIHRoYXQgd2FzIGFibGUgdG8gcnVuIGluXG4gKiBQaGFudG9tSlMgMS54LCBzbyB0aGlzIG11c3QgYmUga2VwdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS5cbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gcG9seWZpbGxCaW5kIChmbiwgY3R4KSB7XG4gIGZ1bmN0aW9uIGJvdW5kRm4gKGEpIHtcbiAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cblxuICBib3VuZEZuLl9sZW5ndGggPSBmbi5sZW5ndGg7XG4gIHJldHVybiBib3VuZEZuXG59XG5cbmZ1bmN0aW9uIG5hdGl2ZUJpbmQgKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZuLmJpbmQoY3R4KVxufVxuXG52YXIgYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4gID8gbmF0aXZlQmluZFxuICA6IHBvbHlmaWxsQmluZDtcblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqL1xuZnVuY3Rpb24gdG9BcnJheSAobGlzdCwgc3RhcnQpIHtcbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICB2YXIgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnQ7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZXh0ZW5kICh0bywgX2Zyb20pIHtcbiAgZm9yICh2YXIga2V5IGluIF9mcm9tKSB7XG4gICAgdG9ba2V5XSA9IF9mcm9tW2tleV07XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZnVuY3Rpb24gdG9PYmplY3QgKGFycikge1xuICB2YXIgcmVzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycltpXSkge1xuICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFBlcmZvcm0gbm8gb3BlcmF0aW9uLlxuICogU3R1YmJpbmcgYXJncyB0byBtYWtlIEZsb3cgaGFwcHkgd2l0aG91dCBsZWF2aW5nIHVzZWxlc3MgdHJhbnNwaWxlZCBjb2RlXG4gKiB3aXRoIC4uLnJlc3QgKGh0dHBzOi8vZmxvdy5vcmcvYmxvZy8yMDE3LzA1LzA3L1N0cmljdC1GdW5jdGlvbi1DYWxsLUFyaXR5LykuXG4gKi9cbmZ1bmN0aW9uIG5vb3AgKGEsIGIsIGMpIHt9XG5cbi8qKlxuICogQWx3YXlzIHJldHVybiBmYWxzZS5cbiAqL1xudmFyIG5vID0gZnVuY3Rpb24gKGEsIGIsIGMpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogUmV0dXJuIHRoZSBzYW1lIHZhbHVlLlxuICovXG52YXIgaWRlbnRpdHkgPSBmdW5jdGlvbiAoXykgeyByZXR1cm4gXzsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gdmFsdWVzIGFyZSBsb29zZWx5IGVxdWFsIC0gdGhhdCBpcyxcbiAqIGlmIHRoZXkgYXJlIHBsYWluIG9iamVjdHMsIGRvIHRoZXkgaGF2ZSB0aGUgc2FtZSBzaGFwZT9cbiAqL1xuZnVuY3Rpb24gbG9vc2VFcXVhbCAoYSwgYikge1xuICBpZiAoYSA9PT0gYikgeyByZXR1cm4gdHJ1ZSB9XG4gIHZhciBpc09iamVjdEEgPSBpc09iamVjdChhKTtcbiAgdmFyIGlzT2JqZWN0QiA9IGlzT2JqZWN0KGIpO1xuICBpZiAoaXNPYmplY3RBICYmIGlzT2JqZWN0Qikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgaXNBcnJheUEgPSBBcnJheS5pc0FycmF5KGEpO1xuICAgICAgdmFyIGlzQXJyYXlCID0gQXJyYXkuaXNBcnJheShiKTtcbiAgICAgIGlmIChpc0FycmF5QSAmJiBpc0FycmF5Qikge1xuICAgICAgICByZXR1cm4gYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChlLCBiW2ldKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpXG4gICAgICB9IGVsc2UgaWYgKCFpc0FycmF5QSAmJiAhaXNBcnJheUIpIHtcbiAgICAgICAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG4gICAgICAgIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuICAgICAgICByZXR1cm4ga2V5c0EubGVuZ3RoID09PSBrZXlzQi5sZW5ndGggJiYga2V5c0EuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBsb29zZUVxdWFsKGFba2V5XSwgYltrZXldKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSBlbHNlIGlmICghaXNPYmplY3RBICYmICFpc09iamVjdEIpIHtcbiAgICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgZmlyc3QgaW5kZXggYXQgd2hpY2ggYSBsb29zZWx5IGVxdWFsIHZhbHVlIGNhbiBiZVxuICogZm91bmQgaW4gdGhlIGFycmF5IChpZiB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdCwgdGhlIGFycmF5IG11c3RcbiAqIGNvbnRhaW4gYW4gb2JqZWN0IG9mIHRoZSBzYW1lIHNoYXBlKSwgb3IgLTEgaWYgaXQgaXMgbm90IHByZXNlbnQuXG4gKi9cbmZ1bmN0aW9uIGxvb3NlSW5kZXhPZiAoYXJyLCB2YWwpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobG9vc2VFcXVhbChhcnJbaV0sIHZhbCkpIHsgcmV0dXJuIGkgfVxuICB9XG4gIHJldHVybiAtMVxufVxuXG4vKipcbiAqIEVuc3VyZSBhIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmx5IG9uY2UuXG4gKi9cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBBU1NFVF9UWVBFUyA9IFtcbiAgJ2NvbXBvbmVudCcsXG4gICdkaXJlY3RpdmUnLFxuICAnZmlsdGVyJ1xuXTtcblxudmFyIExJRkVDWUNMRV9IT09LUyA9IFtcbiAgJ2JlZm9yZUNyZWF0ZScsXG4gICdjcmVhdGVkJyxcbiAgJ2JlZm9yZU1vdW50JyxcbiAgJ21vdW50ZWQnLFxuICAnYmVmb3JlVXBkYXRlJyxcbiAgJ3VwZGF0ZWQnLFxuICAnYmVmb3JlRGVzdHJveScsXG4gICdkZXN0cm95ZWQnLFxuICAnYWN0aXZhdGVkJyxcbiAgJ2RlYWN0aXZhdGVkJyxcbiAgJ2Vycm9yQ2FwdHVyZWQnLFxuICAnc2VydmVyUHJlZmV0Y2gnXG5dO1xuXG4vKiAgKi9cblxuXG5cbnZhciBjb25maWcgPSAoe1xuICAvKipcbiAgICogT3B0aW9uIG1lcmdlIHN0cmF0ZWdpZXMgKHVzZWQgaW4gY29yZS91dGlsL29wdGlvbnMpXG4gICAqL1xuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgb3B0aW9uTWVyZ2VTdHJhdGVnaWVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHN1cHByZXNzIHdhcm5pbmdzLlxuICAgKi9cbiAgc2lsZW50OiBmYWxzZSxcblxuICAvKipcbiAgICogU2hvdyBwcm9kdWN0aW9uIG1vZGUgdGlwIG1lc3NhZ2Ugb24gYm9vdD9cbiAgICovXG4gIHByb2R1Y3Rpb25UaXA6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIGRldnRvb2xzXG4gICAqL1xuICBkZXZ0b29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byByZWNvcmQgcGVyZlxuICAgKi9cbiAgcGVyZm9ybWFuY2U6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBFcnJvciBoYW5kbGVyIGZvciB3YXRjaGVyIGVycm9yc1xuICAgKi9cbiAgZXJyb3JIYW5kbGVyOiBudWxsLFxuXG4gIC8qKlxuICAgKiBXYXJuIGhhbmRsZXIgZm9yIHdhdGNoZXIgd2FybnNcbiAgICovXG4gIHdhcm5IYW5kbGVyOiBudWxsLFxuXG4gIC8qKlxuICAgKiBJZ25vcmUgY2VydGFpbiBjdXN0b20gZWxlbWVudHNcbiAgICovXG4gIGlnbm9yZWRFbGVtZW50czogW10sXG5cbiAgLyoqXG4gICAqIEN1c3RvbSB1c2VyIGtleSBhbGlhc2VzIGZvciB2LW9uXG4gICAqL1xuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAga2V5Q29kZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIHJlc2VydmVkIHNvIHRoYXQgaXQgY2Fubm90IGJlIHJlZ2lzdGVyZWQgYXMgYVxuICAgKiBjb21wb25lbnQuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkVGFnOiBubyxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIHJlc2VydmVkIHNvIHRoYXQgaXQgY2Fubm90IGJlIHVzZWQgYXMgYSBjb21wb25lbnRcbiAgICogcHJvcC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICovXG4gIGlzUmVzZXJ2ZWRBdHRyOiBubyxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgYW4gdW5rbm93biBlbGVtZW50LlxuICAgKiBQbGF0Zm9ybS1kZXBlbmRlbnQuXG4gICAqL1xuICBpc1Vua25vd25FbGVtZW50OiBubyxcblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lc3BhY2Ugb2YgYW4gZWxlbWVudFxuICAgKi9cbiAgZ2V0VGFnTmFtZXNwYWNlOiBub29wLFxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgcmVhbCB0YWcgbmFtZSBmb3IgdGhlIHNwZWNpZmljIHBsYXRmb3JtLlxuICAgKi9cbiAgcGFyc2VQbGF0Zm9ybVRhZ05hbWU6IGlkZW50aXR5LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgbXVzdCBiZSBib3VuZCB1c2luZyBwcm9wZXJ0eSwgZS5nLiB2YWx1ZVxuICAgKiBQbGF0Zm9ybS1kZXBlbmRlbnQuXG4gICAqL1xuICBtdXN0VXNlUHJvcDogbm8sXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdXBkYXRlcyBhc3luY2hyb25vdXNseS4gSW50ZW5kZWQgdG8gYmUgdXNlZCBieSBWdWUgVGVzdCBVdGlsc1xuICAgKiBUaGlzIHdpbGwgc2lnbmlmaWNhbnRseSByZWR1Y2UgcGVyZm9ybWFuY2UgaWYgc2V0IHRvIGZhbHNlLlxuICAgKi9cbiAgYXN5bmM6IHRydWUsXG5cbiAgLyoqXG4gICAqIEV4cG9zZWQgZm9yIGxlZ2FjeSByZWFzb25zXG4gICAqL1xuICBfbGlmZWN5Y2xlSG9va3M6IExJRkVDWUNMRV9IT09LU1xufSk7XG5cbi8qICAqL1xuXG4vKipcbiAqIHVuaWNvZGUgbGV0dGVycyB1c2VkIGZvciBwYXJzaW5nIGh0bWwgdGFncywgY29tcG9uZW50IG5hbWVzIGFuZCBwcm9wZXJ0eSBwYXRocy5cbiAqIHVzaW5nIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNTMvc2VtYW50aWNzLXNjcmlwdGluZy5odG1sI3BvdGVudGlhbGN1c3RvbWVsZW1lbnRuYW1lXG4gKiBza2lwcGluZyBcXHUxMDAwMC1cXHVFRkZGRiBkdWUgdG8gaXQgZnJlZXppbmcgdXAgUGhhbnRvbUpTXG4gKi9cbnZhciB1bmljb2RlUmVnRXhwID0gL2EtekEtWlxcdTAwQjdcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDNGLVxcdTIwNDBcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkQvO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICovXG5mdW5jdGlvbiBpc1Jlc2VydmVkIChzdHIpIHtcbiAgdmFyIGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMCk7XG4gIHJldHVybiBjID09PSAweDI0IHx8IGMgPT09IDB4NUZcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBQYXJzZSBzaW1wbGUgcGF0aC5cbiAqL1xudmFyIGJhaWxSRSA9IG5ldyBSZWdFeHAoKFwiW15cIiArICh1bmljb2RlUmVnRXhwLnNvdXJjZSkgKyBcIi4kX1xcXFxkXVwiKSk7XG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgaWYgKGJhaWxSRS50ZXN0KHBhdGgpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLicpO1xuICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghb2JqKSB7IHJldHVybiB9XG4gICAgICBvYmogPSBvYmpbc2VnbWVudHNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gb2JqXG4gIH1cbn1cblxuLyogICovXG5cbi8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xudmFyIGhhc1Byb3RvID0gJ19fcHJvdG9fXycgaW4ge307XG5cbi8vIEJyb3dzZXIgZW52aXJvbm1lbnQgc25pZmZpbmdcbnZhciBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbnZhciBpbldlZXggPSB0eXBlb2YgV1hFbnZpcm9ubWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgISFXWEVudmlyb25tZW50LnBsYXRmb3JtO1xudmFyIHdlZXhQbGF0Zm9ybSA9IGluV2VleCAmJiBXWEVudmlyb25tZW50LnBsYXRmb3JtLnRvTG93ZXJDYXNlKCk7XG52YXIgVUEgPSBpbkJyb3dzZXIgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbnZhciBpc0lFID0gVUEgJiYgL21zaWV8dHJpZGVudC8udGVzdChVQSk7XG52YXIgaXNJRTkgPSBVQSAmJiBVQS5pbmRleE9mKCdtc2llIDkuMCcpID4gMDtcbnZhciBpc0VkZ2UgPSBVQSAmJiBVQS5pbmRleE9mKCdlZGdlLycpID4gMDtcbnZhciBpc0FuZHJvaWQgPSAoVUEgJiYgVUEuaW5kZXhPZignYW5kcm9pZCcpID4gMCkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKTtcbnZhciBpc0lPUyA9IChVQSAmJiAvaXBob25lfGlwYWR8aXBvZHxpb3MvLnRlc3QoVUEpKSB8fCAod2VleFBsYXRmb3JtID09PSAnaW9zJyk7XG52YXIgaXNDaHJvbWUgPSBVQSAmJiAvY2hyb21lXFwvXFxkKy8udGVzdChVQSkgJiYgIWlzRWRnZTtcbnZhciBpc1BoYW50b21KUyA9IFVBICYmIC9waGFudG9tanMvLnRlc3QoVUEpO1xudmFyIGlzRkYgPSBVQSAmJiBVQS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pO1xuXG4vLyBGaXJlZm94IGhhcyBhIFwid2F0Y2hcIiBmdW5jdGlvbiBvbiBPYmplY3QucHJvdG90eXBlLi4uXG52YXIgbmF0aXZlV2F0Y2ggPSAoe30pLndhdGNoO1xuaWYgKGluQnJvd3Nlcikge1xuICB0cnkge1xuICAgIHZhciBvcHRzID0ge307XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wdHMsICdwYXNzaXZlJywgKHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIH1cbiAgICB9KSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8yODVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdC1wYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbi8vIHRoaXMgbmVlZHMgdG8gYmUgbGF6eS1ldmFsZWQgYmVjYXVzZSB2dWUgbWF5IGJlIHJlcXVpcmVkIGJlZm9yZVxuLy8gdnVlLXNlcnZlci1yZW5kZXJlciBjYW4gc2V0IFZVRV9FTlZcbnZhciBfaXNTZXJ2ZXI7XG52YXIgaXNTZXJ2ZXJSZW5kZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChfaXNTZXJ2ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaW5Ccm93c2VyICYmICFpbldlZXggJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGRldGVjdCBwcmVzZW5jZSBvZiB2dWUtc2VydmVyLXJlbmRlcmVyIGFuZCBhdm9pZFxuICAgICAgLy8gV2VicGFjayBzaGltbWluZyB0aGUgcHJvY2Vzc1xuICAgICAgX2lzU2VydmVyID0gZ2xvYmFsWydwcm9jZXNzJ10gJiYgZ2xvYmFsWydwcm9jZXNzJ10uZW52LlZVRV9FTlYgPT09ICdzZXJ2ZXInO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaXNTZXJ2ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9pc1NlcnZlclxufTtcblxuLy8gZGV0ZWN0IGRldnRvb2xzXG52YXIgZGV2dG9vbHMgPSBpbkJyb3dzZXIgJiYgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBpc05hdGl2ZSAoQ3Rvcikge1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KEN0b3IudG9TdHJpbmcoKSlcbn1cblxudmFyIGhhc1N5bWJvbCA9XG4gIHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFN5bWJvbCkgJiZcbiAgdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFJlZmxlY3Qub3duS2V5cyk7XG5cbnZhciBfU2V0O1xuLyogaXN0YW5idWwgaWdub3JlIGlmICovIC8vICRmbG93LWRpc2FibGUtbGluZVxuaWYgKHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFNldCkpIHtcbiAgLy8gdXNlIG5hdGl2ZSBTZXQgd2hlbiBhdmFpbGFibGUuXG4gIF9TZXQgPSBTZXQ7XG59IGVsc2Uge1xuICAvLyBhIG5vbi1zdGFuZGFyZCBTZXQgcG9seWZpbGwgdGhhdCBvbmx5IHdvcmtzIHdpdGggcHJpbWl0aXZlIGtleXMuXG4gIF9TZXQgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZXQgKCkge1xuICAgICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRba2V5XSA9PT0gdHJ1ZVxuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKGtleSkge1xuICAgICAgdGhpcy5zZXRba2V5XSA9IHRydWU7XG4gICAgfTtcbiAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIgKCkge1xuICAgICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2V0O1xuICB9KCkpO1xufVxuXG4vKiAgKi9cblxudmFyIHdhcm4gPSBub29wO1xudmFyIHRpcCA9IG5vb3A7XG52YXIgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IChub29wKTsgLy8gd29yayBhcm91bmQgZmxvdyBjaGVja1xudmFyIGZvcm1hdENvbXBvbmVudE5hbWUgPSAobm9vcCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBoYXNDb25zb2xlID0gdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnO1xuICB2YXIgY2xhc3NpZnlSRSA9IC8oPzpefFstX10pKFxcdykvZztcbiAgdmFyIGNsYXNzaWZ5ID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoY2xhc3NpZnlSRSwgZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudG9VcHBlckNhc2UoKTsgfSlcbiAgICAucmVwbGFjZSgvWy1fXS9nLCAnJyk7IH07XG5cbiAgd2FybiA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgdmFyIHRyYWNlID0gdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnO1xuXG4gICAgaWYgKGNvbmZpZy53YXJuSGFuZGxlcikge1xuICAgICAgY29uZmlnLndhcm5IYW5kbGVyLmNhbGwobnVsbCwgbXNnLCB2bSwgdHJhY2UpO1xuICAgIH0gZWxzZSBpZiAoaGFzQ29uc29sZSAmJiAoIWNvbmZpZy5zaWxlbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIltWdWUgd2Fybl06IFwiICsgbXNnICsgdHJhY2UpKTtcbiAgICB9XG4gIH07XG5cbiAgdGlwID0gZnVuY3Rpb24gKG1zZywgdm0pIHtcbiAgICBpZiAoaGFzQ29uc29sZSAmJiAoIWNvbmZpZy5zaWxlbnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbVnVlIHRpcF06IFwiICsgbXNnICsgKFxuICAgICAgICB2bSA/IGdlbmVyYXRlQ29tcG9uZW50VHJhY2Uodm0pIDogJydcbiAgICAgICkpO1xuICAgIH1cbiAgfTtcblxuICBmb3JtYXRDb21wb25lbnROYW1lID0gZnVuY3Rpb24gKHZtLCBpbmNsdWRlRmlsZSkge1xuICAgIGlmICh2bS4kcm9vdCA9PT0gdm0pIHtcbiAgICAgIGlmICh2bS4kb3B0aW9ucyAmJiB2bS4kb3B0aW9ucy5fX2ZpbGUpIHsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgICAgIHJldHVybiAoJycpICsgdm0uJG9wdGlvbnMuX19maWxlXG4gICAgICB9XG4gICAgICByZXR1cm4gJzxSb290PidcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygdm0gPT09ICdmdW5jdGlvbicgJiYgdm0uY2lkICE9IG51bGxcbiAgICAgID8gdm0ub3B0aW9uc1xuICAgICAgOiB2bS5faXNWdWVcbiAgICAgICAgPyB2bS4kb3B0aW9ucyB8fCB2bS5jb25zdHJ1Y3Rvci5vcHRpb25zXG4gICAgICAgIDogdm07XG4gICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgfHwgb3B0aW9ucy5fY29tcG9uZW50VGFnO1xuICAgIHZhciBmaWxlID0gb3B0aW9ucy5fX2ZpbGU7XG4gICAgaWYgKCFuYW1lICYmIGZpbGUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGZpbGUubWF0Y2goLyhbXi9cXFxcXSspXFwudnVlJC8pO1xuICAgICAgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAobmFtZSA/IChcIjxcIiArIChjbGFzc2lmeShuYW1lKSkgKyBcIj5cIikgOiBcIjxBbm9ueW1vdXM+XCIpICtcbiAgICAgIChmaWxlICYmIGluY2x1ZGVGaWxlICE9PSBmYWxzZSA/IChcIiBhdCBcIiArIGZpbGUpIDogJycpXG4gICAgKVxuICB9O1xuXG4gIHZhciByZXBlYXQgPSBmdW5jdGlvbiAoc3RyLCBuKSB7XG4gICAgdmFyIHJlcyA9ICcnO1xuICAgIHdoaWxlIChuKSB7XG4gICAgICBpZiAobiAlIDIgPT09IDEpIHsgcmVzICs9IHN0cjsgfVxuICAgICAgaWYgKG4gPiAxKSB7IHN0ciArPSBzdHI7IH1cbiAgICAgIG4gPj49IDE7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfTtcblxuICBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gZnVuY3Rpb24gKHZtKSB7XG4gICAgaWYgKHZtLl9pc1Z1ZSAmJiB2bS4kcGFyZW50KSB7XG4gICAgICB2YXIgdHJlZSA9IFtdO1xuICAgICAgdmFyIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICB3aGlsZSAodm0gJiYgdm0uJG9wdGlvbnMubmFtZSAhPT0gJ1BhZ2VCb2R5Jykge1xuICAgICAgICBpZiAodHJlZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIGxhc3QgPSB0cmVlW3RyZWUubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKGxhc3QuY29uc3RydWN0b3IgPT09IHZtLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UrKztcbiAgICAgICAgICAgIHZtID0gdm0uJHBhcmVudDtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPiAwKSB7XG4gICAgICAgICAgICB0cmVlW3RyZWUubGVuZ3RoIC0gMV0gPSBbbGFzdCwgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlXTtcbiAgICAgICAgICAgIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICF2bS4kb3B0aW9ucy5pc1Jlc2VydmVkICYmIHRyZWUucHVzaCh2bSk7XG4gICAgICAgIHZtID0gdm0uJHBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnXFxuXFxuZm91bmQgaW5cXG5cXG4nICsgdHJlZVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh2bSwgaSkgeyByZXR1cm4gKFwiXCIgKyAoaSA9PT0gMCA/ICctLS0+ICcgOiByZXBlYXQoJyAnLCA1ICsgaSAqIDIpKSArIChBcnJheS5pc0FycmF5KHZtKVxuICAgICAgICAgICAgPyAoKGZvcm1hdENvbXBvbmVudE5hbWUodm1bMF0pKSArIFwiLi4uIChcIiArICh2bVsxXSkgKyBcIiByZWN1cnNpdmUgY2FsbHMpXCIpXG4gICAgICAgICAgICA6IGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSk7IH0pXG4gICAgICAgIC5qb2luKCdcXG4nKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFwiXFxuXFxuKGZvdW5kIGluIFwiICsgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiKVwiKVxuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQgPSAwO1xuXG4vKipcbiAqIEEgZGVwIGlzIGFuIG9ic2VydmFibGUgdGhhdCBjYW4gaGF2ZSBtdWx0aXBsZVxuICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAqL1xudmFyIERlcCA9IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrKztcbiAgdGhpcy5zdWJzID0gW107XG59O1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIGFkZFN1YiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yik7XG59O1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIHJlbW92ZVN1YiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yik7XG59O1xuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkge1xuICAgIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0LmFkZERlcCh0aGlzKTtcbiAgfVxufTtcblxuRGVwLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkgKCkge1xuICAvLyBzdGFiaWxpemUgdGhlIHN1YnNjcmliZXIgbGlzdCBmaXJzdFxuICB2YXIgc3VicyA9IHRoaXMuc3Vicy5zbGljZSgpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZmlnLmFzeW5jKSB7XG4gICAgLy8gc3VicyBhcmVuJ3Qgc29ydGVkIGluIHNjaGVkdWxlciBpZiBub3QgcnVubmluZyBhc3luY1xuICAgIC8vIHdlIG5lZWQgdG8gc29ydCB0aGVtIG5vdyB0byBtYWtlIHN1cmUgdGhleSBmaXJlIGluIGNvcnJlY3RcbiAgICAvLyBvcmRlclxuICAgIHN1YnMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pZCAtIGIuaWQ7IH0pO1xuICB9XG4gIGZvciAodmFyIGkgPSAwLCBsID0gc3Vicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBzdWJzW2ldLnVwZGF0ZSgpO1xuICB9XG59O1xuXG4vLyBUaGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyBUaGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIG9ubHkgb25lIHdhdGNoZXJcbi8vIGNhbiBiZSBldmFsdWF0ZWQgYXQgYSB0aW1lLlxuLy8gZml4ZWQgYnkgeHh4eHh4IChudnVlIHNoYXJlZCB2dWV4KVxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbkRlcC5TaGFyZWRPYmplY3QgPSB7fTtcbkRlcC5TaGFyZWRPYmplY3QudGFyZ2V0ID0gbnVsbDtcbkRlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sgPSBbXTtcblxuZnVuY3Rpb24gcHVzaFRhcmdldCAodGFyZ2V0KSB7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sucHVzaCh0YXJnZXQpO1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IHRhcmdldDtcbiAgRGVwLnRhcmdldCA9IHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcG9wVGFyZ2V0ICgpIHtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFjay5wb3AoKTtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrW0RlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2subGVuZ3RoIC0gMV07XG4gIERlcC50YXJnZXQgPSBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldDtcbn1cblxuLyogICovXG5cbnZhciBWTm9kZSA9IGZ1bmN0aW9uIFZOb2RlIChcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgdGV4dCxcbiAgZWxtLFxuICBjb250ZXh0LFxuICBjb21wb25lbnRPcHRpb25zLFxuICBhc3luY0ZhY3Rvcnlcbikge1xuICB0aGlzLnRhZyA9IHRhZztcbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB0aGlzLnRleHQgPSB0ZXh0O1xuICB0aGlzLmVsbSA9IGVsbTtcbiAgdGhpcy5ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5mbkNvbnRleHQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuZm5PcHRpb25zID0gdW5kZWZpbmVkO1xuICB0aGlzLmZuU2NvcGVJZCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5rZXkgPSBkYXRhICYmIGRhdGEua2V5O1xuICB0aGlzLmNvbXBvbmVudE9wdGlvbnMgPSBjb21wb25lbnRPcHRpb25zO1xuICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5yYXcgPSBmYWxzZTtcbiAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICB0aGlzLmlzUm9vdEluc2VydCA9IHRydWU7XG4gIHRoaXMuaXNDb21tZW50ID0gZmFsc2U7XG4gIHRoaXMuaXNDbG9uZWQgPSBmYWxzZTtcbiAgdGhpcy5pc09uY2UgPSBmYWxzZTtcbiAgdGhpcy5hc3luY0ZhY3RvcnkgPSBhc3luY0ZhY3Rvcnk7XG4gIHRoaXMuYXN5bmNNZXRhID0gdW5kZWZpbmVkO1xuICB0aGlzLmlzQXN5bmNQbGFjZWhvbGRlciA9IGZhbHNlO1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgY2hpbGQ6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxuLy8gREVQUkVDQVRFRDogYWxpYXMgZm9yIGNvbXBvbmVudEluc3RhbmNlIGZvciBiYWNrd2FyZHMgY29tcGF0LlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnByb3RvdHlwZUFjY2Vzc29ycy5jaGlsZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmNvbXBvbmVudEluc3RhbmNlXG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVk5vZGUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxudmFyIGNyZWF0ZUVtcHR5Vk5vZGUgPSBmdW5jdGlvbiAodGV4dCkge1xuICBpZiAoIHRleHQgPT09IHZvaWQgMCApIHRleHQgPSAnJztcblxuICB2YXIgbm9kZSA9IG5ldyBWTm9kZSgpO1xuICBub2RlLnRleHQgPSB0ZXh0O1xuICBub2RlLmlzQ29tbWVudCA9IHRydWU7XG4gIHJldHVybiBub2RlXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0Vk5vZGUgKHZhbCkge1xuICByZXR1cm4gbmV3IFZOb2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFN0cmluZyh2YWwpKVxufVxuXG4vLyBvcHRpbWl6ZWQgc2hhbGxvdyBjbG9uZVxuLy8gdXNlZCBmb3Igc3RhdGljIG5vZGVzIGFuZCBzbG90IG5vZGVzIGJlY2F1c2UgdGhleSBtYXkgYmUgcmV1c2VkIGFjcm9zc1xuLy8gbXVsdGlwbGUgcmVuZGVycywgY2xvbmluZyB0aGVtIGF2b2lkcyBlcnJvcnMgd2hlbiBET00gbWFuaXB1bGF0aW9ucyByZWx5XG4vLyBvbiB0aGVpciBlbG0gcmVmZXJlbmNlLlxuZnVuY3Rpb24gY2xvbmVWTm9kZSAodm5vZGUpIHtcbiAgdmFyIGNsb25lZCA9IG5ldyBWTm9kZShcbiAgICB2bm9kZS50YWcsXG4gICAgdm5vZGUuZGF0YSxcbiAgICAvLyAjNzk3NVxuICAgIC8vIGNsb25lIGNoaWxkcmVuIGFycmF5IHRvIGF2b2lkIG11dGF0aW5nIG9yaWdpbmFsIGluIGNhc2Ugb2YgY2xvbmluZ1xuICAgIC8vIGEgY2hpbGQuXG4gICAgdm5vZGUuY2hpbGRyZW4gJiYgdm5vZGUuY2hpbGRyZW4uc2xpY2UoKSxcbiAgICB2bm9kZS50ZXh0LFxuICAgIHZub2RlLmVsbSxcbiAgICB2bm9kZS5jb250ZXh0LFxuICAgIHZub2RlLmNvbXBvbmVudE9wdGlvbnMsXG4gICAgdm5vZGUuYXN5bmNGYWN0b3J5XG4gICk7XG4gIGNsb25lZC5ucyA9IHZub2RlLm5zO1xuICBjbG9uZWQuaXNTdGF0aWMgPSB2bm9kZS5pc1N0YXRpYztcbiAgY2xvbmVkLmtleSA9IHZub2RlLmtleTtcbiAgY2xvbmVkLmlzQ29tbWVudCA9IHZub2RlLmlzQ29tbWVudDtcbiAgY2xvbmVkLmZuQ29udGV4dCA9IHZub2RlLmZuQ29udGV4dDtcbiAgY2xvbmVkLmZuT3B0aW9ucyA9IHZub2RlLmZuT3B0aW9ucztcbiAgY2xvbmVkLmZuU2NvcGVJZCA9IHZub2RlLmZuU2NvcGVJZDtcbiAgY2xvbmVkLmFzeW5jTWV0YSA9IHZub2RlLmFzeW5jTWV0YTtcbiAgY2xvbmVkLmlzQ2xvbmVkID0gdHJ1ZTtcbiAgcmV0dXJuIGNsb25lZFxufVxuXG4vKlxuICogbm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IHBsYXkgd2VsbCB3aXRoXG4gKiBkeW5hbWljYWxseSBhY2Nlc3NpbmcgbWV0aG9kcyBvbiBBcnJheSBwcm90b3R5cGVcbiAqL1xuXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbnZhciBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pO1xuXG52YXIgbWV0aG9kc1RvUGF0Y2ggPSBbXG4gICdwdXNoJyxcbiAgJ3BvcCcsXG4gICdzaGlmdCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZScsXG4gICdzb3J0JyxcbiAgJ3JldmVyc2UnXG5dO1xuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5tZXRob2RzVG9QYXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gIHZhciBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXTtcbiAgZGVmKGFycmF5TWV0aG9kcywgbWV0aG9kLCBmdW5jdGlvbiBtdXRhdG9yICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICB2YXIgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgdmFyIG9iID0gdGhpcy5fX29iX187XG4gICAgdmFyIGluc2VydGVkO1xuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICBjYXNlICdwdXNoJzpcbiAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMik7XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChpbnNlcnRlZCkgeyBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpOyB9XG4gICAgLy8gbm90aWZ5IGNoYW5nZVxuICAgIG9iLmRlcC5ub3RpZnkoKTtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pO1xufSk7XG5cbi8qICAqL1xuXG52YXIgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKTtcblxuLyoqXG4gKiBJbiBzb21lIGNhc2VzIHdlIG1heSB3YW50IHRvIGRpc2FibGUgb2JzZXJ2YXRpb24gaW5zaWRlIGEgY29tcG9uZW50J3NcbiAqIHVwZGF0ZSBjb21wdXRhdGlvbi5cbiAqL1xudmFyIHNob3VsZE9ic2VydmUgPSB0cnVlO1xuXG5mdW5jdGlvbiB0b2dnbGVPYnNlcnZpbmcgKHZhbHVlKSB7XG4gIHNob3VsZE9ic2VydmUgPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBPYnNlcnZlciBjbGFzcyB0aGF0IGlzIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAqIG9iamVjdC4gT25jZSBhdHRhY2hlZCwgdGhlIG9ic2VydmVyIGNvbnZlcnRzIHRoZSB0YXJnZXRcbiAqIG9iamVjdCdzIHByb3BlcnR5IGtleXMgaW50byBnZXR0ZXIvc2V0dGVycyB0aGF0XG4gKiBjb2xsZWN0IGRlcGVuZGVuY2llcyBhbmQgZGlzcGF0Y2ggdXBkYXRlcy5cbiAqL1xudmFyIE9ic2VydmVyID0gZnVuY3Rpb24gT2JzZXJ2ZXIgKHZhbHVlKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgdGhpcy5kZXAgPSBuZXcgRGVwKCk7XG4gIHRoaXMudm1Db3VudCA9IDA7XG4gIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBpZiAoaGFzUHJvdG8pIHtcbiAgICAgIHsvLyBmaXhlZCBieSB4eHh4eHgg5b6u5L+h5bCP56iL5bqP5L2/55SoIHBsdWdpbnMg5LmL5ZCO77yM5pWw57uE5pa55rOV6KKr55u05o6l5oyC6L295Yiw5LqG5pWw57uE5a+56LGh5LiK77yM6ZyA6KaB5omn6KGMIGNvcHlBdWdtZW50IOmAu+i+kVxuICAgICAgICBpZih2YWx1ZS5wdXNoICE9PSB2YWx1ZS5fX3Byb3RvX18ucHVzaCl7XG4gICAgICAgICAgY29weUF1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcywgYXJyYXlLZXlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm90b0F1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29weUF1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcywgYXJyYXlLZXlzKTtcbiAgICB9XG4gICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2Fsayh2YWx1ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogV2FsayB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiB3YWxrIChvYmopIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMShvYmosIGtleXNbaV0pO1xuICB9XG59O1xuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gb2JzZXJ2ZUFycmF5IChpdGVtcykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9ic2VydmUoaXRlbXNbaV0pO1xuICB9XG59O1xuXG4vLyBoZWxwZXJzXG5cbi8qKlxuICogQXVnbWVudCBhIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICovXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQgKHRhcmdldCwgc3JjKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG4gIHRhcmdldC5fX3Byb3RvX18gPSBzcmM7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tcHJvdG8gKi9cbn1cblxuLyoqXG4gKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBjb3B5QXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG9ic2VydmUgKHZhbHVlLCBhc1Jvb3REYXRhKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb2I7XG4gIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgIG9iID0gdmFsdWUuX19vYl9fO1xuICB9IGVsc2UgaWYgKFxuICAgIHNob3VsZE9ic2VydmUgJiZcbiAgICAhaXNTZXJ2ZXJSZW5kZXJpbmcoKSAmJlxuICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkgJiZcbiAgICBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJlxuICAgICF2YWx1ZS5faXNWdWVcbiAgKSB7XG4gICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpO1xuICB9XG4gIGlmIChhc1Jvb3REYXRhICYmIG9iKSB7XG4gICAgb2Iudm1Db3VudCsrO1xuICB9XG4gIHJldHVybiBvYlxufVxuXG4vKipcbiAqIERlZmluZSBhIHJlYWN0aXZlIHByb3BlcnR5IG9uIGFuIE9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUkJDEgKFxuICBvYmosXG4gIGtleSxcbiAgdmFsLFxuICBjdXN0b21TZXR0ZXIsXG4gIHNoYWxsb3dcbikge1xuICB2YXIgZGVwID0gbmV3IERlcCgpO1xuXG4gIHZhciBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gIHZhciBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXQ7XG4gIHZhciBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG4gIGlmICgoIWdldHRlciB8fCBzZXR0ZXIpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICB2YWwgPSBvYmpba2V5XTtcbiAgfVxuXG4gIHZhciBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZSh2YWwpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlR2V0dGVyICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgICAgIGRlcC5kZXBlbmQoKTtcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGRlcGVuZEFycmF5KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSB8fCAobmV3VmFsICE9PSBuZXdWYWwgJiYgdmFsdWUgIT09IHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjdXN0b21TZXR0ZXIpIHtcbiAgICAgICAgY3VzdG9tU2V0dGVyKCk7XG4gICAgICB9XG4gICAgICAvLyAjNzk4MTogZm9yIGFjY2Vzc29yIHByb3BlcnRpZXMgd2l0aG91dCBzZXR0ZXJcbiAgICAgIGlmIChnZXR0ZXIgJiYgIXNldHRlcikgeyByZXR1cm4gfVxuICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZShuZXdWYWwpO1xuICAgICAgZGVwLm5vdGlmeSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICovXG5mdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWwpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldCkpXG4gICkge1xuICAgIHdhcm4oKFwiQ2Fubm90IHNldCByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyAoKHRhcmdldCkpKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XG4gICAgdGFyZ2V0Lmxlbmd0aCA9IE1hdGgubWF4KHRhcmdldC5sZW5ndGgsIGtleSk7XG4gICAgdGFyZ2V0LnNwbGljZShrZXksIDEsIHZhbCk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmIChrZXkgaW4gdGFyZ2V0ICYmICEoa2V5IGluIE9iamVjdC5wcm90b3R5cGUpKSB7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIHZhciBvYiA9ICh0YXJnZXQpLl9fb2JfXztcbiAgaWYgKHRhcmdldC5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ0F2b2lkIGFkZGluZyByZWFjdGl2ZSBwcm9wZXJ0aWVzIHRvIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJ2F0IHJ1bnRpbWUgLSBkZWNsYXJlIGl0IHVwZnJvbnQgaW4gdGhlIGRhdGEgb3B0aW9uLidcbiAgICApO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBpZiAoIW9iKSB7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGRlZmluZVJlYWN0aXZlJCQxKG9iLnZhbHVlLCBrZXksIHZhbCk7XG4gIG9iLmRlcC5ub3RpZnkoKTtcbiAgcmV0dXJuIHZhbFxufVxuXG4vKipcbiAqIERlbGV0ZSBhIHByb3BlcnR5IGFuZCB0cmlnZ2VyIGNoYW5nZSBpZiBuZWNlc3NhcnkuXG4gKi9cbmZ1bmN0aW9uIGRlbCAodGFyZ2V0LCBrZXkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldCkpXG4gICkge1xuICAgIHdhcm4oKFwiQ2Fubm90IGRlbGV0ZSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyAoKHRhcmdldCkpKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XG4gICAgdGFyZ2V0LnNwbGljZShrZXksIDEpO1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYiA9ICh0YXJnZXQpLl9fb2JfXztcbiAgaWYgKHRhcmdldC5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ0F2b2lkIGRlbGV0aW5nIHByb3BlcnRpZXMgb24gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnLSBqdXN0IHNldCBpdCB0byBudWxsLidcbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIGlmICghaGFzT3duKHRhcmdldCwga2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgaWYgKCFvYikge1xuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKTtcbn1cblxuLyoqXG4gKiBDb2xsZWN0IGRlcGVuZGVuY2llcyBvbiBhcnJheSBlbGVtZW50cyB3aGVuIHRoZSBhcnJheSBpcyB0b3VjaGVkLCBzaW5jZVxuICogd2UgY2Fubm90IGludGVyY2VwdCBhcnJheSBlbGVtZW50IGFjY2VzcyBsaWtlIHByb3BlcnR5IGdldHRlcnMuXG4gKi9cbmZ1bmN0aW9uIGRlcGVuZEFycmF5ICh2YWx1ZSkge1xuICBmb3IgKHZhciBlID0gKHZvaWQgMCksIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZSA9IHZhbHVlW2ldO1xuICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgICBkZXBlbmRBcnJheShlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogT3B0aW9uIG92ZXJ3cml0aW5nIHN0cmF0ZWdpZXMgYXJlIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZVxuICogaG93IHRvIG1lcmdlIGEgcGFyZW50IG9wdGlvbiB2YWx1ZSBhbmQgYSBjaGlsZCBvcHRpb25cbiAqIHZhbHVlIGludG8gdGhlIGZpbmFsIHZhbHVlLlxuICovXG52YXIgc3RyYXRzID0gY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcblxuLyoqXG4gKiBPcHRpb25zIHdpdGggcmVzdHJpY3Rpb25zXG4gKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHN0cmF0cy5lbCA9IHN0cmF0cy5wcm9wc0RhdGEgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCwgdm0sIGtleSkge1xuICAgIGlmICghdm0pIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwib3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBjYW4gb25seSBiZSB1c2VkIGR1cmluZyBpbnN0YW5jZSBcIiArXG4gICAgICAgICdjcmVhdGlvbiB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkLidcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0U3RyYXQocGFyZW50LCBjaGlsZClcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdGhhdCByZWN1cnNpdmVseSBtZXJnZXMgdHdvIGRhdGEgb2JqZWN0cyB0b2dldGhlci5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VEYXRhICh0bywgZnJvbSkge1xuICBpZiAoIWZyb20pIHsgcmV0dXJuIHRvIH1cbiAgdmFyIGtleSwgdG9WYWwsIGZyb21WYWw7XG5cbiAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICA/IFJlZmxlY3Qub3duS2V5cyhmcm9tKVxuICAgIDogT2JqZWN0LmtleXMoZnJvbSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICAvLyBpbiBjYXNlIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBvYnNlcnZlZC4uLlxuICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7IGNvbnRpbnVlIH1cbiAgICB0b1ZhbCA9IHRvW2tleV07XG4gICAgZnJvbVZhbCA9IGZyb21ba2V5XTtcbiAgICBpZiAoIWhhc093bih0bywga2V5KSkge1xuICAgICAgc2V0KHRvLCBrZXksIGZyb21WYWwpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0b1ZhbCAhPT0gZnJvbVZhbCAmJlxuICAgICAgaXNQbGFpbk9iamVjdCh0b1ZhbCkgJiZcbiAgICAgIGlzUGxhaW5PYmplY3QoZnJvbVZhbClcbiAgICApIHtcbiAgICAgIG1lcmdlRGF0YSh0b1ZhbCwgZnJvbVZhbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIERhdGFcbiAqL1xuZnVuY3Rpb24gbWVyZ2VEYXRhT3JGbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIC8vIGluIGEgVnVlLmV4dGVuZCBtZXJnZSwgYm90aCBzaG91bGQgYmUgZnVuY3Rpb25zXG4gICAgaWYgKCFjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgcmV0dXJuIGNoaWxkVmFsXG4gICAgfVxuICAgIC8vIHdoZW4gcGFyZW50VmFsICYgY2hpbGRWYWwgYXJlIGJvdGggcHJlc2VudCxcbiAgICAvLyB3ZSBuZWVkIHRvIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgICAvLyBtZXJnZWQgcmVzdWx0IG9mIGJvdGggZnVuY3Rpb25zLi4uIG5vIG5lZWQgdG9cbiAgICAvLyBjaGVjayBpZiBwYXJlbnRWYWwgaXMgYSBmdW5jdGlvbiBoZXJlIGJlY2F1c2VcbiAgICAvLyBpdCBoYXMgdG8gYmUgYSBmdW5jdGlvbiB0byBwYXNzIHByZXZpb3VzIG1lcmdlcy5cbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkRGF0YUZuICgpIHtcbiAgICAgIHJldHVybiBtZXJnZURhdGEoXG4gICAgICAgIHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkVmFsLmNhbGwodGhpcywgdGhpcykgOiBjaGlsZFZhbCxcbiAgICAgICAgdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHBhcmVudFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogcGFyZW50VmFsXG4gICAgICApXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbiAoKSB7XG4gICAgICAvLyBpbnN0YW5jZSBtZXJnZVxuICAgICAgdmFyIGluc3RhbmNlRGF0YSA9IHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGNoaWxkVmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IGNoaWxkVmFsO1xuICAgICAgdmFyIGRlZmF1bHREYXRhID0gdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHBhcmVudFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgOiBwYXJlbnRWYWw7XG4gICAgICBpZiAoaW5zdGFuY2VEYXRhKSB7XG4gICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0RGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zdHJhdHMuZGF0YSA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgaWYgKGNoaWxkVmFsICYmIHR5cGVvZiBjaGlsZFZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnVGhlIFwiZGF0YVwiIG9wdGlvbiBzaG91bGQgYmUgYSBmdW5jdGlvbiAnICtcbiAgICAgICAgJ3RoYXQgcmV0dXJucyBhIHBlci1pbnN0YW5jZSB2YWx1ZSBpbiBjb21wb25lbnQgJyArXG4gICAgICAgICdkZWZpbml0aW9ucy4nLFxuICAgICAgICB2bVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsKVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pXG59O1xuXG4vKipcbiAqIEhvb2tzIGFuZCBwcm9wcyBhcmUgbWVyZ2VkIGFzIGFycmF5cy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VIb29rIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbFxuKSB7XG4gIHZhciByZXMgPSBjaGlsZFZhbFxuICAgID8gcGFyZW50VmFsXG4gICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXG4gICAgICAgID8gY2hpbGRWYWxcbiAgICAgICAgOiBbY2hpbGRWYWxdXG4gICAgOiBwYXJlbnRWYWw7XG4gIHJldHVybiByZXNcbiAgICA/IGRlZHVwZUhvb2tzKHJlcylcbiAgICA6IHJlc1xufVxuXG5mdW5jdGlvbiBkZWR1cGVIb29rcyAoaG9va3MpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlcy5pbmRleE9mKGhvb2tzW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5MSUZFQ1lDTEVfSE9PS1MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICBzdHJhdHNbaG9va10gPSBtZXJnZUhvb2s7XG59KTtcblxuLyoqXG4gKiBBc3NldHNcbiAqXG4gKiBXaGVuIGEgdm0gaXMgcHJlc2VudCAoaW5zdGFuY2UgY3JlYXRpb24pLCB3ZSBuZWVkIHRvIGRvXG4gKiBhIHRocmVlLXdheSBtZXJnZSBiZXR3ZWVuIGNvbnN0cnVjdG9yIG9wdGlvbnMsIGluc3RhbmNlXG4gKiBvcHRpb25zIGFuZCBwYXJlbnQgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VBc3NldHMgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpO1xuICBpZiAoY2hpbGRWYWwpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICAgIHJldHVybiBleHRlbmQocmVzLCBjaGlsZFZhbClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBzdHJhdHNbdHlwZSArICdzJ10gPSBtZXJnZUFzc2V0cztcbn0pO1xuXG4vKipcbiAqIFdhdGNoZXJzLlxuICpcbiAqIFdhdGNoZXJzIGhhc2hlcyBzaG91bGQgbm90IG92ZXJ3cml0ZSBvbmVcbiAqIGFub3RoZXIsIHNvIHdlIG1lcmdlIHRoZW0gYXMgYXJyYXlzLlxuICovXG5zdHJhdHMud2F0Y2ggPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICAvLyB3b3JrIGFyb3VuZCBGaXJlZm94J3MgT2JqZWN0LnByb3RvdHlwZS53YXRjaC4uLlxuICBpZiAocGFyZW50VmFsID09PSBuYXRpdmVXYXRjaCkgeyBwYXJlbnRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgaWYgKGNoaWxkVmFsID09PSBuYXRpdmVXYXRjaCkgeyBjaGlsZFZhbCA9IHVuZGVmaW5lZDsgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjaGlsZFZhbCkgeyByZXR1cm4gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCkgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSB7fTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgZm9yICh2YXIga2V5JDEgaW4gY2hpbGRWYWwpIHtcbiAgICB2YXIgcGFyZW50ID0gcmV0W2tleSQxXTtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZFZhbFtrZXkkMV07XG4gICAgaWYgKHBhcmVudCAmJiAhQXJyYXkuaXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSBbcGFyZW50XTtcbiAgICB9XG4gICAgcmV0W2tleSQxXSA9IHBhcmVudFxuICAgICAgPyBwYXJlbnQuY29uY2F0KGNoaWxkKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkKSA/IGNoaWxkIDogW2NoaWxkXTtcbiAgfVxuICByZXR1cm4gcmV0XG59O1xuXG4vKipcbiAqIE90aGVyIG9iamVjdCBoYXNoZXMuXG4gKi9cbnN0cmF0cy5wcm9wcyA9XG5zdHJhdHMubWV0aG9kcyA9XG5zdHJhdHMuaW5qZWN0ID1cbnN0cmF0cy5jb21wdXRlZCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIGlmIChjaGlsZFZhbCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGlmIChjaGlsZFZhbCkgeyBleHRlbmQocmV0LCBjaGlsZFZhbCk7IH1cbiAgcmV0dXJuIHJldFxufTtcbnN0cmF0cy5wcm92aWRlID0gbWVyZ2VEYXRhT3JGbjtcblxuLyoqXG4gKiBEZWZhdWx0IHN0cmF0ZWd5LlxuICovXG52YXIgZGVmYXVsdFN0cmF0ID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgcmV0dXJuIGNoaWxkVmFsID09PSB1bmRlZmluZWRcbiAgICA/IHBhcmVudFZhbFxuICAgIDogY2hpbGRWYWxcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgY29tcG9uZW50IG5hbWVzXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ29tcG9uZW50cyAob3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgdmFsaWRhdGVDb21wb25lbnROYW1lKGtleSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb21wb25lbnROYW1lIChuYW1lKSB7XG4gIGlmICghbmV3IFJlZ0V4cCgoXCJeW2EtekEtWl1bXFxcXC1cXFxcLjAtOV9cIiArICh1bmljb2RlUmVnRXhwLnNvdXJjZSkgKyBcIl0qJFwiKSkudGVzdChuYW1lKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBjb21wb25lbnQgbmFtZTogXCInICsgbmFtZSArICdcIi4gQ29tcG9uZW50IG5hbWVzICcgK1xuICAgICAgJ3Nob3VsZCBjb25mb3JtIHRvIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUgaW4gaHRtbDUgc3BlY2lmaWNhdGlvbi4nXG4gICAgKTtcbiAgfVxuICBpZiAoaXNCdWlsdEluVGFnKG5hbWUpIHx8IGNvbmZpZy5pc1Jlc2VydmVkVGFnKG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdEbyBub3QgdXNlIGJ1aWx0LWluIG9yIHJlc2VydmVkIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgK1xuICAgICAgJ2lkOiAnICsgbmFtZVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBFbnN1cmUgYWxsIHByb3BzIG9wdGlvbiBzeW50YXggYXJlIG5vcm1hbGl6ZWQgaW50byB0aGVcbiAqIE9iamVjdC1iYXNlZCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzIChvcHRpb25zLCB2bSkge1xuICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoIXByb3BzKSB7IHJldHVybiB9XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGksIHZhbCwgbmFtZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YWwgPSBwcm9wc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lID0gY2FtZWxpemUodmFsKTtcbiAgICAgICAgcmVzW25hbWVdID0geyB0eXBlOiBudWxsIH07XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybigncHJvcHMgbXVzdCBiZSBzdHJpbmdzIHdoZW4gdXNpbmcgYXJyYXkgc3ludGF4LicpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgIG5hbWUgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgcmVzW25hbWVdID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gdmFsXG4gICAgICAgIDogeyB0eXBlOiB2YWwgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwicHJvcHNcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUocHJvcHMpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIG9wdGlvbnMucHJvcHMgPSByZXM7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGFsbCBpbmplY3Rpb25zIGludG8gT2JqZWN0LWJhc2VkIGZvcm1hdFxuICovXG5mdW5jdGlvbiBub3JtYWxpemVJbmplY3QgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBpbmplY3QgPSBvcHRpb25zLmluamVjdDtcbiAgaWYgKCFpbmplY3QpIHsgcmV0dXJuIH1cbiAgdmFyIG5vcm1hbGl6ZWQgPSBvcHRpb25zLmluamVjdCA9IHt9O1xuICBpZiAoQXJyYXkuaXNBcnJheShpbmplY3QpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vcm1hbGl6ZWRbaW5qZWN0W2ldXSA9IHsgZnJvbTogaW5qZWN0W2ldIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGtleSBpbiBpbmplY3QpIHtcbiAgICAgIHZhciB2YWwgPSBpbmplY3Rba2V5XTtcbiAgICAgIG5vcm1hbGl6ZWRba2V5XSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IGV4dGVuZCh7IGZyb206IGtleSB9LCB2YWwpXG4gICAgICAgIDogeyBmcm9tOiB2YWwgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiaW5qZWN0XFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKGluamVjdCkpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgcmF3IGZ1bmN0aW9uIGRpcmVjdGl2ZXMgaW50byBvYmplY3QgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzIChvcHRpb25zKSB7XG4gIHZhciBkaXJzID0gb3B0aW9ucy5kaXJlY3RpdmVzO1xuICBpZiAoZGlycykge1xuICAgIGZvciAodmFyIGtleSBpbiBkaXJzKSB7XG4gICAgICB2YXIgZGVmJCQxID0gZGlyc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGlyc1trZXldID0geyBiaW5kOiBkZWYkJDEsIHVwZGF0ZTogZGVmJCQxIH07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydE9iamVjdFR5cGUgKG5hbWUsIHZhbHVlLCB2bSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJcIiArIG5hbWUgKyBcIlxcXCI6IGV4cGVjdGVkIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZSh2YWx1ZSkpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXJnZSB0d28gb3B0aW9uIG9iamVjdHMgaW50byBhIG5ldyBvbmUuXG4gKiBDb3JlIHV0aWxpdHkgdXNlZCBpbiBib3RoIGluc3RhbnRpYXRpb24gYW5kIGluaGVyaXRhbmNlLlxuICovXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnMgKFxuICBwYXJlbnQsXG4gIGNoaWxkLFxuICB2bVxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2tDb21wb25lbnRzKGNoaWxkKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjaGlsZCA9IGNoaWxkLm9wdGlvbnM7XG4gIH1cblxuICBub3JtYWxpemVQcm9wcyhjaGlsZCwgdm0pO1xuICBub3JtYWxpemVJbmplY3QoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplRGlyZWN0aXZlcyhjaGlsZCk7XG5cbiAgLy8gQXBwbHkgZXh0ZW5kcyBhbmQgbWl4aW5zIG9uIHRoZSBjaGlsZCBvcHRpb25zLFxuICAvLyBidXQgb25seSBpZiBpdCBpcyBhIHJhdyBvcHRpb25zIG9iamVjdCB0aGF0IGlzbid0XG4gIC8vIHRoZSByZXN1bHQgb2YgYW5vdGhlciBtZXJnZU9wdGlvbnMgY2FsbC5cbiAgLy8gT25seSBtZXJnZWQgb3B0aW9ucyBoYXMgdGhlIF9iYXNlIHByb3BlcnR5LlxuICBpZiAoIWNoaWxkLl9iYXNlKSB7XG4gICAgaWYgKGNoaWxkLmV4dGVuZHMpIHtcbiAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLmV4dGVuZHMsIHZtKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLm1peGlucykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZC5taXhpbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLm1peGluc1tpXSwgdm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvcHRpb25zID0ge307XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIHBhcmVudCkge1xuICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgfVxuICBmb3IgKGtleSBpbiBjaGlsZCkge1xuICAgIGlmICghaGFzT3duKHBhcmVudCwga2V5KSkge1xuICAgICAgbWVyZ2VGaWVsZChrZXkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtZXJnZUZpZWxkIChrZXkpIHtcbiAgICB2YXIgc3RyYXQgPSBzdHJhdHNba2V5XSB8fCBkZWZhdWx0U3RyYXQ7XG4gICAgb3B0aW9uc1trZXldID0gc3RyYXQocGFyZW50W2tleV0sIGNoaWxkW2tleV0sIHZtLCBrZXkpO1xuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbi8qKlxuICogUmVzb2x2ZSBhbiBhc3NldC5cbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBiZWNhdXNlIGNoaWxkIGluc3RhbmNlcyBuZWVkIGFjY2Vzc1xuICogdG8gYXNzZXRzIGRlZmluZWQgaW4gaXRzIGFuY2VzdG9yIGNoYWluLlxuICovXG5mdW5jdGlvbiByZXNvbHZlQXNzZXQgKFxuICBvcHRpb25zLFxuICB0eXBlLFxuICBpZCxcbiAgd2Fybk1pc3Npbmdcbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgYXNzZXRzID0gb3B0aW9uc1t0eXBlXTtcbiAgLy8gY2hlY2sgbG9jYWwgcmVnaXN0cmF0aW9uIHZhcmlhdGlvbnMgZmlyc3RcbiAgaWYgKGhhc093bihhc3NldHMsIGlkKSkgeyByZXR1cm4gYXNzZXRzW2lkXSB9XG4gIHZhciBjYW1lbGl6ZWRJZCA9IGNhbWVsaXplKGlkKTtcbiAgaWYgKGhhc093bihhc3NldHMsIGNhbWVsaXplZElkKSkgeyByZXR1cm4gYXNzZXRzW2NhbWVsaXplZElkXSB9XG4gIHZhciBQYXNjYWxDYXNlSWQgPSBjYXBpdGFsaXplKGNhbWVsaXplZElkKTtcbiAgaWYgKGhhc093bihhc3NldHMsIFBhc2NhbENhc2VJZCkpIHsgcmV0dXJuIGFzc2V0c1tQYXNjYWxDYXNlSWRdIH1cbiAgLy8gZmFsbGJhY2sgdG8gcHJvdG90eXBlIGNoYWluXG4gIHZhciByZXMgPSBhc3NldHNbaWRdIHx8IGFzc2V0c1tjYW1lbGl6ZWRJZF0gfHwgYXNzZXRzW1Bhc2NhbENhc2VJZF07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm5NaXNzaW5nICYmICFyZXMpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ZhaWxlZCB0byByZXNvbHZlICcgKyB0eXBlLnNsaWNlKDAsIC0xKSArICc6ICcgKyBpZCxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3AgKFxuICBrZXksXG4gIHByb3BPcHRpb25zLFxuICBwcm9wc0RhdGEsXG4gIHZtXG4pIHtcbiAgdmFyIHByb3AgPSBwcm9wT3B0aW9uc1trZXldO1xuICB2YXIgYWJzZW50ID0gIWhhc093bihwcm9wc0RhdGEsIGtleSk7XG4gIHZhciB2YWx1ZSA9IHByb3BzRGF0YVtrZXldO1xuICAvLyBib29sZWFuIGNhc3RpbmdcbiAgdmFyIGJvb2xlYW5JbmRleCA9IGdldFR5cGVJbmRleChCb29sZWFuLCBwcm9wLnR5cGUpO1xuICBpZiAoYm9vbGVhbkluZGV4ID4gLTEpIHtcbiAgICBpZiAoYWJzZW50ICYmICFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gaHlwaGVuYXRlKGtleSkpIHtcbiAgICAgIC8vIG9ubHkgY2FzdCBlbXB0eSBzdHJpbmcgLyBzYW1lIG5hbWUgdG8gYm9vbGVhbiBpZlxuICAgICAgLy8gYm9vbGVhbiBoYXMgaGlnaGVyIHByaW9yaXR5XG4gICAgICB2YXIgc3RyaW5nSW5kZXggPSBnZXRUeXBlSW5kZXgoU3RyaW5nLCBwcm9wLnR5cGUpO1xuICAgICAgaWYgKHN0cmluZ0luZGV4IDwgMCB8fCBib29sZWFuSW5kZXggPCBzdHJpbmdJbmRleCkge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNoZWNrIGRlZmF1bHQgdmFsdWVcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICB2YWx1ZSA9IGdldFByb3BEZWZhdWx0VmFsdWUodm0sIHByb3AsIGtleSk7XG4gICAgLy8gc2luY2UgdGhlIGRlZmF1bHQgdmFsdWUgaXMgYSBmcmVzaCBjb3B5LFxuICAgIC8vIG1ha2Ugc3VyZSB0byBvYnNlcnZlIGl0LlxuICAgIHZhciBwcmV2U2hvdWxkT2JzZXJ2ZSA9IHNob3VsZE9ic2VydmU7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIG9ic2VydmUodmFsdWUpO1xuICAgIHRvZ2dsZU9ic2VydmluZyhwcmV2U2hvdWxkT2JzZXJ2ZSk7XG4gIH1cbiAgaWYgKFxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAvLyBza2lwIHZhbGlkYXRpb24gZm9yIHdlZXggcmVjeWNsZS1saXN0IGNoaWxkIGNvbXBvbmVudCBwcm9wc1xuICAgICEoZmFsc2UpXG4gICkge1xuICAgIGFzc2VydFByb3AocHJvcCwga2V5LCB2YWx1ZSwgdm0sIGFic2VudCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcHJvcC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcERlZmF1bHRWYWx1ZSAodm0sIHByb3AsIGtleSkge1xuICAvLyBubyBkZWZhdWx0LCByZXR1cm4gdW5kZWZpbmVkXG4gIGlmICghaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgdmFyIGRlZiA9IHByb3AuZGVmYXVsdDtcbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1mYWN0b3J5IGRlZmF1bHRzIGZvciBPYmplY3QgJiBBcnJheVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc09iamVjdChkZWYpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGRlZmF1bHQgdmFsdWUgZm9yIHByb3AgXCInICsga2V5ICsgJ1wiOiAnICtcbiAgICAgICdQcm9wcyB3aXRoIHR5cGUgT2JqZWN0L0FycmF5IG11c3QgdXNlIGEgZmFjdG9yeSBmdW5jdGlvbiAnICtcbiAgICAgICd0byByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUuJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyB0aGUgcmF3IHByb3AgdmFsdWUgd2FzIGFsc28gdW5kZWZpbmVkIGZyb20gcHJldmlvdXMgcmVuZGVyLFxuICAvLyByZXR1cm4gcHJldmlvdXMgZGVmYXVsdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB3YXRjaGVyIHRyaWdnZXJcbiAgaWYgKHZtICYmIHZtLiRvcHRpb25zLnByb3BzRGF0YSAmJlxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YVtrZXldID09PSB1bmRlZmluZWQgJiZcbiAgICB2bS5fcHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHJldHVybiB2bS5fcHJvcHNba2V5XVxuICB9XG4gIC8vIGNhbGwgZmFjdG9yeSBmdW5jdGlvbiBmb3Igbm9uLUZ1bmN0aW9uIHR5cGVzXG4gIC8vIGEgdmFsdWUgaXMgRnVuY3Rpb24gaWYgaXRzIHByb3RvdHlwZSBpcyBmdW5jdGlvbiBldmVuIGFjcm9zcyBkaWZmZXJlbnQgZXhlY3V0aW9uIGNvbnRleHRcbiAgcmV0dXJuIHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgJiYgZ2V0VHlwZShwcm9wLnR5cGUpICE9PSAnRnVuY3Rpb24nXG4gICAgPyBkZWYuY2FsbCh2bSlcbiAgICA6IGRlZlxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGEgcHJvcCBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gYXNzZXJ0UHJvcCAoXG4gIHByb3AsXG4gIG5hbWUsXG4gIHZhbHVlLFxuICB2bSxcbiAgYWJzZW50XG4pIHtcbiAgaWYgKHByb3AucmVxdWlyZWQgJiYgYWJzZW50KSB7XG4gICAgd2FybihcbiAgICAgICdNaXNzaW5nIHJlcXVpcmVkIHByb3A6IFwiJyArIG5hbWUgKyAnXCInLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsICYmICFwcm9wLnJlcXVpcmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHR5cGUgPSBwcm9wLnR5cGU7XG4gIHZhciB2YWxpZCA9ICF0eXBlIHx8IHR5cGUgPT09IHRydWU7XG4gIHZhciBleHBlY3RlZFR5cGVzID0gW107XG4gIGlmICh0eXBlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlID0gW3R5cGVdO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGUubGVuZ3RoICYmICF2YWxpZDsgaSsrKSB7XG4gICAgICB2YXIgYXNzZXJ0ZWRUeXBlID0gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZVtpXSk7XG4gICAgICBleHBlY3RlZFR5cGVzLnB1c2goYXNzZXJ0ZWRUeXBlLmV4cGVjdGVkVHlwZSB8fCAnJyk7XG4gICAgICB2YWxpZCA9IGFzc2VydGVkVHlwZS52YWxpZDtcbiAgICB9XG4gIH1cblxuICBpZiAoIXZhbGlkKSB7XG4gICAgd2FybihcbiAgICAgIGdldEludmFsaWRUeXBlTWVzc2FnZShuYW1lLCB2YWx1ZSwgZXhwZWN0ZWRUeXBlcyksXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHZhbGlkYXRvciA9IHByb3AudmFsaWRhdG9yO1xuICBpZiAodmFsaWRhdG9yKSB7XG4gICAgaWYgKCF2YWxpZGF0b3IodmFsdWUpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnSW52YWxpZCBwcm9wOiBjdXN0b20gdmFsaWRhdG9yIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcIicgKyBuYW1lICsgJ1wiLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG52YXIgc2ltcGxlQ2hlY2tSRSA9IC9eKFN0cmluZ3xOdW1iZXJ8Qm9vbGVhbnxGdW5jdGlvbnxTeW1ib2wpJC87XG5cbmZ1bmN0aW9uIGFzc2VydFR5cGUgKHZhbHVlLCB0eXBlKSB7XG4gIHZhciB2YWxpZDtcbiAgdmFyIGV4cGVjdGVkVHlwZSA9IGdldFR5cGUodHlwZSk7XG4gIGlmIChzaW1wbGVDaGVja1JFLnRlc3QoZXhwZWN0ZWRUeXBlKSkge1xuICAgIHZhciB0ID0gdHlwZW9mIHZhbHVlO1xuICAgIHZhbGlkID0gdCA9PT0gZXhwZWN0ZWRUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gZm9yIHByaW1pdGl2ZSB3cmFwcGVyIG9iamVjdHNcbiAgICBpZiAoIXZhbGlkICYmIHQgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnT2JqZWN0Jykge1xuICAgIHZhbGlkID0gaXNQbGFpbk9iamVjdCh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnQXJyYXknKSB7XG4gICAgdmFsaWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbGlkOiB2YWxpZCxcbiAgICBleHBlY3RlZFR5cGU6IGV4cGVjdGVkVHlwZVxuICB9XG59XG5cbi8qKlxuICogVXNlIGZ1bmN0aW9uIHN0cmluZyBuYW1lIHRvIGNoZWNrIGJ1aWx0LWluIHR5cGVzLFxuICogYmVjYXVzZSBhIHNpbXBsZSBlcXVhbGl0eSBjaGVjayB3aWxsIGZhaWwgd2hlbiBydW5uaW5nXG4gKiBhY3Jvc3MgZGlmZmVyZW50IHZtcyAvIGlmcmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGdldFR5cGUgKGZuKSB7XG4gIHZhciBtYXRjaCA9IGZuICYmIGZuLnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogJydcbn1cblxuZnVuY3Rpb24gaXNTYW1lVHlwZSAoYSwgYikge1xuICByZXR1cm4gZ2V0VHlwZShhKSA9PT0gZ2V0VHlwZShiKVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlSW5kZXggKHR5cGUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVHlwZXMpKSB7XG4gICAgcmV0dXJuIGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlcywgdHlwZSkgPyAwIDogLTFcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwZWN0ZWRUeXBlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXNbaV0sIHR5cGUpKSB7XG4gICAgICByZXR1cm4gaVxuICAgIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gZ2V0SW52YWxpZFR5cGVNZXNzYWdlIChuYW1lLCB2YWx1ZSwgZXhwZWN0ZWRUeXBlcykge1xuICB2YXIgbWVzc2FnZSA9IFwiSW52YWxpZCBwcm9wOiB0eXBlIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLlwiICtcbiAgICBcIiBFeHBlY3RlZCBcIiArIChleHBlY3RlZFR5cGVzLm1hcChjYXBpdGFsaXplKS5qb2luKCcsICcpKTtcbiAgdmFyIGV4cGVjdGVkVHlwZSA9IGV4cGVjdGVkVHlwZXNbMF07XG4gIHZhciByZWNlaXZlZFR5cGUgPSB0b1Jhd1R5cGUodmFsdWUpO1xuICB2YXIgZXhwZWN0ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIGV4cGVjdGVkVHlwZSk7XG4gIHZhciByZWNlaXZlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgcmVjZWl2ZWRUeXBlKTtcbiAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IGV4cGVjdGVkIHZhbHVlXG4gIGlmIChleHBlY3RlZFR5cGVzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgaXNFeHBsaWNhYmxlKGV4cGVjdGVkVHlwZSkgJiZcbiAgICAgICFpc0Jvb2xlYW4oZXhwZWN0ZWRUeXBlLCByZWNlaXZlZFR5cGUpKSB7XG4gICAgbWVzc2FnZSArPSBcIiB3aXRoIHZhbHVlIFwiICsgZXhwZWN0ZWRWYWx1ZTtcbiAgfVxuICBtZXNzYWdlICs9IFwiLCBnb3QgXCIgKyByZWNlaXZlZFR5cGUgKyBcIiBcIjtcbiAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IHJlY2VpdmVkIHZhbHVlXG4gIGlmIChpc0V4cGxpY2FibGUocmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gXCJ3aXRoIHZhbHVlIFwiICsgcmVjZWl2ZWRWYWx1ZSArIFwiLlwiO1xuICB9XG4gIHJldHVybiBtZXNzYWdlXG59XG5cbmZ1bmN0aW9uIHN0eWxlVmFsdWUgKHZhbHVlLCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSAnU3RyaW5nJykge1xuICAgIHJldHVybiAoXCJcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdOdW1iZXInKSB7XG4gICAgcmV0dXJuIChcIlwiICsgKE51bWJlcih2YWx1ZSkpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXCJcIiArIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzRXhwbGljYWJsZSAodmFsdWUpIHtcbiAgdmFyIGV4cGxpY2l0VHlwZXMgPSBbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbiddO1xuICByZXR1cm4gZXhwbGljaXRUeXBlcy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBlbGVtOyB9KVxufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4gKCkge1xuICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gIHJldHVybiBhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0udG9Mb3dlckNhc2UoKSA9PT0gJ2Jvb2xlYW4nOyB9KVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgLy8gRGVhY3RpdmF0ZSBkZXBzIHRyYWNraW5nIHdoaWxlIHByb2Nlc3NpbmcgZXJyb3IgaGFuZGxlciB0byBhdm9pZCBwb3NzaWJsZSBpbmZpbml0ZSByZW5kZXJpbmcuXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZXgvaXNzdWVzLzE1MDVcbiAgcHVzaFRhcmdldCgpO1xuICB0cnkge1xuICAgIGlmICh2bSkge1xuICAgICAgdmFyIGN1ciA9IHZtO1xuICAgICAgd2hpbGUgKChjdXIgPSBjdXIuJHBhcmVudCkpIHtcbiAgICAgICAgdmFyIGhvb2tzID0gY3VyLiRvcHRpb25zLmVycm9yQ2FwdHVyZWQ7XG4gICAgICAgIGlmIChob29rcykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBjYXB0dXJlID0gaG9va3NbaV0uY2FsbChjdXIsIGVyciwgdm0sIGluZm8pID09PSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKGNhcHR1cmUpIHsgcmV0dXJuIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgZ2xvYmFsSGFuZGxlRXJyb3IoZSwgY3VyLCAnZXJyb3JDYXB0dXJlZCBob29rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGdsb2JhbEhhbmRsZUVycm9yKGVyciwgdm0sIGluZm8pO1xuICB9IGZpbmFsbHkge1xuICAgIHBvcFRhcmdldCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZVdpdGhFcnJvckhhbmRsaW5nIChcbiAgaGFuZGxlcixcbiAgY29udGV4dCxcbiAgYXJncyxcbiAgdm0sXG4gIGluZm9cbikge1xuICB2YXIgcmVzO1xuICB0cnkge1xuICAgIHJlcyA9IGFyZ3MgPyBoYW5kbGVyLmFwcGx5KGNvbnRleHQsIGFyZ3MpIDogaGFuZGxlci5jYWxsKGNvbnRleHQpO1xuICAgIGlmIChyZXMgJiYgIXJlcy5faXNWdWUgJiYgaXNQcm9taXNlKHJlcykgJiYgIXJlcy5faGFuZGxlZCkge1xuICAgICAgcmVzLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyArIFwiIChQcm9taXNlL2FzeW5jKVwiKTsgfSk7XG4gICAgICAvLyBpc3N1ZSAjOTUxMVxuICAgICAgLy8gYXZvaWQgY2F0Y2ggdHJpZ2dlcmluZyBtdWx0aXBsZSB0aW1lcyB3aGVuIG5lc3RlZCBjYWxsc1xuICAgICAgcmVzLl9oYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnbG9iYWxIYW5kbGVFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICBpZiAoY29uZmlnLmVycm9ySGFuZGxlcikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY29uZmlnLmVycm9ySGFuZGxlci5jYWxsKG51bGwsIGVyciwgdm0sIGluZm8pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gaWYgdGhlIHVzZXIgaW50ZW50aW9uYWxseSB0aHJvd3MgdGhlIG9yaWdpbmFsIGVycm9yIGluIHRoZSBoYW5kbGVyLFxuICAgICAgLy8gZG8gbm90IGxvZyBpdCB0d2ljZVxuICAgICAgaWYgKGUgIT09IGVycikge1xuICAgICAgICBsb2dFcnJvcihlLCBudWxsLCAnY29uZmlnLmVycm9ySGFuZGxlcicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsb2dFcnJvcihlcnIsIHZtLCBpbmZvKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKChcIkVycm9yIGluIFwiICsgaW5mbyArIFwiOiBcXFwiXCIgKyAoZXJyLnRvU3RyaW5nKCkpICsgXCJcXFwiXCIpLCB2bSk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKChpbkJyb3dzZXIgfHwgaW5XZWV4KSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBwZW5kaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoQ2FsbGJhY2tzICgpIHtcbiAgcGVuZGluZyA9IGZhbHNlO1xuICB2YXIgY29waWVzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICBjYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb3BpZXNbaV0oKTtcbiAgfVxufVxuXG4vLyBIZXJlIHdlIGhhdmUgYXN5bmMgZGVmZXJyaW5nIHdyYXBwZXJzIHVzaW5nIG1pY3JvdGFza3MuXG4vLyBJbiAyLjUgd2UgdXNlZCAobWFjcm8pIHRhc2tzIChpbiBjb21iaW5hdGlvbiB3aXRoIG1pY3JvdGFza3MpLlxuLy8gSG93ZXZlciwgaXQgaGFzIHN1YnRsZSBwcm9ibGVtcyB3aGVuIHN0YXRlIGlzIGNoYW5nZWQgcmlnaHQgYmVmb3JlIHJlcGFpbnRcbi8vIChlLmcuICM2ODEzLCBvdXQtaW4gdHJhbnNpdGlvbnMpLlxuLy8gQWxzbywgdXNpbmcgKG1hY3JvKSB0YXNrcyBpbiBldmVudCBoYW5kbGVyIHdvdWxkIGNhdXNlIHNvbWUgd2VpcmQgYmVoYXZpb3JzXG4vLyB0aGF0IGNhbm5vdCBiZSBjaXJjdW12ZW50ZWQgKGUuZy4gIzcxMDksICM3MTUzLCAjNzU0NiwgIzc4MzQsICM4MTA5KS5cbi8vIFNvIHdlIG5vdyB1c2UgbWljcm90YXNrcyBldmVyeXdoZXJlLCBhZ2Fpbi5cbi8vIEEgbWFqb3IgZHJhd2JhY2sgb2YgdGhpcyB0cmFkZW9mZiBpcyB0aGF0IHRoZXJlIGFyZSBzb21lIHNjZW5hcmlvc1xuLy8gd2hlcmUgbWljcm90YXNrcyBoYXZlIHRvbyBoaWdoIGEgcHJpb3JpdHkgYW5kIGZpcmUgaW4gYmV0d2VlbiBzdXBwb3NlZGx5XG4vLyBzZXF1ZW50aWFsIGV2ZW50cyAoZS5nLiAjNDUyMSwgIzY2OTAsIHdoaWNoIGhhdmUgd29ya2Fyb3VuZHMpXG4vLyBvciBldmVuIGJldHdlZW4gYnViYmxpbmcgb2YgdGhlIHNhbWUgZXZlbnQgKCM2NTY2KS5cbnZhciB0aW1lckZ1bmM7XG5cbi8vIFRoZSBuZXh0VGljayBiZWhhdmlvciBsZXZlcmFnZXMgdGhlIG1pY3JvdGFzayBxdWV1ZSwgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkXG4vLyB2aWEgZWl0aGVyIG5hdGl2ZSBQcm9taXNlLnRoZW4gb3IgTXV0YXRpb25PYnNlcnZlci5cbi8vIE11dGF0aW9uT2JzZXJ2ZXIgaGFzIHdpZGVyIHN1cHBvcnQsIGhvd2V2ZXIgaXQgaXMgc2VyaW91c2x5IGJ1Z2dlZCBpblxuLy8gVUlXZWJWaWV3IGluIGlPUyA+PSA5LjMuMyB3aGVuIHRyaWdnZXJlZCBpbiB0b3VjaCBldmVudCBoYW5kbGVycy4gSXRcbi8vIGNvbXBsZXRlbHkgc3RvcHMgd29ya2luZyBhZnRlciB0cmlnZ2VyaW5nIGEgZmV3IHRpbWVzLi4uIHNvLCBpZiBuYXRpdmVcbi8vIFByb21pc2UgaXMgYXZhaWxhYmxlLCB3ZSB3aWxsIHVzZSBpdDpcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0LCAkZmxvdy1kaXNhYmxlLWxpbmUgKi9cbmlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJvbWlzZSkpIHtcbiAgdmFyIHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHAudGhlbihmbHVzaENhbGxiYWNrcyk7XG4gICAgLy8gSW4gcHJvYmxlbWF0aWMgVUlXZWJWaWV3cywgUHJvbWlzZS50aGVuIGRvZXNuJ3QgY29tcGxldGVseSBicmVhaywgYnV0XG4gICAgLy8gaXQgY2FuIGdldCBzdHVjayBpbiBhIHdlaXJkIHN0YXRlIHdoZXJlIGNhbGxiYWNrcyBhcmUgcHVzaGVkIGludG8gdGhlXG4gICAgLy8gbWljcm90YXNrIHF1ZXVlIGJ1dCB0aGUgcXVldWUgaXNuJ3QgYmVpbmcgZmx1c2hlZCwgdW50aWwgdGhlIGJyb3dzZXJcbiAgICAvLyBuZWVkcyB0byBkbyBzb21lIG90aGVyIHdvcmssIGUuZy4gaGFuZGxlIGEgdGltZXIuIFRoZXJlZm9yZSB3ZSBjYW5cbiAgICAvLyBcImZvcmNlXCIgdGhlIG1pY3JvdGFzayBxdWV1ZSB0byBiZSBmbHVzaGVkIGJ5IGFkZGluZyBhbiBlbXB0eSB0aW1lci5cbiAgICBpZiAoaXNJT1MpIHsgc2V0VGltZW91dChub29wKTsgfVxuICB9O1xufSBlbHNlIGlmICghaXNJRSAmJiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgKFxuICBpc05hdGl2ZShNdXRhdGlvbk9ic2VydmVyKSB8fFxuICAvLyBQaGFudG9tSlMgYW5kIGlPUyA3LnhcbiAgTXV0YXRpb25PYnNlcnZlci50b1N0cmluZygpID09PSAnW29iamVjdCBNdXRhdGlvbk9ic2VydmVyQ29uc3RydWN0b3JdJ1xuKSkge1xuICAvLyBVc2UgTXV0YXRpb25PYnNlcnZlciB3aGVyZSBuYXRpdmUgUHJvbWlzZSBpcyBub3QgYXZhaWxhYmxlLFxuICAvLyBlLmcuIFBoYW50b21KUywgaU9TNywgQW5kcm9pZCA0LjRcbiAgLy8gKCM2NDY2IE11dGF0aW9uT2JzZXJ2ZXIgaXMgdW5yZWxpYWJsZSBpbiBJRTExKVxuICB2YXIgY291bnRlciA9IDE7XG4gIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZsdXNoQ2FsbGJhY2tzKTtcbiAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKGNvdW50ZXIpKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0Tm9kZSwge1xuICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgfSk7XG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb3VudGVyID0gKGNvdW50ZXIgKyAxKSAlIDI7XG4gICAgdGV4dE5vZGUuZGF0YSA9IFN0cmluZyhjb3VudGVyKTtcbiAgfTtcbn0gZWxzZSBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoc2V0SW1tZWRpYXRlKSkge1xuICAvLyBGYWxsYmFjayB0byBzZXRJbW1lZGlhdGUuXG4gIC8vIFRlY2huaWNhbGx5IGl0IGxldmVyYWdlcyB0aGUgKG1hY3JvKSB0YXNrIHF1ZXVlLFxuICAvLyBidXQgaXQgaXMgc3RpbGwgYSBiZXR0ZXIgY2hvaWNlIHRoYW4gc2V0VGltZW91dC5cbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHNldEltbWVkaWF0ZShmbHVzaENhbGxiYWNrcyk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBGYWxsYmFjayB0byBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dChmbHVzaENhbGxiYWNrcywgMCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrIChjYiwgY3R4KSB7XG4gIHZhciBfcmVzb2x2ZTtcbiAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbChjdHgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBoYW5kbGVFcnJvcihlLCBjdHgsICduZXh0VGljaycpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3Jlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlKGN0eCk7XG4gICAgfVxuICB9KTtcbiAgaWYgKCFwZW5kaW5nKSB7XG4gICAgcGVuZGluZyA9IHRydWU7XG4gICAgdGltZXJGdW5jKCk7XG4gIH1cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyogbm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IHBsYXkgd2VsbCB3aXRoIFByb3h5ICovXG5cbnZhciBpbml0UHJveHk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBhbGxvd2VkR2xvYmFscyA9IG1ha2VNYXAoXG4gICAgJ0luZmluaXR5LHVuZGVmaW5lZCxOYU4saXNGaW5pdGUsaXNOYU4sJyArXG4gICAgJ3BhcnNlRmxvYXQscGFyc2VJbnQsZGVjb2RlVVJJLGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUkksZW5jb2RlVVJJQ29tcG9uZW50LCcgK1xuICAgICdNYXRoLE51bWJlcixEYXRlLEFycmF5LE9iamVjdCxCb29sZWFuLFN0cmluZyxSZWdFeHAsTWFwLFNldCxKU09OLEludGwsJyArXG4gICAgJ3JlcXVpcmUnIC8vIGZvciBXZWJwYWNrL0Jyb3dzZXJpZnlcbiAgKTtcblxuICB2YXIgd2Fybk5vblByZXNlbnQgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJQcm9wZXJ0eSBvciBtZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIG9uIHRoZSBpbnN0YW5jZSBidXQgXCIgK1xuICAgICAgJ3JlZmVyZW5jZWQgZHVyaW5nIHJlbmRlci4gTWFrZSBzdXJlIHRoYXQgdGhpcyBwcm9wZXJ0eSBpcyByZWFjdGl2ZSwgJyArXG4gICAgICAnZWl0aGVyIGluIHRoZSBkYXRhIG9wdGlvbiwgb3IgZm9yIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMsIGJ5ICcgK1xuICAgICAgJ2luaXRpYWxpemluZyB0aGUgcHJvcGVydHkuICcgK1xuICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvcmVhY3Rpdml0eS5odG1sI0RlY2xhcmluZy1SZWFjdGl2ZS1Qcm9wZXJ0aWVzLicsXG4gICAgICB0YXJnZXRcbiAgICApO1xuICB9O1xuXG4gIHZhciB3YXJuUmVzZXJ2ZWRQcmVmaXggPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJQcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgbXVzdCBiZSBhY2Nlc3NlZCB3aXRoIFxcXCIkZGF0YS5cIiArIGtleSArIFwiXFxcIiBiZWNhdXNlIFwiICtcbiAgICAgICdwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggXCIkXCIgb3IgXCJfXCIgYXJlIG5vdCBwcm94aWVkIGluIHRoZSBWdWUgaW5zdGFuY2UgdG8gJyArXG4gICAgICAncHJldmVudCBjb25mbGljdHMgd2l0aCBWdWUgaW50ZXJuYWxzLiAnICtcbiAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2FwaS8jZGF0YScsXG4gICAgICB0YXJnZXRcbiAgICApO1xuICB9O1xuXG4gIHZhciBoYXNQcm94eSA9XG4gICAgdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm94eSk7XG5cbiAgaWYgKGhhc1Byb3h5KSB7XG4gICAgdmFyIGlzQnVpbHRJbk1vZGlmaWVyID0gbWFrZU1hcCgnc3RvcCxwcmV2ZW50LHNlbGYsY3RybCxzaGlmdCxhbHQsbWV0YSxleGFjdCcpO1xuICAgIGNvbmZpZy5rZXlDb2RlcyA9IG5ldyBQcm94eShjb25maWcua2V5Q29kZXMsIHtcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzQnVpbHRJbk1vZGlmaWVyKGtleSkpIHtcbiAgICAgICAgICB3YXJuKChcIkF2b2lkIG92ZXJ3cml0aW5nIGJ1aWx0LWluIG1vZGlmaWVyIGluIGNvbmZpZy5rZXlDb2RlczogLlwiICsga2V5KSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaGFzSGFuZGxlciA9IHtcbiAgICBoYXM6IGZ1bmN0aW9uIGhhcyAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIHZhciBoYXMgPSBrZXkgaW4gdGFyZ2V0O1xuICAgICAgdmFyIGlzQWxsb3dlZCA9IGFsbG93ZWRHbG9iYWxzKGtleSkgfHxcbiAgICAgICAgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleS5jaGFyQXQoMCkgPT09ICdfJyAmJiAhKGtleSBpbiB0YXJnZXQuJGRhdGEpKTtcbiAgICAgIGlmICghaGFzICYmICFpc0FsbG93ZWQpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzIHx8ICFpc0FsbG93ZWRcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldEhhbmRsZXIgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKHRhcmdldCwga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgIGVsc2UgeyB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXRba2V5XVxuICAgIH1cbiAgfTtcblxuICBpbml0UHJveHkgPSBmdW5jdGlvbiBpbml0UHJveHkgKHZtKSB7XG4gICAgaWYgKGhhc1Byb3h5KSB7XG4gICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJveHkgaGFuZGxlciB0byB1c2VcbiAgICAgIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gICAgICB2YXIgaGFuZGxlcnMgPSBvcHRpb25zLnJlbmRlciAmJiBvcHRpb25zLnJlbmRlci5fd2l0aFN0cmlwcGVkXG4gICAgICAgID8gZ2V0SGFuZGxlclxuICAgICAgICA6IGhhc0hhbmRsZXI7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSBuZXcgUHJveHkodm0sIGhhbmRsZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHNlZW5PYmplY3RzID0gbmV3IF9TZXQoKTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwpIHtcbiAgX3RyYXZlcnNlKHZhbCwgc2Vlbk9iamVjdHMpO1xuICBzZWVuT2JqZWN0cy5jbGVhcigpO1xufVxuXG5mdW5jdGlvbiBfdHJhdmVyc2UgKHZhbCwgc2Vlbikge1xuICB2YXIgaSwga2V5cztcbiAgdmFyIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKTtcbiAgaWYgKCghaXNBICYmICFpc09iamVjdCh2YWwpKSB8fCBPYmplY3QuaXNGcm96ZW4odmFsKSB8fCB2YWwgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2YWwuX19vYl9fKSB7XG4gICAgdmFyIGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWQ7XG4gICAgaWYgKHNlZW4uaGFzKGRlcElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNlZW4uYWRkKGRlcElkKTtcbiAgfVxuICBpZiAoaXNBKSB7XG4gICAgaSA9IHZhbC5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2ldLCBzZWVuKTsgfVxuICB9IGVsc2Uge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxba2V5c1tpXV0sIHNlZW4pOyB9XG4gIH1cbn1cblxudmFyIG1hcms7XG52YXIgbWVhc3VyZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHBlcmYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKFxuICAgIHBlcmYgJiZcbiAgICBwZXJmLm1hcmsgJiZcbiAgICBwZXJmLm1lYXN1cmUgJiZcbiAgICBwZXJmLmNsZWFyTWFya3MgJiZcbiAgICBwZXJmLmNsZWFyTWVhc3VyZXNcbiAgKSB7XG4gICAgbWFyayA9IGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHBlcmYubWFyayh0YWcpOyB9O1xuICAgIG1lYXN1cmUgPSBmdW5jdGlvbiAobmFtZSwgc3RhcnRUYWcsIGVuZFRhZykge1xuICAgICAgcGVyZi5tZWFzdXJlKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgICAgcGVyZi5jbGVhck1hcmtzKHN0YXJ0VGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhlbmRUYWcpO1xuICAgICAgLy8gcGVyZi5jbGVhck1lYXN1cmVzKG5hbWUpXG4gICAgfTtcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIG5vcm1hbGl6ZUV2ZW50ID0gY2FjaGVkKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBwYXNzaXZlID0gbmFtZS5jaGFyQXQoMCkgPT09ICcmJztcbiAgbmFtZSA9IHBhc3NpdmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgdmFyIG9uY2UkJDEgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJ34nOyAvLyBQcmVmaXhlZCBsYXN0LCBjaGVja2VkIGZpcnN0XG4gIG5hbWUgPSBvbmNlJCQxID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBjYXB0dXJlID0gbmFtZS5jaGFyQXQoMCkgPT09ICchJztcbiAgbmFtZSA9IGNhcHR1cmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIG9uY2U6IG9uY2UkJDEsXG4gICAgY2FwdHVyZTogY2FwdHVyZSxcbiAgICBwYXNzaXZlOiBwYXNzaXZlXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVGbkludm9rZXIgKGZucywgdm0pIHtcbiAgZnVuY3Rpb24gaW52b2tlciAoKSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGZucyA9IGludm9rZXIuZm5zO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZucykpIHtcbiAgICAgIHZhciBjbG9uZWQgPSBmbnMuc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGNsb25lZFtpXSwgbnVsbCwgYXJndW1lbnRzJDEsIHZtLCBcInYtb24gaGFuZGxlclwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmV0dXJuIGhhbmRsZXIgcmV0dXJuIHZhbHVlIGZvciBzaW5nbGUgaGFuZGxlcnNcbiAgICAgIHJldHVybiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhmbnMsIG51bGwsIGFyZ3VtZW50cywgdm0sIFwidi1vbiBoYW5kbGVyXCIpXG4gICAgfVxuICB9XG4gIGludm9rZXIuZm5zID0gZm5zO1xuICByZXR1cm4gaW52b2tlclxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaXN0ZW5lcnMgKFxuICBvbixcbiAgb2xkT24sXG4gIGFkZCxcbiAgcmVtb3ZlJCQxLFxuICBjcmVhdGVPbmNlSGFuZGxlcixcbiAgdm1cbikge1xuICB2YXIgbmFtZSwgZGVmJCQxLCBjdXIsIG9sZCwgZXZlbnQ7XG4gIGZvciAobmFtZSBpbiBvbikge1xuICAgIGRlZiQkMSA9IGN1ciA9IG9uW25hbWVdO1xuICAgIG9sZCA9IG9sZE9uW25hbWVdO1xuICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgaWYgKGlzVW5kZWYoY3VyKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkludmFsaWQgaGFuZGxlciBmb3IgZXZlbnQgXFxcIlwiICsgKGV2ZW50Lm5hbWUpICsgXCJcXFwiOiBnb3QgXCIgKyBTdHJpbmcoY3VyKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZCkpIHtcbiAgICAgIGlmIChpc1VuZGVmKGN1ci5mbnMpKSB7XG4gICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlRm5JbnZva2VyKGN1ciwgdm0pO1xuICAgICAgfVxuICAgICAgaWYgKGlzVHJ1ZShldmVudC5vbmNlKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZU9uY2VIYW5kbGVyKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSk7XG4gICAgICB9XG4gICAgICBhZGQoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlLCBldmVudC5wYXNzaXZlLCBldmVudC5wYXJhbXMpO1xuICAgIH0gZWxzZSBpZiAoY3VyICE9PSBvbGQpIHtcbiAgICAgIG9sZC5mbnMgPSBjdXI7XG4gICAgICBvbltuYW1lXSA9IG9sZDtcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIG9sZE9uKSB7XG4gICAgaWYgKGlzVW5kZWYob25bbmFtZV0pKSB7XG4gICAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgICAgcmVtb3ZlJCQxKGV2ZW50Lm5hbWUsIG9sZE9uW25hbWVdLCBldmVudC5jYXB0dXJlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG4vLyBmaXhlZCBieSB4eHh4eHggKG1wIHByb3BlcnRpZXMpXG5mdW5jdGlvbiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgcmVzLCBjb250ZXh0KSB7XG4gIHZhciBwcm9wT3B0aW9ucyA9IEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMgJiYgQ3Rvci5vcHRpb25zLm1wT3B0aW9ucy5wcm9wZXJ0aWVzO1xuICBpZiAoaXNVbmRlZihwcm9wT3B0aW9ucykpIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cbiAgdmFyIGV4dGVybmFsQ2xhc3NlcyA9IEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzIHx8IFtdO1xuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICB2YXIgcHJvcHMgPSBkYXRhLnByb3BzO1xuICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgdmFyIHJlc3VsdCA9IGNoZWNrUHJvcChyZXMsIHByb3BzLCBrZXksIGFsdEtleSwgdHJ1ZSkgfHxcbiAgICAgICAgICBjaGVja1Byb3AocmVzLCBhdHRycywga2V5LCBhbHRLZXksIGZhbHNlKTtcbiAgICAgIC8vIGV4dGVybmFsQ2xhc3NcbiAgICAgIGlmIChcbiAgICAgICAgcmVzdWx0ICYmXG4gICAgICAgIHJlc1trZXldICYmXG4gICAgICAgIGV4dGVybmFsQ2xhc3Nlcy5pbmRleE9mKGFsdEtleSkgIT09IC0xICYmXG4gICAgICAgIGNvbnRleHRbY2FtZWxpemUocmVzW2tleV0pXVxuICAgICAgKSB7XG4gICAgICAgIC8vIOi1i+WAvCBleHRlcm5hbENsYXNzIOecn+ato+eahOWAvCjmqKHmnb/ph4wgZXh0ZXJuYWxDbGFzcyDnmoTlgLzlj6/og73mmK/lrZfnrKbkuLIpXG4gICAgICAgIHJlc1trZXldID0gY29udGV4dFtjYW1lbGl6ZShyZXNba2V5XSldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEgKFxuICBkYXRhLFxuICBDdG9yLFxuICB0YWcsXG4gIGNvbnRleHQvLyBmaXhlZCBieSB4eHh4eHhcbikge1xuICAvLyB3ZSBhcmUgb25seSBleHRyYWN0aW5nIHJhdyB2YWx1ZXMgaGVyZS5cbiAgLy8gdmFsaWRhdGlvbiBhbmQgZGVmYXVsdCB2YWx1ZXMgYXJlIGhhbmRsZWQgaW4gdGhlIGNoaWxkXG4gIC8vIGNvbXBvbmVudCBpdHNlbGYuXG4gIHZhciBwcm9wT3B0aW9ucyA9IEN0b3Iub3B0aW9ucy5wcm9wcztcbiAgaWYgKGlzVW5kZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgcmV0dXJuIGV4dHJhY3RQcm9wZXJ0aWVzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCB7fSwgY29udGV4dClcbiAgfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XG4gIGlmIChpc0RlZihhdHRycykgfHwgaXNEZWYocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIga2V5SW5Mb3dlckNhc2UgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSAhPT0ga2V5SW5Mb3dlckNhc2UgJiZcbiAgICAgICAgICBhdHRycyAmJiBoYXNPd24oYXR0cnMsIGtleUluTG93ZXJDYXNlKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aXAoXG4gICAgICAgICAgICBcIlByb3AgXFxcIlwiICsga2V5SW5Mb3dlckNhc2UgKyBcIlxcXCIgaXMgcGFzc2VkIHRvIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh0YWcgfHwgQ3RvcikpICsgXCIsIGJ1dCB0aGUgZGVjbGFyZWQgcHJvcCBuYW1lIGlzXCIgK1xuICAgICAgICAgICAgXCIgXFxcIlwiICsga2V5ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIGNhbWVsQ2FzZWQgXCIgK1xuICAgICAgICAgICAgXCJwcm9wcyBuZWVkIHRvIHVzZSB0aGVpciBrZWJhYi1jYXNlIGVxdWl2YWxlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIFwiICtcbiAgICAgICAgICAgIFwidGVtcGxhdGVzLiBZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyBhbHRLZXkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICBjaGVja1Byb3AocmVzLCBhdHRycywga2V5LCBhbHRLZXksIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4XG4gIHJldHVybiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgcmVzLCBjb250ZXh0KVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3AgKFxuICByZXMsXG4gIGhhc2gsXG4gIGtleSxcbiAgYWx0S2V5LFxuICBwcmVzZXJ2ZVxuKSB7XG4gIGlmIChpc0RlZihoYXNoKSkge1xuICAgIGlmIChoYXNPd24oaGFzaCwga2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBoYXNoW2tleV07XG4gICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgIGRlbGV0ZSBoYXNoW2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoaGFzT3duKGhhc2gsIGFsdEtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFthbHRLZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFthbHRLZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qICAqL1xuXG4vLyBUaGUgdGVtcGxhdGUgY29tcGlsZXIgYXR0ZW1wdHMgdG8gbWluaW1pemUgdGhlIG5lZWQgZm9yIG5vcm1hbGl6YXRpb24gYnlcbi8vIHN0YXRpY2FsbHkgYW5hbHl6aW5nIHRoZSB0ZW1wbGF0ZSBhdCBjb21waWxlIHRpbWUuXG4vL1xuLy8gRm9yIHBsYWluIEhUTUwgbWFya3VwLCBub3JtYWxpemF0aW9uIGNhbiBiZSBjb21wbGV0ZWx5IHNraXBwZWQgYmVjYXVzZSB0aGVcbi8vIGdlbmVyYXRlZCByZW5kZXIgZnVuY3Rpb24gaXMgZ3VhcmFudGVlZCB0byByZXR1cm4gQXJyYXk8Vk5vZGU+LiBUaGVyZSBhcmVcbi8vIHR3byBjYXNlcyB3aGVyZSBleHRyYSBub3JtYWxpemF0aW9uIGlzIG5lZWRlZDpcblxuLy8gMS4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29tcG9uZW50cyAtIGJlY2F1c2UgYSBmdW5jdGlvbmFsIGNvbXBvbmVudFxuLy8gbWF5IHJldHVybiBhbiBBcnJheSBpbnN0ZWFkIG9mIGEgc2luZ2xlIHJvb3QuIEluIHRoaXMgY2FzZSwganVzdCBhIHNpbXBsZVxuLy8gbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQgLSBpZiBhbnkgY2hpbGQgaXMgYW4gQXJyYXksIHdlIGZsYXR0ZW4gdGhlIHdob2xlXG4vLyB0aGluZyB3aXRoIEFycmF5LnByb3RvdHlwZS5jb25jYXQuIEl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgb25seSAxLWxldmVsIGRlZXBcbi8vIGJlY2F1c2UgZnVuY3Rpb25hbCBjb21wb25lbnRzIGFscmVhZHkgbm9ybWFsaXplIHRoZWlyIG93biBjaGlsZHJlbi5cbmZ1bmN0aW9uIHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgY2hpbGRyZW4pXG4gICAgfVxuICB9XG4gIHJldHVybiBjaGlsZHJlblxufVxuXG4vLyAyLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb25zdHJ1Y3RzIHRoYXQgYWx3YXlzIGdlbmVyYXRlZCBuZXN0ZWQgQXJyYXlzLFxuLy8gZS5nLiA8dGVtcGxhdGU+LCA8c2xvdD4sIHYtZm9yLCBvciB3aGVuIHRoZSBjaGlsZHJlbiBpcyBwcm92aWRlZCBieSB1c2VyXG4vLyB3aXRoIGhhbmQtd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zIC8gSlNYLiBJbiBzdWNoIGNhc2VzIGEgZnVsbCBub3JtYWxpemF0aW9uXG4vLyBpcyBuZWVkZWQgdG8gY2F0ZXIgdG8gYWxsIHBvc3NpYmxlIHR5cGVzIG9mIGNoaWxkcmVuIHZhbHVlcy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICByZXR1cm4gaXNQcmltaXRpdmUoY2hpbGRyZW4pXG4gICAgPyBbY3JlYXRlVGV4dFZOb2RlKGNoaWxkcmVuKV1cbiAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICA/IG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oY2hpbGRyZW4pXG4gICAgICA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBpc1RleHROb2RlIChub2RlKSB7XG4gIHJldHVybiBpc0RlZihub2RlKSAmJiBpc0RlZihub2RlLnRleHQpICYmIGlzRmFsc2Uobm9kZS5pc0NvbW1lbnQpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4gKGNoaWxkcmVuLCBuZXN0ZWRJbmRleCkge1xuICB2YXIgcmVzID0gW107XG4gIHZhciBpLCBjLCBsYXN0SW5kZXgsIGxhc3Q7XG4gIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBjaGlsZHJlbltpXTtcbiAgICBpZiAoaXNVbmRlZihjKSB8fCB0eXBlb2YgYyA9PT0gJ2Jvb2xlYW4nKSB7IGNvbnRpbnVlIH1cbiAgICBsYXN0SW5kZXggPSByZXMubGVuZ3RoIC0gMTtcbiAgICBsYXN0ID0gcmVzW2xhc3RJbmRleF07XG4gICAgLy8gIG5lc3RlZFxuICAgIGlmIChBcnJheS5pc0FycmF5KGMpKSB7XG4gICAgICBpZiAoYy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGMgPSBub3JtYWxpemVBcnJheUNoaWxkcmVuKGMsICgobmVzdGVkSW5kZXggfHwgJycpICsgXCJfXCIgKyBpKSk7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgaWYgKGlzVGV4dE5vZGUoY1swXSkgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIChjWzBdKS50ZXh0KTtcbiAgICAgICAgICBjLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBjKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKGMpKSB7XG4gICAgICBpZiAoaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBTU1IgaHlkcmF0aW9uIGJlY2F1c2UgdGV4dCBub2RlcyBhcmVcbiAgICAgICAgLy8gZXNzZW50aWFsbHkgbWVyZ2VkIHdoZW4gcmVuZGVyZWQgdG8gSFRNTCBzdHJpbmdzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMpO1xuICAgICAgfSBlbHNlIGlmIChjICE9PSAnJykge1xuICAgICAgICAvLyBjb252ZXJ0IHByaW1pdGl2ZSB0byB2bm9kZVxuICAgICAgICByZXMucHVzaChjcmVhdGVUZXh0Vk5vZGUoYykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNUZXh0Tm9kZShjKSAmJiBpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYy50ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlZmF1bHQga2V5IGZvciBuZXN0ZWQgYXJyYXkgY2hpbGRyZW4gKGxpa2VseSBnZW5lcmF0ZWQgYnkgdi1mb3IpXG4gICAgICAgIGlmIChpc1RydWUoY2hpbGRyZW4uX2lzVkxpc3QpICYmXG4gICAgICAgICAgaXNEZWYoYy50YWcpICYmXG4gICAgICAgICAgaXNVbmRlZihjLmtleSkgJiZcbiAgICAgICAgICBpc0RlZihuZXN0ZWRJbmRleCkpIHtcbiAgICAgICAgICBjLmtleSA9IFwiX192bGlzdFwiICsgbmVzdGVkSW5kZXggKyBcIl9cIiArIGkgKyBcIl9fXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRQcm92aWRlICh2bSkge1xuICB2YXIgcHJvdmlkZSA9IHZtLiRvcHRpb25zLnByb3ZpZGU7XG4gIGlmIChwcm92aWRlKSB7XG4gICAgdm0uX3Byb3ZpZGVkID0gdHlwZW9mIHByb3ZpZGUgPT09ICdmdW5jdGlvbidcbiAgICAgID8gcHJvdmlkZS5jYWxsKHZtKVxuICAgICAgOiBwcm92aWRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRJbmplY3Rpb25zICh2bSkge1xuICB2YXIgcmVzdWx0ID0gcmVzb2x2ZUluamVjdCh2bS4kb3B0aW9ucy5pbmplY3QsIHZtKTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGFuIGluamVjdGVkIHZhbHVlIGRpcmVjdGx5IHNpbmNlIHRoZSBjaGFuZ2VzIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcHJvdmlkZWQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiaW5qZWN0aW9uIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCBrZXksIHJlc3VsdFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUluamVjdCAoaW5qZWN0LCB2bSkge1xuICBpZiAoaW5qZWN0KSB7XG4gICAgLy8gaW5qZWN0IGlzIDphbnkgYmVjYXVzZSBmbG93IGlzIG5vdCBzbWFydCBlbm91Z2ggdG8gZmlndXJlIG91dCBjYWNoZWRcbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgICAgPyBSZWZsZWN0Lm93bktleXMoaW5qZWN0KVxuICAgICAgOiBPYmplY3Qua2V5cyhpbmplY3QpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIC8vICM2NTc0IGluIGNhc2UgdGhlIGluamVjdCBvYmplY3QgaXMgb2JzZXJ2ZWQuLi5cbiAgICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7IGNvbnRpbnVlIH1cbiAgICAgIHZhciBwcm92aWRlS2V5ID0gaW5qZWN0W2tleV0uZnJvbTtcbiAgICAgIHZhciBzb3VyY2UgPSB2bTtcbiAgICAgIHdoaWxlIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5fcHJvdmlkZWQgJiYgaGFzT3duKHNvdXJjZS5fcHJvdmlkZWQsIHByb3ZpZGVLZXkpKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2UuX3Byb3ZpZGVkW3Byb3ZpZGVLZXldO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgc291cmNlID0gc291cmNlLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIGluamVjdFtrZXldKSB7XG4gICAgICAgICAgdmFyIHByb3ZpZGVEZWZhdWx0ID0gaW5qZWN0W2tleV0uZGVmYXVsdDtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHR5cGVvZiBwcm92aWRlRGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBwcm92aWRlRGVmYXVsdC5jYWxsKHZtKVxuICAgICAgICAgICAgOiBwcm92aWRlRGVmYXVsdDtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybigoXCJJbmplY3Rpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIG5vdCBmb3VuZFwiKSwgdm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyByYXcgY2hpbGRyZW4gVk5vZGVzIGludG8gYSBzbG90IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVNsb3RzIChcbiAgY2hpbGRyZW4sXG4gIGNvbnRleHRcbikge1xuICBpZiAoIWNoaWxkcmVuIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICB2YXIgc2xvdHMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICB2YXIgZGF0YSA9IGNoaWxkLmRhdGE7XG4gICAgLy8gcmVtb3ZlIHNsb3QgYXR0cmlidXRlIGlmIHRoZSBub2RlIGlzIHJlc29sdmVkIGFzIGEgVnVlIHNsb3Qgbm9kZVxuICAgIGlmIChkYXRhICYmIGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5zbG90KSB7XG4gICAgICBkZWxldGUgZGF0YS5hdHRycy5zbG90O1xuICAgIH1cbiAgICAvLyBuYW1lZCBzbG90cyBzaG91bGQgb25seSBiZSByZXNwZWN0ZWQgaWYgdGhlIHZub2RlIHdhcyByZW5kZXJlZCBpbiB0aGVcbiAgICAvLyBzYW1lIGNvbnRleHQuXG4gICAgaWYgKChjaGlsZC5jb250ZXh0ID09PSBjb250ZXh0IHx8IGNoaWxkLmZuQ29udGV4dCA9PT0gY29udGV4dCkgJiZcbiAgICAgIGRhdGEgJiYgZGF0YS5zbG90ICE9IG51bGxcbiAgICApIHtcbiAgICAgIHZhciBuYW1lID0gZGF0YS5zbG90O1xuICAgICAgdmFyIHNsb3QgPSAoc2xvdHNbbmFtZV0gfHwgKHNsb3RzW25hbWVdID0gW10pKTtcbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgc2xvdC5wdXNoLmFwcGx5KHNsb3QsIGNoaWxkLmNoaWxkcmVuIHx8IFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsb3QucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpeGVkIGJ5IHh4eHh4eCDkuLTml7YgaGFjayDmjokgdW5pLWFwcCDkuK3nmoTlvILmraUgbmFtZSBzbG90IHBhZ2VcbiAgICAgIGlmKGNoaWxkLmFzeW5jTWV0YSAmJiBjaGlsZC5hc3luY01ldGEuZGF0YSAmJiBjaGlsZC5hc3luY01ldGEuZGF0YS5zbG90ID09PSAncGFnZScpe1xuICAgICAgICAoc2xvdHNbJ3BhZ2UnXSB8fCAoc2xvdHNbJ3BhZ2UnXSA9IFtdKSkucHVzaChjaGlsZCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgKHNsb3RzLmRlZmF1bHQgfHwgKHNsb3RzLmRlZmF1bHQgPSBbXSkpLnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBpZ25vcmUgc2xvdHMgdGhhdCBjb250YWlucyBvbmx5IHdoaXRlc3BhY2VcbiAgZm9yICh2YXIgbmFtZSQxIGluIHNsb3RzKSB7XG4gICAgaWYgKHNsb3RzW25hbWUkMV0uZXZlcnkoaXNXaGl0ZXNwYWNlKSkge1xuICAgICAgZGVsZXRlIHNsb3RzW25hbWUkMV07XG4gICAgfVxuICB9XG4gIHJldHVybiBzbG90c1xufVxuXG5mdW5jdGlvbiBpc1doaXRlc3BhY2UgKG5vZGUpIHtcbiAgcmV0dXJuIChub2RlLmlzQ29tbWVudCAmJiAhbm9kZS5hc3luY0ZhY3RvcnkpIHx8IG5vZGUudGV4dCA9PT0gJyAnXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90cyAoXG4gIHNsb3RzLFxuICBub3JtYWxTbG90cyxcbiAgcHJldlNsb3RzXG4pIHtcbiAgdmFyIHJlcztcbiAgdmFyIGhhc05vcm1hbFNsb3RzID0gT2JqZWN0LmtleXMobm9ybWFsU2xvdHMpLmxlbmd0aCA+IDA7XG4gIHZhciBpc1N0YWJsZSA9IHNsb3RzID8gISFzbG90cy4kc3RhYmxlIDogIWhhc05vcm1hbFNsb3RzO1xuICB2YXIga2V5ID0gc2xvdHMgJiYgc2xvdHMuJGtleTtcbiAgaWYgKCFzbG90cykge1xuICAgIHJlcyA9IHt9O1xuICB9IGVsc2UgaWYgKHNsb3RzLl9ub3JtYWxpemVkKSB7XG4gICAgLy8gZmFzdCBwYXRoIDE6IGNoaWxkIGNvbXBvbmVudCByZS1yZW5kZXIgb25seSwgcGFyZW50IGRpZCBub3QgY2hhbmdlXG4gICAgcmV0dXJuIHNsb3RzLl9ub3JtYWxpemVkXG4gIH0gZWxzZSBpZiAoXG4gICAgaXNTdGFibGUgJiZcbiAgICBwcmV2U2xvdHMgJiZcbiAgICBwcmV2U2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmXG4gICAga2V5ID09PSBwcmV2U2xvdHMuJGtleSAmJlxuICAgICFoYXNOb3JtYWxTbG90cyAmJlxuICAgICFwcmV2U2xvdHMuJGhhc05vcm1hbFxuICApIHtcbiAgICAvLyBmYXN0IHBhdGggMjogc3RhYmxlIHNjb3BlZCBzbG90cyB3LyBubyBub3JtYWwgc2xvdHMgdG8gcHJveHksXG4gICAgLy8gb25seSBuZWVkIHRvIG5vcm1hbGl6ZSBvbmNlXG4gICAgcmV0dXJuIHByZXZTbG90c1xuICB9IGVsc2Uge1xuICAgIHJlcyA9IHt9O1xuICAgIGZvciAodmFyIGtleSQxIGluIHNsb3RzKSB7XG4gICAgICBpZiAoc2xvdHNba2V5JDFdICYmIGtleSQxWzBdICE9PSAnJCcpIHtcbiAgICAgICAgcmVzW2tleSQxXSA9IG5vcm1hbGl6ZVNjb3BlZFNsb3Qobm9ybWFsU2xvdHMsIGtleSQxLCBzbG90c1trZXkkMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBleHBvc2Ugbm9ybWFsIHNsb3RzIG9uIHNjb3BlZFNsb3RzXG4gIGZvciAodmFyIGtleSQyIGluIG5vcm1hbFNsb3RzKSB7XG4gICAgaWYgKCEoa2V5JDIgaW4gcmVzKSkge1xuICAgICAgcmVzW2tleSQyXSA9IHByb3h5Tm9ybWFsU2xvdChub3JtYWxTbG90cywga2V5JDIpO1xuICAgIH1cbiAgfVxuICAvLyBhdm9yaWF6IHNlZW1zIHRvIG1vY2sgYSBub24tZXh0ZW5zaWJsZSAkc2NvcGVkU2xvdHMgb2JqZWN0XG4gIC8vIGFuZCB3aGVuIHRoYXQgaXMgcGFzc2VkIGRvd24gdGhpcyB3b3VsZCBjYXVzZSBhbiBlcnJvclxuICBpZiAoc2xvdHMgJiYgT2JqZWN0LmlzRXh0ZW5zaWJsZShzbG90cykpIHtcbiAgICAoc2xvdHMpLl9ub3JtYWxpemVkID0gcmVzO1xuICB9XG4gIGRlZihyZXMsICckc3RhYmxlJywgaXNTdGFibGUpO1xuICBkZWYocmVzLCAnJGtleScsIGtleSk7XG4gIGRlZihyZXMsICckaGFzTm9ybWFsJywgaGFzTm9ybWFsU2xvdHMpO1xuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNjb3BlZFNsb3Qobm9ybWFsU2xvdHMsIGtleSwgZm4pIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlcyA9IGFyZ3VtZW50cy5sZW5ndGggPyBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpIDogZm4oe30pO1xuICAgIHJlcyA9IHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShyZXMpXG4gICAgICA/IFtyZXNdIC8vIHNpbmdsZSB2bm9kZVxuICAgICAgOiBub3JtYWxpemVDaGlsZHJlbihyZXMpO1xuICAgIHJldHVybiByZXMgJiYgKFxuICAgICAgcmVzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgKHJlcy5sZW5ndGggPT09IDEgJiYgcmVzWzBdLmlzQ29tbWVudCkgLy8gIzk2NThcbiAgICApID8gdW5kZWZpbmVkXG4gICAgICA6IHJlc1xuICB9O1xuICAvLyB0aGlzIGlzIGEgc2xvdCB1c2luZyB0aGUgbmV3IHYtc2xvdCBzeW50YXggd2l0aG91dCBzY29wZS4gYWx0aG91Z2ggaXQgaXNcbiAgLy8gY29tcGlsZWQgYXMgYSBzY29wZWQgc2xvdCwgcmVuZGVyIGZuIHVzZXJzIHdvdWxkIGV4cGVjdCBpdCB0byBiZSBwcmVzZW50XG4gIC8vIG9uIHRoaXMuJHNsb3RzIGJlY2F1c2UgdGhlIHVzYWdlIGlzIHNlbWFudGljYWxseSBhIG5vcm1hbCBzbG90LlxuICBpZiAoZm4ucHJveHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobm9ybWFsU2xvdHMsIGtleSwge1xuICAgICAgZ2V0OiBub3JtYWxpemVkLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVkXG59XG5cbmZ1bmN0aW9uIHByb3h5Tm9ybWFsU2xvdChzbG90cywga2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzbG90c1trZXldOyB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgdi1mb3IgbGlzdHMuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckxpc3QgKFxuICB2YWwsXG4gIHJlbmRlclxuKSB7XG4gIHZhciByZXQsIGksIGwsIGtleXMsIGtleTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdmFsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtpXSwgaSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKGkgKyAxLCBpLCBpLCBpKTsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICBpZiAoaGFzU3ltYm9sICYmIHZhbFtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICByZXQgPSBbXTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHZhbFtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgICAgICByZXQucHVzaChyZW5kZXIocmVzdWx0LnZhbHVlLCByZXQubGVuZ3RoLCBpLCBpKyspKTsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgICByZXQgPSBuZXcgQXJyYXkoa2V5cy5sZW5ndGgpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxba2V5XSwga2V5LCBpLCBpKTsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghaXNEZWYocmV0KSkge1xuICAgIHJldCA9IFtdO1xuICB9XG4gIChyZXQpLl9pc1ZMaXN0ID0gdHJ1ZTtcbiAgcmV0dXJuIHJldFxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIDxzbG90PlxuICovXG5mdW5jdGlvbiByZW5kZXJTbG90IChcbiAgbmFtZSxcbiAgZmFsbGJhY2ssXG4gIHByb3BzLFxuICBiaW5kT2JqZWN0XG4pIHtcbiAgdmFyIHNjb3BlZFNsb3RGbiA9IHRoaXMuJHNjb3BlZFNsb3RzW25hbWVdO1xuICB2YXIgbm9kZXM7XG4gIGlmIChzY29wZWRTbG90Rm4pIHsgLy8gc2NvcGVkIHNsb3RcbiAgICBwcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIGlmIChiaW5kT2JqZWN0KSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNPYmplY3QoYmluZE9iamVjdCkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnc2xvdCB2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCcsXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcHJvcHMgPSBleHRlbmQoZXh0ZW5kKHt9LCBiaW5kT2JqZWN0KSwgcHJvcHMpO1xuICAgIH1cbiAgICAvLyBmaXhlZCBieSB4eHh4eHggYXBwLXBsdXMgc2NvcGVkU2xvdFxuICAgIG5vZGVzID0gc2NvcGVkU2xvdEZuKHByb3BzLCB0aGlzLCBwcm9wcy5faSkgfHwgZmFsbGJhY2s7XG4gIH0gZWxzZSB7XG4gICAgbm9kZXMgPSB0aGlzLiRzbG90c1tuYW1lXSB8fCBmYWxsYmFjaztcbiAgfVxuXG4gIHZhciB0YXJnZXQgPSBwcm9wcyAmJiBwcm9wcy5zbG90O1xuICBpZiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJywgeyBzbG90OiB0YXJnZXQgfSwgbm9kZXMpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyBmaWx0ZXJzXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVGaWx0ZXIgKGlkKSB7XG4gIHJldHVybiByZXNvbHZlQXNzZXQodGhpcy4kb3B0aW9ucywgJ2ZpbHRlcnMnLCBpZCwgdHJ1ZSkgfHwgaWRlbnRpdHlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGlzS2V5Tm90TWF0Y2ggKGV4cGVjdCwgYWN0dWFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGV4cGVjdCkpIHtcbiAgICByZXR1cm4gZXhwZWN0LmluZGV4T2YoYWN0dWFsKSA9PT0gLTFcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXhwZWN0ICE9PSBhY3R1YWxcbiAgfVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciBjaGVja2luZyBrZXlDb2RlcyBmcm9tIGNvbmZpZy5cbiAqIGV4cG9zZWQgYXMgVnVlLnByb3RvdHlwZS5fa1xuICogcGFzc2luZyBpbiBldmVudEtleU5hbWUgYXMgbGFzdCBhcmd1bWVudCBzZXBhcmF0ZWx5IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gKi9cbmZ1bmN0aW9uIGNoZWNrS2V5Q29kZXMgKFxuICBldmVudEtleUNvZGUsXG4gIGtleSxcbiAgYnVpbHRJbktleUNvZGUsXG4gIGV2ZW50S2V5TmFtZSxcbiAgYnVpbHRJbktleU5hbWVcbikge1xuICB2YXIgbWFwcGVkS2V5Q29kZSA9IGNvbmZpZy5rZXlDb2Rlc1trZXldIHx8IGJ1aWx0SW5LZXlDb2RlO1xuICBpZiAoYnVpbHRJbktleU5hbWUgJiYgZXZlbnRLZXlOYW1lICYmICFjb25maWcua2V5Q29kZXNba2V5XSkge1xuICAgIHJldHVybiBpc0tleU5vdE1hdGNoKGJ1aWx0SW5LZXlOYW1lLCBldmVudEtleU5hbWUpXG4gIH0gZWxzZSBpZiAobWFwcGVkS2V5Q29kZSkge1xuICAgIHJldHVybiBpc0tleU5vdE1hdGNoKG1hcHBlZEtleUNvZGUsIGV2ZW50S2V5Q29kZSlcbiAgfSBlbHNlIGlmIChldmVudEtleU5hbWUpIHtcbiAgICByZXR1cm4gaHlwaGVuYXRlKGV2ZW50S2V5TmFtZSkgIT09IGtleVxuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciBtZXJnaW5nIHYtYmluZD1cIm9iamVjdFwiIGludG8gYSBWTm9kZSdzIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGJpbmRPYmplY3RQcm9wcyAoXG4gIGRhdGEsXG4gIHRhZyxcbiAgdmFsdWUsXG4gIGFzUHJvcCxcbiAgaXNTeW5jXG4pIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3YtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IG9yIEFycmF5IHZhbHVlJyxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdG9PYmplY3QodmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFyIGhhc2g7XG4gICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAga2V5ID09PSAnY2xhc3MnIHx8XG4gICAgICAgICAga2V5ID09PSAnc3R5bGUnIHx8XG4gICAgICAgICAgaXNSZXNlcnZlZEF0dHJpYnV0ZShrZXkpXG4gICAgICAgICkge1xuICAgICAgICAgIGhhc2ggPSBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0eXBlID0gZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLnR5cGU7XG4gICAgICAgICAgaGFzaCA9IGFzUHJvcCB8fCBjb25maWcubXVzdFVzZVByb3AodGFnLCB0eXBlLCBrZXkpXG4gICAgICAgICAgICA/IGRhdGEuZG9tUHJvcHMgfHwgKGRhdGEuZG9tUHJvcHMgPSB7fSlcbiAgICAgICAgICAgIDogZGF0YS5hdHRycyB8fCAoZGF0YS5hdHRycyA9IHt9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FtZWxpemVkS2V5ID0gY2FtZWxpemUoa2V5KTtcbiAgICAgICAgdmFyIGh5cGhlbmF0ZWRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgICAgaWYgKCEoY2FtZWxpemVkS2V5IGluIGhhc2gpICYmICEoaHlwaGVuYXRlZEtleSBpbiBoYXNoKSkge1xuICAgICAgICAgIGhhc2hba2V5XSA9IHZhbHVlW2tleV07XG5cbiAgICAgICAgICBpZiAoaXNTeW5jKSB7XG4gICAgICAgICAgICB2YXIgb24gPSBkYXRhLm9uIHx8IChkYXRhLm9uID0ge30pO1xuICAgICAgICAgICAgb25bKFwidXBkYXRlOlwiICsga2V5KV0gPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhbHVlW2tleV0gPSAkZXZlbnQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSBsb29wKCBrZXkgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyBzdGF0aWMgdHJlZXMuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclN0YXRpYyAoXG4gIGluZGV4LFxuICBpc0luRm9yXG4pIHtcbiAgdmFyIGNhY2hlZCA9IHRoaXMuX3N0YXRpY1RyZWVzIHx8ICh0aGlzLl9zdGF0aWNUcmVlcyA9IFtdKTtcbiAgdmFyIHRyZWUgPSBjYWNoZWRbaW5kZXhdO1xuICAvLyBpZiBoYXMgYWxyZWFkeS1yZW5kZXJlZCBzdGF0aWMgdHJlZSBhbmQgbm90IGluc2lkZSB2LWZvcixcbiAgLy8gd2UgY2FuIHJldXNlIHRoZSBzYW1lIHRyZWUuXG4gIGlmICh0cmVlICYmICFpc0luRm9yKSB7XG4gICAgcmV0dXJuIHRyZWVcbiAgfVxuICAvLyBvdGhlcndpc2UsIHJlbmRlciBhIGZyZXNoIHRyZWUuXG4gIHRyZWUgPSBjYWNoZWRbaW5kZXhdID0gdGhpcy4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNbaW5kZXhdLmNhbGwoXG4gICAgdGhpcy5fcmVuZGVyUHJveHksXG4gICAgbnVsbCxcbiAgICB0aGlzIC8vIGZvciByZW5kZXIgZm5zIGdlbmVyYXRlZCBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgdGVtcGxhdGVzXG4gICk7XG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19zdGF0aWNfX1wiICsgaW5kZXgpLCBmYWxzZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHYtb25jZS5cbiAqIEVmZmVjdGl2ZWx5IGl0IG1lYW5zIG1hcmtpbmcgdGhlIG5vZGUgYXMgc3RhdGljIHdpdGggYSB1bmlxdWUga2V5LlxuICovXG5mdW5jdGlvbiBtYXJrT25jZSAoXG4gIHRyZWUsXG4gIGluZGV4LFxuICBrZXlcbikge1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fb25jZV9fXCIgKyBpbmRleCArIChrZXkgPyAoXCJfXCIgKyBrZXkpIDogXCJcIikpLCB0cnVlKTtcbiAgcmV0dXJuIHRyZWVcbn1cblxuZnVuY3Rpb24gbWFya1N0YXRpYyAoXG4gIHRyZWUsXG4gIGtleSxcbiAgaXNPbmNlXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHJlZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0cmVlW2ldICYmIHR5cGVvZiB0cmVlW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAgICBtYXJrU3RhdGljTm9kZSh0cmVlW2ldLCAoa2V5ICsgXCJfXCIgKyBpKSwgaXNPbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWFya1N0YXRpY05vZGUodHJlZSwga2V5LCBpc09uY2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWNOb2RlIChub2RlLCBrZXksIGlzT25jZSkge1xuICBub2RlLmlzU3RhdGljID0gdHJ1ZTtcbiAgbm9kZS5rZXkgPSBrZXk7XG4gIG5vZGUuaXNPbmNlID0gaXNPbmNlO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gYmluZE9iamVjdExpc3RlbmVycyAoZGF0YSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAndi1vbiB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IHZhbHVlJyxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9uID0gZGF0YS5vbiA9IGRhdGEub24gPyBleHRlbmQoe30sIGRhdGEub24pIDoge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gb25ba2V5XTtcbiAgICAgICAgdmFyIG91cnMgPSB2YWx1ZVtrZXldO1xuICAgICAgICBvbltrZXldID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIG91cnMpIDogb3VycztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVTY29wZWRTbG90cyAoXG4gIGZucywgLy8gc2VlIGZsb3cvdm5vZGVcbiAgcmVzLFxuICAvLyB0aGUgZm9sbG93aW5nIGFyZSBhZGRlZCBpbiAyLjZcbiAgaGFzRHluYW1pY0tleXMsXG4gIGNvbnRlbnRIYXNoS2V5XG4pIHtcbiAgcmVzID0gcmVzIHx8IHsgJHN0YWJsZTogIWhhc0R5bmFtaWNLZXlzIH07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNsb3QgPSBmbnNbaV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2xvdCkpIHtcbiAgICAgIHJlc29sdmVTY29wZWRTbG90cyhzbG90LCByZXMsIGhhc0R5bmFtaWNLZXlzKTtcbiAgICB9IGVsc2UgaWYgKHNsb3QpIHtcbiAgICAgIC8vIG1hcmtlciBmb3IgcmV2ZXJzZSBwcm94eWluZyB2LXNsb3Qgd2l0aG91dCBzY29wZSBvbiB0aGlzLiRzbG90c1xuICAgICAgaWYgKHNsb3QucHJveHkpIHtcbiAgICAgICAgc2xvdC5mbi5wcm94eSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXNbc2xvdC5rZXldID0gc2xvdC5mbjtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbnRlbnRIYXNoS2V5KSB7XG4gICAgKHJlcykuJGtleSA9IGNvbnRlbnRIYXNoS2V5O1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmREeW5hbWljS2V5cyAoYmFzZU9iaiwgdmFsdWVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgdmFyIGtleSA9IHZhbHVlc1tpXTtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5KSB7XG4gICAgICBiYXNlT2JqW3ZhbHVlc1tpXV0gPSB2YWx1ZXNbaSArIDFdO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBrZXkgIT09ICcnICYmIGtleSAhPT0gbnVsbCkge1xuICAgICAgLy8gbnVsbCBpcyBhIHNwZWNpYWwgdmFsdWUgZm9yIGV4cGxpY2l0bHkgcmVtb3ZpbmcgYSBiaW5kaW5nXG4gICAgICB3YXJuKFxuICAgICAgICAoXCJJbnZhbGlkIHZhbHVlIGZvciBkeW5hbWljIGRpcmVjdGl2ZSBhcmd1bWVudCAoZXhwZWN0ZWQgc3RyaW5nIG9yIG51bGwpOiBcIiArIGtleSksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBiYXNlT2JqXG59XG5cbi8vIGhlbHBlciB0byBkeW5hbWljYWxseSBhcHBlbmQgbW9kaWZpZXIgcnVudGltZSBtYXJrZXJzIHRvIGV2ZW50IG5hbWVzLlxuLy8gZW5zdXJlIG9ubHkgYXBwZW5kIHdoZW4gdmFsdWUgaXMgYWxyZWFkeSBzdHJpbmcsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGNhc3Rcbi8vIHRvIHN0cmluZyBhbmQgY2F1c2UgdGhlIHR5cGUgY2hlY2sgdG8gbWlzcy5cbmZ1bmN0aW9uIHByZXBlbmRNb2RpZmllciAodmFsdWUsIHN5bWJvbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHN5bWJvbCArIHZhbHVlIDogdmFsdWVcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluc3RhbGxSZW5kZXJIZWxwZXJzICh0YXJnZXQpIHtcbiAgdGFyZ2V0Ll9vID0gbWFya09uY2U7XG4gIHRhcmdldC5fbiA9IHRvTnVtYmVyO1xuICB0YXJnZXQuX3MgPSB0b1N0cmluZztcbiAgdGFyZ2V0Ll9sID0gcmVuZGVyTGlzdDtcbiAgdGFyZ2V0Ll90ID0gcmVuZGVyU2xvdDtcbiAgdGFyZ2V0Ll9xID0gbG9vc2VFcXVhbDtcbiAgdGFyZ2V0Ll9pID0gbG9vc2VJbmRleE9mO1xuICB0YXJnZXQuX20gPSByZW5kZXJTdGF0aWM7XG4gIHRhcmdldC5fZiA9IHJlc29sdmVGaWx0ZXI7XG4gIHRhcmdldC5fayA9IGNoZWNrS2V5Q29kZXM7XG4gIHRhcmdldC5fYiA9IGJpbmRPYmplY3RQcm9wcztcbiAgdGFyZ2V0Ll92ID0gY3JlYXRlVGV4dFZOb2RlO1xuICB0YXJnZXQuX2UgPSBjcmVhdGVFbXB0eVZOb2RlO1xuICB0YXJnZXQuX3UgPSByZXNvbHZlU2NvcGVkU2xvdHM7XG4gIHRhcmdldC5fZyA9IGJpbmRPYmplY3RMaXN0ZW5lcnM7XG4gIHRhcmdldC5fZCA9IGJpbmREeW5hbWljS2V5cztcbiAgdGFyZ2V0Ll9wID0gcHJlcGVuZE1vZGlmaWVyO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgKFxuICBkYXRhLFxuICBwcm9wcyxcbiAgY2hpbGRyZW4sXG4gIHBhcmVudCxcbiAgQ3RvclxuKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICAvLyBlbnN1cmUgdGhlIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gaW4gZnVuY3Rpb25hbCBjb21wb25lbnRzXG4gIC8vIGdldHMgYSB1bmlxdWUgY29udGV4dCAtIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBjb3JyZWN0IG5hbWVkIHNsb3QgY2hlY2tcbiAgdmFyIGNvbnRleHRWbTtcbiAgaWYgKGhhc093bihwYXJlbnQsICdfdWlkJykpIHtcbiAgICBjb250ZXh0Vm0gPSBPYmplY3QuY3JlYXRlKHBhcmVudCk7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgY29udGV4dFZtLl9vcmlnaW5hbCA9IHBhcmVudDtcbiAgfSBlbHNlIHtcbiAgICAvLyB0aGUgY29udGV4dCB2bSBwYXNzZWQgaW4gaXMgYSBmdW5jdGlvbmFsIGNvbnRleHQgYXMgd2VsbC5cbiAgICAvLyBpbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgYXJlIGFibGUgdG8gZ2V0IGEgaG9sZCB0byB0aGVcbiAgICAvLyByZWFsIGNvbnRleHQgaW5zdGFuY2UuXG4gICAgY29udGV4dFZtID0gcGFyZW50O1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIHBhcmVudCA9IHBhcmVudC5fb3JpZ2luYWw7XG4gIH1cbiAgdmFyIGlzQ29tcGlsZWQgPSBpc1RydWUob3B0aW9ucy5fY29tcGlsZWQpO1xuICB2YXIgbmVlZE5vcm1hbGl6YXRpb24gPSAhaXNDb21waWxlZDtcblxuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMubGlzdGVuZXJzID0gZGF0YS5vbiB8fCBlbXB0eU9iamVjdDtcbiAgdGhpcy5pbmplY3Rpb25zID0gcmVzb2x2ZUluamVjdChvcHRpb25zLmluamVjdCwgcGFyZW50KTtcbiAgdGhpcy5zbG90cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMkMS4kc2xvdHMpIHtcbiAgICAgIG5vcm1hbGl6ZVNjb3BlZFNsb3RzKFxuICAgICAgICBkYXRhLnNjb3BlZFNsb3RzLFxuICAgICAgICB0aGlzJDEuJHNsb3RzID0gcmVzb2x2ZVNsb3RzKGNoaWxkcmVuLCBwYXJlbnQpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcyQxLiRzbG90c1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc2NvcGVkU2xvdHMnLCAoe1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuc2xvdHMoKSlcbiAgICB9XG4gIH0pKTtcblxuICAvLyBzdXBwb3J0IGZvciBjb21waWxlZCBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChpc0NvbXBpbGVkKSB7XG4gICAgLy8gZXhwb3NpbmcgJG9wdGlvbnMgZm9yIHJlbmRlclN0YXRpYygpXG4gICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgLy8gcHJlLXJlc29sdmUgc2xvdHMgZm9yIHJlbmRlclNsb3QoKVxuICAgIHRoaXMuJHNsb3RzID0gdGhpcy5zbG90cygpO1xuICAgIHRoaXMuJHNjb3BlZFNsb3RzID0gbm9ybWFsaXplU2NvcGVkU2xvdHMoZGF0YS5zY29wZWRTbG90cywgdGhpcy4kc2xvdHMpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuX3Njb3BlSWQpIHtcbiAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICAgIHZhciB2bm9kZSA9IGNyZWF0ZUVsZW1lbnQoY29udGV4dFZtLCBhLCBiLCBjLCBkLCBuZWVkTm9ybWFsaXphdGlvbik7XG4gICAgICBpZiAodm5vZGUgJiYgIUFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICAgIHZub2RlLmZuU2NvcGVJZCA9IG9wdGlvbnMuX3Njb3BlSWQ7XG4gICAgICAgIHZub2RlLmZuQ29udGV4dCA9IHBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2bm9kZVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pOyB9O1xuICB9XG59XG5cbmluc3RhbGxSZW5kZXJIZWxwZXJzKEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0LnByb3RvdHlwZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQgKFxuICBDdG9yLFxuICBwcm9wc0RhdGEsXG4gIGRhdGEsXG4gIGNvbnRleHRWbSxcbiAgY2hpbGRyZW5cbikge1xuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBwcm9wT3B0aW9ucyA9IG9wdGlvbnMucHJvcHM7XG4gIGlmIChpc0RlZihwcm9wT3B0aW9ucykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhIHx8IGVtcHR5T2JqZWN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRGVmKGRhdGEuYXR0cnMpKSB7IG1lcmdlUHJvcHMocHJvcHMsIGRhdGEuYXR0cnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEucHJvcHMpKSB7IG1lcmdlUHJvcHMocHJvcHMsIGRhdGEucHJvcHMpOyB9XG4gIH1cblxuICB2YXIgcmVuZGVyQ29udGV4dCA9IG5ldyBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dChcbiAgICBkYXRhLFxuICAgIHByb3BzLFxuICAgIGNoaWxkcmVuLFxuICAgIGNvbnRleHRWbSxcbiAgICBDdG9yXG4gICk7XG5cbiAgdmFyIHZub2RlID0gb3B0aW9ucy5yZW5kZXIuY2FsbChudWxsLCByZW5kZXJDb250ZXh0Ll9jLCByZW5kZXJDb250ZXh0KTtcblxuICBpZiAodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVybiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0KHZub2RlLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dClcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHZhciB2bm9kZXMgPSBub3JtYWxpemVDaGlsZHJlbih2bm9kZSkgfHwgW107XG4gICAgdmFyIHJlcyA9IG5ldyBBcnJheSh2bm9kZXMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzW2ldID0gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZXNbaV0sIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zLCByZW5kZXJDb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQgKHZub2RlLCBkYXRhLCBjb250ZXh0Vm0sIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpIHtcbiAgLy8gIzc4MTcgY2xvbmUgbm9kZSBiZWZvcmUgc2V0dGluZyBmbkNvbnRleHQsIG90aGVyd2lzZSBpZiB0aGUgbm9kZSBpcyByZXVzZWRcbiAgLy8gKGUuZy4gaXQgd2FzIGZyb20gYSBjYWNoZWQgbm9ybWFsIHNsb3QpIHRoZSBmbkNvbnRleHQgY2F1c2VzIG5hbWVkIHNsb3RzXG4gIC8vIHRoYXQgc2hvdWxkIG5vdCBiZSBtYXRjaGVkIHRvIG1hdGNoLlxuICB2YXIgY2xvbmUgPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgY2xvbmUuZm5Db250ZXh0ID0gY29udGV4dFZtO1xuICBjbG9uZS5mbk9wdGlvbnMgPSBvcHRpb25zO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIChjbG9uZS5kZXZ0b29sc01ldGEgPSBjbG9uZS5kZXZ0b29sc01ldGEgfHwge30pLnJlbmRlckNvbnRleHQgPSByZW5kZXJDb250ZXh0O1xuICB9XG4gIGlmIChkYXRhLnNsb3QpIHtcbiAgICAoY2xvbmUuZGF0YSB8fCAoY2xvbmUuZGF0YSA9IHt9KSkuc2xvdCA9IGRhdGEuc2xvdDtcbiAgfVxuICByZXR1cm4gY2xvbmVcbn1cblxuZnVuY3Rpb24gbWVyZ2VQcm9wcyAodG8sIGZyb20pIHtcbiAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICB0b1tjYW1lbGl6ZShrZXkpXSA9IGZyb21ba2V5XTtcbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLy8gaW5saW5lIGhvb2tzIHRvIGJlIGludm9rZWQgb24gY29tcG9uZW50IFZOb2RlcyBkdXJpbmcgcGF0Y2hcbnZhciBjb21wb25lbnRWTm9kZUhvb2tzID0ge1xuICBpbml0OiBmdW5jdGlvbiBpbml0ICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgaWYgKFxuICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgJiZcbiAgICAgICF2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQgJiZcbiAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlXG4gICAgKSB7XG4gICAgICAvLyBrZXB0LWFsaXZlIGNvbXBvbmVudHMsIHRyZWF0IGFzIGEgcGF0Y2hcbiAgICAgIHZhciBtb3VudGVkTm9kZSA9IHZub2RlOyAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgICBjb21wb25lbnRWTm9kZUhvb2tzLnByZXBhdGNoKG1vdW50ZWROb2RlLCBtb3VudGVkTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZShcbiAgICAgICAgdm5vZGUsXG4gICAgICAgIGFjdGl2ZUluc3RhbmNlXG4gICAgICApO1xuICAgICAgY2hpbGQuJG1vdW50KGh5ZHJhdGluZyA/IHZub2RlLmVsbSA6IHVuZGVmaW5lZCwgaHlkcmF0aW5nKTtcbiAgICB9XG4gIH0sXG5cbiAgcHJlcGF0Y2g6IGZ1bmN0aW9uIHByZXBhdGNoIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBvbGRWbm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICB1cGRhdGVDaGlsZENvbXBvbmVudChcbiAgICAgIGNoaWxkLFxuICAgICAgb3B0aW9ucy5wcm9wc0RhdGEsIC8vIHVwZGF0ZWQgcHJvcHNcbiAgICAgIG9wdGlvbnMubGlzdGVuZXJzLCAvLyB1cGRhdGVkIGxpc3RlbmVyc1xuICAgICAgdm5vZGUsIC8vIG5ldyBwYXJlbnQgdm5vZGVcbiAgICAgIG9wdGlvbnMuY2hpbGRyZW4gLy8gbmV3IGNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydCAodm5vZGUpIHtcbiAgICB2YXIgY29udGV4dCA9IHZub2RlLmNvbnRleHQ7XG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkKSB7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ29uU2VydmljZUNyZWF0ZWQnKTtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnb25TZXJ2aWNlQXR0YWNoZWQnKTtcbiAgICAgIGNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdtb3VudGVkJyk7XG4gICAgfVxuICAgIGlmICh2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgaWYgKGNvbnRleHQuX2lzTW91bnRlZCkge1xuICAgICAgICAvLyB2dWUtcm91dGVyIzEyMTJcbiAgICAgICAgLy8gRHVyaW5nIHVwZGF0ZXMsIGEga2VwdC1hbGl2ZSBjb21wb25lbnQncyBjaGlsZCBjb21wb25lbnRzIG1heVxuICAgICAgICAvLyBjaGFuZ2UsIHNvIGRpcmVjdGx5IHdhbGtpbmcgdGhlIHRyZWUgaGVyZSBtYXkgY2FsbCBhY3RpdmF0ZWQgaG9va3NcbiAgICAgICAgLy8gb24gaW5jb3JyZWN0IGNoaWxkcmVuLiBJbnN0ZWFkIHdlIHB1c2ggdGhlbSBpbnRvIGEgcXVldWUgd2hpY2ggd2lsbFxuICAgICAgICAvLyBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHdob2xlIHBhdGNoIHByb2Nlc3MgZW5kZWQuXG4gICAgICAgIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSAodm5vZGUpIHtcbiAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgaWYgKCF2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgaG9va3NUb01lcmdlID0gT2JqZWN0LmtleXMoY29tcG9uZW50Vk5vZGVIb29rcyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAoXG4gIEN0b3IsXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICBpZiAoaXNVbmRlZihDdG9yKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJhc2VDdG9yID0gY29udGV4dC4kb3B0aW9ucy5fYmFzZTtcblxuICAvLyBwbGFpbiBvcHRpb25zIG9iamVjdDogdHVybiBpdCBpbnRvIGEgY29uc3RydWN0b3JcbiAgaWYgKGlzT2JqZWN0KEN0b3IpKSB7XG4gICAgQ3RvciA9IGJhc2VDdG9yLmV4dGVuZChDdG9yKTtcbiAgfVxuXG4gIC8vIGlmIGF0IHRoaXMgc3RhZ2UgaXQncyBub3QgYSBjb25zdHJ1Y3RvciBvciBhbiBhc3luYyBjb21wb25lbnQgZmFjdG9yeSxcbiAgLy8gcmVqZWN0LlxuICBpZiAodHlwZW9mIEN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybigoXCJJbnZhbGlkIENvbXBvbmVudCBkZWZpbml0aW9uOiBcIiArIChTdHJpbmcoQ3RvcikpKSwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gYXN5bmMgY29tcG9uZW50XG4gIHZhciBhc3luY0ZhY3Rvcnk7XG4gIGlmIChpc1VuZGVmKEN0b3IuY2lkKSkge1xuICAgIGFzeW5jRmFjdG9yeSA9IEN0b3I7XG4gICAgQ3RvciA9IHJlc29sdmVBc3luY0NvbXBvbmVudChhc3luY0ZhY3RvcnksIGJhc2VDdG9yKTtcbiAgICBpZiAoQ3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciBub2RlIGZvciBhc3luYyBjb21wb25lbnQsIHdoaWNoIGlzIHJlbmRlcmVkXG4gICAgICAvLyBhcyBhIGNvbW1lbnQgbm9kZSBidXQgcHJlc2VydmVzIGFsbCB0aGUgcmF3IGluZm9ybWF0aW9uIGZvciB0aGUgbm9kZS5cbiAgICAgIC8vIHRoZSBpbmZvcm1hdGlvbiB3aWxsIGJlIHVzZWQgZm9yIGFzeW5jIHNlcnZlci1yZW5kZXJpbmcgYW5kIGh5ZHJhdGlvbi5cbiAgICAgIHJldHVybiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyKFxuICAgICAgICBhc3luY0ZhY3RvcnksXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB0YWdcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICAvLyByZXNvbHZlIGNvbnN0cnVjdG9yIG9wdGlvbnMgaW4gY2FzZSBnbG9iYWwgbWl4aW5zIGFyZSBhcHBsaWVkIGFmdGVyXG4gIC8vIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBjcmVhdGlvblxuICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3IpO1xuXG4gIC8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBkYXRhIGludG8gcHJvcHMgJiBldmVudHNcbiAgaWYgKGlzRGVmKGRhdGEubW9kZWwpKSB7XG4gICAgdHJhbnNmb3JtTW9kZWwoQ3Rvci5vcHRpb25zLCBkYXRhKTtcbiAgfVxuXG4gIC8vIGV4dHJhY3QgcHJvcHNcbiAgdmFyIHByb3BzRGF0YSA9IGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgdGFnLCBjb250ZXh0KTsgLy8gZml4ZWQgYnkgeHh4eHh4XG5cbiAgLy8gZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuZnVuY3Rpb25hbCkpIHtcbiAgICByZXR1cm4gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudChDdG9yLCBwcm9wc0RhdGEsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKVxuICB9XG5cbiAgLy8gZXh0cmFjdCBsaXN0ZW5lcnMsIHNpbmNlIHRoZXNlIG5lZWRzIHRvIGJlIHRyZWF0ZWQgYXNcbiAgLy8gY2hpbGQgY29tcG9uZW50IGxpc3RlbmVycyBpbnN0ZWFkIG9mIERPTSBsaXN0ZW5lcnNcbiAgdmFyIGxpc3RlbmVycyA9IGRhdGEub247XG4gIC8vIHJlcGxhY2Ugd2l0aCBsaXN0ZW5lcnMgd2l0aCAubmF0aXZlIG1vZGlmaWVyXG4gIC8vIHNvIGl0IGdldHMgcHJvY2Vzc2VkIGR1cmluZyBwYXJlbnQgY29tcG9uZW50IHBhdGNoLlxuICBkYXRhLm9uID0gZGF0YS5uYXRpdmVPbjtcblxuICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5hYnN0cmFjdCkpIHtcbiAgICAvLyBhYnN0cmFjdCBjb21wb25lbnRzIGRvIG5vdCBrZWVwIGFueXRoaW5nXG4gICAgLy8gb3RoZXIgdGhhbiBwcm9wcyAmIGxpc3RlbmVycyAmIHNsb3RcblxuICAgIC8vIHdvcmsgYXJvdW5kIGZsb3dcbiAgICB2YXIgc2xvdCA9IGRhdGEuc2xvdDtcbiAgICBkYXRhID0ge307XG4gICAgaWYgKHNsb3QpIHtcbiAgICAgIGRhdGEuc2xvdCA9IHNsb3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5zdGFsbCBjb21wb25lbnQgbWFuYWdlbWVudCBob29rcyBvbnRvIHRoZSBwbGFjZWhvbGRlciBub2RlXG4gIGluc3RhbGxDb21wb25lbnRIb29rcyhkYXRhKTtcblxuICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciB2bm9kZVxuICB2YXIgbmFtZSA9IEN0b3Iub3B0aW9ucy5uYW1lIHx8IHRhZztcbiAgdmFyIHZub2RlID0gbmV3IFZOb2RlKFxuICAgIChcInZ1ZS1jb21wb25lbnQtXCIgKyAoQ3Rvci5jaWQpICsgKG5hbWUgPyAoXCItXCIgKyBuYW1lKSA6ICcnKSksXG4gICAgZGF0YSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dCxcbiAgICB7IEN0b3I6IEN0b3IsIHByb3BzRGF0YTogcHJvcHNEYXRhLCBsaXN0ZW5lcnM6IGxpc3RlbmVycywgdGFnOiB0YWcsIGNoaWxkcmVuOiBjaGlsZHJlbiB9LFxuICAgIGFzeW5jRmFjdG9yeVxuICApO1xuXG4gIHJldHVybiB2bm9kZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlIChcbiAgdm5vZGUsIC8vIHdlIGtub3cgaXQncyBNb3VudGVkQ29tcG9uZW50Vk5vZGUgYnV0IGZsb3cgZG9lc24ndFxuICBwYXJlbnQgLy8gYWN0aXZlSW5zdGFuY2UgaW4gbGlmZWN5Y2xlIHN0YXRlXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgX2lzQ29tcG9uZW50OiB0cnVlLFxuICAgIF9wYXJlbnRWbm9kZTogdm5vZGUsXG4gICAgcGFyZW50OiBwYXJlbnRcbiAgfTtcbiAgLy8gY2hlY2sgaW5saW5lLXRlbXBsYXRlIHJlbmRlciBmdW5jdGlvbnNcbiAgdmFyIGlubGluZVRlbXBsYXRlID0gdm5vZGUuZGF0YS5pbmxpbmVUZW1wbGF0ZTtcbiAgaWYgKGlzRGVmKGlubGluZVRlbXBsYXRlKSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gaW5saW5lVGVtcGxhdGUucmVuZGVyO1xuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gaW5saW5lVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICB9XG4gIHJldHVybiBuZXcgdm5vZGUuY29tcG9uZW50T3B0aW9ucy5DdG9yKG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIGluc3RhbGxDb21wb25lbnRIb29rcyAoZGF0YSkge1xuICB2YXIgaG9va3MgPSBkYXRhLmhvb2sgfHwgKGRhdGEuaG9vayA9IHt9KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rc1RvTWVyZ2UubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gaG9va3NUb01lcmdlW2ldO1xuICAgIHZhciBleGlzdGluZyA9IGhvb2tzW2tleV07XG4gICAgdmFyIHRvTWVyZ2UgPSBjb21wb25lbnRWTm9kZUhvb2tzW2tleV07XG4gICAgaWYgKGV4aXN0aW5nICE9PSB0b01lcmdlICYmICEoZXhpc3RpbmcgJiYgZXhpc3RpbmcuX21lcmdlZCkpIHtcbiAgICAgIGhvb2tzW2tleV0gPSBleGlzdGluZyA/IG1lcmdlSG9vayQxKHRvTWVyZ2UsIGV4aXN0aW5nKSA6IHRvTWVyZ2U7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlSG9vayQxIChmMSwgZjIpIHtcbiAgdmFyIG1lcmdlZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgLy8gZmxvdyBjb21wbGFpbnMgYWJvdXQgZXh0cmEgYXJncyB3aGljaCBpcyB3aHkgd2UgdXNlIGFueVxuICAgIGYxKGEsIGIpO1xuICAgIGYyKGEsIGIpO1xuICB9O1xuICBtZXJnZWQuX21lcmdlZCA9IHRydWU7XG4gIHJldHVybiBtZXJnZWRcbn1cblxuLy8gdHJhbnNmb3JtIGNvbXBvbmVudCB2LW1vZGVsIGluZm8gKHZhbHVlIGFuZCBjYWxsYmFjaykgaW50b1xuLy8gcHJvcCBhbmQgZXZlbnQgaGFuZGxlciByZXNwZWN0aXZlbHkuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Nb2RlbCAob3B0aW9ucywgZGF0YSkge1xuICB2YXIgcHJvcCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwucHJvcCkgfHwgJ3ZhbHVlJztcbiAgdmFyIGV2ZW50ID0gKG9wdGlvbnMubW9kZWwgJiYgb3B0aW9ucy5tb2RlbC5ldmVudCkgfHwgJ2lucHV0J1xuICA7KGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSkpW3Byb3BdID0gZGF0YS5tb2RlbC52YWx1ZTtcbiAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgdmFyIGV4aXN0aW5nID0gb25bZXZlbnRdO1xuICB2YXIgY2FsbGJhY2sgPSBkYXRhLm1vZGVsLmNhbGxiYWNrO1xuICBpZiAoaXNEZWYoZXhpc3RpbmcpKSB7XG4gICAgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShleGlzdGluZylcbiAgICAgICAgPyBleGlzdGluZy5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTFcbiAgICAgICAgOiBleGlzdGluZyAhPT0gY2FsbGJhY2tcbiAgICApIHtcbiAgICAgIG9uW2V2ZW50XSA9IFtjYWxsYmFja10uY29uY2F0KGV4aXN0aW5nKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb25bZXZlbnRdID0gY2FsbGJhY2s7XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBTSU1QTEVfTk9STUFMSVpFID0gMTtcbnZhciBBTFdBWVNfTk9STUFMSVpFID0gMjtcblxuLy8gd3JhcHBlciBmdW5jdGlvbiBmb3IgcHJvdmlkaW5nIGEgbW9yZSBmbGV4aWJsZSBpbnRlcmZhY2Vcbi8vIHdpdGhvdXQgZ2V0dGluZyB5ZWxsZWQgYXQgYnkgZmxvd1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoXG4gIGNvbnRleHQsXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIG5vcm1hbGl6YXRpb25UeXBlLFxuICBhbHdheXNOb3JtYWxpemVcbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSB8fCBpc1ByaW1pdGl2ZShkYXRhKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gY2hpbGRyZW47XG4gICAgY2hpbGRyZW4gPSBkYXRhO1xuICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKGlzVHJ1ZShhbHdheXNOb3JtYWxpemUpKSB7XG4gICAgbm9ybWFsaXphdGlvblR5cGUgPSBBTFdBWVNfTk9STUFMSVpFO1xuICB9XG4gIHJldHVybiBfY3JlYXRlRWxlbWVudChjb250ZXh0LCB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSlcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZVxuKSB7XG4gIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZigoZGF0YSkuX19vYl9fKSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgIFwiQXZvaWQgdXNpbmcgb2JzZXJ2ZWQgZGF0YSBvYmplY3QgYXMgdm5vZGUgZGF0YTogXCIgKyAoSlNPTi5zdHJpbmdpZnkoZGF0YSkpICsgXCJcXG5cIiArXG4gICAgICAnQWx3YXlzIGNyZWF0ZSBmcmVzaCB2bm9kZSBkYXRhIG9iamVjdHMgaW4gZWFjaCByZW5kZXIhJyxcbiAgICAgIGNvbnRleHRcbiAgICApO1xuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxuICAvLyBvYmplY3Qgc3ludGF4IGluIHYtYmluZFxuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5pcykpIHtcbiAgICB0YWcgPSBkYXRhLmlzO1xuICB9XG4gIGlmICghdGFnKSB7XG4gICAgLy8gaW4gY2FzZSBvZiBjb21wb25lbnQgOmlzIHNldCB0byBmYWxzeSB2YWx1ZVxuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxuICAvLyB3YXJuIGFnYWluc3Qgbm9uLXByaW1pdGl2ZSBrZXlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICBpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLmtleSkgJiYgIWlzUHJpbWl0aXZlKGRhdGEua2V5KVxuICApIHtcbiAgICB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgdXNpbmcgbm9uLXByaW1pdGl2ZSB2YWx1ZSBhcyBrZXksICcgK1xuICAgICAgICAndXNlIHN0cmluZy9udW1iZXIgdmFsdWUgaW5zdGVhZC4nLFxuICAgICAgICBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfVxuICAvLyBzdXBwb3J0IHNpbmdsZSBmdW5jdGlvbiBjaGlsZHJlbiBhcyBkZWZhdWx0IHNjb3BlZCBzbG90XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxuICAgIHR5cGVvZiBjaGlsZHJlblswXSA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICBkYXRhID0gZGF0YSB8fCB7fTtcbiAgICBkYXRhLnNjb3BlZFNsb3RzID0geyBkZWZhdWx0OiBjaGlsZHJlblswXSB9O1xuICAgIGNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIH1cbiAgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBBTFdBWVNfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH0gZWxzZSBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IFNJTVBMRV9OT1JNQUxJWkUpIHtcbiAgICBjaGlsZHJlbiA9IHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgfVxuICB2YXIgdm5vZGUsIG5zO1xuICBpZiAodHlwZW9mIHRhZyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgQ3RvcjtcbiAgICBucyA9IChjb250ZXh0LiR2bm9kZSAmJiBjb250ZXh0LiR2bm9kZS5ucykgfHwgY29uZmlnLmdldFRhZ05hbWVzcGFjZSh0YWcpO1xuICAgIGlmIChjb25maWcuaXNSZXNlcnZlZFRhZyh0YWcpKSB7XG4gICAgICAvLyBwbGF0Zm9ybSBidWlsdC1pbiBlbGVtZW50c1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5uYXRpdmVPbikpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJUaGUgLm5hdGl2ZSBtb2RpZmllciBmb3Igdi1vbiBpcyBvbmx5IHZhbGlkIG9uIGNvbXBvbmVudHMgYnV0IGl0IHdhcyB1c2VkIG9uIDxcIiArIHRhZyArIFwiPi5cIiksXG4gICAgICAgICAgY29udGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIGNvbmZpZy5wYXJzZVBsYXRmb3JtVGFnTmFtZSh0YWcpLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICgoIWRhdGEgfHwgIWRhdGEucHJlKSAmJiBpc0RlZihDdG9yID0gcmVzb2x2ZUFzc2V0KGNvbnRleHQuJG9wdGlvbnMsICdjb21wb25lbnRzJywgdGFnKSkpIHtcbiAgICAgIC8vIGNvbXBvbmVudFxuICAgICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQoQ3RvciwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4sIHRhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVua25vd24gb3IgdW5saXN0ZWQgbmFtZXNwYWNlZCBlbGVtZW50c1xuICAgICAgLy8gY2hlY2sgYXQgcnVudGltZSBiZWNhdXNlIGl0IG1heSBnZXQgYXNzaWduZWQgYSBuYW1lc3BhY2Ugd2hlbiBpdHNcbiAgICAgIC8vIHBhcmVudCBub3JtYWxpemVzIGNoaWxkcmVuXG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgdGFnLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGRpcmVjdCBjb21wb25lbnQgb3B0aW9ucyAvIGNvbnN0cnVjdG9yXG4gICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQodGFnLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbik7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSBpZiAoaXNEZWYodm5vZGUpKSB7XG4gICAgaWYgKGlzRGVmKG5zKSkgeyBhcHBseU5TKHZub2RlLCBucyk7IH1cbiAgICBpZiAoaXNEZWYoZGF0YSkpIHsgcmVnaXN0ZXJEZWVwQmluZGluZ3MoZGF0YSk7IH1cbiAgICByZXR1cm4gdm5vZGVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlOUyAodm5vZGUsIG5zLCBmb3JjZSkge1xuICB2bm9kZS5ucyA9IG5zO1xuICBpZiAodm5vZGUudGFnID09PSAnZm9yZWlnbk9iamVjdCcpIHtcbiAgICAvLyB1c2UgZGVmYXVsdCBuYW1lc3BhY2UgaW5zaWRlIGZvcmVpZ25PYmplY3RcbiAgICBucyA9IHVuZGVmaW5lZDtcbiAgICBmb3JjZSA9IHRydWU7XG4gIH1cbiAgaWYgKGlzRGVmKHZub2RlLmNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChpc0RlZihjaGlsZC50YWcpICYmIChcbiAgICAgICAgaXNVbmRlZihjaGlsZC5ucykgfHwgKGlzVHJ1ZShmb3JjZSkgJiYgY2hpbGQudGFnICE9PSAnc3ZnJykpKSB7XG4gICAgICAgIGFwcGx5TlMoY2hpbGQsIG5zLCBmb3JjZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIHJlZiAjNTMxOFxuLy8gbmVjZXNzYXJ5IHRvIGVuc3VyZSBwYXJlbnQgcmUtcmVuZGVyIHdoZW4gZGVlcCBiaW5kaW5ncyBsaWtlIDpzdHlsZSBhbmRcbi8vIDpjbGFzcyBhcmUgdXNlZCBvbiBzbG90IG5vZGVzXG5mdW5jdGlvbiByZWdpc3RlckRlZXBCaW5kaW5ncyAoZGF0YSkge1xuICBpZiAoaXNPYmplY3QoZGF0YS5zdHlsZSkpIHtcbiAgICB0cmF2ZXJzZShkYXRhLnN0eWxlKTtcbiAgfVxuICBpZiAoaXNPYmplY3QoZGF0YS5jbGFzcykpIHtcbiAgICB0cmF2ZXJzZShkYXRhLmNsYXNzKTtcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFJlbmRlciAodm0pIHtcbiAgdm0uX3Zub2RlID0gbnVsbDsgLy8gdGhlIHJvb3Qgb2YgdGhlIGNoaWxkIHRyZWVcbiAgdm0uX3N0YXRpY1RyZWVzID0gbnVsbDsgLy8gdi1vbmNlIGNhY2hlZCB0cmVlc1xuICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICB2YXIgcGFyZW50Vm5vZGUgPSB2bS4kdm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTsgLy8gdGhlIHBsYWNlaG9sZGVyIG5vZGUgaW4gcGFyZW50IHRyZWVcbiAgdmFyIHJlbmRlckNvbnRleHQgPSBwYXJlbnRWbm9kZSAmJiBwYXJlbnRWbm9kZS5jb250ZXh0O1xuICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMob3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4sIHJlbmRlckNvbnRleHQpO1xuICB2bS4kc2NvcGVkU2xvdHMgPSBlbXB0eU9iamVjdDtcbiAgLy8gYmluZCB0aGUgY3JlYXRlRWxlbWVudCBmbiB0byB0aGlzIGluc3RhbmNlXG4gIC8vIHNvIHRoYXQgd2UgZ2V0IHByb3BlciByZW5kZXIgY29udGV4dCBpbnNpZGUgaXQuXG4gIC8vIGFyZ3Mgb3JkZXI6IHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlLCBhbHdheXNOb3JtYWxpemVcbiAgLy8gaW50ZXJuYWwgdmVyc2lvbiBpcyB1c2VkIGJ5IHJlbmRlciBmdW5jdGlvbnMgY29tcGlsZWQgZnJvbSB0ZW1wbGF0ZXNcbiAgdm0uX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgZmFsc2UpOyB9O1xuICAvLyBub3JtYWxpemF0aW9uIGlzIGFsd2F5cyBhcHBsaWVkIGZvciB0aGUgcHVibGljIHZlcnNpb24sIHVzZWQgaW5cbiAgLy8gdXNlci13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMuXG4gIHZtLiRjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIHRydWUpOyB9O1xuXG4gIC8vICRhdHRycyAmICRsaXN0ZW5lcnMgYXJlIGV4cG9zZWQgZm9yIGVhc2llciBIT0MgY3JlYXRpb24uXG4gIC8vIHRoZXkgbmVlZCB0byBiZSByZWFjdGl2ZSBzbyB0aGF0IEhPQ3MgdXNpbmcgdGhlbSBhcmUgYWx3YXlzIHVwZGF0ZWRcbiAgdmFyIHBhcmVudERhdGEgPSBwYXJlbnRWbm9kZSAmJiBwYXJlbnRWbm9kZS5kYXRhO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRhdHRycyBpcyByZWFkb25seS5cIiwgdm0pO1xuICAgIH0sIHRydWUpO1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGxpc3RlbmVycyBpcyByZWFkb25seS5cIiwgdm0pO1xuICAgIH0sIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIG51bGwsIHRydWUpO1xuICB9XG59XG5cbnZhciBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSBudWxsO1xuXG5mdW5jdGlvbiByZW5kZXJNaXhpbiAoVnVlKSB7XG4gIC8vIGluc3RhbGwgcnVudGltZSBjb252ZW5pZW5jZSBoZWxwZXJzXG4gIGluc3RhbGxSZW5kZXJIZWxwZXJzKFZ1ZS5wcm90b3R5cGUpO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIG5leHRUaWNrKGZuLCB0aGlzKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciByZWYgPSB2bS4kb3B0aW9ucztcbiAgICB2YXIgcmVuZGVyID0gcmVmLnJlbmRlcjtcbiAgICB2YXIgX3BhcmVudFZub2RlID0gcmVmLl9wYXJlbnRWbm9kZTtcblxuICAgIGlmIChfcGFyZW50Vm5vZGUpIHtcbiAgICAgIHZtLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKFxuICAgICAgICBfcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdm0uJHNsb3RzLFxuICAgICAgICB2bS4kc2NvcGVkU2xvdHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHBhcmVudCB2bm9kZS4gdGhpcyBhbGxvd3MgcmVuZGVyIGZ1bmN0aW9ucyB0byBoYXZlIGFjY2Vzc1xuICAgIC8vIHRvIHRoZSBkYXRhIG9uIHRoZSBwbGFjZWhvbGRlciBub2RlLlxuICAgIHZtLiR2bm9kZSA9IF9wYXJlbnRWbm9kZTtcbiAgICAvLyByZW5kZXIgc2VsZlxuICAgIHZhciB2bm9kZTtcbiAgICB0cnkge1xuICAgICAgLy8gVGhlcmUncyBubyBuZWVkIHRvIG1haW50YWluIGEgc3RhY2sgYmVjYXVzZSBhbGwgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyBzZXBhcmF0ZWx5IGZyb20gb25lIGFub3RoZXIuIE5lc3RlZCBjb21wb25lbnQncyByZW5kZXIgZm5zIGFyZSBjYWxsZWRcbiAgICAgIC8vIHdoZW4gcGFyZW50IGNvbXBvbmVudCBpcyBwYXRjaGVkLlxuICAgICAgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gdm07XG4gICAgICB2bm9kZSA9IHJlbmRlci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlclwiKTtcbiAgICAgIC8vIHJldHVybiBlcnJvciByZW5kZXIgcmVzdWx0LFxuICAgICAgLy8gb3IgcHJldmlvdXMgdm5vZGUgdG8gcHJldmVudCByZW5kZXIgZXJyb3IgY2F1c2luZyBibGFuayBjb21wb25lbnRcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB2bS4kb3B0aW9ucy5yZW5kZXJFcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZub2RlID0gdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50LCBlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlckVycm9yXCIpO1xuICAgICAgICAgIHZub2RlID0gdm0uX3Zub2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gaWYgdGhlIHJldHVybmVkIGFycmF5IGNvbnRhaW5zIG9ubHkgYSBzaW5nbGUgbm9kZSwgYWxsb3cgaXRcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkgJiYgdm5vZGUubGVuZ3RoID09PSAxKSB7XG4gICAgICB2bm9kZSA9IHZub2RlWzBdO1xuICAgIH1cbiAgICAvLyByZXR1cm4gZW1wdHkgdm5vZGUgaW4gY2FzZSB0aGUgcmVuZGVyIGZ1bmN0aW9uIGVycm9yZWQgb3V0XG4gICAgaWYgKCEodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ011bHRpcGxlIHJvb3Qgbm9kZXMgcmV0dXJuZWQgZnJvbSByZW5kZXIgZnVuY3Rpb24uIFJlbmRlciBmdW5jdGlvbiAnICtcbiAgICAgICAgICAnc2hvdWxkIHJldHVybiBhIHNpbmdsZSByb290IG5vZGUuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdm5vZGUgPSBjcmVhdGVFbXB0eVZOb2RlKCk7XG4gICAgfVxuICAgIC8vIHNldCBwYXJlbnRcbiAgICB2bm9kZS5wYXJlbnQgPSBfcGFyZW50Vm5vZGU7XG4gICAgcmV0dXJuIHZub2RlXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBlbnN1cmVDdG9yIChjb21wLCBiYXNlKSB7XG4gIGlmIChcbiAgICBjb21wLl9fZXNNb2R1bGUgfHxcbiAgICAoaGFzU3ltYm9sICYmIGNvbXBbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ01vZHVsZScpXG4gICkge1xuICAgIGNvbXAgPSBjb21wLmRlZmF1bHQ7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0KGNvbXApXG4gICAgPyBiYXNlLmV4dGVuZChjb21wKVxuICAgIDogY29tcFxufVxuXG5mdW5jdGlvbiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyIChcbiAgZmFjdG9yeSxcbiAgZGF0YSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHRhZ1xuKSB7XG4gIHZhciBub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICBub2RlLmFzeW5jRmFjdG9yeSA9IGZhY3Rvcnk7XG4gIG5vZGUuYXN5bmNNZXRhID0geyBkYXRhOiBkYXRhLCBjb250ZXh0OiBjb250ZXh0LCBjaGlsZHJlbjogY2hpbGRyZW4sIHRhZzogdGFnIH07XG4gIHJldHVybiBub2RlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBc3luY0NvbXBvbmVudCAoXG4gIGZhY3RvcnksXG4gIGJhc2VDdG9yXG4pIHtcbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmVycm9yKSAmJiBpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5lcnJvckNvbXBcbiAgfVxuXG4gIGlmIChpc0RlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgIHJldHVybiBmYWN0b3J5LnJlc29sdmVkXG4gIH1cblxuICB2YXIgb3duZXIgPSBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2U7XG4gIGlmIChvd25lciAmJiBpc0RlZihmYWN0b3J5Lm93bmVycykgJiYgZmFjdG9yeS5vd25lcnMuaW5kZXhPZihvd25lcikgPT09IC0xKSB7XG4gICAgLy8gYWxyZWFkeSBwZW5kaW5nXG4gICAgZmFjdG9yeS5vd25lcnMucHVzaChvd25lcik7XG4gIH1cblxuICBpZiAoaXNUcnVlKGZhY3RvcnkubG9hZGluZykgJiYgaXNEZWYoZmFjdG9yeS5sb2FkaW5nQ29tcCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nQ29tcFxuICB9XG5cbiAgaWYgKG93bmVyICYmICFpc0RlZihmYWN0b3J5Lm93bmVycykpIHtcbiAgICB2YXIgb3duZXJzID0gZmFjdG9yeS5vd25lcnMgPSBbb3duZXJdO1xuICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICB2YXIgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICB2YXIgdGltZXJUaW1lb3V0ID0gbnVsbFxuXG4gICAgOyhvd25lcikuJG9uKCdob29rOmRlc3Ryb3llZCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlbW92ZShvd25lcnMsIG93bmVyKTsgfSk7XG5cbiAgICB2YXIgZm9yY2VSZW5kZXIgPSBmdW5jdGlvbiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG93bmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgKG93bmVyc1tpXSkuJGZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW5kZXJDb21wbGV0ZWQpIHtcbiAgICAgICAgb3duZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIGlmICh0aW1lckxvYWRpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJMb2FkaW5nKTtcbiAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lclRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJUaW1lb3V0KTtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlID0gb25jZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAvLyBjYWNoZSByZXNvbHZlZFxuICAgICAgZmFjdG9yeS5yZXNvbHZlZCA9IGVuc3VyZUN0b3IocmVzLCBiYXNlQ3Rvcik7XG4gICAgICAvLyBpbnZva2UgY2FsbGJhY2tzIG9ubHkgaWYgdGhpcyBpcyBub3QgYSBzeW5jaHJvbm91cyByZXNvbHZlXG4gICAgICAvLyAoYXN5bmMgcmVzb2x2ZXMgYXJlIHNoaW1tZWQgYXMgc3luY2hyb25vdXMgZHVyaW5nIFNTUilcbiAgICAgIGlmICghc3luYykge1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHJlamVjdCA9IG9uY2UoZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudDogXCIgKyAoU3RyaW5nKGZhY3RvcnkpKSArXG4gICAgICAgIChyZWFzb24gPyAoXCJcXG5SZWFzb246IFwiICsgcmVhc29uKSA6ICcnKVxuICAgICAgKTtcbiAgICAgIGlmIChpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICAgICAgZmFjdG9yeS5lcnJvciA9IHRydWU7XG4gICAgICAgIGZvcmNlUmVuZGVyKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHJlcyA9IGZhY3RvcnkocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICBpZiAoaXNQcm9taXNlKHJlcykpIHtcbiAgICAgICAgLy8gKCkgPT4gUHJvbWlzZVxuICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlKHJlcy5jb21wb25lbnQpKSB7XG4gICAgICAgIHJlcy5jb21wb25lbnQudGhlbihyZXNvbHZlLCByZWplY3QpO1xuXG4gICAgICAgIGlmIChpc0RlZihyZXMuZXJyb3IpKSB7XG4gICAgICAgICAgZmFjdG9yeS5lcnJvckNvbXAgPSBlbnN1cmVDdG9yKHJlcy5lcnJvciwgYmFzZUN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy5sb2FkaW5nKSkge1xuICAgICAgICAgIGZhY3RvcnkubG9hZGluZ0NvbXAgPSBlbnN1cmVDdG9yKHJlcy5sb2FkaW5nLCBiYXNlQ3Rvcik7XG4gICAgICAgICAgaWYgKHJlcy5kZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZXJMb2FkaW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpICYmIGlzVW5kZWYoZmFjdG9yeS5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVzLmRlbGF5IHx8IDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy50aW1lb3V0KSkge1xuICAgICAgICAgIHRpbWVyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgICAgICAgICAgIHJlamVjdChcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgICAgICAgICAgICAgICA/IChcInRpbWVvdXQgKFwiICsgKHJlcy50aW1lb3V0KSArIFwibXMpXCIpXG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCByZXMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzeW5jID0gZmFsc2U7XG4gICAgLy8gcmV0dXJuIGluIGNhc2UgcmVzb2x2ZWQgc3luY2hyb25vdXNseVxuICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdcbiAgICAgID8gZmFjdG9yeS5sb2FkaW5nQ29tcFxuICAgICAgOiBmYWN0b3J5LnJlc29sdmVkXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGlzQXN5bmNQbGFjZWhvbGRlciAobm9kZSkge1xuICByZXR1cm4gbm9kZS5pc0NvbW1lbnQgJiYgbm9kZS5hc3luY0ZhY3Rvcnlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGdldEZpcnN0Q29tcG9uZW50Q2hpbGQgKGNoaWxkcmVuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoYykgJiYgKGlzRGVmKGMuY29tcG9uZW50T3B0aW9ucykgfHwgaXNBc3luY1BsYWNlaG9sZGVyKGMpKSkge1xuICAgICAgICByZXR1cm4gY1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRFdmVudHMgKHZtKSB7XG4gIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2bS5faGFzSG9va0V2ZW50ID0gZmFsc2U7XG4gIC8vIGluaXQgcGFyZW50IGF0dGFjaGVkIGV2ZW50c1xuICB2YXIgbGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgaWYgKGxpc3RlbmVycykge1xuICAgIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyh2bSwgbGlzdGVuZXJzKTtcbiAgfVxufVxuXG52YXIgdGFyZ2V0O1xuXG5mdW5jdGlvbiBhZGQgKGV2ZW50LCBmbikge1xuICB0YXJnZXQuJG9uKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSQxIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvZmYoZXZlbnQsIGZuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT25jZUhhbmRsZXIgKGV2ZW50LCBmbikge1xuICB2YXIgX3RhcmdldCA9IHRhcmdldDtcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uY2VIYW5kbGVyICgpIHtcbiAgICB2YXIgcmVzID0gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICBfdGFyZ2V0LiRvZmYoZXZlbnQsIG9uY2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzIChcbiAgdm0sXG4gIGxpc3RlbmVycyxcbiAgb2xkTGlzdGVuZXJzXG4pIHtcbiAgdGFyZ2V0ID0gdm07XG4gIHVwZGF0ZUxpc3RlbmVycyhsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyB8fCB7fSwgYWRkLCByZW1vdmUkMSwgY3JlYXRlT25jZUhhbmRsZXIsIHZtKTtcbiAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBldmVudHNNaXhpbiAoVnVlKSB7XG4gIHZhciBob29rUkUgPSAvXmhvb2s6LztcbiAgVnVlLnByb3RvdHlwZS4kb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZtLiRvbihldmVudFtpXSwgZm4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAodm0uX2V2ZW50c1tldmVudF0gfHwgKHZtLl9ldmVudHNbZXZlbnRdID0gW10pKS5wdXNoKGZuKTtcbiAgICAgIC8vIG9wdGltaXplIGhvb2s6ZXZlbnQgY29zdCBieSB1c2luZyBhIGJvb2xlYW4gZmxhZyBtYXJrZWQgYXQgcmVnaXN0cmF0aW9uXG4gICAgICAvLyBpbnN0ZWFkIG9mIGEgaGFzaCBsb29rdXBcbiAgICAgIGlmIChob29rUkUudGVzdChldmVudCkpIHtcbiAgICAgICAgdm0uX2hhc0hvb2tFdmVudCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9uY2UgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBmdW5jdGlvbiBvbiAoKSB7XG4gICAgICB2bS4kb2ZmKGV2ZW50LCBvbik7XG4gICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgb24uZm4gPSBmbjtcbiAgICB2bS4kb24oZXZlbnQsIG9uKTtcbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyBhbGxcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIGFycmF5IG9mIGV2ZW50c1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgZm9yICh2YXIgaSQxID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSQxIDwgbDsgaSQxKyspIHtcbiAgICAgICAgdm0uJG9mZihldmVudFtpJDFdLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFjYnMpIHtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICBpZiAoIWZuKSB7XG4gICAgICB2bS5fZXZlbnRzW2V2ZW50XSA9IG51bGw7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gc3BlY2lmaWMgaGFuZGxlclxuICAgIHZhciBjYjtcbiAgICB2YXIgaSA9IGNicy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY2IgPSBjYnNbaV07XG4gICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgICBjYnMuc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRlbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGxvd2VyQ2FzZUV2ZW50ID0gZXZlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChsb3dlckNhc2VFdmVudCAhPT0gZXZlbnQgJiYgdm0uX2V2ZW50c1tsb3dlckNhc2VFdmVudF0pIHtcbiAgICAgICAgdGlwKFxuICAgICAgICAgIFwiRXZlbnQgXFxcIlwiICsgbG93ZXJDYXNlRXZlbnQgKyBcIlxcXCIgaXMgZW1pdHRlZCBpbiBjb21wb25lbnQgXCIgK1xuICAgICAgICAgIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIiBidXQgdGhlIGhhbmRsZXIgaXMgcmVnaXN0ZXJlZCBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuIFwiICtcbiAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIHlvdSBjYW5ub3QgdXNlIFwiICtcbiAgICAgICAgICBcInYtb24gdG8gbGlzdGVuIHRvIGNhbWVsQ2FzZSBldmVudHMgd2hlbiB1c2luZyBpbi1ET00gdGVtcGxhdGVzLiBcIiArXG4gICAgICAgICAgXCJZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyAoaHlwaGVuYXRlKGV2ZW50KSkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBldmVudCArIFwiXFxcIi5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgaWYgKGNicykge1xuICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyB0b0FycmF5KGNicykgOiBjYnM7XG4gICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBpbmZvID0gXCJldmVudCBoYW5kbGVyIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIlwiO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGNic1tpXSwgdm0sIGFyZ3MsIHZtLCBpbmZvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgYWN0aXZlSW5zdGFuY2UgPSBudWxsO1xudmFyIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzZXRBY3RpdmVJbnN0YW5jZSh2bSkge1xuICB2YXIgcHJldkFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2U7XG4gIGFjdGl2ZUluc3RhbmNlID0gdm07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgYWN0aXZlSW5zdGFuY2UgPSBwcmV2QWN0aXZlSW5zdGFuY2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdExpZmVjeWNsZSAodm0pIHtcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcblxuICAvLyBsb2NhdGUgZmlyc3Qgbm9uLWFic3RyYWN0IHBhcmVudFxuICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gIGlmIChwYXJlbnQgJiYgIW9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICB3aGlsZSAocGFyZW50LiRvcHRpb25zLmFic3RyYWN0ICYmIHBhcmVudC4kcGFyZW50KSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICB9XG4gICAgcGFyZW50LiRjaGlsZHJlbi5wdXNoKHZtKTtcbiAgfVxuXG4gIHZtLiRwYXJlbnQgPSBwYXJlbnQ7XG4gIHZtLiRyb290ID0gcGFyZW50ID8gcGFyZW50LiRyb290IDogdm07XG5cbiAgdm0uJGNoaWxkcmVuID0gW107XG4gIHZtLiRyZWZzID0ge307XG5cbiAgdm0uX3dhdGNoZXIgPSBudWxsO1xuICB2bS5faW5hY3RpdmUgPSBudWxsO1xuICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgdm0uX2lzTW91bnRlZCA9IGZhbHNlO1xuICB2bS5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4gKFZ1ZSkge1xuICBWdWUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHByZXZFbCA9IHZtLiRlbDtcbiAgICB2YXIgcHJldlZub2RlID0gdm0uX3Zub2RlO1xuICAgIHZhciByZXN0b3JlQWN0aXZlSW5zdGFuY2UgPSBzZXRBY3RpdmVJbnN0YW5jZSh2bSk7XG4gICAgdm0uX3Zub2RlID0gdm5vZGU7XG4gICAgLy8gVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gaXMgaW5qZWN0ZWQgaW4gZW50cnkgcG9pbnRzXG4gICAgLy8gYmFzZWQgb24gdGhlIHJlbmRlcmluZyBiYWNrZW5kIHVzZWQuXG4gICAgaWYgKCFwcmV2Vm5vZGUpIHtcbiAgICAgIC8vIGluaXRpYWwgcmVuZGVyXG4gICAgICB2bS4kZWwgPSB2bS5fX3BhdGNoX18odm0uJGVsLCB2bm9kZSwgaHlkcmF0aW5nLCBmYWxzZSAvKiByZW1vdmVPbmx5ICovKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXBkYXRlc1xuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHByZXZWbm9kZSwgdm5vZGUpO1xuICAgIH1cbiAgICByZXN0b3JlQWN0aXZlSW5zdGFuY2UoKTtcbiAgICAvLyB1cGRhdGUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAocHJldkVsKSB7XG4gICAgICBwcmV2RWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh2bS4kZWwpIHtcbiAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gdm07XG4gICAgfVxuICAgIC8vIGlmIHBhcmVudCBpcyBhbiBIT0MsIHVwZGF0ZSBpdHMgJGVsIGFzIHdlbGxcbiAgICBpZiAodm0uJHZub2RlICYmIHZtLiRwYXJlbnQgJiYgdm0uJHZub2RlID09PSB2bS4kcGFyZW50Ll92bm9kZSkge1xuICAgICAgdm0uJHBhcmVudC4kZWwgPSB2bS4kZWw7XG4gICAgfVxuICAgIC8vIHVwZGF0ZWQgaG9vayBpcyBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlciB0byBlbnN1cmUgdGhhdCBjaGlsZHJlbiBhcmVcbiAgICAvLyB1cGRhdGVkIGluIGEgcGFyZW50J3MgdXBkYXRlZCBob29rLlxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci51cGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlRGVzdHJveScpO1xuICAgIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHBhcmVudFxuICAgIHZhciBwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudC5faXNCZWluZ0Rlc3Ryb3llZCAmJiAhdm0uJG9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICAgIHJlbW92ZShwYXJlbnQuJGNoaWxkcmVuLCB2bSk7XG4gICAgfVxuICAgIC8vIHRlYXJkb3duIHdhdGNoZXJzXG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgICB2YXIgaSA9IHZtLl93YXRjaGVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdm0uX3dhdGNoZXJzW2ldLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgZnJvbSBkYXRhIG9iXG4gICAgLy8gZnJvemVuIG9iamVjdCBtYXkgbm90IGhhdmUgb2JzZXJ2ZXIuXG4gICAgaWYgKHZtLl9kYXRhLl9fb2JfXykge1xuICAgICAgdm0uX2RhdGEuX19vYl9fLnZtQ291bnQtLTtcbiAgICB9XG4gICAgLy8gY2FsbCB0aGUgbGFzdCBob29rLi4uXG4gICAgdm0uX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAvLyBpbnZva2UgZGVzdHJveSBob29rcyBvbiBjdXJyZW50IHJlbmRlcmVkIHRyZWVcbiAgICB2bS5fX3BhdGNoX18odm0uX3Zub2RlLCBudWxsKTtcbiAgICAvLyBmaXJlIGRlc3Ryb3llZCBob29rXG4gICAgY2FsbEhvb2sodm0sICdkZXN0cm95ZWQnKTtcbiAgICAvLyB0dXJuIG9mZiBhbGwgaW5zdGFuY2UgbGlzdGVuZXJzLlxuICAgIHZtLiRvZmYoKTtcbiAgICAvLyByZW1vdmUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIC8vIHJlbGVhc2UgY2lyY3VsYXIgcmVmZXJlbmNlICgjNjc1OSlcbiAgICBpZiAodm0uJHZub2RlKSB7XG4gICAgICB2bS4kdm5vZGUucGFyZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkQ29tcG9uZW50IChcbiAgdm0sXG4gIHByb3BzRGF0YSxcbiAgbGlzdGVuZXJzLFxuICBwYXJlbnRWbm9kZSxcbiAgcmVuZGVyQ2hpbGRyZW5cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gIH1cblxuICAvLyBkZXRlcm1pbmUgd2hldGhlciBjb21wb25lbnQgaGFzIHNsb3QgY2hpbGRyZW5cbiAgLy8gd2UgbmVlZCB0byBkbyB0aGlzIGJlZm9yZSBvdmVyd3JpdGluZyAkb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4uXG5cbiAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGR5bmFtaWMgc2NvcGVkU2xvdHMgKGhhbmQtd3JpdHRlbiBvciBjb21waWxlZCBidXQgd2l0aFxuICAvLyBkeW5hbWljIHNsb3QgbmFtZXMpLiBTdGF0aWMgc2NvcGVkIHNsb3RzIGNvbXBpbGVkIGZyb20gdGVtcGxhdGUgaGFzIHRoZVxuICAvLyBcIiRzdGFibGVcIiBtYXJrZXIuXG4gIHZhciBuZXdTY29wZWRTbG90cyA9IHBhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHM7XG4gIHZhciBvbGRTY29wZWRTbG90cyA9IHZtLiRzY29wZWRTbG90cztcbiAgdmFyIGhhc0R5bmFtaWNTY29wZWRTbG90ID0gISEoXG4gICAgKG5ld1Njb3BlZFNsb3RzICYmICFuZXdTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChvbGRTY29wZWRTbG90cyAhPT0gZW1wdHlPYmplY3QgJiYgIW9sZFNjb3BlZFNsb3RzLiRzdGFibGUpIHx8XG4gICAgKG5ld1Njb3BlZFNsb3RzICYmIHZtLiRzY29wZWRTbG90cy4ka2V5ICE9PSBuZXdTY29wZWRTbG90cy4ka2V5KVxuICApO1xuXG4gIC8vIEFueSBzdGF0aWMgc2xvdCBjaGlsZHJlbiBmcm9tIHRoZSBwYXJlbnQgbWF5IGhhdmUgY2hhbmdlZCBkdXJpbmcgcGFyZW50J3NcbiAgLy8gdXBkYXRlLiBEeW5hbWljIHNjb3BlZCBzbG90cyBtYXkgYWxzbyBoYXZlIGNoYW5nZWQuIEluIHN1Y2ggY2FzZXMsIGEgZm9yY2VkXG4gIC8vIHVwZGF0ZSBpcyBuZWNlc3NhcnkgdG8gZW5zdXJlIGNvcnJlY3RuZXNzLlxuICB2YXIgbmVlZHNGb3JjZVVwZGF0ZSA9ICEhKFxuICAgIHJlbmRlckNoaWxkcmVuIHx8ICAgICAgICAgICAgICAgLy8gaGFzIG5ldyBzdGF0aWMgc2xvdHNcbiAgICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gfHwgIC8vIGhhcyBvbGQgc3RhdGljIHNsb3RzXG4gICAgaGFzRHluYW1pY1Njb3BlZFNsb3RcbiAgKTtcblxuICB2bS4kb3B0aW9ucy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcbiAgdm0uJHZub2RlID0gcGFyZW50Vm5vZGU7IC8vIHVwZGF0ZSB2bSdzIHBsYWNlaG9sZGVyIG5vZGUgd2l0aG91dCByZS1yZW5kZXJcblxuICBpZiAodm0uX3Zub2RlKSB7IC8vIHVwZGF0ZSBjaGlsZCB0cmVlJ3MgcGFyZW50XG4gICAgdm0uX3Zub2RlLnBhcmVudCA9IHBhcmVudFZub2RlO1xuICB9XG4gIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiA9IHJlbmRlckNoaWxkcmVuO1xuXG4gIC8vIHVwZGF0ZSAkYXR0cnMgYW5kICRsaXN0ZW5lcnMgaGFzaFxuICAvLyB0aGVzZSBhcmUgYWxzbyByZWFjdGl2ZSBzbyB0aGV5IG1heSB0cmlnZ2VyIGNoaWxkIHVwZGF0ZSBpZiB0aGUgY2hpbGRcbiAgLy8gdXNlZCB0aGVtIGR1cmluZyByZW5kZXJcbiAgdm0uJGF0dHJzID0gcGFyZW50Vm5vZGUuZGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdDtcbiAgdm0uJGxpc3RlbmVycyA9IGxpc3RlbmVycyB8fCBlbXB0eU9iamVjdDtcblxuICAvLyB1cGRhdGUgcHJvcHNcbiAgaWYgKHByb3BzRGF0YSAmJiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgdmFyIHByb3BzID0gdm0uX3Byb3BzO1xuICAgIHZhciBwcm9wS2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcEtleXNbaV07XG4gICAgICB2YXIgcHJvcE9wdGlvbnMgPSB2bS4kb3B0aW9ucy5wcm9wczsgLy8gd3RmIGZsb3c/XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSwgdm0pO1xuICAgIH1cbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgLy8ga2VlcCBhIGNvcHkgb2YgcmF3IHByb3BzRGF0YVxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YSA9IHByb3BzRGF0YTtcbiAgfVxuICBcbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHVwZGF0ZSBwcm9wZXJ0aWVzKG1wIHJ1bnRpbWUpXG4gIHZtLl8kdXBkYXRlUHJvcGVydGllcyAmJiB2bS5fJHVwZGF0ZVByb3BlcnRpZXModm0pO1xuICBcbiAgLy8gdXBkYXRlIGxpc3RlbmVyc1xuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZhciBvbGRMaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycywgb2xkTGlzdGVuZXJzKTtcblxuICAvLyByZXNvbHZlIHNsb3RzICsgZm9yY2UgdXBkYXRlIGlmIGhhcyBjaGlsZHJlblxuICBpZiAobmVlZHNGb3JjZVVwZGF0ZSkge1xuICAgIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhyZW5kZXJDaGlsZHJlbiwgcGFyZW50Vm5vZGUuY29udGV4dCk7XG4gICAgdm0uJGZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSW5JbmFjdGl2ZVRyZWUgKHZtKSB7XG4gIHdoaWxlICh2bSAmJiAodm0gPSB2bS4kcGFyZW50KSkge1xuICAgIGlmICh2bS5faW5hY3RpdmUpIHsgcmV0dXJuIHRydWUgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSBlbHNlIGlmICh2bS5fZGlyZWN0SW5hY3RpdmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodm0uX2luYWN0aXZlIHx8IHZtLl9pbmFjdGl2ZSA9PT0gbnVsbCkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSB0cnVlO1xuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGlmICghdm0uX2luYWN0aXZlKSB7XG4gICAgdm0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnZGVhY3RpdmF0ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsSG9vayAodm0sIGhvb2spIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGxpZmVjeWNsZSBob29rc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICB2YXIgaW5mbyA9IGhvb2sgKyBcIiBob29rXCI7XG4gIGlmIChoYW5kbGVycykge1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhoYW5kbGVyc1tpXSwgdm0sIG51bGwsIHZtLCBpbmZvKTtcbiAgICB9XG4gIH1cbiAgaWYgKHZtLl9oYXNIb29rRXZlbnQpIHtcbiAgICB2bS4kZW1pdCgnaG9vazonICsgaG9vayk7XG4gIH1cbiAgcG9wVGFyZ2V0KCk7XG59XG5cbi8qICAqL1xuXG52YXIgTUFYX1VQREFURV9DT1VOVCA9IDEwMDtcblxudmFyIHF1ZXVlID0gW107XG52YXIgYWN0aXZhdGVkQ2hpbGRyZW4gPSBbXTtcbnZhciBoYXMgPSB7fTtcbnZhciBjaXJjdWxhciA9IHt9O1xudmFyIHdhaXRpbmcgPSBmYWxzZTtcbnZhciBmbHVzaGluZyA9IGZhbHNlO1xudmFyIGluZGV4ID0gMDtcblxuLyoqXG4gKiBSZXNldCB0aGUgc2NoZWR1bGVyJ3Mgc3RhdGUuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0U2NoZWR1bGVyU3RhdGUgKCkge1xuICBpbmRleCA9IHF1ZXVlLmxlbmd0aCA9IGFjdGl2YXRlZENoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIGhhcyA9IHt9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNpcmN1bGFyID0ge307XG4gIH1cbiAgd2FpdGluZyA9IGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSAjNjU2NiByZXF1aXJlcyBzYXZpbmcgdGhlIHRpbWVzdGFtcCB3aGVuIGV2ZW50IGxpc3RlbmVycyBhcmVcbi8vIGF0dGFjaGVkLiBIb3dldmVyLCBjYWxsaW5nIHBlcmZvcm1hbmNlLm5vdygpIGhhcyBhIHBlcmYgb3ZlcmhlYWQgZXNwZWNpYWxseVxuLy8gaWYgdGhlIHBhZ2UgaGFzIHRob3VzYW5kcyBvZiBldmVudCBsaXN0ZW5lcnMuIEluc3RlYWQsIHdlIHRha2UgYSB0aW1lc3RhbXBcbi8vIGV2ZXJ5IHRpbWUgdGhlIHNjaGVkdWxlciBmbHVzaGVzIGFuZCB1c2UgdGhhdCBmb3IgYWxsIGV2ZW50IGxpc3RlbmVyc1xuLy8gYXR0YWNoZWQgZHVyaW5nIHRoYXQgZmx1c2guXG52YXIgY3VycmVudEZsdXNoVGltZXN0YW1wID0gMDtcblxuLy8gQXN5bmMgZWRnZSBjYXNlIGZpeCByZXF1aXJlcyBzdG9yaW5nIGFuIGV2ZW50IGxpc3RlbmVyJ3MgYXR0YWNoIHRpbWVzdGFtcC5cbnZhciBnZXROb3cgPSBEYXRlLm5vdztcblxuLy8gRGV0ZXJtaW5lIHdoYXQgZXZlbnQgdGltZXN0YW1wIHRoZSBicm93c2VyIGlzIHVzaW5nLiBBbm5veWluZ2x5LCB0aGVcbi8vIHRpbWVzdGFtcCBjYW4gZWl0aGVyIGJlIGhpLXJlcyAocmVsYXRpdmUgdG8gcGFnZSBsb2FkKSBvciBsb3ctcmVzXG4vLyAocmVsYXRpdmUgdG8gVU5JWCBlcG9jaCksIHNvIGluIG9yZGVyIHRvIGNvbXBhcmUgdGltZSB3ZSBoYXZlIHRvIHVzZSB0aGVcbi8vIHNhbWUgdGltZXN0YW1wIHR5cGUgd2hlbiBzYXZpbmcgdGhlIGZsdXNoIHRpbWVzdGFtcC5cbi8vIEFsbCBJRSB2ZXJzaW9ucyB1c2UgbG93LXJlcyBldmVudCB0aW1lc3RhbXBzLCBhbmQgaGF2ZSBwcm9ibGVtYXRpYyBjbG9ja1xuLy8gaW1wbGVtZW50YXRpb25zICgjOTYzMilcbmlmIChpbkJyb3dzZXIgJiYgIWlzSUUpIHtcbiAgdmFyIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICBpZiAoXG4gICAgcGVyZm9ybWFuY2UgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nICYmXG4gICAgZ2V0Tm93KCkgPiBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKS50aW1lU3RhbXBcbiAgKSB7XG4gICAgLy8gaWYgdGhlIGV2ZW50IHRpbWVzdGFtcCwgYWx0aG91Z2ggZXZhbHVhdGVkIEFGVEVSIHRoZSBEYXRlLm5vdygpLCBpc1xuICAgIC8vIHNtYWxsZXIgdGhhbiBpdCwgaXQgbWVhbnMgdGhlIGV2ZW50IGlzIHVzaW5nIGEgaGktcmVzIHRpbWVzdGFtcCxcbiAgICAvLyBhbmQgd2UgbmVlZCB0byB1c2UgdGhlIGhpLXJlcyB2ZXJzaW9uIGZvciBldmVudCBsaXN0ZW5lciB0aW1lc3RhbXBzIGFzXG4gICAgLy8gd2VsbC5cbiAgICBnZXROb3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTsgfTtcbiAgfVxufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5mdW5jdGlvbiBmbHVzaFNjaGVkdWxlclF1ZXVlICgpIHtcbiAgY3VycmVudEZsdXNoVGltZXN0YW1wID0gZ2V0Tm93KCk7XG4gIGZsdXNoaW5nID0gdHJ1ZTtcbiAgdmFyIHdhdGNoZXIsIGlkO1xuXG4gIC8vIFNvcnQgcXVldWUgYmVmb3JlIGZsdXNoLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdDpcbiAgLy8gMS4gQ29tcG9uZW50cyBhcmUgdXBkYXRlZCBmcm9tIHBhcmVudCB0byBjaGlsZC4gKGJlY2F1c2UgcGFyZW50IGlzIGFsd2F5c1xuICAvLyAgICBjcmVhdGVkIGJlZm9yZSB0aGUgY2hpbGQpXG4gIC8vIDIuIEEgY29tcG9uZW50J3MgdXNlciB3YXRjaGVycyBhcmUgcnVuIGJlZm9yZSBpdHMgcmVuZGVyIHdhdGNoZXIgKGJlY2F1c2VcbiAgLy8gICAgdXNlciB3YXRjaGVycyBhcmUgY3JlYXRlZCBiZWZvcmUgdGhlIHJlbmRlciB3YXRjaGVyKVxuICAvLyAzLiBJZiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgZHVyaW5nIGEgcGFyZW50IGNvbXBvbmVudCdzIHdhdGNoZXIgcnVuLFxuICAvLyAgICBpdHMgd2F0Y2hlcnMgY2FuIGJlIHNraXBwZWQuXG4gIHF1ZXVlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcblxuICAvLyBkbyBub3QgY2FjaGUgbGVuZ3RoIGJlY2F1c2UgbW9yZSB3YXRjaGVycyBtaWdodCBiZSBwdXNoZWRcbiAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHdhdGNoZXIgPSBxdWV1ZVtpbmRleF07XG4gICAgaWYgKHdhdGNoZXIuYmVmb3JlKSB7XG4gICAgICB3YXRjaGVyLmJlZm9yZSgpO1xuICAgIH1cbiAgICBpZCA9IHdhdGNoZXIuaWQ7XG4gICAgaGFzW2lkXSA9IG51bGw7XG4gICAgd2F0Y2hlci5ydW4oKTtcbiAgICAvLyBpbiBkZXYgYnVpbGQsIGNoZWNrIGFuZCBzdG9wIGNpcmN1bGFyIHVwZGF0ZXMuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaGFzW2lkXSAhPSBudWxsKSB7XG4gICAgICBjaXJjdWxhcltpZF0gPSAoY2lyY3VsYXJbaWRdIHx8IDApICsgMTtcbiAgICAgIGlmIChjaXJjdWxhcltpZF0gPiBNQVhfVVBEQVRFX0NPVU5UKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCAnICsgKFxuICAgICAgICAgICAgd2F0Y2hlci51c2VyXG4gICAgICAgICAgICAgID8gKFwiaW4gd2F0Y2hlciB3aXRoIGV4cHJlc3Npb24gXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIilcbiAgICAgICAgICAgICAgOiBcImluIGEgY29tcG9uZW50IHJlbmRlciBmdW5jdGlvbi5cIlxuICAgICAgICAgICksXG4gICAgICAgICAgd2F0Y2hlci52bVxuICAgICAgICApO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGtlZXAgY29waWVzIG9mIHBvc3QgcXVldWVzIGJlZm9yZSByZXNldHRpbmcgc3RhdGVcbiAgdmFyIGFjdGl2YXRlZFF1ZXVlID0gYWN0aXZhdGVkQ2hpbGRyZW4uc2xpY2UoKTtcbiAgdmFyIHVwZGF0ZWRRdWV1ZSA9IHF1ZXVlLnNsaWNlKCk7XG5cbiAgcmVzZXRTY2hlZHVsZXJTdGF0ZSgpO1xuXG4gIC8vIGNhbGwgY29tcG9uZW50IHVwZGF0ZWQgYW5kIGFjdGl2YXRlZCBob29rc1xuICBjYWxsQWN0aXZhdGVkSG9va3MoYWN0aXZhdGVkUXVldWUpO1xuICBjYWxsVXBkYXRlZEhvb2tzKHVwZGF0ZWRRdWV1ZSk7XG5cbiAgLy8gZGV2dG9vbCBob29rXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZGV2dG9vbHMgJiYgY29uZmlnLmRldnRvb2xzKSB7XG4gICAgZGV2dG9vbHMuZW1pdCgnZmx1c2gnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVXBkYXRlZEhvb2tzIChxdWV1ZSkge1xuICB2YXIgaSA9IHF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciB3YXRjaGVyID0gcXVldWVbaV07XG4gICAgdmFyIHZtID0gd2F0Y2hlci52bTtcbiAgICBpZiAodm0uX3dhdGNoZXIgPT09IHdhdGNoZXIgJiYgdm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICBjYWxsSG9vayh2bSwgJ3VwZGF0ZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBRdWV1ZSBhIGtlcHQtYWxpdmUgY29tcG9uZW50IHRoYXQgd2FzIGFjdGl2YXRlZCBkdXJpbmcgcGF0Y2guXG4gKiBUaGUgcXVldWUgd2lsbCBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIGVudGlyZSB0cmVlIGhhcyBiZWVuIHBhdGNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50ICh2bSkge1xuICAvLyBzZXR0aW5nIF9pbmFjdGl2ZSB0byBmYWxzZSBoZXJlIHNvIHRoYXQgYSByZW5kZXIgZnVuY3Rpb24gY2FuXG4gIC8vIHJlbHkgb24gY2hlY2tpbmcgd2hldGhlciBpdCdzIGluIGFuIGluYWN0aXZlIHRyZWUgKGUuZy4gcm91dGVyLXZpZXcpXG4gIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICBhY3RpdmF0ZWRDaGlsZHJlbi5wdXNoKHZtKTtcbn1cblxuZnVuY3Rpb24gY2FsbEFjdGl2YXRlZEhvb2tzIChxdWV1ZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHF1ZXVlW2ldLCB0cnVlIC8qIHRydWUgKi8pO1xuICB9XG59XG5cbi8qKlxuICogUHVzaCBhIHdhdGNoZXIgaW50byB0aGUgd2F0Y2hlciBxdWV1ZS5cbiAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlV2F0Y2hlciAod2F0Y2hlcikge1xuICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICBpZiAoaGFzW2lkXSA9PSBudWxsKSB7XG4gICAgaGFzW2lkXSA9IHRydWU7XG4gICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgcXVldWUucHVzaCh3YXRjaGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgYWxyZWFkeSBmbHVzaGluZywgc3BsaWNlIHRoZSB3YXRjaGVyIGJhc2VkIG9uIGl0cyBpZFxuICAgICAgLy8gaWYgYWxyZWFkeSBwYXN0IGl0cyBpZCwgaXQgd2lsbCBiZSBydW4gbmV4dCBpbW1lZGlhdGVseS5cbiAgICAgIHZhciBpID0gcXVldWUubGVuZ3RoIC0gMTtcbiAgICAgIHdoaWxlIChpID4gaW5kZXggJiYgcXVldWVbaV0uaWQgPiB3YXRjaGVyLmlkKSB7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICAgIHF1ZXVlLnNwbGljZShpICsgMSwgMCwgd2F0Y2hlcik7XG4gICAgfVxuICAgIC8vIHF1ZXVlIHRoZSBmbHVzaFxuICAgIGlmICghd2FpdGluZykge1xuICAgICAgd2FpdGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAgICAgZmx1c2hTY2hlZHVsZXJRdWV1ZSgpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG5leHRUaWNrKGZsdXNoU2NoZWR1bGVyUXVldWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbnZhciB1aWQkMiA9IDA7XG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKi9cbnZhciBXYXRjaGVyID0gZnVuY3Rpb24gV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBjYixcbiAgb3B0aW9ucyxcbiAgaXNSZW5kZXJXYXRjaGVyXG4pIHtcbiAgdGhpcy52bSA9IHZtO1xuICBpZiAoaXNSZW5kZXJXYXRjaGVyKSB7XG4gICAgdm0uX3dhdGNoZXIgPSB0aGlzO1xuICB9XG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xuICAvLyBvcHRpb25zXG4gIGlmIChvcHRpb25zKSB7XG4gICAgdGhpcy5kZWVwID0gISFvcHRpb25zLmRlZXA7XG4gICAgdGhpcy51c2VyID0gISFvcHRpb25zLnVzZXI7XG4gICAgdGhpcy5sYXp5ID0gISFvcHRpb25zLmxhenk7XG4gICAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmM7XG4gICAgdGhpcy5iZWZvcmUgPSBvcHRpb25zLmJlZm9yZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlZXAgPSB0aGlzLnVzZXIgPSB0aGlzLmxhenkgPSB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgfVxuICB0aGlzLmNiID0gY2I7XG4gIHRoaXMuaWQgPSArK3VpZCQyOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eTsgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW107XG4gIHRoaXMubmV3RGVwcyA9IFtdO1xuICB0aGlzLmRlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMubmV3RGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5leHByZXNzaW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gZXhwT3JGbi50b1N0cmluZygpXG4gICAgOiAnJztcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmICh0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKTtcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IG5vb3A7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHdhdGNoaW5nIHBhdGg6IFxcXCJcIiArIGV4cE9yRm4gKyBcIlxcXCIgXCIgK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoKSB7XG4gIHB1c2hUYXJnZXQodGhpcyk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHZtID0gdGhpcy52bTtcbiAgdHJ5IHtcbiAgICB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodm0sIHZtKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAoXCJnZXR0ZXIgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAgIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICAgIGlmICh0aGlzLmRlZXApIHtcbiAgICAgIHRyYXZlcnNlKHZhbHVlKTtcbiAgICB9XG4gICAgcG9wVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGVhbnVwRGVwcygpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufTtcblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiBhZGREZXAgKGRlcCkge1xuICB2YXIgaWQgPSBkZXAuaWQ7XG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZCk7XG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKTtcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gY2xlYW51cERlcHMgKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgZGVwID0gdGhpcy5kZXBzW2ldO1xuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICB9XG4gIHZhciB0bXAgPSB0aGlzLmRlcElkcztcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkcztcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKCk7XG4gIHRtcCA9IHRoaXMuZGVwcztcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzO1xuICB0aGlzLm5ld0RlcHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwO1xufTtcblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgICB0aGlzLnJ1bigpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlV2F0Y2hlcih0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTY2hlZHVsZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkLlxuICAgICAgaXNPYmplY3QodmFsdWUpIHx8XG4gICAgICB0aGlzLmRlZXBcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB0aGlzLnZtLCAoXCJjYWxsYmFjayBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gZXZhbHVhdGUgKCkge1xuICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKTtcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiBEZXBlbmQgb24gYWxsIGRlcHMgY29sbGVjdGVkIGJ5IHRoaXMgd2F0Y2hlci5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy5kZXBzW2ldLmRlcGVuZCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3Vic2NyaWJlciBsaXN0LlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIHRlYXJkb3duICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkLlxuICAgIGlmICghdGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tpXS5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbi8qICAqL1xuXG52YXIgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uID0ge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogbm9vcCxcbiAgc2V0OiBub29wXG59O1xuXG5mdW5jdGlvbiBwcm94eSAodGFyZ2V0LCBzb3VyY2VLZXksIGtleSkge1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzW3NvdXJjZUtleV1ba2V5XVxuICB9O1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgIHRoaXNbc291cmNlS2V5XVtrZXldID0gdmFsO1xuICB9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGluaXRTdGF0ZSAodm0pIHtcbiAgdm0uX3dhdGNoZXJzID0gW107XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnM7XG4gIGlmIChvcHRzLnByb3BzKSB7IGluaXRQcm9wcyh2bSwgb3B0cy5wcm9wcyk7IH1cbiAgaWYgKG9wdHMubWV0aG9kcykgeyBpbml0TWV0aG9kcyh2bSwgb3B0cy5tZXRob2RzKTsgfVxuICBpZiAob3B0cy5kYXRhKSB7XG4gICAgaW5pdERhdGEodm0pO1xuICB9IGVsc2Uge1xuICAgIG9ic2VydmUodm0uX2RhdGEgPSB7fSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbiAgfVxuICBpZiAob3B0cy5jb21wdXRlZCkgeyBpbml0Q29tcHV0ZWQodm0sIG9wdHMuY29tcHV0ZWQpOyB9XG4gIGlmIChvcHRzLndhdGNoICYmIG9wdHMud2F0Y2ggIT09IG5hdGl2ZVdhdGNoKSB7XG4gICAgaW5pdFdhdGNoKHZtLCBvcHRzLndhdGNoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMgKHZtLCBwcm9wc09wdGlvbnMpIHtcbiAgdmFyIHByb3BzRGF0YSA9IHZtLiRvcHRpb25zLnByb3BzRGF0YSB8fCB7fTtcbiAgdmFyIHByb3BzID0gdm0uX3Byb3BzID0ge307XG4gIC8vIGNhY2hlIHByb3Aga2V5cyBzbyB0aGF0IGZ1dHVyZSBwcm9wcyB1cGRhdGVzIGNhbiBpdGVyYXRlIHVzaW5nIEFycmF5XG4gIC8vIGluc3RlYWQgb2YgZHluYW1pYyBvYmplY3Qga2V5IGVudW1lcmF0aW9uLlxuICB2YXIga2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyA9IFtdO1xuICB2YXIgaXNSb290ID0gIXZtLiRwYXJlbnQ7XG4gIC8vIHJvb3QgaW5zdGFuY2UgcHJvcHMgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICBpZiAoIWlzUm9vdCkge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gIH1cbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wc09wdGlvbnMsIHByb3BzRGF0YSwgdm0pO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAoaXNSZXNlcnZlZEF0dHJpYnV0ZShoeXBoZW5hdGVkS2V5KSB8fFxuICAgICAgICAgIGNvbmZpZy5pc1Jlc2VydmVkQXR0cihoeXBoZW5hdGVkS2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIlxcXCJcIiArIGh5cGhlbmF0ZWRLZXkgKyBcIlxcXCIgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUgYW5kIGNhbm5vdCBiZSB1c2VkIGFzIGNvbXBvbmVudCBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEocHJvcHMsIGtleSwgdmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc1Jvb3QgJiYgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHZtLm1wSG9zdCA9PT0gJ21wLWJhaWR1JyB8fCB2bS5tcEhvc3QgPT09ICdtcC1rdWFpc2hvdScpey8v55m+5bqm44CB5b+r5omLIG9ic2VydmVyIOWcqCBzZXREYXRhIGNhbGxiYWNrIOS5i+WQjuinpuWPke+8jOebtOaOpeW/veeVpeivpSB3YXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2ZpeGVkIGJ5IHh4eHh4eCBfX25leHRfdGlja19wZW5kaW5nLHVuaTovL2Zvcm0tZmllbGQg5pe25LiN5ZGK6K2mXG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICBrZXkgPT09ICd2YWx1ZScgJiYgXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmXG4gICAgICAgICAgICAgICAgdm0uJG9wdGlvbnMuYmVoYXZpb3JzLmluZGV4T2YoJ3VuaTovL2Zvcm0tZmllbGQnKSAhPT0gLTFcbiAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih2bS5fZ2V0Rm9ybURhdGEpe1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICAgICAgICAgIHdoaWxlKCRwYXJlbnQpe1xuICAgICAgICAgICAgICBpZigkcGFyZW50Ll9fbmV4dF90aWNrX3BlbmRpbmcpe1xuICAgICAgICAgICAgICAgIHJldHVybiAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHBhcmVudCA9ICRwYXJlbnQuJHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYSBwcm9wIGRpcmVjdGx5IHNpbmNlIHRoZSB2YWx1ZSB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wJ3MgXCIgK1xuICAgICAgICAgICAgXCJ2YWx1ZS4gUHJvcCBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gc3RhdGljIHByb3BzIGFyZSBhbHJlYWR5IHByb3hpZWQgb24gdGhlIGNvbXBvbmVudCdzIHByb3RvdHlwZVxuICAgIC8vIGR1cmluZyBWdWUuZXh0ZW5kKCkuIFdlIG9ubHkgbmVlZCB0byBwcm94eSBwcm9wcyBkZWZpbmVkIGF0XG4gICAgLy8gaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9wcm9wc1wiLCBrZXkpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHNPcHRpb25zKSBsb29wKCBrZXkgKTtcbiAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xufVxuXG5mdW5jdGlvbiBpbml0RGF0YSAodm0pIHtcbiAgdmFyIGRhdGEgPSB2bS4kb3B0aW9ucy5kYXRhO1xuICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZ2V0RGF0YShkYXRhLCB2bSlcbiAgICA6IGRhdGEgfHwge307XG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnZGF0YSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBvYmplY3Q6XFxuJyArXG4gICAgICAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy5odG1sI2RhdGEtTXVzdC1CZS1hLUZ1bmN0aW9uJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKG1ldGhvZHMgJiYgaGFzT3duKG1ldGhvZHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICtcbiAgICAgICAgXCJVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuXCIsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgcHJveHkodm0sIFwiX2RhdGFcIiwga2V5KTtcbiAgICB9XG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YSAoZGF0YSwgdm0pIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJkYXRhKClcIik7XG4gICAgcmV0dXJuIHt9XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxudmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7IGxhenk6IHRydWUgfTtcblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIHZhciB3YXRjaGVycyA9IHZtLl9jb21wdXRlZFdhdGNoZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gY29tcHV0ZWQgcHJvcGVydGllcyBhcmUganVzdCBnZXR0ZXJzIGR1cmluZyBTU1JcbiAgdmFyIGlzU1NSID0gaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcblxuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XG4gICAgdmFyIGdldHRlciA9IHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nID8gdXNlckRlZiA6IHVzZXJEZWYuZ2V0O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGdldHRlciA9PSBudWxsKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJHZXR0ZXIgaXMgbWlzc2luZyBmb3IgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1NTUikge1xuICAgICAgLy8gY3JlYXRlIGludGVybmFsIHdhdGNoZXIgZm9yIHRoZSBjb21wdXRlZCBwcm9wZXJ0eS5cbiAgICAgIHdhdGNoZXJzW2tleV0gPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgdm0sXG4gICAgICAgIGdldHRlciB8fCBub29wLFxuICAgICAgICBub29wLFxuICAgICAgICBjb21wdXRlZFdhdGNoZXJPcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudC1kZWZpbmVkIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGFscmVhZHkgZGVmaW5lZCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgcHJvdG90eXBlLiBXZSBvbmx5IG5lZWQgdG8gZGVmaW5lIGNvbXB1dGVkIHByb3BlcnRpZXMgZGVmaW5lZFxuICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBkZWZpbmVDb21wdXRlZCh2bSwga2V5LCB1c2VyRGVmKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChrZXkgaW4gdm0uJGRhdGEpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiKSwgdm0pO1xuICAgICAgfSBlbHNlIGlmICh2bS4kb3B0aW9ucy5wcm9wcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBhcyBhIHByb3AuXCIpLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkIChcbiAgdGFyZ2V0LFxuICBrZXksXG4gIHVzZXJEZWZcbikge1xuICB2YXIgc2hvdWxkQ2FjaGUgPSAhaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcbiAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHNob3VsZENhY2hlXG4gICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmKTtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gbm9vcDtcbiAgfSBlbHNlIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgID8gc2hvdWxkQ2FjaGUgJiYgdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmLmdldClcbiAgICAgIDogbm9vcDtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXQgfHwgbm9vcDtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9PT0gbm9vcCkge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJDb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIGFzc2lnbmVkIHRvIGJ1dCBpdCBoYXMgbm8gc2V0dGVyLlwiKSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIgKGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fY29tcHV0ZWRXYXRjaGVycyAmJiB0aGlzLl9jb21wdXRlZFdhdGNoZXJzW2tleV07XG4gICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkgey8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRoaXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtLCBtZXRob2RzKSB7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgaW4gdm0pICYmIGlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArXG4gICAgICAgICAgXCJBdm9pZCBkZWZpbmluZyBjb21wb25lbnQgbWV0aG9kcyB0aGF0IHN0YXJ0IHdpdGggXyBvciAkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgZm9yICh2YXIga2V5IGluIHdhdGNoKSB7XG4gICAgdmFyIGhhbmRsZXIgPSB3YXRjaFtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBoYW5kbGVyLFxuICBvcHRpb25zXG4pIHtcbiAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICBvcHRpb25zID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVyO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICBoYW5kbGVyID0gdm1baGFuZGxlcl07XG4gIH1cbiAgcmV0dXJuIHZtLiR3YXRjaChleHBPckZuLCBoYW5kbGVyLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XG4gIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gIHZhciBkYXRhRGVmID0ge307XG4gIGRhdGFEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9O1xuICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkYXRhRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICdVc2UgbmVzdGVkIGRhdGEgcHJvcGVydGllcyBpbnN0ZWFkLicsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgICBwcm9wc0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcHJvcHMnLCBwcm9wc0RlZik7XG5cbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xuICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgVnVlLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoXG4gICAgZXhwT3JGbixcbiAgICBjYixcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoY2IpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudXNlciA9IHRydWU7XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgdm0sIChcImNhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4gKCkge1xuICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQkMyA9IDA7XG5cbmZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkJDMrKztcblxuICAgIHZhciBzdGFydFRhZywgZW5kVGFnO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArICh2bS5fdWlkKTtcbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgIH1cblxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAvLyBtZXJnZSBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5faXNDb21wb25lbnQpIHtcbiAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAvLyBzaW5jZSBkeW5hbWljIG9wdGlvbnMgbWVyZ2luZyBpcyBwcmV0dHkgc2xvdywgYW5kIG5vbmUgb2YgdGhlXG4gICAgICAvLyBpbnRlcm5hbCBjb21wb25lbnQgb3B0aW9ucyBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudC5cbiAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGluaXRQcm94eSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgICAvLyBleHBvc2UgcmVhbCBzZWxmXG4gICAgdm0uX3NlbGYgPSB2bTtcbiAgICBpbml0TGlmZWN5Y2xlKHZtKTtcbiAgICBpbml0RXZlbnRzKHZtKTtcbiAgICBpbml0UmVuZGVyKHZtKTtcbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZUNyZWF0ZScpO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRJbmplY3Rpb25zKHZtKTsgLy8gcmVzb2x2ZSBpbmplY3Rpb25zIGJlZm9yZSBkYXRhL3Byb3BzICBcbiAgICBpbml0U3RhdGUodm0pO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRQcm92aWRlKHZtKTsgLy8gcmVzb2x2ZSBwcm92aWRlIGFmdGVyIGRhdGEvcHJvcHNcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBjYWxsSG9vayh2bSwgJ2NyZWF0ZWQnKTsgICAgICBcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICB2bS5fbmFtZSA9IGZvcm1hdENvbXBvbmVudE5hbWUodm0sIGZhbHNlKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgKHZtLl9uYW1lKSArIFwiIGluaXRcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgIH1cblxuICAgIGlmICh2bS4kb3B0aW9ucy5lbCkge1xuICAgICAgdm0uJG1vdW50KHZtLiRvcHRpb25zLmVsKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRJbnRlcm5hbENvbXBvbmVudCAodm0sIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUodm0uY29uc3RydWN0b3Iub3B0aW9ucyk7XG4gIC8vIGRvaW5nIHRoaXMgYmVjYXVzZSBpdCdzIGZhc3RlciB0aGFuIGR5bmFtaWMgZW51bWVyYXRpb24uXG4gIHZhciBwYXJlbnRWbm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICBvcHRzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBvcHRzLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuXG4gIHZhciB2bm9kZUNvbXBvbmVudE9wdGlvbnMgPSBwYXJlbnRWbm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBvcHRzLnByb3BzRGF0YSA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGE7XG4gIG9wdHMuX3BhcmVudExpc3RlbmVycyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnM7XG4gIG9wdHMuX3JlbmRlckNoaWxkcmVuID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmNoaWxkcmVuO1xuICBvcHRzLl9jb21wb25lbnRUYWcgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMudGFnO1xuXG4gIGlmIChvcHRpb25zLnJlbmRlcikge1xuICAgIG9wdHMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgb3B0cy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZucztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zIChDdG9yKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICBpZiAoQ3Rvci5zdXBlcikge1xuICAgIHZhciBzdXBlck9wdGlvbnMgPSByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3Iuc3VwZXIpO1xuICAgIHZhciBjYWNoZWRTdXBlck9wdGlvbnMgPSBDdG9yLnN1cGVyT3B0aW9ucztcbiAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcbiAgICAgIC8vIHN1cGVyIG9wdGlvbiBjaGFuZ2VkLFxuICAgICAgLy8gbmVlZCB0byByZXNvbHZlIG5ldyBvcHRpb25zLlxuICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7XG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGxhdGUtbW9kaWZpZWQvYXR0YWNoZWQgb3B0aW9ucyAoIzQ5NzYpXG4gICAgICB2YXIgbW9kaWZpZWRPcHRpb25zID0gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyhDdG9yKTtcbiAgICAgIC8vIHVwZGF0ZSBiYXNlIGV4dGVuZCBvcHRpb25zXG4gICAgICBpZiAobW9kaWZpZWRPcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZChDdG9yLmV4dGVuZE9wdGlvbnMsIG1vZGlmaWVkT3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHN1cGVyT3B0aW9ucywgQ3Rvci5leHRlbmRPcHRpb25zKTtcbiAgICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW29wdGlvbnMubmFtZV0gPSBDdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kaWZpZWRPcHRpb25zIChDdG9yKSB7XG4gIHZhciBtb2RpZmllZDtcbiAgdmFyIGxhdGVzdCA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcbiAgZm9yICh2YXIga2V5IGluIGxhdGVzdCkge1xuICAgIGlmIChsYXRlc3Rba2V5XSAhPT0gc2VhbGVkW2tleV0pIHtcbiAgICAgIGlmICghbW9kaWZpZWQpIHsgbW9kaWZpZWQgPSB7fTsgfVxuICAgICAgbW9kaWZpZWRba2V5XSA9IGxhdGVzdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kaWZpZWRcbn1cblxuZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgISh0aGlzIGluc3RhbmNlb2YgVnVlKVxuICApIHtcbiAgICB3YXJuKCdWdWUgaXMgYSBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkJyk7XG4gIH1cbiAgdGhpcy5faW5pdChvcHRpb25zKTtcbn1cblxuaW5pdE1peGluKFZ1ZSk7XG5zdGF0ZU1peGluKFZ1ZSk7XG5ldmVudHNNaXhpbihWdWUpO1xubGlmZWN5Y2xlTWl4aW4oVnVlKTtcbnJlbmRlck1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0VXNlIChWdWUpIHtcbiAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgaW5zdGFsbGVkUGx1Z2lucyA9ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zIHx8ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zID0gW10pKTtcbiAgICBpZiAoaW5zdGFsbGVkUGx1Z2lucy5pbmRleE9mKHBsdWdpbikgPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvLyBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW4uaW5zdGFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgaW5zdGFsbGVkUGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgcmV0dXJuIHRoaXNcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRNaXhpbiQxIChWdWUpIHtcbiAgVnVlLm1peGluID0gZnVuY3Rpb24gKG1peGluKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgbWl4aW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXh0ZW5kIChWdWUpIHtcbiAgLyoqXG4gICAqIEVhY2ggaW5zdGFuY2UgY29uc3RydWN0b3IsIGluY2x1ZGluZyBWdWUsIGhhcyBhIHVuaXF1ZVxuICAgKiBjaWQuIFRoaXMgZW5hYmxlcyB1cyB0byBjcmVhdGUgd3JhcHBlZCBcImNoaWxkXG4gICAqIGNvbnN0cnVjdG9yc1wiIGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlIGFuZCBjYWNoZSB0aGVtLlxuICAgKi9cbiAgVnVlLmNpZCA9IDA7XG4gIHZhciBjaWQgPSAxO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBpbmhlcml0YW5jZVxuICAgKi9cbiAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbmRPcHRpb25zKSB7XG4gICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XG4gICAgdmFyIFN1cGVyID0gdGhpcztcbiAgICB2YXIgU3VwZXJJZCA9IFN1cGVyLmNpZDtcbiAgICB2YXIgY2FjaGVkQ3RvcnMgPSBleHRlbmRPcHRpb25zLl9DdG9yIHx8IChleHRlbmRPcHRpb25zLl9DdG9yID0ge30pO1xuICAgIGlmIChjYWNoZWRDdG9yc1tTdXBlcklkXSkge1xuICAgICAgcmV0dXJuIGNhY2hlZEN0b3JzW1N1cGVySWRdXG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBleHRlbmRPcHRpb25zLm5hbWUgfHwgU3VwZXIub3B0aW9ucy5uYW1lO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG5hbWUpIHtcbiAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgU3ViID0gZnVuY3Rpb24gVnVlQ29tcG9uZW50IChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgIH07XG4gICAgU3ViLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3VwZXIucHJvdG90eXBlKTtcbiAgICBTdWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViO1xuICAgIFN1Yi5jaWQgPSBjaWQrKztcbiAgICBTdWIub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgIFN1cGVyLm9wdGlvbnMsXG4gICAgICBleHRlbmRPcHRpb25zXG4gICAgKTtcbiAgICBTdWJbJ3N1cGVyJ10gPSBTdXBlcjtcblxuICAgIC8vIEZvciBwcm9wcyBhbmQgY29tcHV0ZWQgcHJvcGVydGllcywgd2UgZGVmaW5lIHRoZSBwcm94eSBnZXR0ZXJzIG9uXG4gICAgLy8gdGhlIFZ1ZSBpbnN0YW5jZXMgYXQgZXh0ZW5zaW9uIHRpbWUsIG9uIHRoZSBleHRlbmRlZCBwcm90b3R5cGUuIFRoaXNcbiAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXG4gICAgaWYgKFN1Yi5vcHRpb25zLnByb3BzKSB7XG4gICAgICBpbml0UHJvcHMkMShTdWIpO1xuICAgIH1cbiAgICBpZiAoU3ViLm9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgIGluaXRDb21wdXRlZCQxKFN1Yik7XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb24vbWl4aW4vcGx1Z2luIHVzYWdlXG4gICAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZDtcbiAgICBTdWIubWl4aW4gPSBTdXBlci5taXhpbjtcbiAgICBTdWIudXNlID0gU3VwZXIudXNlO1xuXG4gICAgLy8gY3JlYXRlIGFzc2V0IHJlZ2lzdGVycywgc28gZXh0ZW5kZWQgY2xhc3Nlc1xuICAgIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXTtcbiAgICB9KTtcbiAgICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgfVxuXG4gICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc3VwZXIgb3B0aW9ucyBhdCBleHRlbnNpb24gdGltZS5cbiAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgIC8vIGJlZW4gdXBkYXRlZC5cbiAgICBTdWIuc3VwZXJPcHRpb25zID0gU3VwZXIub3B0aW9ucztcbiAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XG4gICAgU3ViLnNlYWxlZE9wdGlvbnMgPSBleHRlbmQoe30sIFN1Yi5vcHRpb25zKTtcblxuICAgIC8vIGNhY2hlIGNvbnN0cnVjdG9yXG4gICAgY2FjaGVkQ3RvcnNbU3VwZXJJZF0gPSBTdWI7XG4gICAgcmV0dXJuIFN1YlxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMkMSAoQ29tcCkge1xuICB2YXIgcHJvcHMgPSBDb21wLm9wdGlvbnMucHJvcHM7XG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIHByb3h5KENvbXAucHJvdG90eXBlLCBcIl9wcm9wc1wiLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCQxIChDb21wKSB7XG4gIHZhciBjb21wdXRlZCA9IENvbXAub3B0aW9ucy5jb21wdXRlZDtcbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgZGVmaW5lQ29tcHV0ZWQoQ29tcC5wcm90b3R5cGUsIGtleSwgY29tcHV0ZWRba2V5XSk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRBc3NldFJlZ2lzdGVycyAoVnVlKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMuXG4gICAqL1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlW3R5cGVdID0gZnVuY3Rpb24gKFxuICAgICAgaWQsXG4gICAgICBkZWZpbml0aW9uXG4gICAgKSB7XG4gICAgICBpZiAoIWRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlID09PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wb25lbnQnICYmIGlzUGxhaW5PYmplY3QoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgaWQ7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHRoaXMub3B0aW9ucy5fYmFzZS5leHRlbmQoZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHsgYmluZDogZGVmaW5pdGlvbiwgdXBkYXRlOiBkZWZpbml0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSAob3B0cykge1xuICByZXR1cm4gb3B0cyAmJiAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZylcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyAocGF0dGVybiwgbmFtZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KCcsJykuaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAoaXNSZWdFeHAocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG5hbWUpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGUgKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgdmFyIGNhY2hlID0ga2VlcEFsaXZlSW5zdGFuY2UuY2FjaGU7XG4gIHZhciBrZXlzID0ga2VlcEFsaXZlSW5zdGFuY2Uua2V5cztcbiAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcbiAgZm9yICh2YXIga2V5IGluIGNhY2hlKSB7XG4gICAgdmFyIGNhY2hlZE5vZGUgPSBjYWNoZVtrZXldO1xuICAgIGlmIChjYWNoZWROb2RlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY2FjaGVkTm9kZS5jb21wb25lbnRPcHRpb25zKTtcbiAgICAgIGlmIChuYW1lICYmICFmaWx0ZXIobmFtZSkpIHtcbiAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGVFbnRyeSAoXG4gIGNhY2hlLFxuICBrZXksXG4gIGtleXMsXG4gIGN1cnJlbnRcbikge1xuICB2YXIgY2FjaGVkJCQxID0gY2FjaGVba2V5XTtcbiAgaWYgKGNhY2hlZCQkMSAmJiAoIWN1cnJlbnQgfHwgY2FjaGVkJCQxLnRhZyAhPT0gY3VycmVudC50YWcpKSB7XG4gICAgY2FjaGVkJCQxLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gIH1cbiAgY2FjaGVba2V5XSA9IG51bGw7XG4gIHJlbW92ZShrZXlzLCBrZXkpO1xufVxuXG52YXIgcGF0dGVyblR5cGVzID0gW1N0cmluZywgUmVnRXhwLCBBcnJheV07XG5cbnZhciBLZWVwQWxpdmUgPSB7XG4gIG5hbWU6ICdrZWVwLWFsaXZlJyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBpbmNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIG1heDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMua2V5cyA9IFtdO1xuICB9LFxuXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgcHJ1bmVDYWNoZUVudHJ5KHRoaXMuY2FjaGUsIGtleSwgdGhpcy5rZXlzKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLiR3YXRjaCgnaW5jbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnZXhjbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBzbG90ID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICB2YXIgdm5vZGUgPSBnZXRGaXJzdENvbXBvbmVudENoaWxkKHNsb3QpO1xuICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGUgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICBpZiAoY29tcG9uZW50T3B0aW9ucykge1xuICAgICAgLy8gY2hlY2sgcGF0dGVyblxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICB2YXIgaW5jbHVkZSA9IHJlZi5pbmNsdWRlO1xuICAgICAgdmFyIGV4Y2x1ZGUgPSByZWYuZXhjbHVkZTtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gbm90IGluY2x1ZGVkXG4gICAgICAgIChpbmNsdWRlICYmICghbmFtZSB8fCAhbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSkpIHx8XG4gICAgICAgIC8vIGV4Y2x1ZGVkXG4gICAgICAgIChleGNsdWRlICYmIG5hbWUgJiYgbWF0Y2hlcyhleGNsdWRlLCBuYW1lKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdm5vZGVcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZiQxID0gdGhpcztcbiAgICAgIHZhciBjYWNoZSA9IHJlZiQxLmNhY2hlO1xuICAgICAgdmFyIGtleXMgPSByZWYkMS5rZXlzO1xuICAgICAgdmFyIGtleSA9IHZub2RlLmtleSA9PSBudWxsXG4gICAgICAgIC8vIHNhbWUgY29uc3RydWN0b3IgbWF5IGdldCByZWdpc3RlcmVkIGFzIGRpZmZlcmVudCBsb2NhbCBjb21wb25lbnRzXG4gICAgICAgIC8vIHNvIGNpZCBhbG9uZSBpcyBub3QgZW5vdWdoICgjMzI2OSlcbiAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gKFwiOjpcIiArIChjb21wb25lbnRPcHRpb25zLnRhZykpIDogJycpXG4gICAgICAgIDogdm5vZGUua2V5O1xuICAgICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICAvLyBtYWtlIGN1cnJlbnQga2V5IGZyZXNoZXN0XG4gICAgICAgIHJlbW92ZShrZXlzLCBrZXkpO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSB2bm9kZTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIC8vIHBydW5lIG9sZGVzdCBlbnRyeVxuICAgICAgICBpZiAodGhpcy5tYXggJiYga2V5cy5sZW5ndGggPiBwYXJzZUludCh0aGlzLm1heCkpIHtcbiAgICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleXNbMF0sIGtleXMsIHRoaXMuX3Zub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZSB8fCAoc2xvdCAmJiBzbG90WzBdKVxuICB9XG59O1xuXG52YXIgYnVpbHRJbkNvbXBvbmVudHMgPSB7XG4gIEtlZXBBbGl2ZTogS2VlcEFsaXZlXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XG4gIC8vIGNvbmZpZ1xuICB2YXIgY29uZmlnRGVmID0ge307XG4gIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdEbyBub3QgcmVwbGFjZSB0aGUgVnVlLmNvbmZpZyBvYmplY3QsIHNldCBpbmRpdmlkdWFsIGZpZWxkcyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcblxuICAvLyBleHBvc2VkIHV0aWwgbWV0aG9kcy5cbiAgLy8gTk9URTogdGhlc2UgYXJlIG5vdCBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkgLSBhdm9pZCByZWx5aW5nIG9uXG4gIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXG4gIFZ1ZS51dGlsID0ge1xuICAgIHdhcm46IHdhcm4sXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgbWVyZ2VPcHRpb25zOiBtZXJnZU9wdGlvbnMsXG4gICAgZGVmaW5lUmVhY3RpdmU6IGRlZmluZVJlYWN0aXZlJCQxXG4gIH07XG5cbiAgVnVlLnNldCA9IHNldDtcbiAgVnVlLmRlbGV0ZSA9IGRlbDtcbiAgVnVlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbiAgLy8gMi42IGV4cGxpY2l0IG9ic2VydmFibGUgQVBJXG4gIFZ1ZS5vYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIG9ic2VydmUob2JqKTtcbiAgICByZXR1cm4gb2JqXG4gIH07XG5cbiAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9KTtcblxuICAvLyB0aGlzIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIFwiYmFzZVwiIGNvbnN0cnVjdG9yIHRvIGV4dGVuZCBhbGwgcGxhaW4tb2JqZWN0XG4gIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxuICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xuXG4gIGluaXRVc2UoVnVlKTtcbiAgaW5pdE1peGluJDEoVnVlKTtcbiAgaW5pdEV4dGVuZChWdWUpO1xuICBpbml0QXNzZXRSZWdpc3RlcnMoVnVlKTtcbn1cblxuaW5pdEdsb2JhbEFQSShWdWUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRpc1NlcnZlcicsIHtcbiAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHNzckNvbnRleHQnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiB0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0XG4gIH1cbn0pO1xuXG4vLyBleHBvc2UgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgZm9yIHNzciBydW50aW1lIGhlbHBlciBpbnN0YWxsYXRpb25cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCcsIHtcbiAgdmFsdWU6IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0XG59KTtcblxuVnVlLnZlcnNpb24gPSAnMi42LjExJztcblxuLyoqXG4gKiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVGVuY2VudC93ZXN0b3JlL21hc3Rlci9wYWNrYWdlcy93ZXN0b3JlL3V0aWxzL2RpZmYuanNcbiAqL1xudmFyIEFSUkFZVFlQRSA9ICdbb2JqZWN0IEFycmF5XSc7XG52YXIgT0JKRUNUVFlQRSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuLy8gY29uc3QgRlVOQ1RJT05UWVBFID0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuXG5mdW5jdGlvbiBkaWZmKGN1cnJlbnQsIHByZSkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBzeW5jS2V5cyhjdXJyZW50LCBwcmUpO1xuICAgIF9kaWZmKGN1cnJlbnQsIHByZSwgJycsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzeW5jS2V5cyhjdXJyZW50LCBwcmUpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gcHJlKSB7IHJldHVybiB9XG4gICAgdmFyIHJvb3RDdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudCk7XG4gICAgdmFyIHJvb3RQcmVUeXBlID0gdHlwZShwcmUpO1xuICAgIGlmIChyb290Q3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSAmJiByb290UHJlVHlwZSA9PSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKGN1cnJlbnQpLmxlbmd0aCA+PSBPYmplY3Qua2V5cyhwcmUpLmxlbmd0aCl7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFtrZXldID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzeW5jS2V5cyhjdXJyZW50VmFsdWUsIHByZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJvb3RDdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUgJiYgcm9vdFByZVR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+PSBwcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBwcmUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzeW5jS2V5cyhjdXJyZW50W2luZGV4XSwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gX2RpZmYoY3VycmVudCwgcHJlLCBwYXRoLCByZXN1bHQpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gcHJlKSB7IHJldHVybiB9XG4gICAgdmFyIHJvb3RDdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudCk7XG4gICAgdmFyIHJvb3RQcmVUeXBlID0gdHlwZShwcmUpO1xuICAgIGlmIChyb290Q3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZiAocm9vdFByZVR5cGUgIT0gT0JKRUNUVFlQRSB8fCBPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGggPCBPYmplY3Qua2V5cyhwcmUpLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICAgICAgdmFyIHByZVZhbHVlID0gcHJlW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gdHlwZShjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBwcmVUeXBlID0gdHlwZShwcmVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUeXBlICE9IEFSUkFZVFlQRSAmJiBjdXJyZW50VHlwZSAhPSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5PVEUg5q2k5aSE5bCGICE9IOS/ruaUueS4uiAhPT3jgILmtonlj4rlnLDmlrnlpKrlpJrmgZDmgJXmtYvor5XkuI3liLDvvIzlpoLmnpzlh7rnjrDmlbDmja7lr7nmr5Tpl67popjvvIzlsIblhbbkv67mlLnlm57mnaXjgIJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gcHJlW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVR5cGUgIT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoIDwgcHJlVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlmZihpdGVtLCBwcmVWYWx1ZVtpbmRleF0sIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5ICsgJ1snICsgaW5kZXggKyAnXScsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVR5cGUgIT0gT0JKRUNUVFlQRSB8fCBPYmplY3Qua2V5cyhjdXJyZW50VmFsdWUpLmxlbmd0aCA8IE9iamVjdC5rZXlzKHByZVZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3ViS2V5IGluIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWZmKGN1cnJlbnRWYWx1ZVtzdWJLZXldLCBwcmVWYWx1ZVtzdWJLZXldLCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSArICcuJyArIHN1YktleSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50KSBsb29wKCBrZXkgKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocm9vdEN1cnJlbnRUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICBpZiAocm9vdFByZVR5cGUgIT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA8IHByZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBfZGlmZihpdGVtLCBwcmVbaW5kZXhdLCBwYXRoICsgJ1snICsgaW5kZXggKyAnXScsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFJlc3VsdChyZXN1bHQsIGssIHYpIHtcbiAgICAvLyBpZiAodHlwZSh2KSAhPSBGVU5DVElPTlRZUEUpIHtcbiAgICAgICAgcmVzdWx0W2tdID0gdjtcbiAgICAvLyB9XG59XG5cbmZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyQxKHZtKSB7XG4gICAgaWYgKHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcyAmJiB2bS5fX25leHRfdGlja19jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOmZsdXNoQ2FsbGJhY2tzWycgKyB2bS5fX25leHRfdGlja19jYWxsYmFja3MubGVuZ3RoICsgJ10nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29waWVzID0gdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgICAgICB2bS5fX25leHRfdGlja19jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvcGllc1tpXSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNSZW5kZXJXYXRjaGVyKHZtKSB7XG4gICAgcmV0dXJuIHF1ZXVlLmZpbmQoZnVuY3Rpb24gKHdhdGNoZXIpIHsgcmV0dXJuIHZtLl93YXRjaGVyID09PSB3YXRjaGVyOyB9KVxufVxuXG5mdW5jdGlvbiBuZXh0VGljayQxKHZtLCBjYikge1xuICAgIC8vMS5uZXh0VGljayDkuYvliY0g5beyIHNldERhdGEg5LiUIHNldERhdGEg6L+Y5pyq5Zue6LCD5a6M5oiQXG4gICAgLy8yLm5leHRUaWNrIOS5i+WJjeWtmOWcqCByZW5kZXIgd2F0Y2hlclxuICAgIGlmICghdm0uX19uZXh0X3RpY2tfcGVuZGluZyAmJiAhaGFzUmVuZGVyV2F0Y2hlcih2bSkpIHtcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRyl7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOm5leHRWdWVUaWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNiLCB2bSlcbiAgICB9ZWxzZXtcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRyl7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSQxID0gdm0uJHNjb3BlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UkMS5pcyB8fCBtcEluc3RhbmNlJDEucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOm5leHRNUFRpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgX3Jlc29sdmU7XG4gICAgaWYgKCF2bS5fX25leHRfdGlja19jYWxsYmFja3MpIHtcbiAgICAgICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzID0gW107XG4gICAgfVxuICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNiLmNhbGwodm0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAnbmV4dFRpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgICAgICAgX3Jlc29sdmUodm0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY2xvbmVXaXRoRGF0YSh2bSkge1xuICAvLyDnoa7kv53lvZPliY0gdm0g5omA5pyJ5pWw5o2u6KKr5ZCM5q2lXG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgZGF0YUtleXMgPSBbXS5jb25jYXQoXG4gICAgT2JqZWN0LmtleXModm0uX2RhdGEgfHwge30pLFxuICAgIE9iamVjdC5rZXlzKHZtLl9jb21wdXRlZFdhdGNoZXJzIHx8IHt9KSk7XG5cbiAgZGF0YUtleXMucmVkdWNlKGZ1bmN0aW9uKHJldCwga2V5KSB7XG4gICAgcmV0W2tleV0gPSB2bVtrZXldO1xuICAgIHJldHVybiByZXRcbiAgfSwgcmV0KTtcblxuICAvLyB2dWUtY29tcG9zaXRpb24tYXBpXG4gIHZhciBjb21wb3NpdGlvbkFwaVN0YXRlID0gdm0uX19jb21wb3NpdGlvbl9hcGlfc3RhdGVfXyB8fCB2bS5fX3NlY3JldF92ZmFfc3RhdGVfXztcbiAgdmFyIHJhd0JpbmRpbmdzID0gY29tcG9zaXRpb25BcGlTdGF0ZSAmJiBjb21wb3NpdGlvbkFwaVN0YXRlLnJhd0JpbmRpbmdzO1xuICBpZiAocmF3QmluZGluZ3MpIHtcbiAgICBPYmplY3Qua2V5cyhyYXdCaW5kaW5ncykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXRba2V5XSA9IHZtW2tleV07XG4gICAgfSk7XG4gIH1cblxuICAvL1RPRE8g6ZyA6KaB5oqK5peg55So5pWw5o2u5aSE55CG5o6J77yM5q+U5aaCIGxpc3Q9PmwwIOWImSBsaXN0IOmcgOimgeenu+mZpO+8jOWQpuWImeWkmuS8oOi+k+S4gOS7veaVsOaNrlxuICBPYmplY3QuYXNzaWduKHJldCwgdm0uJG1wLmRhdGEgfHwge30pO1xuICBpZiAoXG4gICAgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmXG4gICAgdm0uJG9wdGlvbnMuYmVoYXZpb3JzLmluZGV4T2YoJ3VuaTovL2Zvcm0tZmllbGQnKSAhPT0gLTFcbiAgKSB7IC8vZm9ybS1maWVsZFxuICAgIHJldFsnbmFtZSddID0gdm0ubmFtZTtcbiAgICByZXRbJ3ZhbHVlJ10gPSB2bS52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJldCkpXG59XG5cbnZhciBwYXRjaCA9IGZ1bmN0aW9uKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodm5vZGUgPT09IG51bGwpIHsgLy9kZXN0cm95XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHRoaXMubXBUeXBlID09PSAncGFnZScgfHwgdGhpcy5tcFR5cGUgPT09ICdjb21wb25lbnQnKSB7XG4gICAgdmFyIG1wSW5zdGFuY2UgPSB0aGlzLiRzY29wZTtcbiAgICB2YXIgZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGRhdGEgPSBjbG9uZVdpdGhEYXRhKHRoaXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICBkYXRhLl9fd2Vidmlld0lkX18gPSBtcEluc3RhbmNlLmRhdGEuX193ZWJ2aWV3SWRfXztcbiAgICB2YXIgbXBEYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgLy/ku4XlkIzmraUgZGF0YSDkuK3mnInnmoTmlbDmja5cbiAgICAgIG1wRGF0YVtrZXldID0gbXBJbnN0YW5jZS5kYXRhW2tleV07XG4gICAgfSk7XG4gICAgdmFyIGRpZmZEYXRhID0gdGhpcy4kc2hvdWxkRGlmZkRhdGEgPT09IGZhbHNlID8gZGF0YSA6IGRpZmYoZGF0YSwgbXBEYXRhKTtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGlmZkRhdGEpLmxlbmd0aCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdGhpcy5fdWlkICtcbiAgICAgICAgICAnXeW3rumHj+abtOaWsCcsXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGlmZkRhdGEpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19uZXh0X3RpY2tfcGVuZGluZyA9IHRydWU7XG4gICAgICBtcEluc3RhbmNlLnNldERhdGEoZGlmZkRhdGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLl9fbmV4dF90aWNrX3BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgZmx1c2hDYWxsYmFja3MkMSh0aGlzJDEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsdXNoQ2FsbGJhY2tzJDEodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlSZW5kZXIoKSB7XG5cbn1cblxuZnVuY3Rpb24gbW91bnRDb21wb25lbnQkMShcbiAgdm0sXG4gIGVsLFxuICBoeWRyYXRpbmdcbikge1xuICBpZiAoIXZtLm1wVHlwZSkgey8vbWFpbi5qcyDkuK3nmoQgbmV3IFZ1ZVxuICAgIHJldHVybiB2bVxuICB9XG4gIGlmICh2bS5tcFR5cGUgPT09ICdhcHAnKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlSZW5kZXI7XG4gIH1cbiAgaWYgKCF2bS4kb3B0aW9ucy5yZW5kZXIpIHtcbiAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVJlbmRlcjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoKHZtLiRvcHRpb25zLnRlbXBsYXRlICYmIHZtLiRvcHRpb25zLnRlbXBsYXRlLmNoYXJBdCgwKSAhPT0gJyMnKSB8fFxuICAgICAgICB2bS4kb3B0aW9ucy5lbCB8fCBlbCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgYXJlIHVzaW5nIHRoZSBydW50aW1lLW9ubHkgYnVpbGQgb2YgVnVlIHdoZXJlIHRoZSB0ZW1wbGF0ZSAnICtcbiAgICAgICAgICAnY29tcGlsZXIgaXMgbm90IGF2YWlsYWJsZS4gRWl0aGVyIHByZS1jb21waWxlIHRoZSB0ZW1wbGF0ZXMgaW50byAnICtcbiAgICAgICAgICAncmVuZGVyIGZ1bmN0aW9ucywgb3IgdXNlIHRoZSBjb21waWxlci1pbmNsdWRlZCBidWlsZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdGYWlsZWQgdG8gbW91bnQgY29tcG9uZW50OiB0ZW1wbGF0ZSBvciByZW5kZXIgZnVuY3Rpb24gbm90IGRlZmluZWQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgIXZtLl8kZmFsbGJhY2sgJiYgY2FsbEhvb2sodm0sICdiZWZvcmVNb3VudCcpO1xuXG4gIHZhciB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdm0uX3VwZGF0ZSh2bS5fcmVuZGVyKCksIGh5ZHJhdGluZyk7XG4gIH07XG5cbiAgLy8gd2Ugc2V0IHRoaXMgdG8gdm0uX3dhdGNoZXIgaW5zaWRlIHRoZSB3YXRjaGVyJ3MgY29uc3RydWN0b3JcbiAgLy8gc2luY2UgdGhlIHdhdGNoZXIncyBpbml0aWFsIHBhdGNoIG1heSBjYWxsICRmb3JjZVVwZGF0ZSAoZS5nLiBpbnNpZGUgY2hpbGRcbiAgLy8gY29tcG9uZW50J3MgbW91bnRlZCBob29rKSwgd2hpY2ggcmVsaWVzIG9uIHZtLl93YXRjaGVyIGJlaW5nIGFscmVhZHkgZGVmaW5lZFxuICBuZXcgV2F0Y2hlcih2bSwgdXBkYXRlQ29tcG9uZW50LCBub29wLCB7XG4gICAgYmVmb3JlOiBmdW5jdGlvbiBiZWZvcmUoKSB7XG4gICAgICBpZiAodm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlVXBkYXRlJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0cnVlIC8qIGlzUmVuZGVyV2F0Y2hlciAqLyk7XG4gIGh5ZHJhdGluZyA9IGZhbHNlO1xuICByZXR1cm4gdm1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlbmRlckNsYXNzIChcbiAgc3RhdGljQ2xhc3MsXG4gIGR5bmFtaWNDbGFzc1xuKSB7XG4gIGlmIChpc0RlZihzdGF0aWNDbGFzcykgfHwgaXNEZWYoZHluYW1pY0NsYXNzKSkge1xuICAgIHJldHVybiBjb25jYXQoc3RhdGljQ2xhc3MsIHN0cmluZ2lmeUNsYXNzKGR5bmFtaWNDbGFzcykpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gYSA/IGIgPyAoYSArICcgJyArIGIpIDogYSA6IChiIHx8ICcnKVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlDbGFzcyAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeUFycmF5KHZhbHVlKVxuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5T2JqZWN0KHZhbHVlKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUFycmF5ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIHZhciBzdHJpbmdpZmllZDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaXNEZWYoc3RyaW5naWZpZWQgPSBzdHJpbmdpZnlDbGFzcyh2YWx1ZVtpXSkpICYmIHN0cmluZ2lmaWVkICE9PSAnJykge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0gc3RyaW5naWZpZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5T2JqZWN0ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbnZhciBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgdmFyIHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nIChiaW5kaW5nU3R5bGUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICByZXR1cm4gYmluZGluZ1N0eWxlXG59XG5cbi8qICAqL1xuXG52YXIgTVBfTUVUSE9EUyA9IFsnY3JlYXRlU2VsZWN0b3JRdWVyeScsICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicsICdzZWxlY3RBbGxDb21wb25lbnRzJywgJ3NlbGVjdENvbXBvbmVudCddO1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQob2JqLCBwYXRoKSB7XG4gIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgdmFyIGtleSA9IHBhcnRzWzBdO1xuICBpZiAoa2V5LmluZGV4T2YoJ19fJG4nKSA9PT0gMCkgeyAvL251bWJlciBpbmRleFxuICAgIGtleSA9IHBhcnNlSW50KGtleS5yZXBsYWNlKCdfXyRuJywgJycpKTtcbiAgfVxuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIG9ialtrZXldXG4gIH1cbiAgcmV0dXJuIGdldFRhcmdldChvYmpba2V5XSwgcGFydHMuc2xpY2UoMSkuam9pbignLicpKVxufVxuXG5mdW5jdGlvbiBpbnRlcm5hbE1peGluKFZ1ZSkge1xuXG4gIFZ1ZS5jb25maWcuZXJyb3JIYW5kbGVyID0gZnVuY3Rpb24oZXJyLCB2bSwgaW5mbykge1xuICAgIFZ1ZS51dGlsLndhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICB2YXIgYXBwID0gdHlwZW9mIGdldEFwcCA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRBcHAoKTtcbiAgICBpZiAoYXBwICYmIGFwcC5vbkVycm9yKSB7XG4gICAgICBhcHAub25FcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb2xkRW1pdCA9IFZ1ZS5wcm90b3R5cGUuJGVtaXQ7XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIGV2ZW50KSB7XG4gICAgICB0aGlzLiRzY29wZVsndHJpZ2dlckV2ZW50J10oZXZlbnQsIHtcbiAgICAgICAgX19hcmdzX186IHRvQXJyYXkoYXJndW1lbnRzLCAxKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvbGRFbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgcmV0dXJuIG5leHRUaWNrJDEodGhpcywgZm4pXG4gIH07XG5cbiAgTVBfTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICBWdWUucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGVbbWV0aG9kXSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGVbbWV0aG9kXShhcmdzKVxuICAgICAgfVxuICAgICAgLy8gbXAtYWxpcGF5XG4gICAgICBpZiAodHlwZW9mIG15ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChtZXRob2QgPT09ICdjcmVhdGVTZWxlY3RvclF1ZXJ5Jykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgICAgICByZXR1cm4gbXkuY3JlYXRlU2VsZWN0b3JRdWVyeShhcmdzKVxuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICAgICAgcmV0dXJuIG15LmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKGFyZ3MpXG4gICAgICB9XG4gICAgICAvLyBUT0RPIG1wLWFsaXBheSDmmoLkuI3mlK/mjIEgc2VsZWN0QWxsQ29tcG9uZW50cyxzZWxlY3RDb21wb25lbnRcbiAgICB9O1xuICB9KTtcblxuICBWdWUucHJvdG90eXBlLl9faW5pdF9wcm92aWRlID0gaW5pdFByb3ZpZGU7XG5cbiAgVnVlLnByb3RvdHlwZS5fX2luaXRfaW5qZWN0aW9ucyA9IGluaXRJbmplY3Rpb25zO1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2sgPSBmdW5jdGlvbihob29rLCBhcmdzKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgbGlmZWN5Y2xlIGhvb2tzXG4gICAgcHVzaFRhcmdldCgpO1xuICAgIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICAgIHZhciBpbmZvID0gaG9vayArIFwiIGhvb2tcIjtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChoYW5kbGVycykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgcmV0ID0gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBhcmdzID8gW2FyZ3NdIDogbnVsbCwgdm0sIGluZm8pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2ssIGFyZ3MpO1xuICAgIH1cbiAgICBwb3BUYXJnZXQoKTtcbiAgICByZXR1cm4gcmV0XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX3NldF9tb2RlbCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5LCB2YWx1ZSwgbW9kaWZpZXJzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kaWZpZXJzKSkge1xuICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCd0cmltJykgIT09IC0xKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgfVxuICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCdudW1iZXInKSAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9uKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX3NldF9zeW5jID0gZnVuY3Rpb24odGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX2dldF9vcmlnID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KGl0ZW0pKSB7XG4gICAgICByZXR1cm4gaXRlbVsnJG9yaWcnXSB8fCBpdGVtXG4gICAgfVxuICAgIHJldHVybiBpdGVtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX2dldF92YWx1ZSA9IGZ1bmN0aW9uKGRhdGFQYXRoLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gZ2V0VGFyZ2V0KHRhcmdldCB8fCB0aGlzLCBkYXRhUGF0aClcbiAgfTtcblxuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfY2xhc3MgPSBmdW5jdGlvbihkeW5hbWljQ2xhc3MsIHN0YXRpY0NsYXNzKSB7XG4gICAgcmV0dXJuIHJlbmRlckNsYXNzKHN0YXRpY0NsYXNzLCBkeW5hbWljQ2xhc3MpXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX2dldF9zdHlsZSA9IGZ1bmN0aW9uKGR5bmFtaWNTdHlsZSwgc3RhdGljU3R5bGUpIHtcbiAgICBpZiAoIWR5bmFtaWNTdHlsZSAmJiAhc3RhdGljU3R5bGUpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICB2YXIgZHluYW1pY1N0eWxlT2JqID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGR5bmFtaWNTdHlsZSk7XG4gICAgdmFyIHN0eWxlT2JqID0gc3RhdGljU3R5bGUgPyBleHRlbmQoc3RhdGljU3R5bGUsIGR5bmFtaWNTdHlsZU9iaikgOiBkeW5hbWljU3R5bGVPYmo7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlT2JqKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICgoaHlwaGVuYXRlKG5hbWUpKSArIFwiOlwiICsgKHN0eWxlT2JqW25hbWVdKSk7IH0pLmpvaW4oJzsnKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19tYXAgPSBmdW5jdGlvbih2YWwsIGl0ZXJhdGVlKSB7XG4gICAgLy9UT0RPIOaaguS4jeiAg+iZkSBzdHJpbmdcbiAgICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0ID0gbmV3IEFycmF5KHZhbC5sZW5ndGgpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcmV0W2ldID0gaXRlcmF0ZWUodmFsW2ldLCBpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRba2V5XSA9IGl0ZXJhdGVlKHZhbFtrZXldLCBrZXksIGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHZhbDsgaSA8IGw7IGkrKykge1xuICAgICAgICAvLyDnrKzkuIDkuKrlj4LmlbDmmoLml7bku43lkozlsI/nqIvluo/kuIDoh7RcbiAgICAgICAgcmV0W2ldID0gaXRlcmF0ZWUoaSwgaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9O1xuXG59XG5cbi8qICAqL1xuXG52YXIgTElGRUNZQ0xFX0hPT0tTJDEgPSBbXG4gICAgLy9BcHBcbiAgICAnb25MYXVuY2gnLFxuICAgICdvblNob3cnLFxuICAgICdvbkhpZGUnLFxuICAgICdvblVuaU5WaWV3TWVzc2FnZScsXG4gICAgJ29uUGFnZU5vdEZvdW5kJyxcbiAgICAnb25UaGVtZUNoYW5nZScsXG4gICAgJ29uRXJyb3InLFxuICAgICdvblVuaGFuZGxlZFJlamVjdGlvbicsXG4gICAgLy9QYWdlXG4gICAgJ29uSW5pdCcsXG4gICAgJ29uTG9hZCcsXG4gICAgLy8gJ29uU2hvdycsXG4gICAgJ29uUmVhZHknLFxuICAgIC8vICdvbkhpZGUnLFxuICAgICdvblVubG9hZCcsXG4gICAgJ29uUHVsbERvd25SZWZyZXNoJyxcbiAgICAnb25SZWFjaEJvdHRvbScsXG4gICAgJ29uVGFiSXRlbVRhcCcsXG4gICAgJ29uQWRkVG9GYXZvcml0ZXMnLFxuICAgICdvblNoYXJlVGltZWxpbmUnLFxuICAgICdvblNoYXJlQXBwTWVzc2FnZScsXG4gICAgJ29uUmVzaXplJyxcbiAgICAnb25QYWdlU2Nyb2xsJyxcbiAgICAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJyxcbiAgICAnb25CYWNrUHJlc3MnLFxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnLFxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcsXG4gICAgJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcsXG4gICAgLy9Db21wb25lbnRcbiAgICAvLyAnb25SZWFkeScsIC8vIOWFvOWuueaXp+eJiOacrO+8jOW6lOivpeenu+mZpOivpeS6i+S7tlxuICAgICdvblBhZ2VTaG93JyxcbiAgICAnb25QYWdlSGlkZScsXG4gICAgJ29uUGFnZVJlc2l6ZSdcbl07XG5mdW5jdGlvbiBsaWZlY3ljbGVNaXhpbiQxKFZ1ZSkge1xuXG4gICAgLy9maXhlZCB2dWUtY2xhc3MtY29tcG9uZW50XG4gICAgdmFyIG9sZEV4dGVuZCA9IFZ1ZS5leHRlbmQ7XG4gICAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uKGV4dGVuZE9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIG1ldGhvZHMgPSBleHRlbmRPcHRpb25zLm1ldGhvZHM7XG4gICAgICAgIGlmIChtZXRob2RzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKExJRkVDWUNMRV9IT09LUyQxLmluZGV4T2YobWV0aG9kTmFtZSkhPT0tMSkge1xuICAgICAgICAgICAgICAgICAgICBleHRlbmRPcHRpb25zW21ldGhvZE5hbWVdID0gbWV0aG9kc1ttZXRob2ROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2xkRXh0ZW5kLmNhbGwodGhpcywgZXh0ZW5kT3B0aW9ucylcbiAgICB9O1xuXG4gICAgdmFyIHN0cmF0ZWdpZXMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcbiAgICB2YXIgbWVyZ2VIb29rID0gc3RyYXRlZ2llcy5jcmVhdGVkO1xuICAgIExJRkVDWUNMRV9IT09LUyQxLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgc3RyYXRlZ2llc1tob29rXSA9IG1lcmdlSG9vaztcbiAgICB9KTtcblxuICAgIFZ1ZS5wcm90b3R5cGUuX19saWZlY3ljbGVfaG9va3NfXyA9IExJRkVDWUNMRV9IT09LUyQxO1xufVxuXG4vKiAgKi9cblxuLy8gaW5zdGFsbCBwbGF0Zm9ybSBwYXRjaCBmdW5jdGlvblxuVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gPSBwYXRjaDtcblxuLy8gcHVibGljIG1vdW50IG1ldGhvZFxuVnVlLnByb3RvdHlwZS4kbW91bnQgPSBmdW5jdGlvbihcbiAgICBlbCAsXG4gICAgaHlkcmF0aW5nIFxuKSB7XG4gICAgcmV0dXJuIG1vdW50Q29tcG9uZW50JDEodGhpcywgZWwsIGh5ZHJhdGluZylcbn07XG5cbmxpZmVjeWNsZU1peGluJDEoVnVlKTtcbmludGVybmFsTWl4aW4oVnVlKTtcblxuLyogICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZTtcbiIsImNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xyXG5jb25zdCBpc09iamVjdCA9ICh2YWwpID0+IHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcclxuY29uc3QgZGVmYXVsdERlbGltaXRlcnMgPSBbJ3snLCAnfSddO1xyXG5jbGFzcyBCYXNlRm9ybWF0dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2NhY2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShtZXNzYWdlLCB2YWx1ZXMsIGRlbGltaXRlcnMgPSBkZWZhdWx0RGVsaW1pdGVycykge1xyXG4gICAgICAgIGlmICghdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbWVzc2FnZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b2tlbnMgPSB0aGlzLl9jYWNoZXNbbWVzc2FnZV07XHJcbiAgICAgICAgaWYgKCF0b2tlbnMpIHtcclxuICAgICAgICAgICAgdG9rZW5zID0gcGFyc2UobWVzc2FnZSwgZGVsaW1pdGVycyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlc1ttZXNzYWdlXSA9IHRva2VucztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBpbGUodG9rZW5zLCB2YWx1ZXMpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IFJFX1RPS0VOX0xJU1RfVkFMVUUgPSAvXig/OlxcZCkrLztcclxuY29uc3QgUkVfVE9LRU5fTkFNRURfVkFMVUUgPSAvXig/OlxcdykrLztcclxuZnVuY3Rpb24gcGFyc2UoZm9ybWF0LCBbc3RhcnREZWxpbWl0ZXIsIGVuZERlbGltaXRlcl0pIHtcclxuICAgIGNvbnN0IHRva2VucyA9IFtdO1xyXG4gICAgbGV0IHBvc2l0aW9uID0gMDtcclxuICAgIGxldCB0ZXh0ID0gJyc7XHJcbiAgICB3aGlsZSAocG9zaXRpb24gPCBmb3JtYXQubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IGNoYXIgPSBmb3JtYXRbcG9zaXRpb24rK107XHJcbiAgICAgICAgaWYgKGNoYXIgPT09IHN0YXJ0RGVsaW1pdGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRleHQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgc3ViID0gJyc7XHJcbiAgICAgICAgICAgIGNoYXIgPSBmb3JtYXRbcG9zaXRpb24rK107XHJcbiAgICAgICAgICAgIHdoaWxlIChjaGFyICE9PSB1bmRlZmluZWQgJiYgY2hhciAhPT0gZW5kRGVsaW1pdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBzdWIgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSBmb3JtYXRbcG9zaXRpb24rK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaXNDbG9zZWQgPSBjaGFyID09PSBlbmREZWxpbWl0ZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBSRV9UT0tFTl9MSVNUX1ZBTFVFLnRlc3Qoc3ViKVxyXG4gICAgICAgICAgICAgICAgPyAnbGlzdCdcclxuICAgICAgICAgICAgICAgIDogaXNDbG9zZWQgJiYgUkVfVE9LRU5fTkFNRURfVkFMVUUudGVzdChzdWIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnbmFtZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAndW5rbm93bic7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdmFsdWU6IHN1YiwgdHlwZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gIGVsc2UgaWYgKGNoYXIgPT09ICclJykge1xyXG4gICAgICAgIC8vICAgLy8gd2hlbiBmb3VuZCByYWlscyBpMThuIHN5bnRheCwgc2tpcCB0ZXh0IGNhcHR1cmVcclxuICAgICAgICAvLyAgIGlmIChmb3JtYXRbcG9zaXRpb25dICE9PSAneycpIHtcclxuICAgICAgICAvLyAgICAgdGV4dCArPSBjaGFyXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IGNoYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGV4dCAmJiB0b2tlbnMucHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRleHQgfSk7XHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBpbGUodG9rZW5zLCB2YWx1ZXMpIHtcclxuICAgIGNvbnN0IGNvbXBpbGVkID0gW107XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgY29uc3QgbW9kZSA9IGlzQXJyYXkodmFsdWVzKVxyXG4gICAgICAgID8gJ2xpc3QnXHJcbiAgICAgICAgOiBpc09iamVjdCh2YWx1ZXMpXHJcbiAgICAgICAgICAgID8gJ25hbWVkJ1xyXG4gICAgICAgICAgICA6ICd1bmtub3duJztcclxuICAgIGlmIChtb2RlID09PSAndW5rbm93bicpIHtcclxuICAgICAgICByZXR1cm4gY29tcGlsZWQ7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xyXG4gICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgICAgIGNvbXBpbGVkLnB1c2godG9rZW4udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpc3QnOlxyXG4gICAgICAgICAgICAgICAgY29tcGlsZWQucHVzaCh2YWx1ZXNbcGFyc2VJbnQodG9rZW4udmFsdWUsIDEwKV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ25hbWVkJzpcclxuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnbmFtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGlsZWQucHVzaCh2YWx1ZXNbdG9rZW4udmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVHlwZSBvZiB0b2tlbiAnJHt0b2tlbi50eXBlfScgYW5kIGZvcm1hdCBvZiB2YWx1ZSAnJHttb2RlfScgZG9uJ3QgbWF0Y2ghYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Vua25vd24nOlxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYERldGVjdCAndW5rbm93bicgdHlwZSBvZiB0b2tlbiFgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbXBpbGVkO1xyXG59XHJcblxyXG5jb25zdCBMT0NBTEVfWkhfSEFOUyA9ICd6aC1IYW5zJztcclxuY29uc3QgTE9DQUxFX1pIX0hBTlQgPSAnemgtSGFudCc7XHJcbmNvbnN0IExPQ0FMRV9FTiA9ICdlbic7XHJcbmNvbnN0IExPQ0FMRV9GUiA9ICdmcic7XHJcbmNvbnN0IExPQ0FMRV9FUyA9ICdlcyc7XHJcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuY29uc3QgaGFzT3duID0gKHZhbCwga2V5KSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KTtcclxuY29uc3QgZGVmYXVsdEZvcm1hdHRlciA9IG5ldyBCYXNlRm9ybWF0dGVyKCk7XHJcbmZ1bmN0aW9uIGluY2x1ZGUoc3RyLCBwYXJ0cykge1xyXG4gICAgcmV0dXJuICEhcGFydHMuZmluZCgocGFydCkgPT4gc3RyLmluZGV4T2YocGFydCkgIT09IC0xKTtcclxufVxyXG5mdW5jdGlvbiBzdGFydHNXaXRoKHN0ciwgcGFydHMpIHtcclxuICAgIHJldHVybiBwYXJ0cy5maW5kKChwYXJ0KSA9PiBzdHIuaW5kZXhPZihwYXJ0KSA9PT0gMCk7XHJcbn1cclxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGxvY2FsZSwgbWVzc2FnZXMpIHtcclxuICAgIGlmICghbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbG9jYWxlID0gbG9jYWxlLnRyaW0oKS5yZXBsYWNlKC9fL2csICctJyk7XHJcbiAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXNbbG9jYWxlXSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGU7XHJcbiAgICB9XHJcbiAgICBsb2NhbGUgPSBsb2NhbGUudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmIChsb2NhbGUuaW5kZXhPZignemgnKSA9PT0gMCkge1xyXG4gICAgICAgIGlmIChsb2NhbGUuaW5kZXhPZignLWhhbnMnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBMT0NBTEVfWkhfSEFOUztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2FsZS5pbmRleE9mKCctaGFudCcpID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5UO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5jbHVkZShsb2NhbGUsIFsnLXR3JywgJy1oaycsICctbW8nLCAnLWNodCddKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTE9DQUxFX1pIX0hBTlQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBMT0NBTEVfWkhfSEFOUztcclxuICAgIH1cclxuICAgIGNvbnN0IGxhbmcgPSBzdGFydHNXaXRoKGxvY2FsZSwgW0xPQ0FMRV9FTiwgTE9DQUxFX0ZSLCBMT0NBTEVfRVNdKTtcclxuICAgIGlmIChsYW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGxhbmc7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgSTE4biB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IGxvY2FsZSwgZmFsbGJhY2tMb2NhbGUsIG1lc3NhZ2VzLCB3YXRjaGVyLCBmb3JtYXRlciwgfSkge1xyXG4gICAgICAgIHRoaXMubG9jYWxlID0gTE9DQUxFX0VOO1xyXG4gICAgICAgIHRoaXMuZmFsbGJhY2tMb2NhbGUgPSBMT0NBTEVfRU47XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0ge307XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMud2F0Y2hlcnMgPSBbXTtcclxuICAgICAgICBpZiAoZmFsbGJhY2tMb2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsYmFja0xvY2FsZSA9IGZhbGxiYWNrTG9jYWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZvcm1hdGVyID0gZm9ybWF0ZXIgfHwgZGVmYXVsdEZvcm1hdHRlcjtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXMgfHwge307XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IExPQ0FMRV9FTik7XHJcbiAgICAgICAgaWYgKHdhdGNoZXIpIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaExvY2FsZSh3YXRjaGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRMb2NhbGUobG9jYWxlKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkTG9jYWxlID0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBub3JtYWxpemVMb2NhbGUobG9jYWxlLCB0aGlzLm1lc3NhZ2VzKSB8fCB0aGlzLmZhbGxiYWNrTG9jYWxlO1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlc1t0aGlzLmxvY2FsZV0pIHtcclxuICAgICAgICAgICAgLy8g5Y+v6IO95Yid5aeL5YyW5pe25LiN5a2Y5ZyoXHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbdGhpcy5sb2NhbGVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMubWVzc2FnZXNbdGhpcy5sb2NhbGVdO1xyXG4gICAgICAgIC8vIOS7heWPkeeUn+WPmOWMluaXtu+8jOmAmuefpVxyXG4gICAgICAgIGlmIChvbGRMb2NhbGUgIT09IHRoaXMubG9jYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcnMuZm9yRWFjaCgod2F0Y2hlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2F0Y2hlcih0aGlzLmxvY2FsZSwgb2xkTG9jYWxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TG9jYWxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZTtcclxuICAgIH1cclxuICAgIHdhdGNoTG9jYWxlKGZuKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLndhdGNoZXJzLnB1c2goZm4pIC0gMTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGFkZChsb2NhbGUsIG1lc3NhZ2UsIG92ZXJyaWRlID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGN1ck1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlc1tsb2NhbGVdO1xyXG4gICAgICAgIGlmIChjdXJNZXNzYWdlcykge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3VyTWVzc2FnZXMsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWVzc2FnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNPd24oY3VyTWVzc2FnZXMsIGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyTWVzc2FnZXNba2V5XSA9IG1lc3NhZ2Vba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1tsb2NhbGVdID0gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdGVyLmludGVycG9sYXRlKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycykuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICB0KGtleSwgbG9jYWxlLCB2YWx1ZXMpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcclxuICAgICAgICBpZiAodHlwZW9mIGxvY2FsZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgbG9jYWxlID0gbm9ybWFsaXplTG9jYWxlKGxvY2FsZSwgdGhpcy5tZXNzYWdlcyk7XHJcbiAgICAgICAgICAgIGxvY2FsZSAmJiAobWVzc2FnZSA9IHRoaXMubWVzc2FnZXNbbG9jYWxlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGFzT3duKG1lc3NhZ2UsIGtleSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5ub3QgdHJhbnNsYXRlIHRoZSB2YWx1ZSBvZiBrZXlwYXRoICR7a2V5fS4gVXNlIHRoZSB2YWx1ZSBvZiBrZXlwYXRoIGFzIGRlZmF1bHQuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdGVyLmludGVycG9sYXRlKG1lc3NhZ2Vba2V5XSwgdmFsdWVzKS5qb2luKCcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd2F0Y2hBcHBMb2NhbGUoYXBwVm0sIGkxOG4pIHtcclxuICAgIC8vIOmcgOimgeS/neivgSB3YXRjaCDnmoTop6blj5HlnKjnu4Tku7bmuLLmn5PkuYvliY1cclxuICAgIGlmIChhcHBWbS4kd2F0Y2hMb2NhbGUpIHtcclxuICAgICAgICAvLyB2dWUyXHJcbiAgICAgICAgYXBwVm0uJHdhdGNoTG9jYWxlKChuZXdMb2NhbGUpID0+IHtcclxuICAgICAgICAgICAgaTE4bi5zZXRMb2NhbGUobmV3TG9jYWxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFwcFZtLiR3YXRjaCgoKSA9PiBhcHBWbS4kbG9jYWxlLCAobmV3TG9jYWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGkxOG4uc2V0TG9jYWxlKG5ld0xvY2FsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdExvY2FsZSgpIHtcclxuICAgIGlmICh0eXBlb2YgdW5pICE9PSAndW5kZWZpbmVkJyAmJiB1bmkuZ2V0TG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuaS5nZXRMb2NhbGUoKTtcclxuICAgIH1cclxuICAgIC8vIOWwj+eoi+W6j+W5s+WPsO+8jHVuaSDlkowgdW5pLWkxOG4g5LqS55u45byV55So77yM5a+86Ie06K6/6Zeu5LiN5YiwIHVuae+8jOaVheWcqCBnbG9iYWwg5LiK5oyC5LqGIGdldExvY2FsZVxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5nZXRMb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsLmdldExvY2FsZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExPQ0FMRV9FTjtcclxufVxyXG5mdW5jdGlvbiBpbml0VnVlSTE4bihsb2NhbGUsIG1lc3NhZ2VzID0ge30sIGZhbGxiYWNrTG9jYWxlLCB3YXRjaGVyKSB7XHJcbiAgICAvLyDlhbzlrrnml6fniYjmnKzlhaXlj4JcclxuICAgIGlmICh0eXBlb2YgbG9jYWxlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIFtsb2NhbGUsIG1lc3NhZ2VzXSA9IFtcclxuICAgICAgICAgICAgbWVzc2FnZXMsXHJcbiAgICAgICAgICAgIGxvY2FsZSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBsb2NhbGUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8g5Zug5Li65bCP56iL5bqP5bmz5Y+w77yMdW5pLWkxOG4g5ZKMIHVuaSDkupLnm7jlvJXnlKjvvIzlr7zoh7TmraTml7borr/pl64gdW5pIOaXtu+8jOS4uiB1bmRlZmluZWRcclxuICAgICAgICBsb2NhbGUgPSBnZXREZWZhdWx0TG9jYWxlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGZhbGxiYWNrTG9jYWxlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGZhbGxiYWNrTG9jYWxlID1cclxuICAgICAgICAgICAgKHR5cGVvZiBfX3VuaUNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcgJiYgX191bmlDb25maWcuZmFsbGJhY2tMb2NhbGUpIHx8XHJcbiAgICAgICAgICAgICAgICBMT0NBTEVfRU47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpMThuID0gbmV3IEkxOG4oe1xyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgICBmYWxsYmFja0xvY2FsZSxcclxuICAgICAgICBtZXNzYWdlcyxcclxuICAgICAgICB3YXRjaGVyLFxyXG4gICAgfSk7XHJcbiAgICBsZXQgdCA9IChrZXksIHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0QXBwICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8vIGFwcCB2aWV3XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWZ1bmMtYXNzaWduICovXHJcbiAgICAgICAgICAgIHQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpMThuLnQoa2V5LCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGlzV2F0Y2hlZEFwcExvY2FsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBWbSA9IGdldEFwcCgpLiR2bTtcclxuICAgICAgICAgICAgICAgIC8vIOWPr+iDvSR2bei/mOS4jeWtmOWcqO+8jOavlOWmguWcqOaUr+S7mOWuneWwj+eoi+W6j+S4re+8jOe7hOS7tuWumuS5iei+g+aXqe+8jOWcqHByb3Bz55qEZGVmYXVsdOmHjOS9v+eUqOS6hnQoKeWHveaVsO+8iOWmgnVuaS1nb29kcy1uYXbvvInvvIzmraTml7ZhcHDov5jmnKrliJ3lp4vljJZcclxuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIC8vIFx0dHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICAvLyBcdGRlZmF1bHQgKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gXHRcdHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgLy8gXHRcdFx0aWNvbjogJ3Nob3AnLFxyXG4gICAgICAgICAgICAgICAgLy8gXHRcdFx0dGV4dDogdChcInVuaS1nb29kcy1uYXYub3B0aW9ucy5zaG9wXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gXHRcdH0sIHtcclxuICAgICAgICAgICAgICAgIC8vIFx0XHRcdGljb246ICdjYXJ0JyxcclxuICAgICAgICAgICAgICAgIC8vIFx0XHRcdHRleHQ6IHQoXCJ1bmktZ29vZHMtbmF2Lm9wdGlvbnMuY2FydFwiKVxyXG4gICAgICAgICAgICAgICAgLy8gXHRcdH1dXHJcbiAgICAgICAgICAgICAgICAvLyBcdH1cclxuICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICBpZiAoYXBwVm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDop6blj5Hlk43lupTlvI9cclxuICAgICAgICAgICAgICAgICAgICBhcHBWbS4kbG9jYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNXYXRjaGVkQXBwTG9jYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2F0Y2hlZEFwcExvY2FsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoQXBwTG9jYWxlKGFwcFZtLCBpMThuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTE4bi50KGtleSwgdmFsdWVzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQoa2V5LCB2YWx1ZXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaTE4bixcclxuICAgICAgICBmKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycykge1xyXG4gICAgICAgICAgICByZXR1cm4gaTE4bi5mKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0KGtleSwgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0KGtleSwgdmFsdWVzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZChsb2NhbGUsIG1lc3NhZ2UsIG92ZXJyaWRlID0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTE4bi5hZGQobG9jYWxlLCBtZXNzYWdlLCBvdmVycmlkZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaChmbikge1xyXG4gICAgICAgICAgICByZXR1cm4gaTE4bi53YXRjaExvY2FsZShmbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRMb2NhbGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpMThuLmdldExvY2FsZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TG9jYWxlKG5ld0xvY2FsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTE4bi5zZXRMb2NhbGUobmV3TG9jYWxlKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgaXNTdHJpbmcgPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcclxubGV0IGZvcm1hdGVyO1xyXG5mdW5jdGlvbiBoYXNJMThuSnNvbihqc29uT2JqLCBkZWxpbWl0ZXJzKSB7XHJcbiAgICBpZiAoIWZvcm1hdGVyKSB7XHJcbiAgICAgICAgZm9ybWF0ZXIgPSBuZXcgQmFzZUZvcm1hdHRlcigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdhbGtKc29uT2JqKGpzb25PYmosIChqc29uT2JqLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGpzb25PYmpba2V5XTtcclxuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0kxOG5TdHIodmFsdWUsIGRlbGltaXRlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc0kxOG5Kc29uKHZhbHVlLCBkZWxpbWl0ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBwYXJzZUkxOG5Kc29uKGpzb25PYmosIHZhbHVlcywgZGVsaW1pdGVycykge1xyXG4gICAgaWYgKCFmb3JtYXRlcikge1xyXG4gICAgICAgIGZvcm1hdGVyID0gbmV3IEJhc2VGb3JtYXR0ZXIoKTtcclxuICAgIH1cclxuICAgIHdhbGtKc29uT2JqKGpzb25PYmosIChqc29uT2JqLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGpzb25PYmpba2V5XTtcclxuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0kxOG5TdHIodmFsdWUsIGRlbGltaXRlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqW2tleV0gPSBjb21waWxlU3RyKHZhbHVlLCB2YWx1ZXMsIGRlbGltaXRlcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJzZUkxOG5Kc29uKHZhbHVlLCB2YWx1ZXMsIGRlbGltaXRlcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGpzb25PYmo7XHJcbn1cclxuZnVuY3Rpb24gY29tcGlsZUkxOG5Kc29uU3RyKGpzb25TdHIsIHsgbG9jYWxlLCBsb2NhbGVzLCBkZWxpbWl0ZXJzLCB9KSB7XHJcbiAgICBpZiAoIWlzSTE4blN0cihqc29uU3RyLCBkZWxpbWl0ZXJzKSkge1xyXG4gICAgICAgIHJldHVybiBqc29uU3RyO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmb3JtYXRlcikge1xyXG4gICAgICAgIGZvcm1hdGVyID0gbmV3IEJhc2VGb3JtYXR0ZXIoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxvY2FsZVZhbHVlcyA9IFtdO1xyXG4gICAgT2JqZWN0LmtleXMobG9jYWxlcykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lICE9PSBsb2NhbGUpIHtcclxuICAgICAgICAgICAgbG9jYWxlVmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBsb2NhbGVzW25hbWVdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxvY2FsZVZhbHVlcy51bnNoaWZ0KHsgbG9jYWxlLCB2YWx1ZXM6IGxvY2FsZXNbbG9jYWxlXSB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGNvbXBpbGVKc29uT2JqKEpTT04ucGFyc2UoanNvblN0ciksIGxvY2FsZVZhbHVlcywgZGVsaW1pdGVycyksIG51bGwsIDIpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHsgfVxyXG4gICAgcmV0dXJuIGpzb25TdHI7XHJcbn1cclxuZnVuY3Rpb24gaXNJMThuU3RyKHZhbHVlLCBkZWxpbWl0ZXJzKSB7XHJcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZihkZWxpbWl0ZXJzWzBdKSA+IC0xO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBpbGVTdHIodmFsdWUsIHZhbHVlcywgZGVsaW1pdGVycykge1xyXG4gICAgcmV0dXJuIGZvcm1hdGVyLmludGVycG9sYXRlKHZhbHVlLCB2YWx1ZXMsIGRlbGltaXRlcnMpLmpvaW4oJycpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBpbGVWYWx1ZShqc29uT2JqLCBrZXksIGxvY2FsZVZhbHVlcywgZGVsaW1pdGVycykge1xyXG4gICAgY29uc3QgdmFsdWUgPSBqc29uT2JqW2tleV07XHJcbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgLy8g5a2Y5Zyo5Zu96ZmF5YyWXHJcbiAgICAgICAgaWYgKGlzSTE4blN0cih2YWx1ZSwgZGVsaW1pdGVycykpIHtcclxuICAgICAgICAgICAganNvbk9ialtrZXldID0gY29tcGlsZVN0cih2YWx1ZSwgbG9jYWxlVmFsdWVzWzBdLnZhbHVlcywgZGVsaW1pdGVycyk7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbGVWYWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5qC85byP5YyW5Zu96ZmF5YyW6K+t6KiAXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUxvY2FsZXMgPSAoanNvbk9ialtrZXkgKyAnTG9jYWxlcyddID0ge30pO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxlVmFsdWVzLmZvckVhY2goKGxvY2FsVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUxvY2FsZXNbbG9jYWxWYWx1ZS5sb2NhbGVdID0gY29tcGlsZVN0cih2YWx1ZSwgbG9jYWxWYWx1ZS52YWx1ZXMsIGRlbGltaXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb21waWxlSnNvbk9iaih2YWx1ZSwgbG9jYWxlVmFsdWVzLCBkZWxpbWl0ZXJzKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjb21waWxlSnNvbk9iaihqc29uT2JqLCBsb2NhbGVWYWx1ZXMsIGRlbGltaXRlcnMpIHtcclxuICAgIHdhbGtKc29uT2JqKGpzb25PYmosIChqc29uT2JqLCBrZXkpID0+IHtcclxuICAgICAgICBjb21waWxlVmFsdWUoanNvbk9iaiwga2V5LCBsb2NhbGVWYWx1ZXMsIGRlbGltaXRlcnMpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ganNvbk9iajtcclxufVxyXG5mdW5jdGlvbiB3YWxrSnNvbk9iaihqc29uT2JqLCB3YWxrKSB7XHJcbiAgICBpZiAoaXNBcnJheShqc29uT2JqKSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbk9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAod2Fsayhqc29uT2JqLCBpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09iamVjdChqc29uT2JqKSkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGpzb25PYmopIHtcclxuICAgICAgICAgICAgaWYgKHdhbGsoanNvbk9iaiwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVMb2NhbGUobG9jYWxlcykge1xyXG4gICAgcmV0dXJuIChsb2NhbGUpID0+IHtcclxuICAgICAgICBpZiAoIWxvY2FsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbGUgPSBub3JtYWxpemVMb2NhbGUobG9jYWxlKSB8fCBsb2NhbGU7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVMb2NhbGVDaGFpbihsb2NhbGUpLmZpbmQoKGxvY2FsZSkgPT4gbG9jYWxlcy5pbmRleE9mKGxvY2FsZSkgPiAtMSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHJlc29sdmVMb2NhbGVDaGFpbihsb2NhbGUpIHtcclxuICAgIGNvbnN0IGNoYWluID0gW107XHJcbiAgICBjb25zdCB0b2tlbnMgPSBsb2NhbGUuc3BsaXQoJy0nKTtcclxuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgY2hhaW4ucHVzaCh0b2tlbnMuam9pbignLScpKTtcclxuICAgICAgICB0b2tlbnMucG9wKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hhaW47XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJhc2VGb3JtYXR0ZXIgYXMgRm9ybWF0dGVyLCBJMThuLCBMT0NBTEVfRU4sIExPQ0FMRV9FUywgTE9DQUxFX0ZSLCBMT0NBTEVfWkhfSEFOUywgTE9DQUxFX1pIX0hBTlQsIGNvbXBpbGVJMThuSnNvblN0ciwgaGFzSTE4bkpzb24sIGluaXRWdWVJMThuLCBpc0kxOG5TdHIsIGlzU3RyaW5nLCBub3JtYWxpemVMb2NhbGUsIHBhcnNlSTE4bkpzb24sIHJlc29sdmVMb2NhbGUgfTtcclxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIGlmICghb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSB7fVxuICAgIH1cbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAgIGZvciAodmFyIG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgICAgaWYgKGhhc093bi5jYWxsKGNvbXBvbmVudHMsIG5hbWUpICYmICFoYXNPd24uY2FsbChvcHRpb25zLmNvbXBvbmVudHMsIG5hbWUpKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudHNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIGFqYXguanNcbi8vIGFqYXguanNcblxuLy8g5byV5YWlIHVuaS1hamF4IOaooeWdl1xuaW1wb3J0IGFqYXggZnJvbSAnQC91bmlfbW9kdWxlcy91LWFqYXgvanNfc2RrJ1xuXG4vLyDliJvlu7ror7fmsYLlrp7kvotcbmNvbnN0IGluc3RhbmNlID0gYWpheC5jcmVhdGUoe1xuICAvLyDliJ3lp4vphY3nva5cbiAgYmFzZVVSTDogJ2h0dHBzOi8vcWN4bGxkLmZuLnRoZWxhcmtjbG91ZC5jb20nXG59KVxuXG4vLyDmt7vliqDor7fmsYLmi6bmiKrlmahcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgY29uZmlnID0+IHtcbiAgICAvLyDlnKjlj5HpgIHor7fmsYLliY3lgZrkupvku4DkuYhcbiAgICByZXR1cm4gY29uZmlnXG4gIH0sXG4gIGVycm9yID0+IHtcbiAgICAvLyDlr7nor7fmsYLplJnor6/lgZrkupvku4DkuYhcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gIH1cbilcblxuLy8g5re75Yqg5ZON5bqU5oum5oiq5ZmoXG5pbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICByZXNwb25zZSA9PiB7XG4gICAgLy8g5a+55ZON5bqU5pWw5o2u5YGa5Lqb5LuA5LmIXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGVycm9yID0+IHtcbiAgICAvLyDlr7nlk43lupTplJnor6/lgZrkupvku4DkuYhcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gIH1cbilcblxuLy8g5a+85Ye6IGNyZWF0ZSDliJvlu7rlkI7nmoTlrp7kvotcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWvvOWHuuWIm+W7uuWQjueahOWunuS+iyIsImltcG9ydCBBamF4IGZyb20gJy4vbGliL2NvcmUvQWpheCdcblxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICByZXR1cm4gbmV3IEFqYXgoZGVmYXVsdENvbmZpZykucmVxdWVzdFxufVxuXG5jb25zdCBhamF4ID0gY3JlYXRlSW5zdGFuY2UoKVxuXG5hamF4LmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UoaW5zdGFuY2VDb25maWcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFqYXhcbiIsImltcG9ydCBJbnRlcmNlcHRvck1hbmFnZXIgZnJvbSAnLi9JbnRlcmNlcHRvck1hbmFnZXInXG5pbXBvcnQgUmVxdWVzdENvbnN0cnVjdG9yIGZyb20gJy4uL2FkYXB0ZXJzL1JlcXVlc3QnXG5pbXBvcnQgZGV0YWNoQ29uZmlnIGZyb20gJy4uL2hlbHBlcnMvZGV0YWNoQ29uZmlnJ1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4uL2hlbHBlcnMvbWVyZ2VDb25maWcnXG5pbXBvcnQgb3JpZ2luVVJMIGZyb20gJy4uL2hlbHBlcnMvb3JpZ2luVVJMJ1xuaW1wb3J0IGRpc3BhdGNoUmVxdWVzdCBmcm9tICcuL2Rpc3BhdGNoUmVxdWVzdCdcbmltcG9ydCB7IGRldGFjaENhbmNlbCwgZGlzcGF0Y2hDYW5jZWwsIGludGVyY2VwdENhbmNlbCB9IGZyb20gJy4vaGFuZGxlQ2FuY2VsJ1xuaW1wb3J0IGRlZmF1bHRzLCB7IE1FVEhPRCB9IGZyb20gJy4uL2RlZmF1bHRzJ1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4IHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgLy8g6LWL5YC85Yiw5a6e5L6L6YWN572uXG4gICAgdGhpcy5jb25maWcgPSBjb25maWdcblxuICAgIC8vIOaMgui9veaLpuaIquWZqFxuICAgIHRoaXMucmVxdWVzdC5pbnRlcmNlcHRvcnMgPSB7XG4gICAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gICAgfVxuXG4gICAgLy8g5oyC6L295L+u5pS5IGNvbmZpZyDmlrnms5VcbiAgICB0aGlzLnJlcXVlc3QuY29uZmlnID0gYXN5bmMgZm4gPT4gKHRoaXMuY29uZmlnID0gYXdhaXQgZm4odGhpcy5fY29uZmlnKSlcblxuICAgIC8vIOaMgui9veWvueW6lOeahCBtZXRob2Qg5pa55rOVXG4gICAgZm9yRWFjaChNRVRIT0QsIG1ldGhvZCA9PiB7XG4gICAgICB0aGlzLnJlcXVlc3RbbWV0aG9kXSA9ICh1cmwsIGRhdGEsIGNvbmZpZykgPT5cbiAgICAgICAgdGhpcy5yZXF1ZXN0KFxuICAgICAgICAgIC4uLih0eXBlb2YgdXJsID09PSAnc3RyaW5nJyA/IFt1cmwsIGRhdGEsIHsgLi4uY29uZmlnLCBtZXRob2QgfV0gOiBbeyAuLi51cmwsIG1ldGhvZCB9XSlcbiAgICAgICAgKVxuICAgIH0pXG5cbiAgICAvLyDmjILovb3lrp7kvovmjqXlj6PlnLDlnYBcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIHRoaXMucmVxdWVzdC5iYXNlVVJMID0gKGF3YWl0IHRoaXMuY29uZmlnKS5iYXNlVVJMIHx8ICcnXG4gICAgICB0aGlzLnJlcXVlc3Qub3JpZ2luID0gb3JpZ2luVVJMKHRoaXMucmVxdWVzdC5iYXNlVVJMKVxuICAgIH0pXG4gIH1cblxuICBzZXQgY29uZmlnKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9XG4gICAgICB0eXBlb2YgY29uZmlnID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gYXN5bmMgKCkgPT4gbWVyZ2VDb25maWcoZGVmYXVsdHMsIGF3YWl0IGNvbmZpZygpKVxuICAgICAgICA6IG1lcmdlQ29uZmlnKGRlZmF1bHRzLCBjb25maWcpXG4gIH1cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2NvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZygpIDogdGhpcy5fY29uZmlnXG4gIH1cblxuICByZXF1ZXN0ID0gKC4uLmFyZ3MpID0+IHtcbiAgICAvLyDliIbnsbvor7fmsYLlj4LmlbBcbiAgICBjb25zdCB7IGNhbGxiYWNrLCBjb25maWcgfSA9IGRldGFjaENvbmZpZyguLi5hcmdzKVxuXG4gICAgLy8g5Yib5bu66K+35rGC57G7XG4gICAgY29uc3QgUmVxdWVzdCA9IFJlcXVlc3RDb25zdHJ1Y3RvcigpXG5cbiAgICAvLyDlo7DmmI4gUHJvbWlzZSDpk75cbiAgICBjb25zdCBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QoUmVxdWVzdCksIGRpc3BhdGNoQ2FuY2VsXVxuXG4gICAgLy8g5bCG6K+35rGC5oum5oiq6YGN5Y6G5re75Yqg5Yiw6ZO+5YmN6Z2iXG4gICAgdGhpcy5yZXF1ZXN0LmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2guZGVzYygoeyBmdWxmaWxsZWQsIHJlamVjdGVkIH0pID0+XG4gICAgICBjaGFpbi51bnNoaWZ0KGZ1bGZpbGxlZCwgcmVqZWN0ZWQpXG4gICAgKVxuXG4gICAgLy8g5bCG5ZON5bqU5oum5oiq6YGN5Y6G5re75Yqg5Yiw6ZO+5ZCO6Z2iXG4gICAgdGhpcy5yZXF1ZXN0LmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoLmFzYygoeyBmdWxmaWxsZWQsIHJlamVjdGVkIH0pID0+XG4gICAgICBjaGFpbi5wdXNoKGZ1bGZpbGxlZCwgaW50ZXJjZXB0Q2FuY2VsKHJlamVjdGVkKSlcbiAgICApXG5cbiAgICAvLyDlhYjmiafooYzojrflj5YgY29uZmlnIOivt+axgumFjee9rlxuICAgIGNoYWluLnVuc2hpZnQoYXN5bmMgY29uZmlnID0+IG1lcmdlQ29uZmlnKGF3YWl0IHRoaXMuY29uZmlnLCBjb25maWcpLCB1bmRlZmluZWQpXG5cbiAgICAvLyDlpITnkIblj5Hotbfor7fmsYLliY3nmoTplJnor6/mlbDmja5cbiAgICBjaGFpbi5wdXNoKHVuZGVmaW5lZCwgZGV0YWNoQ2FuY2VsKVxuXG4gICAgLy8g6LCD55So6K+35rGC5pa55rOV5ZCO77yM5LiU5oum5oiq5Zmo6Kem5Y+R5a6M5oiQ5ZCO77yM5Yik5pat5Zue6LCD5Y+C5pWw55qE5omn6KGMXG4gICAgY2hhaW4ucHVzaChcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFjYWxsYmFjaykgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIGNhbGxiYWNrLnN1Y2Nlc3M/LihyZXNwb25zZSlcbiAgICAgICAgY2FsbGJhY2suY29tcGxldGU/LihyZXNwb25zZSlcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgICAgY2FsbGJhY2suZmFpbD8uKGVycm9yKVxuICAgICAgICBjYWxsYmFjay5jb21wbGV0ZT8uKGVycm9yKVxuICAgICAgfVxuICAgIClcblxuICAgIC8vIOWIm+W7uuivt+axglByb21pc2XvvIzpgY3ljobpk77lsIbpk77kuIrmlrnms5XkvKDpgJLliLB0aGVu5Zue6LCDXG4gICAgbGV0IHJlcXVlc3QgPSBSZXF1ZXN0LnJlc29sdmUoY29uZmlnKVxuICAgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsIi8qKlxuICog5oum5oiq5Zmo57G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyY2VwdG9yTWFuYWdlciB7XG4gIGhhbmRsZXJzID0gW11cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZvckVhY2ggPSB7XG4gICAgICBhc2M6IGZuID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHRoaXMuaGFuZGxlcnNbaV0gIT09IG51bGwgJiYgZm4odGhpcy5oYW5kbGVyc1tpXSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlc2M6IGZuID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZXJzW2ldICE9PSBudWxsICYmIGZuKHRoaXMuaGFuZGxlcnNbaV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICAgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgICBmdWxmaWxsZWQsXG4gICAgICByZWplY3RlZFxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMVxuICB9XG4gIGVqZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGxcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcXVlc3RDb25zdHJ1Y3RvcigpIHtcbiAgcmV0dXJuIGNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBQcm9taXNlIHtcbiAgICAvLyBSZXF1ZXN0VGFzayDlr7nosaFcbiAgICBzdGF0aWMgdGFzayA9IG51bGxcbiAgICAvLyDor7fmsYLku7vliqHmmK/lkKbooqvkuK3mlq1cbiAgICBzdGF0aWMgYWJvcnRlZCA9IGZhbHNlXG4gICAgLy8g55uR5ZCsIEhUVFAgUmVzcG9uc2UgSGVhZGVyIOS6i+S7tuWbnuiwg+WHveaVsFxuICAgIHN0YXRpYyBvbkhlYWRlcnNSZWNlaXZlZENhbGxiYWNrID0gbnVsbFxuICAgIC8vIOWPlua2iOebkeWQrCBIVFRQIFJlc3BvbnNlIEhlYWRlciDkuovku7blm57osIPlh73mlbBcbiAgICBzdGF0aWMgb2ZmSGVhZGVyc1JlY2VpdmVkQ2FsbGJhY2sgPSBudWxsXG5cbiAgICAvLyDnm5HlkKwgSFRUUCBSZXNwb25zZSBIZWFkZXIg5LqL5Lu25omn6KGM5Ye95pWwXG4gICAgc3RhdGljIG9uSGVhZGVyc1JlY2VpdmVkKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIFJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWRDYWxsYmFjayA9IGZuXG4gICAgICB9XG4gICAgICBpZiAoUmVxdWVzdC5vbkhlYWRlcnNSZWNlaXZlZENhbGxiYWNrICYmIFJlcXVlc3QudGFzaykge1xuICAgICAgICBSZXF1ZXN0LnRhc2sub25IZWFkZXJzUmVjZWl2ZWQ/LihSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICAgIC8vIOWPlua2iOebkeWQrCBIVFRQIFJlc3BvbnNlIEhlYWRlciDkuovku7bmiafooYzlh73mlbBcbiAgICBzdGF0aWMgb2ZmSGVhZGVyc1JlY2VpdmVkKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIFJlcXVlc3Qub2ZmSGVhZGVyc1JlY2VpdmVkQ2FsbGJhY2sgPSBmblxuICAgICAgfVxuICAgICAgaWYgKFJlcXVlc3Qub2ZmSGVhZGVyc1JlY2VpdmVkQ2FsbGJhY2sgJiYgUmVxdWVzdC50YXNrKSB7XG4gICAgICAgIFJlcXVlc3QudGFzay5vZmZIZWFkZXJzUmVjZWl2ZWQ/LihSZXF1ZXN0Lm9mZkhlYWRlcnNSZWNlaXZlZENhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOS4reaWreivt+axguS7u+WKoVxuICAgIGFib3J0KCkge1xuICAgICAgUmVxdWVzdC5hYm9ydGVkID0gdHJ1ZVxuICAgICAgUmVxdWVzdC50YXNrPy5hYm9ydCgpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICAvLyDnm5HlkKwgSFRUUCBSZXNwb25zZSBIZWFkZXIg5LqL5Lu2XG4gICAgb25IZWFkZXJzUmVjZWl2ZWQoZm4pIHtcbiAgICAgIFJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWQoZm4pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICAvLyDlj5bmtojnm5HlkKwgSFRUUCBSZXNwb25zZSBIZWFkZXIg5LqL5Lu2XG4gICAgb2ZmSGVhZGVyc1JlY2VpdmVkKGZuKSB7XG4gICAgICBSZXF1ZXN0Lm9mZkhlYWRlcnNSZWNlaXZlZChmbilcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgaXNDYWxsYmFjayBmcm9tICcuL2lzQ2FsbGJhY2snXG5pbXBvcnQgeyBmb3JFYWNoLCB0cnlDYXRjaCB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIOWIhuemu+ivt+axguWvueixoVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBbdXJsXSDor7fmsYLlnLDlnYAgLyDor7fmsYLphY3nva5cbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gW2RhdGFdIOivt+axguWPguaVsFxuICogQHBhcmFtIHtvYmplY3R9IFtjb25maWddIOivt+axgumFjee9rlxuICogQHJldHVybnMge29iamVjdH0g5Zue6LCD5Ye95pWw5a+56LGhIOWOu+mZpOWbnuiwg+eahOivt+axguWPguaVsFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhY2hDb25maWcodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgLy8g5Zue6LCD5Ye95pWw5a+56LGhXG4gIGxldCBjYWxsYmFjayA9IG51bGxcbiAgLy8g5Y676Zmk5Zue6LCD55qE6K+35rGC5Y+C5pWw5a+56LGhXG4gIGNvbnN0IG9wdGlvbnMgPSB7fVxuXG4gIC8vIOaYr+WQpuS8oOWFpeWNleS4quWPguaVsFxuICBjb25zdCBpc1NpbmdsZSA9IHR5cGVvZiB1cmwgPT09ICdvYmplY3QnXG5cbiAgLy8g6K+35rGC5Y+C5pWw5a+56LGhXG4gIGNvbnN0IHZhbHVlID0gaXNTaW5nbGUgPyB1cmwgOiB7IC4uLmNvbmZpZywgdXJsLCBkYXRhIH1cblxuICAvLyDliIbnprvor7fmsYLlj4LmlbBcbiAgZm9yRWFjaCh2YWx1ZSwgKHZhbCwga2V5KSA9PiB7XG4gICAgaWYgKGlzU2luZ2xlICYmIGlzQ2FsbGJhY2soa2V5KSkge1xuICAgICAgOyhjYWxsYmFjayB8fCAoY2FsbGJhY2sgPSB7fSkpW2tleV0gPSB0cnlDYXRjaCh2YWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNba2V5XSA9IHZhbFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGNhbGxiYWNrLFxuICAgIGNvbmZpZzogb3B0aW9uc1xuICB9XG59XG4iLCIvKipcbiAqIOWIpOaWreWPguaVsOaYr+WQpuWQq+acieWbnuiwg+WPguaVsCBzdWNjZXNzIC8gZmFpbCAvIGNvbXBsZXRlIOS5i+S4gFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIOWPguaVsOeahCBLZXkg5YC85a2X56ym5LiyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g6L+U5Zue5Yik5pat5YC8XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ2FsbGJhY2soZmllbGQpIHtcbiAgcmV0dXJuIFsnc3VjY2VzcycsICdmYWlsJywgJ2NvbXBsZXRlJ10uaW5jbHVkZXMoZmllbGQpXG59XG4iLCIvKipcbiAqIOiOt+WPluWAvOeahOWOn+Wni+exu+Wei+Wtl+espuS4su+8jOS+i+WmgiBbb2JqZWN0IE9iamVjdF1cbiAqL1xuY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG4vKipcbiAqIOWIpOaWreaYr+WQpuS4uuaVsOe7hFxuICogQHBhcmFtIHsqfSB2YWwg6KaB5Yik5pat55qE5YC8XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g6L+U5Zue5Yik5pat57uT5p6cXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xufVxuXG4vKipcbiAqIOWIpOaWreaYr+WQpuS4uuaZrumAmuWvueixoVxuICogQHBhcmFtIHsqfSB2YWwg6KaB5Yik5pat55qE5YC8XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g6L+U5Zue5Yik5pat57uT5p6cXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbn1cblxuLyoqXG4gKiDpgY3ljoZcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBvYmog6KaB6L+t5Luj55qE5a+56LGhXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiDkuLrmr4/kuKrpobnosIPnlKjnmoTlm57osINcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSByZXR1cm5cbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSBvYmogPSBbb2JqXVxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba10sIGssIG9iailcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDlr7nosaHmt7HlkIjlubZcbiAqIEBwYXJhbSAgey4uLm9iamVjdH0gYXJncyDlr7nosaFcbiAqIEByZXR1cm5zIHtvYmplY3R9IOWQiOW5tuWQjueahOWvueixoVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoLi4uYXJncykge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoYXJnc1tpXSkpIHtcbiAgICAgIGZvckVhY2goYXJnc1tpXSwgKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gYXNzaWduKHJlc3VsdFtrZXldLCB2YWwpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICog5ZCI5bm25YiG6YWN5Yiw55uu5qCH5a+56LGhXG4gKiBAcGFyYW0geyp9IHRhcmdldCDnm67moIflr7nosaFcbiAqIEBwYXJhbSB7Kn0gc291cmNlIOa6kOWvueixoVxuICogQHJldHVybnMgeyp9IOebruagh+WvueixoVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG4gIGlmIChpc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgcmV0dXJuIG1lcmdlKHRhcmdldCwgc291cmNlKVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgIHJldHVybiBtZXJnZSh7fSwgc291cmNlKVxuICB9IGVsc2UgaWYgKGlzQXJyYXkoc291cmNlKSkge1xuICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKVxuICB9XG4gIHJldHVybiBzb3VyY2Vcbn1cblxuLyoqXG4gKiB0cnljYXRjaCDlsIHoo4Xlh73mlbBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIOWHveaVsFxuICogQHJldHVybnMge2Z1bmN0aW9ufSDlsIHoo4UgdHJ5Y2F0Y2gg5ZCO55qE5Ye95pWwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnlDYXRjaChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoZm4sIGFyZ3VtZW50cylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGFzc2lnbiwgZm9yRWFjaCB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIOWQiOW5tuivt+axgumFjee9ru+8iOa3seW6puWQiOW5tu+8jOS4lOS4jeWQiOW5tiB1bmRlZmluZWQg5YC877yJXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnMSDliY3or7fmsYLphY3nva5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29uZmlnMl0g5ZCO6K+35rGC6YWN572uXG4gKiBAcmV0dXJucyB7b2JqZWN0fSDlkIjlubblkI7nmoTor7fmsYLphY3nva5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMiA9IHt9KSB7XG4gIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgY29uc3QgY29uZmlnS2V5cyA9IE9iamVjdC5rZXlzKHsgLi4uY29uZmlnMSwgLi4uY29uZmlnMiB9KVxuXG4gIGZvckVhY2goY29uZmlnS2V5cywgcHJvcCA9PiB7XG4gICAgaWYgKGNvbmZpZzJbcHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnW3Byb3BdID0gYXNzaWduKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pXG4gICAgfSBlbHNlIGlmIChjb25maWcxW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGFzc2lnbih1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pXG4gICAgfVxuICB9KVxuXG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKClcblxuICByZXR1cm4gY29uZmlnXG59XG4iLCIvKipcbiAqIOagueaNriBiYXNlVVJMIOiOt+WPlua6kOWcsOWdgFxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwg6K+35rGC6Lef5Zyw5Z2AXG4gKiBAcmV0dXJucyB7c3RyaW5nfSDmupDlnLDlnYBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JpZ2luVVJMKGJhc2VVUkwgPSAnJykge1xuICAvLyDliKTmlq3mmK/lkKYgaHR0cDovLyDmiJYgaHR0cHM6Ly8g5byA5aS0XG4gIGlmICghL15odHRwcz86XFwvXFwvLy50ZXN0KGJhc2VVUkwpKSByZXR1cm4gJydcbiAgY29uc3QgdSA9IGJhc2VVUkwuc3BsaXQoJy8nKVxuICByZXR1cm4gdVswXSArICcvLycgKyB1WzJdXG59XG4iLCJpbXBvcnQgYnVpbGRVUkwgZnJvbSAnLi4vaGVscGVycy9idWlsZFVSTCdcbmltcG9ydCBjb21iaW5lVVJMIGZyb20gJy4uL2hlbHBlcnMvY29tYmluZVVSTCdcbmltcG9ydCBpc0NhbGxiYWNrIGZyb20gJy4uL2hlbHBlcnMvaXNDYWxsYmFjaydcbmltcG9ydCB7IGZvckVhY2gsIGlzUGxhaW5PYmplY3QsIG1lcmdlIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBIRUFERVIgfSBmcm9tICcuLi9kZWZhdWx0cydcblxuLyoqXG4gKiDmtL7lj5Hor7fmsYLmlrnms5VcbiAqIEBwYXJhbSB7Kn0gUmVxdWVzdCDor7fmsYLnsbtcbiAqIEByZXR1cm5zIHtQcm9taXNlfSDmiafooYzor7fmsYLmlrnms5VQcm9taXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChSZXF1ZXN0KSB7XG4gIHJldHVybiBjb25maWcgPT4ge1xuICAgIC8vIOaLvOaOpSB1cmxcbiAgICBjb25maWcudXJsID0gYnVpbGRVUkwoY29tYmluZVVSTChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCksIGNvbmZpZy5wYXJhbXMpXG5cbiAgICAvLyDor7fmsYLmlrnms5XovazlpKflhplcbiAgICBjb25maWcubWV0aG9kID0gKGNvbmZpZy5tZXRob2QgfHwgJ2dldCcpLnRvVXBwZXJDYXNlKClcblxuICAgIC8vIOiwg+aVtCBoZWFkZXIg5LyY5YWI57qnXG4gICAgY29uZmlnLmhlYWRlciA9IG1lcmdlKFxuICAgICAgY29uZmlnLmhlYWRlci5jb21tb24sXG4gICAgICBjb25maWcuaGVhZGVyW2NvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKV0sXG4gICAgICBjb25maWcuaGVhZGVyXG4gICAgKVxuXG4gICAgLy8g5riF6Zmk5aSa5L2Z55qE6K+35rGC5aS0XG4gICAgZm9yRWFjaChIRUFERVIsIGggPT4gaXNQbGFpbk9iamVjdChjb25maWcuaGVhZGVyW2hdKSAmJiBkZWxldGUgY29uZmlnLmhlYWRlcltoXSlcblxuICAgIC8vIOa4hemZpOWbnuiwg+WHveaVsFxuICAgIGZvckVhY2goY29uZmlnLCAodmFsLCBrZXkpID0+IGlzQ2FsbGJhY2soa2V5KSAmJiBkZWxldGUgY29uZmlnW2tleV0pXG5cbiAgICAvLyDmiafooYzor7fmsYLmlrnms5VcbiAgICByZXR1cm4gY29uZmlnLmFkYXB0ZXIoY29uZmlnLCBSZXF1ZXN0KVxuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JFYWNoLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICog5qC55o2ucGFyYW1z57yW6K+R6K+35rGCVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIOivt+axglVSTFxuICogQHBhcmFtIHsqfSBwYXJhbXMgVVJM5Y+C5pWwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zKSB7XG4gIGlmICghcGFyYW1zKSByZXR1cm4gdXJsXG5cbiAgbGV0IHF1ZXJ5XG5cbiAgY29uc3QgcGFydHMgPSBbXVxuICBmb3JFYWNoKHBhcmFtcywgKHZhbCwga2V5KSA9PiB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG5cbiAgICBpZiAoaXNBcnJheSh2YWwpKSBrZXkgPSBrZXkgKyAnW10nXG4gICAgZWxzZSB2YWwgPSBbdmFsXVxuXG4gICAgZm9yRWFjaCh2YWwsIHYgPT4ge1xuICAgICAgaWYgKHYgIT09IG51bGwgJiYgdHlwZW9mIHYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KVxuICAgICAgfVxuICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSlcbiAgICB9KVxuICB9KVxuICBxdWVyeSA9IHBhcnRzLmpvaW4oJyYnKVxuXG4gIGlmIChxdWVyeSkge1xuICAgIGNvbnN0IGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpXG4gICAgaGFzaG1hcmtJbmRleCAhPT0gLTEgJiYgKHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KSlcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHF1ZXJ5XG4gIH1cblxuICByZXR1cm4gdXJsXG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpXG4gICAgLnJlcGxhY2UoLyUzQS9naSwgJzonKVxuICAgIC5yZXBsYWNlKC8lMjQvZywgJyQnKVxuICAgIC5yZXBsYWNlKC8lMkMvZ2ksICcsJylcbiAgICAucmVwbGFjZSgvJTIwL2csICcrJylcbiAgICAucmVwbGFjZSgvJTVCL2dpLCAnWycpXG4gICAgLnJlcGxhY2UoLyU1RC9naSwgJ10nKVxufVxuIiwiLyoqXG4gKiDmoLnmja4gYmFzZVVSTCDlkowgdXJsIOaLvOaOpVxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwg6K+35rGC6Lef5Zyw5Z2AXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwg6K+35rGC5Y+C5pWw5Zyw5Z2AXG4gKiBAcmV0dXJucyB7c3RyaW5nfSDmi7zmjqXlkI7nmoTlnLDlnYBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVVSTChiYXNlVVJMID0gJycsIHJlbGF0aXZlVVJMID0gJycpIHtcbiAgLy8g5Yik5pat5piv5ZCmIGh0dHA6Ly8g5oiWIGh0dHBzOi8vIOW8gOWktFxuICBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KHJlbGF0aXZlVVJMKSkgcmV0dXJuIHJlbGF0aXZlVVJMXG4gIC8vIOWOu+mZpCBiYXNlVVJMIOe7k+WwvuaWnOadoO+8jOWOu+mZpCByZWxhdGl2ZVVSTCDlvIDlpLTmlpzmnaDvvIzlho3liKTmlq3mi7zmjqVcbiAgcmV0dXJuIHJlbGF0aXZlVVJMID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpIDogYmFzZVVSTFxufVxuIiwiaW1wb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVycy9odHRwJ1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBNRVRIT0QgPSBbJ2dldCcsICdwb3N0JywgJ3B1dCcsICdkZWxldGUnLCAnY29ubmVjdCcsICdoZWFkJywgJ29wdGlvbnMnLCAndHJhY2UnXVxuZXhwb3J0IGNvbnN0IEhFQURFUiA9IFsnY29tbW9uJywgLi4uTUVUSE9EXVxuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcixcbiAgaGVhZGVyOiB7fSxcbiAgbWV0aG9kOiAnZ2V0JyxcbiAgdGltZW91dDogMzAwMDAsXG4gIGRhdGFUeXBlOiAnanNvbicsXG4gIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxuICBzc2xWZXJpZnk6IHRydWUsXG4gIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gIGZpcnN0SXB2NDogZmFsc2UsXG4gIHZhbGlkYXRlU3RhdHVzOiBzdGF0dXNDb2RlID0+IHN0YXR1c0NvZGUgPj0gMjAwICYmIHN0YXR1c0NvZGUgPCAzMDBcbn1cblxuZm9yRWFjaChIRUFERVIsIGggPT4gKGRlZmF1bHRzLmhlYWRlcltoXSA9IHt9KSlcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdHNcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkYXB0ZXIoY29uZmlnLCBSZXF1ZXN0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8g5Yik5pat5piv5ZCm6KKr5Y+W5raI6K+35rGCXG4gICAgaWYgKFJlcXVlc3QuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdCh7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgZXJyTXNnOiAncmVxdWVzdDpmYWlsIGFib3J0J1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyDlj5Hotbfor7fmsYLvvIzlubbmjILovb0gUmVxdWVzdFRhc2tcbiAgICBSZXF1ZXN0LnRhc2sgPSB1bmkucmVxdWVzdCh7XG4gICAgICAuLi5jb25maWcsXG4gICAgICBjb21wbGV0ZTogcmVzdWx0ID0+IHtcbiAgICAgICAgLy8g5qC55o2u54q25oCB56CB5Yik5pat6KaB5omn6KGM55qE6Kem5Y+R55qE54q25oCBXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geyBjb25maWcsIC4uLnJlc3VsdCB9XG4gICAgICAgICFjb25maWcudmFsaWRhdGVTdGF0dXMgfHwgY29uZmlnLnZhbGlkYXRlU3RhdHVzKHJlc3VsdC5zdGF0dXNDb2RlKVxuICAgICAgICAgID8gcmVzb2x2ZShyZXNwb25zZSlcbiAgICAgICAgICA6IHJlamVjdChyZXNwb25zZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g6K+35rGC57G75YaF6YOo5Yik5pat5piv5ZCm5omn6KGM55uR5ZCsIEhUVFAgUmVzcG9uc2UgSGVhZGVyIOS6i+S7tlxuICAgIFJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWQoKVxuICAgIFJlcXVlc3Qub2ZmSGVhZGVyc1JlY2VpdmVkKClcblxuICAgIC8vIOagueaNrumFjee9rueahCB4aHIg5bGe5oCn5omn6KGM6I635Y+WIFJlcXVlc3RUYXNrXG4gICAgY29uZmlnLnhocj8uKFJlcXVlc3QudGFzaywgY29uZmlnKVxuICB9KVxufVxuIiwiLyoqXG4gKiDmtL7lj5Hor7fmsYLmi5Lnu53mlrnms5XvvIzlpITnkIblj5Hotbfor7fmsYLliY3plJnor6/vvIzlj5bmtojmiafooYzor7fmsYLvvIzlubbpmLLmraLov5vlhaXlk43lupTmi6bmiKrlmahcbiAqIEBwYXJhbSB7Kn0gcmVhc29uIOmUmeivr+WOn+WboFxuICogQHJldHVybnMge1Byb21pc2V9IOWwgeijheS6hiBfX0NBTkNFTF9fIOeahOWksei0peWvueixoVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hDYW5jZWwocmVhc29uKSB7XG4gIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgcmVhc29uLFxuICAgIF9fQ0FOQ0VMX186IHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiDmi6bmiKrlpLHotKXlr7nosaFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIOWTjeW6lOmUmeivr+aLpuaIquWZqFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0Q2FuY2VsKHJlamVjdGVkKSB7XG4gIC8vIOWIpOaWreWPkei1t+ivt+axguWJjeaYr+WQpuWPkeeUn+mUmeivr++8jOWmguaenOWPkeeUn+mUmeivr+WImeS4jeaJp+ihjOWQjumdoueahOWTjeW6lOmUmeivr+aLpuaIquWZqFxuICByZXR1cm4gKFxuICAgIHJlamVjdGVkICYmIChyZXNwb25zZSA9PiAocmVzcG9uc2UuX19DQU5DRUxfXyA/IFByb21pc2UucmVqZWN0KHJlc3BvbnNlKSA6IHJlamVjdGVkKHJlc3BvbnNlKSkpXG4gIClcbn1cblxuLyoqXG4gKiDliIbnprvlpLHotKXlr7nosaFcbiAqIEBwYXJhbSB7Kn0gcmVzcG9uc2Ug5bCB6KOF5LqGIF9fQ0FOQ0VMX18g55qE5aSx6LSl5a+56LGhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRhY2hDYW5jZWwoeyBfX0NBTkNFTF9fLCAuLi5lcnJvciB9KSB7XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChfX0NBTkNFTF9fID8gZXJyb3IucmVhc29uIDogZXJyb3IpXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0XCJwdWxsZG93blwiOiBcIlxcdWU1ODhcIixcclxuXHRcInJlZnJlc2hlbXB0eVwiOiBcIlxcdWU0NjFcIixcclxuXHRcImJhY2tcIjogXCJcXHVlNDcxXCIsXHJcblx0XCJmb3J3YXJkXCI6IFwiXFx1ZTQ3MFwiLFxyXG5cdFwibW9yZVwiOiBcIlxcdWU1MDdcIixcclxuXHRcIm1vcmUtZmlsbGVkXCI6IFwiXFx1ZTUzN1wiLFxyXG5cdFwic2NhblwiOiBcIlxcdWU2MTJcIixcclxuXHRcInFxXCI6IFwiXFx1ZTI2NFwiLFxyXG5cdFwid2VpYm9cIjogXCJcXHVlMjYwXCIsXHJcblx0XCJ3ZWl4aW5cIjogXCJcXHVlMjYxXCIsXHJcblx0XCJwZW5neW91cXVhblwiOiBcIlxcdWUyNjJcIixcclxuXHRcImxvb3BcIjogXCJcXHVlNTY1XCIsXHJcblx0XCJyZWZyZXNoXCI6IFwiXFx1ZTQwN1wiLFxyXG5cdFwicmVmcmVzaC1maWxsZWRcIjogXCJcXHVlNDM3XCIsXHJcblx0XCJhcnJvd3RoaW5kb3duXCI6IFwiXFx1ZTU4NVwiLFxyXG5cdFwiYXJyb3d0aGlubGVmdFwiOiBcIlxcdWU1ODZcIixcclxuXHRcImFycm93dGhpbnJpZ2h0XCI6IFwiXFx1ZTU4N1wiLFxyXG5cdFwiYXJyb3d0aGludXBcIjogXCJcXHVlNTg0XCIsXHJcblx0XCJ1bmRvLWZpbGxlZFwiOiBcIlxcdWU3ZDZcIixcclxuXHRcInVuZG9cIjogXCJcXHVlNDA2XCIsXHJcblx0XCJyZWRvXCI6IFwiXFx1ZTQwNVwiLFxyXG5cdFwicmVkby1maWxsZWRcIjogXCJcXHVlN2Q5XCIsXHJcblx0XCJiYXJzXCI6IFwiXFx1ZTU2M1wiLFxyXG5cdFwiY2hhdGJveGVzXCI6IFwiXFx1ZTIwM1wiLFxyXG5cdFwiY2FtZXJhXCI6IFwiXFx1ZTMwMVwiLFxyXG5cdFwiY2hhdGJveGVzLWZpbGxlZFwiOiBcIlxcdWUyMzNcIixcclxuXHRcImNhbWVyYS1maWxsZWRcIjogXCJcXHVlN2VmXCIsXHJcblx0XCJjYXJ0LWZpbGxlZFwiOiBcIlxcdWU3ZjRcIixcclxuXHRcImNhcnRcIjogXCJcXHVlN2Y1XCIsXHJcblx0XCJjaGVja2JveC1maWxsZWRcIjogXCJcXHVlNDQyXCIsXHJcblx0XCJjaGVja2JveFwiOiBcIlxcdWU3ZmFcIixcclxuXHRcImFycm93bGVmdFwiOiBcIlxcdWU1ODJcIixcclxuXHRcImFycm93ZG93blwiOiBcIlxcdWU1ODFcIixcclxuXHRcImFycm93cmlnaHRcIjogXCJcXHVlNTgzXCIsXHJcblx0XCJzbWFsbGNpcmNsZS1maWxsZWRcIjogXCJcXHVlODAxXCIsXHJcblx0XCJhcnJvd3VwXCI6IFwiXFx1ZTU4MFwiLFxyXG5cdFwiY2lyY2xlXCI6IFwiXFx1ZTQxMVwiLFxyXG5cdFwiZXllLWZpbGxlZFwiOiBcIlxcdWU1NjhcIixcclxuXHRcImV5ZS1zbGFzaC1maWxsZWRcIjogXCJcXHVlODIyXCIsXHJcblx0XCJleWUtc2xhc2hcIjogXCJcXHVlODIzXCIsXHJcblx0XCJleWVcIjogXCJcXHVlODI0XCIsXHJcblx0XCJmbGFnLWZpbGxlZFwiOiBcIlxcdWU4MjVcIixcclxuXHRcImZsYWdcIjogXCJcXHVlNTA4XCIsXHJcblx0XCJnZWFyLWZpbGxlZFwiOiBcIlxcdWU1MzJcIixcclxuXHRcInJlbG9hZFwiOiBcIlxcdWU0NjJcIixcclxuXHRcImdlYXJcIjogXCJcXHVlNTAyXCIsXHJcblx0XCJoYW5kLXRodW1ic2Rvd24tZmlsbGVkXCI6IFwiXFx1ZTgzYlwiLFxyXG5cdFwiaGFuZC10aHVtYnNkb3duXCI6IFwiXFx1ZTgzY1wiLFxyXG5cdFwiaGFuZC10aHVtYnN1cC1maWxsZWRcIjogXCJcXHVlODNkXCIsXHJcblx0XCJoZWFydC1maWxsZWRcIjogXCJcXHVlODNlXCIsXHJcblx0XCJoYW5kLXRodW1ic3VwXCI6IFwiXFx1ZTgzZlwiLFxyXG5cdFwiaGVhcnRcIjogXCJcXHVlODQwXCIsXHJcblx0XCJob21lXCI6IFwiXFx1ZTUwMFwiLFxyXG5cdFwiaW5mb1wiOiBcIlxcdWU1MDRcIixcclxuXHRcImhvbWUtZmlsbGVkXCI6IFwiXFx1ZTUzMFwiLFxyXG5cdFwiaW5mby1maWxsZWRcIjogXCJcXHVlNTM0XCIsXHJcblx0XCJjaXJjbGUtZmlsbGVkXCI6IFwiXFx1ZTQ0MVwiLFxyXG5cdFwiY2hhdC1maWxsZWRcIjogXCJcXHVlODQ3XCIsXHJcblx0XCJjaGF0XCI6IFwiXFx1ZTI2M1wiLFxyXG5cdFwibWFpbC1vcGVuLWZpbGxlZFwiOiBcIlxcdWU4NGRcIixcclxuXHRcImVtYWlsLWZpbGxlZFwiOiBcIlxcdWUyMzFcIixcclxuXHRcIm1haWwtb3BlblwiOiBcIlxcdWU4NGVcIixcclxuXHRcImVtYWlsXCI6IFwiXFx1ZTIwMVwiLFxyXG5cdFwiY2hlY2ttYXJrZW1wdHlcIjogXCJcXHVlNDcyXCIsXHJcblx0XCJsaXN0XCI6IFwiXFx1ZTU2MlwiLFxyXG5cdFwibG9ja2VkLWZpbGxlZFwiOiBcIlxcdWU4NTZcIixcclxuXHRcImxvY2tlZFwiOiBcIlxcdWU1MDZcIixcclxuXHRcIm1hcC1maWxsZWRcIjogXCJcXHVlODVjXCIsXHJcblx0XCJtYXAtcGluXCI6IFwiXFx1ZTg1ZVwiLFxyXG5cdFwibWFwLXBpbi1lbGxpcHNlXCI6IFwiXFx1ZTg2NFwiLFxyXG5cdFwibWFwXCI6IFwiXFx1ZTM2NFwiLFxyXG5cdFwibWludXMtZmlsbGVkXCI6IFwiXFx1ZTQ0MFwiLFxyXG5cdFwibWljLWZpbGxlZFwiOiBcIlxcdWUzMzJcIixcclxuXHRcIm1pbnVzXCI6IFwiXFx1ZTQxMFwiLFxyXG5cdFwibWljb2ZmXCI6IFwiXFx1ZTM2MFwiLFxyXG5cdFwibWljXCI6IFwiXFx1ZTMwMlwiLFxyXG5cdFwiY2xlYXJcIjogXCJcXHVlNDM0XCIsXHJcblx0XCJzbWFsbGNpcmNsZVwiOiBcIlxcdWU4NjhcIixcclxuXHRcImNsb3NlXCI6IFwiXFx1ZTQwNFwiLFxyXG5cdFwiY2xvc2VlbXB0eVwiOiBcIlxcdWU0NjBcIixcclxuXHRcInBhcGVyY2xpcFwiOiBcIlxcdWU1NjdcIixcclxuXHRcInBhcGVycGxhbmVcIjogXCJcXHVlNTAzXCIsXHJcblx0XCJwYXBlcnBsYW5lLWZpbGxlZFwiOiBcIlxcdWU4NmVcIixcclxuXHRcInBlcnNvbi1maWxsZWRcIjogXCJcXHVlMTMxXCIsXHJcblx0XCJjb250YWN0LWZpbGxlZFwiOiBcIlxcdWUxMzBcIixcclxuXHRcInBlcnNvblwiOiBcIlxcdWUxMDFcIixcclxuXHRcImNvbnRhY3RcIjogXCJcXHVlMTAwXCIsXHJcblx0XCJpbWFnZXMtZmlsbGVkXCI6IFwiXFx1ZTg3YVwiLFxyXG5cdFwicGhvbmVcIjogXCJcXHVlMjAwXCIsXHJcblx0XCJpbWFnZXNcIjogXCJcXHVlODdiXCIsXHJcblx0XCJpbWFnZVwiOiBcIlxcdWUzNjNcIixcclxuXHRcImltYWdlLWZpbGxlZFwiOiBcIlxcdWU4NzdcIixcclxuXHRcImxvY2F0aW9uLWZpbGxlZFwiOiBcIlxcdWUzMzNcIixcclxuXHRcImxvY2F0aW9uXCI6IFwiXFx1ZTMwM1wiLFxyXG5cdFwicGx1cy1maWxsZWRcIjogXCJcXHVlNDM5XCIsXHJcblx0XCJwbHVzXCI6IFwiXFx1ZTQwOVwiLFxyXG5cdFwicGx1c2VtcHR5XCI6IFwiXFx1ZTQ2OFwiLFxyXG5cdFwiaGVscC1maWxsZWRcIjogXCJcXHVlNTM1XCIsXHJcblx0XCJoZWxwXCI6IFwiXFx1ZTUwNVwiLFxyXG5cdFwibmF2aWdhdGUtZmlsbGVkXCI6IFwiXFx1ZTg4NFwiLFxyXG5cdFwibmF2aWdhdGVcIjogXCJcXHVlNTAxXCIsXHJcblx0XCJtaWMtc2xhc2gtZmlsbGVkXCI6IFwiXFx1ZTg5MlwiLFxyXG5cdFwic2VhcmNoXCI6IFwiXFx1ZTQ2NlwiLFxyXG5cdFwic2V0dGluZ3NcIjogXCJcXHVlNTYwXCIsXHJcblx0XCJzb3VuZFwiOiBcIlxcdWU1OTBcIixcclxuXHRcInNvdW5kLWZpbGxlZFwiOiBcIlxcdWU4YTFcIixcclxuXHRcInNwaW5uZXItY3ljbGVcIjogXCJcXHVlNDY1XCIsXHJcblx0XCJkb3dubG9hZC1maWxsZWRcIjogXCJcXHVlOGE0XCIsXHJcblx0XCJwZXJzb25hZGQtZmlsbGVkXCI6IFwiXFx1ZTEzMlwiLFxyXG5cdFwidmlkZW9jYW0tZmlsbGVkXCI6IFwiXFx1ZThhZlwiLFxyXG5cdFwicGVyc29uYWRkXCI6IFwiXFx1ZTEwMlwiLFxyXG5cdFwidXBsb2FkXCI6IFwiXFx1ZTQwMlwiLFxyXG5cdFwidXBsb2FkLWZpbGxlZFwiOiBcIlxcdWU4YjFcIixcclxuXHRcInN0YXJoYWxmXCI6IFwiXFx1ZTQ2M1wiLFxyXG5cdFwic3Rhci1maWxsZWRcIjogXCJcXHVlNDM4XCIsXHJcblx0XCJzdGFyXCI6IFwiXFx1ZTQwOFwiLFxyXG5cdFwidHJhc2hcIjogXCJcXHVlNDAxXCIsXHJcblx0XCJwaG9uZS1maWxsZWRcIjogXCJcXHVlMjMwXCIsXHJcblx0XCJjb21wb3NlXCI6IFwiXFx1ZTQwMFwiLFxyXG5cdFwidmlkZW9jYW1cIjogXCJcXHVlMzAwXCIsXHJcblx0XCJ0cmFzaC1maWxsZWRcIjogXCJcXHVlOGRjXCIsXHJcblx0XCJkb3dubG9hZFwiOiBcIlxcdWU0MDNcIixcclxuXHRcImNoYXRidWJibGUtZmlsbGVkXCI6IFwiXFx1ZTIzMlwiLFxyXG5cdFwiY2hhdGJ1YmJsZVwiOiBcIlxcdWUyMDJcIixcclxuXHRcImNsb3VkLWRvd25sb2FkXCI6IFwiXFx1ZThlNFwiLFxyXG5cdFwiY2xvdWQtdXBsb2FkLWZpbGxlZFwiOiBcIlxcdWU4ZTVcIixcclxuXHRcImNsb3VkLXVwbG9hZFwiOiBcIlxcdWU4ZTZcIixcclxuXHRcImNsb3VkLWRvd25sb2FkLWZpbGxlZFwiOiBcIlxcdWU4ZTlcIixcclxuXHRcImhlYWRwaG9uZXNcIjpcIlxcdWU4YmZcIixcclxuXHRcInNob3BcIjpcIlxcdWU2MDlcIlxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=