!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,u,f,a,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,a=setTimeout(O,t),d?b(e):f}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=g();if(S(e))return h(e);a=setTimeout(O,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function h(e){return a=void 0,m&&r?b(e):(r=i=void 0,f)}function w(){var e=g(),n=S(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return j(c);if(s)return a=setTimeout(O,t),b(c)}return void 0===a&&(a=setTimeout(O,t)),f}return t=T(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(T(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},w.flush=function(){return void 0===a?f:h(g())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),formInput:document.querySelector(".feedback-form input"),formTextarea:document.querySelector(".feedback-form textarea")},S="feedback-form-state",O={},h=localStorage.getItem(S),w=JSON.parse(h);j.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(S),h?console.log(w):console.log(O)})),j.form.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(O))}),1e3)),function(){h&&w.email&&(j.formInput.value=w.email);h&&w.message&&(j.formTextarea.value=w.message)}()}();
//# sourceMappingURL=03-feedback.0728a0bf.js.map
