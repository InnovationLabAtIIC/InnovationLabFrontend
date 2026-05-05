import LatestEventsList, {
  type LatestEventItem,
} from "@/components/Events/LatestEventsList";

interface LatestEventsSectionProps {
  events: LatestEventItem[];
}

export default function LatestEventsSection({
  events,
}: LatestEventsSectionProps) {
  return (
    <div className="mx-ds-5 mt-ds-6 mb-ds-6">
      <LatestEventsList events={events} />
    </div>
  );
}
