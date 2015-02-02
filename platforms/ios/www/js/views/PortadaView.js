app.views.PortadaView = Backbone.View.extend({
	
    initialize: function () {
        
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    events: {
        "click img":    "cargarInicio"
    },

	cargarInicio: function(){
		router.navigate("inicio", {trigger: true, replace: true});
	},

});