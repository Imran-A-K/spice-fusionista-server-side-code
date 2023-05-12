const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');

const chefData = require('./data/chefData.json');
const recipeData = require('./data/recipeData.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to spiceFusionista Server!')
  })
app.get('/chefData', (req,res) =>{
    res.send(chefData);
})
app.get('/recipeData', (req,res) =>{
    res.send(recipeData);
})

app.get('/chefData/:id' , (req,res) =>{
  const chefId = parseInt(req.params.id);
  // console.log(chefId)
  const selectedChef = chefData.find( chef => parseInt(chef.id) === chefId);
  res.send(selectedChef);
})

  app.listen(port, () => {
    console.log(`spiceFusionista Server app listening on port ${port}`)
  })