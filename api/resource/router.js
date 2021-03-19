// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model')

router.get('/', (req, res, next) => {
    Resources.get()
             .then( resources => {
                 res.status(200).json(resources)
             })
             .catch(next)
})
router.post('/', (req, res, next) => {
    Resources.add(req.body)
             .then( newResource => {
                 res.status(201).json(newResource)
             })
             .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
        custom: 'Error in resource/router.'
    })
})
module.exports = router;