const express = require('express');
const port = process.env.PORT || 3001;
var app = express();
app.set('view engine', 'html');
app.engine('.html', require('ejs').renderFile);
app.set('views',__dirname+'/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('indextoDo',{
		pageTitle: 'To Do List',
		welcomeMessage: 'Welcome to my website'
	});
});
app.listen(port, () => {
	console.log('Server is up on port '+port);
});