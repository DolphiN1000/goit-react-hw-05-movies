"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[714],{714:function(t,r,e){e.r(r),e.d(r,{default:function(){return f}});var n=e(439),a=e(791),u={list:"homePage_list__1rZKZ"},c=e(275),s=e(689),i=e(87),o=e(184),f=function(){var t=(0,a.useState)([]),r=(0,n.Z)(t,2),e=r[0],f=r[1];(0,a.useEffect)((function(){(0,c.dY)().then(f)}),[]);var p=(0,s.TH)(),d=e.map((function(t){var r=t.id,e=t.title,n=t.about;return(0,o.jsx)("li",{className:u.item,children:(0,o.jsxs)(i.rU,{to:"/movies/".concat(r),state:{from:p},children:[(0,o.jsx)("h4",{children:e}),(0,o.jsx)("p",{children:n})]})},r)}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Trending today"}),(0,o.jsx)("ul",{className:u.list,children:d})]})}},275:function(t,r,e){e.d(r,{Jh:function(){return f},Zx:function(){return o},_r:function(){return p},dY:function(){return i},qF:function(){return s}});var n=e(861),a=e(687),u=e.n(a),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6c57fb02719926393bb8c06aa147886f",language:"en-US"}}),s=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n,a,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,c.get("search/movie",{params:{query:r,page:e}});case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"trending/movie/day",t.next=3,c.get("trending/movie/day");case 3:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(r,"?"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(r,"/credits?"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(r,"/reviews?"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=714.d8db2a7e.chunk.js.map