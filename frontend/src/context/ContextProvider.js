import React, { createContext, useContext, useEffect, useState } from 'react'

const CustomContext= createContext();

const ContextProvider= ({children})=>{
    const [user,setUser]= useState(undefined);
    useEffect(()=>{
        // setUser("klmlm")
    },[])
    return(
        <CustomContext.Provider
            value={{
                user,
                setUser
            }}   
        >
            {children}
        </CustomContext.Provider>
    )
}

export const CustomState = () => {
    return useContext(CustomContext);
};

export default ContextProvider;
