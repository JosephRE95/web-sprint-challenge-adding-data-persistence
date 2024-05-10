const db = require('../../data/dbConfig');

function getAllProjects() {
  return db('projects');
}

function getProjectById(id) {
  return db('projects').where('project_id', id).first();
}

async function createProject(project) {
  const [projectId] = await db('projects').insert(project);
  return getProjectById(projectId);
}

module.exports = {
  getAllProjects,
  getProjectById,
  createProject
};
