!function(n){function t(_){if(e[_])return e[_].exports;var o=e[_]={i:_,l:!1,exports:{}};return n[_].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,_){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:_})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var _=Object.create(null);if(t.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(_,o,function(t){return n[t]}.bind(null,o));return _},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/receipts/",t(t.s="Pq/i")}({"0CKn":function(n,t,e){"use strict";function _(n,t){const[e,_]=Object(o.d)((()=>{const e=window.localStorage.getItem(n);if(e)try{return JSON.parse(e)}catch(t){console.error("localStorage error:",n,e,t)}return window.localStorage.setItem(n,JSON.stringify(t)),t}));return Object(o.b)((()=>{window.localStorage.setItem(n,JSON.stringify(e))}),[n,e]),[e,_]}e.d(t,"a",(function(){return _}));var o=e("QRet")},EHQy:function(n,t){"use strict";t.a={home:"home__UoRM-"}},G98f:function(n,t,e){"use strict";(function(n){function _(){const[t,e]=Object(o.d)(0),[_,l]=Object(r.a)("xMax",0);return Object(o.b)((()=>{l((n=>t>n?t:n))}),[t,l]),n("div",{className:u.a.home},n("h1",null,"Home"),n("div",null,`Count: ${t}`),n("div",null,`Max: ${_}`),n("button",{onClick:()=>e((n=>n+1))},"Add"),n("div",null,`v${i.a}`))}e.d(t,"a",(function(){return _}));var o=e("QRet"),r=e("0CKn"),i=e("QP3f"),u=e("EHQy")}).call(this,e("hosL").h)},MV5A:function(){},"Pq/i":function(n,t,e){"use strict";e.r(t);var _=e("hosL");const{h:o,render:r,hydrate:i}=_,u=n=>n&&n.default?n.default:n,l=n=>"/"===n[n.length-1]?n:n+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(e.p)+"sw-esm.js"),"function"==typeof u(e("QfWi"))){let n=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=u(e("QfWi")),_={};const i=document.querySelector('[type="__PREACT_CLI_DATA__"]');i&&(_=JSON.parse(decodeURI(i.innerHTML)).preRenderData||_);const c={preRenderData:_};_.url&&l(_.url);r(o(t,{CLI_DATA:c}),document.body,n)};0,t()}},QP3f:function(n){n.exports=JSON.parse('{"a":"0.0.0"}')},QRet:function(n,t,e){"use strict";function _(n,t){g.options.__h&&g.options.__h(v,n,b||t),b=0;var e=v.__H||(v.__H={__:[],__h:[]});return n>=e.__.length&&e.__.push({__V:S}),e.__[n]}function o(n){return b=1,function(n,t,e){var o=_(h++,2);if(o.t=n,!o.__c&&(o.__=[e?e(t):d(void 0,t),function(n){var t=o.__N?o.__N[0]:o.__[0],e=o.t(t,n);t!==e&&(o.__N=[e,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.u)){var r=function(n,t,e){if(!o.__c.__H)return!0;var _=o.__c.__H.__.filter((function(n){return n.__c}));if(_.every((function(n){return!n.__N})))return!i||i.call(this,n,t,e);var r=!1;return _.forEach((function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(r=!0)}})),!(!r&&o.__c.props===n)&&(!i||i.call(this,n,t,e))};v.u=!0;var i=v.shouldComponentUpdate,u=v.componentWillUpdate;v.componentWillUpdate=function(n,t,e){if(this.__e){var _=i;i=void 0,r(n,t,e),i=_}u&&u.call(this,n,t,e)},v.shouldComponentUpdate=r}return o.__N||o.__}(d,n)}function r(n,t){var e=_(h++,3);!g.options.__s&&p(e.__H,t)&&(e.__=n,e.i=t,v.__H.__h.push(e))}function i(n){return b=5,u((function(){return{current:n}}),[])}function u(n,t){var e=_(h++,7);return p(e.__H,t)?(e.__V=n(),e.i=t,e.__h=n,e.__V):e.__}function l(n,t){return b=8,u((function(){return n}),t)}function c(){for(var n;n=k.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(s),n.__H.__h.forEach(a),n.__H.__h=[]}catch(t){n.__H.__h=[],g.options.__e(t,n.__v)}}function f(n){var t,e=function(){clearTimeout(_),N&&cancelAnimationFrame(t),setTimeout(n)},_=setTimeout(e,100);N&&(t=requestAnimationFrame(e))}function s(n){var t=v,e=n.__c;"function"==typeof e&&(n.__c=void 0,e()),v=t}function a(n){var t=v;n.__c=n.__(),v=t}function p(n,t){return!n||n.length!==t.length||t.some((function(t,e){return t!==n[e]}))}function d(n,t){return"function"==typeof t?t(n):t}e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return o}));var h,v,y,m,g=e("hosL"),b=0,k=[],S=[],C=g.options.__b,x=g.options.__r,P=g.options.diffed,H=g.options.__c,E=g.options.unmount;g.options.__b=function(n){v=null,C&&C(n)},g.options.__r=function(n){x&&x(n),h=0;var t=(v=n.__c).__H;t&&(y===v?(t.__h=[],v.__h=[],t.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=S,n.__N=n.i=void 0}))):(t.__h.forEach(s),t.__h.forEach(a),t.__h=[],h=0)),y=v},g.options.diffed=function(n){P&&P(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==k.push(t)&&m===g.options.requestAnimationFrame||((m=g.options.requestAnimationFrame)||f)(c)),t.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==S&&(n.__=n.__V),n.i=void 0,n.__V=S}))),y=v=null},g.options.__c=function(n,t){t.some((function(n){try{n.__h.forEach(s),n.__h=n.__h.filter((function(n){return!n.__||a(n)}))}catch(e){t.some((function(n){n.__h&&(n.__h=[])})),t=[],g.options.__e(e,n.__v)}})),H&&H(n,t)},g.options.unmount=function(n){E&&E(n);var t,e=n.__c;e&&e.__H&&(e.__H.__.forEach((function(n){try{s(n)}catch(n){t=n}})),e.__H=void 0,t&&g.options.__e(t,e.__v))};var N="function"==typeof requestAnimationFrame},QfWi:function(n,t,e){"use strict";e.r(t),function(n){function _(){return n(o.a,null)}e.d(t,"default",(function(){return _}));var o=e("G98f");e("MV5A")}.call(this,e("hosL").h)},hosL:function(n,t,e){"use strict";function _(n,t){for(var e in t)n[e]=t[e];return n}function o(n){var t=n.parentNode;t&&t.removeChild(n)}function r(n,t,e){var _,o,r,u={};for(r in t)"key"==r?_=t[r]:"ref"==r?o=t[r]:u[r]=t[r];if(arguments.length>2&&(u.children=arguments.length>3?A.call(arguments,2):e),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===u[r]&&(u[r]=n.defaultProps[r]);return i(n,u,_,o,null)}function i(n,t,e,_,o){var r={type:n,props:t,key:e,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L:o};return null==o&&null!=M.vnode&&M.vnode(r),r}function u(){return{current:null}}function l(n){return n.children}function c(n,t){this.props=n,this.context=t}function f(n,t){if(null==t)return n.__?f(n.__,n.__.__k.indexOf(n)+1):null;for(var e;t<n.__k.length;t++)if(null!=(e=n.__k[t])&&null!=e.__e)return e.__e;return"function"==typeof n.type?f(n):null}function s(n){var t,e;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,t=0;t<n.__k.length;t++)if(null!=(e=n.__k[t])&&null!=e.__e){n.__e=n.__c.base=e.__e;break}return s(n)}}function a(n){(!n.__d&&(n.__d=!0)&&D.push(n)&&!p.__r++||j!==M.debounceRendering)&&((j=M.debounceRendering)||R)(p)}function p(){var n,t,e,o,r,i,u,l;for(D.sort(F);n=D.shift();)n.__d&&(t=D.length,o=void 0,r=void 0,u=(i=(e=n).__v).__e,(l=e.__P)&&(o=[],(r=_({},i)).__v=i.__v+1,C(l,i,r,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,o,null==u?f(i):u,i.__h),x(o,i),i.__e!=u&&s(i)),D.length>t&&D.sort(F));p.__r=0}function d(n,t,e,_,o,r,u,c,s,a){var p,d,v,g,b,k,S,x=_&&_.__k||Q,P=x.length;for(e.__k=[],p=0;p<t.length;p++)if(null!=(g=e.__k[p]=null==(g=t[p])||"boolean"==typeof g||"function"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?i(null,g,null,null,g):$(g)?i(l,{children:g},null,null,null):g.__b>0?i(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)){if(g.__=e,g.__b=e.__b+1,null===(v=x[p])||v&&g.key==v.key&&g.type===v.type)x[p]=void 0;else for(d=0;d<P;d++){if((v=x[d])&&g.key==v.key&&g.type===v.type){x[d]=void 0;break}v=null}C(n,g,v=v||I,o,r,u,c,s,a),b=g.__e,(d=g.ref)&&v.ref!=d&&(S||(S=[]),v.ref&&S.push(v.ref,null,g),S.push(d,g.__c||b,g)),null!=b?(null==k&&(k=b),"function"==typeof g.type&&g.__k===v.__k?g.__d=s=h(g,s,n):s=y(n,g,v,x,b,s),"function"==typeof e.type&&(e.__d=s)):s&&v.__e==s&&s.parentNode!=n&&(s=f(v))}for(e.__e=k,p=P;p--;)null!=x[p]&&("function"==typeof e.type&&null!=x[p].__e&&x[p].__e==e.__d&&(e.__d=m(_).nextSibling),E(x[p],x[p]));if(S)for(p=0;p<S.length;p++)H(S[p],S[++p],S[++p])}function h(n,t,e){for(var _,o=n.__k,r=0;o&&r<o.length;r++)(_=o[r])&&(_.__=n,t="function"==typeof _.type?h(_,t,e):y(e,_,_,o,_.__e,t));return t}function v(n,t){return t=t||[],null==n||"boolean"==typeof n||($(n)?n.some((function(n){v(n,t)})):t.push(n)),t}function y(n,t,e,_,o,r){var i,u,l;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==e||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),i=null;else{for(u=r,l=0;(u=u.nextSibling)&&l<_.length;l+=1)if(u==o)break n;n.insertBefore(o,r),i=r}return void 0!==i?i:o.nextSibling}function m(n){var t,e,_;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(t=n.__k.length-1;t>=0;t--)if((e=n.__k[t])&&(_=m(e)))return _;return null}function g(n,t,e){"-"===t[0]?n.setProperty(t,null==e?"":e):n[t]=null==e?"":"number"!=typeof e||q.test(t)?e:e+"px"}function b(n,t,e,_,o){var r;n:if("style"===t)if("string"==typeof e)n.style.cssText=e;else{if("string"==typeof _&&(n.style.cssText=_=""),_)for(t in _)e&&t in e||g(n.style,t,"");if(e)for(t in e)_&&e[t]===_[t]||g(n.style,t,e[t])}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in n?t.toLowerCase().slice(2):t.slice(2),n.l||(n.l={}),n.l[t+r]=e,e?_||n.addEventListener(t,r?S:k,r):n.removeEventListener(t,r?S:k,r);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&t in n)try{n[t]=null==e?"":e;break n}catch(n){}"function"==typeof e||(null==e||!1===e&&"-"!==t[4]?n.removeAttribute(t):n.setAttribute(t,e))}}function k(n){return this.l[n.type+!1](M.event?M.event(n):n)}function S(n){return this.l[n.type+!0](M.event?M.event(n):n)}function C(n,t,e,o,r,i,u,f,s){var a,p,h,v,y,m,g,b,k,S,C,x,H,E,w,O=t.type;if(void 0!==t.constructor)return null;null!=e.__h&&(s=e.__h,f=t.__e=e.__e,t.__h=null,i=[f]),(a=M.__b)&&a(t);try{n:if("function"==typeof O){if(b=t.props,k=(a=O.contextType)&&o[a.__c],S=a?k?k.props.value:a.__:o,e.__c?g=(p=t.__c=e.__c).__=p.__E:("prototype"in O&&O.prototype.render?t.__c=p=new O(b,S):(t.__c=p=new c(b,S),p.constructor=O,p.render=N),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=S,p.__n=o,h=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=O.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=_({},p.__s)),_(p.__s,O.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,p.__v=t,h)null==O.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==O.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,S),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,S)||t.__v===e.__v){for(t.__v!==e.__v&&(p.props=b,p.state=p.__s,p.__d=!1),p.__e=!1,t.__e=e.__e,t.__k=e.__k,t.__k.forEach((function(n){n&&(n.__=t)})),C=0;C<p._sb.length;C++)p.__h.push(p._sb[C]);p._sb=[],p.__h.length&&u.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,S),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}if(p.context=S,p.props=b,p.__P=n,x=M.__r,H=0,"prototype"in O&&O.prototype.render){for(p.state=p.__s,p.__d=!1,x&&x(t),a=p.render(p.props,p.state,p.context),E=0;E<p._sb.length;E++)p.__h.push(p._sb[E]);p._sb=[]}else do{p.__d=!1,x&&x(t),a=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++H<25);p.state=p.__s,null!=p.getChildContext&&(o=_(_({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),d(n,$(w=null!=a&&a.type===l&&null==a.key?a.props.children:a)?w:[w],t,e,o,r,i,u,f,s),p.base=t.__e,t.__h=null,p.__h.length&&u.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==i&&t.__v===e.__v?(t.__k=e.__k,t.__e=e.__e):t.__e=P(e.__e,t,e,o,r,i,u,s);(a=M.diffed)&&a(t)}catch(n){t.__v=null,(s||null!=i)&&(t.__e=f,t.__h=!!s,i[i.indexOf(f)]=null),M.__e(n,t,e)}}function x(n,t){M.__c&&M.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(n){n.call(t)}))}catch(n){M.__e(n,t.__v)}}))}function P(n,t,e,_,r,i,u,l){var c,s,a,p=e.props,h=t.props,v=t.type,y=0;if("svg"===v&&(r=!0),null!=i)for(;y<i.length;y++)if((c=i[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){n=c,i[y]=null;break}if(null==n){if(null===v)return document.createTextNode(h);n=r?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),i=null,l=!1}if(null===v)p===h||l&&n.data===h||(n.data=h);else{if(i=i&&A.call(n.childNodes),s=(p=e.props||I).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!l){if(null!=i)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(a||s)&&(a&&(s&&a.__html==s.__html||a.__html===n.innerHTML)||(n.innerHTML=a&&a.__html||""))}if(function(n,t,e,_,o){var r;for(r in e)"children"===r||"key"===r||r in t||b(n,r,null,e[r],_);for(r in t)o&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||e[r]===t[r]||b(n,r,t[r],e[r],_)}(n,h,p,r,l),a)t.__k=[];else if(d(n,$(y=t.props.children)?y:[y],t,e,_,r&&"foreignObject"!==v,i,u,i?i[0]:e.__k&&f(e,0),l),null!=i)for(y=i.length;y--;)null!=i[y]&&o(i[y]);l||("value"in h&&void 0!==(y=h.value)&&(y!==n.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&b(n,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==n.checked&&b(n,"checked",y,p.checked,!1))}return n}function H(n,t,e){try{"function"==typeof n?n(t):n.current=t}catch(n){M.__e(n,e)}}function E(n,t,e){var _,r;if(M.unmount&&M.unmount(n),(_=n.ref)&&(_.current&&_.current!==n.__e||H(_,null,t)),null!=(_=n.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(n){M.__e(n,t)}_.base=_.__P=null,n.__c=void 0}if(_=n.__k)for(r=0;r<_.length;r++)_[r]&&E(_[r],t,e||"function"!=typeof n.type);e||null==n.__e||o(n.__e),n.__=n.__e=n.__d=void 0}function N(n,t,e){return this.constructor(n,e)}function w(n,t,e){var _,o,i;M.__&&M.__(n,t),o=(_="function"==typeof e)?null:e&&e.__k||t.__k,i=[],C(t,n=(!_&&e||t).__k=r(l,null,[n]),o||I,I,void 0!==t.ownerSVGElement,!_&&e?[e]:o?null:t.firstChild?A.call(t.childNodes):null,i,!_&&e?e:o?o.__e:t.firstChild,_),x(i,n)}function O(n,t){w(n,t,O)}function T(n,t,e){var o,r,u,l,c=_({},n.props);for(u in n.type&&n.type.defaultProps&&(l=n.type.defaultProps),t)"key"==u?o=t[u]:"ref"==u?r=t[u]:c[u]=void 0===t[u]&&void 0!==l?l[u]:t[u];return arguments.length>2&&(c.children=arguments.length>3?A.call(arguments,2):e),i(n.type,c,o||n.key,r||n.ref,null)}function U(n,t){var e={__c:t="__cC"+V++,__:n,Consumer:function(n,t){return n.children(t)},Provider:function(n){var e,_;return this.getChildContext||(e=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&e.some((function(n){n.__e=!0,a(n)}))},this.sub=function(n){e.push(n);var t=n.componentWillUnmount;n.componentWillUnmount=function(){e.splice(e.indexOf(n),1),t&&t.call(n)}}),n.children}};return e.Provider.__=e.Consumer.contextType=e}e.r(t),e.d(t,"Component",(function(){return c})),e.d(t,"Fragment",(function(){return l})),e.d(t,"cloneElement",(function(){return T})),e.d(t,"createContext",(function(){return U})),e.d(t,"createElement",(function(){return r})),e.d(t,"createRef",(function(){return u})),e.d(t,"h",(function(){return r})),e.d(t,"hydrate",(function(){return O})),e.d(t,"isValidElement",(function(){return W})),e.d(t,"options",(function(){return M})),e.d(t,"render",(function(){return w})),e.d(t,"toChildArray",(function(){return v}));var A,M,L,W,D,j,R,F,V,I={},Q=[],q=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,$=Array.isArray;A=Q.slice,M={__e:function(n,t,e,_){for(var o,r,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(n)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(n,_||{}),i=o.__d),i)return o.__E=o}catch(t){n=t}throw n}},L=0,W=function(n){return null!=n&&void 0===n.constructor},c.prototype.setState=function(n,t){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof n&&(n=n(_({},e),this.props)),n&&_(e,n),null!=n&&this.__v&&(t&&this._sb.push(t),a(this))},c.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),a(this))},c.prototype.render=l,D=[],R="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F=function(n,t){return n.__v.__b-t.__v.__b},p.__r=0,V=0}});
//# sourceMappingURL=bundle.48c4c.esm.js.map