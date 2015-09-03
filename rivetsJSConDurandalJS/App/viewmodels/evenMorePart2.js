define(['durandal/app', 'plugins/router'], function (app, router) {
    var evenMorePart2 =
    {
        activate: function () {
        },
        binding: function () {
            evenMorePart2.rivetsBinding = rivets.bind($('#evenMorePart2'), { vm: evenMorePart2 });
        },
        compositionComplete: function () {
        },
        deactivated: function () {
            evenMorePart2.rivetsBinding.unbind();
        },
        detached: function () {
            evenMorePart2.rivetsBinding.unbind();
        }
    }

    return evenMorePart2;
});