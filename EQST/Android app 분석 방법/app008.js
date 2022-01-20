setImmediate(function() {
    Java.perform(function(){
      var bypass = Java.use("kotlin.jvm.internal.Intrinsics");
      var main = Java.use("com.eqst.lms.base12.SplashActivity");
      bypass.areEqual.overload("java.lang.Object","java.lang.Object").implementation = function(arg1,arg2) {
        console.log("파라미터1 전달값 : " + arg1,"파라미터 2 전달값 : " +arg2);
        return true;
      }
    })
})