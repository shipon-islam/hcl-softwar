import React from "react";
export default function NotificationList({ notificationApi }) {
  return (
    <>
      {notificationApi.map((notification) => (
        <div className="mt-8" key={notification.timestamp}>
          <h5 className="font-medium capitalize ">{notification.timestamp}</h5>
          {notification.notifications.map((notify) => (
            <div key={notify.id} className="flex items-center gap-2 mt-8">
              {notify.photo ? (
                <img
                  src={notify.photo}
                  alt="profile"
                  className="w-9 h-9 rounded-full object-cover"
                />
              ) : (
                <div>
                  <notify.Icon />
                </div>
              )}

              <div
                className="notification-title"
                dangerouslySetInnerHTML={{ __html: notify.title }}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
