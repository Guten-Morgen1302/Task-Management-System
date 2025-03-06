import type React from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

