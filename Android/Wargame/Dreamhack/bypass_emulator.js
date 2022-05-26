function modifyCheckFiles(){
    Java.perform(function() {
        var EmulatorDetector = Java.use("android.com.dream_detector.EmulatorDetector")
        var checkFiles = EmulatorDetector.checkFiles.overload('[Ljava.lang.String;');

        checkFiles.implementation = function(files) {
            var emulator_files_not_exists = [ "/not_exist", "/bypass_emulator_check"];
            return checkFiles.call(thos,emulator_files_not_exists);
        }
    })
}

modifyCheckFiles();