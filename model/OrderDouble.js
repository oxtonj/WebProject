class OrderDouble
{
	//constructor (tableNumber, notes, starters, mains, deserts)
	constructor (tableNumber, firstCourse, secondCourse, notes)
	{
		this.orderID;
		this.tableNumber = tableNumber;
		
		this.firstCourse = firstCourse;
		this.secondCourse = secondCourse;
		
		this.courses = [firstCourse, secondCourse];
		if (notes != null){this.notes = notes;}
		
		this.setID = function(id)
		{
			this.orderID = id;
		}
	}
}
module.exports = OrderDouble;