"use strict";(self.webpackChunkreact_homework_5=self.webpackChunkreact_homework_5||[]).push([[457],{2457:function(e,n,r){r.r(n),r.d(n,{Reviews:function(){return v}});var t=r(5861),a=r(9439),u=r(7757),c=r.n(u),s=r(2447),o=r(2791),i=r(7689),f=r(4390),p="Reviews_reviewItem__ax7Fo",l=r(3402),h=r(184),v=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),r=n[0],u=n[1],v=(0,o.useState)(!1),g=(0,a.Z)(v,2),d=g[0],m=g[1],w=(0,o.useState)(null),x=(0,a.Z)(w,2),Z=x[0],k=x[1],b=(0,i.UO)().movieId;return(0,o.useEffect)((function(){if(b){var e=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,f.Hu)(b);case 4:n=e.sent,0===(r=n.results).length&&k((0,h.jsx)("p",{children:"No reviews for this movie"})),u(r),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),l.ZP.error("Error! Please try again"),console.log(e.t0);case 14:return e.prev=14,m(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}}),[b]),(0,h.jsxs)(h.Fragment,{children:[d&&(0,h.jsx)(s.a,{}),r.length>0?(0,h.jsx)("ul",{children:r.map((function(e){var n=e.id,r=e.author,t=e.content;return(0,h.jsxs)("li",{className:p,children:[(0,h.jsx)("p",{children:(0,h.jsx)("b",{children:r})}),(0,h.jsx)("p",{children:t})]},n)}))}):Z,(0,h.jsx)(l.x7,{})]})}},4390:function(e,n,r){r.d(n,{Eb:function(){return f},Hg:function(){return s},Hu:function(){return p},V0:function(){return i},rs:function(){return o}});var t=r(5861),a=r(7757),u=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2Y4OTAwMmU5YzMyYzNmMDhkZGFhMGQ5ZDBkNTEwMCIsInN1YiI6IjYzNWMzNTkxZjI4ODM4MDA5YmQwMzg4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIKN_YBMgtp3274NYKbPzwIncyl81UfUTer5bLs5jLo");var s=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/week?page=".concat(n,"&language=en-US"));case 2:return r=e.sent,t=r.data,console.log(t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?language=en-US"));case 2:return r=e.sent,t=r.data,console.log(t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(u().mark((function e(n,r){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?language=en-US&query=".concat(n,"&page=").concat(r));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?language=en-US"));case 2:return r=e.sent,t=r.data,console.log(t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?language=en-US&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=457.9cb9e563.chunk.js.map