class CounterView
{
	constructor(out)
	{
		this.out = out;
		var orders = [];
		var socket = io.connect("http://localhost:8081");
		
		var displayAllOrders = function()
		{
			var table = "";
			out.innerHTML = "";
			// x = order index
			// y = course index
			// z = item index
			for (var x = 0; x < orders.length; x++) // per order
			{
				var order = orders[x];
				var total = 0;
				var notes = " ";
				if (order.notes != null)
				{
					var notes = order.notes;
				}
				console.log(order.courses);
				if (order.courses.length > 0)
				{
					// order heading 
					table = table + "<tr><td>tablenumber</td><td>" 
					+ order.tableNumber + "</td></tr>";
					for (var y = 0; y < order.courses.length; y++) // per course
					{
						var course = order.courses[y];
						if (course.length > 0)
						{
							// course heading
							for (var z = 0; z < course.length; z++) // per item
							{
								total = total + course[z].price;
								table = table
								+ "<tr><td>" 
								+ course[z].name
								+ "</td><td>" 
								+ course[z].price
								+ '</td></tr>';
							}
						}
					}
					table = table + "<tr><th>Total: " + total + "</th><td><button class=dbutton onclick='cv.process(" + x + ")'>pay</button></td></tr><tr><td colspan='3'>#####################################################################</td></tr>";
				}
			}
			out.innerHTML = table;
		}
		
		this.process = function(x)
		{
			console.log(orders);
			orders.splice(x, 1);
			console.log(orders);
			displayAllOrders();
		}
		
		socket.emit("ordersreq");
		
		socket.on("updateorders", function(data)
		{
			orders = data;
			displayAllOrders();
		});
	}
}
var cv = new CounterView(output);
