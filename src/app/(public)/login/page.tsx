import React from "react";
import PageLayout from "@/components/primitives/PageLayout";
import PageHeader from "@/components/primitives/PageHeader";

const Login = () => {
  return (
    <PageLayout>
      <PageHeader title="Login" />
      <div className="flex min-h-[50vh] items-center justify-center bg-white p-6 md:p-12">
        <p className="text-center text-base text-gray-600 md:text-lg">
          Feature Not For NOW -- Do Nothing HERE
        </p>
      </div>
    </PageLayout>
  );
};

export default Login;
