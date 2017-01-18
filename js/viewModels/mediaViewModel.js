var app = window.app || {};

app.MediaViewModel = (function(ko, db){
    'use strict';

    var me = {
        catalog: ko.observableArray([]),
        media: ko.observable(undefined),
        edit: edit,
        mediaTypes: ko.observableArray([]),
        sortedCatalog: undefined,
        saveEdit: saveEdit
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

    function saveEdit(){
            db.saveMedia(ko.toJS(me.media()));
            me.media(undefined);
    }

    function edit(obj, evt) {
        me.media(obj);
    }

    _init(); 

    return me;

})(ko, app.DataContext);