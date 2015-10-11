if (Meteor.isClient) {

	Template.registerHelper('name', function() {
		return Meteor.user().profile.name.split(" ")[0];
	});

	Template.registerHelper('picSmall', function() {
		return Meteor.user().profile.picturesm;
	});

	Template.registerHelper('picLarge', function() {
		return Meteor.user().profile.picturelrg;
	});

	Template.registerHelper('meteorId', function() {
		return Meteor.userId();
	});


	Template.registerHelper('profile', function() {
		return Meteor.userId();
	});

	Template.registerHelper('nameProfile', function() {
		return Meteor.users.find({
			_id: id
		}).fetch()[0].profile.name;
	});

	Template.registerHelper('shortenedProfile', function() {
		return Meteor.users.find({
			_id: id
		}).fetch()[0].profile.name;
	});


	Template.registerHelper('imageProfile', function() {
		return Meteor.users.find({
			_id: id
		}).fetch()[0].profile.picturelrg;
	});

}