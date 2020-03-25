const mongoose = require("../db/connection");

const CategorySchema = mongoose.Schema({
    description: String
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;