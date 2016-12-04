var app = window.app || {};
app.MainViewModel = (function(ko, db){
    "use strict";

    var me = {
        catalog: [],
        init: init
    }

    function init(){
         db.getCatalog(function(data){
             ko.utils.arrayForEach(data || [], function(item){
                 me.catalog.push(new app.Media(item.ISBN, item.MediaType, item.Name));
             });
         });
    }

    return me;
})(ko, app.DataContext);