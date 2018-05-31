const route = require('../routes/routesToDo');
var request = require('supertest');
var expect = require('expect');
var {app} = require('../server.js');

// describe('AddTask', () => {
// 	//if input value is valid
// 	it('Valid Input',(done) => {
// 		var data = "task";
// 		request(app)
// 		.post('/addNewTask')
// 		.send({data})
// 		.expect(200)
// 		.expect((res) => {
// 			expect(res.body.name).toBe(data)
// 		})
// 		.end(done);
// 	})
// 	//if input is empty
// 	it('Empty Input',(done) => {
// 		var data = "";
// 		request(app)
// 		.post('/addNewTask')
// 		.send({data})
// 		.expect(200)
// 		.expect((res) => {
// 			expect(res.body.name).toBe(data)
// 		})
// 		.end(done);
// 	})
// 	//if input is blank
// 	it('Blank Input',(done) => {
// 		var data = " ";
// 		request(app)
// 		.post('/addNewTask')
// 		.send({data})
// 		.expect(200)
// 		.expect((res) => {
// 			expect(res.body.name).toBe(data)
// 		})
// 		.end(done);
// 	})
// })

// describe('Delete Task', () => {
// 	//if id is valid
// 	it('Valid Id',(done) => {
// 		var data = 1527657371868;
// 		request(app)
// 		.delete('/delete?id='+data)
// 		.expect(200)
// 		.expect((res) => {	
// 			expect(res.body.id).toBe(data.id)
// 		})
// 		.end(done);
// 	})
// })

// describe('Mark All', () => {
// 	//if status is true
// 	it('True Status',(done) => {
// 		request(app)
// 		.put('/markall')
// 		.expect(200)
// 		.expect((res) => {	
// 			var temp1 = res.body;
// 	    	var temp2;
// 	    	for(i=0; i<temp1.length; i++) {
// 					temp2 = temp1[i].status;
// 				}
// 				console.log("status mark",temp2);
// 	    	expect(temp2).toBe(true);
// 		})
// 		.end(done)
// 	})
// })

// describe('Unmark All', () => {
// 	//if status is false
// 	it('False Status',(done) => {
// 		request(app)
// 		.put('/unmarkall')
// 		.expect(200)
// 		.expect((res) => {	
// 			var temp1 = res.body;
// 	    	var temp2;
// 	    	for(i=0; i<temp1.length; i++) {
// 					temp2 = temp1[i].status;
// 				}
// 				console.log("status unmark",temp2);
// 	    	expect(temp2).toBe(false);
// 		})
// 		.end(done)
// 	})
// })

// describe('Clear Completed', () => {
// 	it('clear completed task', (done) => {
// 		request(app)
// 		.delete('/clrtask')
// 		.expect(200)
// 		.expect((res) => {
// 			var temp1 = res.body;
// 			var temp2;
// 			for(i=0; i<temp1.length; i++) {
// 				temp2 = temp1[i].status;
// 			}
// 			console.log("Clear Completed",temp2);
// 			expect(temp2).toBe(false);
// 		})
// 		.end(done)
// 	})
// })

// describe('Active Task', () => {
// 	it('Active Tasks', (done) => {
// 		request(app)
// 		.get('/activetask')
// 		.expect(200)
// 		.expect((res) => {
// 			var temp1 = res.body;
// 			var temp2;
// 			for(i=0; i<temp1.length; i++) {
// 				temp2 = temp1[i].status;
// 			}
// 			console.log("Active tasks",temp2);
// 			expect(temp2).toBe(false);
// 		})
// 		.end(done)
// 	})
// })

// describe('Complete Task', () => {
// 	it('Complete Tasks', (done) => {
// 		request(app)
// 		.get('/completetask')
// 		.expect(200)
// 		.expect((res) => {
// 			var temp1 = res.body;
// 			var temp2;
// 			for(i=0; i<temp1.length; i++) {
// 				temp2 = temp1[i].status;
// 			}
// 			console.log("Complete taskssssssss",temp2);
// 			expect(temp2).toBe(true);
// 		})
// 		.end(done)
// 	})
// })

// describe('Update Input', () => {
// 	//update input value
// 	it('Update input value', (done) => {
// 		var id = 1527682330037;
// 		var data = "value"
// 		request(app)
// 		.put('/inputtask/:id')
// 		.send({data})
// 		.expect(200)
// 		.expect((res) => {		
// 			expect(res.body.data).toBe(data)
// 		})
// 		.end(done)
// 	})
// })

describe('Mark', () => {
	it('Checked status', (done) => {
		var data = 1527657377745
		request(app)
		.put('/mark?id='+data)
		.expect(200)
		.expect((res) => {
	    	expect(res.body.id).toBe(data.id);
		})
		.end(done)
	})
})