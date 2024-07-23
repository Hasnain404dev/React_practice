// this is tutorial by array for javascript   
// let arr = [1, 2, 3, 4, 5, 6]
// first print the array
// console.log(arr);
// second print the length of the array/
// console.log(arr.length);
// third print the array through the index number
/*console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);*/
// fourth  add the new number on existing array
/*arr[0]=5;
arr[6]=1;
console.log(arr);*/
// five return the type of array 
// console.log(typeof arr);

// next topic is array mehtod;
// 1:- first method convert the array into the String
// let a = [1, 5, 6, 8, 7, 9, 8, 2]
// console.log(a.toString());
// second method in array is join the array Element
// console.log(a.join("+"));
// third  method  pop the Element in the array
// console.log(a.pop());
// console.log(a);
// 4:- push method this the very important method in array to add a new element in the array
// let c = [1, 2, 3, 4, 5, 6, 7]
// c.push(100);
// c.push("manu dalol");
// console.log(c);
// console.log(c.length);
// shift method use to remove the first Element in array
// let d = [1, 2, 3, 45, 6, 9]
// // d.shift();
// console.log(d.shift());
// console.log(d);
// pop are shift function are related pop is use to remove Element form the end of the array and the shift is use to remove the first eelment of the array
// unshift method is use to add Element in the begining of the strinig
// let f=[45,22,44,11,13]
// f.unshift("manu")
// console.log(f);
//  unshift and push are relative push is use to enter the Element end of the array  and unshift is use to enter the element start of the array 
// delete method in array

// {
//     let f=[45,22,44,11,13]
//     delete f[0]; //delete is a operator
//     console.log(f);
// }
// concat use to join arrays
// let a1=[1,2,3]
// let a2=[4,5,6]
// let a3=[7,8,9]
// console.log(a1.concat(a2,a3));
// {
//     let a1=['hasnain','is','a']
//     let a2=['mern','stack','developer.']
//     let a3=['he','also','nextjs','developer']
//     console.log(a1.concat(a2,a3));
// }
// sort array in js``
// {
//     let a=[1,3,2,6,8,4,9,5]
//     // a.sort(); //both method are same 
//     console.log(a.sort());
// }
// splice array in js
// {
//     let a=[1,2,3,4,5]
//     a.splice(0,3);
//     console.log(a);
// }
// slice in array`and reverse method`

// {
//     let a=[1,2,3,4,5]
//     console.log(a.reverse())
//     console.log( a.slice(2));
// }

// loop in arrays 
// let e=[1,2,3,4,5,6]
// for (let index = 0; index < e.length; index++) {
//     const element = e[index];
//     console.log(element);
    
// }
// {
//     let e=[1,2,3,4,5,6,7,8,9]
//     for(let index=0; index < e.length; index++){
//         const element=e[index];
//         console.log(element);

//     }

    
// }

// for each in js 

{
    // console.log("for each loop in js");
    // let a=[1,2,3,4,54,6,7]
    // a.forEach(element => {
    //     console.log(element);
        
    // });
    // console.log("for each loop second method");
    // let b=[1,5,6,7,8,9,6]
    // a.forEach((value,index, b)=>{
    //     // const element=a[index];
    //     console.log(value,index,b);

    // });
}


// for in loop and for of in js
// let obj={
//     a:1,
//     b:2,
//     c:3,
//     d:'hasnain'

// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj,key)) {
        
//     const element = obj[key];
//     console.log(key,element);    
//     }
    
// }
// {
//     // for of loop is js
//     let a=[1,2,3,4,5,6,7,6]
//     for (const value of a) {
//         console.log(value);

//     }
// }
// map in array 
// {
    // let arr=[1,2,3,5,6,11]
    // let newArr=[]
    // for (let index = 0; index < arr.length; index++) {
    //     const element = arr[index];
    //     newArr.push(element**2);
    //     console.log(newArr);
        
    // }
//     let newArr=arr.map((index,e,arr)=>{
//         return e**2
//         })
//     console.log(newArr);
//     // console.log()
// }
// {
//     let a=[1,2,3]
//   let newArr=  a.map((value,index,a)=>{
//         return value*value;
//         })
//    console.log(newArr);
// }
// array method and revision practice


// acces the array value
// const x=[1,2,3,4,5,6]
// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);
// console.log(x[3]);
// console.log(x[4]);
// // length of an array
// console.log("the lenght of the array is=",x.length)
// // change the value of an array acording to index
// x[2]=8;
// console.log(x);
// // type of the array  is object
// console.log(typeof x);
// array method :-

// let a=[1,2,3,4,5,6]

