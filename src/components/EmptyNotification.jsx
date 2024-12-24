export default function EmptyNotification() {
  return (
    <div className="text-center grid place-items-center">
      <div className="w-[80%] space-y-8 mt-10">
        <h1 className="font-bold text-lg">No Notifications Yet</h1>
        <p className="text-hcl-secondary">
          Make comments, like posts or follow members to get things going.
        </p>
      </div>
    </div>
  );
}
