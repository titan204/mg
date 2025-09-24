import { Children, createContext, useEffect, useState } from "react";



export const context = createContext()

export  function DefucultyBrovider({children}){
    const [def , setdef ] = useState (null);
    
    return(
        <context.Provider value={[def , setdef]}>
            {children}
        </context.Provider>
    )
}