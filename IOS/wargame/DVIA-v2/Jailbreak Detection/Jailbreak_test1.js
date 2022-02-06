//DVIA-v2 탈옥우회 (1)
var realBase = Module.findBaseAddress('DVIA-v2');
console.log("리얼베이스 주소값 : " + realBase);

var Jailbreak_address = realBase.add('0x1cbdd0'); 
console.log("if/else 비교 주소 : " + Jailbreak_address);

Interceptor.attach(Jailbreak_address, {
    onEnter: function(args) {
        console.log(JSON.stringify(this.context)); //값들이 JSON 형태로 예쁘게 출력됨
        this.context.x0 = 0x0
        console.log(JSON.stringify(this.context)); 
    }
})