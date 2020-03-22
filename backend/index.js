const express = require('express');
const app = express();
const usersController = require('./controllers/users');
const recipesController = require('./controllers/recipes')
const ingredientsController = require('./controllers/ingredients')
const cors = require('cors')

// Middleware
app.use(cors())
app.use(express.json());

// Controllers
app.use('/api/users', usersController);
app.use('/api/recipes', recipesController)
app.use('/api/ingredients',ingredientsController)

app.listen(8080, () => {
  console.log('They see me rollin...on port 8080...');
});	
