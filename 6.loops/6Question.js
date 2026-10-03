for(let i=0; i<=30; i++){
  if(i%2==0){
    console.log("Even numbers between 0 to 100:",i);
  }
}

let str="ujjwal";
let consonantCount= 0;
let vowelCount= 0;
for(let ch of str){
  if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"||ch==="A"||ch==="E"||ch==="I"||ch==="O"||ch==="U"){
    console.log("");
    vowelCount++
  }else if(ch==" "){
    console.log("Space not count:")
  }
  else{
    
    consonantCount++;
  }
}
console.log("Vowels=",vowelCount);
console.log("Consonant=",consonantCount);



// calsulate sum of n numbers
let n=10;
let sum=0;
for(let i=0;i<=n; i++){
  sum+=i; 
}
console.log("Total sum of number is:",sum);

// Print all odd number between 0 to n

let num = 15;

for (let j = 0; j <= num; j++) {
  if (j % 2 !== 0) {
    console.log(j + " is odd");
  } 
}