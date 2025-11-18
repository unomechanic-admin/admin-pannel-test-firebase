"use client"

import { useQuery } from "@tanstack/react-query"
import type { Admin } from "@/lib/types"

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

async function getAdmins(): Promise<Admin[]> {
  // Mock data for now
  return [
    { id: "ADM01", name: "Super Admin", email: "super@unomechanic.com", role: "super_admin", lastLogin: "2023-06-10" },
    { id: "ADM02", name: "Support Lead", email: "support.lead@unomechanic.com", role: "support", lastLogin: "2023-06-10" },
    { id: "ADM03", name: "Admin User", email: "admin@unomechanic.com", role: "admin", lastLogin: "2023-06-09" },
  ]
}

export default function AdminsPage() {
  const { data, isLoading } = useQuery<Admin[]>({
    queryKey: ['admins'],
    queryFn: getAdmins,
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Admin Management</CardTitle>
          <CardDescription>Manage administrator accounts and roles.</CardDescription>
        </div>
        <Button>Add Admin</Button>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={data ?? []}
          isLoading={isLoading}
          filterColumnId="email"
          filterColumnName="Email"
        />
      </CardContent>
    </Card>
  )
}