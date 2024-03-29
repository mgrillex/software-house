require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

mongoose.connect(process.env.uri, () => {
  console.log("Connected to DB");
});
const Ourprojects = require("./router/OurProjects");
app.use("/", Ourprojects);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
