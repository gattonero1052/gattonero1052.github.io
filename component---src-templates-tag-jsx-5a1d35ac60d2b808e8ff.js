(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return p}),r.d(t,"pageQuery",function(){return f});var n=r(9),a=r.n(n),i=r(0),o=r.n(i),s=r(162),c=r.n(s),l=r(165),u=r(194),d=r(161),h=r.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(l.a,null,o.a.createElement("div",{className:"tag-container"},o.a.createElement(c.a,{title:'Posts tagged as "'+e+'" | '+h.a.siteTitle}),o.a.createElement(u.a,{postEdges:t})))},t}(o.a.Component),f="3824571933"},161:function(e,t,r){r(36);var n={siteTitle:"MSKf's Tree BLOG",siteTitleShort:"MSKf's Tree",siteTitleAlt:"MSKF TREE BLOG",siteLogo:"/logos/logo-1024.png",siteUrl:"https://mskf.work",pathPrefix:"",siteDescription:"",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"mskf-work",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY/MM/DD",dateFormat:"MM/DD/YYYY",userName:"mskf",userEmail:"gattonero1052@example.com",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},165:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var n=r(9),a=r.n(n),i=r(0),o=r.n(i),s=r(162),c=r.n(s),l=r(161),u=r.n(l),d=(r(185),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:u.a.siteDescription})),e)},t}(o.a.Component))},166:function(e,t,r){"use strict";r.d(t,"c",function(){return l}),r.d(t,"a",function(){return d}),r.d(t,"b",function(){return s});var n=r(0),a=r.n(n),i=(r(56),r(236),r(195)),o=r(175),s="-1",c=["#478BA2","#DE585D","#E97658","#E2A490","#89D4DB"],l=function(e){for(var t=0,r=0;r<e.length;r++)t+=e.charCodeAt(r);return c[t%c.length]},u=function(e){var t=e.tag,r=e.refresh,n=Object(i.c)({item:{name:t,type:s},end:function(e,n){var a=n.getDropResult();if(e&&a){Object(o.a)(a.node,t);r()}},collect:function(e){return{isDragging:e.isDragging()}}}),c=n[0].isDragging,u=n[1],d=l(t),h=c?.4:1;return a.a.createElement("div",{ref:u,key:t,className:"tag-item",style:{opacity:h,color:d}},t)},d=function(e){var t=e.tags,r=e.refresh;return a.a.createElement("div",{className:"tag-list"},t.map(function(e){return a.a.createElement(u,{key:e,tag:e,refresh:r})}))}},175:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"f",function(){return o}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return c}),r.d(t,"g",function(){return l}),r.d(t,"d",function(){return d}),r.d(t,"e",function(){return u});r(237),r(37);var n=r(166),a=function(e){this.id=Math.random().toString().substr(2),this.children=[],this.value=e,this.parent=null,this.isTemp=0,this.isFake=0},i=function(e,t){var r=new a(t);return r.parent=e,r.level=1+(0|e.level),e.children.push(r),r},o=function(e){return null==e.parent?e:findRoot(e.parent)},s=function e(t,r,n){if(t){r(t,n);for(var a=0;a<t.children.length;a++)e(t.children[a],r,t)}},c=function e(t,r){if(!t)return null;if(t.id==r)return t;for(var n=null,a=0;!n&&a<t.children.length;a++)n=e(t.children[a],r);return n},l=function(e,t){s(e,function(e){return e._spaceCount=0});var r=function(e,t){for(;e!=t;)(e=e.parent)._spaceCount=(e._spaceCount||1)+1},n="SPLITTER",i=[e,n],o=0,c=[],l=e;do{for(;i[0]!=n;){var u=i.splice(0,1)[0];0==u.children.length&&0,u._needToAdd&&r(u,l);for(var d=0;d<u.children.length;d++)d>0&&(u.children[d]._needToAdd=!0),i.push(u.children[d])}i.push(i.splice(0,1)[0]),o++}while(o<t&&i.length>1);var h,p=o;o=0,i=[e,n];do{for(c[o]=[];i[0]!=n;){var f=i.splice(0,1)[0];if((f.isFake||0==f.children.length)&&o<p-1&&i.push((h=void 0,(h=new a("")).isFake=1,h)),c[o].push(f),f.level=o,!f.isFake)for(var m=0;m<f.children.length;m++)i.push(f.children[m])}i.push(i.splice(0,1)[0]),o++}while(o<t&&i.length>1);for(var g=0;g<=t-c.length;g++)c.push([]);return c},u=function e(t){if(!t||!t._domObject)return[];var r=t._domObject.getClientRects()[0],a=[];if(!r||!r.x)return[];for(var i=0;i<t.children.length;i++)if(t.children[i]._domObject){var o=t.children[i]._domObject.getClientRects()[0];a.push({color:Object(n.c)(t.value),start:{x:r.left+r.width/2,y:r.top+r.height/2},end:{x:o.left+o.width/2,y:o.top+o.height/2}}),a=a.concat(e(t.children[i])),console.log(a)}return a},d=function(){var e=new a("ROOT");return e.id="root",e.level=0,e}},194:function(e,t,r){"use strict";r(36),r(78);var n=r(9),a=r.n(n),i=r(0),o=r.n(i),s=r(56),c=r(166),l=(r(238),function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var r=t.prototype;return r.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){var r=t.node.rawMarkdownBody.match(/(#{1,5} .*[\n\r])/g)||[];e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags||[],cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead,abstract:t.node.frontmatter.abstract||r.map(function(e){return e.replace(/^#+/,"").trim()}).join("  ")})}),e},r.render=function(){var e=this,t=this.getPostList();return o.a.createElement("div",null,t.map(function(t){return o.a.createElement("div",{className:"post-list",key:t.path},o.a.createElement("div",{className:"post-left"},o.a.createElement("div",{className:"post-title"},o.a.createElement(s.Link,{to:t.path,key:t.title},t.title)),o.a.createElement("div",{className:"post-tags"}),o.a.createElement("div",{className:"post-abstract"},t.abstract)),o.a.createElement("div",{className:"post-right"},o.a.createElement("div",{className:"post-tags"},o.a.createElement(c.a,{refresh:e.props.refresh,tags:t.tags}))))}))},t}(o.a.Component));t.a=l}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-5a1d35ac60d2b808e8ff.js.map