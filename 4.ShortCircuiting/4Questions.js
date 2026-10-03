// perform Arithmetic Operation which are usin prompt

// let num1= Number= prompt("Enter First Number:");
// let num2= Number= prompt("Enter Second Number:");
// console.log("num1 + num2 = ", num1+num2);
// console.log("num1 - num2 = ", num1-num2);
// console.log("num1 * num2 = ", num1*num2);
// console.log("num1 / num2 = ", num1/num2);
// console.log("num1 % num2 = ", num1%num2);
// console.log("num1 ** num2 = ",num1**num2);

// assign same value using chain
console.log("chain assign value")
let a=b=c=45;
console.log(a);
console.log(b);
console.log(c);

// check number or even using ternary operator
let d= 10;
let evenNumber= (d%2===0)? "the number is even": " the number is odd";
console.log(evenNumber);

//what is the final value of x Using Assignment Operator
let x=5;
x+=3;
x-=2;
x*=4;
x/=6;
x%=3;
console.log(x)


// Check a number is within a range between 10 and 20 (inclusive)
let num= 30;
let range=(num>=10 && num<=20)?"the number is within a range between 10 and 20":"Number is not within a range 10 and 20";
console.log(range);

// Write a program to find the largest number between 3 numbers using ternary Operator
let num3=12;
let num4=8;
let num5=7;
// let num3=4, num4=8, num5=5;
let largest = (num3>num4)?(num3>num5?num3:num5):(num4>num5?num4:num5);
console.log(largest);


// What will be the output of the folowing JavaScript code?
let f=15, g=25, h=20;
let result1= f++ + --g * h-- - ++f + g-- / --h;
console.log("f:",f);
console.log("g:",g);
console.log("h:",h);
console.log("Rresult:",result1); 

//What is the output of (~a)
console.log(~a);// take value from line 14 where initialize 45 -(x+1) put 45 at x you will get -46 got it!
console.log(~z);// not defined / reference error

// username and password and match with dataBaseUser and dataBasePassword

let username="";
let password="";

let dataBaseUser="Rahul12";
let dataBasePassword="@2345R";

//let result2= (username && password)?"Login successfull": "Username and Password required for login";
let result2= (username && password && username===dataBaseUser && password===dataBasePassword)?"Login successfull": "Username and Password required for login";
console.log(result2);

//what will be the output of following java script code 


