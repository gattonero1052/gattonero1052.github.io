(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{159:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),o=a(0),i=a.n(o),s=a(162),l=a.n(s),c=a(165),m=a(290),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config.userTwitter,t=this.props.expanded;return i.a.createElement(m.Follow,{username:e,options:{count:!!t||"none"}})},t}(o.Component),u=a(38),h=a.n(u),d=a(373),f=a.n(d),g=a(203),E=a.n(g),y=a(161),v=a.n(y),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(h()(a)),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(h()(a)),a}r()(t,e);var a=t.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},a.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},a.render=function(){var e=this.props.postNode;if(!v.a.disqusShortname)return null;var t=e.frontmatter,a=E()(v.a.siteUrl,v.a.pathPrefix,e.fields.slug);return console.log(v.a.disqusShortname),console.log(t.title),console.log(a),console.log(t.category_id),console.log(this.notifyAboutComment),i.a.createElement(f.a,{shortname:v.a.disqusShortname,identifier:t.title,title:t.title,url:a,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(o.Component),w=a(375),x=a.n(w),C=a(56),D=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return i.a.createElement("div",{className:"post-tag-container"},e&&e.map(function(e){return i.a.createElement(C.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+x()(e)},i.a.createElement("button",null,e))}))},t}(o.Component),k=a(452),N=a(453),T=a(454),A=a(455),S=a(456),P=a(457),L=a(458),U=a(459),I=a(460),_=a(461),Y=a(462),F=a(463),M=a(464),B=(a(388),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.postPath,n=e.mobile,r=t.frontmatter,o=E()(v.a.siteUrl,v.a.pathPrefix,a),s=n?36:48,l=function(e){return i.a.createElement("div",{className:"share-count"},function(e){return e>0?e:""}(e))};return i.a.createElement("div",{className:"social-links"},i.a.createElement(k.a,{url:o,title:r.title},i.a.createElement(N.a,{round:!0,size:s}),i.a.createElement(T.a,{url:o},function(e){return l(e)})),i.a.createElement(A.a,{url:o,title:r.title},i.a.createElement(S.a,{round:!0,size:s})),i.a.createElement(P.a,{url:o,quote:t.excerpt},i.a.createElement(L.a,{round:!0,size:s}),i.a.createElement(U.a,{url:o},function(e){return l(e)})),i.a.createElement(I.a,{url:o,title:r.title,description:t.excerpt},i.a.createElement(_.a,{round:!0,size:s}),i.a.createElement(Y.a,{url:o},function(e){return l(e)})),i.a.createElement(F.a,{url:o},i.a.createElement(M.a,{round:!0,size:s})))},t}(o.Component)),R=a(235);a(438),a(439);a.d(t,"default",function(){return O}),a.d(t,"pageQuery",function(){return q});var O=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext.slug,n=t.markdownRemark,r=n.frontmatter;return r.id||(r.id=a),r.category_id||(r.category_id=v.a.postDefaultCategoryID),i.a.createElement(c.a,null,i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("title",null,r.title+" | "+v.a.siteTitle)),i.a.createElement(R.a,{postPath:a,postNode:n,postSEO:!0}),i.a.createElement("div",null,i.a.createElement("h1",null,r.title),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}),i.a.createElement("div",{className:"post-meta"},i.a.createElement(D,{tags:r.tags}),i.a.createElement(B,{postPath:a,postNode:n})),i.a.createElement(p,{config:v.a}),i.a.createElement(b,{postNode:n}))))},t}(i.a.Component),q="1675071777"},161:function(e,t,a){a(36);var n={siteTitle:"MSKf's Tree BLOG",siteTitleShort:"MSKf's Tree",siteTitleAlt:"MSKF TREE BLOG",siteLogo:"/logos/logo-1024.png",siteUrl:"https://mskf.work",pathPrefix:"",siteDescription:"",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"mskf-work",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY/MM/DD",dateFormat:"MM/DD/YYYY",userName:"mskf",userEmail:"gattonero1052@example.com",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},165:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(9),r=a.n(n),o=a(0),i=a.n(o),s=a(162),l=a.n(s),c=a(161),m=a.n(c),p=(a(185),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:m.a.siteDescription})),e)},t}(i.a.Component))},235:function(e,t,a){"use strict";var n=a(9),r=a.n(n),o=a(0),i=a.n(o),s=a(162),l=a.n(s),c=a(203),m=a.n(c),p=a(161),u=a.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,o=r.postNode,s=r.postPath,c=r.postSEO;if(c){var p=o.frontmatter;e=p.title,t=p.description?p.description:o.excerpt,a=p.cover,n=m()(u.a.siteUrl,u.a.pathPrefix,s)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=m()(u.a.siteUrl,u.a.pathPrefix,a);var h=m()(u.a.siteUrl,u.a.pathPrefix),d=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:a}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),i.a.createElement("meta",{property:"og:url",content:c?n:h}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:a}),i.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:a}))},t}(o.Component);t.a=h}}]);
//# sourceMappingURL=component---src-templates-post-jsx-fb1e159495f7a2c0f4b2.js.map