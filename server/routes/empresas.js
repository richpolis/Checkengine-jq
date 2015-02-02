var empresas = [
{'id': 1, 'nombre': "Empresa Taller Mecanico Don Pepe",'sucursal': 'centro','tipos': [{'id':1,'nombre':"Taller mecanico"}], 'especialidades':[{id:1,nombre:"Mecanica general"}] },
{'id': 2, 'nombre': "Empresa Taller Mecanico Don Jose",'sucursal': 'norte','tipos': [{'id':1,'nombre':"Taller mecanico"}], 'especialidades':[{id:1,nombre:"Mecanica general"}] },
{'id': 3, 'nombre': "Empresa Taller Mecanico Don Luis",'sucursal': 'sur','tipos': [{'id':1,'nombre':"Taller mecanico"}], 'especialidades':[{id:1,nombre:"Mecanica general"}] },
{'id': 4, 'nombre': "Empresa Taller Mecanico Don Juan",'sucursal': 'este','tipos': [{'id':1,'nombre':"Taller mecanico"}], 'especialidades':[{id:1,nombre:"Mecanica general"}] }
];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    console.log('name: ' + name);
    if (name) {
        var results = empresas.filter(function(element) {
            var fullName = element.nombre + " " + element.sucursal;
            return fullName.toLowerCase().indexOf(name.toLowerCase()) > -1;
        });
        res.send(results);
    } else {
        res.send(empresas);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(empresas[id]);
};