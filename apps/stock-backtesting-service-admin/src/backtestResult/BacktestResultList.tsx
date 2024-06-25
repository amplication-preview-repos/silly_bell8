import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STRATEGY_TITLE_FIELD } from "../strategy/StrategyTitle";

export const BacktestResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BacktestResults"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
