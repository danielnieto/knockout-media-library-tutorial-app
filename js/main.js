require(["vendor/knockout-3.4.1", "viewModels/requireViewModel"], function(ko, viewModel){
    'use strict'

    ko.components.register('color-list', {require: "components/colorListRequire"});
    ko.applyBindings(new viewModel());
})