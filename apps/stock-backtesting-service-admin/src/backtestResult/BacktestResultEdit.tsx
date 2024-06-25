import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StrategyTitle } from "../strategy/StrategyTitle";

export const BacktestResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="backtestDate" source="backtestDate" />
        <NumberInput label="finalCapital" source="finalCapital" />
        <NumberInput label="initialCapital" source="initialCapital" />
        <ReferenceInput
          source="strategy.id"
          reference="Strategy"
          label="strategy"
        >
          <SelectInput optionText={StrategyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
