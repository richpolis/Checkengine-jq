define([
    'jquery', 
    'underscore', 
    'Backbone',
    'views/RegistroView',
    'views/VehiculoView',
    'text!tpls/ConfiguracionView.tpl'
],
    function ($, _, Backbone, RegistroView, VehiculoView, ConfiguracionViewTemplate) {
        var ConfiguracionView = Backbone.View.extend({

            events:{
                'click #principal': 'principal',
                'click #registro':  'registro',
                'click #vehiculo':  'vehiculo',
            },

            render:function () {
                this.$el.html(_.template(ConfiguracionViewTemplate));
                return this;
            },

            inicio:function (event) {
                $.mobile.jqmNavigator.popView();
            },
            
            registro:function (event) {
                $.mobile.jqmNavigator.pushView(new RegistroView());
            },
            
            vehiculo:function (event) {
                $.mobile.jqmNavigator.pushView(new VehiculoView());
            }

        });
        return ConfiguracionView;
    });