"use client"

import { useQuery } from "@tanstack/react-query"
import type { ActivityLog } from "@/lib/types"

import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./components/columns"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getLogs(): Promise<ActivityLog[]> {
  // Mock data for now
  return [
    { id: "LOG01", adminName: "Super Admin", action: "Banned User", target: "user:3", date: "2023-06-10T10:00:00Z" },
    { id: "LOG02", adminName: "Admin User", action: "Verified Mechanic", target: "mechanic:2", date: "2023-06-10T09:30:00Z" },
    { id: "LOG03", adminName: "Support Lead", action: "Refunded Payment", target: "payment:PAY004", date: "2023-06-09T15:00:00Z" },
    { id: "LOG04", adminName: "Super Admin", action: "Deleted Review", target: "review:REV03", date: "2023-06-09T11:00:00Z" },
  ]
}

export default function LogsPage() {
  const { data, isLoading } = useQuery<ActivityLog[]>({
    queryKey: ['logs'],
    queryFn: getLogs,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Logs</CardTitle>
        <CardDescription>Review all administrative actions taken on the platform.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={data ?? []}
          isLoading={isLoading}
          filterColumnId="action"
          filterColumnName="Action"
        />
      </CardContent>
    </Card>
  )
}
