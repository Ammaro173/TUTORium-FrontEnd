// If the user is logged in, they only should be able to access the private route, otherwise they should be redirected to the Login Page. We require a private route component that will make this possible.


import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


const PrivateRoute = ({ children, ...rest }) => {
    let { user } = useContext(AuthContext);
    return <Route {...rest}>{!user ? <Redirect to="/Login" /> : children}</Route>;
  };
  

  // All this code does is that it checks whether user is present or not. If the user is present, then it will pass all the props to the child component and that route will be rendered. Otherwise, it will redirect to the login page.
  
  export default PrivateRoute;