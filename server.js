const express = require('express');
const port = process.env.PORT || 3001;
var app = express();
const parser = require('body-parser');
var fs = require('fs');

app.set('view engine', 'html');
app.engine('.html', require('ejs').renderFile);
app.set('views',__dirname+'/views');

app.use(express.static(__dirname + '/public'));
app.use(parser.json());

var todoobj = JSON.parse(fs.readFileSync('todolist.json', 'utf8'));

app.get('/', (req, res) => {
	res.render('indextoDo',{
		pageTitle: 'To Do List',
		todojsontxt: todoobj
	});
});

//todo task
app.post('/addNewTask' , (req,res) => {
  var newTask = req.body.data;
	var arrObj = require('./todolist.json')
  arrObj.push({
    todo: newTask
  });
  fs.writeFile('todolist.json', JSON.stringify(arrObj), 'utf-8', function(err) {
      if (err) throw err
      console.log('new task added');
      console.log(arrObj);
    });
    res.send("success");
});

app.delete('/delete', (req, res) => {
  var delText  = req.query.todo; 
  console.log(delText)
});

app.listen(port, () => {
	console.log('Server is up on port '+port);
});