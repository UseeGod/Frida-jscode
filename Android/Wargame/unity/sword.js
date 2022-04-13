function awaitForCondition(callback) {
    var i = setInterval(function () {
        var addr = Module.findBaseAddress('libil2cpp.so');
        //console.log("Address found:", addr);
        if (addr) {
            clearInterval(i);
            callback(+addr);
        }
    }, 0);
}

var il2cpp = null;

Java.perform(function () {
    awaitForCondition(function (base) {
        il2cpp = ptr(base);
        //BrickGetCoin(); //44902 line
        WarUpgrade(); //46122 line
    })
})

function BrickGetCoin() {
    Interceptor.attach(il2cpp.add(0x01107A74), {
        onEnter: function (args) {
            this.instance = args[0];

            var coin = this.instance.add(0x30);
            coin.writeLong(1000); // 몬스터를 잡을때 획득하는 코인 수 조절
        }
    })
}

function WarUpgrade() {
    Interceptor.attach(il2cpp.add(0x00665384), {
        onEnter: function (args) {
            this.instance = args[0];

            var fire = this.instance.add(0x10);
            console.log(fire.readByteArray(100));

        }
    })
}
