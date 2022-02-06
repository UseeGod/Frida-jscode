setImmediate(function () {
    Java.perform(function () {
        //Challenge01
        var chall_01 = Java.use("uk.rossmarks.fridalab.challenge_01");
        chall_01.chall01.value = 1;
        console.log("[*] solved challenge 01");

        //Challenge02
        Java.choose("uk.rossmarks.fridalab.MainActivity", {
            onMatch: function (chall_02) { //MainActivity의 인스턴스찾았다면 chall_02로 받음
                chall_02.chall02();
            },
            onComplete: function () {
                console.log("[*] solved challenge 02");
            }
        })

        //Challenge03
        var chall_03 = Java.use("uk.rossmarks.fridalab.MainActivity");
        chall_03.chall03.implementation = function () {
            console.log("[*] solved challenge 03");
            return true;
        }

        //Challenge04
        Java.choose("uk.rossmarks.fridalab.MainActivity", {
            onMatch: function (chall_04) {
                chall_04.chall04("frida");
            },
            onComplete: function () {
                console.log("[*] solved challenge 04");
            }
        })


        //Challenge05
        var chall_05 = Java.use("uk.rossmarks.fridalab.MainActivity");
        chall_05.chall05.overload("java.lang.String").implementation = function (arg) {
            this.chall05("frida");
            console.log("[*] solved challenge 05");
        }

    })
})