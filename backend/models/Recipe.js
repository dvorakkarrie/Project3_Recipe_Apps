const mongoose = require("../db/connection");

const RecipeSchema = mongoose.Schema({
 recipeName: String,
 url: String,
 image: String,
 ingredients: [
     {
         ref: "Ingredient",
         type: mongoose.Schema.Types.ObjectId
     }
 ],
 favorited: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;