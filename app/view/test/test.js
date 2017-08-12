module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public/client/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'v-content',
  data: function data() {
    return {};
  },

  components: {},
  mounted: function mounted() {}
};
module.exports = exports['default'];

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {};
  },

  computed: {},
  mounted: function mounted() {}
};
module.exports = exports["default"];

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = __webpack_require__(19);

var _header2 = _interopRequireDefault(_header);

var _content = __webpack_require__(18);

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    LayoutHeader: _header2.default,
    LayoutContent: _content2.default
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('layout', {
    attrs: {
      "title": "egg-view-vue#unittest",
      "description": "vue server side render",
      "keywords": "vue server side render"
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _c('ul', _vm._l((_vm.model), function(item) {
    return _c('li', {
      key: "id"
    }, [_vm._v(_vm._s(item.name))])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2)("1c8336f2", content, false)

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports
exports.i(__webpack_require__(14), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\r\n/*\r\n  KB: 我这个项目中，不会用到这么多CSS，所以comments掉\r\n  // 写在这个是方便加载所有页面都会需要的css\r\n  @import \"../../../asset/css/global.css\";\r\n  */\nbody {\r\n  background: #856D35;\n}\n.page {\r\n  max-width: 640px;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  padding-bottom: 50px;\r\n  width: 100%;\r\n  height: auto;\r\n  min-height: 100%;\r\n  background: #f9f9f9;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports
exports.i(__webpack_require__(13), "");

// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\xuzho\\Work\\XZSoftware\\iPhone\\git-iphone2\\app\\web\\component\\layout\\standard\\content\\content.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] content.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\xuzho\\Work\\XZSoftware\\iPhone\\git-iphone2\\app\\web\\component\\layout\\standard\\header\\header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var listToStyles = __webpack_require__(27)

module.exports = function (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumberable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\xuzho\\Work\\XZSoftware\\iPhone\\git-iphone2\\app\\web\\component\\layout\\standard\\main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    attrs: {
      "xz-src": "layout/standard/header/header.vue"
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "xz-layout": "layout",
      "xz-src": "layout/standard/main.vue"
    }
  }, [_c('LayoutHeader'), _vm._v(" "), _c('LayoutContent', [_c('div', {
    attrs: {
      "xz-slot": "content"
    },
    slot: "content"
  }, [_vm._t("main", null, {
    xzSlot: "main"
  })], 2)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "content",
      "xz-slot": "content",
      "xz-src": "layout/standard/content/content.vue"
    }
  }, [_vm._t("content")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2)("9e258d5e", content, false)

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2)("8d94cad6", content, false)

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2)("3f319f61", content, false)

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

__webpack_require__(9);

__webpack_require__(8);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = {};

App.data = function () {
  return window.__INITIAL_STATE__ || {};
};

App.init = function (options) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    return App.client(options);
  }
  return App.server(options);
};

App.client = function (options) {
  _vue2.default.prototype.$http = __webpack_require__(5);
  options.el = '#app';
  if (options.store) {
    options.store.replaceState(App.data());
  } else if (window.__INITIAL_STATE__) {
    options.data = App.data();
  }
  return new _vue2.default(options);
};

App.server = function (options) {
  if (options.store && options.router) {
    return function (context) {
      options.router.push(context.state.url);
      var matchedComponents = options.router.getMatchedComponents();
      if (!matchedComponents) {
        return Promise.reject({ code: '404' });
      }
      return Promise.all(matchedComponents.map(function (component) {
        if (component.preFetch) {
          return component.preFetch(options.store);
        }
        return null;
      })).then(function () {
        context.state = options.store.state;
        return new _vue2.default(options);
      });
    };
  }
  return function (context) {
    var VueApp = _vue2.default.extend(options);
    var app = new VueApp({ data: context.state });
    return new Promise(function (resolve) {
      resolve(app);
    });
  };
};

App.use = function (component) {
  _vue2.default.use(component);
};

App.component = function (name, component) {
  _vue2.default.component(name, component);
};

exports.default = App;
module.exports = exports['default'];

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(135)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(120),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\xuzho\\Work\\XZSoftware\\iPhone\\git-iphone2\\app\\web\\page\\test\\test.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] test.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _test = __webpack_require__(42);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _app2.default.init(_extends({}, _test2.default));
module.exports = exports['default'];

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _main = __webpack_require__(20);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = '\n<div id="app" \n  xz-src="layout/standard/index.js"\n  class="page"\n  >\n  <MainLayout>\n    <div slot="main" xz-layout="main">\n      <slot></slot>\n    </div>\n  </MainLayout>\n</div>';


var template = '<!DOCTYPE html>\n<html class="hb-loaded">\n<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=GBK">\n    <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" name="viewport">\n    <meta content="yes" name="apple-mobile-web-app-capable">\n    <meta content="yes" name="apple-touch-fullscreen">\n    <meta content="black" name="apple-mobile-web-app-status-bar-style">\n    <meta content="320" name="MobileOptimized">\n    <meta content="telephone=no" name="format-detection">\n    <title>CCDSC {{vTitle}}</title>\n    <meta name="keywords" content="CCDSC">\n    <meta name="description" content="CCDSC">\n    <meta name="author" content="XZSoftware">\n</head>\n<body :class="baseClass">\n  <!-- \u7ECF\u8FC7\u5B9E\u9645\u4F7F\u7528\u540E\u53D1\u73B0\uFF0C\u8FD9\u4E2Aid="app"\u7684\u5B9A\u4E49\uFF0C\u8FD8\u4E0D\u80FD\u66FF\u5730\u65B9\uFF0C\u6216\u8005\u66F4\u4E0D\u80FD\u88AB\u5220\u6389 -->\n  <div\n    id="app"\n    xz-src="layout/standard/index.js"\n    class="page">\n    <MainLayout>\n      <div slot="main" xz-layout="main">\n        <slot></slot>\n      </div>\n    </MainLayout>\n  </div>\n</body>\n</html>';

exports.default = {
  name: 'Layout',
  props: ['title', 'description', 'keywords'],
  components: {
    MainLayout: _main2.default
  },
  computed: {
    vTitle: function vTitle() {
      return this.$root.title || this.title || 'iPhone';
    },
    vKeywords: function vKeywords() {
      return this.$root.keywords || this.keywords || 'egg, vue, webpack, server side render';
    },
    vDescription: function vDescription() {
      return this.$root.description || this.description || 'egg-vue-webpack server side render';
    },
    baseClass: function baseClass() {
      return this.$root.baseClass;
    },
    version: function version() {
      return new Date();
    }
  },

  template: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? content : template
};
module.exports = exports['default'];

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  components: {},
  computed: {
    model: function model() {
      return [{
        id: 1,
        first: true,
        name: 'sky'
      }, {
        id: 2,
        first: false,
        name: 'carl'
      }];
    }
  },
  methods: {},
  mounted: function mounted() {}
};
module.exports = exports['default'];

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _standard = __webpack_require__(6);

var _standard2 = _interopRequireDefault(_standard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component(_standard2.default.name, _standard2.default);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n　\nul > li {\n  color: #3399ff; }\n\n.title {\n  font-size: 24px;\n  text-align: center;\n  margin: 16px auto; }\n", ""]);

// exports


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.filter('removeHtml', function (input) {
	return input && input.replace(/<(?:.|\n)*?>/gm, '').replace(/(&rdquo;)/g, '\"').replace(/&ldquo;/g, '\"').replace(/&mdash;/g, '-').replace(/&nbsp;/g, '').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/<[\w\s"':=\/]*/, '');
});

/***/ })

/******/ });