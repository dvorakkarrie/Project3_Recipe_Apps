
const mongoose = require("../db/connection");

const RecipeSchema = mongoose.Schema({
 recipeName: String,
 url: String,
 image: String,
 instructions: String,
 creator:  {
<<<<<<< HEAD
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
 categories: {
         ref: "Categories",
         type: mongoose.Schema.Types.ObjectId
    }
=======
    ref: "User",
    type: mongoose.Schema.Types.ObjectId
  },
 category: 
     {
         ref: "Category",
         type: mongoose.Schema.Types.ObjectId
     }
 
>>>>>>> 4c3136a3907984d7366677cddb8da4489ad5d1bd
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;