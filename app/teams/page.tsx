import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Mail, MessageSquare, Phone, Plus, Users } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    initials: "JD",
    tasks: 12,
    projects: ["Website Redesign", "Mobile App"],
    status: "Active",
  },
  {
    id: 2,
    name: "Alice Smith",
    role: "UI/UX Designer",
    email: "alice.smith@example.com",
    phone: "+1 (555) 234-5678",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    initials: "AS",
    tasks: 8,
    projects: ["Mobile App", "Product Launch"],
    status: "Active",
  },
  {
    id: 3,
    name: "Robert Kim",
    role: "Backend Developer",
    email: "robert.kim@example.com",
    phone: "+1 (555) 345-6789",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    initials: "RK",
    tasks: 10,
    projects: ["API Integration", "Website Redesign"],
    status: "On Leave",
  },
  {
    id: 4,
    name: "Michael Edwards",
    role: "Project Manager",
    email: "michael.edwards@example.com",
    phone: "+1 (555) 456-7890",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    initials: "ME",
    tasks: 15,
    projects: ["Website Redesign", "Mobile App", "API Integration", "Content Marketing", "Product Launch"],
    status: "Active",
  },
  {
    id: 5,
    name: "Maria Johnson",
    role: "Content Writer",
    email: "maria.johnson@example.com",
    phone: "+1 (555) 567-8901",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    initials: "MJ",
    tasks: 7,
    projects: ["Content Marketing", "Product Launch"],
    status: "Active",
  },
  {
    id: 6,
    name: "David Wilson",
    role: "QA Engineer",
    email: "david.wilson@example.com",
    phone: "+1 (555) 678-9012",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    initials: "DW",
    tasks: 9,
    projects: ["Mobile App", "API Integration"],
    status: "Active",
  },
]

export default function TeamsPage() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Team Members</h2>
          <p className="text-muted-foreground">Manage your team and their assignments</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Add Team Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-4">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
                <Badge
                  variant="outline"
                  className={`mt-2 ${
                    member.status === "Active" ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"
                  }`}
                >
                  {member.status}
                </Badge>
              </div>

              <div className="space-y-3 mt-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{member.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{member.phone}</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{member.tasks} assigned tasks</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{member.projects.length} projects</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button variant="outline" className="flex-1">
                  Profile
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}

