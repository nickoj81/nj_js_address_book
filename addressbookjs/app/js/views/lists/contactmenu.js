define(['views/lists/contactmenuitem', 'text!templates/lists/menu.html'], function(ContactMenuItemView, template) {
  var ContactMenu = Backbone.View.extend({
    className: 'contact-menucontainer',
    el: 'body',
    template: _.template(template),
    events: {
        'keyup #contactSearchField': 'updateSearchOrder'
    },

    initialize: function() {
      this.collection.on('fetch', this.render, this);
    },


    render: function( searchArray) {

      self = this;
    
      if(searchArray && searchArray.length){
         self.$('#table-body').children().remove();
    
        $.each(searchArray, function(index, contact) {
          var contactview = new ContactMenuItemView({ model: self.collection.get(contact) });
          self.$('#table-body').append(contactview.render().el);
      });

      }else {
        this.$el.html(this.template());
        this.collection.comparator = this.collection.getFullName;
        this.collection.sort();

        this.collection.each( function(contact) {
        var contactview = new ContactMenuItemView({ model: contact });
        self.$('#table-body').append(contactview.render().el);
    });
      }

     return this;
    },

    updateSearchOrder: function(evt) {
        
      var searchStr = $(evt.currentTarget).val();
      searchStr = searchStr.replace(' ', '');

      var resultArray = [];

      this.collection.each( function (contact) {

      var firstname = contact.get('firstname').toLowerCase();
      var lastname = contact.get('lastname').toLowerCase();
      var name = firstname.concat(lastname);

      if( (name.indexOf(searchStr)==0) || (lastname.indexOf(searchStr)==0))
      {
        resultArray.push(contact)
       }
    })

    this.render(resultArray)
    }
  });
  return ContactMenu;
});