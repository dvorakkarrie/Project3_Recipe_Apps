const mongoose = require('./connection')
const User = require('../models/User')
const Ingredient = require('../models/Ingredient')
const Recipe = require('../models/Recipe')

User.deleteMany({}).then(() => {
    console.log('deleted all users')
    Recipe.deleteMany({}).then(() => {
        console.log('deleted all recipes')
        Ingredient.deleteMany({}).then(() => {
            console.log('deleted all ingredients')

            User.create({ 
                firstName: "Kiran",
                lastName: "Pendurthi",
                email: "pendurthikirank@johndeere.com" 
            }).then(kiran => {
                Recipe.create({
                    recipeName: "Chicken Marsala",
                    url: "https://www.aol.com/?err=404&err_url=https%3a%2f%2fwww.aol.com%2ffood%2frecipe%2fchicken-marsala%2f",
                    image: "https://www.edamam.com/web-img/bb3/bb33506829b7e91e0a5a382b915ad865.jpg",
                    favorited: kiran.id
                }).then(kp => {
                    kiran.favorites.push(kp);
                    kiran.save();
                    console.log('created Kiran:Chicken Marsala')
                })
                Recipe.create({
                    recipeName: "Lemon Chicken",
                    url: "https://www.rachaelray.com/recipes/lemon-chicken-fricassee-with-biscuit-topping/",
                    image: "https://www.edamam.com/web-img/9b2/9b2b1dbcfc6a79559e411c70ee6682bc.jpg",
                }).then(kp => 
                    console.log('created Kiran:Chicken Marsala'))
            });
            User.create([{ 
                
                "firstName": "Karrie",
                    "lastName": "Dvorak", 
                    "email": "dvorakkarriel@johndeere.com" }
            ])
            .then(users => console.log(users))
            .catch(err => console.log(err))	

        })
    })
})
