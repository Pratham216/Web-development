console.log("Hello world");

var slug_obj = require('slugify'); // it is used for url purposes
let a = slug_obj('some string');
console.log(a);

const b = slug_obj('some st$#$%^$# ring','_');
console.log(b);
