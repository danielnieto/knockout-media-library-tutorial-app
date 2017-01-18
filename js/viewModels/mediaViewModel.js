var app = window.app || {};

app.MediaViewModel = (function(ko, db){
    'use strict';

    var me = {
        catalog: ko.observableArray([]),
        media: ko.observable(undefined),
        mediaTypes: ko.observableArray([]),
        newMedia: ko.observable(undefined),
        sortedCatalog: undefined,
        add: add,
        cancel:cancel,
        edit: edit,
        saveEdit: saveEdit,
        saveNew: saveNew
    };

     function add() {
        me.newMedia(new app.Media(db.getGuid(), '', ''));
    }

    function cancel() {
        me.newMedia(undefined);
    }

     function saveNew() {
        db.saveMedia(ko.toJS(me.newMedia()));
        me.catalog.push(me.newMedia());
        me.newMedia(undefined);
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