
export type SortDirection = "asc" | "desc" | null;

export type SortState<TableColumns> = { key: keyof TableColumns; direction: SortDirection } | null;

export type TableColumnKey = 'city' | 'state' | 'country' | 'postcode' | 'number' | 'name' | 'latitude' | 'longitude';

