function modifySocketParameter() {
    Java.perform(function() {
        var Socket = Java.use("java.net.Socket");
        var constructor = Socket.$init.overload('java.lang.String','int');

        constructor.implementation = function(hostname,port) {
            if(hostname == "127.0.0.1" && 26000 <= port && port < 27500){
                port=1234;
            }
            return constructor.call(this,hostname,port);
        };
    });
}

modifySocketParameter();