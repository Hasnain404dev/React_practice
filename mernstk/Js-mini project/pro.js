//   1.Add friend Feature with same button
// let fs  =document.querySelector(".img-dis2")
// let btn=document.getElementById("btn1")
// btn.addEventListener("click",function(){
//     fs.innerHTML="Friend"
//     fs.style.color="green"
// })
// let btn2=document.getElementById("btn2")
// btn2.addEventListener("click",function(){
//     fs.innerHTML="stranger"
//     fs.style.color="red"
// })
// second method
// let click=0;
// btn.addEventListener("click",()=>{
//     if (click==0) {
//         fs.innerHTML="Friend"
//         fs.style.color="green"
//         btn.innerHTML="Remove Friend"
//         btn.style.backgroundColor="lightgrey"
//         click=1;
//     } else {
//         fs.innerHTML="Stranger"
//         fs.style.color="red"
//         btn.innerHTML="Add Friend"
//         btn.style.backgroundColor="Green"
//         click=0
//     }
// })

// 2.Insta Love btn

// let cont=document.querySelector(".main")
// let dclick=document.querySelector(".img-1");
// dclick.addEventListener("dblclick",()=>{
//    cont.style.transform="translate(-50%,-50%) scale(1)"
//    cont.style.opacity="0.8"
//     setTimeout(() => {
//          cont.style.transform="translate(-50%,-50%) scale(0)"
//            cont.style.opacity="0"
//     },2000 );
// })
// 3. Custom cursor
let main= document.querySelector(".main")
// console.log(main)
let crsr=document.querySelector(".cursor")

main.addEventListener("mousemove",(dets)=>{
    crsr.style.top=dets.y +"px"
    crsr.style.left=dets.x +"px"
  
    // console.log(dets.x)

})