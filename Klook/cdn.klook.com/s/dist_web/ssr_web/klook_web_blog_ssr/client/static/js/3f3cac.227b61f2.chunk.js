(window.webpackJsonp=window.webpackJsonp||[]).push([["3f3cac"],{"0hyr1k":function(e,t,n){"use strict";n.r(t);n("SuFqDE");var r=n("yXPUfT"),o=n.n(r),i=n("lwsEjD"),c=n.n(i),u=n("W8MJtM"),a=n.n(u),f=n("7W2iVu"),s=n.n(f),d=n("a1gurj"),p=n.n(d),l=n("NsbkXA"),m=n.n(l),y=n("o0o1eb"),v=n.n(y),h=(n("ma9Imd"),n("4mDm7A"),n("07d7Qt"),n("5s+nKu"),n("PKPkDs"),n("3bBZ2v"),n("mrSGxO")),b=n("MmvrRj"),g=n("dmMxfA"),j=n("ReWArH");function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var w=function(e){s()(n,e);var t=O(n);function n(){return c()(this,n),t.apply(this,arguments)}return a()(n,[{key:"head",value:function(){var e={script:[],noscript:[]};return window.__conf_env.kvClientConfig.GTM_ID&&("global"===this.klook.market&&e.script.push({src:"https://www.googletagmanager.com/gtm.js?id=".concat(window.__conf_env.kvClientConfig.GTM_ID),async:!0}),e.script.push({innerHTML:"window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments)};",type:"text/javascript"}),"global"===this.klook.market&&e.noscript.push({hid:"gtm-noscript",innerHTML:'<iframe src="https://www.googletagmanager.com/ns.html?id='.concat(window.__conf_env.kvClientConfig.GTM_ID,'" height="0" width="0" style="display:none;visibility:hidden"></iframe>'),pbody:!0})),e}},{key:"beforeMount",value:function(){window.Cookies=this.$cookies,window.$axios=this.$axios,window.tracker={gtm:{sendGTMCustomEvent:this.$sendGTMCustomEvent.bind(this)},inhouse:this.$inhouse}}},{key:"mounted",value:function(){var e=o()(v.a.mark((function e(){var t,n=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)(Object(j.a)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.$t.apply(n,[e].concat(r))}),(function(e,t,r){return n.$href(e,t,r)}),this.klook.language),{platform:this.klook.platform,isEUArea:this.isEUArea});case 2:(t=e.sent)&&this.$once("hook:beforeDestroy",(function(){t.close()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(b.Vue);Object(h.a)([b.State],w.prototype,"klook",void 0),Object(h.a)([b.Getter],w.prototype,"isEUArea",void 0);var k=w=Object(h.a)([Object(b.Component)({components:{desktop:function(){return Promise.all([n.e("layouts-default-desktop~layouts-default-mobile~layouts-error-mobile~layouts-newsroom-desktop~layouts~ee9f6fb6"),n.e("layouts-default-desktop~layouts-default-mobile"),n.e("layouts-default-desktop")]).then(n.bind(null,"czPcXF"))},mobile:function(){return Promise.all([n.e("layouts-default-mobile~layouts-error-mobile~pages-home-detail~pages-home-detailAmp~pages-home-detail~d8055cbc"),n.e("layouts-default-desktop~layouts-default-mobile~layouts-error-mobile~layouts-newsroom-desktop~layouts~ee9f6fb6"),n.e("layouts-default-desktop~layouts-default-mobile"),n.e("layouts-default-mobile")]).then(n.bind(null,"sCVOrU"))}}})],w),P=n("KHd+Ze"),A=Object(P.a)(k,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.klook.platform,{tag:"Component"})}),[],!1,null,null,null);t.default=A.exports},MmvrRj:function(e,t,n){!function(e,t,n,r,o){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var i="default"in r?r.default:r;i.registerHooks(["beforeRouteEnter","beforeRouteUpdate","beforeRouteLeave","asyncData","fetch","head","key","layout","loading","middleware","scrollToTop","transition","validate","watchQuery","meta"]);var c=/\B([A-Z])/g,u=function(e){return e.replace(c,"-$1").toLowerCase()};function a(e,t){return function(n,r,o){r=u(r);var i=o.value;o.value=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(!1!==i.apply(this,n))if(t){if("function"!==typeof this[t])throw new TypeError("must be a method name");this.$off(e||r,this[t])}else e?this.$off(e||r):this.$off()}}}function f(e){return r.createDecorator((function(t,n){var r=u(n);"function"!==typeof t.created&&(t.created=function(){});var o=t.created;t.created=function(){o(),"undefined"!==typeof t.methods&&this.$on(e||r,t.methods[n])}}))}function s(e){return r.createDecorator((function(t,n){var r=u(n);"function"!==typeof t.created&&(t.created=function(){});var o=t.created;t.created=function(){o(),"undefined"!==typeof t.methods&&this.$once(e||r,t.methods[n])}}))}function d(e){return function(t,n,r){var o=r.value;r.value=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(!1!==o.apply(this,t)){if("function"!==typeof this[e])throw new TypeError("must be a method name");this.$nextTick(this[e])}}}}e.Vue=t,Object.defineProperty(e,"Emit",{enumerable:!0,get:function(){return n.Emit}}),Object.defineProperty(e,"Inject",{enumerable:!0,get:function(){return n.Inject}}),Object.defineProperty(e,"Model",{enumerable:!0,get:function(){return n.Model}}),Object.defineProperty(e,"Prop",{enumerable:!0,get:function(){return n.Prop}}),Object.defineProperty(e,"PropSync",{enumerable:!0,get:function(){return n.PropSync}}),Object.defineProperty(e,"Provide",{enumerable:!0,get:function(){return n.Provide}}),Object.defineProperty(e,"Ref",{enumerable:!0,get:function(){return n.Ref}}),Object.defineProperty(e,"Watch",{enumerable:!0,get:function(){return n.Watch}}),e.Component=i,Object.defineProperty(e,"mixins",{enumerable:!0,get:function(){return r.mixins}}),Object.defineProperty(e,"Action",{enumerable:!0,get:function(){return o.Action}}),Object.defineProperty(e,"Getter",{enumerable:!0,get:function(){return o.Getter}}),Object.defineProperty(e,"Mutation",{enumerable:!0,get:function(){return o.Mutation}}),Object.defineProperty(e,"State",{enumerable:!0,get:function(){return o.State}}),Object.defineProperty(e,"namespace",{enumerable:!0,get:function(){return o.namespace}}),e.NextTick=d,e.Off=a,e.On=f,e.Once=s,Object.defineProperty(e,"__esModule",{value:!0})}(t,n("Kw5rN6"),n("kD6cmt"),n("L+H0AY"),n("S7WHk5"))},ReWArH:function(e,t,n){"use strict";n("tktoO2"),n("pNMOM2"),n("TeQFY9"),n("5DmWYC"),n("FZtP4Z"),n("27RRn3");var r=n("RIqPOD"),o=n.n(r),i=n("lSNAPY"),c=n.n(i),u=n("SA+ZJl"),a=n.n(u);n("E9XDuI"),n("07d7Qt"),n("+2oPQH"),n("ma9Imd");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e,t,n){return["22904",["22905",{MULTILANG_URL_PLACEHOLDER:t("/cookiepolicy/")}],"22906","22908","22909","22910","22911","22912","22914","22915","22916","22917","22918","22919","22922","22923",["4132",["en"===n?"":"".concat(n,"/")]]].reduce((function(t,n){if(Array.isArray(n)){var r=a()(n),i=r[0],u=r.slice(1);return s(s({},t),{},c()({},i,e.apply(void 0,[i].concat(o()(u)))))}return s(s({},t),{},c()({},n,e(n)))}),{})}},S7WHk5:function(e,t,n){"use strict";n.r(t),n.d(t,"State",(function(){return i})),n.d(t,"Getter",(function(){return c})),n.d(t,"Action",(function(){return u})),n.d(t,"Mutation",(function(){return a})),n.d(t,"namespace",(function(){return f}));var r=n("L+H0AY"),o=n("L2JU6z"),i=s("computed",o.e),c=s("computed",o.c),u=s("methods",o.b),a=s("methods",o.d);function f(e,t){function n(t){return function(n,r){if("string"===typeof r){var o=r,i=n;return t(o,{namespace:e})(i,o)}var c=n,u=function(e,t){var n={};return[e,t].forEach((function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))})),n}(r||{},{namespace:e});return t(c,u)}}return t?(console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),n(t)):{State:n(i),Getter:n(c),Mutation:n(a),Action:n(u)}}function s(e,t){function n(n,o){return Object(r.createDecorator)((function(r,i){r[e]||(r[e]={});var c,u=((c={})[i]=n,c);r[e][i]=void 0!==o?t(o,u)[i]:t(u)[i]}))}return function(e,t){if("string"===typeof t){var r=t,o=e;return n(r,void 0)(o,r)}return n(e,function(e){var t=e&&e.namespace;if("string"!==typeof t)return;if("/"!==t[t.length-1])return t+"/";return t}(t))}}},"SA+ZJl":function(e,t,n){var r=n("wTVAka"),o=n("EbDIMM"),i=n("ZhPi5Y"),c=n("wkBT64");e.exports=function(e){return r(e)||o(e)||i(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},kD6cmt:function(e,t,n){"use strict";n.r(t),n.d(t,"Inject",(function(){return c})),n.d(t,"InjectReactive",(function(){return u})),n.d(t,"Provide",(function(){return s})),n.d(t,"ProvideReactive",(function(){return d})),n.d(t,"Model",(function(){return m})),n.d(t,"Prop",(function(){return y})),n.d(t,"PropSync",(function(){return v})),n.d(t,"Watch",(function(){return h})),n.d(t,"Emit",(function(){return g})),n.d(t,"Ref",(function(){return j}));var r=n("Kw5rN6");n.d(t,"Vue",(function(){return r.default}));var o=n("L+H0AY");n.d(t,"Component",(function(){return o.default})),n.d(t,"Mixins",(function(){return o.mixins}));var i="__reactiveInject__";function c(e){return Object(o.createDecorator)((function(t,n){"undefined"===typeof t.inject&&(t.inject={}),Array.isArray(t.inject)||(t.inject[n]=e||n)}))}function u(e){return Object(o.createDecorator)((function(t,n){if("undefined"===typeof t.inject&&(t.inject={}),!Array.isArray(t.inject)){var r=e?e.from||e:n,o=!!e&&e.default||void 0;t.computed||(t.computed={}),t.computed[n]=function(){var e=this[i];return e?e[r]:o},t.inject[i]=i}}))}function a(e){var t=function(){var n=this,r="function"===typeof e?e.call(this):e;for(var o in(r=Object.create(r||null))[i]=this[i]||{},t.managed)r[t.managed[o]]=this[o];var c=function(e){r[t.managedReactive[e]]=u[e],Object.defineProperty(r[i],t.managedReactive[e],{enumerable:!0,get:function(){return n[e]}})},u=this;for(var o in t.managedReactive)c(o);return r};return t.managed={},t.managedReactive={},t}function f(e){return"function"!==typeof e||!e.managed&&!e.managedReactive}function s(e){return Object(o.createDecorator)((function(t,n){var r=t.provide;f(r)&&(r=t.provide=a(r)),r.managed[n]=e||n}))}function d(e){return Object(o.createDecorator)((function(t,n){var r=t.provide;Array.isArray(t.inject)||(t.inject=t.inject||{},t.inject[i]={from:i,default:{}}),f(r)&&(r=t.provide=a(r)),r.managedReactive[n]=e||n}))}var p="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function l(e,t,n){if(p&&!Array.isArray(e)&&"function"!==typeof e&&"undefined"===typeof e.type){var r=Reflect.getMetadata("design:type",t,n);r!==Object&&(e.type=r)}}function m(e,t){return void 0===t&&(t={}),function(n,r){l(t,n,r),Object(o.createDecorator)((function(n,r){(n.props||(n.props={}))[r]=t,n.model={prop:r,event:e||r}}))(n,r)}}function y(e){return void 0===e&&(e={}),function(t,n){l(e,t,n),Object(o.createDecorator)((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}function v(e,t){return void 0===t&&(t={}),function(n,r){l(t,n,r),Object(o.createDecorator)((function(n,r){(n.props||(n.props={}))[e]=t,(n.computed||(n.computed={}))[r]={get:function(){return this[e]},set:function(t){this.$emit("update:"+e,t)}}}))(n,r)}}function h(e,t){void 0===t&&(t={});var n=t.deep,r=void 0!==n&&n,i=t.immediate,c=void 0!==i&&i;return Object(o.createDecorator)((function(t,n){"object"!==typeof t.watch&&(t.watch=Object.create(null));var o=t.watch;"object"!==typeof o[e]||Array.isArray(o[e])?"undefined"===typeof o[e]&&(o[e]=[]):o[e]=[o[e]],o[e].push({handler:n,deep:r,immediate:c})}))}var b=/\B([A-Z])/g;function g(e){return function(t,n,r){var o=n.replace(b,"-$1").toLowerCase(),i=r.value;r.value=function(){for(var t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var c=function(r){var i=e||o;void 0===r?0===n.length?t.$emit(i):1===n.length?t.$emit(i,n[0]):t.$emit.apply(t,[i].concat(n)):0===n.length?t.$emit(i,r):1===n.length?t.$emit(i,r,n[0]):t.$emit.apply(t,[i,r].concat(n))},u=i.apply(this,n);return O(u)?u.then(c):c(u),u}}}function j(e){return Object(o.createDecorator)((function(t,n){t.computed=t.computed||{},t.computed[n]={cache:!1,get:function(){return this.$refs[e||n]}}}))}function O(e){return e instanceof Promise||e&&"function"===typeof e.then}}}]);