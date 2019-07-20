//dependencies for test
const request = require("supertest");
const app = require("../api");
//functions for testing
const {
  createFakeData,
  generateUser,
  generateAccessToken
} = require("../utils/utils");

const shortid = require("shortid");
const mongoose = require("mongoose");
const User = require("../models/User");
require("dotenv").config();

//fake user login
let userForValidLogin = {
  firstName: "Test",
  lastName: "User",
  email: "validUser@gmail.com",
  phoneNumber: "041111111",
  password: "pass123"
};

//before starting test this is for set-up
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

describe("api integration tests", () => {
  // Checks if API is working
  test('api sends 200 for "localhost:5000/quote/" endpoint', async () => {
    const response = await request(app).get("/quote/");
    expect(response.status).toBe(200);
  });
  //checking seed data
  test("createFakeData() should return an array of 10 documents", () => {
    const result = createFakeData(10);
    expect(result.length).toBe(10);
  });
  // Checks token logic on Login
  test("Checking if '/login' sends back no token when incorrect data is passed", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        username: "seep@gmail.com",
        password: "password"
      });
    expect(response.status).toBe(403);
  });
  test("Checking if '/login' sends back no token when correct username but incorrect password is passed", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        email: userForValidLogin.email,
        password: "incorrectPassword"
      });
    expect(response.status).toBe(403);
  });
  test("Checking if '/login' sends back no token when incorrect username and password is passed", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        email: "incorrectusername",
        password: "incorrectPassword"
      });
    expect(response.status).toBe(403);
  });
  test("Checking if '/login' sends correct token for a valid username and password", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        email: userForValidLogin.email,
        password: userForValidLogin.password
      });
    const expectedToken = await generateAccessToken({
      contact: { email: userForValidLogin.email }
    });
    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();
    expect(response.body.token).toBe(expectedToken);
  });
  // Integration test to check /Register logic
  test("Checking if '/register' generates a user and sends back a 200", async () => {
    const randomEmailId = `${shortid.generate()}@gmail.com`;
    const response = await request(app)
      .post("/auth/register")
      .send({
        firstName: "Seep",
        lastName: "Gulati",
        email: randomEmailId,
        phoneNumber: "0423617890",
        password: "password"
      });
    expect(response.status).toBe(200);
    const query = await User.findOne({ "contact.email": randomEmailId });
    if (query) {
      await User.findByIdAndDelete(query._id); //Deleting the user created in test
    }
  });
});

//deletes user and disconnects from db after running all tests
afterAll(async () => {
  await User.findByIdAndDelete(userForValidLogin._id);
  const db = mongoose.connection;
  db.close();
  console.log("disconnected from DB");
});
