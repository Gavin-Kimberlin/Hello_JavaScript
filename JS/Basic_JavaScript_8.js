function someFunction() {
    var a = "This ";
    var b = "is ";
    var c = "a ";
    var d = "sentence.";
    var sentence = a.concat(b, c, d);
    var section = sentence.slice(10,18).valueOf();
    var x = 45676767.4564564564526456;
    var y = x.toFixed(4);
    var z = 45555.454533333.toPrecision(3)
    document.getElementById("something").innerHTML = sentence;
    document.getElementById("section").innerHTML = section + "<br><br>" + y.toString() + "<br>" + z;
}