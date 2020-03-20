const mongoose = require('./connection')
const User = require('../models/User')

User.deleteMany({})
User.collection.insertMany([
	{ "name": "Karrie", "email": "dvorakkarriel@johndeere.com" }, 
	{ "name": "John",	"email": "doejohn@test.com" }
])
.then(users => console.log(users))
.catch(err => console.log(err))	