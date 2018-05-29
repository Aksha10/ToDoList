var model = require('./../models/modelsToDo');

/**
 * @function getData(req,res)
 * @description function getData() getting the data from client side
 * @param {request object, server response object}:req, res
 */
function getData(req, res) {
	model.getData().then(
		function(data) {
			res.render('indextoDo.html',{
				pageTitle: 'To Do List',
				todojsontxt: data
			});
		}
	)
	.catch(function(error) {
		if(err) throw err;
	})
}
/**
 * @function addnewtask(req,res)
 * @description function addnewtask() adding new task 
 * @param {request object, server response object}:req, res
 */
function addnewtask(req, res) {
	newTask = req.body.data;
	if(!req.body.data) {	
		res.status(400).send({error:"Warning: Please enter valid input value"})
	}
	else {
		if(req.body.data.trim() == ""){
			res.status(422).send({error:"Warning: Please enter valid input value"})		
		}
		else {				
			model.addnewtask(newTask).then(
				function(data) {
					res.send(data)
					}
				)
			.catch(function(error) {
				if(err) throw err;
			})
		}
	}
}
/**
 * @function deleteTask(req,res)
 * @description function deleteTask() is used for delete a task
 * @param {request object, server response object}:req, res
 */
function deleteTask(req, res) {
	var delText  = req.query.id; 
	model.deleteTask(delText).then(
		function(data){
			res.send("successfully deleted");
		}
	)
	.catch(function(error) {
		if(err) throw err;
	})
}
/**
 * @function mark(req,res)
 * @param {request object, server response object}:req, res
 */
function mark(req,res) {
	var idStatus  = req.query.id;
	model.mark(idStatus).then(
		function(data) {
			res.send("id checked");
		}
	)
	.catch(function(error) {
		if(err) throw err;
	})
}
/**
 * @function markall(req,res)
 * @param {request object, server response object}:req, res
 */
function markall(req,res) {
	model.markall().then(
		function(data) {
			res.send("mark all");
		}
	)
	.catch(function(error) {
		if(err) throw err;
	})
}
/**
 * @function unmarkall(req,res)
 * @param {request object, server response object}:req, res
 */
function unmarkall(req,res) {
	model.unmarkall().then(
		function(data) {
			res.send("unmark all");
		}
	)
	.catch(function(error) {
		if(err) throw err;
	})
}
/**
 * @function clrtask(req,res)
 * @param {request object, server response object}:req, res
 */
function clrtask(req,res) {
	model.clrtask().then(
		function(data) {
			res.send("clear tasks");
		}
	)
	.catch(function(error) {
		if(err) throw err;
	})
}
/**
 * @function activetask(req,res)
 * @param {request object, server response object}:req, res
 */
function activetask(req,res) {
	model.activetask().then(
		function(data) {
			res.send(data);
		}
	)
	.catch(function(error) {
		if(err) throw err;
	})
}
/**
 * @function completeTask(req,res)
 * @param {request object, server response object}:req, res
 */
function completeTask(req,res) {
	model.completeTask().then(
		function(data) {
			res.send(data);
		}
	)
	.catch(function(error) {
		if(err) throw err;
	})
}
/**
 * @function inputTask(req,res)
 * @param {request object, server response object}:req, res
 */
function inputTask(req,res) {
	var updateId = req.params.id;
	var updateInput = req.body;	
	model.inputTask(updateId, updateInput).then(
		function(data) {
			res.send(data.name);
		}
	)
	.catch(function(error) {
		if(err) throw err;
	})
}
module.exports = {getData, addnewtask, deleteTask, mark, markall, unmarkall, clrtask, activetask, completeTask, inputTask} //Exporting modules
