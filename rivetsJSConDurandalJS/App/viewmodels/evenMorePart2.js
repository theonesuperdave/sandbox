// DurandalJS Singleton
define(['durandal/app', 'plugins/router'], function (app, router) {
    return {
        goodPermission: 'can do stuff',
        badPermission: 'barf',

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
    }
});