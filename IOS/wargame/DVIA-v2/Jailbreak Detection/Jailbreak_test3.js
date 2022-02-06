//DVIA-v2 탈옥우회 (3)
// 비교값 주소값 찾아서 리턴값 우회
var realBase = Module.findBaseAddress('DVIA-v2');
console.log("리얼베이스 주소값 : " + realBase);

var Jailbreak_address = realBase.add('0x1959DC'); 
console.log("if/else 비교 주소 : " + Jailbreak_address);

Interceptor.attach(Jailbreak_address, {
    onEnter: function(args) {
        console.log(JSON.stringify(this.context)); //값들이 JSON 형태로 예쁘게 출력됨
        this.context.x8 = 0x0
        console.log(JSON.stringify(this.context)); 
    }
})