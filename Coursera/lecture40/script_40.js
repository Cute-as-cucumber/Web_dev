var x = 'Hello World';
function compare (x, y) {
    return x > y
}
console.log(compare (6, 8));
console.log(compare()); //legal, return false
console.log(compare(4, 'a')) //also legal, return false

//global variable
var message = 'in global';
console.log('global: message = ' + message);
//log global message: in global

var a = function () {
    var message = 'inside a';
    console.log('a: message = ' + message);
    //log a:message: inside a
}

a();

function b () {
    console.log('b message: ' + message)
}

b();
//log b message: in global

var c = function () {
    var message = 'inside c'
    b();
}
c();
//log b message in global, because function b is defined in global context, and that definition comes before function c
// what if b is defined inside of function a?
var a2 = function () {
    var message = 'inside a2';
    function b2 () {
        console.log('b2 message: ' + message);
    }
    b2();
}
a2();
//this time log b message is inside a
//because b2 is defined inside a2

