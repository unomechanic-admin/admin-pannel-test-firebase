"use client"

import { useQuery } from "@tanstack/react-query"
import type { Payment } from "@/lib/types"

import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./components/columns"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getPayments(): Promise<Payment[]> {
  // Mock data for now
  return [
    { id: "PAY001", bookingId: "BK001", customerName: "Alice", amount: 75.00, date: "2023-06-01", status: "succeeded" },
    { id: "PAY002", bookingId: "BK002", customerName: "Bob", amount: 350.00, date: "2023-06-02", status: "succeeded" },
    { id: "PAY003", bookingId: "BK003", customerName: "Charlie", amount: 40.00, date: "2023-06-03", status: "pending" },
    { id: "PAY004", bookingId: "BK004", customerName: "Diana", amount: 100.00, date: "2023-06-04", status: "refunded" },
  ]
}

export default function PaymentsPage() {
  const { data, isLoading } = useQuery<Payment[]>({
    queryKey: ['payments'],
    queryFn: getPayments,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payments</CardTitle>
        <CardDescription>Track and manage all payments and refunds.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={data ?? []}
          isLoading={isLoading}
          filterColumnId="customerName"
          filterColumnName="Customer"
        />
      </CardContent>
    </Card>
  )
}