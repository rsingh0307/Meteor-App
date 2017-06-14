// attach events to sign in the registered user
Template.signInForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

  if (Users.find({ "username": event.target.username.value, "password": event.target.password.value }).count() !== 0) {

Session.set('signInPage', false);
Session.set('userName', event.target.username.value);


}


}   
   

});