function updateTask(req,res) {
  const idPos = req.params.position
  const data = req.body.task
  const task = req.session.tasks
    
  if(data){
    for (var i = 0; i < task.length; i++){
      if(task[i].id == idPos){
        const id = task[i].id
        const time = task[i].time
        task.push({
          id: id,
          time: time,
          task: data
        })
        task.splice(i,1)
      }
    }
  }else {
    for (var i = 0; i < task.length; i++){
      if(task[i].id == idPos){
        console.log(task[i])
        req.session.complete.push(task[i])
        task.splice(i,1)
      }
    }
  }

  res.status(200).send("todo ha ido ok")
}


module.exports = router