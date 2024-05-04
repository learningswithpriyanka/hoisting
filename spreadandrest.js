// const a = [1,]
// const b = [5,6,7,8]

// // a.push(b);
// // a.push(...b)
// let d = [1,2,3,[4,5,6],[4,5,6],[7,8,[9,0]]]
// a.push(...d)
// console.log(a);

// // const flattened = d.flat(Infinity)
// // console.log(flattened)
// // console.log(a.concat(b));

// // const another_array = [...a,...b]
// // console.log(another_array)

// // console.log(Array.isArray("priyanka"))
// console.log(Array.from({name:"priyanka",age:10}))
// //Array.of()

let obj = {
  name: "priyanka",
  age: 20,
  score: [20, 30, 40],
  subjects: {
    math: 20,
    eng: "teacher",
  },
  "first name": "hello",
  2: 90,
  "last name": "world!!!",
};
// Object.freeze(obj)
// obj.score.push(200)
// obj["last name"] = "world"
// obj["last name"] = "world!!!!";

// obj.greeting = function(){
//     console.log("hi",this.name)
// }

// console.log(obj)
let obj2 = {
  name: "ravi",
  age: 20,
  score: [20, 30, 40],
  subjects: {
    math: 20,
    hindi: "teacher123",
  },
  "first name": "hello",
  2: 90,
};
// obj.greeting.bind(obj2)()

const a = {};
// a.id= 1;
// a.name ="priyanka"
// a={}

// const obj3 = {...obj,...obj2}
const target = Object.assign({}, obj, obj2);
console.log(target);

console.log(obj2.subjects.hindi);

const {
  ["first name"]: first,
  subjects: { hindi: something },
  score: scr,
} = obj2;
console.log(something, scr, first);

const arr = [1, 2, 3, 4, 5]; //arr[0],arr[1],arr[2]
const [a1, b1, , , c2] = arr;
console.log(a1, b1, c2);
