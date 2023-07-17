const express = require('express');

const RealtyController = require('../controllers/RealtyController');

const router = express.Router();

router.post('/add-realty', RealtyController.addRealty);
router.get('/get-realty', RealtyController.getRealty);

module.exports = router;