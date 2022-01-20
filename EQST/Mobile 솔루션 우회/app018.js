setImmediate(function() {
    Java.perform(function() {
        Java.choose("com.eqst.lms.solution1.SplashActivity", {
            onMatch: function(instance) {
                instance.run();
            },
            onComplete: function(){
                console.log("런 실행");
            }
        })

    })
})