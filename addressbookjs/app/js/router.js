define ([],


function() {

var Router = Backbone.Router.extend({
 routes: {
 '' : 'home',
 'new': 'editUser',
 'edit/:id' : 'editUser'
 }



 });

return Router;

});