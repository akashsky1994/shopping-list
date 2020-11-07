import { saveCategoryInDB, saveItemsInDB, fetchCategoryId, getUniqueItemCountFromDB } from "../dal";
import { NotFoundError } from "../helpers/error";


/**
 * createCategory - Service Function to Add the Category
 * @param {String} category 
 */
const createCategory = async (category) => {
    category = category.replace(/[^\w\s]/gi, '');
    await saveCategoryInDB(category);
    return `${category} category Added`;
};

/**
 * addItemToList - add new items to the given category or increments the quantity
 * @param {String} category 
 * @param {String} item 
 */
const addItemToList = async (category, item) => {
    category = category.replace(/[^\w\s]/gi, '');
    item = item.replace(/[^\w\s]/gi, '');
    const categoryResponse = await fetchCategoryId(category);
    console.log(categoryResponse);
    if (!categoryResponse) {
        throw new NotFoundError("Category Not Found");
    }
    const categoryId = categoryResponse._id;
    await saveItemsInDB(categoryId, item);
    return `${item} added to ${category} list`;
};

const fetchUniqueItemCount = () => {
    return getUniqueItemCountFromDB();
};

export {
    fetchUniqueItemCount,
    addItemToList,
    createCategory
}