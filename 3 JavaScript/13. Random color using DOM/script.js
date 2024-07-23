function GetRandomColor(){

    let var1 = Math.ceil(Math.random()*255);       // formula is: a+ random*(b-a)  where a and b are the starting and ending points of the colour respectively
    let var2 = Math.ceil(Math.random()*255);
    let var3 = Math.ceil(Math.random()*255);

    return `rgb(${var1} ${var2} ${var3})`
}

// let boxes = document.querySelector(".container").children;
let boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = GetRandomColor();
    e.style.color = GetRandomColor();
})

