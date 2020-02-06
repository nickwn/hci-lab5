var data = require("../data.json");

exports.addFriend = function(request, response) { 
	// Your code goes here
	response.render('index', data);
}