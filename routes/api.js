var express = require('express');
var router = express.Router();

/* GET page data */
router.get('/:page', function(req, res) {
	var db = req.db;
	var collection = db.get(req.params.page.split('+')[0]);
	collection.find({"page-title":req.params.page.split('+')[1].split('_').join(" ")},{},function(e,docs){
		res.json(docs);
	});
});

module.exports = router;