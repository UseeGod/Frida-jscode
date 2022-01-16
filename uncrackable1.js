setImmediate(function(){
    Java.perform(function(){
        var bypass = Java.use("sg.vantagepoint.a.c");
        bypass.a.implementation = function(){
            // 기존의 a 함수 실행
            var ret = this.a();
            //console.log("A result :" + ret);
            // a의 리턴값 false로 변경
            ret = false;
            return ret;
        }

        bypass.b.implementation = function(){
            var ret = this.b();
            console.log("B result :" + ret);
            return ret;
        }

        bypass.c.implementation = function(){
            var ret = this.c();
            console.log("C result :" + ret);
            return ret;
        }
    })
})