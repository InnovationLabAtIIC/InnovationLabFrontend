import AdminViewSwitcher from "@/components/Admin/AdminViewSwitcher";
import AddForms, { FormField } from "@/components/Admin/AddForms";
import CategoryManageView from "@/components/Admin/CategoryManageView";
import { ADMIN_VIEW_TABS } from "@/constants/ui/admin";
import { adminPageTitles } from "@/constants/ui/adminPages";
import { adminPlaceholders } from "@/constants/ui/placeholders";
import { t } from "@/lib/i18n/messages";

function AddView() {
  const formFields: FormField[] = [
    {
      name: "name",
      label: t("admin.fields.Category.label" as const),
      type: "text",
      required: true,
    },
    {
      name: "parentCategoryId",
      label: t("admin.fields.ParentCategoryId.label" as const),
      type: "text",
      required: false,
      placeholder: t("admin.fields.ParentCategoryId.placeholder" as const),
    },
  ];

  return (
    <AddForms
      title={adminPageTitles.categories.addTitle}
      fields={formFields}
      apiEndpoint="/api/categories"
      format="json"
    />
  );
}

function ViewAsUser() {
  return <div>{adminPlaceholders.viewAsUser}</div>;
}

// 2. Export the main Page component
export default function ManageCategories() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        {adminPageTitles.categories.heading}
      </h1>

      {/* 3. Pass the tabs mapping to the switcher */}
      <AdminViewSwitcher tabs={ADMIN_VIEW_TABS} defaultTab="manage">
        {{
          manage: <CategoryManageView />,
          add: <AddView />,
          preview: <ViewAsUser />,
        }}
      </AdminViewSwitcher>
    </div>
  );
}
