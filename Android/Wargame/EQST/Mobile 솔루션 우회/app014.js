setImmediate(function() {
    Java.perform(function() {
        var bypass = Java.use("com.eqst.lms.rooting1.MainActivity");
        bypass.rootcheck1.implementation = function(){
            console.log("루팅 파일 탐지 우회");
            return false;
        }

        bypass.rootcheck3.implementation = function(){
            console.log("Busybox 명령 실행 탐지 우회");
            return false;
        }

        bypass.rootcheck5.implementation = function() {
            console.log("디렉토리 마운트 탐지 우회");
            return false;
        }
    })
})