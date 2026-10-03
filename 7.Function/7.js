function MyFunction(n){
  let num=0;
  for(let i=0;i<=n;i++){
    num +=i;
  }
  console.log("Num=",num);
}
MyFunction(5)
MyFunction(15)

function Hello(){
  console.log("My First code");
  console.log("My Second Code");
  console.log("My Third Code");
}
Hello()

// without parameter with return type
function beta(){
  return "Alice Bob";
}
let a = beta();
console.log(a);
// with parameter and without return
function gamma(name){
  console.log("My name is", name)
}
gamma("Rakesh.")

// with parameter and with return type

function greet(name){
  return "Hello bro, " + name;
}
let b= greet("I am tech master!");
console.log(b)


// Example:
function Sum(x,y){
  let s= x*y;
  return s;
}
result = Sum(4,5);
console.log("Result",result);

function good(greet="namaste"){
  console.log("Hello uncle", greet);

}
good("Pranaam");

// Types of function

console.log("Types of Functions");

// function expression

let sub = function(a,b){
  return a-b;
}
let g = sub(8,4)
console.log("G:",g)

// Fat arrow function 

let hub=()=>{
  console.log("hello guys we are there")
}
hub()

// Anonymous function 

//setTimeout(function,time)

setTimeout(()=>{
  console.log("Welcome to Hell!");
},3000);

//imediately invoked function expression
(async function(){
  console.log("hello world!");
})();

