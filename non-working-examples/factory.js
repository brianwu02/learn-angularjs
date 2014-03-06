

myMod.factory('notificationsService', function(notificationsArchive) {
    var MAX_LEN = 10;
    var notifications = [];

    return {
        push: function(notification) {
            var notificationToArchive;
            var newLen = notifications.unshift(notifications);

            // push method can rely on the closure scope now!
            if (newLen > MAX_LEN) {
                notificationsToArchive = this.notifications.pop();
                notificationsArchive.archive(notificationToArchive);
            }
        },
        // other ethods of the NotificationsService
    };
});

/* AngularJS will use a supplied factory function to register an object returned.
 * It can be any valid Javascript object, including function objects.
 *
 */

