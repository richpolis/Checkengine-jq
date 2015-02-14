define([
    'jquery', 
    'underscore', 
    'Backbone',
    'views/ConfiguracionView',
    'text!tpls/EspecialidadView.tpl'
],
    function ($, _, Backbone, ConfiguracionView, EspecialidadViewTemplate) {
        var EspecialidadView = Backbone.View.extend({

            events:{
                'click #principal':      'inicio',
                'click #configuracion':  'configuracion'
            },

            render:function () {
                this.$el.html(_.template(EspecialidadViewTemplate));
                return this;
            },

            inicio:function (event) {
                $.mobile.jqmNavigator.popView();
            },
            
            configuracion:function (event) {
                $.mobile.jqmNavigator.pushView(new ConfiguracionView());
            }
            

        });
        return EspecialidadView;
    });