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

router.get('/:id/tasks', (req, res, next) => {
    Project.getTasks(req.params.id)
           .then(tasks => {
               const project_tasks = {
                   project_name: tasks[0]["project_name"],
                   project_description: tasks[0]["project_description"],
                   tasks: tasks.map(task => {
                       return {
                        task_id: task["task_id"],
                        task_description: task["task_description"],
                        task_notes: task["task_notes"],
                       }
                   })
               }
               res.status(200).json(project_tasks)
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