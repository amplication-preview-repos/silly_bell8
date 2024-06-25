import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const MarketDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="closePrice" source="closePrice" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="highPrice" source="highPrice" />
        <NumberInput label="lowPrice" source="lowPrice" />
        <NumberInput label="openPrice" source="openPrice" />
        <NumberInput step={1} label="volume" source="volume" />
      </SimpleForm>
    </Edit>
  );
};
