let heroes=["spiderman","thor","ironman","hulk","wanda","batman","hawkeye"];
heroes.sort();
console.log(heroes);

let arr= [12,10,8,9,6,43,5,4,3,27]
arr.sort((a,b)=>{
  console.log(a,b);
  return a-b;// accending order
})
console.log(arr);

arr.sort((a,b)=>{
  console.log(b,a)
  return b-a;//Deccending order
})
console.log(arr);


let myarr=[1,2,3,4,5,7,86]
let newarr= myarr.map((elem,index,myarr)=>{
  console.log(elem,index,myarr);
  return elem*2;
})
console.log("Original array:",myarr);
console.log("New array:",newarr);

let myarr1=[1,4,5,6,7,8,9]
let newarrs= myarr1.forEach((elem,index)=>{
  myarr1[index]=elem*2
  console.log(elem,index);
  // return elem*2;
})
console.log("Original array:",myarr1);
console.log("New array:",newarrs);//

//filter 

let flt = [2,4,6,8,17,12,13,16,18,19]
let arrs=flt.filter((elem,index,flt)=>{
  // return elem%2 === 0;
  return elem*2;// no change print as it is work on truthy and falsy value 
})
console.log(flt);
console.log(arrs);

//reduce
let rst =[6,8,9,92,89,67]
let result= rst.reduce((prevVal,currVal)=>{
  return prevVal+currVal;
},20);// agar mene preVal diya hai kuchh jaise yaha 20 diya hai to preval 20 aur currentValue 6 hoga sum 26 otherwise same as below
console.log(result);// 6 preVal and 8 is currentValue sum=14 now 14 preVal and 9 currVal sum=23 now 23 preVal and 92 currVal sum is 115 now preVal 115 and currVal 89 sum=204 now preval 204 and currval is 67 sum= 271