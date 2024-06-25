import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StrategyList } from "./strategy/StrategyList";
import { StrategyCreate } from "./strategy/StrategyCreate";
import { StrategyEdit } from "./strategy/StrategyEdit";
import { StrategyShow } from "./strategy/StrategyShow";
import { MarketDataList } from "./marketData/MarketDataList";
import { MarketDataCreate } from "./marketData/MarketDataCreate";
import { MarketDataEdit } from "./marketData/MarketDataEdit";
import { MarketDataShow } from "./marketData/MarketDataShow";
import { BacktestResultList } from "./backtestResult/BacktestResultList";
import { BacktestResultCreate } from "./backtestResult/BacktestResultCreate";
import { BacktestResultEdit } from "./backtestResult/BacktestResultEdit";
import { BacktestResultShow } from "./backtestResult/BacktestResultShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"StockBacktestingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Strategy"
          list={StrategyList}
          edit={StrategyEdit}
          create={StrategyCreate}
          show={StrategyShow}
        />
        <Resource
          name="MarketData"
          list={MarketDataList}
          edit={MarketDataEdit}
          create={MarketDataCreate}
          show={MarketDataShow}
        />
        <Resource
          name="BacktestResult"
          list={BacktestResultList}
          edit={BacktestResultEdit}
          create={BacktestResultCreate}
          show={BacktestResultShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
