/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\xampp\\htdocs\\LaravelVue\\resources\\js\\app.js: Unexpected token (21:2)\n\n\u001b[0m \u001b[90m 19 | \u001b[39mrender(\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 | \u001b[39m  \u001b[33m<\u001b[39m\u001b[33mRouter\u001b[39m history\u001b[33m=\u001b[39m{browserHistory}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m\u001b[32m\"/\"\u001b[39m component\u001b[33m=\u001b[39m{\u001b[33mMaster\u001b[39m} \u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 | \u001b[39m\u001b[0m\n    at Parser._raise (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Parser.raiseWithData (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Parser.raise (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:729:17)\n    at Parser.unexpected (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:8752:16)\n    at Parser.parseExprAtom (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:10047:20)\n    at Parser.parseExprSubscripts (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9597:23)\n    at Parser.parseMaybeUnary (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9577:21)\n    at Parser.parseExprOps (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9447:23)\n    at Parser.parseMaybeConditional (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9420:23)\n    at Parser.parseMaybeAssign (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9375:21)\n    at Parser.parseExprListItem (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:10713:18)\n    at Parser.parseCallExpressionArguments (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9785:22)\n    at Parser.parseSubscript (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9691:31)\n    at Parser.parseSubscripts (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9620:19)\n    at Parser.parseExprSubscripts (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9603:17)\n    at Parser.parseMaybeUnary (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9577:21)\n    at Parser.parseExprOps (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9447:23)\n    at Parser.parseMaybeConditional (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9420:23)\n    at Parser.parseMaybeAssign (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9375:21)\n    at Parser.parseExpression (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9327:23)\n    at Parser.parseStatementContent (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:11205:23)\n    at Parser.parseStatement (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:11076:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:11650:25)\n    at Parser.parseBlockBody (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:11637:10)\n    at Parser.parseTopLevel (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:11007:10)\n    at Parser.parse (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:12623:10)\n    at parse (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:12674:38)\n    at parser (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (D:\\xampp\\htdocs\\LaravelVue\\node_modules\\gensync\\index.js:254:32)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\xampp\htdocs\LaravelVue\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\xampp\htdocs\LaravelVue\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });