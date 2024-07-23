let array= [1,8,2,7,11,19];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
console.log("**********************");

array.forEach((element, index, array )=> {
    console.log(element, index, array);
});

console.log("**********************");

let object = {
    1 : "A",
    2 : "B",
    3 : "C",
    4 : "D",
    5 : "E"
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element, key, object);
    }
}

console.log("**********************");

for (const iterator of array) {
    console.log(iterator);
}