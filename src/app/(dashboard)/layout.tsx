"use client"

import { Sidebar } from "@/components/layout/sidebar"
import { TopBar } from "@/components/layout/topbar"
import { SidebarProvider, useSidebar } from "@/lib/sidebar-context"
import { cn } from "@/lib/utils"

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar()
  return (
    <div className={cn("flex-1 transition-all duration-300", collapsed ? "ml-[68px]" : "ml-[240px]")}>
      <TopBar />
      <main className="p-6">{children}</main>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50/40">
        <Sidebar />
        <DashboardContent>{children}</DashboardContent>
      </div>
    </SidebarProvider>
  )
}
