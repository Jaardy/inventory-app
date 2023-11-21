const express = require("express");
const router = express.Router();

// different model routers
router.use("/items", require("./Item"));
router.use("/users", require("./User"));

module.exports = router;
