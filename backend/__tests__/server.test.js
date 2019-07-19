const request = require("supertest");
const app = require("../api");

// Checks if API is working
describe("api is working", () => {
  test('api sends 200 for "localhost:5000/quote/" endpoint', async () => {
    const response = await request(app).get("/quote/");
    expect(response.status).toBe(200);
  });
});

// http://localhost:5000/quote/seedData

describe("testing the post endpoint for seeding quote works in the way we expect", async () => {
  test("api sends 200 for "localhost:5000/quote/seedData" endpoint, async () => {
    const name = "keisaku";
    const response = await request(app)
      .post("/create-data")
      .send({
        name: name,
        password: password
      });
    expect(response.text).toBe(200);
  });


  const newUser = await new User({
    userName: {
      firstName: data.userData.firstName,
      lastName: data.userData.lastName
    },
    contact: {
      email: data.userData.email,
      phoneNumber: data.userData.phoneNumber
    }
  })
  const savedUser = await newUser.save()
  const newQuote = await new Quote({
    typeOfProduct: data.quoteData.typeOfProduct,
    dateOfEvent: data.quoteData.dateOfEvent,
    pickUp: {
      date: data.quoteData.pickUpDate,
      time: data.quoteData.pickUpTime
    },
    typeOfOccasion: data.quoteData.typeOfOccasion,
    numberOfGuests: data.quoteData.numberOfGuests,
    flavour: {
      cakeFlavour: data.quoteData.cakeFlavour,
      fillingFlavour: data.quoteData.fillingFlavour
    },
    message: data.quoteData.message,
    user: savedUser._id




//   test("if request body has worng parameter send an error 404", async () => {
//     const name = "keisaku";
//     const response = await request(app)
//       .post("/create-data")
//       .send({
//         name: name,
//         password: "djal;da"
//       });
//   });
//   expect(response.status).toBe(404);
// });

// describe("testing the json web tokens", async () => {
//   test("if no token provided", async () => {
//     const response = await request(app)
//       .get("/token")
//       .set("token", "");
//   });
//   expect(response.status).toBe(400);
// });
