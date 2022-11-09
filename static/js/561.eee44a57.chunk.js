"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[561],{561:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(885),c=n(791),a=n(689),s=n(527);var u=n(184);function o(){var e=function(){var e=(0,c.useState)(null),t=(0,r.Z)(e,2),n=t[0],u=t[1],o=(0,a.UO)().movieId;return(0,c.useEffect)((function(){s.y.fetchMovieCredits(o).then(u)}),[o]),n}();return e&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:"cast-list",children:e.cast.map((function(e){var t=e.id,n=e.name,r=e.character,c=e.profile_path;return(0,u.jsxs)("li",{className:"cast-item",children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:n,width:"100"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{children:["Actor:",(0,u.jsxs)("b",{children:[" ",n]})]}),(0,u.jsxs)("p",{children:["Character:",(0,u.jsxs)("b",{children:[" ",r]})]})]})]},t)}))})})}},527:function(e,t,n){n.d(t,{y:function(){return o}});var r=n(861),c=n(757),a=n.n(c),s="api_key=".concat("5e90f5ae4966eeebc5d8d32f49164d73"),u="https://api.themoviedb.org/3/",o={fetchMoviesTrending:function(){return(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"trending/all/day?").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent.results);case 6:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"movie/").concat(e,"?").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMoviesSearch:function(){var e=arguments;return(0,r.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]&&e[0],t.next=3,fetch("".concat(u,"search/movie?").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))()},fetchMovieDetails:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"movie/").concat(e,"/credits?").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMovieCredits:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"movie/").concat(e,"/credits?").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMovieReviews:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"movie/").concat(e,"/reviews?").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()}}},861:function(e,t,n){function r(e,t,n,r,c,a,s){try{var u=e[a](s),o=u.value}catch(i){return void n(i)}u.done?t(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var s=e.apply(t,n);function u(e){r(s,c,a,u,o,"next",e)}function o(e){r(s,c,a,u,o,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=561.eee44a57.chunk.js.map