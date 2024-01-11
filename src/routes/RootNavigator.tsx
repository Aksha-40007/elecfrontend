// RootNavigator.tsx
import * as React from "react";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { useAppSelector } from "../store";
import { useNavigate } from "react-router-dom";

const RootNavigator: React.FC = () => {

  const [isAuthenticated,setIsAuthenticated] = React.useState<boolean>(false);
  //let isAuthenticated = !!localStorage.getItem("userRole");
  const authUser = useAppSelector((state)=>state.currentAuthUser.authUser);
  const navigate=useNavigate();
  React.useEffect(()=>{
   // console.log("Authuser",authUser ? true:false);
    setIsAuthenticated( authUser ? true:false);
    if(authUser){
      alert(123+authUser ? true:false);
      navigate('/dashboard');
    }
    else{
      navigate('/login');
    }
  },[authUser]);

  //console.log("RootNavigater",authUser,isAuthenticated);
 return(<>
 {/* {console.log(isAuthenticated)} */}
 {isAuthenticated?<ProtectedRoutes/>:<PublicRoutes />}
 </>)

  
};

export default RootNavigator;
