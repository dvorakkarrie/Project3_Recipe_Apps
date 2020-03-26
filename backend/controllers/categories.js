// controllers/categories.js
const express = require("express")
const router = express.Router()
const Category = require('../models/Category')

// GET ALL categories
router.get('/', (req, res) => {
    Category.find({}).then(categories => 
        res.json(categories))
  })	

// GET categorie BY ID	
router.get('/byId/:id', (req, res) => {
    Category.find({_id: req.params.id})
    .then(categories => res.json(categories))
})


// GET categories BY name	
router.get('/byName/:name/', (req, res) => {
    Category.find({name: req.params.name})
    .then(categories => res.json(categories))
})


// CREATE A category
router.post('/', (req, res) => {
    Category.create(req.body)
    .then(categories => res.json(categories))
})

// UPDATE A category	
router.put('/:id', (req, res) => {
    Category.findOneAndUpdate({ _id: req.params.id }, 
        req.body, { new: true })
    .then(categories => res.json(categories))  
})

// DELETE A category
router.delete('/:id', (req, res) => {
    Category.findOneAndDelete({_id: req.params.id})
    .then(categories => res.json(categories))
})	

module.exports = router