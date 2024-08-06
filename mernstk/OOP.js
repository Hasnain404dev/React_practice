const additem = async (item) => {
    await delayFunc()
    let div = document.createElement("div")
    div.innerHTML = item;
    div.setAttribute("class", "inner-box")
    document.querySelector(".box").append(div)
    

}

const delayFunc = async () => {
    
    let timeout = 1 + 6 * Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

async function main() {
    setInterval(() => {
        let dot=document.querySelectorAll(".inner-box");
        dot.forEach(blink=>{
        if (blink.innerHTML.endsWith("...")) {
            blink.innerHTML=blink.innerHTML.slice(0, blink.innerHTML.length-3)
            
        }
        else{
            blink.innerHTML=blink.innerHTML += "."
        }
    }, 9000);
});



let text = ["Initializing files",
    "Reading Your emails and pasword",
    "Password files Detected",
    "Sending all password and personal files to server",
    "Fetching Personal Data"]


for (const item of text) {
    await additem(item)

}
}
main()
// text.forEach(item => {
//     additem(item)
// });








