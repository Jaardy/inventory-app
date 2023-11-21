const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Order = sequelize.define("orders", {});

module.exports = Order;
