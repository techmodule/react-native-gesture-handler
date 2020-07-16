(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(9),i=(a(0),a(191)),o={id:"handler-tap",title:"TapGestureHandler",sidebar_label:"TapGestureHandler"},c={id:"version-1.6.1/handler-tap",title:"TapGestureHandler",description:"A discrete gesture handler that recognizes tap (or many taps).",source:"@site/versioned_docs/version-1.6.1/handler-tap.md",permalink:"/react-native-gesture-handler/docs/handler-tap",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-1.6.1/handler-tap.md",version:"1.6.1",sidebar_label:"TapGestureHandler",sidebar:"version-1.6.1/docs",previous:{title:"PanGestureHandler",permalink:"/react-native-gesture-handler/docs/handler-pan"},next:{title:"LongPressGestureHandler",permalink:"/react-native-gesture-handler/docs/handler-longpress"}},l=[{value:"Properties",id:"properties",children:[{value:"<code>minPointers</code>",id:"minpointers",children:[]},{value:"<code>maxDurationMs</code>",id:"maxdurationms",children:[]},{value:"<code>maxDelayMs</code>",id:"maxdelayms",children:[]},{value:"<code>numberOfTaps</code>",id:"numberoftaps",children:[]},{value:"<code>maxDeltaX</code>",id:"maxdeltax",children:[]},{value:"<code>maxDeltaY</code>",id:"maxdeltay",children:[]},{value:"<code>maxDist</code>",id:"maxdist",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]},{value:"Example",id:"example",children:[]}],s={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A discrete gesture handler that recognizes tap (or many taps)."),Object(i.b)("p",null,"Tap gestures detect one or more fingers touching the screen briefly.\nThe fingers involved in these gestures must not move significantly from the initial touch points, and you can configure the number of times the fingers must touch the screen and allowable distance.\nFor example, you might configure tap gesture recognizers to detect single taps, double taps, or triple taps."),Object(i.b)("p",null,"For the handler to be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activated")," the specified number of fingers must tap the view a specified number of times in proper time and with short enough delay. When handler gets activated it will turn into ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#end"}),"END")," state immediately.\nThe handler will fail to recognize if the finger is moved further than the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#maxdist"}),"allowable distance"),"."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-common#properties"}),"set of properties inherited from base handler class"),". Below is a list of properties specific to ",Object(i.b)("inlineCode",{parentName:"p"},"TapGestureHandler")," component:"),Object(i.b)("h3",{id:"minpointers"},Object(i.b)("inlineCode",{parentName:"h3"},"minPointers")),Object(i.b)("p",null,"A number of fingers that is required to be placed before handler can ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activate"),". Should be a positive integer."),Object(i.b)("h3",{id:"maxdurationms"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDurationMs")),Object(i.b)("p",null,"Time expressed in milliseconds which defines how fast finger has to be released after touch."),Object(i.b)("h3",{id:"maxdelayms"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDelayMs")),Object(i.b)("p",null,"Time expressed in milliseconds which could pass before next tap if many taps are required"),Object(i.b)("h3",{id:"numberoftaps"},Object(i.b)("inlineCode",{parentName:"h3"},"numberOfTaps")),Object(i.b)("p",null,"A number of tap event required to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activate")," handler"),Object(i.b)("h3",{id:"maxdeltax"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDeltaX")),Object(i.b)("p",null,"When the finger travels the given distance expressed in points along X axis and handler hasn't yet ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activated")," it will fail recognizing the gesture."),Object(i.b)("h3",{id:"maxdeltay"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDeltaY")),Object(i.b)("p",null,"When the finger travels the given distance expressed in points along Y axis and handler hasn't yet ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activated")," it will fail recognizing the gesture."),Object(i.b)("h3",{id:"maxdist"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDist")),Object(i.b)("p",null,"When the finger travels the given distance expressed in points and handler hasn't yet ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activated")," it will fail recognizing the gesture."),Object(i.b)("h2",{id:"event-data"},"Event data"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-common#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",Object(i.b)("inlineCode",{parentName:"p"},"TapGestureHandler"),":"),Object(i.b)("h3",{id:"x"},Object(i.b)("inlineCode",{parentName:"h3"},"x")),Object(i.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),Object(i.b)("h3",{id:"y"},Object(i.b)("inlineCode",{parentName:"h3"},"y")),Object(i.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),Object(i.b)("h3",{id:"absolutex"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(i.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#x"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),Object(i.b)("h3",{id:"absolutey"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(i.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#y"}),Object(i.b)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/Example/multitap/index.js"}),"multitap example")," from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://expo.io/@sauzy3450/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"export class PressBox extends Component {\n  doubleTapRef = React.createRef();\n  render() {\n    return (\n      <TapGestureHandler\n        onHandlerStateChange={this._onSingleTap}\n        waitFor={this.doubleTapRef}>\n        <TapGestureHandler ref={this.doubleTapRef} numberOfTaps={2}>\n          <View style={styles.box} />\n        </TapGestureHandler>\n      </TapGestureHandler>\n    );\n  }\n}\n")))}d.isMDXComponent=!0},191:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return a?r.a.createElement(h,c(c({ref:t},s),{},{components:a})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);