// string in javascript
// let a = "Hasnain";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);

let a = "hasnain";
console.log(a.length);
// template literal
{
    let a="hasnain";
    let b ="webdeveloper";
    // console.log("my name is " + a + " and i am a web developer");
    // and there is also the other method that is called string literal method in which we add variable in string easily
    console.log(`my name is ${a} and im a ${b} in mern stack `);
}




// 
// chapter 4 practice set
let c="hasnain";
console.log(c.replace("n","0"));                  
{
    let a="please give Rs 1000";
    console.log(a.indexOf(1000));
    console.log(a.slice(15));
    console.log(typeof a);
}
{
    let a="hasnain";
    console.log(a.toUpperCase());
}
{
    let a="HASNAIN";
    console.log(a.toLowerCase());
}
{
    let a="hasnain nadeem";
    console.log(a.startsWith("h"));
    console.log(a.endsWith("m"));
    console.log(a.includes("ff"));
}
{
    let b="manu dalool"
    let a="  ahsan";
    console.log(a.trim());
    console.log(a);
    console.log(b.concat(a))
    console.log(b.replace("manu dalool" ,"na koi shair na koi bala manu dala manu daala"));
    console.log(b.slice(2, 6));
    console.log(b.split(", "));
}


       