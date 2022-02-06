// DVIA-v2 탈옥우회 (2)
if(ObjC.available) { //ObjC가 사용 가능하다면 아래문구 실행
    var classname = "JailbreakDetection"
    var methodsname = "isJailbroken"
    var hook = ObjC.classes[classname][methodsname] 

    Interceptor.attach(hook.implementation, { 
        onLeave: function(retval) { //반환값을 확인하기 위해서는 onLeave 사용
            console.log("Class name = " + classname)
            console.log("Method name = " + methodsname)
            console.log("Type of return value = " + hook.returnType)
            console.log("return vaule = " + retval)

            var new_retval = ptr("0x0")//native pointer 형식으로 넣어줘야 메모리값에 들어감
            retval.replace(new_retval)
            console.log("return vaule = " + retval)
        }
    })
}