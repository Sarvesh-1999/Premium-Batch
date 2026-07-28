//! HOISTING
// moving only declaration part at the top of the code internally
// TDZ -> time period between accessing a variable before declaration

// var a = ud
// let b  <--- Temporal Dead Zone (TDZ)
// const c  <--- Temporal Dead Zone (TDZ)

// console.log(a); // ud
// // console.log(b); //! ERROR -> Reference error Cannot access 'b' before initialization
// // console.log(c); //! ERROR -> Reference error Cannot access 'c' before initialization

// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// ! TYPE OF VARIABLES
var a = 10; // global variable - global scope
let b = 20; // global variable - script scope <- TDZ
const c = 30; // global variable - script scope <- TDZ

if (10 > 2) {
  var x = 100; // global variable - global scope
  let y = 200; // local variable - block scope
  const z = 300; // local variable - block scope
}

function demo() {
  var m = 1000 // local variable - local scope - function scope
  let n = 2000 // local variable - local scope
  const o = 3000 // local variable - local scope
}