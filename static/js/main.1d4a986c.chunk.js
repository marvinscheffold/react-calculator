(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,,,,,,,,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},,function(n,e,t){},function(n,e,t){},function(n,e,t){},,,,function(n,e,t){},function(n,e,t){"use strict";t.r(e);var a={};t.r(a),t.d(a,"SOLUTION",(function(){return y})),t.d(a,"ONE",(function(){return v})),t.d(a,"TWO",(function(){return k})),t.d(a,"THREE",(function(){return C})),t.d(a,"FOUR",(function(){return E})),t.d(a,"FIVE",(function(){return F})),t.d(a,"SIX",(function(){return K})),t.d(a,"SEVEN",(function(){return S})),t.d(a,"EIGHT",(function(){return g})),t.d(a,"NINE",(function(){return I})),t.d(a,"ZERO",(function(){return N})),t.d(a,"E_NOTATION",(function(){return A})),t.d(a,"PLUS",(function(){return L})),t.d(a,"MINUS",(function(){return M})),t.d(a,"TIMES",(function(){return w})),t.d(a,"DIVIDE",(function(){return B})),t.d(a,"PERCENT",(function(){return T})),t.d(a,"NEGATE",(function(){return P})),t.d(a,"COMMA",(function(){return D})),t.d(a,"BACKSPACE",(function(){return R})),t.d(a,"EQUALS",(function(){return U})),t.d(a,"ALL_CLEAR",(function(){return q})),t.d(a,"ANS",(function(){return W}));var c,r=t(1),o=t.n(r),i=t(10),s=t.n(i),l=t(3),u=(t(15),t(5)),d=(t(16),t(17),t(0));function j(n){var e=n.active,t=n.children,a=n.callback;return Object(d.jsx)("button",{onClick:function(){return a()},className:"toggle-button-half ".concat(e?"toggle-button-half--active":""),children:t})}function h(){var n=Object(r.useContext)(sn),e=n.theme,t=e===c.LIGHT?c.DARK:c.LIGHT,a=Object(r.useContext)(ln),o=a.isFullScreen,i=a.setIsFullScreen;return Object(d.jsxs)("div",{className:"toggle-button",children:[Object(d.jsx)(j,{active:"dark"===e,callback:function(){return n.setTheme(t)},children:Object(d.jsx)("i",{className:"far fa-moon"})}),Object(d.jsx)(j,{active:o,callback:function(){i(!o)},children:Object(d.jsx)("i",{className:"fas fa-expand"})})]})}!function(n){n.LIGHT="light",n.DARK="dark"}(c||(c={}));t(19);function O(n){var e=n.children,t=n.maxPercent,a=void 0===t?100:t,c=n.minPercent,r=void 0===c?0:c,o=n.changePerChar,i=n.startAtChar,s=void 0===i?0:i,l=n.stopAtChar,u=f(a,r,o,s,void 0===l?1/0:l,Array.isArray(e)?p(e):b(e));return Object(d.jsx)("span",{style:{fontSize:"".concat(u,"%")},children:e})}var b=function(n){return n.props.children.length},p=function(n){var e=0;return n.forEach((function(n){n.props.children?e+=n.props.children.length:e+=1})),e},f=function(n,e,t,a,c,r){var o=Math.min(r,c),i=Math.max(0,o-(a-1));return Math.max(e,n-t*i)};function m(n){var e=n.pressedKeys,t=n.prevPressedKeys;return Object(d.jsxs)("div",{className:"screen",children:[Object(d.jsx)("h3",{children:t.map((function(n,e){return o.a.cloneElement(n.appearance,{key:e})}))}),Object(d.jsx)("h1",{children:Object(d.jsx)(O,{changePerChar:8,startAtChar:9,stopAtChar:12,children:e.map((function(n,e){return o.a.cloneElement(n.appearance,{key:e})}))})})]})}t(20),t(21);function x(n){var e="";return"normal"!==n.color&&(e="button--".concat(n.color)),Object(d.jsx)("button",{onClick:function(){return n.callback()},className:"button ".concat(e),children:n.children})}var y={id:"SOLUTION",appearance:Object(d.jsx)("span",{}),mathFunction:"",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!1,keyboardOperations:[]},v={id:"ONE",appearance:Object(d.jsx)("span",{children:"1"}),mathFunction:"1",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!0,keyboardOperations:["1"]},k={id:"TWO",appearance:Object(d.jsx)("span",{children:"2"}),mathFunction:"2",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!0,keyboardOperations:["2"]},C={id:"THREE",appearance:Object(d.jsx)("span",{children:"3"}),mathFunction:"3",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!0,keyboardOperations:["3"]},E={id:"FOUR",appearance:Object(d.jsx)("span",{children:"4"}),mathFunction:"4",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!0,keyboardOperations:["4"]},F={id:"FIVE",appearance:Object(d.jsx)("span",{children:"5"}),mathFunction:"5",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!0,keyboardOperations:["5"]},K={id:"SIX",appearance:Object(d.jsx)("span",{children:"6"}),mathFunction:"6",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!0,keyboardOperations:["6"]},S={id:"SEVEN",appearance:Object(d.jsx)("span",{children:"7"}),mathFunction:"7",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!0,keyboardOperations:["7"]},g={id:"EIGHT",appearance:Object(d.jsx)("span",{children:"8"}),mathFunction:"8",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!0,keyboardOperations:["8"]},I={id:"NINE",appearance:Object(d.jsx)("span",{children:"9"}),mathFunction:"9",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!0,keyboardOperations:["9"]},N={id:"ZERO",appearance:Object(d.jsx)("span",{children:"0"}),mathFunction:"0",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!0,keyboardOperations:["0"]},A={id:"E_NOTATION",appearance:Object(d.jsx)("span",{children:"e"}),mathFunction:"e",isMathOperation:!1,canComeFirst:!1,canComeLast:!1,canBeInSolution:!0,keyboardOperations:[]},L={id:"PLUS",appearance:Object(d.jsx)("i",{className:"fas fa-plus"}),mathFunction:"+",isMathOperation:!0,canComeFirst:!1,canComeLast:!1,canBeInSolution:!0,keyboardOperations:["+"]},M={id:"MINUS",appearance:Object(d.jsx)("i",{className:"fas fa-minus"}),mathFunction:"-",isMathOperation:!0,canComeFirst:!0,canComeLast:!1,canBeInSolution:!0,keyboardOperations:["-"]},w={id:"TIMES",appearance:Object(d.jsx)("i",{className:"fas fa-times"}),mathFunction:"*",isMathOperation:!0,canComeFirst:!1,canComeLast:!1,canBeInSolution:!1,keyboardOperations:["*"]},B={id:"DIVIDE",appearance:Object(d.jsx)("i",{className:"fas fa-divide"}),mathFunction:"/",isMathOperation:!0,canComeFirst:!1,canComeLast:!1,canBeInSolution:!1,keyboardOperations:["shift+7"]},T={id:"PERCENT",appearance:Object(d.jsx)("i",{className:"fas fa-percent"}),mathFunction:"/100",isMathOperation:!0,canComeFirst:!1,canComeLast:!0,canBeInSolution:!1,keyboardOperations:["shift+5"]},P={id:"NEGATE",appearance:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("i",{className:"fas fa-times"}),Object(d.jsx)("i",{className:"fas fa-minus"}),Object(d.jsx)("span",{children:"1"})]}),mathFunction:"*-1",isMathOperation:!0,canComeFirst:!1,canComeLast:!0,canBeInSolution:!1,keyboardOperations:["shift+1"]},D={id:"COMMA",appearance:Object(d.jsx)("span",{children:","}),mathFunction:".",isMathOperation:!1,canComeFirst:!1,canComeLast:!1,canBeInSolution:!0,keyboardOperations:[",","."]},R={id:"BACKSPACE",appearance:Object(d.jsx)("i",{className:"fas fa-undo"}),mathFunction:"",isMathOperation:!1,canComeFirst:!1,canComeLast:!1,canBeInSolution:!1,keyboardOperations:["backspace"]},U={id:"EQUALS",appearance:Object(d.jsx)("i",{className:"fas fa-equals"}),mathFunction:"",isMathOperation:!0,canComeFirst:!1,canComeLast:!0,canBeInSolution:!1,keyboardOperations:["shift+0","enter"]},q={id:"ALL_CLEAR",appearance:Object(d.jsx)("span",{children:"AC"}),mathFunction:"",isMathOperation:!1,canComeFirst:!1,canComeLast:!1,canBeInSolution:!1,keyboardOperations:["esc"]},W={id:"ANS",appearance:Object(d.jsx)("span",{children:"Ans = 0"}),mathFunction:"0",isMathOperation:!1,canComeFirst:!0,canComeLast:!0,canBeInSolution:!1,keyboardOperations:[""]};function G(n){var e=n.onAddKey,t=n.onDeleteLastKey,a=n.onAllClear,c=n.onEqual;return Object(d.jsxs)("div",{className:"keyboard",children:[Object(d.jsx)(x,{callback:function(){return a()},color:"primary",children:Object(d.jsx)("span",{children:"AC"})}),Object(d.jsx)(x,{callback:function(){return e(P)},color:"primary",children:Object(d.jsx)("span",{children:"+/-"})}),Object(d.jsx)(x,{callback:function(){return e(T)},color:"primary",children:Object(d.jsx)("i",{className:"fas fa-percent"})}),Object(d.jsx)(x,{callback:function(){return e(B)},color:"secondary",children:Object(d.jsx)("i",{className:"fas fa-divide"})}),Object(d.jsx)(x,{callback:function(){return e(S)},color:"normal",children:Object(d.jsx)("span",{children:"7"})}),Object(d.jsx)(x,{callback:function(){return e(g)},color:"normal",children:Object(d.jsx)("span",{children:"8"})}),Object(d.jsx)(x,{callback:function(){return e(I)},color:"normal",children:Object(d.jsx)("span",{children:"9"})}),Object(d.jsx)(x,{callback:function(){return e(w)},color:"secondary",children:Object(d.jsx)("i",{className:"fas fa-times"})}),Object(d.jsx)(x,{callback:function(){return e(E)},color:"normal",children:Object(d.jsx)("span",{children:"4"})}),Object(d.jsx)(x,{callback:function(){return e(F)},color:"normal",children:Object(d.jsx)("span",{children:"5"})}),Object(d.jsx)(x,{callback:function(){return e(K)},color:"normal",children:Object(d.jsx)("span",{children:"6"})}),Object(d.jsx)(x,{callback:function(){return e(M)},color:"secondary",children:Object(d.jsx)("i",{className:"fas fa-minus"})}),Object(d.jsx)(x,{callback:function(){return e(v)},color:"normal",children:Object(d.jsx)("span",{children:"1"})}),Object(d.jsx)(x,{callback:function(){return e(k)},color:"normal",children:Object(d.jsx)("span",{children:"2"})}),Object(d.jsx)(x,{callback:function(){return e(C)},color:"normal",children:Object(d.jsx)("span",{children:"3"})}),Object(d.jsx)(x,{callback:function(){return e(L)},color:"secondary",children:Object(d.jsx)("i",{className:"fas fa-plus"})}),Object(d.jsx)(x,{callback:function(){return t()},color:"normal",children:Object(d.jsx)("i",{className:"fas fa-undo"})}),Object(d.jsx)(x,{callback:function(){return e(N)},color:"normal",children:Object(d.jsx)("span",{children:"0"})}),Object(d.jsx)(x,{callback:function(){return e(D)},color:"normal",children:Object(d.jsx)("span",{children:","})}),Object(d.jsx)(x,{callback:function(){return c()},color:"secondary",children:Object(d.jsx)("i",{className:"fas fa-equals"})})]})}var H=t(2),V=t.n(H);function _(n){var e=n.onAddKey,t=n.onDeleteLastKey,a=n.onAllClear,c=n.onEqual;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(V.a,{handleKeys:v.keyboardOperations,onKeyEvent:function(n,t){return e(v)}}),Object(d.jsx)(V.a,{handleKeys:k.keyboardOperations,onKeyEvent:function(n,t){return e(k)}}),Object(d.jsx)(V.a,{handleKeys:C.keyboardOperations,onKeyEvent:function(n,t){return e(C)}}),Object(d.jsx)(V.a,{handleKeys:E.keyboardOperations,onKeyEvent:function(n,t){return e(E)}}),Object(d.jsx)(V.a,{handleKeys:F.keyboardOperations,onKeyEvent:function(n,t){return e(F)}}),Object(d.jsx)(V.a,{handleKeys:K.keyboardOperations,onKeyEvent:function(n,t){return e(K)}}),Object(d.jsx)(V.a,{handleKeys:S.keyboardOperations,onKeyEvent:function(n,t){return e(S)}}),Object(d.jsx)(V.a,{handleKeys:g.keyboardOperations,onKeyEvent:function(n,t){return e(g)}}),Object(d.jsx)(V.a,{handleKeys:I.keyboardOperations,onKeyEvent:function(n,t){return e(I)}}),Object(d.jsx)(V.a,{handleKeys:N.keyboardOperations,onKeyEvent:function(n,t){return e(N)}}),Object(d.jsx)(V.a,{handleKeys:M.keyboardOperations,onKeyEvent:function(n,t){return e(M)}}),Object(d.jsx)(V.a,{handleKeys:B.keyboardOperations,onKeyEvent:function(n,t){return e(B)}}),Object(d.jsx)(V.a,{handleKeys:["all"],onKeyEvent:function(n,t){L.keyboardOperations.includes(t.key)&&e(L)}}),Object(d.jsx)(V.a,{handleKeys:["all"],onKeyEvent:function(n,t){w.keyboardOperations.includes(t.key)&&e(w)}}),Object(d.jsx)(V.a,{handleKeys:q.keyboardOperations,onKeyEvent:function(n,e){return a()}}),Object(d.jsx)(V.a,{handleKeys:U.keyboardOperations,onKeyEvent:function(n,e){return c()}}),Object(d.jsx)(V.a,{handleKeys:R.keyboardOperations,onKeyEvent:function(n,e){return t()}}),Object(d.jsx)(V.a,{handleKeys:P.keyboardOperations,onKeyEvent:function(n,t){return e(P)}}),Object(d.jsx)(V.a,{handleKeys:D.keyboardOperations,onKeyEvent:function(n,t){return e(D)}}),Object(d.jsx)(V.a,{handleKeys:T.keyboardOperations,onKeyEvent:function(n,t){return e(T)}})]})}function J(n){var e=n.onAddKey,t=n.onDeleteLastKey,a=n.onAllClear,c=n.onEqual;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G,{onAddKey:e,onDeleteLastKey:t,onAllClear:a,onEqual:c}),Object(d.jsx)(_,{onAddKey:e,onDeleteLastKey:t,onAllClear:a,onEqual:c})]})}t(25);function Q(){return Object(d.jsx)("div",{className:"bar"})}function X(n){var e=n.pressedKeys,t=n.prevPressedKeys,a=n.onAddKey,c=n.onDeleteLastKey,r=n.onAllClear,o=n.onEqual;return Object(d.jsxs)("div",{className:"casing",children:[Object(d.jsx)(h,{}),Object(d.jsx)(m,{pressedKeys:e,prevPressedKeys:t}),Object(d.jsxs)("div",{className:"casing__bottom",children:[Object(d.jsx)(J,{onAddKey:a,onDeleteLastKey:c,onAllClear:r,onEqual:o}),Object(d.jsx)(Q,{})]})]})}var Z=t(9),z=function(n){for(var e=n.split(""),t=[],c=[],r=0,i=Object.entries(e);r<i.length;r++)for(var s=Object(l.a)(i[r],2),u=s[0],j=s[1],h=0,O=Object.entries(a);h<O.length;h++){var b=Object(l.a)(O[h],2)[1];b.mathFunction===j&&b.canBeInSolution&&(t.push(o.a.cloneElement(b.appearance,{key:u+b.id})),c.push(b.mathFunction))}var p=Object(Z.a)({},y);return p.appearance=Object(d.jsx)(d.Fragment,{children:t}),p.mathFunction=c.join(""),p},$=function(n){var e=parseFloat(n);if(e%1===0)return n;var t=Math.round(e).toString().length,a=Math.max(9-t,0);return en(n,a)},Y=function(n){var e=parseFloat(n);if(e>1e9||e<-1e9){var t=e.toExponential(5).split("e"),a=Object(l.a)(t,2),c=a[0],r=a[1];return nn(c)+"e"+r}return n},nn=function(n){return parseFloat(n).toString()},en=function(n,e){var t=parseFloat(n);return(Math.round(t*Math.pow(10,e))/Math.pow(10,e)).toString()};function tn(){var n=Object(r.useState)([N]),e=Object(l.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)([]),o=Object(l.a)(c,2),i=o[0],s=o[1],j=Object(r.useState)(W),h=Object(l.a)(j,2),O=h[0],b=h[1],p=function(n){var e=n;return e=$(e),Y(e)}(an(rn(t).reduce((function(n,e){return n+e.mathFunction}),"")).toString()),f=function(){s([]),a([N]),b(W)};return Object(d.jsx)(X,{onAddKey:function(n){a(cn(t,n)),s([O])},onDeleteLastKey:function(){if(t.length<=1)f();else{var n=Object(u.a)(t);n.pop(),a(n)}},onAllClear:f,onEqual:function(){t.length<=1||(s([].concat(Object(u.a)(t),[U])),a([z(p)]),b(function(n){var e=Object(Z.a)({},W);return e.appearance=Object(d.jsxs)("span",{children:["Ans = ",n]}),e.mathFunction=n,e}(p)))},pressedKeys:t,prevPressedKeys:i})}var an=function(n){return 0===n.length?"":Function(";return ".concat(n))()},cn=function(n,e){var t=Object(u.a)(n);return(0!==n.length||e.canComeFirst)&&(1!==n.length||n[0].id!==y.id||e.isMathOperation)?1===n.length&&n[0].id===N.id&&e.canComeFirst?[e]:1===n.length&&n[0].id===M.id&&e.isMathOperation?t:n.length>=1&&n[n.length-1].isMathOperation&&e.isMathOperation?(t[t.length-1]=e,t):(t.push(e),t):t},rn=function(n){var e=Object(u.a)(n);return 0===n.length?n:(n[n.length-1].canComeLast||e.pop(),e)},on=t(8),sn=o.a.createContext({}),ln=o.a.createContext({});function un(){var n=Object(r.useState)(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?c.DARK:c.LIGHT),e=Object(l.a)(n,2),t=e[0],a=e[1],o=Object(r.useState)(!1),i=Object(l.a)(o,2),s=i[0],u=i[1],j=Object(on.b)();return Object(r.useEffect)((function(){s?j.enter():j.exit()}),[s]),Object(d.jsx)(on.a,{handle:j,children:Object(d.jsx)("div",{className:"app","data-theme":t,children:Object(d.jsx)(sn.Provider,{value:{theme:t,setTheme:a},children:Object(d.jsx)(ln.Provider,{value:{isFullScreen:s,setIsFullScreen:u},children:Object(d.jsx)(tn,{})})})})})}var dn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function jn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(un,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/react-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-calculator","/service-worker.js");dn?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):jn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):jn(e,n)}))}}()}],[[26,1,2]]]);
//# sourceMappingURL=main.1d4a986c.chunk.js.map