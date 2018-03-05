//F R O N T   E N D
class KitchenView 
{
	constructor(out)
	{
		this.out = out;
		var openOrders = [];
		var orderHeading = "<tr><th>Table Number</th><th>notes</th></tr>";
		var socket = io.connect("http://localhost:8081");
				
		var setOpenOrders = function(orders)
		{
			openOrders = orders;
			displayAllOrders();
		}
		
		var displayAllOrders = function()
		{
			out.innerHTML = "";
			// x = order index
			// y = course index
			// z = item index
			for (var x = 0; x < openOrders.length; x++) // per order
			{
				var order = openOrders[x];
				console.log(openOrders);
				var tableNumber = order.tableNumber;
				var notes = " ";
				if (order.notes != null)
				{
					var notes = order.notes;
				}
				console.log(order.courses);
				if (order.courses.length > 0)
				{
					// order heading 
					out.innerHTML = out.innerHTML + orderHeading + "<tr><td>" + tableNumber + "</td><td>" + notes + "</td></tr>"; 
										
					for (var y = 0; y < order.courses.length; y++) // per course
					{
						var course = order.courses[y];
						if (course.length > 0)
						{
							// course heading
							out.innerHTML = out.innerHTML + "<tr>------------------------</tr>"
							for (var z = 0; z < course.length; z++) // per item
							{
								out.innerHTML = out.innerHTML + "<tr><td>" 
								+ course[z].name
								+ '</td><td><button onclick="kv.removeItem('
								+ x + ', ' + y + ', ' + z
								+ ');">x</button></td></tr>';
							}
						}
					}
				}
			}
		}
				
		var resetTable = function()
		{
			out.innerHTML = "<table id='ordersout'></table>";
		}
		
		var getItemIndex = function(course, itemID)
		{
			// default fail response = -1
			var res = -1;
			// for each item in this course
			for (var o = 0; o < course.length; o++)
			{
				// if ids match
				if (course[o].menuItemID == itemID)
				{
					// response is index of item
					res = o;
				}
			}
			return res;
		}
		
		this.removeItem = function(x,y,z)
		{
			openOrders[x].courses[y].splice(z,1);
			if (openOrders[x].courses[y].length < 1)
			{
				openOrders[x].courses.splice(y,1);
			}
			resetTable();
			displayAllOrders();
		}
		
		socket.emit("openordersreq");
		
		socket.on("updateorders", function(data)
		{
			console.log("ordersin");
			setOpenOrders(data);
		});
	}
}
var kv = new KitchenView(output);