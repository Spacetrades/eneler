if (Meteor.isClient) {

	function fbLogin() {
		Meteor.loginWithFacebook({
			requestPermissions: ['public_profile', 'email', 'user_location']
		}, function(err) {
			if (err)
			// redirect to register if popup comes and user isn't on register
				Session.set('errorMessage', err.reason || 'Unknown Eror');
			console.log(Session.get('errorMessage'));
		});
	}

	Template.layoutDefault.events({
		"click [data-action='task/login']": function () {
			fbLogin();
			console.log('Yes');
		}
	});

}