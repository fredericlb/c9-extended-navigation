define(function(require, exports, module) {
    
    return function(c9) {
        var consumes = c9.consumes;
        var imports = c9.deps;
        var Plugin = imports.Plugin;
        var commands = imports.commands;
        var tabManager = imports.tabManager;
        
        //
        var AceRange = require("ace/range").Range;
        var actions = require("./expand/expand.core.js");
        
        var plugin = new Plugin("Ajax.org", consumes);
        var emit = plugin.getEmitter();
        
        
        plugin.on("load", function() {
            commands.addCommand({
                name: "expandselection",
                bindKey: { mac: "Alt-Up", win: "Alt-l" },
                isAvailable: function(){ return true; },
                exec: function() { actions.expand({
                    tabManager: tabManager,
                    AceRange: AceRange,
                    emit: emit
                }) }
            }, plugin);
            commands.addCommand({
                name: "shrinkselection",
                bindKey: { mac: "Alt-Down", win: "Alt-Shift-l" },
                isAvailable: function(){ return true; },
                exec: function() { actions.shrink({
                    tabManager: tabManager,
                    AceRange: AceRange,
                    emit: emit
                }) }
            }, plugin);
        });
        
        plugin.on("unload", function() {
        });
        
        plugin.freezePublicAPI({
            _events: [
                "expanded",
                "shrank"
            ],
            
            expand: actions.expand,
            shrink: actions.shrink,
        });
        
        plugin.deps = [];
        return plugin;
    };
});