const express = require("express");
const router = express.Router();
const projectController = require("../controller/OurProjects");

// Middleware to get a project by ID
router.param("id", projectController.getOurProject);

// Routes
router.post("/projects", projectController.createOurProject);
router.get("/projects/:id", projectController.getOurProjectById);
router.put("/projects/:id", projectController.updateOurProject);
router.delete("/projects/:id", projectController.deleteOurProject);

module.exports = router;
