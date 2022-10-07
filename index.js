const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log("Error! DB unable to connect");
  });

app.get("/api/test", () => {
  console.log("Test is successful");
});
app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is up and running :)");
});
