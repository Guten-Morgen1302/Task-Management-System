import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart, CheckCircle, Clock, FileText, MessageSquare, PenSquare, Plus } from "lucide-react"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Michael! Here's your task overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-bold">12</h2>
                <p className="text-muted-foreground">Tasks assigned</p>
              </div>
              <div className="bg-primary/20 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-bold">7</h2>
                <p className="text-muted-foreground">In progress</p>
              </div>
              <div className="bg-primary/20 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-bold">4</h2>
                <p className="text-muted-foreground">In review</p>
              </div>
              <div className="bg-primary/20 p-3 rounded-lg">
                <PenSquare className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-bold">23</h2>
                <p className="text-muted-foreground">Completed</p>
              </div>
              <div className="bg-primary/20 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>Your Tasks</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="h-8">
                  <BarChart className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button size="sm" className="h-8">
                  <Plus className="h-4 w-4 mr-2" />
                  New Task
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded border border-primary/60 hover:bg-accent cursor-pointer transition-colors"></div>
                      <h3 className="font-medium">Update user dashboard with new analytics</h3>
                    </div>
                    <Badge>High</Badge>
                  </div>
                  <div className="mt-3 pl-8">
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Due: May 15, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>Website Redesign</span>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/20 text-primary text-xs">ME</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8 -ml-2">
                          <AvatarFallback className="bg-primary/20 text-primary text-xs">JD</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex items-center text-sm">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>3 comments</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded border border-primary/60 hover:bg-accent cursor-pointer transition-colors"></div>
                      <h3 className="font-medium">Implement user authentication flow</h3>
                    </div>
                    <Badge variant="outline">Medium</Badge>
                  </div>
                  <div className="mt-3 pl-8">
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Due: May 18, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>API Integration</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Progress value={40} className="h-2" />
                      <div className="flex justify-between text-xs mt-1">
                        <span>Progress</span>
                        <span>40%</span>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/20 text-primary text-xs">ME</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex items-center text-sm">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>5 comments</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded border border-primary/60 hover:bg-accent cursor-pointer transition-colors"></div>
                      <h3 className="font-medium">Design mobile app wireframes</h3>
                    </div>
                    <Badge variant="secondary">Low</Badge>
                  </div>
                  <div className="mt-3 pl-8">
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Due: May 22, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>Mobile App</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Progress value={60} className="h-2" />
                      <div className="flex justify-between text-xs mt-1">
                        <span>Progress</span>
                        <span>60%</span>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/20 text-primary text-xs">AS</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8 -ml-2">
                          <AvatarFallback className="bg-primary/20 text-primary text-xs">ME</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex items-center text-sm">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>2 comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button variant="link" className="text-primary">
                  View all tasks
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Team Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">John Doe</p>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <p className="text-sm text-muted-foreground">10 minutes ago</p>
                  </div>
                  <p className="text-foreground">Completed task "Setup development environment"</p>
                  <div className="mt-2 p-3 bg-muted rounded-lg">
                    <p className="text-sm">
                      All development environments are now set up for the team. Everyone should be able to start working
                      on their assigned tasks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/20 text-primary">AS</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">Alice Smith</p>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <p className="text-sm text-muted-foreground">1 hour ago</p>
                  </div>
                  <p className="text-foreground">Commented on "Design mobile app wireframes"</p>
                  <div className="mt-2 p-3 bg-muted rounded-lg">
                    <p className="text-sm">
                      I've added some initial sketches to the shared folder. Let me know what you think!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/20 text-primary">ME</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">You</p>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <p className="text-sm text-muted-foreground">3 hours ago</p>
                  </div>
                  <p className="text-foreground">Created task "Update user dashboard with new analytics"</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button variant="link" className="text-primary">
                View all activity
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Upcoming Deadlines</CardTitle>
          <Button variant="link" className="text-primary">
            View calendar
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-muted-foreground border-b">
                  <th className="pb-3 pr-4 font-medium">Task</th>
                  <th className="pb-3 px-4 font-medium">Project</th>
                  <th className="pb-3 px-4 font-medium">Due Date</th>
                  <th className="pb-3 px-4 font-medium">Status</th>
                  <th className="pb-3 px-4 font-medium">Assigned To</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4">Update user dashboard with new analytics</td>
                  <td className="py-3 px-4">Website Redesign</td>
                  <td className="py-3 px-4">May 15, 2023</td>
                  <td className="py-3 px-4">
                    <Badge>In Progress</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/20 text-primary text-xs">ME</AvatarFallback>
                      </Avatar>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Implement user authentication flow</td>
                  <td className="py-3 px-4">API Integration</td>
                  <td className="py-3 px-4">May 18, 2023</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline">In Review</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/20 text-primary text-xs">JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Design mobile app wireframes</td>
                  <td className="py-3 px-4">Mobile App</td>
                  <td className="py-3 px-4">May 22, 2023</td>
                  <td className="py-3 px-4">
                    <Badge variant="secondary">Not Started</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/20 text-primary text-xs">AS</AvatarFallback>
                      </Avatar>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}

