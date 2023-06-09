/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/FileRender.ts":
/*!***********************************!*\
  !*** ./src/classes/FileRender.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileRender": () => (/* binding */ FileRender)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FileRender = /*#__PURE__*/function () {
  function FileRender() {
    _classCallCheck(this, FileRender);
  }
  _createClass(FileRender, [{
    key: "toHtml",
    value: function toHtml(option, files) {
      var _this = this;
      $(option.previewContent).empty();
      $.each(files, function (i, file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var src = e.target.result;
          _this.appendContent(option, src);
        };
        reader.readAsDataURL(file);
      });
      return this;
    }
  }, {
    key: "renderDefaultImage",
    value: function renderDefaultImage(option) {
      var _this2 = this;
      var images = typeof option.defaultImage === 'string' ? option.defaultImage.split('|') : option.defaultImage;
      $.each(images, function (i, value) {
        _this2.appendContent(option, value);
      });
      return this;
    }
  }, {
    key: "appendContent",
    value: function appendContent(option, src) {
      var img = $("<img src=\"".concat(src, "\" class=\"").concat(option.imgClass, "\" alt=\"\"/>"));
      $(option.previewContent).append(img);
    }
  }]);
  return FileRender;
}();

/***/ }),

/***/ "./src/classes/InputFile.ts":
/*!**********************************!*\
  !*** ./src/classes/InputFile.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputFile": () => (/* binding */ InputFile)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var InputFile = /*#__PURE__*/function () {
  function InputFile() {
    _classCallCheck(this, InputFile);
  }
  _createClass(InputFile, [{
    key: "initialStyle",
    value: function initialStyle(input) {
      var wrap = $("<div>").addClass(['file-upload-preview-relative', 'file-upload-preview-w-full']);
      input.addClass(['file-upload-preview-opacity-0', 'file-upload-preview-absolute', 'file-upload-preview-inset-0', 'file-upload-preview-w-full', 'file-upload-preview-h-full', 'file-upload-preview-rounded-lg', 'file-upload-preview-cursor-pointer']);
      input.wrap(wrap);
      var flexForm = $("<div>").addClass(['file-upload-preview-flex', 'file-upload-preview-items-center']);
      input.before(flexForm);
      $('<span>').addClass(['file-upload-preview-block', 'file-upload-preview-w-3/4', 'file-upload-preview-border', 'file-upload-preview-border-gray-300', 'file-upload-preview-border-solid', 'file-upload-preview-rounded-l-lg', 'file-upload-preview-px-4', 'file-upload-preview-py-2', 'file-upload-preview-text-sm']).text('Upload file').appendTo(flexForm);
      $("<button>").addClass(['file-upload-preview-border', 'file-upload-preview-border-gray-300', 'file-upload-preview-border-solid', 'file-upload-preview-rounded-r-lg', 'file-upload-preview-px-4', 'file-upload-preview-py-2', 'file-upload-preview-text-sm']).text('Upload').appendTo(flexForm);
    }
  }]);
  return InputFile;
}();

/***/ }),

/***/ "./src/classes/options.ts":
/*!********************************!*\
  !*** ./src/classes/options.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Options": () => (/* binding */ Options)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Options = /*#__PURE__*/function () {
  function Options(options) {
    _classCallCheck(this, Options);
    var _a, _b, _c, _d;
    this.imgClass = (_a = options.imgClass) !== null && _a !== void 0 ? _a : "file-upload-preview-w-full";
    this.previewContent = (_b = options.previewContent) !== null && _b !== void 0 ? _b : undefined;
    this.previewContentClass = (_c = options.previewContentClass) !== null && _c !== void 0 ? _c : "file-upload-preview-flex file-upload-preview-gap-4";
    this.noStyle = (_d = options.noStyle) !== null && _d !== void 0 ? _d : false;
    this.defaultImage = options.defaultImage;
  }
  _createClass(Options, [{
    key: "defaultContentPreview",
    value: function defaultContentPreview(plugin) {
      if (this.previewContent === undefined) {
        this.previewContent = $("<div>");
        plugin.after(this.previewContent);
      }
      $(this.previewContent).addClass(this.previewContentClass);
    }
  }]);
  return Options;
}();

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/options */ "./src/classes/options.ts");
/* harmony import */ var _classes_FileRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FileRender */ "./src/classes/FileRender.ts");
/* harmony import */ var _classes_InputFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/InputFile */ "./src/classes/InputFile.ts");



$.fn["fileUploader"] = function (options) {
  return $.each(this, function () {
    var plugin = $(this);
    var dataAttribute = $(plugin).data();
    var settings = {};
    $.extend(settings, options, dataAttribute);
    var option = new _classes_options__WEBPACK_IMPORTED_MODULE_0__.Options(settings);
    option.defaultContentPreview(plugin);
    if (!option.noStyle) {
      new _classes_InputFile__WEBPACK_IMPORTED_MODULE_2__.InputFile().initialStyle(plugin);
    }
    plugin.on('change', function () {
      var files = this.files;
      new _classes_FileRender__WEBPACK_IMPORTED_MODULE_1__.FileRender().toHtml(option, files);
    });
    new _classes_FileRender__WEBPACK_IMPORTED_MODULE_1__.FileRender().renderDefaultImage(option);
  });
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/file_upload_preview": 0,
/******/ 			"dist/css/file_upload_preview": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_yonchando_file_upload_preview"] = self["webpackChunk_yonchando_file_upload_preview"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/file_upload_preview"], () => (__webpack_require__("./src/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/file_upload_preview"], () => (__webpack_require__("./src/css/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;