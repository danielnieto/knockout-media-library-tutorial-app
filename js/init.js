requirejs.config({
    paths: {
        'text': 'text',
        'durandal': 'vendor/durandal',
        'plugins': 'vendor/durandal/plugins',
        'transitions': 'vendor/durandal/transitions',
        'knockout': 'vendor/knockout-3.4.1',
        'jquery': 'vendor/jquery-3.1.1'
    }
});
define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function (system, app, viewLocator) {
    app.title = 'Welcome to Durandal';
    app.configurePlugins({
        router: true,
        dialog: true
    });
    app.start().then(function () {
        viewLocator.useConvention();
        app.setRoot('viewModels/home', 'entrance');
    });
});