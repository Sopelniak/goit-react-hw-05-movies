"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{680:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(885),c=t(689),a=t(731),u=t(791),o=t(527),s=t(184);function i(){var e=(0,u.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],f=(0,c.TH)();return(0,u.useEffect)((function(){o.y.fetchMoviesTrending().then(i)}),[]),t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Trending Today"}),(0,s.jsx)("ul",{children:t.map((function(e){var n=e.title,t=e.name,r=e.id;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(r),state:{from:f},children:n||t})},r)}))})]})}},527:function(e,n,t){t.d(n,{y:function(){return s}});var r=t(861),c=t(757),a=t.n(c),u="api_key=".concat("5e90f5ae4966eeebc5d8d32f49164d73"),o="https://api.themoviedb.org/3/",s={fetchMoviesTrending:function(){return(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"trending/all/day?").concat(u));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent.results);case 6:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"movie/").concat(e,"?").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMoviesSearch:function(){var e=arguments;return(0,r.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]&&e[0],n.next=3,fetch("".concat(o,"search/movie?").concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return r=n.sent,n.next=6,r.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))()},fetchMovieDetails:function(e){return(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"movie/").concat(e,"/credits?").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieCredits:function(e){return(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"movie/").concat(e,"/credits?").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieReviews:function(e){return(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"movie/").concat(e,"/reviews?").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()}}},861:function(e,n,t){function r(e,n,t,r,c,a,u){try{var o=e[a](u),s=o.value}catch(i){return void t(i)}o.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var u=e.apply(n,t);function o(e){r(u,c,a,o,s,"next",e)}function s(e){r(u,c,a,o,s,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=680.98bf5018.chunk.js.map