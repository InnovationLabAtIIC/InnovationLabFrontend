import AdminViewSwitcher from "@/components/Admin/AdminViewSwitcher";
import ContactManageView from "@/components/Admin/ContactManageView";
import { ADMIN_VIEW_TABS } from "@/constants/ui/admin";
import { adminPlaceholders } from "@/constants/ui/placeholders";
import { adminPageTitles } from "@/constants/ui/adminPages";

// 1. Define your individual view components
function ManageView() {
  return <ContactManageView />;
}

function AddView() {
  return <div>{adminPlaceholders.addForm}</div>;
}

function ViewAsUser() {
  return <div>{adminPlaceholders.viewAsUser}</div>;
}

// 2. Export the main Page component
export default function ManageContacts() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        {adminPageTitles.contacts.heading}
      </h1>

      {/* 3. Pass the tabs mapping to the switcher */}
      <AdminViewSwitcher tabs={ADMIN_VIEW_TABS} defaultTab="manage">
        {{
          manage: <ManageView />,
          add: <AddView />,
          preview: <ViewAsUser />,
        }}
      </AdminViewSwitcher>
    </div>
  );
}
