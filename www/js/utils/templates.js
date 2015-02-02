app.utils.templates = (function() {

    var load = function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
            if (app.views[view]) {
                deferreds.push(
                    $.ajax({
                        url: 'tpl/' + view + '.html',
                        dataType: 'html',
                        success: function(data) {
                            app.views[view].prototype.template = Handlebars.compile(data);
                        }    
                    })
                );
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    }

    // The public API
    return {
        load: load
    };

}());