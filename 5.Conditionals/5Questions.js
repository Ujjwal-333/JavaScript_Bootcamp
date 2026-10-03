//Quetions related which we study in last
let cartValue = 1000;
let discountedCartvalue;
if(cartValue < 50){
  discountedCartvalue=cartValue;
  console.log("No Discount Applied");
}else if(cartValue>=100 && cartValue==499){
  discountedCartvalue= cartValue-(cartValue*0.20);
  console.log("You get 20% discount!");
  console.log("Beacuse You Purchase Above 100")
}else if(cartValue>=500){
  discountedCartvalue= cartValue-(cartValue*0.60);
  console.log("You get 60% Off!");
  console.log("Because, You Buy Above 500");
  console.log("So, You get 60% Off");
}else{
  console.log("No Discount Applied");
  console.log("If you want to get discount buy more than 50!")
}
console.log("Ypur Final cartValue is:", discountedCartvalue)

// Print Multiple value

let a= 6;
let b= 7;
let c= 10;
let d= 30;
console.log("Value of a", a, "Value of b:", b, "Value of c:", c, "Value of d:", d);
console.log(`   Value of a: ${a}
   Value of b: ${b} 
   Value of c: ${c} 
   Value of d: ${d}`
  );

console.log("______________________________________________________")
  //Check Your Subscription on ott Plateform
  
let userPlan = ""; // Change this value to test different blocks

if (userPlan === "Basic") {
    console.log("You have 499 plan: You watch Basic and Premium");
    console.log("But you don't watch HD Quality videos (1080p)");
    console.log("If you want to watch HD content, then purchase the 999 plan!");

} else if (userPlan === "Standard") {
    console.log("You have 999 plan!");
    console.log("You are eligible to watch all content in 4K");
    console.log("You can watch on multiple devices like Tablet, TV, and Mobile");
    console.log("You have permission to share your connection between 3 people");

} else if (userPlan === "Premium + Standard") {
    console.log("You have 1999 plan!");
    console.log("You have permission to watch up to 8K videos.");
    console.log("You have permission to share your connection between 6 people");
    console.log("You also have permission to share your screen from other devices!");

} else {
    console.log("First, buy your subscription to watch HD quality videos without ads.");
    console.log(`These are the plans:
      1. 499 Plan: Basic (No HD)
      2. 999 Plan: Standard (4K)
      3. 1999 Plan: Premium + Standard (8K)`);
}
let userPlans="standard";
switch (userPlans) {
    case "Basic":
        console.log("499 Plan active...");
        break;
    case "Standard":
        console.log("999 Plan active...");
        break;
    default:
        console.log("No active plan found.");
}

console.log("___________________________________________________________")
//Choose Your favourite Theme Color
console.log("                                                           ")
// let theme = prompt("Choose your theme color (Light, Dark, Green, Orange) :");
// if(theme === "Light"){
//   color = "Grey";
// }else if(theme === "Dark"){
//   color= "Black";
// }else if(theme === "Green"){
//   color= "Green";
// }else if(theme === "Orange"){
//   color= "Orange";
// }
// if(theme!== "Light" && theme!== "Dark" && theme!=="Green" && theme!=="Orange"){
//   console.log("Invalid Theme choose correct theme");
// }else{
//   console.log(`Your slected theme is ${theme} and color is ${color} respectively!`);
// }
console.log("                                                     ")

// greater number between 3
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
// let num1= Number= prompt("Enter First Number:");
// let num2= Number= prompt("Enter Second Number:");
// let num3= Number= prompt("Enter Third Number:");
// if(num1>num2 && num1>num3){
//   console.log("first number is Greater than other");
// }else if(num2>num1 && num2>num3){
//   console.log("Second number is greater than other");
// }else{
//   console.log("Third number is greater tahn other")
// }

console.log("________Another method handle error___________")
// Check if any of the inputs are not numbers

console.log("                                              ")
// let num4 = Number(prompt("Enter First Number:"));
// let num5 = Number(prompt("Enter Second Number:"));
// let num6 = Number(prompt("Enter Third Number:"));

// if (isNaN(num4) || isNaN(num5) || isNaN(num6)) {
//   console.log("Error: One or more inputs are not valid numbers.");
// } else if (num4 > num5 && num4 > num6) {
//   console.log("First number is greatest");
// } else if (num5 > num4 && num5 > num6) {
//   console.log("Second number is greatest");
// } else if (num6 > num3 && num6 > num5) {
//   console.log("Third number is greatest");
// } else {
//   console.log("The numbers might be equal.");
// }
console.log("                                         ")


// let num7;
// while (true) {
//   num7 = Number(prompt("Enter First Number:"));
//   if (!isNaN(num7)) break; // Exit loop if it's a valid number
//   alert("That's not a number! Please try again.");
// }

console.log("!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!")

let userRole= "editor";
switch(userRole){
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Editor access");
    break;
  case "viewer":
    console.log("Only you can view");
    break;
  default:
    console.log("In valid Role");
}

// Number divisible by three and five