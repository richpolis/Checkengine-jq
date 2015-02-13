define([
    'jquery', 
    'underscore', 
    'Backbone', 
    'views/PrincipalView',
    'views/TerminosView',
    'views/ContactoView',
    'text!tpls/LoginView.tpl'
],
    function ($, _, Backbone, PrincipalView, TerminosView, ContactoView, LoginViewTemplate) {
        var LoginView = Backbone.View.extend({

            events:{
                'click #inicio':    'inicio',
                'click #entrar':    'principal',
                'click #terminos':  'terminos',
                'click #contacto':  'contacto'
            },

            render:function () {
                this.$el.html(_.template(LoginViewTemplate));
                return this;
            },

            inicio:function (event) {
                $.mobile.jqmNavigator.popView();
            },
            
            entrar:function (event) {
                $.mobile.jqmNavigator.pushView(new PrincipalView());
            },
            
            terminos:function (event) {
                $.mobile.jqmNavigator.pushView(new TerminosView());
            },
            
            contacto:function (event) {
                $.mobile.jqmNavigator.pushView(new ContactoView());
            }

        });
        return LoginView;
    });