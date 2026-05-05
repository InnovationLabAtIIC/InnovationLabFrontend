import AdminViewSwitcher from "@/components/Admin/AdminViewSwitcher";
import EventRegistrationManageView from "@/components/Admin/EventRegistrationManageView";

// 1. Define your individual view components
function ManageView() {
  return <EventRegistrationManageView />;
}

function AddView() {
  return <div>Registration is done by page visitors</div>;
}

function ViewAsUser() {
  return <div>Code for the User preview goes here...</div>;
}

// 2. Export the main Page component
export default function ManageEvents() {
  const tabs = [
    { id: "manage", label: "Manage" },
    { id: "add", label: "Add" },
    { id: "preview", label: "View as user" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Event Registration</h1>

      {/* 3. Pass the tabs mapping to the switcher */}
      <AdminViewSwitcher tabs={tabs} defaultTab="manage">
        {{
          manage: <ManageView />,
          add: <AddView />,
          preview: <ViewAsUser />,
        }}
      </AdminViewSwitcher>
    </div>
  );
}
