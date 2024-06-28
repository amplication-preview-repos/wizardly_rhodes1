import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StoresList } from "./stores/StoresList";
import { StoresCreate } from "./stores/StoresCreate";
import { StoresEdit } from "./stores/StoresEdit";
import { StoresShow } from "./stores/StoresShow";
import { DeliveryPartnersList } from "./deliveryPartners/DeliveryPartnersList";
import { DeliveryPartnersCreate } from "./deliveryPartners/DeliveryPartnersCreate";
import { DeliveryPartnersEdit } from "./deliveryPartners/DeliveryPartnersEdit";
import { DeliveryPartnersShow } from "./deliveryPartners/DeliveryPartnersShow";
import { ProductsList } from "./products/ProductsList";
import { ProductsCreate } from "./products/ProductsCreate";
import { ProductsEdit } from "./products/ProductsEdit";
import { ProductsShow } from "./products/ProductsShow";
import { OrdersList } from "./orders/OrdersList";
import { OrdersCreate } from "./orders/OrdersCreate";
import { OrdersEdit } from "./orders/OrdersEdit";
import { OrdersShow } from "./orders/OrdersShow";
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
        title={"QuickCommercePlatform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Stores"
          list={StoresList}
          edit={StoresEdit}
          create={StoresCreate}
          show={StoresShow}
        />
        <Resource
          name="DeliveryPartners"
          list={DeliveryPartnersList}
          edit={DeliveryPartnersEdit}
          create={DeliveryPartnersCreate}
          show={DeliveryPartnersShow}
        />
        <Resource
          name="Products"
          list={ProductsList}
          edit={ProductsEdit}
          create={ProductsCreate}
          show={ProductsShow}
        />
        <Resource
          name="Orders"
          list={OrdersList}
          edit={OrdersEdit}
          create={OrdersCreate}
          show={OrdersShow}
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
