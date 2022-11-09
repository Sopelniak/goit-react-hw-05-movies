"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{278:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),c=n(885),a=n(757),u=n.n(a),s=n(791),o=n(731),i=n(689),f=n(527),v=n(184);function h(){var e=(0,o.lr)(),t=(0,c.Z)(e,2),n=t[0],a=t[1],h=(0,s.useState)(null),p=(0,c.Z)(h,2),d=p[0],l=p[1],x=n.get("query"),m=(0,i.TH)();(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.y.fetchMoviesSearch(x);case 2:t=e.sent,l(t.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}null!==x&&function(){e.apply(this,arguments)}()}),[x]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;a({query:t.elements.search.value}),t.reset()},children:[(0,v.jsx)("input",{type:"text",name:"search"}),(0,v.jsx)("button",{type:"submit",children:"Search"})]}),d&&(0,v.jsx)("ul",{children:d.map((function(e){var t=e.title,n=e.name,r=e.id;return(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"/movies/".concat(r),state:{from:m},children:t||n})},r)}))})]})}},527:function(e,t,n){n.d(t,{y:function(){return o}});var r=n(861),c=n(757),a=n.n(c),u="api_key=".concat("5e90f5ae4966eeebc5d8d32f49164d73"),s="https://api.themoviedb.org/3/",o={fetchMoviesTrending:function(){return(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"trending/all/day?").concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent.results);case 6:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"movie/").concat(e,"?").concat(u));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMoviesSearch:function(){var e=arguments;return(0,r.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]&&e[0],t.next=3,fetch("".concat(s,"search/movie?").concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))()},fetchMovieDetails:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"movie/").concat(e,"/credits?").concat(u));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMovieCredits:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"movie/").concat(e,"/credits?").concat(u));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMovieReviews:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"movie/").concat(e,"/reviews?").concat(u));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()}}},861:function(e,t,n){function r(e,t,n,r,c,a,u){try{var s=e[a](u),o=s.value}catch(i){return void n(i)}s.done?t(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var u=e.apply(t,n);function s(e){r(u,c,a,s,o,"next",e)}function o(e){r(u,c,a,s,o,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=278.f4f895ac.chunk.js.map