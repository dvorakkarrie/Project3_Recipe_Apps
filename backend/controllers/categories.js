// controllers/categories.js
const express = require("express")
const router = express.Router()
const Category = require('../models/Category')

// GET ALL CATEGORIES
router.get('/', (req, res) => {
    Category.find({})
    .then(categories => res.json(categories))
  })	

// GET CATEGORY BY ID	
router.get('/:id', (req, res) => {
    Category.find({_id: req.params.id})
    .then(categories => res.json(categories))
})

// CREATE AN CATEGORY
router.post('/', (req, res) => {
    Category.create(req.body)
    .then(categories => res.json(categories))
})

// UPDATE AN CATEGORY	
router.put('/:id', (req, res) => {
    Category.findOneAndUpdate({ _id: req.params.id }, 
        req.body, { new: true })
    .then(categories => res.json(categories))
})

// DELETE AN CATEGORY
router.delete('/:id', (req, res) => {
    Category.findOneAndDelete({_id: req.params.id})
    .then(categories => res.json(categories))
})	

module.exports = router