import _ from "lodash";

import { createCategory, addItemToList, fetchUniqueItemCount } from "../services";

const createCategoryCtrl = async (req, res) => {
    try {
        const category = _.get(req, `params.category`);
        if (!category) {
            throw new ValidationError("category missing");
        }
        const response = await createCategory(category);
        return res.sendOk(response);
    } catch (error) {
        console.error(`ERROR | createCategoryCtrl | `, error);
        return res.sendError(error);
    }
};

const addItemsCtrl = async (req, res) => {
    try {
        const category = _.get(req, `params.category`);
        const item = _.get(req, `params.item`);
        if (!category) {
            throw new ValidationError("category missing");
        }
        if (!item) {
            throw new ValidationError("item to be added missing");
        }
        const response = await addItemToList(category, item);
        return res.sendOk(response);
    } catch (error) {
        console.error(`ERROR | addItemsCtrl | `, error);
        return res.sendError(error);
    }
};

const fetchUniqueItemsCtrl = async (req, res) => {
    try {
        const response = await fetchUniqueItemCount();
        return res.sendOk(response);
    } catch (error) {
        console.error(`ERROR | fetchUniqueItems | `, error);
        return res.sendError(error);
    }
};

export {
    fetchUniqueItemsCtrl,
    createCategoryCtrl,
    addItemsCtrl
}