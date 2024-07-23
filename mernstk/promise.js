console.log("check the api response")
let p1=new Promise((resolve, reject) => {
    let r=Math.random()
    if (r < 0.5) {
        reject("The error has been occure")
        
    } else {
       setTimeout(() => {
        console.log("The request has been resolve")
        resolve("The request has been submited")
       }, 2000);

    }
})
p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})


let  prom2=new Promise((resolve, reject) => {
    if (error) {
        reject("Error has been occure")
    } else {
        setTimeout(() => {
            console.log("your request has been resolve")
            resolve("your request has been granted")
            
        }, 3000);
    }
})
prom2.then((value)=>{
    
    console.log(value)

}).catch((error)=>{
    console.log("the error has been occure")

})