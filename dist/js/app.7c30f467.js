(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],f=0,l=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({Layout:"Layout",about:"about",home:"home"}[e]||e)+"."+{Layout:"965b1fc8",about:"4f36e808",home:"453a1835"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({Layout:"Layout",about:"about",home:"home"}[e]||e)+"."+{Layout:"31d6cfe0",about:"6b913cba",home:"3bb7062a"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("59ca"),o=n.n(r),a=(n("ea7b"),{apiKey:"AIzaSyAHmzCMSXNafStZHsHoaejPzqxr7HuQ_EM",authDomain:"auth-app-108b1.firebaseapp.com",databaseURL:"https://auth-app-108b1.firebaseio.com",projectId:"auth-app-108b1",storageBucket:"auth-app-108b1.appspot.com",messagingSenderId:"1099128469858",appId:"1:1099128469858:web:0fdae1f2f556c3dd6a143b"});o.a.initializeApp(a);var u=o.a,i=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},s=[],f=n("2877"),l={},p=Object(f["a"])(l,c,s,!1,null,null,null),h=p.exports,d=n("2f62");i["a"].use(d["a"]);var m=new d["a"].Store({state:{user:{},isAuthStateChangedSet:!1},mutations:{setUser:function(e,t){e.user=t},setAuthStateChanged:function(e,t){e.isAuthStateChangedSet=t}},actions:{fetchUser:function(e,t){var n=e.commit;n("setUser",t||null)},signInUser:function(e,t){var n=e.commit,r=t.email,o=t.password;u.auth().signInWithEmailAndPassword(r,o).then((function(e){n("setUser",e)})).catch((function(e){console.error(e)}))},logoutUser:function(e){var t=e.commit;u.auth().signOut().then((function(){t("user",null)})).catch((function(e){console.error(e)}))}},getters:{user:function(e){return e.user}}}),b=(n("b0c0"),n("d3b7"),n("8c4f")),g=function(){return n.e("Layout").then(n.bind(null,"947a"))},v=function(){return n.e("home").then(n.bind(null,"bb51"))},y=function(){return n.e("about").then(n.bind(null,"2fef"))};i["a"].use(b["a"]);var w=[{path:"/",component:g,meth:{auth:!0},children:[{path:"/",name:"Home",component:v}]},{path:"/auth",name:"Auth",component:y}],S=new b["a"]({mode:"history",base:"",routes:w}),A=function(){return new Promise((function(e){u.auth().onAuthStateChanged((function(t){return m.dispatch("fetchUser",t).then((function(){e()}))}))}))};S.beforeEach((function(e,t,n){A().then((function(){var t=m.getters.user&&m.getters.user.uid;"Auth"===e.name||t?n():n({name:"Auth"})})).catch((function(e){console.error(e)}))}));var j=S;n("b107");i["a"].config.productionTip=!1,i["a"].prototype.$firebase=u,new i["a"]({store:m,router:j,render:function(e){return e(h)}}).$mount("#app")},b107:function(e,t,n){}});
//# sourceMappingURL=app.7c30f467.js.map