class Car{
  constructor(name, color, mileage){
    this.name = name;
    this.color = color;
    this.mileage = mileage
   }

   start(){
    console.log(`${this.name}, ${this.color},${this.mileage}, is starting`);
   }
}

let BMW =  new Car("BMW","Dark_Blue", 5);
let toyota = new Car("Toyota", "silver",18);
console.log(BMW);
console.log(toyota);


/* Four pillars of OOP:
 
Abstraction: hiding complexity and showing only the essential features.

 Encapsulation - hiding data inside objects and provide security.

 Inheritance - Using properties and methods from another object/class.

 Polymorphism - same method behaving differently based on the object. 
 
 */


class bus{
  #fuel = 100 // Agar hum # us ekarte hai tab ye private ho jata hai Encapsulation

  burnFuel(){
    this.#fuel -= 1
  }

  starts(){
    this.burnFuel();
    console.log(`Car is starting...`);
  }
}


let buggati = new bus();
buggati.starts();
console.log(buggati);





