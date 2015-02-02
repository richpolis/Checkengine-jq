app.routers.AppRouter = Backbone.Router.extend({

    routes: {
            "":                         "portada",
            "inicio":                   "inicio",
            "registro":                 "registro",
            "vehiculo":                 "vehiculo",
            "login":                    "login",
            "employees/:id":            "employeeDetails"
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));
    },

    portada: function(){
            app.portadaView = new app.views.PortadaView();
            app.portadaView.render();
            app.slider.slidePage(app.portadaView.$el);
    },
    inicio: function () {
        // Solo se renderiza una sola vez
        if (!app.inicioView) {
            app.inicioView = new app.views.InicioView();
            app.inicioView.render();
        } else {
            console.log('resume Inicio View');
            app.inicioView.delegateEvents(); // delega los eventos cuando la vista se recicla
        }
        app.slider.slidePage(app.inicioView.$el);
    },
    registro: function () {
        // Solo se renderiza una sola vez
        if (!app.registroView) {
            app.registroView = new app.views.RegistroView();
            app.registroView.render();
        } else {
            console.log('resumen de Registro view');
            app.registroView.delegateEvents(); // delega los eventos cuando la vista se recicla
        }
        app.slider.slidePage(app.registroView.$el);
    },
    vehiculo: function () {
        // Solo se renderiza una sola vez
        if (!app.vehiculoView) {
            app.vehiculoView = new app.views.VehiculoView();
            app.vehiculoView.render();
        } else {
            console.log('resume vehiculo View');
            app.vehiculoView.delegateEvents(); // delega los eventos cuando la vista se recicla
        }
        app.slider.slidePage(app.vehiculoView.$el);
    },
    login: function (e) {
        // Solo se renderiza una sola vez
        if (!app.loginView) {
            app.loginView = new app.views.LoginView();
            app.loginView.render();
        } else {
            console.log('resume login View');
            app.loginView.delegateEvents(); // delega los eventos cuando la vista se recicla
        }
        app.slider.slidePage(app.loginView.$el);
    },
    employeeDetails: function (id) {
        var employee = new Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                slider.slidePage(new EmployeeView({model: data}).render().$el);
            }
        });
    }

});