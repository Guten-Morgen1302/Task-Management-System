import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Edit, Filter, MoreVertical, Plus, Share } from "lucide-react"

const tasks = [
  {
    id: 1,
    title: "Update user dashboard with new analytics",
    description: "Implement the new analytics widgets and update the dashboard layout",
    project: { name: "Website Redesign", color: "bg-blue-500/20 text-blue-500" },
    priority: { level: "High", color: "bg-red-500/20 text-red-500" },
    dueDate: "Today",
    dueDateColor: "text-red-500",
    assignee: { initials: "JD", color: "bg-primary" },
  },
  {
    id: 2,
    title: "Create wireframes for mobile app",
    description: "Design wireframes for the new mobile app including user flows and key screens",
    project: { name: "Mobile App", color: "bg-purple-500/20 text-purple-500" },
    priority: { level: "Medium", color: "bg-yellow-500/20 text-yellow-500" },
    dueDate: "Tomorrow",
    dueDateColor: "text-foreground",
    assignee: { initials: "JD", color: "bg-primary" },
  },
  {
    id: 3,
    title: "Write content for blog post on new features",
    description: "Create engaging content highlighting the latest platform features and benefits",
    project: { name: "Content Marketing", color: "bg-green-500/20 text-green-500" },
    priority: { level: "Low", color: "bg-blue-500/20 text-blue-500" },
    dueDate: "Jul 23",
    dueDateColor: "text-foreground",
    assignee: { initials: "MJ", color: "bg-green-600" },
  },
  {
    id: 4,
    title: "Prepare presentation for stakeholders",
    description: "Create a comprehensive presentation outlining project goals, timeline, and expected outcomes",
    project: { name: "Product Launch", color: "bg-orange-500/20 text-orange-500" },
    priority: { level: "High", color: "bg-red-500/20 text-red-500" },
    dueDate: "Jul 25",
    dueDateColor: "text-foreground",
    assignee: { initials: "AS", color: "bg-purple-600" },
  },
  {
    id: 5,
    title: "Optimize website performance",
    description: "Improve loading times and overall site performance through code optimization",
    project: { name: "Website Redesign", color: "bg-blue-500/20 text-blue-500" },
    priority: { level: "Medium", color: "bg-yellow-500/20 text-yellow-500" },
    dueDate: "Jul 27",
    dueDateColor: "text-foreground",
    assignee: { initials: "RK", color: "bg-blue-600" },
  },
  {
    id: 6,
    title: "Create API documentation",
    description: "Document all API endpoints, parameters, and responses",
    project: { name: "Mobile App", color: "bg-purple-500/20 text-purple-500" },
    priority: { level: "Medium", color: "bg-yellow-500/20 text-yellow-500" },
    dueDate: "Completed",
    dueDateColor: "text-green-500",
    assignee: { initials: "JD", color: "bg-primary" },
    completed: true,
  },
]

export default function TasksPage() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">My Tasks</h2>
          <p className="text-muted-foreground">Manage and track all your tasks</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          New Task
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold">All Tasks</h3>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-2 bg-muted">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span>Completed: 16</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 bg-muted">
                <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                <span>In Progress: 5</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 bg-muted">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <span>Overdue: 3</span>
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Sort</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <div className="p-4 bg-muted/50 border-b">
          <div className="grid grid-cols-12 gap-4 text-muted-foreground text-sm font-medium">
            <div className="col-span-1"></div>
            <div className="col-span-5">Task</div>
            <div className="col-span-2">Project</div>
            <div className="col-span-1">Priority</div>
            <div className="col-span-1">Due Date</div>
            <div className="col-span-1">Assigned</div>
            <div className="col-span-1">Actions</div>
          </div>
        </div>

        <CardContent className="p-0">
          <div className="divide-y">
            {tasks.map((task) => (
              <div key={task.id} className="p-4 hover:bg-muted/50 transition-colors">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-1 flex items-center justify-center">
                    <Checkbox checked={task.completed} />
                  </div>
                  <div className="col-span-5">
                    <h4 className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                      {task.title}
                    </h4>
                    <p className={`text-sm text-muted-foreground mt-1 ${task.completed ? "line-through" : ""}`}>
                      {task.description}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <Badge variant="outline" className={task.project.color}>
                      {task.project.name}
                    </Badge>
                  </div>
                  <div className="col-span-1">
                    <Badge variant="outline" className={task.priority.color}>
                      {task.priority.level}
                    </Badge>
                  </div>
                  <div className="col-span-1">
                    <span className={task.dueDateColor}>{task.dueDate}</span>
                  </div>
                  <div className="col-span-1">
                    <div className="flex justify-center">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className={`${task.assignee.color} text-primary-foreground`}>
                          {task.assignee.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex justify-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}

