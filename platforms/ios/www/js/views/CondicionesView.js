app.views.CondicionesView = Backbone.View.extend({
	tagName: "div",
	id: "condicionesModal",
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