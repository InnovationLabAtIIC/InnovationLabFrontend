"use client";

import ResourceManageList from "@/components/Admin/ResourceManageList";
import { listEvents } from "@/lib/services/domain/events";
import type { EventResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function EventManageView() {
  return (
    <ResourceManageList<EventResponseDto>
      loadItems={listEvents}
      emptyMessage="No events available."
      loadingMessage="Loading events..."
      errorMessage="Unable to load events."
      getKey={(event, index) => String((event as { id?: string }).id ?? index)}
      renderItem={(event) => JSON.stringify(event, null, 2)}
    />
  );
}
