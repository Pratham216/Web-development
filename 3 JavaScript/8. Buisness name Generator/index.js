let adj ={
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
}

let _name= {
    1 : "Engine",
    2 : "Food",
    3 : "Garments"
}

let word= {
    1: "Bros",
    2: "Limited",
    3:"Hub"
}

let r1 = Math.ceil(Math.random()*3);
let r2 = Math.ceil(Math.random()*3);
let r3 = Math.ceil(Math.random()*3);

let buisname = `${adj[r1]} ${_name[r2]} ${word[r3]}`;
// let buisname = adj[r1] + _name[r2] + word[r3];
console.log(buisname);
        