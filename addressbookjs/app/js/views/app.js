define([
  'text!templates/app.html'
],

function(template) {
   var AppView = Backbone.View.extend({
     id: 'main',
     tagName: 'div',
     className: 'main-page',
     el: 'body',
     template: _.template(template),

     events: {
     },

    initialize: function() {
    },

    render: function() {
      this.$el.html(this.template());
     return this;
    }
  });

  return AppView;
});