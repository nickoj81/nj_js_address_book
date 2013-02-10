define([
     'views/app'
    ,'views/edituser'
    ,'router'
    ,'collections/contacts'
    ,'views/lists/contactmenu'

  ],

function(AppView, EditUserView, Router, Contacts, ContactMenu) {
  var App = function() {
  
  var self = this;
  this.router = new Router();

  this.views.app = new AppView();

  this.collections.contacts = new Contacts();
  this.views.contactmenu = new ContactMenu({ collection: this.collections.contacts });
  this.collections.contacts.fetch();
  this.views.editUser = new EditUserView(this);


  this.router.on('route:home', function () {

   self.views.contactmenu.render();
  });
 
  this.router.on('route:editUser', function (id) {
  self.views.editUser.render({id:id});
  });

   Backbone.history.start();

  }
  App.prototype = {
  views: {},
  collections: {}
   
},

 
   



$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


  return App;
});