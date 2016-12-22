var app = window.app || {};

app.TemplateViewModel = (function(ko, db){
    'use strict';

    var _templates = ["media-table"];

    var me = {
        books: ko.observableArray([]),
        magazines: ko.observableArray([]),
        loadTemplates: loadTemplates
    }

    function _init(){
        db.getCatalog(function (data) {
            var b = [],
                m = [];
            ko.utils.arrayForEach(data, function (item) {
                switch (item.MediaType) {
                    case 'Book':
                        b.push(item);
                        break;
                    case 'Magazine':
                        m.push(item);
                        break;
                }
            });
            me.books(b);
            me.magazines(m);
        });
    }

    function loadTemplates(callback) {
        var counter = 0;
        ko.utils.arrayForEach(_templates, function (template) {
            $.get('/templates/' + template + '.html', null, function (content) {
                $('body').append('<script id="' + template + '" type="text/html">' + content + '</script>');
                counter++;
                if ($.isFunction(callback) && _templates.length === counter) {
                    callback();
                }
            });
        });
    }

    _init();

    return me;

})(ko, app.DataContext);