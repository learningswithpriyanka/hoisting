import json from "./jsoncreated.json" assert {type:"json"}
// const fs = require('fs')

// try {
//     const data = fs.readFileSync("jsoncreated.json",'utf-8')
//     console.log(data)
// }catch(error){
// console.log("error",error)
// }
console.log(JSON.parse([
    {
      "name": "priyanka",
      "age": 30,
      "city": "delhi",
      "skills": ["JS", "Reactjs"]
    },
    {
      "name": "priyanka",
      "age": 30,
      "city": "delhi",
      "skills": ["JS", "Reactjs"]
    },
  ]))

//   JSON.stringify