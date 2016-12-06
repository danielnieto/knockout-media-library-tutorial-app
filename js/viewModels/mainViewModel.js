var app = window.app || {};
app.MainViewModel = (function(ko, db){
    "use strict";

    var me = {
        catalog: ko.observableArray([]),
        init: init
    }

    function init(){
         db.getCatalog(function(data){

             var tmpArray = [];

             ko.utils.arrayForEach(data || [], function(item){
                 tmpArray.push(new app.Media(item.ISBN, item.MediaType, item.Name));
             });

             me.catalog(tmpArray);
         });
    }

    return me;
})(ko, app.DataContext);