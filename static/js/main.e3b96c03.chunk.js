(window["webpackJsonp@fseehawer/react-circular-slider"]=window["webpackJsonp@fseehawer/react-circular-slider"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),i=(a(14),a(1)),c=a(4),s=a(8),u=a(7);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m=function(e,t){switch(t.type){case"init":case"setKnobPosition":return p({},e,{},t.payload);case"onMouseDown":case"onMouseUp":case"setInitialKnobPosition":return p({},e,{},t.payload);default:throw new Error}},f=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=Object(n.useRef)(null);Object(n.useEffect)((function(){r.current=t}),[t]),Object(n.useEffect)((function(){if(a&&a.addEventListener){var t=function(e){return r.current(e)};return a.addEventListener(e,t,{passive:!1}),function(){a.removeEventListener(e,t)}}}),[e,a])},b=function(e){var t=e.isDragging,a=e.knobPosition,o=e.knobColor,l=e.knobRadius,c=void 0===l?12:l,s=e.knobSize,u=void 0===s?36:s,d=e.onMouseDown,p=e.children,m=i.a.create({knob:{position:"absolute",left:"-".concat(u/2,"px"),top:"-".concat(u/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{animationDuration:"1500ms",transformOrigin:"50% 50%",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:[{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}}]}});return r.a.createElement("div",{style:{transform:"translate(".concat(a.x,"px, ").concat(a.y,"px)")},className:Object(i.b)(m.knob,t&&m.dragging),onMouseDown:d,onTouchStart:d},r.a.createElement("svg",{width:"".concat(u,"px"),height:"".concat(u,"px"),viewBox:"0 0 ".concat(u," ").concat(u)},r.a.createElement("circle",{className:Object(i.b)(m.animation,t&&m.pause),fill:o,fillOpacity:"0.2",stroke:"none",cx:u/2,cy:u/2,r:u/2}),r.a.createElement("circle",{fill:o,stroke:"none",cx:u/2,cy:u/2,r:c}),p||r.a.createElement(n.Fragment,null,r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"}))))},g=function(e){var t=e.labelColor,a=e.labelFontSize,n=e.valueFontSize,o=e.appendToValue,l=e.prependToValue,c=e.verticalOffset,s=e.labelHide,u=e.label,d=e.value,p=i.a.create({labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),userSelect:"none",zIndex:1},value:{fontSize:"".concat(n),marginBottom:"calc(".concat(c,")"),position:"relative"},appended:{position:"absolute",right:"0",top:0,transform:"translate(100%, 0)"},prepended:{position:"absolute",left:"0",top:0,transform:"translate(-100%, 0)"},hide:{display:"none"}});return r.a.createElement("div",{className:Object(i.b)(p.labels,s&&p.hide)},r.a.createElement("div",{style:{fontSize:a}},u),r.a.createElement("div",{className:Object(i.b)(p.value)},r.a.createElement("code",null,r.a.createElement("span",{className:Object(i.b)(p.prepended)},l),d,r.a.createElement("span",{className:Object(i.b)(p.appended)},o))))},h=function(e){var t=e.width,a=e.label,n=e.direction,o=e.strokeDasharray,l=e.strokeDashoffset,c=e.progressColorFrom,s=e.progressColorTo,u=e.trackColor,d=e.progressSize,p=e.trackSize,m=e.svgFullPath,f=e.radiansOffset,b=e.progressLineCap,g=i.a.create({svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(f,"rad) ").concat(-1===n&&"scale(-1, 1)"),transformOrigin:"center center"}});return r.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",className:Object(i.b)(g.svg)},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:a,x1:"100%",x2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:c}),r.a.createElement("stop",{offset:"100%",stopColor:s}))),r.a.createElement("circle",{strokeWidth:p,fill:"none",stroke:u,cx:t/2,cy:t/2,r:t/2}),r.a.createElement("path",{className:Object(i.b)(g.path),ref:m,strokeDasharray:o,strokeDashoffset:l,strokeWidth:d,strokeLinecap:"round"!==b?"butt":"round",fill:"none",stroke:"url(#".concat(a,")"),d:"\n                        M ".concat(t/2,", ").concat(t/2,"\n                        m 0, -").concat(t/2,"\n                        a ").concat(t/2,",").concat(t/2," 0 0,1 0,").concat(t,"\n                        a -").concat(t/2,",-").concat(t/2," 0 0,1 0,-").concat(t,"\n                    ")}))},v="ontouchstart"in window,y={DOWN:v?"touchstart":"mousedown",UP:v?"touchend":"mouseup",MOVE:v?"touchmove":"mousemove"},E={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},O=function(e){return e<0?-1:1},w=function(e){return e*Math.PI/180},k=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a},x=function(e){var t=e.current.getBoundingClientRect(),a=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+a}},C=i.a.create({circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1}}),j=Object(n.memo)((function(e){var t=e.label,a=void 0===t?"ANGLE":t,o=e.width,l=void 0===o?280:o,u=e.direction,d=void 0===u?1:u,p=e.min,v=void 0===p?0:p,j=e.max,F=void 0===j?360:j,S=e.knobColor,P=void 0===S?"#4e63ea":S,z=e.knobPosition,D=void 0===z?"top":z,I=e.labelColor,M=void 0===I?"#272b77":I,T=e.labelFontSize,N=void 0===T?"1rem":T,R=e.valueFontSize,V=void 0===R?"4rem":R,L=e.appendToValue,A=void 0===L?"":L,B=e.prependToValue,K=void 0===B?"":B,U=e.verticalOffset,H=void 0===U?"2rem":U,W=e.hideLabelValue,X=void 0!==W&&W,Y=e.progressColorFrom,G=void 0===Y?"#80C3F3":Y,J=e.progressColorTo,$=void 0===J?"#4990E2":J,_=e.progressSize,Q=void 0===_?6:_,Z=e.trackColor,q=void 0===Z?"#DDDEFB":Z,ee=e.trackSize,te=void 0===ee?6:ee,ae=e.data,ne=void 0===ae?[]:ae,re=e.dataIndex,oe=void 0===re?0:re,le=e.progressLineCap,ie=void 0===le?"round":le,ce=e.children,se=e.onChange,ue=void 0===se?function(e){}:se,de={mounted:!1,isDragging:!1,width:l,radius:l/2,knobPosition:D,label:0,data:ne,radians:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0},pe=Object(n.useReducer)(m,de),me=Object(s.a)(pe,2),fe=me[0],be=me[1],ge=Object(n.useRef)(null),he=Object(n.useRef)(null),ve=Object(n.useCallback)((function(e){var t=fe.radius,a=e+E[D],n=(a>0?a:2*Math.PI+a)*(360/(2*Math.PI)),r=n/360*fe.dashFullArray;n=-1===O(d)?360-n:n;var o=(fe.data.length-1)/360,l=Math.floor(n*o);fe.data[l]!==fe.label&&ue(fe.data[l]),be({type:"setKnobPosition",payload:{dashFullOffset:-1===O(d)?r:fe.dashFullArray-r,label:fe.data[l],knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}}})}),[fe.dashFullArray,fe.radius,fe.data,fe.label,D,d,ue]),ye=Object(n.useCallback)((function(e){if(fe.isDragging){var t;e.preventDefault(),"touchmove"===e.type&&(t=e.changedTouches[0]);var a=("touchmove"===e.type?t.pageX:e.pageX)-(x(ge).left+fe.radius),n=("touchmove"===e.type?t.pageY:e.pageY)-(x(ge).top+fe.radius),r=Math.atan2(n,a);ve(r)}}),[fe.isDragging,fe.radius,ve]);return Object(n.useEffect)((function(){be({type:"init",payload:{mounted:!0,data:fe.data.length?Object(c.a)(fe.data):Object(c.a)(k(v,F)),dashFullArray:he.current.getTotalLength?he.current.getTotalLength():0}})}),[F,v]),Object(n.useEffect)((function(){var e=fe.data.length,t=oe>e-1?e-1:oe;be({type:"setInitialKnobPosition",payload:{radians:Math.PI/2-E[fe.knobPosition]}});var a=.005;if(t&&e){var n=360/e,r=O(d)*t*n,o=w(r)-E[fe.knobPosition];return a=w(n)/2,ve(o+a*O(d))}ve(-E[fe.knobPosition]+a*O(d))}),[fe.dashFullArray,fe.knobPosition,fe.data.length,oe,d]),f(y.MOVE,ye),f(y.UP,(function(){be({type:"onMouseUp",payload:{isDragging:!1}})})),r.a.createElement("div",{className:Object(i.b)(C.circularSlider,fe.mounted&&C.mounted),ref:ge},r.a.createElement(h,{width:l,label:a,direction:d,strokeDasharray:fe.dashFullArray,strokeDashoffset:fe.dashFullOffset,svgFullPath:he,progressSize:Q,progressColorFrom:G,progressColorTo:$,progressLineCap:ie,trackColor:q,trackSize:te,radiansOffset:fe.radians}),r.a.createElement(b,{isDragging:fe.isDragging,knobPosition:{x:fe.knob.x,y:fe.knob.y},knobColor:P,onMouseDown:function(){be({type:"onMouseDown",payload:{isDragging:!0}})}},ce),r.a.createElement(g,{label:a,labelColor:M,labelFontSize:N,verticalOffset:H,valueFontSize:V,appendToValue:A,prependToValue:K,hideLabelValue:X,value:"".concat(fe.label)}))}));function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var P=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M25.383,290.5c-7.2-77.5,25.9-147.7,80.8-192.3c21.4-17.4,53.4-2.5,53.4,25l0,0c0,10.1-4.8,19.4-12.6,25.7    c-38.9,31.7-62.3,81.7-56.6,136.9c7.4,71.9,65,130.1,136.8,138.1c93.7,10.5,173.3-62.9,173.3-154.5c0-48.6-22.5-92.1-57.6-120.6    c-7.8-6.3-12.5-15.6-12.5-25.6l0,0c0-27.2,31.5-42.6,52.7-25.6c50.2,40.5,82.4,102.4,82.4,171.8c0,126.9-107.8,229.2-236.7,219.9    C122.183,481.8,35.283,396.9,25.383,290.5z M244.883,0c-18,0-32.5,14.6-32.5,32.5v149.7c0,18,14.6,32.5,32.5,32.5    s32.5-14.6,32.5-32.5V32.5C277.383,14.6,262.883,0,244.883,0z","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:"#FFFFFF"})))),z=function(e){var t=e.svgRef,a=e.title,n=S(e,["svgRef","title"]);return r.a.createElement("svg",F({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 489.888 489.888",style:{enableBackground:"new 0 0 489.888 489.888"},xmlSpace:"preserve",width:"512px",height:"512px",className:"",ref:t},n),a?r.a.createElement("title",null,a):null,P)},D=r.a.forwardRef((function(e,t){return r.a.createElement(z,F({svgRef:t},e))}));a.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var T=r.a.createElement("g",null),N=r.a.createElement("g",null),R=r.a.createElement("g",null),V=r.a.createElement("g",null),L=r.a.createElement("g",null),A=r.a.createElement("g",null),B=r.a.createElement("g",null),K=r.a.createElement("g",null),U=r.a.createElement("g",null),H=r.a.createElement("g",null),W=r.a.createElement("g",null),X=r.a.createElement("g",null),Y=r.a.createElement("g",null),G=r.a.createElement("g",null),J=r.a.createElement("g",null),$=function(e){var t=e.svgRef,a=e.title,n=M(e,["svgRef","title"]);return r.a.createElement("svg",I({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 473.931 473.931",style:{enableBackground:"new 0 0 473.931 473.931"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("circle",{style:{fill:"#FFC10E"},cx:236.966,cy:236.966,r:236.966}),r.a.createElement("path",{style:{fill:"#333333"},d:"M81.391,237.127c0,85.911,69.649,155.56,155.56,155.56c85.915,0,155.567-69.649,155.567-155.56 H81.391z"}),r.a.createElement("path",{style:{fill:"#CA2027"},d:"M150.452,298.705c0,47.771,38.731,86.498,86.498,86.498c47.775,0,86.502-38.731,86.502-86.498 H150.452z"}),r.a.createElement("g",null,r.a.createElement("circle",{style:{fill:"#333333"},cx:164.937,cy:155.231,r:37.216}),r.a.createElement("circle",{style:{fill:"#333333"},cx:305.664,cy:155.231,r:37.216})),T,N,R,V,L,A,B,K,U,H,W,X,Y,G,J)},_=r.a.forwardRef((function(e,t){return r.a.createElement($,I({svgRef:t},e))})),Q=(a.p,function(){var e=i.a.create({wrapper:{margin:"2rem"},h3:{margin:"3rem 0 2rem 0"},pre:{fontSize:"0.9rem",borderRadius:"0.3rem",backgroundColor:"#eeeeee",padding:"0.5rem"},slider:{padding:"0 0 0.5rem 0"}});return r.a.createElement("div",{className:Object(i.b)(e.wrapper)},r.a.createElement("h3",{className:Object(i.b)(e.h3)},'Anticlockwise rotation with the knob positioned to the right and "\xb0" appended to the value:'),r.a.createElement("div",{className:Object(i.b)(e.slider)},r.a.createElement(j,{direction:-1,knobPosition:"right",appendToValue:"\xb0"})),r.a.createElement("pre",{className:Object(i.b)(e.pre)},'<CircularSlider\n    min={0}\n    max={360}\n    direction={-1}\n    knobPosition="right"\n    appendToValue="\xb0"\n/>'),r.a.createElement("h3",{className:Object(i.b)(e.h3)},'An initial value of 20, "$" prepended and "K" appended to the value with a custom knob icon:'),r.a.createElement("div",{className:Object(i.b)(e.slider)},r.a.createElement(j,{label:"savings",min:0,max:100,dataIndex:20,prependToValue:"$",appendToValue:"K",labelColor:"#005a58",knobColor:"#005a58",progressColorFrom:"#00bfbd",progressColorTo:"#009c9a",progressSize:24,trackColor:"#eeeeee",trackSize:24},r.a.createElement(D,{x:"9",y:"8",width:"18px",height:"18px"}))),r.a.createElement("pre",{className:Object(i.b)(e.pre)},'import { ReactComponent as PowerIcon } from \'./assets/power.svg\';\n.\n.\n.\n<CircularSlider\n    label="savings"\n    min={0}\n    max={100}\n    dataIndex={20}\n    prependToValue="$"\n    appendToValue="K"\n    labelColor="#005a58"\n    knobColor="#005a58"\n    progressColorFrom="#00bfbd"\n    progressColorTo="#005a58"\n    progressSize={24}\n    trackColor="#eeeeee"\n    trackSize={24}\n>\n    <PowerIcon x="9" y="8" width="18px" height="18px" />\n</CircularSlider>'),r.a.createElement("h3",{className:Object(i.b)(e.h3)},"A flat line cap with the track size smaller than the progress track size and a smiley knob:"),r.a.createElement("div",{className:Object(i.b)(e.slider)},r.a.createElement(j,{label:"Alphabet",progressLineCap:"flat",dataIndex:1,width:250,labelColor:"#212121",valueFontSize:"6rem",verticalOffset:"1rem",knobColor:"#212121",progressColorFrom:"#ff8500",progressColorTo:"#a15400",progressSize:8,trackColor:"#eeeeee",trackSize:4,data:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")},r.a.createElement(_,{x:"9",y:"9",width:"18px",height:"18px"}))),r.a.createElement("pre",{className:Object(i.b)(e.pre)},'\nimport { ReactComponent as EmojiIcon } from \'./assets/emoji.svg\';\n.\n.\n.\n<CircularSlider\n    width={200}\n    progressLineCap="flat"\n    dataIndex={1}\n    label="Alphabet"\n    data=["A","B","C"]//...\n    labelColor="#212121"\n    valueFontSize="6rem"\n    verticalOffset="1rem"\n    knobColor="#212121"\n    progressColorFrom="#ff8500"\n    progressColorTo="#a15400"\n    progressSize={8}\n    trackColor="#eeeeee"\n    trackSize={4}\n>\n    <EmojiIcon x="9" y="9" width="18px" height="18px" />\n</CircularSlider>'))});l.a.render(r.a.createElement(Q,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.e3b96c03.chunk.js.map