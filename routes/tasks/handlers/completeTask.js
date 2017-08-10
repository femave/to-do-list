function completeTask(req,res) {
	res.render('pages/complete', { complete:req.session.complete })
}

module.exports = completeTask