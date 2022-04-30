function modifyCheckPackageRet() {
    Java.perform(function() {
        var RootingDetector = Java.use("android.com.dream_detector.RootingDetector");
        RootingDetector.checkRootingPackage.implementation = function() {
            return false;
        };
    });
}

function modifySuCheck() {
    Java.perform(function() {
        var RootingDetector = Java.use("android.com.dream_detector.RootingDetector");
        RootingDetector.checkSuBinary.implementation = function() {
            return false;
        };
    });
}

function modifyKnownPackagesVal() {
    Java.perform(function() {
        var Constants = Java.use("android.com.dream_detector.Constants");
        var str_arr = Java.array('java.lang.String',[""]);
        Constants.knownRootAppsPackages.value = str_arr;
    });
}
modifyCheckPackageRet();
modifyKnownPackagesVal();
modifySuCheck();