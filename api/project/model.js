// projectsModel.js

const db = require('../../data/dbConfig');

function getAllProjects() {
  return db('projects');
}

function getProjectById(id) {
  return db('projects').where('project_id', id).first();
}


async function createProject(project) {
  // Ensure that the project_completed field is stored as a boolean false
  const newProject = {
    ...project,
    project_completed: false
  };

  const [projectId] = await db('projects').insert(newProject);
  return getProjectById(projectId);
}


module.exports = {
  getAllProjects,
  getProjectById,
  createProject
};


