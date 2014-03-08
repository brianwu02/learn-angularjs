var NotificationService = function() {
    this.MAX_LEN = 10;
    this.notificationsArchive = new NotificationArchive();
    this.notifications = [];
};

NotificationService.prototype.push = function(notification) {
    var newLen, notificationToArchive;

    newLen = this.notifications.unshift(notification);
    if (newLen > this.MAX_LEN) {
        notificationToArchive = this.notifications.pop();
        this.notificationArchive.archive(notificationToArchive);
    }
};

NotificationService.prototype.getCurrent = function() {
    return this.notifications;
};
