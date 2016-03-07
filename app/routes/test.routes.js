module.exports = function(app) {
	var controller = require('../controllers/test.controller');
	app.get('/test', controller.render);
}
