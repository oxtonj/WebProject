var express = require('express');
var router = express.Router();

/*
  GET tables data json on /tables/tables
*/
router.get('/tables', function(req, res) {
    var db = req.db;
    var collection = db.get('tables');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
  POST to selecttable.
 
router.get('/selecttable/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('tables');
    var tableToSelect = req.params.id;
	
	
    collection.find({ '_id' : TableToSelect }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});*/

router.post('/selecttable', function(req, res) {
    res.render('menuJDE', { title: 'Menu List' });
});

module.exports = router;