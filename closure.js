function x() {
  var a = 7;
  let c = 0;
  function y(num) {
    c += num;
    console.log(c);
  }
  //   y();
  return y;
}

let abc = x();
let xyz = x();
abc(2);
xyz(3);

abc(5);

xyz(100);


