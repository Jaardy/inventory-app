const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Item } = require("../models");
const { sequelize } = require("../db");
import { seed } from "../seed";

//clear db and reseed before all tests
beforeAll(async () => {
  seed();
});

afterAll(async () => {
  seed();
});

describe("GET /items/ unit tests", () => {});

describe("GET /items/:id unit tests", () => {});

describe("POST /items/ unit tests", () => {});

describe("PUT /items/:id unit tests", () => {});

describe("DELETE /items/:id unit tests", () => {});
