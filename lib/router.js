Router.configure({
	layoutTemplate: 'layoutDefault',
	loadingTemplate: 'spinFeature',
	notFoundTemplate: 'Error'
});

Router.map(function() {

	this.route('Home', {
		path: '/',
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

	// this.route('Profile', {
	// 	path: '/en/profile/:_id',
	// 	template: 'Profile',
	// 	loadingTemplate: 'spinFeature',
	// 	waitOn: function() {
	// 		return Meteor.subscribe('userInformationLookup', this.params._id);
	// 	},
	// 	data: function () {
	// 		id = this.params._id;
	// 		return Meteor.users.find({ _id: id }).profile;
	// 	}
	// });

	this.route('Profile', {
		path:'/en/profile',
		template: 'Profile'
	});

	this.route('Manager', {
		path:'/en/manager',
		template: 'Manager'
	});

	this.route('Settings', {
		path:'/en/settings',
		template: 'Settings'
	});

});




// Router.map(function() {

// 	this.route('Redirect', {
// 		path: '/:_id'
// 		waitOn: function () {
// 			Meteor.subscribe()
// 		}
// 	});
// })