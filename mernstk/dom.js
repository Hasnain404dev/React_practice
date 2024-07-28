// find the factorial using for loop and reduce method 
// let a=6
// let b=6
// function factorial(number) {
//     let fac=Array.from(Array(number+1).keys())
//     let c=fac.slice(1,).reduce((a,b)=>{return a*b})
//      return c
    
// }
// console.log(factorial(a))
// // factorial using for loop
// function facfor(numbers) {
//     let fac=1
//     for (let index = 1; index <=numbers; index++) {
//         fac=fac*index
        
//     }
//     return fac
// }
// console.log(facfor(b))
// second method
//  let a=6;
//  function factorial(number) {
//     let arr=Array.from(Array(number+1).keys())
//     let arr2=arr.slice(1,).reduce((a,b)=>{return a*b})
   
//     return arr2
//  }
// console.log(factorial(a))

// let c=8
// function facfor(numbers) {
//    let d=1;
//    for (let index = 1; index <= numbers; index++) {
//       d= d*index
      
//    }
//    return d
// }

// console.log(facfor(c))

let fac=7;
function fact(num) {
   let arr=Array.from(Array(num).keys())
   console.log(arr)
   let arr0=arr.slice(1,).reduce((a,b)=>{return a*b})
   return arr0
}


console.log(fact(fac))











