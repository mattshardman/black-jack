(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2Eek":function(e,t,n){e.exports=n("W7oM")},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var r,i=n("q1tI");var s=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return s.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){s.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=o},"4fRq":function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var i=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var r=n("Y7ZC"),i=n("uplh"),s=n("NsO/"),o=n("vwuL"),a=n("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=s(e),c=o.f,l=i(r),u={},d=0;l.length>d;)void 0!==(n=c(r,t=l[d++]))&&a(u,t,n);return u}})},"8oxB":function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!u){var e=a(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9Jkg":function(e,t,n){e.exports=n("oh+g")},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},EcEN:function(e,t,n){var r=n("xDdU"),i=n("xk4V"),s=i;s.v1=r,s.v4=i,e.exports=s},I2ZF:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,i=n;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("hfKm"),i=n.n(r);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(e,r.key,r)}}var o=n("XVgq"),a=n.n(o),c=n("Z7t5"),l=n.n(c);function u(e){return(u="function"===typeof l.a&&"symbol"===typeof a.a?function(e){return typeof e}:function(e){return e&&"function"===typeof l.a&&e.constructor===l.a&&e!==l.a.prototype?"symbol":typeof e})(e)}function d(e){return(d="function"===typeof l.a&&"symbol"===u(a.a)?function(e){return u(e)}:function(e){return e&&"function"===typeof l.a&&e.constructor===l.a&&e!==l.a.prototype?"symbol":u(e)})(e)}function f(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p=n("Bhuq"),m=n.n(p),h=n("TRZx"),b=n.n(h);function x(e){return(x=b.a?m.a:function(e){return e.__proto__||m()(e)})(e)}var y=n("SqZg"),g=n.n(y);function w(e,t){return(w=b.a||function(e,t){return e.__proto__=t,e})(e,t)}var v=n("q1tI"),k=n.n(v),_=n("2Eek"),j=n.n(_),S=n("XoMD"),N=n.n(S),C=n("Jo+v"),O=n.n(C),z=n("4mXO"),R=n.n(z),F=n("pLtp"),E=n.n(F),T=n("p0XB"),I=n.n(T);var X=n("d04V"),A=n.n(X),D=n("yLu3"),B=n.n(D);function q(e){if(B()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return A()(e)}function P(e){return function(e){if(I()(e))return e}(e)||q(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(e,t,n){return t in e?i()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e){return function(e){if(I()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Z=n("EcEN"),V=n.n(Z);function M(e,t){var n=E()(e);if(R.a){var r=R()(e);t&&(r=r.filter((function(t){return O()(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):N.a?j()(e,N()(n)):M(Object(n)).forEach((function(t){i()(e,t,O()(n,t))}))}return e}var L=function(){var e,t=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],n=[2,3,4,5,6,7,8,9,10,10,10,10,1],r=[{suit:"Hearts",img:"https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182708/lambda/hearts.png"},{suit:"Spades",img:"https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182715/lambda/spades.png"},{suit:"Clubs",img:"https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182705/lambda/clubs.png"},{suit:"Diamonds",img:"https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182712/lambda/diamonds.png"}].reduce((function(e,r){var i=t.map((function(e,t){return{id:V()(),suit:r.suit,img:r.img,number:e,value:n[t]}}));return e.push(i),e}),[]),i=(e=[]).concat.apply(e,W(r));return i.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}))},U=function(e){var t,n=W(Array(e)).map((function(){return L()}));return(t=[]).concat.apply(t,W(n))};function G(e,t){var n=t.indexOf(e),r=t.filter((function(e,t){return t!==n}));return[].concat(W(r),[e])}function K(e){return e[0]}function H(e){var t=!1,n=e.reduce((function(e,n){return"A"===n.number&&(t=!0),e+n.value}),0);return t&&n+10<=21?n+10:n}function Q(e,t,n){return"black-jack"===e?{userWon:!0,draw:!1,message:"You won, you got black jack!",score:J({},n,{userScore:n.userScore+2})}:e>21?{userWon:!1,draw:!1,message:"You lost, you went bust",score:J({},n,{dealerScore:n.dealerScore+1})}:t>21?{userWon:!0,draw:!1,message:"You won, the dealer went bust",score:J({},n,{userScore:n.userScore+1})}:e>t?{userWon:!0,draw:!1,message:"You won, the dealer got ".concat(t),score:J({},n,{userScore:n.userScore+1})}:e===t?{userWon:!1,draw:!0,message:"It's a draw",score:J({},n)}:{userWon:!1,draw:!1,message:"You lost, the dealer got ".concat(t),score:J({},n,{dealerScore:n.dealerScore+1})}}function $(e){var t,n=(t=e,W(Array(3)).reduce((function(e){var t=K(e.cards),n=G(t,e.cards);return e.cards=n,e.dealtCards.push(t),e}),{cards:t,dealtCards:[]})),r=n.cards,i=P(n.dealtCards),s=i[0];return{userCards:i.slice(1),dealerCards:[s],dealerCardsValue:0,cards:r}}var ee=n("UXZV"),te=n.n(ee);function ne(){return(ne=te.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var re=n("9Jkg"),ie=n.n(re),se=n("MX0m"),oe=n.n(se),ae=k.a.createElement;var ce=function(e){var t=e.icon,n=e.background,r=e.color,i=e.isDisabled,s=e.clickFunction,o=Object(v.useState)(!1),a=o[0],c=o[1];return ae("button",{type:"button",disabled:i,onClick:s,onTouchStart:function(){return c(!0)},onAnimationEnd:function(){return c(!1)},className:oe.a.dynamic([["2345626248",[n,n,r]]])+" "+((a?"hit-btn hit-btn-click":"hit-btn")||"")},t,ae(oe.a,{id:"2345626248",dynamic:[n,n,r]},[".hit-btn.__jsx-style-dynamic-selector{width:55px;height:55px;border-radius:50%;border:1px solid ".concat(n,";background:").concat(n,";color:").concat(r,";font-size:12px;outline:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:0 4px 8px rgba(0,0,0,0.3);}"),".hit-btn-click.__jsx-style-dynamic-selector{-webkit-animation-name:spiral-__jsx-style-dynamic-selector;animation-name:spiral-__jsx-style-dynamic-selector;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:500ms;animation-duration:500ms;}","@-webkit-keyframes spiral-__jsx-style-dynamic-selector{0%{box-shadow:0 4px 8px rgba(0,0,0,0.3);}50%{box-shadow:0 2px 4px rgba(0,0,0,0.3);}100%{box-shadow:0 4px 8px rgba(0,0,0,0.3);}}","@keyframes spiral-__jsx-style-dynamic-selector{0%{box-shadow:0 4px 8px rgba(0,0,0,0.3);}50%{box-shadow:0 2px 4px rgba(0,0,0,0.3);}100%{box-shadow:0 4px 8px rgba(0,0,0,0.3);}}"]))},le=k.a.createElement;var ue=function(e){var t=e.icon,n=e.isDisabled,r=e.clickFunction;return le("button",{type:"button",disabled:n,onClick:r,className:"jsx-1346112582 btn"},t,le(oe.a,{id:"1346112582"},[".btn.jsx-1346112582{color:#fff;border:none;outline:none;font-size:15px;height:40px;width:40px;font-size:10px;background:none;border:none;box-shadow:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]))},de=k.a.createElement,fe=function(e){var t=e.icon,n=e.fontSize,r=e.fontColor;return de("i",{className:"material-icons",style:{fontSize:n,fontColor:r}},t)},pe=function(e){var t=e.gameStarted,n=e.start,r=e.stick,i=e.gameFinished,s=e.reset,o=e.hit,a=e.background,c=e.height,l=[{icon:"pan_tool",isDisabled:i,clickFunction:r,fontSize:16,fontColor:"#fff"},{icon:"refresh",isDisabled:!i,clickFunction:s,fontSize:20,fontColor:"#fff"}];return de("div",{className:oe.a.dynamic([["213282634",[c,a,a]]])+" app-bar"},de("div",{className:oe.a.dynamic([["213282634",[c,a,a]]])+" central-btn-wrapper"},de(ce,{icon:de(fe,{icon:"play_arrow",fontColor:"#17262a",fontSize:30}),background:"#faab1a",color:"#17262a",isDisabled:!!t&&i,clickFunction:t?o:n})),de("div",{className:oe.a.dynamic([["213282634",[c,a,a]]])+" buttons-section"},l.map((function(e){return de(ue,{key:e.icon,icon:de(fe,e),isDisabled:e.isDisabled,clickFunction:function(){return e.clickFunction(!1)}})}))),de(oe.a,{id:"213282634",dynamic:[c,a,a]},[".app-bar.__jsx-style-dynamic-selector{position:fixed;bottom:0;width:100%;}",".buttons-section.__jsx-style-dynamic-selector{box-sizing:border-box;position:fixed;bottom:0;width:100%;height:".concat(c,";background:").concat(a,";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 12%;-webkit-mask-image:radial-gradient(36px at 50% 0% ,transparent 98%,").concat(a," 100%);}"),".central-btn-wrapper.__jsx-style-dynamic-selector{z-index:20;position:absolute;bottom:30px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}"]))},me=k.a.createElement,he=function(){return me("style",{jsx:!0},"\n      .table {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        font-family: Open Sans, sans-serif;\n        background: #f4f8ff;\n      }\n\n      .content {\n        z-index: 100;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        padding-bottom: 65px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: space;\n        align-items: center;\n        font-family: Open Sans, sans-serif;\n      }\n      \n\n      h1 {\n        margin: 0;\n      }\n\n      \n      p {\n        color: #000;\n        text-align: left;\n        margin: 0;\n      }\n      \n      .message {\n        width: 100%;\n        height: 60px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n      }\n      \n      .total-wrapper {\n        height: 40px;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      \n      .scores {\n        height: 40px;\n        margin: 0 auto;\n        font-size: 14px;\n        width: 90%;\n        color: #000;\n        font-weight: 500;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border-radius: 5px;\n      }\n\n      .score {\n        display: flex;\n        width: auto;\n      }\n      \n      .score-number {\n        color: #faab1a;\n        width: 40px;\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      @media (max-width: 600px) {\n        .total {\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          height: 30px;\n          width: 60px;\n          font-size: 12px;\n        }\n      }\n\n      .winner {\n        color: #000;\n        animation-name: fade;\n        animation-iteration-count: 1;\n        animation-duration: 2s;\n      }\n\n      @keyframes fade {\n        from {\n          opacity: 0;\n        }\n\n        to {\n          opacity: 1;\n        }\n      }\n    ")},be=k.a.createElement,xe=function(e){var t=e.winner;return be("div",{className:"message"},t&&be("h3",{className:"winner"},t),be(he,null))},ye=k.a.createElement,ge=function(e){var t=e.info,n="".concat(window.innerWidth/3);return ye("div",{className:oe.a.dynamic([["417909744",[3.5*n/2.25,n]]])+" card"},ye("div",{className:oe.a.dynamic([["417909744",[3.5*n/2.25,n]]])+" info-top"},ye("h1",{className:oe.a.dynamic([["417909744",[3.5*n/2.25,n]]])+" number"},t.number),ye("img",{src:t.img,alt:"",className:oe.a.dynamic([["417909744",[3.5*n/2.25,n]]])+" suit-img"})),ye("div",{className:oe.a.dynamic([["417909744",[3.5*n/2.25,n]]])+" center-section"},ye("img",{src:t.img,alt:"",className:oe.a.dynamic([["417909744",[3.5*n/2.25,n]]])+" main-img"})),ye("div",{className:oe.a.dynamic([["417909744",[3.5*n/2.25,n]]])+" info-bottom"},ye("h1",{className:oe.a.dynamic([["417909744",[3.5*n/2.25,n]]])+" number"},t.number),ye("img",{src:t.img,alt:"",className:oe.a.dynamic([["417909744",[3.5*n/2.25,n]]])+" suit-img"})),ye(oe.a,{id:"417909744",dynamic:[3.5*n/2.25,n]},["h1.__jsx-style-dynamic-selector{font-size:12px;margin:0;}","@media (max-width:600px){h1.__jsx-style-dynamic-selector{font-size:12px;}}",".card.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:75%;width:126px;border-radius:5px;background:radial-gradient(#fff,#fafafa);margin-right:10px;-webkit-animation-name:rotate-__jsx-style-dynamic-selector;animation-name:rotate-__jsx-style-dynamic-selector;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:1s;animation-duration:1s;box-shadow:0 3px 10px rgba(0,0,0,0.15);}","@media (max-width:600px){.card.__jsx-style-dynamic-selector{box-sizing:border-box;max-height:90%;height:".concat(3.5*n/2.25,"px;width:").concat(n,"px;}}"),"@-webkit-keyframes rotate-__jsx-style-dynamic-selector{from{opacity:0;-webkit-transform:translateX(100%) rotate3d(1,0,0,-70deg);-ms-transform:translateX(100%) rotate3d(1,0,0,-70deg);transform:translateX(100%) rotate3d(1,0,0,-70deg);}to{opacity:1;-webkit-transform:rotate3d(0,1,0,0deg);-ms-transform:rotate3d(0,1,0,0deg);transform:rotate3d(0,1,0,0deg);}}","@keyframes rotate-__jsx-style-dynamic-selector{from{opacity:0;-webkit-transform:translateX(100%) rotate3d(1,0,0,-70deg);-ms-transform:translateX(100%) rotate3d(1,0,0,-70deg);transform:translateX(100%) rotate3d(1,0,0,-70deg);}to{opacity:1;-webkit-transform:rotate3d(0,1,0,0deg);-ms-transform:rotate3d(0,1,0,0deg);transform:rotate3d(0,1,0,0deg);}}",".center-section.__jsx-style-dynamic-selector{height:65%;width:60%;border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".main-img.__jsx-style-dynamic-selector{height:50px;}","@media (max-width:500px){.main-img.__jsx-style-dynamic-selector{height:40px;}}",".suit-img.__jsx-style-dynamic-selector{height:15px;}","@media (max-width:500px){.suit-img.__jsx-style-dynamic-selector{height:12px;}}",".info-top.__jsx-style-dynamic-selector{position:absolute;top:5px;left:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".info-bottom.__jsx-style-dynamic-selector{position:absolute;bottom:5px;right:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}"]))},we=k.a.createElement;var ve=function(e){var t=e.id,n=e.isDisplayed,r=e.cardsToBeDealt;return we("div",{className:"jsx-3740569992 display-card-wrapper"},r.length>2&&we("button",{type:"button",onClick:function(){var e=window.innerWidth/3,n=document.getElementById(t),i=e*r.length;n.scrollTo({top:0,left:i,behavior:"smooth"})},className:"jsx-3740569992 btn"},we("i",{style:{fontSize:16},className:"jsx-3740569992 material-icons"},"arrow_forward")),we("div",{id:t,className:"jsx-3740569992 cards"},we("div",{className:"jsx-3740569992 card-slider"},n&&r.map((function(e){return we(ge,{key:e.id,info:e})})))),we(oe.a,{id:"3740569992"},[".display-card-wrapper.jsx-3740569992{width:100%;height:35%;overflow:hidden;position:relative;}",".cards.jsx-3740569992{position:relative;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;-webkit-perspective:800px;-moz-perspective:800px;-ms-perspective:800px;perspective:800px;width:50%;}",".cards.jsx-3740569992::-webkit-scrollbar{display:none;}",".card-slider.jsx-3740569992{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".btn.jsx-3740569992{z-index:10;position:absolute;height:35px;width:35px;color:#344955;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:10px;background:#fff;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:none;box-shadow:0px 2px 10px rgba(0,0,0,0.2);outline:none;}","@media (max-width:600px){.cards.jsx-3740569992{padding-left:5%;width:100%;overflow-x:scroll;-webkit-transition:all 400ms;transition:all 400ms;}}"]))},ke=k.a.createElement,_e="Wack Jack";var je=function(){var e=Object(v.useState)(""),t=e[0],n=e[1];return Object(v.useEffect)((function(){!function e(t){t<_e.length&&setTimeout((function(){n((function(e){return"".concat(e).concat(_e[t])})),e(t+=1)}),50)}(0)}),[]),ke("div",{className:"jsx-3673254246 logo-wrapper"},ke("img",{src:"https://res.cloudinary.com/dgdniqfi9/image/upload/v1550240315/lambda/cards.png",alt:"",width:"25%",className:"jsx-3673254246 logo-image"}),ke("div",{className:"jsx-3673254246 logo"},!!t[0]&&ke("span",{className:"jsx-3673254246"},t[0]),!!t[1]&&ke("span",{className:"jsx-3673254246"},t[1]),!!t[2]&&ke("span",{className:"jsx-3673254246"},t[2]),!!t[3]&&ke("span",{className:"jsx-3673254246"},t[3]),!!t[4]&&ke("span",{className:"jsx-3673254246"},t[4]),!!t[5]&&ke("span",{className:"jsx-3673254246"},t[5]),!!t[6]&&ke("span",{className:"jsx-3673254246"},t[6]),!!t[7]&&ke("span",{className:"jsx-3673254246"},t[7]),!!t[8]&&ke("span",{className:"jsx-3673254246"},t[8])),ke(oe.a,{id:"3673254246"},[".logo-wrapper.jsx-3673254246{position:absolute;top:20%;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".logo.jsx-3673254246{font-size:75px;height:90px;color:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:300px;}","span.jsx-3673254246{display:block;-webkit-animation-name:pop-jsx-3673254246;animation-name:pop-jsx-3673254246;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;font-family:'Lobster',cursive;}","@-webkit-keyframes pop-jsx-3673254246{0%{opacity:0;text-shadow:none;-webkit-transform:scale(1.05) translateX(0);-ms-transform:scale(1.05) translateX(0);transform:scale(1.05) translateX(0);}70%{opacity:1;color:#000;text-shadow:20px 40px 4px rgba(80,80,80,0.3);-webkit-transform:scaleY(1.2) scaleX(1.1);-ms-transform:scaleY(1.2) scaleX(1.1);transform:scaleY(1.2) scaleX(1.1);}100%{opacity:1;color:#000;text-shadow:none;-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}}","@keyframes pop-jsx-3673254246{0%{opacity:0;text-shadow:none;-webkit-transform:scale(1.05) translateX(0);-ms-transform:scale(1.05) translateX(0);transform:scale(1.05) translateX(0);}70%{opacity:1;color:#000;text-shadow:20px 40px 4px rgba(80,80,80,0.3);-webkit-transform:scaleY(1.2) scaleX(1.1);-ms-transform:scaleY(1.2) scaleX(1.1);transform:scaleY(1.2) scaleX(1.1);}100%{opacity:1;color:#000;text-shadow:none;-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}}"]))},Se=k.a.createElement,Ne=function(e){var t=e.gameStarted,n=e.title,r=e.showScore,i=e.userCardValue;return Se("div",{className:"jsx-2922536685 section-title"},t&&Se(k.a.Fragment,null,Se("div",{className:"jsx-2922536685 wrapper"},Se("small",{className:"jsx-2922536685"},n)),r&&Se("div",{className:"jsx-2922536685 wrapper"},Se("small",{className:"jsx-2922536685 score"},i))),Se(oe.a,{id:"2922536685"},[".section-title.jsx-2922536685{box-sizing:border-box;font-size:16px;height:50px;width:90%;margin:0 5%;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".wrapper.jsx-2922536685{box-sizing:border-box;background:#fff;height:30px;padding:2px 20px;border:1px #eaeaea solid;border-radius:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".score.jsx-2922536685{color:#faab1a;}"]))},Ce=k.a.createElement;var Oe=function(e){var t=e.userCardValue,n=e.gameInitiated,r=e.scores;return Ce("div",{className:"total-wrapper"},n&&Ce("div",{className:"scores"},Ce("div",{className:"score"},"You: ",Ce("span",{className:"score-number"},r.userScore)),Ce("div",{className:"score"},"Dealer: ",Ce("span",{className:"score-number"},r.dealerScore)),Ce("div",{className:"score"},"Hand total: ",Ce("span",{className:"score-number"},t))))},ze=k.a.createElement;function Re(e){var t=e.cards,n=e.scores,r=e.setScores,i=e.gameInitiated,s=e.setGameInitiated,o=Object(v.useState)(!1),a=o[0],c=o[1],l=Object(v.useState)(!1),u=l[0],d=l[1],f=Object(v.useState)(t),p=f[0],m=f[1],h=Object(v.useState)([]),b=h[0],x=h[1],y=Object(v.useState)(0),g=y[0],w=y[1],k=Object(v.useState)([]),_=k[0],j=k[1],S=Object(v.useState)(0),N=S[0],C=S[1],O=Object(v.useState)(!1),z=O[0],R=O[1],F=Object(v.useState)(!1),E=F[0],T=F[1];Object(v.useEffect)((function(){var e=H(b),t=e>21;if(w(e),t){w("BUST");var i=Q(e,N,n);R(i.message),r(i.score),d(!0)}}),[b]),Object(v.useEffect)((function(){var e=H(_);if((C(e),a)&&e<15){var t=K(p),n=[].concat(W(_),[t]),r=G(t,p);j(n),m(r)}}),[_]),Object(v.useEffect)((function(){if(E){var e=Q(g,N,n);R(e.message),r(e.score),localStorage.setItem("scores",ie()(e.score))}}),[E]),Object(v.useEffect)((function(){if(21===H(b)){d(!0);var e=Q("black-jack",null,n);R(e.message),r(e.score)}}),[a]);var I={start:function(){s(!0),c(!0),d(!1);var e=$(p);m(e.cards),x(e.userCards),j(e.dealerCards)},stick:function(){T(!0),d(!0)},reset:function(){c(!1),R(!1),T(!1),x([]),j([])},hit:function(){var e=K(p),t=G(e,p);x([].concat(W(b),[e])),m(t)},gameStarted:a,gameFinished:u};return ze("section",{className:"table"},ze("div",{className:"content"},!i&&ze(je,null),ze(Oe,{userCardValue:g,gameInitiated:i,scores:n}),ze(Ne,{title:"Dealer's Cards",gameStarted:a}),ze(ve,{isDisplayed:a,id:"dealer-cards",cardsToBeDealt:z?_:[_[0]]}),ze(xe,{winner:z||""}),ze(Ne,{title:"Your Cards",showScore:!0,userCardValue:g,gameStarted:a}),ze(ve,{id:"your-cards",isDisplayed:!0,cardsToBeDealt:b}),ze(pe,ne({background:"#344955",height:"55px"},I)),ze(he,null)))}var Fe=k.a.createElement;var Ee=function(){var e=JSON.parse(localStorage.getItem("scores"))||{userScore:0,dealerScore:0},t=Object(v.useState)(e),n=t[0],r=t[1],i=Object(v.useState)(!1),s=i[0],o=i[1],a=U(5);return Fe(k.a.Fragment,null,Fe(Re,{cards:a,scores:n,setScores:r,gameInitiated:s,setGameInitiated:o}))},Te=k.a.createElement,Ie=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,x(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=g()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Te(Ee,null)}}])&&s(n.prototype,r),i&&s(n,i),t}(k.a.Component);t.default=Ie},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n("9kyW")),i=s(n("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=s,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),s=t+i;return e[s]||(e[s]="jsx-"+(0,r.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var s=this.computeId(i,r);return{styleId:s,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},W7oM:function(e,t,n){n("nZgG");var r=n("WEpk").Object;e.exports=function(e,t){return r.defineProperties(e,t)}},XoMD:function(e,t,n){e.exports=n("hYAz")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,s=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,s,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(r,n):s.appendChild(r),r},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,s),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,n("8oxB"))},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},nZgG:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},"oh+g":function(e,t,n){var r=n("WEpk"),i=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},uplh:function(e,t,n){var r=n("ar/p"),i=n("mqlF"),s=n("5K7Z"),o=n("5T2Y").Reflect;e.exports=o&&o.ownKeys||function(e){var t=r.f(s(e)),n=i.f;return n?t.concat(n(e)):t}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xDdU:function(e,t,n){var r,i,s=n("4fRq"),o=n("I2ZF"),a=0,c=0;e.exports=function(e,t,n){var l=t&&n||0,u=t||[],d=(e=e||{}).node||r,f=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==f){var p=s();null==d&&(d=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=i=16383&(p[6]<<8|p[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:c+1,b=m-a+(h-c)/1e4;if(b<0&&void 0===e.clockseq&&(f=f+1&16383),(b<0||m>a)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=m,c=h,i=f;var x=(1e4*(268435455&(m+=122192928e5))+h)%4294967296;u[l++]=x>>>24&255,u[l++]=x>>>16&255,u[l++]=x>>>8&255,u[l++]=255&x;var y=m/4294967296*1e4&268435455;u[l++]=y>>>8&255,u[l++]=255&y,u[l++]=y>>>24&15|16,u[l++]=y>>>16&255,u[l++]=f>>>8|128,u[l++]=255&f;for(var g=0;g<6;++g)u[l+g]=d[g];return t||o(u)}},xk4V:function(e,t,n){var r=n("4fRq"),i=n("I2ZF");e.exports=function(e,t,n){var s=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var a=0;a<16;++a)t[s+a]=o[a];return t||i(o)}}},[["vlRD",0,1]]]);