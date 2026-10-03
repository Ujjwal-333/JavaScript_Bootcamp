
// Arrau spread 
let arr = [2,3,4,5,6,8,7]
let newArr = [...arr,10, 90, "ujjwal"]
console.log(newArr);


// Shallow copy
let arr1 = [1,4,5,6,7,8,9,10];
let copyArr= [...arr1];
copyArr.push(5);
console.log(copyArr);
console.log(arr1);

// merge two arrays

let array = ["hello", "bruce wayne", "captain", "iron", "wanda"];
let arr2 = ["fiftyshades", "365days", "My fault", "guilt"]
let mergeArr = [...array, ...arr2];
console.log(mergeArr);


let str = "Manas Bhai ka Rolla"
let str1 = [...str];
console.log(str1);

// object spread

let obj = {
  name : "Manas",
  age: 21,
  passion:"bakaiti",
  city:"Raebareli",
}

let obj1 = {
  designation : "manager",
  group : "Anonymous",
  role: "Developer",
}
let objCopy = {...obj, ...obj1}

console.log(objCopy)


function sum(...arr){
  console.log(arguments);// jab spread operator nahi tha tab hum arguments ka use karte the 
  console.log(arr);
  let sumResult = arr.reduce((acc, prev) =>{
    return acc + prev
  })
  return sumResult;
}

let output = sum(1,2,3,6,56,6,7,4);
console.log(output);

// destructuring in rest operator


let arr3 = ["manas", "muskan","mahek"];
let [user, user1, ...otherUsers]= arr3;
console.log(user)
console.log(user1)
console.log(otherUsers)


// Destructuring with Object

let obj = {
  name: "Rakesh",
  age: 32,

}

let {name, age, ...otherKeys} = obj 
console.log(name);
console.log(age);