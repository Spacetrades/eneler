if (Meteor.isServer) {

	// ServiceConfiguration.configurations.remove({
	// 	service: "facebook"
	// });

	// ServiceConfiguration.configurations.insert({
	// 	service: 'facebook',
	// 	appId: '1002400673159410',
	// 	secret: '119d49e20f8ee5a769af495c5fb2611f'
	// });


	ServiceConfiguration.configurations.remove({
		service: "facebook"
	});

	ServiceConfiguration.configurations.insert({
		service: 'facebook',
		appId: '1002461163153361',
		secret: '69f09483c400bc1c1e0a35a2099bd2c0'
	});


}