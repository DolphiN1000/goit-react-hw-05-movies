"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[871],{871:function(r,t,e){e.r(t);var n=e(861),a=e(439),u=e(687),c=e.n(u),s=e(791),i=e(689),o=e(275),p=e(184);t.default=function(){var r=(0,s.useState)([]),t=(0,a.Z)(r,2),e=t[0],u=t[1],f=(0,i.UO)().id;(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o._r)(f);case 3:t=r.sent,u(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[f]);var v=e.map((function(r){var t=r.id,e=r.author,n=r.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:e}),(0,p.jsx)("p",{children:n})]},t)}));return(0,p.jsx)("ul",{children:0!==v.length?v:"We don`t have any reviews for this movie"})}},275:function(r,t,e){e.d(t,{Jh:function(){return p},Zx:function(){return o},_r:function(){return f},dY:function(){return i},qF:function(){return s}});var n=e(861),a=e(687),u=e.n(a),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6c57fb02719926393bb8c06aa147886f",language:"en-US"}}),s=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n,a,s=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,r.next=3,c.get("search/movie",{params:{query:t,page:e}});case 3:return n=r.sent,a=n.data,r.abrupt("return",a.results);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return"trending/movie/day",r.next=3,c.get("trending/movie/day");case 3:return t=r.sent,e=t.data,r.abrupt("return",e.results);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t,"?"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t,"/credits?"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t,"/reviews?"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=871.251832a4.chunk.js.map