
// attach events to post a message by logged in user
Template.postMsgForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form and session variable
    var newMessage = {
        owner: Session.get('userName'),
        message: event.target.message.value,
        date: new Date()
      
    };    

    // Post the message to the system
    Messages.insert(newMessage);
  }

});