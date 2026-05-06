import React from "react";
import PageLayout from "@/components/primitives/PageLayout";
import PageHeader from "@/components/primitives/PageHeader";
import { publicLoginText, publicPageTitles } from "@/constants/ui/public";

const Login = () => {
  return (
    <PageLayout>
      <PageHeader title={publicPageTitles.login} />
      <div className="bg-white p-12 min-h-[50vh] flex items-center justify-center">
        <p className="text-lg text-gray-600">{publicLoginText.content}</p>
      </div>
    </PageLayout>
  );
};

export default Login;
