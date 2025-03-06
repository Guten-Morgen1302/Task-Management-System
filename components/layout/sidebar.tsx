"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Calendar, Folder, Group, LayoutDashboard, ListTodo } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const mainNavItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "My Tasks", href: "/tasks", icon: ListTodo },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Team", href: "/teams", icon: Group },
  { name: "Reports", href: "/reports", icon: BarChart },
]

const projects = [
  { name: "Website Redesign", href: "/projects/website-redesign", color: "bg-primary", count: 8 },
  { name: "Mobile App", href: "/projects/mobile-app", color: "bg-primary/60", count: 5 },
  { name: "API Integration", href: "/projects/api-integration", color: "bg-muted-foreground", count: 3 },
]

export function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)

  return (
    <aside className="w-64 bg-muted/50 min-h-screen px-4 py-6 hidden md:block">
      <nav>
        <ul className="space-y-2">
          {mainNavItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "hover:bg-accent/50",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-8">
          <h3 className="text-xs uppercase text-muted-foreground font-semibold px-4 mb-2">Projects</h3>
          <ul className="space-y-1">
            {projects.map((project) => (
              <li key={project.href}>
                <Link
                  href={project.href}
                  className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full ${project.color} mr-2`}></div>
                    <span>{project.name}</span>
                  </div>
                  <Badge variant="outline" className="bg-accent text-accent-foreground">
                    {project.count}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}

