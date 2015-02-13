define([
    'jquery',
    'underscore', 
    'Backbone',
    'views/VehiculoView',
    'text!tpls/RegistroView.tpl'
],
    function ($, _, Backbone, VehiculoView, RegistroViewTemplate) {

        var RegistroView = Backbone.View.extend({

            events:{
                'click #inicio':'inicio',
                'click #registrar':'vehiculo'
            },

            render:function () {
                this.$el.html(_.template(RegistroViewTemplate));
                return this;
            },

            inicio:function (event) {
                $.mobile.jqmNavigator.popView();
            },
            
            vehiculo:function (event) {
                $.mobile.jqmNavigator.pushView(new VehiculoView());
            }

        });

        return RegistroView;
    });