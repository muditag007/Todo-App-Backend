// const { create } = require('../model/task.model')
const TaskModel = require('../model/task.model')

class TaskService {
  static async addTask (email, task) {
    try {
      const tasksList = await TaskModel.findOne({ email })

      if (tasksList) {
        tasksList.task.push(task)
        // const createTask = new TaskModel({ email, t })
        return await tasksList.save()
      } else {
        const createTask = new TaskModel({ email })
        createTask.task.push(task)
        return await createTask.save()
      }
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  static async getTasks (email) {
    try {
      const tasksList = await TaskModel.findOne({ email })
      
      if (tasksList) {
        return tasksList
      } else {
        throw Exception("Error")
      }

    } catch (e) {
      throw e
    }
  }
}

module.exports = TaskService
