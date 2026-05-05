"use client";

import ResourceManageList from "@/components/Admin/ResourceManageList";
import { listEvents } from "@/lib/services/domain/events";
import type { EventResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function EventRegistrationManageView() {
  return (
    <ResourceManageList<EventResponseDto>
      loadItems={listEvents}
      emptyMessage="No events available for registration management."
      loadingMessage="Loading events..."
      errorMessage="Unable to load events."
      getKey={(item, index) => String((item as { id?: string }).id ?? index)}
      renderItem={(item) => JSON.stringify(item, null, 2)}
    />
  );
}
