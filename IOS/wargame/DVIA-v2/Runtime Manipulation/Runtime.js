if(ObjC.available){
    var classname = "LoginValidate"
    var methods = "isLoginValidated"
    var hook = ObjC.classes[classname][methods]

    Interceptor.attach(hook.implementation, {
        onLeave: function(retval) {
            console.log("class name = " + classname);
            console.log("methods name = " + methods);
            console.log("Type of return value = " + hook.returnType)
            console.log("return value = " + retval);

            var new_retval = ptr("0x1") 
            retval.replace(new_retval);
            console.log("return value = " + retval);
        }
    })

}