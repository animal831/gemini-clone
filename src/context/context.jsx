import { createContext } from "react";

export const Context = createContext();

import React from 'react'

const ContextProvider = (props) => {

    const onSent = async (prompt)=>{
        await runChat(prompt)
    }

  
    const ContextValue = {

    }
  return (
    <ContextProvider value={ContextValue}>
        {props.children}
    </ContextProvider>
  )
}

export default ContextProvider
