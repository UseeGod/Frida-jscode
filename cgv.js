setImmediate(function () {
    Java.perform(function () {
        var root = Java.use("com.cjs.cgv.movieapp.intro.systemprocess.RootingCheckProcess");
        root.checkRootingDevice.implementation = function(){
            console.log("루팅 우회")
            return false;
        }
    })
})