"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[667],{667:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var r=t(885),c=t(791),u=t(689),a=t(527);var s=t(184);function o(){var e=function(){var e=(0,c.useState)(null),n=(0,r.Z)(e,2),t=n[0],s=n[1],o=(0,u.UO)().movieId;return(0,c.useEffect)((function(){a.y.fetchMovieReviews(o).then(s)}),[o]),t}();return console.log(e),e&&(0,s.jsxs)(s.Fragment,{children:[e.results.length>0&&(0,s.jsx)("ul",{children:e.results.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:["Author:",(0,s.jsxs)("b",{children:[" ",t]})]}),(0,s.jsx)("p",{children:r})]},n)}))}),!e.results.length>0&&(0,s.jsx)("p",{children:"We don't have any reviews for this movie. \ud83d\ude25"})]})}},527:function(e,n,t){t.d(n,{y:function(){return o}});var r=t(861),c=t(757),u=t.n(c),a="api_key=".concat("5e90f5ae4966eeebc5d8d32f49164d73"),s="https://api.themoviedb.org/3/",o={fetchMoviesTrending:function(){return(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"trending/all/day?").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent.results);case 6:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"movie/").concat(e,"?").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMoviesSearch:function(){var e=arguments;return(0,r.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]&&e[0],n.next=3,fetch("".concat(s,"search/movie?").concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return r=n.sent,n.next=6,r.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))()},fetchMovieDetails:function(e){return(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"movie/").concat(e,"/credits?").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieCredits:function(e){return(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"movie/").concat(e,"/credits?").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieReviews:function(e){return(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"movie/").concat(e,"/reviews?").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()}}},861:function(e,n,t){function r(e,n,t,r,c,u,a){try{var s=e[u](a),o=s.value}catch(i){return void t(i)}s.done?n(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,u){var a=e.apply(n,t);function s(e){r(a,c,u,s,o,"next",e)}function o(e){r(a,c,u,s,o,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=667.9b6ed2cc.chunk.js.map