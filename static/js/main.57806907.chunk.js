(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c={};t.r(c),t.d(c,"TEMPLATE",(function(){return h})),t.d(c,"ONE",(function(){return f})),t.d(c,"TWO",(function(){return p})),t.d(c,"THREE",(function(){return y})),t.d(c,"FOUR",(function(){return x})),t.d(c,"FIVE",(function(){return m})),t.d(c,"SIX",(function(){return k})),t.d(c,"SEVEN",(function(){return E})),t.d(c,"EIGHT",(function(){return g})),t.d(c,"NINE",(function(){return K})),t.d(c,"ZERO",(function(){return v})),t.d(c,"PLUS",(function(){return S})),t.d(c,"MINUS",(function(){return F})),t.d(c,"TIMES",(function(){return N})),t.d(c,"COMMA",(function(){return P})),t.d(c,"DIVIDE",(function(){return A})),t.d(c,"PERCENT",(function(){return C})),t.d(c,"NEGATE",(function(){return B})),t.d(c,"BACKSPACE",(function(){return L})),t.d(c,"EQUALS",(function(){return I})),t.d(c,"ALL_CLEAR",(function(){return T}));var r=t(1),a=t.n(r),s=t(9),i=t.n(s),o=t(3),l=(t(16),t(6)),u=(t(17),t(18),t(0));function j(e){var n=e.active,t=e.children,c=e.callback;return Object(u.jsx)("button",{onClick:function(){return c()},className:"toggle-button-half ".concat(n?"toggle-button-half--active":""),children:t})}function d(){var e=Object(r.useContext)(z),n=e.theme,t="light"===n?"dark":"light",c=Object(r.useContext)(Y),a=c.isFullScreen,s=c.setIsFullScreen;return Object(u.jsxs)("div",{className:"toggle-button",children:[Object(u.jsx)(j,{active:"dark"===n,callback:function(){return e.setTheme(t)},children:Object(u.jsx)("i",{className:"far fa-moon"})}),Object(u.jsx)(j,{active:a,callback:function(){s(!a)},children:Object(u.jsx)("i",{className:"fas fa-expand"})})]})}t(20);function b(e){var n=e.pressedKeys,t=e.prevPressedKeys;return Object(u.jsxs)("div",{className:"screen",children:[Object(u.jsx)("h3",{children:t.map((function(e,n){return a.a.cloneElement(e.appearance,{key:n})}))}),Object(u.jsx)("h1",{children:n.map((function(e,n){return a.a.cloneElement(e.appearance,{key:n})}))})]})}t(21),t(22);function O(e){var n="";return"normal"!==e.color&&(n="button--".concat(e.color)),Object(u.jsx)("button",{onClick:function(){return e.callback()},className:"button ".concat(n),children:e.children})}var h={id:"TEMPLATE",appearance:Object(u.jsx)("span",{}),mathFunction:"",isOperation:!1,canBePressedFirst:!0,keyStrings:[]},f={id:"ONE",appearance:Object(u.jsx)("span",{children:"1"}),mathFunction:"1",isOperation:!1,canBePressedFirst:!0,keyStrings:["1"]},p={id:"TWO",appearance:Object(u.jsx)("span",{children:"2"}),mathFunction:"2",isOperation:!1,canBePressedFirst:!0,keyStrings:["2"]},y={id:"THREE",appearance:Object(u.jsx)("span",{children:"3"}),mathFunction:"3",isOperation:!1,canBePressedFirst:!0,keyStrings:["3"]},x={id:"FOUR",appearance:Object(u.jsx)("span",{children:"4"}),mathFunction:"4",isOperation:!1,canBePressedFirst:!0,keyStrings:["4"]},m={id:"FIVE",appearance:Object(u.jsx)("span",{children:"5"}),mathFunction:"5",isOperation:!1,canBePressedFirst:!0,keyStrings:["5"]},k={id:"SIX",appearance:Object(u.jsx)("span",{children:"6"}),mathFunction:"6",isOperation:!1,canBePressedFirst:!0,keyStrings:["6"]},E={id:"SEVEN",appearance:Object(u.jsx)("span",{children:"7"}),mathFunction:"7",isOperation:!1,canBePressedFirst:!0,keyStrings:["7"]},g={id:"EIGHT",appearance:Object(u.jsx)("span",{children:"8"}),mathFunction:"8",isOperation:!1,canBePressedFirst:!0,keyStrings:["8"]},K={id:"NINE",appearance:Object(u.jsx)("span",{children:"9"}),mathFunction:"9",isOperation:!1,canBePressedFirst:!0,keyStrings:["9"]},v={id:"ZERO",appearance:Object(u.jsx)("span",{children:"0"}),mathFunction:"0",isOperation:!1,canBePressedFirst:!0,keyStrings:["0"]},S={id:"PLUS",appearance:Object(u.jsx)("i",{className:"fas fa-plus"}),mathFunction:"+",isOperation:!0,canBePressedFirst:!1,keyStrings:["+"]},F={id:"MINUS",appearance:Object(u.jsx)("i",{className:"fas fa-minus"}),mathFunction:"-",isOperation:!0,canBePressedFirst:!0,keyStrings:["-"]},N={id:"TIMES",appearance:Object(u.jsx)("i",{className:"fas fa-times"}),mathFunction:"*",isOperation:!0,canBePressedFirst:!1,keyStrings:["*"]},P={id:"COMMA",appearance:Object(u.jsx)("span",{children:","}),mathFunction:".",isOperation:!0,canBePressedFirst:!1,keyStrings:[",","."]},A={id:"DIVIDE",appearance:Object(u.jsx)("i",{className:"fas fa-divide"}),mathFunction:"/",isOperation:!0,canBePressedFirst:!1,keyStrings:["shift+7"]},C={id:"PERCENT",appearance:Object(u.jsx)("i",{className:"fas fa-percent"}),mathFunction:"/100",isOperation:!1,canBePressedFirst:!1,keyStrings:["shift+5"]},B={id:"NEGATE",appearance:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("i",{className:"fas fa-times"}),Object(u.jsx)("i",{className:"fas fa-minus"}),Object(u.jsx)("span",{children:"1"})]}),mathFunction:"*-1",isOperation:!1,canBePressedFirst:!1,keyStrings:["shift+1"]},L={id:"BACKSPACE",appearance:Object(u.jsx)("i",{className:"fas fa-undo"}),mathFunction:"",isOperation:!0,canBePressedFirst:!1,keyStrings:["backspace"]},I={id:"EQUALS",appearance:Object(u.jsx)("i",{className:"fas fa-equals"}),mathFunction:"",isOperation:!0,canBePressedFirst:!1,keyStrings:["shift+0","enter"]},T={id:"ALL_CLEAR",appearance:Object(u.jsx)("span",{children:"AC"}),mathFunction:"",isOperation:!0,canBePressedFirst:!1,keyStrings:["esc"]};function D(e){var n=e.onAddKey,t=e.onDeleteLastKey,c=e.onAllClear,r=e.onEqual;return Object(u.jsxs)("div",{className:"keyboard",children:[Object(u.jsx)(O,{callback:function(){return c()},color:"primary",children:Object(u.jsx)("span",{children:"AC"})}),Object(u.jsx)(O,{callback:function(){return n(B)},color:"primary",children:Object(u.jsx)("span",{children:"+/-"})}),Object(u.jsx)(O,{callback:function(){return n(C)},color:"primary",children:Object(u.jsx)("i",{className:"fas fa-percent"})}),Object(u.jsx)(O,{callback:function(){return n(A)},color:"secondary",children:Object(u.jsx)("i",{className:"fas fa-divide"})}),Object(u.jsx)(O,{callback:function(){return n(E)},color:"normal",children:Object(u.jsx)("span",{children:"7"})}),Object(u.jsx)(O,{callback:function(){return n(g)},color:"normal",children:Object(u.jsx)("span",{children:"8"})}),Object(u.jsx)(O,{callback:function(){return n(K)},color:"normal",children:Object(u.jsx)("span",{children:"9"})}),Object(u.jsx)(O,{callback:function(){return n(N)},color:"secondary",children:Object(u.jsx)("i",{className:"fas fa-times"})}),Object(u.jsx)(O,{callback:function(){return n(x)},color:"normal",children:Object(u.jsx)("span",{children:"4"})}),Object(u.jsx)(O,{callback:function(){return n(m)},color:"normal",children:Object(u.jsx)("span",{children:"5"})}),Object(u.jsx)(O,{callback:function(){return n(k)},color:"normal",children:Object(u.jsx)("span",{children:"6"})}),Object(u.jsx)(O,{callback:function(){return n(F)},color:"secondary",children:Object(u.jsx)("i",{className:"fas fa-minus"})}),Object(u.jsx)(O,{callback:function(){return n(f)},color:"normal",children:Object(u.jsx)("span",{children:"1"})}),Object(u.jsx)(O,{callback:function(){return n(p)},color:"normal",children:Object(u.jsx)("span",{children:"2"})}),Object(u.jsx)(O,{callback:function(){return n(y)},color:"normal",children:Object(u.jsx)("span",{children:"3"})}),Object(u.jsx)(O,{callback:function(){return n(S)},color:"secondary",children:Object(u.jsx)("i",{className:"fas fa-plus"})}),Object(u.jsx)(O,{callback:function(){return t()},color:"normal",children:Object(u.jsx)("i",{className:"fas fa-undo"})}),Object(u.jsx)(O,{callback:function(){return n(v)},color:"normal",children:Object(u.jsx)("span",{children:"0"})}),Object(u.jsx)(O,{callback:function(){return n(P)},color:"normal",children:Object(u.jsx)("span",{children:","})}),Object(u.jsx)(O,{callback:function(){return r()},color:"secondary",children:Object(u.jsx)("i",{className:"fas fa-equals"})})]})}var M=t(2),q=t.n(M);function R(e){var n=e.onAddKey,t=e.onDeleteLastKey,c=e.onAllClear,r=e.onEqual;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(q.a,{handleKeys:f.keyStrings,onKeyEvent:function(e,t){return n(f)}}),Object(u.jsx)(q.a,{handleKeys:p.keyStrings,onKeyEvent:function(e,t){return n(p)}}),Object(u.jsx)(q.a,{handleKeys:y.keyStrings,onKeyEvent:function(e,t){return n(y)}}),Object(u.jsx)(q.a,{handleKeys:x.keyStrings,onKeyEvent:function(e,t){return n(x)}}),Object(u.jsx)(q.a,{handleKeys:m.keyStrings,onKeyEvent:function(e,t){return n(m)}}),Object(u.jsx)(q.a,{handleKeys:k.keyStrings,onKeyEvent:function(e,t){return n(k)}}),Object(u.jsx)(q.a,{handleKeys:E.keyStrings,onKeyEvent:function(e,t){return n(E)}}),Object(u.jsx)(q.a,{handleKeys:g.keyStrings,onKeyEvent:function(e,t){return n(g)}}),Object(u.jsx)(q.a,{handleKeys:K.keyStrings,onKeyEvent:function(e,t){return n(K)}}),Object(u.jsx)(q.a,{handleKeys:v.keyStrings,onKeyEvent:function(e,t){return n(v)}}),Object(u.jsx)(q.a,{handleKeys:F.keyStrings,onKeyEvent:function(e,t){return n(F)}}),Object(u.jsx)(q.a,{handleKeys:A.keyStrings,onKeyEvent:function(e,t){return n(A)}}),Object(u.jsx)(q.a,{handleKeys:["all"],onKeyEvent:function(e,t){S.keyStrings.includes(t.key)&&n(S)}}),Object(u.jsx)(q.a,{handleKeys:["all"],onKeyEvent:function(e,t){N.keyStrings.includes(t.key)&&n(N)}}),Object(u.jsx)(q.a,{handleKeys:T.keyStrings,onKeyEvent:function(e,n){return c()}}),Object(u.jsx)(q.a,{handleKeys:I.keyStrings,onKeyEvent:function(e,n){return r()}}),Object(u.jsx)(q.a,{handleKeys:L.keyStrings,onKeyEvent:function(e,n){return t()}}),Object(u.jsx)(q.a,{handleKeys:B.keyStrings,onKeyEvent:function(e,t){return n(B)}}),Object(u.jsx)(q.a,{handleKeys:P.keyStrings,onKeyEvent:function(e,t){return n(P)}}),Object(u.jsx)(q.a,{handleKeys:C.keyStrings,onKeyEvent:function(e,t){return n(C)}})]})}function U(e){var n=e.onAddKey,t=e.onDeleteLastKey,c=e.onAllClear,r=e.onEqual;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(D,{onAddKey:n,onDeleteLastKey:t,onAllClear:c,onEqual:r}),Object(u.jsx)(R,{onAddKey:n,onDeleteLastKey:t,onAllClear:c,onEqual:r})]})}t(26);function V(){return Object(u.jsx)("div",{className:"bar"})}function G(e){var n=e.pressedKeys,t=e.prevPressedKeys,c=e.onAddKey,r=e.onDeleteLastKey,a=e.onAllClear,s=e.onEqual;return Object(u.jsxs)("div",{className:"casing",children:[Object(u.jsx)(d,{}),Object(u.jsx)(b,{pressedKeys:n,prevPressedKeys:t}),Object(u.jsxs)("div",{className:"casing__bottom",children:[Object(u.jsx)(U,{onAddKey:c,onDeleteLastKey:r,onAllClear:a,onEqual:s}),Object(u.jsx)(V,{})]})]})}var H=t(11),_=t(10),w=function(e){var n,t=e.split(""),r=[],s=[],i=Object(_.a)(t);try{for(i.s();!(n=i.n()).done;)for(var l=n.value,j=0,d=Object.entries(c);j<d.length;j++){var b=Object(o.a)(d[j],2)[1];b.mathFunction===l&&(r.push(a.a.cloneElement(b.appearance,{key:Math.random()})),s.push(b.mathFunction))}}catch(f){i.e(f)}finally{i.f()}var O=Object(H.a)({},h);return O.appearance=Object(u.jsx)(u.Fragment,{children:r}),O.mathFunction=s.join(""),O};function J(){var e=Object(r.useState)([v]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)([]),s=Object(o.a)(a,2),i=s[0],j=s[1],d=Q(X(t).reduce((function(e,n){return e+n.mathFunction}),"")).toString(),b=function(){j([]),c([v])};return Object(u.jsx)(G,{onAddKey:function(e){c(W(t,e))},onDeleteLastKey:function(){if(t.length<=1)b();else{var e=Object(l.a)(t);e.pop(),c(e)}},onAllClear:b,onEqual:function(){t.length<=1||(j([].concat(Object(l.a)(t),[I])),c([w(d)]))},pressedKeys:t,prevPressedKeys:i})}var Q=function(e){return 0===e.length?"":Function(";return ".concat(e))()},W=function(e,n){var t=Object(l.a)(e);return 0!==e.length||n.canBePressedFirst?1!==e.length||e[0].id!==v.id||n.isOperation?1===e.length&&e[0].id===F.id&&n.isOperation?t:e.length>=1&&e[e.length-1].isOperation&&n.isOperation?(t[t.length-1]=n,t):(t.push(n),t):[n]:t},X=function(e){var n=Object(l.a)(e);return 0===e.length?e:e[e.length-1].isOperation?(n.pop(),n):n},Z=t(8),z=a.a.createContext({theme:"light",setTheme:function(){}}),Y=a.a.createContext({});function $(){var e=Object(r.useState)("dark"),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(!1),s=Object(o.a)(a,2),i=s[0],l=s[1],j=Object(Z.b)();return Object(r.useEffect)((function(){i?j.enter():j.exit()}),[i]),Object(u.jsx)(Z.a,{handle:j,children:Object(u.jsx)("div",{className:"app","data-theme":t,children:Object(u.jsx)(z.Provider,{value:{theme:t,setTheme:c},children:Object(u.jsx)(Y.Provider,{value:{isFullScreen:i,setIsFullScreen:l},children:Object(u.jsx)(J,{})})})})})}i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)($,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.57806907.chunk.js.map