//! NAMED EXPORT
export function add() {
  console.log(10 + 20);
}

export function subtract() {
  console.log(100 - 30);
}

export function divide() {
  console.log(5 / 2);
}


//! DEFAULT EXPORT
function greet() {
  console.log("Welcome");
}
export default greet;
