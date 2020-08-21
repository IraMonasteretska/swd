/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; '),
    'aria-hidden': 'true'
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var browser = {
  isChrome: function () { return /chrome/i.test(navigator.userAgent); },
  isFirefox: function () { return /firefox/i.test(navigator.userAgent); },

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: function () { return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent); },
  isEdge: function () { return /edge/i.test(navigator.userAgent); }
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern, mask, clipPath';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded), 'g'), replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE() || browser.isEdge()) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
        config.locationChangeAngularEmitter = typeof window.angular !== 'undefined';
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox();
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/svg-baker-runtime/browser-symbol.js
var browser_symbol = __webpack_require__(0);
var browser_symbol_default = /*#__PURE__*/__webpack_require__.n(browser_symbol);

// EXTERNAL MODULE: ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js
var browser_sprite_build = __webpack_require__(1);
var browser_sprite_build_default = /*#__PURE__*/__webpack_require__.n(browser_sprite_build);

// CONCATENATED MODULE: ./src/assets/icons/icon-basket.svg


var symbol = new browser_symbol_default.a({
  "id": "icon-basket",
  "use": "icon-basket-usage",
  "viewBox": "0 0 22 22",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" id=\"icon-basket\"><path d=\"M6.6 17.6c-1.21 0-2.2.99-2.2 2.2 0 1.21.99 2.2 2.2 2.2 1.21 0 2.2-.99 2.2-2.2 0-1.21-.99-2.2-2.2-2.2zM0 0v2.2h2.2l3.96 8.36-1.54 2.64c-.11.33-.22.77-.22 1.1 0 1.21.99 2.2 2.2 2.2h13.2v-2.2H7.04c-.11 0-.22-.11-.22-.22v-.11l.99-1.87h8.14c.88 0 1.54-.44 1.87-1.1l3.96-7.15c.22-.22.22-.33.22-.55 0-.66-.44-1.1-1.1-1.1H4.62L3.63 0H0zm17.6 17.6c-1.21 0-2.2.99-2.2 2.2 0 1.21.99 2.2 2.2 2.2 1.21 0 2.2-.99 2.2-2.2 0-1.21-.99-2.2-2.2-2.2z\" /></symbol>"
});
var result = browser_sprite_build_default.a.add(symbol);
/* harmony default export */ var icon_basket = (symbol);
// CONCATENATED MODULE: ./src/assets/icons/icon-location.svg


