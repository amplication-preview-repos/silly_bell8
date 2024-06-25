import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STRATEGY_TITLE_FIELD } from "./StrategyTitle";

export const StrategyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BacktestResult"
          target="strategyId"
          label="BacktestResults"
        >
          <Datagrid rowClick="show">
            <TextField label="backtestDate" source="backtestDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="finalCapital" source="finalCapital" />
            <TextField label="ID" source="id" />
            <TextField label="initialCapital" source="initialCapital" />
            <ReferenceField
              label="strategy"
              source="strategy.id"
              reference="Strategy"
            >
              <TextField source={STRATEGY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
