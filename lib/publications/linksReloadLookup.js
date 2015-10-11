if (Meteor.isServer) {

	Meteor.publish('linksReloadLookup', function () {
		return Links.find({ customUrl: id});
	});

}