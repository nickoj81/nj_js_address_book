define(['models/contact'], function(Contact) {
  var Contacts = Backbone.Collection.extend({
   localStorage : new Backbone.LocalStorage("Contactslist")
   ,model: Contact
  , url: 'contacts'
 
  , 
  });

  return Contacts;
});