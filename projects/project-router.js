const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

const knex = require('../data/db-config')

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

router.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  knex('task')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        res.status(201).json({message: 'task updated'})
      } else {
        res.status(404).json({message: 'no task found'})
      }
    })
    .catch(error => {
      console.log("PUT / error", error)

      res.status(500).json({message: error.message})
  })
})

router.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  knex('project')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        res.status(201).json({message: 'project updated'})
      } else {
        res.status(404).json({message: 'no project found'})
      }
    })
    .catch(error => {
      console.log("PUT / error", error)

      res.status(500).json({message: error.message})
  })
})

router.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  knex('task')
    .where({ id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json({message: 'task deleted'})
      } else {
        res.status(404).json({message: 'no task found'})
      }
    })
    .catch(error => {
      console.log("DELETE / error", error);
      res.status(500).json({ message: error.message });
    });
})

router.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  knex('project')
    .where({ id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json({message: 'project deleted'})
      } else {
        res.status(404).json({message: 'no project found'})
      }
    })
    .catch(error => {
      console.log("DELETE / error", error);
      res.status(500).json({ message: error.message });
    });
})

module.exports = router;