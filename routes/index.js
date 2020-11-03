import express from 'express';

const router = express.Router();
import listRouter from './listRoutes';

/* . */
router.get('/', (req, res) => {
    res.send({message: "Welcome to Slice Shopping List Service"});
});


router.use('/list', listRouter);

/*
 * Handle 404 error
 */

router.use('*', (req, res) => {
    res.status(404).json({
        status: "error",
        statusCode: 404,
        name: "NOT_FOUND",
        message: "Url not found"
    });
});

export default router;
