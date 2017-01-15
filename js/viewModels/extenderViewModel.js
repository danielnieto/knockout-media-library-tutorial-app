var app = window.app || {};

app.ExtenderViewModel = (function(ko, db){
    'use strict';
    
    var me = {
        borrowers: ko.observableArray([]),
        sortedBorrowers: undefined,
        save: save
    }

    function _getBorrowers(){
        db.getBorrowers(function(data){
             var tmpArray = [];

             ko.utils.arrayForEach(data || [], function(item){
                 tmpArray.push(new app.Borrower(item.Name, item.Email));
             });

             me.borrowers(tmpArray);
        });
    }

    function _init(){
        _getBorrowers();
        me.sortedBorrowers =  ko.pureComputed(function () {
            return this.borrowers().sort(function (l, r){
                return (l.Name === r.Name ? 0 : l.Name > r.Name ? 1 : -1) || (l.Email === r.Email ? 0 : l.Email > r.Email ? 1 : -1);
            });
        }, me);
    }

    function save(){
        ko.utils.arrayForEach(me.borrowers(), function(item){
            if(item.HasError()) return;
            db.saveBorrower(ko.toJS(item));
        });
    }

    _init();

    return me;

})(ko, app.DataContext);