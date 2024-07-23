const fs = require("fs");
console.log("starting");

fs.writeFile("Pratham.txt","I am learnig node js ",()=>{
    console.log("Done");
    fs.readFile("Pratham.txt",(error, data)=>{
        console.log(error,data.toString());
        
    })
})

fs.appendFile("Pratham.txt"," and currently im working with file managing..",(e,d)=>{
    console.log(d);
    
})
console.log("ending");
