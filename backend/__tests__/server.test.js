const request = require("supertest");
const app = require("../api");
const { createFakeData } = require("../utils/utils");

// Checks if API is working
describe("api is working", () => {
  test('api sends 200 for "localhost:5000/quote/" endpoint', async () => {
    const response = await request(app).get("/quote/");
    expect(response.status).toBe(200);
  });
});

describe("testing seed data", () => {
  test("createFakeData() should return an array of 10 documents", () => {
    const result = createFakeData(20);
    expect(result.length).toBe(20);
  });
});

// Checks incorrect username and password token logic

describe("testing authentication and token logic", () => {
  test("testing if '/login' sends back no token when incorrect username and password", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        username: "seep@gmail.com",
        password: "password"
      });
    expect(response.status).toBe(403);
  });
});
