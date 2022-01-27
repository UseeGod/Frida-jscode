setImmediate(function(){
    Java.perform(function() {
        Java.choose("com.eqst.lms.base13.MainActivity", {
            onMatch: function(show) {
                //MainActivity에서 callthisfunction 인스턴스를 호출 시도
                show.callthisfunction();
            },
            onComplete: function(){
                console.log("함수 호출");
            }
        })
    })
})