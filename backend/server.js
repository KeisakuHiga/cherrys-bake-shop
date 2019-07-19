const mongoose = require("mongoose");
const app = require("./api");

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, err => {
  if (err) {
    console.log("not connected to db");
  } else {
    console.log("everything is ok!!");
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
