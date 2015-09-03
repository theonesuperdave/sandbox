// DurandalJS Transient
define(['viewmodels/rivetTypes', 'viewmodels/rivetUses'], function (types, uses) {
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