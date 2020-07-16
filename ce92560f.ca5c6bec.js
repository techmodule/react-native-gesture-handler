(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(9),o=(n(0),n(191)),i={id:"interactions",title:"Cross handler interactions",sidebar_label:"Cross handler interactions"},c={id:"interactions",title:"Cross handler interactions",description:'Gesture handlers can "communicate" with each other in order to allow for defining complex gesture interactions and to control how they activate in certain scenarios.',source:"@site/docs/interactions.md",permalink:"/react-native-gesture-handler/docs/next/interactions",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/interactions.md",version:"next",sidebar_label:"Cross handler interactions",sidebar:"docs",previous:{title:"Handler State",permalink:"/react-native-gesture-handler/docs/next/state"},next:{title:"Running Example App",permalink:"/react-native-gesture-handler/docs/next/example"}},s=[{value:"Simultaneous recognition",id:"simultaneous-recognition",children:[{value:"Use cases",id:"use-cases",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Awaiting other handlers",id:"awaiting-other-handlers",children:[{value:"Use cases",id:"use-cases-1",children:[]},{value:"Example",id:"example-1",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Gesture handlers can "communicate" with each other in order to allow for defining complex gesture interactions and to control how they ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#active"}),"activate")," in certain scenarios."),Object(o.b)("p",null,"There are two means of such a control at the moment described in the sections below.\nIn each of the cases it is necessary to provide a reference of one handler as a property to the other.\nGesture handler relies on ref objects created using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),Object(o.b)("inlineCode",{parentName:"a"},"React.createRef()"))," and introduced in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/blog/2018/03/29/react-v-16-3.html#createref-api"}),"React 16.3"),"."),Object(o.b)("h2",{id:"simultaneous-recognition"},"Simultaneous recognition"),Object(o.b)("p",null,"By default at a given time only one gesture handler is allowed to be in an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#active"}),"active")," state.\nSo when a gesture handler recognizes a gesture, it ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#cancelled"}),"cancels")," all the other handlers in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#began"}),"began")," and prevents any new handlers from receiving a stream of touch events for as long as it is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#active"}),"active"),"."),Object(o.b)("p",null,"This behavior can be altered using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handler-common#simultaneousHandlers"}),Object(o.b)("inlineCode",{parentName:"a"},"simultaneousHandlers"))," property that is available for all type of handlers.\nThe property takes a ref or an array of refs to other handlers.\nHandlers connected this way will be allowed to be in an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#active"}),"active")," state at the same time."),Object(o.b)("h3",{id:"use-cases"},"Use cases"),Object(o.b)("p",null,"Simultaneous recognition needs to be used when implementing a photo preview component that allows for zooming in (scaling) the photo, rotating the photo and panning it while it is zoomed in.\nIn this case we would use a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handler-pinch"}),Object(o.b)("inlineCode",{parentName:"a"},"PinchGestureHandler")),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handler-rotation"}),Object(o.b)("inlineCode",{parentName:"a"},"RotationGestureHandler"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handler-pan"}),Object(o.b)("inlineCode",{parentName:"a"},"PanGestureHandler"))," that all would have to recognize simultaneously."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/Example/scaleAndRotate/index.js"}),'"Scale, rotate & tilt" example')," from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://expo.io/@sauzy3450/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class PinchableBox extends React.Component {\n  // ...take a look on full implementation in an Example app\n  render() {\n    const imagePinch = React.createRef();\n    const imageRotation = React.createRef();\n    return (\n      <RotationGestureHandler\n        ref={imageRotation}\n        simultaneousHandlers={imagePinch}\n        onGestureEvent={this._onRotateGestureEvent}\n        onHandlerStateChange={this._onRotateHandlerStateChange}>\n        <Animated.View>\n          <PinchGestureHandler\n            ref={imagePinch}\n            simultaneousHandlers={imageRotation}\n            onGestureEvent={this._onPinchGestureEvent}\n            onHandlerStateChange={this._onPinchHandlerStateChange}>\n            <Animated.View style={styles.container} collapsable={false}>\n              <Animated.Image\n                style={[\n                  styles.pinchableImage,\n                  {\n                    /* events-related transformations */\n                  },\n                ]}\n              />\n            </Animated.View>\n          </PinchGestureHandler>\n        </Animated.View>\n      </RotationGestureHandler>\n    );\n  }\n}\n")),Object(o.b)("h2",{id:"awaiting-other-handlers"},"Awaiting other handlers"),Object(o.b)("h3",{id:"use-cases-1"},"Use cases"),Object(o.b)("p",null,"A good example where awaiting is necessary is when we want to have a single and double tap handlers registered for one view (button).\nIn such a case we need to make single tap handler await double tap.\nOtherwise if we try to perform a double tap the single tap handler will fire just after we hit the button for the first time and therefore ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#cancelled"}),"cancel")," double tap handler."),Object(o.b)("h3",{id:"example-1"},"Example"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/Example/multitap/index.js"}),'"Multitap" example')," from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://expo.io/@sauzy3450/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const doubleTap = React.createRef();\nconst PressBox = () => (\n  <TapGestureHandler\n    onHandlerStateChange={({ nativeEvent }) =>\n      nativeEvent.state === State.ACTIVE && Alert.alert('Single tap!')\n    }\n    waitFor={doubleTap}>\n    <TapGestureHandler\n      ref={doubleTap}\n      onHandlerStateChange={({ nativeEvent }) =>\n        nativeEvent.state === State.ACTIVE && Alert.alert(\"You're so fast\")\n      }\n      numberOfTaps={2}>\n      <View style={styles.box} />\n    </TapGestureHandler>\n  </TapGestureHandler>\n);\n")))}d.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,b=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);