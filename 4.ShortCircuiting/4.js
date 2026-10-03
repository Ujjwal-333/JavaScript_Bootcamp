let result= ""|| "ram"|| null;
console.log(result);
let a = "" || null || undefined || NaN;
console.log(a);
let b= "" && null && undefined && NaN;
console.log(b);
let c = "" && 34 && NaN;
console.log(c);
let d= true && true && false;// agar ek bhi operand false ho gya tab false ho jayega 
console.log(d);
let e= false || false || 45 || false;
console.log(e);
let f= false || undefined || null || "secure"; // OR  find truthy value, AND find falsy value
console.log(f);


console.log("Nullish Coalescing");// null and undefined hai tab dusra return kar dega lekin agar "", 0 to yesha hi return kar dega 
let temp = null ?? "default";
console.log(temp);

let temp1 = 0 ?? "UJJU";
console.log(temp1);