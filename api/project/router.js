// router.js

const express = require('express');
const router = express.Router();
const projectsModel = require('./model');

// POST /api/projects
router.post('/', async (req, res) => {
  try {
    const project = await projectsModel.createProject(req.body);
    project.project_completed = !!project.project_completed
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
    // Convert project_completed to boolean
    const modifiedProjects = projects.map(project => ({
      ...project,
      project_completed: !!project.project_completed
    }));
    res.status(200).json(modifiedProjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve projects' });
  }
});

module.exports = router;
