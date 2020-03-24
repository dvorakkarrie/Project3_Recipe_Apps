// controllers/users.js
const express = require("express")
const router = express.Router()
const User = require('../models/User')

// GET ALL USERS
router.get('/', (req, res) => {
    User.find().then(users => res.json(users))
  })	

<<<<<<< HEAD
// GET USER BY ID	
router.get('/byId/:id', (req, res) => {
    User.find({_id: req.params.id})
    .then(users => res.json(users))
})
=======

>>>>>>> kp_Recipe_App


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