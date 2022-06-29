// Internal Imports
const Category = require("../models/category");

// create
const create = async (req, res) => {
  try {
    const { name } = req.body;
    const filterCategory = await Category.findOne({ name });
    if (filterCategory) {
      return res.json({
        msg: "Category already exist with this name",
      });
    } else {
      const categoryData = req.body;
      const newCategory = new Category(categoryData);
      const category = await newCategory.save();
      return res.json({
        msg: "Category created suceessfully",
        category,
      });
    }
  } catch (error) {
    return res.json({
      error,
    });
  }
};

module.exports = {
  create,
};