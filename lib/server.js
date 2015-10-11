if (Meteor.isServer) {

	Account.onCreateUser( function(options, user, err ) {

		if (options.profile) {
			options.profile.picturelrg = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
			user.profile = options.profile;
			options.profile.picturesm = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=small";
		}

	});

}