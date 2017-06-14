// run this when the meteor app is started
Meteor.startup(function() {


 // Server side call to delete a message by the message owner
Meteor.methods({
	  delete: function (id) {
         
		Messages.remove(id);

		}
	  
	});

  // if there are no Message in the system
  if (Messages.find().count() === 0) {

    // create sample users
    var sampleMessages = [
      {
        owner: 'jthomas',
        message: 'message from John',
        date: new Date()
        
      },
      {
        owner: 'tebrahim',
        message: 'message from Tony',
        date: new Date()
      }
    ];

    // loop over each sample message and insert into database
    _.each(sampleMessages , function(messages) {
      Messages.insert(messages);
    });

  }

  // if there are no Users available create sample data
  if (Users.find().count() === 0) {

    // create sample users
    var sampleUsers = [
      {
        name: 'John Thomas',
        password: '123',
        username: 'jthomas'
      },
      {
        name: 'Tony Ebrahim',
 	password: '1234',
        username: 'tebrahim'
      }
    ];

    // loop over each sample poll and insert into database
    _.each(sampleUsers, function(users) {
      Users.insert(users);
    });

  }




});