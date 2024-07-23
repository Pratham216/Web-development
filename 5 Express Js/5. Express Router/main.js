const express = require('express');

const blog = require('./routes/blog');
const shop = require('./routes/shop');

const app = express();
const port = 3000;

app.use('/blog', blog);
app.use('/shop', shop);

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})