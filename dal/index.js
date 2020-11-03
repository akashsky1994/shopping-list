
import mongoose from "mongoose";
import "../models/category";
import "../models/category-list";
const Category = mongoose.model("Category");
const CategoryList = mongoose.model("CategoryList");

/**
 * saveCategoryInDB - Save Category to DB | Returns error on duplicate creation
 * @param {String} category 
 * @returns {Promise}
 */
const saveCategoryInDB = (category) => {
    return Category.create({ category: category, isActive: false })
};

/**
 * saveItemsInDB - Dal Method to Save Item toDB
 * @param {String} categoryId 
 * @param {String} item 
 */
const saveItemsInDB = (categoryId, item) => {
    return CategoryList.updateOne({ category: categoryId, item: item, isActive: true }, { $inc: { qty: 1 } }, { upsert: true }).exec();
};

/**
 * fetchCategoryId - Get the Category Id from category if exists
 * @param {String} category
 * @returns {String} categoryId
 */
const fetchCategoryId = (category) => {
    return Category.findOne({ category: category, isActive: true }).exec();
};

const getUniqueItemCountFromDB = () => {
    return CategoryList.distinct('item').count().exec();
};

export {
    getUniqueItemCountFromDB,
    fetchCategoryId,
    saveItemsInDB,
    saveCategoryInDB
}