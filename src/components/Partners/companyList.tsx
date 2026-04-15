import CompanyCard from "@/components/Partners/companyCard";

export default function companyList() {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 bg-background py-4 sm:grid-cols-2 lg:grid-cols-3">
        <CompanyCard
          topText=""
          imageUrl="https://images.unsplash.com/photo-1738490686724-8531f6912fc9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxXb3JrJTIwZmFzdC4lMjBMaXZlJTIwc2xvd3xlbnwwfHwwfHx8MA%3D%3D?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          companyName="Company Name"
          companyDetails="From zero to extraordinary. Let's create your digital reality."
          internsCount={8}
        />
      </div>
    </>
  );
}
