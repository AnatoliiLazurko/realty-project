const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  realty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Realty',
    required: true,
  },
});

module.exports = mongoose.model('RealtyImage', imageSchema);