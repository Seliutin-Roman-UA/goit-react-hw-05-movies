"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[60],{60:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(885),i=n(791),s=n(689),c="Reveiws_author__X0e9M",r="Reveiws_content__rizpt",u="Reveiws_data__7X0Cu",o="Reveiws_reviews__RDUYA",d=n(322),_=n(184);var h=function(){var e=(0,s.UO)(),t=(0,i.useState)([]),n=(0,a.Z)(t,2),h=n[0],l=n[1],f=(0,i.useState)(!1),p=(0,a.Z)(f,2),m=p[0],v=p[1];return(0,i.useEffect)((function(){v(!0),fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/reviews?api_key=09fddff29ca445d38e447ae99342142f")).then((function(e){return e.json()})).then((function(e){l(e.results.map((function(e){return{author:e.author,content:e.content,updated_at:e.updated_at,id:e.id}})))})).catch((function(e){return console.log("shit happens",e)})).finally((function(){return v(!1)}))}),[e]),0===h.length?(0,_.jsx)("p",{children:" Can not find ane information"}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("ul",{children:h.map((function(e){var t=e.author,n=e.content,a=e.updated_at,i=e.id;return(0,_.jsxs)("li",{className:o,children:[(0,_.jsxs)("h2",{className:c,children:["Author: ",t]}),(0,_.jsx)("p",{className:r,children:n}),(0,_.jsxs)("p",{className:u,children:["Last update: ",a]})]},i)}))}),m&&(0,_.jsx)(d.i,{})]})}},322:function(e,t,n){n.d(t,{i:function(){return u}});n(791);var a=n.p+"static/media/film_.edec29a5e5d0c99737260c630eab0f72.svg",i="Spiner_backDrop__tSBdE",s="Spiner_modal__GF9zM",c="Spiner_img__KhcjE",r=n(184);function u(){return(0,r.jsx)("div",{className:i,children:(0,r.jsx)("div",{className:s,children:(0,r.jsx)("img",{src:a,alt:"",className:c})})})}}}]);
//# sourceMappingURL=60.25b7d18b.chunk.js.map