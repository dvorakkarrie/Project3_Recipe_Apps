const express = require('express');
const app = express();
const usersController = require('./controllers/users');
const recipesController = require('./controllers/recipes')
<<<<<<< HEAD
=======
const ingredientsController = require('./controllers/ingredients')
>>>>>>> 4c3136a3907984d7366677cddb8da4489ad5d1bd
const categoriesController = require('./controllers/categories')
const parser = require('body-parser');
const cors = require('cors')

// Middleware
app.use(cors())
// app.use(express.json());
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

// Controllers
app.use('/api/users', usersController);
app.use('/api/recipes', recipesController)
<<<<<<< HEAD
=======
app.use('/api/ingredients',ingredientsController)
>>>>>>> 4c3136a3907984d7366677cddb8da4489ad5d1bd
app.use('/api/categories',categoriesController)

app.listen(8080, () => {
  console.log('They see me rollin...on port 8080...');
});	
