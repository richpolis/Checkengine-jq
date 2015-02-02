var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};


// Se inicializa cuando se carga en el explorador
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
	var existe_db,db,trabajarOnline=false;

    app.router = new app.routers.AppRouter();
    
    app.utils.templates.load(["PortadaView", "InicioView", "RegistroView", "VehiculoView", "LoginView",
        "CondicionesView","ContactoView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        FastClick.attach(document.body);
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Checkengine", // title
                    'OK'        // buttonName
                );
            };
        }
		
		existe_db = window.localStorage.getItem("existe_db");
		db = window.openDatabase("checkengine","1.0","Checkengine DB",200000);
		if(existe_db == null){
			crearDB();
		}
		
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
	function crearDB(){
		db.transaction(crearNuevaDB,successCrearDB,errorCrearDB);
	}
	function crearNuevaDB(){
		// aqui se agregaria todas las sentencias SQL para la creacion de la base de datos local.
	}
	function successCrearDB(){
		// quitar el letrero de la portada donde se esta diciendo al usuario lo que esta pasando.
		window.localStorage.setItem("existe_db",1);
		trabajarOnline = false;
	}
	function errorCrearDB(){
		// enviar mensaje de que ocurrio un error al tratar de crear la base de datos local, se podra trabajar
		// pero siempre online.
		trabajarOnline = true;
	}
}());