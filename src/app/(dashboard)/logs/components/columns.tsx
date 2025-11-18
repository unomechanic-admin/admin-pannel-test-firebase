"use client"

import { type ColumnDef } from "@tanstack/react-table"
import type { ActivityLog } from "@/lib/types"

export const columns: ColumnDef<ActivityLog>[] = [
  {
    accessorKey: "adminName",
    header: "Admin",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
  {
    accessorKey: "target",
    header: "Target",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
        return new Date(row.getValue("date")).toLocaleString()
    }
  },
]
