"use client";

import { useEffect, useState } from "react";

import { LocalApiError } from "@/lib/services/bff-client";
import { listCategories } from "@/lib/services/domain/categories";
import type { CategoryResponseDto } from "@/lib/services/generated/frontend/schemas";

export default function CategoryManageView() {
  const [categories, setCategories] = useState<CategoryResponseDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadCategories = async () => {
      try {
        const items = await listCategories();
        if (isMounted) {
          setCategories(items);
        }
      } catch (err) {
        if (!isMounted) {
          return;
        }

        if (err instanceof LocalApiError) {
          setError(err.message);
          return;
        }

        setError("Unable to load categories.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="text-sm text-(--neutral-500)">Loading categories...</div>
    );
  }

  if (error) {
    return (
      <div className="rounded-md border border-error-border bg-error-background p-4 text-sm text-error-foreground">
        {error}
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="text-sm text-(--neutral-500)">
        No categories available.
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {categories.map((category, index) => (
        <div
          key={String((category as { id?: string }).id ?? index)}
          className="rounded-lg border border-(--neutral-200) bg-white p-4 shadow-sm"
        >
          <pre className="whitespace-pre-wrap wrap-break-word text-xs leading-6 text-(--neutral-700)">
            {JSON.stringify(category, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
}
