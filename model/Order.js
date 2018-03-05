class Order
{
	constructor(order)
	{
		this.tableNumber = order[0];
		this.courses = order[1];
		this.notes = order[2];
	}
}
module.exports = Order;