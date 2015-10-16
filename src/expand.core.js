define(function(require, exports, module) {
    
    var expandJS = require("./expand.js.js");
    var expandCSS = require("./expand.css.js");
    
    var expandLangages = {
        "ace/mode/javascript": expandJS,
        "ace/mode/css": expandCSS.bind(null, "css"),
        "ace/mode/scss": expandCSS.bind(null, "scss"),
        "ace/mode/sass": expandCSS.bind(null, "sass"),
        "ace/mode/less": expandCSS.bind(null, "less"),
    };
    
    module.exports = function(c9) {
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
            editor.selection.setSelectionRange(range);
            
            var event = {
                originalRange: selectionRange,
                range: range
            };
            
            c9.emit("expanded", event);
        }
    };
    
});
