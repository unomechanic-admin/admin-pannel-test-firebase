"use client"

import { useQuery } from "@tanstack/react-query"
import type { Booking } from "@/lib/types"

import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./components/columns"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getBookings(): Promise<Booking[]> {
  // Mock data for now
  return [
    { id: "BK001", service: "Oil Change", customer: { name: "Alice", avatar: "https://picsum.photos/seed/c1/40/40" }, mechanic: { name: "Mike J", avatar: "https://picsum.photos/seed/m1/40/40" }, date: "2023-06-01", status: "completed", amount: 75.00 },
    { id: "BK002", service: "Brake Repair", customer: { name: "Bob", avatar: "https://picsum.photos/seed/c2/40/40" }, mechanic: { name: "James D", avatar: "https://picsum.photos/seed/m4/40/40" }, date: "2023-06-02", status: "in_progress", amount: 350.00 },
    { id: "BK003", service: "Tire Rotation", customer: { name: "Charlie", avatar: "https://picsum.photos/seed/c3/40/40" }, date: "2023-06-03", status: "pending", amount: 40.00 },
    { id: "BK004", service: "Engine Diagnostic", customer: { name: "Diana", avatar: "https://picsum.photos/seed/c4/40/40" }, mechanic: { name: "Mike J", avatar: "https://picsum.photos/seed/m1/40/40" }, date: "2023-06-04", status: "cancelled", amount: 100.00 },
  ]
}

export default function BookingsPage() {
  const { data, isLoading } = useQuery<Booking[]>({
    queryKey: ['bookings'],
    queryFn: getBookings,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookings</CardTitle>
        <CardDescription>View and manage all service bookings.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={data ?? []}
          isLoading={isLoading}
          filterColumnId="service"
          filterColumnName="Service"
        />
      </CardContent>
    </Card>
  )
}