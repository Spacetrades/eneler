if (Meteor.isServer) {

  Meteor.methods({

    sendEmail: function(to, from, subject, text) {
      check([to, from, subject, text], [String]);

      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      this.unblock();

      console.log(to, from, subject, text);

      Email.send({
        to: to,
        from: from,
        subject: subject,
        text: text
      });
    }

  });
}