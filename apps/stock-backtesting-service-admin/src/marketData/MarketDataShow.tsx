import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MarketDataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="closePrice" source="closePrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="highPrice" source="highPrice" />
        <TextField label="ID" source="id" />
        <TextField label="lowPrice" source="lowPrice" />
        <TextField label="openPrice" source="openPrice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="volume" source="volume" />
      </SimpleShowLayout>
    </Show>
  );
};
