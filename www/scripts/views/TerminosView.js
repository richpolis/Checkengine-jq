define([
    'jquery', 
    'underscore', 
    'Backbone',
    'text!tpls/TerminosView.tpl'
],
    function ($, _, Backbone, TerminosViewTemplate) {
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