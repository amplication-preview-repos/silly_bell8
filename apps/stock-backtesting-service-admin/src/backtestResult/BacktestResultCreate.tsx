import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StrategyTitle } from "../strategy/StrategyTitle";

export const BacktestResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
