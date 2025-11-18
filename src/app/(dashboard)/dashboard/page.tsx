import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { StatsCard } from "@/components/dashboard/stats-card"

const recentBookings = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    avatar: "https://picsum.photos/seed/user1/40/40",
    amount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    avatar: "https://picsum.photos/seed/user2/40/40",
    amount: "+$39.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "https://picsum.photos/seed/user3/40/40",
    amount: "+$299.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "https://picsum.photos/seed/user4/40/40",
    amount: "+$99.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    avatar: "https://picsum.photos/seed/user5/40/40",
    amount: "+$39.00",
  },
]

export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1% from last month"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Total Users"
          value="+2350"
          change="+180.1% from last month"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Bookings Completed"
          value="+12,234"
          change="+19% from last month"
          icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Active Mechanics"
          value="+573"
          change="+201 since last hour"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>
              You made 265 bookings this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentBookings.map((booking) => (
                <div key={booking.email} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={booking.avatar} alt="Avatar" data-ai-hint="person avatar" />
                    <AvatarFallback>{booking.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{booking.name}</p>
                    <p className="text-sm text-muted-foreground">{booking.email}</p>
                  </div>
                  <div className="ml-auto font-medium">{booking.amount}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
