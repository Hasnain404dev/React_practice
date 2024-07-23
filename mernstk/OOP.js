const additem=async(item)=>{
    await delayFunc()
    let div=document.createElement("div")
    div.innerHTML=item;
    document.querySelector(".box").append(div)
    
}

const delayFunc=async()=>{
    let timeout=1+6*Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },timeout*1000 );
    })
}



let text = ["Initializing Hacking...", "Reading Your Files...", "Password files Detected...", "Sending all password and personal files to server...", "Cleaning up..."]      


for (const item of text) {
 additem(item)
    
}








