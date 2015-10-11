Router.configure({
	layoutTemplate: 'layoutDefault',
	loadingTemplate: 'spinFeature',
	notFoundTemplate: 'notFound'
});

Router.map(function() {

	this.route('Home', {
		path: '/en/',
		template: 'Home'
	});
});


Router.map(function() {

	this.route('Redirect', {
		path: '/:_id'
	});
})