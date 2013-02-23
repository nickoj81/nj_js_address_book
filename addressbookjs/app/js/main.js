requirejs.config({
  baseUrl: 'js',

  paths: {
    'underscore' : 'lib/underscore',
    'backbone': 'lib/backbone',
    'text': 'lib/text',
    'bootstrap' : 'lib/bootstrap/js/bootstrap',
    'jquery': 'lib/jquery'
    
  },

  shim: {

    'bootstrap': {
       deps: ["jquery"],
       exports: "$.fn.popover"
    },
    
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', "jquery"]
    , exports: 'Backbone'
    },

    'lib/backbone.localStorage' : {
      deps: ['backbone']
    , exports: 'Backbone'
    },

    'app': {
      deps: ['underscore', 'backbone',  'lib/backbone.localStorage', 'bootstrap']
    }
  }
});



require([
  'app'
],


function(App) {
 $(document).ready(
  window.addressBook = new App()
)
})
