(this.webpackJsonp=this.webpackJsonp||[]).push([[12],{"Al+O":function(e,t,r){"use strict";var a=r("dI71"),n=r("v8eK"),i=r.n(n),s=r("q1tI"),c=r.n(s),o=(r("x2wF"),r("Givx")),l=r("aMZS"),p=r("CLjb"),f=r("NE0r"),h=r("JY2t"),d=["1","2","3","4"],m=function(e){var t=e.level,r=e.accept,a=(e.lastDroppedItem,e.onDrop,e.nodes),n=e.refresh,i=e.addTagsCb,s=Object(l.a)({accept:r,drop:function(){return{level:t}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),o=s[0],p=o.isOver,f=o.canDrop,h=s[1],d=f&&p;return c.a.createElement("div",{className:"nodes-horizontal "+(d?"blink":""),ref:h},a.map((function(e){return c.a.createElement(u,{refresh:n,node:e,key:e.id,addTagsCb:i})})))},u=function(e){var t=e.node,r=e.refresh,a=e.addTagsCb,n=c.a.createRef(),i=Object(l.a)({accept:3===t.level?[]:[o.b],drop:function(){return{node:t}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),s=i[0],h=s.isOver,m=s.canDrop,u=i[1],g=Object(p.a)({item:{name:t.value,type:d[t.level]},end:function(e,n){var i=n.getDropResult();if(e&&i&&i.isTreeTitle){for(var s=[],c=t;"root"!=c.id;)s.push(c.value),c=c.parent;a(s)}else{if(e&&i)if(i.level>t.level)Object(f.a)(t,"").isTemp=1,r();else if(i.level<t.level){for(var o=0;o<t.parent.children.length&&t!==t.parent.children[o];o++);t.parent.children.splice(o,1),r()}}},collect:function(e){return{isDragging:e.isDragging()}}}),v=g[0].isDragging,T=g[1],y=v?.4:m&&h?.2:1,b=Object(o.c)(t.value);return c.a.createElement("div",{ref:function(e){return t._domObject=e},className:"nodes-node",style:{flex:t._spaceCount||1}},t.isFake?"":c.a.createElement("div",{ref:T,className:"tag-item",style:{opacity:y,color:b}},c.a.createElement("div",{ref:u},t.isTemp?c.a.createElement("div",{className:"tree-node-input"},c.a.createElement("input",{type:"text",defaultValue:t.value,ref:function(e){return n=e},autoFocus:!0,onKeyPress:function(e){"Enter"==e.key&&(t.value=n.value||"-",t.isTemp=0,r())}})):c.a.createElement("div",{onDoubleClick:function(e){t.isTemp=1,r()}},t.value))))},g=function(e){var t=e.toggleTree,r=Object(l.a)({accept:d,drop:function(){return{isTreeTitle:!0}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),a=r[0],n=(a.isOver,a.canDrop,r[1]);return c.a.createElement("div",{className:"tree-title",ref:n,onClick:t},"Tree")},v=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];(t=e.call.apply(e,[this].concat(a))||this).state={displayPanel:!1,nodes:[]};var i=Object(h.b)();return t.state={forceRefresh:!1,nodes:[],lines:[],root:i,rootId:"root",filteringTags:Object(h.a)("filteringTags")},t}Object(a.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.refreshTree({tree:this.state.root,id:"root"}),this.props.refreshBinder({refreshTree:this.refresh.bind(this),refreshTagList:this.refreshTagList.bind(this)})},r.refresh=function(){this.refreshTree({tree:this.state.root,id:this.state.rootId})},r.refreshTagList=function(e){var t=e.filteringTags;this.setState({filteringTags:t})},r.refreshTree=function(e){var t=e.tree,r=e.id;this.setState({forceRefresh:!this.state.forceRefresh,nodes:this.getTreeNodes({tree:t,id:r})})},r.addTagsCb=function(e){var t=i()(this.state.filteringTags,e);this.refreshTagList({filteringTags:t}),Object(h.c)({filteringTags:t}),this.props.dispatch("refreshArticleList",{filteringTags:t})},r.removeTagCb=function(e){var t=this.state.filteringTags=this.state.filteringTags.filter((function(t){return t!==e}));this.refreshTagList({filteringTags:t}),Object(h.c)({filteringTags:t}),this.props.dispatch("refreshArticleList",{filteringTags:t})},r.componentDidUpdate=function(e,t,r){if(t.displayPanel!=this.state.displayPanel||t.forceRefresh!=this.state.forceRefresh){Object(h.d)(this.state.root);var a=Object(f.e)(this.state.nodes[0][0]);this.setState({lines:a})}},r.getTreeNodes=function(e){var t=Object(f.c)(e.tree,e.id);if(t)return Object(f.g)(t,4)},r.toggleTree=function(){this.setState({displayPanel:!this.state.displayPanel})},r.render=function(){var e=this,t=this.state.nodes||[];return c.a.createElement("div",{className:""},c.a.createElement("svg",{className:"tree-svg",style:{display:this.state.displayPanel?"inherit":"none"}},this.state.lines.map((function(e,t){return c.a.createElement("line",{key:t,strokeWidth:"10",x1:e.start.x,y1:e.start.y,x2:e.end.x,y2:e.end.y,stroke:e.color})}))),c.a.createElement("div",{className:"tree-wrapper"},c.a.createElement("div",{className:"tree"},c.a.createElement(g,{toggleTree:this.toggleTree.bind(this)}),c.a.createElement("div",{className:"tree-filtering-tags"},c.a.createElement(o.a,{tagItemClass:{margin:"5px 5px"},draggable:!1,tags:this.state.filteringTags,removeTagCb:this.removeTagCb.bind(this)})))),c.a.createElement("div",{className:"tree-panel",style:{display:this.state.displayPanel?"flex":"none"}},c.a.createElement("div",{className:"tree-body"},c.a.createElement("div",{className:"tree-content"},t.map((function(t,r){return c.a.createElement(m,{level:r,refresh:e.refresh.bind(e),addTagsCb:e.addTagsCb.bind(e),key:r,nodes:t,accept:[].concat(r>0?d[r-1]:[]).concat(r<d.length-1?d[r+1]:[])})}))))))},t}(c.a.Component);t.a=v},Dtc0:function(e,t,r){"use strict";r.r(t);var a=r("dI71"),n=r("q1tI"),i=r.n(n),s=r("TJpk"),c=r.n(s),o=r("hpys"),l=r("1wty"),p=r("okzv"),f=r("Al+O"),h=r("IpnI"),d=r.n(h),m=(r("EDuE"),r("kvAW")),u=r("qJlv"),g=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).callBacks={refreshArticleList:void 0,refreshTagList:void 0,refreshTree:void 0},t}Object(a.a)(t,e);var r=t.prototype;return r.refresh=function(){"function"==typeof this.refreshBindBack&&this.refreshBindBack()},r.dispatch=function(e){for(var t,r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];"function"==typeof this.callBacks[e]&&(t=this.callBacks)[e].apply(t,a)},r.refreshBinder=function(e){this.callBacks=Object.assign({},this.callBacks,e)},r.render=function(){var e=this.props.data.allMarkdownRemark.edges.filter((function(e){return!e.node.frontmatter.draft}));return i.a.createElement(m.a,{backend:u.a},i.a.createElement(o.a,null,i.a.createElement("div",{className:"index-container"},i.a.createElement(c.a,{title:d.a.siteTitle}),i.a.createElement(p.a,null),i.a.createElement(f.a,{refreshBinder:this.refreshBinder.bind(this),dispatch:this.dispatch.bind(this)}),i.a.createElement(l.a,{refreshBinder:this.refreshBinder.bind(this),dispatch:this.dispatch.bind(this),refresh:this.refresh.bind(this),postEdges:e}))))},t}(i.a.Component);t.default=g},EDuE:function(e,t,r){},"T/ZZ":function(e,t,r){var a,n,i;i=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var a=0;a<e.length;a++){var n=e[a];if("string"!=typeof n)throw new TypeError("Url must be a string. Received "+n);""!==n&&(a>0&&(n=n.replace(/^[\/]+/,"")),n=a<e.length-1?n.replace(/[\/]+$/,""):n.replace(/[\/]+$/,"/"),t.push(n))}var i=t.join("/"),s=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=s.shift()+(s.length>0?"?":"")+s.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(n="function"==typeof(a=i)?a.call(t,r,t,e):a)||(e.exports=n)},okzv:function(e,t,r){"use strict";var a=r("dI71"),n=r("q1tI"),i=r.n(n),s=r("TJpk"),c=r.n(s),o=r("T/ZZ"),l=r.n(o),p=r("IpnI"),f=r.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e,t,r,a,n=this.props,s=n.postNode,o=n.postPath,p=n.postSEO;if(p){var h=s.frontmatter;e=h.title,t=h.description?h.description:s.excerpt,r=h.cover,a=l()(f.a.siteUrl,f.a.pathPrefix,o)}else e=f.a.siteTitle,t=f.a.siteDescription,r=f.a.siteLogo;r=l()(f.a.siteUrl,f.a.pathPrefix,r);var d=l()(f.a.siteUrl,f.a.pathPrefix),m=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:f.a.siteTitleAlt?f.a.siteTitleAlt:""}];return p&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:r}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:f.a.siteTitleAlt?f.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:r},description:t}),i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:r}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),i.a.createElement("meta",{property:"og:url",content:p?a:d}),p?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:r}),i.a.createElement("meta",{property:"fb:app_id",content:f.a.siteFBAppID?f.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:f.a.userTwitter?f.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:r}))},t}(n.Component);t.a=h},v8eK:function(e,t,r){var a=r("XGnz"),n=r("EA7m"),i=r("LGYb"),s=r("3L66"),c=n((function(e){return i(a(e,1,s,!0))}));e.exports=c},x2wF:function(e,t,r){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-7358836b0bd67d50c294.js.map