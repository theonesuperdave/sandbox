define(['durandal/app', 'plugins/router'], function (app, router) {
    var nav =
    {
        title: app.title,
        router: router,
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