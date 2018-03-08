var express = require('express');
var router = express.Router();

/* ========================== GET ============================ */

// HOME PAGE (TABLES)
router.get('/', function(req, res, next) {
  res.render('indexJDE', { title: 'Restaurant' });
});

// MENU PAGE
router.get('/menu', function(req, res) {
    res.render('menuJDE', { title: 'Menu List' });
});

// ADD ITEM PAGE
router.get('/additem', function(req, res) {
    res.render('additemJDE', { title: 'Add New Menu Item' });
});


/* ========================== POST ============================ */

// ADD ITEM
router.post('/additem', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var itemID 		= req.body.itemid;
    var itemName 	= req.body.itemname;
	var itemPrice 	= req.body.itemprice;
    var itemCourse 	= req.body.itemcourse;
	var itemVeg 	= req.body.itemveg;
 
    // Set our collection
    var collection = db.get('menu');

    // Submit to the DB
    collection.insert({
        "id" : itemID,
		"item" : itemName,
		"price" : itemPrice,
		"course" : itemCourse,
        "vegetarian" : itemVeg
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("menu");
        }
    });
});

module.exports = router;
