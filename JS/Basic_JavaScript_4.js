function my_Dictionary() {
    var car = {
        Make:"BMW",
        Model:"M235i",
        Year:"2015",
        Color:"Melbourne Red",
        Engine: "Inline 6 turbo",
        Power: "320 horsepower",
    };
    delete car.Power;
    var Statement = "The " + car.Year + " " + car.Make + " " + car.Model + " in " + car.Color + " has an " + car.Engine + " making " + car.Power + ".";
    document.getElementById("Dictionary").innerHTML = Statement;
}