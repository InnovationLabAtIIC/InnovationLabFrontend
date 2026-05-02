import AdminViewSwitcher from "@/components/Admin/AdminViewSwitcher";
import { div } from "framer-motion/client";

// 1. Define your individual view components
function ManageView() {
  return <div>Code for the Manage table goes here...</div>;
}

function AddView() {
  return <div>Add Your Agendas Here</div>;
}

function ViewAsUser() {
  return <div>Code for the User preview goes here...</div>;
}

// 2. Export the main Page component
export default function ManageEventAgenda() {
  const tabs = [
    { id: "manage", label: "Manage" },
    { id: "add", label: "Add" },
    { id: "preview", label: "View as user" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Event Agenda</h1>
      
      {/* 3. Pass the tabs mapping to the switcher */}
      <AdminViewSwitcher
        tabs={tabs}
        defaultTab="manage"
      >
        {{
          manage: <ManageView />,
          add: <AddView />,
          preview: <ViewAsUser />,
        }}
      </AdminViewSwitcher>
    </div>
  );
}