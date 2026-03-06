const request = require("supertest");
const app = require("../server");

describe("Calculator API", () => {

  test("adds 2 + 3", async () => {
    const res = await request(app).get("/add/2/3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test("division by zero", async () => {
    const res = await request(app).get("/divide/4/0");
    expect(res.statusCode).toBe(400);
  });

});