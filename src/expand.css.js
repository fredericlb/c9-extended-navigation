define(function(require, exports, module) {
    
    var gonzales = require("../ext/gonzales.js");
    var walk = require("./expand.walk.js");
    
    module.exports = function(mode, content, selectionRange, c9) {
        var ast = gonzales.parse(content, {syntax: mode});
        
        function getNodeRange(node) {
            var nodeStart = node.start;
            var nodeEnd = node.end;
            return new c9.AceRange(nodeStart.line - 1, nodeStart.column - 1, 
                nodeEnd.line - 1, nodeEnd.column );
        }
        
        var node = walk(ast, selectionRange, {
            getNodeRange: getNodeRange,
            getChildrenOfNode: function(node) {
                if (node.content instanceof Array) {
                    return node.content;
                } else {
                    return [];
                }
            }
        });
        
        if (node !== null) {
            return getNodeRange(node);
        }
        
        return null;        
    };
    
});