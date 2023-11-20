const express = require("express");
const router = express.Router();
const { Item } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const items = await Item.findByPk(itemId);
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
