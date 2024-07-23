const express = require('express');
const app = express();
const port = 3000;

app.get('/avengers', (req,res)=>{
    console.log("Hey its serving html page");
    res.sendFile('templates/index.html', {root : __dirname})
})

app.get('/api', (req,res)=>{
    console.log("Hey its serving json ");
    res.json({a:1, b:2, c:3,d:4 , naam:["pratham", "tony"]})
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
    
})