const mongoose = require("../db/connection");

<<<<<<< HEAD
const CategorySchema = mongoose.Schema({
    description: String
=======
const CategorySchema = mongoose.Schema({  
    type: String
>>>>>>> 4c3136a3907984d7366677cddb8da4489ad5d1bd
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;