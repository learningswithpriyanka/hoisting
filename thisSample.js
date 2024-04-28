function hello(age,city) {
  console.log(`I am ${this.name}, ${age}, ${city}`);
}
var abc = 100;
var hi = {
  name: "Ravi",
  hello,
};

var you = {
  name: "sharma",
  hello,
};
// hello();
// var meHello = hello.bind(hi);
hello.bind(you)()

// (function(){
//     console.log("I am executable")
// })();
//  hello.call(hi,9,"bng");
//  hello.apply(hi,[9,"bng"])

// meHello()
// hi.hello();
// you.hello();

// (function(){

// })()
