(function(e){function t(t){for(var n,a,o=t[0],s=t[1],i=t[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==c[o]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},c={app:0},u=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7b9fc97c"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"2e9ce1de"}[e]+".css",c=s.p+n,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===c))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],l=i.getAttribute("data-href");if(l===n||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete a[e],d.parentNode.removeChild(d),r(u)},d.href=c;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/eclipse/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4649:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Список валют")]),e._v(" | "),r("router-link",{attrs:{to:"/converter"}},[e._v("Конвертер")])],1),r("router-view")],1)])},c=[],u=r("1da1"),o=r("5530"),s=(r("96cf"),r("2f62")),i={methods:Object(o["a"])({},Object(s["b"])(["fetchCurrencyList"])),mounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fetchCurrencyList();case 1:case"end":return t.stop()}}),t)})))()}},l=i,f=(r("5c0b"),r("2877")),d=Object(f["a"])(l,a,c,!1,null,null,null),v=d.exports,m=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"currency"},[r("form",{on:{submit:function(e){e.preventDefault()}}},[r("label",{staticClass:"currency__search-label"},[e._v("Поиск валюты "),r("input",{staticClass:"currency__search-input",attrs:{type:"text",placeholder:"Введите название или код валюты"},domProps:{value:e.currencyName},on:{input:e.sortList}})])]),r("ul",{staticClass:"currency__list"},e._l(e.allCurrency,(function(t,n){return r("li",{key:t[1].ID,staticClass:"currency__item"},[r("h3",{staticClass:"currency__item-title"},[e._v(e._s(t[1].Name))]),r("div",{staticClass:"currency__item-wrapper"},[r("span",{staticClass:"currency__item-values"},[t[1].reverse?e._e():r("span",{staticClass:"currency__item-main"},[e._v(e._s(t[1].Nominal)+" "+e._s(t[1].CharCode))]),t[1].reverse?r("span",{staticClass:"currency__item-main--reverse"},[e._v("1 RUB")]):e._e(),r("button",{staticClass:"currency__item-btn",on:{click:function(t){return e.changeValute(n)}}},[e._v(" ↔ ")]),t[1].reverse?e._e():r("span",{staticClass:"currency__item-base"},[e._v(" "+e._s(t[1].Value)+" RUB")]),t[1].reverse?r("span",{staticClass:"currency__item-base--reverse"},[e._v(" "+e._s((t[1].Nominal/t[1].Value).toFixed(4))+" "+e._s(t[1].CharCode))]):e._e()]),r("span",{staticClass:"currency__item-diff",class:e.getDiff(t)>0?"currency__item-diff--positive":"currency__item-diff--negative"},[r("span",{staticClass:"currency__arrow currency__arrow--up"},[e._v("▲ ")]),r("span",{staticClass:"currency__arrow currency__arrow--down"},[e._v("▼ ")]),e._v(" "+e._s(Math.abs(e.getDiff(t))))])])])})),0)])},h=[],y=(r("b680"),{name:"Currency",computed:Object(o["a"])({},Object(s["c"])(["allCurrency","currencyName"])),methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["sortList","changeValute"])),{},{getDiff:function(e){var t=e[1].Value-e[1].Previous;return t.toFixed(4)}})}),_=y,b=(r("b2d0"),Object(f["a"])(_,p,h,!1,null,null,null)),g=b.exports;n["a"].use(m["a"]);var V=[{path:"/",name:"currency list",component:g},{path:"/converter",name:"converter",component:function(){return r.e("about").then(r.bind(null,"fd14"))}}],C=new m["a"]({mode:"history",base:"/eclipse/",routes:V}),x=C;r("4de4"),r("4fad"),r("159b");n["a"].use(s["a"]);var w=new s["a"].Store({state:{currencyList:[],currencyName:"",renderList:[],firstValuteIndex:0,secondValuteIndex:1,convertValuteRes:null,convertValuteValue:1},mutations:{changeValute:function(e,t){e.renderList[t][1].reverse=!e.renderList[t][1].reverse},sortList:function(e,t){e.currencyName=t;var r=t.toLowerCase();e.renderList=""===t?e.currencyList:e.currencyList.filter((function(e){var t=e[1].CharCode.toLowerCase(),n=e[1].Name.toLowerCase();return t===r||n===r}))},updateCurrencyList:function(e,t){e.currencyList=t,e.renderList=t},changeFirstValuteIndex:function(e,t){e.firstValuteIndex=t},changeSecondValuteIndex:function(e,t){e.secondValuteIndex=t},changeConvertValue:function(e,t){e.convertValuteValue=t},convertValute:function(e){var t=e.currencyList[e.firstValuteIndex][1].Value,r=e.currencyList[e.firstValuteIndex][1].Nominal,n=e.currencyList[e.secondValuteIndex][1].Value,a=e.currencyList[e.secondValuteIndex][1].Nominal;e.convertValuteRes=t/r/(n/a)*e.convertValuteValue},reverseConvertValutes:function(e){var t=e.firstValuteIndex;e.firstValuteIndex=e.secondValuteIndex,e.secondValuteIndex=t}},actions:{fetchCurrencyList:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.cbr-xml-daily.ru/daily_json.js");case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,a=Object.entries(n.Valute),a.forEach((function(e){e[1].reverse=!1})),e.commit("updateCurrencyList",a),e.commit("convertValute");case 10:case"end":return t.stop()}}),t)})))()},changeValute:function(e,t){e.commit("changeValute",t)},convertValute:function(e){e.commit("convertValute")},sortList:function(e,t){e.commit("sortList",t.target.value)},changeFirstValuteIndex:function(e,t){e.commit("changeFirstValuteIndex",t.target.value),e.commit("convertValute")},changeSecondValuteIndex:function(e,t){e.commit("changeSecondValuteIndex",t.target.value),e.commit("convertValute")},changeConvertValue:function(e,t){e.commit("changeConvertValue",t.target.value),e.commit("convertValute")},reverseConvertValutes:function(e){e.commit("reverseConvertValutes"),e.commit("convertValute")}},getters:{defaultCurrencyList:function(e){return e.currencyList},allCurrency:function(e){return e.renderList},currencyName:function(e){return e.currencyName},firstValuteIndex:function(e){return e.firstValuteIndex},secondValuteIndex:function(e){return e.secondValuteIndex},getConvertRes:function(e){return e.convertValuteRes.toFixed(4)},convertValuteValue:function(e){return e.convertValuteValue}}});n["a"].config.productionTip=!1,new n["a"]({router:x,store:w,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},b2d0:function(e,t,r){"use strict";r("4649")}});
//# sourceMappingURL=app.dc0335f8.js.map