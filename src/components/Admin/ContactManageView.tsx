"use client";

import ResourceManageList from "@/components/Admin/ResourceManageList";
import { listContacts } from "@/lib/services/domain/contacts";
import type { ContactResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function ContactManageView() {
  return (
    <ResourceManageList<ContactResponseDto>
      loadItems={listContacts}
      emptyMessage="No contacts available."
      loadingMessage="Loading contacts..."
      errorMessage="Unable to load contacts."
      getKey={(item, index) => String((item as { id?: string }).id ?? index)}
      renderItem={(item) => JSON.stringify(item, null, 2)}
    />
  );
}
