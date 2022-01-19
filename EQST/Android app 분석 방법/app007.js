setImmediate(function() {
    Java.perform(function() {
        var didHookApis = false;

        //so파일이 실행되었을때 so_hook 함수 진행
        Interceptor.attach(Module.findExportByName(null,'dlopen'), {
            onEnter: function(args) {
                this.path = Memory.readUtf8String(args[0]);
                console.log(this.path);
            },
            onLeave: function(retval){
                if(!retval.isNull() && this.path.indexOf("/lib/arm64-v8a/libnative-lib.so") !== -1 && !didHookApis) {
                    didHookApis = true;
                    console.log("File loaded hooking");
                    so_hook();
                }
            }
        })

        //후킹 함수 작성
         function so_hook() {
             var so_target = Module.findExportByName("/lib/arm64-v8a/libnative-lib.so","Java_com_eqst_lms_base11_MainActivity_koalavsmonkey");
             Interceptor.attach(so_target, {
                 onLeave: function(retval){
                     console.log("This is called");
                     console.log("Return value =" + retval);
                 }

             })
         }
    })
})