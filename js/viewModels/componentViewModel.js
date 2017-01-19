var app = window.app || {};

app.ComponentViewModel = (function(){
    'use strict';

    var me = {
        showColor: showColor
    }

    function showColor(color){
        alert(color);
    }

    return me;

})();