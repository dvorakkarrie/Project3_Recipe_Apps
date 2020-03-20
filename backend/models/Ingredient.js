const mongoose = require("../db/connection");

const IngredientSchema = mongoose.Schema({
    quantity: Number,
    measurement: String,
    description: String,
});

const Ingredient = mongoose.model("Recipe", IngredientSchema);

module.exports = Ingredient;