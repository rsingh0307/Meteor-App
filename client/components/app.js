
Session.set('signInPage', true);

Template.body.helpers({
  messages: function() {
    return Messages.find({}, {sort: {date: -1}});
  }


});

Template.body.helpers({
signInPage: function() {
    return Session.get("signInPage");
  }
});
