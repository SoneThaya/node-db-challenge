const db = require('../data/db-config')

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks,
  findById,
}

function findById(id) {
  return db('project')
    .where({ id })
    .first()
}

function getResources() {
  return db('resource')
}

function getProjects() {
  return db('project')
}

function getTasks() {
  // list of tasks should include project name and project description
  return db('task')
    .join('project', 'project.id', 'task.project_id')
    .select('project.name', 'project.description', 'task.description', 'task.notes', 'task.completed')
}
async function addResource(resource) {
  const [id] = await db('resource').insert(resource)

  return findById(id)
}
async function addProject(project) {
  const [id] = await db('project').insert(project)

  return findById(id)
}
async function addTask(task) {
  const [id] = await db('task').insert(task)

  return findById(id)
}