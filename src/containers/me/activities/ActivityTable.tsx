import React from "react";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/libs/utils";

interface ActivityTableProps {
  columns: Array<{
    key: string;
    label: string;
    isHiddenMobile?: boolean;
  }>;
  noDataMessage: string;
  data: never[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ columns, noDataMessage, data }) => (
  <>
    <Table>
      <TableHeader className="bg-background hover:bg-background ">
        <TableRow>
          {columns.map((column, index) => (
            <TableHead
              key={index}
              className={cn("text-black", {
                "hidden md:table-cell": column.isHiddenMobile,
              })}
            >
              {column.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            {columns.map((column, index) => (
              <td key={index} className="text-black">
                {item[column.key]}
              </td>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    {data.length === 0 && <p className="text-center py-4">{noDataMessage}</p>}
  </>
);

export default ActivityTable;
