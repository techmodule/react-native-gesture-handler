/*! For license information please see 2.c2ae38fc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{207:function(e,t,o){"use strict";t.a=function(){return null}},209:function(e,t,o){"use strict";var r=o(0),n=o.n(r);class a extends r.PureComponent{constructor(e){super(e),this.$=n.a.createRef(),this._=n.a.createRef()}render(){return n.a.createElement("span",{ref:this.$},n.a.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(o.bind(null,233)).then(({render:t})=>{t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))})}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}t.a=a},212:function(e,t,o){var r=o(6),n=o(223),a=o(25).f,i=o(214).f,c=o(72),l=o(80),s=r.RegExp,d=s,u=s.prototype,h=/a/g,f=/a/g,p=new s(h)!==h;if(o(11)&&(!p||o(18)((function(){return f[o(3)("match")]=!1,s(h)!=h||s(f)==f||"/a/i"!=s(h,"i")})))){s=function(e,t){var o=this instanceof s,r=c(e),a=void 0===t;return!o&&r&&e.constructor===s&&a?e:n(p?new d(r&&!a?e.source:e,t):d((r=e instanceof s)?e.source:e,r&&a?l.call(e):t),o?this:u,s)};for(var g=function(e){e in s||a(s,e,{configurable:!0,get:function(){return d[e]},set:function(t){d[e]=t}})},v=i(d),b=0;v.length>b;)g(v[b++]);u.constructor=s,s.prototype=u,o(13)(r,"RegExp",s)}o(86)("RegExp")},213:function(e,t,o){"use strict";var r=o(38);o.d(t,"a",(function(){return r.d})),o.d(t,"b",(function(){return r.e}))},215:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(0),i=h(a),c=h(o(200)),l=h(o(15)),s=h(o(230)),d=h(o(231)),u=o(232);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleClick=o.handleClick.bind(o),o.handleTouchStart=o.handleTouchStart.bind(o),o.handleTouchMove=o.handleTouchMove.bind(o),o.handleTouchEnd=o.handleTouchEnd.bind(o),o.handleFocus=o.handleFocus.bind(o),o.handleBlur=o.handleBlur.bind(o),o.previouslyChecked=!(!e.checked&&!e.defaultChecked),o.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var o=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:o})}},{key:"handleTouchStart",value:function(e){this.startX=(0,u.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var o=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>o?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<o&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var o=this.props.icons;return o?void 0===o[e]?t.defaultProps.icons[e]:o[e]:null}},{key:"render",value:function(){var e=this,t=this.props,o=t.className,n=(t.icons,function(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}(t,["className","icons"])),a=(0,c.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},o);return i.default.createElement("div",{className:a,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",r({},n,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(a.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:i.default.createElement(s.default,null),unchecked:i.default.createElement(d.default,null)}},f.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},223:function(e,t,o){var r=o(12),n=o(224).set;e.exports=function(e,t,o){var a,i=t.constructor;return i!==o&&"function"==typeof i&&(a=i.prototype)!==o.prototype&&r(a)&&n&&n(e,a),e}},224:function(e,t,o){var r=o(12),n=o(8),a=function(e,t){if(n(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=o(28)(Function.call,o(217).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,o){return a(e,o),t?e.__proto__=o:r(e,o),e}}({},!1):void 0),check:a}},230:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=o(0),a=(r=n)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},a.default.createElement("title",null,"switch-check"),a.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},231:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=o(0),a=(r=n)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},a.default.createElement("title",null,"switch-x"),a.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},232:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var o=t[0];return{x:o.clientX,y:o.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}},233:function(e,t,o){"use strict";o.r(t),o.d(t,"render",(function(){return E}));var r=window.document,n=window.Math,a=window.HTMLElement,i=window.XMLHttpRequest,c=function(e){return function(t,o,r){var n=e.createElement(t);if(null!=o)for(var a in o){var i=o[a];null!=i&&(null!=n[a]?n[a]=i:n.setAttribute(a,i))}if(null!=r)for(var c=0,l=r.length;c<l;c++){var s=r[c];n.appendChild("string"==typeof s?e.createTextNode(s):s)}return n}},l=c(r),s=function(e,t){return{}.hasOwnProperty.call(e,t)},d="github.com",u=i&&"prototype"in i&&"withCredentials"in i.prototype,h=u&&a&&"attachShadow"in a.prototype&&!("prototype"in a.prototype.attachShadow),f=function(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent("on"+t,o)},p=function(e,t,o){e.removeEventListener?e.removeEventListener(t,o,!1):e.detachEvent("on"+t,o)},g={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;border-color:#1f2327;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-position:-0.5em;border-color:#1b1f23;border-color:rgba(27,31,35,.5);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;border-color:#1a1d21;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},v=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+g[s(g,t)?t:e]+"}"},b=function(e){if(null==e)return g.light;var t=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.decodeURIComponent);for(var n={},a=e.split(t),i=0,c=a.length;i<c;i++){var l=a[i];if(""!==l){var s=l.split(o);n[r(s[0])]=null!=s[1]?r(s.slice(1).join(o)):void 0}}return n}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return g[s(g,t["no-preference"])?t["no-preference"]:"light"]+v("light",t.light)+v("dark",t.dark)},m={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'},heart:{width:12,height:16,path:'<path fill-rule="evenodd" d="M8.727 3C7.091 3 6.001 4.65 6.001 4.65S4.909 3 3.273 3C1.636 3 0 4.1 0 6.3 0 9.6 6 14 6 14s6-4.4 6-7.7C12 4.1 10.364 3 8.727 3z"></path>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>'},"repo-template":{width:14,height:16,path:'<path fill-rule="evenodd" d="M12 8V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h2v2l1.5-1.5L6 16v-4H3v1H1v-2h7v-1H2V1h9v7h1zM4 2H3v1h1V2zM3 4h1v1H3V4zm1 2H3v1h1V6zm0 3H3V8h1v1zm6 3H8v2h2v2h2v-2h2v-2h-2v-2h-2v2z"></path>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path>'}},k={},w=function(e,t){var o=k[e]||(k[e]=[]);if(!(o.push(t)>1)){var r=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete k[e];t=o.shift();)t.apply(null,arguments)}));if(u){var n=new i;f(n,"abort",r),f(n,"error",r),f(n,"load",(function(){var e;try{e=JSON.parse(n.responseText)}catch(t){return void r(t)}r(200!==n.status,e)})),n.open("GET",e),n.send()}else{var a=this||window;a._=function(e){a._=null,r(200!==e.meta.status,e.data)};var l=c(a.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),s=function(){a._&&a._({meta:{}})};f(l,"load",s),f(l,"error",s),l.readyState&&function(e,t,o){var r=function(n){if(t.test(e.readyState))return p(e,"readystatechange",r),o(n)};f(e,"readystatechange",r)}(l,/de|m/,s),a.document.getElementsByTagName("head")[0].appendChild(l)}}},y=function(e,t,o){var r=c(e.ownerDocument),n=e.appendChild(r("style",{type:"text/css"})),a="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+b(t["data-color-scheme"]);n.styleSheet?n.styleSheet.cssText=a:n.appendChild(e.ownerDocument.createTextNode(a));var i,l,u=r("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:(i=t["data-icon"],l=/^large$/i.test(t["data-size"])?16:14,i=(""+i).toLowerCase().replace(/^octicon-/,""),s(m,i)||(i="mark-github"),'<svg viewBox="0 0 '+m[i].width+" "+m[i].height+'" class="octicon octicon-'+i+'" style="width: '+l*m[i].width/m[i].height+"px; height: "+l+'px;" aria-hidden="true">'+m[i].path+"</svg>")},[" ",r("span",{},[t["data-text"]||""])]),h=e.appendChild(r("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" widget-lg":"")},[u])),f=u.hostname.replace(/\.$/,"");if(f.length<d.length||("."+f).substring(f.length-d.length)!=="."+d)return u.href="#",u.target="_self",void o(h);var p=(" /"+u.pathname).split(/\/+/);if(((f===d||f==="gist."+d)&&"archive"===p[3]||f===d&&"releases"===p[3]&&"download"===p[4]||f==="codeload."+d)&&(u.target="_top"),/^true$/i.test(t["data-show-count"])&&f===d){var g,v;if(!p[2]&&p[1])g=v="followers";else if(!p[3]&&p[2])v="stargazers_count",g="stargazers";else if(p[4]||"subscription"!==p[3])if(p[4]||"fork"!==p[3]){if("issues"!==p[3])return void o(h);v="open_issues_count",g="issues"}else v="forks_count",g="network/members";else v="subscribers_count",g="watchers";var k=p[2]?"/repos/"+p[1]+"/"+p[2]:"/users/"+p[1];w.call(this,"https://api.github.com"+k,(function(e,t){if(!e){var n=t[v];h.appendChild(r("a",{className:"social-count",href:t.html_url+"/"+g,rel:"noopener",target:"_blank","aria-label":n+" "+v.replace(/_count$/,"").replace("_"," ").slice(0,n<2?-1:void 0)+" on GitHub"},[(""+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}o(h)}))}else o(h)},x=window.devicePixelRatio||1,C=function(e){return(x>1?n.ceil(n.round(e*x)/x*2)/2:n.ceil(e))||0},_=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},E=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},o=["icon","color-scheme","text","size","show-count"],r=0,n=o.length;r<n;r++){var a="data-"+o[r];t[a]=e.getAttribute(a)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),h){var o=l("span");y(o.attachShadow({mode:"closed"}),e,(function(){t(o)}))}else{var a=l("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});_(a,[0,0]),a.style.border="none";var i=function(){var o,c=a.contentWindow;try{o=c.document.body}catch(l){return void r.body.appendChild(a.parentNode.removeChild(a))}p(a,"load",i),y.call(c,o,e,(function(o){var r=function(e){var t=e.offsetWidth,o=e.offsetHeight;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=n.max(t,C(r.width)),o=n.max(o,C(r.height))}return[t,o]}(o);a.parentNode.removeChild(a),function(e,t,o){var r=function(n){return p(e,t,r),o(n)};f(e,t,r)}(a,"load",(function(){_(a,r)})),a.src="https://unpkg.com/github-buttons@2.9.0/dist/buttons.html#"+(a.name=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.encodeURIComponent);var n=[];for(var a in e){var i=e[a];null!=i&&n.push(r(a)+o+r(i))}return n.join(t)}(e)),t(a)}))};f(a,"load",i),r.body.appendChild(a)}}}}]);