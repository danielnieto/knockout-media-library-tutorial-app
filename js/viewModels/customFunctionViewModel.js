var app = window.app || {};

app.CustomFunctionViewModel = (function(ko, db){
    'use strict';

    var me = {
        catalog: ko.observableArray([])
    }

    function _init(){
        db.getCatalog(function (data) {
            me.catalog(data);
        });
        
        me.books = me.catalog.filterByProperty('MediaType', 'Book');
        me.cds = me.catalog.filterByProperty('MediaType', 'CD');
        me.dvds = me.catalog.filterByProperty('MediaType', 'DVD');
        me.games = me.catalog.filterByProperty('MediaType', 'Game');
        me.magazines = me.catalog.filterByProperty('MediaType', 'Magazine');
    }

    _init();

    return me;

})(ko, app.DataContext);