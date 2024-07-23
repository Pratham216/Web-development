const express = require('express');
const app = express();
const port =3000;
const fs = require('fs');
const blog = require('./routes/blog');

app.use('/blog', blog);

//MiddleWare 1 :
app.use((req,res,next)=>{
    console.log(req.headers);
    req.pratham = "Im iron man";
    fs.appendFileSync("pratham.txt",`${Date.now()} is a ${req.method} \n`);
    console.log(`${Date.now()} is a ${req.method}`);
    next();
})

//MiddleWare 2 :
app.use((req,res,next)=>{
    console.log('m2');
    next();
})

app.get('/', (req,res)=>{
    res.send('Hello World!!');
})

app.get('/about',(req,res)=>{
    res.send('Hello About Us!!'+ req.pratham);
})

app.get('/Contact',(req,res)=>{
    res.send('Hello Contact!!');
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})