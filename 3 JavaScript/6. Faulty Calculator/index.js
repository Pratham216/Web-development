let a = prompt("Enter first number");
let c = prompt("Enter operation to perform");
let b = prompt("Enter second number");

let rand = Math.floor(Math.random()*10)+1;
console.log(rand);

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(rand==1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}else{
    c= obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
