"use client";

import ResourceManageList from "@/components/Admin/ResourceManageList";
import { listFaqs } from "@/lib/services/domain/faqs";
import type { FaqResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function FaqManageView() {
  return (
    <ResourceManageList<FaqResponseDto>
      loadItems={listFaqs}
      emptyMessage="No FAQs available."
      loadingMessage="Loading FAQs..."
      errorMessage="Unable to load FAQs."
      getKey={(item, index) => String((item as { id?: string }).id ?? index)}
      renderItem={(item) => JSON.stringify(item, null, 2)}
    />
  );
}
