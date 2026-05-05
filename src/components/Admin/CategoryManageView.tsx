"use client";

import ResourceManageList from "@/components/Admin/ResourceManageList";
import { listCategories } from "@/lib/services/domain/categories";
import type { CategoryResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function CategoryManageView() {
  return (
    <ResourceManageList<CategoryResponseDto>
      loadItems={listCategories}
      emptyMessage="No categories available."
      loadingMessage="Loading categories..."
      errorMessage="Unable to load categories."
      getKey={(category, index) =>
        String((category as { id?: string }).id ?? index)
      }
      renderItem={(category) => JSON.stringify(category, null, 2)}
    />
  );
}
