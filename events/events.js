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

			// if (!Meteor.userId) {
			// 	swal({
			// 		title: "Are you sure?",
			// 		text: "You will not be able to recover this imaginary file!",
			// 		type: "warning",
			// 		showCancelButton: true,
			// 		confirmButtonColor: "blue",
			// 		confirmButtonText: "Yes, delete it!",
			// 		closeOnConfirm: false
			// 	}, function() {
			// 		swal("Deleted!", "Your imaginary file has been deleted.", "success");
			// 	});
			// }


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


			createRandomUrl();
			console.log(options);
			Meteor.call("generateLink", options);
		}
	});

}