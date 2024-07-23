let arr=[];
let a =5;

for (let index = 1; index <= a; index++) {
    arr.push(index);
}
console.log(arr)

let factorial = (a,b)=>{
    return a*b
}

console.log(arr.reduce(factorial))

// let a = 7

// function factorial(number){
//    let arr = Array.from(Array(number+1).keys())
//    let c = arr.slice(1,).reduce((a, b)=> a*b )
//    return c
// }


// function facFor(number){
//     let fac = 1;
//     for (let index = 1; index <= number; index++) {
//         fac = fac * index
//     }
//     return fac
// }
// console.log(factorial(a))
// console.log(facFor(a))