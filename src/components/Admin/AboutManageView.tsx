"use client";

import ResourceManageList from "@/components/Admin/ResourceManageList";
import { listMissionVision } from "@/lib/services/domain/about";
import type { AboutResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function AboutManageView() {
  return (
    <ResourceManageList<AboutResponseDto>
      loadItems={listMissionVision}
      emptyMessage="No about information available."
      loadingMessage="Loading about information..."
      errorMessage="Unable to load about information."
      getKey={(item, index) => String((item as { id?: string }).id ?? index)}
      renderItem={(item) => JSON.stringify(item, null, 2)}
    />
  );
}
