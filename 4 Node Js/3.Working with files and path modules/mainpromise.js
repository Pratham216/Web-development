import fs from "fs/promises";

let a = await fs.writeFile("pratham2.txt","i am iron man");

let b = await fs.readFile("pratham2.txt");

let c = await fs.appendFile("pratham2.txt","\n\n\nThis is amazing promise");
console.log(c);
