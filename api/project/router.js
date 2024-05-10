const express = require('express');
const router = express.Router();
const projectsModel = require('./model');

// POST /api/projects
router.post('/', async (req, res) => {
  try {
    const project = await projectsModel.createProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create project' });
  }
});

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await projectsModel.getAllProjects();
    const modifiedProjects = projects.map(project => ({
      ...project,
      isActive: project.isActive === 1 ? true : false // Convert 1 to true, 0 to false
    }));
    res.status(200).json(modifiedProjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve projects' });
  }
});

module.exports = router;
