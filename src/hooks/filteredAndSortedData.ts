import { useMemo } from "react";
import type { TableData } from "../interfaces/interfaces";
import type { SortState } from "../types/types";
import { TableColumns } from "../utils/config";

// Lets use one useMemo react hook to both filter and sort in one function as we do not want to re-render multiple times for each
export const useFilteredAndSortedData = (
  tableData: TableData[],
  sort: SortState<TableData> | null,
  filterText: string
) => {
  return useMemo(() => {
    const query = filterText.toLowerCase();

    const filtered = tableData.filter((entry) => {
      return TableColumns.some((key) => {
        const value = entry[key];
        return value?.toString().toLowerCase().includes(query);
      });
    });

    // Sort
    if (!sort) return filtered;
    const sorted = [...filtered].sort((a, b) => {
      const aVal = a[sort.key];
      const bVal = b[sort.key];

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sort.direction === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sort.direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      return 0; // fallback if types don't match
    });
    return sorted;
  },[tableData, filterText, sort]);
}