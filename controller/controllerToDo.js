var model = require('./../models/modelsToDo');

/**
 * @function getData(req, res)
 * @description function getData() getting the data from client side
 * @param {server object}:req, res
 */
function getData(req, res) {
	model.getData(function(data) {
		res.render('indextoDo.html',{
			pageTitle: 'To Do List',
			todojsontxt: data
		});
	});
}
/**
 * @function addnewtask(req, res)
 * @description function addnewtask() adding new task 
 * @param {server object}:req,res
 */
function addnewtask(req, res) {
	newTask = req.body.data;
	if(newTask == ""){
		throw err
	}
	else{
		model.addnewtask(function(data) {
		res.send(data)
		});
	}

}
/**
 * @function deleteTask(req, res)
 * @description function deleteTask() is used for delete a task
 * @param {server object}:req, res
 */
function deleteTask(req, res) {
	var delText  = req.query.todo; 
	console.log(delText)
}
module.exports = {getData, addnewtask,deleteTask}
