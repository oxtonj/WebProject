//F R O N T   E N D
class WaiterView
{
	constructor(menu, out)
	{
		this.menu = menu;
		this.out = out;

		this.displayMenu = function()
		{
			for (var i = 0; i < menu.length; i ++)
			{
				var name = menu[i].name;
				var item = "<button id='" + name + "'> " + name + "</button>";
				out.innerHTML = out.innerHTML + item;
				
				if (i % 5 != 0)
				{
					out.innerHTML = out.innerHTML + "<br>";
				}
			}
		}
		this.createOrder = function(object)
		{
			// items should be [int tableNumber, int orderId, [MenuItem menuItem, MenuItem menuItem...], String notes]
			// send order object to server
			return object;
		}
	}
}

mymenu = [a, b, c];
console.log(output);
var wv = new WaiterView(mymenu, output);
var no = wv.createOrder([14, [a, c], [b, c]], "Milk Steak"]);
console.log(no);

wv.displayMenu();