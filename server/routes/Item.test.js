const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Item } = require("../models");
const { sequelize } = require("../db");

const { seed } = require("../seed");

//clear db and reseed before all tests
beforeAll(async () => {
  await seed();
});

afterAll(async () => {
  await seed();

const { items } = require("../seedData");
const request = require("supertest");
const app = require("../app");
//clear db and reseed before all tests
beforeAll(async () => {
  await sequelize.sync({ force: true });
  await Item.bulkCreate(items);
});

describe("GET /items/ unit tests", () => {
  it("./ endpoint works", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

});

describe("GET /items/:id unit tests", () => {});

describe("POST /items/ unit tests", () => {});

describe("PUT /items/:id unit tests", () => {});

describe("DELETE /items/:id unit tests", () => {});
