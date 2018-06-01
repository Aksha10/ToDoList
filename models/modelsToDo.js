var MongoClient = require('mongodb').MongoClient
	, assert = require('assert');
	// Connection URL
var url = 'mongodb://localhost:27017/Todo';

function mongoClient() {
	return new Promise(function(resolve, reject) {
		
		MongoClient.connect(url, function (err, client) {
			if(err) throw err;		
	   	//success
			db = client.db('Todo');
			resolve(db)
		})
	})
}
/**
 * @function getData()
 * @description 
*/
function getData() {
	return new Promise(function(resolve, reject) {
		mongoClient().then(function(err, success) {
			db.collection('Table', function (err, collection) {
				collection.find().toArray(function(err, documents) {
					if(err) throw err; 
					//success     
					resolve(documents);          
			 	});			 
			});
		})
		.catch(function(err){
			console.log(err);		
		})
		})
}
/**
 * @function addnewtask()
 * @description 
*/
function addnewtask(newTask) {
	return new Promise(function(resolve, reject) {
		mongoClient().then(function(err, success) { 
			var taskid = Math.floor(Math.random() * 26) + Date.now()
			db.collection('Table', function (err, collection) {
				if(err) throw err;
				var tempObj = {
					name: newTask,
					id: taskid,
					status: false
				}
				collection.insert( { name: newTask,id: taskid,status: false },function(err, success) {
					if(err) throw err;
					resolve(tempObj); 
				})				
			})
		})
		.catch(function(err){
			console.log(err);		
		})	
	})
}
/**
 * @function deleteTask()
 * @description 
*/
function deleteTask(delText) {
	var id = parseFloat(delText)
	return new Promise(function(resolve, reject) {
		mongoClient().then(function(err, success) {
			db.collection('Table', function (err, collection) {
				if(err) throw err;
				collection.remove({ id:id}, function(err, success) {
					if(err) throw err;
					resolve("success"); 
				});			
			})
		})
		.catch(function(err){
			console.log(err);		
		})		
	})		
}

/**
 * @function markall()
 * @description
*/
function markall() {
	return new Promise(function(resolve, reject) {
		mongoClient().then(function(err, success) {
			db.collection('Table', function (err, collection) {
				if(err) throw err;
				collection.updateMany({}, {$set: { status : true }}, function(err, success) {
					if(err) throw err;
					resolve("success")
				})		
			})
		})
		.catch(function(err){
			console.log(err);		
		})
	})
}

/**
 * @function unmarkall()
 * @description
*/
function unmarkall() {
	return new Promise(function(resolve, reject) {
		mongoClient().then(function(err, success) {
			db.collection('Table', function (err, collection) {
				if(err) throw err;
				collection.updateMany({}, {$set: { status : false }}, function(err, success) {
					if(err) throw err;
					resolve("success")
				})		
			})
		})
		.catch(function(err){
			console.log(err);		
		})
	})
}
/**
 * @function mark()
 * @description  
*/
function mark(idStatus) {
	var id = parseFloat(idStatus.id);
	var status = idStatus.status;	
	return new Promise(function(resolve, reject){
		mongoClient().then(function(err, success) {
			db.collection('Table', function (err, collection) {
				if(err) throw err;
				collection.update({id : id},{$set: { status : status }} , function(err, success) {
					if(err) throw err
					resolve("success")
				})			
			})
		})
		.catch(function(err){
			console.log(err);		
		})
	}) 
}
/**
 * @function clrtask()
 * @description 
*/
function clrtask() {
	return new Promise(function(resolve, reject) {
		mongoClient().then(function(err, success) {
			db.collection('Table', function (err, collection) {
				if(err) throw err;
				collection.remove( { status:true }, function(err, success) {
					if(err) throw err;
					resolve("success"); 
				});			
			})
		})
		.catch(function(err){
			console.log(err);		
		})
	})		
}
/**
 * @function activetask()
 * @description 
*/
function activetask() {
	return new Promise(function(resolve, reject) {
		mongoClient().then(function(err, success) {
			db.collection('Table', function (err, collection) {
				if(err) throw err;
				collection.find({ status: false }).toArray(function(err, documents) {
					if(err) throw err; 
					//success     
					resolve(documents);          
			 	});			 
			});
		})
		.catch(function(err){
			console.log(err);		
		})
	})
}
/**
 * @function completeTask()
 * @description  
*/
function completeTask() {
	return new Promise(function(resolve, reject) {
		mongoClient().then(function(err, success) { 
			db.collection('Table', function (err, collection) {
				if(err) throw err;
				collection.find({ status: true }).toArray(function(err, documents) {
					if(err) throw err; 
					//success     
					resolve(documents);          
			 	});			 
			});
		})
		.catch(function(err){
			console.log(err);		
		})
	})
}
/**
 * @function inputTask(updateId,updateInput)
 * @description
*/
function inputTask(updateId, updateInput) {
	var id = parseFloat(updateId);
	var name = updateInput.name;
	return new Promise(function(resolve, reject){
		mongoClient().then(function(err, success) {  
			db.collection('Table', function (err, collection) {
				if(err) throw err;
				collection.update( {id:id},{$set:{ name: name}},function(err, success) {
					if(err) throw err;
					resolve(name); 
				});
			})
		})
		.catch(function(err){
			console.log(err);		
		})
	})
}

module.exports = { getData, addnewtask, deleteTask, mark, markall, unmarkall, clrtask, activetask, completeTask, inputTask } //Exporting Modules	