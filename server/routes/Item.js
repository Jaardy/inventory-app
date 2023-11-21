const express = require("express");
const router = express.Router();
const { Item } = require("../models");
const { check, validationResult } = require("express-validator");

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

router.post(
  "/",
  [
    check("name").not().isEmpty().trim(),
    check("description").not().isEmpty().trim(),
    check("description").isLength({ min: 5, max: 100 }),
    check("category").not().isEmpty().trim(),
    check("price").not().isEmpty().trim(),
    check("image").not().isEmpty().trim(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      try {
        const { name, description, category, price, image } = req.body;

        const newItem = await Item.create({
          name,
          description,
          category,
          price,
          image,
        });

        res.json(newItem);
      } catch (error) {
        next(error);
      }
    }
  }
);

router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, description, category, price, image } = req.body;
    const item = await Item.findByPk(id);

    item.name = name;
    item.description = description;
    item.category = category;
    item.price = price;
    item.image = image;

    await item.save();

    res.send(item);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteId = req.params.id;
    const deletedItem = await Item.destroy({
      where: {
        id: deleteId,
      },
    });

    res.json({ message: `Item has been successfully deleted` });
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke! Check your Routes!");
});

module.exports = router;
