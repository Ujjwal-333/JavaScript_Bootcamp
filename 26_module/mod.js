// const obj = require('./script.js')
// console.log(Obj.name)
// console.log(obj.age)

// const {name, age, sum} = require('./script.js')
// // const {name:firstName, age:myAge} =require('./script.js') rename 
// console.log(name);
// console.log(age);
// let sum1 = sum(3,4);
// console.log(sum1);

import sum from './script.js'

import { subtract, multi, divide} from './script.js'
console.log(sum(2,3));
console.log(subtract(2,3));
console.log(multi(4,6));
console.log(divide(4,7));



