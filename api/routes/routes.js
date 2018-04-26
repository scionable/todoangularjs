module.exports = function (app) {

	require('./tasks-routes')(app);
	require('./user-routes')(app);

	app.get('*', (req, res) => {
		res.sendfile('./assets/index.html');
	});

};
