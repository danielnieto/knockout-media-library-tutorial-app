var app = window.app || {};
app.DataContext = (function($){
    "use strict";

    function getCatalog(callback){

        if($.isFunction(callback)){

            $.getJSON("/data/catalog.json", function(data){
                callback(data.Catalog);
            });

        }

    }


    var me = {
        getCatalog: getCatalog
    }

    return me;
})(ko);