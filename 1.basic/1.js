console.log("My first code");

let firstname = "Ujjwal";
let lastname = "Pandey";
let fullname= firstname+ " "+ lastname;
console.log(fullname);

let age; //decleration
age = 18;// initialization
console.log(age); 

let ages = 18;
console.log(ages);

let d,e,f;
d=3;
e=5;
f=67;
console.log(d);
console.log(e);
console.log(f);
console.log(d*e+f);

let a=b=c=34;
console.log(a);
console.log(b);
console.log(c);

var b=3;// var globally scope hota hai isko redeclare kar sakte hai 
let n=69;// but in let no redeclaretion allowed block scope example below

let aged = 23;
{
  console.log(aged);
}
console.log(aged);



{
  let myage=21;
  console.log(myage);
}
//console.log(myage) output undefined lekin yahi agar mene var use kiya hota tab output aata 21

const g=10;// at the time of decleration we also initialize a value in const use for constant value like 3.14(pi)
console.log(g);

let $hello ="hello";
let _my = 2;
let nameMy = "rock";
console.log(`first ${$hello}, Second ${_my}, My name ${nameMy}`);

let nameOfMy= "camel case";// camel case
console.log(nameOfMy);
let name_of_my= "snake case";//snake case
console.log(name_of_my);
let NameOfMy = "Pascal case"; // Pascal case
console.log(NameOfMy);
//let name-of-my; kabab case

console.log("add two cost");
let price1=399;
let price2=349;
let addTwoPrice= price1+price2;
console.log(addTwoPrice);

console.log("concatenate two string");
let myFirstName= "Alice";
let myLastNmae="Bob";
let concatenate=myFirstName+" "+ myLastNmae;
console.log(concatenate);

// let yourFirstName= prompt("Enter your first name ");
// let yourLastName= prompt("Enter your last name ");

// let fullName= yourFirstName+" "+yourLastName;
// console.log("fullName: ",fullName);
// alert("Without permission")