var app = window.app || {};

app.BorrowersViewModel = (function(ko, db){
    'use strict';

    var me = {
        borrowers: ko.observableArray([]),
        save: save
    }

    function _getBorrowers(){
        db.getBorrowers(function(data){
             var tmpArray = [];

             ko.utils.arrayForEach(data || [], function(item){
                 tmpArray.push(new app.Borrower(item.Name, item.Email));
             });

             me.borrowers(tmpArray);
        })
    }

    function _init(){
        _getBorrowers();
    }

    function save(){
        ko.utils.arrayForEach(me.borrowers(), function(item){
            db.saveBorrower(ko.toJS(item));
        });
    }

    _init();

    return me;

})(ko, app.DataContext);

