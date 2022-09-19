const express = require("express");
const router = express.Router();
const { Product } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    next(error);
  }
});

console.log('test')
module.exports = router;
