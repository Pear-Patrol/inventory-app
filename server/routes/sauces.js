
const express = require("express");
const router = express.Router();
const { Sauce } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll();
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});
router.put("/:id", async (req, res, next) => {
  await Sauce.update(
    req.body,
    {where: {id: req.params.id}}
    );
    const sauces1 = await Sauce.findByPk(req.params.id);
    res.json(sauces1) 
})
router.post("/" , async (req, res) => {
  const sauces1 = await Sauce.create(req.body);
  res.json(sauces1);
})
router.delete("/:id", async (req,res) => {
  let boiler = await Sauce.findByPk(req.params.id);
  await boiler.destroy()
  res.json(boiler)
})
module.exports = router;