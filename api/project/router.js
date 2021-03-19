// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getAll()
           .then(projects => {
               const answer = projects.map(project => {
                   return {
                       ...project,
                       project_completed: project["project_completed"] === 1 ? true : false,
                   }
               })
               res.status(200).json(answer);
           })
           .catch(next)
})
router.post('/', (req, res, next) => {
    Project.add(req.body)
           .then(newProject => {
               res.status(201).json({ ...newProject, "project_completed": newProject["project_completed"] === 1 ? true:false })
           })
           .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
        custom: 'Error in project/router.'
    })
})
module.exports = router;