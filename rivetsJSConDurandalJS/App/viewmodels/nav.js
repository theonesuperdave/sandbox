define(['durandal/app', 'plugins/router', 'rivets'], function (app, router, rivets) {
    var nav =
    {
        title: app.title,
        router: router,
        firstRoute: function() {
            return nav.router.navigationModel()[0].hash;
        },
        activate: function () {
        },
        binding: function () {
            nav.rivetsBinding = rivets.bind($('#nav'), { vm: nav });
        },
        compositionComplete: function () {
        },
        deactivated: function () {
            nav.rivetsBinding.unbind();
        },
        detached: function () {
            nav.rivetsBinding.unbind();
        }
    }

    return nav;
});