console.log("Hello Mittra!")

let product = 2;
if(product>=1){
  console.log("Product in stock");
  console.log("You can buy/purchase which you want");
}else{
  console.log("Product OutofStock");
}


console.log("___________________________________________________");
// My fault
let weather= "rainy";
if(weather === "rainy"){
  console.log("Take your umbrella when you go outside!");
}else{
  console.log("You free to go without umbrella weather is sunny!")
}

console.log("____________________________________________________");
console.log("Student Grade According to their Performance");
// if else if else
let marks= 40;
// let mark = Number= prompt("Enter your marks"); //browser specific not workin terminal

if(marks>=90){
  console.log("Marks:", marks);
  console.log("Your Grade is: A");
  console.log("Your Position is First");
  console.log("Your Performance is Excellent");
}else if(marks>=80){
  console.log("Marks:", marks);
  console.log("Your Grade is: B");
  console.log("Your Posintion is Second");
  console.log("Your Performance is Very Good");
}else if(marks>=70){
  console.log("Marks:", marks);
  console.log("Your Grade is: C");
  console.log("Your Posintion is Third");
  console.log("Your Performance is Good");
}else if(marks>=60){
  console.log("Marks:", marks);
  console.log("Your Grade is: D");
  console.log("Try to do Your best");
}else if(marks>=50){
  console.log("Marks:", marks);
  console.log("Your Grade is: E");
  console.log("You need to focus on Your study");
}else if(marks>=40){
  console.log("Marks:", marks);
  console.log("Your marks below fifty")
  console.log("Your Performance is Poor")
}else{
  console.log("Better Luck For Next Time")
}

console.log("_____________________________________________________");
//Permission for enter in club/pub (#Party😎)
console.log("              ")
let age = 18;
let idColor = "";

if (age >= 18 && idColor == "Green") {
  console.log("You are allowed to go Inside a Pub because You have a Green IdCard");
  console.log("Let's Party Begin (●'◡'●)");

} else if (age >= 18 && idColor != "Green") {
  // Scenario 2: Old enough, but wrong ID color
  console.log("You are allowed in the pub as per your age, but you don't have a Green IdCard");
  console.log("To go inside the pub you require a Green IdCard");
  console.log("Sorry!");

} else {
  // Scenario 3: Underage (or any other case)
  console.log("You are too young to enter in pub.")
  console.log("Don't worry I am Here, Come with me! heehee");
}

console.log("_______________________________________________________");
console.log("We are going to club heeeheeee!");

let yourAge=18;
let hasId=false;
if(yourAge>=18){
  if(hasId){
    console.log("You can enter the club.")
  }else{
    console.log("You are eligible as per you age to enter in club but Id needed!")
    console.log("So, You take your ID first.")
  }
}else{
  console.log("You're too young to enter in Club.")
}



console.log("_________________Switch Statement_________________")
console.log("       ")

let color= "blue";
switch(color){
  case "red":
    console.log("Stop light is red");
    break;
  case "yellow":
    console.log("Start your car/bike ready to go (Caution)");
    break;
  case "green":
    console.log("Go Bro!");
    break;
  default:
    console.log("Unknown Color Detacted!")
}

console.log("______________________________________________________")
// calculator using switch

let a = 60;
let b = 38;
let operation = "subtract"; 

switch(operation) {
  case "add":
    console.log("Addition of Two numbers =", a + b);
    break;
  case "subtract":
    console.log("Subtraction =", a - b);
    break;
  default:
    console.log("Operation not recognized");
}
console.log("_____________________________________________________");
//Print days name
let days= "Wednesday";
switch(days){
  case "Monday":
    console.log("First Day of the week -->", days);
    break;
  case "Tuesday":
    console.log("second Day of a week -->", days);
    break;
    case "Wednesday":
    console.log("Third Day of a week -->", days);
    break;
    case "Thursday":
    console.log("Fourth Day of a week -->", days);
    break;
    case "Friday":
    console.log("Fifth Day of a week -->", days);
    break;
    case "Saturday":
    console.log("Sixth Day of a week -->", days);
    break;
    case "Sunday":
    console.log("Seventh Day of a week -->", days);
    break;
}

console.log("_______________________________________________________")
// Another method
let c = 10;
let d = 38;
let calculator = a + b; // Result is 48

switch(calculator) {
  case 48: // This must be the number 48, not "add"
    console.log("The result is indeed 48");
    break;
}


console.log("Ternary Operator");
let myAge=18;
let result=(myAge>=18)?"I can Drive":"I can't Drive";
console.log(result);