import React from "react";
import PageLayout from "@/components/primitives/PageLayout";
import PageHeader from "@/components/primitives/PageHeader";
import { publicLabText, publicPageTitles } from "@/constants/ui/public";

const Lab = () => {
  return (
    <PageLayout>
      <PageHeader title={publicPageTitles.lab} />
      <div className="bg-white p-12 min-h-[50vh] flex items-center justify-center">
        <p className="text-lg text-gray-600">{publicLabText.content}</p>
      </div>
    </PageLayout>
  );
};

export default Lab;
