//dependencies for test
const request = require("supertest");
const app = require("../api");
const mongoose = require("mongoose");
const User = require("../models/User");
const Quote = require("../models/Quote");
require("dotenv").config();
const { getAllQuotes } = require("../controllers/quotesController");

//functions for testing
const { createFakeData, generateUser } = require("../utils/utils");

//fake user login
let userForValidLogin = {
  firstName: "Test",
  lastName: "User",
  email: "validUser@gmail.com",
  phoneNumber: "041111111",
  password: "pass123"
};

//before starting tests this is required for set-up
beforeAll(async () => {
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, err => {
    if (err) {
      console.log("not connected to db");
    } else {
      console.log("connected to DB");
    }
  });
  const user = await generateUser(
    userForValidLogin.firstName,
    userForValidLogin.lastName,
    userForValidLogin.email,
    userForValidLogin.phoneNumber,
    userForValidLogin.password
  );

  userForValidLogin._id = user._id;
});

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

  // Checks if token is provided for getAllQuotes and it sends back 200
  test('Check if a token is provided for "/quote/getAllQuotes", it send back 200', async () => {
    const response = await request(app)
      .get("/quote/getAllQuotes")
      .set(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0Ijp7ImVtYWlsIjoic2VlcGd1bGF0aUBnbWFpbC5jb20ifSwiaWF0IjoxNTYzNjEyMjAwLCJleHAiOjE1NjQyMTcwMDB9.pKZ-flBBCen-CDiY6kLtV39zcWhy5dy-o7IeFlaGtEs"
      );
    const expectedToken = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0Ijp7ImVtYWlsIjoic2VlcGd1bGF0aUBnbWFpbC5jb20ifSwiaWF0IjoxNTYzNjEyMjAwLCJleHAiOjE1NjQyMTcwMDB9.pKZ-flBBCen-CDiY6kLtV39zcWhy5dy-o7IeFlaGtEs"
    };
    expect(response.status).toBe(200);
    console.log(response.body);
    expect(response.body).not.toBeNull();
    // expect(expectedToken).toStrictEqual(response.body);
    console.log(response.status);
  });
});

//deletes user and disconnects from db after running all tests
afterAll(async () => {
  await User.findByIdAndDelete(userForValidLogin._id);
  const db = mongoose.connection;
  db.close();
  console.log("disconnected from DB");
});
