import type { User, TableData } from "../interfaces/interfaces";

export const mapUserToTableData = (user: User): TableData => {
  return {
    id: user.login.uuid,
    city: user.location.city,
    state: user.location.state,
    country: user.location.country,
    postcode: user.location.postcode,
    number: user.location.street.number,
    name: user.location.street.name,
    latitude: user.location.coordinates.latitude,
    longitude: user.location.coordinates.longitude,
  };
}