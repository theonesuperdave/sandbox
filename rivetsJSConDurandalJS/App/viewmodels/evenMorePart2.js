// DurandalJS Singleton
define(['durandal/app', 'plugins/router', 'rivets'], function (app, router, rivets) {

    return {
        goodPermission: 'can do stuff',
        badPermission: 'barf',
        map: [{ id: 1, value: 'bg-info' }, { id: 2, value: 'bg-success' }], // This is a map of known type\category\etc. numbers to come CSS class; ideally, this would be some dictionary implementation where the key could be anything
        id: 2, // This would be the key into the collection defined above in the 'map'
        init: function() {
            var self = this;

            // Setup a container object that matches the 'interface' to the input arg for our custom binder. Yucky, but it works with this object literal style.
            self.mapContainer = {
                id: self.id,
                map: self.map
            }

            return self;
        },

        activate: function() {
        },
        binding: function() {
            var self = this;
            self.rivetsBinding = rivets.bind($('#evenMorePart2'), { vm: self });
        },
        compositionComplete: function() {
        },
        deactivated: function() {
            var self = this;

            self.unbindRivetsIfNecessary();
        },
        detached: function() {
            var self = this;

            self.unbindRivetsIfNecessary();
        },
        unbindRivetsIfNecessary: function() {
            var self = this;

            if (self.rivetsBinding) {
                self.rivetsBinding.unbind();
            }
        }
    }.init();
});