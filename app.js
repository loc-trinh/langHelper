/* ========= BASIC APP SETUP ========= *
 * Express: backend & routing          *
 * MongoDB: database for AJAX          *
 * =================================== */
var express = require('express'),
	mongo = require('mongodb'),
	db = require('monk')('localhost:27017/lang'),
	path = require('path');

var app = express();


/* ========= VIEW ENGINE SETUP ========= *
 * View path: "views"                    *
 * View engine: jade             		 *
 * Static path: "public"	             *
 * ===================================== */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));


/* ========= DATABASE SETUP ========= *
 * Pass down dbase                    *
 * ================================== */
app.use(function(req,res,next){
    req.db = db;
    next();
});


/* ========= ROUTING SETUP ========= *
 * Index: front page                 *
 * Lang: language pages				 *
 * API: get ajax content			 *
 * ================================= */
var index = require('./routes/index'),
	lang = require('./routes/lang'),
	api = require('./routes/api');

app.use('/', index);
app.use('/lang', lang);
app.use('/api', api);


/* ========= START APP ========= */
app.listen(8080, function () {
	console.log('Listening at http://localhost:8080');
});