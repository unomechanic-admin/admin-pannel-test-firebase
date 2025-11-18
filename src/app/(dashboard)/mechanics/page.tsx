"use client"

import { useQuery } from "@tanstack/react-query"
import type { Mechanic } from "@/lib/types"

import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./components/columns"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getMechanics(): Promise<Mechanic[]> {
  // Mock data for now
  return [
    { id: "1", name: "Mike Johnson", email: "mike.j@mechanics.com", phone: "123-456-7890", avatar: "https://picsum.photos/seed/m1/40/40", status: "verified", specialties: ["Engine", "Transmission"], rating: 4.8, jobsCompleted: 120, earnings: 15000, memberSince: "2022-08-01" },
    { id: "2", name: "Chris Williams", email: "chris.w@mechanics.com", phone: "234-567-8901", avatar: "https://picsum.photos/seed/m2/40/40", status: "pending", specialties: ["Brakes"], rating: 0, jobsCompleted: 0, earnings: 0, memberSince: "2023-05-15" },
    { id: "3", name: "David Miller", email: "david.m@mechanics.com", phone: "345-678-9012", avatar: "https://picsum.photos/seed/m3/40/40", status: "suspended", specialties: ["Electrical", "A/C"], rating: 4.2, jobsCompleted: 85, earnings: 9500, memberSince: "2021-11-20" },
    { id: "4", name: "James Davis", email: "james.d@mechanics.com", phone: "456-789-0123", avatar: "https://picsum.photos/seed/m4/40/40", status: "verified", specialties: ["Tires", "Suspension"], rating: 4.9, jobsCompleted: 210, earnings: 25000, memberSince: "2020-03-10" },
  ]
}

export default function MechanicsPage() {
  const { data, isLoading } = useQuery<Mechanic[]>({
    queryKey: ['mechanics'],
    queryFn: getMechanics,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mechanics</CardTitle>
        <CardDescription>Manage and verify mechanics on the platform.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={data ?? []}
          isLoading={isLoading}
          filterColumnId="name"
          filterColumnName="Name"
        />
      </CardContent>
    </Card>
  )
}