import sing from "./utils.js";
let ruth = sing("sally")
console.log(ruth);
function ride(bikeType){
    console.log("Hello World");
    console.log("your bike type is" + bikeType);
    return "You should be exited";
}
var result = ride("mountain bike");
console.log(result);
const userName = {
    name:"max"
}
console.log(userName[0])
const hobbies = ["singing","dancing","writing"]

console.log(hobbies[0])
hobbies.push("running")
console.log(hobbies)
const item = hobbies.findIndex((item) => {item === "singing"
return item;
})
console.log (item)
const mapping = hobbies.map(item => item + "!")
console.log(mapping);
const affirmations = ["You are loved ","You are beautiful ","you are amaizig "]
const newMe =  affirmations.map (()=> ({text : "Salome"}))
console.log(newMe)


// function transformToObjects(numberArray) {
//     // Todo: Add your logic
//     // should return an array of objects
//     return numberArray.map((item)=>{
//         return ({val:item})
//     })
// }
 
//  const newfunction =  transformToObjects([1,2,3]);
//  console.log(newfunction)

 function transformToObjects(numberArray) {
    return numberArray.map((item) => ({ val: item }));
  }
  
  const newfunction = transformToObjects([1, 2, 3]);
  console.log(newfunction);



//DECOSTRUCTING OBJECTS AND ARRAYS
const [firstName,lastName] = ["Sally", "git"]
console.log(firstName);

const {name:userNme,age} = {
    name:"salosalo",
    age:30

}
console.log(userNme);


const {type,price} = {
    type : "iphone",
    price : "20000"
}
console.log(type)