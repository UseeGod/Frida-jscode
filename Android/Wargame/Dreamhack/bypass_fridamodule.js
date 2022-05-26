function modifyReadLineRet() {
    Java.perform(function() {
        var File = Java.use("java.io.File");
        var constructor = File.$init.overload("java.lang.String");

        constructor.implementation = function(pathname){
            if(pathname == "/proc/self/maps") {
                pathname = "/none"
                console.log("모듈우회");
            }
            return constructor.call(this,pathname)
        }
    })
}

// function modifyReadLineRet() {
//     Java.perform(function() {
//         var File = Java.use("java.io.File");
//         var constructor = File.$init.overload("java.lang.String");

//         constructor.implementation = function(pathname) {
//             if(pathname == "/proc/self/maps") {
//                 var BufferedReader = Java.use("java.io.BufferedReader");
//                 var readLine = BufferedReader.readLine.overload();

//                 readLine.implementation = function() {
//                     var ret = readLine.call(this);
//                     if (ret.includes("frida"))
//                     ret = "";
//                     return ret;
//                 }
//             }
//             return constructor.call(this,pathname)
//         }
//     })
// }

// function modifyReadLineRet(){
//     Java.perform(function() {
//         var File = Java.use("java.io.File");
//         var constructor = File.$init.overload('java.lang.String');
    
//         constructor.implementation = function(pathname) {
//             if (pathname == "/proc/self/maps") {
//                 var BufferedReader = Java.use("java.io.BufferedReader");
//                 var readLine = BufferedReader.readLine.overload();
    
//                 readLine.implementation = function() {
//                     var ret = readLine.call(this);
//                     if (ret.includes("frida"))
//                         ret = "";
//                     return ret;
//                 };
//             }
//             return constructor.call(this, pathname);
//         };
//     });
// }


modifyReadLineRet();