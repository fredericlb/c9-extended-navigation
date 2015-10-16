define(function(require, exports, module) {
    
    var acorn = require('../ext/acorn-jsx.js')(require("../node_modules/acorn/dist/acorn.js"));
    
    // FIXME Can't load acorn_loose if acorn is not in the global object
    window.acorn = acorn;
    var acorn_loose = require('../node_modules/acorn/dist/acorn_loose.js');
    var walk = require("./expand.walk.js");
    
    module.exports = function(content, selectionRange, c9) {
        function getNodeRange(node) {
            var nodeStart = node.loc.start;
            var nodeEnd = node.loc.end;
            return new c9.AceRange(nodeStart.line - 1, nodeStart.column, 
                nodeEnd.line - 1, nodeEnd.column);
        }
        
        var acornOptions = {
            locations: true,
            plugins: { jsx: true },
            ecmaVersion: 6
        };
        
        var ast = null;
        
        try { 
            ast = acorn.parse(content, acornOptions);
        } catch(e) {
            console.warn("Syntax error returned by acorn, forcing failsafe parsing");
            ast = acorn_loose.parse_dammit(content, acornOptions);
        }
        
        var node = walk(ast, selectionRange, {
            isValidNode: function(node) {
                return node.loc instanceof acorn.SourceLocation;
            },
            getNodeRange: getNodeRange,
            getChildrenOfNode: function(node) {
                var subnodes = [];
                Object.keys(node).forEach(function(subKey) {
                    var nodes = node[subKey];
                    if (nodes instanceof Array) {
                        nodes.forEach(function(subNode) {
                            if (subNode === null) {
                                return;
                            }
                            subnodes.push(subNode);
                        });
                    } else if (nodes != null) {
                        subnodes.push(nodes);
                    }
                });
                
                return subnodes;
            }
            
        });
        
        if (node !== null) {
            return getNodeRange(node);
        }
        
        return null;        
    }
});