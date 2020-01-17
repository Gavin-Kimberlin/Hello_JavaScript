function for_Loop() {
    var Instruments = ["Drums", "Guitar", "Bass", "Microphone", "Keyboard"];
    var Content = "";
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var things = ["something", "one thing", "another thing"];
    let stuff = "";
    for (i = 0; i < things.length; i++) {
        stuff += things[i] + "<br>";
    }
    document.getElementById("Array").innerHTML = stuff
}

function Call_Loop() {
    var output = "";
    var input = document.getElementById("num_Input").value;
    var counter = 1;
    while (counter <= input) {
        output += "<br>" + counter;
        counter ++;
    }
    document.getElementById("Loop").innerHTML = output;
}

const Person = {Name:"Gavin", Hair:"red", Height: "6 feet", Eye_Color:"blue"}
function string(i) {
    return i.Name + " is " + i.Height + " tall and has " + i.Hair + " hair and " + i.Eye_Color + " eyes.";
}
    function constant_function() {
    document.getElementById("Constant").innerHTML = string(Person);
}

let Car_Object = {
    Make:"BMW",
    Model:"M235i",
    Year:"2015",
    Color:"Melbourne Red",
    Engine: "Inline 6 turbo",
    Power: "320 horsepower",
    description: function() {
        return "The " + this.Year + " " + this.Make + " " + this.Model + " in " + this.Color + " has an " + this.Engine + " making " + this.Power + ".";
    }
};
function car() {
    document.getElementById("Car").innerHTML = Car_Object.description();
}

let Break_Object = ["This ", "is ", "a ", "sentence."];
var sentence1 = ""
function Break_Function() {
    for (i = 0; i < 10; i++) {
        if (i === 4) {break;}
        sentence1 += Break_Object[i];
    }
    document.getElementById("Break").innerHTML = sentence1;
}

let Continue_Object = ["This ", "is ", "not ", "a ", "sentence."];
var sentence2 = ""
function Continue_Function() {
    for (i = 0; i < 5; i++) {
        if (i === 1) {continue;}
        sentence2 += Continue_Object[i];
    }
    document.getElementById("Continue").innerHTML = sentence2;
}