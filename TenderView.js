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
	}
}

mymenu = [a, b, c];
console.log(output);
var wv = new WaiterView(mymenu, output);

wv.displayMenu();