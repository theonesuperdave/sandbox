define(['durandal/app', 'plugins/router', 'rivets'], function (app, router, rivets) {
    var evenMore =
    {
        activate: function () {
        },
        binding: function () {
            evenMore.rivetsBinding = rivets.bind($('#evenMore'), { vm: evenMore });
        },
        compositionComplete: function () {
        },
        deactivated: function () {
            evenMore.rivetsBinding.unbind();
        },
        detached: function () {
            evenMore.rivetsBinding.unbind();
        }
    }

    return evenMore;
});