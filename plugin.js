define(function(require, exports, module) {
    main.consumes = [
        "Plugin", "commands", "ace",
        "tabManager"
    ];
    main.provides = ["extnav"];

    return main;
    
    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var AceRange = require("ace/range").Range;
        var commands = imports.commands;
        var tabManager = imports.tabManager;
        
        var actions = require("./src/expand.core.js");
        
        
        /***** Initialization *****/
        
        var plugin = new Plugin("Ajax.org", main.consumes);
        var emit = plugin.getEmitter();
        
        function load() {
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
        }
        

        /***** Lifecycle *****/
        
        plugin.on("load", function() {
            load();
        });
        plugin.on("unload", function() {
        });
        
        
        /***** Register and define API *****/

        plugin.freezePublicAPI({
            _events: [
                "expanded",
                "shrank"
            ],
            
            expand: actions.expand,
            shrink: actions.shrink,
        });
        
        register(null, {
            "extnav": plugin
        });
    }
    
});