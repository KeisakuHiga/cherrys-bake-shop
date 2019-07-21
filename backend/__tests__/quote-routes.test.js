//dependencies for test
const request = require("supertest");
const app = require("../api");
const { createFakeData } = require("../utils/utils");

// Checks if API is working
describe("Check if Quote endpoint is working", () => {
  test('api sends 200 for "localhost:5000/quote/" endpoint', async () => {
    const response = await request(app).get("/quote/");
    expect(response.status).toBe(200);
  });

  //Checks if function seed data returns documents
  test("createFakeData() should return an array of 10 documents", () => {
    const result = createFakeData(10);
    expect(result.length).toBe(10);
  });
});
