define([
    'jquery', 
    'underscore', 
    'Backbone', 
    'views/HomeView',
    'views/EspecialidadView',
    'text!tpls/PrincipalView.tpl'
],
    function ($, _, Backbone, HomeView, EspecialidadView, PrincipalViewTemplate) {
        var PrincipalView = Backbone.View.extend({

            events:{
                'click #inicio':'inicio'
            },

            render:function () {
                this.$el.html(_.template(PrincipalViewTemplate));
                return this;
            },

            inicio:function (event) {
                $.mobile.jqmNavigator.pushView(new HomeView());
            },
            
            especialidad:function (event) {
                $.mobile.jqmNavigator.pushView(new EspecialidadView());
            }

        });
        return PrincipalView;
});