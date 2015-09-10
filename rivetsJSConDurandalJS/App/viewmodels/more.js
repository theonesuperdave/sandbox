// DurandalJS Transient
define(['viewmodels/rivetTypes', 'viewmodels/rivetUses', 'rivets'], function (types, uses, rivets) {
    var more = (function () {
        function more() {}

        more.prototype.activate = function() {
        }

        more.prototype.binding = function () {
            more.typesBinding = rivets.bind($('#types'), { types: types });
            more.usesBinding = rivets.bind($('#uses'), { uses: uses });
        }

        more.prototype.compositionComplete = function () {
        }

        more.prototype.deactivated = function () {
            more.typesBinding.unbind();
            more.usesBinding.unbind();
        }

        more.prototype.detached = function () {
            more.typesBinding.unbind();
            more.usesBinding.unbind();
        }

        return more;
    })();

    return more;
});