const OurProject = require("../model/OurProjects");

module.exports = {
  getOurProject: async function (req, res, next) {
    let ourproject;
    try {
      ourproject = await OurProject.findById(req.params.id);
      if (ourproject == null) {
        return res.status(404).json({ message: "This Project is not found" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.ourproject = ourproject;
    next();
  },
  getOurProjectById: async function (req, res) {
    res.json(res.ourproject);
  },
  updateOurProject: async function (req, res) {
    res.ourproject.name = req.body.name;
    res.ourproject.title = req.body.title;
    res.ourproject.description = req.body.description;
    res.ourproject.image = req.body.image;
    res.ourproject.link = req.body.link;
    try {
      const updatedOurProject = await res.ourproject.save();
      res.json(updatedOurProject);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteOurProject: async function (req, res) {
    try {
      await res.ourproject.remove();
      res.json({ message: "OurProject deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createOurProject: async function (req, res) {
    try {
      const newOurProject = await OurProject.create(req.body);
      res.status(201).json(newOurProject);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
