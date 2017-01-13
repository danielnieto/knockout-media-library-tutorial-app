var app = window.app || {};

app.SubscribeViewModel = (function(ko, db){
    'use strict';

    var me = {
        borrower: ko.observable(undefined),
        borrowers: ko.observableArray([]),
        catalog: ko.observableArray([]),
        media: ko.observable(undefined),
        previousBorrower: ko.observable(undefined)
    }

    function _init() {
      
        db.getBorrowers(function (data) {
            me.borrowers(data);
        });

        me.borrower.subscribe(function(v){
            if(!v) return;

            db.getBorrowedCatalog(v, function (data) { 
                    me.catalog(data);
                });

        })
    }

    _init();

    return me;

}(ko, app.DataContext));