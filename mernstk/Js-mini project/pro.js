let fs  =document.querySelector(".img-dis2")
let btn=document.getElementById("btn1")
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
let click=0;
btn.addEventListener("click",()=>{
    if (click==0) {
        fs.innerHTML="Friend"
        fs.style.color="green"
        btn.innerHTML="Remove Friend"
        btn.style.backgroundColor="lightgrey"
        click=1;
    } else {
        fs.innerHTML="Stranger"
        fs.style.color="red"
        btn.innerHTML="Add Friend"
        btn.style.backgroundColor="Green"
        click=0
    }
})
