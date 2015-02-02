app.views.ContactoView = Backbone.View.extend({
	tagName: "div",
	id: "contactoView",
    initialize: function () {

    },
	events: {
        "click .cerrarModal":    "cerrar"
    },
    render: function () {
        this.$el.html(this.template());
        return this;
    },
	cerrar: function(){
		window.history.back();
	}
});