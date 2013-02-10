define([
  'text!templates/edituser.html'
   ,'models/contact'

],

function(template, Contact) {
   var EditUserView = Backbone.View.extend({
     id: 'edituser',
     tagName: 'div',
     className: 'edituser-page',
     el: 'body',
     template: _.template(template),


     events: {
     },

    initialize: function(app) {
      this.app = app;
      var that = this;




    },

events: {
 'submit .edit-user-form': 'saveUser'
 , 'click .delete': 'deleteUser'


},


saveUser:  function(ev) {

  var contactDetails = $(ev.currentTarget).serializeObject();
  
  if ( !contactDetails.id ) {
    contactDetails.id = this.app.collections.contacts.length;
  }

console.log( this.app.collections.contacts.length + 'contactDetails'+ contactDetails.id )

  this.app.collections.contacts.create(contactDetails, {merge: true});
  Backbone.history.navigate('',{trigger: true});


return false;
},

deleteUser: function(ev) {
  this.contact.destroy ( {success : function () {
  Backbone.history.navigate('',{trigger: true});
  }});

 return false;
},



   render: function( options ) {

      if ( options.id)
      {
        this.contact = this.app.collections.contacts.get(options.id);
      }else{
        this.contact = new Contact();
      }

      var variables = {contact : this.contact};
      this.$el.html(this.template(variables));
    
      return this;
   }
  });

  return EditUserView;
});