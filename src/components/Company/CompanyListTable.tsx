"use client";

import React from "react";
import type { CompanyListItem } from "@/components/Company/companyList";

interface ColumnDef<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (item: T) => React.ReactNode;
  className?: string;
  headerClassName?: string;
  width?: string;
}

interface CompanyListTableProps {
  companies: CompanyListItem[];
}

export default function CompanyListTable({ companies }: CompanyListTableProps) {
  // Update this array to add/remove columns later.
  const columns: ColumnDef<CompanyListItem>[] = [
    {
      header: "Logo",
      width: "80px",
      className: "w-[80px]",
      cell: (company) => (
        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-md border border-black/10 bg-white shadow-sm">
          <img src={company.logoUrl} alt={company.name} className="h-full w-full object-cover" />
        </div>
      ),
    },
    {
      header: "Company",
      accessorKey: "name",
      width: "1.4fr",
      className: "min-w-[200px] text-[15px] font-semibold text-neutral-900",
      headerClassName: "min-w-[200px]",
    },
    {
      header: "Contact",
      width: "1.6fr",
      className: "min-w-[220px]",
      cell: (company) =>
        company.contactEmail ? (
          <a
            href={`mailto:${company.contactEmail}`}
            className="text-accent font-medium transition hover:underline"
          >
            {company.contactEmail}
          </a>
        ) : (
          <span className="text-neutral-400">N/A</span>
        ),
    },
    {
      header: "Interns",
      width: "140px",
      className: "w-[140px] text-center",
      cell: (company) => (
        <span className="inline-flex items-center justify-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {company.numberOfInterns ?? 0}
        </span>
      ),
    },
  ];

  const displayCompanies = companies
    .filter((company) => company.isMouSigned)
    .sort((a, b) => a.priority - b.priority);

  const gridTemplateColumns = columns.map((column) => column.width ?? "1fr").join(" ");

  if (!displayCompanies.length) {
    return (
      <div className="w-full rounded-xl border border-black/10 bg-white px-6 py-10 text-center text-sm text-neutral-500">
        No signed partners to display yet.
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_12px_40px_-26px_rgba(0,0,0,0.35)]">
      <div className="overflow-x-auto">
        <div className="min-w-[720px]">
          <div
            className="grid items-center gap-4 border-b border-black/10 bg-neutral-50/80 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500"
            style={{ gridTemplateColumns }}
          >
            {columns.map((column) => (
              <div key={column.header} className={column.headerClassName ?? ""}>
                {column.header}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {displayCompanies.map((company, rowIndex) => (
              <div
                key={`${company.name}-${rowIndex}`}
                className="grid items-center gap-4 border-b border-black/5 px-6 py-4 text-sm text-neutral-700 transition hover:bg-neutral-50/60 last:border-b-0"
                style={{ gridTemplateColumns }}
              >
                {columns.map((column, colIndex) => (
                  <div key={`${company.name}-${colIndex}`} className={column.className ?? ""}>
                    {column.cell
                      ? column.cell(company)
                      : column.accessorKey
                        ? (company[column.accessorKey] as React.ReactNode)
                        : null}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
