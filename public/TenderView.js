//F R O N T   E N D
class TenderView
{
	constructor(out)
	{
		var menu = [];
		var out = out;
		var tablenum;
		var course = [];
		var courses = [];
		var order = [];
		
		var setMenu = function(menuin)
		{
			menu = menuin;
		}
		var displayTables = function()
		{
			out.innerHTML = "";
			for (var i = 1; i <= 8; i++)
			{
				out.innerHTML = out.innerHTML + "<button onclick='tv.setTableNum(" + i + ")'>" + i + "</button>";
				if (i % 2 == 0)
				{
					out.innerHTML = out.innerHTML + "<br>";
				}
			}
		}
		var displayMenu = function()
		{
			out.innerHTML = "";
			out.innerHTML = out.innerHTML + "<button onclick='tv.addCourse()'>add course</button><br><button onclick='tv.createOrder()'>complete order</button><br>";
			for (var i = 0; i < menu.length; i ++)
			{
				var name = menu[i].name;
				var item = "<button id='" + name + "' onclick='tv.addItem(" + i + ")'> " + name + "</button>";
				out.innerHTML = out.innerHTML + item;
				
				if (i % 5 != 0)
				{
					out.innerHTML = out.innerHTML + "<br>";
				}
			}
		}
		
		this.setTableNum = function(tn)
		{
			order.push(tn);
			out.innerHTML = "";
			displayMenu();
		}
		this.addItem = function(index)
		{
			course.push(menu[index]);
			console.log(course);
		}
		this.addCourse = function()
		{
			courses.push(course);
			course = [];
			console.log(order);
		}
		this.createOrder = function()
		{
			if (course.length > 0)
			{
				courses.push(course);
				course = [];
			}
			order.push(courses);
			console.log(order);
			socket.emit("neworder", order);
			course = [];
			courses = [];
			order = [];
			displayTables();
		}
		
		socket.emit("menureq");
		socket.on("menures", function(data)
		{
			setMenu(data);
		});
		displayTables();
		
	}
}
var socket = io.connect("http://localhost:8081");
var tv = new TenderView(output);


