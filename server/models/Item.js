const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  price: Sequelize.INTEGER,
  image: Sequelize.STRING,
});

module.exports = Item;
