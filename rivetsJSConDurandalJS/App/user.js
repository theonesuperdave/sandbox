define([], function () {
    var user =
    {
        permissions: ['can do stuff', 'can do more stuff'],

        hasPermission: function(permission) {
            for (var index = 0; index < user.permissions.length; index++) {
                if (user.permissions[index] === permission) {
                    return true;
                }
            }

            return false;
        }
    }

    return user;
});