define([
    'underscore', 
    'Backbone', 
    'views/HomeView',
    'views/VehiculoView',
    'text!tpls/RegistroView.tpl'
],
    function (_, Backbone, HomeView, VehiculoView, RegistroViewTemplate) {

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