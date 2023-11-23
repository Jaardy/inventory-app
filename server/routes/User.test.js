const express = require("express");
const request = require("supertest");
const {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
} = require("@jest/globals");
const app = require("../app");
const seed = require("../seed");
const seedData = require("../seedData");
const { sequelize } = require("../db");
app.use(express.json());
app.use(express.urlencoded());

const seedUsers = seedData.users;

beforeEach(async () => {
  await sequelize.sync({ force: true });
  await await seed();
});

afterEach(async () => {
  await sequelize.sync({ force: true });
  await seed();
});

describe("GET /users/ endpoint", () => {
  it("reaches endpoint successfully", async () => {
    const res = await request(app).get("/api/users/");
    expect(res.statusCode).toBe(200);
  });
  it("fetches all users", async () => {
    const res = await request(app).get("/api/users");
    const data = JSON.parse(res.text);
    //expect correct amount of users
    expect(data.length).toBe(seedUsers.length);
    //expect all seed users to be in api
    for (x in data) {
      expect([data[x].username, data[x].email, data[x].password]).toEqual([
        seedUsers[x].username,
        seedUsers[x].email,
        seedUsers[x].password,
      ]);
    }
  });
});

describe("GET /users/:id endpoint", () => {
  it("reaches endpoint successfully", async () => {
    const res = await request(app).get("/api/users/joecaswall");
    expect(res.statusCode).toBe(200);
  });
  it("fetches the correct user", async () => {
    const res = await request(app).get("/api/users/joecaswall");
    const data = JSON.parse(res.text);

    expect([data.username, data.email, data.password]).toEqual([
      seedUsers[0].username,
      seedUsers[0].email,
      seedUsers[0].password,
    ]);
  });
});

describe("POST /users/ endpoint", () => {
  it("reaches endpoint successfully", async () => {
    const res = await request(app).post("/api/users/").send({
      username: "testuser",
      email: "test.test@test.test",
      password: "testy",
    });
    expect(res.statusCode).toBe(200);
  });
  it("successfully creates a user", async () => {
    const res = await request(app).post("/api/users/").send({
      username: "testuser",
      email: "test.test@test.test",
      password: "testy",
    });
    const user = await request(app).get("/api/users/testuser");
    const userData = JSON.parse(user.text);
    expect([userData.username, userData.email, userData.password]).toEqual([
      "testuser",
      "test.test@test.test",
      "testy",
    ]);
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
    const res = await request(app).delete("/api/users/joecaswall");
    expect(res.statusCode).toBe(200);
  });
  it("deletes correct user", async () => {
    await request(app).delete("/api/users/joecaswall");
    const allUsers = await request(app).get("/api/users");
    const allUsersData = JSON.parse(allUsers.text);
    expect([
      allUsersData[0].username,
      allUsersData[0].email,
      allUsersData[0].password,
    ]).toEqual([
      seedUsers[1].username,
      seedUsers[1].email,
      seedUsers[1].password,
    ]);
  });
});
