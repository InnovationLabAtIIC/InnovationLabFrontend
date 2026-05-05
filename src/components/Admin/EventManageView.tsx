"use client";

import { useEffect, useState } from "react";

import { LocalApiError } from "@/lib/services/bff-client";
import { listEvents } from "@/lib/services/domain/events";
import type { EventResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function EventManageView() {
  const [events, setEvents] = useState<EventResponseDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadEvents = async () => {
      try {
        const items = await listEvents();
        if (isMounted) {
          setEvents(items);
        }
      } catch (err) {
        if (!isMounted) {
          return;
        }

        if (err instanceof LocalApiError) {
          setError(err.message);
          return;
        }

        setError("Unable to load events.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="text-sm text-(--neutral-500)">Loading events...</div>
    );
  }

  if (error) {
    return (
      <div className="rounded-md border border-error-border bg-error-background p-4 text-sm text-error-foreground">
        {error}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-sm text-(--neutral-500)">No events available.</div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {events.map((event, index) => (
        <div
          key={String((event as { id?: string }).id ?? index)}
          className="rounded-lg border border-(--neutral-200) bg-white p-4 shadow-sm"
        >
          <pre className="whitespace-pre-wrap wrap-break-word text-xs leading-6 text-(--neutral-700)">
            {JSON.stringify(event, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
}
