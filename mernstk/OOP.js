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



let text = ["Initializing files...",
    "Reading Your emails and pasword...",
    "Password files Detected...",
    "Sending all password and personal files to server...",
    "Fetching Personal Data..."]


// for (const item of text) {
//     additem(item)

// }
text.forEach(item => {
    additem(item)
});








