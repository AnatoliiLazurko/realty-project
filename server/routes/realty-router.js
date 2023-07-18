const express = require('express');

const RealtyController = require('../controllers/RealtyController');

const router = express.Router();

router.post('/add-realty', RealtyController.addRealty);
router.get('/get-realty', RealtyController.getRealty);
router.get('/get-realtyByType/:type', RealtyController.getRealtyByType);
router.post('/realty/:id/add-image', RealtyController.addImageToRealty);
router.post('/realty/:id/update', RealtyController.updateRealty);
router.delete('/realty/:id/delete', RealtyController.deleteRealty);

module.exports = router;