var app = window.app || {};
app.DataBindingViewModel = (function(){
    "use strict";

    var me = {
        message: ko.observable(''),
        color: ko.observable(''),
        chosenColors: ko.observableArray([]),
        colors: ["Red", "Green", "Blue", "Yellow", "Black", "White"],
        keyValuePair: ko.observable(),
        keyValuePairs: [{key: "First", value: "1"},{key: "Second", value: "2"},{key: "Third", value: "3"},{key: "Fourth", value: "4"}],
        ordinal: ko.observable(undefined),
        loadMessage: loadMessage
    }

    function _init(){
        me.message.subscribe(function(v){
            console.log(v);
        });
    }

    function loadMessage(){
        me.message("My favorite color is: " + me.colors[Math.floor(Math.random() * me.colors.length)].toLowerCase());
    }

    _init();

    return me;
})();