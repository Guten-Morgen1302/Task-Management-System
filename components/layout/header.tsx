"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, LayoutDashboard, LogOut, Menu, MessageSquare, Search, Settings, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Tasks", href: "/tasks" },
  { name: "Projects", href: "/projects" },
  { name: "Teams", href: "/teams" },
  { name: "Calendar", href: "/calendar" },
  { name: "Reports", href: "/reports" },
]

export function Header() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="border-b">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">TaskFlow</h1>
          </Link>
        </div>

        <div className="relative hidden md:block max-w-md w-full mx-4">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tasks..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  3
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <div className="p-3 border-b">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                <div className="p-4 border-b hover:bg-accent/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-2 mr-3">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Task assigned to you</p>
                      <p className="text-sm text-muted-foreground">John assigned "Website Redesign" to you</p>
                      <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-b hover:bg-accent/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-2 mr-3">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">New comment</p>
                      <p className="text-sm text-muted-foreground">Sarah commented on "API Integration"</p>
                      <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-t">
                <Button variant="link" className="text-primary">
                  View all notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <div className="p-3 border-b">
                <h3 className="font-semibold">Messages</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                <div className="p-4 border-b hover:bg-accent/50 transition-colors">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground truncate">
                        Hey, how's the progress on the UI design?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 hover:bg-accent/50 transition-colors">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-primary/20 text-primary">AS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Alice Smith</p>
                      <p className="text-sm text-muted-foreground truncate">
                        Can we schedule a meeting about the next sprint?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-t">
                <Button variant="link" className="text-primary">
                  Open chat
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">ME</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <nav className="hidden md:flex border-t">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-3 transition-colors hover:text-primary hover:border-b-2 hover:border-primary ${
              pathname === item.href ? "text-primary border-b-2 border-primary font-medium" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

