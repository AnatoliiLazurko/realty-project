const express = require('express');

const RealtyController = require('../controllers/RealtyController');

const router = express.Router();

router.post('/add-realty', RealtyController.addRealty);
router.post('/realty/:id/add-image', RealtyController.addImageToRealty);
router.get('/get-realty', RealtyController.getRealty);
router.get('/realty/:id', RealtyController.getRealtyById);
router.get('/get-realtyByType/:type', RealtyController.getRealtyByType);
router.get('/realty/:id/images', RealtyController.getRealtyImages);
router.post('/realty/:id/update', RealtyController.updateRealty);
router.delete('/realty/:id/delete', RealtyController.deleteRealty);

module.exports = router;