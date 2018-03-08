var express = require('express');
var router = express.Router();

/*
  GET menu  data json on /menu/menu
*/
router.get('/menu', function(req, res) {
    var db = req.db;
    var collection = db.get('menu');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
  DELETE to delete menu item.
 */
router.delete('/deleteitem/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('menu');
    var itemToDelete = req.params.id;
    collection.remove({ '_id' : itemToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

/*
  DELETE to delete order item.
 */
router.delete('/deleteorderitem/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('menu');
    var itemToDelete = req.params.id;
    collection.remove({ '_id' : itemToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;