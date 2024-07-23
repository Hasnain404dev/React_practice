// async await and fetch api 
/*async function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data fatching....")
            resolve("return data")
        }, 5000);
    })
}
async function main() {
    console.log("loading modules")
    console.log("loading encrypted files")
    console.log("load data")
    let data= await getdata()
    console.log(data)
    console.log("process data..")
    
    
}
main()*/
// data.then((value)=>{
//  console.log(data)
//  console.log("process data")
// })


// fetch api in js
// async function getData() {
//     let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => response.json())
//     // .then(json => console.log(json))
//     let data=await x.json();
//     return data
// }

// async function main() {
//     console.log("fetching the data....")
//     let data=await getData()
//     console.log(data)
//     console.log("data fetched successfuly..")

    
// }
// main()



// function getData() {
//     let a=fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=cma_grapes_global")
//     a.then((response)=>{
//         console.log("api fetching")
//         console.log(response.status)
//         console.log(response.ok)
//         console.log(response.headers)
//         // console.log()
//         return response.json()
//     }).then((value)=>{
//         console.log(value)      
//     })
    
// }
// getData()


// async function apiData() {
//     let a = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=cma_grapes_global")
//     let data=await a.json();
   
//     return data;

// }

// async function mainData() {
//     // console.log(a.status)
//     console.log("api fetch..")
//     let  y=await apiData() 
//     console.log(y)
    
// }
// mainData()
// post request in api



// const data=async(todo)=>{



// let option={
//     method:"post",
//     headers:{
//         "Content-type":"application/json",
//     },
//     body:JSON.stringify(todo),
// }
// let p= await fetch('https://jsonplaceholder.typicode.com/posts',option)
     
//     let response=await p.json()
//     return response

// }
// let midfetch=async(id)=>{
//     let api=await fetch('https://jsonplaceholder.typicode.com'+ id)
//     let res=await api.json()
//     return res
// }

// let mainfunc=async()=>{
//     let todo={
//         title:'Hasnain',
//         body:'nadeem',
//         userId:'123'

//     }
//     let todor=await data()
//     console.log(todor)
//     console.log(await midfetch(5))
// }
// mainfunc()



