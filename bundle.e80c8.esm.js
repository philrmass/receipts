!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(e){return t[e]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/receipts/",e(e.s="Pq/i")}({"/+kK":function(t,e){"use strict";e.a={enter:"enter__kdV-m",title:"title__xyBv9",version:"version__S-4EY",controls:"controls__6CGtm",date:"date__6dUzT",amount:"amount__KkfZr",buttons:"buttons__cZnIR"}},"0CKn":function(t,e,n){"use strict";function o(t,e){const[n,o]=Object(r.d)((()=>{const n=window.localStorage.getItem(t);if(n)try{return JSON.parse(n)}catch(e){console.error("localStorage error:",t,n,e)}return window.localStorage.setItem(t,JSON.stringify(e)),e}));return Object(r.b)((()=>{window.localStorage.setItem(t,JSON.stringify(n))}),[t,n]),[n,o]}n.d(e,"a",(function(){return o}));var r=n("QRet")},"1u8s":function(t,e,n){"use strict";(function(t){function o({name:e,names:n,onClose:o,recentNames:i,setName:u}){const[l,c]=Object(r.d)(e),a=t=>{u(t),o()};return t("div",{className:_.a.main},t("input",{className:_.a.name,type:"text",value:l,placeholder:"Vendor",onInput:t=>c(t.target.value),onChange:t=>a(t.target.value)}),t("div",{className:_.a.names},t("div",{className:_.a.title},"Recent"),i.map((e=>t("div",{key:e,onClick:()=>a(e)},e)))),t("div",{className:_.a.names},t("div",{className:_.a.title},"All"),n.map((e=>t("div",{key:e,onClick:()=>a(e)},e)))),t("button",{onClick:o},"Close"),t("button",{onClick:()=>a(l)},"Save"))}n.d(e,"a",(function(){return o}));var r=n("QRet"),_=n("PXB6")}).call(this,n("hosL").h)},G98f:function(t,e,n){"use strict";(function(t){function o(){const[e,n]=Object(_.a)("rcShown","enter"),[o,a]=Object(_.a)("rcAmount",null),[s,f]=Object(_.a)("rcDate",null),[d,p]=Object(_.a)("rcName",null),[h,v]=Object(_.a)("rcRecentNames",[]),[m,y]=Object(_.a)("rcNames",[]),[b,g]=Object(_.a)("rcReceipts",[]);Object(r.b)((()=>{const t=new Date,e=t.toLocaleDateString("en-US",{year:"numeric"}),n=t.toLocaleDateString("en-US",{month:"2-digit"}),o=t.toLocaleDateString("en-US",{day:"2-digit"});f(`${e}-${n}-${o}`)}),[f]);const k=(t,e,n)=>{t&&e&&n&&(g([...b,{date:t,name:e,amount:n}]),a(null),p(null)),y((t=>[...t.filter((t=>t.toLowerCase()!==e.toLowerCase())),e].sort()));v((t=>{const n=t.filter((t=>t.toLowerCase()!==e.toLowerCase()));return[e,...n].slice(0,5)}))},N=()=>{g((t=>t.slice(0,-1)))},C=t=>{p(t)};return(()=>{switch(e){case"exit":return t(l.a,{receipts:b,removeLastReceipt:N,showEnter:()=>n("enter")});case"names":return t(c.a,{name:d,names:m,onClose:()=>n("enter"),recentNames:h,setName:C});default:return t(u.a,{addReceipt:k,amount:o,date:s,name:d,receipts:b,setAmount:a,setDate:f,showExit:()=>n("exit"),showNames:()=>n("names"),version:i.a})}})()}n.d(e,"a",(function(){return o}));var r=n("QRet"),_=n("0CKn"),i=n("QP3f"),u=n("XFSQ"),l=n("hpYA"),c=n("1u8s")}).call(this,n("hosL").h)},MV5A:function(){},Motp:function(t,e){"use strict";e.a={receipts:"receipts__I1Hrc"}},PXB6:function(t,e){"use strict";e.a={main:"main__IcwU+",title:"title__hA4Gh",names:"names__JQ2X6"}},"Pq/i":function(t,e,n){"use strict";n.r(e);var o=n("hosL");const{h:r,render:_,hydrate:i}=o,u=t=>t&&t.default?t.default:t,l=t=>"/"===t[t.length-1]?t:t+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(n.p)+"sw-esm.js"),"function"==typeof u(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild,e=()=>{let e=u(n("QfWi")),o={};const i=document.querySelector('[type="__PREACT_CLI_DATA__"]');i&&(o=JSON.parse(decodeURI(i.innerHTML)).preRenderData||o);const c={preRenderData:o};o.url&&l(o.url);_(r(e,{CLI_DATA:c}),document.body,t)};0,e()}},Q5Sr:function(t,e){"use strict";e.a={exit:"exit__HzBxz",buttons:"buttons__s81vz",last:"last__Zg7UV",top:"top__BkfrC",bottom:"bottom__7c-4T",amount:"amount__e+Y6u"}},QP3f:function(t){t.exports=JSON.parse('{"a":"0.2.0"}')},QRet:function(t,e,n){"use strict";function o(t,e){b.options.__h&&b.options.__h(v,t,g||e),g=0;var n=v.__H||(v.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:N}),n.__[t]}function r(t){return g=1,function(t,e,n){var r=o(h++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):p(void 0,e),function(t){var e=r.__N?r.__N[0]:r.__[0],n=r.t(e,t);e!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=v,!v.u)){var _=function(t,e,n){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(t){return t.__c}));if(o.every((function(t){return!t.__N})))return!i||i.call(this,t,e,n);var _=!1;return o.forEach((function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(_=!0)}})),!(!_&&r.__c.props===t)&&(!i||i.call(this,t,e,n))};v.u=!0;var i=v.shouldComponentUpdate,u=v.componentWillUpdate;v.componentWillUpdate=function(t,e,n){if(this.__e){var o=i;i=void 0,_(t,e,n),i=o}u&&u.call(this,t,e,n)},v.shouldComponentUpdate=_}return r.__N||r.__}(p,t)}function _(t,e){var n=o(h++,3);!b.options.__s&&d(n.__H,e)&&(n.__=t,n.i=e,v.__H.__h.push(n))}function i(t){return g=5,u((function(){return{current:t}}),[])}function u(t,e){var n=o(h++,7);return d(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function l(t,e){return g=8,u((function(){return t}),e)}function c(){for(var t;t=k.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(s),t.__H.__h.forEach(f),t.__H.__h=[]}catch(e){t.__H.__h=[],b.options.__e(e,t.__v)}}function a(t){var e,n=function(){clearTimeout(o),P&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);P&&(e=requestAnimationFrame(n))}function s(t){var e=v,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),v=e}function f(t){var e=v;t.__c=t.__(),v=e}function d(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function p(t,e){return"function"==typeof e?e(t):e}n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r}));var h,v,m,y,b=n("hosL"),g=0,k=[],N=[],C=b.options.__b,S=b.options.__r,x=b.options.diffed,w=b.options.__c,L=b.options.unmount;b.options.__b=function(t){v=null,C&&C(t)},b.options.__r=function(t){S&&S(t),h=0;var e=(v=t.__c).__H;e&&(m===v?(e.__h=[],v.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=N,t.__N=t.i=void 0}))):(e.__h.forEach(s),e.__h.forEach(f),e.__h=[],h=0)),m=v},b.options.diffed=function(t){x&&x(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==k.push(e)&&y===b.options.requestAnimationFrame||((y=b.options.requestAnimationFrame)||a)(c)),e.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==N&&(t.__=t.__V),t.i=void 0,t.__V=N}))),m=v=null},b.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(s),t.__h=t.__h.filter((function(t){return!t.__||f(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],b.options.__e(n,t.__v)}})),w&&w(t,e)},b.options.unmount=function(t){L&&L(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{s(t)}catch(t){e=t}})),n.__H=void 0,e&&b.options.__e(e,n.__v))};var P="function"==typeof requestAnimationFrame},QfWi:function(t,e,n){"use strict";n.r(e),function(t){function o(){return t(r.a,null)}n.d(e,"default",(function(){return o}));var r=n("G98f");n("MV5A")}.call(this,n("hosL").h)},XFSQ:function(t,e,n){"use strict";(function(t){function o({addReceipt:e,amount:n,date:o,name:u,receipts:l,setAmount:c,setDate:a,showExit:s,showNames:f,version:d}){var p;const[h,v]=Object(r.d)(null!==(p=null==n?void 0:n.toFixed(2))&&void 0!==p?p:""),m=o&&u&&h;Object(r.b)((()=>{var t;v(null!==(t=null==n?void 0:n.toFixed(2))&&void 0!==t?t:"")}),[n]),Object(r.b)((()=>{v(h.replace(/[^0-9.]/g,""))}),[h]);return t("div",{className:i.a.enter},t("div",{className:i.a.title},t("div",null,"Receipts"),t("div",{className:i.a.version},`v${d}`)),t("div",{className:i.a.controls},t("input",{className:i.a.date,type:"date",value:o,onChange:t=>a(t.target.value)}),t("div",{onClick:f},null!=u?u:"Vendor"),t("span",null,"$"),t("input",{className:i.a.amount,type:"text",maxLength:8,size:8,placeholder:"0.00",value:h,onInput:t=>v(t.target.value),onChange:t=>(t=>{const e=parseFloat(t);isNaN(e)?c(null):c(e)})(t.target.value)}),t("button",{disabled:!m,onClick:()=>e(o,u,n)},"Add")),t(_.a,{receipts:l}),t("div",{className:i.a.buttons},t("button",{disabled:0===l.length,onClick:s},"Remove Receipts")))}n.d(e,"a",(function(){return o}));var r=n("QRet"),_=n("q8H1"),i=n("/+kK")}).call(this,n("hosL").h)},hosL:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t){var e=t.parentNode;e&&e.removeChild(t)}function _(t,e,n){var o,r,_,u={};for(_ in e)"key"==_?o=e[_]:"ref"==_?r=e[_]:u[_]=e[_];if(arguments.length>2&&(u.children=arguments.length>3?D.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(_ in t.defaultProps)void 0===u[_]&&(u[_]=t.defaultProps[_]);return i(t,u,o,r,null)}function i(t,e,n,o,r){var _={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++U:r};return null==r&&null!=R.vnode&&R.vnode(_),_}function u(){return{current:null}}function l(t){return t.children}function c(t,e){this.props=t,this.context=e}function a(t,e){if(null==e)return t.__?a(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?a(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function f(t){(!t.__d&&(t.__d=!0)&&T.push(t)&&!d.__r++||F!==R.debounceRendering)&&((F=R.debounceRendering)||M)(d)}function d(){var t,e,n,r,_,i,u,l;for(T.sort(W);t=T.shift();)t.__d&&(e=T.length,r=void 0,_=void 0,u=(i=(n=t).__v).__e,(l=n.__P)&&(r=[],(_=o({},i)).__v=i.__v+1,C(l,i,_,n.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,r,null==u?a(i):u,i.__h),S(r,i),i.__e!=u&&s(i)),T.length>e&&T.sort(W));d.__r=0}function p(t,e,n,o,r,_,u,c,s,f){var d,p,v,b,g,k,N,S=o&&o.__k||Q,x=S.length;for(n.__k=[],d=0;d<e.length;d++)if(null!=(b=n.__k[d]=null==(b=e[d])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?i(null,b,null,null,b):q(b)?i(l,{children:b},null,null,null):b.__b>0?i(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(v=S[d])||v&&b.key==v.key&&b.type===v.type)S[d]=void 0;else for(p=0;p<x;p++){if((v=S[p])&&b.key==v.key&&b.type===v.type){S[p]=void 0;break}v=null}C(t,b,v=v||V,r,_,u,c,s,f),g=b.__e,(p=b.ref)&&v.ref!=p&&(N||(N=[]),v.ref&&N.push(v.ref,null,b),N.push(p,b.__c||g,b)),null!=g?(null==k&&(k=g),"function"==typeof b.type&&b.__k===v.__k?b.__d=s=h(b,s,t):s=m(t,b,v,S,g,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=t&&(s=a(v))}for(n.__e=k,d=x;d--;)null!=S[d]&&("function"==typeof n.type&&null!=S[d].__e&&S[d].__e==n.__d&&(n.__d=y(o).nextSibling),L(S[d],S[d]));if(N)for(d=0;d<N.length;d++)w(N[d],N[++d],N[++d])}function h(t,e,n){for(var o,r=t.__k,_=0;r&&_<r.length;_++)(o=r[_])&&(o.__=t,e="function"==typeof o.type?h(o,e,n):m(n,o,o,r,o.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(q(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function m(t,e,n,o,r,_){var i,u,l;if(void 0!==e.__d)i=e.__d,e.__d=void 0;else if(null==n||r!=_||null==r.parentNode)t:if(null==_||_.parentNode!==t)t.appendChild(r),i=null;else{for(u=_,l=0;(u=u.nextSibling)&&l<o.length;l+=1)if(u==r)break t;t.insertBefore(r,_),i=_}return void 0!==i?i:r.nextSibling}function y(t){var e,n,o;if(null==t.type||"string"==typeof t.type)return t.__e;if(t.__k)for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(o=y(n)))return o;return null}function b(t,e,n){"-"===e[0]?t.setProperty(e,null==n?"":n):t[e]=null==n?"":"number"!=typeof n||$.test(e)?n:n+"px"}function g(t,e,n,o,r){var _;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof o&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||b(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||b(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])_=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?o||t.addEventListener(e,_?N:k,_):t.removeEventListener(e,_?N:k,_);else if("dangerouslySetInnerHTML"!==e){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==e&&"height"!==e&&"href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&"rowSpan"!==e&&"colSpan"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&"-"!==e[4]?t.removeAttribute(e):t.setAttribute(e,n))}}function k(t){return this.l[t.type+!1](R.event?R.event(t):t)}function N(t){return this.l[t.type+!0](R.event?R.event(t):t)}function C(t,e,n,r,_,i,u,a,s){var f,d,h,v,m,y,b,g,k,N,C,S,w,L,E,H=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,a=e.__e=n.__e,e.__h=null,i=[a]),(f=R.__b)&&f(e);try{t:if("function"==typeof H){if(g=e.props,k=(f=H.contextType)&&r[f.__c],N=f?k?k.props.value:f.__:r,n.__c?b=(d=e.__c=n.__c).__=d.__E:("prototype"in H&&H.prototype.render?e.__c=d=new H(g,N):(e.__c=d=new c(g,N),d.constructor=H,d.render=P),k&&k.sub(d),d.props=g,d.state||(d.state={}),d.context=N,d.__n=r,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=H.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=o({},d.__s)),o(d.__s,H.getDerivedStateFromProps(g,d.__s))),v=d.props,m=d.state,d.__v=e,h)null==H.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==H.getDerivedStateFromProps&&g!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,N),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,N)||e.__v===n.__v){for(e.__v!==n.__v&&(d.props=g,d.state=d.__s,d.__d=!1),d.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),C=0;C<d._sb.length;C++)d.__h.push(d._sb[C]);d._sb=[],d.__h.length&&u.push(d);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,N),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,m,y)}))}if(d.context=N,d.props=g,d.__P=t,S=R.__r,w=0,"prototype"in H&&H.prototype.render){for(d.state=d.__s,d.__d=!1,S&&S(e),f=d.render(d.props,d.state,d.context),L=0;L<d._sb.length;L++)d.__h.push(d._sb[L]);d._sb=[]}else do{d.__d=!1,S&&S(e),f=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++w<25);d.state=d.__s,null!=d.getChildContext&&(r=o(o({},r),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(v,m)),p(t,q(E=null!=f&&f.type===l&&null==f.key?f.props.children:f)?E:[E],e,n,r,_,i,u,a,s),d.base=e.__e,e.__h=null,d.__h.length&&u.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=x(n.__e,e,n,r,_,i,u,s);(f=R.diffed)&&f(e)}catch(t){e.__v=null,(s||null!=i)&&(e.__e=a,e.__h=!!s,i[i.indexOf(a)]=null),R.__e(t,e,n)}}function S(t,e){R.__c&&R.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){R.__e(t,e.__v)}}))}function x(t,e,n,o,_,i,u,l){var c,s,f,d=n.props,h=e.props,v=e.type,m=0;if("svg"===v&&(_=!0),null!=i)for(;m<i.length;m++)if((c=i[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,i[m]=null;break}if(null==t){if(null===v)return document.createTextNode(h);t=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),i=null,l=!1}if(null===v)d===h||l&&t.data===h||(t.data=h);else{if(i=i&&D.call(t.childNodes),s=(d=n.props||V).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!l){if(null!=i)for(d={},m=0;m<t.attributes.length;m++)d[t.attributes[m].name]=t.attributes[m].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,e,n,o,r){var _;for(_ in n)"children"===_||"key"===_||_ in e||g(t,_,null,n[_],o);for(_ in e)r&&"function"!=typeof e[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===e[_]||g(t,_,e[_],n[_],o)}(t,h,d,_,l),f)e.__k=[];else if(p(t,q(m=e.props.children)?m:[m],e,n,o,_&&"foreignObject"!==v,i,u,i?i[0]:n.__k&&a(n,0),l),null!=i)for(m=i.length;m--;)null!=i[m]&&r(i[m]);l||("value"in h&&void 0!==(m=h.value)&&(m!==t.value||"progress"===v&&!m||"option"===v&&m!==d.value)&&g(t,"value",m,d.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==t.checked&&g(t,"checked",m,d.checked,!1))}return t}function w(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){R.__e(t,n)}}function L(t,e,n){var o,_;if(R.unmount&&R.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||w(o,null,e)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){R.__e(t,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(_=0;_<o.length;_++)o[_]&&L(o[_],e,n||"function"!=typeof t.type);n||null==t.__e||r(t.__e),t.__=t.__e=t.__d=void 0}function P(t,e,n){return this.constructor(t,n)}function E(t,e,n){var o,r,i;R.__&&R.__(t,e),r=(o="function"==typeof n)?null:n&&n.__k||e.__k,i=[],C(e,t=(!o&&n||e).__k=_(l,null,[t]),r||V,V,void 0!==e.ownerSVGElement,!o&&n?[n]:r?null:e.firstChild?D.call(e.childNodes):null,i,!o&&n?n:r?r.__e:e.firstChild,o),S(i,t)}function H(t,e){E(t,e,H)}function O(t,e,n){var r,_,u,l,c=o({},t.props);for(u in t.type&&t.type.defaultProps&&(l=t.type.defaultProps),e)"key"==u?r=e[u]:"ref"==u?_=e[u]:c[u]=void 0===e[u]&&void 0!==l?l[u]:e[u];return arguments.length>2&&(c.children=arguments.length>3?D.call(arguments,2):n),i(t.type,c,r||t.key,_||t.ref,null)}function A(t,e){var n={__c:e="__cC"+I++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,o;return this.getChildContext||(n=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some((function(t){t.__e=!0,f(t)}))},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"Component",(function(){return c})),n.d(e,"Fragment",(function(){return l})),n.d(e,"cloneElement",(function(){return O})),n.d(e,"createContext",(function(){return A})),n.d(e,"createElement",(function(){return _})),n.d(e,"createRef",(function(){return u})),n.d(e,"h",(function(){return _})),n.d(e,"hydrate",(function(){return H})),n.d(e,"isValidElement",(function(){return j})),n.d(e,"options",(function(){return R})),n.d(e,"render",(function(){return E})),n.d(e,"toChildArray",(function(){return v}));var D,R,U,j,T,F,M,W,I,V={},Q=[],$=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;D=Q.slice,R={__e:function(t,e,n,o){for(var r,_,i;e=e.__;)if((r=e.__c)&&!r.__)try{if((_=r.constructor)&&null!=_.getDerivedStateFromError&&(r.setState(_.getDerivedStateFromError(t)),i=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(t,o||{}),i=r.__d),i)return r.__E=r}catch(e){t=e}throw t}},U=0,j=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof t&&(t=t(o({},n),this.props)),t&&o(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),f(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},c.prototype.render=l,T=[],M="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=function(t,e){return t.__v.__b-e.__v.__b},d.__r=0,I=0},hpYA:function(t,e,n){"use strict";(function(t){function o({receipts:e,removeLastReceipt:n,showEnter:o}){const i=e.at(-1);return t("div",{className:_.a.exit},t(r.a,{receipts:e}),(()=>{if(!i)return null;const e=new Date(i.date).toLocaleDateString();return t("div",{className:_.a.last},t("div",{className:_.a.top},t("div",null,e),t("div",null,i.name)),t("div",{className:_.a.bottom},t("div",{className:_.a.amount},t("span",null,"$",i.amount.toFixed(2))),t("button",{onClick:n},"Remove")))})(),t("div",{className:_.a.buttons},t("button",{onClick:o},"Add Receipts")))}n.d(e,"a",(function(){return o}));var r=n("q8H1"),_=n("Q5Sr")}).call(this,n("hosL").h)},q8H1:function(t,e,n){"use strict";(function(t){function o({receipts:e}){return t("div",null,t("div",{className:r.a.receipts},t("table",null,e.map((e=>(({date:e,name:n,amount:o})=>{const r=new Date(e);return t("tr",null,t("td",null,r.toLocaleDateString()),t("td",null,n),t("td",null,`$${o.toFixed(2)}`))})(e))))))}n.d(e,"a",(function(){return o}));var r=n("Motp")}).call(this,n("hosL").h)}});
//# sourceMappingURL=bundle.e80c8.esm.js.map