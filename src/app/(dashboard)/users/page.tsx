"use client"

import { useQuery } from "@tanstack/react-query"
import api from "@/lib/api"
import type { User } from "@/lib/types"

import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./components/columns"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getUsers(): Promise<User[]> {
  // Mock data for now
  return [
    { id: "1", name: "John Doe", email: "john.d@example.com", avatar: "", createdAt: "2023-01-15", status: "active" },
    { id: "2", name: "Jane Smith", email: "jane.s@example.com", avatar: "", createdAt: "2023-02-20", status: "active" },
    { id: "3", name: "Robert Brown", email: "robert.b@example.com", avatar: "", createdAt: "2023-03-10", status: "banned" },
    { id: "4", name: "Emily White", email: "emily.w@example.com", avatar: "", createdAt: "2023-04-05", status: "active" },
  ]
  // const { data } = await api.get('/users');
  // return data;
}

export default function UsersPage() {
  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Manage your platform users.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={users ?? []}
          isLoading={isLoading}
          filterColumnId="email"
          filterColumnName="Email"
        />
      </CardContent>
    </Card>
  )
}