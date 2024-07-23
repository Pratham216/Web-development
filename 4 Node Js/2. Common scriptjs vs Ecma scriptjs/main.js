import {a, b,c,d,e} from "./mymodule.js";
console.log(a,b,c,d,e);

import new_obj from "./mymodule.js";
console.log(new_obj);

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

const a = require("./mymodule2.js") // we have to make type of jason file to default common js to make it run

console.log(a, __dirname, __filename)