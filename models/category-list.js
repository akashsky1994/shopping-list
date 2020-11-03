/**
 * Module dependencies.
 */
import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * CategoryList Schema
 */
let CategoryListSchema = new Schema({
    category: {
        type: Schema.ObjectId,
        ref: 'Category'
    },
    item: {
        type: String,
        required: true
    },
    qty: {
        type:Number,
        default: 1
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: { createdAt: 'created', updatedAt: 'updated' }
});

CategoryListSchema.index({
    category: 1,
    item:1,
});

mongoose.model('CategoryList', CategoryListSchema);
