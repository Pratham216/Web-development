let arr = [1,13,4,14,15];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }
// Alternate method is mapping

// MAPPING

let newArr = arr.map((Element) =>{
    return Element**2;
}
)
console.log(newArr);

// FILTER

const greaterThanSeven = (element)=>{
    return (element>7)?true: false;
}

console.log(arr.filter(greaterThanSeven));

// REDUCE

let arr2 =[2,3,5,1,8];

let add = (a,b) =>{
    return a+b;
}
console.log(arr2.reduce(add));