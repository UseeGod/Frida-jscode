setImmediate(function() {
    Java.perform(function() {
        var bypass = Java.use("com.eqst.lms.solution1.SplashActivity");
        bypass.run.implementation = function() {
            this.A();
            console.log("A 실행");
        }
    })
})