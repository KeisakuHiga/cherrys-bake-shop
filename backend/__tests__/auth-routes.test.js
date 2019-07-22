//dependencies for test
const request = require("supertest");
const app = require("../api");
const shortid = require("shortid");
const mongoose = require("mongoose");
const User = require("../models/User");
require("dotenv").config();

//functions for testing
const { generateUser, generateAccessToken } = require("../utils/utils");

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

describe("api integration tests", () => {
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

  // Checks Login sends no token in case of incorrect password
  test("Checking if '/login' sends back no token when correct username but incorrect password is passed", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        email: userForValidLogin.email,
        password: "incorrectPassword"
      });
    expect(response.status).toBe(403);
  });

  //Checks if Login sends token with incorrect email and password
  test("Checking if '/login' sends back no token when incorrect email and password is passed", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        email: "incorrectusername",
        password: "incorrectPassword"
      });
    expect(response.status).toBe(403);
  });

  //Checks Login sends correct token with correct credentials
  test("Checking if '/login' sends correct token for a valid email and password", async () => {
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

  // Checks Register logic whether it generates a user and sends back 200
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
  //Checks if Register sends back 403 for exiting user
  test("Checking if /register for an existing user should return 403", async () => {
    const response = await request(app)
      .post("/auth/register")
      .send({
        firstName: "Seep",
        lastName: "Gulati",
        email: userForValidLogin.email,
        phoneNumber: "0423617890",
        password: "password"
      });
    expect(response.status).toBe(403);
  });

  //Checks if Register sends 400 for invalid data
  test("Checking if /register for an invalid data should return 400", async () => {
    const response = await request(app)
      .post("/auth/register")
      .send({
        firstName: "Seep",
        lastName: "Gulati",
        email: userForValidLogin.email,
        phoneNumber: "04236178905545454554545454",
        password: "password"
      });
    expect(response.status).toBe(400);
  });
  //
  test("Checking if /register for an empty data should return 403", async () => {
    const response = await request(app)
      .post("/auth/register")
      .send({
        lastName: "Gulati",
        email: userForValidLogin.email,
        phoneNumber: "04236178905545454554545454",
        password: "password"
      });
    expect(response.status).toBe(403);
  });
});

//deletes user and disconnects from db after running all tests
afterAll(async () => {
  await User.findByIdAndDelete(userForValidLogin._id);
  const db = mongoose.connection;
  db.close();
  console.log("disconnected from DB");
});
