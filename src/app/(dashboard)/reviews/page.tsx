"use client"

import { useQuery } from "@tanstack/react-query"
import type { Review } from "@/lib/types"

import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./components/columns"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getReviews(): Promise<Review[]> {
  // Mock data for now
  return [
    { id: "REV01", bookingId: "BK001", customerName: "Alice", mechanicName: "Mike J", rating: 5, comment: "Great service, very fast!", date: "2023-06-02" },
    { id: "REV02", bookingId: "BK002", customerName: "Bob", mechanicName: "James D", rating: 4, comment: "Good work, but a bit pricey.", date: "2023-06-03" },
    { id: "REV03", bookingId: "BK005", customerName: "Eve", mechanicName: "Mike J", rating: 2, comment: "Left grease on my seat.", date: "2023-06-05" },
  ]
}

export default function ReviewsPage() {
  const { data, isLoading } = useQuery<Review[]>({
    queryKey: ['reviews'],
    queryFn: getReviews,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reviews</CardTitle>
        <CardDescription>Moderate customer reviews and feedback.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={data ?? []}
          isLoading={isLoading}
          filterColumnId="mechanicName"
          filterColumnName="Mechanic"
        />
      </CardContent>
    </Card>
  )
}
