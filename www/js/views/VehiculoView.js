app.views.VehiculoView = Backbone.View.extend({
	
    initialize: function () {
        
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    events: {
        "keyup .search-key":    "search",
        "keypress .search-key": "onkeypress"
    },
	

});