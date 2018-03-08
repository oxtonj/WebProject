/* REDUNDANCIES*/

/* (index.js)GET MenuList page. - displays a list of just menu names on /menu page*/
router.get('/menu', function(req, res) {
    var db = req.db;
    var collection = db.get('menu');
    collection.find({},function(e,docs){
        res.render('menuJDE', {
            "menu" : docs
        });
    });
});
