(this.webpackJsonp=this.webpackJsonp||[]).push([[16],{"Al+O":function(e,t,r){"use strict";var a=r("dI71"),n=r("v8eK"),s=r.n(n),i=r("q1tI"),c=r.n(i),l=(r("x2wF"),r("Givx")),o=r("aMZS"),f=r("CLjb"),d=r("NE0r"),h=r("JY2t"),p=["1","2","3","4"],u=function(e){var t=e.level,r=e.accept,a=(e.lastDroppedItem,e.onDrop,e.nodes),n=e.refresh,s=e.addTagsCb,i=Object(o.a)({accept:r,drop:function(){return{level:t}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),l=i[0],f=l.isOver,d=l.canDrop,h=i[1],p=d&&f;return c.a.createElement("div",{className:"nodes-horizontal "+(p?"blink":""),ref:h},a.map((function(e){return c.a.createElement(g,{refresh:n,node:e,key:e.id,addTagsCb:s})})))},g=function(e){var t=e.node,r=e.refresh,a=e.addTagsCb,n=c.a.createRef(),s=Object(o.a)({accept:3===t.level?[]:[l.b],drop:function(){return{node:t}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),i=s[0],h=i.isOver,u=i.canDrop,g=s[1],v=Object(f.a)({item:{name:t.value,type:p[t.level]},end:function(e,n){var s=n.getDropResult();if(e&&s&&s.isTreeTitle){for(var i=[],c=t;"root"!=c.id;)i.push(c.value),c=c.parent;a(i)}else{if(e&&s)if(s.level>t.level)Object(d.a)(t,"").isTemp=1,r();else if(s.level<t.level){for(var l=0;l<t.parent.children.length&&t!==t.parent.children[l];l++);t.parent.children.splice(l,1),r()}}},collect:function(e){return{isDragging:e.isDragging()}}}),m=v[0].isDragging,b=v[1],T=m?.4:u&&h?.2:1,y=Object(l.c)(t.value);return c.a.createElement("div",{ref:function(e){return t._domObject=e},className:"nodes-node",style:{flex:t._spaceCount||1}},t.isFake?"":c.a.createElement("div",{ref:b,className:"tag-item",style:{opacity:T,color:y}},c.a.createElement("div",{ref:g},t.isTemp?c.a.createElement("div",{className:"tree-node-input"},c.a.createElement("input",{type:"text",defaultValue:t.value,ref:function(e){return n=e},autoFocus:!0,onKeyPress:function(e){"Enter"==e.key&&(t.value=n.value||"-",t.isTemp=0,r())}})):c.a.createElement("div",{onDoubleClick:function(e){t.isTemp=1,r()}},t.value))))},v=function(e){var t=e.toggleTree,r=Object(o.a)({accept:p,drop:function(){return{isTreeTitle:!0}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),a=r[0],n=(a.isOver,a.canDrop,r[1]);return c.a.createElement("div",{className:"tree-title",ref:n,onClick:t},"Tree")},m=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];(t=e.call.apply(e,[this].concat(a))||this).state={displayPanel:!1,nodes:[]};var s=Object(h.b)();return t.state={forceRefresh:!1,nodes:[],lines:[],root:s,rootId:"root",filteringTags:Object(h.a)("filteringTags")},t}Object(a.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.refreshTree({tree:this.state.root,id:"root"}),this.props.refreshBinder({refreshTree:this.refresh.bind(this),refreshTagList:this.refreshTagList.bind(this)})},r.refresh=function(){this.refreshTree({tree:this.state.root,id:this.state.rootId})},r.refreshTagList=function(e){var t=e.filteringTags;this.setState({filteringTags:t})},r.refreshTree=function(e){var t=e.tree,r=e.id;this.setState({forceRefresh:!this.state.forceRefresh,nodes:this.getTreeNodes({tree:t,id:r})})},r.addTagsCb=function(e){var t=s()(this.state.filteringTags,e);this.refreshTagList({filteringTags:t}),Object(h.c)({filteringTags:t}),this.props.dispatch("refreshArticleList",{filteringTags:t})},r.removeTagCb=function(e){var t=this.state.filteringTags=this.state.filteringTags.filter((function(t){return t!==e}));this.refreshTagList({filteringTags:t}),Object(h.c)({filteringTags:t}),this.props.dispatch("refreshArticleList",{filteringTags:t})},r.componentDidUpdate=function(e,t,r){if(t.displayPanel!=this.state.displayPanel||t.forceRefresh!=this.state.forceRefresh){Object(h.d)(this.state.root);var a=Object(d.e)(this.state.nodes[0][0]);this.setState({lines:a})}},r.getTreeNodes=function(e){var t=Object(d.c)(e.tree,e.id);if(t)return Object(d.g)(t,4)},r.toggleTree=function(){this.setState({displayPanel:!this.state.displayPanel})},r.render=function(){var e=this,t=this.state.nodes||[];return c.a.createElement("div",{className:""},c.a.createElement("svg",{className:"tree-svg",style:{display:this.state.displayPanel?"inherit":"none"}},this.state.lines.map((function(e,t){return c.a.createElement("line",{key:t,strokeWidth:"10",x1:e.start.x,y1:e.start.y,x2:e.end.x,y2:e.end.y,stroke:e.color})}))),c.a.createElement("div",{className:"tree-wrapper"},c.a.createElement("div",{className:"tree"},c.a.createElement(v,{toggleTree:this.toggleTree.bind(this)}),c.a.createElement("div",{className:"tree-filtering-tags"},c.a.createElement(l.a,{tagItemClass:{margin:"5px 5px"},draggable:!1,tags:this.state.filteringTags,removeTagCb:this.removeTagCb.bind(this)})))),c.a.createElement("div",{className:"tree-panel",style:{display:this.state.displayPanel?"flex":"none"}},c.a.createElement("div",{className:"tree-body"},c.a.createElement("div",{className:"tree-content"},t.map((function(t,r){return c.a.createElement(u,{level:r,refresh:e.refresh.bind(e),addTagsCb:e.addTagsCb.bind(e),key:r,nodes:t,accept:[].concat(r>0?p[r-1]:[]).concat(r<p.length-1?p[r+1]:[])})}))))))},t}(c.a.Component);t.a=m},ZUrO:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var a=r("dI71"),n=r("q1tI"),s=r.n(n),i=r("TJpk"),c=r.n(i),l=r("hpys"),o=r("1wty"),f=r("IpnI"),d=r.n(f),h=r("Al+O"),p=r("kvAW"),u=r("qJlv"),g=function(e){function t(){return e.apply(this,arguments)||this}Object(a.a)(t,e);var r=t.prototype;return r.refresh=function(){"function"==typeof this.refreshBindBack&&this.refreshBindBack()},r.dispatch=function(e){for(var t,r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];"function"==typeof this.callBacks[e]&&(t=this.callBacks)[e].apply(t,a)},r.refreshBinder=function(e){this.callBacks=Object.assign({},this.callBacks,e)},r.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges.filter((function(e){return!e.node.frontmatter.draft}));return s.a.createElement(p.a,{backend:u.a},s.a.createElement(l.a,null,s.a.createElement("div",{className:"tag-container"},s.a.createElement(c.a,{title:'Posts tagged as "'+e+'" | '+d.a.siteTitle}),s.a.createElement(h.a,{refreshBinder:this.refreshBinder.bind(this),dispatch:this.dispatch.bind(this)}),s.a.createElement(o.a,{refreshBinder:this.refreshBinder.bind(this),dispatch:this.dispatch.bind(this),refresh:this.refresh.bind(this),postEdges:t}))))},t}(s.a.Component)},v8eK:function(e,t,r){var a=r("XGnz"),n=r("EA7m"),s=r("LGYb"),i=r("3L66"),c=n((function(e){return s(a(e,1,i,!0))}));e.exports=c},x2wF:function(e,t,r){}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-fbf426f4856681aa31f3.js.map