const express = require('express')
const strftime = require('strftime')
const router = express.Router()

const addNewTask = require('./handlers/addNewTask')
const addTask = require('./handlers/addTask')
const completeAllTask = require('./handlers/completeAllTask')
const completeTask = require('./handlers/completeTask')

let counter = 0;
let tasks = global.tasks
let complete = global.complete

router.get('/', addNewTask)
router.get('/complete', completeTask)
router.post('/todo-list', addTask)
router.put('/deleteAll/:position', completeAllTask)


module.exports = router