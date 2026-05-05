'use client';

import ResourceManageList from "@/components/Admin/ResourceManageList";
import { listTestimonials } from "@/lib/services/domain/testimonials";
import type { TestimonialResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function TestimonialManageView() {
  return (
    <ResourceManageList<TestimonialResponseDto>
      loadItems={listTestimonials}
      emptyMessage="No testimonials available."
      loadingMessage="Loading testimonials..."
      errorMessage="Unable to load testimonials."
      getKey={(testimonial, index) =>
        String((testimonial as { id?: string }).id ?? index)
      }
      renderItem={(testimonial) => JSON.stringify(testimonial, null, 2)}
    />
  );
}