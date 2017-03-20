/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	Vue.component('class-popup',__webpack_require__(1));
	Vue.component('note-popup',__webpack_require__(8));
	Vue.component('register-popup',__webpack_require__(13));
	Vue.component('note-operations',__webpack_require__(18));

	var app=new Vue
	(
	    {
	        el:'#app',
	        components:
	            {
	                app:__webpack_require__(23)
	            }
	    }
	);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(2)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\popups\\class.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e584f354"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e584f354", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e584f354", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] class.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e584f354&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./class.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e584f354&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./class.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n#set[data-v-e584f354],\n#unset[data-v-e584f354]\n{\n    margin:10px;\n}\n#set[data-v-e584f354]{\n    float:right;\n}\n.item[data-v-e584f354]\n{\n    margin:10px;\n    padding:10px;\n    background-color: white;\n}\n.item img[data-v-e584f354]\n{\n    width:100%;\n}\n.selected[data-v-e584f354]\n{\n    background-color: rgba(133, 225, 133, 0.53) !important;\n}\n#save[data-v-e584f354]\n{\n    float:right;\n    margin-top:0;\n    margin-right:20px;\n}\n#close_class_modal[data-v-e584f354]\n{\n    margin-top:0;\n    margin-left:20px;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        data: function()
	        {
	            return {
	                class_content:[],
	                cid:null,
	                segments:[]
	            };
	        },
	        mounted:function()
	        {
	            var self=this;
	            document.body.addEventListener('yoyo:class_popup',function(e)
	            {
	                $("#class_detail").popup();
	                self.cid=e.message.cid;
	                document.body.addEventListener('yoyo:get_class:ok',self.done_load_class);
	                window.luoc.yoyo.get_class({cid:self.cid});
	            });
	        },
	        methods:
	            {
	                close:function()
	                {
	                    this.class_content=[];
	                    this.cid=null;
	                    this.segments=[];
	                    $.closePopup();
	                },
	                toggle:function(id)
	                {
	                    this.segments[id]=!this.segments[id];
	                    this.segments.reverse().reverse();
	                },
	                done_load_class:function(e)
	                {
	                    var self=this;
	                    document.body.removeEventListener('yoyo:get_class:ok',this.done_load_class);
	                    var res=e.message;
	                    console.log(res);
	                    res.segments.forEach(function(e)
	                    {
	                        e=JSON.parse(JSON.stringify(e));
	                        self.segments.push(false);
	                        if(e.type==='img')
	                        {
	                            e.url='//luoc.co/yoyo/yoyo-loves-you/classes/'+res.cid+'/'+e.url;
	                        }
	                        self.class_content.push(e);
	                    })
	                },
	                save:function()
	                {
	                    var self=this;
	                    var segments='';
	                    this.segments.forEach(function(e,i)
	                    {
	                        if(e)
	                        {
	                            segments+=i+',';
	                        }
	                    });
	                    segments=segments.slice(0,segments.length-1);
	                    function done()
	                    {
	                        alert('笔记保存成功');
	                        document.body.removeEventListener('yoyo:add_note:ok',done);
	                    }
	                    document.body.addEventListener('yoyo:add_note:ok',done);
	                    window.luoc.yoyo.add_note
	                    (
	                        {
	                            uid:window.luoc.navbar.data.uid,
	                            cid:this.cid,
	                            segments:segments
	                        }
	                    );
	                }
	            }
	    }


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-popup__container",
	    attrs: {
	      "id": "class_detail"
	    }
	  }, [_c('div', {
	    staticClass: "weui-popup__overlay"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "weui-popup__modal"
	  }, [_c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
	    staticClass: "weui-btn weui-btn_warn weui-btn_mini",
	    attrs: {
	      "id": "close_class_modal"
	    },
	    on: {
	      "click": function($event) {
	        _vm.close()
	      }
	    }
	  }, [_vm._v("关闭")]), _vm._v(" "), _c('button', {
	    staticClass: "weui-btn weui-btn_primary weui-btn_mini",
	    attrs: {
	      "id": "save"
	    },
	    on: {
	      "click": function($event) {
	        _vm.save()
	      }
	    }
	  }, [_vm._v("保存")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _vm._l((_vm.class_content), function(item, id) {
	    return _c('div', {
	      staticClass: "item",
	      class: {
	        selected: _vm.segments[id] === true
	      },
	      on: {
	        "click": function($event) {
	          _vm.toggle(id)
	        }
	      }
	    }, [(item.type === 'text') ? _c('div', {
	      staticClass: "text"
	    }, [_vm._v("\n                " + _vm._s(item.content) + "\n            ")]) : _vm._e(), _vm._v(" "), (item.type === 'img') ? _c('div', {
	      staticClass: "img"
	    }, [_c('img', {
	      attrs: {
	        "src": item.url
	      }
	    })]) : _vm._e()])
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e584f354", module.exports)
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(9)

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\popups\\note.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-744cdaf8"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-744cdaf8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-744cdaf8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] note.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-744cdaf8&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./note.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-744cdaf8&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./note.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.item[data-v-744cdaf8]\n{\n    line-height: 1.2;\n    border-top:1px dashed black;\n    padding: 15px;\n    margin:10px;\n}\n.item .img[data-v-744cdaf8]\n{\n    text-align:center;\n    width:100%;\n}\n.img img[data-v-744cdaf8]\n{\n    width:100%;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        data: function () {
	            return {
	                note:[],
	                name:'',
	                releaser:''
	            };
	        },
	        mounted:function()
	        {
	            document.body.addEventListener('yoyo:note_popup',this.show);
	        },
	        methods:
	            {
	                close:function()
	                {
	                    this.note=[];
	                    $.closePopup();
	                },
	                show:function(e)
	                {
	                    var self=this;
	                    $("#note_detail").popup();
	                    var source=e.message.source;
	                    this.name=source.meta.name;
	                    this.releaser=source.meta.releaser;
	                    var index=e.message.segments.split(',');
	                    console.log(index);
	                    console.log(source);
	                    index.forEach(function(e)
	                    {
	                        var item=source.segments[e];
	                        if(item.type==='img')
	                        {
	                            item.url='//luoc.co/yoyo/yoyo-loves-you/classes/'+source.meta.cid+'/'+item.url;
	                        }
	                        self.note.push(item);
	                    });
	                }
	            }
	    }


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-popup__container",
	    attrs: {
	      "id": "note_detail"
	    }
	  }, [_c('div', {
	    staticClass: "weui-popup__overlay"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "weui-popup__modal"
	  }, [_c('br'), _vm._v(" "), _c('button', {
	    staticClass: "weui-btn weui-btn_warn weui-btn_mini",
	    on: {
	      "click": function($event) {
	        _vm.close()
	      }
	    }
	  }, [_vm._v("关闭")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', _vm._l((_vm.note), function(item) {
	    return _c('div', {
	      staticClass: "item"
	    }, [(item.type === 'text') ? _c('div', {
	      staticClass: "text"
	    }, [_vm._v("\n                    " + _vm._s(item.content) + "\n                ")]) : _vm._e(), _vm._v(" "), (item.type === 'img') ? _c('div', {
	      staticClass: "img"
	    }, [_c('img', {
	      attrs: {
	        "src": item.url
	      }
	    })]) : _vm._e()])
	  })), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-744cdaf8", module.exports)
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(14)

	/* script */
	__vue_exports__ = __webpack_require__(16)

	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\popups\\register.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-16cf7896"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-16cf7896", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-16cf7896", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] register.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-16cf7896&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-16cf7896&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        data: function () {
	            return {
	                email:'',
	                password:''
	            };
	        },
	        methods:
	            {
	                register:function(e)
	                {
	                    window.luoc.navbar.register
	                    (
	                        {
	                            email:this.email,
	                            password:this.password
	                        }
	                    );
	                }
	            },
	        mounted:function()
	        {
	            document.body.addEventListener('yoyo:register_popup',function()
	            {
	                $("#register_popup").popup();
	            });
	            document.body.addEventListener('navbar:register:ok',function()
	            {
	                alert('注册成功');
	                $.closePopup();
	            });
	            document.body.addEventListener('navbar:register:error',function()
	            {
	                alert('注册失败');
	            });
	        }
	    }


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-popup__container",
	    attrs: {
	      "id": "register_popup"
	    }
	  }, [_c('div', {
	    staticClass: "weui-popup__overlay"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "weui-popup__modal"
	  }, [_c('br'), _c('br'), _vm._v(" "), _c('h3', {
	    staticStyle: {
	      "text-align": "center"
	    }
	  }, [_vm._v("注册账号")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('form', {
	    staticClass: "weui-cells weui_cells_form",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.register($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "weui-cell"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "weui-cell__bd"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.email),
	      expression: "email"
	    }],
	    staticClass: "weui-input",
	    attrs: {
	      "id": "email",
	      "type": "email",
	      "required": ""
	    },
	    domProps: {
	      "value": _vm._s(_vm.email)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.email = $event.target.value
	      }
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "weui-cell"
	  }, [_vm._m(1), _vm._v(" "), _c('div', {
	    staticClass: "weui-cell__bd"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.password),
	      expression: "password"
	    }],
	    staticClass: "weui-input",
	    attrs: {
	      "id": "password",
	      "type": "password",
	      "required": ""
	    },
	    domProps: {
	      "value": _vm._s(_vm.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.password = $event.target.value
	      }
	    }
	  })])]), _vm._v(" "), _c('button', {
	    staticClass: "weui-btn weui-btn_plain-primary",
	    attrs: {
	      "type": "submit"
	    }
	  }, [_vm._v("\n                注册\n            ")])]), _vm._v(" "), _c('br'), _c('br')])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-cell__hd"
	  }, [_c('label', {
	    staticClass: "weui-label",
	    attrs: {
	      "for": "email"
	    }
	  }, [_vm._v("邮箱")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-cell__hd"
	  }, [_c('label', {
	    staticClass: "weui-label",
	    attrs: {
	      "for": "password"
	    }
	  }, [_vm._v("密码")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-16cf7896", module.exports)
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(19)

	/* script */
	__vue_exports__ = __webpack_require__(21)

	/* template */
	var __vue_template__ = __webpack_require__(22)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\popups\\note_operations.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-47cd5737"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-47cd5737", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-47cd5737", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] note_operations.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47cd5737&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./note_operations.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47cd5737&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./note_operations.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.weui-popup__overlay[data-v-47cd5737]\r\n{\r\n    background-color: grey;\r\n    opacity: .6;\n}\n.weui-popup__modal[data-v-47cd5737]\r\n{\r\n    background-color: transparent;\n}\r\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        data: function () {
	            return {
	                note:null
	            };
	        },
	        methods:
	            {
	                show:function()
	                {
	                    $.closePopup();
	                    var event=new Event('yoyo:note_popup');
	                    event.message=this.note;
	                    document.body.dispatchEvent(event);
	                    this.note=null;
	                },
	                delete_note:function()
	                {
	                    $.closePopup();
	                    var event=new Event('yoyo:note_operations:delete');
	                    event.message=this.note.source.cid;
	                    document.body.dispatchEvent(event);
	                    this.note=null;
	                }
	            },
	        mounted:function()
	        {
	            var self=this;
	            document.body.addEventListener('yoyo:note_operations_popup',function(e)
	            {
	                $("#note_operations_popup").popup();
	                self.note=e.message;
	            })
	        }
	    }


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-popup__container popup-bottom",
	    attrs: {
	      "id": "note_operations_popup"
	    }
	  }, [_c('div', {
	    staticClass: "weui-popup__overlay"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "weui-popup__modal"
	  }, [_c('br'), _vm._v(" "), _c('button', {
	    staticClass: "weui-btn weui-btn_primary",
	    on: {
	      "click": function($event) {
	        _vm.show()
	      }
	    }
	  }, [_vm._v("查看")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
	    staticClass: "weui-btn weui-btn_warn",
	    on: {
	      "click": function($event) {
	        _vm.delete_note()
	      }
	    }
	  }, [_vm._v("删除")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-47cd5737", module.exports)
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(24)

	/* script */
	__vue_exports__ = __webpack_require__(26)

	/* template */
	var __vue_template__ = __webpack_require__(58)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5f21433e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5f21433e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] app.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f21433e!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f21433e!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\nhtml,\nbody\n{\n    width:100%;\n    height:100%;\n    overflow: hidden;\n}\n#app\n{\n    margin:0;\n    padding:0;\n    width:100%;\n    height:100%;\n}\n.center-block {\n    text-align:center;\n}\n", ""]);

	// exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//

	module.exports =
	    {
	        name: 'app',
	        data: function ()
	        {
	            return {};
	        },
	        components:
	            {
	                tab:__webpack_require__(27)
	            }
	    }


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(28)

	/* script */
	__vue_exports__ = __webpack_require__(30)

	/* template */
	var __vue_template__ = __webpack_require__(57)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-31d9aeb2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-31d9aeb2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tab.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-31d9aeb2!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-31d9aeb2!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	exports.push([module.id, "@import url(//at.alicdn.com/t/font_1469889758_9089751.css);", ""]);

	// module
	exports.push([module.id, "\n/*@font-face {*/\n    /*font-family: 'iconfont';*/\n    /*src: url('//at.alicdn.com/t/font_1469889758_401954.eot'); !* IE9*!*/\n    /*src: url('//at.alicdn.com/t/font_1469889758_401954.eot?#iefix') format('embedded-opentype'), !* IE6-IE8 *!*/\n    /*url('//at.alicdn.com/t/font_1469889758_401954.woff') format('woff'), !* chrome、firefox *!*/\n    /*url('//at.alicdn.com/t/font_1469889758_401954.ttf') format('truetype'), !* chrome、firefox、opera、Safari, Android, iOS 4.2+*!*/\n    /*url('//at.alicdn.com/t/font_1469889758_401954.svg#iconfont') format('svg'); !* iOS 4.1- *!*/\n/*}*/\n/*.iconfont{*/\n    /*font-size:24px;*/\n    /*line-height:100%;*/\n    /*font-family: iconfont;*/\n    /*font-style:normal;*/\n    /*color:darkgray;*/\n/*}*/\n", ""]);

	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//

	(function init()
	{
	    switch(location.hash)
	    {
	        case '#notes'  : break;
	        case '#select' : break;
	        case '#me'     : break;
	        case '#home'   : break;
	        default        : location.hash='#home'; break;
	    }
	})();

	if(!iconfont) var iconfont={};

	iconfont.class='&#xe608;'; // location_fill
	iconfont.note='&#xe6d6;'; // write_fill
	iconfont.info='&#xe66d;'; // info_fill
	module.exports=
	    {
	        name: 'tab',
	        data: function ()
	        {
	            return {};
	        },
	        methods:
	            {
	                nav:function()
	                {
	                    var id=location.hash.slice(1);
	                    console.log('nav to : '+id);
	                }
	            },
	        components:
	            {
	                tabbar:__webpack_require__(31),
	                tab__bd:__webpack_require__(36)
	            },
	        mounted:function()
	        {
	            $("#page_"+location.hash.slice(1)).addClass('weui-tab__bd-item--active');
	        }
	    }


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(32)

	/* script */
	__vue_exports__ = __webpack_require__(34)

	/* template */
	var __vue_template__ = __webpack_require__(35)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\tabbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-84c57a5e"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-84c57a5e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-84c57a5e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tabbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-84c57a5e&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabbar.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-84c57a5e&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabbar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.weui-tabbar[data-v-84c57a5e]\n{\n    background-color: #f9f9fa;\n    border-top:1px solid #a7a7ab\n}\n.iconfont[data-v-84c57a5e]\n{\n    font-weight: lighter;\n    color: #7b7f83;\n}\n.weui-navbar__item--on .iconfont[data-v-84c57a5e],\n.weui-navbar__item--on .weui-tabbar__label[data-v-84c57a5e]\n{\n    color:#09bb07;\n}\n.weui-badge[data-v-84c57a5e]\n{\n    position:absolute;\n    top:-.4em;\n    right:1em;\n}\n.weui-tabbar__icon>i[data-v-84c57a5e]\n{\n    font-size:27px;\n    line-height: 1;\n}\n", ""]);

	// exports


/***/ },
/* 34 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	    function mounted()
	    {
	        window.addEventListener('hashchange',function()
	        {
	            $(".weui-tabbar__item").removeClass('weui-navbar__item--on');
	            $('a[href="#page_'+location.hash.slice(1)+'"]').addClass('weui-navbar__item--on');
	        });
	        // 初始化
	        $('a[href="#page_'+location.hash.slice(1)+'"]').addClass('weui-navbar__item--on');
	        // 以后的类切换weui框架会自动完成

	        nav.call(this,location.hash.slice(1));
	    }
	    function nav(id)
	    {
	        this.curr=id;
	        location.hash='#'+id;
	    }

	    module.exports=
	        {
	            name:'tabbar',
	            props:
	                [
	//                ''
	            ],
	            data:function()
	            {
	                return {
	                    curr:'home'
	                };
	            },
	            computed:
	                {
	                    classes:function()
	                    {
	                        return{
	                            home:
	                                {
	                                    'icon-homefill':this.curr=='home',
	                                    'icon-home':this.curr!=='home'
	                                },
	                            notes:
	                                {
	                                    'icon-formfill':this.curr=='notes',
	                                    'icon-form':this.curr!=='notes'
	                                },
	                            select:
	                                {
	                                    'icon-roundaddfill':this.curr=='select',
	                                    'icon-roundadd':this.curr!=='select'
	                                },
	                            me:
	                                {
	                                    'icon-myfill':this.curr=='me',
	                                    'icon-my':this.curr!=='me'
	                                }
	                        };
	                    }
	                },
	            methods:
	                {
	                    nav:nav
	                },
	            mounted:mounted
	        }


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-tabbar"
	  }, [_c('a', {
	    staticClass: "weui-tabbar__item",
	    attrs: {
	      "href": "#page_home",
	      "id": "nav_home"
	    },
	    on: {
	      "mouseup": function($event) {
	        _vm.nav('home')
	      }
	    }
	  }, [_c('div', {
	    staticClass: "weui-tabbar__icon"
	  }, [_c('i', {
	    staticClass: "iconfont",
	    class: _vm.classes.home,
	    attrs: {
	      "id": "icon_home"
	    }
	  })]), _vm._v(" "), _c('p', {
	    staticClass: "weui-tabbar__label"
	  }, [_vm._v("首页")])]), _vm._v(" "), _c('a', {
	    staticClass: "weui-tabbar__item",
	    attrs: {
	      "href": "#page_notes",
	      "id": "nav_notes"
	    },
	    on: {
	      "mouseup": function($event) {
	        _vm.nav('notes')
	      }
	    }
	  }, [_c('div', {
	    staticClass: "weui-tabbar__icon"
	  }, [_c('i', {
	    staticClass: "iconfont",
	    class: _vm.classes.notes,
	    attrs: {
	      "id": "icon_notes"
	    }
	  })]), _vm._v(" "), _c('p', {
	    staticClass: "weui-tabbar__label"
	  }, [_vm._v("笔记")])]), _vm._v(" "), _c('a', {
	    staticClass: "weui-tabbar__item",
	    attrs: {
	      "href": "#page_select",
	      "id": "nav_select"
	    },
	    on: {
	      "mouseup": function($event) {
	        _vm.nav('select')
	      }
	    }
	  }, [_c('div', {
	    staticClass: "weui-tabbar__icon"
	  }, [_c('i', {
	    staticClass: "iconfont",
	    class: _vm.classes.select,
	    attrs: {
	      "id": "icon_select"
	    }
	  })]), _vm._v(" "), _c('p', {
	    staticClass: "weui-tabbar__label"
	  }, [_vm._v("选课")])]), _vm._v(" "), _c('a', {
	    staticClass: "weui-tabbar__item",
	    attrs: {
	      "href": "#page_me",
	      "id": "nav_me"
	    },
	    on: {
	      "mouseup": function($event) {
	        _vm.nav('me')
	      }
	    }
	  }, [_c('div', {
	    staticClass: "weui-tabbar__icon"
	  }, [_c('i', {
	    staticClass: "iconfont",
	    class: _vm.classes.me,
	    attrs: {
	      "id": "icon_me"
	    }
	  })]), _vm._v(" "), _c('p', {
	    staticClass: "weui-tabbar__label"
	  }, [_vm._v("账号")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-84c57a5e", module.exports)
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(37)

	/* script */
	__vue_exports__ = __webpack_require__(39)

	/* template */
	var __vue_template__ = __webpack_require__(56)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\tab__bd.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3c25d0d4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3c25d0d4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tab__bd.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3c25d0d4!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab__bd.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3c25d0d4!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab__bd.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.weui-cells\n{\n    border-top:1px  solid #d9d9d9;\n    border-bottom:1px  solid #d9d9d9;\n}\n.cells_title\n{\n    padding-left:15px;\n}\n.filter\n{\n    display: block;\n    margin:30px auto;\n    width:80%;\n    font-size:20px;\n    padding:3px;\n    background-color: #efeff4;\n    border: 0 solid #000;\n    border-bottom-width: 1px;\n    text-align:center;\n}\n.filter:focus\n{\n    outline: none 0;\n    box-shadow: none;\n}\n.weui-tab__bd-item\n{\n    background-color: #efeff4;\n}\n", ""]);

	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        name: 'tab__bd',
	        data: function()
	        {
	            return {};
	        },
	        components:
	            {
	                page_home:__webpack_require__(40),
	                page_notes:__webpack_require__(45),
	                page_select:__webpack_require__(48),
	                page_me:__webpack_require__(51)
	            }
	    }


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(41)

	/* script */
	__vue_exports__ = __webpack_require__(43)

	/* template */
	var __vue_template__ = __webpack_require__(44)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\pages\\home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2acd826a"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2acd826a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2acd826a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] home.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2acd826a&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2acd826a&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 43 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        data: function () {
	            return {};
	        },
	        components: {}
	    }


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-tab__bd-item",
	    attrs: {
	      "id": "page_home"
	    }
	  }, [_c('br'), _c('br'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('h2', {
	    staticStyle: {
	      "text-align": "center"
	    }
	  }, [_vm._v("欢迎使用YOYO笔记")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('br'), _c('br')])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2acd826a", module.exports)
	  }
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(46)

	/* template */
	var __vue_template__ = __webpack_require__(47)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\pages\\notes.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1e74a4c6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1e74a4c6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] notes.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 46 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        data:function()
	        {
	            return {
	                notes:{}
	            };
	        },
	        mounted:function()
	        {
	            var self=this;

	            document.body.addEventListener('yoyo:note_operations:delete',this.delete_note);

	            document.body.addEventListener('navbar:login:ok',function(e)
	            {
	                self.refresh();
	            });

	            // get class
	            document.body.addEventListener('yoyo:get_class:ok',function(e)
	            {
	                if(self.notes[e.message.cid]!==undefined)
	                {
	                    Vue.set
	                    (
	                        self.notes[e.message.cid],
	                        'source',
	                        e.message
	                    );
	                }
	            });
	            document.body.addEventListener('yoyo:get_class:error',function(e)
	            {
	                console.log('课程加载失败');
	                console.log(e.message);
	            });

	            // get notes
	            document.body.addEventListener('yoyo:get_notes:ok',function(e)
	            {
	                self.notes={};
	                e.message.forEach(function(e)
	                {
	                    Vue.set
	                    (
	                        self.notes,
	                        e.cid,
	                        {
	                            segments:e.segments,
	                            source:
	                                {
	                                    cid:'',
	                                    meta:{},
	                                    segments:[]
	                                }
	                        }
	                    );
	                    window.luoc.yoyo.get_class({cid:e.cid})
	                });
	            });
	            document.body.addEventListener('yoyo:get_notes:error',function(e)
	            {
	                alert('刷新笔记列表失败，请检查网络环境');
	            });

	            // delete note
	            document.body.addEventListener('yoyo:delete_note:ok',function()
	            {
	                self.refresh();
	            });

	            document.body.addEventListener('yoyo:add_note:ok',function()
	            {
	                self.refresh();
	            })
	        },
	        methods:
	            {
	                refresh:function()
	                {
	                    if(window.luoc.navbar.online)
	                    {
	                        window.luoc.yoyo.get_notes
	                        (
	                            {
	                                uid:window.luoc.navbar.data.uid
	                            }
	                        );
	                    }
	                    else
	                    {
	                        alert('您没有登录');
	                    }
	                },
	                delete_note:function(e)
	                {
	                    if(confirm('确定要删除这条笔记 ？'))
	                    {
	                        window.luoc.yoyo.delete_note
	                        (
	                            {
	                                uid:window.luoc.navbar.data.uid,
	                                cid:e.message
	                            }
	                        );
	                    }
	                },
	                show_operations:function(cid,note)
	                {
	                    var event=new Event('yoyo:note_operations_popup');
	                    event.message=JSON.parse(JSON.stringify(note));
	                    document.body.dispatchEvent(event);
	                }
	            }
	    }


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-tab__bd-item",
	    attrs: {
	      "id": "page_notes"
	    }
	  }, [_c('br'), _vm._v(" "), _c('h3', {
	    staticClass: "center-block"
	  }, [_vm._v("笔记列表")]), _vm._v(" "), _c('div', {
	    staticClass: "weui-cells"
	  }, _vm._l((_vm.notes), function(note, cid) {
	    return _c('div', {
	      staticClass: "weui-cell",
	      on: {
	        "click": function($event) {
	          _vm.show_operations(cid, note)
	        }
	      }
	    }, [_vm._m(0, true), _vm._v(" "), _c('div', {
	      staticClass: "weui-cell__bd"
	    }, [_c('p', {
	      staticClass: "notes_category"
	    }, [_c('span', [_vm._v(" ")]), _vm._v(_vm._s(note.source.meta.name))])])])
	  }))])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-cell__hd"
	  }, [_c('i', {
	    staticClass: "iconfont icon-tagfill"
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1e74a4c6", module.exports)
	  }
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(49)

	/* template */
	var __vue_template__ = __webpack_require__(50)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\pages\\select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-54459b47", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-54459b47", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] select.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 49 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports =
	    {
	        data: function () {
	            return {
	                classes:{},
	                location:''
	            };
	        },
	        mounted:function()
	        {
	            var self=this;

	            document.body.addEventListener('yoyo:get_location:ok',function(e)
	            {
	                self.location=e.message.location;
	                self.query_class();
	            });

	            document.body.addEventListener('yoyo:query_class:ok',function(e)
	            {
	                console.log(e);
	                e.message.forEach(function(e)
	                {
	                    Vue.set
	                    (
	                        self.classes,
	                        e.cid,
	                        e
	                    )
	                });
	            });
	            document.body.addEventListener('yoyo:query_class:error',function(e)
	            {
	                alert('获取课程列表失败');
	            });
	        },
	        methods:
	            {
	                query_class:function()
	                {
	                    if(window.luoc.navbar.online)
	                    {
	                        window.luoc.yoyo.query_class
	                        (
	                            {
	                                key:this.location
	                            }
	                        )
	                    }
	                    else
	                    {
	                        alert('需要登录');
	                    }
	                },
	                show_class:function(class_content,cid)
	                {
	                    var event=new Event('yoyo:class_popup');
	                    event.message={};
	                    event.message.class_content=class_content;
	                    event.message.cid=cid;
	                    document.body.dispatchEvent(event);
	                }
	            }
	    }


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-tab__bd-item",
	    attrs: {
	      "id": "page_select"
	    }
	  }, [_c('br'), _vm._v(" "), _c('h3', {
	    staticClass: "center-block"
	  }, [_vm._v("选择课程")]), _vm._v(" "), _c('div', {
	    staticClass: "weui-cells"
	  }, _vm._l((_vm.classes), function(class_content, cid) {
	    return _c('div', {
	      staticClass: "weui-cell",
	      on: {
	        "click": function($event) {
	          _vm.show_class(class_content, cid)
	        }
	      }
	    }, [_vm._m(0, true), _vm._v(" "), _c('div', {
	      staticClass: "weui-cell__bd weui_cell_primary"
	    }, [_c('p', {
	      staticClass: "notes_category"
	    }, [_c('span', [_vm._v(" ")]), _vm._v(_vm._s(class_content.name))])]), _vm._v(" "), _c('div', {
	      staticClass: "weui-cell__ft"
	    }, [_vm._v("\n                " + _vm._s(class_content.releaser) + "\n            ")])])
	  }))])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-cell__hd"
	  }, [_c('i', {
	    staticClass: "iconfont icon-writefill"
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-54459b47", module.exports)
	  }
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(52)

	/* script */
	__vue_exports__ = __webpack_require__(54)

	/* template */
	var __vue_template__ = __webpack_require__(55)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "I:\\学习与工作\\大创项目\\yoyo\\wechat\\src\\components\\pages\\me.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5b4b9763"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5b4b9763", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5b4b9763", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] me.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5b4b9763&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./me.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5b4b9763&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./me.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n#email[data-v-5b4b9763]\n{\n    text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 54 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports=
	    {
	        data:function()
	        {
	            return {
	                email:'需要登录',
	                online:false,
	                account:'',
	                password:'',
	                location:''
	            };
	        },
	        mounted:function()
	        {
	            var self=this;

	            document.body.addEventListener('yoyo:get_location:ok',function(e)
	            {
	                self.location=e.message.location;
	            });

	            document.body.addEventListener('navbar:login:ok',function(e)
	            {
	                self.online=true;
	                self.email=e.message.email;
	                window.luoc.yoyo.get_location({uid:window.luoc.navbar.data.uid})
	            });
	            document.body.addEventListener('navbar:login:error',function(e)
	            {
	                alert('登录失败');
	                console.log(e);
	            });

	            document.body.addEventListener('navbar:logout',function(e)
	            {
	                self.online=false;
	                self.email='需要登录';
	            });
	        },
	        methods:
	            {
	                login:function()
	                {
	                    window.luoc.navbar.login
	                    (
	                        {
	                            account:this.account,
	                            password:this.password
	                        }
	                    )
	                },
	                logout:window.luoc.navbar.logout,
	                set_location:function()
	                {
	                    window.luoc.yoyo.set_location
	                    (
	                        {
	                            uid:window.luoc.navbar.data.uid,
	                            location:this.location
	                        }
	                    );
	                },
	                register:function()
	                {
	                    var e = new Event("yoyo:register_popup");
	                    document.body.dispatchEvent(e);
	                }
	            }
	    }


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-tab__bd-item",
	    attrs: {
	      "id": "page_me"
	    }
	  }, [(!_vm.online) ? _c('div', [_c('br'), _c('br'), _vm._v(" "), _c('h3', {
	    staticStyle: {
	      "text-align": "center"
	    }
	  }, [_vm._v("登录")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('form', {
	    staticClass: "weui-cells weui_cells_form",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.login($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "weui-cell"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "weui-cell__bd"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.account),
	      expression: "account"
	    }],
	    staticClass: "weui-input",
	    attrs: {
	      "id": "account",
	      "type": "email",
	      "required": ""
	    },
	    domProps: {
	      "value": _vm._s(_vm.account)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.account = $event.target.value
	      }
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "weui-cell"
	  }, [_vm._m(1), _vm._v(" "), _c('div', {
	    staticClass: "weui-cell__bd"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.password),
	      expression: "password"
	    }],
	    staticClass: "weui-input",
	    attrs: {
	      "id": "password",
	      "type": "password",
	      "required": ""
	    },
	    domProps: {
	      "value": _vm._s(_vm.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.password = $event.target.value
	      }
	    }
	  })])]), _vm._v(" "), _c('button', {
	    staticClass: "weui-btn weui-btn_plain-primary",
	    attrs: {
	      "type": "submit"
	    }
	  }, [_vm._v("\n                登录\n            ")])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('button', {
	    staticClass: "weui-btn weui-btn_plain-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.register
	    }
	  }, [_vm._v("\n            没有账号？点击注册\n        ")]), _vm._v(" "), _c('br'), _c('br')]) : _vm._e(), _vm._v(" "), (_vm.online) ? _c('div', [_c('br'), _c('br'), _vm._v(" "), _c('h3', {
	    attrs: {
	      "id": "email"
	    }
	  }, [_vm._v(" " + _vm._s(_vm.email) + " ")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('h4', {
	    staticClass: "cells_title"
	  }, [_vm._v("个人信息")]), _vm._v(" "), _c('div', {
	    staticClass: "weui-cells weui_cells_form"
	  }, [_c('div', {
	    staticClass: "weui-cell"
	  }, [_vm._m(2), _vm._v(" "), _c('div', {
	    staticClass: "weui-cell__bd"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.location),
	      expression: "location"
	    }],
	    staticClass: "weui-input",
	    attrs: {
	      "id": "location",
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.location)
	    },
	    on: {
	      "blur": function($event) {
	        _vm.set_location()
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.location = $event.target.value
	      }
	    }
	  })])])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('button', {
	    staticClass: "weui-btn weui-btn_warn",
	    on: {
	      "click": function($event) {
	        _vm.logout()
	      }
	    }
	  }, [_vm._v("\n            退出登录\n        ")]), _vm._v(" "), _c('br'), _c('br')]) : _vm._e()])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-cell__hd"
	  }, [_c('label', {
	    staticClass: "weui-label",
	    attrs: {
	      "for": "account"
	    }
	  }, [_vm._v("账号")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-cell__hd"
	  }, [_c('label', {
	    staticClass: "weui-label",
	    attrs: {
	      "for": "password"
	    }
	  }, [_vm._v("密码")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-cell__hd"
	  }, [_c('label', {
	    staticClass: "weui-label",
	    attrs: {
	      "for": "location"
	    }
	  }, [_vm._v("我的位置")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5b4b9763", module.exports)
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-tab__bd"
	  }, [_c('page_home'), _vm._v(" "), _c('page_notes'), _vm._v(" "), _c('page_select'), _vm._v(" "), _c('page_me')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3c25d0d4", module.exports)
	  }
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "weui-tab"
	  }, [_c('tab__bd'), _vm._v(" "), _c('tabbar')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-31d9aeb2", module.exports)
	  }
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tab')
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5f21433e", module.exports)
	  }
	}

/***/ }
/******/ ]);