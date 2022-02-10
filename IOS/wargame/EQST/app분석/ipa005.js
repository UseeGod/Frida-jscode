var realBase = Module.findBaseAddress('app005');
console.log("리얼베이스 주소값 : " + realBase);

var Jailbreak_address = realBase.add('0xB938');
console.log("if/else 비교 주소 : " + Jailbreak_address);

Interceptor.attach(Jailbreak_address, {
    onEnter: function (args) {
        console.log(JSON.stringify(this.context));
        this.context.x0 = 0x1
        console.log(JSON.stringify(this.context));
    }
})