// var a = 10; // global variables - global scope
// let b = 20; // global variables - script scope - TDZ
// const c = 30; // global variables - script scope - TDZ
// console.log(a, b, c);

// if (100 > 20) {
//   var m = 100; //  global variables - global scope
//   let n = 200; // local variable - block scope
//   const o = 300; // local variable - block scope
// }

// console.log(m); // can be accessed

// function demo() {
//   var x = 1000;
//   let y = 2000;
//   const z = 3000;
// }
// demo();

// console.log("Start");
// console.log(a);
// const c = 300;
// console.log(c);
// let b;
// console.log(a);
// var a = 100;
// console.log(b);
// b = 400;
// console.log(a, b);
// console.log("end");

// console.log(a);
// var a;
// a = 10;
// let b;
// console.log(b);
// a = 80;
// console.log(a, b);
// b = a;
// console.log(b);
// const c = 70;
// console.log(a);
// a = c;
// console.log(a);
// console.log(b);

//! FUNCTIONS
//! TRADITIONAL FUNCTION

//! 1) NAMED FUNCTION
demo(); // DUE TO FUNCTION HOISTING
function demo() {
  console.log("I am DEMO");
}

//! 2) ANONYMOUS FUNCTION
// function (){
//     console.log("I am Anonymous");
// }

//! 3) FUNCTION EXPRESSION
const f1 = function () {
  console.log("I am Anonymous");
};
f1()

//! 4) FIRST CLASS FUNCTION
const f2 = function greet() {
  console.log("I am FIRST CLASS FUNCTION");
};
f2();

//! RETURN TYPE FUNCTION with ARGUEMENTS AND PARAMETERS
function getFullname(name) {
  return "My name is" + " " + name;
}
console.log(getFullname("John Doe"));
console.log(getFullname("Jane Doe"));
console.log(getFullname("Henry"));
console.log(getFullname("Clark"));
console.log(getFullname("Joe"));

//! HIGHER ORDER FUNCTION
// 1) a function should return another function
// 2) a function accepts another function as arguements

//! ARROW FUNCTION
