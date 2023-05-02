import { createContext } from "react";
import  { useState , useEffect } from 'react'



export let MediaContext = createContext(0);

export default function MediaContextProvider(props) {
    
    let [counter, setCount] = useState(0)
    
   let decrement = ()=>{
      setCount(counter +=1)
   }


    // retun nameof context.provider
    return <MediaContext.Provider value={{counter , decrement}}>
        {props.children}
    </MediaContext.Provider>
}