import React, { useState } from "react";

// Types/Interfaces
import type { TableData } from "./interfaces/interfaces";
import type {SortState, TableColumnKey } from "./types/types";

// Custom hooks
import { useFetchData } from "./hooks/useFetchData";
import { useFilteredAndSortedData } from "./hooks/filteredAndSortedData";

// React Components
import { Table } from "./components/Table";

// CSS
import "./App.css";

const App: React.FC = () => {
  const { tableData, loading, error} = useFetchData(); 
  
  // States: filterText, tableData (from API), error, loading
  const [sort, setSort] = useState<SortState<TableData>>(null);
  const [filterText, setFilterText] = useState<string>("");
  
  const filteredAndSortedData = useFilteredAndSortedData(tableData, sort, filterText);

  // // The handleSort function makes sure the event handler is synced with the sort state
  const handleSort = (key: TableColumnKey) => {
    if (!sort || sort.key !== key) {
      // If no sort or new column clicked, sort ascending by that column
      setSort({ key, direction: 'asc' });
    } else if (sort.direction === 'asc') {
      // If currently ascending, switch to descending
      setSort({ key, direction: 'desc' });
    } else {
      // If currently descending, remove sorting (unsorted)
      setSort(null);
    }
  };

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to make things happen!</h2>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {!loading && !error && (
        <Table
          data={filteredAndSortedData}
          sort={sort}
          onSort={handleSort}
        />
      )}
    </div>
  );
};

export default App;
