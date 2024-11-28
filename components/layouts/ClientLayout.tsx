// ClientLayout.tsx
"use client";

import { AppSidebar } from "@/components/layouts/sidebar/app-sidebar";
import { AppNavbar } from "@/components/layouts/navbar/app-navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ClientLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppNavbar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
