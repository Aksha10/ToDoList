const fs = require('fs');

function getData(callback) {
fs.readFile('todolist.json', function (err, data) {
	var parseData = JSON.parse(data)
	if (err) throw err;
	callback(parseData)
});
}

function addnewtask(taskCallback) {
	var taskid =  Math.floor(Math.random() * 26) + Date.now();
	var arrObj = require('../todolist.json')
	var tempObj = {
		name: newTask,
		id: taskid
	}
	arrObj.push(tempObj)
	fs.writeFile('todolist.json', JSON.stringify(arrObj), 'utf-8', function(err, data) {
		if (err) throw err
		console.log('new task added');
		console.log(arrObj);
	});
	taskCallback(tempObj)	
}

module.exports = {getData, addnewtask}