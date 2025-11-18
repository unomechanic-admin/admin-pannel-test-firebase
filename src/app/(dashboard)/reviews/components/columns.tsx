"use client"

import { type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Review } from "@/lib/types"

export const columns: ColumnDef<Review>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "bookingId",
    header: "Booking ID",
  },
  {
    accessorKey: "customerName",
    header: "Customer",
  },
  {
    accessorKey: "mechanicName",
    header: "Mechanic",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => {
        const rating = row.getValue("rating") as number;
        return (
            <div className="flex items-center">
                {Array.from({length: rating}).map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                {Array.from({length: 5 - rating}).map((_, i) => <Star key={i} className="h-4 w-4 text-gray-300 fill-gray-300" />)}
            </div>
        )
    }
  },
  {
    accessorKey: "comment",
    header: "Comment",
    cell: ({ row }) => (
        <div className="max-w-[300px] truncate">
            {row.getValue("comment")}
        </div>
    )
  },
  {
    accessorKey: "date",
    header: "Date",
     cell: ({ row }) => {
        return new Date(row.getValue("date")).toLocaleDateString()
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View Booking</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete Review</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
