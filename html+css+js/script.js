var number = 2;
var c1 =  document.getElementById('contain1');
var c2 = document.getElementById('contain2');
var t = setTimeout(function() {}, 0);

function f1() {
    c1.innerHTML = '<img src="pic' + number + '.jpg">';
    c2.innerHTML = number;

    number++; 
    if (number  == 7)
        number = 1;
}

function random_pic() {
    return Math.floor(Math.random() * 6) + 1;
}

function f2() {
    n = random_pic();
    while (n == number)
        n = random_pic();
    number = n;

    c1.innerHTML = '<img src="pic' + number + '.jpg">';
    c2.innerHTML = number;
}

function f3() {
    var time =  document.getElementById('timer').value * 1000;
    t = setInterval(function() {f1()}, time);
}

function f4() {
    clearInterval(t);
}