// controllers/ingredients.js
const express = require("express")
const router = express.Router()
const Ingredient = require('../models/Ingredient')

// GET ALL INGREDIENTS
router.get('/', (req, res) => {
    Ingredient.find({})
    .then(ingredients => res.json(ingredients))
  })	

// GET INGREDIENT BY ID	
router.get('/:id', (req, res) => {
    Ingredient.find({_id: req.params.id})
    .then(ingredients => res.json(ingredients))
})

// CREATE AN INGREDIENT
router.post('/', (req, res) => {
    Ingredient.create(req.body)
    .then(ingredients => res.json(ingredients))
})

// UPDATE AN INGREDIENT	
router.put('/:id', (req, res) => {
    Ingredient.findOneAndUpdate({ _id: req.params.id }, 
        req.body, { new: true })
    .then(ingredients => res.json(ingredients))
})

// DELETE AN INGREDIENT
router.delete('/:id', (req, res) => {
    Ingredient.findOneAndDelete({_id: req.params.id})
    .then(ingredients => res.json(ingredients))
})	

module.exports = router