var icon_location_symbol = new browser_symbol_default.a({
  "id": "icon-location",
  "use": "icon-location-usage",
  "viewBox": "0 0 30 30",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" id=\"icon-location\"><path d=\"M25.873 7.798c-1.057-3.415-3.836-6.194-7.25-7.251C15.006-.573 11.16.049 8.225 2.212a11.48 11.48 0 00-4.654 9.205c0 2.494.79 4.864 2.282 6.852L15 30l9.148-11.732c2.234-2.977 2.862-6.793 1.724-10.47zM15 17.571a6.162 6.162 0 01-6.154-6.154 6.162 6.162 0 016.154-6.154 6.162 6.162 0 016.155 6.154A6.162 6.162 0 0115 17.57z\" /><path d=\"M15.001 7.033a4.391 4.391 0 00-4.396 4.384 4.4 4.4 0 004.396 4.396 4.4 4.4 0 004.396-4.396 4.391 4.391 0 00-4.396-4.384z\" /></symbol>"
});
var icon_location_result = browser_sprite_build_default.a.add(icon_location_symbol);
/* harmony default export */ var icon_location = (icon_location_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icon-mail.svg


var icon_mail_symbol = new browser_symbol_default.a({
  "id": "icon-mail",
  "use": "icon-mail-usage",
  "viewBox": "0 0 26 26",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26 26\" id=\"icon-mail\"><g clip-path=\"url(#icon-mail_clip0)\"><path d=\"M23.715 3.098H2.285c-.352 0-.68.086-.979.229L12.95 14.97l2.61-2.508 9.135-9.135a2.259 2.259 0 00-.98-.23zM25.771 4.404L17.175 13l8.596 8.596c.143-.298.229-.627.229-.979V5.383c0-.352-.086-.68-.229-.979zM.229 4.404A2.259 2.259 0 000 5.383v15.234c0 .352.086.681.229.979L8.825 13 .23 4.404z\" /><path d=\"M16.098 14.077l-2.61 2.508a.76.76 0 01-1.077 0l-2.509-2.508-8.596 8.596c.298.143.627.23.98.23h21.429c.352 0 .68-.087.979-.23l-8.596-8.596z\" /></g><defs><clipPath id=\"icon-mail_clip0\"><path fill=\"#fff\" d=\"M0 0h26v26H0z\" /></clipPath></defs></symbol>"
});
var icon_mail_result = browser_sprite_build_default.a.add(icon_mail_symbol);
/* harmony default export */ var icon_mail = (icon_mail_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icon-phone.svg


var icon_phone_symbol = new browser_symbol_default.a({
  "id": "icon-phone",
  "use": "icon-phone-usage",
  "viewBox": "0 0 15 15",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\" id=\"icon-phone\"><path d=\"M6.211 8.789C4.78 7.357 4.456 5.925 4.383 5.352a.514.514 0 01.148-.43L5.69 3.762c.17-.17.2-.436.073-.64L3.918.26a.517.517 0 00-.67-.189L.286 1.465a.514.514 0 00-.284.514C.157 3.453.8 7.077 4.36 10.639c3.561 3.56 7.184 4.203 8.66 4.358a.514.514 0 00.513-.284l1.395-2.962a.517.517 0 00-.188-.669l-2.864-1.844a.517.517 0 00-.64.072l-1.158 1.159a.514.514 0 01-.43.148c-.574-.073-2.006-.397-3.438-1.828z\" /><path d=\"M11.897 8.017a.517.517 0 01-.518-.517A3.884 3.884 0 007.5 3.62a.517.517 0 110-1.034A4.92 4.92 0 0112.414 7.5a.517.517 0 01-.517.517z\" /><path d=\"M14.483 8.017a.517.517 0 01-.518-.517A6.473 6.473 0 007.5 1.034.517.517 0 117.5 0 7.508 7.508 0 0115 7.5a.517.517 0 01-.517.517z\" /></symbol>"
});
var icon_phone_result = browser_sprite_build_default.a.add(icon_phone_symbol);
/* harmony default export */ var icon_phone = (icon_phone_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icon-see-more.svg


var icon_see_more_symbol = new browser_symbol_default.a({
  "id": "icon-see-more",
  "use": "icon-see-more-usage",
  "viewBox": "0 0 18 19",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 19\" id=\"icon-see-more\"><path d=\"M17.9 13.162h-1.55a7.856 7.856 0 01-3.482 3.4 7.806 7.806 0 01-9.094-1.598A7.909 7.909 0 012.5 5.777 7.856 7.856 0 016.003 2.4a7.806 7.806 0 019.083 1.656l-1.453 1.518h3.776V1.78l-1.341 1.297A9.182 9.182 0 0010.955.384a9.158 9.158 0 00-5.702.897 9.22 9.22 0 00-4.047 4.135 9.28 9.28 0 00-.798 5.743 9.253 9.253 0 002.766 5.09 9.16 9.16 0 0010.89 1.246 9.225 9.225 0 003.835-4.333z\" /></symbol>"
});
var icon_see_more_result = browser_sprite_build_default.a.add(icon_see_more_symbol);
/* harmony default export */ var icon_see_more = (icon_see_more_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icon-x.svg


var icon_x_symbol = new browser_symbol_default.a({
  "id": "icon-x",
  "use": "icon-x-usage",
  "viewBox": "0 0 18 18",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\" id=\"icon-x\"><path d=\"M2.414 2.15l13.435 13.436-.707.707L1.707 2.858l.707-.707z\" /><path d=\"M1.707 15.586L15.142 2.15l.707.707L2.414 16.293l-.707-.707z\" /></symbol>"
});
var icon_x_result = browser_sprite_build_default.a.add(icon_x_symbol);
/* harmony default export */ var icon_x = (icon_x_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icon-header-login.svg


var icon_header_login_symbol = new browser_symbol_default.a({
  "id": "icon-header-login",
  "use": "icon-header-login-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" id=\"icon-header-login\"><path d=\"M489.667-1h-384C93.885-1 84.333 8.551 84.333 20.333v149.333c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333v-128h341.333v426.667H127v-128c0-11.782-9.551-21.333-21.333-21.333-11.782 0-21.333 9.551-21.333 21.333v149.333c0 11.782 9.551 21.333 21.333 21.333h384c11.782 0 21.333-9.551 21.333-21.333V20.333C511 8.551 501.449-1 489.667-1z\" /><path d=\"M197.248 325.251c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0l85.333-85.333.01-.011c.493-.494.96-1.012 1.403-1.552.203-.247.379-.507.569-.761.227-.303.462-.6.673-.916.203-.304.379-.619.565-.931.171-.286.35-.565.508-.859.17-.318.314-.644.467-.969.145-.307.298-.609.429-.923.13-.315.236-.637.35-.957.121-.337.25-.669.354-1.013.097-.32.168-.646.249-.969.089-.351.187-.698.258-1.055.074-.375.119-.753.173-1.13.044-.311.104-.617.135-.933.138-1.4.138-2.811 0-4.211-.031-.315-.09-.621-.135-.933-.054-.377-.098-.756-.173-1.13-.071-.358-.169-.704-.258-1.055-.081-.324-.152-.649-.249-.969-.104-.344-.233-.677-.354-1.013-.115-.32-.22-.642-.35-.957-.13-.315-.284-.616-.429-.923-.153-.324-.297-.651-.467-.969-.158-.294-.337-.573-.508-.859-.186-.312-.362-.627-.565-.931-.211-.316-.446-.612-.673-.916-.19-.254-.366-.514-.569-.761-.443-.54-.91-1.059-1.403-1.552l-.01-.011-85.333-85.333c-8.331-8.331-21.839-8.331-30.17 0s-8.331 21.839 0 30.17l48.915 48.915H20.333C8.551 233.669-1 243.22-1 255.002s9.551 21.333 21.333 21.333h225.83l-48.915 48.916z\" /></symbol>"
});
var icon_header_login_result = browser_sprite_build_default.a.add(icon_header_login_symbol);
/* harmony default export */ var icon_header_login = (icon_header_login_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icon-header-user.svg


var icon_header_user_symbol = new browser_symbol_default.a({
  "id": "icon-header-user",
  "use": "icon-header-user-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"icon-header-user\"><path d=\"M0 20.4V24h24v-3.6c0-8.04-24-8.04-24 0zM12 12a6 6 0 100-12 6 6 0 000 12z\" /></symbol>"
});
var icon_header_user_result = browser_sprite_build_default.a.add(icon_header_user_symbol);
/* harmony default export */ var icon_header_user = (icon_header_user_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-arrow/icon-arrow-left.svg


var icon_arrow_left_symbol = new browser_symbol_default.a({
  "id": "icon-arrow-left",
  "use": "icon-arrow-left-usage",
  "viewBox": "0 0 20 36",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 36\" id=\"icon-arrow-left\"><path d=\"M18.249 1c.414 0 .75.33.751.738a.734.734 0 01-.22.524L2.81 18l15.97 15.737a.732.732 0 010 1.046.758.758 0 01-1.062 0L1.22 18.523a.732.732 0 010-1.045l16.498-16.26a.755.755 0 01.53-.218z\" /></symbol>"
});
var icon_arrow_left_result = browser_sprite_build_default.a.add(icon_arrow_left_symbol);
/* harmony default export */ var icon_arrow_left = (icon_arrow_left_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-arrow/icon-arrow-link.svg


var icon_arrow_link_symbol = new browser_symbol_default.a({
  "id": "icon-arrow-link",
  "use": "icon-arrow-link-usage",
  "viewBox": "0 0 17 17",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 17\" id=\"icon-arrow-link\"><path d=\"M7.715 9.412L0 8.12 16.648.485l-8.05 16.229-.883-7.302z\" /></symbol>"
});
var icon_arrow_link_result = browser_sprite_build_default.a.add(icon_arrow_link_symbol);
/* harmony default export */ var icon_arrow_link = (icon_arrow_link_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-arrow/icon-arrow-right.svg


var icon_arrow_right_symbol = new browser_symbol_default.a({
  "id": "icon-arrow-right",
  "use": "icon-arrow-right-usage",
  "viewBox": "0 0 20 36",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 36\" id=\"icon-arrow-right\"><path d=\"M1.751 35A.745.745 0 011 34.262c0-.197.079-.385.22-.524L17.19 18 1.22 2.263a.733.733 0 010-1.046.759.759 0 011.062 0l16.498 16.26a.732.732 0 010 1.045L2.282 34.782a.755.755 0 01-.53.218z\" /></symbol>"
});
var icon_arrow_right_result = browser_sprite_build_default.a.add(icon_arrow_right_symbol);
/* harmony default export */ var icon_arrow_right = (icon_arrow_right_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-arrow/icon-arrow-long-right.svg


var icon_arrow_long_right_symbol = new browser_symbol_default.a({
  "id": "icon-arrow-long-right",
  "use": "icon-arrow-long-right-usage",
  "viewBox": "0 0 20 8",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 8\" id=\"icon-arrow-long-right\"><path d=\"M19.354 4.354a.5.5 0 000-.708L16.172.464a.5.5 0 10-.708.708L18.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h19v-1H0v1z\" /></symbol>"
});
var icon_arrow_long_right_result = browser_sprite_build_default.a.add(icon_arrow_long_right_symbol);
/* harmony default export */ var icon_arrow_long_right = (icon_arrow_long_right_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-arrow/icon-slider-arrow-prev.svg


var icon_slider_arrow_prev_symbol = new browser_symbol_default.a({
  "id": "icon-slider-arrow-prev",
  "use": "icon-slider-arrow-prev-usage",
  "viewBox": "0 0 34 36",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 34 36\" id=\"icon-slider-arrow-prev\"><path d=\"M18.249 1c.414 0 .75.33.751.738a.734.734 0 01-.22.525L2.81 18.005l15.97 15.742a.732.732 0 01-.019 1.045.758.758 0 01-1.042 0L1.22 18.527a.732.732 0 010-1.046l16.5-16.265A.755.755 0 0118.25 1z\" /><path d=\"M32.249 1c.414 0 .75.33.751.738a.734.734 0 01-.22.524L16.81 18l15.97 15.737a.732.732 0 010 1.046.758.758 0 01-1.062 0L15.22 18.523a.732.732 0 010-1.045l16.498-16.26a.755.755 0 01.53-.218z\" /></symbol>"
});
var icon_slider_arrow_prev_result = browser_sprite_build_default.a.add(icon_slider_arrow_prev_symbol);
/* harmony default export */ var icon_slider_arrow_prev = (icon_slider_arrow_prev_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-arrow/icon-slider-arrow-next.svg


var icon_slider_arrow_next_symbol = new browser_symbol_default.a({
  "id": "icon-slider-arrow-next",
  "use": "icon-slider-arrow-next-usage",
  "viewBox": "0 0 34 36",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 34 36\" id=\"icon-slider-arrow-next\"><path d=\"M15.751 35a.745.745 0 01-.751-.738c0-.197.079-.386.22-.525l15.97-15.742L15.22 2.253a.732.732 0 01.019-1.045.758.758 0 011.042 0l16.5 16.265a.732.732 0 010 1.046l-16.5 16.265a.755.755 0 01-.53.216z\" /><path d=\"M1.751 35A.745.745 0 011 34.262c0-.197.079-.385.22-.524L17.19 18 1.22 2.263a.733.733 0 010-1.046.759.759 0 011.062 0l16.498 16.26a.732.732 0 010 1.045L2.282 34.782a.755.755 0 01-.53.218z\" /></symbol>"
});
var icon_slider_arrow_next_result = browser_sprite_build_default.a.add(icon_slider_arrow_next_symbol);
/* harmony default export */ var icon_slider_arrow_next = (icon_slider_arrow_next_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-liquid/icon-liquid-tiny.svg


var icon_liquid_tiny_symbol = new browser_symbol_default.a({
  "id": "icon-liquid-tiny",
  "use": "icon-liquid-tiny-usage",
  "viewBox": "0 0 50 50",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" id=\"icon-liquid-tiny\"><path d=\"M21.325 2.462H14.6v3.225h6.725V2.462zM22.512 10.275l-5.387 10.687a15.616 15.616 0 00-1.05 5.6v20.976h-2.662V9.3h9.1v.975z\" /><path d=\"M23.538 11l-5.276 10.413a14.256 14.256 0 00-.962 5.15v20.975h17.125V23.524c0-7.112-4.55-12.3-10.887-12.525zM26.6 38.163a5.311 5.311 0 01-5.3-5.3c0-2.726 4.325-8.35 4.825-8.976l.475-.625.487.625c.488.625 4.813 6.25 4.813 8.975a5.302 5.302 0 01-5.3 5.3zm-4.075-5.3a4.081 4.081 0 008.163 0c0-1.75-2.613-5.625-4.088-7.6-1.463 1.974-4.075 5.862-4.075 7.6zm5.913.474a1.156 1.156 0 00-.063-.287l1.163-.362c.068.21.106.428.112.65a2.622 2.622 0 01-3.05 2.587l.2-1.2a1.455 1.455 0 001.637-1.388z\" /></symbol>"
});
var icon_liquid_tiny_result = browser_sprite_build_default.a.add(icon_liquid_tiny_symbol);
/* harmony default export */ var icon_liquid_tiny = (icon_liquid_tiny_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-liquid/icon-liquid-small.svg


var icon_liquid_small_symbol = new browser_symbol_default.a({
  "id": "icon-liquid-small",
  "use": "icon-liquid-small-usage",
  "viewBox": "0 0 50 50",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" id=\"icon-liquid-small\"><path d=\"M31.266.625h-4.788a8.623 8.623 0 00-8.014 5.386l-.661 1.623H6.09v41.741h37.82V13.27A12.659 12.659 0 0031.266.625zM7.34 48.125V8.884h9.953l-4.886 11.978a15.768 15.768 0 00-1.079 5.744v21.519H7.34zm35.32 0H12.578v-21.52a14.514 14.514 0 01.99-5.28l6.054-14.841a7.378 7.378 0 016.856-4.609h4.788A11.407 11.407 0 0142.66 13.27v34.855z\" /><path d=\"M16.715.625H7.307V6.43h9.408V.625zm-1.25 4.555H8.557V1.875h6.908V5.18zM28.142 20.046l-.493.631c-.286.366-6.991 9.001-6.991 12.96a7.484 7.484 0 1014.967 0c0-3.959-6.705-12.594-6.99-12.96l-.494-.63zm0 19.824a6.24 6.24 0 01-6.234-6.233c0-2.7 4.122-8.739 6.233-11.547 2.112 2.808 6.234 8.847 6.234 11.546a6.241 6.241 0 01-6.233 6.234z\" /><path d=\"M28.142 37.584c-.212 0-.424-.018-.633-.052l-.205 1.233a5.069 5.069 0 005.9-4.994 4.215 4.215 0 00-.219-1.24l-1.194.372c.096.28.151.572.163.868a3.817 3.817 0 01-3.813 3.813zM30.842 4.375h-.758a2.13 2.13 0 00-2.128 2.128v5.279a5.099 5.099 0 005.093 5.093h5.28a2.13 2.13 0 002.127-2.128v-.758a9.625 9.625 0 00-9.614-9.614zm8.364 10.372a.878.878 0 01-.877.878h-5.28a3.847 3.847 0 01-3.843-3.843v-5.28a.879.879 0 01.878-.877h.758a8.374 8.374 0 018.364 8.364v.758z\" /></symbol>"
});
var icon_liquid_small_result = browser_sprite_build_default.a.add(icon_liquid_small_symbol);
/* harmony default export */ var icon_liquid_small = (icon_liquid_small_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-liquid/icon-liquid-medium.svg


var icon_liquid_medium_symbol = new browser_symbol_default.a({
  "id": "icon-liquid-medium",
  "use": "icon-liquid-medium-usage",
  "viewBox": "0 0 50 50",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" id=\"icon-liquid-medium\"><path d=\"M8.75 1.25V5H10v18.123H8.75v3.752H10V45H8.75v3.75h32.5V45H40V26.875h1.25v-3.75H40V5h1.25V1.25H8.75zM40 47.5H10v-1.25h30v1.25zm-1.25-24.375h-7.813c.2.425.375.85.525 1.25H40v1.25h-8.125c.128.406.207.826.237 1.25h6.638V45h-27.5V26.875h6.637c.03-.424.11-.844.238-1.25H10v-1.25h8.538c.15-.4.325-.825.524-1.25H11.25V5h27.5v18.125zM40 3.75H10V2.5h30v1.25z\" /><path d=\"M25 32.446a5.446 5.446 0 005.44-5.44c0-2.793-4.44-8.563-4.948-9.212l-.492-.63-.492.63c-.507.649-4.948 6.419-4.948 9.212a5.446 5.446 0 005.44 5.44zm0-13.235c1.506 2.027 4.19 6.009 4.19 7.795a4.19 4.19 0 01-8.38 0c0-1.785 2.684-5.767 4.19-7.795z\" /><path d=\"M28.125 27.504a2.276 2.276 0 00-.117-.674l-1.193.37c.034.098.054.2.06.304a1.47 1.47 0 01-1.673 1.415l-.204 1.232a2.686 2.686 0 003.127-2.647z\" /></symbol>"
});
var icon_liquid_medium_result = browser_sprite_build_default.a.add(icon_liquid_medium_symbol);
/* harmony default export */ var icon_liquid_medium = (icon_liquid_medium_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-liquid/icon-liquid-large.svg


var icon_liquid_large_symbol = new browser_symbol_default.a({
  "id": "icon-liquid-large",
  "use": "icon-liquid-large-usage",
  "viewBox": "0 0 50 50",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" id=\"icon-liquid-large\"><path d=\"M31.186 27.317c0-3.194-5.11-9.833-5.693-10.58l-.493-.63-.492.63c-.583.747-5.694 7.386-5.694 10.58a6.186 6.186 0 0012.372 0zm-11.122 0c0-2.118 3.206-6.848 4.936-9.164 1.73 2.315 4.936 7.045 4.936 9.164a4.936 4.936 0 11-9.872 0z\" /><path d=\"M29.223 27.426a3.533 3.533 0 00-.182-1.04l-1.194.372c.074.215.117.44.126.668a2.978 2.978 0 01-3.466 2.933l-.205 1.233a4.228 4.228 0 004.921-4.166z\" /><path d=\"M8.75 1.25V5H10v10.833H8.75v3.754H10v12.288h1.25V19.587h8.887c.263-.424.526-.837.8-1.25H10v-1.25h11.762c.3-.437.588-.862.863-1.25H11.25V5h27.5v10.838H27.375c.275.387.563.812.863 1.25H40v1.25H29.062c.275.412.538.825.8 1.25h8.888v12.287H40V19.587h1.25v-3.75H40V5h1.25V1.25H8.75zM40 3.75H10V2.5h30v1.25z\" /><path d=\"M16.425 31.663H8.75v1.25h8.038a8.444 8.444 0 01-.363-1.25zM33.212 32.913h8.038v-1.25h-7.675c-.089.425-.21.843-.363 1.25zM40 34.163H10v-1.246H8.75v2.5H10V45H8.75v3.75h32.5V45H40v-9.583h1.25v-2.5H40v1.245zM40 47.5H10v-1.25h30v1.25zM11.25 45v-9.587h27.5V45h-27.5z\" /></symbol>"
});
var icon_liquid_large_result = browser_sprite_build_default.a.add(icon_liquid_large_symbol);
/* harmony default export */ var icon_liquid_large = (icon_liquid_large_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-social/icon-social-skype.svg


var icon_social_skype_symbol = new browser_symbol_default.a({
  "id": "icon-social-skype",
  "use": "icon-social-skype-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icon-social-skype\"><path d=\"M30.1 18.103c.116-.896.183-1.797.2-2.7a15.6 15.6 0 00-1.1-5.7 16.3 16.3 0 00-3.2-4.7 13.8 13.8 0 00-4.7-3.1 13.9 13.9 0 00-5.7-1.2 13.3 13.3 0 00-2.8.3 8 8 0 00-4.1-1 8.7 8.7 0 00-8.7 8.7 8.8 8.8 0 001.1 4.2 21.099 21.099 0 00-.2 2.5 13.9 13.9 0 001.2 5.7 13.8 13.8 0 003.1 4.7 15.1 15.1 0 004.7 3.2 15.601 15.601 0 005.7 1.1l2.6-.2a9.2 9.2 0 004.3 1.1 8.7 8.7 0 008.7-8.7 8.8 8.8 0 00-1.1-4.2zm-14.4 6.3c-5.3 0-7.6-2.5-7.6-4.5a1.6 1.6 0 011.7-1.6c2.3 0 1.7 3.2 5.9 3.2 2.1 0 3.3-1.2 3.3-2.4s-.4-1.5-1.8-1.8l-4.6-1.2c-3.8-.9-4.4-2.9-4.4-4.9 0-3.9 3.7-5.4 7.2-5.4s7 1.8 7 4.2a1.7 1.7 0 01-1.9 1.6c-1.9 0-1.6-2.7-5.4-2.7-1.9 0-3 .9-3 2.1 0 1.2 1.5 1.7 2.8 2l3.5.7c3.7.9 4.7 3.1 4.7 5.1 0 2-2.5 5.6-7.4 5.6z\" /></symbol>"
});
var icon_social_skype_result = browser_sprite_build_default.a.add(icon_social_skype_symbol);
/* harmony default export */ var icon_social_skype = (icon_social_skype_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-social/icon-social-telegram.svg


var icon_social_telegram_symbol = new browser_symbol_default.a({
  "id": "icon-social-telegram",
  "use": "icon-social-telegram-usage",
  "viewBox": "0 0 32 27",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 27\" id=\"icon-social-telegram\"><path d=\"M31.097 2.407L26.42 24.431c-.343 1.598-1.256 1.94-2.51 1.255l-7.19-5.249-3.423 3.31a1.826 1.826 0 01-1.484.684l.57-7.303L25.62 5.26c.57-.57-.228-.799-.913-.342L8.389 15.188 1.314 13.02c-1.483-.457-1.598-1.484.342-2.282L29.157.125c1.256-.456 2.397.343 1.94 2.282z\" /></symbol>"
});
var icon_social_telegram_result = browser_sprite_build_default.a.add(icon_social_telegram_symbol);
/* harmony default export */ var icon_social_telegram = (icon_social_telegram_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-social/icon-social-vider.svg


var icon_social_vider_symbol = new browser_symbol_default.a({
  "id": "icon-social-vider",
  "use": "icon-social-vider-usage",
  "viewBox": "0 0 31 31",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 31 31\" id=\"icon-social-vider\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.82 0h8.67a10.62 10.62 0 0110.62 10.62v5.96A10.62 10.62 0 0119.49 27.2h-6.503l-3.25 3.36a1.3 1.3 0 01-2.276-.867v-3.035A10.62 10.62 0 01.2 16.58v-5.96A10.62 10.62 0 0110.82 0zm16.052 19.432a8.235 8.235 0 00.637-3.177v-5.31a8.235 8.235 0 00-8.345-8.236h-8.019A8.02 8.02 0 004.21 6.61c-.181.19-.328.41-.434.65a8.778 8.778 0 00-.867 3.685v5.202c.003 1.278.3 2.539.867 3.684l.217.325a.542.542 0 00.217.434 7.803 7.803 0 004.334 3.36v5.418a.325.325 0 00.542.216l2.384-2.492h.217l.867-.975 1.517-1.518a.108.108 0 01.108-.108h4.985a8.236 8.236 0 007.707-5.059zm-4.348-5.128h-.109c-.325 0-.433-.325-.433-.65v-.975a6.07 6.07 0 00-6.285-5.852h-.976c-.325.108-.65-.108-.65-.325a.434.434 0 01.434-.65l1.083-.217a7.152 7.152 0 017.478 6.935v1.084c-.109.434-.325.65-.542.65zm-4.66 7.044a21.13 21.13 0 01-7.37-4.985 19.937 19.937 0 01-2.817-4.335l-.975-2.167a2.167 2.167 0 01.65-1.95A3.36 3.36 0 018.87 6.718a.975.975 0 011.192.326l1.842 2.6a1.3 1.3 0 01-.325 1.734l-.433.325-.325.325a.975.975 0 000 .76 7.043 7.043 0 003.901 4.334c.318.22.697.333 1.084.325.356-.071.571-.376.8-.7.12-.17.243-.343.392-.492a1.193 1.193 0 011.409 0l1.3.867 1.3.975a.867.867 0 01.325 1.192 4.225 4.225 0 01-1.842 2.06l-.758.216-.867-.217zm2.709-7.694h.108a.758.758 0 00.542-.325v-.325a5.527 5.527 0 00-5.743-5.31h-.325a.867.867 0 00-.434.65c.108.325.325.542.65.434h.217a4.443 4.443 0 014.552 4.226.433.433 0 00.433.65zm-1.95-.433a.542.542 0 01-.542-.434 2.276 2.276 0 00-2.168-2.059.542.542 0 01-.542-.541c0-.217.217-.434.542-.542a3.468 3.468 0 013.251 3.034.542.542 0 01-.542.542z\" /></symbol>"
});
var icon_social_vider_result = browser_sprite_build_default.a.add(icon_social_vider_symbol);
/* harmony default export */ var icon_social_vider = (icon_social_vider_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icon-contact-open-map.svg


var icon_contact_open_map_symbol = new browser_symbol_default.a({
  "id": "icon-contact-open-map",
  "use": "icon-contact-open-map-usage",
  "viewBox": "0 0 17 18",
  "content": "<symbol fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 18\" id=\"icon-contact-open-map\"><path d=\"M7.715 9.718L0 8.426 16.648.791l-8.05 16.228-.883-7.3z\" fill=\"#4985C5\" /></symbol>"
});
var icon_contact_open_map_result = browser_sprite_build_default.a.add(icon_contact_open_map_symbol);
/* harmony default export */ var icon_contact_open_map = (icon_contact_open_map_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icon-contact-pin.svg


var icon_contact_pin_symbol = new browser_symbol_default.a({
  "id": "icon-contact-pin",
  "use": "icon-contact-pin-usage",
  "viewBox": "0 0 30 30",
  "content": "<symbol fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" id=\"icon-contact-pin\"><path d=\"M25.873 7.798c-1.057-3.415-3.836-6.194-7.25-7.251C15.006-.573 11.16.049 8.225 2.212a11.48 11.48 0 00-4.654 9.205c0 2.494.79 4.864 2.282 6.852L15 30l9.148-11.732c2.234-2.977 2.862-6.793 1.724-10.47zM15 17.571a6.162 6.162 0 01-6.154-6.154 6.162 6.162 0 016.154-6.154 6.162 6.162 0 016.155 6.154A6.162 6.162 0 0115 17.57z\" fill=\"#4985C5\" /><path d=\"M15.001 7.033a4.391 4.391 0 00-4.396 4.384 4.4 4.4 0 004.396 4.396 4.4 4.4 0 004.396-4.396 4.391 4.391 0 00-4.396-4.384z\" fill=\"#4985C5\" /></symbol>"
});
var icon_contact_pin_result = browser_sprite_build_default.a.add(icon_contact_pin_symbol);
/* harmony default export */ var icon_contact_pin = (icon_contact_pin_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-catalog/icon-mod-view-line.svg


var icon_mod_view_line_symbol = new browser_symbol_default.a({
  "id": "icon-mod-view-line",
  "use": "icon-mod-view-line-usage",
  "viewBox": "0 0 22 19",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 19\" id=\"icon-mod-view-line\"><path d=\"M0 0h5v5H0zM0 7h5v5H0zM0 14h5v5H0zM7 0h15v5H7zM7 7h15v5H7zM7 14h15v5H7z\" /></symbol>"
});
var icon_mod_view_line_result = browser_sprite_build_default.a.add(icon_mod_view_line_symbol);
/* harmony default export */ var icon_mod_view_line = (icon_mod_view_line_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icons-catalog/icon-mod-view-table.svg


var icon_mod_view_table_symbol = new browser_symbol_default.a({
  "id": "icon-mod-view-table",
  "use": "icon-mod-view-table-usage",
  "viewBox": "0 0 22 22",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" id=\"icon-mod-view-table\"><path d=\"M0 0h6v6H0zM0 8h6v6H0zM0 16h6v6H0zM8 0h6v6H8zM8 8h6v6H8zM8 16h6v6H8zM16 0h6v6h-6zM16 8h6v6h-6zM16 16h6v6h-6z\" /></symbol>"
});
var icon_mod_view_table_result = browser_sprite_build_default.a.add(icon_mod_view_table_symbol);
/* harmony default export */ var icon_mod_view_table = (icon_mod_view_table_symbol);
// CONCATENATED MODULE: ./src/assets/icons/icon-input-edit.svg


var icon_input_edit_symbol = new browser_symbol_default.a({
  "id": "icon-input-edit",
  "use": "icon-input-edit-usage",
  "viewBox": "0 0 14 14",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 14\" id=\"icon-input-edit\"><path d=\"M4.059 10.52l6.168-6.169 1.45 1.45L5.51 11.97l-1.45-1.45zM.794 11.553L0 14l2.447-.794-1.653-1.653zM2.03 8.49l6.168-6.17 1.45 1.45L3.48 9.94 2.03 8.49zM8.78 1.741l1.739-1.74 3.48 3.48-1.74 1.74-3.48-3.48zM1.563 9.182l-.485 1.495 2.245 2.246 1.496-.485-3.256-3.256z\" /></symbol>"
});
var icon_input_edit_result = browser_sprite_build_default.a.add(icon_input_edit_symbol);
/* harmony default export */ var icon_input_edit = (icon_input_edit_symbol);
// CONCATENATED MODULE: ./src/ts/svg-sprite.ts
/* Icons */
// General








// Arrow






// Liquid




// Social



// Contact


// Catalog


// Profile



/***/ })

/******/ });