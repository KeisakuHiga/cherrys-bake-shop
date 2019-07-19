const request = require("supertest");
const app = require("../api");

// Checks if API is working
describe("api is working", () => {
  test('api sends 200 for "localhost:5000/quote/" endpoint', async () => {
    const response = await request(app).get("/quote/");
    expect(response.status).toBe(200);
  });
});

// Checks if SeedData is seeding data
describe("POST /seedData", () => {
  test('api sends 200 for "localhost:5000/quote/seedData/" endpoint', async () => {
    request(app).post();
    const name = "keisaku";
    const password = "password";
    const response = await request(app)
      .post("quote/seedData")
      .send({
        name: name,
        password: password
      });
    expect(response.text).toBe(200);
  });
});
