(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{151:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=r(n(158)),u=r(n(159)),a=r(n(7)),i=r(n(51)),f=r(n(53)),c=r(n(4)),s=r(n(0)),l=n(19),d=n(152);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/gatsby-blog-starter/"+e)}var v={activeClassName:c.default.string,activeStyle:c.default.object},x=function(e){function t(t){var n;n=e.call(this,t)||this,(0,f.default)((0,i.default)((0,i.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,u.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,i.default)((0,i.default)(n))),n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,a=void 0===r?this.defaultGetProps:r,i=t.onClick,f=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),v=t.replace,x=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var h=p(n);return s.default.createElement(l.Link,(0,u.default)({to:h,state:c,getProps:a,innerRef:this.handleRef,onMouseEnter:function(e){f&&f(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return i&&i(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(n,{state:c,replace:v})),!0}},x))},t}(s.default.Component);x.propTypes=(0,u.default)({},v,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var h=s.default.forwardRef(function(e,t){return s.default.createElement(x,(0,u.default)({innerRef:t},e))});t.default=h;var b=function(e,t){window.___navigate(p(e),t)};t.navigate=b;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},157:function(e,t,n){},158:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},159:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},163:function(e,t,n){var r=n(183).Symbol;e.exports=r},166:function(e,t,n){var r=n(182);e.exports=function(e){return null==e?"":r(e)}},176:function(e,t,n){var r=n(177)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=r},177:function(e,t,n){var r=n(178),o=n(179),u=n(192),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(u(o(t).replace(a,"")),e,"")}}},178:function(e,t){e.exports=function(e,t,n,r){var o=-1,u=null==e?0:e.length;for(r&&u&&(n=e[++o]);++o<u;)n=t(n,e[o],o,e);return n}},179:function(e,t,n){var r=n(180),o=n(166),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(u,r).replace(a,"")}},180:function(e,t,n){var r=n(181)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},181:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},182:function(e,t,n){var r=n(163),o=n(185),u=n(186),a=n(187),i=1/0,f=r?r.prototype:void 0,c=f?f.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(u(t))return o(t,e)+"";if(a(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-i?"-0":n}},183:function(e,t,n){var r=n(184),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();e.exports=u},184:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(73))},185:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},186:function(e,t){var n=Array.isArray;e.exports=n},187:function(e,t,n){var r=n(188),o=n(191),u="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&r(e)==u}},188:function(e,t,n){var r=n(163),o=n(189),u=n(190),a="[object Null]",i="[object Undefined]",f=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?i:a:f&&f in Object(e)?o(e):u(e)}},189:function(e,t,n){var r=n(163),o=Object.prototype,u=o.hasOwnProperty,a=o.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=u.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(f){}var o=a.call(e);return r&&(t?e[i]=n:delete e[i]),o}},190:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},191:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},192:function(e,t,n){var r=n(193),o=n(194),u=n(166),a=n(195);e.exports=function(e,t,n){return e=u(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}},193:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},194:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},195:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",o="\\d+",u="[\\u2700-\\u27bf]",a="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+n+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+a+"|"+i+")",d="(?:"+s+"|"+i+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,c].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),x="(?:"+[u,f,c].join("|")+")"+v,h=RegExp([s+"?"+a+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,s,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,s+l,"$"].join("|")+")",s+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,x].join("|"),"g");e.exports=function(e){return e.match(h)||[]}}}]);
//# sourceMappingURL=15-f9a3e79163871b9bdbca.js.map