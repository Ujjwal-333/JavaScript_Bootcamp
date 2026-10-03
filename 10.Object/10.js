// let obj={
//   nmae:"ujjwal",
//   age:21,
//   isMarried:false,
//   profession:"student"
// }
// console.log(obj);

let car={
  brand:"lamborgini",
  color:"matblack",
  text:"Rahul Kumar",
  maxspeed:200,
  stop:()=>{
    console.log("Stop the car...")
    
  },
  start:function(){
    console.log("Starting the car...")
   
  }
}
console.log(car);
console.log(car.text);// dot notation
// console.log(car["text"]);// bracket notation
console.log(car.brand);
car.stop()
car.start()

//Constructor
let obj1= new Object({
  name:"Goodwill"
}) 
obj1.age=19;
obj1.gamma="something";
console.log(obj1);

let objs ={
  //+:"good",
  "+":"by this we can able to use special character or symbols",
  name:"Rahul Gond",
  age:21
}
console.log(objs)
console.log(objs["name"]);//name Rahul Gond
objs.name="Rahul Kumar gond"
console.log(objs["name"]);//update the name Rahul Kumar Gond
console.log(objs["+"]);
objs.city="lucknow";
console.log(objs["city"]);
delete objs.age;
console.log(objs);// here age remove/deleted from objs


let obj2={
  name:"alpha!",
  greet:function(){//agar mein yaha fat arrow function use karu tab mein name print nahi kra paunga  
    console.log(`Hello I am ${this.name}`)
  }
}
obj2.greet()


//object method

let object= {
  name:"john",
  age: 32,
  color:"black",
  height:6,

}
for(let test in object){
  console.log(test)
  console.log(object[test])
}
let enteries= Object.entries(object);
console.log(enteries)

let _obj={
  name:"gopal",
  age:32,
}
Object.freeze(_obj);// by using freeze unable to modify our object 

let $obj= {
  name:"Rahul",
  age:23,
  fullname:"Rahul Kumar",
}
console.log($obj)
Object.seal($obj);//jab hum seal use karte hai tab add kar sakte aur koi modification possible nahi hai
$obj.fullname="Rahul Kumar lal";
console.log($obj);

console.log($obj.hasOwnProperty("age"));// give boolean True or False

//Object Destructuring
let myobj={
  name:"hulk",
  age:"infinity",
  profession:"Superhero"
}
let {name, age,profession}=myobj;// define object
console.log(name, age , profession);

let arr=[1,"Rakesh","Mehvish","Radharani"];//access with key
let [item1,item2,item3,item4]=arr;
// console.log(item1,item2,item3,item4);

