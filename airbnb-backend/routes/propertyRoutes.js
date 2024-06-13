const express = require('express');
const { createProperty, getAllProperties } = require('../controllers/propertyController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createProperty);
router.get('/', getAllProperties);

module.exports = router;
