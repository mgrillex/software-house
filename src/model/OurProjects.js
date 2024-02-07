const mongoose = require("mongoose");
const OurProjectsSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  image: String,
  link: String,
});
module.exports = mongoose.model("OurProject", OurProjectsSchema);
