import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

// Helper function to generate calendar days
const generateCalendarDays = () => {
  const days = []
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  // Get the first day of the month
  const firstDay = new Date(currentYear, currentMonth, 1)
  const startingDay = firstDay.getDay() // 0 = Sunday, 1 = Monday, etc.

  // Get the number of days in the month
  const lastDay = new Date(currentYear, currentMonth + 1, 0)
  const totalDays = lastDay.getDate()

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDay; i++) {
    days.push({ day: "", isCurrentMonth: false })
  }

  // Add days of the current month
  for (let i = 1; i <= totalDays; i++) {
    days.push({
      day: i,
      isCurrentMonth: true,
      isToday: i === today.getDate(),
      hasEvents: [5, 12, 15, 20, 25].includes(i), // Sample days with events
    })
  }

  // Add empty cells to complete the last week if needed
  const remainingCells = 42 - days.length // 6 rows of 7 days
  for (let i = 0; i < remainingCells; i++) {
    days.push({ day: "", isCurrentMonth: false })
  }

  return days
}

const events = [
  {
    id: 1,
    title: "Team Meeting",
    time: "10:00 AM - 11:30 AM",
    type: "meeting",
    color: "bg-blue-500/20 text-blue-500",
  },
  {
    id: 2,
    title: "Project Deadline: Website Redesign",
    time: "5:00 PM",
    type: "deadline",
    color: "bg-red-500/20 text-red-500",
  },
  {
    id: 3,
    title: "Client Call: ABC Corp",
    time: "2:00 PM - 3:00 PM",
    type: "call",
    color: "bg-green-500/20 text-green-500",
  },
  {
    id: 4,
    title: "Review Mobile App Wireframes",
    time: "4:00 PM - 5:00 PM",
    type: "task",
    color: "bg-purple-500/20 text-purple-500",
  },
]

export default function CalendarPage() {
  const calendarDays = generateCalendarDays()
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const currentMonth = new Date().toLocaleString("default", { month: "long", year: "numeric" })

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Calendar</h2>
          <p className="text-muted-foreground">Manage your schedule and events</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          New Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>{currentMonth}</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {weekdays.map((day) => (
                  <div key={day} className="text-center font-medium text-sm py-2">
                    {day}
                  </div>
                ))}
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-square p-2 border ${
                      day.isCurrentMonth ? "bg-card" : "bg-muted/50 text-muted-foreground"
                    } ${day.isToday ? "border-primary" : "border-border"} relative`}
                  >
                    {day.day && (
                      <>
                        <span className="text-sm">{day.day}</span>
                        {day.hasEvents && (
                          <div className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-primary"></div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Today's Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border rounded-lg p-3">
                    <h4 className="font-medium">{event.title}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                      <Badge variant="outline" className={event.color}>
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

