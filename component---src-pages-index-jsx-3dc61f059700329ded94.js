(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"FILE",function(){return F}),r.d(n,"URL",function(){return U}),r.d(n,"TEXT",function(){return Y});var a=r(9),i=r.n(a),o=r(0),s=r.n(o),c=r(162),u=r.n(c),l=r(165),d=r(194),f=r(235),h=(r(449),r(166)),p=r(195),g=r(175),v=r(170),m=r.n(v),y="MSKf's Tree Blog V1.0",D=function(){if(null!=window){var e=window.localStorage.getItem(y),t=null;return e?(t=JSON.parse(e),Object(g.b)(t,function(e,t){e.parent=t})):(t=Object(g.d)(),E(t)),t}},E=function(e){if(null!=window){var t=m()(Object(g.f)(e));Object(g.b)(t,function(e){for(var t in e)"_"==t[0]&&delete e[t];e.children=e.children.filter(function(e){return!e.isFake}),e.parent=null});var r=JSON.stringify(t);window.localStorage.setItem(y,r)}},w=["1","2","3","4"],T=function(e){var t=e.level,r=e.accept,n=(e.lastDroppedItem,e.onDrop,e.nodes),a=e.refresh,i=Object(p.d)({accept:r,drop:function(){return{level:t}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),o=i[0],c=o.isOver,u=o.canDrop,l=i[1],d=u&&c;return s.a.createElement("div",{className:"nodes-horizontal "+(d?"blink":""),ref:l},n.map(function(e){return s.a.createElement(b,{refresh:a,node:e,key:e.id})}))},b=function(e){var t=e.node,r=e.refresh,n=s.a.createRef(),a=Object(p.d)({accept:3===t.level?[]:[h.b],drop:function(){return{node:t}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),i=a[0],o=i.isOver,c=i.canDrop,u=a[1],l=Object(p.c)({item:{name:t.value,type:w[t.level]},end:function(e,n){var a=n.getDropResult();if(e&&a)if(a.level>t.level)Object(g.a)(t,"").isTemp=1,r();else if(a.level<t.level){for(var i=0;i<t.parent.children.length&&t!==t.parent.children[i];i++);t.parent.children.splice(i,1),r()}},collect:function(e){return{isDragging:e.isDragging()}}}),d=l[0].isDragging,f=l[1],v=d?.4:c&&o?.2:1,m=Object(h.c)(t.value);return s.a.createElement("div",{ref:function(e){return t._domObject=e},className:"nodes-node",style:{flex:t._spaceCount||1}},t.isFake?"":s.a.createElement("div",{ref:f,className:"tag-item",style:{opacity:v,color:m}},s.a.createElement("div",{ref:u},t.isTemp?s.a.createElement("div",{className:"tree-node-input"},s.a.createElement("input",{type:"text",defaultValue:t.value,ref:function(e){return n=e},autoFocus:"true",onKeyPress:function(e){"Enter"==e.key&&(t.value=n.value||"-",t.isTemp=0,r())}})):s.a.createElement("div",{onDoubleClick:function(e){t.isTemp=1,r()}},t.value))))},N=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];(t=e.call.apply(e,[this].concat(n))||this).state={displayPanel:!1,nodes:[]};var i=D();return t.state={forceRefresh:!1,nodes:[],lines:[],root:i,rootId:"root"},t}i()(t,e);var r=t.prototype;return r.componentDidMount=function(){this.refreshTree({tree:this.state.root,id:"root"}),this.props.refreshBinder(this.refresh.bind(this))},r.refresh=function(){this.refreshTree({tree:this.state.root,id:this.state.rootId})},r.refreshTree=function(e){var t=e.tree,r=e.id;this.setState({forceRefresh:!this.state.forceRefresh,nodes:this.getTreeNodes({tree:t,id:r})})},r.componentDidUpdate=function(e,t,r){if(t.displayPanel!=this.state.displayPanel||t.forceRefresh!=this.state.forceRefresh){E(this.state.root);var n=Object(g.e)(this.state.nodes[0][0]);this.setState({lines:n})}},r.getTreeNodes=function(e){var t=Object(g.c)(e.tree,e.id);if(t)return Object(g.g)(t,4)},r.toggleTree=function(){this.setState({displayPanel:!this.state.displayPanel})},r.render=function(){var e=this,t=this.state.nodes||[];return s.a.createElement("div",{className:""},s.a.createElement("svg",{className:"tree-svg",style:{display:this.state.displayPanel?"inherit":"none"}},this.state.lines.map(function(e){return s.a.createElement("line",{strokeWidth:"10",x1:e.start.x,y1:e.start.y,x2:e.end.x,y2:e.end.y,stroke:e.color})})),s.a.createElement("div",{className:"tree-wrapper"},s.a.createElement("div",{className:"tree",onClick:this.toggleTree.bind(this)},s.a.createElement("h1",null,"Tree"))),s.a.createElement("div",{className:"tree-panel",style:{display:this.state.displayPanel?"flex":"none"}},s.a.createElement("div",{className:"tree-body"},s.a.createElement("div",{className:"tree-content"},t.map(function(t,r){return s.a.createElement(T,{level:r,refresh:e.refresh.bind(e),key:r,nodes:t,accept:[].concat(r>0?w[r-1]:[]).concat(r<w.length-1?w[r+1]:[])})})))))},t}(s.a.Component),O=r(161),S=r.n(O);r(450);function k(e){var t=null;return function(){return null==t&&(t=e()),t}}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.entered=[],this.isNodeInDocument=t}var t,r,n;return t=e,(r=[{key:"enter",value:function(e){var t=this,r=this.entered.length;return this.entered=function(e,t){var r=new Set,n=function(e){return r.add(e)};e.forEach(n),t.forEach(n);var a=[];return r.forEach(function(e){return a.push(e)}),a}(this.entered.filter(function(r){return t.isNodeInDocument(r)&&(!r.contains||r.contains(e))}),[e]),0===r&&this.entered.length>0}},{key:"leave",value:function(e){var t,r,n=this.entered.length;return this.entered=(t=this.entered.filter(this.isNodeInDocument),r=e,t.filter(function(e){return e!==r})),n>0&&0===this.entered.length}},{key:"reset",value:function(){this.entered=[]}}])&&I(t.prototype,r),n&&I(t,n),e}(),P=k(function(){return/firefox/i.test(navigator.userAgent)}),L=k(function(){return Boolean(window.safari)});function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var j=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=t.length,a=[],i=0;i<n;i++)a.push(i);a.sort(function(e,r){return t[e]<t[r]?-1:1});for(var o,s,c=[],u=[],l=[],d=0;d<n-1;d++)o=t[d+1]-t[d],s=r[d+1]-r[d],u.push(o),c.push(s),l.push(s/o);for(var f=[l[0]],h=0;h<u.length-1;h++){var p=l[h],g=l[h+1];if(p*g<=0)f.push(0);else{o=u[h];var v=u[h+1],m=o+v;f.push(3*m/((m+v)/p+(m+o)/g))}}f.push(l[l.length-1]);for(var y,D=[],E=[],w=0;w<f.length-1;w++){y=l[w];var T=f[w],b=1/u[w],N=T+f[w+1]-y-y;D.push((y-T-N)*b),E.push(N*b*b)}this.xs=t,this.ys=r,this.c1s=f,this.c2s=D,this.c3s=E}var t,r,n;return t=e,(r=[{key:"interpolate",value:function(e){var t=this.xs,r=this.ys,n=this.c1s,a=this.c2s,i=this.c3s,o=t.length-1;if(e===t[o])return r[o];for(var s,c=0,u=i.length-1;c<=u;){var l=t[s=Math.floor(.5*(c+u))];if(l<e)c=s+1;else{if(!(l>e))return r[s];u=s-1}}var d=e-t[o=Math.max(0,u)],f=d*d;return r[o]+n[o]*d+a[o]*f+i[o]*d*f}}])&&x(t.prototype,r),n&&x(t,n),e}(),R=1;function _(e){var t=e.nodeType===R?e:e.parentElement;if(!t)return null;var r=t.getBoundingClientRect(),n=r.top;return{x:r.left,y:n}}function A(e){return{x:e.clientX,y:e.clientY}}function B(e,t,r,n,a){var i,o,s="IMG"===(i=t).nodeName&&(P()||!document.documentElement.contains(i)),c=_(s?e:t),u={x:r.x-c.x,y:r.y-c.y},l=e.offsetWidth,d=e.offsetHeight,f=n.anchorX,h=n.anchorY,p=function(e,t,r,n){var a=e?t.width:r,i=e?t.height:n;return L()&&e&&(i/=window.devicePixelRatio,a/=window.devicePixelRatio),{dragPreviewWidth:a,dragPreviewHeight:i}}(s,t,l,d),g=p.dragPreviewWidth,v=p.dragPreviewHeight,m=a.offsetX,y=a.offsetY,D=0===y||y;return{x:0===m||m?m:new j([0,.5,1],[u.x,u.x/l*g,u.x+g-l]).interpolate(f),y:D?y:(o=new j([0,.5,1],[u.y,u.y/d*v,u.y+v-d]).interpolate(h),L()&&s&&(o+=(window.devicePixelRatio-1)*v),o)}}var M,F="__NATIVE_FILE__",U="__NATIVE_URL__",Y="__NATIVE_TEXT__";function K(e,t,r){var n=t.reduce(function(t,r){return t||e.getData(r)},"");return null!=n?n:r}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H=(X(M={},F,{exposeProperties:{files:function(e){return Array.prototype.slice.call(e.files)},items:function(e){return e.items}},matchesTypes:["Files"]}),X(M,U,{exposeProperties:{urls:function(e,t){return K(e,t,"").split("\n")}},matchesTypes:["Url","text/uri-list"]}),X(M,Y,{exposeProperties:{text:function(e,t){return K(e,t,"")}},matchesTypes:["Text","text/plain"]}),M);function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var V=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.item={},Object.keys(this.config.exposeProperties).forEach(function(e){Object.defineProperty(r.item,e,{configurable:!0,enumerable:!0,get:function(){return console.warn("Browser doesn't allow reading \"".concat(e,'" until the drop event.')),null}})})}var t,r,n;return t=e,(r=[{key:"mutateItemByReadingDataTransfer",value:function(e){var t=this,r={};e&&Object.keys(this.config.exposeProperties).forEach(function(n){r[n]={value:t.config.exposeProperties[n](e,t.config.matchesTypes)}}),Object.defineProperties(this.item,r)}},{key:"canDrag",value:function(){return!0}},{key:"beginDrag",value:function(){return this.item}},{key:"isDragging",value:function(e,t){return t===e.getSourceId()}},{key:"endDrag",value:function(){}}])&&W(t.prototype,r),n&&W(t,n),e}();function J(e){if(!e)return null;var t=Array.prototype.slice.call(e.types||[]);return Object.keys(H).filter(function(e){return H[e].matchesTypes.some(function(e){return t.indexOf(e)>-1})})[0]||null}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.globalContext=t}var t,r,n;return t=e,(r=[{key:"window",get:function(){return this.globalContext?this.globalContext:"undefined"!=typeof window?window:void 0}},{key:"document",get:function(){if(this.window)return this.window.document}}])&&G(t.prototype,r),n&&G(t,n),e}();function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(r,!0).forEach(function(t){$(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ee=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.getSourceClientOffset=function(e){return _(n.sourceNodes.get(e))},this.endDragNativeItem=function(){n.isDraggingNativeItem()&&(n.actions.endDrag(),n.registry.removeSource(n.currentNativeHandle),n.currentNativeHandle=null,n.currentNativeSource=null)},this.isNodeInDocument=function(e){return n.document&&n.document.body&&document.body.contains(e)},this.endDragIfSourceWasRemovedFromDOM=function(){var e=n.currentDragSourceNode;n.isNodeInDocument(e)||n.clearCurrentDragSourceNode()&&n.actions.endDrag()},this.handleTopDragStartCapture=function(){n.clearCurrentDragSourceNode(),n.dragStartSourceIds=[]},this.handleTopDragStart=function(e){if(!e.defaultPrevented){var t=n.dragStartSourceIds;n.dragStartSourceIds=null;var r=A(e);n.monitor.isDragging()&&n.actions.endDrag(),n.actions.beginDrag(t||[],{publishSource:!1,getSourceClientOffset:n.getSourceClientOffset,clientOffset:r});var a=e.dataTransfer,i=J(a);if(n.monitor.isDragging()){if(a&&"function"==typeof a.setDragImage){var o=n.monitor.getSourceId(),s=n.sourceNodes.get(o),c=n.sourcePreviewNodes.get(o)||s;if(c){var u=n.getCurrentSourcePreviewNodeOptions(),l=B(s,c,r,{anchorX:u.anchorX,anchorY:u.anchorY},{offsetX:u.offsetX,offsetY:u.offsetY});a.setDragImage(c,l.x,l.y)}}try{a.setData("application/json",{})}catch(d){}n.setCurrentDragSourceNode(e.target),n.getCurrentSourcePreviewNodeOptions().captureDraggingState?n.actions.publishDragSource():setTimeout(function(){return n.actions.publishDragSource()},0)}else if(i)n.beginDragNativeItem(i);else{if(a&&!a.types&&(e.target&&!e.target.hasAttribute||!e.target.hasAttribute("draggable")))return;e.preventDefault()}}},this.handleTopDragEndCapture=function(){n.clearCurrentDragSourceNode()&&n.actions.endDrag()},this.handleTopDragEnterCapture=function(e){if(n.dragEnterTargetIds=[],n.enterLeaveCounter.enter(e.target)&&!n.monitor.isDragging()){var t=J(e.dataTransfer);t&&n.beginDragNativeItem(t)}},this.handleTopDragEnter=function(e){var t=n.dragEnterTargetIds;(n.dragEnterTargetIds=[],n.monitor.isDragging())&&(n.altKeyPressed=e.altKey,P()||n.actions.hover(t,{clientOffset:A(e)}),t.some(function(e){return n.monitor.canDropOnTarget(e)})&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=n.getCurrentDropEffect())))},this.handleTopDragOverCapture=function(){n.dragOverTargetIds=[]},this.handleTopDragOver=function(e){var t=n.dragOverTargetIds;if(n.dragOverTargetIds=[],!n.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer&&(e.dataTransfer.dropEffect="none"));n.altKeyPressed=e.altKey,n.actions.hover(t||[],{clientOffset:A(e)}),(t||[]).some(function(e){return n.monitor.canDropOnTarget(e)})?(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=n.getCurrentDropEffect())):n.isDraggingNativeItem()?e.preventDefault():(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=function(e){n.isDraggingNativeItem()&&e.preventDefault(),n.enterLeaveCounter.leave(e.target)&&n.isDraggingNativeItem()&&n.endDragNativeItem()},this.handleTopDropCapture=function(e){n.dropTargetIds=[],e.preventDefault(),n.isDraggingNativeItem()&&n.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer),n.enterLeaveCounter.reset()},this.handleTopDrop=function(e){var t=n.dropTargetIds;n.dropTargetIds=[],n.actions.hover(t,{clientOffset:A(e)}),n.actions.drop({dropEffect:n.getCurrentDropEffect()}),n.isDraggingNativeItem()?n.endDragNativeItem():n.endDragIfSourceWasRemovedFromDOM()},this.handleSelectStart=function(e){var t=e.target;"function"==typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))},this.options=new q(r),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new C(this.isNodeInDocument)}var t,r,a;return t=e,(r=[{key:"setup",value:function(){if(void 0!==this.window){if(this.window.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");this.window.__isReactDndBackendSetUp=!0,this.addEventListeners(this.window)}}},{key:"teardown",value:function(){void 0!==this.window&&(this.window.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.window),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&this.window.cancelAnimationFrame(this.asyncEndDragFrameId))}},{key:"connectDragPreview",value:function(e,t,r){var n=this;return this.sourcePreviewNodeOptions.set(e,r),this.sourcePreviewNodes.set(e,t),function(){n.sourcePreviewNodes.delete(e),n.sourcePreviewNodeOptions.delete(e)}}},{key:"connectDragSource",value:function(e,t,r){var n=this;this.sourceNodes.set(e,t),this.sourceNodeOptions.set(e,r);var a=function(t){return n.handleDragStart(t,e)},i=function(e){return n.handleSelectStart(e)};return t.setAttribute("draggable","true"),t.addEventListener("dragstart",a),t.addEventListener("selectstart",i),function(){n.sourceNodes.delete(e),n.sourceNodeOptions.delete(e),t.removeEventListener("dragstart",a),t.removeEventListener("selectstart",i),t.setAttribute("draggable","false")}}},{key:"connectDropTarget",value:function(e,t){var r=this,n=function(t){return r.handleDragEnter(t,e)},a=function(t){return r.handleDragOver(t,e)},i=function(t){return r.handleDrop(t,e)};return t.addEventListener("dragenter",n),t.addEventListener("dragover",a),t.addEventListener("drop",i),function(){t.removeEventListener("dragenter",n),t.removeEventListener("dragover",a),t.removeEventListener("drop",i)}}},{key:"addEventListeners",value:function(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}},{key:"removeEventListeners",value:function(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}},{key:"getCurrentSourceNodeOptions",value:function(){var e=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(e);return Q({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}},{key:"getCurrentDropEffect",value:function(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}},{key:"getCurrentSourcePreviewNodeOptions",value:function(){var e=this.monitor.getSourceId();return Q({anchorX:.5,anchorY:.5,captureDraggingState:!1},this.sourcePreviewNodeOptions.get(e)||{})}},{key:"isDraggingNativeItem",value:function(){var e=this.monitor.getItemType();return Object.keys(n).some(function(t){return n[t]===e})}},{key:"beginDragNativeItem",value:function(e){this.clearCurrentDragSourceNode(),this.currentNativeSource=function(e){return new V(H[e])}(e),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}},{key:"setCurrentDragSourceNode",value:function(e){var t=this;this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;this.mouseMoveTimeoutTimer=setTimeout(function(){return t.window&&t.window.addEventListener("mousemove",t.endDragIfSourceWasRemovedFromDOM,!0)},1e3)}},{key:"clearCurrentDragSourceNode",value:function(){return!!this.currentDragSourceNode&&(this.currentDragSourceNode=null,this.window&&(this.window.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.window.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)),this.mouseMoveTimeoutTimer=null,!0)}},{key:"handleDragStart",value:function(e,t){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}},{key:"handleDragEnter",value:function(e,t){this.dragEnterTargetIds.unshift(t)}},{key:"handleDragOver",value:function(e,t){null===this.dragOverTargetIds&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}},{key:"handleDrop",value:function(e,t){this.dropTargetIds.unshift(t)}},{key:"window",get:function(){return this.options.window}},{key:"document",get:function(){return this.options.document}}])&&Z(t.prototype,r),a&&Z(t,a),e}();var te=function(e,t){return new ee(e,t)};r.d(t,"pageQuery",function(){return ne});var re=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var r=t.prototype;return r.refresh=function(){"function"==typeof this.refreshBindBack&&this.refreshBindBack()},r.refreshBinder=function(e){this.refreshBindBack=e},r.render=function(){var e=this.props.data.allMarkdownRemark.edges.filter(function(e){return!e.node.frontmatter.draft});return s.a.createElement(p.b,{backend:te},s.a.createElement(l.a,null,s.a.createElement("div",{className:"index-container"},s.a.createElement(u.a,{title:S.a.siteTitle}),s.a.createElement(f.a,null),s.a.createElement(N,{refreshBinder:this.refreshBinder.bind(this)}),s.a.createElement(d.a,{refresh:this.refresh.bind(this),postEdges:e}))))},t}(s.a.Component),ne=(t.default=re,"2960067163")},161:function(e,t,r){r(36);var n={siteTitle:"MSKf's Tree BLOG",siteTitleShort:"MSKf's Tree",siteTitleAlt:"MSKF TREE BLOG",siteLogo:"/logos/logo-1024.png",siteUrl:"https://mskf.work",pathPrefix:"",siteDescription:"",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"mskf-work",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY/MM/DD",dateFormat:"MM/DD/YYYY",userName:"mskf",userEmail:"gattonero1052@example.com",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},165:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var n=r(9),a=r.n(n),i=r(0),o=r.n(i),s=r(162),c=r.n(s),u=r(161),l=r.n(u),d=(r(185),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:l.a.siteDescription})),e)},t}(o.a.Component))},166:function(e,t,r){"use strict";r.d(t,"c",function(){return u}),r.d(t,"a",function(){return d}),r.d(t,"b",function(){return s});var n=r(0),a=r.n(n),i=(r(56),r(236),r(195)),o=r(175),s="-1",c=["#478BA2","#DE585D","#E97658","#E2A490","#89D4DB"],u=function(e){for(var t=0,r=0;r<e.length;r++)t+=e.charCodeAt(r);return c[t%c.length]},l=function(e){var t=e.tag,r=e.refresh,n=Object(i.c)({item:{name:t,type:s},end:function(e,n){var a=n.getDropResult();if(e&&a){Object(o.a)(a.node,t);r()}},collect:function(e){return{isDragging:e.isDragging()}}}),c=n[0].isDragging,l=n[1],d=u(t),f=c?.4:1;return a.a.createElement("div",{ref:l,key:t,className:"tag-item",style:{opacity:f,color:d}},t)},d=function(e){var t=e.tags,r=e.refresh;return a.a.createElement("div",{className:"tag-list"},t.map(function(e){return a.a.createElement(l,{key:e,tag:e,refresh:r})}))}},175:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"f",function(){return o}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return c}),r.d(t,"g",function(){return u}),r.d(t,"d",function(){return d}),r.d(t,"e",function(){return l});r(237),r(37);var n=r(166),a=function(e){this.id=Math.random().toString().substr(2),this.children=[],this.value=e,this.parent=null,this.isTemp=0,this.isFake=0},i=function(e,t){var r=new a(t);return r.parent=e,r.level=1+(0|e.level),e.children.push(r),r},o=function(e){return null==e.parent?e:findRoot(e.parent)},s=function e(t,r,n){if(t){r(t,n);for(var a=0;a<t.children.length;a++)e(t.children[a],r,t)}},c=function e(t,r){if(!t)return null;if(t.id==r)return t;for(var n=null,a=0;!n&&a<t.children.length;a++)n=e(t.children[a],r);return n},u=function(e,t){s(e,function(e){return e._spaceCount=0});var r=function(e,t){for(;e!=t;)(e=e.parent)._spaceCount=(e._spaceCount||1)+1},n="SPLITTER",i=[e,n],o=0,c=[],u=e;do{for(;i[0]!=n;){var l=i.splice(0,1)[0];0==l.children.length&&0,l._needToAdd&&r(l,u);for(var d=0;d<l.children.length;d++)d>0&&(l.children[d]._needToAdd=!0),i.push(l.children[d])}i.push(i.splice(0,1)[0]),o++}while(o<t&&i.length>1);var f,h=o;o=0,i=[e,n];do{for(c[o]=[];i[0]!=n;){var p=i.splice(0,1)[0];if((p.isFake||0==p.children.length)&&o<h-1&&i.push((f=void 0,(f=new a("")).isFake=1,f)),c[o].push(p),p.level=o,!p.isFake)for(var g=0;g<p.children.length;g++)i.push(p.children[g])}i.push(i.splice(0,1)[0]),o++}while(o<t&&i.length>1);for(var v=0;v<=t-c.length;v++)c.push([]);return c},l=function e(t){if(!t||!t._domObject)return[];var r=t._domObject.getClientRects()[0],a=[];if(!r||!r.x)return[];for(var i=0;i<t.children.length;i++)if(t.children[i]._domObject){var o=t.children[i]._domObject.getClientRects()[0];a.push({color:Object(n.c)(t.value),start:{x:r.left+r.width/2,y:r.top+r.height/2},end:{x:o.left+o.width/2,y:o.top+o.height/2}}),a=a.concat(e(t.children[i])),console.log(a)}return a},d=function(){var e=new a("ROOT");return e.id="root",e.level=0,e}},194:function(e,t,r){"use strict";r(36),r(78);var n=r(9),a=r.n(n),i=r(0),o=r.n(i),s=r(56),c=r(166),u=(r(238),function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var r=t.prototype;return r.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){if(t.node.rawMarkdownBody){var r=t.node.rawMarkdownBody.match(/(#{1,5} .*[\n\r])/g)||[];e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags||[],cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead,abstract:t.node.frontmatter.abstract||r.map(function(e){return e.replace(/^#+/,"").trim()}).join("  ")})}}),e},r.render=function(){var e=this,t=this.getPostList();return o.a.createElement("div",null,t.map(function(t){return o.a.createElement("div",{className:"post-list",key:t.path},o.a.createElement("div",{className:"post-left"},o.a.createElement("div",{className:"post-title"},o.a.createElement(s.Link,{to:t.path,key:t.title},t.title)),o.a.createElement("div",{className:"post-tags"}),o.a.createElement("div",{className:"post-abstract"},t.abstract)),o.a.createElement("div",{className:"post-right"},o.a.createElement("div",{className:"post-tags"},o.a.createElement(c.a,{refresh:e.props.refresh,tags:t.tags}))))}))},t}(o.a.Component));t.a=u},235:function(e,t,r){"use strict";var n=r(9),a=r.n(n),i=r(0),o=r.n(i),s=r(162),c=r.n(s),u=r(203),l=r.n(u),d=r(161),f=r.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t,r,n,a=this.props,i=a.postNode,s=a.postPath,u=a.postSEO;if(u){var d=i.frontmatter;e=d.title,t=d.description?d.description:i.excerpt,r=d.cover,n=l()(f.a.siteUrl,f.a.pathPrefix,s)}else e=f.a.siteTitle,t=f.a.siteDescription,r=f.a.siteLogo;r=l()(f.a.siteUrl,f.a.pathPrefix,r);var h=l()(f.a.siteUrl,f.a.pathPrefix),p=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:f.a.siteTitleAlt?f.a.siteTitleAlt:""}];return u&&p.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:r}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:f.a.siteTitleAlt?f.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:r},description:t}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:r}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),o.a.createElement("meta",{property:"og:url",content:u?n:h}),u?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:r}),o.a.createElement("meta",{property:"fb:app_id",content:f.a.siteFBAppID?f.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:f.a.userTwitter?f.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:r}))},t}(i.Component);t.a=h}}]);
//# sourceMappingURL=component---src-pages-index-jsx-3dc61f059700329ded94.js.map