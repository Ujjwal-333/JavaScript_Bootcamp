let grandParent = document.querySelector(".grand-parent")
let parent = document.querySelector(".parent")
let child = document.querySelector(".child")

// grandParent.addEventListener("click", function(){
//   console.log("Grand Parent par click hua")
// })
// parent.addEventListener("click", function(){
//   console.log("Parent par click hua")
// })
// child.addEventListener("click", function(){
//   console.log("Child par click hua")
// })


// Bubbling Phase bottom to top By default Bubbling enabled

// grandParent.addEventListener("click", function(){
//    alert("Grand Parent par click hua")
//  })

//  parent.addEventListener("click", function(){
//    alert("Parent par click hua")
//  })
//  child.addEventListener("click", function(){
//    alert("Child par click hua")
//  })

// Capturing phase top to bottom

// grandParent.addEventListener("click", function(){
//     alert("Grand Parent par click hua")
//   },true)

//   parent.addEventListener("click", function(){
//     alert("Parent par click hua")
//   },true)

//   child.addEventListener("click", function(){
//     alert("Child par click hua")
//   },true)

// grandParent.addEventListener("click", function(event){
//      console.log("Grand Parent");
//      console.log('ye event target hai:',event.target)
//      console.log('ye current target hai:', event.currentTarget)
//      console.log('ye this hai iska context change hota rahata hai depend karta hai hum kese use kar rahe:',this)

//    })
//    parent.addEventListener("click", function(event){
//      console.log("Grand Parent");
//      console.log('ye event target hai:',event.target)
//      console.log('ye current target hai:', event.currentTarget)
//      console.log('ye this hai iska context change hota rahata hai depend karta hai hum kese use kar rahe:',this)

//    })
//    child.addEventListener("click", function(event){
//      console.log("Grand Parent");
//      console.log('ye event target hai:',event.target)
//      console.log('ye current target hai:', event.currentTarget)
//      console.log('ye this hai iska context change hota rahata hai depend karta hai hum kese use kar rahe:',this)

//    })


   // stop propagation
    
grandParent.addEventListener("click", function(event){
   console.log('Grand Parent')  
   console.log('Ye Target Event hai', event.target)
   },true)

   parent.addEventListener("click", function(){
    console.log('Parent') 
    console.log('Ye current target hai',event.currentTarget)
    event.stopPropagation();
   },true)

   child.addEventListener("click", function(){
     console.log('Child')
     console.log(event.target)
  },true)
