/**
 * @author Akshata 
 * @description code for TODO List 
 */

const express = require('express'); //Accessing builtin "express" module
const port = process.env.PORT || 3001; //listening port
var app = express();
const parser = require('body-parser'); //Accessing builtin "body-parser" module to create middleware
// const routes = require('./routes/routesToDo'); //Accessing routesToDo module which created in routes directory

app.set('view engine', 'html'); //Using html as view engine
app.engine('.html', require('ejs').renderFile); //Rendering html file in ejs
app.set('views',__dirname+'/views'); //Using static directory view

app.use(express.static(__dirname + '/public')); //Using static directory public so that any file can use it
app.use(parser.json()); // Using bodyParser (req.body)
// app.use(parser.urlencoded({extended:false}));

app.use(require('./routes/routesToDo')); //Accessing routesToDo module which created in routes directory

app.listen(port, () => {
	console.log('Server is up on port '+port);
});

/**
@description path for switching on environment (development/testing)
*/
switch(process.env.NODE_ENV) {
	case 'development':
	dirname = './todolist.json';
	break;
	case 'testing':
	dirname = './todolisttest.json';
	break;
	
	default:
	console.log("Please provide proper environment");
	}

module.exports = {app}