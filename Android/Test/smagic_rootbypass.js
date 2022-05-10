function bypass() {
    Java.perform(function() {
        var rootbeer = Java.use("com.scottyab.rootbeer.d");
        rootbeer.a.overload("java.util.List").implementation = function() {
            return false;
        }
        // rootbeer.a.overload("boolean").implementation = function() {
        //     return false;
        // }
        rootbeer.a.overload("java.lang.String").implementation = function() {
            return false;
        }
        rootbeer.a.overload("[Ljava.lang.String;").implementation = function() {
            return false;
        }
        rootbeer.b.overload().implementation = function() {
            return false;
        }
        rootbeer.b.overload("[Ljava.lang.String;").implementation = function() {
            return false;
        }
        rootbeer.c.overload().implementation = function() {

            return false;
        }
        rootbeer.b.overload("[Ljava.lang.String;").implementation = function() {
            return false;
        }
        rootbeer.d.overload().implementation = function() {
            return false;
        }
        rootbeer.e.overload().implementation = function() {
            return false;
        }
        rootbeer.f.overload().implementation = function() {
            return false;
        }
        rootbeer.g.overload().implementation = function() {
            return false;
        }
        rootbeer.h.overload().implementation = function() {
            return false;
        }
        rootbeer.i.overload().implementation = function() {
            return false;
        }
        rootbeer.j.overload().implementation = function() {
            return false;
        }
        rootbeer.k.overload().implementation = function() {
            return false;
        }
        rootbeer.l.overload().implementation = function() {
            return false;
        }
        rootbeer.m.overload().implementation = function() {
            return false;
        }
        rootbeer.n.overload().implementation = function() {
            return false;
        }
        rootbeer.o.overload().implementation = function() {
            return false;
        }
    })
}

bypass();