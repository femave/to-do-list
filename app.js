const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const strftime = require('strftime')
const router = express.Router()
const app = express()

app.set('view engine', 'pug')
// app.locals.pretty = true;

app.use( express.static( path.join(__dirname,'public')) )

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let tasks = []
let complete = []
let counter = 0;


app.get('/', (req,res)=>{
	res.render('pages/list-task', { tasks })
})

app.get('/complete', (req,res)=>{
	res.render('pages/complete', { complete })
})

app.post('/todo-list', (req,res)=>{
	tasks.push({
    id: counter ++,
    task: req.body.task,
    time: '(Created at ' + strftime('%F %T') + ')',
    default: false
  })
  	res.redirect('/')
})

app.put('/todo-list/:position', (req,res) => {
  let idPos = req.params.position
  let data = req.body.task
    console.log(data)
  if(data){
    for (var i = 0; i < tasks.length; i++){
      if(tasks[i].id == idPos){
        const id = tasks[i].id
        const time = tasks[i].time
        tasks.push({
          id: id,
          time: time,
          task: data
        })
        tasks.splice(i,1)
      }
    }
  }else {
    for (var i = 0; i < tasks.length; i++){
      if(tasks[i].id == idPos){
        console.log(tasks[i])
        complete.push(tasks[i])
        tasks.splice(i,1)
      }
    }
  }
  

  res.status(200).send("todo ha ido ok")
})

app.delete('/todo-list-delete/:position', (req,res) => {
  let idPos = req.params.position
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i].id == idPos){
      tasks.splice(i,1)
    }
  }

  res.status(200).send("todo ha ido ok")
})

app.put('/deleteAll/:position', (req,res) => {
  let idPos = req.params.position.split(',')
  for(let j = 0; j < idPos.length; j++){
    for(let i = 0; i < tasks.length; i++){
      if(tasks[i].id == idPos[j]){
        complete.push(tasks[i])
        tasks.splice(i,1)
      }
    }
  } 
  res.status(200).send("todo ha ido ok")
})

app.listen(3000)