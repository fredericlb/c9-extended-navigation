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

	'use strict';exports.__esModule = true;exports['default'] = moduleDef;function moduleDef(gonzalesInstance){return gonzalesInstance.registerSyntax({mark:__webpack_require__(1),parse:__webpack_require__(3),stringify:__webpack_require__(6),tokenizer:__webpack_require__(7)},'less');}module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var TokenType=__webpack_require__(2);module.exports = (function(){ /**
	  * Mark whitespaces and comments
	  */function markSC(tokens){var tokensLength=tokens.length;var ws=-1; // Flag for whitespaces
	var sc=-1; // Flag for whitespaces and comments
	var t=undefined; // Current token
	// For every token in the token list, mark spaces and line breaks
	// as spaces (set both `ws` and `sc` flags). Mark multiline comments
	// with `sc` flag.
	// If there are several spaces or tabs or line breaks or multiline
	// comments in a row, group them: take the last one's index number
	// and save it to the first token in the group as a reference:
	// e.g., `ws_last = 7` for a group of whitespaces or `sc_last = 9`
	// for a group of whitespaces and comments.
	for(var i=0;i < tokensLength;i++) {t = tokens[i];switch(t.type){case TokenType.Space:case TokenType.Tab:case TokenType.Newline:t.ws = true;t.sc = true;if(ws === -1)ws = i;if(sc === -1)sc = i;break;case TokenType.CommentML:case TokenType.CommentSL:if(ws !== -1){tokens[ws].ws_last = i - 1;ws = -1;}t.sc = true;break;default:if(ws !== -1){tokens[ws].ws_last = i - 1;ws = -1;}if(sc !== -1){tokens[sc].sc_last = i - 1;sc = -1;}}}if(ws !== -1)tokens[ws].ws_last = i - 1;if(sc !== -1)tokens[sc].sc_last = i - 1;} /**
	  * Pair brackets
	  */function markBrackets(tokens){var tokensLength=tokens.length;var ps=[]; // Parentheses
	var sbs=[]; // Square brackets
	var cbs=[]; // Curly brackets
	var t=undefined; // Current token
	// For every token in the token list, if we meet an opening (left)
	// bracket, push its index number to a corresponding array.
	// If we then meet a closing (right) bracket, look at the corresponding
	// array. If there are any elements (records about previously met
	// left brackets), take a token of the last left bracket (take
	// the last index number from the array and find a token with
	// this index number) and save right bracket's index as a reference:
	for(var i=0;i < tokensLength;i++) {t = tokens[i];switch(t.type){case TokenType.LeftParenthesis:ps.push(i);break;case TokenType.RightParenthesis:if(ps.length){t.left = ps.pop();tokens[t.left].right = i;}break;case TokenType.LeftSquareBracket:sbs.push(i);break;case TokenType.RightSquareBracket:if(sbs.length){t.left = sbs.pop();tokens[t.left].right = i;}break;case TokenType.LeftCurlyBracket:cbs.push(i);break;case TokenType.RightCurlyBracket:if(cbs.length){t.left = cbs.pop();tokens[t.left].right = i;}break;}}}return function(tokens){markBrackets(tokens);markSC(tokens);};})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	// jscs:disable
	'use strict';module.exports = {StringSQ:'StringSQ',StringDQ:'StringDQ',CommentML:'CommentML',CommentSL:'CommentSL',Newline:'Newline',Space:'Space',Tab:'Tab',ExclamationMark:'ExclamationMark', // !
	QuotationMark:'QuotationMark', // "
	NumberSign:'NumberSign', // #
	DollarSign:'DollarSign', // $
	PercentSign:'PercentSign', // %
	Ampersand:'Ampersand', // &
	Apostrophe:'Apostrophe', // '
	LeftParenthesis:'LeftParenthesis', // (
	RightParenthesis:'RightParenthesis', // )
	Asterisk:'Asterisk', // *
	PlusSign:'PlusSign', // +
	Comma:'Comma', // ,
	HyphenMinus:'HyphenMinus', // -
	FullStop:'FullStop', // .
	Solidus:'Solidus', // /
	Colon:'Colon', // :
	Semicolon:'Semicolon', // ;
	LessThanSign:'LessThanSign', // <
	EqualsSign:'EqualsSign', // =
	EqualitySign:'EqualitySign', // ==
	InequalitySign:'InequalitySign', // !=
	GreaterThanSign:'GreaterThanSign', // >
	QuestionMark:'QuestionMark', // ?
	CommercialAt:'CommercialAt', // @
	LeftSquareBracket:'LeftSquareBracket', // [
	ReverseSolidus:'ReverseSolidus', // \
	RightSquareBracket:'RightSquareBracket', // ]
	CircumflexAccent:'CircumflexAccent', // ^
	LowLine:'LowLine', // _
	LeftCurlyBracket:'LeftCurlyBracket', // {
	VerticalLine:'VerticalLine', // |
	RightCurlyBracket:'RightCurlyBracket', // }
	Tilde:'Tilde', // ~
	Identifier:'Identifier',DecimalNumber:'DecimalNumber'};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// jscs:disable maximumLineLength
	'use strict';var Node=__webpack_require__(4);var NodeType=__webpack_require__(5);var TokenType=__webpack_require__(2);var tokens=undefined;var tokensLength=undefined;var pos=undefined;var needInfo=undefined;var rules={'arguments':function(){return checkArguments(pos) && getArguments();},'atkeyword':function(){return checkAtkeyword(pos) && getAtkeyword();},'atrule':function(){return checkAtrule(pos) && getAtrule();},'block':function(){return checkBlock(pos) && getBlock();},'brackets':function(){return checkBrackets(pos) && getBrackets();},'class':function(){return checkClass(pos) && getClass();},'combinator':function(){return checkCombinator(pos) && getCombinator();},'commentML':function(){return checkCommentML(pos) && getCommentML();},'commentSL':function(){return checkCommentSL(pos) && getCommentSL();},'condition':function(){return checkCondition(pos) && getCondition();},'declaration':function(){return checkDeclaration(pos) && getDeclaration();},'declDelim':function(){return checkDeclDelim(pos) && getDeclDelim();},'delim':function(){return checkDelim(pos) && getDelim();},'dimension':function(){return checkDimension(pos) && getDimension();},'escapedString':function(){return checkEscapedString(pos) && getEscapedString();},'expression':function(){return checkExpression(pos) && getExpression();},'extend':function(){return checkExtend(pos) && getExtend();},'function':function(){return checkFunction(pos) && getFunction();},'ident':function(){return checkIdent(pos) && getIdent();},'important':function(){return checkImportant(pos) && getImportant();},'include':function(){return checkInclude(pos) && getInclude();},'interpolatedVariable':function(){return checkInterpolatedVariable(pos) && getInterpolatedVariable();},'mixin':function(){return checkMixin(pos) && getMixin();},'namespace':function(){return checkNamespace(pos) && getNamespace();},'number':function(){return checkNumber(pos) && getNumber();},'operator':function(){return checkOperator(pos) && getOperator();},'parentheses':function(){return checkParentheses(pos) && getParentheses();},'parentselector':function(){return checkParentSelector(pos) && getParentSelector();},'percentage':function(){return checkPercentage(pos) && getPercentage();},'progid':function(){return checkProgid(pos) && getProgid();},'property':function(){return checkProperty(pos) && getProperty();},'propertyDelim':function(){return checkPropertyDelim(pos) && getPropertyDelim();},'pseudoc':function(){return checkPseudoc(pos) && getPseudoc();},'pseudoe':function(){return checkPseudoe(pos) && getPseudoe();},'ruleset':function(){return checkRuleset(pos) && getRuleset();},'s':function(){return checkS(pos) && getS();},'selector':function(){return checkSelector(pos) && getSelector();},'shash':function(){return checkShash(pos) && getShash();},'string':function(){return checkString(pos) && getString();},'stylesheet':function(){return checkStylesheet(pos) && getStylesheet();},'unary':function(){return checkUnary(pos) && getUnary();},'uri':function(){return checkUri(pos) && getUri();},'value':function(){return checkValue(pos) && getValue();},'variable':function(){return checkVariable(pos) && getVariable();},'variableslist':function(){return checkVariablesList(pos) && getVariablesList();},'vhash':function(){return checkVhash(pos) && getVhash();}}; /**
	 * Stop parsing and display error
	 * @param {Number=} i Token's index number
	 */function throwError(i){var ln=tokens[i].ln;throw {line:ln,syntax:'less'};} /**
	 * @param {Object} exclude
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkExcluding(exclude,i){var start=i;while(i < tokensLength) {if(exclude[tokens[i++].type])break;}return i - start - 2;} /**
	 * @param {Number} start
	 * @param {Number} finish
	 * @returns {String}
	 */function joinValues(start,finish){var s='';for(var i=start;i < finish + 1;i++) {s += tokens[i].value;}return s;} /**
	 * @param {Number} start
	 * @param {Number} num
	 * @returns {String}
	 */function joinValues2(start,num){if(start + num - 1 >= tokensLength)return;var s='';for(var i=0;i < num;i++) {s += tokens[start + i].value;}return s;}function getLastPosition(content,line,column,colOffset){return typeof content === 'string'?getLastPositionForString(content,line,column,colOffset):getLastPositionForArray(content,line,column,colOffset);}function getLastPositionForString(content,line,column,colOffset){var position=[];if(!content){position = [line,column];if(colOffset)position[1] += colOffset - 1;return position;}var lastLinebreak=content.lastIndexOf('\n');var endsWithLinebreak=lastLinebreak === content.length - 1;var splitContent=content.split('\n');var linebreaksCount=splitContent.length - 1;var prevLinebreak=linebreaksCount === 0 || linebreaksCount === 1?-1:content.length - splitContent[linebreaksCount - 1].length - 2; // Line:
	var offset=endsWithLinebreak?linebreaksCount - 1:linebreaksCount;position[0] = line + offset; // Column:
	if(endsWithLinebreak){offset = prevLinebreak !== -1?content.length - prevLinebreak:content.length - 1;}else {offset = linebreaksCount !== 0?content.length - lastLinebreak - column - 1:content.length - 1;}position[1] = column + offset;if(!colOffset)return position;if(endsWithLinebreak){position[0]++;position[1] = colOffset;}else {position[1] += colOffset;}return position;}function getLastPositionForArray(content,line,column,colOffset){var position;if(content.length === 0){position = [line,column];}else {var c=content[content.length - 1];if(c.hasOwnProperty('end')){position = [c.end.line,c.end.column];}else {position = getLastPosition(c.content,line,column);}}if(!colOffset)return position;if(tokens[pos - 1].type !== 'Newline'){position[1] += colOffset;}else {position[0]++;position[1] = 1;}return position;}function newNode(type,content,line,column,end){if(!end)end = getLastPosition(content,line,column);return new Node({type:type,content:content,start:{line:line,column:column},end:{line:end[0],column:end[1]},syntax:'less'});} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkAny(i){var l;if(l = checkBrackets(i))tokens[i].any_child = 1;else if(l = checkParentheses(i))tokens[i].any_child = 2;else if(l = checkString(i))tokens[i].any_child = 3;else if(l = checkVariablesList(i))tokens[i].any_child = 4;else if(l = checkVariable(i))tokens[i].any_child = 5;else if(l = checkPercentage(i))tokens[i].any_child = 6;else if(l = checkDimension(i))tokens[i].any_child = 7;else if(l = checkNumber(i))tokens[i].any_child = 8;else if(l = checkUri(i))tokens[i].any_child = 9;else if(l = checkExpression(i))tokens[i].any_child = 10;else if(l = checkFunction(i))tokens[i].any_child = 11;else if(l = checkIdent(i))tokens[i].any_child = 12;else if(l = checkClass(i))tokens[i].any_child = 13;else if(l = checkUnary(i))tokens[i].any_child = 14;return l;} /**
	 * @returns {Array}
	 */function getAny(){var childType=tokens[pos].any_child;if(childType === 1)return getBrackets();if(childType === 2)return getParentheses();if(childType === 3)return getString();if(childType === 4)return getVariablesList();if(childType === 5)return getVariable();if(childType === 6)return getPercentage();if(childType === 7)return getDimension();if(childType === 8)return getNumber();if(childType === 9)return getUri();if(childType === 10)return getExpression();if(childType === 11)return getFunction();if(childType === 12)return getIdent();if(childType === 13)return getClass();if(childType === 14)return getUnary();} /**
	 * Check if token is part of mixin's arguments.
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkArguments(i){var start=i;var l=undefined;if(i >= tokensLength || tokens[i++].type !== TokenType.LeftParenthesis)return 0;while(i < tokens[start].right) {if(l = checkArgument(i))i += l;else return 0;}return tokens[start].right - start + 1;} /**
	 * Check if token is valid to be part of arguments list.
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkArgument(i){var l;if(l = checkEscapedString(i))tokens[i].argument_child = 1;else if(l = checkDeclaration(i))tokens[i].argument_child = 2;else if(l = checkVariablesList(i))tokens[i].argument_child = 3;else if(l = checkVariable(i))tokens[i].argument_child = 4;else if(l = checkSC(i))tokens[i].argument_child = 5;else if(l = checkUnary(i))tokens[i].argument_child = 6;else if(l = checkOperator(i))tokens[i].argument_child = 7;else if(l = checkDelim(i))tokens[i].argument_child = 8;else if(l = checkDeclDelim(i))tokens[i].argument_child = 9;else if(l = checkString(i))tokens[i].argument_child = 10;else if(l = checkPercentage(i))tokens[i].argument_child = 11;else if(l = checkDimension(i))tokens[i].argument_child = 12;else if(l = checkNumber(i))tokens[i].argument_child = 13;else if(l = checkUri(i))tokens[i].argument_child = 14;else if(l = checkFunction(i))tokens[i].argument_child = 15;else if(l = checkIdent(i))tokens[i].argument_child = 16;else if(l = checkVhash(i))tokens[i].argument_child = 17;else if(l = checkBlock(i))tokens[i].argument_child = 18;else if(l = checkParentheses(i))tokens[i].argument_child = 19;return l;} /**
	 * @returns {Array} Node that is part of arguments list.
	 */function getArgument(){var childType=tokens[pos].argument_child;if(childType === 1)return getEscapedString();if(childType === 2)return getDeclaration();if(childType === 3)return getVariablesList();if(childType === 4)return getVariable();if(childType === 5)return getSC();if(childType === 6)return getUnary();if(childType === 7)return getOperator();if(childType === 8)return getDelim();if(childType === 9)return getDeclDelim();if(childType === 10)return getString();if(childType === 11)return getPercentage();if(childType === 12)return getDimension();if(childType === 13)return getNumber();if(childType === 14)return getUri();if(childType === 15)return getFunction();if(childType === 16)return getIdent();if(childType === 17)return getVhash();if(childType === 18)return getBlock();if(childType === 19)return getParentheses();} /**
	 * Check if token is part of an @-word (e.g. `@import`, `@include`)
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkAtkeyword(i){var l; // Check that token is `@`:
	if(i >= tokensLength || tokens[i++].type !== TokenType.CommercialAt)return 0;return (l = checkIdent(i))?l + 1:0;} /**
	 * Get node with @-word
	 * @returns {Array} `['atkeyword', ['ident', x]]` where `x` is
	 *      an identifier without
	 *      `@` (e.g. `import`, `include`)
	 */function getAtkeyword(){var token=tokens[pos++];var content=[getIdent()];return newNode(NodeType.AtkeywordType,content,token.ln,token.col);} /**
	 * Check if token is a part of an @-rule
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of @-rule
	 */function checkAtrule(i){var l;if(i >= tokensLength)return 0; // If token already has a record of being part of an @-rule,
	// return the @-rule's length:
	if(tokens[i].atrule_l !== undefined)return tokens[i].atrule_l; // If token is part of an @-rule, save the rule's type to token:
	if(l = checkAtruler(i))tokens[i].atrule_type = 1; // @-rule with ruleset
	else if(l = checkAtruleb(i))tokens[i].atrule_type = 2; // Block @-rule
	else if(l = checkAtrules(i))tokens[i].atrule_type = 3; // Single-line @-rule
	else return 0; // If token is part of an @-rule, save the rule's length to token:
	tokens[i].atrule_l = l;return l;} /**
	 * Get node with @-rule
	 * @returns {Array}
	 */function getAtrule(){switch(tokens[pos].atrule_type){case 1:return getAtruler(); // @-rule with ruleset
	case 2:return getAtruleb(); // Block @-rule
	case 3:return getAtrules(); // Single-line @-rule
	}} /**
	 * Check if token is part of a block @-rule
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the @-rule
	 */function checkAtruleb(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkAtkeyword(i))i += l;else return 0;if(l = checkTsets(i))i += l;if(l = checkBlock(i))i += l;else return 0;return i - start;} /**
	 * Get node with a block @-rule
	 * @returns {Array} `['atruleb', ['atkeyword', x], y, ['block', z]]`
	 */function getAtruleb(){var startPos=pos;var content=[getAtkeyword()].concat(getTsets()).concat([getBlock()]);var token=tokens[startPos];return newNode(NodeType.AtruleType,content,token.ln,token.col);} /**
	 * Check if token is part of an @-rule with ruleset
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the @-rule
	 */function checkAtruler(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkAtkeyword(i))i += l;else return 0;if(l = checkTsets(i))i += l;if(i < tokensLength && tokens[i].type === TokenType.LeftCurlyBracket)i++;else return 0;if(l = checkAtrulers(i))i += l;if(i < tokensLength && tokens[i].type === TokenType.RightCurlyBracket)i++;else return 0;return i - start;} /**
	 * Get node with an @-rule with ruleset
	 * @returns {Array} ['atruler', ['atkeyword', x], y, z]
	 */function getAtruler(){var startPos=pos;var content=[getAtkeyword()];content = content.concat(getTsets());content.push(getAtrulers());var token=tokens[startPos];return newNode(NodeType.AtruleType,content,token.ln,token.col);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkAtrulers(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkSC(i))i += l;while(i < tokensLength) {if(l = checkSC(i))tokens[i].atrulers_child = 1;else if(l = checkAtrule(i))tokens[i].atrulers_child = 2;else if(l = checkRuleset(i))tokens[i].atrulers_child = 3;else break;i += l;}tokens[i].atrulers_end = 1;if(l = checkSC(i))i += l;return i - start;} /**
	 * @returns {Array} `['atrulers', x]`
	 */function getAtrulers(){var token=tokens[pos++];var line=token.ln;var column=token.col;var content=getSC();while(!tokens[pos].atrulers_end) {var childType=tokens[pos].atrulers_child;if(childType === 1)content = content.concat(getSC());else if(childType === 2)content.push(getAtrule());else if(childType === 3)content.push(getRuleset());}content = content.concat(getSC());var end=getLastPosition(content,line,column,1);pos++;return newNode(NodeType.BlockType,content,line,column,end);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkAtrules(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkAtkeyword(i))i += l;else return 0;if(l = checkTsets(i))i += l;return i - start;} /**
	 * @returns {Array} `['atrules', ['atkeyword', x], y]`
	 */function getAtrules(){var startPos=pos;var content=[getAtkeyword()].concat(getTsets());var token=tokens[startPos];return newNode(NodeType.AtruleType,content,token.ln,token.col);} /**
	 * Check if token is part of a block (e.g. `{...}`).
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the block
	 */function checkBlock(i){return i < tokensLength && tokens[i].type === TokenType.LeftCurlyBracket?tokens[i].right - i + 1:0;} /**
	 * Get node with a block
	 * @returns {Array} `['block', x]`
	 */function getBlock(){var startPos=pos;var end=tokens[pos++].right;var content=[];var token=tokens[startPos];var line=token.ln;var column=token.col;while(pos < end) {if(checkBlockdecl(pos))content = content.concat(getBlockdecl());else throwError(pos);}var end_=getLastPosition(content,line,column,1);pos = end + 1;return newNode(NodeType.BlockType,content,line,column,end_);} /**
	 * Check if token is part of a declaration (property-value pair)
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the declaration
	 */function checkBlockdecl(i){var l;if(i >= tokensLength)return 0;if(l = checkBlockdecl1(i))tokens[i].bd_type = 1;else if(l = checkBlockdecl2(i))tokens[i].bd_type = 2;else if(l = checkBlockdecl3(i))tokens[i].bd_type = 3;else if(l = checkBlockdecl4(i))tokens[i].bd_type = 4;else return 0;return l;} /**
	 * @returns {Array}
	 */function getBlockdecl(){switch(tokens[pos].bd_type){case 1:return getBlockdecl1();case 2:return getBlockdecl2();case 3:return getBlockdecl3();case 4:return getBlockdecl4();}} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkBlockdecl1(i){var start=i;var l=undefined;if(l = checkSC(i))i += l;if(l = checkCondition(i))tokens[i].bd_kind = 1;else if(l = checkRuleset(i))tokens[i].bd_kind = 2;else if(l = checkDeclaration(i))tokens[i].bd_kind = 3;else if(l = checkAtrule(i))tokens[i].bd_kind = 4;else if(l = checkInclude(i))tokens[i].bd_kind = 5;else if(l = checkExtend(i))tokens[i].bd_kind = 6;else return 0;i += l;if(i < tokensLength && (l = checkDeclDelim(i)))i += l;else return 0;if(l = checkSC(i))i += l;else return 0;return i - start;} /**
	 * @returns {Array}
	 */function getBlockdecl1(){var sc=getSC();var x=undefined;switch(tokens[pos].bd_kind){case 1:x = getCondition();break;case 2:x = getRuleset();break;case 3:x = getDeclaration();break;case 4:x = getAtrule();break;case 5:x = getInclude();break;case 6:x = getExtend();break;}return sc.concat([x]).concat([getDeclDelim()]).concat(getSC());} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkBlockdecl2(i){var start=i;var l=undefined;if(l = checkSC(i))i += l;if(l = checkCondition(i))tokens[i].bd_kind = 1;else if(l = checkRuleset(i))tokens[i].bd_kind = 6;else if(l = checkDeclaration(i))tokens[i].bd_kind = 4;else if(l = checkAtrule(i))tokens[i].bd_kind = 5;else if(l = checkInclude(i))tokens[i].bd_kind = 2;else if(l = checkExtend(i))tokens[i].bd_kind = 3;else return 0;i += l;if(l = checkSC(i))i += l;return i - start;} /**
	 * @returns {Array}
	 */function getBlockdecl2(){var sc=getSC();var x=undefined;switch(tokens[pos].bd_kind){case 1:x = getCondition();break;case 2:x = getInclude();break;case 3:x = getExtend();break;case 4:x = getDeclaration();break;case 5:x = getAtrule();break;case 6:x = getRuleset();break;}return sc.concat([x]).concat(getSC());} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkBlockdecl3(i){var start=i;var l=undefined;if(l = checkSC(i))i += l;if(l = checkDeclDelim(i))i += l;else return 0;if(l = checkSC(i))i += l;return i - start;} /**
	 * @returns {Array} `[s0, ['declDelim'], s1]` where `s0` and `s1` are
	 *      are optional whitespaces.
	 */function getBlockdecl3(){return getSC().concat([getDeclDelim()]).concat(getSC());} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkBlockdecl4(i){return checkSC(i);} /**
	 * @returns {Array}
	 */function getBlockdecl4(){return getSC();} /**
	 * Check if token is part of text inside square brackets, e.g. `[1]`
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkBrackets(i){if(i >= tokensLength || tokens[i].type !== TokenType.LeftSquareBracket)return 0;return tokens[i].right - i + 1;} /**
	 * Get node with text inside square brackets, e.g. `[1]`
	 * @returns {Node}
	 */function getBrackets(){var startPos=pos++;var token=tokens[startPos];var line=token.ln;var column=token.col;var tsets=getTsets();var end=getLastPosition(tsets,line,column,1);pos++;return newNode(NodeType.BracketsType,tsets,line,column,end);} /**
	 * Check if token is part of a class selector (e.g. `.abc`)
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the class selector
	 */function checkClass(i){var l;if(i >= tokensLength)return 0;if(tokens[i].class_l)return tokens[i].class_l;if(tokens[i++].type === TokenType.FullStop){if(l = checkInterpolatedVariable(i))tokens[i].class_child = 1;else if(l = checkIdent(i))tokens[i].class_child = 2;else return 0;tokens[i].class_l = l + 1;return l + 1;}return 0;} /**
	 * Get node with a class selector
	 * @returns {Array} `['class', ['ident', x]]` where x is a class's
	 *      identifier (without `.`, e.g. `abc`).
	 */function getClass(){var startPos=pos++;var content=[];var childType=tokens[pos].class_child;if(childType === 1)content.push(getInterpolatedVariable());else content.push(getIdent());var token=tokens[startPos];return newNode(NodeType.ClassType,content,token.ln,token.col);}function checkCombinator(i){if(i >= tokensLength)return 0;var l=undefined;if(l = checkCombinator1(i))tokens[i].combinatorType = 1;else if(l = checkCombinator2(i))tokens[i].combinatorType = 2;else if(l = checkCombinator3(i))tokens[i].combinatorType = 3;return l;}function getCombinator(){var type=tokens[pos].combinatorType;if(type === 1)return getCombinator1();if(type === 2)return getCombinator2();if(type === 3)return getCombinator3();} /**
	 * (1) `||`
	 */function checkCombinator1(i){if(tokens[i].type === TokenType.VerticalLine && tokens[i + 1].type === TokenType.VerticalLine)return 2;else return 0;}function getCombinator1(){var type=NodeType.CombinatorType;var token=tokens[pos];var line=token.ln;var column=token.col;var content='||';pos += 2;return newNode(type,content,line,column);} /**
	 * (1) `>`
	 * (2) `+`
	 * (3) `~`
	 */function checkCombinator2(i){var type=tokens[i].type;if(type === TokenType.PlusSign || type === TokenType.GreaterThanSign || type === TokenType.Tilde)return 1;else return 0;}function getCombinator2(){var type=NodeType.CombinatorType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=tokens[pos++].value;return newNode(type,content,line,column);} /**
	 * (1) `/panda/`
	 */function checkCombinator3(i){var start=i;if(tokens[i].type === TokenType.Solidus)i++;else return 0;var l=undefined;if(l = checkIdent(i))i += l;else return 0;if(tokens[i].type === TokenType.Solidus)i++;else return 0;return i - start;}function getCombinator3(){var type=NodeType.CombinatorType;var token=tokens[pos];var line=token.ln;var column=token.col; // Skip `/`.
	pos++;var ident=getIdent(); // Skip `/`.
	pos++;var content='/' + ident.content + '/';return newNode(type,content,line,column);} /**
	 * Check if token is a multiline comment.
	 * @param {Number} i Token's index number
	 * @returns {Number} `1` if token is a multiline comment, otherwise `0`
	 */function checkCommentML(i){return i < tokensLength && tokens[i].type === TokenType.CommentML?1:0;} /**
	 * Get node with a multiline comment
	 * @returns {Array} `['commentML', x]` where `x`
	 *      is the comment's text (without `/*` and `* /`).
	 */function getCommentML(){var startPos=pos;var s=tokens[pos].value.substring(2);var l=s.length;var token=tokens[startPos];var line=token.ln;var column=token.col;if(s.charAt(l - 2) === '*' && s.charAt(l - 1) === '/')s = s.substring(0,l - 2);var end=getLastPosition(s,line,column,2);if(end[0] === line)end[1] += 2;pos++;return newNode(NodeType.CommentMLType,s,line,column,end);} /**
	 * Check if token is part of a single-line comment.
	 * @param {Number} i Token's index number
	 * @returns {Number} `1` if token is a single-line comment, otherwise `0`
	 */function checkCommentSL(i){return i < tokensLength && tokens[i].type === TokenType.CommentSL?1:0;} /**
	 * Get node with a single-line comment.
	 * @returns {Array}
	 */function getCommentSL(){var startPos=pos;var x=tokens[pos++].value.substring(2);var token=tokens[startPos];var line=token.ln;var column=token.col;var end=getLastPosition(x,line,column + 2);return newNode(NodeType.CommentSLType,x,line,column,end);} /**
	 * Check if token is part of a condition.
	 * @param {Number} i Token's index number
	 * @return {Number} Length of the condition
	 */function checkCondition(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if((l = checkIdent(i)) && tokens[i].value === 'when')i += l;else return 0;while(i < tokensLength) {if(l = checkBlock(i)){tokens[i].condition_child = 0;break;}else if(l = checkFunction(i))tokens[i].condition_child = 1;else if(l = checkBrackets(i))tokens[i].condition_child = 2;else if(l = checkParentheses(i))tokens[i].condition_child = 3;else if(l = checkVariable(i))tokens[i].condition_child = 4;else if(l = checkIdent(i))tokens[i].condition_child = 5;else if(l = checkNumber(i))tokens[i].condition_child = 6;else if(l = checkDelim(i))tokens[i].condition_child = 7;else if(l = checkOperator(i))tokens[i].condition_child = 8;else if(l = checkCombinator(i))tokens[i].condition_child = 9;else if(l = checkSC(i))tokens[i].condition_child = 10;else if(l = checkString(i))tokens[i].condition_child = 11;else return 0;i += l;}return i - start;} /**
	 * Get node with a condition.
	 * @returns {Array} `['condition', x]`
	 */function getCondition(){var startPos=pos;var x=[];x.push(getIdent());while(pos < tokensLength) {var childType=tokens[pos].condition_child;if(childType === 0)break;else if(childType === 1)x.push(getFunction());else if(childType === 2)x.push(getBrackets());else if(childType === 3)x.push(getParentheses());else if(childType === 4)x.push(getVariable());else if(childType === 5)x.push(getIdent());else if(childType === 6)x.push(getNumber());else if(childType === 7)x.push(getDelim());else if(childType === 8)x.push(getOperator());else if(childType === 9)x.push(getCombinator());else if(childType === 10)x = x.concat(getSC());else if(childType === 11)x.push(getString());}var token=tokens[startPos];return newNode(NodeType.ConditionType,x,token.ln,token.col);} /**
	 * Check if token is part of a declaration (property-value pair)
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the declaration
	 */function checkDeclaration(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkProperty(i))i += l;else return 0;if(l = checkSC(i))i += l;if(l = checkPropertyDelim(i))i++;else return 0;if(l = checkSC(i))i += l;if(l = checkValue(i))i += l;else return 0;return i - start;} /**
	 * Get node with a declaration
	 * @returns {Array} `['declaration', ['property', x], ['propertyDelim'],
	 *       ['value', y]]`
	 */function getDeclaration(){var startPos=pos;var x=[getProperty()].concat(getSC()).concat([getPropertyDelim()]).concat(getSC()).concat([getValue()]);var token=tokens[startPos];return newNode(NodeType.DeclarationType,x,token.ln,token.col);} /**
	 * Check if token is a semicolon
	 * @param {Number} i Token's index number
	 * @returns {Number} `1` if token is a semicolon, otherwise `0`
	 */function checkDeclDelim(i){return i < tokensLength && tokens[i].type === TokenType.Semicolon?1:0;} /**
	 * Get node with a semicolon
	 * @returns {Array} `['declDelim']`
	 */function getDeclDelim(){var startPos=pos++;var token=tokens[startPos];return newNode(NodeType.DeclDelimType,';',token.ln,token.col);} /**
	 * Check if token is a comma
	 * @param {Number} i Token's index number
	 * @returns {Number} `1` if token is a comma, otherwise `0`
	 */function checkDelim(i){return i < tokensLength && tokens[i].type === TokenType.Comma?1:0;} /**
	 * Get node with a comma
	 * @returns {Array} `['delim']`
	 */function getDelim(){var startPos=pos++;var token=tokens[startPos];return newNode(NodeType.DelimType,',',token.ln,token.col);} /**
	 * Check if token is part of a number with dimension unit (e.g. `10px`)
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkDimension(i){var ln=checkNumber(i);var li=undefined;if(i >= tokensLength || !ln || i + ln >= tokensLength)return 0;return (li = checkNmName2(i + ln))?ln + li:0;} /**
	 * Get node of a number with dimension unit
	 * @returns {Array} `['dimension', ['number', x], ['ident', y]]` where
	 *      `x` is a number converted to string (e.g. `'10'`) and `y` is
	 *      a dimension unit (e.g. `'px'`).
	 */function getDimension(){var startPos=pos;var x=[getNumber()];var token=tokens[pos];var ident=newNode(NodeType.IdentType,getNmName2(),token.ln,token.col);x.push(ident);token = tokens[startPos];return newNode(NodeType.DimensionType,x,token.ln,token.col);} /**
	 * Check if token is part of an escaped string (e.g. `~"ms:something"`).
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the string (including `~` and quotes)
	 */function checkEscapedString(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(tokens[i].type === TokenType.Tilde && (l = checkString(i + 1)))return i + l - start;else return 0;} /**
	 * Get node with an escaped string
	 * @returns {Array} `['escapedString', ['string', x]]` where `x` is a string
	 *      without `~` but with quotes
	 */function getEscapedString(){var startPos=pos++;var x=tokens[pos++].value;var token=tokens[startPos];var line=token.ln;var column=token.col;var end=getLastPosition(x,line,column + 1);return newNode(NodeType.EscapedStringType,x,line,column,end);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkExpression(i){var start=i;if(i >= tokensLength || tokens[i++].value !== 'expression' || i >= tokensLength || tokens[i].type !== TokenType.LeftParenthesis)return 0;return tokens[i].right - start + 1;} /**
	 * @returns {Array}
	 */function getExpression(){var startPos=pos++;var x=undefined;var token=tokens[startPos];var line=token.ln;var column=token.col;x = joinValues(pos + 1,tokens[pos].right - 1);var end=getLastPosition(x,line,column,1);if(end[0] === line)end[1] += 11;pos = tokens[pos].right + 1;return newNode(NodeType.ExpressionType,x,token.ln,token.col,end);}function checkExtend(i){if(i >= tokensLength)return 0;var l;if(l = checkExtend1(i))tokens[i].extendType = 1;else if(l = checkExtend2(i))tokens[i].extendType = 2;else return 0;return l;}function getExtend(){var childType=tokens[pos].extendType;if(childType === 1)return getExtend1();if(childType === 2)return getExtend2();} /**
	 * (1) `selector:extend(selector) {...}`
	 */function checkExtend1(i){var start=i;var l;if(i >= tokensLength)return 0;if(l = checkExtendSelector(i))i += l;else return 0;if(tokens[i + 1] && tokens[i + 1].value === 'extend' && (l = checkPseudoc(i)))i += l;else return 0;if(l = checkSC(i))i += l;if(l = checkBlock(i))i += l;else return 0;return i - start;}function getExtend1(){var startPos=pos;var x=[];x.push(getExtendSelector());x.push(getPseudoc());x = x.concat(getSC());x.push(getBlock());var token=tokens[startPos];return newNode(NodeType.ExtendType,x,token.ln,token.col);} /**
	 * (1) `selector:extend(selector)`
	 */function checkExtend2(i){var start=i;var l;if(i >= tokensLength)return 0;if(l = checkExtendSelector(i))i += l;else return 0;if(tokens[i + 1] && tokens[i + 1].value === 'extend' && (l = checkPseudoc(i)))i += l;else return 0;return i - start;}function getExtend2(){var startPos=pos;var x=[];x.push(getExtendSelector());x.push(getPseudoc());var token=tokens[startPos];return newNode(NodeType.ExtendType,x,token.ln,token.col);}function checkExtendSelector(i){var l;if(l = checkParentSelector(i))tokens[i].extend_type = 1;else if(l = checkIdent(i))tokens[i].extend_type = 2;else if(l = checkClass(i))tokens[i].extend_type = 3;else if(l = checkShash(i))tokens[i].extend_type = 4;return l;}function getExtendSelector(){var childType=tokens[pos].extend_type;if(childType === 1)return getParentSelector();if(childType === 2)return getIdent();if(childType === 3)return getClass();if(childType === 4)return getShash();} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkFunction(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkIdent(i))i += l;else return 0;return i < tokensLength && tokens[i].type === TokenType.LeftParenthesis?tokens[i].right - start + 1:0;} /**
	 * @returns {Array}
	 */function getFunction(){var token=tokens[pos];var ident=getIdent();var x=[ident];var body;body = getArguments();x.push(body);return newNode(NodeType.FunctionType,x,token.ln,token.col);} /**
	 * @returns {Array}
	 */function getArguments(){var startPos=pos;var x=[];var body=undefined;var token=tokens[startPos];var line=token.ln;var column=token.col;pos++;while(pos < tokensLength && tokens[pos].type !== TokenType.RightParenthesis) {if(checkDeclaration(pos))x.push(getDeclaration());else if(checkArgument(pos)){body = getArgument();if(typeof body.content === 'string')x.push(body);else x = x.concat(body);}else if(checkClass(pos))x.push(getClass());else throwError(pos);}var end=getLastPosition(x,line,column,1);pos++;return newNode(NodeType.ArgumentsType,x,line,column,end);} /**
	 * Check if token is part of an identifier
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the identifier
	 */function checkIdent(i){var start=i;var wasIdent=undefined;var l=undefined;if(i >= tokensLength)return 0; // Check if token is part of an identifier starting with `_`:
	if(tokens[i].type === TokenType.LowLine)return checkIdentLowLine(i); // If token is a character, `-`, `$` or `*`, skip it & continue:
	if(tokens[i].type === TokenType.HyphenMinus || tokens[i].type === TokenType.Identifier || tokens[i].type === TokenType.DollarSign || tokens[i].type === TokenType.Asterisk)i++;else return 0; // Remember if previous token's type was identifier:
	wasIdent = tokens[i - 1].type === TokenType.Identifier;for(;i < tokensLength;i++) {if(l = checkInterpolatedVariable(i))i += l;if(i >= tokensLength)break;if(tokens[i].type !== TokenType.HyphenMinus && tokens[i].type !== TokenType.LowLine){if(tokens[i].type !== TokenType.Identifier && (tokens[i].type !== TokenType.DecimalNumber || !wasIdent))break;else wasIdent = true;}}if(!wasIdent && tokens[start].type !== TokenType.Asterisk)return 0;tokens[start].ident_last = i - 1;return i - start;} /**
	 * Check if token is part of an identifier starting with `_`
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the identifier
	 */function checkIdentLowLine(i){var start=i;if(i++ >= tokensLength)return 0;for(;i < tokensLength;i++) {if(tokens[i].type !== TokenType.HyphenMinus && tokens[i].type !== TokenType.DecimalNumber && tokens[i].type !== TokenType.LowLine && tokens[i].type !== TokenType.Identifier)break;} // Save index number of the last token of the identifier:
	tokens[start].ident_last = i - 1;return i - start;} /**
	 * Get node with an identifier
	 * @returns {Array} `['ident', x]` where `x` is identifier's name
	 */function getIdent(){var startPos=pos;var x=joinValues(pos,tokens[pos].ident_last);pos = tokens[pos].ident_last + 1;var token=tokens[startPos];return newNode(NodeType.IdentType,x,token.ln,token.col);} /**
	 * Check if token is part of `!important` word
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkImportant(i){var start=i;var l=undefined;if(i >= tokensLength || tokens[i++].type !== TokenType.ExclamationMark)return 0;if(l = checkSC(i))i += l;if(tokens[i].value === 'important'){tokens[start].importantEnd = i;return i - start + 1;}else {return 0;}} /**
	 * Get node with `!important` word
	 * @returns {Array} `['important', sc]` where `sc` is optional whitespace
	 */function getImportant(){var token=tokens[pos];var line=token.ln;var column=token.col;var content=joinValues(pos,token.importantEnd);pos = token.importantEnd + 1;return newNode(NodeType.ImportantType,content,line,column);} /**
	 * Check if token is part of an include (`@include` or `@extend` directive).
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkInclude(i){var l;if(i >= tokensLength)return 0;if(l = checkInclude1(i))tokens[i].include_type = 1;else if(l = checkInclude2(i))tokens[i].include_type = 2;return l;} /**
	 * Get node with included mixin
	 * @returns {Array} `['include', x]`
	 */function getInclude(){switch(tokens[pos].include_type){case 1:return getInclude1();case 2:return getInclude2();}} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkInclude1(i){var start=i;var l=undefined;if(l = checkClass(i) || checkShash(i))i += l;else return 0;while(i < tokensLength) {if(l = checkClass(i) || checkShash(i) || checkSC(i))i += l;else if(tokens[i].type === TokenType.GreaterThanSign)i++;else break;}if(l = checkArguments(i))i += l;else return 0;if(i < tokensLength && (l = checkSC(i)))i += l;if(i < tokensLength && (l = checkImportant(i)))i += l;return i - start;} /**
	 * @returns {Array} `['include', x]`
	 */function getInclude1(){var startPos=pos;var x=[];x.push(checkClass(pos)?getClass():getShash());while(pos < tokensLength) {if(checkClass(pos))x.push(getClass());else if(checkShash(pos))x.push(getShash());else if(checkSC(pos))x = x.concat(getSC());else if(checkOperator(pos))x.push(getOperator());else break;}x.push(getArguments());x = x.concat(getSC());if(checkImportant(pos))x.push(getImportant());var token=tokens[startPos];return newNode(NodeType.IncludeType,x,token.ln,token.col);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkInclude2(i){var start=i;var l=undefined;if(l = checkClass(i) || checkShash(i))i += l;else return 0;while(i < tokensLength) {if(l = checkClass(i) || checkShash(i) || checkSC(i))i += l;else if(tokens[i].type === TokenType.GreaterThanSign)i++;else break;}return i - start;} /**
	 * @returns {Array} `['include', x]`
	 */function getInclude2(){var startPos=pos;var x=[];x.push(checkClass(pos)?getClass():getShash());while(pos < tokensLength) {if(checkClass(pos))x.push(getClass());else if(checkShash(pos))x.push(getShash());else if(checkSC(pos))x = x.concat(getSC());else if(checkOperator(pos))x.push(getOperator());else break;}var token=tokens[startPos];return newNode(NodeType.IncludeType,x,token.ln,token.col);} /**
	 * Check if token is part of LESS interpolated variable
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkInterpolatedVariable(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(tokens[i].type !== TokenType.CommercialAt || !tokens[i + 1] || tokens[i + 1].type !== TokenType.LeftCurlyBracket)return 0;i += 2;if(l = checkIdent(i))i += l;else return 0;return tokens[i].type === TokenType.RightCurlyBracket?i - start + 1:0;} /**
	 * Get node with LESS interpolated variable
	 * @returns {Array} `['interpolatedVariable', x]`
	 */function getInterpolatedVariable(){var startPos=pos;var x=[];var token=tokens[startPos];var line=token.ln;var column=token.col; // Skip `@{`:
	pos += 2;x.push(getIdent()); // Skip `}`:
	var end=getLastPosition(x,line,column,1);pos++;return newNode(NodeType.InterpolatedVariableType,x,line,column,end);} /**
	 * Check if token is part of a LESS mixin
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the mixin
	 */function checkMixin(i){var l;if(i >= tokensLength)return 0;if(l = checkMixin1(i))tokens[i].mixin_type = 1;else if(l = checkMixin2(i))tokens[i].mixin_type = 2;else return 0;return l;} /**
	 * @returns {Array}
	 */function getMixin(){switch(tokens[pos].mixin_type){case 1:return getMixin1();case 2:return getMixin2();}}function checkMixin1(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkClass(i) || checkShash(i))i += l;else return 0;if(l = checkSC(i))i += l;if(l = checkArguments(i))i += l;if(l = checkSC(i))i += l;if(l = checkBlock(i))i += l;else return 0;return i - start;} /**
	 * Get node with a mixin
	 * @returns {Array} `['mixin', x]`
	 */function getMixin1(){var startPos=pos;var x=[];x.push(checkClass(pos)?getClass():getShash());x = x.concat(getSC());if(checkArguments(pos))x.push(getArguments());x = x.concat(getSC());if(checkBlock(pos))x.push(getBlock());var token=tokens[startPos];return newNode(NodeType.MixinType,x,token.ln,token.col);} /**
	 * Check if token is part of a LESS mixin
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the mixin
	 */function checkMixin2(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkClass(i) || checkShash(i))i += l;else return 0;if(l = checkSC(i))i += l;if(l = checkArguments(i))i += l;return i - start;} /**
	 * Get node with a mixin
	 * @returns {Array} `['mixin', x]`
	 */function getMixin2(){var startPos=pos;var x=[];x.push(checkClass(pos)?getClass():getShash());x = x.concat(getSC());if(checkArguments(pos))x.push(getArguments());var token=tokens[startPos];return newNode(NodeType.MixinType,x,token.ln,token.col);} /**
	 * Check if token is a namespace sign (`|`)
	 * @param {Number} i Token's index number
	 * @returns {Number} `1` if token is `|`, `0` if not
	 */function checkNamespace(i){return i < tokensLength && tokens[i].type === TokenType.VerticalLine?1:0;} /**
	 * Get node with a namespace sign
	 * @returns {Array} `['namespace']`
	 */function getNamespace(){var startPos=pos++;var token=tokens[startPos];return newNode(NodeType.NamespaceType,'|',token.ln,token.col);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkNmName2(i){if(tokens[i].type === TokenType.Identifier)return 1;else if(tokens[i].type !== TokenType.DecimalNumber)return 0;i++;return i < tokensLength && tokens[i].type === TokenType.Identifier?2:1;} /**
	 * @returns {String}
	 */function getNmName2(){var s=tokens[pos].value;if(tokens[pos++].type === TokenType.DecimalNumber && pos < tokensLength && tokens[pos].type === TokenType.Identifier)s += tokens[pos++].value;return s;} /**
	 * Check if token is part of a number
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of number
	 */function checkNumber(i){if(i >= tokensLength)return 0;if(tokens[i].number_l)return tokens[i].number_l; // `10`:
	if(i < tokensLength && tokens[i].type === TokenType.DecimalNumber && (!tokens[i + 1] || tokens[i + 1] && tokens[i + 1].type !== TokenType.FullStop))return (tokens[i].number_l = 1,tokens[i].number_l); // `10.`:
	if(i < tokensLength && tokens[i].type === TokenType.DecimalNumber && tokens[i + 1] && tokens[i + 1].type === TokenType.FullStop && (!tokens[i + 2] || tokens[i + 2].type !== TokenType.DecimalNumber))return (tokens[i].number_l = 2,tokens[i].number_l); // `.10`:
	if(i < tokensLength && tokens[i].type === TokenType.FullStop && tokens[i + 1].type === TokenType.DecimalNumber)return (tokens[i].number_l = 2,tokens[i].number_l); // `10.10`:
	if(i < tokensLength && tokens[i].type === TokenType.DecimalNumber && tokens[i + 1] && tokens[i + 1].type === TokenType.FullStop && tokens[i + 2] && tokens[i + 2].type === TokenType.DecimalNumber)return (tokens[i].number_l = 3,tokens[i].number_l);return 0;} /**
	 * Get node with number
	 * @returns {Array} `['number', x]` where `x` is a number converted
	 *      to string.
	 */function getNumber(){var x='';var startPos=pos;var l=tokens[pos].number_l;for(var j=0;j < l;j++) {x += tokens[pos + j].value;}pos += l;var token=tokens[startPos];return newNode(NodeType.NumberType,x,token.ln,token.col);} /**
	 * Check if token is an operator (`/`, `,`, `:`, `=`, `>`, `<` or `*`)
	 * @param {Number} i Token's index number
	 * @returns {Number} `1` if token is an operator, otherwise `0`
	 */function checkOperator(i){if(i >= tokensLength)return 0;switch(tokens[i].type){case TokenType.Solidus:case TokenType.Comma:case TokenType.Colon:case TokenType.EqualsSign:case TokenType.LessThanSign:case TokenType.GreaterThanSign:case TokenType.Asterisk:return 1;}return 0;} /**
	 * Get node with an operator
	 * @returns {Array} `['operator', x]` where `x` is an operator converted
	 *      to string.
	 */function getOperator(){var startPos=pos;var x=tokens[pos++].value;var token=tokens[startPos];return newNode(NodeType.OperatorType,x,token.ln,token.col);} /**
	 * Check if token is part of text inside parentheses, e.g. `(1)`
	 * @param {Number} i Token's index number
	 * @return {Number}
	 */function checkParentheses(i){if(i >= tokensLength || tokens[i].type !== TokenType.LeftParenthesis)return 0;return tokens[i].right - i + 1;} /**
	 * Get node with text inside parentheses, e.g. `(1)`
	 * @return {Node}
	 */function getParentheses(){var type=NodeType.ParenthesesType;var token=tokens[pos];var line=token.ln;var column=token.col;pos++;var tsets=getTsets();var end=getLastPosition(tsets,line,column,1);pos++;return newNode(type,tsets,line,column,end);} /**
	 * Check if token is a parent selector (`&`).
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkParentSelector(i){return i < tokensLength && tokens[i].type === TokenType.Ampersand?1:0;} /**
	 * Get node with a parent selector
	 * @returns {Array} `['parentSelector']`
	 */function getParentSelector(){var startPos=pos++;var token=tokens[startPos];return newNode(NodeType.ParentSelectorType,'&',token.ln,token.col);} /**
	 * Check if token is part of a number with percent sign (e.g. `10%`)
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkPercentage(i){var x;if(i >= tokensLength)return 0;x = checkNumber(i);if(!x || i + x >= tokensLength)return 0;return tokens[i + x].type === TokenType.PercentSign?x + 1:0;} /**
	 * Get node of number with percent sign
	 * @returns {Array} `['percentage', ['number', x]]` where `x` is a number
	 *      (without percent sign) converted to string.
	 */function getPercentage(){var startPos=pos;var x=[getNumber()];var token=tokens[startPos];var line=token.ln;var column=token.col;var end=getLastPosition(x,line,column,1);pos++;return newNode(NodeType.PercentageType,x,line,column,end);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkProgid(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(joinValues2(i,6) === 'progid:DXImageTransform.Microsoft.')i += 6;else return 0;if(l = checkIdent(i))i += l;else return 0;if(l = checkSC(i))i += l;if(tokens[i].type === TokenType.LeftParenthesis){tokens[start].progid_end = tokens[i].right;i = tokens[i].right + 1;}else return 0;return i - start;} /**
	 * @returns {Array}
	 */function getProgid(){var startPos=pos;var progid_end=tokens[pos].progid_end;var x=joinValues(pos,progid_end);pos = progid_end + 1;var token=tokens[startPos];return newNode(NodeType.ProgidType,x,token.ln,token.col);} /**
	 * Check if token is part of a property
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the property
	 */function checkProperty(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkVariable(i) || checkIdent(i))i += l;else return 0;return i - start;} /**
	 * Get node with a property
	 * @returns {Array} `['property', x]`
	 */function getProperty(){var startPos=pos;var x=[];if(checkVariable(pos))x.push(getVariable());else x.push(getIdent());var token=tokens[startPos];return newNode(NodeType.PropertyType,x,token.ln,token.col);} /**
	 * Check if token is a colon
	 * @param {Number} i Token's index number
	 * @returns {Number} `1` if token is a colon, otherwise `0`
	 */function checkPropertyDelim(i){return i < tokensLength && tokens[i].type === TokenType.Colon?1:0;} /**
	 * Get node with a colon
	 * @returns {Array} `['propertyDelim']`
	 */function getPropertyDelim(){var startPos=pos++;var token=tokens[startPos];return newNode(NodeType.PropertyDelimType,':',token.ln,token.col);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkPseudo(i){return checkPseudoe(i) || checkPseudoc(i);} /**
	 * @returns {Array}
	 */function getPseudo(){if(checkPseudoe(pos))return getPseudoe();if(checkPseudoc(pos))return getPseudoc();} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkPseudoe(i){var l;if(i >= tokensLength || tokens[i++].type !== TokenType.Colon || i >= tokensLength || tokens[i++].type !== TokenType.Colon)return 0;return (l = checkInterpolatedVariable(i) || checkIdent(i))?l + 2:0;} /**
	 * @returns {Array}
	 */function getPseudoe(){var startPos=pos;var x=[];pos += 2;x.push(checkInterpolatedVariable(pos)?getInterpolatedVariable():getIdent());var token=tokens[startPos];return newNode(NodeType.PseudoeType,x,token.ln,token.col);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkPseudoc(i){var l;if(i >= tokensLength || tokens[i].type !== TokenType.Colon)return 0;if(l = checkPseudoClass1(i))tokens[i].pseudoClassType = 1;else if(l = checkPseudoClass2(i))tokens[i].pseudoClassType = 2;else if(l = checkPseudoClass3(i))tokens[i].pseudoClassType = 3;else if(l = checkPseudoClass4(i))tokens[i].pseudoClassType = 4;else if(l = checkPseudoClass5(i))tokens[i].pseudoClassType = 5;else if(l = checkPseudoClass6(i))tokens[i].pseudoClassType = 6;else return 0;return l;}function getPseudoc(){var childType=tokens[pos].pseudoClassType;if(childType === 1)return getPseudoClass1();if(childType === 2)return getPseudoClass2();if(childType === 3)return getPseudoClass3();if(childType === 4)return getPseudoClass4();if(childType === 5)return getPseudoClass5();if(childType === 6)return getPseudoClass6();} /**
	 * (1) `:not(selector)`
	 * (2) `:extend(selector, selector)`
	 */function checkPseudoClass1(i){var start=i; // Skip `:`.
	i++;var l=undefined;if(l = checkIdent(i))i += l;else return 0;if(i >= tokensLength || tokens[i].type !== TokenType.LeftParenthesis)return 0;var right=tokens[i].right; // Skip `(`.
	i++;if(l = checkSelectorsGroup(i))i += l;else return 0;if(i !== right)return 0;return right - start + 1;} /**
	 * (-) `:not(panda)`
	 */function getPseudoClass1(){var type=NodeType.PseudocType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[]; // Skip `:`.
	pos++;content.push(getIdent());{var _type=NodeType.ArgumentsType;var _token=tokens[pos];var _line=_token.ln;var _column=_token.col; // Skip `(`.
	pos++;var selectors=getSelectorsGroup();var end=getLastPosition(selectors,_line,_column,1);var args=newNode(_type,selectors,_line,_column,end);content.push(args); // Skip `)`.
	pos++;}return newNode(type,content,line,column);} /**
	 * (1) `:nth-child(odd)`
	 * (2) `:nth-child(even)`
	 * (3) `:lang(de-DE)`
	 */function checkPseudoClass2(i){var start=i;var l=0; // Skip `:`.
	i++;if(i >= tokensLength)return 0;if(l = checkIdent(i))i += l;else return 0;if(i >= tokensLength || tokens[i].type !== TokenType.LeftParenthesis)return 0;var right=tokens[i].right; // Skip `(`.
	i++;if(l = checkSC(i))i += l;if(l = checkIdent(i))i += l;else return 0;if(l = checkSC(i))i += l;if(i !== right)return 0;return i - start + 1;}function getPseudoClass2(){var type=NodeType.PseudocType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[]; // Skip `:`.
	pos++;var ident=getIdent();content.push(ident);{ // Skip `(`.
	pos++;var l=tokens[pos].ln;var c=tokens[pos].col;var value=[];value = value.concat(getSC());value.push(getIdent());value = value.concat(getSC());var end=getLastPosition(value,l,c,1);var args=newNode(NodeType.ArgumentsType,value,l,c,end);content.push(args); // Skip `)`.
	pos++;}return newNode(type,content,line,column);} /**
	 * (-) `:nth-child(-3n + 2)`
	 */function checkPseudoClass3(i){var start=i;var l=0; // Skip `:`.
	i++;if(i >= tokensLength)return 0;if(l = checkIdent(i))i += l;else return 0;if(i >= tokensLength || tokens[i].type !== TokenType.LeftParenthesis)return 0;var right=tokens[i].right; // Skip `(`.
	i++;if(l = checkSC(i))i += l;if(l = checkUnary(i))i += l;if(i >= tokensLength)return 0;if(tokens[i].type === TokenType.DecimalNumber)i++;if(i >= tokensLength)return 0;if(tokens[i].value === 'n')i++;else return 0;if(l = checkSC(i))i += l;if(i >= tokensLength)return 0;if(tokens[i].value === '+' || tokens[i].value === '-')i++;else return 0;if(l = checkSC(i))i += l;if(tokens[i].type === TokenType.DecimalNumber)i++;else return 0;if(l = checkSC(i))i += l;if(i !== right)return 0;return i - start + 1;}function getPseudoClass3(){var type=NodeType.PseudocType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[]; // Skip `:`.
	pos++;var ident=getIdent();content.push(ident);var l=tokens[pos].ln;var c=tokens[pos].col;var value=[]; // Skip `(`.
	pos++;if(checkUnary(pos))value.push(getUnary());if(checkNumber(pos))value.push(getNumber());{var _l=tokens[pos].ln;var _c=tokens[pos].col;var _content=tokens[pos].value;var _ident=newNode(NodeType.IdentType,_content,_l,_c);value.push(_ident);pos++;}value = value.concat(getSC());if(checkUnary(pos))value.push(getUnary());value = value.concat(getSC());if(checkNumber(pos))value.push(getNumber());value = value.concat(getSC());var end=getLastPosition(value,l,c,1);var args=newNode(NodeType.ArgumentsType,value,l,c,end);content.push(args); // Skip `)`.
	pos++;return newNode(type,content,line,column);} /**
	 * (-) `:nth-child(-3n)`
	 */function checkPseudoClass4(i){var start=i;var l=0; // Skip `:`.
	i++;if(i >= tokensLength)return 0;if(l = checkIdent(i))i += l;else return 0;if(i >= tokensLength)return 0;if(tokens[i].type !== TokenType.LeftParenthesis)return 0;var right=tokens[i].right; // Skip `(`.
	i++;if(l = checkSC(i))i += l;if(l = checkUnary(i))i += l;if(tokens[i].type === TokenType.DecimalNumber)i++;if(tokens[i].value === 'n')i++;else return 0;if(l = checkSC(i))i += l;if(i !== right)return 0;return i - start + 1;}function getPseudoClass4(){var type=NodeType.PseudocType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[]; // Skip `:`.
	pos++;var ident=getIdent();content.push(ident); // Skip `(`.
	pos++;var l=tokens[pos].ln;var c=tokens[pos].col;var value=[];if(checkUnary(pos))value.push(getUnary());if(checkNumber(pos))value.push(getNumber());if(checkIdent(pos))value.push(getIdent());value = value.concat(getSC());var end=getLastPosition(value,l,c,1);var args=newNode(NodeType.ArgumentsType,value,l,c,end);content.push(args); // Skip `)`.
	pos++;return newNode(type,content,line,column);} /**
	 * (-) `:nth-child(+8)`
	 */function checkPseudoClass5(i){var start=i;var l=0; // Skip `:`.
	i++;if(i >= tokensLength)return 0;if(l = checkIdent(i))i += l;else return 0;if(i >= tokensLength)return 0;if(tokens[i].type !== TokenType.LeftParenthesis)return 0;var right=tokens[i].right; // Skip `(`.
	i++;if(l = checkSC(i))i += l;if(l = checkUnary(i))i += l;if(tokens[i].type === TokenType.DecimalNumber)i++;else return 0;if(l = checkSC(i))i += l;if(i !== right)return 0;return i - start + 1;}function getPseudoClass5(){var type=NodeType.PseudocType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[]; // Skip `:`.
	pos++;var ident=getIdent();content.push(ident); // Skip `(`.
	pos++;var l=tokens[pos].ln;var c=tokens[pos].col;var value=[];if(checkUnary(pos))value.push(getUnary());if(checkNumber(pos))value.push(getNumber());value = value.concat(getSC());var end=getLastPosition(value,l,c,1);var args=newNode(NodeType.ArgumentsType,value,l,c,end);content.push(args); // Skip `)`.
	pos++;return newNode(type,content,line,column);} /**
	 * (-) `:checked`
	 */function checkPseudoClass6(i){var start=i;var l=0; // Skip `:`.
	i++;if(i >= tokensLength)return 0;if(l = checkInterpolatedVariable(i))i += l;else if(l = checkIdent(i))i += l;else return 0;return i - start;}function getPseudoClass6(){var type=NodeType.PseudocType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[]; // Skip `:`.
	pos++;var ident=checkInterpolatedVariable(pos)?getInterpolatedVariable():getIdent();content.push(ident);return newNode(type,content,line,column);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkRuleset(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkSelectorsGroup(i))i += l;else return 0;if(l = checkSC(i))i += l;if(l = checkBlock(i))i += l;else return 0;return i - start;}function getRuleset(){var type=NodeType.RulesetType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[];content = content.concat(getSelectorsGroup());content = content.concat(getSC());content.push(getBlock());return newNode(type,content,line,column);} /**
	 * Check if token is marked as a space (if it's a space or a tab
	 *      or a line break).
	 * @param {Number} i
	 * @returns {Number} Number of spaces in a row starting with the given token.
	 */function checkS(i){return i < tokensLength && tokens[i].ws?tokens[i].ws_last - i + 1:0;} /**
	 * Get node with spaces
	 * @returns {Array} `['s', x]` where `x` is a string containing spaces
	 */function getS(){var startPos=pos;var x=joinValues(pos,tokens[pos].ws_last);pos = tokens[pos].ws_last + 1;var token=tokens[startPos];return newNode(NodeType.SType,x,token.ln,token.col);} /**
	 * Check if token is a space or a comment.
	 * @param {Number} i Token's index number
	 * @returns {Number} Number of similar (space or comment) tokens
	 *      in a row starting with the given token.
	 */function checkSC(i){if(i >= tokensLength)return 0;var l=undefined;var lsc=0;while(i < tokensLength) {if(!(l = checkS(i)) && !(l = checkCommentML(i)) && !(l = checkCommentSL(i)))break;i += l;lsc += l;}return lsc || 0;} /**
	 * Get node with spaces and comments
	 * @returns {Array} Array containing nodes with spaces (if there are any)
	 *      and nodes with comments (if there are any):
	 *      `[['s', x]*, ['comment', y]*]` where `x` is a string of spaces
	 *      and `y` is a comment's text (without `/*` and `* /`).
	 */function getSC(){var sc=[];var ln=undefined;if(pos >= tokensLength)return sc;ln = tokens[pos].ln;while(pos < tokensLength) {if(checkS(pos))sc.push(getS());else if(checkCommentML(pos))sc.push(getCommentML());else if(checkCommentSL(pos))sc.push(getCommentSL());else break;}return sc;} /**
	 * Check if token is part of a hexadecimal number (e.g. `#fff`) inside
	 *      a simple selector
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkShash(i){var l;if(i >= tokensLength || tokens[i].type !== TokenType.NumberSign)return 0;if(l = checkInterpolatedVariable(i + 1) || checkIdent(i + 1))return l + 1;else return 0;} /**
	 * Get node with a hexadecimal number (e.g. `#fff`) inside a simple
	 *      selector
	 * @returns {Array} `['shash', x]` where `x` is a hexadecimal number
	 *      converted to string (without `#`, e.g. `fff`)
	 */function getShash(){var startPos=pos;var x=[];pos++;if(checkInterpolatedVariable(pos))x.push(getInterpolatedVariable());else x.push(getIdent());var token=tokens[startPos];return newNode(NodeType.ShashType,x,token.ln,token.col);} /**
	 * Check if token is part of a string (text wrapped in quotes)
	 * @param {Number} i Token's index number
	 * @returns {Number} `1` if token is part of a string, `0` if not
	 */function checkString(i){return i < tokensLength && (tokens[i].type === TokenType.StringSQ || tokens[i].type === TokenType.StringDQ)?1:0;} /**
	 * Get string's node
	 * @returns {Array} `['string', x]` where `x` is a string (including
	 *      quotes).
	 */function getString(){var startPos=pos;var x=tokens[pos++].value;var token=tokens[startPos];return newNode(NodeType.StringType,x,token.ln,token.col);} /**
	 * Validate stylesheet: it should consist of any number (0 or more) of
	 * rulesets (sets of rules with selectors), @-rules, whitespaces or
	 * comments.
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkStylesheet(i){var start=i;var l=undefined; // Check every token:
	while(i < tokensLength) {if(l = checkSC(i) || checkAtrule(i) || checkRuleset(i) || checkMixin(i) || checkDeclaration(i) || checkDeclDelim(i))i += l;else throwError(i);}return i - start;} /**
	 * @returns {Array} `['stylesheet', x]` where `x` is all stylesheet's
	 *      nodes.
	 */function getStylesheet(){var startPos=pos;var x=[];while(pos < tokensLength) {if(checkSC(pos))x = x.concat(getSC());else if(checkAtrule(pos))x.push(getAtrule());else if(checkRuleset(pos))x.push(getRuleset());else if(checkMixin(pos))x.push(getMixin());else if(checkDeclaration(pos))x.push(getDeclaration());else if(checkDeclDelim(pos))x.push(getDeclDelim());else throwError(pos);}var token=tokens[startPos];return newNode(NodeType.StylesheetType,x,token.ln,token.col);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkTset(i){var l;if(l = checkVhash(i))tokens[i].tset_child = 1;else if(l = checkAny(i))tokens[i].tset_child = 2;else if(l = checkSC(i))tokens[i].tset_child = 3;else if(l = checkOperator(i))tokens[i].tset_child = 4;return l;} /**
	 * @returns {Array}
	 */function getTset(){var childType=tokens[pos].tset_child;if(childType === 1)return getVhash();else if(childType === 2)return getAny();else if(childType === 3)return getSC();else if(childType === 4)return getOperator();} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkTsets(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;while(l = checkTset(i)) {i += l;}return i - start;} /**
	 * @returns {Array}
	 */function getTsets(){var x=[];var t=undefined;while(checkTset(pos)) {t = getTset();if(typeof t.content === 'string')x.push(t);else x = x.concat(t);}return x;} /**
	 * Check if token is an unary (arithmetical) sign (`+` or `-`)
	 * @param {Number} i Token's index number
	 * @returns {Number} `1` if token is an unary sign, `0` if not
	 */function checkUnary(i){return i < tokensLength && (tokens[i].type === TokenType.HyphenMinus || tokens[i].type === TokenType.PlusSign)?1:0;} /**
	 * Get node with an unary (arithmetical) sign (`+` or `-`)
	 * @returns {Array} `['unary', x]` where `x` is an unary sign
	 *      converted to string.
	 */function getUnary(){var startPos=pos;var x=tokens[pos++].value;var token=tokens[startPos];return newNode(NodeType.OperatorType,x,token.ln,token.col);} /**
	 * Check if token is part of URI (e.g. `url('/css/styles.css')`)
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of URI
	 */function checkUri(i){var start=i;if(i >= tokensLength || tokens[i++].value !== 'url' || i >= tokensLength || tokens[i].type !== TokenType.LeftParenthesis)return 0;return tokens[i].right - start + 1;} /**
	 * Get node with URI
	 * @returns {Array} `['uri', x]` where `x` is URI's nodes (without `url`
	 *      and braces, e.g. `['string', ''/css/styles.css'']`).
	 */function getUri(){var startPos=pos;var uriExcluding={};var uri=undefined;var token=undefined;var l=undefined;var raw=undefined;pos += 2;uriExcluding[TokenType.Space] = 1;uriExcluding[TokenType.Tab] = 1;uriExcluding[TokenType.Newline] = 1;uriExcluding[TokenType.LeftParenthesis] = 1;uriExcluding[TokenType.RightParenthesis] = 1;if(checkUri1(pos)){uri = [].concat(getSC()).concat([getString()]).concat(getSC());}else {uri = getSC();l = checkExcluding(uriExcluding,pos);token = tokens[pos];raw = newNode(NodeType.RawType,joinValues(pos,pos + l),token.ln,token.col);uri.push(raw);pos += l + 1;uri = uri.concat(getSC());}token = tokens[startPos];var line=token.ln;var column=token.col;var end=getLastPosition(uri,line,column,1);pos++;return newNode(NodeType.UriType,uri,line,column,end);} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkUri1(i){var start=i;var l=undefined;if(i >= tokensLength)return 0;if(l = checkSC(i))i += l;if(tokens[i].type !== TokenType.StringDQ && tokens[i].type !== TokenType.StringSQ)return 0;i++;if(l = checkSC(i))i += l;return i - start;} /**
	 * Check if token is part of a value
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the value
	 */function checkValue(i){var start=i;var l=undefined;var s=undefined;var _i=undefined;while(i < tokensLength) {s = checkSC(i);_i = i + s;if(l = _checkValue(_i))i += l + s;if(!l || checkBlock(_i))break;}return i - start;} /**
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function _checkValue(i){return checkEscapedString(i) || checkInterpolatedVariable(i) || checkVariable(i) || checkVhash(i) || checkBlock(i) || checkProgid(i) || checkAny(i) || checkAtkeyword(i) || checkOperator(i) || checkImportant(i);} /**
	 * @returns {Array}
	 */function getValue(){var startPos=pos;var x=[];var s=undefined;var _pos=undefined;while(pos < tokensLength) {s = checkSC(pos);_pos = pos + s;if(!_checkValue(_pos))break;if(s)x = x.concat(getSC());x.push(_getValue());}var token=tokens[startPos];return newNode(NodeType.ValueType,x,token.ln,token.col);} /**
	 * @returns {Array}
	 */function _getValue(){if(checkEscapedString(pos))return getEscapedString();else if(checkInterpolatedVariable(pos))return getInterpolatedVariable();else if(checkVariable(pos))return getVariable();else if(checkVhash(pos))return getVhash();else if(checkBlock(pos))return getBlock();else if(checkProgid(pos))return getProgid();else if(checkAny(pos))return getAny();else if(checkAtkeyword(pos))return getAtkeyword();else if(checkOperator(pos))return getOperator();else if(checkImportant(pos))return getImportant();} /**
	 * Check if token is part of LESS variable
	 * @param {Number} i Token's index number
	 * @returns {Number} Length of the variable
	 */function checkVariable(i){var l;if(i >= tokensLength || tokens[i].type !== TokenType.CommercialAt)return 0;if(tokens[i - 1] && tokens[i - 1].type === TokenType.CommercialAt && tokens[i - 2] && tokens[i - 2].type === TokenType.CommercialAt)return 0;return (l = checkVariable(i + 1) || checkIdent(i + 1))?l + 1:0;} /**
	 * Get node with a variable
	 * @returns {Array} `['variable', ['ident', x]]` where `x` is
	 *      a variable name.
	 */function getVariable(){var startPos=pos;var x=[];pos++;if(checkVariable(pos))x.push(getVariable());else x.push(getIdent());var token=tokens[startPos];return newNode(NodeType.VariableType,x,token.ln,token.col);} /**
	 * Check if token is part of a variables list (e.g. `@rest...`).
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkVariablesList(i){var d=0; // Number of dots
	var l=undefined;if(i >= tokensLength)return 0;if(l = checkVariable(i))i += l;else return 0;while(tokens[i] && tokens[i].type === TokenType.FullStop) {d++;i++;}return d === 3?l + d:0;} /**
	 * Get node with a variables list
	 * @returns {Array} `['variableslist', ['variable', ['ident', x]]]` where
	 *      `x` is a variable name.
	 */function getVariablesList(){var startPos=pos;var x=[getVariable()];var token=tokens[startPos];var line=token.ln;var column=token.col;var end=getLastPosition(x,line,column,3);pos += 3;return newNode(NodeType.VariablesListType,x,line,column,end);} /**
	 * Check if token is part of a hexadecimal number (e.g. `#fff`) inside
	 *      some value
	 * @param {Number} i Token's index number
	 * @returns {Number}
	 */function checkVhash(i){var l;if(i >= tokensLength || tokens[i].type !== TokenType.NumberSign)return 0;return (l = checkNmName2(i + 1))?l + 1:0;} /**
	 * Get node with a hexadecimal number (e.g. `#fff`) inside some value
	 * @returns {Array} `['vhash', x]` where `x` is a hexadecimal number
	 *      converted to string (without `#`, e.g. `'fff'`).
	 */function getVhash(){var startPos=pos;var x=undefined;var token=tokens[startPos];var line=token.ln;var column=token.col;pos++;x = getNmName2();var end=getLastPosition(x,line,column + 1);return newNode(NodeType.VhashType,x,line,column,end);}module.exports = function(_tokens,rule,_needInfo){tokens = _tokens;needInfo = _needInfo;tokensLength = tokens.length;pos = 0;return rules[rule]();};function checkSelectorsGroup(i){if(i >= tokensLength)return 0;var start=i;var l=undefined;if(l = checkSelector(i))i += l;else return 0;while(i < tokensLength) {var sb=checkSC(i);var c=checkDelim(i + sb);if(!c)break;var sa=checkSC(i + sb + c);if(l = checkSelector(i + sb + c + sa))i += sb + c + sa + l;else break;}tokens[start].selectorsGroupEnd = i;return i - start;}function getSelectorsGroup(){var selectorsGroup=[];var selectorsGroupEnd=tokens[pos].selectorsGroupEnd;selectorsGroup.push(getSelector());while(pos < selectorsGroupEnd) {selectorsGroup = selectorsGroup.concat(getSC());selectorsGroup.push(getDelim());selectorsGroup = selectorsGroup.concat(getSC());selectorsGroup.push(getSelector());}return selectorsGroup;}function checkSelector(i){if(i >= tokensLength)return 0;var start=i;var l=undefined;if(l = checkCompoundSelector(i))i += l;else return 0;while(i < tokensLength) {var sb=checkSC(i);var c=checkCombinator(i + sb);if(!sb && !c)break;var sa=checkSC(i + sb + c);if(l = checkCompoundSelector(i + sb + c + sa))i += sb + c + sa + l;else break;}tokens[start].selectorEnd = i;return i - start;}function getSelector(){var type=NodeType.SelectorType;var token=tokens[pos];var line=token.ln;var column=token.col;var selectorEnd=token.selectorEnd;var content=undefined;content = getCompoundSelector();while(pos < selectorEnd) {content = content.concat(getSC());if(checkCombinator(pos))content.push(getCombinator());content = content.concat(getSC());content = content.concat(getCompoundSelector());}return newNode(type,content,line,column);}function checkCompoundSelector(i){var l=undefined;if(l = checkCompoundSelector1(i)){tokens[i].compoundSelectorType = 1;}else if(l = checkCompoundSelector2(i)){tokens[i].compoundSelectorType = 2;}return l;}function getCompoundSelector(){var type=tokens[pos].compoundSelectorType;if(type === 1)return getCompoundSelector1();if(type === 2)return getCompoundSelector2();}function checkCompoundSelector1(i){if(i >= tokensLength)return 0;var start=i;var l=undefined;if(l = checkTypeSelector(i))i += l;else return 0;while(i < tokensLength) {var _l2=checkShash(i) || checkClass(i) || checkAttributeSelector(i) || checkPseudo(i);if(_l2)i += _l2;else break;}tokens[start].compoundSelectorEnd = i;return i - start;}function getCompoundSelector1(){var sequence=[];var compoundSelectorEnd=tokens[pos].compoundSelectorEnd;sequence.push(getTypeSelector());while(pos < compoundSelectorEnd) {if(checkShash(pos))sequence.push(getShash());else if(checkClass(pos))sequence.push(getClass());else if(checkAttributeSelector(pos))sequence.push(getAttributeSelector());else if(checkPseudo(pos))sequence.push(getPseudo());}return sequence;}function checkCompoundSelector2(i){if(i >= tokensLength)return 0;var start=i;while(i < tokensLength) {var l=checkShash(i) || checkClass(i) || checkAttributeSelector(i) || checkPseudo(i);if(l)i += l;else break;}tokens[start].compoundSelectorEnd = i;return i - start;}function getCompoundSelector2(){var sequence=[];var compoundSelectorEnd=tokens[pos].compoundSelectorEnd;while(pos < compoundSelectorEnd) {if(checkShash(pos))sequence.push(getShash());else if(checkClass(pos))sequence.push(getClass());else if(checkAttributeSelector(pos))sequence.push(getAttributeSelector());else if(checkPseudo(pos))sequence.push(getPseudo());}return sequence;}function checkTypeSelector(i){if(i >= tokensLength)return 0;var start=i;var l=undefined;if(l = checkNamePrefix(i))i += l;if(tokens[i].type === TokenType.Asterisk)i++;else if(l = checkIdent(i))i += l;else return 0;return i - start;}function getTypeSelector(){var type=NodeType.TypeSelectorType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[];if(checkNamePrefix(pos))content.push(getNamePrefix());if(checkIdent(pos))content.push(getIdent());return newNode(type,content,line,column);}function checkAttributeSelector(i){var l=undefined;if(l = checkAttributeSelector1(i))tokens[i].attributeSelectorType = 1;else if(l = checkAttributeSelector2(i))tokens[i].attributeSelectorType = 2;return l;}function getAttributeSelector(){var type=tokens[pos].attributeSelectorType;if(type === 1)return getAttributeSelector1();else return getAttributeSelector2();} /**
	 * (1) `[panda=nani]`
	 * (2) `[panda='nani']`
	 * (3) `[panda='nani' i]`
	 *
	 */function checkAttributeSelector1(i){var start=i;if(tokens[i].type === TokenType.LeftSquareBracket)i++;else return 0;var l=undefined;if(l = checkSC(i))i += l;if(l = checkAttributeName(i))i += l;else return 0;if(l = checkSC(i))i += l;if(l = checkAttributeMatch(i))i += l;else return 0;if(l = checkSC(i))i += l;if(l = checkAttributeValue(i))i += l;else return 0;if(l = checkSC(i))i += l;if(l = checkAttributeFlags(i)){i += l;if(l = checkSC(i))i += l;}if(tokens[i].type === TokenType.RightSquareBracket)i++;else return 0;return i - start;}function getAttributeSelector1(){var type=NodeType.AttributeSelectorType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[]; // Skip `[`.
	pos++;content = content.concat(getSC());content.push(getAttributeName());content = content.concat(getSC());content.push(getAttributeMatch());content = content.concat(getSC());content.push(getAttributeValue());content = content.concat(getSC());if(checkAttributeFlags(pos)){content.push(getAttributeFlags());content = content.concat(getSC());} // Skip `]`.
	pos++;var end=getLastPosition(content,line,column,1);return newNode(type,content,line,column,end);} /**
	 * (1) `[panda]`
	 */function checkAttributeSelector2(i){var start=i;if(tokens[i].type === TokenType.LeftSquareBracket)i++;else return 0;var l=undefined;if(l = checkSC(i))i += l;if(l = checkAttributeName(i))i += l;else return 0;if(l = checkSC(i))i += l;if(tokens[i].type === TokenType.RightSquareBracket)i++;else return 0;return i - start;}function getAttributeSelector2(){var type=NodeType.AttributeSelectorType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[]; // Skip `[`.
	pos++;content = content.concat(getSC());content.push(getAttributeName());content = content.concat(getSC()); // Skip `]`.
	pos++;var end=getLastPosition(content,line,column,1);return newNode(type,content,line,column,end);}function checkAttributeName(i){var start=i;var l=undefined;if(l = checkNamePrefix(i))i += l;if(l = checkIdent(i))i += l;else return 0;return i - start;}function getAttributeName(){var type=NodeType.AttributeNameType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[];if(checkNamePrefix(pos))content.push(getNamePrefix());content.push(getIdent());return newNode(type,content,line,column);}function checkAttributeMatch(i){var l=undefined;if(l = checkAttributeMatch1(i))tokens[i].attributeMatchType = 1;else if(l = checkAttributeMatch2(i))tokens[i].attributeMatchType = 2;return l;}function getAttributeMatch(){var type=tokens[pos].attributeMatchType;if(type === 1)return getAttributeMatch1();else return getAttributeMatch2();}function checkAttributeMatch1(i){var start=i;var type=tokens[i].type;if(type === TokenType.Tilde || type === TokenType.VerticalLine || type === TokenType.CircumflexAccent || type === TokenType.DollarSign || type === TokenType.Asterisk)i++;else return 0;if(tokens[i].type === TokenType.EqualsSign)i++;else return 0;return i - start;}function getAttributeMatch1(){var type=NodeType.AttributeMatchType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=tokens[pos].value + tokens[pos + 1].value;pos += 2;return newNode(type,content,line,column);}function checkAttributeMatch2(i){if(tokens[i].type === TokenType.EqualsSign)return 1;else return 0;}function getAttributeMatch2(){var type=NodeType.AttributeMatchType;var token=tokens[pos];var line=token.ln;var column=token.col;var content='=';pos++;return newNode(type,content,line,column);}function checkAttributeValue(i){return checkString(i) || checkIdent(i);}function getAttributeValue(){var type=NodeType.AttributeValueType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[];if(checkString(pos))content.push(getString());else content.push(getIdent());return newNode(type,content,line,column);}function checkAttributeFlags(i){return checkIdent(i);}function getAttributeFlags(){var type=NodeType.AttributeFlagsType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[getIdent()];return newNode(type,content,line,column);}function checkNamePrefix(i){if(i >= tokensLength)return 0;var l=undefined;if(l = checkNamePrefix1(i))tokens[i].namePrefixType = 1;else if(l = checkNamePrefix2(i))tokens[i].namePrefixType = 2;return l;}function getNamePrefix(){var type=tokens[pos].namePrefixType;if(type === 1)return getNamePrefix1();else return getNamePrefix2();} /**
	 * (1) `panda|`
	 * (2) `panda<comment>|`
	 */function checkNamePrefix1(i){var start=i;var l=undefined;if(l = checkNamespacePrefix(i))i += l;else return 0;if(l = checkCommentML(i))i += l;if(l = checkNamespaceSeparator(i))i += l;else return 0;return i - start;}function getNamePrefix1(){var type=NodeType.NamePrefixType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[];content.push(getNamespacePrefix());if(checkCommentML(pos))content.push(getCommentML());content.push(getNamespaceSeparator());return newNode(type,content,line,column);} /**
	 * (1) `|`
	 */function checkNamePrefix2(i){return checkNamespaceSeparator(i);}function getNamePrefix2(){var type=NodeType.NamePrefixType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[getNamespaceSeparator()];return newNode(type,content,line,column);} /**
	 * (1) `*`
	 * (2) `panda`
	 */function checkNamespacePrefix(i){if(i >= tokensLength)return 0;var l=undefined;if(tokens[i].type === TokenType.Asterisk)return 1;else if(l = checkIdent(i))return l;else return 0;}function getNamespacePrefix(){var type=NodeType.NamespacePrefixType;var token=tokens[pos];var line=token.ln;var column=token.col;var content=[];if(checkIdent(pos))content.push(getIdent());return newNode(type,content,line,column);} /**
	 * (1) `|`
	 */function checkNamespaceSeparator(i){if(i >= tokensLength)return 0;if(tokens[i].type === TokenType.VerticalLine)return 1;else return 0;}function getNamespaceSeparator(){var type=NodeType.NamespaceSeparatorType;var token=tokens[pos];var line=token.ln;var column=token.col;var content='|';pos++;return newNode(type,content,line,column);}

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	'use strict';module.exports = {ArgumentsType:'arguments',AtkeywordType:'atkeyword',AtruleType:'atrule',AttributeSelectorType:'attributeSelector',AttributeNameType:'attributeName',AttributeFlagsType:'attributeFlags',AttributeMatchType:'attributeMatch',AttributeValueType:'attributeValue',BlockType:'block',BracketsType:'brackets',ClassType:'class',CombinatorType:'combinator',CommentMLType:'multilineComment',CommentSLType:'singlelineComment',ConditionType:'condition',ConditionalStatementType:'conditionalStatement',DeclarationType:'declaration',DeclDelimType:'declarationDelimiter',DefaultType:'default',DelimType:'delimiter',DimensionType:'dimension',EscapedStringType:'escapedString',ExtendType:'extend',ExpressionType:'expression',FunctionType:'function',GlobalType:'global',IdentType:'ident',ImportantType:'important',IncludeType:'include',InterpolationType:'interpolation',InterpolatedVariableType:'interpolatedVariable',LoopType:'loop',MixinType:'mixin',NamePrefixType:'namePrefix',NamespacePrefixType:'namespacePrefix',NamespaceSeparatorType:'namespaceSeparator',NumberType:'number',OperatorType:'operator',OptionalType:'optional',ParenthesesType:'parentheses',ParentSelectorType:'parentSelector',PercentageType:'percentage',PlaceholderType:'placeholder',ProgidType:'progid',PropertyType:'property',PropertyDelimType:'propertyDelimiter',PseudocType:'pseudoClass',PseudoeType:'pseudoElement',RawType:'raw',RulesetType:'ruleset',SType:'space',SelectorType:'selector',ShashType:'id',StringType:'string',StylesheetType:'stylesheet',TypeSelectorType:'typeSelector',UriType:'uri',ValueType:'value',VariableType:'variable',VariablesListType:'variablesList',VhashType:'color'};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// jscs:disable maximumLineLength
	'use strict';module.exports = function stringify(tree){ // TODO: Better error message
	if(!tree)throw new Error('We need tree to translate');function _t(tree){var type=tree.type;if(_unique[type])return _unique[type](tree);if(typeof tree.content === 'string')return tree.content;if(Array.isArray(tree.content))return _composite(tree.content);return '';}function _composite(t,i){if(!t)return '';var s='';i = i || 0;for(;i < t.length;i++) s += _t(t[i]);return s;}var _unique={'arguments':function(t){return '(' + _composite(t.content) + ')';},'atkeyword':function(t){return '@' + _composite(t.content);},'attributeSelector':function(t){return '[' + _composite(t.content) + ']';},'block':function(t){return '{' + _composite(t.content) + '}';},'brackets':function(t){return '[' + _composite(t.content) + ']';},'class':function(t){return '.' + _composite(t.content);},'color':function(t){return '#' + t.content;},'escapedString':function(t){return '~' + t.content;},'expression':function(t){return 'expression(' + t.content + ')';},'id':function(t){return '#' + _composite(t.content);},'interpolatedVariable':function(t){return '@{' + _composite(t.content) + '}';},'multilineComment':function(t){return '/*' + t.content + '*/';},'nthSelector':function(t){return ':' + _t(t.content[0]) + '(' + _composite(t.content.slice(1)) + ')';},'parentheses':function(t){return '(' + _composite(t.content) + ')';},'percentage':function(t){return _composite(t.content) + '%';},'pseudoClass':function(t){return ':' + _composite(t.content);},'pseudoElement':function(t){return '::' + _composite(t.content);},'singlelineComment':function(t){return '/' + '/' + t.content;},'uri':function(t){return 'url(' + _composite(t.content) + ')';},'variable':function(t){return '@' + _composite(t.content);},'variablesList':function(t){return _composite(t.content) + '...';}};return _t(tree);};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';module.exports = function(css){var TokenType=__webpack_require__(2);var tokens=[];var urlMode=false;var blockMode=0;var c=undefined; // Current character
	var cn=undefined; // Next character
	var pos=0;var tn=0;var ln=1;var col=1;var Punctuation={' ':TokenType.Space,'\n':TokenType.Newline,'\r':TokenType.Newline,'\t':TokenType.Tab,'!':TokenType.ExclamationMark,'"':TokenType.QuotationMark,'#':TokenType.NumberSign,'$':TokenType.DollarSign,'%':TokenType.PercentSign,'&':TokenType.Ampersand,'\'':TokenType.Apostrophe,'(':TokenType.LeftParenthesis,')':TokenType.RightParenthesis,'*':TokenType.Asterisk,'+':TokenType.PlusSign,',':TokenType.Comma,'-':TokenType.HyphenMinus,'.':TokenType.FullStop,'/':TokenType.Solidus,':':TokenType.Colon,';':TokenType.Semicolon,'<':TokenType.LessThanSign,'=':TokenType.EqualsSign,'>':TokenType.GreaterThanSign,'?':TokenType.QuestionMark,'@':TokenType.CommercialAt,'[':TokenType.LeftSquareBracket,']':TokenType.RightSquareBracket,'^':TokenType.CircumflexAccent,'_':TokenType.LowLine,'{':TokenType.LeftCurlyBracket,'|':TokenType.VerticalLine,'}':TokenType.RightCurlyBracket,'~':TokenType.Tilde}; /**
	   * Add a token to the token list
	   * @param {string} type
	   * @param {string} value
	   */function pushToken(type,value,column){tokens.push({tn:tn++,ln:ln,col:column,type:type,value:value});} /**
	   * Check if a character is a decimal digit
	   * @param {string} c Character
	   * @returns {boolean}
	   */function isDecimalDigit(c){return '0123456789'.indexOf(c) >= 0;} /**
	   * Parse spaces
	   * @param {string} css Unparsed part of CSS string
	   */function parseSpaces(css){var start=pos; // Read the string until we meet a non-space character:
	for(;pos < css.length;pos++) {if(css.charAt(pos) !== ' ')break;} // Add a substring containing only spaces to tokens:
	pushToken(TokenType.Space,css.substring(start,pos--),col);col += pos - start;} /**
	   * Parse a string within quotes
	   * @param {string} css Unparsed part of CSS string
	   * @param {string} q Quote (either `'` or `"`)
	   */function parseString(css,q){var start=pos; // Read the string until we meet a matching quote:
	for(pos++;pos < css.length;pos++) { // Skip escaped quotes:
	if(css.charAt(pos) === '\\')pos++;else if(css.charAt(pos) === q)break;} // Add the string (including quotes) to tokens:
	var type=q === '"'?TokenType.StringDQ:TokenType.StringSQ;pushToken(type,css.substring(start,pos + 1),col);col += pos - start;} /**
	   * Parse numbers
	   * @param {string} css Unparsed part of CSS string
	   */function parseDecimalNumber(css){var start=pos; // Read the string until we meet a character that's not a digit:
	for(;pos < css.length;pos++) {if(!isDecimalDigit(css.charAt(pos)))break;} // Add the number to tokens:
	pushToken(TokenType.DecimalNumber,css.substring(start,pos--),col);col += pos - start;} /**
	   * Parse identifier
	   * @param {string} css Unparsed part of CSS string
	   */function parseIdentifier(css){var start=pos; // Skip all opening slashes:
	while(css.charAt(pos) === '/') pos++; // Read the string until we meet a punctuation mark:
	for(;pos < css.length;pos++) { // Skip all '\':
	if(css.charAt(pos) === '\\')pos++;else if(css.charAt(pos) in Punctuation)break;}var ident=css.substring(start,pos--); // Enter url mode if parsed substring is `url`:
	if(!urlMode && ident === 'url' && css.charAt(pos + 1) === '('){urlMode = true;} // Add identifier to tokens:
	pushToken(TokenType.Identifier,ident,col);col += pos - start;} /**
	  * Parse a multiline comment
	  * @param {string} css Unparsed part of CSS string
	  */function parseMLComment(css){var start=pos; // Read the string until we meet `*/`.
	// Since we already know first 2 characters (`/*`), start reading
	// from `pos + 2`:
	for(pos = pos + 2;pos < css.length;pos++) {if(css.charAt(pos) === '*' && css.charAt(pos + 1) === '/'){pos++;break;}} // Add full comment (including `/*` and `*/`) to the list of tokens:
	var comment=css.substring(start,pos + 1);pushToken(TokenType.CommentML,comment,col);var newlines=comment.split('\n');if(newlines.length > 1){ln += newlines.length - 1;col = newlines[newlines.length - 1].length;}else {col += pos - start;}} /**
	  * Parse a single line comment
	  * @param {string} css Unparsed part of CSS string
	  */function parseSLComment(css){var start=pos; // Read the string until we meet line break.
	// Since we already know first 2 characters (`//`), start reading
	// from `pos + 2`:
	for(pos += 2;pos < css.length;pos++) {if(css.charAt(pos) === '\n' || css.charAt(pos) === '\r'){break;}} // Add comment (including `//` and line break) to the list of tokens:
	pushToken(TokenType.CommentSL,css.substring(start,pos--),col);col += pos - start;} /**
	   * Convert a CSS string to a list of tokens
	   * @param {string} css CSS string
	   * @returns {Array} List of tokens
	   * @private
	   */function getTokens(css){ // Parse string, character by character:
	for(pos = 0;pos < css.length;col++,pos++) {c = css.charAt(pos);cn = css.charAt(pos + 1); // If we meet `/*`, it's a start of a multiline comment.
	// Parse following characters as a multiline comment:
	if(c === '/' && cn === '*'){parseMLComment(css);} // If we meet `//` and it is not a part of url:
	else if(!urlMode && c === '/' && cn === '/'){ // If we're currently inside a block, treat `//` as a start
	// of identifier. Else treat `//` as a start of a single-line
	// comment:
	parseSLComment(css);} // If current character is a double or single quote, it's a start
	// of a string:
	else if(c === '"' || c === "'"){parseString(css,c);} // If current character is a space:
	else if(c === ' '){parseSpaces(css);} // If current character is a punctuation mark:
	else if(c in Punctuation){ // Add it to the list of tokens:
	pushToken(Punctuation[c],c,col);if(c === '\n' || c === '\r'){ln++;col = 0;} // Go to next line
	if(c === ')')urlMode = false; // Exit url mode
	if(c === '{')blockMode++; // Enter a block
	if(c === '}')blockMode--; // Exit a block
	} // If current character is a decimal digit:
	else if(isDecimalDigit(c)){parseDecimalNumber(css);} // If current character is anything else:
	else {parseIdentifier(css);}}return tokens;}return getTokens(css);};

/***/ }
/******/ ])
});
;