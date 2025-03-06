import Image from "next/image"
import Link from "next/link"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, FileText, Plus, Users } from "lucide-react"

const projects = [
  {
    id: "website-redesign",
    name: "Website Redesign",
    description: "Redesign the company website with a modern look and improved user experience",
    progress: 65,
    tasks: 8,
    members: 4,
    dueDate: "Jun 30, 2023",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      { initials: "ME", color: "bg-primary" },
      { initials: "JD", color: "bg-blue-600" },
      { initials: "AS", color: "bg-purple-600" },
      { initials: "RK", color: "bg-green-600" },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App Development",
    description: "Create a cross-platform mobile application for iOS and Android",
    progress: 40,
    tasks: 5,
    members: 3,
    dueDate: "Aug 15, 2023",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      { initials: "ME", color: "bg-primary" },
      { initials: "JD", color: "bg-blue-600" },
      { initials: "AS", color: "bg-purple-600" },
    ],
  },
  {
    id: "api-integration",
    name: "API Integration",
    description: "Integrate third-party APIs and develop internal API endpoints",
    progress: 80,
    tasks: 3,
    members: 2,
    dueDate: "Jul 10, 2023",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      { initials: "ME", color: "bg-primary" },
      { initials: "RK", color: "bg-green-600" },
    ],
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    description: "Create and distribute valuable content to attract and engage the target audience",
    progress: 25,
    tasks: 7,
    members: 3,
    dueDate: "Jul 25, 2023",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      { initials: "ME", color: "bg-primary" },
      { initials: "JD", color: "bg-blue-600" },
      { initials: "MJ", color: "bg-green-600" },
    ],
  },
  {
    id: "product-launch",
    name: "Product Launch",
    description: "Plan and execute the launch of our new product line",
    progress: 15,
    tasks: 10,
    members: 5,
    dueDate: "Sep 5, 2023",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      { initials: "ME", color: "bg-primary" },
      { initials: "JD", color: "bg-blue-600" },
      { initials: "AS", color: "bg-purple-600" },
      { initials: "RK", color: "bg-green-600" },
      { initials: "MJ", color: "bg-orange-600" },
    ],
  },
  {
    id: "user-research",
    name: "User Research",
    description: "Conduct user research to understand customer needs and pain points",
    progress: 50,
    tasks: 6,
    members: 2,
    dueDate: "Jul 15, 2023",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      { initials: "AS", color: "bg-purple-600" },
      { initials: "MJ", color: "bg-orange-600" },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-muted-foreground">Manage and track all your projects</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative h-40">
              <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h3 className="text-white font-bold text-xl">{project.name}</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>{project.tasks} tasks</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{project.members} members</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{project.dueDate}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div className="flex -space-x-2">
                {project.team.map((member, index) => (
                  <Avatar key={index} className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className={`${member.color} text-primary-foreground text-xs`}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/projects/${project.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}

