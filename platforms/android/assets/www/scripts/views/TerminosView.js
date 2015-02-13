define([
    'jquery', 
    'underscore', 
    'Backbone', 
    'views/HomeView',
    'text!tpls/TerminosView.tpl'
],
    function ($, _, Backbone, HomeView,  TerminosViewTemplate) {
        var TerminosView = Backbone.View.extend({

            events:{
                'click #inicio':    'inicio'
            },

            render:function () {
                this.$el.html(_.template(TerminosViewTemplate));
                return this;
            },

            inicio:function (event) {
                $.mobile.jqmNavigator.popView();
            }

        });
        return TerminosView;
    });