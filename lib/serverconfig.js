if (Meteor.isServer) {

	ServiceConfiguration.configurations.remove({
		service: "facebook"
	});

	ServiceConfiguration.configurations.insert({
		service: 'facebook',
		appId: '1002400673159410',
		secret: '119d49e20f8ee5a769af495c5fb2611f'
	});

}