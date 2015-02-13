define([
    'jquery', 
    'underscore', 
    'Backbone', 
    'views/RegistroView',
    'views/VehiculoView',
    'views/LoginView',
    'views/TerminosView',
    'views/ContactoView',
    'text!tpls/HomeView.tpl'
],
    function ($, _, Backbone, RegistroView, VehiculoView, LoginView, TerminosView, ContactoView, HomeViewTemplate) {
        var HomeView = Backbone.View.extend({

            events:{
                'click #registro':'registro',
                'click #vehiculo':'vehiculo',
                'click #login':'login',
                'click #terminos':'terminos',
                'click #contacto':'contacto'
            },

            render:function () {
                this.$el.html(_.template(HomeViewTemplate));
                return this;
            },

            registro:function (event) {
                $.mobile.jqmNavigator.pushView(new RegistroView());
            },
            
            vehiculo:function (event) {
                $.mobile.jqmNavigator.pushView(new VehiculoView());
            },
            
            login:function (event) {
                $.mobile.jqmNavigator.pushView(new LoginView());
            },
            
            terminos:function (event) {
                $.mobile.jqmNavigator.pushView(new TerminosView());
            },
            
            contacto:function (event) {
                $.mobile.jqmNavigator.pushView(new ContactoView());
            }

        });
        return HomeView;
    });