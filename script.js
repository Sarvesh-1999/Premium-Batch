// // var a = 10; // global variables - global scope
// // let b = 20; // global variables - script scope - TDZ
// // const c = 30; // global variables - script scope - TDZ
// // console.log(a, b, c);

// // if (100 > 20) {
// //   var m = 100; //  global variables - global scope
// //   let n = 200; // local variable - block scope
// //   const o = 300; // local variable - block scope
// // }

// // console.log(m); // can be accessed

// // function demo() {
// //   var x = 1000;
// //   let y = 2000;
// //   const z = 3000;
// // }
// // demo();

// // console.log("Start");
// // console.log(a);
// // const c = 300;
// // console.log(c);
// // let b;
// // console.log(a);
// // var a = 100;
// // console.log(b);
// // b = 400;
// // console.log(a, b);
// // console.log("end");

// // console.log(a);
// // var a;
// // a = 10;
// // let b;
// // console.log(b);
// // a = 80;
// // console.log(a, b);
// // b = a;
// // console.log(b);
// // const c = 70;
// // console.log(a);
// // a = c;
// // console.log(a);
// // console.log(b);

// //! FUNCTIONS
// //! TRADITIONAL FUNCTION

// //! 1) NAMED FUNCTION
// demo(); // DUE TO FUNCTION HOISTING
// function demo() {
//   console.log("I am DEMO");
// }

// //! 2) ANONYMOUS FUNCTION
// // function (){
// //     console.log("I am Anonymous");
// // }

// //! 3) FUNCTION EXPRESSION
// const f1 = function () {
//   console.log("I am Anonymous");
// };
// f1();

// //! 4) FIRST CLASS FUNCTION
// const f2 = function greet() {
//   console.log("I am FIRST CLASS FUNCTION");
// };
// f2();

// //! RETURN TYPE FUNCTION with ARGUEMENTS AND PARAMETERS
// function getFullname(name) {
//   return "My name is" + " " + name;
// }
// console.log(getFullname("John Doe"));

// //! HIGHER ORDER FUNCTION AND CALLBACK FUNCTION
// // 1) a function should return another function
// function Parent() {
//   console.log("I am Parent");
//   return function Child() {
//     console.log("I am Child");
//   };
// }
// Parent();

// // 2) a function accepts another function as arguements
// //  a function which passes as an arguement
// function Demo(x) {
//   x();
// }

// Demo(function greet() {
//   console.log("Hii");
// });

//! JS CURRYING
// function Parent() {
//   console.log("Hii");

//   return function () {
//     console.log("Hello");

//     return function () {
//       console.log("Byee");
//     };
//   };
// }
// Parent()()();

// //! GEC WITH FUNCTIONS :
// debugger
// console.log("Start");
// Demo();
// console.log(a);
// function Demo() {
//   console.log("Hii");
// }
// var a;
// console.log(a);
// a = 10;
// console.log(Demo);
// console.log("End");

//! NESTED FUNCTION

//! CLOSURE :  it is a memory which is created whenever child function access property of parent function

//! LEXICAL SCOPE :  the ability of js engine to search a variable outside of its current scope

// function Parent() {
//   let money = 50000;
//   let house = true;
//   console.log(money, house);

//   function Child() {
//     let savings = 2000;
//     console.log(savings, money);
//   }
//   Child();
// }

// Parent();

// function Parent() {
//   let money = 50000;
//   let house = true;
//   console.log(money, house);

//   function Child() {
//     let savings = 2000;
//     console.log(savings, money);
//   }

//   return Child;
// }

// Parent();

//! ARROW FUNCTION : it is a compact way of declaring a function introduced in ES6

// // syntax : const a = () => {}

// const f1 = () => {
//   console.log("i am arrow function 1");
// };
// f1();

// const f2 = (n1, n2) => console.log(n1 + n2);
// f2(10, 20);

// const f3 = (n1) => console.log(n1);
// f3(100);

// //! explicit
// const f4 = (n1, n2) => {
//   return n1 + n2;
// };
// console.log(f4(10, 20));

// //! implict
// const f5 = (n1, n2) => n1 - n2;
// console.log(f5(10, 5));

//! DATA HIDING USING CLOSURE
// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const count = counter();
// count()
// count()
// count()

//! ARRAYS
// let arr1 = [10, "Hello", true, () => {}, null, undefined];
// //           0     1       2       3       4     5
// console.log(arr1);

// console.log("length is", arr1.length);
// console.log(arr1[1]);

// ! ARRAY INBUILT METHODS

// let arr2 = [10, 20, 30, 40];
// console.log(arr2);

// arr2.push(50, 60, 70); // add at last of an array
// console.log(arr2);

// arr2.pop(); // remove from last of an array
// console.log(arr2);

// arr2.unshift(100, 200, 300);// add at first of an array
// console.log(arr2);

// arr2.shift();// remove from first of an array
// console.log(arr2);

//! slice(startIndex , endIndex)
//! NOTE : end index always gets ignored

// //          -4  -3  -2  -1
// let arr3 = [10, 20, 30, 40];
// //           0   1   2   3
// console.log(arr3);

// console.log(arr3.slice(1, 3));
// console.log(arr3.slice(-4, -1));
// console.log(arr3.slice(-2));
// console.log(arr3.slice(-4, 3));

//! splice(startIndex , deleteCount , newElements)

// let arr4 = [10, 20, 30, 40, 50];

//! delete :-  [10,50]
// arr4.splice(1, 3);
// console.log(arr4);

//! add newElement :-  [10, 20, 30, 35 ,40, 50];
// arr4.splice(3, 0, 35, 36, 37);
// console.log(arr4);

//! add and delete :- [10, 100, 50]
// arr4.splice(1, 3, 100);
// console.log(arr4);

//! forEach(): returns undefined
// let arr5 = [10, 20, 30, 40];
// let val1 = arr5.forEach((ele, idx, arr) => {
//   // console.log(ele, idx, arr);
//   return "Hii";
// });
// console.log(val1);

// //! map(): returns new array
// let val2 = arr5.map((ele, idx, arr) => {
//   // console.log(ele, idx, arr);
//   return ele + 5;
// });
// console.log(val2);

// //! filter(): returns filtered array based on condition
// let val3 = arr5.filter((ele, idx, arr) => {
//   return ele > 20;
// });
// console.log(val3);

// //! find(): returns single element based on condition
// let val4 = arr5.find((ele, idx, arr) => {
//   return ele > 20;
// });
// console.log(val4);

// //! findIndex(): returns index of that single element based on condition
// let val5 = arr5.findIndex((ele, idx, arr) => {
//   return ele > 20;
// });
// console.log(val5);

// //! reduce(callback , accumulatorValue)
// let arr6 = [10, 20, 30, 40, 50];

// let sum = 0;
// for (let i = 0; i < arr6.length; i++) {
//   sum = sum + arr6[i];
// }
// console.log(sum);

// let val6 = arr6.reduce((acc, ele, idx, arr) => {
//   console.log(acc, ele);
//   return acc + ele;
// }, 0);
// console.log(val6);

//! ARRAY destructuring
let arr1 = [10, 20, 30, 40, 50];
let [a1, a2, a3, a4, a5] = arr1;
console.log(a3, a5);

let arr2 = [100, 200, [1000, 2000, [3000]]];
let [b1, b2, [b3, b4, [b5]]] = arr2;
console.log(b5, b3);

let arr3 = [100, 200, 300, 400, 500];
let [, c1, , , c2] = arr3;
console.log(c1, c2);
