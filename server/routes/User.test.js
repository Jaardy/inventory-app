const express = require("express");
const { User } = require("../models");
const request = require("supertest");
const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const app = require("../app");
const seed = require("../seed");
const { sequelize } = require("../db");

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await seed();
});

describe("GET /users/ endpoint", () => {
  it("reaches endpoint successfully", async () => {
    const res = await request(app).get("/api/users/");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET /users/:id endpoint", () => {
  it("reaches endpoint successfully", async () => {
    const res = await request(app).get("/api/users/1");
    expect(res.statusCode).toBe(200);
  });
});

describe("POST /users/ endpoint", () => {
  it("reaches endpoint successfully", async () => {
    const res = await request(app).post("/api/users/").send({
      username: "test item",
      email: "test.test@test.test",
      password: "testy",
    });
    expect(res.statusCode).toBe(200);
  });
});

describe("PUT /users/:id endpoint", () => {
  it("reaches endpoint successfully", async () => {
    const res = await request(app).put("/api/users/1").send({
      username: "test item",
      email: "test.test@test.test",
      password: "testy",
    });
    expect(res.statusCode).toBe(200);
  });
});

describe("DELETE /users/:id endpoint", () => {
  it("reaches endpoint successfully", async () => {
    const res = await request(app).delete("/api/users/1");
    expect(res.statusCode).toBe(200);
  });
});
