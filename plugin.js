define(function(require, exports, module) {
    main.consumes = [
        "Plugin", "commands", "ace",
        "tabManager"
    ];
    main.provides = ["expand"];

    return main;
    
    function main(options, imports, register) {
        //var AceRange = require("ace/range").Range;
        var c9Global = {
            consumes: main.consumes,
            deps: imports
        };

        register(null, {
            "expand": require("./src/expand.js")(c9Global)
        });
    }
    
});