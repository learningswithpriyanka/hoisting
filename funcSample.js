// function add(num0, num1, num2) {
//   var a = num1 + num2 + num0;
//   if (a === typeof(Number)) {
//     return a;
//   }
//   console.log(a);
// }

// var res = add();
// var res1 = add(2, 3, "a");
// add(45, null);
// add(78, undefined);

// console.log("res:", res);
// console.log("res1:", res1);

//Function statement
function a(c) {
  console.log(c);
  console.log("hello");

  return c;
}
//function Expression

var b = function () {
  console.log("b called");
};
// a();
// b();
//function Declaration

//Anonymous Function

// function(){
// console.log("c")
// }

//Named Functiion Expression
// var b = function abc() {
//     console.log(abc)
//   console.log("b called");
// };
// b()
// First  class function
var c = a(b);

console.log(c);

//Hiher order functions
