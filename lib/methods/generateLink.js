if(Meteor.isServer) {
	Meteor.methods({
		generateLink : function (options) {

			// CHECK - auth
			if ( ! Meteor.userId() ) {
				throw new Meteor.error("Not Authorized");
			}

			Links.insert({
				timestamp: new Date(),
				creatorId: options.creatorId,
				linkCustom: options.linkCustom,
				linkTarget: options.linkTarget,
				clicks: options.clicks
			});

		}
	});
}