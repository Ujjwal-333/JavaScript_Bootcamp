class Person{
  constructor(name,city,phone){
    this.n1 = name
    this.c1 = city
    this.p1 = phone
    console.log("name =",this.n1);
    console.log("city =",this.c1);
    console.log("phone =", this.p1)
  }
  details(){
    console.log("name =",this.n1);
    console.log("city =",this.c1);
    console.log("phone =", this.p1)
  }
}

let obj = new Person("Ujjwal", "raebareli", 8917040540)

// obj.details();



class Car{
  constructor(year,modal,company){
    this.year = year
    this.modal = modal
    this.company = company
  }
  year1(){
     console.log("year of manufacturing =", this.year)
  }
   modal1(){
     console.log("modal of BMW M5 =", this.modal)
  }
   company1(){
     console.log("Name of comapany BMW =", this.company)
  }
}

let myCar = new Car(2025, "M5", "BMW");

myCar.year1()

// let obj2 = new Car(M5)
myCar.modal1()

// let obj3 = new Car(BMW)
myCar.campany1()



// extend and super method