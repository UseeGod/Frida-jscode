var realBase = Module.findBaseAddress('DVIA-v2');
console.log("리얼베이스 주소값 : " + realBase);

var runtime_address = realBase.add('0x15E3E0');
console.log("if/else 비교 주소 : " + runtime_address);

function padToFour(number) {
    if (number <= 9999) {
        number = ("000" + number).slice(-4) // 앞에 000을 붙이고 뒤에서 4자리만 출력
        return String(number)
    }
}

Interceptor.attach(runtime_address, {
    onEnter: function (args) {
        // console.log(JSON.stringify(this.context));
        console.log("x8: " + this.context.x8);
        console.log("x9: " + this.context.x9);

        this.context.x8 = this.context.x9

        console.log("new x8" + this.context.x8)
        console.log("new x9" + this.context.x9)
    }
})