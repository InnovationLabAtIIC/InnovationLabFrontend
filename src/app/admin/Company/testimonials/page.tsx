import AdminViewSwitcher from "@/components/Admin/AdminViewSwitcher";

// 1. Define your individual view components
function ManageView() {
  return <div>Company Testimonual Not in the backend yet</div>;
}

function AddView() {
  return <div>Company Testimonual Not in the backend yet</div>;
}

function ViewAsUser() {
  return <div>Company Testimonual Not in the backend yet</div>;
}

// 2. Export the main Page component
export default function CompaniesPage() {
  const tabs = [
    { id: "manage", label: "Manage" },
    { id: "add", label: "Add" },
    { id: "preview", label: "View as user" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Testimonials</h1>
      
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