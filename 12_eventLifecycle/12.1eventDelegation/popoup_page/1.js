let button = document.querySelector(".btn");
let closeBtn = document.querySelector(".closeBtn");
let modalContainer = document.querySelector(".modalContainer");

button.addEventListener('click',()=>{
  modalContainer.style.display='flex'
})

closeBtn.addEventListener('click',()=>{
  modalContainer.style.display='none';
})
modalContainer.addEventListener("click",(event)=>{
  if(event.target.className === 'modalContainer'){
    modalContainer.style.display ="none"
  }
})