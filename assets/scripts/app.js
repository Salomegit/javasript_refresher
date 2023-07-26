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

const newfunctiono = () => {
    const object = {
  name:"Sally",
  age:"20"
}
return object.name;
}

const newuser = newfunctiono();
console.log(newuser);

function moving(verb ){
    const object ={
        name :"sall"
    }
    return object.name
    return "sally likes moving" + verb ;
}
const move = moving()
console.log(move)
//spread operation

const object ={
    name:"objectq"
}
const newobject = {
    name1:"object2",
    size:10,
    ...object
}
console.log(newobject)
 //control structure

//  const password = prompt("Your password is ");

//  if (password === "Hello") {
//    console.log("Password is correct");
//  } else {
//    console.log("Password is not correct");
//  }

 
 function handleTimeout()
 {
    console.log("Timed out")
 }

 const handleTimeout1 = ()=> {
    console.log("Timed out Again");
 }

 setTimeout(handleTimeout , 2000);
 setTimeout(handleTimeout1 , 2000);
 setTimeout(
    ()=>{
        console.log("Timed out the last time")
    },6000
 )

 // The method above allows passing the function as a value without the parenthesis.This allows fuction 
 //setTimeout to access the already defined handleTimeout.Otherwise if hanleTimeout had parenthesis , then it 
 //would not be passed as a value,it would be passed as a return value.Not to execue the handleTimeout right away