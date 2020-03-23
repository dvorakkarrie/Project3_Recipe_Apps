const mongoose = require('./connection')

const User = require('../models/User')
const Ingredient = require('../models/Ingredient')
const Recipe = require('../models/Recipe')

let ingredient1 = {}, ingredient2 ={}

User.deleteMany({}).then(() => {
    console.log('deleted all users')
    Recipe.deleteMany({}).then(() => {
        console.log('deleted all recipes')
        Ingredient.deleteMany({}).then(() => {
            console.log('deleted all ingredients')
    
            Ingredient.create({
                quantity: 1,
                measurement: "cup",
                description: "beef"
            }).then(ingredient => {
                ingredient1 = ingredient
                console.log("added ingredient1")
              //  ingredient.save();
            })

            Ingredient.create({
                quantity: 1,
                measurement: "each",
                description: "taco seasoning"
            }).then(ingredient => {
                ingredient2 = ingredient
                console.log("added ingredient2")
            })
            
            User.create({ 
                "name": "Karrie Dvorak",
                "email": "dvorakkarriel@johndeere.com" })
            .then(karrie => {
                Recipe.create({
                    recipeName: "Beef Tacos",
                    url: "https://www.marthastewart.com/338579/beef-tacos",
                    image: "https://www.edamam.com/web-img/c6b/c6b586dc7e72d4599d0d9624736ea4a4.jpg", 
                    ingredients: ingredient2._id,
                    creator: karrie.id,
                })
                .then(kd => {
                    karrie.recipes.push(kd);
                    karrie.save();
                    console.log('Karrie added recipe') })
            })

            User.create({ 
                name: "Kiran Pendurthi",
                email: "pendurthikirank@johndeere.com" 
            }).then(kiran => {
                Recipe.create({
                    recipeName: "Chicken Marsala",
                    url: "https://www.aol.com/?err=404&err_url=https%3a%2f%2fwww.aol.com%2ffood%2frecipe%2fchicken-marsala%2f",
                    image: "https://www.edamam.com/web-img/bb3/bb33506829b7e91e0a5a382b915ad865.jpg",
                    ingredients: ingredient1._id,
                    creator: kiran.id
                }).then(kp => {
                    kiran.recipes.push(kp);
                   // kiran.save();
                    console.log('KP added recipe') })
                Recipe.create({
                    recipeName: "Lemon Chicken",
                    url: "https://www.rachaelray.com/recipes/lemon-chicken-fricassee-with-biscuit-topping/",
                    image: "https://www.edamam.com/web-img/9b2/9b2b1dbcfc6a79559e411c70ee6682bc.jpg",
                    ingredients: ingredient2._id,
                    creator: kiran.id
                }).then(kp => {
                 kiran.recipes.push(kp);
                   kiran.save();
                    console.log('KP added recipe') })
                })
            })

    })
})