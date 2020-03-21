const express = require('express');
const app = express();
const usersController = require('./controllers/users');
const recipesController = require('./controllers/recipes')

//Middleware
app.use(express.json());

//Controllers
app.use('/api/users', usersController);
app.use('/api/recipes', recipesController)

app.listen(8080, () => {
  console.log('They see me rollin...on port 8080...');
});	
