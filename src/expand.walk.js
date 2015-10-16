define(function(require, exports, module) {
    
    module.exports = function walk(node, selectionRange, functions) {
        if (functions.isValidNode && !functions.isValidNode(node)) {
            return null;
        }
        
        var nodeRange = functions.getNodeRange(node);
        var contains = false;
        if (selectionRange.isEmpty()) {
            contains = nodeRange.contains(selectionRange.start.row, selectionRange.start.column);
        } else {
            contains = nodeRange.containsRange(selectionRange) && !nodeRange.isEqual(selectionRange);
        }
        
        if (!contains) {
            return null;
        }
        
        var subnodes = functions.getChildrenOfNode(node).map(function(subNode) {
            return walk(subNode, selectionRange, functions);
        }).filter(function(n){ return n !== null; });
        
        var out = node;
        if (subnodes.length > 1) {
            console.warn("Found multiple nodes during expand, returning first");
            out = subnodes[0];
        } else if (subnodes.length === 1) {
            out = subnodes[0];
        }
        return out;
    }
    
});