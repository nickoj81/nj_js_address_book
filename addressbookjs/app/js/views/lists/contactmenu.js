define(['views/lists/contactmenuitem', 'text!templates/lists/menu.html'], function(ContactMenuItemView, template) {
  var ContactMenu = Backbone.View.extend({
    className: 'contact-menucontainer',
    el: 'body',
    template: _.template(template),
    events: {
    },

    initialize: function() {
      this.collection.on('fetch', this.render, this);
    },

    render: function() {
      self = this;
      this.$el.html(this.template());

      this.collection.each( function(contact) {
        var contactview;
        contactview = new ContactMenuItemView({ model: contact });
        self.$('#table-body').append(contactview.render().el);
    });

    console.log(this.el);
  
    return this;
    }
  });

  return ContactMenu;
});