import React from "react";
import UserContextApi from "./UserContextApi";

const ContextProvider = ({children}) => {
  const [user, setuser] = React.useState([])
    return(
      <UserContextApi.Provider value={{user,setuser}}>
      {children}
      </UserContextApi.Provider>
    )
}

export default ContextProvider;