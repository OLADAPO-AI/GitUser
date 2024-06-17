import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalcontext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <GlobalContext.Provider value={{ toggle, setToggle }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext
