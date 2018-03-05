const MenuItem = require('./model/MenuItem.js');
const Order = require("./model/Order.js");
class DAO
{
	constructor()
	{		
		var a = new MenuItem(201, "Chips", 7.50);
		var b = new MenuItem(202, "Soup", 9);
		var	c = new MenuItem(203, "Steak", 18);
		this.getMenu = function()
		{
			
			var mymenu = [a, b, c];
			return mymenu;
		}
		
		this.getOpenOrders = function()
		{
			var orders = [];
			orders.push(new Order([3, [[a,b]], "Free Of Charge"]));
			orders.push(new Order([8, [[b,b], [a,b,c,]]]));
			orders.push(new Order([2, [[a,b,b,c], [a,b,a,], [b,c]], "No Soy"]));
			/*
			res = mongo.get("OpenOrders"); 
			for (var i = 0; i < res.length; i++)
			{
				orders.push(notacircus.getOrder(res[i]);
			}
			*/
			console.log(orders);
			return orders;
		}
		
		var menu = this.getMenu();

	}
}	
module.exports = DAO;