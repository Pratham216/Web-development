const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req,res)=>{
    console.log("Hey its a get request");   //we can direclty check it with browser 
    res.send('Hello World get');
})

app.post('/', (req, res)=>{
    console.log("Hey its a post request");      // to check the post request we make a html file and then check
    res.send('Hello world post!!')          // shorter method is to check with postman
})

app.put('/', (req,res)=>{
    console.log("Hey its a put request");
    res.send('Hello world put!!')
}).delete('/', (req,res)=>{                         // it is called chaining of requests
    console.log("Hey its a delete request");
    res.send('Hello world delete!!')
})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
    
})