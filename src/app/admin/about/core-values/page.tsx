import AdminViewSwitcher from "@/components/Admin/AdminViewSwitcher";
import AddForms, { FormField } from "@/components/Admin/AddForms";
import CoreValuesManageView from "@/components/Admin/CoreValuesManageView";
import { ADMIN_VIEW_TABS } from "@/constants/ui/admin";
import { adminPlaceholders } from "@/constants/ui/placeholders";
import { adminPageTitles } from "@/constants/ui/adminPages";
import { t } from "@/lib/i18n/messages";

function AddView() {
  const formFields: FormField[] = [
    {
      name: "Title",
      label: t("admin.fields.Title.label" as const),
      type: "text",
      required: true,
    },
    {
      name: "Description",
      label: t("admin.fields.Description.label" as const),
      type: "textarea",
      required: true,
    },
    {
      name: "Icon",
      label: t("admin.fields.Icon.label" as const),
      type: "file",
      accept: "image/*",
      required: true,
    },
    {
      name: "Order",
      label: t("admin.fields.Order.label" as const),
      type: "number",
      required: false,
    },
  ];

  return (
    <AddForms
      title={adminPageTitles.coreValues.addTitle}
      fields={formFields}
      apiEndpoint="/api/core-values"
    />
  );
}

function ViewAsUser() {
  return <div>{adminPlaceholders.viewAsUser}</div>;
}

// 2. Export the main Page component
export default function ManageCoreValues() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        {adminPageTitles.coreValues.heading}
      </h1>

      {/* 3. Pass the tabs mapping to the switcher */}
      <AdminViewSwitcher tabs={ADMIN_VIEW_TABS} defaultTab="manage">
        {{
          manage: <CoreValuesManageView />,
          add: <AddView />,
          preview: <ViewAsUser />,
        }}
      </AdminViewSwitcher>
    </div>
  );
}
