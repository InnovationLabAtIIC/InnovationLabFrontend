'use client';

import { useEffect, useState } from 'react';

import { LocalApiError } from '@/lib/services/bff-client';
import { listBanners } from '@/lib/services/domain/banners';
import type { BannerGetDTO } from '@/lib/services/generated/frontend/schemas';

export default function BannerManageView() {
  const [banners, setBanners] = useState<BannerGetDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadBanners = async () => {
      try {
        const items = await listBanners();
        if (isMounted) {
          setBanners(items);
        }
      } catch (err) {
        if (!isMounted) {
          return;
        }

        if (err instanceof LocalApiError) {
          setError(err.message);
          return;
        }

        setError('Unable to load banners.');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadBanners();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div className="text-sm text-(--neutral-500)">Loading banners...</div>;
  }

  if (error) {
    return (
      <div className="rounded-md border border-error-border bg-error-background p-4 text-sm text-error-foreground">
        {error}
      </div>
    );
  }

  if (banners.length === 0) {
    return <div className="text-sm text-(--neutral-500)">No banners available.</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {banners.map((banner, index) => (
        <div
          key={String((banner as { Id?: string; id?: string }).Id ?? (banner as { id?: string }).id ?? index)}
          className="rounded-lg border border-(--neutral-200) bg-white p-4 shadow-sm"
        >
          <pre className="whitespace-pre-wrap wrap-break-word text-xs leading-6 text-(--neutral-700)">
            {JSON.stringify(banner, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
}