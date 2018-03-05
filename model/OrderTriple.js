class OrderTriple
{
	//constructor (tableNumber, notes, starters, mains, deserts)
	constructor (tableNumber, firstCourse, secondCourse, thirdCourse, notes)
	{
		this.orderID;
		this.tableNumber = tableNumber;
				
		this.firstCourse = firstCourse;
		this.secondCourse = secondCourse;
		this.thirdCourse = thirdCourse;
		
		this.courses = [firstCourse, secondCourse, thirdCourse];
		if (notes != null){this.notes = notes;}
		
		this.setID = function(id)
		{
			this.orderID = id;
		}
	}
}
module.exports = OrderTriple;