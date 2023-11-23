const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Item } = require("../server/models");

const { sequelize } = require("../server/db");

const { items } = require("../server/seedData");
const request = require("supertest");
const app = require("../server/app");

const id = items.filter((item) => typeof item === "object").length;
console.log(id);

function generateRandomId() {
  const idTest = Math.floor(Math.random() * (id + 1));
  return idTest;
}

// function generateRandomId() {
//   const maxId = fetchMaxId();
//   const ranId = Math.floor(Math.random() * (maxId + 1));
//   console.log(ranId);
//   return ranId;
// }

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
  it("/ enpoint fetches get all items", async () => {
    const response = await request(app).get("/api/items/");
    expect(response.body).toBeInstanceOf(Array);
    response.body.forEach((item) => {
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("price");
      expect(item).toHaveProperty("category");
      expect(item).toHaveProperty("image");
      expect(typeof item.name).toBe("string");
      expect(typeof item.price).toBe("number");
      expect(typeof item.description).toBe("string");
      expect(typeof item.image).toBe("string");
    });
  });
});

describe("GET /items/:id unit tests", () => {
  it("/:id enpoint works", async () => {
    const validId = generateRandomId();
    const response = await request(app).get(`/api/items/${validId}`);
    expect(response.statusCode).toBe(200);
  });
  it("/:id enpoint fetches correctly", async () => {
    const validId = generateRandomId();
    const response = await request(app).get(`/api/items/${validId}`);
    console.log(response);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("category");
    expect(response.body).toHaveProperty("image");
  });
});

describe("POST /items/ unit tests", () => {
  it("/ Post endpoint works", async () => {
    const response = await request(app).post("/api/items/");
    expect(response.statusCode).toBe(200);
  });
  it("/ Post makes new item into the database", async () => {
    const newData = {
      name: "Womens Shoes",
      price: 10.99,
      description: "Warm comfy shoes",
      category: "Womens Shoes",
      image: "http://WomenShoes.com",
    };
    const response = await request(app)
      .post("/api/items/")
      .send(newData)
      .set("Accept", "application/json")
      .expect(200);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("category");
    expect(response.body).toHaveProperty("image");
  });
});

describe("PUT /items/:id unit tests", () => {
  it("/ endpoint for Put is working", async () => {
    const validId = generateRandomId();
    const response = await request(app).put(`/api/items/${validId}`);
    expect(response.statusCode).toBe(200);
  });
  it("/ Put updates an Item successfully", async () => {
    const validId = generateRandomId();
    const updateData = {
      name: "Stunning Headphones",
      price: 20,
      description: "Amazing sound quality",
      category: "Electrical",
      image: "http://headphones.com",
    };
    const response = await request(app)
      .put(`/api/items/${validId}`)
      .send(updateData)
      .set("Accept", "application/json")
      .expect(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("category");
    expect(response.body).toHaveProperty("image");
  });
});

describe("DELETE /items/:id unit tests", () => {
  it("/ endpoint for delete is working", async () => {
    validId = generateRandomId();
    const response = await request(app).delete(`/api/items/1`);
    expect(response.statusCode).toBe(200);
    const allItems = await request(app).get(`/api/items/`);
    const newItemArray = JSON.parse(allItems.text);
    expect(newItemArray[0].name).toBe(items[1].name);
  });
});
