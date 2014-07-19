function run(req, res, pathname){

	res.render('quoridor', {
		pageTitle: "Play Quoridor"
	});

}

exports.run = run;