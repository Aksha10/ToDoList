const express = require('express');
const port = process.env.PORT || 3001;
var app = express();
const parser = require('body-parser');
const routes = require('./routes/routesToDo');

app.set('view engine', 'html');
app.engine('.html', require('ejs').renderFile);
app.set('views',__dirname+'/views');

app.use(express.static(__dirname + '/public'));
app.use(parser.json());

app.use(require('./routes/routesToDo'));

app.listen(port, () => {
	console.log('Server is up on port '+port);
});