webpackJsonp([1],[function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){var r=n(3);r(document).ready(function(){var e=n(4),t=t||{};window.GAME_APP=t;var r=n(6);t.appView=new r;{var i=n(7);new i}e.history.start()})},function(e,t,n){var r,i=function(){return r.indexOf(n.h())>=0},o=function a(){e.hot.check(!0,function(t,r){return t?void(e.hot.status()in{abort:1,fail:1}?(console.warn("[HMR] Cannot apply update. Need to do a full reload!"),console.warn("[HMR] "+t.stack||t.message),window.location.reload()):console.warn("[HMR] Update failed: "+t.stack||t.message)):r?(i()||a(),n(8)(r,r),void(i()&&console.log("[HMR] App is up to date."))):(console.warn("[HMR] Cannot find update. Need to do a full reload!"),console.warn("[HMR] (Probably because of restarting the webpack-dev-server)"),void window.location.reload())})},s=window.addEventListener?function(e,t){window.addEventListener(e,t,!1)}:function(e,t){window.attachEvent("on"+e,t)};s("message",function(t){"string"==typeof t.data&&0===t.data.indexOf("webpackHotUpdate")&&(r=t.data,i()||"idle"!==e.hot.status()||(console.log("[HMR] Checking for updates on the server..."),o()))}),console.log("[HMR] Waiting for update signal from WDS...")},,,,function(e,t,n){var r=n(4),i=n(3),o=n(9),s=n(10),a=n(11),u=n(12),l=n(13),c=i("#start-mask"),f=i("#header"),h=i("#main"),p=r.View.extend({el:"#app-wrap",initialize:function(){var e=new o;c.html(e.el)},render:function(e){if(e){if(c.hide(),"string"==typeof e){var t=this.toCamelCase("render",e);this[t]&&this[t]()}}else c.show()},renderIt:function(){GAME_APP.headerView&&GAME_APP.headerView.remove(),GAME_APP.mainView&&GAME_APP.mainView.remove(),GAME_APP.itHeaderModel||(GAME_APP.itHeaderModel=new a),GAME_APP.headerView=new s({model:GAME_APP.itHeaderModel}),f.html(GAME_APP.headerView.el),GAME_APP.itGridsCollection||(GAME_APP.itGridsCollection=new u),GAME_APP.mainView=new l({collection:GAME_APP.itGridsCollection}),h.html(GAME_APP.mainView.el),GAME_APP.itGridsCollection.length||(GAME_APP.itGridsCollection.generateGrid(),GAME_APP.itGridsCollection.generateGrid())},renderArch:function(){GAME_APP.headerView&&GAME_APP.headerView.remove(),GAME_APP.mainView&&GAME_APP.mainView.remove(),GAME_APP.archHeaderModel||(GAME_APP.archHeaderModel=new a({title:"迎娶黑富美游戏"})),GAME_APP.headerView=new s({model:GAME_APP.archHeaderModel}),f.html(GAME_APP.headerView.el),GAME_APP.archGridsCollection||(GAME_APP.archGridsCollection=new u),GAME_APP.mainView=new l({collection:GAME_APP.archGridsCollection}),h.html(GAME_APP.mainView.el),GAME_APP.archGridsCollection.length||(GAME_APP.archGridsCollection.generateGrid(),GAME_APP.archGridsCollection.generateGrid())},renderOther:function(){GAME_APP.headerView&&GAME_APP.headerView.remove(),GAME_APP.mainView&&GAME_APP.mainView.remove(),GAME_APP.otherHeaderModel||(GAME_APP.otherHeaderModel=new a),GAME_APP.headerView=new s({model:GAME_APP.otherHeaderModel}),f.html(GAME_APP.headerView.el),GAME_APP.otherGridsCollection||(GAME_APP.otherGridsCollection=new u),GAME_APP.mainView=new l({collection:GAME_APP.otherGridsCollection}),h.html(GAME_APP.mainView.el),GAME_APP.otherGridsCollection.length||(GAME_APP.otherGridsCollection.generateGrid(),GAME_APP.otherGridsCollection.generateGrid())},toCamelCase:function(){for(var e="",t=0,n=arguments.length;n>t;t++){var r=arguments[t];r=0!=t?r.charAt(0).toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase(),e+=r}return e}});e.exports=p},function(e,t,n){var r=n(4),i=window.GAME_APP,o=r.Router.extend({routes:{"*role":"chooseRole"},chooseRole:function(e){i.ROLE=e,i.appView.render(e)}});e.exports=o},function(e,t,n){e.exports=function(e,t){var n=e.filter(function(e){return t&&t.indexOf(e)<0});n.length>0&&(console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),n.forEach(function(e){console.warn("[HMR]  - "+e)})),t&&0!==t.length?(console.log("[HMR] Updated modules:"),t.forEach(function(e){console.log("[HMR]  - "+e)})):console.log("[HMR] Nothing hot updated.")}},function(e,t,n){var r=n(4),i=n(17),o=r.View.extend({className:"start-mask",template:i,initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this}});e.exports=o},function(e,t,n){var r=n(4),i=n(18),o=r.View.extend({className:"header",template:i,events:{"click .start-btn":"resetView"},initialize:function(){this.listenTo(this.model,{change:this.render}),this.render()},render:function(){if(!this.model.get("score")){var e=this.model.previous("score"),t=this.model.get("highestScore");e>t&&this.model.set({highestScore:e},{silent:!0})}return this.$el.html(this.template(this.model.toJSON())),this},resetView:function(){GAME_APP[GAME_APP.ROLE+"GridsCollection"].reset(),this.model.resetScore()}});e.exports=o},function(e,t,n){var r=n(4),i=r.Model.extend({defaults:{score:0,highestScore:0,title:"赢取白富美游戏"},resetScore:function(){this.set({score:0})}});e.exports=i},function(e,t,n){var r=n(4),i=n(14),o=16,s=n(5),a=r.Collection.extend({model:i,initialize:function(){this.BLOCKDATA_LENGTH_X=4,this.BLOCKDATA_LENGTH_Y=4,this.resetBlock()},isGameOver:function(){var e=this.blockData,t=this.BLOCKDATA_LENGTH_X,n=this.BLOCKDATA_LENGTH_Y;if(this.length===o){for(var r=0,i=t-1;i>r;r++)for(var s=0,a=n-1;a>s;s++)if(e[r][s]==e[r+1][s]||e[r][s]==e[r][s+1])return!1;for(var u=0,l=n-1;l>u;u++)if(e[u][l]==e[u+1][l])return!1;for(var c=0,f=t-1;f>c;c++)if(e[f][c]==e[f][c+1])return!1;return!0}return!1},generateGrid:function(){if(this.length!==o){var e=this.blockTextMapping(),t=Math.random()<.5?2:4,n=this.generateRandomPos(),r={top:16+144*n.xPos+"px",left:16+144*n.yPos+"px"},i=new this.model({num:t,text:e[t],blockPos:n,layoutPos:r});return this.blockData[n.xPos][n.yPos]=t,this.add(i),i}},generateRandomPos:function(){for(var e=this.blockData,t=this.BLOCKDATA_LENGTH_X,n=this.BLOCKDATA_LENGTH_Y,r=o-this.length,i=0,s=Math.floor(Math.random()*r),a=0,u=t;u>a;a++)for(var l=0,c=n;c>l;l++)if(!e[a][l]){if(i===s)return{xPos:a,yPos:l};i++}},resetBlock:function(){for(var e=[],t=0;4>t;t++)e[t]=new Array(4);this.blockData=e},moveBlock:function(e){function t(e,t,n){var r,i,a=t[0],u=t[1],c=n[0],f=n[1];if(l[a][u]==l[c][f]){l[c][f]+=l[a][u],l[a][u]=0,i=l[c][f];var h=e.filter(function(e){return e.get("blockPos").xPos===c&&e.get("blockPos").yPos===f?!0:!1});e.remove(h);var p=e.filter(function(e){return e.get("blockPos").xPos===a&&e.get("blockPos").yPos===u?!0:!1});s.invoke(p,"set",{blockPos:{xPos:c,yPos:f},layoutPos:{top:16+144*c+"px",left:16+144*f+"px"},num:i,text:o[i]}),r=GAME_APP[GAME_APP.ROLE+"HeaderModel"].get("score"),GAME_APP[GAME_APP.ROLE+"HeaderModel"].set({score:r+2*l[c][f]})}else{l[c][f]=l[a][u],l[a][u]=0;var p=e.filter(function(e){return e.get("blockPos").xPos===a&&e.get("blockPos").yPos===u?!0:!1});s.invoke(p,"set",{blockPos:{xPos:c,yPos:f},layoutPos:{top:16+144*c+"px",left:16+144*f+"px"}})}}var n,r,i,o=this.blockTextMapping(),a=this.BLOCKDATA_LENGTH_X,u=this.BLOCKDATA_LENGTH_Y,l=this.blockData,c=this;switch(e){case"left":for(var f=0,h=a;h>f;f++){n=-1;for(var p=1,d=u;d>p;p++)l[f][p]&&(r=new Array(f,p),i=this.canMoveLeft(r,n),i&&(t(c,r,i),n=i[1]-1))}this.generateGrid();break;case"right":for(var f=0,h=a;h>f;f++){n=4;for(var p=u-2;p>-1;p--)l[f][p]&&(r=new Array(f,p),i=this.canMoveRight(r,n),i&&(t(c,r,i),n=i[1]+1))}this.generateGrid();break;case"up":for(var f=0,h=u;h>f;f++){n=-1;for(var p=1,d=a;d>p;p++)l[p][f]&&(r=new Array(p,f),i=this.canMoveUp(r,n),i&&(t(c,r,i),n=i[0]-1))}this.generateGrid();break;case"down":for(var f=0,h=u;h>f;f++){n=4;for(var p=u-2;p>-1;p--)l[p][f]&&(r=new Array(p,f),i=this.canMoveDown(r,n),i&&(t(c,r,i),n=i[0]+1))}this.generateGrid()}},blockTextMapping:function(){var e=GAME_APP.ROLE;return"arch"==e?blockTextMapping={2:"实习僧",4:"刷夜狗",8:"画图工具",16:"建筑师",32:"主创",64:"小组长",128:"项目头",256:"设计总监",512:"总经理",1024:"CEO",2048:"黑富美"}:"it"==e?blockTextMapping={2:"实习生",4:"页面仔",8:"码农",16:"程序猿",32:"攻城狮",64:"产品狗",128:"产品经理",256:"产品总监",512:"总经理",1024:"CEO",2048:"白富美"}:blockTextMapping={2:"2",4:"4",8:"8",16:"16",32:"32",64:"64",128:"126",256:"256",512:"512",1024:"1024",2048:"2048"},blockTextMapping},canMoveLeft:function(e,t){for(var n=this.blockData,r=0,i=e[0],o=e[1],s=o-1;s>t;s--){if(n[i][s]){if(n[i][s]==n[i][o]){r=[i,s];break}break}r=[i,s]}return r},canMoveRight:function(e,t){for(var n=this.blockData,r=0,i=e[0],o=e[1],s=o+1;t>s;s++){if(n[i][s]){if(n[i][s]==n[i][o]){r=[i,s];break}break}r=[i,s]}return r},canMoveUp:function(e,t){for(var n=this.blockData,r=0,i=e[0],o=e[1],s=i-1;s>t;s--){if(n[s][o]){if(n[s][o]==n[i][o]){r=[s,o];break}break}r=[s,o]}return r},canMoveDown:function(e,t){for(var n=this.blockData,r=0,i=e[0],o=e[1],s=i+1;t>s;s++){if(n[s][o]){if(n[s][o]==n[i][o]){r=[s,o];break}break}r=[s,o]}return r}});e.exports=a},function(e,t,n){var r=n(4),i=n(3),o=n(5),s=n(19),a=n(15),u=n(16),l=r.View.extend({template:s,className:"main",events:{touchstart:"touchStart",touchend:"touchEnd"},initialize:function(){this.listenTo(this.collection,{add:this.addBlock,reset:this.resetBlock}),this.touchPos=[],this.render(),this.collection.length&&this.collection.each(this.addBlock,this);var e=o.bind(this.moveBlock,this);i(document).off("keydown"),i(document).on("keydown",e)},render:function(){return this.$el.html(this.template()),this},addBlock:function(e){var t=new a({model:e});this.$(".grids-layout").append(t.el)},moveBlock:function(e){function t(e){e.collection.isGameOver()&&(n=setTimeout(function(){e.showGameOverView()},1e3))}var n,r=this,i="object"==typeof e?e.which:e;switch("object"==typeof e&&(37==e.which||38==e.which||39==e.which||40==e.which)&&e.preventDefault(),i){case 37:this.collection.moveBlock("left"),t(r);break;case 38:this.collection.moveBlock("up"),t(r);break;case 39:this.collection.moveBlock("right"),t(r);break;case 40:this.collection.moveBlock("down"),t(r)}},resetBlock:function(){this.render(),this.collection.resetBlock(),this.collection.generateGrid(),this.collection.generateGrid()},showGameOverView:function(){GAME_APP.gameOverView?i(".game-over-mask").show():(GAME_APP.gameOverView=new u,i("#app-wrap").append(GAME_APP.gameOverView.el))},touchStart:function(e){var t=this.touchPos;e.preventDefault(),t[0]={x:e.originalEvent.touches[0].pageX,y:e.originalEvent.touches[0].pageY}},touchEnd:function(e){var t=this.touchPos;e.preventDefault(),t[1]={x:e.originalEvent.changedTouches[0].pageX,y:e.originalEvent.changedTouches[0].pageY};var n,r=t[1].x-t[0].x,i=t[1].y-t[0].y;i>0&&Math.abs(i/r)>1&&(n=40),0>i&&Math.abs(i/r)>1&&(n=38),r>0&&Math.abs(i/r)<1&&(n=39),0>r&&Math.abs(i/r)<1&&(n=37),this.moveBlock(n)}});e.exports=l},function(e,t,n){var r=n(4),i=r.Model.extend({defaults:{num:2,text:"",blockPos:{xPos:0,yPos:0},layoutPos:{top:0,left:0}}});e.exports=i},function(e,t,n){var r=n(4),i=n(20),o=n(5),s=r.View.extend({template:i,initialize:function(){this.listenTo(this.model,{"change:layoutPos":this.moveBlock,remove:this.clear}),this.render(),this.$(".block").addClass("animation-show")},render:function(){return this.$el.html(this.template(this.model.toJSON())).find(".block").addClass(arguments[0]).removeClass("animation-show"),this},moveBlock:function(e){var t=e.get("layoutPos"),n=e.previous("layoutPos"),r=parseInt(t.top)-parseInt(n.top),i=parseInt(t.left)-parseInt(n.left);this.$(".block").animate({top:"+="+r+"px",left:"+="+i+"px"},150);var s=function(){e.hasChanged("num")&&this.render("animation-bump")};s=o.bind(s,this),setTimeout(s,100)},clear:function(){var e=this,t=function(){e.remove()};setTimeout(t,100)}});e.exports=s},function(e,t,n){var r=n(4),i=n(21),o=r.View.extend({className:"mask game-over-mask",template:i,events:{"click .start-btn":"resetView","click .role-btn":"hideMask"},initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this},resetView:function(){GAME_APP[GAME_APP.ROLE+"GridsCollection"].reset(),GAME_APP[GAME_APP.ROLE+"HeaderModel"].resetScore(),this.$el.hide()},hideMask:function(){this.$el.hide()}});e.exports=o},function(module,exports,__webpack_require__){module.exports=function(obj){obj||(obj={});var __p="";with(obj)__p+='<h2 class="title">定制版2048游戏</h2>\n<p>开始游戏，请选择合适的角色</p>\n<a href="#/it" class="start-btn">IT民工</a>\n<a href="#/arch" class="start-btn">建筑师</a>\n<a href="#/other" class="start-btn">打酱油</a>\n';return __p}},function(module,exports,__webpack_require__){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="pull-left">\n    <h2 class="title">'+(null==(__t=title)?"":__t)+'</h2>\n    <button class="start-btn">重新开始</button>\n    <a href="#/" class="role-btn">重选角色</a>\n</div>\n<div class="pull-right">\n    <div class="score-count">\n        <div class="score">\n            得分<span class="score-num">'+(null==(__t=score)?"":__t)+'</span>\n        </div>\n        <div class="score">\n            最高<span class="score-highest">'+(null==(__t=highestScore)?"":__t)+"</span>\n        </div>\n    </div>\n</div>";return __p}},function(module,exports,__webpack_require__){module.exports=function(obj){obj||(obj={});var __p="";with(obj)__p+='<ul class="grids-layout">\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n    <li class="grid-cell"></li>\n</ul>';return __p}},function(module,exports,__webpack_require__){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<li class="block block-'+(null==(__t=num)?"":__t)+'" style="top:'+(null==(__t=layoutPos.top)?"":__t)+"; left:"+(null==(__t=layoutPos.left)?"":__t)+'">'+(null==(__t=text)?"":__t)+"</li>";return __p}},function(module,exports,__webpack_require__){module.exports=function(obj){obj||(obj={});var __p="";with(obj)__p+='<h2 class="title">游戏结束</h2>\n<button class="start-btn">再玩一次</button>\n<a href="#/" class="role-btn">重选角色</a>';return __p}}]);