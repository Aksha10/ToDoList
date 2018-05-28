var model = require('./../models/modelsToDo');

/**
 * @function getData(req,res)
 * @description function getData() getting the data from client side
 * @param {request object, server response object}:req, res
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
 * @function addnewtask(req,res)
 * @description function addnewtask() adding new task 
 * @param {request object, server response object}:req, res
 */
function addnewtask(req, res) {
	if(!req.body.data) {	
		res.status(400).send({error:"Warning: Please enter valid input value"})
	}
	else {
		if(req.body.data.trim() == ""){
			res.status(422).send({error:"Warning: Please enter valid input value"})		
		}
		else {
			newTask = req.body.data;			
			model.addnewtask(function(data) {
			res.send(data)
			});
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
	model.deleteTask(delText,function(data){
		res.send("successfully deleted");
	});
}
/**
 * @function mark(req,res)
 * @param {request object, server response object}:req, res
 */
function mark(req,res) {
	var idStatus  = req.query.id;
	model.mark(idStatus, function(data) {
		res.send("id checked");
	})
}
/**
 * @function markall(req,res)
 * @param {request object, server response object}:req, res
 */
function markall(req,res) {
	model.markall(function(data) {
		res.send("mark all");
	})
}
/**
 * @function unmarkall(req,res)
 * @param {request object, server response object}:req, res
 */
function unmarkall(req,res) {
	model.unmarkall(function(data) {
		res.send("unmark all");
	})
}
/**
 * @function clrtask(req,res)
 * @param {request object, server response object}:req, res
 */
function clrtask(req,res) {
	model.clrtask(function(data) {
		res.send("clear tasks");
	})
}
/**
 * @function activetask(req,res)
 * @param {request object, server response object}:req, res
 */
function activetask(req,res) {
	model.activetask(function(data) {
		res.send(data);
	})
}
/**
 * @function completeTask(req,res)
 * @param {request object, server response object}:req, res
 */
function completeTask(req,res) {
	model.completeTask(function(data) {
		res.send(data);
	})
}
/**
 * @function inputTask(req,res)
 * @param {request object, server response object}:req, res
 */
function inputTask(req,res) {
	var updateId = req.params.id;
	var updateInput = req.body;	
	model.inputTask(updateId, updateInput, function(data) {
	res.send(data.name);
	})
}
module.exports = {getData, addnewtask, deleteTask, mark, markall, unmarkall, clrtask, activetask, completeTask, inputTask} //Exporting modules
