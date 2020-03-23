// controllers/recipes.js
const express = require("express")
const router = express.Router()
const Recipe = require('../models/Recipe')

// GET ALL RECIPES
router.get('/', (req, res) => {
    Recipe.find({}).then(recipes => res.json(recipes))
  })	

// GET RECIPE BY ID	
router.get('/byId/:id', (req, res) => {
    Recipe.find({_id: req.params.id})
    .then(recipes => res.json(recipes))
})

// GET RECIPE BY RECIPE NAME	
router.get('/byRecipeName/:recipeName', (req, res) => {
    Recipe.find({recipeName: req.params.recipeName})
    .then(recipes => res.json(recipes))
})

// CREATE A RECIPE
router.post('/', (req, res) => {
    Recipe.create(req.body)
    .then(recipes => res.json(recipes))
})

// UPDATE A RECIPE	
router.put('/:id', (req, res) => {
    Recipe.findOneAndUpdate({ _id: req.params.id }, 
        req.body, { new: true })
    .then(recipes => res.json(recipes))  
})

// DELETE A RECIPE
router.delete('/:id', (req, res) => {
    Recipe.findOneAndDelete({_id: req.params.id})
    .then(recipes => res.json(recipes))
})	

module.exports = router