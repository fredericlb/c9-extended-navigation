/* I'm currently having issues running cloud9 tests, but no worries once this is
   resolved I will implement them :) */

define(function(require, exports, module) {
    main.consumes = ["plugin.test", "expand"];
    main.provides = [];
    return main;


    function main(options, imports, register) {
        var test = imports["plugin.test"];
        var expand = imports.expand;
        
        var describe = test.describe;
        var it = test.it;
        var before = test.before;
        var after = test.after;
        var beforeEach = test.beforeEach;
        var afterEach = test.afterEach;
        var assert = test.assert;
        var expect = test.expect;
        
        /***** Initialization *****/
        
        describe("c9-extended-navigation", function(){
            this.timeout(2000);
            
            beforeEach(function() {
            });
        
            afterEach(function () {
            });
            
            it("should expand correctly on valid ES5 syntax", function() {
                var snippet = "var x = 5";
                
            });
            
        });
        
        register(null, {});
    }
});