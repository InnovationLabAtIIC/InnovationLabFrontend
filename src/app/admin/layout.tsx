
import React from "react";
import AdminSideBar from "@/components/Admin/AdminSideBar";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="flex h-dvh overflow-hidden bg-white min-h-0">
				<AdminSideBar />
				<main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
			</div>
		</>
	);
}

