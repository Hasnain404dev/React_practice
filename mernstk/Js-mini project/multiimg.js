// this is the first method butt this method applied only first Selection
// let box=document.querySelector(".box");
// let boximg=document.querySelector(".box-img");
// box.addEventListener("mousemove",(dets)=>{
//     boximg.style.left=dets.x + "px"
//     boximg.style.opacity="1"
// })
// box.addEventListener("mouseleave",(dets)=>{
//     boximg.style.opacity="0"
// })
// 2.this is the 2nd method in which we applied all 

let box=document.querySelectorAll(".box")
box.forEach((value)=>{
    
value.addEventListener("mousemove",(dets)=>{
    value.children[0].style.left=dets.clientX + "px"
})
value.addEventListener("mouseenter",()=>{
    value.children[0].style.opacity="1"
})
value.addEventListener("mouseleave",()=>{
    value.children[0].style.opacity="0"
})
   

})
