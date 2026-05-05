"use client";

import ResourceManageList from "@/components/Admin/ResourceManageList";
import { listCoreValues } from "@/lib/services/domain/about";
import type { CoreValueResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function CoreValuesManageView() {
  return (
    <ResourceManageList<CoreValueResponseDto>
      loadItems={listCoreValues}
      emptyMessage="No core values available."
      loadingMessage="Loading core values..."
      errorMessage="Unable to load core values."
      getKey={(item, index) => String((item as { id?: string }).id ?? index)}
      renderItem={(item) => JSON.stringify(item, null, 2)}
    />
  );
}
