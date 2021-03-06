var url = require("url");
var quoridor = require("./quoridor");

handle = {};
handle["/quoridor"] = quoridor.run;

function route(req, res) {

	var pathname = url.parse(req.url).pathname;
	var path = "/" + req.params.page;

	// console.log(path);
	// console.log("Routing to " + pathname);

	
	if (typeof(handle[path]) === 'function'){
		handle[path](req, res, pathname);
	} else if (pathname === '/'){
		res.render('quoridor', {
			pageTitle: "Play Quoridor"
		});
	} else {
		res.render('404', {
			pageTitle: "404 - Page Not Found"
		});
	}
}

exports.route = route;