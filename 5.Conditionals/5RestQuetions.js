//fizz when number divisible by 3 and buzz when number divisible by 5 when number divisible by 3 and 5 print fizz buzz both


let num= 15;
if(num%3==0 && num%5==0){
  console.log("The number divided by 3 and 5");
  console.log("FizzBuzz!");
}else if(num%3==0){
  console.log("This number Divisible by 3");
  console.log("Fizz!");
}else if(num%5==0){
  console.log("This Number divided by 5");
}else{
  console.log("Not divisible by 3 and 5!");
}

console.log("                                     ");
//Create Calculator using Switch
console.log("Calculator");
let a=20;
let b=4;
let calculator= "add";
switch(calculator){
  case "add":
    console.log("Addition of two number:",a+b);
    break;
  case "subtraction":
    console.log("Subtraction of two nuber:",a-b);
    break;
  case "mutiplication":
    console.log("Multiplication of two number:",a*b);
    break;
  case "divide":
    console.log("Division of two number:", a/b);
    break;
  case "mod":
    console.log("Modulus of two number:",a%b);
  default:
    console.log("No more calculation!");
}


//Create a simple ATM program
let totalBalance= 10000;
let userChoice= Number(prompt(`Choose which you want:
  1. CheckyourBalance
  2.Deposite your Balance
  3.Withdraw your amount which you want
  4.Exit`));
  if(userChoice===1){
    console.log("Your current balace is:",totalBalance);
  }else if(userChoice==2){
    let depositeAmount= Number(prompt("Enter your deposit amount: "));
    if(depositeAmount>0){
      totalBalance= totalBalance+depositeAmount;
      console.log("Yor current balance is:",totalBalance);
    }else{
      console.log("Please enter a valid amount.")
      console.log("Thank You!")
    }

  }else if(userChoice==3){
    let withdrawAmount= Number(prompt("Enter you withdraw amount:"))
    if(withdrawAmount>0 && withdrawAmount <= totalBalance){
      totalBalance-= withdrawAmount;
      console.log("Withdraw Successfull")
      console.log("Your current Balace is:",totalBalance)
    }else{
      console.log("Please enter valid withdraw amount:");
    }
  }else{
    console.log("Thanks For Visiting on my ATM")
  }
alert("Thanks for visiting on my ATM")