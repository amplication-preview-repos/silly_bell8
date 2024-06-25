import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MarketDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MarketDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="closePrice" source="closePrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="highPrice" source="highPrice" />
        <TextField label="ID" source="id" />
        <TextField label="lowPrice" source="lowPrice" />
        <TextField label="openPrice" source="openPrice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="volume" source="volume" />
      </Datagrid>
    </List>
  );
};
