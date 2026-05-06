import React from "react";
import PageLayout from "@/components/primitives/PageLayout";
import PageHeader from "@/components/primitives/PageHeader";

const Lab = () => {
  return (
    <PageLayout>
      <PageHeader title="Lab" />
      <div className="bg-white p-12 min-h-[50vh] flex items-center justify-center">
        <p className="text-lg text-gray-600">Lab Page Content</p>
      </div>
    </PageLayout>
  );
};

export default Lab;
