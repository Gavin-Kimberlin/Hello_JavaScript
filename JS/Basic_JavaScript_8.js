function someFunction() {
    var a = "This ";
    var b = "is ";
    var c = "a ";
    var d = "sentence.";
    var sentence = a.concat(b, c, d);
    var section = sentence.slice(10,18)
    document.getElementById("something").innerHTML = sentence;
    document.getElementById("section").innerHTML = section;
}