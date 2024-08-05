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



// destructuring in js