define([
    'jquery',
    'underscore', 
    'Backbone',
    'views/PrincipalView',
    'text!tpls/VehiculoView.tpl'
],
    function ($, _, Backbone, PrincipalView, VehiculoViewTemplate) {

        var VehiculoView = Backbone.View.extend({

            events:{
                'click #inicio':'inicio',
                'click #principal':'principal'
            },

            render:function () {
                this.$el.html(_.template(VehiculoViewTemplate));
                return this;
            },

            inicio:function (event) {
                $.mobile.jqmNavigator.popView();
            },
            
            principal:function (event) {
                $.mobile.jqmNavigator.pushView(new PrincipalView());
            }

        });

        return VehiculoView;
    });