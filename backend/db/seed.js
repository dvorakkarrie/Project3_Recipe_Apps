const mongoose = require('./connection')

const User = require('../models/User')
const Category = require('../models/Category')
const Recipe = require('../models/Recipe')
const Category = require('../models/Category')

let ingredient1 = {}, ingredient2 ={}
let category1=''
let category2=''
let category3=''

User.deleteMany({}).then(() => {
    console.log('deleted all users')
    Recipe.deleteMany({}).then(() => {
        console.log('deleted all recipes')
        Ingredient.deleteMany({}).then(() => {
            console.log('deleted all ingredients')
          Category.deleteMany({}).then(() =>  {
          console.log('deleted all categories')

                Category.create({
                    type: "Apetizer",
                }).then(category => {
                    category1=category
                    console.log("added category1")
                })

                Category.create({
                    type: "dessert",
                }).then(category => {
                    category2=category
                    console.log("added category2")
                })

                Category.create({
                    type: "Main course",
                }).then(category => {
                    category3=category
                    console.log("added category3")
                })


            Ingredient.create({
                quantity: 1,
                measurement: "cup",
                description: "beef"
            }).then(ingredient => {
                ingredient1 = ingredient
                console.log("added ingredient1")
              //  ingredient.save();
            })

            Category.create({
                description: "breakfast"
            }).then(category => {
                breakfast = category
                console.log("added breakfast")
            })
            
            User.create({ 
                "name": "Karrie Dvorak",
                "email": "dvorakkarriel@johndeere.com" })
            .then(karrie => {
                Recipe.create({
                    recipeName: "Beef Tacos",
                    url: "https://www.marthastewart.com/338579/beef-tacos",
                    image: "https://www.edamam.com/web-img/c6b/c6b586dc7e72d4599d0d9624736ea4a4.jpg", 
                    instructions:"<li>4 skinless, boneless, chicken breasts (about 1 1/2 pounds)</li><li>All-purpose flour, for dredging</li>",
                    category: category3._id,
                    creator: karrie.id,
                })
                .then(kd => {
                    karrie.recipes.push(kd);
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
                    instructions:"<li>4 skinless, boneless, chicken breasts (about 1 1/2 pounds)</li><li>All-purpose flour, for dredging</li>",
                    category: category3._id,
                    creator: kiran.id
                }).then(kp => {
                    kiran.recipes.push(kp);
                    console.log('KP added recipe') })
                Recipe.create({
                    recipeName: "Lemon Chicken",
                    url: "https://www.rachaelray.com/recipes/lemon-chicken-fricassee-with-biscuit-topping/",
                    image: "https://www.edamam.com/web-img/9b2/9b2b1dbcfc6a79559e411c70ee6682bc.jpg",
                    instructions:"<li>4 skinless, boneless, chicken breasts (about 1 1/2 pounds)</li><li>All-purpose flour, for dredging</li>",
                    category: category3._id,
                    creator: kiran.id
                }).then(kp => {
                 kiran.recipes.push(kp);
                   kiran.save();
                    console.log('KP added recipe') })
                })
           })


        }) 

    })
})