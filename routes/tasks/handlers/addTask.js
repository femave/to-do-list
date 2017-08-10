function addTask (req,res) {
  console.log('task added?')
	req.session.tasks.push({
    id: counter ++,
    task: req.body.task,
    time: '(Created at ' + strftime('%F %T') + ')',
    default: false
  })
  	res.redirect('/')
}

module.exports = addTask