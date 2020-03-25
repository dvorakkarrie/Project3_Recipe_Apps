const mongoose = require("../db/connection");

<<<<<<< HEAD
const CategorySchema = mongoose.Schema({
=======
const CategorySchema = mongoose.Schema({  
>>>>>>> 176cf53d96c54ebd6a598308eae09b19cf4a5f83
    type: String
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;