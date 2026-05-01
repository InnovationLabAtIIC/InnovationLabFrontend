import React from "react";
import AdminSideBar from "@/components/Admin/AdminSideBar";

export default function page() {
  return (
    <div className="flex h-dvh overflow-hidden bg-white">
      <AdminSideBar />
      <main className="min-w-0 flex-1 overflow-y-auto p-6">
        <div>Dashboard</div>
      </main>
    </div>
  );
}
