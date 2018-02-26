// FRONT END
class KitchenView 
{
	constructor(openOrders, out)
	{
		this.openOrders = openOrders;
		this.out = out;
		var orderHeading = "<tr><th>Table Number</th><th>notes</th></tr>";
		this.displayAllOrders = function()
		{
			for (var i = 0; i < openOrders.length; i++) // per order
			{
				this.order = openOrders[i];
				this.tableNumber = this.order.tableNumber;
				var notes = " ";
				if (this.order.notes != null)
				{
					var notes = this.order.notes;
				}
				if (this.order.courses.length > 0)
				{
					out.innerHTML = out.innerHTML 
					+ orderHeading 
					+ "<tr><td>" 
					+ this.tableNumber 
					+ "</td><td>" 
					+ notes 
					+ "</td></tr>"; 
					for (var x = 0; x < this.order.courses.length; x++)
					{
						console.log(this.order.courses[x]);	
						if (this.order.courses[x].length > 0)
						{
							displayCourse(this.order.orderID, this.order.courses[x]);
						}
					}
					out.innerHTML = out.innerHTML + "<tr>___________________</tr>";	
				}
			}
		}
		
		var displayCourse = function(orderID, course)
		{
			out.innerHTML = out.innerHTML + "<tr>xxx</tr>"
			for (var n = 0; n < course.length; n++)
			{
				out.innerHTML = out.innerHTML 
				+ "<tr><td>" 
				+ course[n].name
				+ '</td><td><button onclick="kv.removeItem('
				+ orderID + ', '
				+ course[n].menuItemID + ');">x</button></td></tr>';
			}
		}
		
		var resetTable = function()
		{
			out.innerHTML = "<table id='ordersout'></table>";
		}
		
		this.removeItem = function(thisOrderID, menuItemID)
		{
			var order = {};
			for (var l = 0; l < orders.length; l++)
			{
				if (orders[l].orderID == thisOrderID)
				{
				//	if (
					orders[l].removeItem(menuItemID)//)
				//	{
						resetTable();
						this.displayAllOrders();
				//	}
				}
			}
		}
	}
}

var kv = new KitchenView(orders, output);
kv.displayAllOrders();

