import CompanyCard from "@/components/Partners/companyCard";

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
  const getCardBgClass = (index: number) => {
    const patternIndex = index % 4;

    if (patternIndex === 0) {
      return "bg-[#FFFFFF] sm:bg-[#FFFFFF] lg:bg-[#FFFFFF]";
    }

    if (patternIndex === 1) {
      return "bg-[#F3F3F3] sm:bg-[#F3F3F3] lg:bg-[#F3F3F3]";
    }

    if (patternIndex === 2) {
      return "bg-[#FFFFFF] sm:bg-[#F3F3F3] lg:bg-[#FFFFFF]";
    }
    return "bg-[#F3F3F3] sm:bg-[#FFFFFF] lg:bg-[#F3F3F3]";
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-0 border border-[#DFDFDF] py-0 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            topText=""
            imageUrl={company.imageUrl}
            companyName={company.companyName}
            companyDetails={company.companyDetails}
            internsCount={company.internsCount}
            className={getCardBgClass(index)}
          />
        ))}
      </div>
    </>
  );
}
