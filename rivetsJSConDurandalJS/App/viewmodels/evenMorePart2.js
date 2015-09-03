// DurandalJS Singleton
define(['durandal/app', 'plugins/router'], function (app, router) {
    return {
        activate: function () {
        },
        binding: function () {
            var self = this;
            self.rivetsBinding = rivets.bind($('#evenMorePart2'), { vm: self });
        },
        compositionComplete: function () {
        },
        deactivated: function () {
            var self = this;
            self.rivetsBinding.unbind();
        },
        detached: function () {
            var self = this;
            self.rivetsBinding.unbind();
        }
    }
});