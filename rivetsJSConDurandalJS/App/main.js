// Maps the files so Durandal knows where to find these.
require.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

// Durandal 2.x assumes no global libraries. It will ship expecting 
// Knockout and jQuery to be defined with requirejs. .NET 
// templates by default will set them up as standard script
// libs and then register them with require as follows: 
define('jquery', function () { return jQuery; });
define('knockout', ko);

define('rivets', rivets); // For view model data-binding

define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'rivets', 'rivetsJSCustomBindings'], boot);

function boot(app, viewLocator, system, rivets, rivetsJSCustomBindings) {

    // Enable debug message to show in the console 
    system.debug(true); 

    app.title = 'Durandal con Rivets';

    app.configurePlugins({
        router: true
    });

    /*********************************RIVETS JS **********************************/

    rivets.configure({

        // Attribute prefix in templates
        prefix: 'rv',

        // Preload templates with initial data on bind
        preloadData: true,

        // Root sightglass interface for keypaths
        rootInterface: '.',

        // Template delimiters for text bindings
        templateDelimiters: ['{', '}'],

        // Augment the event handler of the on-* binder
        handler: function (target, event, binding) {
            this.call(target, event, binding.view.models);
        }
    });

    // custom formatters
    rivets.formatters.currency = {
        read: function (value) {
            return '$' + value;
        },
        publish: function (value) {
            return value.replace('$');
        }
    }

    /*********************************END RIVETS JS **********************************/

    rivets.configure();

    rivetsJSCustomBindings.init();
    
    app.start().then(function () {
        // When finding a viewmodel module, replace the viewmodel string 
        // with view to find it partner view.
        // [viewmodel]s/sessions --> [view]s/sessions.html
        // Defaults to viewmodels/views/views. 
        // Otherwise you can pass paths for modules, views, partials
        viewLocator.useConvention();
        
        //Show the app by setting the root view model for our application.
        app.setRoot('viewmodels/shell', 'entrance');
    });
};