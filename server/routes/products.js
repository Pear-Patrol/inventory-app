const express = require("express");
const router = express.Router();
const { Product } = require("../models");

// GET /
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req,res, next) => {
    const products = await Product.findByPk(req.params.id);
    res.json(products)
});
router.put("/:id", async (req, res, next) => {
  await Product.update(req.body, { where: { id: req.params.id } });
  const products1 = await Product.findByPk(req.params.id);
  res.json(products1);
});
router.post("/", async (req, res) => {
  const products1 = await Product.create(req.body);
  res.json(products1);
});
router.delete("/:id", async (req, res) => {
  let products1 = await Product.findByPk(req.params.id);
  await products1.destroy();
  res.json(products1);
});

module.exports = router;
