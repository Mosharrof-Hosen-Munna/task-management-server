const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const taskRoute = require("./Routes/taskRoute");

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/task", taskRoute);

mongoose.set("strictQuery", false);

mongoose
  .connect(
    `mongodb+srv://Mosharrof:mosharrof@project.wytfk.mongodb.net/notePro?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connection Successfull"))
  .catch((err) =>
    console.log("Something went wrong, here is the error --->", err)
  );

app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("Server running on port --->", port);
});
