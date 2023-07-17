const Realty = require("../models/realtyModel");

const addRealty = async (req, res) => {
    try {
        const { title, type, address, square, rooms, price, mainImage, description } = req.body;
    
        const realty = new Realty({ title, type, address, square, rooms, price, mainImage, description });

        await realty.save();

        res.status(201).json({ message: 'Realty was added' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addImageToRealty = async (req, res) => {
    try {
        const realtyId = req.params.id;
        const { image } = req.body;

        const realty = await Realty.findById(realtyId);
        if (!realty) {
            return res.status(404).json({ message: 'Realty not found' });
        }
        
        const existingImage = await Realty.findOne({ images: image });
        if (existingImage) {
            return res.json({ message: 'Image already exist' });
        }

        realty.images.push(image);
        await realty.save();

        res.status(201).json({ message: 'Image added to realty' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRealty = async (req, res) => {
    const realty = await Realty.find({});
    return res.json(realty);
}

const updateRealty = async (req, res) => {
    try {
        const realtyId = req.params.id;
        const { title, type, address, square, rooms, price, mainImage, description } = req.body;
        
        const realty = await Realty.findByIdAndUpdate(realtyId, {
            title, type, address, square, rooms, price, mainImage, description
        });

        if (!realty) {
            return res.status(404).json({ message: 'Realty not found' });
        }

        res.status(200).json({ message: 'Realty updated'});
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteRealty = async (req, res) => {
    try {
        const realtyId = req.params.id;

        const realty = await Realty.findByIdAndDelete(realtyId);
        if (!realty) {
            return res.status(404).json({ message: 'Realty not found' });
        }

        res.status(201).json({ message: 'Realty deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { addRealty,  getRealty, addImageToRealty, updateRealty, deleteRealty}