import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Calendar, Download, LineChart, PieChart, Share2, Users } from "lucide-react"

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Reports</h2>
          <p className="text-muted-foreground">Analyze your team's performance and productivity</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">46</div>
                <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Completed Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">23</div>
                <p className="text-xs text-muted-foreground mt-1">+8% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">6</div>
                <p className="text-xs text-muted-foreground mt-1">+2 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Team Utilization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground mt-1">+5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5" />
                  Task Completion Trend
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <LineChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Task completion chart would be displayed here</p>
                  <p className="text-sm">Showing data for the last 30 days</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Task Distribution by Project
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <PieChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Task distribution chart would be displayed here</p>
                  <p className="text-sm">Showing current distribution across projects</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tasks" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Task Completion by Team Member
              </CardTitle>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <BarChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Task completion by team member chart would be displayed here</p>
                <p className="text-sm">Showing data for the current month</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Project Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Calendar className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Project timeline chart would be displayed here</p>
                <p className="text-sm">Showing timeline for all active projects</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Team performance metrics would be displayed here</p>
                <p className="text-sm">Showing performance data for the current quarter</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

