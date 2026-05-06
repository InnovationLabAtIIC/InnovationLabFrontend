import AdminViewSwitcher from "@/components/Admin/AdminViewSwitcher";
import AddForms, { FormField } from "@/components/Admin/AddForms";
import FaqManageView from "@/components/Admin/FaqManageView";
import { ADMIN_VIEW_TABS } from "@/constants/ui/admin";
import { t } from "@/lib/i18n/messages";
import { adminPlaceholders } from "@/constants/ui/placeholders";
import { adminPageTitles } from "@/constants/ui/adminPages";

function AddView() {
  const formFields: FormField[] = [
    {
      name: "question",
      label: t("admin.fields.question.label" as const),
      type: "text",
      required: true,
    },
    {
      name: "answer",
      label: t("admin.fields.answer.label" as const),
      type: "textarea",
      required: true,
    },
    {
      name: "categoryId",
      label: t("admin.fields.CategoryId.label" as const),
      type: "text",
      required: false,
      placeholder: t("admin.fields.CategoryId.placeholder" as const),
    },
  ];

  return (
    <AddForms
      title={adminPageTitles.faq.addTitle}
      fields={formFields}
      apiEndpoint="/api/faqs"
      format="json"
    />
  );
}

function ViewAsUser() {
  return <div>{adminPlaceholders.viewAsUser}</div>;
}

// 2. Export the main Page component
export default function ManageFAQ() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">{adminPageTitles.faq.heading}</h1>

      {/* 3. Pass the tabs mapping to the switcher */}
      <AdminViewSwitcher tabs={ADMIN_VIEW_TABS} defaultTab="manage">
        {{
          manage: <FaqManageView />,
          add: <AddView />,
          preview: <ViewAsUser />,
        }}
      </AdminViewSwitcher>
    </div>
  );
}
