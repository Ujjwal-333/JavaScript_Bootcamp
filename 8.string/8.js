// let greeting= "hello, world";

//const { cacheSignal } = require("react");

// console.log(greeting.length);  // 13
// console.log(greeting.toUpperCase());  //"HELLO, WORLD"
// console.log(greeting.includes("Web"));  //False
// console.log(greeting.split(" , "));    //["hello", "world"](Converts to Array)
// console.log(greeting.slice(0,5));     //"hello"



// let text = "Hello"; 
// console.log(text.at(-1)); // "o" (at negative index support karta hai, peeche se)
// console.log(text.charAt(0)); // "H"
// console.log(text.charCodeAt(0));// 72 (H ka unicode)
// console.log(text.indexOf("l"));  // 2 (pahla "l" kha hai)
// console.log(text.lastIndexOf("l")); // 3 (Aakhri "l" kahan hai)
// console.log(text.length); // 5(Total Character)



// // Checkers (haan ya Naa Mein jawab)
// let msg = "JavaScript is awesome";
// console.log(msg.includes("Script"));// true
// console.log(msg.startsWith("java")); // true



let str="Good will,";
let alpha = "@" + "Rahul" + "kumar" + 234;
console.log(str, typeof(str));
console.log(alpha, typeof(alpha));


let firstName = "Alice";
let lastName = "Bob";
let fullName =`${firstName} ${lastName}`;
console.log("Fullname:",fullName);


let a=10;
let b=30;
let c=40;
let strs =`Number 1= ${a} Number 2= ${b} Number 3= ${c}`;
console.log(strs);

let gamma = `str = $(2+3+9-9)`
console.log(gamma);

let str1= "hello goody \nmy goodness"
console.log(str1, str1.length)
let str3= "hello \" beta";
console.log(str3);


let str4= "w3school"
console.log(str4[1]);
console.log(str4[3])
console.log(str4[7])

let fun="Information gathering";
for(let ch of fun){
  console.log(ch)
}

for(let key in fun){
  console.log(key)
}


// properties: we do not use parenthesis it's give info (koi kaam nahi karta hai)
// method: we use parenthesis kaam kar raha hota hai

//method

let myStr = "hello";
let strcopy=myStr.toUpperCase();
let lowercase = myStr.toLowerCase();
console.log(myStr, strcopy);// string ko hum change nahi kar sakte (immutable) string immutable hoti hai
console.log(lowercase);

let trim = " Recon-Ng  good"
console.log(trim);
console.log(trim.trim())


let fname = "Abhishek";
let lname = "Singh";
let fllname = fname.concat( " ",lname);
console.log(fllname);

let sens= "I am a boy";
let check= sens.includes("boy");
console.log(check);
console.log(sens.indexOf("b"));
console.log(sens.charAt(3))
console.log(sens.replace("boy","Man"))


let phase = "she loves fruits but also vegetables"
console.log("",phase);
let code = "@Ujjwal666000"
console.log(code, code.slice(1))// agar string se kuch bhi delete karna ho like: @
console.log(code, code.slice(3,8));
console.log(code,code.slice(-1,-4));
let del= "#Rahul0inthe";
console.log(del, del.substring(-6,11))
console.log(del, del.slice(-6,11))

let splt = "alpha beta sine theta";
console.log(splt.split(""))
console.log(splt.split(" "))
console.log(splt.split("a")) //remove all a from string

