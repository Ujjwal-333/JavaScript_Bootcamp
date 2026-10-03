let arr = [ 1,2,34,4,5,7,78,false, "manas"];
let [first, second, third , ...others]= arr;
console.log(first)
console.log(second)
console.log(third)
console.log(others)


//default values
let [a,b,c,d,e] = [5,6,7,8]
console.log(a,b,c,d);


// let [a,b,c,d,e] = [2,4,5,6,7]
// console.log(a,b,c,d,e);

// swap
/* let a = 5; b = 10;
let temp = a;
a = b;
b = temp;
console.log(a,b); */



//nested destructuring

// let [a1,,,,[x,y]] = [1,2,3[5,6]];
// console.log(a1);
// console.log(x,y);

let [a1, , , , [x, y]] = [1, 2, 3, 4, [5, 6]];
console.log(a1);
console.log(x, y);


let [z, , , [k,l,o]] = [78, , , [45,67,89]];
console.log(z);
console.log(k,l,o);

//Destructuring with rest operstor

let obj= {
  name: "manas",
  age: 21,
  city: "RBL",
  isMarried: false,
}

let {name, age, ...other0} = obj;
console.log(name,age,other0)
console.log(typeof(obj));

