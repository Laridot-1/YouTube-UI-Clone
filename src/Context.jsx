import { createContext, useContext, useState } from "react"

const AppContext = createContext(null)

const useAppContext = () => useContext(AppContext)

const Context = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const val = {
    isDrawerOpen,
    setIsDrawerOpen,
  }
  return <AppContext.Provider value={val}>{children}</AppContext.Provider>
}

export { Context, useAppContext }
