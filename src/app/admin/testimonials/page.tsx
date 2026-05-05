import AdminViewSwitcher from "@/components/Admin/AdminViewSwitcher";
import AddForms, { FormField } from "@/components/Admin/AddForms";
import TestimonialManageView from "@/components/Admin/TestimonialManageView";

// Add Testimonials
function AddView() {
  const formFields: FormField[] = [
    { name: "Name", label: "Name", type: "text", required: true },
    { name: "Text", label: "Text", type: "textarea", required: true },
    { name: "Designation", label: "Designation", type: "text", required: true },
    { name: "Organization", label: "Organization", type: "text", required: true },
    { name: "ImageUrl", label: "Image (ImageUrl)", type: "file", accept: "image/*", required: true },
  ];

  return (
    <AddForms 
      title="Add Testimonial" 
      fields={formFields} 
      apiEndpoint="/api/testimonials"
    />
  );
}

// View as user
function ViewAsUser() {
  return <div>User Preview Not Implemented</div>;
}

// Main Page Component
export default function ManageTestimonials() {
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
          manage: <TestimonialManageView />,
          add: <AddView />,
          preview: <ViewAsUser />,
        }}
      </AdminViewSwitcher>
    </div>
  );
}