// api/resourcesRouter.js
const express = require('express');
const router = express.Router();
const Resource = require('./model');

// POST /api/resources
router.post('/', async (req, res) => {
  try {
    const resource = await Resource.createResource(req.body);
    console.log(req.body)
    res.status(201).json(resource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create resource' });
  }
});

// GET /api/resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resource.getAllResources();
    res.status(200).json(resources);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve resources' });
  }
});

// GET /api/resources/:id
router.get('/:id', async (req, res) => {
  const resourceId = req.params.id;
  try {
    const resource = await Resource.getResourceById(resourceId);
    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve resource' });
  }
});

module.exports = router;
