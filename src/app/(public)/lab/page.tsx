import React from "react";
import PageLayout from "@/components/primitives/PageLayout";
import PageHeader from "@/components/primitives/PageHeader";

const Lab = () => {
  return (
    <PageLayout>
      <PageHeader title="Lab" />
      <div className="flex min-h-[50vh] items-center justify-center bg-white p-6 md:p-12">
        <p className="text-lg text-gray-600">Lab Page Content</p>
      </div>
    </PageLayout>
  );
};

export default Lab;
