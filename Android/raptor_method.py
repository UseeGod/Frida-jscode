import sys
import frida

def on_message(message,data):
 print("[%s] -> %s" % (message, data))

PACKAGE_NAME = sys.argv[1]

jscode = """
Java.perform(function(){
 var pattern = \""""+sys.argv[1]+"""\"
 

 Java.enumerateLoadedClasses({
  onMatch:function(aClass) {
   var pattern2 = pattern.split('.');
   var temp = pattern2[0]+"."+pattern2[1];
   if (aClass.match(temp)) {
    traceClass(aClass);
   }
  },
  onComplete: function() {}
 });
 
 function traceClass(targetClass){
  var hook = Java.use(targetClass);
  var methods = hook.class.getDeclaredMethods();
  hook.$dispose;

  var parsedMethods=[];
  methods.forEach(function(method) {

   parsedMethods.push(method.toString().replace(targetClass + ".", "TOKEN").match(/\sTOKEN(.*)\(/)[1]);
   traceMethod(targetClass+"."+method.toString().replace(targetClass + ".", "TOKEN").match(/\sTOKEN(.*)\(/)[1]);
  });
 }


 function traceMethod(targetClassMethod){

  var delim = targetClassMethod.lastIndexOf(".");
  if (delim === -1){ return;}
  var targetClass = targetClassMethod.slice(0, delim);
  var targetMethod = targetClassMethod.slice(delim + 1, targetClassMethod.length);
  
  var hook = Java.use(targetClass);
  var overloadCount = hook[targetMethod].overloads.length;

  for(var i=0;i<overloadCount;i++){
   hook[targetMethod].overloads[i].implementation=function(){

    console.log("***Entered Method is : "+targetClass+"."+targetMethod);

    var retval = this[targetMethod].apply(this, arguments);
    return retval;
   }
  }
 }

 function traceMainActivity(MainActivity){
  
  var throwable = Java.use('java.lang.Throwable');
  var Main = Java.use(MainActivity);
  Main.$init.implementation=function(a){
   throwable2 = throwable.$new();
   Stack = throwable2.getStackTrace();
   for(var i=0;i<Stack.length;i++){
    console.log(Stack[i].getClassName()+"."+getMethodName());
   }
  }
 }
});
"""
 
try:
 device = frida.get_usb_device()
 pid = device.spawn([PACKAGE_NAME])
 print(("App is starting ... pid : {}".format(pid)))
 process = device.attach(pid)
 device.resume(pid)
 script = process.create_script(jscode)
 script.on('message',on_message)
 print('[*] Running Frida')
 script.load()
 sys.stdin.read()
except Exception as e:
 print(e)
