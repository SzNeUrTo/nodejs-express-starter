function operation() {
	var model = require('../models/test.model');
	var a = 10, b = 20;
	console.log("--> Test : " + a + " + " + b + " = " + model.adder(a, b));
}

exports.render = function(req, res) {
	operation();
	res.render('test.html');
}
