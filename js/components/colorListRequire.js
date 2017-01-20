define(['vendor/knockout-3.4.1', 'text!templates/color-list.html'], function (ko, html) {
    'use strict';
    return {
        viewModel: function (params) {
            var me = {
                colors: ["Red", "Green", "Blue", "Yellow", "Black", "White"],
                display: params.display
            };
            return me;
        },
        template: html
    };
});
