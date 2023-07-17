const Realty = require("../models/realtyModel");

const addRealty = async (req, res) => {
    try {
        const { title, type, address, square, rooms, price, image, description } = req.body;
    
        const realty = new Realty({ title, type, address, square, rooms, price, image, description });

        await realty.save();

        res.status(201).json({ message: 'Realty was added' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
} 

const getRealty = async (req, res) => {
    const realty = await Realty.find({});
    return res.json(realty);
}

module.exports = { addRealty,  getRealty}