(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[9],{73:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"k",(function(){return x})),n.d(t,"j",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"g",(function(){return k})),n.d(t,"f",(function(){return I})),n.d(t,"h",(function(){return L})),n.d(t,"i",(function(){return M}));var r=n(28),c=n(76),a=n(20),s=n(71),o=n.n(s),u=n(72),i=n(21);function l(e){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("userId","==",t).get();case 2:return n=e.sent,r=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(o.a.mark((function e(t,n){var r,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.b.firestore().collection("users"),r=n.length>0?r.where("userId","not-in",[].concat(Object(c.a)(n),[t])):r.where("userId","!=",t),e.next=4,r.limit(10).get();case 4:return s=e.sent,u=s.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,n){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.b.firestore().collection("users").doc(t).update({following:r?i.a.arrayRemove(n):i.a.arrayUnion(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,n){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.b.firestore().collection("users").doc(t).update({followers:r?i.a.arrayRemove(n):i.a.arrayUnion(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(o.a.mark((function e(t,n){var r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","in",n).get();case 2:return r=e.sent,c=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),console.log(c),e.next=7,Promise.all(c.map(function(){var e=Object(u.a)(o.a.mark((function e(n){var r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,n.likes.includes(t)&&(r=!0),e.next=4,b(n.userId);case 4:return c=e.sent,s=c[0].username,e.abrupt("return",Object(a.a)(Object(a.a)({username:s},n),{},{userLikedPhoto:r}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(o.a.mark((function e(t,n){var r,c,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","==",t).get();case 2:return r=e.sent,c=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),s=n,e.next=7,Promise.all(c.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,console.log(t.likes),t.likes.includes(s)&&(console.log("1"),n=!0),e.next=5,b(t.userId);case 5:return r=e.sent,c=r[0].username,console.log(n),e.abrupt("return",Object(a.a)(Object(a.a)({username:c},t),{},{userLikedPhoto:n}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:return l=e.sent,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","==",t).get();case 2:return n=e.sent,r=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(o.a.mark((function e(t,n){var c,s,u,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).where("following","array-contains",n).get();case 2:return c=e.sent,s=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),u=Object(r.a)(s,1),l=u[0],d=void 0===l?{}:l,e.abrupt("return",d.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t,n,r,c){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(o.a.mark((function e(t,n,r,c,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n,c,t);case 2:return e.next=4,v(r,a,t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="/images/avatars/default.png"},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(71),c=n.n(r),a=n(72),s=n(28),o=n(1),u=n(73);function i(e){var t=Object(o.useState)(),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.d)(t);case 2:n=e.sent,r=Object(s.a)(n,1),a=r[0],i(a||{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e&&function(e){t.apply(this,arguments)}(e)}),[e]),{user:r,setActiveUser:i}}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(1),c=n(6),a=n(19),s=n(17),o=n(29),u=n(14),i=n(74),l=n(75),d=n(4);function f(){var e=Object(r.useContext)(o.a).user,t=Object(l.a)(null===e||void 0===e?void 0:e.uid).user,n=Object(r.useContext)(s.a).firebase,f=Object(c.g)();return Object(d.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary mb-8",children:Object(d.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(d.jsxs)("div",{className:"flex justify-between h-full",children:[Object(d.jsxs)("div",{className:"text-gray-700 text-center flex items-center align-items cursor-pointer",children:[Object(d.jsx)("h1",{className:"flex justify-center w-full",children:Object(d.jsx)(a.b,{to:u.a,"aria-label":"Instagram logo",children:Object(d.jsx)("img",{src:"/images/logo.png",alt:"Instagram",className:"mt-2 w-6/12"})})}),Object(d.jsx)("button",{type:"button",title:"Sign Out",onClick:function(){n.auth().signOut(),f.push(u.b)},onKeyDown:function(e){"Enter"===e.key&&(n.auth().signOut(),f.push(u.b))},children:Object(d.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]}),Object(d.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items",children:e?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.b,{to:u.a,"aria-label":"Dashboard",children:Object(d.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),Object(d.jsx)("button",{type:"button",title:"Sign Out",onClick:function(){n.auth().signOut(),f.push(u.b)},onKeyDown:function(e){"Enter"===e.key&&(n.auth().signOut(),f.push(u.b))},children:Object(d.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),t&&Object(d.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(d.jsx)(a.b,{to:"/p/".concat(null===t||void 0===t?void 0:t.username),children:Object(d.jsx)("img",{className:"rounded-full h-8 w-8 flex",src:"/images/avatars/".concat(null===t||void 0===t?void 0:t.username,".jpg"),alt:"".concat(null===t||void 0===t?void 0:t.username," profile"),onError:function(e){e.target.src=i.a}})})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.b,{to:u.b,children:Object(d.jsx)("button",{type:"button",className:"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8",children:"Log In"})}),Object(d.jsx)(a.b,{to:u.e,children:Object(d.jsx)("button",{type:"button",className:"font-bold text-sm rounded text-blue-medium w-20 h-8",children:"Sign Up"})})]})})]})})})}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(71),c=n.n(r),a=n(72),s=n(28),o=n(6),u=n(1),i=n(73),l=n(14),d=n(78),f=n(20),p=n(79),b=n.n(p),j=n(75),h=n(29),m=n(74),x=n(4);function O(e){var t=e.photosCount,n=e.followerCount,r=e.setFollowerCount,o=e.profile,l=o.docId,d=o.userId,f=o.fullName,p=o.followers,O=o.following,v=o.username,w=Object(u.useContext)(h.a).user,g=Object(j.a)(null===w||void 0===w?void 0:w.uid).user,y=Object(u.useState)(null),k=Object(s.a)(y,2),N=k[0],I=k[1],C=(null===g||void 0===g?void 0:g.username)&&(null===g||void 0===g?void 0:g.username)!==v,L=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I((function(e){return!e})),r({followerCount:N?n-1:n+1}),e.next=4,Object(i.i)(N,g.docId,l,d,g.userId);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){var e=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.h)(g.username,d);case 2:t=e.sent,I(!!t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(null===g||void 0===g?void 0:g.username)&&d&&e()}),[null===g||void 0===g?void 0:g.username,d]),Object(x.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg",children:[Object(x.jsx)("div",{className:"container flex justify-center items-center",children:v?Object(x.jsx)("img",{className:"rounded-full h-40 w-40 flex",alt:"".concat(f," profile picture"),src:"/images/avatars/".concat(v,".jpg"),onError:function(e){e.target.src=m.a}}):Object(x.jsx)(b.a,{circle:!0,height:150,width:150,count:1})}),Object(x.jsxs)("div",{className:"flex items-center justify-center flex-col col-span-2",children:[Object(x.jsxs)("div",{className:"container flex items-center",children:[Object(x.jsx)("p",{className:"text-2xl mr-4",children:v}),C&&null===N?Object(x.jsx)(b.a,{count:1,width:80,height:32}):C&&Object(x.jsx)("button",{className:"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8",type:"button",onClick:L,onKeyDown:function(e){"Enter"===e.key&&L()},children:N?"Unfollow":"Follow"})]}),Object(x.jsx)("div",{className:"container flex mt-4",children:p&&O?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{className:"mr-10",children:[Object(x.jsx)("span",{className:"font-bold",children:t})," photos"]}),Object(x.jsxs)("p",{className:"mr-10",children:[Object(x.jsx)("span",{className:"font-bold",children:n})," ",1===n?"follower":"followers"]}),Object(x.jsxs)("p",{className:"mr-10",children:[Object(x.jsx)("span",{className:"font-bold",children:null===O||void 0===O?void 0:O.length})," following"]})]}):Object(x.jsx)(b.a,{count:1,width:677,height:24})}),Object(x.jsx)("div",{className:"container mt-4",children:Object(x.jsx)("p",{className:"font-medium",children:f||Object(x.jsx)(b.a,{count:1,height:24})})})]})]})}var v=n(19);function w(e){var t=e.photos;return Object(x.jsxs)("div",{className:"h-16 border-t border-gray-primary mt-12 pt-4",children:[Object(x.jsx)("div",{className:"grid grid-cols-3 gap-8 mt-4 mb-12",children:t?t.length>0?t.map((function(e){return Object(x.jsx)("div",{className:"relative group",children:Object(x.jsxs)(v.b,{to:"/".concat(e.userId,"/").concat(e.docId),"aria-label":"photo",children:[Object(x.jsx)("img",{src:e.imageSrc,alt:e.caption}),Object(x.jsxs)("div",{className:"absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden",children:[Object(x.jsxs)("p",{className:"flex items-center text-white font-bold",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 mr-4",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),e.likes.length]}),Object(x.jsxs)("p",{className:"flex items-center text-white font-bold",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 mr-4",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})}),e.comments.length]})]})]})},e.docId)})):null:new Array(12).fill(0).map((function(e,t){return Object(x.jsx)(b.a,{width:320,height:400},t)}))}),!t||0===t.length&&Object(x.jsx)("p",{className:"text-center text-2xl",children:"No Posts Yet"})]})}function g(e){var t=e.user,n=Object(u.useReducer)((function(e,t){return Object(f.a)(Object(f.a)({},e),t)}),{profile:{},photosCollection:null,followerCount:0}),r=Object(s.a)(n,2),o=r[0],l=o.profile,d=o.photosCollection,p=o.followerCount,b=r[1];return Object(u.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.f)(t.userId);case 2:n=e.sent,b({profile:t,photosCollection:n,followerCount:t.followers.length});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.username]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{photosCount:d?d.length:0,profile:l,followerCount:p,setFollowerCount:b}),Object(x.jsx)(w,{photos:d})]})}function y(){var e=Object(o.h)().username,t=Object(u.useState)(null),n=Object(s.a)(t,2),r=n[0],f=n[1],p=Object(o.g)();return Object(u.useEffect)((function(){function t(){return(t=Object(a.a)(c.a.mark((function t(){var n,r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.e)(e);case 2:n=t.sent,r=Object(s.a)(n,1),(null===(a=r[0])||void 0===a?void 0:a.userId)?f(a):p.push(l.c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,p]),(null===r||void 0===r?void 0:r.username)?Object(x.jsxs)("div",{className:"bg-gray-background",children:[Object(x.jsx)(d.a,{}),Object(x.jsx)("div",{className:"mx-auto max-w-screen-lg",children:Object(x.jsx)(g,{user:r})})]}):null}}}]);
//# sourceMappingURL=9.ec340bc9.chunk.js.map