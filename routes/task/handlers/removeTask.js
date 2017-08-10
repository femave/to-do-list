function removeTask(req,res) {
  let idPos = req.params.position
  const task = req.session.tasks
  for(var i = 0; i < task.length; i++){
    if(task[i].id == idPos){
      task.splice(i,1)
    }
  }

  res.status(200).send("todo ha ido ok")
}

module.exports = removeTask