const fs = require('fs');
var path = require('path');

/**
 * @function getData(callback)
 * @description callback function for getData function
 * @param {function} callback 
*/
function getData(callback) {
	fs.readFile(path.join(__dirname, '../todolist.json'), 'utf-8',function (err, data) {
		if (err) throw err;
		callback(JSON.parse(data))
	});
}
/**
 * @function addnewtask(taskCallback)
 * @description callback function for addnewtask function
 * @param {function} taskCallback 
*/
function addnewtask(taskCallback) {
	var taskid = Math.floor(Math.random() * 26) + Date.now();
	var arrObj = require('../todolist.json')
	var tempObj = {
		name: newTask,
		id: taskid,
		status: false
	}
	arrObj.push(tempObj)
	write(arrObj)
	taskCallback(tempObj)
}
/**
 * @function deleteTask(delText,deleteCallback)
 * @description callback function for delete function
 * @param {function} delText, deleteCallback 
*/
function deleteTask(delText, deleteCallback) {
	fs.readFile(path.join(__dirname, '../todolist.json'), 'utf-8', function (err, data) {
		if (err) throw err
		parseObj = JSON.parse(data);
		removeElement = parseObj.filter(function(element) {
			if(element.id!=delText){
				return element
			}
		})	
		write(removeElement);
		deleteCallback(removeElement);
	});
}
/**
 * @function mark(idStatus,markCallback)
 * @description callback function for mark function
 * @param {function} idStatus, markCallback 
*/
function mark(idStatus, markCallback) {
	fs.readFile(path.join(__dirname, '../todolist.json'), 'utf-8', function (err, data) {
	if(err) throw err
	parseArray = JSON.parse(data);
	function changeStatus(idStatus) {		
		for (var i in parseArray) {
			if (parseArray[i].id == idStatus) {
				parseArray[i].status = !parseArray[i].status;	
				break; //Stop this loop, we found it!
			}
		}
	}
	changeStatus(idStatus);
	write(parseArray)
	markCallback(parseArray);
})	 
}
/**
 * @function markall(markallCallback)
 * @description callback function for markall function
 * @param {function} markallCallback 
*/
function markall(markallCallback) {
fs.readFile(path.join(__dirname, '../todolist.json'), 'utf-8', function (err, data) {
	if(err) throw err
	parseArrayObj = JSON.parse(data);
		parseArrayObj.forEach(function(element) {
			element.status = true				
		});	
	write(parseArrayObj)
	markallCallback(parseArrayObj)
});
}
/**
 * @function unmarkall(unmarkallCallback)
 * @description callback function for unmarkall function
 * @param {function} unmarkallCallback 
*/
function unmarkall(unmarkallCallback) {
	fs.readFile(path.join(__dirname, '../todolist.json'), 'utf-8', function (err, data) {
		if(err) throw err
		arrayParse = JSON.parse(data);
		arrayParse.forEach(function(element) {
				element.status = false				
			});	
		write(arrayParse)
		unmarkallCallback(arrayParse)
		});
}
/**
 * @function clrtask(clrtaskCallback)
 * @description callback function for clrtask function
 * @param {function} clrtaskCallback 
*/
function clrtask(clrtaskCallback) {
	fs.readFile(path.join(__dirname, '../todolist.json'), 'utf-8', function (err, data) { 
		if(err) throw err
		clearParse = JSON.parse(data);
		clearTask = clearParse.filter(function(element) {
			if(element.status != true) {
				return element
			}
		});	
		write(clearTask)
		clrtaskCallback(clearTask)
	});	
}
/**
 * @function activetask(activeCallback)
 * @description callback function for activetask function
 * @param {function} activeCallback 
*/
function activetask(activeCallback) {
	fs.readFile(path.join(__dirname, '../todolist.json'), 'utf-8', function (err, data) { 
		if(err) throw err
		activeParse = JSON.parse(data)
		actvTask = activeParse.filter(function(element) {
			if(element.status == false){
				return element;
			}
		}) 
		activeCallback(actvTask)	
	})
}
/**
 * @function completeTask(completeCallback)
 * @description callback function for completeTask function
 * @param {function} completeCallback 
*/
function completeTask(completeCallback) {
	fs.readFile(path.join(__dirname, '../todolist.json'), 'utf-8', function (err, data) { 
		if(err) throw err
		completeParse = JSON.parse(data)
		cmpltTask = completeParse.filter(function(element) {
			if(element.status == true){
				return element;
			}
		}) 
		completeCallback(cmpltTask)		
	})
}
/**
 * @function inputTask(updateId,updateInput,inputCallback)
 * @description callback function for inputTask function
 * @param {function} updateId, updateInput, inputCallback 
*/
function inputTask(updateId, updateInput, inputCallback) {
	fs.readFile(path.join(__dirname, '../todolist.json'), 'utf-8', function (err, data) { 
		if(err) throw err
		inputParse = JSON.parse(data)
		function changeName(updateId, updateInput) {			
			for (var i in inputParse) {
				if (inputParse[i].id == updateId) {
					inputParse[i].name = updateInput.name ;		
					break; //Stop this loop, we found it!
				}
			}
		}
		changeName(updateId, updateInput);
		write(inputParse)
		inputCallback(updateInput);
	});
}

function write(writeData) {
	fs.writeFile(path.join(__dirname, '../todolist.json'), JSON.stringify(writeData), 'utf-8', function (err, data) {
	});
}
module.exports = { getData, addnewtask, deleteTask, mark, markall, unmarkall, clrtask, activetask, completeTask, inputTask } //Exporting Modules	