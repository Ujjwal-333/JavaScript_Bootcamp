
// // Factory Function


// function createStudeent(name, age){
//   return{
//     name,
//     age,
//     greet (){
//       console.log(`Hi, I'am ${name} and age is ${age}`)
//     }
//   };
// }

// const s1 = createStudeent("Manas", 21);
// const s2 = createStudeent("Ujjwal", 22);
// s1.greet();
// s2.greet();

// // constructor function

// function student1(myName,age,passion){
//   this.myName = myName
//   this.age = age
//   this.passion = passion
//   return this;

// }

// let result = new student1("mkl", 23, "bakaiti");
// let result1 = new student1("Ujjwal", 22, "Rola");
// console.log(result);
// console.log(result1); //overwrite the result

// // agar hum new keyword use karenge tab overwrite nahi hoga 

// let result3 = new student1("Hello", 23, "Rowdy");
// console.log(result);

// // class syntax ES6
// class Student2{
//   name; 
//   age;
//   passion;
//   constructor(name, age, passion){
//     this.name = name;
//     this.age = age;
//     this.passion = passion;
//   }
// }

// let s3 = new Student2("mkl", 21, "bakaiti")
// let s4 = new Student2("Ujjwal", 34, "Rolla");
// console.log(s3);
// console.log(s4);


function BankAccount(holdersName,balance = 0){
  this.holdersName = holdersName;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (balance){
  this.balance +=balance;
}

BankAccount.prototype.withdraw = function(balance){
  this.balance -= balance;
}

console.log(BankAccount.prototype)

let manasAccount = new BankAccount("Ujjwal", 220);
let rohan = new BankAccount("Rohan", 230);
console.log(manasAccount);
console.log(rohan);