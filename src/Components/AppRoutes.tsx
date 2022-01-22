import React from "react";
import { Route } from "react-router-dom";
interface IAppRoutes {
  exact: boolean;
  Layout: React.FunctionComponent<{}>;
  Component: any;
  path: string;
}
const AppRoutes = ({ Layout, Component, ...rest }: IAppRoutes) => {
  return (
    <Route
      {...rest}
      render={(props: any) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default AppRoutes;
