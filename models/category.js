/**
 * Module dependencies.
 */
import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Category Schema
 */
let CategorySchema = new Schema({
    category: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: { createdAt: 'created', updatedAt: 'updated' }
});

CategorySchema.index({
    category: 1,
    isActive: 1,
}, {
    unique: true,
});

mongoose.model('Category', CategorySchema);
