const db = require('../data/db-config')

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks,
  findById,
  removeTask,
  removeProject,
  updateTask,
  updateProject,
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
    .select('project.name', 'project.desc', 'task.description', 'task.notes', 'task.completed')
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

function removeTask(id) {
  return db('task')
    .where({ id })
    .del()
}

function removeProject(id) {
  return db('project')
    .where({ id })
    .del()
}

function updateTask(id, changes) {
  return db('task')
    .where({ id })
    .update(changes, '*')
}

function updateProject(id, changes) {
  return db('project')
    .where({ id })
    .update(changes, '*')
}