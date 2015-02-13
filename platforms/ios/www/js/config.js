// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ['main'],

  paths: {
    // JavaScript folders.
    libs: '../js/libs',
    plugins: '../js/plugins', // Ours or 3rd party plugins / components

    // Libraries.
    jquery: '../js/libs/jquery/jquery.min', // 1.9.0
    jquerymobile: '../js/libs/jquery.mobile/jquery.mobile-1.4.5.min',
    lodash: '../js/libs/underscore/lodash', // 0.7.0
    backbone: '../js/libs/backbone/backbone', // 0.9.2
    marionette: '../js/libs/backbone/backbone.marionette', // 1.0.0-rc2
    text: '../js/libs/require/text' // 2.0.1 :- require plug-in which compiles our templates
  },

  shim: {

    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    },

    // Marionette depends on jquery, lodash and backbone
    marionette : {
      deps : ['jquery', 'lodash', 'backbone'],
      exports : 'Marionette'
    },

    jquerymobile : ['jquery'],

    // Backbone webSQL depends on backbone
    'plugins/backbone-websql': ['backbone']
  }
});



