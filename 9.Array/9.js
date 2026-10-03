let arr=(4,5,6,7,"ragni","bilgate",0);
let arr1=["apple", "Mango", "Pineapple"];
let arr2=["Manoj", 34, 56, "ujjwal",["two", 4, 8,9]]
console.log(arr);
console.log(arr1);
console.log(arr2);

//constructor method

let array = new Array(2,3,4,5,"Constructor method" ,"Array");
console.log(array);

let str= new String("My friends are playind 8pool")
console.log(str);

let arr3= [20];
let carr= new Array(20).fill(69);
console.log(arr);//[20]
console.log(carr);//[<20 empty items>]


console.log(arr3.length)
console.log(carr.length);
console.log(typeof(arr3));// output is object

let arrch= [1,2,6,7,8,9,4]
console.log(arrch[0])
console.log(arrch[3])
console.log(arrch[6])
arrch[3]=99;
console.log(arrch[3]);
console.log(arrch);


let array1=[1,2,3,4,5,6,7,8,9,7,6,5]
for(let i=0;i< array1.length;i++){
  console.log(array1[i]*2);
}


//Array Method 
let psh= [2,3,4,5,6,8]
console.log(psh,psh.length);
let a= psh.push(99);
console.log(psh,a,psh.length)
let b=psh.pop()
console.log(psh,b)// push and pop add and remove from last index
console.log("          ")


let sht= [5,7,8,9,"manohar","gopal",7,6];// unshift add element in starting
sht.unshift(7)
console.log(sht)
sht.shift()// shift remove element from starting index 
console.log(sht);
// sht.shift()
// console.log(sht)


let newArr=sht.slice(1,5);
console.log(sht.slice(-3,3))
console.log(sht);
console.log(newArr);


let spl= ["manohar","gulab","rakesh",78,9,34,34]
let test = spl.splice(3,2,"god","beautifull");// after index 3 remove two element (78,9) add other...
console.log(spl);
console.log(test);

console.log("                      ");
let arrs=[5,6,7];
let arrs1=[3,4,5,7,8,"my","dear"];
let newarr = arr1.concat(arrs,arrs1);
console.log(arr1)
console.log(newarr);

// spread Operator

console.log("                        ")
console.log("spreadOperator")
let myarr= [...sht,...arr2,...arr3]
console.log(myarr)

let fruits =["mango","guava","pineapple","strawberry"]
let tests=fruits.find(function(item){
  return item==="rasberry"
})
console.log(tests);

let heroes=["spiderman","thor","hulk",["srk",["sallu"],"Amir"],["batman,loki",["ironman","galaxy"],"groot"]]
console.log(heroes.flat(1));
console.log(heroes);
console.log(heroes.flat(Infinity));// jitne bhi nested array ho unko break kar deta hai normal m=array mein change kar deta hai


