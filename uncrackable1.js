setImmediate(function(){
    Java.perform(function(){
        var bypass = Java.use("sg.vantagepoint.a.c");
        bypass.a.implementation = function(){
            console.log("a 루팅탐지 우회");
            return false;
        }
    })
})