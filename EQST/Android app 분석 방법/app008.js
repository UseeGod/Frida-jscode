setImmediate(function() {
    Java.perform(function(){
        Interceptor.attach(Module.findExportByName("/lib/arm64-v8a/libnative-lib", "open"), {
            onEnter: function(args) {
              this.flag = false;
              var filename = Memory.readCString(ptr(args[0]));
              console.log('filename =', filename)
              if (filename.endsWith(".xml")) {
                this.flag = true;
                var backtrace = Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\n\t");
                console.log("file name [ " + Memory.readCString(ptr(args[0])) + " ]\nBacktrace:" + backtrace);
              }
            },
            onLeave: function(retval) {
              if (this.flag) // passed from onEnter
                console.warn("\nretval: " + retval);
            }
          });
    })
})