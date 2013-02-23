define(['models/contact'], function(Contact) {
  var Contacts = Backbone.Collection.extend({
   localStorage : new Backbone.LocalStorage("Contactslist")
   ,model: Contact
  , url: 'contacts'
  , comparator: function(ab) {
        return -ab.id;
    }
  , getFullName: function(ab) {
        return ab.get('firstname') + ab.get('lastname');
    }

 
  , 
  });

  return Contacts;
});