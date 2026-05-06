import AdminViewSwitcher from "@/components/Admin/AdminViewSwitcher";
import AddForms, { FormField } from "@/components/Admin/AddForms";
import TestimonialManageView from "@/components/Admin/TestimonialManageView";
import { ADMIN_VIEW_TABS } from "@/constants/ui/admin";
import { adminPlaceholders } from "@/constants/ui/placeholders";
import { adminPageTitles } from "@/constants/ui/adminPages";
import { t } from "@/lib/i18n/messages";

// Add Testimonials
function AddView() {
  const formFields: FormField[] = [
    {
      name: "Name",
      label: t("admin.fields.Name.label" as const),
      type: "text",
      required: true,
    },
    {
      name: "Text",
      label: t("admin.fields.Text.label" as const),
      type: "textarea",
      required: true,
    },
    {
      name: "Designation",
      label: t("admin.fields.Designation.label" as const),
      type: "text",
      required: true,
    },
    {
      name: "Organization",
      label: t("admin.fields.Organization.label" as const),
      type: "text",
      required: true,
    },
    {
      name: "ImageUrl",
      label: t("admin.fields.ImageUrl.label" as const),
      type: "file",
      accept: "image/*",
      required: true,
    },
  ];

  return (
    <AddForms
      title={adminPageTitles.testimonials.addTitle}
      fields={formFields}
      apiEndpoint="/api/testimonials"
    />
  );
}

// View as user
function ViewAsUser() {
  return <div>{adminPlaceholders.notImplemented}</div>;
}

// Main Page Component
export default function ManageTestimonials() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        {adminPageTitles.testimonials.heading}
      </h1>

      {/* 3. Pass the tabs mapping to the switcher */}
      <AdminViewSwitcher tabs={ADMIN_VIEW_TABS} defaultTab="manage">
        {{
          manage: <TestimonialManageView />,
          add: <AddView />,
          preview: <ViewAsUser />,
        }}
      </AdminViewSwitcher>
    </div>
  );
}
