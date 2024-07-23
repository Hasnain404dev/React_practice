let r=document.querySelector(".container").children;
function randomColor() {
    let col1=Math.ceil(0+Math.random()*223);
    let col2=Math.ceil(0+Math.random()*223);
    let col3=Math.ceil(0+Math.random()*223);
    return`rgb(${col1}, ${col2},${col3})`
  
    
}
setInterval(() => {
    Array.from(r).forEach((e)=>{
        e.style.background=randomColor()
        e.style.color=randomColor()
    
    })
}, 1000);
