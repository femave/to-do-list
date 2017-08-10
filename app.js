const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const strftime = require('strftime')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const app = express()

const routesTask = require('./routes/task/index.js')
const routesTasks = require('./routes/tasks/index.js')

app.set('view engine', 'pug')

app.use( express.static( path.join(__dirname,'public')) )
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'cualquierpalabaraquesenosocurra',
  store: new FileStore()
}))

app.use( function(req, res, next) {
  req.session.tasks = req.session.tasks || []
  req.session.complete = req.session.complete || []
  next()
})

app.use(routesTask)
app.use(routesTasks)

app.listen(3000)