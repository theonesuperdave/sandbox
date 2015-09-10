define(['user', 'rivets'], function (user, rivets) {
    var rivetsJSCustomBindings = {
        init: function () {
            rivets.binders.haspermission = function (element, value) {
                $(element).css('display', user.hasPermission(value) ? 'inherit' : 'none');
            };

            rivets.binders.setcssforinputvalue = {
                routine: function (element, value) {
                    var map = value.map;
                    if (map) {
                        var css = null;

                        for (var index = 0; index < map.length; index++) {
                            if (map[index].id === value.id) {
                                css = map[index].value;

                                break;
                            }
                        }

                        if (css) {
                            $(element).addClass(css);
                        }
                    }
                }
            };

            rivets.binders.setTextForInputValue = {
                routine: function (element, value) {
                    var map = value.map;
                    if (map) {
                        var text = null;

                        for (var index = 0; index < map.length; index++) {
                            if (map[index].id === value.id) {
                                text = map[index].value;

                                break;
                            }
                        }

                        if (text) {
                            $(element).text(text);
                        }
                    }
                }
            };
        }
    }

    return rivetsJSCustomBindings;
});