const mongoose = require('mongoose');

const realtySchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is required"],
    },
    type: {
        type: String,
        require: [true, "Type is required"],
    },
    address: {
        type: String,
        require: [true, "Address is required"],
    },
    square: {
        type: Number,
        require: [true, "Square is required"],
    },
    rooms: {
        type: Number,
        require: [true, "Rooms is required"],
    },
    price: {
        type: String,
        require: [true, "Price is required"],
    },
    mainImage: {
        type: String,
        require: [true, "Image is required"],
    },
    images: [{
        type: String,
        require: [true, "Image is required"],
        unique: true
    }],
    description: {
        type: String,
        require: [true, "Description is required"],
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("Realty", realtySchema);