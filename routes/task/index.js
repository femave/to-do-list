const express = require('express')
const strftime = require('strftime')
const router = express.Router()

const removeTask = require('./handlers/removeTask')
const updateTask = require('./handlers/updateTask')

let tasks = global.tasks
let complete = global.complete

router.delete('/todo-list-delete/:position', removeTask)
router.put('/todo-list/:position', updateTask)

module.exports = router