!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var o,r,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,f=setTimeout(h,t),d?p(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=b();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?p(e):(o=r=void 0,a)}function T(){var e=b(),n=O(e);if(o=arguments,r=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(h,t),p(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=r=f=void 0},T.flush=function(){return void 0===f?a:w(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=a.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var S=document.querySelector(".feedback-form"),O=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea");console.log(S),console.log(O),console.log(h);var w,T,x={},k=e(t)((function(e){x.email=O.value,x.message=h.value,localStorage.setItem("feedback-form",JSON.stringify(x))}),500);S.addEventListener("submit",(function(e){e.preventDefault(),console.log("e-mail: ".concat(O.value,", message: ").concat(h.value)),localStorage.getItem("feedback-form")})),O.addEventListener("input",k),h.addEventListener("input",k),w=localStorage.getItem("feedback-form"),(T=JSON.parse(w))&&(O.value=T.email||"",h.value=T.message||"")}();
//# sourceMappingURL=03-feedback.b9c96612.js.map