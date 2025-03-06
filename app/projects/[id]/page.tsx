import Link from "next/link"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Edit,
  Eye,
  FileText,
  LinkIcon,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Share2,
} from "lucide-react"

// Project data
const projects = {
  "website-redesign": {
    id: "website-redesign",
    name: "Website Redesign",
    description: "Redesign the company website with a modern look and improved user experience",
    longDescription:
      "This project aims to completely overhaul our existing website with a fresh, modern design that better represents our brand and improves the overall user experience. The redesign will focus on responsive layouts, improved navigation, faster loading times, and better conversion optimization.",
    progress: 65,
    tasks: 8,
    members: 4,
    startDate: "Apr 15, 2023",
    dueDate: "Jun 30, 2023",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      {
        initials: "ME",
        name: "Michael Edwards",
        role: "Project Manager",
        color: "bg-primary",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "JD",
        name: "John Doe",
        role: "Frontend Developer",
        color: "bg-blue-600",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "AS",
        name: "Alice Smith",
        role: "UI/UX Designer",
        color: "bg-purple-600",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "RK",
        name: "Robert Kim",
        role: "Backend Developer",
        color: "bg-green-600",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    taskList: [
      {
        id: 1,
        title: "Update user dashboard with new analytics",
        status: "In Progress",
        priority: "High",
        assignee: "JD",
        dueDate: "May 15, 2023",
      },
      {
        id: 2,
        title: "Redesign homepage layout",
        status: "Completed",
        priority: "High",
        assignee: "AS",
        dueDate: "May 5, 2023",
      },
      {
        id: 3,
        title: "Optimize website performance",
        status: "In Progress",
        priority: "Medium",
        assignee: "RK",
        dueDate: "May 27, 2023",
      },
      {
        id: 4,
        title: "Implement responsive design for mobile",
        status: "In Progress",
        priority: "High",
        assignee: "JD",
        dueDate: "May 20, 2023",
      },
      {
        id: 5,
        title: "Create new product showcase section",
        status: "Not Started",
        priority: "Medium",
        assignee: "AS",
        dueDate: "Jun 5, 2023",
      },
      {
        id: 6,
        title: "Update contact forms and validation",
        status: "Not Started",
        priority: "Low",
        assignee: "JD",
        dueDate: "Jun 10, 2023",
      },
      {
        id: 7,
        title: "Implement analytics tracking",
        status: "Not Started",
        priority: "Medium",
        assignee: "RK",
        dueDate: "Jun 15, 2023",
      },
      {
        id: 8,
        title: "Conduct user testing and gather feedback",
        status: "Not Started",
        priority: "High",
        assignee: "ME",
        dueDate: "Jun 25, 2023",
      },
    ],
    files: [
      {
        id: 1,
        name: "Website_Requirements.pdf",
        type: "pdf",
        size: "2.4 MB",
        uploadedBy: "Michael Edwards",
        date: "Apr 16, 2023",
        icon: "text-blue-500",
      },
      {
        id: 2,
        name: "Design_Mockups.zip",
        type: "zip",
        size: "15.8 MB",
        uploadedBy: "Alice Smith",
        date: "Apr 20, 2023",
        icon: "text-green-500",
      },
      {
        id: 3,
        name: "Project_Timeline.xlsx",
        type: "excel",
        size: "1.2 MB",
        uploadedBy: "Michael Edwards",
        date: "Apr 18, 2023",
        icon: "text-purple-500",
      },
      {
        id: 4,
        name: "Brand_Guidelines.pdf",
        type: "pdf",
        size: "4.7 MB",
        uploadedBy: "Alice Smith",
        date: "Apr 22, 2023",
        icon: "text-blue-500",
      },
      {
        id: 5,
        name: "Current_Website_Analysis.docx",
        type: "word",
        size: "3.1 MB",
        uploadedBy: "John Doe",
        date: "Apr 25, 2023",
        icon: "text-blue-500",
      },
    ],
    activities: [
      { id: 1, user: "Michael Edwards", action: "created the project", date: "Apr 15, 2023", time: "10:30 AM" },
      { id: 2, user: "Alice Smith", action: "uploaded Design_Mockups.zip", date: "Apr 20, 2023", time: "2:45 PM" },
      {
        id: 3,
        user: "John Doe",
        action: 'completed task "Redesign homepage layout"',
        date: "May 5, 2023",
        time: "11:15 AM",
      },
      {
        id: 4,
        user: "Robert Kim",
        action: 'started working on "Optimize website performance"',
        date: "May 10, 2023",
        time: "9:20 AM",
      },
      {
        id: 5,
        user: "John Doe",
        action: 'commented on "Update user dashboard with new analytics"',
        date: "May 12, 2023",
        time: "3:30 PM",
        comment: "I've started implementing the new charts. Should be ready for review by tomorrow.",
      },
    ],
  },
  "mobile-app": {
    id: "mobile-app",
    name: "Mobile App Development",
    description: "Create a cross-platform mobile application for iOS and Android",
    longDescription:
      "This project involves developing a cross-platform mobile application that will be available on both iOS and Android devices. The app will provide users with a streamlined mobile experience of our core services, including account management, product browsing, and customer support features.",
    progress: 40,
    tasks: 5,
    members: 3,
    startDate: "May 1, 2023",
    dueDate: "Aug 15, 2023",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      {
        initials: "ME",
        name: "Michael Edwards",
        role: "Project Manager",
        color: "bg-primary",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "JD",
        name: "John Doe",
        role: "Mobile Developer",
        color: "bg-blue-600",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "AS",
        name: "Alice Smith",
        role: "UI/UX Designer",
        color: "bg-purple-600",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    taskList: [
      {
        id: 1,
        title: "Create wireframes for mobile app",
        status: "In Progress",
        priority: "Medium",
        assignee: "AS",
        dueDate: "May 15, 2023",
      },
      {
        id: 2,
        title: "Develop user authentication flow",
        status: "In Progress",
        priority: "High",
        assignee: "JD",
        dueDate: "May 30, 2023",
      },
      {
        id: 3,
        title: "Design app icon and splash screen",
        status: "Completed",
        priority: "Low",
        assignee: "AS",
        dueDate: "May 10, 2023",
      },
      {
        id: 4,
        title: "Implement push notifications",
        status: "Not Started",
        priority: "Medium",
        assignee: "JD",
        dueDate: "Jun 15, 2023",
      },
      {
        id: 5,
        title: "Create API documentation",
        status: "Completed",
        priority: "Medium",
        assignee: "ME",
        dueDate: "May 5, 2023",
      },
    ],
    files: [
      {
        id: 1,
        name: "App_Requirements.pdf",
        type: "pdf",
        size: "3.2 MB",
        uploadedBy: "Michael Edwards",
        date: "May 2, 2023",
        icon: "text-blue-500",
      },
      {
        id: 2,
        name: "UI_Design_Kit.sketch",
        type: "sketch",
        size: "24.5 MB",
        uploadedBy: "Alice Smith",
        date: "May 8, 2023",
        icon: "text-orange-500",
      },
      {
        id: 3,
        name: "API_Documentation.pdf",
        type: "pdf",
        size: "1.8 MB",
        uploadedBy: "Michael Edwards",
        date: "May 5, 2023",
        icon: "text-blue-500",
      },
      {
        id: 4,
        name: "App_Wireframes.fig",
        type: "figma",
        size: "12.3 MB",
        uploadedBy: "Alice Smith",
        date: "May 12, 2023",
        icon: "text-purple-500",
      },
    ],
    activities: [
      { id: 1, user: "Michael Edwards", action: "created the project", date: "May 1, 2023", time: "9:15 AM" },
      {
        id: 2,
        user: "Michael Edwards",
        action: 'completed task "Create API documentation"',
        date: "May 5, 2023",
        time: "4:30 PM",
      },
      { id: 3, user: "Alice Smith", action: "uploaded UI_Design_Kit.sketch", date: "May 8, 2023", time: "11:20 AM" },
      {
        id: 4,
        user: "Alice Smith",
        action: 'completed task "Design app icon and splash screen"',
        date: "May 10, 2023",
        time: "2:45 PM",
      },
      {
        id: 5,
        user: "John Doe",
        action: 'commented on "Develop user authentication flow"',
        date: "May 14, 2023",
        time: "10:15 AM",
        comment: "I'm working on integrating OAuth for social login. Should have a prototype ready by next week.",
      },
    ],
  },
  "api-integration": {
    id: "api-integration",
    name: "API Integration",
    description: "Integrate third-party APIs and develop internal API endpoints",
    longDescription:
      "This project focuses on integrating various third-party APIs into our platform and developing robust internal API endpoints. The goal is to enhance our system's capabilities by connecting with external services and creating a solid foundation for our own API that can be used by our web and mobile applications.",
    progress: 80,
    tasks: 3,
    members: 2,
    startDate: "Apr 20, 2023",
    dueDate: "Jul 10, 2023",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      {
        initials: "ME",
        name: "Michael Edwards",
        role: "Project Manager",
        color: "bg-primary",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "RK",
        name: "Robert Kim",
        role: "Backend Developer",
        color: "bg-green-600",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    taskList: [
      {
        id: 1,
        title: "Implement user authentication API",
        status: "Completed",
        priority: "High",
        assignee: "RK",
        dueDate: "May 5, 2023",
      },
      {
        id: 2,
        title: "Integrate payment gateway API",
        status: "In Progress",
        priority: "High",
        assignee: "RK",
        dueDate: "Jun 10, 2023",
      },
      {
        id: 3,
        title: "Develop data synchronization endpoints",
        status: "Not Started",
        priority: "Medium",
        assignee: "RK",
        dueDate: "Jul 5, 2023",
      },
    ],
    files: [
      {
        id: 1,
        name: "API_Requirements.pdf",
        type: "pdf",
        size: "1.7 MB",
        uploadedBy: "Michael Edwards",
        date: "Apr 21, 2023",
        icon: "text-blue-500",
      },
      {
        id: 2,
        name: "Authentication_Flow.drawio",
        type: "drawio",
        size: "0.8 MB",
        uploadedBy: "Robert Kim",
        date: "Apr 25, 2023",
        icon: "text-red-500",
      },
      {
        id: 3,
        name: "Payment_Gateway_Documentation.pdf",
        type: "pdf",
        size: "3.5 MB",
        uploadedBy: "Robert Kim",
        date: "May 15, 2023",
        icon: "text-blue-500",
      },
    ],
    activities: [
      { id: 1, user: "Michael Edwards", action: "created the project", date: "Apr 20, 2023", time: "2:00 PM" },
      {
        id: 2,
        user: "Robert Kim",
        action: "uploaded Authentication_Flow.drawio",
        date: "Apr 25, 2023",
        time: "11:30 AM",
      },
      {
        id: 3,
        user: "Robert Kim",
        action: 'completed task "Implement user authentication API"',
        date: "May 5, 2023",
        time: "4:15 PM",
      },
      {
        id: 4,
        user: "Robert Kim",
        action: 'started working on "Integrate payment gateway API"',
        date: "May 10, 2023",
        time: "9:45 AM",
      },
      {
        id: 5,
        user: "Michael Edwards",
        action: 'commented on "Integrate payment gateway API"',
        date: "May 20, 2023",
        time: "3:30 PM",
        comment: "Make sure we're using the sandbox environment for testing before going live with the integration.",
      },
    ],
  },
  "content-marketing": {
    id: "content-marketing",
    name: "Content Marketing",
    description: "Create and distribute valuable content to attract and engage the target audience",
    longDescription:
      "This project focuses on developing a comprehensive content marketing strategy to attract and engage our target audience. We will create high-quality blog posts, social media content, videos, and other materials that provide value to our users while promoting our brand and products.",
    progress: 25,
    tasks: 7,
    members: 3,
    startDate: "May 5, 2023",
    dueDate: "Jul 25, 2023",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      {
        initials: "ME",
        name: "Michael Edwards",
        role: "Project Manager",
        color: "bg-primary",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "MJ",
        name: "Maria Johnson",
        role: "Content Writer",
        color: "bg-green-600",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "JD",
        name: "John Doe",
        role: "Social Media Specialist",
        color: "bg-blue-600",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    taskList: [
      {
        id: 1,
        title: "Develop content marketing strategy",
        status: "Completed",
        priority: "High",
        assignee: "ME",
        dueDate: "May 10, 2023",
      },
      {
        id: 2,
        title: "Create editorial calendar",
        status: "Completed",
        priority: "Medium",
        assignee: "MJ",
        dueDate: "May 15, 2023",
      },
      {
        id: 3,
        title: "Write blog post on new features",
        status: "In Progress",
        priority: "Medium",
        assignee: "MJ",
        dueDate: "May 25, 2023",
      },
      {
        id: 4,
        title: "Design social media graphics",
        status: "Not Started",
        priority: "Low",
        assignee: "JD",
        dueDate: "Jun 5, 2023",
      },
      {
        id: 5,
        title: "Create product demo video",
        status: "Not Started",
        priority: "High",
        assignee: "JD",
        dueDate: "Jun 20, 2023",
      },
      {
        id: 6,
        title: "Develop email newsletter template",
        status: "Not Started",
        priority: "Medium",
        assignee: "MJ",
        dueDate: "Jul 1, 2023",
      },
      {
        id: 7,
        title: "Analyze content performance",
        status: "Not Started",
        priority: "Low",
        assignee: "ME",
        dueDate: "Jul 20, 2023",
      },
    ],
    files: [
      {
        id: 1,
        name: "Content_Strategy.pdf",
        type: "pdf",
        size: "2.1 MB",
        uploadedBy: "Michael Edwards",
        date: "May 10, 2023",
        icon: "text-blue-500",
      },
      {
        id: 2,
        name: "Editorial_Calendar.xlsx",
        type: "excel",
        size: "1.3 MB",
        uploadedBy: "Maria Johnson",
        date: "May 15, 2023",
        icon: "text-green-500",
      },
      {
        id: 3,
        name: "Brand_Voice_Guidelines.docx",
        type: "word",
        size: "1.8 MB",
        uploadedBy: "Maria Johnson",
        date: "May 18, 2023",
        icon: "text-blue-500",
      },
    ],
    activities: [
      { id: 1, user: "Michael Edwards", action: "created the project", date: "May 5, 2023", time: "10:00 AM" },
      {
        id: 2,
        user: "Michael Edwards",
        action: 'completed task "Develop content marketing strategy"',
        date: "May 10, 2023",
        time: "4:30 PM",
      },
      {
        id: 3,
        user: "Maria Johnson",
        action: 'completed task "Create editorial calendar"',
        date: "May 15, 2023",
        time: "3:15 PM' },te: 'May 15, 2023",
        time: "3:15 PM",
      },
      {
        id: 4,
        user: "Maria Johnson",
        action: 'started working on "Write blog post on new features"',
        date: "May 20, 2023",
        time: "9:30 AM",
      },
      {
        id: 5,
        user: "John Doe",
        action: 'commented on "Create product demo video"',
        date: "May 22, 2023",
        time: "11:45 AM",
        comment:
          "I'll need access to the new product features to create an effective demo. Can we schedule a walkthrough?",
      },
    ],
  },
  "product-launch": {
    id: "product-launch",
    name: "Product Launch",
    description: "Plan and execute the launch of our new product line",
    longDescription:
      "This project involves planning and executing the launch of our new product line. We will coordinate marketing efforts, prepare sales materials, organize launch events, and ensure that all teams are aligned for a successful product introduction to the market.",
    progress: 15,
    tasks: 10,
    members: 5,
    startDate: "Jun 1, 2023",
    dueDate: "Sep 5, 2023",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      {
        initials: "ME",
        name: "Michael Edwards",
        role: "Project Manager",
        color: "bg-primary",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "JD",
        name: "John Doe",
        role: "Marketing Specialist",
        color: "bg-blue-600",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "AS",
        name: "Alice Smith",
        role: "Product Designer",
        color: "bg-purple-600",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "RK",
        name: "Robert Kim",
        role: "Sales Director",
        color: "bg-green-600",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "MJ",
        name: "Maria Johnson",
        role: "Content Writer",
        color: "bg-orange-600",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    taskList: [
      {
        id: 1,
        title: "Define product launch strategy",
        status: "Completed",
        priority: "High",
        assignee: "ME",
        dueDate: "Jun 10, 2023",
      },
      {
        id: 2,
        title: "Create marketing materials",
        status: "In Progress",
        priority: "High",
        assignee: "JD",
        dueDate: "Jul 5, 2023",
      },
      {
        id: 3,
        title: "Finalize product packaging",
        status: "In Progress",
        priority: "Medium",
        assignee: "AS",
        dueDate: "Jul 15, 2023",
      },
      {
        id: 4,
        title: "Prepare sales presentation",
        status: "Not Started",
        priority: "High",
        assignee: "RK",
        dueDate: "Jul 25, 2023",
      },
      {
        id: 5,
        title: "Write press release",
        status: "Not Started",
        priority: "Medium",
        assignee: "MJ",
        dueDate: "Aug 1, 2023",
      },
      {
        id: 6,
        title: "Plan launch event",
        status: "Not Started",
        priority: "High",
        assignee: "ME",
        dueDate: "Aug 10, 2023",
      },
      {
        id: 7,
        title: "Brief sales team",
        status: "Not Started",
        priority: "Medium",
        assignee: "RK",
        dueDate: "Aug 15, 2023",
      },
      {
        id: 8,
        title: "Create social media campaign",
        status: "Not Started",
        priority: "Medium",
        assignee: "JD",
        dueDate: "Aug 20, 2023",
      },
      {
        id: 9,
        title: "Prepare customer onboarding materials",
        status: "Not Started",
        priority: "Low",
        assignee: "MJ",
        dueDate: "Aug 25, 2023",
      },
      {
        id: 10,
        title: "Conduct final review meeting",
        status: "Not Started",
        priority: "High",
        assignee: "ME",
        dueDate: "Sep 1, 2023",
      },
    ],
    files: [
      {
        id: 1,
        name: "Launch_Strategy.pdf",
        type: "pdf",
        size: "3.2 MB",
        uploadedBy: "Michael Edwards",
        date: "Jun 10, 2023",
        icon: "text-blue-500",
      },
      {
        id: 2,
        name: "Marketing_Plan.pptx",
        type: "powerpoint",
        size: "5.7 MB",
        uploadedBy: "John Doe",
        date: "Jun 15, 2023",
        icon: "text-orange-500",
      },
      {
        id: 3,
        name: "Product_Packaging_Designs.ai",
        type: "illustrator",
        size: "18.3 MB",
        uploadedBy: "Alice Smith",
        date: "Jun 20, 2023",
        icon: "text-yellow-500",
      },
    ],
    activities: [
      { id: 1, user: "Michael Edwards", action: "created the project", date: "Jun 1, 2023", time: "9:00 AM" },
      {
        id: 2,
        user: "Michael Edwards",
        action: 'completed task "Define product launch strategy"',
        date: "Jun 10, 2023",
        time: "5:30 PM",
      },
      {
        id: 3,
        user: "John Doe",
        action: 'started working on "Create marketing materials"',
        date: "Jun 12, 2023",
        time: "10:15 AM",
      },
      {
        id: 4,
        user: "Alice Smith",
        action: 'started working on "Finalize product packaging"',
        date: "Jun 15, 2023",
        time: "2:00 PM",
      },
      {
        id: 5,
        user: "Robert Kim",
        action: 'commented on "Prepare sales presentation"',
        date: "Jun 18, 2023",
        time: "11:30 AM",
        comment:
          "I'll need the final product specifications and pricing information before I can start working on this.",
      },
    ],
  },
  "user-research": {
    id: "user-research",
    name: "User Research",
    description: "Conduct user research to understand customer needs and pain points",
    longDescription:
      "This project focuses on conducting comprehensive user research to better understand our customers' needs, pain points, and behaviors. We will use various research methods including surveys, interviews, and usability testing to gather insights that will inform our product development and marketing strategies.",
    progress: 50,
    tasks: 6,
    members: 2,
    startDate: "May 15, 2023",
    dueDate: "Jul 15, 2023",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    team: [
      {
        initials: "AS",
        name: "Alice Smith",
        role: "UX Researcher",
        color: "bg-purple-600",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        initials: "MJ",
        name: "Maria Johnson",
        role: "Data Analyst",
        color: "bg-orange-600",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    taskList: [
      {
        id: 1,
        title: "Create research plan",
        status: "Completed",
        priority: "High",
        assignee: "AS",
        dueDate: "May 20, 2023",
      },
      {
        id: 2,
        title: "Design user survey",
        status: "Completed",
        priority: "Medium",
        assignee: "AS",
        dueDate: "May 25, 2023",
      },
      {
        id: 3,
        title: "Conduct user interviews",
        status: "In Progress",
        priority: "High",
        assignee: "AS",
        dueDate: "Jun 15, 2023",
      },
      {
        id: 4,
        title: "Analyze survey results",
        status: "In Progress",
        priority: "Medium",
        assignee: "MJ",
        dueDate: "Jun 20, 2023",
      },
      {
        id: 5,
        title: "Create user personas",
        status: "Not Started",
        priority: "High",
        assignee: "AS",
        dueDate: "Jul 5, 2023",
      },
      {
        id: 6,
        title: "Present research findings",
        status: "Not Started",
        priority: "Medium",
        assignee: "AS",
        dueDate: "Jul 15, 2023",
      },
    ],
    files: [
      {
        id: 1,
        name: "Research_Plan.pdf",
        type: "pdf",
        size: "1.5 MB",
        uploadedBy: "Alice Smith",
        date: "May 20, 2023",
        icon: "text-blue-500",
      },
      {
        id: 2,
        name: "User_Survey_Questions.docx",
        type: "word",
        size: "0.8 MB",
        uploadedBy: "Alice Smith",
        date: "May 25, 2023",
        icon: "text-blue-500",
      },
      {
        id: 3,
        name: "Interview_Script.docx",
        type: "word",
        size: "1.2 MB",
        uploadedBy: "Alice Smith",
        date: "Jun 1, 2023",
        icon: "text-blue-500",
      },
      {
        id: 4,
        name: "Survey_Results_Raw.xlsx",
        type: "excel",
        size: "3.4 MB",
        uploadedBy: "Maria Johnson",
        date: "Jun 10, 2023",
        icon: "text-green-500",
      },
    ],
    activities: [
      { id: 1, user: "Alice Smith", action: "created the project", date: "May 15, 2023", time: "11:00 AM" },
      {
        id: 2,
        user: "Alice Smith",
        action: 'completed task "Create research plan"',
        date: "May 20, 2023",
        time: "4:45 PM",
      },
      {
        id: 3,
        user: "Alice Smith",
        action: 'completed task "Design user survey"',
        date: "May 25, 2023",
        time: "3:30 PM",
      },
      {
        id: 4,
        user: "Alice Smith",
        action: 'started working on "Conduct user interviews"',
        date: "Jun 1, 2023",
        time: "10:00 AM",
      },
      {
        id: 5,
        user: "Maria Johnson",
        action: 'started working on "Analyze survey results"',
        date: "Jun 10, 2023",
        time: "9:15 AM",
      },
    ],
  },
}

// Helper function to get status badge styling
const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-500/20 text-green-500"
    case "In Progress":
      return "bg-blue-500/20 text-blue-500"
    case "Not Started":
      return "bg-neutral-500/20 text-neutral-400"
    default:
      return "bg-neutral-500/20 text-neutral-400"
  }
}

// Helper function to get priority badge styling
const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-500/20 text-red-500"
    case "Medium":
      return "bg-yellow-500/20 text-yellow-500"
    case "Low":
      return "bg-blue-500/20 text-blue-500"
    default:
      return "bg-neutral-500/20 text-neutral-400"
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = params.id
  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </DashboardLayout>
    )
  }

  // Calculate task statistics
  const completedTasks = project.taskList.filter((task) => task.status === "Completed").length
  const inProgressTasks = project.taskList.filter((task) => task.status === "In Progress").length
  const notStartedTasks = project.taskList.filter((task) => task.status === "Not Started").length

  return (
    <DashboardLayout>
      <div className="mb-6">
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Button variant="ghost" size="sm" asChild className="p-0">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Projects
            </Link>
          </Button>
          <span>/</span>
          <span>{project.name}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button size="sm" className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Edit Project
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Progress</h3>
              <Badge variant="outline" className={getStatusBadge(project.status)}>
                {project.status}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Completion</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Timeline</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Start Date</p>
                  <p className="text-sm text-muted-foreground">{project.startDate}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Due Date</p>
                  <p className="text-sm text-muted-foreground">{project.dueDate}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Task Overview</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-muted p-3 rounded-lg text-center">
                <p className="text-xl font-bold">{completedTasks}</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
              <div className="bg-muted p-3 rounded-lg text-center">
                <p className="text-xl font-bold">{inProgressTasks}</p>
                <p className="text-xs text-muted-foreground">In Progress</p>
              </div>
              <div className="bg-muted p-3 rounded-lg text-center">
                <p className="text-xl font-bold">{notStartedTasks}</p>
                <p className="text-xs text-muted-foreground">Not Started</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tasks" className="mb-8">
        <TabsList>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>Project Tasks</CardTitle>
              <Button size="sm" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Task
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.taskList.map((task) => (
                  <div key={task.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${
                            task.status === "Completed" ? "bg-green-500/20" : "border border-muted-foreground"
                          }`}
                        >
                          {task.status === "Completed" && <CheckCircle className="h-4 w-4 text-green-500" />}
                        </div>
                        <div>
                          <h4
                            className={`font-medium ${task.status === "Completed" ? "line-through text-muted-foreground" : ""}`}
                          >
                            {task.title}
                          </h4>
                          <div className="flex flex-wrap gap-3 mt-2">
                            <Badge variant="outline" className={getPriorityBadge(task.priority)}>
                              {task.priority}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Due: {task.dueDate}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Avatar className="h-5 w-5 mr-1">
                                <AvatarFallback className="text-[10px]">{task.assignee}</AvatarFallback>
                              </Avatar>
                              <span>
                                {project.team.find((member) => member.initials === task.assignee)?.name ||
                                  task.assignee}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>Project Team</CardTitle>
              <Button size="sm" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Member
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.team.map((member, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className={`${member.color} text-primary-foreground`}>
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Profile
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>Project Files</CardTitle>
              <Button size="sm" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Upload File
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.files.map((file) => (
                  <div key={file.id} className="border rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className={`h-8 w-8 mr-3 ${file.icon}`} />
                      <div>
                        <h4 className="font-medium">{file.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Added by {file.uploadedBy} • {file.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {project.activities.map((activity) => (
                  <div key={activity.id} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/20 text-primary">
                          {activity.user
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">{activity.user}</p>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <p className="text-sm text-muted-foreground">
                          {activity.date} at {activity.time}
                        </p>
                      </div>
                      <p className="text-foreground">{activity.action}</p>
                      {activity.comment && (
                        <div className="mt-2 p-3 bg-muted rounded-lg">
                          <p className="text-sm">{activity.comment}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Description</h3>
                  <p className="text-muted-foreground">{project.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Key Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Project Status</h4>
                      <Badge variant="outline" className={getStatusBadge(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Timeline</h4>
                      <p>
                        {project.startDate} - {project.dueDate}
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Team Size</h4>
                      <p>{project.members} members</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Total Tasks</h4>
                      <p>{project.tasks} tasks</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Project Links</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <LinkIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                      <a href="#" className="text-primary hover:underline">
                        Project Documentation
                      </a>
                    </div>
                    <div className="flex items-center">
                      <LinkIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                      <a href="#" className="text-primary hover:underline">
                        Design Assets
                      </a>
                    </div>
                    <div className="flex items-center">
                      <LinkIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                      <a href="#" className="text-primary hover:underline">
                        GitHub Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

