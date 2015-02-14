define([
    'jquery', 
    'underscore', 
    'Backbone', 
    'views/HomeView',
    'text!tpls/ContactoView.tpl'
],
    function ($, _, Backbone, HomeView, ContactoViewTemplate) {
        var ContactoView = Backbone.View.extend({

            events:{
                'click #inicio':    'inicio',
                'click #enviar':    'enviar'
            },

            render:function () {
                this.$el.html(_.template(ContactoViewTemplate));
                return this;
            },

            inicio:function (event) {
                $.mobile.jqmNavigator.popView();
            },
            
            enviar:function (event) {
                $.mobile.jqmNavigator.pushView(new HomeView());
            }

        });
        return ContactoView;
    });