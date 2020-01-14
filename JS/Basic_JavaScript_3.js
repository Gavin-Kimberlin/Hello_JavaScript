function add() {
    var x = (15 * 45) / 3;
    var y = (45 / 15) * 100;
    var z = 45 % 2;
    var a = -y;
    x--;
    y++;
    var b = Math.random() * 500;
    var c = Math.SQRT2;
    document.getElementById('Math').innerHTML = '((15 x 45) / 3) - 1 = ' + x + '<br>(100(45 / 15)) + 1 = ' + y + '<br>The remainder of 45 / 2 is ' + z + '<br>-100(45 / 15) = ' + a + '<br>' + b + '<br>' + c;
};