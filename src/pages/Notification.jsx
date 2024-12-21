import React from "react";

import NotificationList from "../components/NotificationList";
import { notificationApi } from "../constants";

export default function Notification() {
  return (
    <div className="layout-padding text-hcl-slate">
      <h1 className="font-bold text-xl mt-4">Notifications</h1>
      <NotificationList notificationApi={notificationApi} />
    </div>
  );
}
