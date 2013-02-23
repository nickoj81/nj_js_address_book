define(['text!templates/lists/menuitem.html'], function(template) {
  var ContactItemView = Backbone.View.extend({
   template: _.template(template),

    events: {
      //'submit .edit-user-form': 'saveUser'
    },

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },

    render: function() {
     var $el = $(this.el);
     var html =this.template(this.model.toJSON());
     this.setElement($(html));
     return this;
    },

    open: function() {
      var self = this;
      return false;
    }
  });

  return ContactItemView;
});