const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

router.get('/projects', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects)
    })
    .catch(err => {
      res.status(500).json({message: 'failed to get projects'})
    })
})

router.get('/resources', (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.json(resources)
    })
    .catch(err => {
      res.status(500).json({message: 'failed to get resources'})
    })
})

router.get('/tasks', (req, res) => {
  Projects.getTasks()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(err => {
      res.status(500).json({message: 'failed to get tasks'})
    })
})

router.post('/resources', (req, res) => {
  Projects.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(err => {
      console.log(err)

      res.status(500).json({
        message: 'error adding resource'
      })
    })
})

router.post('/projects', (req, res) => {
  Projects.addProject(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      console.log(err)

      res.status(500).json({
        message: 'error adding project'
      })
    })
})

router.post('/tasks', (req, res) => {
  Projects.addTask(req.body)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(err => {
      console.log(err)

      res.status(500).json({
        message: 'error adding task'
      })
    })
})

module.exports = router;