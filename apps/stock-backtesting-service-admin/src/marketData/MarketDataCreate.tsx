import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const MarketDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="closePrice" source="closePrice" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="highPrice" source="highPrice" />
        <NumberInput label="lowPrice" source="lowPrice" />
        <NumberInput label="openPrice" source="openPrice" />
        <NumberInput step={1} label="volume" source="volume" />
      </SimpleForm>
    </Create>
  );
};
