// const { create } = require('../services/user.services')
const TaskService = require('../services/task.services')

exports.add = async (req, res, next) => {
  try {
    const { email, task } = req.body

    const successRes = await TaskService.addTask(email, task)
    res.json({ status: true, success: 'Task Added Successfully' })
  } catch (e) {
    throw e
  }
}

exports.get = async (req, res, next) => {
  try {
    const { email } = req.body

    const successRes = await TaskService.getTasks(email)

    res.json({ status: true, email: successRes.email, tasks: successRes.task })
  } catch (e) {
    throw e
  }
}
