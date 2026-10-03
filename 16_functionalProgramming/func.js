// Imperative Programming

let arr = [1,2,34,5,6,76,5];
let double = [];
for(let i=0; i<arr.length;i++){
  double.push(arr[i]*2)
  // console.log(double)
}
console.log(double);

//Declerative Programming
let arr1=[1,3,4,56,7,8]
let double=arr1.map(function(elem){
  return (elem*2)
})
console.log(double);


// Functional Programming

// pure functions

console.log("Pure Function");

function sum(a,b){
  return a+b;
}
let result= sum(1,5)
console.log(result);

// Impure Function
console.log("Imoure Function")
function add(a,b){
  return a+b;
  console.log(add)
}
add(3,5);


