const express = require('express')
const router = express.Router()

// MiddleWare that is specific to this router
router.use((req,res,next)=>{
    console.log('Time :',Date.now());
    next();
})

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

// define the children of about route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router;
