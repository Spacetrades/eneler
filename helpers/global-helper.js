if (Meteor.isClient) {

	Template.registerHelper( 'name', function () {
		return Meteor.user().profile.name.split(" ")[0];
	});

	Template.registerHelper( 'picSmall', function () {
		return Meteor.user().profile.picturesm;
	});

	Template.registerHelper( 'picLarge', function () {

	});
}