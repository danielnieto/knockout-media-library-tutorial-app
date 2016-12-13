var app = window.app || {};

app.MediaViewModel = (function(ko, db){
    'use strict';

    var me = {
        catalog: ko.observableArray([]),
        mediaTypes: ko.observableArray([]),
        save: save
    }

    function _getCatalog(){
        db.getCatalog(function(data){
             var tmpArray = [];

             ko.utils.arrayForEach(data || [], function(item){
                 console.log(">>>>" + JSON.stringify(item));
                 tmpArray.push(new app.Media(item.ISBN, item.MediaType, item.Name));
             });

             me.catalog(tmpArray);
        })
    }

    function _init(){
        db.getMediaTypes(function(data){
            me.mediaTypes(data);
            _getCatalog();
        });
    }

    function save(){
        ko.utils.arrayForEach(me.catalog(), function(item){
            console.log(item);
            db.saveMedia(ko.toJS(item));
        });
    }

    _init(); 

    return me;

})(ko, app.DataContext);