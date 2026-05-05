"use client";

import ResourceManageList from "@/components/Admin/ResourceManageList";
import { listJourney } from "@/lib/services/domain/about";
import type { JourneyItemResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function JourneyManageView() {
  return (
    <ResourceManageList<JourneyItemResponseDto>
      loadItems={listJourney}
      emptyMessage="No journey items available."
      loadingMessage="Loading journey items..."
      errorMessage="Unable to load journey items."
      getKey={(item, index) => String((item as { id?: string }).id ?? index)}
      renderItem={(item) => JSON.stringify(item, null, 2)}
    />
  );
}
