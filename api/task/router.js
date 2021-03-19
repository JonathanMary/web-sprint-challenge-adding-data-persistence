// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.getAll()
         .then(tasks => {
             const cleanTasks = tasks.map(task => {
                 return { ...task, task_completed: task["task_completed"] === 1 ? true:false }
             })
             res.status(200).json(cleanTasks)
         })
         .catch(next)
})
router.post('/', (req, res, next) => {
    Tasks.add(req.body)
         .then(newTask => {
             res.status(201).json({ ...newTask, task_completed: newTask["task_completed"] === 1 ? true:false })
         })
         .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
        custom: 'Error in task/router.'
    })
})
module.exports = router;