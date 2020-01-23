const express = require('express');

// Routes Import
const categories = require("./categories/index.js");
const products = require("./products/index.js");

const router = express.Router();

// Adding Routes
router.use('/categories', categories);
router.use('/products', products);

module.exports = router;
