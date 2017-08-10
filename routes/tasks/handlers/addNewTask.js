function addNewTask(req,res) {
	res.render('pages/list-task', { tasks:req.session.tasks })
}

module.exports = addNewTask