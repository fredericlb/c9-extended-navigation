define(function(require, exports, module) {
    'use strict';
    
    var expandJS = require("./expand.js.js");
    var expandCSS = require("./expand.css.js");
    
    var _rangesStack = [];
    var listeningToChanges = null;
    
    var expandLangages = {
        "ace/mode/javascript": expandJS,
        "ace/mode/css": expandCSS.bind(null, "css"),
        "ace/mode/scss": expandCSS.bind(null, "scss"),
        "ace/mode/sass": expandCSS.bind(null, "sass"),
        "ace/mode/less": expandCSS.bind(null, "less"),
    };
    
    function onSelectionChange(editor) {
        _rangesStack = [];
    }
    
    var expand = function(c9) {
        var t = c9.tabManager.focussedTab;
        var editor = t.editor.ace;
        var content = t.document.value;
        
        var selectionRange = editor.getSelectionRange();
        var currentMode = t.editor.ace.session.getMode().$id;
        
        if (expandLangages[currentMode] === undefined) {
            console.error("Expand selection is not available for " + currentMode);
            return;
        }
        
        var range = expandLangages[currentMode](content, selectionRange, c9);
        
        if (range !== null) {
            _rangesStack.push(selectionRange);
            var save = _rangesStack;
            
            editor.selection.setSelectionRange(range);

            if (listeningToChanges === null) {
                listeningToChanges = onSelectionChange.bind(null, editor);
                editor.getSession().selection.on('changeSelection', listeningToChanges);
            }

            var event = {
                originalRange: selectionRange,
                range: range
            };
            
            _rangesStack = save;
            c9.emit("expanded", event);
        }
    };
    
    var shrink = function(c9) {
        var t = c9.tabManager.focussedTab;
        var editor = t.editor.ace;
        
        if (_rangesStack.length === 0) {
            return;
        }
        var save = _rangesStack;
        
        var selectionRange = editor.getSelectionRange();
        var targetRange = _rangesStack.pop();
        editor.selection.setSelectionRange(targetRange);
        
        var event = {
            originalRange: selectionRange,
            range: targetRange
        };
        
        _rangesStack = save;
        c9.emit("shrank", event);
    };
    
    
    module.exports = { 
        expand: expand,
        shrink: shrink
    };
    
});
