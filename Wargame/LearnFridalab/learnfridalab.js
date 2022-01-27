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

        //readFieldInt();
        //readFieldBool();
        //readFieldString();
        //readFieldFloat();
        //readFieldArray();
        //readFieldList();
        readFieldListStr();

    })
})

function readFieldInt() {
    Interceptor.attach(il2cpp.add(0x00667F14), {
        onEnter: function (args) {
            console.log("ShowResult is calling");
            this.instance = args[0]
            var a = this.instance.add(0x18)
            console.log("value of a = ", a.readInt());
            //console.log(a.readByteArray(100));
            a.writeInt(100);
        }
    })
}

function readFieldBool() {
    Interceptor.attach(il2cpp.add(0x00667F14), {
        onEnter: function (args) {
            console.log("ShowResult is calling");
            this.instance = args[0]
            var b = this.instance.add(0x1C)
            console.log("value of b = ", b.readInt());
            //console.log(b.readByteArray(100));
            b.writeInt(1); // True, false value
        }
    })
}

function readFieldString() {
    Interceptor.attach(il2cpp.add(0x00667F14), {
        onEnter: function (args) {
            console.log("ShowResult is calling");
            this.instance = args[0]
            var str = this.instance.add(0x20).readPointer().add(0x14);
            console.log("value of string = ", str.readUtf16String());
            //console.log(str.readByteArray(100));
            str.writeUtf16String("so very change str");
        }
    })
}

function readFieldFloat() {
    Interceptor.attach(il2cpp.add(0x00667F14), {
        onEnter: function (args) {
            console.log("ShowResult is calling");
            this.instance = args[0]
            var c = this.instance.add(0x28);
            console.log("value of Float = ", c.readFloat());
            console.log(c.readByteArray(100));
            c.writeFloat(22.2222)
        }
    })
}

function readFieldArray() {
    Interceptor.attach(il2cpp.add(0x00667F14), {
        onEnter: function (args) {
            console.log("ShowResult is calling");
            this.instance = args[0]
            var ar = this.instance.add(0x30).readPointer();
            console.log("value of Array = ", ar.add(0x18).readInt());
            console.log("Array 0 = ", ar.add(0x20).readInt());
            console.log("Array 1 = ", ar.add(0x24).readInt());
            console.log("Array 2 = ", ar.add(0x28).readInt());
            console.log(ar.readByteArray(100));

            ar.add(0x20).writeInt(2);
            ar.add(0x24).writeInt(22);
            ar.add(0x28).writeInt(222);
        }
    })
}

function readFieldList() {
    Interceptor.attach(il2cpp.add(0x00667F14), {
        onEnter: function (args) {
            console.log("ShowResult is calling");
            this.instance = args[0]
            var listInt = this.instance.add(0x38).readPointer().add(0x10).readPointer();
            console.log(listInt.readByteArray(100));
            //console.log("value of List int : ",listInt.add(0x18).readInt());
            console.log("list 0 : ", listInt.add(0x20).readInt());
            console.log("list 1 : ", listInt.add(0x24).readInt());
            console.log("list 2 : ", listInt.add(0x28).readInt());

            listInt.add(0x20).writeInt(2);
            listInt.add(0x24).writeInt(22);
            listInt.add(0x28).writeInt(222);
        }
    })
}

function readFieldListStr() {
    Interceptor.attach(il2cpp.add(0x00667F14), {
        onEnter: function (args) {
            console.log("ShowResult is calling");
            this.instance = args[0]
            var listStr = this.instance.add(0x40).readPointer().add(0x10).readPointer();
            console.log(listStr.readByteArray(100));
            //console.log("value of List Str : ",listStr.add(0x18).readInt());
            console.log("list 0 : ", listStr.add(0x20).readUtf16String());
            console.log("list 1 : ", listStr.add(0x24).readUtf16String());
            console.log("list 2 : ", listStr.add(0x28).readUtf16String());

            //listInt.add(0x20).writeInt(2);
            //listInt.add(0x24).writeInt(22);
            //listInt.add(0x28).writeInt(222);
        }
    })
}