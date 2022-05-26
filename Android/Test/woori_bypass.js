// function bypass() {
//     Java.perform(function() {
//         let EversafeThreat = Java.use("kr.co.everspin.eversafe.EversafeThreat");
//         EversafeThreat.$init.overload('org.json.JSONObject').implementation = function(jSONObject){
//             console.log('$init is called');
//             let ret = this.$init(jSONObject);
//             console.log('$init ret value is ' + ret);
//             return ret;
//         };

//     })
// }

// bypass()

// function test(){
//     let BaseActivity = Java.use("com.wooribank.smart.npib.ui.BaseActivity");
//     BaseActivity.finishApp.implementation = function(){
//         console.log('finishApp is called');
//         let ret = this.finishApp();
//         console.log('finishApp ret value is ' + ret);
//         return ret;
//     };
// }

// test();

function root_bypass() {
    let XApplication = Java.use("com.softforum.xecure.XApplication");
    XApplication.initEversafe.implementation = function(){
        console.log('initEversafe is called');
        let ret = this.initEversafe();
        console.log('initEversafe ret value is ' + ret);
        return ret;
};
}

