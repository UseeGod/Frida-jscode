// enumerate all Java classes
function enumAllClasses()
{
  var allClasses = [];
  var classes = Java.enumerateLoadedClassesSync();

  classes.forEach(function(aClass) {
    try {
      var className = aClass.match(/[L](.*);/)[1].replace(/\//g, ".");
    }
    catch(err) {} // avoid TypeError: cannot read property 1 of null
    allClasses.push(className);
  });

  return allClasses;
}

setTimeout(function() { // avoid java.lang.ClassNotFoundException

  Java.perform(function() {

    // enumerate all classes
    var a = enumAllClasses();
    a.forEach(function(s) { 
      console.log(s); 
    });
  });
}, 0);