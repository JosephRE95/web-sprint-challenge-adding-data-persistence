// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAllResources() {
  return db('resources');
}

function getResourceById(id) {
  return db('resources').where('resource_id', id).first();
}

async function createResource(resource) {
  const [resourceId] = await db('resources').insert(resource);
  return getResourceById(resourceId);
}

module.exports = {
  getAllResources,
  getResourceById,
  createResource
};
