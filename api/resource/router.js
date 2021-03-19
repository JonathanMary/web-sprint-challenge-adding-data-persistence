// build your `/api/resources` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    res.json("resource router");
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
        custom: 'Error in resource/router.'
    })
})
module.exports = router;