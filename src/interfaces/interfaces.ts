import type { SortState, TableColumnKey } from "../types/types";

export interface UserLocation {
  street : {
    number: number;
    name: string;
  };
  city : string;
  state : string;
  country : string;
  postcode : string;
  coordinates : {
    latitude : string;
    longitude : string;
  };
  timezone? : {
    offset : string;
    description : string;
  }
}

export interface User {
  gender?: string;
  name?: {
    title: string;
    first: string;
    last: string;
  };
  location: UserLocation;
  email?: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob?: {
    date: string;
    age: number;
  };
  registered?: {
    date: string;
    age: number;
  };
  phone?: string;
  cell?: string;
  id?: {
    name: string;
    value: string;
  };
  picture?: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat?: string;
};

export interface TableData {
  id: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
  number: number;
  name: string;
  latitude: string;
  longitude: string;
};

export interface TableProps {
  data: TableData[];
  sort: SortState<TableData> | null;
  onSort: (key: TableColumnKey) => void;
}