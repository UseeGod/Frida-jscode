setImmediate(function() {
    Java.perform(function() {
        var bypass = Java.use("com.eqst.lms.rooting2.MainActivity");
        bypass.rootcheck1.implementation = function() {
            console.log("루팅 파일 탐지 우회");
            return false;
        }

        bypass.rootcheck3.implementation = function() {
            console.log("busybox 명령 실행 탐지 우회");
            return false;
        }
    })
})