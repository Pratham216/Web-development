const express = require('express');
const app = express();
const port =3000;

app.get('/',(req, res)=>{
  res.send("It is my first Express code !!");  
})

app.listen(port ,()=>{
  console.log(`Example app listening on port ${port}`);
})