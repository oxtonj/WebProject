// B A C K   E N D
// model for menu item
// dummy data defined below
class MenuItem
{
	constructor (menuItemID, name, price, vegetarian)
	{
		this.menuItemID = menuItemID;
		this.name = name;
		this.price = price;
		if (vegetarian)
		{
			this.vegetarian = vegetarian;
		}
	}
}

var a = new MenuItem(201, "Chips", 7.50);
var b = new MenuItem(202, "Soup", 9);
var c = new MenuItem(203, "Steak", 18);
