var Employee = Backbone.Model.extend({
    urlRoot: "http://tobacco-plato.codio.io:5000/employees"
});

var EmployeeCollection = Backbone.Collection.extend({
    model: Employee,
    url: "http://tobacco-plato.codio.io:5000/employees"
});
