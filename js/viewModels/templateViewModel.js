var app = window.app || {};

app.TemplateViewModel = (function(ko, db){
    'use strict';

    var me = {
        books: ko.observableArray([]),
        magazines: ko.observableArray([])
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

    _init();

    return me;

})(ko, app.DataContext);