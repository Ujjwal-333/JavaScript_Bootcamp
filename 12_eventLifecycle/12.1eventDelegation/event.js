let container = document.querySelector('.container')

// for small task
// container.childNodes.forEach((elem)=>{
//   elem.addEventListener('click',()=>{
//     // console.log(elem.innerText)
//     console.log(elem.innerHTML)
//   })
// })

container.addEventListener('click',function(event){
  let target= event.target;
  if(target.className === 'box'){
    console.log(target.textContent)
  }
})