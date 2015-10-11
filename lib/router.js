Router.configure({
	layoutTemplate: 'layoutDefault',
	loadingTemplate: 'spinFeature',
	notFoundTemplate: 'notFound'
});

Router.map(function() {

	this.route('Home', {
		path: '/',
		path: '/en/',
		template: 'Home'
	});

	this.route('About', {
		path: '/en/about',
		template: 'About'
	});

	this.route('Terms', {
		path: '/en/terms',
		template: 'Terms'
	});

	this.route('Contact', {
		path: '/en/contact',
		template: 'Contact'
	});



});


Router.map(function() {

	this.route('Redirect', {
		path: '/:_id'
	});
})