// convert array into string
// console.log(a.toString());
// join array Element
// console.log(a.join("*"));
// pop method is use to remove the last element of the array
// let c = a.pop()
// console.log(c);
// console.log(a);
// a.push("hasnain")
// console.log(a);
// console.log(a.length);
// shift method and pop method are similar 
// console.log(a.shift());
// console.log(a.length);
// console.log(a);
// unshitp and push mehtod are similar
// console.log(a.unshift(4))
// console.log(a)

// delete method use to delete the array element 
// delete a[5];
// console.log(a);
// concate method in javascript
// let a1=[24,56,89];
// let a2=[44,16,99];
// let a3=[14,86,59];
// console.log(a1.concat(a2,a3))

// sort method
// let a1=[1,3,6,5,4,9,8,7,2]
// console.log(a1.sort())

// splice method
// let a=[1,2,3,4,5,6]

// console.log(a.splice(1,5,255,55))
// console.log(a)
// // slice method
// let b=[1,2,3,4]

// console.log(b.slice(1,3))
// console.log(b)

// loopting in array

// let a=[1,2,3,4,5,6,7,8,9]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
    
// }
// print the Element  using for in loop
// let a1=[45,55,99,"hasnain",556]
// for (const key in a1) {
//     if (Object.hasOwnProperty.call(a1, key)) {
//         const element = a1[key];
//         console.log(element ,key);
        
//     }
// }
// for in loop
// let obj={
//     name:"Hasnain",
//     degree:"Bsit 2024",
//     institute:"GCUF",
//     skills:"Web Development,"
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
        
//     }
// }
// for of loop
// let a1=[45,55,99,"hasnain",556]
// for (const value of a1) {
//     console.log(value);
// }
// for each loop for call a function once for each loop
// let b=[1,2,3,4,5,6,7,8,9]
// b.forEach((index,value,b) => {
//     console.log(index,value,b)
// });
// map in js
// let a=[1,2,3,4,5]
//  a.map((index,value)=>{
//     return index*index
    
// });
// console.log(a)
let b=[1,2,3,4,6,6,9]
let c = b.map((value,index,b)=>{
    return value**2

});
console.log(c);
// filter of an array
let a1=[1,5,6,8,9,7,10,56,54]
let func1=(value)=>{
    if(value>7){
        return true;
    }
    else{
        return false;
    }
}
console.log(a1.filter(func1));
// ruff code
// let a2={
    //     name:"hasnain",
    //     degree:"Bsit",
    //     year:"20-24"
    // }
    // let func2=(a2,value)=>{
        //     for(let key in a2){
            //         if(a2[key]===value){
                //             return true;
                //         }
                
                //     }
              //     return false;
                
         // }
      // console.log(func2(a2,"hasnain"));
       // console.log(func2(a2,"false"));
  // ruff code
                
//   reduce method in js

let a3=[1,3,5,6,8,9]
let sum=(a,b)=>{
    return a+b;
}
console.log(a3.reduce(sum))

let a4=['hasnian',' ','web','developer']
let conString=((index,element)=>{
    return index+element;
})
console.log(a4.reduce(conString))

// practice set  of map filter and reduce
// filter 4 number divisble by 10 from a given array
// let a=[12,42,10,40,89,20,50,6,4,80,90]
// let divBy=((value,index)=>{
//     if(value%10===0 ){
//         return value;
        
//     }
   


// });
// console.log(a.filter(divBy))
// create an Array of square of givin number
// let a=[2,4,6,7,9,8]
// let x=a.map((value,index)=>{
//     return value*value;

// });
// console.log(x);

// claculate the fictorial by using reduce

// convert the string in to upper case
//  let str=['hasnan','nadeem','webdeveloper']
//  let upper=str.map((value)=>{
//     return value.toUpperCase()

//  })
//  console.log(upper);

//  second-method------------------
// function uppercase(array) {
//     return array.map(value=> value.toUpperCase())
// }
// let array=['hasnan','nadeem','webdeveloper']
// console.log(uppercase(array))

// extract property values----------
// let people=[
//     {name:"hasnain",age:22},
//     {name:"ahsan",age:23},
//     {name:"manu",age:24},
//     {name:"peer",age:25},
// ]
// function extract(obj,property) {
//     return people.map(value=>value[property])
    
// }
// console.log(extract(people,'name') );
// console.log(extract(people,'age') );
// logic building is very important

// append the index
// function apped(strings) {
  
//     return strings.map((value,index)=>`${value}${index}`);
// }


// let str=['hasnain','nadeem','khan']
// console.log(apped(str));
// increment each number
// calculate the factorial by using 
//  


















