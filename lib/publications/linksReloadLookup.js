if (Meteor.isServer) {

	Meteor.publish('linksReloadLookup', function (id) {
		return Links.find();
	});

}