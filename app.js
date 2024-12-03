const express = require('express');
const app = express();
const ejs = require('ejs');
const collection = require('./mongodb');


//middle wares(
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
  res.render('signup');
})
app.get('/login',(req, res)=>{
  res.render('login');
})

app.post('/signup', async (req, res)=>{
  const data = {
    name: req.body.name,
    password: req.body.password,
  }

  await collection.insertMany([data])

  res.render('home');
})
app.post('/login', async (req, res)=>{
  try{
    const check = await collection.findOne({name:req.body,name})

    if(check.password = req.body.password){
      res.render('home');
    }
    else{
      res.send('Wrong password');
    }
  }
  catch{
    res.send('Wrong details');
  }
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`App is running on port ${port}`)})