let listContainer = document.querySelector(".listContainer")


listContainer.addEventListener('click',(event)=>{
  if(event.target.classList.contains('listItem')){
    event.target.style.textDecoration='line-through'
  }
  event.target.style.textDecoration='line-through'
})