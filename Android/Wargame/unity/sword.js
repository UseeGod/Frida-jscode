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
        BrickGetCoin(); //44902 line (코인 획득 설정)
        //BallUpgrade(); //231477 line (검 강화 설정);
        //SkillValue(); // (스킬 속도 변경)
        //BallBase(); /// 229067 line (게임 중 칼 공격력 설정)
        //SmithyValue();
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


function BallUpgrade() {
    Interceptor.attach(il2cpp.add(0x11051CC), {
        onEnter: function (args) {
            this.instance = args[0];

            var damagelevel = this.instance.add(0x18);
            //console.log("Damage value = " + damagelevel.readInt());
            damagelevel.writeInt(100); // 검 강화 맥스레벨 변경 (default 100)

            var damagemultiple = this.instance.add(0x10);
            //console.log("damagemultiple value = " + damagemultiple.readFloat());
            damagemultiple.writeFloat(100); // 강화 시 데미지 올라가는 퍼센트 변경 (defulat 0.4)

        }
    })
}

function SkillValue() { //line 231571
    Interceptor.attach(il2cpp.add(0x10D6E18), {
        onEnter: function (args) {
            console.log("GetSkillInfo is calling");
            this.instance = args[0];

            var skillMoveSpeed = this.instance.add(0x20)
            console.log("skillMoveSpeed value = " + skillMoveSpeed.readFloat());
            skillMoveSpeed.writeFloat(800); // 스킬 속도 변경 (defulat 800)
        },
        onLeave: function (retval) {
        }
    })

    // Interceptor.attach(il2cpp.add(0x10D78C4), {
    //     onEnter: function (args) {
    //         console.log("Initiallize is calling");
    //     },
    //     onLeave: function (retval) {
    //         console.log("Initiallize  calling");
    //     }
    // })

}

function BallBase() { //line 229070
    // update = 게임 상시 후킹
        Interceptor.attach(il2cpp.add(0x10FCA78),{
        onEnter:function(args){
            this.instance = args[0];
            var nDamage = this.instance.add(0x20);
            //console.log("nDamage value = " + nDamage.readLong());
            //nDamage.writeInt(100000);

            //var nSpeed = this.instance.add(0x28);
            //console.log("nSpeed value = " + nSpeed.readFloat());
            //nSpeed.writeFloat(650); // 칼 속도 변경
        },
        onLeave: function(retval) {
        }
    })

    //pause = 일시정지 했을떄 후킹
    // Interceptor.attach(il2cpp.add(0x10FCCFC),{
    //     onEnter:function(args){
    //         console.log(".Pause is calling");
    //         this.instance = args[0];
    //         var nDamage = this.instance.add(0x20);
    //         nDamage.writeInt(100000);
    //     },
    //     onLeave: function(retval) {
    //     }
    // })
}

function SmithyValue() { // ctor = -u -f 로 시작시 프로그램 시작할때 호출 됨
    Interceptor.attach(il2cpp.add(0x10D9AC0), {
        onEnter:function(args){
            console.log("SmithyValue is calling");
            this.instance = args[0];
            var gradeUpMultipleLevel = this.instance.add(0x48);
            console.log("gradeUpMultipleLevel value " + gradeUpMultipleLevel.readInt());
            var gradeUpMultipleValue = this.instance.add(0x4C);
            console.log("gradeUpMultipleValue = " + gradeUpMultipleValue.readFloat());
        },
        onLeave:function(retval){
            console.log("SmithyValue was calling");
        }
    })
}
