import{au as e,v as n,d as t,P as o,i as a,a as c,r,l as s,c as l,b as i,H as u,bV as f,k as p,as as b,C as d,E as v,at as g,bW as O,bX as h,bY as y,bZ as j,b_ as w,b$ as m,c0 as C,c1 as x}from"./index.6cbf2987.js";function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){A(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!i(e)}function N(){}function E(e,n,t){var o,a;return null!==(a=null===(o=e[t])||void 0===o?void 0:o.call(e))&&void 0!==a?a:n[t]}var k={success:O,info:h,error:y,warning:j},B={success:w,info:m,error:C,warning:x},H=n("success","info","warning","error"),S=e(t({name:"AAlert",inheritAttrs:!1,props:{type:o.oneOf(H),closable:o.looseBool,closeText:o.VNodeChild,message:o.VNodeChild,description:o.VNodeChild,afterClose:o.func.def(N),showIcon:o.looseBool,prefixCls:o.string,banner:o.looseBool,icon:o.VNodeChild,onClose:o.VNodeChild},emits:["close"],setup:function(e,n){var t=n.slots,o=n.emit,i=n.attrs,O=n.expose,h=a("configProvider",c),y=r(!1),j=r(!1),w=r(),m=function(e){e.preventDefault();var n=w.value;n.style.height="".concat(n.offsetHeight,"px"),n.style.height="".concat(n.offsetHeight,"px"),y.value=!0,o("close",e)},C=function(){var n;y.value=!1,j.value=!0,null===(n=e.afterClose)||void 0===n||n.call(e)};return O({animationEnd:C}),function(){var n,o,a=e.prefixCls,c=e.banner,r=(0,h.getPrefixCls)("alert",a),O=e.closable,x=e.type,P=e.showIcon,N=E(t,e,"closeText"),H=E(t,e,"description"),S=E(t,e,"message"),I=E(t,e,"icon");P=!(!c||void 0!==P)||P;var T=(H?B:k)[x=c&&void 0===x?"warning":x||"info"]||null;N&&(O=!0);var L=s(r,(A(o={},"".concat(r,"-").concat(x),!0),A(o,"".concat(r,"-closing"),y.value),A(o,"".concat(r,"-with-description"),!!H),A(o,"".concat(r,"-no-icon"),!P),A(o,"".concat(r,"-banner"),!!c),A(o,"".concat(r,"-closable"),O),o)),W=O?l("button",{type:"button",onClick:m,class:"".concat(r,"-close-icon"),tabindex:0},[N?l("span",{class:"".concat(r,"-close-text")},D(N)?N:{default:function(){return[N]}}):l(u,null,null)]):null,X=I&&(f(I)?p(I,{class:"".concat(r,"-icon")}):l("span",{class:"".concat(r,"-icon")},D(I)?I:{default:function(){return[I]}}))||l(T,{class:"".concat(r,"-icon")},null),Y=b("".concat(r,"-slide-up"),{appear:!1,onAfterLeave:C});return j.value?null:l(g,Y,D(n=d(l("div",V(V({},i),{},{class:[i.class,L],"data-show":!y.value,ref:w}),[P?X:null,l("span",{class:"".concat(r,"-message")},D(S)?S:{default:function(){return[S]}}),l("span",{class:"".concat(r,"-description")},D(H)?H:{default:function(){return[H]}}),W]),[[v,!y.value]]))?n:{default:function(){return[n]}})}}}));export{S as A};
