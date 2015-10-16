(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';var Node=__webpack_require__(1);var parse=__webpack_require__(2);global.registeredSyntaxs = {};var _exports={createNode:function(options){return new Node(options);},registerSyntax:function(objects,type){global.registeredSyntaxs[type] = objects;return objects;},getSyntax:function(type){if(global.registeredSyntaxs[type] !== undefined){return global.registeredSyntaxs[type];}else {return null;}}};_exports.parse = parse.bind(null,_exports);module.exports = _exports;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict'; /**
	 * @param {string} type
	 * @param {array|string} content
	 * @param {number} line
	 * @param {number} column
	 * @constructor
	 */var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var Node=(function(){function Node(options){_classCallCheck(this,Node);this.type = options.type;this.content = options.content;this.syntax = options.syntax;if(options.start)this.start = options.start;if(options.end)this.end = options.end;} /**
	     * @param {String} type Node type
	     * @return {Boolean} Whether there is a child node of given type
	     */Node.prototype.contains = function contains(type){return this.content.some(function(node){return node.type === type;});}; /**
	     * @param {String} type Node type
	     * @param {Function} callback Function to call for every found node
	     */Node.prototype.eachFor = function eachFor(type,callback){if(!Array.isArray(this.content))return;if(typeof type !== 'string'){callback = type;type = null;}var l=this.content.length;var breakLoop;for(var i=l;i--;) {if(breakLoop === null)break;if(!type || this.content[i] && this.content[i].type === type)breakLoop = callback(this.content[i],i,this);}if(breakLoop === null)return null;}; /**
	     * @param {String} type
	     * @return {Node} First child node
	     */Node.prototype.first = function first(type){if(!type || !Array.isArray(this.content))return this.content[0];var i=0;var l=this.content.length;for(;i < l;i++) {if(this.content[i].type === type)return this.content[i];}}; /**
	     * @param {String} type Node type
	     * @param {Function} callback Function to call for every found node
	     */Node.prototype.forEach = function forEach(type,callback){if(!Array.isArray(this.content))return;if(typeof type !== 'string'){callback = type;type = null;}var i=0;var l=this.content.length;var breakLoop;for(;i < l;i++) {if(breakLoop === null)break;if(!type || this.content[i] && this.content[i].type === type)breakLoop = callback(this.content[i],i,this);}if(breakLoop === null)return null;}; /**
	     * @param {Number} index
	     * @return {Node}
	     */Node.prototype.get = function get(index){return Array.isArray(this.content) && this.content[index];}; /**
	     * @param {Number} index
	     * @param {Node} node
	     */Node.prototype.insert = function insert(index,node){if(!Array.isArray(this.content))return;this.content.splice(index,0,node);if(this.indexHasChanged)this.indexHasChanged[0] = 1;}; /**
	     * @param {String} type
	     * @return {Boolean} Whether the node is of given type
	     */Node.prototype.is = function is(type){return this.type === type;}; /**
	     * @param {String} type
	     * @return {Node} Last child node
	     */Node.prototype.last = function last(type){var i=this.content.length - 1;if(!type || !Array.isArray(this.content))return this.content[i];for(;;i--) {if(this.content[i].type === type)return this.content[i];}}; /**
	     * @param {Number} index
	     * @return {Node}
	     */Node.prototype.removeChild = function removeChild(index){if(!Array.isArray(this.content))return;var removedChild=this.content.splice(index,1);if(removedChild)this.indexHasChanged[0] = 1;return removedChild;};Node.prototype.toJson = function toJson(){return JSON.stringify(this,false,2);};Node.prototype.toString = function toString(){var stringify=undefined;try{stringify = global.registeredSyntaxs[this.syntax].stringify;}catch(e) {var message='Syntax "' + this.syntax + '" is not supported yet, sorry';return console.error(message);}return stringify(this);}; /**
	     * @param {Function} callback
	     */Node.prototype.traverse = function traverse(callback,index){var level=arguments.length <= 2 || arguments[2] === undefined?0:arguments[2];var parent=arguments.length <= 3 || arguments[3] === undefined?null:arguments[3];var breakLoop;var x;level++;callback(this,index,parent,level);if(!Array.isArray(this.content))return;for(var i=0,l=this.content.length;i < l;i++) {breakLoop = this.content[i].traverse(callback,i,level,this);if(breakLoop === null)break; // If some nodes were removed or added:
	if(x = this.content.length - l){l += x;i += x;}}if(breakLoop === null)return null;};_createClass(Node,[{key:'length',get:function(){return this.content.length;}}]);return Node;})();module.exports = Node;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, __dirname) {'use strict';var ParsingError=__webpack_require__(4);var RootNode=__webpack_require__(6);var GetSyntax=__webpack_require__(7);var Defaults={SYNTAX:'css',NEED_INFO:false,CSS_RULE:'stylesheet',JS_RULE:'program'}; /**
	 * @param {Object} gonzalesInstance
	 * @param {String} css
	 * @param {Object} options
	 * @return {Object} AST
	 */function parser(gonzalesInstance,css,options){if(typeof css !== 'string')throw new Error('Please, pass a string to parse');else if(!css)return __webpack_require__(8)();var syntax=options && options.syntax || Defaults.SYNTAX;var needInfo=options && options.needInfo || Defaults.NEED_INFO;var rule=options && options.rule || (syntax === 'js'?Defaults.JS_RULE:Defaults.CSS_RULE);var syntaxModule=gonzalesInstance.getSyntax(syntax);if(syntaxModule === null){if(process.env.IS_WEBPACK === true){var message='Syntax \'' + syntax + '\' is not loaded';return console.error(message);}else {try{var path=__dirname + '/' + syntax;syntaxModule = GetSyntax(path,gonzalesInstance);}catch(e) {var message='Syntax \'' + syntax + '\' is not loaded';return console.error(message);}}}var getTokens=syntaxModule.tokenizer;var mark=syntaxModule.mark;var parse=syntaxModule.parse;var tokens=getTokens(css);mark(tokens);var ast;try{ast = parse(tokens,rule,needInfo);}catch(e) {if(!e.syntax)throw e;throw new ParsingError(e,css);}return new RootNode(ast);}module.exports = parser;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), "/"))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var parserPackage=__webpack_require__(5); /**
	 * @param {Error} e
	 * @param {String} css
	 */function ParsingError(e,css){this.line = e.line;this.syntax = e.syntax;this.css_ = css;}ParsingError.prototype = Object.defineProperties({ /**
	   * @type {Number}
	   */line:null, /**
	   * @type {String}
	   */name:'Parsing error', /**
	   * @type {String}
	   */syntax:null, /**
	   * @type {String}
	   */version:parserPackage.version, /**
	   * @return {String}
	   */toString:function(){return [this.name + ': ' + this.message,'',this.context,'','Syntax: ' + this.syntax,'Gonzales PE version: ' + this.version].join('\n');}},{context:{ /**
	   * @type {String}
	   */get:function(){var LINES_AROUND=2;var result=[];var currentLineNumber=this.line;var start=currentLineNumber - 1 - LINES_AROUND;var end=currentLineNumber + LINES_AROUND;var lines=this.css_.split(/\r\n|\r|\n/);for(var i=start;i < end;i++) {var line=lines[i];if(!line)continue;var ln=i + 1;var mark=ln === currentLineNumber?'*':' ';result.push(ln + mark + '| ' + line);}return result.join('\n');},configurable:true,enumerable:true},message:{ /**
	   * @type {String}
	   */get:function(){var message='Please check validity of the block';if(typeof this.line === 'number')message += ' starting from line #' + this.line;return message;},configurable:true,enumerable:true}});module.exports = ParsingError;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
		"name": "gonzales-pe",
		"description": "Gonzales Preprocessor Edition (fast CSS parser)",
		"version": "3.0.0-beta",
		"homepage": "http://github.com/tonyganch/gonzales-pe",
		"bugs": "http://github.com/tonyganch/gonzales-pe/issues",
		"license": "MIT",
		"author": {
			"name": "Tony Ganch",
			"email": "tonyganch+github@gmail.com",
			"url": "http://tonyganch.com"
		},
		"main": "./lib/gonzales",
		"repository": {
			"type": "git",
			"url": "http://github.com/tonyganch/gonzales-pe.git"
		},
		"scripts": {
			"autofix-tests": "./scripts/build.sh && ./scripts/autofix-tests.sh",
			"build": "./scripts/build.sh",
			"init": "./scripts/init.sh",
			"log": "./scripts/log.sh",
			"test": "./scripts/build.sh && ./scripts/test.sh",
			"web-build": "./scripts/web-build.sh"
		},
		"bin": {
			"gonzales": "./bin/gonzales.js"
		},
		"files": [
			"bin",
			"lib"
		],
		"dependencies": {
			"minimist": "1.1.x"
		},
		"devDependencies": {
			"babel": "^5.5.3",
			"coffee-script": "~1.7.1",
			"jscs": "2.1.0",
			"jshint": "2.8.0",
			"json-loader": "^0.5.3",
			"mocha": "2.2.x",
			"null-loader": "^0.1.1",
			"webpack": "^1.12.2"
		},
		"engines": {
			"node": ">=0.6.0"
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var Node=__webpack_require__(1);var RootNode=(function(_Node){_inherits(RootNode,_Node);function RootNode(){_classCallCheck(this,RootNode);_Node.apply(this,arguments);}RootNode.prototype.buildIndex = function buildIndex(ast,index,indexHasChanged){if(!Array.isArray(ast.content))return;for(var i=0,l=ast.content.length;i < l;i++) {var node=ast.content[i];if(!index[node.type])index[node.type] = [];node.indexHasChanged = indexHasChanged;index[node.type].push({node:node,parent:ast,i:i});this.buildIndex(node,index,indexHasChanged);}};RootNode.prototype.traverseByType = function traverseByType(type,callback){if(!this.index){this.index = {stylesheet:[this]};this.indexHasChanged = [0];this.buildIndex(this,this.index,this.indexHasChanged);}var nodes=this.index[type];var breakLoop;if(!nodes)return;for(var i=0,l=nodes.length;i < l;i++) {if(this.indexHasChanged[0]){this.index = {stylesheet:[this]};this.indexHasChanged = [0];this.buildIndex(this,this.index,this.indexHasChanged);nodes = this.index[type];i += nodes.length - l;l = nodes.length;}var node=nodes[i];breakLoop = callback(node.node,node.i,node.parent);if(breakLoop === null)break;}};RootNode.prototype.traverseByTypes = function traverseByTypes(types,callback){for(var i=0,l=types.length;i < l;i++) {this.traverseByType(types[i],callback);}};return RootNode;})(Node);module.exports = RootNode;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// empty (null-loader)

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var Node=__webpack_require__(1);var NodeTypes=__webpack_require__(9);module.exports = function(){return new Node({type:NodeTypes.StylesheetType,content:[],start:[0,0],end:[0,0]});};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';module.exports = {ArgumentsType:'arguments',AtkeywordType:'atkeyword',AtruleType:'atrule',AttributeSelectorType:'attributeSelector',AttributeNameType:'attributeName',AttributeFlagsType:'attributeFlags',AttributeMatchType:'attributeMatch',AttributeValueType:'attributeValue',BlockType:'block',BracketsType:'brackets',ClassType:'class',CombinatorType:'combinator',CommentMLType:'multilineComment',CommentSLType:'singlelineComment',ConditionType:'condition',ConditionalStatementType:'conditionalStatement',DeclarationType:'declaration',DeclDelimType:'declarationDelimiter',DefaultType:'default',DelimType:'delimiter',DimensionType:'dimension',EscapedStringType:'escapedString',ExtendType:'extend',ExpressionType:'expression',FunctionType:'function',GlobalType:'global',IdentType:'ident',ImportantType:'important',IncludeType:'include',InterpolationType:'interpolation',InterpolatedVariableType:'interpolatedVariable',LoopType:'loop',MixinType:'mixin',NamePrefixType:'namePrefix',NamespacePrefixType:'namespacePrefix',NamespaceSeparatorType:'namespaceSeparator',NumberType:'number',OperatorType:'operator',OptionalType:'optional',ParenthesesType:'parentheses',ParentSelectorType:'parentSelector',PercentageType:'percentage',PlaceholderType:'placeholder',ProgidType:'progid',PropertyType:'property',PropertyDelimType:'propertyDelimiter',PseudocType:'pseudoClass',PseudoeType:'pseudoElement',RawType:'raw',RulesetType:'ruleset',SType:'space',SelectorType:'selector',ShashType:'id',StringType:'string',StylesheetType:'stylesheet',TypeSelectorType:'typeSelector',UriType:'uri',ValueType:'value',VariableType:'variable',VariablesListType:'variablesList',VhashType:'color'};

/***/ }
/******/ ])
});
;