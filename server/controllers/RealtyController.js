const RealtyImage = require("../models/realtyImageModel");
const Realty = require("../models/realtyModel");


// ADD FUNCTIONS

const addRealty = async (req, res) => {
    try {
        const { title, type, category, address, square, rooms, price, mainImage, description } = req.body;
    
        const realty = new Realty({ title, type, category, address, square, rooms, price, mainImage, description });

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
        const imageSrc  = req.body;

        const realty = await Realty.findById(realtyId);
        if (!realty) {
            return res.status(404).json({ message: 'Realty not found' });
        }

        const image = new RealtyImage({ image: imageSrc.image, realty: realty._id });
        await image.save();

        realty.images.push(image);
        await realty.save();

        res.status(201).json({ message: 'Image added to realty' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET FUNCTIONS

const getRealty = async (req, res) => {
    const realty = await Realty.find({});
    return res.json(realty);
}

const getRealtyByType = async (req, res) => {
    const realtyType = req.params.type;

    const realty = await Realty.find({ type: realtyType });

    return res.json(realty);
}

const getRealtyById = async (req, res) => {
    try {
        const realtyId = req.params.id;

        const realty = await Realty.findById(realtyId);
        if (!realty) {
            return res.status(404).json({ message: 'Realty not found' });
        }

        res.json(realty);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getRealtyImages = async (req, res) => {
    try {
        const realtyId = req.params.id;

        const realty = await Realty.findById(realtyId);
        if (!realty) {
            return res.status(404).json({ message: 'Realty not found' });
        }

        const images = await RealtyImage.find({ realty: realty._id });

        res.json(images);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// UPDATE FUNCTIONS

const updateRealty = async (req, res) => {
    try {
        const realtyId = req.params.id;
        const { title, type, category, address, square, rooms, price, mainImage, description } = req.body;
        
        const realty = await Realty.findByIdAndUpdate(realtyId, {
            title, type, category, address, square, rooms, price, mainImage, description
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

// DELETE FUNCTIONS

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

module.exports = { addRealty, addImageToRealty, getRealty, getRealtyByType, getRealtyImages, getRealtyById, updateRealty, deleteRealty}