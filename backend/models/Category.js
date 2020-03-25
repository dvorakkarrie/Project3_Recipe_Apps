const mongoose = require("../db/connection");

const CategorySchema = mongoose.Schema({  
    type: String
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;