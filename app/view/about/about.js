module.exports=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/public/client/",e(e.s=42)}([function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var u=e[r];"number"==typeof u[0]&&o[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e){t.exports=function(t,e,n,o){var r,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,a=t.default);var i="function"==typeof a?a.options:a;if(e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),n&&(i._scopeId=n),o){var s=Object.create(i.computed||null);Object.keys(o).forEach(function(t){var e=o[t];s[t]=function(){return e}}),i.computed=s}return{esModule:r,exports:a,options:i}}},function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++)for(var o=e[n].parts,r=0;r<o.length;r++){var a=o[r],u=a.media||"default",i=t[u];i?i.ids.indexOf(a.id)<0&&(i.ids.push(a.id),i.css+="\n"+a.css):t[u]={ids:[a.id],css:a.css,media:a.media}}}function r(t,e){for(var n=0;n<e.length;n++)for(var o=e[n].parts,r=0;r<o.length;r++){var a=o[r];t[a.id]={ids:[a.id],css:a.css,media:a.media}}}function a(t){var e="";for(var n in t){var o=t[n];e+='<style data-vue-ssr-id="'+o.ids.join(" ")+'"'+(o.media?' media="'+o.media+'"':"")+">"+o.css+"</style>"}return e}var u=n(27);t.exports=function(t,e,n,i){if(i||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),i){i.hasOwnProperty("styles")||Object.defineProperty(i,"styles",{enumberable:!0,get:function(){return a(i._styles)}});var s=i._styles||(i._styles={});e=u(t,e),n?o(s,e):r(s,e)}}},function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=n(3),a=function(t){return t&&t.__esModule?t:{default:t}}(r);n(9),n(8),n(7);var u={};u.data=function(){return window.__INITIAL_STATE__||{}},u.init=function(t){return"object"===("undefined"==typeof window?"undefined":o(window))?u.client(t):u.server(t)},u.client=function(t){return a.default.prototype.$http=n(5),t.el="#app",t.store?t.store.replaceState(u.data()):window.__INITIAL_STATE__&&(t.data=u.data()),new a.default(t)},u.server=function(t){return t.store&&t.router?function(e){t.router.push(e.state.url);var n=t.router.getMatchedComponents();return n?Promise.all(n.map(function(e){return e.preFetch?e.preFetch(t.store):null})).then(function(){return e.state=t.store.state,new a.default(t)}):Promise.reject({code:"404"})}:function(e){var n=a.default.extend(t),o=new n({data:e.state});return new Promise(function(t){t(o)})}},u.use=function(t){a.default.use(t)},u.component=function(t,e){a.default.component(t,e)},e.default=u,t.exports=e.default},function(t,e){t.exports=require("axios")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=n(20),a=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={name:"Layout",props:["title","description","keywords"],components:{MainLayout:a.default},computed:{vTitle:function(){return this.$root.title||this.title||"iPhone"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass},version:function(){return new Date}},template:"object"===("undefined"==typeof window?"undefined":o(window))?'\n<div id="app" \n  xz-src="layout/standard/index.js"\n  class="page"\n  >\n  <MainLayout>\n    <div slot="main" xz-layout="main">\n      <slot></slot>\n    </div>\n  </MainLayout>\n</div>':'<!DOCTYPE html>\n<html class="hb-loaded">\n<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=GBK">\n    <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" name="viewport">\n    <meta content="yes" name="apple-mobile-web-app-capable">\n    <meta content="yes" name="apple-touch-fullscreen">\n    <meta content="black" name="apple-mobile-web-app-status-bar-style">\n    <meta content="320" name="MobileOptimized">\n    <meta content="telephone=no" name="format-detection">\n    <link href="http://www.csxiangfa.com/favicon.ico" type="image/x-icon" rel="icon">\n    <title>正品官网 {{vTitle}}</title>\n    <meta name="keywords" content="正品官网">\n    <meta name="description" content="正品官网">\n    <meta name="author" content="黑眼圈单品管理系统，作者QQ：860180810，www.not3.com">\n</head>\n<body :class="baseClass">\n  \x3c!-- 经过实际使用后发现，这个id="app"的定义，还不能替地方，或者更不能被删掉 --\x3e\n  <div\n    id="app"\n    xz-src="layout/standard/index.js"\n    class="page">\n    <MainLayout>\n      <div slot="main" xz-layout="main">\n        <slot></slot>\n      </div>\n    </MainLayout>\n  </div>\n</body>\n</html>'},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(3),a=o(r),u=n(6),i=o(u);a.default.component(i.default.name,i.default)},function(t,e,n){"use strict"},function(t,e,n){"use strict";var o=n(3);(function(t){return t&&t.__esModule?t:{default:t}})(o).default.filter("removeHtml",function(t){return t&&t.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"v-content",data:function(){return{}},components:{},mounted:function(){}},t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},computed:{},mounted:function(){}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),a=o(r),u=n(18),i=o(u);e.default={components:{LayoutHeader:a.default,LayoutContent:i.default}},t.exports=e.default},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(0)(),e.i(n(14),""),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"body{background:#856d35}.page{max-width:640px;margin:0 auto;padding:0;padding-bottom:50px;width:100%;height:auto;min-height:100%;background:#f9f9f9}",""])},function(t,e,n){e=t.exports=n(0)(),e.i(n(13),""),e.push([t.i,"",""])},function(t,e,n){n(26);var o=n(1)(n(10),n(23),null,null);t.exports=o.exports},function(t,e,n){n(24);var o=n(1)(n(11),n(21),null,null);t.exports=o.exports},function(t,e,n){n(25);var o=n(1)(n(12),n(22),null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("header",{attrs:{"xz-src":"layout/standard/header/header.vue"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"xz-layout":"layout","xz-src":"layout/standard/main.vue"}},[n("LayoutHeader"),t._v(" "),n("LayoutContent",[n("div",{attrs:{"xz-slot":"content"},slot:"content"},[t._t("main",null,{xzSlot:"main"})],2)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"content","xz-slot":"content","xz-src":"layout/standard/content/content.vue"}},[t._t("content")],2)},staticRenderFns:[]}},function(t,e,n){var o=n(15);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),n(2)("9e258d5e",o,!0)},function(t,e,n){var o=n(16);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),n(2)("8d94cad6",o,!0)},function(t,e,n){var o=n(17);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),n(2)("3f319f61",o,!0)},function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],u=a[0],i=a[1],s=a[2],c=a[3],l={id:t+":"+r,css:i,media:s,sourceMap:c};o[u]?o[u].parts.push(l):n.push(o[u]={id:u,parts:[l]})}return n}},,,,,,,function(t,e,n){n(131);var o=n(1)(n(58),n(116),null,null);t.exports=o.exports},,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},a=n(4),u=o(a),i=n(34),s=o(i);e.default=u.default.init(r({},s.default)),t.exports=e.default},,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},computed:{},methods:{},mounted:function(){}},t.exports=e.default},,,,,,,,,,,,function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"",""])},,,,,,,function(t,e,n){e=t.exports=n(0)(),e.i(n(70),""),e.push([t.i,"",""])},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){t.exports=n.p+"img/logo.c2a605fb.png"},,,,,,,,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("layout",[o("img",{attrs:{src:n(108)}}),t._v("\n"+t._s(t.message)+"\n")])},staticRenderFns:[]}},,,,,,,,,,,,,,,function(t,e,n){var o=n(77);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),n(2)("1e6a9422",o,!0)}]);