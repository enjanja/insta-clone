(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[7],{73:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return f})),n.d(t,"k",(function(){return x})),n.d(t,"j",(function(){return v})),n.d(t,"b",(function(){return w})),n.d(t,"g",(function(){return k})),n.d(t,"f",(function(){return I})),n.d(t,"h",(function(){return L})),n.d(t,"i",(function(){return D}));var r=n(28),c=n(76),a=n(20),s=n(71),o=n.n(s),u=n(72),i=n(21);function l(e){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("userId","==",t).get();case 2:return n=e.sent,r=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(o.a.mark((function e(t,n){var r,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.b.firestore().collection("users"),r=n.length>0?r.where("userId","not-in",[].concat(Object(c.a)(n),[t])):r.where("userId","!=",t),e.next=4,r.limit(10).get();case 4:return s=e.sent,u=s.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,n){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.b.firestore().collection("users").doc(t).update({following:r?i.a.arrayRemove(n):i.a.arrayUnion(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,n){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.b.firestore().collection("users").doc(t).update({followers:r?i.a.arrayRemove(n):i.a.arrayUnion(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(o.a.mark((function e(t,n){var r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","in",n).get();case 2:return r=e.sent,c=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),console.log(c),e.next=7,Promise.all(c.map(function(){var e=Object(u.a)(o.a.mark((function e(n){var r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,n.likes.includes(t)&&(r=!0),e.next=4,j(n.userId);case 4:return c=e.sent,s=c[0].username,e.abrupt("return",Object(a.a)(Object(a.a)({username:s},n),{},{userLikedPhoto:r}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(o.a.mark((function e(t,n){var r,c,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","==",t).get();case 2:return r=e.sent,c=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),s=n,e.next=7,Promise.all(c.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,console.log(t.likes),t.likes.includes(s)&&(console.log("1"),n=!0),e.next=5,j(t.userId);case 5:return r=e.sent,c=r[0].username,console.log(n),e.abrupt("return",Object(a.a)(Object(a.a)({username:c},t),{},{userLikedPhoto:n}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:return l=e.sent,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","==",t).get();case 2:return n=e.sent,r=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(o.a.mark((function e(t,n){var c,s,u,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).where("following","array-contains",n).get();case 2:return c=e.sent,s=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),u=Object(r.a)(s,1),l=u[0],d=void 0===l?{}:l,e.abrupt("return",d.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,n,r,c){return M.apply(this,arguments)}function M(){return(M=Object(u.a)(o.a.mark((function e(t,n,r,c,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n,c,t);case 2:return e.next=4,v(r,a,t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="/images/avatars/default.png"},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(71),c=n.n(r),a=n(72),s=n(28),o=n(1),u=n(73);function i(e){var t=Object(o.useState)(),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.d)(t);case 2:n=e.sent,r=Object(s.a)(n,1),a=r[0],i(a||{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e&&function(e){t.apply(this,arguments)}(e)}),[e]),{user:r,setActiveUser:i}}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(1),c=n(6),a=n(19),s=n(17),o=n(29),u=n(14),i=n(74),l=n(75),d=n(4);function p(){var e=Object(r.useContext)(o.a).user,t=Object(l.a)(null===e||void 0===e?void 0:e.uid).user,n=Object(r.useContext)(s.a).firebase,p=Object(c.g)();return Object(d.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary mb-8",children:Object(d.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(d.jsxs)("div",{className:"flex justify-between h-full",children:[Object(d.jsxs)("div",{className:"text-gray-700 text-center flex items-center align-items cursor-pointer",children:[Object(d.jsx)("h1",{className:"flex justify-center w-full",children:Object(d.jsx)(a.b,{to:u.a,"aria-label":"Instagram logo",children:Object(d.jsx)("img",{src:"/images/logo.png",alt:"Instagram",className:"mt-2 w-6/12"})})}),Object(d.jsx)("button",{type:"button",title:"Sign Out",onClick:function(){n.auth().signOut(),p.push(u.b)},onKeyDown:function(e){"Enter"===e.key&&(n.auth().signOut(),p.push(u.b))},children:Object(d.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]}),Object(d.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items",children:e?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.b,{to:u.a,"aria-label":"Dashboard",children:Object(d.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),Object(d.jsx)("button",{type:"button",title:"Sign Out",onClick:function(){n.auth().signOut(),p.push(u.b)},onKeyDown:function(e){"Enter"===e.key&&(n.auth().signOut(),p.push(u.b))},children:Object(d.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),t&&Object(d.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(d.jsx)(a.b,{to:"/p/".concat(null===t||void 0===t?void 0:t.username),children:Object(d.jsx)("img",{className:"rounded-full h-8 w-8 flex",src:"/images/avatars/".concat(null===t||void 0===t?void 0:t.username,".jpg"),alt:"".concat(null===t||void 0===t?void 0:t.username," profile"),onError:function(e){e.target.src=i.a}})})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.b,{to:u.b,children:Object(d.jsx)("button",{type:"button",className:"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8",children:"Log In"})}),Object(d.jsx)(a.b,{to:u.e,children:Object(d.jsx)("button",{type:"button",className:"font-bold text-sm rounded text-blue-medium w-20 h-8",children:"Sign Up"})})]})})]})})})}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(1),c=n(19),a=n(4);function s(e){var t=e.username;return Object(a.jsx)("div",{className:"flex border-b border-gray-primary h-4 p-4 py-8",children:Object(a.jsx)("div",{className:"flex items-center",children:Object(a.jsxs)(c.b,{to:"/p/".concat(t),className:"flex items-center",children:[Object(a.jsx)("img",{className:"rounded-full h-8 w-8 flex mr-3",src:"/images/avatars/".concat(t,".jpg"),alt:"".concat(t," profile picture")}),Object(a.jsx)("p",{className:"font-bold",children:t})]})})})}function o(e){var t=e.src,n=e.caption;return Object(a.jsx)("img",{src:t,alt:n})}var u=n(71),i=n.n(u),l=n(72),d=n(28),p=n(17),b=n(29);function j(e){var t=e.docId,n=e.totalLikes,c=e.likedPhoto,s=e.handleFocus,o=Object(r.useContext)(b.a).user.uid,u=Object(r.useState)(c),j=Object(d.a)(u,2),m=j[0],f=j[1],h=Object(r.useState)(n),x=Object(d.a)(h,2),O=x[0],v=x[1],g=Object(r.useContext)(p.a),w=g.firebase,y=g.FieldValue,k=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f((function(e){return!e})),e.next=3,w.firestore().collection("photos").doc(t).update({likes:m?y.arrayRemove(o):y.arrayUnion(o)});case 3:v((function(e){return m?e-1:e+1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"flex justify-between p-4",children:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("svg",{onClick:k,onKeyDown:function(e){"Enter"===e.key&&k()},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,className:"w-8 mr-4 select-none cursor-pointer focus:outline-none ".concat(m?"fill-red text-red-primary":"text-black-light"),children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Object(a.jsx)("svg",{onClick:s,onKeyDown:function(e){"Enter"===e.key&&s()},className:"w-8 text-black-light select-none cursor-pointer focus:outline-none",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})]})}),Object(a.jsx)("div",{className:"p-4 py-0",children:Object(a.jsx)("p",{className:"font-bold",children:"".concat(O,1===O?" like":" likes")})})]})}function m(e){var t=e.caption,n=e.username;return Object(a.jsxs)("div",{className:"p-4 pt-2 pb-1",children:[Object(a.jsx)("span",{className:"mr-1 font-bold",children:n}),Object(a.jsx)("span",{className:"italic",children:t})]})}var f=n(91),h=n(76);function x(e){var t=e.docId,n=e.comments,c=e.setComments,s=e.commentInput,o=Object(r.useState)(""),u=Object(d.a)(o,2),i=u[0],l=u[1],j=Object(r.useContext)(p.a),m=j.firebase,f=j.FieldValue,x=Object(r.useContext)(b.a).user.displayName,O=function(e){return e.preventDefault(),c([].concat(Object(h.a)(n),[{displayName:x,comment:i}])),l(""),m.firestore().collection("photos").doc(t).update({comments:f.arrayUnion({displayName:x,comment:i})})};return Object(a.jsx)("div",{className:"border-t border-gray-primary",children:Object(a.jsxs)("form",{className:"flex justify-between pl-0 pr-5",method:"POST",onSubmit:function(e){return i.length>=1?O(e):e.preventDefault()},children:[Object(a.jsx)("input",{"aria-label":"Add a comment",autoComplete:"off",className:"text-sm text-gray-base w-full mr-3 py-5 px-4",type:"text",name:"add-comment",placeholder:"Add a comment...",value:i,onChange:function(e){var t=e.target;return l(t.value)},ref:s}),Object(a.jsx)("button",{className:"text-sm font-bold text-blue-medium ".concat(!i&&"opacity-25"),type:"button",disabled:i.length<1,onClick:O,children:"Post"})]})})}function O(e){var t=e.docId,n=e.comments,s=e.posted,o=e.commentInput,u=Object(r.useState)(n),i=Object(d.a)(u,2),l=i[0],p=i[1],b=Object(r.useState)(3),j=Object(d.a)(b,2),m=j[0],h=j[1],O=function(){h(m+3)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"p-4 pt-1 pb-4",children:[l.slice(0,m).map((function(e){return Object(a.jsxs)("p",{className:"mb-1",children:[Object(a.jsx)(c.b,{to:"/p/".concat(e.displayName),children:Object(a.jsx)("span",{className:"mr-1 font-bold",children:e.displayName})}),Object(a.jsx)("span",{children:e.comment})]},"".concat(e.comment,"-").concat(e.displayName))})),l.length>=3&&m<l.length&&Object(a.jsx)("button",{className:"text-sm text-gray-base mb-1 cursor-pointer focus:outline-none",type:"button",onClick:O,onKeyDown:function(e){"Enter"===e.key&&O()},children:"View more comments"}),Object(a.jsxs)("p",{className:"text-gray-base uppercase text-xs mt-2",children:[Object(f.a)(s,new Date)," ago"]})]}),Object(a.jsx)(x,{docId:t,comments:l,setComments:p,commentInput:o})]})}function v(e){var t=e.content,n=Object(r.useRef)(null);return Object(a.jsxs)("div",{className:"rounded col-span-4 border bg-white border-gray-primary mb-12",children:[Object(a.jsx)(s,{username:t.username}),Object(a.jsx)(o,{src:t.imageSrc,caption:t.caption}),Object(a.jsx)(j,{docId:t.docId,totalLikes:t.likes.length,likedPhoto:t.userLikedPhoto,handleFocus:function(){return n.current.focus()}}),Object(a.jsx)(m,{caption:t.caption,username:t.username}),Object(a.jsx)(O,{docId:t.docId,comments:t.comments,posted:t.dateCreated,commentInput:n})]})}},90:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(71),c=n.n(r),a=n(72),s=n(28),o=n(20),u=n(1),i=n(6),l=n(79),d=n.n(l),p=n(80),b=n(73),j=n(78),m=n(4);function f(e){var t=e.user;console.log(t);var n=Object(i.h)(),r=n.userId,l=n.imgId,f={photo:void 0},h=Object(u.useReducer)((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),f),x=Object(s.a)(h,2),O=x[0].photo,v=x[1];return Object(u.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.g)(r,t.uid);case 2:n=e.sent,a=n.filter((function(e){return e.docId===l}))[0],console.log(a),v({photo:a});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),Object(m.jsxs)("div",{className:"bg-gray-background ",children:[Object(m.jsx)(j.a,{}),Object(m.jsx)("div",{className:"grid grid-cols-5",children:Object(m.jsx)("div",{className:"col-span-2 mx-auto max-w-screen-lg",children:O?Object(m.jsx)(p.a,{content:O},O.docId):Object(m.jsx)(d.a,{count:4,width:640,height:500,className:"mb-5"})})})]})}}}]);
//# sourceMappingURL=7.6f9be245.chunk.js.map