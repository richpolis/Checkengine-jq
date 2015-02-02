app.views.LoginView = Backbone.View.extend({
	tagName: "div",
	id: "loginModal",
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