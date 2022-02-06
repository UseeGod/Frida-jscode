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
                if(!retval.isNull() && this.path.indexOf("libtool-checker.so") !== -1 && !didHookApis) {
                    didHookApis = true;
                    console.log("File loaded hooking");
                    so_hook();
                }
            }
        });

        //후킹 함수 작성
         function so_hook() {
             var so_target = Module.findExportByName("libtool-checker.so","Java_com_scottyab_rootbeer_RootBeerNative_checkForRoot");
             Interceptor.attach(so_target, {
                 onLeave: function(retval){
                     console.log("This is called");
                     console.log("Return value =" + retval);
                 }

             })
         }
    })
})