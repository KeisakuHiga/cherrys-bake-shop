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
    const result = createFakeData(10);
    expect(result.length).toBe(10);
  });
});

// Checks token logic on Login

describe("Testing if login token fails with incorrect credentials", () => {
  test("Checking if '/login' sends back no token when incorrect username and password", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        username: "seep@gmail.com",
        password: "password"
      });
    expect(response.status).toBe(403);
  });
});

// Check Register token logic

describe("testing if Register generates a User", () => {
  test("Checking if '/register' generates a User and sends back a 200", async () => {
    const response = await request(app)
      .post("/auth/register")
      .send({
        firstName: "Seep",
        lastName: "Gulati",
        email: "seep@gmail.com",
        phoneNumber: "0423617890",
        password: "password"
      });
      .set('Accept', 'application/json')
    expect(response.status).toBe(200);
  });
});
