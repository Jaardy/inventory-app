const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const Item = require("./Item");
const User = require("./User");
const Order = require("./Order");

// User.hasOne(Order);
// Order.belongsTo(User);

// Order.hasMany(Item);
// Item.belongsTo(Order);

module.exports = {
  db: sequelize,
  Item,
  User,
  Order,
};
