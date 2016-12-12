var app = window.app || {};
app.DataBindingViewModel = (function(){
    "use strict";

    var me = {
        message: ko.observable(''),
        color: ko.observable(''),
        isChecked: ko.observable(true),
        chosenColors: ko.observableArray([]),
        colors: ["Red", "Green", "Blue", "Yellow", "Black", "White"],
        keyValuePair: ko.observable(),
        keyValuePairs: [{key: "First", value: "1"},{key: "Second", value: "2"},{key: "Third", value: "3"},{key: "Fourth", value: "4"}],
        ordinal: ko.observable(undefined),
        loadMessage: loadMessage,
        showMessage: showMessage,
        isEnabled: ko.observable(true),
        isDisabled: ko.observable(true),
    }

    function _init(){
        me.message.subscribe(function(v){
            console.log(v);
        });
    }

    function loadMessage(){
        me.message("My favorite color is: " + me.colors[Math.floor(Math.random() * me.colors.length)].toLowerCase());
    }

    function showMessage(){
        alert(me.message() ? me.message() : "");
    }

    _init();

    return me;
})();