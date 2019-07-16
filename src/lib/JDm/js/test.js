f1();
f2();

function f1() {


    console.log('为' + num);
}


function f2() {

    console.log(f2);
}

// var f2 = function() {

//     console.log(f2);
// }
var num = 10;

f2();

var a = "1asddd";
console.log('hhh' + a[0]);

var a = 10;

function aAdd1() {
    ++a;
    console.log(a);
}

function aAdd2() {
    a += 2;
    console.log(a);
}
aAdd1();
aAdd2();