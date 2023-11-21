const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Item } = require("../models");
const { sequelize } = require("../db");
const { items } = require("../seedData");
const request = require("supertest");
const app = require("../app");
//clear db and reseed before all tests
beforeAll(async () => {
  await sequelize.sync({ force: true });
  await Item.bulkCreate(items);
});

describe("GET /items/ unit tests", () => {
  it("/ endpoint works", async () => {
    const response = await request(app).get("/api/items/");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /items/:id unit tests", () => {
  it("/:id enpoint works", async () => {
    const response = await request(app).get("/api/items/1");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /items/ unit tests", () => {
  it("/ Post endpoint works", async () => {
    const response = await request(app).post("/api/items/");
    expect(response.statusCode).toBe(200);
  });
});

describe("PUT /items/:id unit tests", () => {
  it("/ endpoint for Put is working", async () => {
    const response = await request(app).put("/api/items/1");
    expect(response.statusCode).toBe(200);
  });
});

describe("DELETE /items/:id unit tests", () => {
  it("/ endpoint for delete is working", async () => {
    const response = await request(app).delete("/api/items/1");
    expect(response.statusCode).toBe(200);
  });
});
