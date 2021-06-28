import { Redirect, Route } from "react-router-dom";
import useLocalStorage from "./useLocalstorage";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const [token] = useLocalStorage("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
