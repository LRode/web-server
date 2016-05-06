

var middleware = {
	requireAuthentication: function (req, res, next){
		console.log("Private route hit");
		next();
	},
	logger: function(req, res, next){
		var date = new Date();
		console.log(date.toString() + 'Request: ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;