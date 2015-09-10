define(['rivets'], function (rivets) {
    var evenMorePart1 =
    {
        images: ['../../Content/images/rivets-sample1.jpg', '../../Content/images/rivets-sample2.jpg', '../../Content/images/rivets-sample3.jpg'],
        activate: function () {
        },
        binding: function () {
            evenMorePart1.rivetsBinding = rivets.bind($('#evenMorePart1'), { vm: evenMorePart1 });
        },
        compositionComplete: function () {
        },
        deactivated: function () {
            evenMorePart1.rivetsBinding.unbind();
        },
        detached: function () {
            evenMorePart1.rivetsBinding.unbind();
        }
    }

    return evenMorePart1;
});