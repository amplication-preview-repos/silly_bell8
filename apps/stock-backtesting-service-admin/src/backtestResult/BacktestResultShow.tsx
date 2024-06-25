import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { STRATEGY_TITLE_FIELD } from "../strategy/StrategyTitle";

export const BacktestResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
