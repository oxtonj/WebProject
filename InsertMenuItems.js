var mongodb = require('mongodb);
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if(err) throw err;
	var dbo = db.db("restaurant");
	dbo.collection("menu").insertMany(menuItems, function(err, res) {
		if(err) throw err;
		console.log("1 document inserted");
		db.close();
	});
});


var menuItems = [
	//Starter veg
	{ "_id": 1, 
	"item": "Pear and Blue Cheese Tarts", 
	"price":5.00, 
	"course":"starter", 
	"vegetarian":1
	}
	{ "_id": 2, 
	"item": "Cherry Tomato and Herb Puff Tarts", 
	"price":5.50, 
	"course":"starter",
	"vegetarian":1
	}
	{ "_id": 3, 
	"item": "Butternut Squash and Sage Soufflés", 
	"price":6.70,
	"course":"starter", 
	"vegetarian":1
	}
	{ "_id": 4, 
	"item": "Cucumber and Almond Soup",
	"price":4.30,
	"course":"starter", 
	"vegetarian":1
	}
	//Starter nonveg
	{ "_id": 5,
	"item": "Crab Cakes",
	"price":7.00,
	"course":"starter", 
	"vegetarian":0
	}
	{ "_id": 6, 
	"item": "Whitebait and Dill Mayo", 
	"price":7.50, 
	"course":"starter",
	"vegetarian":0
	}
	{ "_id": 7, 
	"item": "Chicken Wings",
	"price":5.20,
	"course":"starter",
	"vegetarian":0
	}
	{ "_id": 8,
	"item": "Beef and Barley Bun with Horseradish",
	"price":6.40, 
	"course":"starter",
	"vegetarian":0
	}	
	//main veg
	{ "_id": 9,
	"item": "Sage, Leek and Mushroom Pie",
	"price":8.90,
	"course":"main",
	"vegetarian":1
	}
	{ "_id": 10,
	"item": "Mushroom Bourguingnon",
	"price":10.30,
	"course":"main", 
	"vegetarian":1
	}
	{ "_id": 11, 
	"item": "Ultimate Veggie Lasagne",
	"price":11.00, 
	"course":"main",
	"vegetarian":1
	}
	{ "_id": 12,
	"item": "Middle Eastern Roasted Sprouts", 
	"price":9.70,
	"course":"main",
	"vegetarian":1
	}	
	//main nonveg
	{ "_id": 13, 
	"item": "Roast Salmon and Artichokes", 
	"price":13.30,
	"course":"main", 
	"vegetarian":0
	}
	{ "_id": 14,
	"item": "Spanish Tortilla",
	"price":9.80,
	"course":"main",
	"vegetarian":0
	}
	{ "_id": 15,
	"item": "Black Bean Burgers",
	"price":11.70,
	"course":"main", 
	"vegetarian":0
	}
	{ "_id": 16,
	"item": "Venison Shanks, Juniper and Redcurrants", 
	"price":11.50,
	"course":"main",
	"vegetarian":0
	}	
	//dessert
	{ "_id": 17,
	"item": "Grilled Apple Pie",
	"price":6.70,
	"course":"dessert",
	"vegetarian":1
	}
	{ "_id": 18,
	"item": "Pumpkin and Gingerbread Trifle",
	"price":7.40, 
	"course":"dessert",
	"vegetarian":1
	}
	{ "_id": 19,
	"item": "Pumpkin Pie with Pecan Crumble",
	"price":6.80, 
	"course":"dessert",
	"vegetarian":1
	}
	{ "_id": 20,
	"item": "Frozen Cranberry Cranachan",
	"price":7.50, 
	"course":"dessert",
	"vegetarian":1
	}	
	{ "_id": 21,
	"item": "Blackcurrant Ombre Cheesecake",
	"price":7.10, 
	"course":"dessert", 
	"vegetarian":1
	}
	{ "_id": 22,
	"item": "Apple and Date Pie",
	"price":6.80, 
	"course":"dessert", 
	"vegetarian":1
	}
	{ "_id": 23,
	"item": "Squaffee Pie",
	"price":6.80,
	"course":"dessert",
	"vegetarian":1
	}
	{ "_id": 24,
	"item": "Almond Pastry Puff",
	"price":7.00,
	"course":"dessert",
	"vegetarian":1
	}	
	//drinks
	{ "_id": 25,
	"item": "Beer", 
	"price":3.20, 
	"course":"drink",
	"vegetarian":1
	}
	{ "_id": 26, 
	"item": "Wine",
	"price":4.10, 
	"course":"drink",
	"vegetarian":1
	}
	{ "_id": 27,
	"item": "Cider",
	"price":2.70,
	"course":"drink",
	"vegetarian":1
	}
	{ "_id": 28, 
	"item": "Spirits",
	"price":4.60, 
	"course":"drink", 
	"vegetarian":1
	}
	{ "_id": 29, 
	"item": "Water",
	"price":1.50, 
	"course":"drink",
	"vegetarian":1
	}
	{ "_id": 30,
	"item": "Orange Juice",
	"price":2.00, 
	"course":"drink",
	"vegetarian":1
	}
	{ "_id":31, 
	"item": "Coke", 
	"price":2.30, 
	"course":"drink",
	"vegetarian":1
	}
	{ "_id": 32,
	"item": "Fanta",
	"price":2.30, 
	"course":"drink",
	"vegetarian":1
	}
	]