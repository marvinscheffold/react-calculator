(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c={};t.r(c),t.d(c,"TEMPLATE",(function(){return x})),t.d(c,"ONE",(function(){return y})),t.d(c,"TWO",(function(){return m})),t.d(c,"THREE",(function(){return k})),t.d(c,"FOUR",(function(){return g})),t.d(c,"FIVE",(function(){return E})),t.d(c,"SIX",(function(){return v})),t.d(c,"SEVEN",(function(){return K})),t.d(c,"EIGHT",(function(){return S})),t.d(c,"NINE",(function(){return F})),t.d(c,"ZERO",(function(){return N})),t.d(c,"PLUS",(function(){return P})),t.d(c,"MINUS",(function(){return A})),t.d(c,"TIMES",(function(){return C})),t.d(c,"COMMA",(function(){return B})),t.d(c,"DIVIDE",(function(){return L})),t.d(c,"PERCENT",(function(){return I})),t.d(c,"NEGATE",(function(){return T})),t.d(c,"BACKSPACE",(function(){return M})),t.d(c,"EQUALS",(function(){return D})),t.d(c,"ALL_CLEAR",(function(){return q}));var r=t(1),a=t.n(r),s=t(9),i=t.n(s),o=t(3),l=(t(15),t(5)),u=(t(16),t(17),t(0));function j(e){var n=e.active,t=e.children,c=e.callback;return Object(u.jsx)("button",{onClick:function(){return c()},className:"toggle-button-half ".concat(n?"toggle-button-half--active":""),children:t})}function d(){var e=Object(r.useContext)($),n=e.theme,t="light"===n?"dark":"light",c=Object(r.useContext)(ee),a=c.isFullScreen,s=c.setIsFullScreen;return Object(u.jsxs)("div",{className:"toggle-button",children:[Object(u.jsx)(j,{active:"dark"===n,callback:function(){return e.setTheme(t)},children:Object(u.jsx)("i",{className:"far fa-moon"})}),Object(u.jsx)(j,{active:a,callback:function(){s(!a)},children:Object(u.jsx)("i",{className:"fas fa-expand"})})]})}t(19);function b(e){var n=e.children,t=e.maxPercent,c=void 0===t?100:t,r=e.minPercent,a=e.changePerChar,s=e.startAtChar,i=h(c,r,a,void 0===s?0:s,O(n));return Object(u.jsx)("span",{style:{fontSize:"".concat(i,"%")},children:n})}var O=function(e){var n=0;return e.forEach((function(e){e.props.children?n+=e.props.children.length:n+=1})),n},h=function(e,n,t,c,r){var a=Math.max(0,r-c);return Math.max(n,e-t*a)};function f(e){var n=e.pressedKeys,t=e.prevPressedKeys;return Object(u.jsxs)("div",{className:"screen",children:[Object(u.jsx)("h3",{children:t.map((function(e,n){return a.a.cloneElement(e.appearance,{key:n})}))}),Object(u.jsx)("h1",{children:Object(u.jsx)(b,{minPercent:50,changePerChar:10,startAtChar:8,children:n.map((function(e,n){return a.a.cloneElement(e.appearance,{key:n})}))})})]})}t(20),t(21);function p(e){var n="";return"normal"!==e.color&&(n="button--".concat(e.color)),Object(u.jsx)("button",{onClick:function(){return e.callback()},className:"button ".concat(n),children:e.children})}var x={id:"TEMPLATE",appearance:Object(u.jsx)("span",{}),mathFunction:"",isOperation:!1,canBePressedFirst:!0,keyStrings:[]},y={id:"ONE",appearance:Object(u.jsx)("span",{children:"1"}),mathFunction:"1",isOperation:!1,canBePressedFirst:!0,keyStrings:["1"]},m={id:"TWO",appearance:Object(u.jsx)("span",{children:"2"}),mathFunction:"2",isOperation:!1,canBePressedFirst:!0,keyStrings:["2"]},k={id:"THREE",appearance:Object(u.jsx)("span",{children:"3"}),mathFunction:"3",isOperation:!1,canBePressedFirst:!0,keyStrings:["3"]},g={id:"FOUR",appearance:Object(u.jsx)("span",{children:"4"}),mathFunction:"4",isOperation:!1,canBePressedFirst:!0,keyStrings:["4"]},E={id:"FIVE",appearance:Object(u.jsx)("span",{children:"5"}),mathFunction:"5",isOperation:!1,canBePressedFirst:!0,keyStrings:["5"]},v={id:"SIX",appearance:Object(u.jsx)("span",{children:"6"}),mathFunction:"6",isOperation:!1,canBePressedFirst:!0,keyStrings:["6"]},K={id:"SEVEN",appearance:Object(u.jsx)("span",{children:"7"}),mathFunction:"7",isOperation:!1,canBePressedFirst:!0,keyStrings:["7"]},S={id:"EIGHT",appearance:Object(u.jsx)("span",{children:"8"}),mathFunction:"8",isOperation:!1,canBePressedFirst:!0,keyStrings:["8"]},F={id:"NINE",appearance:Object(u.jsx)("span",{children:"9"}),mathFunction:"9",isOperation:!1,canBePressedFirst:!0,keyStrings:["9"]},N={id:"ZERO",appearance:Object(u.jsx)("span",{children:"0"}),mathFunction:"0",isOperation:!1,canBePressedFirst:!0,keyStrings:["0"]},P={id:"PLUS",appearance:Object(u.jsx)("i",{className:"fas fa-plus"}),mathFunction:"+",isOperation:!0,canBePressedFirst:!1,keyStrings:["+"]},A={id:"MINUS",appearance:Object(u.jsx)("i",{className:"fas fa-minus"}),mathFunction:"-",isOperation:!0,canBePressedFirst:!0,keyStrings:["-"]},C={id:"TIMES",appearance:Object(u.jsx)("i",{className:"fas fa-times"}),mathFunction:"*",isOperation:!0,canBePressedFirst:!1,keyStrings:["*"]},B={id:"COMMA",appearance:Object(u.jsx)("span",{children:","}),mathFunction:".",isOperation:!0,canBePressedFirst:!1,keyStrings:[",","."]},L={id:"DIVIDE",appearance:Object(u.jsx)("i",{className:"fas fa-divide"}),mathFunction:"/",isOperation:!0,canBePressedFirst:!1,keyStrings:["shift+7"]},I={id:"PERCENT",appearance:Object(u.jsx)("i",{className:"fas fa-percent"}),mathFunction:"/100",isOperation:!1,canBePressedFirst:!1,keyStrings:["shift+5"]},T={id:"NEGATE",appearance:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("i",{className:"fas fa-times"}),Object(u.jsx)("i",{className:"fas fa-minus"}),Object(u.jsx)("span",{children:"1"})]}),mathFunction:"*-1",isOperation:!1,canBePressedFirst:!1,keyStrings:["shift+1"]},M={id:"BACKSPACE",appearance:Object(u.jsx)("i",{className:"fas fa-undo"}),mathFunction:"",isOperation:!0,canBePressedFirst:!1,keyStrings:["backspace"]},D={id:"EQUALS",appearance:Object(u.jsx)("i",{className:"fas fa-equals"}),mathFunction:"",isOperation:!0,canBePressedFirst:!1,keyStrings:["shift+0","enter"]},q={id:"ALL_CLEAR",appearance:Object(u.jsx)("span",{children:"AC"}),mathFunction:"",isOperation:!0,canBePressedFirst:!1,keyStrings:["esc"]};function R(e){var n=e.onAddKey,t=e.onDeleteLastKey,c=e.onAllClear,r=e.onEqual;return Object(u.jsxs)("div",{className:"keyboard",children:[Object(u.jsx)(p,{callback:function(){return c()},color:"primary",children:Object(u.jsx)("span",{children:"AC"})}),Object(u.jsx)(p,{callback:function(){return n(T)},color:"primary",children:Object(u.jsx)("span",{children:"+/-"})}),Object(u.jsx)(p,{callback:function(){return n(I)},color:"primary",children:Object(u.jsx)("i",{className:"fas fa-percent"})}),Object(u.jsx)(p,{callback:function(){return n(L)},color:"secondary",children:Object(u.jsx)("i",{className:"fas fa-divide"})}),Object(u.jsx)(p,{callback:function(){return n(K)},color:"normal",children:Object(u.jsx)("span",{children:"7"})}),Object(u.jsx)(p,{callback:function(){return n(S)},color:"normal",children:Object(u.jsx)("span",{children:"8"})}),Object(u.jsx)(p,{callback:function(){return n(F)},color:"normal",children:Object(u.jsx)("span",{children:"9"})}),Object(u.jsx)(p,{callback:function(){return n(C)},color:"secondary",children:Object(u.jsx)("i",{className:"fas fa-times"})}),Object(u.jsx)(p,{callback:function(){return n(g)},color:"normal",children:Object(u.jsx)("span",{children:"4"})}),Object(u.jsx)(p,{callback:function(){return n(E)},color:"normal",children:Object(u.jsx)("span",{children:"5"})}),Object(u.jsx)(p,{callback:function(){return n(v)},color:"normal",children:Object(u.jsx)("span",{children:"6"})}),Object(u.jsx)(p,{callback:function(){return n(A)},color:"secondary",children:Object(u.jsx)("i",{className:"fas fa-minus"})}),Object(u.jsx)(p,{callback:function(){return n(y)},color:"normal",children:Object(u.jsx)("span",{children:"1"})}),Object(u.jsx)(p,{callback:function(){return n(m)},color:"normal",children:Object(u.jsx)("span",{children:"2"})}),Object(u.jsx)(p,{callback:function(){return n(k)},color:"normal",children:Object(u.jsx)("span",{children:"3"})}),Object(u.jsx)(p,{callback:function(){return n(P)},color:"secondary",children:Object(u.jsx)("i",{className:"fas fa-plus"})}),Object(u.jsx)(p,{callback:function(){return t()},color:"normal",children:Object(u.jsx)("i",{className:"fas fa-undo"})}),Object(u.jsx)(p,{callback:function(){return n(N)},color:"normal",children:Object(u.jsx)("span",{children:"0"})}),Object(u.jsx)(p,{callback:function(){return n(B)},color:"normal",children:Object(u.jsx)("span",{children:","})}),Object(u.jsx)(p,{callback:function(){return r()},color:"secondary",children:Object(u.jsx)("i",{className:"fas fa-equals"})})]})}var U=t(2),V=t.n(U);function G(e){var n=e.onAddKey,t=e.onDeleteLastKey,c=e.onAllClear,r=e.onEqual;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(V.a,{handleKeys:y.keyStrings,onKeyEvent:function(e,t){return n(y)}}),Object(u.jsx)(V.a,{handleKeys:m.keyStrings,onKeyEvent:function(e,t){return n(m)}}),Object(u.jsx)(V.a,{handleKeys:k.keyStrings,onKeyEvent:function(e,t){return n(k)}}),Object(u.jsx)(V.a,{handleKeys:g.keyStrings,onKeyEvent:function(e,t){return n(g)}}),Object(u.jsx)(V.a,{handleKeys:E.keyStrings,onKeyEvent:function(e,t){return n(E)}}),Object(u.jsx)(V.a,{handleKeys:v.keyStrings,onKeyEvent:function(e,t){return n(v)}}),Object(u.jsx)(V.a,{handleKeys:K.keyStrings,onKeyEvent:function(e,t){return n(K)}}),Object(u.jsx)(V.a,{handleKeys:S.keyStrings,onKeyEvent:function(e,t){return n(S)}}),Object(u.jsx)(V.a,{handleKeys:F.keyStrings,onKeyEvent:function(e,t){return n(F)}}),Object(u.jsx)(V.a,{handleKeys:N.keyStrings,onKeyEvent:function(e,t){return n(N)}}),Object(u.jsx)(V.a,{handleKeys:A.keyStrings,onKeyEvent:function(e,t){return n(A)}}),Object(u.jsx)(V.a,{handleKeys:L.keyStrings,onKeyEvent:function(e,t){return n(L)}}),Object(u.jsx)(V.a,{handleKeys:["all"],onKeyEvent:function(e,t){P.keyStrings.includes(t.key)&&n(P)}}),Object(u.jsx)(V.a,{handleKeys:["all"],onKeyEvent:function(e,t){C.keyStrings.includes(t.key)&&n(C)}}),Object(u.jsx)(V.a,{handleKeys:q.keyStrings,onKeyEvent:function(e,n){return c()}}),Object(u.jsx)(V.a,{handleKeys:D.keyStrings,onKeyEvent:function(e,n){return r()}}),Object(u.jsx)(V.a,{handleKeys:M.keyStrings,onKeyEvent:function(e,n){return t()}}),Object(u.jsx)(V.a,{handleKeys:T.keyStrings,onKeyEvent:function(e,t){return n(T)}}),Object(u.jsx)(V.a,{handleKeys:B.keyStrings,onKeyEvent:function(e,t){return n(B)}}),Object(u.jsx)(V.a,{handleKeys:I.keyStrings,onKeyEvent:function(e,t){return n(I)}})]})}function H(e){var n=e.onAddKey,t=e.onDeleteLastKey,c=e.onAllClear,r=e.onEqual;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(R,{onAddKey:n,onDeleteLastKey:t,onAllClear:c,onEqual:r}),Object(u.jsx)(G,{onAddKey:n,onDeleteLastKey:t,onAllClear:c,onEqual:r})]})}t(25);function _(){return Object(u.jsx)("div",{className:"bar"})}function w(e){var n=e.pressedKeys,t=e.prevPressedKeys,c=e.onAddKey,r=e.onDeleteLastKey,a=e.onAllClear,s=e.onEqual;return Object(u.jsxs)("div",{className:"casing",children:[Object(u.jsx)(d,{}),Object(u.jsx)(f,{pressedKeys:n,prevPressedKeys:t}),Object(u.jsxs)("div",{className:"casing__bottom",children:[Object(u.jsx)(H,{onAddKey:c,onDeleteLastKey:r,onAllClear:a,onEqual:s}),Object(u.jsx)(_,{})]})]})}var J=t(10),Q=function(e){for(var n=e.split(""),t=[],r=[],s=0,i=Object.entries(n);s<i.length;s++)for(var l=Object(o.a)(i[s],2),j=l[0],d=l[1],b=0,O=Object.entries(c);b<O.length;b++){var h=Object(o.a)(O[b],2)[1];h.mathFunction===d&&(t.push(a.a.cloneElement(h.appearance,{key:j+h.id})),r.push(h.mathFunction))}var f=Object(J.a)({},x);return f.appearance=Object(u.jsx)(u.Fragment,{children:t}),f.mathFunction=r.join(""),f};function W(){var e=Object(r.useState)([N]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)([]),s=Object(o.a)(a,2),i=s[0],j=s[1],d=X(z(t).reduce((function(e,n){return e+n.mathFunction}),"")).toString(),b=function(){j([]),c([N])};return Object(u.jsx)(w,{onAddKey:function(e){c(Z(t,e))},onDeleteLastKey:function(){if(t.length<=1)b();else{var e=Object(l.a)(t);e.pop(),c(e)}},onAllClear:b,onEqual:function(){t.length<=1||(j([].concat(Object(l.a)(t),[D])),c([Q(d)]))},pressedKeys:t,prevPressedKeys:i})}var X=function(e){return 0===e.length?"":Function(";return ".concat(e))()},Z=function(e,n){var t=Object(l.a)(e);return 0!==e.length||n.canBePressedFirst?1!==e.length||e[0].id!==N.id||n.isOperation?1===e.length&&e[0].id===A.id&&n.isOperation?t:e.length>=1&&e[e.length-1].isOperation&&n.isOperation?(t[t.length-1]=n,t):(t.push(n),t):[n]:t},z=function(e){var n=Object(l.a)(e);return 0===e.length?e:e[e.length-1].isOperation?(n.pop(),n):n},Y=t(8),$=a.a.createContext({theme:"light",setTheme:function(){}}),ee=a.a.createContext({});function ne(){var e=Object(r.useState)("dark"),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(!1),s=Object(o.a)(a,2),i=s[0],l=s[1],j=Object(Y.b)();return Object(r.useEffect)((function(){i?j.enter():j.exit()}),[i]),Object(u.jsx)(Y.a,{handle:j,children:Object(u.jsx)("div",{className:"app","data-theme":t,children:Object(u.jsx)($.Provider,{value:{theme:t,setTheme:c},children:Object(u.jsx)(ee.Provider,{value:{isFullScreen:i,setIsFullScreen:l},children:Object(u.jsx)(W,{})})})})})}i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ne,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.0876dc9e.chunk.js.map