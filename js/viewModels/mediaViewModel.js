var app = window.app || {};

app.MediaViewModel = (function(ko, db){
    'use strict';

    var me = {
        catalog: ko.observableArray([]),
        mediaTypes: ko.observableArray([]),
        sortedCatalog: undefined,
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

         me.sortedCatalog = ko.computed(function () {
                return this.catalog().sort(function (l, r) {
                    return (l.MediaType === r.MediaType ? 0 : l.MediaType > r.MediaType ? 1 : -1) || (l.Name === r.Name ? 0 : l.Name > r.Name ? 1 : -1);
                });
            }, me);
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