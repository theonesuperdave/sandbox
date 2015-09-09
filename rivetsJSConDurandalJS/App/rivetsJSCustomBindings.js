define(['user'], function (user) {
    var rivetsJSCustomBindings = {
        init: function () {
            rivets.binders.haspermission = function (element, value) {
                $(element).css('display', user.hasPermission(value) ? 'inherit' : 'none');
            };

            rivets.binders.setCssForInputValue = {
                routine: function (element, value, map) {
                    if (map) {
                        var css = map[value];
                        $(element).addClass(css);
                    }
                }
            };

            rivets.binders.setTextForInputValue = {
                routine: function (element, value, map) {
                    if (map) {
                        var text = map[value];
                        $(element).text(text);
                    }
                }
            };
        }
    }

    return rivetsJSCustomBindings;
});