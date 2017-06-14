// attach events to delete posted message by logged in user
Template.message.events({


  // event to handle clicking a choice
  'click .delete': function(event) {


    // prevent the default behavior
    event.preventDefault();

// To check if the message is owned by the user trying to delete
if (Messages.findOne(this._id).owner === Session.get("userName")) {
 
// Server side call to delete a message by the message owner
     Meteor.call('delete', this._id);
}else{

alert("You are not the Owner of this message");

}
   

  
}

});

