//guess the output of this code 
let x = 10;
let y = 5;
let z = "10";

x += y * 2;
let isEqual = x == z;
let isStrictEqual = x === z;
let logicTest = (isEqual || isStrictEqual) && !(y > 10);
let result = logicTest ? ++x : --y;

console.log("x:", x);
console.log("y:", y);
console.log("z:", z);
console.log("isEqual:", isEqual);
console.log("isStrictEqual:", isStrictEqual);
console.log("logicTest:",logicTest);
console.log("Result:",result);
console.log("type of z:", typeof(z));

// Guess the output of the code 

let a=6;
let b=3;
let c= "6";

a += b<<1;
console.log(b<<1);
let d= a&b;
let e= a|b;
let f= a^b;
let g= ~a;

let check = (a==c)&&(d<e)|| !(f===e);
let result1= check? typeof g : --b;

console.log("a:",a );
console.log("b:",b );
console.log("c:",c );
console.log("d (a & b):",d );
console.log("e (a | b):",e );
console.log("f (a^b):",f );
console.log("g (~a):",g );
console.log("check:",check );
console.log("result1:",result1 );