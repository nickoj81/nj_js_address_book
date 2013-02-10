requirejs.config({
  baseUrl: 'js',

  paths: {
  text: 'lib/text',
  bootstrap: 'bootstrap',
  },

  shim: {

    'lib/bootstrap/js/bootstrap': {
       deps: ["lib/jquery"],
       exports: "$.fn.popover"
    },
    
    'lib/underscore': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ['lib/underscore', "lib/jquery"]
    , exports: 'Backbone'
    },

    'lib/backbone.localStorage' : {
      deps: ['lib/backbone']
    , exports: 'Backbone'
    },

    'app': {
      deps: ['lib/underscore', 'lib/backbone',  'lib/backbone.localStorage', 'lib/bootstrap/js/bootstrap']
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
