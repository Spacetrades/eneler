if (Meteor.isServer) {

	Meteor.publish('userInformationLookup', function(id) {
		return Meteor.users.find({
			_id: id
		});
		this.ready();
	});

}