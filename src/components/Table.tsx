import type { TableProps } from "../interfaces/interfaces";
import type { TableColumnKey } from "../types/types";
import { TableColumns } from "../utils/config";

export const Table = ({ data, sort, onSort }:TableProps) => {

  const getSortDirection = (key: TableColumnKey) => {
    if (!sort || sort.key !== key) {
      return ' -UNSORTED';
    }
    return sort.direction === 'asc' ? ' -ASCENDING' : ' -DESCENDING';
  }
  
  return (
    <table>
      <thead>
        <tr>
          {TableColumns.map((col) => (
            <th key={col} onClick={() => onSort(col)}>
              {col} {getSortDirection(col)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            {TableColumns.map((col) => (
              <td key={col}>{user[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}