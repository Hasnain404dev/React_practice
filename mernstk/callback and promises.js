// console.log("thsi is the promises")
// console.log("thsi is the promises")
// setTimeout(()=>{
//     console.log("this is set time out function")
// },1000)

// let a=[1,2,3,4,5,6]
// let b=a.map((value,index)=>{ 
//     return value*index
// })
// console.log(b)
// console.log("this is end")
// const fn=(arg)=>{
//     console.log(arg)
// }

// let callback=(arg,fn)=>{
//     console.log(arg)
//     fn("this is fn function")
// }
// const loadSript=(src,callback)=>{
//     let sc=document.createElement("script")
//     sc.src=src;
//     sc.onload=callback("manu don",fn)
//     document.head.append(sc)
//     }

// loadSript("https://google.com",callback)
//  Promiss in javascript

console.log('this is promise');
let prom1=new Promise((resolve,reject)=>{
    let ran=Math.random()
    if (ran<0.5) {
        reject("you request has been rejected")
    }
    else{
    setTimeout(() => {
        console.log("this is set time out")
        resolve("this is done")
    }, 2000);}
})
let prom2=new Promise((resolve,reject)=>{
    let ran=Math.random()
    if (ran<0.5) {
        reject("you request has been rejected")
    }
    else{
    setTimeout(() => {
        console.log("this is set time out")
        resolve("this is done")
    }, 2000);}
})
let prom3=new Promise((resolve,reject)=>{
    let ran=Math.random()
    if (ran<0.5) {
        reject("you request has been rejected")
    }
    else{
    setTimeout(() => {
        console.log("this is set time out")
        resolve("this is done")
    }, 2000);}
})
let prom4=new Promise((resolve,reject)=>{
    let ran=Math.random()
    if (ran<0.5) {
        reject("you request has been rejected")
    }
    else{
    setTimeout(() => {
        console.log("this is set time out")
        resolve("this is done")
    }, 2000);}
})
let prom5=new Promise((resolve,reject)=>{
    let ran=Math.random()
    if (ran<0.5) {
        reject("you request has been rejected")
    }
    else{
    setTimeout(() => {
        console.log("this is set time out")
        resolve("this is done")
    }, 2000);}
})
let prom6=new Promise((resolve,reject)=>{
    let ran=Math.random()
    if (ran<0.5) {
        reject("you request has been rejected")
    }
    else{
    setTimeout(() => {
        console.log("this is set time out")
        resolve("this is done")
    }, 2000);}
})

let result=Promise.allSettled ([prom1,prom2,prom3,prom4,prom5,prom6])
result.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})


// prom1.then((a)=>{
    
//     console.log(a)

// })
// prom1.catch((err)=>{
//     console.log(err)
// })






















