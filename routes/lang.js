var express = require('express');
var router = express.Router();

/* GET language page */
router.get('/c', function(req, res, next) {
	res.render('c', { title: 'C Syntax' });
});
router.get('/java', function(req, res, next) {
	res.render('java', { title: 'Java Syntax' });
});
router.get('/cpp', function(req, res, next) {
	res.render('cpp', { title: 'CPP Syntax' });
});
router.get('/python', function(req, res, next) {
	res.render('python', { title: 'Python Syntax' });
});
router.get('/ruby', function(req, res, next) {
	res.render('ruby', { title: 'Ruby Syntax' });
});
router.get('/javascript', function(req, res, next) {
	res.render('javascript', { title: 'Javascript Syntax' });
});
router.get('/swift', function(req, res, next) {
	res.render('swift', { title: 'Swift Syntax' });
});
module.exports = router;