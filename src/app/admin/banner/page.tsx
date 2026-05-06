import AdminViewSwitcher from "@/components/Admin/AdminViewSwitcher";
import AddForms, { FormField } from "@/components/Admin/AddForms";
import BannerManageView from "@/components/Admin/BannerManageView";
import { ADMIN_VIEW_TABS } from "@/constants/ui/admin";
import { t } from "@/lib/i18n/messages";
import { adminPlaceholders } from "@/constants/ui/placeholders";
import { adminPageTitles } from "@/constants/ui/adminPages";

function AddView() {
  const formFields: FormField[] = [
    {
      name: "Image",
      label: t("admin.fields.BannerImage.label" as const),
      type: "file",
      accept: "image/*",
      required: true,
    },
    {
      name: "Type",
      label: t("admin.fields.Type.label" as const),
      type: "text",
      required: true,
      placeholder: t("admin.fields.Type.placeholder" as const),
    },
    {
      name: "Title",
      label: t("admin.fields.Title.label" as const),
      type: "text",
      required: true,
    },
    {
      name: "SubTitle",
      label: t("admin.fields.SubTitle.label" as const),
      type: "text",
      required: false,
    },
    {
      name: "Caption",
      label: t("admin.fields.Caption.label" as const),
      type: "textarea",
      required: false,
    },
    {
      name: "Version",
      label: t("admin.fields.Version.label" as const),
      type: "number",
      required: false,
    },
    {
      name: "ParentId",
      label: t("admin.fields.ParentId.label" as const),
      type: "text",
      required: false,
    },
    {
      name: "ScheduledStart",
      label: t("admin.fields.ScheduledStart.label" as const),
      type: "text",
      required: false,
      placeholder: t("admin.fields.ScheduledStart.placeholder" as const),
    },
    {
      name: "ScheduledEnd",
      label: t("admin.fields.ScheduledEnd.label" as const),
      type: "text",
      required: false,
      placeholder: t("admin.fields.ScheduledEnd.placeholder" as const),
    },
  ];

  return (
    <AddForms
      title={adminPageTitles.banners.addTitle}
      fields={formFields}
      apiEndpoint="/api/banners"
    />
  );
}

function ViewAsUser() {
  return <div>{adminPlaceholders.viewAsUser}</div>;
}

// 2. Export the main Page component
export default function ManageBanner() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        {adminPageTitles.banners.heading}
      </h1>

      {/* 3. Pass the tabs mapping to the switcher */}
      <AdminViewSwitcher tabs={ADMIN_VIEW_TABS} defaultTab="manage">
        {{
          manage: <BannerManageView />,
          add: <AddView />,
          preview: <ViewAsUser />,
        }}
      </AdminViewSwitcher>
    </div>
  );
}
