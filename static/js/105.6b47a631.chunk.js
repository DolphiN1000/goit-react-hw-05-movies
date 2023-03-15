"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[105],{105:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n=r(433),a=r(861),c=r(439),u=r(687),i=r.n(u),s=r(791),o=r(87),l=r(275),f={search:""},p=r(142);function h(e,t,r){return(t=(0,p.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.initialState,r=e.onSubmit,n=(0,s.useState)(v({},t)),a=(0,c.Z)(n,2),u=a[0],i=a[1],o=(0,s.useCallback)((function(e){var t=e.target,r=t.name,n=t.value;i((function(e){return v(v({},e),{},h({},r,n))}))}),[i]);return{state:u,setState:i,handleChange:o,handleSubmit:function(e){e.preventDefault(),r(v({},u)),i(v({},t))}}},b={},g=r(184),x=function(e){var t=e.initialState,r=e.onSubmit,n=d({initialState:t,onSubmit:r}),a=n.state,c=n.handleChange,u=n.handleSubmit,i=a.search;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("form",{className:b.form,onSubmit:u,children:(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{htmlFor:"",children:"Search movie"}),(0,g.jsx)("input",{value:i,onChange:c,name:"search",placeholder:"Search movie",required:!0}),(0,g.jsx)("button",{type:"submit",children:"Search"})]})})})},j=(0,s.memo)(x);x.defaultProps={initialState:{search:""}};var w=r(689),y={},S=function(e){var t=e.items,r=(0,w.TH)(),n=t.map((function(e){var t=e.id,n=e.title;return(0,g.jsx)(o.rU,{className:y.link,to:"/movies/".concat(t),state:{from:r},children:(0,g.jsx)("li",{className:y.item,children:(0,g.jsx)("h4",{children:n})})},t)}));return(0,g.jsx)("ul",{className:y.list,children:n})},k=(0,s.memo)(S);S.defaultProps={items:[]};var O=r(691),Z={},C=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),r=t[0],u=t[1],p=(0,s.useState)(!1),h=(0,c.Z)(p,2),m=h[0],v=h[1],d=(0,s.useState)(null),b=(0,c.Z)(d,2),x=b[0],w=b[1],y=(0,o.lr)(),S=(0,c.Z)(y,2),C=S[0],P=S[1],_=C.get("search"),F=C.get("page");(0,s.useEffect)((function(){if(_){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,l.qF)(_,F);case 4:t=e.sent,u((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w(e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_,u,F,v,w]);var N=(0,s.useCallback)((function(e){var t=e.search;P({search:t,page:1}),u([])}),[P]),D=(0,s.useCallback)((function(){P({search:_,page:Number(F)+1})}),[_,F,P]);return console.log(r),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j,{initialState:f,onSubmit:N}),(0,g.jsx)(k,{items:r}),m&&(0,g.jsx)(O.C,{visible:!0,height:"200",width:"200",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper",ballColors:["#ff0000","#00ff00","#0000ff"],backgroundColor:"#F4442E"}),x&&(0,g.jsx)("p",{className:Z.errorMessage,children:x}),r.length>=20*Number(F)&&(0,g.jsx)("button",{onClick:D,children:"Load more"}),"    "]})},P=function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(C,{})})}},275:function(e,t,r){r.d(t,{Jh:function(){return l},Zx:function(){return o},_r:function(){return f},dY:function(){return s},qF:function(){return i}});var n=r(861),a=r(687),c=r.n(a),u=r(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6c57fb02719926393bb8c06aa147886f",language:"en-US"}}),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,u.get("search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending/movie/day",e.next=3,u.get("trending/movie/day");case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t,"?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=105.6b47a631.chunk.js.map