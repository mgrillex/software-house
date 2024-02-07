require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

mongoose.connect(process.env.uri);
const Ourprojects = require("./src/router/OurProjects");
app.use("/", Ourprojects);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
