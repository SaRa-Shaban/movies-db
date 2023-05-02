import { createContext } from "react";
import  { useState , useEffect } from 'react'
import  jwtDecode  from 'jwt-decode';
import { Navigate } from 'react-router-dom';


export let AuthContext = createContext(0);


export default function AuthContextProvider(props) {
    
    const [userData, setUserData] = useState(null)

    // get data from lcal storage  2 call jwtDecode method and take token from local to decode 
    let saveUserData = () => {
      // call saveUserData in login
      let encodedToken = localStorage.getItem('token');
      let decodedToken = jwtDecode(encodedToken);
      // console.log(decodedToken);
      setUserData(decodedToken)
    }
  
    let logout = () => {
      localStorage.removeItem('token');
      setUserData(null);
      return <Navigate to='/login' />
    }
  
    // handle refresh if u have toke call saveuserdata which will take data fropm local And decode
    useEffect(() => {
      if (localStorage.getItem('token')) {
        saveUserData();
      }
    }, [])


    // retun nameof context.provider
    return <AuthContext.Provider value={{userData , saveUserData , logout}}>
        {props.children}
    </AuthContext.Provider>
}