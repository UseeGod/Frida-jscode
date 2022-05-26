function modifyFilePath(){
    Java.perform(function() {
        var File = Java.use("java.io.File");
        var constructor = File.$init.overload('java.lang.String');
    
        constructor.implementation = function(pathname) {
            if (pathname == "/data/local/tmp")
                return constructor.call(this, "/not_exists");
            return constructor.call(this, pathname);
        };
    });
}

modifyFilePath();