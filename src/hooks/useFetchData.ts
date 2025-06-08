import { useEffect, useState } from 'react';
import type { TableData, User } from "../interfaces/interfaces";
import { mapUserToTableData } from "../utils/mapUserToTableData";

export const useFetchData = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const api_url = import.meta.env.VITE_API_BASE_URL;

    const fetchData = async () => {
      try {
        const response = await fetch(api_url);
        const data = await response.json();

        // Assuming data.results is your users array
        const tableData: TableData[] = data.results.map((user: User) =>
          mapUserToTableData(user)
        );
        setTableData(tableData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { tableData, loading, error };
};