/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:53 AM
 */

define([
    'underscore', 
    'Backbone', 
    'views/HomeView',
    'views/PrincipalView',
    'text!tpls/VehiculoView.tpl'
],
    function (_, Backbone, HomeView, PrincipalView, VehiculoViewTemplate) {

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