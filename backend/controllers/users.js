// controllers/users.js
const express = require("express")
const router = express.Router()
const User = require('../models/User')

// GET ALL USERS
router.get('/', (req, res) => {
    User.find().then(users => res.json(users))
  })	

// GET USER BY ID	
router.get('/byId/:id', (req, res) => {
    User.find({_id: req.params.id})
    .then(users => res.json(users))
})


// GET USER BY EMAIL	
router.get('/byEmail/:email/', (req, res) => {
    User.find({email: req.params.email})
    .then(users => res.json(users))
})

// GET USER BY name	
router.get('/byName/:name/', (req, res) => {
    User.find({name: req.params.name})
    .then(users => res.json(users))
})


// GET USER BY EMAIL	
router.get('/byEmail/:email/', (req, res) => {
    User.find({email: req.params.email})
    .then(users => res.json(users))
})

// CREATE A USER
router.post('/', (req, res) => {
    User.create(req.body)
    .then(users => res.json(users))
})

// ADD A USER's RECIPE
router.post('/new-recipe/:id/', (req, res) => {
    console.log(req.params)
    User.findById(req.params.id)
    .then(user => {
        let newRecipe = req.body;
        user.recipes.push(newRecipe);
        user.save();
        res.json(user);
    })
    .catch(error => {
        console.log(error)
    })
})

// UPDATE A USER	
router.put('/:id', (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, 
        req.body, { new: true })
    .then(users => res.json(users))  
})

// DELETE A USER
router.delete('/:id', (req, res) => {
    User.findOneAndDelete({_id: req.params.id})
    .then(user => res.json(user))
})	

module.exports = router