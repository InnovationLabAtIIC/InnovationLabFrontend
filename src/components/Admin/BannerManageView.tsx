"use client";

import ResourceManageList from "@/components/Admin/ResourceManageList";
import { listBanners } from '@/lib/services/domain/banners';
import type { BannerGetDTO } from '@/lib/services/generated/frontend/schemas';

export default function BannerManageView() {
  return (
    <ResourceManageList<BannerGetDTO>
      loadItems={listBanners}
      emptyMessage="No banners available."
      loadingMessage="Loading banners..."
      errorMessage="Unable to load banners."
      getKey={(banner, index) =>
        String((banner as { Id?: string; id?: string }).Id ?? (banner as { id?: string }).id ?? index)
      }
      renderItem={(banner) => JSON.stringify(banner, null, 2)}
    />
  );
}