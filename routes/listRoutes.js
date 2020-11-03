import express from 'express';

// import { authenticate } from "../middlewares/auth"; if required middleware for authentication can be added

import { createCategoryCtrl, addItemsCtrl, fetchUniqueItemsCtrl } from "../controllers";

let router = express.Router();

//router.use(authenticate);
router.post('/categories/:category', createCategoryCtrl);
router.post('/categories/:category/items/:item', addItemsCtrl);
router.get('/', fetchUniqueItemsCtrl);

export default router;
