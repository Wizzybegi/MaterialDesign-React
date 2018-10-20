module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r},a=function(e){var t=e.size,r=void 0===t?null:t,o=e.color,a=void 0===o?null:o,s=e.horizontal,u=void 0===s?null:s,p=e.vertical,c=void 0===p?null:p,f=e.rotate,y=void 0===f?null:f,d=e.spin,v=void 0===d?null:d,m=e.style,b=void 0===m?{}:m,h=e.children,g=i(e,["size","color","horizontal","vertical","rotate","spin","style","children"]),O=null!==v&&v,z=n.Children.map(h,function(e){var t=e;!0!==O&&(O=!0===(null===v?t.props.spin:v));var o=t.props.size;"number"==typeof r&&"number"==typeof t.props.size&&(o=t.props.size/r);var l={size:o,color:null===a?t.props.color:a,horizontal:null===u?t.props.horizontal:u,vertical:null===c?t.props.vertical:c,rotate:null===y?t.props.rotate:y,spin:null===v?t.props.spin:v,inStack:!0};return n.cloneElement(t,l)});return null!==r&&(b.width="string"==typeof r?r:1.5*r+"rem"),n.createElement("svg",l({viewBox:"0 0 24 24",style:b},g),O&&n.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }","@keyframes spin-inverse { to { transform: rotate(-360deg) } }"),z)};a.displayName="Stack",a.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},a.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var s=a;r.d(t,"Icon",function(){return c}),r.d(t,"Stack",function(){return s});var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r},c=function(e){var t=e.path,r=e.size,o=void 0===r?null:r,l=e.color,i=void 0===l?null:l,a=e.horizontal,s=void 0!==a&&a,c=e.vertical,f=void 0!==c&&c,y=e.rotate,d=void 0===y?0:y,v=e.spin,m=void 0!==v&&v,b=e.style,h=void 0===b?{}:b,g=e.inStack,O=void 0!==g&&g,z=p(e,["path","size","color","horizontal","vertical","rotate","spin","style","inStack"]),j={},w=[];null!==o&&(O?w.push("scale("+o+")"):h.width="string"==typeof o?o:1.5*o+"rem"),s&&w.push("scaleX(-1)"),f&&w.push("scaleY(-1)"),0!==d&&w.push("rotate("+d+"deg)"),null!==i&&(j.fill=i);var P=n.createElement("path",u({d:t,style:j},O?z:{})),S=P;w.length>0&&(h.transform=w.join(" "),h.transformOrigin="center",O&&(S=n.createElement("g",{style:h},P,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var x=S;if(m){var E=!0===m||"number"!=typeof m?2:m,k=!O&&(s||f);E<0&&(k=!k),x=n.createElement("g",{style:{animation:"spin"+(k?"-inverse":"")+" linear "+Math.abs(E)+"s infinite",transformOrigin:"center"}},S,!(s||f||0!==d)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))}return O?x:n.createElement("svg",u({viewBox:"0 0 24 24",style:h},z),!O&&m&&(s||f?n.createElement("style",null,"@keyframes spin-inverse { to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }")),x)};c.displayName="Icon",c.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},c.defaultProps={size:null,color:null,horizontal:!1,vertical:!1,rotate:0,spin:!1};t.default=c}]);
//# sourceMappingURL=Icon.js.map