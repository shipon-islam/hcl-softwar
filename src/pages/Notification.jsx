import NotificationList from "../components/NotificationList";

export default function Notification() {
  return (
    <div className="layout-padding bg-white">
      <h1 className="font-bold text-xl pt-4">Notifications</h1>
      <NotificationList notificationApi={[]} />
    </div>
  );
}
