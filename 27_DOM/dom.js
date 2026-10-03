
let p = document.createElement("p");
p.innerHTML="Hello mittar we will meet soon!"
document.body.appendChild(p);


let h1 = document.querySelector('h1');
h1.addEventListener('click', () =>{
  console.log("You click on h1");
  h1.style.backgroundColor = " green"
  h1.innerText = " My friends we will meet one day!"
  h1.style.fontSize = "80px"
  h1.style.color = "red"
})

