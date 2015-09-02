
define(['durandal/system', 'durandal/composition', 'plugins/router', 'jquery'], function (system, composition, router, $) {

    var overlay = function (context) {
        return system.defer(function (deferred) {
            var cssMarker = '.mask';
            var excludedModuleIds = [];

            function hideMask(targetElement){
                $(cssMarker).hide();
                $(cssMarker).remove(); 
                targetElement.removeClass('mask-parent');
            }

            function endTransitionEarly() {
                system.log('overlay', 'The overlay will not be displayed...');
                deferred.resolve();
            }

            function showMask() {
                var defaults = {
                    image: '../../../Content/images/SOLID-RIVETS-sm.JPG',
                    text: 'working...',
                    bgcolor: '#aaa',
                    opacity: .45
                };

                var routeIsExcluded = false;
                for (var index = 0; index <= excludedModuleIds.length; index++) {
                    // If you would rather exclude by the route itself, compare against this property instead: router.activeInstruction().config.route
                    if (excludedModuleIds[index] === context.model.__moduleId__) {
                        routeIsExcluded = true;
                        break;
                    }
                }

                if (routeIsExcluded) {
                    endTransitionEarly();
                    return;
                }

                // The element that the mask covers
                var targetElement = $('body');

                if (targetElement.length == 0) {
                    endTransitionEarly();
                    return;
                }

                //remove any existing masks
                $(cssMarker).remove();

                // The mask HTML to insert
                var maskTemplate =
                    '<div class="mask" style="display:block;">' +
                    '<div class="mask-bg" style="opacity:' + defaults.opacity + ';background-color:' + defaults.bgcolor + ';"></div>' +
                    '<p class="mask-msg">' +
                    (defaults.image ? '<img src="' + defaults.image + '" />' : '') +
                    (defaults.text ? '<span>' + defaults.text + '</span>' : '') +
                    '</p>' +
                    '</div>';

                targetElement.append(maskTemplate);
                targetElement.addClass('mask-parent');
                $(cssMarker).show();

                router.on('router:navigation:composition-complete', function (instance, instruction, router) {
                    // Ensure we don't flicker and freak out the user, so use a small delay
                    window.setTimeout(function () {
                        hideMask(targetElement);
                    }, 700);
                });

                context.triggerAttach();
                deferred.resolve();
            };

            function scrollIfNeeded() {
                if (!context.keepScrollPosition) {
                    $(document).scrollTop(0);
                }
            }

            function startTransition() {
                scrollIfNeeded();
                context.triggerAttach();

                showMask();
            }
             
            startTransition();
        }).promise();
};

return overlay;
});
