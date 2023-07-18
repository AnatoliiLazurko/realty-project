const mongoose = require('mongoose');

const realtySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    type: {
        type: String,
        required: [true, "Type is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    square: {
        type: Number,
        required: [true, "Square is required"],
    },
    rooms: {
        type: Number,
        required: [true, "Rooms is required"],
    },
    price: {
        type: String,
        required: [true, "Price is required"],
    },
    mainImage: {
        type: String,
        required: [true, "Image is required"],
    },
    images: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RealtyImage',
    }],
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

realtySchema.index({ _id: 1, images: 1 }, { unique: true });

module.exports = mongoose.model("Realty", realtySchema);