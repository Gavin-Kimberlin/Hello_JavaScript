function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color +"-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function get_Date() {
    if (new Date().getHours() < 12 && Date().getHours() >= 6) {
        document.getElementById("Greeting").innerHTML = "Good Morning!"
    } else if (new Date().getHours() < 17) {
        document.getElementById("Greeting").innerHTML = "Good Afternoon!"
    } else if (new Date().getHours() < 20) {
        document.getElementById("Greeting").innerHTML = "Good Evening!"
    }else {
        document.getElementById("Greeting").innerHTML = "Good Night!"
    };
}

function num() {
    number = document.getElementById("num_Input").value;
    if (number > 50) {
        document.getElementById("output").innerHTML = "Your number is greater than 50";
    } else if (number < 50) {
        document.getElementById("output").innerHTML = "Your number is less than 50";
    } else {
        document.getElementById("output").innerHTML = "Your number is 50";
    };
}