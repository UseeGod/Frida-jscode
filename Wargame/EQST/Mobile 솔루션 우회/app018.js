setImmediate(function () {
    Java.perform(function () {
        var bypass = Java.use("android.app.Activity");
        bypass.finish.overload().implementation = function () {
            console.log("finish 우회");
        }

        var rootcheck = Java.use("com.eqst.lms.solution1.SplashActivity");
        rootcheck.rootcheck1.implementation = function () {
            console.log("rootcheck 우회");
            return false;
        }

    })
})