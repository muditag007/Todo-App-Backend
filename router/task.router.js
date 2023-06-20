// const { router } = require('../app')

const router = require('express').Router()
const TaskController = require('../controller/task.controller')

router.post('/add', TaskController.add)
router.post('/get', TaskController.get)

module.exports = router
