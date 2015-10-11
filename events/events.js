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
		"click [data-action='task/login']": function() {
			fbLogin();
		},
		"click [data-action='task/generate']": function() {

			// LATER
			// function generateLinkValidate() {

			// }

			// LATER


			var options = {
				creatorId: Meteor.userId(),
				linkCustom: $('.homeCustomUrl').val(),
				linkTarget: $('.homeLongUrl').val(),
				clicks: 0
			}

			function createRandomUrl() {
				var random = Random.id(5);

				if (options.linkCustom == "") {
					options.linkCustom = random;
				}

				// if (Links.find())
			}



			console.log(options.linkCustom);
			createRandomUrl();

			Meteor.call("generateLink", options);
		}
	});

}