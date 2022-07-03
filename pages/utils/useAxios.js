import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";




const baseURL = "http://127.0.0.1:8000/api";



const useAxios = () => {
    const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);
  
    const axiosInstance = axios.create({
      baseURL,
      headers: { Authorization: `Bearer ${authTokens?.access}` }
    });
  
    axiosInstance.interceptors.request.use(async req => {
      const user = jwt_decode(authTokens.access);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  
      if (!isExpired) return req;
  
      const response = await axios.post(`${baseURL}/token/refresh/`, {
        refresh: authTokens.refresh
      });
  
      localStorage.setItem("authTokens", JSON.stringify(response.data));
  
      setAuthTokens(response.data);
      setUser(jwt_decode(response.data.access));
  
      req.headers.Authorization = `Bearer ${response.data.access}`;
      return req;
    });
  
    return axiosInstance;
  };
  
  export default useAxios;







// Access token lifespan is usually very less. So the user’s token will be valid for very small amount of time, and then it will expire, and the user will not be able to access all the private routes of the application.
// Approach: To solve this problem, we need a way such that we can intercept the request before it is sent to the server. We intercept the request, we see if the token is valid or not, if not valid we will request for a new token via refresh token, we will get new access token, and we will use that for the API request to the private route, and if the token valid, we use the same token to send request to the private route.