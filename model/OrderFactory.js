// B A C K   E N D
// model for order factory, single course order, double course order and triple course order
// order factory checks number of Course, returns relevant order object
const OrderSingle = require("./OrderSingle.js");
const OrderDouble = require("./OrderDouble.js");
const OrderTriple = require("./OrderTriple.js");

class OrderFactory
{
	constructor()
	{
		// 
		this.getOrder = function(order, notes)
		{
			var o;
			if (order.length == 3)
			{
				o = new OrderSingle(order[0], order[1], notes);
			} 
			else if(order.length == 4)
			{
				o = new OrderDouble(order[0], order[1], order[2], notes);
			}
			else if(order.length == 5)
			{
				o = new OrderTriple(order[0], order[1], order[2], order[3], notes);
			}
			return o;
		}
	}
}
module.exports = OrderFactory;
