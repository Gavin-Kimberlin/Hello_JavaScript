function doThis() {
    var x = 0 / 0;
    document.write(x);
}

function doThat() {
    var x = 'true';
    document.write(isNaN(x));
}

function doOverHere() {
    var x = 1;
    document.write(isNaN(x))
}

function infinite() {
    var y = 2E1000;
    document.getElementById('content1').innerHTML = y;
}

function negInfinite() {
    var y = -2E1000;
    document.getElementById('content2').innerHTML = y;
}

function bool() {
    var x = 10 < 3;
    document.getElementById('content3').innerHTML = x;
    console.log(x);
    
}

function log() {
    console.log(3 + "56");
}

log()

console.log(300 == "300");
console.log(300 == 100);

console.log(false === false);
console.log(false === 1);
console.log(false === 'false');
console.log(false === true);

console.log(20 == "20" && true == true);
console.log(true === true && "true" == true);

console.log(20 == '20' || 30 == 100);
console.log(40 == '50' || 20 == 200);

console.log(40 != 20);
console.log(50 != 50);



