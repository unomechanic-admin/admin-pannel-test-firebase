"use client"

import { useQuery } from "@tanstack/react-query"
import type { Service } from "@/lib/types"

import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./components/columns"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

async function getServices(): Promise<Service[]> {
  // Mock data for now
  return [
    { id: "SVC01", name: "Standard Oil Change", description: "Basic oil and filter change.", price: 75.00, category: "Maintenance", duration: 30, isPopular: true },
    { id: "SVC02", name: "Brake Pad Replacement", description: "Front and rear brake pad replacement.", price: 350.00, category: "Repairs", duration: 120, isPopular: true },
    { id: "SVC03", name: "Tire Rotation", description: "Rotate all four tires.", price: 40.00, category: "Maintenance", duration: 20, isPopular: false },
    { id: "SVC04", name: "Engine Diagnostic", description: "Full engine computer diagnostic.", price: 100.00, category: "Diagnostics", duration: 60, isPopular: false },
  ]
}

export default function ServicesPage() {
  const { data, isLoading } = useQuery<Service[]>({
    queryKey: ['services'],
    queryFn: getServices,
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Services</CardTitle>
          <CardDescription>Manage the service catalog offered to customers.</CardDescription>
        </div>
        <Button>Add Service</Button>
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