var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
const DAC = require('./DAO.js');
const Order = require("./model/Order.js");

var DAO = new DAC();

var menu = [];
var openOrders = [];

app.use(express.static("public"));

io.on("connection", function(socket)
{
	socket.on("menureq", function()
	{
		console.log("menu request");
		menu = DAO.getMenu();
		socket.emit("menures", menu);
	});
	socket.on("openordersreq", function()
	{
		console.log("Open Orders Request");
		if (openOrders.length < 1)
		{
			openOrders = DAO.getOpenOrders();
		}
		console.log(openOrders);
		socket.emit("updateorders", openOrders);
	});
	socket.on("neworder", function(data)
	{
		console.log("New Order");
		console.log(data);
		var o = new Order(data);
		console.log(o);
		// DAO.addOrder(data);
		// openOrders = DAO.getOpenOrders();
		
		// v temporary workaround v
		openOrders.push(o);
		
		io.emit("updateorders", openOrders);
	});
	
});
server.listen(8081, function () 
{
    console.log("Server started.");
});