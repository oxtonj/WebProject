// B A C K   E N D
// model for order factory, single course order, double course order and triple course order
// order factory checks number of Course, returns relevant order object
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
				o = new OrderSingle(order[0], order[1], order[2], notes);
			} 
			else if(order.length == 4)
			{
				o = new OrderDouble(order[0], order[1], order[2], order[3], notes);
			}
			else if(order.length == 5)
			{
				o = new OrderTriple(order[0], order[1], order[2], order[3], order[4], notes);
			}
			return o;
		}
	}
}

class OrderSingle
{
	//constructor (tableNumber, notes, starters, mains, deserts)
	constructor (tableNumber, firstCourse, notes)
	{
		this.orderID;
		this.tableNumber = tableNumber;
		this.firstCourse = firstCourse; 
		this.courses = [firstCourse]
		
		if (notes != null) 
		{
			this.notes = notes;
		}
		this.setID(id)
		{
			this.orderID = id;
		}
		
		this.removeItem = function(itemID)
		{
			firstCourse.splice(getItemIndex(this.firstCourse, itemID), 1);
			if (this.firstCourse.length < 1)
			{
				this.courses.splice(0, 1);
			}
		}
		
		var getItemIndex = function(course, itemID)
		{
			var res = -1;
			for (var o = 0; o < course.length; o++)
			{
				if (course[o].menuItemID == itemID)
				{
					res = o;
				}
			}
			return res;
		}
	}
}

class OrderDouble
{
	//constructor (tableNumber, notes, starters, mains, deserts)
	constructor (tableNumber, firstCourse, secondCourse, notes)
	{
		this.tableNumber = tableNumber;
		this.orderID;
		this.firstCourse = firstCourse;
		this.secondCourse = secondCourse;
		this.courses = [firstCourse, secondCourse]
		if (notes != null){this.notes = notes;}
		this.setID(id)
		{
			this.orderID = id;
		}
		
		this.removeItem = function(itemID)
		{
			if (getItemIndex(this.firstCourse, itemID) != -1)
			{
				this.firstCourse.splice(getItemIndex(this.firstCourse, itemID), 1);
				if (this.firstCourse.length < 1)
				{
					this.courses.splice(0, 1);
				}
			}
			else if (getItemIndex(this.secondCourse, itemID) != -1)
			{
				this.secondCourse.splice(getItemIndex(this.secondCourse, itemID), 1);
				if (this.secondCourse.length < 1)
				{
					this.courses.splice(this.courses.length - 1, 1);
				}
			}
		}
		var getItemIndex = function(course, itemID)
		{
			var res = -1;
			for (var o = 0; o < course.length; o++)
			{
				if (course[o].menuItemID == itemID)
				{
					res = o;
				}
			}
			return res;
		}
	}
}
class OrderTriple
{
	//constructor (tableNumber, notes, starters, mains, deserts)
	constructor (tableNumber, firstCourse, secondCourse, thirdCourse, notes)
	{
		this.tableNumber = tableNumber;
		this.orderID;
		this.firstCourse = firstCourse;
		this.secondCourse = secondCourse;
		this.thirdCourse = thirdCourse;
		this.courses = [firstCourse, secondCourse, thirdCourse]
		if (notes != null){this.notes = notes;}
		this.setID(id)
		{
			this.orderID = id;
		}
		
		this.removeItem = function(itemID)
		{
			if (getItemIndex(this.firstCourse, itemID) != -1)
			{
				firstCourse.splice(getItemIndex(this.firstCourse, itemID), 1);
				if (this.firstCourse.length < 1)
				{
					this.courses.splice(0, 1);
				}
			}
			else if (getItemIndex(this.secondCourse, itemID) != -1)
			{
				secondCourse.splice(getItemIndex(this.secondCourse, itemID), 1);
				if (this.secondCourse.length < 1)
				{
					this.courses.splice(this.courses.length - 2, 1);
				}
			}
			else if (getItemIndex(this.thirdCourse, itemID) != -1)
			{
				thirdCourse.splice(getItemIndex(this.thirdCourse, itemID), 1);
				if (this.thirdCourse.length < 1)
				{
					this.courses.splice(this.courses.length - 1, 1);
				}
			}
		}
		
		var getItemIndex = function(course, itemID)
		{
			var res = -1;
			for (var o = 0; o < course.length; o++)
			{
				if (course[o].menuItemID == itemID)
				{
					res = o;
				}
			}
			return res;
		}
	}
}

var notacircus = new OrderFactory();
orders = [];

orders.push(notacircus.getOrder([3, [a,b]], "Free Of Charge"));
orders.push(notacircus.getOrder([8, [b,b], [a,b,c,]]));
orders.push(notacircus.getOrder([2, [a,b,b,c], [a,b,a,], [b,c]], "No Soy"));
