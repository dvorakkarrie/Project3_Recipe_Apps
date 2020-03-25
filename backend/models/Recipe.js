
const mongoose = require("../db/connection");

const RecipeSchema = mongoose.Schema({
 recipeName: String,
 url: String,
 image: String,
 instructions: String,
 creator:  {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
 categories: {
         ref: "Categories",
         type: mongoose.Schema.Types.ObjectId
    }
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;