"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[868],{845:function(e,a,n){n.d(a,{a:function(){return _}});var t=n(731),i=n(689),c="MovieGallery_gallery__Oyx2w",s="MovieGallery_movieCard__EGmQT",r="MovieGallery_movieLink__I3PNV",l="MovieGallery_movieImg__4HExA",o="MovieGallery_movieCaption__zkqUS",u=n(184);function _(e){var a=e.movies,n=(0,i.TH)();return(0,u.jsx)("ul",{className:c,children:a.map((function(e){var a=e.id,i=e.title,c=e.poster,_=e.date;return(0,u.jsx)("li",{className:s,children:(0,u.jsxs)(t.rU,{to:"/movies/".concat(a),state:n,className:r,children:[(0,u.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w185".concat(c),alt:""}),(0,u.jsx)("p",{className:o,children:i}),(0,u.jsx)("p",{className:o,children:null===_||void 0===_?void 0:_.slice(0,4)})]})},a)}))})}},868:function(e,a,n){n.r(a);var t=n(885),i=n(845),c=n(835),s=n(322),r=n(791),l=n(731),o=n(184);a.default=function(){var e=(0,r.useState)([]),a=(0,t.Z)(e,2),n=a[0],u=a[1],_=(0,r.useState)(!1),d=(0,t.Z)(_,2),m=d[0],f=d[1],p=(0,l.lr)(),g=(0,t.Z)(p,2),v=g[0],h=g[1],x=v.get("page")?Number(v.get("page")):1,j=(0,r.useRef)(1);return(0,r.useEffect)((function(){f(!0),fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=09fddff29ca445d38e447ae99342142f&page=".concat(x)).then((function(e){return e.json()})).then((function(e){j.current=e.total_pages,u(e.results.map((function(e){return{id:e.id,date:e.release_date,title:e.title,poster:e.poster_path}})))})).catch((function(e){return console.log("shit happens",e)})).finally((function(){return f(!1)}))}),[x]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Tranding today "}),(0,o.jsx)(i.a,{movies:n}),n.length>1&&(0,o.jsx)(c.t,{max:j.current,callback:function(e){h({page:x+e})},currentPage:x}),m&&(0,o.jsx)(s.i,{})]})}},835:function(e,a,n){n.d(a,{t:function(){return _}});var t=n(791),i=n(651),c="Pagination_wrapper__CdeaB",s="Pagination_pagination__vcNDC",r="Pagination_pagIcon__Wvimy",l="Pagination_pagPage__EU6Ae",o="Pagination_pagInput__OLhra",u=n(184);function _(e){var a=e.max,n=void 0===a?1:a,_=e.callback,d=e.currentPage,m=(0,t.useRef)();(0,t.useEffect)((function(){m.current.focus()}),[]);var f=function(e){var a;(a="SPAN"===e.currentTarget.nodeName?e.currentTarget.textContent:e.currentTarget.value)>n||a<1||_(a-d)};return(0,u.jsx)("div",{className:c,children:(0,u.jsxs)("div",{className:s,children:[(0,u.jsx)("span",{className:l,onClick:function(){d-1<1||_(-1)},children:(0,u.jsx)(i.gfl,{className:r})}),(0,u.jsx)("span",{className:l,onClick:f,children:"1"}),(0,u.jsx)("input",{type:"text",value:d,onChange:f,ref:m,className:o}),(0,u.jsx)("span",{className:l,onClick:f,children:n}),(0,u.jsx)("span",{className:l,onClick:function(){d+1>n||_(1)},children:(0,u.jsx)(i.KT4,{className:r})})]})})}},322:function(e,a,n){n.d(a,{i:function(){return l}});n(791);var t=n.p+"static/media/film_.edec29a5e5d0c99737260c630eab0f72.svg",i="Spiner_backDrop__tSBdE",c="Spiner_modal__GF9zM",s="Spiner_img__KhcjE",r=n(184);function l(){return(0,r.jsx)("div",{className:i,children:(0,r.jsx)("div",{className:c,children:(0,r.jsx)("img",{src:t,alt:"",className:s})})})}}}]);
//# sourceMappingURL=868.157d4734.chunk.js.map