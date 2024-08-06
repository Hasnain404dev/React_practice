 // advance javascript
// IIFE in js

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(45) 
        }, 1000);
    })
}

(async function main() {
    let a=await sleep()
    console.log(b);
    
     let b=await sleep()
     console.log(a);       
})()
// destructure in js
let array = [1,2,3,4,5,6,7,8]
// let [a,b]=[1,2,3,4,5,6,7,8]
// console.log(a,b);
// let [a, b, ...rest]=[1,2,3,4,5,6,7,8]
// console.log(a,b, ...rest);
// ds in obj
let obj={
    a:1,
    b:2,
    c:3,
    
}
let {a,b}=obj
console.log(a,b)




// destructuring in js