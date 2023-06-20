const mongoose = require('mongoose')
const db = require('../config/db')

const { Schema } = mongoose

const taskSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  task: {
    type: [
      {
        type: String
      }
    ],
    // type: Array,
    required: true,
    default: []
  }
})

const TasksModel = db.model('tasks', taskSchema)

module.exports = TasksModel
