import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const { signed } = useAuth();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        signed ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
