function completeAllTask(req,res) {
  const task = req.session.tasks
  const complete = req.session.complete
  let idPos = req.params.position.split(',')
  for(let j = 0; j < idPos.length; j++){
    for(let i = 0; i < task.length; i++){
      if(task[i].id == idPos[j]){
        complete.push(task[i])
        task.splice(i,1)
      }
    }
  } 
  res.status(200).send("todo ha ido ok")
}

module.exports = completeAllTask