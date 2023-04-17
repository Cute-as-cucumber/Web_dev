//Lecture 42 JavaScript types and language constructs
//object: name & value pairs
//primitive type: a single, immutable value
// var x;
// console.log(x);

// if (x == undefined) {
//     console.log('x is undefined.')
// }

// x = 5;
// if (x == undefined) {
//     console.log('x is undefined')
// }
// else {
//     console.log('x has been defined')
// }

//lecture 43
// var string = 'Hello';
// string += 'World'
// console.log(string + '!')

// Regular math operators
//Equality
// var x = 4, y = 4;
// if (x == y) {
//     console.log('x is equal to y')
// }

// x = '4'
// if (x == y) {
//     console.log('x is equal to y')
// }
//still logs x is equal to y since type coersion
//if we don't want type coersion, we use strict equality
//that is, use three equal signs
// x = '4'
// if (x === y) {
//     console.log('x is equal to y')
// }
// else {
//     console.log('nah')
// }

// if (false || null || undefined || "" || 0 || NaN){
//     console.log('This line will never be executed')
//     //this is because the above will all be coerced to false
//     //e.g., Boolean(null) >> false, but Boolean(5) >> true
// }
// else {
//     console.log('All false')
// }

// if (true && 'hello' && 1 && 'false') {
//     console.log('All true')
// }
// && and operator, || or operator

// function a() {
//     return {
//         name: 'Hannah'
//     }
// } //right. Should put the curly bracket like this

// function b() 
// {
//     return 
//     {
//         name: 'Hannah'
//     }
// } //wrong. logs undefined, since return does not return anything

// console.log(a());
// console.log(b());

// for loop
// var sum = 0;
// for (var i = 0; i < 10; i++){ // i < 10: condition of the loop running
//     console.log(i)
//     sum += i;
// }
// console.log('sum of 0 through 9 is '+ sum)

// lecture 43 handling default values
// function orderChickenWith(sideDish) {
//     console.log('Chicken with ' + sideDish)
// }

// orderChickenWith('noodles')
// orderChickenWith() //logs 'chicken with undefined'
// //use default value to avoid the undefined scenario

// function orderChickenWith(sideDish) {
//     if (sideDish === undefined){
//         sideDish = 'whatever'
//     }
//     console.log('Chicken with ' + sideDish)
// }
//or alternatively
// function orderChickenWith(sideDish) {
//     sideDish = sideDish || 'whatever'
//     console.log('Chicken with ' + sideDish)
// }
// orderChickenWith() //logs 'chicken with undefined'
//use default value to avoid the undefined scenario


//lecture 45
//create new object
// var company = new Object();
// company.name = 'Morgan Stanley';
// company.ceo = new Object();
// company.ceo.firstName = 'Hannah'
// company.ceo.favColor = 'green'

// console.log(company)

// console.log(company.name);
// console.log(company['name']);
// //same output, but when there's spaces in property name, the second method is handier
// // for example
// company['stock of company'] = 200;
// console.log('Stock price is ' + company['stock of company']);

//lecture 45, part 2
//a way simplify object creation: object literal
// var facebook = {
//     name: 'Facebook',
//     ceo: {
//         firstname: 'Hannah',
//         lastname: 'Guo'
//     },
//     $stock: 200
// };

// console.log(facebook)

// //lecture 46, function explained
// function multiply (x, y) {
//     return x * y
// }
// //functions in javascript are objects
// //set properties
// multiply.version = 'v.1.0.0';
// console.log(multiply.version);

//function factory
// function makeMultiplier(multiplier) {
//     var my_func = function (x) {
//         return multiplier * x;
//     };
//     return my_func;
// }

// var multiply_by3 = makeMultiplier(3)
// console.log(multiply_by3(10))
// var double_all = makeMultiplier(2)
// console.log(double_all(40))

// //passing function as arguments
// function do_operation_on (x, operation) {
//     return operation(x);
// }

// var result = do_operation_on(5, double_all)
// console.log(result)

//Lecture 47
//passing variables by value and by reference
//primitives are copied by value, and objects are passed by reference
//the case of primitives
// var a = 7;
// var b = a;
// console.log('a: ' + a)
// console.log('b: ' + b)

// b = 5;
// console.log('after updates on b: ')
// console.log('a: ' + a)
// console.log('b: ' + b)

//the case of objects
// var a = {x : 7}
// var b = a
// console.log(a)
// console.log(b)

// b.x = 5;
// console.log('after updates on b: ')
// console.log(a)
// console.log(b) //in this case, both a and b change to 5

// function change(v1) {
//     console.log('v: ' + v1) 

//     v1 = 7
//     console.log('v after:' + v1)
// }

// var value = 5
// change(value)
// console.log('value: ' + value)

/*
v: 5
v after:7 
value: 5
this is because the value that's passed into the function is just a copy?
*/

//object
// function change(ob) {
//     console.log('passed ob: ' + ob.x)
//     ob.x = 2
//     console.log('after passed ob: ' + ob.x)
// }
// obb = {x : 8}
// change(obb)
// console.log('original obb: ' + obb.x)
// //in this case, the original object value changed too, which is different from the case of primitives

//lecture 48
//function constructor
// function circ (radius) {
//     this.radius = radius;
//     this.get_area = 
//         function () {
//             return Math.PI * Math.pow(this.radius, 2)
//         }
//     console.log(this) //this function constructor cannot return anything
// }

// var my_cricle = new circ(10) //this new keyword create a new user-defined function
// console.log(my_cricle)
// console.log(my_cricle.get_area())

// function circ (radius) {
//     this.radius = radius;
//     }
// circ.prototype.get_area = 
// function () {
//     return Math.PI * Math.pow(this.radius, 2)
// }

// var my_cricle = new circ(10) //this new keyword create a new user-defined function
// console.log(my_cricle)
// console.log(my_cricle.get_area())

//object literals and "this" keyword
var literal_c = {
    radius: 10,
    get_area: function () {
        console.log(this);
        return Math.PI * Math.pow(this.radius, 2)
    }
}

console.log(literal_c.get_area())