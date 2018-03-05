class OrderSingle
{
	//constructor (tableNumber, notes, starters, mains, deserts)
	constructor (tableNumber, firstCourse, notes)
	{
		this.orderID;
		this.tableNumber = tableNumber;
		
		this.firstCourse = firstCourse; 
		
		this.courses = [firstCourse];
		if (notes != null){this.notes = notes;}
		
		this.setID = function(id)
		{
			this.orderID = id;
		}
	}
}
module.exports = OrderSingle;