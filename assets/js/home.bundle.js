!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./entry/home.js")}({"../node_modules/flexslider/jquery.flexslider.js":function(e,t,n){(function(e){!function(t){var n=!0;t.flexslider=function(a,i){var r=t(a);r.vars=t.extend({},t.flexslider.defaults,i);var o,s=r.vars.namespace,l=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,c=("ontouchstart"in window||l||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp keyup",d="",v="vertical"===r.vars.direction,p=r.vars.reverse,m=r.vars.itemWidth>0,f="fade"===r.vars.animation,h=""!==r.vars.asNavFor,g={};t.data(a,"flexslider",r),g={init:function(){r.animating=!1,r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0,10),isNaN(r.currentSlide)&&(r.currentSlide=0),r.animatingTo=r.currentSlide,r.atEnd=0===r.currentSlide||r.currentSlide===r.last,r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" ")),r.slides=t(r.vars.selector,r),r.container=t(r.containerSelector,r),r.count=r.slides.length,r.syncExists=t(r.vars.sync).length>0,"slide"===r.vars.animation&&(r.vars.animation="swing"),r.prop=v?"top":"marginLeft",r.args={},r.manualPause=!1,r.stopped=!1,r.started=!1,r.startTimeout=null,r.transitions=!r.vars.video&&!f&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return r.pfx=t[n].replace("Perspective","").toLowerCase(),r.prop="-"+r.pfx+"-transform",!0;return!1}(),r.ensureAnimationEnd="",""!==r.vars.controlsContainer&&(r.controlsContainer=t(r.vars.controlsContainer).length>0&&t(r.vars.controlsContainer)),""!==r.vars.manualControls&&(r.manualControls=t(r.vars.manualControls).length>0&&t(r.vars.manualControls)),""!==r.vars.customDirectionNav&&(r.customDirectionNav=2===t(r.vars.customDirectionNav).length&&t(r.vars.customDirectionNav)),r.vars.randomize&&(r.slides.sort(function(){return Math.round(Math.random())-.5}),r.container.empty().append(r.slides)),r.doMath(),r.setup("init"),r.vars.controlNav&&g.controlNav.setup(),r.vars.directionNav&&g.directionNav.setup(),r.vars.keyboard&&(1===t(r.containerSelector).length||r.vars.multipleKeyboard)&&t(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(39===t||37===t)){var n=39===t?r.getTarget("next"):37===t&&r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}}),r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,a){e.preventDefault();var i=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(i,r.vars.pauseOnAction)}),r.vars.pausePlay&&g.pausePlay.setup(),r.vars.slideshow&&r.vars.pauseInvisible&&g.pauseInvisible.init(),r.vars.slideshow&&(r.vars.pauseOnHover&&r.hover(function(){r.manualPlay||r.manualPause||r.pause()},function(){r.manualPause||r.manualPlay||r.stopped||r.play()}),r.vars.pauseInvisible&&g.pauseInvisible.isHidden()||(r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play())),h&&g.asNav.setup(),c&&r.vars.touch&&g.touch(),(!f||f&&r.vars.smoothHeight)&&t(window).bind("resize orientationchange focus",g.resize()),r.find("img").attr("draggable","false"),setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0,r.animatingTo=Math.floor(r.currentSlide/r.move),r.currentItem=r.currentSlide,r.slides.removeClass(s+"active-slide").eq(r.currentItem).addClass(s+"active-slide"),l?(a._slider=r,r.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var n=t(this),a=n.index();t(r.vars.asNavFor).data("flexslider").animating||n.hasClass("active")||(r.direction=r.currentItem<a?"next":"prev",r.flexAnimate(a,r.vars.pauseOnAction,!1,!0,!0))})})):r.slides.on(u,function(e){e.preventDefault();var n=t(this),a=n.index();n.offset().left-t(r).scrollLeft()<=0&&n.hasClass(s+"active-slide")?r.flexAnimate(r.getTarget("prev"),!0):t(r.vars.asNavFor).data("flexslider").animating||n.hasClass(s+"active-slide")||(r.direction=r.currentItem<a?"next":"prev",r.flexAnimate(a,r.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){r.manualControls?g.controlNav.setupManual():g.controlNav.setupPaging()},setupPaging:function(){var e,n,a="thumbnails"===r.vars.controlNav?"control-thumbs":"control-paging",i=1;if(r.controlNavScaffold=t('<ol class="'+s+"control-nav "+s+a+'"></ol>'),r.pagingCount>1)for(var o=0;o<r.pagingCount;o++){n=r.slides.eq(o),void 0===n.attr("data-thumb-alt")&&n.attr("data-thumb-alt","");var l=""!==n.attr("data-thumb-alt")?l=' alt="'+n.attr("data-thumb-alt")+'"':"";if(e="thumbnails"===r.vars.controlNav?'<img src="'+n.attr("data-thumb")+'"'+l+"/>":'<a href="#">'+i+"</a>","thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var c=n.attr("data-thumbcaption");""!==c&&void 0!==c&&(e+='<span class="'+s+'caption">'+c+"</span>")}r.controlNavScaffold.append("<li>"+e+"</li>"),i++}r.controlsContainer?t(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold),g.controlNav.set(),g.controlNav.active(),r.controlNavScaffold.delegate("a, img",u,function(e){if(e.preventDefault(),""===d||d===e.type){var n=t(this),a=r.controlNav.index(n);n.hasClass(s+"active")||(r.direction=a>r.currentSlide?"next":"prev",r.flexAnimate(a,r.vars.pauseOnAction))}""===d&&(d=e.type),g.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls,g.controlNav.active(),r.controlNav.bind(u,function(e){if(e.preventDefault(),""===d||d===e.type){var n=t(this),a=r.controlNav.index(n);n.hasClass(s+"active")||(a>r.currentSlide?r.direction="next":r.direction="prev",r.flexAnimate(a,r.vars.pauseOnAction))}""===d&&(d=e.type),g.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===r.vars.controlNav?"img":"a";r.controlNav=t("."+s+"control-nav li "+e,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(s+"active").eq(r.animatingTo).addClass(s+"active")},update:function(e,n){r.pagingCount>1&&"add"===e?r.controlNavScaffold.append(t('<li><a href="#">'+r.count+"</a></li>")):1===r.pagingCount?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove(),g.controlNav.set(),r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,e):g.controlNav.active()}},directionNav:{setup:function(){var e=t('<ul class="'+s+'direction-nav"><li class="'+s+'nav-prev"><a class="'+s+'prev" href="#">'+r.vars.prevText+'</a></li><li class="'+s+'nav-next"><a class="'+s+'next" href="#">'+r.vars.nextText+"</a></li></ul>");r.customDirectionNav?r.directionNav=r.customDirectionNav:r.controlsContainer?(t(r.controlsContainer).append(e),r.directionNav=t("."+s+"direction-nav li a",r.controlsContainer)):(r.append(e),r.directionNav=t("."+s+"direction-nav li a",r)),g.directionNav.update(),r.directionNav.bind(u,function(e){e.preventDefault();var n;""!==d&&d!==e.type||(n=t(this).hasClass(s+"next")?r.getTarget("next"):r.getTarget("prev"),r.flexAnimate(n,r.vars.pauseOnAction)),""===d&&(d=e.type),g.setToClearWatchedEvent()})},update:function(){var e=s+"disabled";1===r.pagingCount?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):0===r.animatingTo?r.directionNav.removeClass(e).filter("."+s+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+s+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=t('<div class="'+s+'pauseplay"><a href="#"></a></div>');r.controlsContainer?(r.controlsContainer.append(e),r.pausePlay=t("."+s+"pauseplay a",r.controlsContainer)):(r.append(e),r.pausePlay=t("."+s+"pauseplay a",r)),g.pausePlay.update(r.vars.slideshow?s+"pause":s+"play"),r.pausePlay.bind(u,function(e){e.preventDefault(),""!==d&&d!==e.type||(t(this).hasClass(s+"pause")?(r.manualPause=!0,r.manualPlay=!1,r.pause()):(r.manualPause=!1,r.manualPlay=!0,r.play())),""===d&&(d=e.type),g.setToClearWatchedEvent()})},update:function(e){"play"===e?r.pausePlay.removeClass(s+"pause").addClass(s+"play").html(r.vars.playText):r.pausePlay.removeClass(s+"play").addClass(s+"pause").html(r.vars.pauseText)}},touch:function(){function t(e){e.stopPropagation(),r.animating?e.preventDefault():(r.pause(),a._gesture.addPointer(e.pointerId),S=0,u=v?r.h:r.w,h=Number(new Date),c=m&&p&&r.animatingTo===r.last?0:m&&p?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:m&&r.currentSlide===r.last?r.limit:m?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:p?(r.last-r.currentSlide+r.cloneOffset)*u:(r.currentSlide+r.cloneOffset)*u)}function n(t){t.stopPropagation();var n=t.target._slider;if(n){var i=-t.translationX,r=-t.translationY;if(S+=v?r:i,d=S,w=v?Math.abs(S)<Math.abs(-i):Math.abs(S)<Math.abs(-r),t.detail===t.MSGESTURE_FLAG_INERTIA)return void e(function(){a._gesture.stop()});(!w||Number(new Date)-h>500)&&(t.preventDefault(),!f&&n.transitions&&(n.vars.animationLoop||(d=S/(0===n.currentSlide&&S<0||n.currentSlide===n.last&&S>0?Math.abs(S)/u+2:1)),n.setProps(c+d,"setTouch")))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!w&&null!==d){var n=p?-d:d,a=n>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(a)&&(Number(new Date)-h<550&&Math.abs(n)>50||Math.abs(n)>u/2)?t.flexAnimate(a,t.vars.pauseOnAction):f||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}o=null,s=null,d=null,c=null,S=0}}var o,s,c,u,d,h,g,y,b,w=!1,T=0,x=0,S=0;l?(a.style.msTouchAction="none",a._gesture=new MSGesture,a._gesture.target=a,a.addEventListener("MSPointerDown",t,!1),a._slider=r,a.addEventListener("MSGestureChange",n,!1),a.addEventListener("MSGestureEnd",i,!1)):(g=function(e){r.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(r.pause(),u=v?r.h:r.w,h=Number(new Date),T=e.touches[0].pageX,x=e.touches[0].pageY,c=m&&p&&r.animatingTo===r.last?0:m&&p?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:m&&r.currentSlide===r.last?r.limit:m?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:p?(r.last-r.currentSlide+r.cloneOffset)*u:(r.currentSlide+r.cloneOffset)*u,o=v?x:T,s=v?T:x,a.addEventListener("touchmove",y,!1),a.addEventListener("touchend",b,!1))},y=function(e){T=e.touches[0].pageX,x=e.touches[0].pageY,d=v?o-x:o-T,w=v?Math.abs(d)<Math.abs(T-s):Math.abs(d)<Math.abs(x-s);(!w||Number(new Date)-h>500)&&(e.preventDefault(),!f&&r.transitions&&(r.vars.animationLoop||(d/=0===r.currentSlide&&d<0||r.currentSlide===r.last&&d>0?Math.abs(d)/u+2:1),r.setProps(c+d,"setTouch")))},b=function(e){if(a.removeEventListener("touchmove",y,!1),r.animatingTo===r.currentSlide&&!w&&null!==d){var t=p?-d:d,n=t>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(n)&&(Number(new Date)-h<550&&Math.abs(t)>50||Math.abs(t)>u/2)?r.flexAnimate(n,r.vars.pauseOnAction):f||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}a.removeEventListener("touchend",b,!1),o=null,s=null,d=null,c=null},a.addEventListener("touchstart",g,!1))},resize:function(){!r.animating&&r.is(":visible")&&(m||r.doMath(),f?g.smoothHeight():m?(r.slides.width(r.computedW),r.update(r.pagingCount),r.setProps()):v?(r.viewport.height(r.h),r.setProps(r.h,"setTotal")):(r.vars.smoothHeight&&g.smoothHeight(),r.newSlides.width(r.computedW),r.setProps(r.computedW,"setTotal")))},smoothHeight:function(e){if(!v||f){var t=f?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).innerHeight()},e):t.innerHeight(r.slides.eq(r.animatingTo).innerHeight())}},sync:function(e){var n=t(r.vars.sync).data("flexslider"),a=r.animatingTo;switch(e){case"animate":n.flexAnimate(a,r.vars.pauseOnAction,!1,!0);break;case"play":n.playing||n.asNav||n.play();break;case"pause":n.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=t(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=g.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){g.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){var e=g.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(o),o=setTimeout(function(){d=""},3e3)}},r.flexAnimate=function(e,n,a,i,o){if(r.vars.animationLoop||e===r.currentSlide||(r.direction=e>r.currentSlide?"next":"prev"),h&&1===r.pagingCount&&(r.direction=r.currentItem<e?"next":"prev"),!r.animating&&(r.canAdvance(e,o)||a)&&r.is(":visible")){if(h&&i){var l=t(r.vars.asNavFor).data("flexslider");if(r.atEnd=0===e||e===r.count-1,l.flexAnimate(e,!0,!1,!0,o),r.direction=r.currentItem<e?"next":"prev",l.direction=r.direction,Math.ceil((e+1)/r.visible)-1===r.currentSlide||0===e)return r.currentItem=e,r.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),!1;r.currentItem=e,r.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),e=Math.floor(e/r.visible)}if(r.animating=!0,r.animatingTo=e,n&&r.pause(),r.vars.before(r),r.syncExists&&!o&&g.sync("animate"),r.vars.controlNav&&g.controlNav.active(),m||r.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),r.atEnd=0===e||e===r.last,r.vars.directionNav&&g.directionNav.update(),e===r.last&&(r.vars.end(r),r.vars.animationLoop||r.pause()),f)c?(r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1}),r.slides.eq(e).css({opacity:1,zIndex:2}),r.wrapup(b)):(r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing),r.slides.eq(e).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup));else{var u,d,y,b=v?r.slides.filter(":first").height():r.computedW;m?(u=r.vars.itemMargin,y=(r.itemW+u)*r.move*r.animatingTo,d=y>r.limit&&1!==r.visible?r.limit:y):d=0===r.currentSlide&&e===r.count-1&&r.vars.animationLoop&&"next"!==r.direction?p?(r.count+r.cloneOffset)*b:0:r.currentSlide===r.last&&0===e&&r.vars.animationLoop&&"prev"!==r.direction?p?0:(r.count+1)*b:p?(r.count-1-e+r.cloneOffset)*b:(e+r.cloneOffset)*b,r.setProps(d,"",r.vars.animationSpeed),r.transitions?(r.vars.animationLoop&&r.atEnd||(r.animating=!1,r.currentSlide=r.animatingTo),r.container.unbind("webkitTransitionEnd transitionend"),r.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(r.ensureAnimationEnd),r.wrapup(b)}),clearTimeout(r.ensureAnimationEnd),r.ensureAnimationEnd=setTimeout(function(){r.wrapup(b)},r.vars.animationSpeed+100)):r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(b)})}r.vars.smoothHeight&&g.smoothHeight(r.vars.animationSpeed)}},r.wrapup=function(e){f||m||(0===r.currentSlide&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&0===r.animatingTo&&r.vars.animationLoop&&r.setProps(e,"jumpStart")),r.animating=!1,r.currentSlide=r.animatingTo,r.vars.after(r)},r.animateSlides=function(){!r.animating&&n&&r.flexAnimate(r.getTarget("next"))},r.pause=function(){clearInterval(r.animatedSlides),r.animatedSlides=null,r.playing=!1,r.vars.pausePlay&&g.pausePlay.update("play"),r.syncExists&&g.sync("pause")},r.play=function(){r.playing&&clearInterval(r.animatedSlides),r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed),r.started=r.playing=!0,r.vars.pausePlay&&g.pausePlay.update("pause"),r.syncExists&&g.sync("play")},r.stop=function(){r.pause(),r.stopped=!0},r.canAdvance=function(e,t){var n=h?r.pagingCount-1:r.last;return!!t||(!(!h||r.currentItem!==r.count-1||0!==e||"prev"!==r.direction)||(!h||0!==r.currentItem||e!==r.pagingCount-1||"next"===r.direction)&&(!(e===r.currentSlide&&!h)&&(!!r.vars.animationLoop||(!r.atEnd||0!==r.currentSlide||e!==n||"next"===r.direction)&&(!r.atEnd||r.currentSlide!==n||0!==e||"next"!==r.direction))))},r.getTarget=function(e){return r.direction=e,"next"===e?r.currentSlide===r.last?0:r.currentSlide+1:0===r.currentSlide?r.last:r.currentSlide-1},r.setProps=function(e,t,n){var a=function(){var n=e||(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo;return-1*function(){if(m)return"setTouch"===t?e:p&&r.animatingTo===r.last?0:p?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return p?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return p?e:r.count*e;case"jumpStart":return p?r.count*e:e;default:return e}}()+"px"}();r.transitions&&(a=v?"translate3d(0,"+a+",0)":"translate3d("+a+",0,0)",n=void 0!==n?n/1e3+"s":"0s",r.container.css("-"+r.pfx+"-transition-duration",n),r.container.css("transition-duration",n)),r.args[r.prop]=a,(r.transitions||void 0===n)&&r.container.css(r.args),r.container.css("transform",a)},r.setup=function(e){if(f)r.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(c?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):0==r.vars.fadeFirstSlide?r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).css({opacity:1}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing)),r.vars.smoothHeight&&g.smoothHeight();else{var n,a;"init"===e&&(r.viewport=t('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container),r.cloneCount=0,r.cloneOffset=0,p&&(a=t.makeArray(r.slides).reverse(),r.slides=t(a),r.container.empty().append(r.slides))),r.vars.animationLoop&&!m&&(r.cloneCount=2,r.cloneOffset=1,"init"!==e&&r.container.find(".clone").remove(),r.container.append(g.uniqueID(r.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(g.uniqueID(r.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),r.newSlides=t(r.vars.selector,r),n=p?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset,v&&!m?(r.container.height(200*(r.count+r.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){r.newSlides.css({display:"block"}),r.doMath(),r.viewport.height(r.h),r.setProps(n*r.h,"init")},"init"===e?100:0)):(r.container.width(200*(r.count+r.cloneCount)+"%"),r.setProps(n*r.computedW,"init"),setTimeout(function(){r.doMath(),r.newSlides.css({width:r.computedW,marginRight:r.computedM,float:"left",display:"block"}),r.vars.smoothHeight&&g.smoothHeight()},"init"===e?100:0))}m||r.slides.removeClass(s+"active-slide").eq(r.currentSlide).addClass(s+"active-slide"),r.vars.init(r)},r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,a=r.vars.maxItems;r.w=void 0===r.viewport?r.width():r.viewport.width(),r.h=e.height(),r.boxPadding=e.outerWidth()-e.width(),m?(r.itemT=r.vars.itemWidth+t,r.itemM=t,r.minW=n?n*r.itemT:r.w,r.maxW=a?a*r.itemT-t:r.w,r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(a-1))/a:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth,r.visible=Math.floor(r.w/r.itemW),r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible,r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1),r.last=r.pagingCount-1,r.limit=1===r.pagingCount?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t):(r.itemW=r.w,r.itemM=t,r.pagingCount=r.count,r.last=r.count-1),r.computedW=r.itemW-r.boxPadding,r.computedM=r.itemM},r.update=function(e,t){r.doMath(),m||(e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&0!==e&&(r.currentSlide-=1),r.animatingTo=r.currentSlide),r.vars.controlNav&&!r.manualControls&&("add"===t&&!m||r.pagingCount>r.controlNav.length?g.controlNav.update("add"):("remove"===t&&!m||r.pagingCount<r.controlNav.length)&&(m&&r.currentSlide>r.last&&(r.currentSlide-=1,r.animatingTo-=1),g.controlNav.update("remove",r.last))),r.vars.directionNav&&g.directionNav.update()},r.addSlide=function(e,n){var a=t(e);r.count+=1,r.last=r.count-1,v&&p?void 0!==n?r.slides.eq(r.count-n).after(a):r.container.prepend(a):void 0!==n?r.slides.eq(n).before(a):r.container.append(a),r.update(n,"add"),r.slides=t(r.vars.selector+":not(.clone)",r),r.setup(),r.vars.added(r)},r.removeSlide=function(e){var n=isNaN(e)?r.slides.index(t(e)):e;r.count-=1,r.last=r.count-1,isNaN(e)?t(e,r.slides).remove():v&&p?r.slides.eq(r.last).remove():r.slides.eq(e).remove(),r.doMath(),r.update(n,"remove"),r.slides=t(r.vars.selector+":not(.clone)",r),r.setup(),r.vars.removed(r)},g.init()},t(window).blur(function(e){n=!1}).focus(function(e){n=!0}),t.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},t.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var n=t(this),a=e.selector?e.selector:".slides > li",i=n.find(a);1===i.length&&!1===e.allowOneSlide||0===i.length?(i.fadeIn(400),e.start&&e.start(n)):void 0===n.data("flexslider")&&new t.flexslider(this,e)});var n=t(this).data("flexslider");switch(e){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"==typeof e&&n.flexAnimate(e,!0)}}}(jQuery)}).call(t,n("../node_modules/timers-browserify/main.js").setImmediate)},"../node_modules/process/browser.js":function(e,t){function n(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function r(e){if(d===clearTimeout)return clearTimeout(e);if((d===a||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){f&&p&&(f=!1,p.length?m=p.concat(m):h=-1,m.length&&s())}function s(){if(!f){var e=i(o);f=!0;for(var t=m.length;t;){for(p=m,m=[];++h<t;)p&&p[h].run();h=-1,t=m.length}p=null,f=!1,r(e)}}function l(e,t){this.fun=e,this.array=t}function c(){}var u,d,v=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{d="function"==typeof clearTimeout?clearTimeout:a}catch(e){d=a}}();var p,m=[],f=!1,h=-1;v.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new l(e,t)),1!==m.length||f||i(s)},l.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=c,v.addListener=c,v.once=c,v.off=c,v.removeListener=c,v.removeAllListeners=c,v.emit=c,v.prependListener=c,v.prependOnceListener=c,v.listeners=function(e){return[]},v.binding=function(e){throw new Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw new Error("process.chdir is not supported")},v.umask=function(){return 0}},"../node_modules/setimmediate/setImmediate.js":function(e,t,n){(function(e,t){!function(e,n){"use strict";function a(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return c[l]=a,s(l),l++}function i(e){delete c[e]}function r(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(n,a)}}function o(e){if(u)setTimeout(o,0,e);else{var t=c[e];if(t){u=!0;try{r(t)}finally{i(e),u=!1}}}}if(!e.setImmediate){var s,l=1,c={},u=!1,d=e.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(e);v=v&&v.setTimeout?v:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){o(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&o(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),s=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){o(e.data)},s=function(t){e.port2.postMessage(t)}}():d&&"onreadystatechange"in d.createElement("script")?function(){var e=d.documentElement;s=function(t){var n=d.createElement("script");n.onreadystatechange=function(){o(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){s=function(e){setTimeout(o,0,e)}}(),v.setImmediate=a,v.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n("../node_modules/webpack/buildin/global.js"),n("../node_modules/process/browser.js"))},"../node_modules/timers-browserify/main.js":function(e,t,n){function a(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new a(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new a(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("../node_modules/setimmediate/setImmediate.js"),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},"../node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./components/slider/index.js":function(e,t,n){"use strict";var a=n("./components/slider/slider.js");t.a=a.a},"./components/slider/slider.js":function(e,t,n){"use strict";var a=n("../node_modules/flexslider/jquery.flexslider.js"),i=(n.n(a),function(){var e=jQuery(".flexslider");console.log("slider"),0!==e.length&&e.flexslider({animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!0,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,directionNav:!0,prevText:"",nextText:""})});t.a=i},"./entry/home.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("./components/slider/index.js");jQuery(document).ready(function(){jQuery(window).load(function(){Object(a.a)()})})}});
//# sourceMappingURL=home.bundle.js.map