import CompanyCard from "@/components/Company/companyCard";

export interface CompanyListItem {
  companyName: string;
  companyDetails: string;
  internsCount: number;
  imageUrl: string;
}

interface CompanyListProps {
  companies: CompanyListItem[];
}

export default function companyList({ companies }: CompanyListProps) {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-0 border border-neutral-300 py-0 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            topText=""
            imageUrl={company.imageUrl}
            companyName={company.companyName}
            companyDetails={company.companyDetails}
            internsCount={company.internsCount}
            className="border border-gray-300"
          />
        ))}
      </div>
    </>
  );
}
